/* Web Design and Management Project Guide — application script.
   Plain JavaScript, no libraries, works from file:// and GitHub Pages.
   All course content lives in /data; this file only renders it. */
(function () {
  'use strict';
  var G = window.GUIDE || {};
  var MODULES = G.modules || [];
  var LESSONS = [];          // flat, in course order
  var LESSON = {};           // id -> lesson
  MODULES.forEach(function (m, mi) {
    m.lessons.forEach(function (l, li) {
      l.module = m; l.mIndex = mi; l.lIndex = li; l.order = LESSONS.length;
      LESSONS.push(l); LESSON[l.id] = l;
    });
  });
  var ASSET = {}; (G.assets || []).forEach(function (a) { ASSET[a.id] = a; });
  var CONTENT = {}; (G.content || []).forEach(function (c) { CONTENT[c.id] = c; });
  var TS = {}; (G.troubleshooting || []).forEach(function (t) { TS[t.id] = t; });

  /* ---------------- Storage (progress stays in this browser only) ---------------- */
  var KEY = 'mkguide.v1';
  var state = { done: {}, checks: {}, open: {}, final: {} };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || 'null'); if (saved) state = Object.assign(state, saved); } catch (e) { /* storage blocked: progress works for this visit only */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } }

  /* ---------------- Helpers ---------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var main = $('#main');
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function lessonNum(l) { return pad(l.mIndex + 1) + '.' + (l.lIndex + 1); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function assetHref(a) { return a.url || a.file || ''; }

  // Inline markup: **bold**, `code`, [text](url), {{lesson:id|label}}, {{ts:id|label}}, {{asset:id}}, {{content:id}}, {{hex:#fff}}, {{copy:value}}, {{kbd:Ctrl}}
  function md(s) {
    if (s == null) return '';
    var tokens = [];
    var t = String(s).replace(/\{\{(\w+):([^}|]*)(?:\|([^}]*))?\}\}/g, function (m, kind, val, label) {
      tokens.push(token(kind, val.trim(), label)); return '\u0000' + (tokens.length - 1) + '\u0000';
    });
    t = t.replace(/`([^`]+)`/g, function (m, c) { tokens.push('<code>' + esc(c) + '</code>'); return '\u0000' + (tokens.length - 1) + '\u0000'; });
    t = esc(t);
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+|#[^)\s]*)\)/g, function (m, label, url) {
      var ext = /^https?:/.test(url);
      return '<a href="' + url + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + label + (ext ? '<span class="sr"> (opens in a new tab)</span>' : '') + '</a>';
    });
    return t.replace(/\u0000(\d+)\u0000/g, function (m, i) { return tokens[+i]; });
  }
  function token(kind, val, label) {
    if (kind === 'lesson') { var l = LESSON[val]; return l ? '<a href="#/l/' + l.id + '">' + esc(label || ('Lesson ' + lessonNum(l) + ' — ' + l.title)) + '</a>' : '<span class="pill pill--pending">missing lesson ' + esc(val) + '</span>'; }
    if (kind === 'ts') { var t = TS[val]; return t ? '<a href="#/troubleshooting/' + t.id + '">' + esc(label || t.title) + '</a>' : esc(label || val); }
    if (kind === 'asset') { var a = ASSET[val]; return a ? '<a href="#/assets/' + a.id + '"><strong>' + esc(label || a.name) + '</strong></a>' : '<span class="pill pill--pending">asset ' + esc(val) + '</span>'; }
    if (kind === 'content') { var c = CONTENT[val]; return c ? '<a href="#/content/' + slug(c.page) + '">' + esc(label || c.label) + '</a>' : esc(val); }
    if (kind === 'hex') return '<span class="chipcopy"><span class="swatch" style="background:' + esc(val) + '"></span>' + esc(val) + '<button type="button" data-copy="' + esc(val) + '" aria-label="Copy ' + esc(val) + '">Copy</button></span>';
    if (kind === 'copy') return '<span class="chipcopy">' + esc(val) + '<button type="button" data-copy="' + esc(val) + '" aria-label="Copy ' + esc(val) + '">Copy</button></span>';
    if (kind === 'kbd') return '<kbd>' + esc(val) + '</kbd>';
    if (kind === 'page') return '<a href="#/l/' + val + '">' + esc(label) + '</a>';
    return esc(val);
  }
  function plain(s) { return String(s || '').replace(/\{\{\w+:([^}|]*)(?:\|([^}]*))?\}\}/g, function (m, v, l) { return l || v; }).replace(/[*`]/g, ''); }

  /* ---------------- Progress ---------------- */
  function isDone(id) { return !!state.done[id]; }
  function modDone(m) { return m.lessons.filter(function (l) { return isDone(l.id); }).length; }
  function totals() {
    var d = LESSONS.filter(function (l) { return isDone(l.id); }).length;
    var md2 = MODULES.filter(function (m) { return modDone(m) === m.lessons.length; }).length;
    return { done: d, total: LESSONS.length, pct: LESSONS.length ? Math.round(d / LESSONS.length * 100) : 0, mods: md2 };
  }
  function updateProgress() {
    var t = totals();
    var meter = $('#topMeter'); meter.setAttribute('aria-valuenow', t.pct); meter.firstElementChild.style.width = t.pct + '%';
    $('#topPct').textContent = t.pct + '%';
    $('#sideStats').innerHTML = '<div class="stat"><b>' + t.pct + '%</b><span>course</span></div><div class="stat"><b>' + t.done + '/' + t.total + '</b><span>lessons</span></div><div class="stat"><b>' + t.mods + '/' + MODULES.length + '</b><span>modules</span></div>';
    MODULES.forEach(function (m) {
      var el = document.getElementById('mod-' + m.id); if (!el) return;
      var n = modDone(m);
      el.classList.toggle('is-done', n === m.lessons.length);
      el.querySelector('.mod__count').textContent = n + '/' + m.lessons.length;
      m.lessons.forEach(function (l) { var a = document.getElementById('nav-' + l.id); if (a) a.classList.toggle('is-complete', isDone(l.id)); });
    });
  }

  /* ---------------- Sidebar ---------------- */
  function buildNav() {
    var html = MODULES.map(function (m, mi) {
      var open = state.open[m.id];
      return '<div class="mod" id="mod-' + m.id + '"><button type="button" class="mod__btn" aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="ml-' + m.id + '" data-mod="' + m.id + '">' +
        '<span class="mod__num">' + pad(mi + 1) + '</span><span class="mod__title">' + esc(m.title) + '</span><span class="mod__count"></span></button>' +
        '<ul class="mod__lessons" id="ml-' + m.id + '"' + (open ? '' : ' hidden') + '>' +
        m.lessons.map(function (l) { return '<li><a href="#/l/' + l.id + '" id="nav-' + l.id + '"><span class="tick" aria-hidden="true"></span><span>' + lessonNum(l) + ' ' + esc(l.title) + '<span class="sr" data-sr="' + l.id + '"></span></span></a></li>'; }).join('') +
        '</ul></div>';
    }).join('');
    $('#moduleNav').innerHTML = html;
  }
  function setModOpen(id, open) {
    state.open[id] = open; save();
    var btn = document.querySelector('[data-mod="' + id + '"]'); if (!btn) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.getElementById('ml-' + id).hidden = !open;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-mod]');
    if (b) { setModOpen(b.dataset.mod, b.getAttribute('aria-expanded') !== 'true'); }
  });
  $('#expandAll').onclick = function () { MODULES.forEach(function (m) { setModOpen(m.id, true); }); };
  $('#collapseAll').onclick = function () { MODULES.forEach(function (m) { setModOpen(m.id, false); }); };
  $('#resetBtn').onclick = function () {
    if (!confirm('Reset ALL progress?\n\nThis clears every completed lesson, every ticked checklist item and your final self-assessment in this browser. It cannot be undone.')) return;
    if (!confirm('Are you sure? Type-free last check: press OK to erase your progress.')) return;
    state = { done: {}, checks: {}, open: {}, final: {} }; save(); buildNav(); route(); toast('Progress reset');
  };
  function markCurrent(hash) {
    document.querySelectorAll('.is-current').forEach(function (a) { a.classList.remove('is-current'); a.removeAttribute('aria-current'); });
    var a = document.querySelector('.sidebar a[href="' + hash + '"]');
    if (a) { a.classList.add('is-current'); a.setAttribute('aria-current', 'page'); }
  }

  // Mobile drawer
  var sidebar = $('#sidebar'), scrim = $('#scrim'), toggle = $('#menuToggle');
  function drawer(open) {
    sidebar.classList.toggle('is-open', open); scrim.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close course navigation' : 'Open course navigation');
    if (open) { var cur = sidebar.querySelector('.is-current') || sidebar.querySelector('a'); if (cur) cur.focus(); }
  }
  toggle.onclick = function () { drawer(!sidebar.classList.contains('is-open')); };
  scrim.onclick = function () { drawer(false); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sidebar.classList.contains('is-open')) { drawer(false); toggle.focus(); } });
  sidebar.addEventListener('click', function (e) { if (e.target.closest('a') && window.matchMedia('(max-width: 900px)').matches) drawer(false); });

  /* ---------------- Block renderers ---------------- */
  function steps(list) {
    return '<ol class="steps">' + list.map(function (s) {
      if (Array.isArray(s)) return '<li><p>' + md(s[0]) + '</p><ul class="sub">' + s[1].map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></li>';
      return '<li><p>' + md(s) + '</p></li>';
    }).join('') + '</ol>';
  }
  function table(t) {
    return '<div class="table-wrap"><table><thead><tr>' + t.head.map(function (h) { return '<th scope="col">' + md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function copyBox(label, text, code) {
    return '<div class="copy"><div class="copy__head"><span class="copy__label">' + esc(label) + '</span><button type="button" class="btn-copy" data-copy="' + esc(text) + '">Copy</button></div><div class="copy__body' + (code ? ' is-code' : '') + '">' + esc(text) + '</div></div>';
  }
  function contentBox(id) {
    var c = CONTENT[id];
    if (!c) return '<p class="callout callout--danger">Content item “' + esc(id) + '” is missing from data/content.js.</p>';
    return copyBox(c.label, c.text, c.code);
  }
  function assetCard(a, compact) {
    var href = assetHref(a);
    var dark = /reversed/.test(a.id);
    var prev = href ? '<img src="' + esc(href) + '" alt="' + esc(a.alt || a.name) + '" loading="lazy" decoding="async" width="' + (a.width || 400) + '" height="' + (a.height || 300) + '">' : '<span>Preview appears when the instructor adds this file</span>';
    var uses = (a.uses || []).map(function (u) { return '<li>' + esc(u.page) + ' — ' + esc(u.section) + (u.lesson && LESSON[u.lesson] ? ' · ' + token('lesson', u.lesson, 'Lesson ' + lessonNum(LESSON[u.lesson])) : '') + '</li>'; }).join('');
    return '<article class="asset" id="asset-' + a.id + '"><div class="asset__prev' + (a.group === 'logos' ? ' is-logo' : '') + (dark ? ' is-dark' : '') + '">' + prev + '</div><div class="asset__body">' +
      '<h3>' + esc(a.name) + '</h3>' +
      (href ? '<span><span class="pill pill--ok">Available</span> <span class="pill">' + esc(a.format) + '</span></span>' : '<span><span class="pill pill--pending">Pending — link not supplied yet</span></span>') +
      '<dl><dt>File</dt><dd><code>' + esc(a.filename || '—') + '</code></dd>' +
      (a.width ? '<dt>Size</dt><dd>' + a.width + ' × ' + a.height + ' px · ' + esc(a.ratio) + (a.kb ? ' · ' + a.kb + ' KB' : '') + '</dd>' : '') +
      '<dt>Display</dt><dd>' + esc(a.display || '—') + '</dd>' +
      (a.alt ? '<dt>Alt text</dt><dd>' + esc(a.alt) + '</dd>' : '<dt>Alt text</dt><dd>Leave empty (decorative background)</dd>') +
      '</dl>' + (!compact && uses ? '<div><strong>Used on</strong><ul class="plain">' + uses + '</ul></div>' : (!compact && !(a.uses || []).length ? '<p><em>Not used in the reference design — optional.</em></p>' : '')) +
      '<div class="asset__actions">' + (href ? '<a class="btn btn--sm" href="' + esc(href) + '" download="' + esc(a.filename || '') + '">Download image</a>' : '<span class="btn btn--sm" aria-disabled="true">No download yet</span>') +
      (a.alt ? '<button type="button" class="btn-copy" data-copy="' + esc(a.alt) + '">Copy alt text</button>' : '') + '</div></div></article>';
  }
  function shot(b) {
    var file = 'screenshots/' + b.shot;
    return '<figure class="shot"><img src="' + esc(file) + '" alt="' + esc(b.alt || b.caption) + '" loading="lazy" onerror="this.outerHTML=\'<div class=&quot;shot-ph&quot; role=&quot;img&quot; aria-label=&quot;Screenshot not added yet: ' + esc(b.caption).replace(/'/g, '&#39;') + '&quot;><b>Screenshot to be added</b>' + esc(b.caption).replace(/'/g, '&#39;') + '<br><code>' + esc(file) + '</code></div>\'">' +
      '<figcaption>' + md(b.caption) + '</figcaption></figure>';
  }
  /* Visual demonstration image from assets/vs-demo (takes priority over a drawn diagram or screenshot placeholder). */
  function demoImg(b) {
    var file = encodeURI('assets/vs-demo/' + b.img);
    return '<figure class="shot demo"><a href="' + esc(file) + '" target="_blank" rel="noopener" title="Open full size in a new tab"><img src="' + esc(file) + '" alt="' + esc(b.alt || b.caption) + '" loading="lazy" decoding="async"></a>' +
      (b.caption ? '<figcaption>' + md(b.caption) + ' <span class="demo__hint">Click the image to open it full size.</span></figcaption>' : '') + '</figure>';
  }
  function block(b) {
    if (typeof b === 'string') return '<p>' + md(b) + '</p>';
    if (b.img) return demoImg(b);
    if (b.steps) return '<div class="stepgroup">' + (b.h ? '<h3>' + md(b.h) + '</h3>' : '') + (b.note ? '<p>' + md(b.note) + '</p>' : '') + steps(b.steps) + '</div>';
    if (b.callout) return '<div class="callout callout--' + b.callout + '">' + (b.title ? '<strong>' + md(b.title) + '</strong>' : '') + (Array.isArray(b.text) ? b.text.map(function (p) { return '<p>' + md(p) + '</p>'; }).join('') : '<p>' + md(b.text) + '</p>') + '</div>';
    if (b.table) return (b.h ? '<h3>' + md(b.h) + '</h3>' : '') + table(b.table);
    if (b.h3) return '<h3>' + md(b.h3) + '</h3>';
    if (b.list) return (b.h ? '<h3>' + md(b.h) + '</h3>' : '') + '<ul class="plain">' + b.list.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
    if (b.content) return (b.h ? '<h3>' + md(b.h) + '</h3>' : '') + [].concat(b.content).map(contentBox).join('');
    if (b.copy) return copyBox(b.copy.label, b.copy.text, b.copy.code);
    if (b.assets) return (b.h ? '<h3>' + md(b.h) + '</h3>' : '') + '<div class="asset-grid">' + b.assets.map(function (id) { return ASSET[id] ? assetCard(ASSET[id], true) : '<p class="callout callout--danger">Asset “' + esc(id) + '” missing.</p>'; }).join('') + '</div>';
    if (b.diagram) return '<figure class="diagram">' + diagram(b.diagram) + (b.caption ? '<figcaption>' + md(b.caption) + '</figcaption>' : '') + '</figure>';
    if (b.shot) return shot(b);
    if (b.p) return '<p>' + md(b.p) + '</p>';
    if (b.html) return b.html;
    return '';
  }

  /* ---------------- Diagrams (labelled illustrations, not screenshots) ---------------- */
  function diagram(name) {
    var d = (G.diagrams || {})[name];
    if (!d) return '<p class="callout callout--danger">Diagram “' + esc(name) + '” missing.</p>';
    if (typeof d === 'function') d = d(G);
    var W = d.w || 800, H = d.h || 400;
    var out = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(d.title) + '"><title>' + esc(d.title) + '</title>';
    out += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="' + (d.bg || '#fbfaf7') + '"/>';
    (d.boxes || []).forEach(function (b) {
      var fill = b.fill || '#ffffff', stroke = b.stroke || '#b9b5ab', tc = b.dark ? '#fdf9f2' : (b.tc || '#1f2421');
      if (b.dark) { fill = b.fill || '#0e1e16'; stroke = b.stroke || '#0e1e16'; }
      if (b.type === 'line') { out += '<line x1="' + b.x + '" y1="' + b.y + '" x2="' + b.x2 + '" y2="' + b.y2 + '" stroke="' + (b.stroke || '#8a6510') + '" stroke-width="' + (b.sw || 2) + '"' + (b.arrow ? ' marker-end="url(#arr)"' : '') + '/>'; return; }
      if (b.type === 'badge') { out += '<circle cx="' + b.x + '" cy="' + b.y + '" r="13" fill="#c0392b"/><text x="' + b.x + '" y="' + (b.y + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">' + esc(b.label) + '</text>'; return; }
      if (b.type === 'text') { out += '<text x="' + b.x + '" y="' + b.y + '" font-size="' + (b.fs || 13) + '" fill="' + (b.tc || '#59605b') + '"' + (b.anchor ? ' text-anchor="' + b.anchor + '"' : '') + (b.bold ? ' font-weight="700"' : '') + '>' + esc(b.label) + '</text>'; return; }
      out += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" rx="' + (b.r == null ? 6 : b.r) + '" fill="' + fill + '" stroke="' + stroke + '"' + (b.dash ? ' stroke-dasharray="6 4"' : '') + ' stroke-width="' + (b.sw || 1.5) + '"/>';
      if (b.label) {
        var lines = String(b.label).split('\n'), fs = b.fs || 13, lh = fs + 4;
        var cx = b.align === 'left' ? b.x + 10 : b.x + b.w / 2;
        var cy = b.valign === 'top' ? b.y + fs + 8 : b.y + b.h / 2 - (lines.length - 1) * lh / 2 + fs / 3;
        lines.forEach(function (ln, i) {
          out += '<text x="' + cx + '" y="' + (cy + i * lh) + '" font-size="' + fs + '" fill="' + tc + '"' + (b.align === 'left' ? '' : ' text-anchor="middle"') + (i === 0 && b.bold !== false ? ' font-weight="600"' : '') + '>' + esc(ln) + '</text>';
        });
      }
    });
    out += '<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8a6510"/></marker></defs></svg>';
    return out;
  }

  /* ---------------- Views ---------------- */
  function view(html, title) {
    main.innerHTML = '<div class="page">' + html + '</div>';
    document.title = (title ? title + ' · ' : '') + 'Web Design and Management Project Guide';
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  function homeView() {
    var t = totals();
    var next = LESSONS.find(function (l) { return !isDone(l.id); }) || LESSONS[LESSONS.length - 1];
    var mins = LESSONS.reduce(function (s, l) { return s + (parseInt(l.time, 10) || 0); }, 0);
    var html = '<section class="hero"><div><p class="kicker">Final project · Step-by-step course</p><h1>Web Design and <em>Management</em> Project Guide</h1>' +
      '<p class="hero__sub">Build the Mesurado Kitchen &amp; Palm Bar Website</p>' +
      '<p>This guide takes you, step by step, from an empty laptop to a finished WordPress website that matches the Mesurado reference design — and then shows you how to keep it secure, findable and healthy. Every tool is free. Follow the lessons in order, tick the checklists, and you will not need to guess.</p>' +
      '<div class="btn-row"><a class="btn" href="#/l/' + next.id + '">' + (t.done ? 'Continue: ' + esc(next.title) : 'Start the course') + ' →</a><a class="btn btn--ghost" href="' + esc(G.project.referenceUrl) + '" target="_blank" rel="noopener">Open the reference website<span class="sr"> (opens in a new tab)</span></a></div></div>' +
      '<div class="hero__stats"><div><b>' + MODULES.length + '</b><span>modules</span></div><div><b>' + LESSONS.length + '</b><span>step-by-step lessons</span></div><div><b>' + Math.round(mins / 60) + ' h</b><span>estimated build time</span></div><div><b>$0</b><span>cost — free tools only</span></div></div></section>';
    html += '<div class="progress-card"><div class="ring" style="--p:' + t.pct + '" role="img" aria-label="' + t.pct + '% of the course complete"><b>' + t.pct + '%</b></div><div><h3>Your progress</h3><p>' + t.done + ' of ' + t.total + ' lessons complete, ' + t.mods + ' of ' + MODULES.length + ' modules finished. Progress is saved in <strong>this browser on this computer only</strong>; it does not move to other devices.</p>' +
      '<div class="btn-row" style="margin-top:12px"><a class="btn btn--dark btn--sm" href="#/l/' + next.id + '">' + (t.done ? 'Resume Lesson ' + lessonNum(next) : 'Begin Lesson 01.1') + '</a></div></div></div>';
    html += '<div class="section-head"><h2>Course modules</h2><p>Work through them in order — each builds on the last.</p></div>';
    html += '<div class="modgrid">' + MODULES.map(function (m, i) {
      var n = modDone(m), p = Math.round(n / m.lessons.length * 100), done = n === m.lessons.length;
      var badge = done ? 'Complete' : (m.isNew && !n ? 'New' : (n ? 'In progress' : m.lessons.length + ' lessons'));
      return '<a class="modcard' + (done ? ' is-done' : '') + (m.isNew ? ' is-new' : '') + '" href="#/l/' + m.lessons[0].id + '"><span class="modcard__top"><span class="modcard__num">' + pad(i + 1) + '</span><span class="modcard__badge">' + badge + '</span></span><strong>' + esc(m.title) + '</strong><small>' + esc(m.summary) + '</small><div class="meter" aria-hidden="true"><span style="width:' + p + '%"></span></div><span class="modcard__foot"><span>' + n + ' of ' + m.lessons.length + ' lessons</span><span>' + p + '%</span></span></a>';
    }).join('') + '</div>';
    html += '<div class="section-head"><h2>Course resources</h2><p>Reference material you will use in every module.</p></div><div class="modgrid">' +
      res('#/blueprint', '▦', 'Website blueprint', 'Every page, section, colour and feature of the reference site, mapped to the lesson that builds it.') +
      res('#/assets', '◧', 'Project Asset Library', (G.assets || []).length + ' logos and photos with download buttons, filenames and alt text.') +
      res('#/content', '¶', 'Project Content Library', 'Every heading, paragraph, button label and menu item — ready to copy.') +
      res('#/troubleshooting', '⚑', 'Troubleshooting', (G.troubleshooting || []).length + ' common problems with step-by-step fixes.') +
      res('#/rubric', '✓', 'Rubric & final checklist', 'How your project is assessed, plus the self-check you complete before submitting.') + '</div>';
    view(html, 'Course overview');
    function res(h, ic, t2, d) { return '<a class="modcard rescard" href="' + h + '"><span class="rescard__icon" aria-hidden="true">' + ic + '</span><div><strong>' + esc(t2) + '</strong><small>' + d + '</small></div></a>'; }
  }

  function lessonHTML(l, forPrint) {
    var m = l.module, idx = l.lIndex;
    var checks = state.checks[l.id] || [];
    var h = '';
    h += '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Course</a><span aria-hidden="true">/</span><span>Module ' + pad(l.mIndex + 1) + ': ' + esc(m.title) + '</span><span aria-hidden="true">/</span><span aria-current="page">Lesson ' + lessonNum(l) + '</span></nav>';
    h += '<header class="lesson-head' + (forPrint ? ' print-break' : '') + '"><p class="kicker">Module ' + pad(l.mIndex + 1) + ' · Lesson ' + (idx + 1) + ' of ' + m.lessons.length + '</p><h1>' + esc(l.title) + '</h1>' +
      '<div class="meta"><span>⏱ About ' + esc(l.time) + '</span>' + (isDone(l.id) ? '<span class="pill pill--ok">Completed</span>' : '') + (l.tools ? '<span>Uses: ' + esc(l.tools) + '</span>' : '') + '</div>' +
      (forPrint ? '' : '<div class="modprog" aria-label="Position in this module"><span>Module progress</span><span class="modprog__dots">' + m.lessons.map(function (x) {
        return '<a href="#/l/' + x.id + '" class="' + (x.id === l.id ? 'here' : (isDone(x.id) ? 'done' : '')) + '" title="' + esc(lessonNum(x) + ' ' + x.title) + '" aria-label="Lesson ' + lessonNum(x) + ': ' + esc(x.title) + (isDone(x.id) ? ' (complete)' : '') + (x.id === l.id ? ' (you are here)' : '') + '"></a>';
      }).join('') + '</span><span>' + modDone(m) + ' of ' + m.lessons.length + ' done</span></div>') + '</header>';

    h += '<div class="objective section"><div class="card"><h2>Learning objective</h2><p>' + md(l.objective) + '</p></div><div class="card"><h2>What you will build</h2><p>' + md(l.build) + '</p></div></div>';
    if (l.before && l.before.length) h += '<section class="section"><h2>Before you begin</h2><ul class="plain">' + l.before.map(function (b) { return '<li>' + md(b) + '</li>'; }).join('') + '</ul></section>';
    h += '<section class="section"><h2>Step-by-step instructions</h2>' + (l.body || []).map(block).join('') + '</section>';
    if (l.visual && l.visual.length) h += '<section class="section"><h2>Visual demonstration</h2>' + l.visual.map(block).join('') + '</section>';
    var r = l.resources || {};
    if ((r.assets && r.assets.length) || (r.content && r.content.length) || (r.values && r.values.length) || (r.links && r.links.length)) {
      h += '<section class="section"><h2>Required resources</h2>';
      if (r.values && r.values.length) h += table({ head: ['Setting', 'Value'], rows: r.values });
      if (r.links && r.links.length) h += '<ul class="plain">' + r.links.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
      if (r.assets && r.assets.length) h += '<p>Download these from the {{asset:x}}'.replace('{{asset:x}}', '<a href="#/assets">Project Asset Library</a>') + ' (or with the buttons below):</p><div class="asset-grid">' + r.assets.map(function (id) { return ASSET[id] ? assetCard(ASSET[id], true) : ''; }).join('') + '</div>';
      if (r.content && r.content.length) h += '<h3>Copy-ready text</h3>' + r.content.map(contentBox).join('');
      h += '</section>';
    }
    if (l.expected) h += '<section class="section"><h2>Expected result</h2><div class="callout callout--tip"><p>' + md(l.expected) + '</p></div></section>';
    var tsl = (l.troubleshoot || []);
    if (tsl.length) {
      h += '<section class="section"><h2>Troubleshooting</h2>' + tsl.map(function (t) {
        if (typeof t === 'string') { var x = TS[t]; return x ? tsItem(x, false) : ''; }
        return '<details class="ts"><summary>' + md(t.q) + '</summary><div class="ts__body"><p>' + md(t.a) + '</p></div></details>';
      }).join('') + '<p><a href="#/troubleshooting">Open the full troubleshooting directory →</a></p></section>';
    }
    h += '<section class="section"><h2>Completion checklist</h2><p>Tick each item only after you have checked it on your own site.</p><ul class="checklist" data-lesson="' + l.id + '">' +
      (l.checklist || []).map(function (c, i) { return '<li><label><input type="checkbox" data-ci="' + i + '"' + (checks[i] ? ' checked' : '') + '><span>' + md(c) + '</span></label></li>'; }).join('') + '</ul>' +
      '<div class="complete-bar"><button type="button" class="btn' + (isDone(l.id) ? ' btn--ghost' : '') + '" data-complete="' + l.id + '">' + (isDone(l.id) ? '✓ Completed — mark as not complete' : 'Mark lesson complete') + '</button><span class="hint" id="hint-' + l.id + '"></span>' +
      '<a class="link-btn no-print" href="#/print/' + m.id + '">Print this whole module</a></div></section>';
    if (!forPrint) {
      var prev = LESSONS[l.order - 1], next = LESSONS[l.order + 1];
      h += '<nav class="pager" aria-label="Lesson navigation">' + (prev ? '<a href="#/l/' + prev.id + '"><small>← Previous lesson</small><strong>' + lessonNum(prev) + ' ' + esc(prev.title) + '</strong></a>' : '') +
        (next ? '<a class="next" href="#/l/' + next.id + '"><small>Next lesson →</small><strong>' + lessonNum(next) + ' ' + esc(next.title) + '</strong></a>' : '<a class="next" href="#/rubric"><small>Finished the lessons →</small><strong>Rubric &amp; final checklist</strong></a>') + '</nav>';
    }
    return h;
  }
  function lessonView(id) {
    var l = LESSON[id]; if (!l) return notFound();
    if (!state.open[l.module.id]) setModOpen(l.module.id, true);
    view('<p class="print-only">Web Design and Management Project Guide — Build the Mesurado Kitchen &amp; Palm Bar Website</p>' + lessonHTML(l), lessonNum(l) + ' ' + l.title);
    hint(l);
  }
  function hint(l) {
    var el = document.getElementById('hint-' + l.id); if (!el) return;
    var c = state.checks[l.id] || [], n = (l.checklist || []).length, k = c.filter(Boolean).length;
    el.textContent = isDone(l.id) ? '' : (k === n && n ? 'All checks ticked — you can mark this lesson complete.' : k + ' of ' + n + ' checks ticked');
  }
  function printView(mid) {
    var m = MODULES.find(function (x) { return x.id === mid; }); if (!m) return notFound();
    view('<p class="no-print callout callout--info">This page shows every lesson in Module ' + pad(MODULES.indexOf(m) + 1) + ' so you can print it or save it as a PDF. Press <kbd>Ctrl</kbd> + <kbd>P</kbd>, then choose <strong>Save as PDF</strong> as the printer. <button type="button" class="btn btn--sm" onclick="window.print()">Print now</button></p>' +
      '<h1>Module ' + pad(MODULES.indexOf(m) + 1) + ': ' + esc(m.title) + '</h1><p>' + esc(m.summary) + '</p>' + m.lessons.map(function (l) { return lessonHTML(l, true); }).join(''), 'Print ' + m.title);
    main.querySelectorAll('details').forEach(function (d) { d.open = true; });
  }

  function tsItem(t, open) {
    return '<details class="ts" id="ts-' + t.id + '"' + (open ? ' open' : '') + '><summary>' + esc(t.title) + '<span>' + esc(t.area) + '</span></summary><div class="ts__body">' +
      '<h4>What you see</h4><p>' + md(t.problem) + '</p><h4>Possible cause</h4><p>' + md(t.cause) + '</p><h4>How to fix it</h4>' + steps(t.fix) +
      '<h4>Expected result</h4><p>' + md(t.result) + '</p><h4>If that did not work</h4><p>' + md(t.ifnot) + '</p>' +
      (t.lessons && t.lessons.length ? '<p><strong>Related lessons:</strong> ' + t.lessons.map(function (x) { return token('lesson', x); }).join(', ') + '</p>' : '') + '</div></details>';
  }
  function tsView(id) {
    var areas = [];
    (G.troubleshooting || []).forEach(function (t) { if (areas.indexOf(t.area) < 0) areas.push(t.area); });
    var html = '<p class="kicker">Student support</p><h1>Troubleshooting directory</h1><p>Find your problem below, open it, and follow the fix in order. Use the filter buttons or the search box at the top of the page.</p>' +
      '<div class="filters" role="group" aria-label="Filter problems by area"><button type="button" aria-pressed="true" data-tsf="">All</button>' + areas.map(function (a) { return '<button type="button" aria-pressed="false" data-tsf="' + esc(a) + '">' + esc(a) + '</button>'; }).join('') + '</div><div id="tsList">' +
      (G.troubleshooting || []).map(function (t) { return tsItem(t, t.id === id); }).join('') + '</div>';
    view(html, 'Troubleshooting');
    if (id) { var el = document.getElementById('ts-' + id); if (el) { el.classList.add('flash'); el.scrollIntoView(); } }
  }
  document.addEventListener('click', function (e) {
    var f = e.target.closest('[data-tsf]'); if (!f) return;
    document.querySelectorAll('[data-tsf]').forEach(function (b) { b.setAttribute('aria-pressed', b === f ? 'true' : 'false'); });
    var area = f.dataset.tsf;
    (G.troubleshooting || []).forEach(function (t) { var el = document.getElementById('ts-' + t.id); if (el) el.hidden = !!area && t.area !== area; });
  });

  function assetsView(id) {
    var list = G.assets || [];
    var avail = list.filter(function (a) { return assetHref(a); }).length;
    var html = '<p class="kicker">Project resources</p><h1>Project Asset Library</h1>' +
      '<p>These are the instructor-provided logos and photographs for the Mesurado website. Use these files — do not search the internet for replacements. Each card tells you the filename, where the image goes and which lesson uses it.</p>' +
      '<div class="callout callout--info"><strong>' + avail + ' of ' + list.length + ' assets available.</strong><p>Download everything at once with the asset pack (one ZIP file, about 8 MB), or download single images from the cards. ' +
      'Lesson {{lesson:m06-l01}} shows you how to save and organise them.</p></div>'.replace('{{lesson:m06-l01}}', token('lesson', 'm06-l01')) +
      '<div class="btn-row no-print"><a class="btn" href="assets/mesurado-asset-pack.zip" download>Download the complete asset pack (.zip)</a></div>' +
      '<div class="filters no-print" role="group" aria-label="Filter assets"><button type="button" aria-pressed="true" data-af="">All</button>' + (G.assetGroups || []).map(function (g) { return '<button type="button" aria-pressed="false" data-af="' + g[0] + '">' + esc(g[1]) + '</button>'; }).join('') + '</div>';
    (G.assetGroups || []).forEach(function (g) {
      var items = list.filter(function (a) { return a.group === g[0]; });
      if (!items.length) return;
      html += '<section class="section" data-ag="' + g[0] + '"><h2>' + esc(g[1]) + ' <span class="pill">' + items.length + '</span></h2><div class="asset-grid">' + items.map(function (a) { return assetCard(a, false); }).join('') + '</div></section>';
    });
    html += '<section class="section"><h2>Supplemental resources (optional)</h2><p>You should not need any other images. If your instructor asks you to add something extra, only use free, properly licensed sites such as <a href="https://www.pexels.com/" target="_blank" rel="noopener">Pexels</a>, <a href="https://unsplash.com/" target="_blank" rel="noopener">Unsplash</a> or <a href="https://pixabay.com/" target="_blank" rel="noopener">Pixabay</a>, and keep them clearly separate from the project assets above.</p></section>';
    view(html, 'Asset Library');
    if (id) { var el = document.getElementById('asset-' + id); if (el) { el.scrollIntoView(); el.style.outline = '3px solid #e2c27a'; } }
  }
  document.addEventListener('click', function (e) {
    var f = e.target.closest('[data-af]'); if (!f) return;
    document.querySelectorAll('[data-af]').forEach(function (b) { b.setAttribute('aria-pressed', b === f ? 'true' : 'false'); });
    document.querySelectorAll('[data-ag]').forEach(function (s) { s.hidden = !!f.dataset.af && s.dataset.ag !== f.dataset.af; });
  });

  function contentView(pageSlug) {
    var pages = [];
    (G.content || []).forEach(function (c) { if (pages.indexOf(c.page) < 0) pages.push(c.page); });
    var html = '<p class="kicker">Project resources</p><h1>Project Content Library</h1><p>All the text for the Mesurado website, organised by page and section. Press <strong>Copy</strong>, then paste into WordPress with <kbd>Ctrl</kbd> + <kbd>V</kbd>. Text marked “sample” is example content written for this project by your instructor’s design — use it exactly as given.</p>' +
      '<nav aria-label="Pages in the content library" class="filters no-print">' + pages.map(function (p) { return '<a class="btn btn--ghost btn--sm" href="#/content/' + slug(p) + '">' + esc(p) + '</a>'; }).join('') + '</nav>';
    pages.forEach(function (p) {
      var items = (G.content || []).filter(function (c) { return c.page === p; });
      html += '<section class="section" id="c-' + slug(p) + '"><h2>' + esc(p) + '</h2>';
      var sec = null;
      items.forEach(function (c) {
        if (c.section !== sec) { sec = c.section; html += '<h3>' + esc(sec) + '</h3>'; }
        html += copyBox(c.label, c.text, c.code);
      });
      html += '</section>';
    });
    view(html, 'Content Library');
    if (pageSlug) { var el = document.getElementById('c-' + pageSlug); if (el) el.scrollIntoView(); }
  }

  function rubricView() {
    var R = G.rubric || { areas: [], final: [] };
    var html = '<p class="kicker">Assessment</p><h1>Rubric &amp; final self-assessment</h1><p>' + md(R.intro) + '</p>';
    html += table({ head: ['Assessment area', 'Weight', 'What earns full marks'], rows: R.areas.map(function (a) { return ['**' + a.name + '**', a.weight + '%', '<ul class="plain">' + a.criteria.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>']; }).concat([['**Total**', '**100%**', '']]) }).replace(/&lt;ul class=&quot;plain&quot;&gt;|&lt;\/?li&gt;|&lt;\/ul&gt;/g, function (m) { return m.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'); });
    html += '<h2>Final self-assessment checklist</h2><p>Complete every item before you submit. Your ticks are saved in this browser.</p>';
    R.final.forEach(function (g, gi) {
      html += '<h3>' + esc(g.group) + '</h3><ul class="checklist" data-final="1">' + g.items.map(function (it, i) { var k = gi + '-' + i; return '<li><label><input type="checkbox" data-fk="' + k + '"' + (state.final[k] ? ' checked' : '') + '><span>' + md(it) + '</span></label></li>'; }).join('') + '</ul>';
    });
    var total = R.final.reduce(function (s, g) { return s + g.items.length; }, 0);
    html += '<p class="callout callout--info" id="finalCount"></p>';
    view(html, 'Rubric');
    finalCount(total);
  }
  function finalCount(total) {
    var el = document.getElementById('finalCount'); if (!el) return;
    total = total || document.querySelectorAll('[data-fk]').length;
    var n = Object.keys(state.final).filter(function (k) { return state.final[k]; }).length;
    el.textContent = n + ' of ' + total + ' final checks ticked.' + (n === total ? ' You are ready to submit — follow Lesson 16.4.' : '');
  }

  function blueprintView() {
    var B = G.blueprint || {};
    var P = G.project;
    var html = '<p class="kicker">Phase 1 — Reference analysis</p><h1>Website implementation blueprint</h1><p>' + md(B.intro) + '</p>';
    html += '<h2>A. Page inventory</h2>' + table({ head: ['Page', 'Slug', 'Navigation', 'Built in'], rows: P.pages.map(function (p) { return ['**' + p.title + '**', '`/' + (p.slug === 'home' ? '' : p.slug + '/') + '`', p.nav, token('lesson', p.lesson, 'Lesson ' + (LESSON[p.lesson] ? lessonNum(LESSON[p.lesson]) : p.lesson))]; }) });
    html += '<h2>B. Section inventory</h2><p>Every page broken into its sections, in order from top to bottom.</p>';
    (B.sections || []).forEach(function (pg) {
      html += '<h3>' + esc(pg.page) + '</h3>' + table({ head: ['#', 'Section', 'Layout', 'Background', 'Content & images', 'Mobile'], rows: pg.rows.map(function (r, i) { return [String(i + 1)].concat(r); }) });
    });
    html += '<h2>C. Design system</h2><p>Values are exact, copied from the reference design system “Mesurado” (<code>tokens.css</code>).</p>';
    html += table({ head: ['Colour', 'HEX', 'Used for', 'Where it goes in Astra'], rows: P.colors.map(function (c) { return [c.name, '{{hex:' + c.hex + '}}', c.use, c.astra]; }) });
    html += '<p>Image overlay on heroes: {{hex:#0e1e16}} at <strong>62%</strong> opacity.</p>'.replace('{{hex:#0e1e16}}', token('hex', '#0e1e16'));
    html += table({ head: ['Text style', 'Desktop', 'Mobile', 'Line height'], rows: P.type.scale });
    html += '<p>Heading font: <strong>Playfair Display</strong>, weight 600. Body font: <strong>Inter</strong>, weight 400. Both are free Google Fonts.</p>';
    html += table({ head: ['Layout value', 'Setting'], rows: P.layout });
    html += table({ head: ['Button style', 'Look', 'Examples'], rows: P.buttons });
    html += '<h2>D. Functionality inventory</h2>' + table({ head: ['Feature', 'Where', 'Reference behaviour', 'Free WordPress method', 'Lesson'], rows: (B.features || []).map(function (f) { return [f[0], f[1], f[2], f[3], f[4].split(',').map(function (x) { return token('lesson', x.trim(), LESSON[x.trim()] ? lessonNum(LESSON[x.trim()]) : x); }).join(', ')]; }) });
    html += '<h2>E. WordPress implementation map</h2>' + table({ head: ['Component', 'Theme setting / block', 'Plugin', 'Lesson'], rows: (B.map || []).map(function (f) { return [f[0], f[1], f[2], f[3].split(',').map(function (x) { return token('lesson', x.trim(), LESSON[x.trim()] ? lessonNum(LESSON[x.trim()]) : x); }).join(', ')]; }) });
    html += '<h2>F. Tool selection — all free</h2>' + table({ head: ['Purpose', 'Tool', 'Why this one'], rows: B.tools || [] });
    html += '<h2>G. Known limitations of the free tools</h2><p>Where the reference does something the free tools cannot copy exactly, the course uses the closest free method. These differences are expected and are <strong>not</strong> marked down.</p>' + table({ head: ['Reference feature', 'What you will build instead', 'Why'], rows: B.limits || [] });
    html += '<h2>H. Coverage audit</h2><p>Each reference component and the lesson that teaches it. Every row must have a lesson.</p>' + table({ head: ['Page', 'Component', 'Covered in'], rows: (B.coverage || []).map(function (r) { return [r[0], r[1], r[2].split(',').map(function (x) { return token('lesson', x.trim(), LESSON[x.trim()] ? lessonNum(LESSON[x.trim()]) : x); }).join(', ')]; }) });
    view(html, 'Blueprint');
  }

  /* ---------------- Search ---------------- */
  var INDEX = null;
  function blockText(b) {
    if (!b) return '';
    if (typeof b === 'string') return b;
    var parts = [b.h, b.h3, b.note, b.title, b.p, b.caption];
    if (b.steps) b.steps.forEach(function (s) { parts.push(Array.isArray(s) ? s[0] + ' ' + s[1].join(' ') : s); });
    if (b.text) parts.push([].concat(b.text).join(' '));
    if (b.list) parts.push(b.list.join(' '));
    if (b.table) parts.push(b.table.head.join(' ') + ' ' + b.table.rows.map(function (r) { return r.join(' '); }).join(' '));
    return plain(parts.filter(Boolean).join(' '));
  }
  function buildIndex() {
    INDEX = [];
    LESSONS.forEach(function (l) {
      INDEX.push({ href: '#/l/' + l.id, title: 'Lesson ' + lessonNum(l) + ' — ' + l.title, kind: 'Lesson', head: (l.title + ' ' + (l.keywords || '')).toLowerCase(),
        text: plain([l.objective, l.build, (l.before || []).join(' '), (l.body || []).map(blockText).join(' '), (l.visual || []).map(blockText).join(' '), l.expected, (l.checklist || []).join(' '), (l.troubleshoot || []).map(function (t) { return typeof t === 'string' ? '' : t.q + ' ' + t.a; }).join(' ')].join(' ')) });
    });
    (G.troubleshooting || []).forEach(function (t) { INDEX.push({ href: '#/troubleshooting/' + t.id, title: t.title, kind: 'Troubleshooting · ' + t.area, head: t.title.toLowerCase(), text: plain([t.problem, t.cause, t.fix.join(' '), t.result, t.ifnot].join(' ')) }); });
    (G.content || []).forEach(function (c) { INDEX.push({ href: '#/content/' + slug(c.page), title: c.page + ' — ' + c.label, kind: 'Content library', head: (c.page + ' ' + c.label).toLowerCase(), text: c.text }); });
    (G.assets || []).forEach(function (a) { INDEX.push({ href: '#/assets/' + a.id, title: a.name, kind: 'Asset library', head: (a.name + ' ' + a.filename).toLowerCase(), text: a.alt + ' ' + (a.uses || []).map(function (u) { return u.page + ' ' + u.section; }).join(' ') }); });
    INDEX.forEach(function (x) { x.lower = x.text.toLowerCase(); });
  }
  function searchView(q) {
    if (!INDEX) buildIndex();
    q = (q || '').trim();
    $('#searchInput').value = q;
    var terms = q.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 1; });
    var res = !terms.length ? [] : INDEX.map(function (x) {
      var score = 0;
      for (var i = 0; i < terms.length; i++) {
        var inHead = x.head.indexOf(terms[i]) >= 0, inText = x.lower.indexOf(terms[i]) >= 0;
        if (!inHead && !inText) return null;
        score += (inHead ? 10 : 0) + (inText ? 1 : 0);
      }
      if (x.kind === 'Lesson') score += 2;
      return { x: x, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 60);
    var html = '<p class="kicker">Search</p><h1>Results for “' + esc(q) + '”</h1>';
    html += !terms.length ? '<p>Type at least two letters in the search box.</p>' : (res.length ? '<p>' + res.length + ' result' + (res.length === 1 ? '' : 's') + '.</p><ol class="search-results">' + res.map(function (r) {
      return '<li><a href="' + r.x.href + '"><strong>' + hl(esc(r.x.title), terms) + '</strong></a><small>' + esc(r.x.kind) + '</small><span>' + hl(esc(snippet(r.x.text, terms[0])), terms) + '</span></li>';
    }).join('') + '</ol>' : '<p>No results. Try a shorter word, for example <em>logo</em>, <em>menu</em>, <em>form</em> or <em>colour</em>. You can also browse the <a href="#/troubleshooting">troubleshooting directory</a>.</p>');
    view(html, 'Search');
  }
  function snippet(text, term) { var i = text.toLowerCase().indexOf(term); if (i < 0) return text.slice(0, 160) + '…'; var s = Math.max(0, i - 70); return (s ? '…' : '') + text.slice(s, i + 110) + '…'; }
  function hl(html, terms) { terms.forEach(function (t) { html = html.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); }); return html; }
  $('#searchForm').addEventListener('submit', function (e) { e.preventDefault(); location.hash = '#/search/' + encodeURIComponent($('#searchInput').value); });

  function notFound() { view('<h1>Page not found</h1><p>That lesson or page does not exist. <a href="#/">Go to the course overview</a>.</p>', 'Not found'); }

  /* ---------------- Interactions ---------------- */
  document.addEventListener('change', function (e) {
    var cb = e.target;
    if (cb.matches('[data-ci]')) {
      var id = cb.closest('[data-lesson]').dataset.lesson;
      var arr = state.checks[id] || []; arr[+cb.dataset.ci] = cb.checked; state.checks[id] = arr; save(); hint(LESSON[id]);
    } else if (cb.matches('[data-fk]')) { state.final[cb.dataset.fk] = cb.checked; save(); finalCount(); }
  });
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-complete]');
    if (c) {
      var id = c.dataset.complete; state.done[id] = !state.done[id]; save(); updateProgress();
      c.textContent = state.done[id] ? '✓ Completed — mark as not complete' : 'Mark lesson complete';
      c.classList.toggle('btn--ghost', !!state.done[id]); hint(LESSON[id]);
      if (state.done[id]) { var nx = LESSONS[LESSON[id].order + 1]; toast(nx ? 'Lesson complete! Next: ' + nx.title : 'Course complete — well done!'); }
      return;
    }
    var cp = e.target.closest('[data-copy]');
    if (cp) copyText(cp.getAttribute('data-copy'), cp);
  });
  function copyText(text, btn) {
    function ok() { if (btn.classList.contains('btn-copy')) { var o = btn.textContent; btn.textContent = 'Copied ✓'; btn.classList.add('copied'); setTimeout(function () { btn.textContent = o; btn.classList.remove('copied'); }, 1600); } toast('Copied to clipboard'); }
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : toast('Select the text and press Ctrl + C'); } catch (x) { toast('Select the text and press Ctrl + C'); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
  }
  var toastTimer;
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200); }
  $('#printBtn').onclick = function () { main.querySelectorAll('details').forEach(function (d) { d.open = true; }); window.print(); };

  /* ---------------- Router ---------------- */
  function route() {
    var h = location.hash || '#/';
    var parts = h.replace(/^#\/?/, '').split('/');
    var p0 = parts[0], p1 = decodeURIComponent(parts.slice(1).join('/'));
    if (!p0) homeView();
    else if (p0 === 'l') lessonView(p1);
    else if (p0 === 'assets') assetsView(p1);
    else if (p0 === 'content') contentView(p1);
    else if (p0 === 'troubleshooting') tsView(p1);
    else if (p0 === 'rubric') rubricView();
    else if (p0 === 'blueprint') blueprintView();
    else if (p0 === 'search') searchView(p1);
    else if (p0 === 'print') printView(p1);
    else notFound();
    markCurrent(p0 === 'l' ? '#/l/' + p1 : '#/' + (p0 || ''));
    updateProgress();
  }
  buildNav();
  window.addEventListener('hashchange', route);
  route();
})();
