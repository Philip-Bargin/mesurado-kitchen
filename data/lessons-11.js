/* Module 11 — the remaining pages. */
window.GUIDE = window.GUIDE || {};
GUIDE.modules = GUIDE.modules || [];
(function () {
var P = GUIDE.project;
function money(n) { return 'US$ ' + (n % 1 ? n.toFixed(2) : n); }
function heroSteps(page, asset, extra) {
  return { h: 'Page hero', steps: [
    'Open **Pages → All Pages → ' + page + '** in the editor.',
    'Click **+** → **Patterns** → **My patterns** → **MK Page Hero**. Rename the block `01 Hero`.',
    'Select the Cover block → toolbar **Replace** → choose {{asset:' + asset + '}}. Keep the overlay `#0e1e16` at 62 %.',
    'Replace the breadcrumb, eyebrow, H1 and intro with the copy box below. Link the breadcrumb words (Home → `/`, and the middle level if there is one).'
  ].concat(extra || []) };
}
function splitHeroSteps(page, asset) {
  return { h: 'Split hero', steps: [
    'Open **Pages → All Pages → ' + page + '** in the editor.',
    'Insert **MK Split Hero** (**+** → Patterns → My patterns). Rename it `01 Hero`.',
    'Replace the image with {{asset:' + asset + '}} (aspect ratio **4:5**).',
    'Fill the breadcrumb, eyebrow, H1, intro and the two buttons from the copy box below.'
  ] };
}
function ctaSteps(textId) {
  return { h: 'Reservation band', steps: [
    'At the bottom of the page, insert **MK Reservation Band**. Rename it `Reservation band`.',
    textId ? 'Change the texts and buttons to match the copy box below.' : 'Keep the default texts (they already match this page).',
    'Click **Save** and view the page from top to bottom. Compare with the reference.'
  ] };
}
function cards(ids) { return ids.map(function (id) { return P.menu.filter(function (m) { return m[0] === id; })[0]; }); }

var menuTable = { head: ['Tab', 'Dish', 'Price', 'Badge', 'Image'], rows: P.menu.map(function (m) {
  var cat = P.menuCats.filter(function (c) { return c[0] === m[1]; })[0][1];
  return [cat, '**' + m[2] + '**', money(m[3]), m[7] || '—', '{{asset:dish-' + m[0] + '}}'];
}) };

GUIDE.modules.push({ id: 'm11', title: 'Building the Remaining Pages', summary: 'Our Story, Philosophy, Team, Menu, Reservations, Order, Experiences, Journal, Events, Gallery, Contact and Legal.',
  lessons: [
  { id: 'm11-l01', title: 'Reusable page parts: page hero, split hero and reservation band', time: '50 min', keywords: 'page hero cover breadcrumb pattern split hero cta band reservation band',
    objective: 'Build three page parts that most inner pages share, and save them as patterns.',
    build: 'Patterns **MK Page Hero**, **MK Split Hero** and **MK Reservation Band**.',
    before: ['Module 10 complete.', 'You know how to create patterns ({{lesson:m07-l06}}).'],
    body: [
      { h: 'Pattern 1 — MK Page Hero (image with title)', note: 'Used on Philosophy, Team, Menu, Reservations, Order Online, Special Events, Gallery, Journal, Contact and Legal.', steps: [
        'Open **Pages → All Pages → Our Philosophy** (we build the pattern here and keep it as the real hero).',
        'Add a **Cover** block. Choose {{asset:page-hero-terrace-night}}.',
        'Toolbar **Align → Full width**. **Settings → Minimum height** `360` px.',
        '**Styles → Overlay**: colour `#0e1e16`, opacity `62`.',
        'In the toolbar, click the **Change content position** button and choose **bottom left**.',
        'Inside the Cover, delete the default paragraph. Add a **Group**; set its **Layout → Inner blocks use content width** ON, content width `1240px`; padding top `96px`, bottom `64px`, left/right `32px`; block spacing `12px`.',
        ['Inside that Group add, in order:', ['**Paragraph** for the breadcrumb, size 14 px, colour `#fdf9f2` — e.g. `Home / About / Our Philosophy`.', '**Paragraph** with class `mk-eyebrow on-dark` — e.g. `About Mesurado`.', '**Heading H1**, colour `#fdf9f2` — e.g. `Our philosophy`.', '**Paragraph** intro, size 18 px, colour `#fdf9f2`.']],
        'Select the Cover block → **⋮ → Create pattern** → name `MK Page Hero`, **Synced OFF** → Create.',
        'Click **Save**.'
      ] },
      { content: 'hero.our-philosophy' },
      { h: 'Pattern 2 — MK Split Hero (light, with photo)', note: 'Used on Our Story, Private Dining and Catering.', steps: [
        'Open **Our Story** in the editor.',
        'Insert **MK Split**. Select the outer Group: padding top `64px`, bottom `96px`.',
        'Move the image column to the right (select the image column → **Move right**). Set the image aspect ratio to **4:5**.',
        ['In the text column, from top to bottom:', ['Breadcrumb Paragraph (14 px, colour `#68665f`).', 'Eyebrow (class `mk-eyebrow`).', 'Change the H2 heading to **H1**.', 'Intro paragraph, size 18 px.', 'A **Buttons** block with two **large** buttons: primary and outline.']],
        'Select the outer Group → **Create pattern** → `MK Split Hero`, not synced.',
        'Fill it with the Our Story hero content now (see {{lesson:m11-l02}}) and click **Save**.'
      ] },
      { h: 'Pattern 3 — MK Reservation Band (centred, dark)', note: 'Used near the bottom of Story, Philosophy, Team, Menu, Events and Gallery.', steps: [
        'Still on **Our Story**, scroll to the bottom and insert **MK Dark Band**.',
        'Change its padding top and bottom to `64px` (a “compact” section).',
        'Select the eyebrow, heading and paragraph and set **Align text: center**. Select the Buttons block → **Justification: Center**.',
        'Below the buttons add a Paragraph `Prefer to call? +231 77 512 3480`, size 15 px, centred.',
        'Set the texts to the default band texts below. Button 1: `Reserve a Table` → `/reservations/` (gold, large). Button 2: `Explore Menu` → `/menu/` (ivory outline, large).',
        'Select the outer Group → **Create pattern** → `MK Reservation Band`, not synced.',
        'Click **Save**.'
      ] },
      { content: 'cta.default' }
    ],
    visual: [{ diagram: 'page-hero', caption: 'MK Page Hero: Cover block (image + 62 % overlay) with a 1240 px content group at the bottom left.' }, { diagram: 'cta-band', caption: 'MK Reservation Band: centred dark band with two buttons and a phone line.' }],
    resources: { assets: ['page-hero-terrace-night'], content: ['hero.our-philosophy', 'cta.default'], values: [['Hero minimum height', '360 px'], ['Overlay', '{{hex:#0e1e16}} 62 %'], ['Hero inner padding', '96 top · 64 bottom · 32 sides'], ['Band padding', '64 px top and bottom']] },
    expected: '**My patterns** now also lists MK Page Hero, MK Split Hero and MK Reservation Band. Our Philosophy has its hero; Our Story has a split hero and a band at the bottom.',
    troubleshoot: ['pattern-synced-by-mistake', 'cover-text-dark'],
    checklist: ['MK Page Hero saved (not synced).', 'MK Split Hero saved (not synced).', 'MK Reservation Band saved (not synced).', 'Hero text is ivory and readable on the overlay.'] },

  { id: 'm11-l02', title: 'Our Story page', time: '60 min', keywords: 'our story about split sections river kitchen palm bar cards',
    objective: 'Build the full Our Story page.',
    build: 'Split hero, three alternating image-and-text sections, two link cards and the reservation band.',
    before: ['Finish {{lesson:m11-l01}}.'],
    body: [
      { h: 'Sections on this page', table: { head: ['#', 'Section', 'Background', 'Image'], rows: [['1', 'Split hero', 'Ivory', '{{asset:terrace-portrait}} 4:5, right'], ['2', 'How it began', 'Beige', '{{asset:river}} 3:2, left'], ['3', 'The kitchen', 'Ivory', '{{asset:kitchen-pots}} 3:2, right'], ['4', 'The palm bar', 'Beige', '{{asset:palm-wine-gourds}} 3:2, left'], ['5', 'Get to know Mesurado (2 cards)', 'Ivory', '{{asset:market}}, {{asset:team-group}}'], ['6', 'Reservation band', 'Dark', '—']] } },
      splitHeroSteps('Our Story', 'terrace-portrait'),
      { content: 'hero.our-story' },
      { h: 'Sections 2–4 (alternating splits)', steps: [
        'Below the hero, insert **MK Split**. Rename `02 How it began`. Background slot 6. Image {{asset:river}} 3:2. Fill the texts (three paragraphs). Delete the button.',
        'Insert **MK Split**. Rename `03 The kitchen`. Background slot 5. Move the image column to the right. Image {{asset:kitchen-pots}}. Fill the texts. Button: `Explore Menu →` → `/menu/` (outline).',
        'Insert **MK Split**. Rename `04 The palm bar`. Background slot 6. Image {{asset:palm-wine-gourds}}. Fill the texts (two paragraphs). Delete the button.'
      ] },
      { content: ['story.began', 'story.kitchen', 'story.bar'] },
      { h: 'Section 5 — Get to know Mesurado', steps: [
        'Insert **MK Section**, rename `05 More about us`. Fill eyebrow and H2; delete the intro paragraph; add a 48 px bottom margin to the heading.',
        'Add **Columns 50/50**, gap `24px`. In each column insert **MK Card**.',
        'Card 1: image {{asset:market}} (aspect 3:2), eyebrow `Our Philosophy`, H5 `How we cook and how we host` linked to `/our-philosophy/`, description text. Delete the price paragraph.',
        'Card 2: image {{asset:team-group}} (3:2), eyebrow `Our Team`, H5 `The people in the kitchen and on the floor` linked to `/our-team/`, description. Delete the price paragraph.'
      ] },
      { content: 'story.more' },
      ctaSteps()
    ],
    visual: [{ diagram: 'wire-story', caption: 'Our Story page, top to bottom.' }],
    resources: { assets: ['terrace-portrait', 'river', 'kitchen-pots', 'palm-wine-gourds', 'market', 'team-group'], content: ['hero.our-story', 'story.began', 'story.kitchen', 'story.bar', 'story.more', 'cta.default'] },
    expected: 'Our Story matches the reference: split hero, three alternating photo sections (left, right, left), two link cards and the dark reservation band.',
    troubleshoot: ['spacing-wrong', 'card-images-different-heights'],
    checklist: ['Split hero with breadcrumb, eyebrow, H1, intro, two buttons and the terrace photo.', 'Three splits alternate image left / right / left and background beige / ivory / beige.', 'Two cards link to Our Philosophy and Our Team.', 'Reservation band at the bottom.'] },

  { id: 'm11-l03', title: 'Our Philosophy page', time: '50 min', tools: 'Spectra Info Box', keywords: 'philosophy quote principles four cards market',
    objective: 'Build the Our Philosophy page.',
    build: 'Hero, a quotation section, four principle cards, a split section and a customised reservation band.',
    before: ['Finish {{lesson:m11-l02}}.'],
    body: [
      { callout: 'info', text: 'You already built this page’s hero in {{lesson:m11-l01}}. Check its texts against the copy box.' },
      { content: 'hero.our-philosophy' },
      { h: 'Section 2 — What we believe (narrow text)', steps: [
        'Insert **MK Section**, rename `02 What we believe`. Change its **content width** to `760px` (narrow, like the reference prose).',
        'Keep the eyebrow (`What we believe`). Delete the H2.',
        'Add a **Quote** block with the quotation, and in its **citation** line type `— Musu Kollie, Founder & Head Chef`. Set the quote text size to 26 px (Playfair Display) if possible.',
        'Add the paragraph below the quote. (The reference shows the citation as its own paragraph after the text — either placement is fine.)'
      ] },
      { content: 'phil.quote' },
      { h: 'Section 3 — Four principles', steps: [
        'Insert **MK Section**, rename `03 Principles`, background slot 6. Fill eyebrow and H2, delete the intro, add a 48 px margin below the heading.',
        'Add a **Grid** Group, minimum column width `260px`, gap `24px`.',
        ['Inside, add a **Group** with classes `mk-card mk-card-body`. Inside the card add a Spectra **Info Box**:', ['Icon position: **above title**; icon (people/users) size 24 px, colour `#7d5a12`; if the Info Box offers an icon border/background, set a 1 px `#a27315` border and 48 × 48 px box.', 'Title: `Hospitality first`, tag **H5**, align left.', 'Description: the principle text, colour `#68665f`, 15 px.', 'Turn off prefix, separator and call-to-action.']],
        'Duplicate the card three times and fill the other principles (icons: leaf, fire, utensils).'
      ] },
      { content: ['phil.principlesHead', 'phil.principles'] },
      { h: 'Section 4 — From market to table', steps: [
        'Insert **MK Split**, rename `04 Market`. Image {{asset:market}}, aspect **4:5**. Fill the texts. Button `See Seasonal Specials →` → `/menu/`, outline.'
      ] },
      { content: 'phil.market' },
      ctaSteps('phil.cta'),
      { content: 'phil.cta' }
    ],
    visual: [{ diagram: 'wire-philosophy', caption: 'Our Philosophy page, top to bottom.' }],
    resources: { assets: ['page-hero-terrace-night', 'market'], content: ['hero.our-philosophy', 'phil.quote', 'phil.principlesHead', 'phil.principles', 'phil.market', 'phil.cta'] },
    expected: 'The page shows the hero, a narrow quote section, four principle cards with gold icons, the market split and a band reading “Taste it for yourself”.',
    troubleshoot: ['info-box-pro', 'grid-not-responsive'],
    checklist: ['Hero texts correct.', 'Quote and citation correct; section is narrow (760 px).', 'Four principle cards with icons, in the right order.', 'Market split with 4:5 image and outline button.', 'Band texts changed to “Come and see / Taste it for yourself”.'] },

  { id: 'm11-l04', title: 'Our Team page', time: '50 min', keywords: 'team members portraits bios join careers testimonials',
    objective: 'Build the Our Team page.',
    build: 'Hero, four team cards, a “Join the Mesurado family” split, the testimonials and the band.',
    before: ['Finish {{lesson:m11-l03}}.'],
    body: [
      heroSteps('Our Team', 'page-hero-terrace-night'),
      { content: 'hero.our-team' },
      { h: 'Section 2 — Team cards', steps: [
        'Insert **MK Section**, rename `02 Team`. Fill eyebrow, H2 and intro; add a 48 px margin under the intro.',
        'Add a **Grid** Group, minimum column width `260px`, gap `24px`.',
        'Insert **MK Card**. Image {{asset:team-musu}}, aspect ratio **3:4** (portrait). Eyebrow → the role (`Founder & Head Chef`). H5 → the name. Delete the price paragraph. Description → the bio.',
        'Duplicate three times for Emmanuel Tarr, Jallah Kamara and Patience Wesseh with their images.'
      ] },
      { content: ['team.head', 'team.p1', 'team.p2', 'team.p3', 'team.p4'] },
      { h: 'Section 3 — Join the Mesurado family', steps: [
        'Insert **MK Split**, rename `03 Join`, background slot 6. Image {{asset:team-meal}} 3:2. Fill the texts.',
        'Button: `Get in Touch` → `/contact/`, outline. Optional: make `careers@mesuradokitchen.com` a link: select it, {{kbd:Ctrl}} + {{kbd:K}}, type `mailto:careers@mesuradokitchen.com`.'
      ] },
      { content: 'team.join' },
      { h: 'Section 4 — What our guests say (copy from Home)', steps: [
        'Open the **Home** page in a new tab. In Document Overview, select `08 Guests`. Press {{kbd:Ctrl}} + {{kbd:C}}.',
        'Return to Our Team, click below section 3 and press {{kbd:Ctrl}} + {{kbd:V}}. The testimonials section is pasted with all its settings.'
      ] },
      ctaSteps()
    ],
    visual: [{ diagram: 'wire-team', caption: 'Our Team page, top to bottom.' }],
    resources: { assets: ['page-hero-terrace-night', 'team-musu', 'team-emmanuel', 'team-jallah', 'team-patience', 'team-meal'], content: ['hero.our-team', 'team.head', 'team.p1', 'team.p2', 'team.p3', 'team.p4', 'team.join', 'cta.default'] },
    expected: 'Four portrait cards in a row (two on tablets, one on phones), the Join split, three testimonials and the band.',
    checklist: ['Hero texts correct.', 'Four team cards with portrait photos, roles, names and bios.', 'Join split with team-meal photo and Get in Touch button.', 'Testimonials copied from Home.', 'Reservation band at the bottom.'] },

  { id: 'm11-l05', title: 'Menu page (tabs and 23 dishes)', time: '120 min', tools: 'Spectra Tabs', keywords: 'menu tabs dishes prices dietary allergens breakfast lunch dinner drinks desserts seasonal',
    objective: 'Build the full menu with six tabs, every dish, the allergy section and the band.',
    build: 'A tabbed menu: Breakfast & Brunch, Lunch, Dinner, Drinks & Cocktails, Desserts, Seasonal Specials.',
    before: ['Finish {{lesson:m11-l04}}.', 'All dish images uploaded.'],
    body: [
      heroSteps('Menu', 'page-hero-dishes'),
      { content: 'hero.menu' },
      { h: 'Section 2 — Tabs', steps: [
        'Insert **MK Section**, rename `02 Menu tabs`. Delete its eyebrow and H2. Replace the intro with the menu note below, size 14 px, colour `#68665f`.',
        'Below it add a Spectra **Tabs** block. Add tabs until there are **six**. Name them: `Breakfast & Brunch`, `Lunch`, `Dinner`, `Drinks & Cocktails`, `Desserts`, `Seasonal Specials`.',
        'Style the tabs (sidebar **Style**): tab text Inter 15 px 500; active tab text `#0e1e16` with a 2 px bottom border `#a27315`; inactive text `#68665f`; tab background transparent; body background transparent; body border none.',
        'Click the first tab. Inside its body add: Paragraph `01 · Menu` (class `mk-eyebrow`), Heading H2 `Breakfast & Brunch`, Paragraph `4 dishes` (14 px, grey).',
        'Below those, add a **Grid** Group (minimum column width `340px`, gap `24px`) and insert **MK Card** for each dish in that tab.',
        ['Card content for each dish:', ['Image → the dish image (4:3).', 'Eyebrow → the badge (Chef’s Pick, Signature, House Pour, Seasonal, Sold out today) — delete it if there is no badge.', 'H5 → dish name. Price → e.g. `US$ 9.50`. Description → text.', 'Add a small Paragraph (13 px, grey): dietary tags, then a line break ({{kbd:Shift}} + {{kbd:Enter}}) and `Allergens: …`.']],
        'Repeat for every tab using the table and the Content Library. Tip: build one card perfectly, copy it ({{kbd:Ctrl}} + {{kbd:C}}) and paste it into the next tab, then edit.',
        'For **Grilled Lobster Tail** (Dinner) use the badge `Sold out today`. That is how the reference shows unavailable dishes.'
      ] },
      { content: 'menu.note' },
      { table: menuTable },
      { callout: 'tip', title: 'All dish texts', text: 'Every dish has its own copy box in the [Content Library → Menu](#/content/menu), with name, price, description, dietary tags and allergens.' },
      { h: 'Section 3 — Allergies & dietary needs', steps: [
        'Insert **MK Split**, rename `03 Allergies`, background slot 6, padding top/bottom `64px`. Delete the image. Set Columns vertical alignment **top**.',
        'Left column: eyebrow, change the heading to **H3**, paragraph. Delete the button.',
        'Right column: a **Group** with classes `mk-card mk-card-body`: Heading **H6** `Dietary key`, then a Paragraph `Vegetarian · Vegan · Gluten-free · Dairy-free · Spicy · Seafood`.'
      ] },
      { content: 'menu.allergy' },
      ctaSteps('menu.cta'),
      { content: 'menu.cta' }
    ],
    visual: [{ diagram: 'wire-menu', caption: 'Menu page: hero, tabs with dish card grids, allergy section, band.' }],
    resources: { assets: ['page-hero-dishes'].concat(P.menu.map(function (m) { return 'dish-' + m[0]; })), content: ['hero.menu', 'menu.note', 'menu.allergy', 'menu.cta'] },
    expected: 'Six working tabs; each shows its dishes as cards with photo, name, price, description, tags and allergens. Below: the allergy section and a band with an Order Online button.',
    troubleshoot: ['tabs-not-switching', 'grid-not-responsive', 'card-images-different-heights'],
    checklist: ['Six tabs with the correct names.', 'All 23 dishes are present with correct prices.', 'Badges match the table; Lobster shows “Sold out today”.', 'Each card shows dietary tags and allergens.', 'Allergy section and band (“Hungry already?”) present.'] },

  { id: 'm11-l06', title: 'Reservations page (layout)', time: '35 min', keywords: 'reservations booking layout sidebar good to know',
    objective: 'Build the Reservations page layout with a space for the form and the “Good to know” sidebar.',
    build: 'Hero, notice, a main panel waiting for the form, and a sidebar. The form itself is added in {{lesson:m13-l02}}.',
    before: ['Finish {{lesson:m11-l05}}.'],
    body: [
      heroSteps('Reservations', 'page-hero-river-table'),
      { content: 'hero.reservations' },
      { h: 'Section 2 — Booking area', steps: [
        'Insert **MK Section**, rename `02 Booking`. Delete the eyebrow, H2 and intro. Set padding top to `64px`.',
        'Add a **Group** for the notice: background `#e6f0f5`, left border 4 px `#28688a` (Styles → Border), padding 16 px, text colour `#28688a`. Inside it, a Paragraph with the notice text.',
        'Below, add **Columns** with the **66 / 33** layout, gap `48px`, vertical alignment **top**.',
        'Left column: a **Group** with classes `mk-card mk-card-body`. Inside: Heading **H4** `When are you joining us?` and a temporary Paragraph: `[Reservation form — added in Lesson 13.2]`.',
        'Right column: a **Group** with classes `mk-card mk-card-body`. Inside: Heading **H6** `Good to know`, then three Spectra **Info Box** blocks (clock, users and phone icons) with the texts below. Link “Private dining” to `/private-dining/`.',
        'Click **Save**.'
      ] },
      { content: ['res.notice', 'res.side', 'res.large'] },
      { callout: 'info', title: 'Why no live calendar?', text: 'The reference shows a 5-step booking flow with live availability. That needs a paid booking service or a backend. Your free version sends a **reservation request** with date, time and party size, which the restaurant confirms. This is an accepted, documented difference (see the [Blueprint](#/blueprint)).' }
    ],
    visual: [{ diagram: 'wire-reservations', caption: 'Reservations page: hero, notice, form panel (left) and sidebar (right).' }],
    resources: { assets: ['page-hero-river-table'], content: ['hero.reservations', 'res.notice', 'res.side'] },
    expected: 'Reservations shows the hero, a blue notice, a white form panel with a placeholder line, and the Good to know sidebar.',
    checklist: ['Hero texts correct.', 'Notice is visible above the panels.', 'Main panel (2/3) with H4 heading and placeholder.', 'Sidebar (1/3) with three info rows.'] },

  { id: 'm11-l07', title: 'Order Online page (layout)', time: '35 min', keywords: 'order online pickup delivery start your order landing',
    objective: 'Build the Order Online landing page that explains pickup and delivery and sends customers to the shop.',
    build: 'Hero, pickup/delivery choice boxes with buttons, and a space for popular products (added in {{lesson:m13-l07}}).',
    before: ['Finish {{lesson:m11-l06}}.'],
    body: [
      heroSteps('Order Online', 'page-hero-dishes'),
      { content: 'hero.order-online' },
      { h: 'Section 2 — How would you like your order?', steps: [
        'Insert **MK Section**, rename `02 Choose`. Content width `760px`. Delete the eyebrow and intro; change the heading to **H3** and set its text.',
        'Add **Columns 50/50**, gap `16px`. In each column a **Group** with classes `mk-card mk-card-body`.',
        'Left card: Heading **H5** `Pickup` + Paragraph. Right card: Heading **H5** `Delivery` + Paragraph.',
        'Below the columns, a **Buttons** block: `Start Your Order →` (large, primary) → `/shop/`; `View Full Menu` (large, outline) → `/menu/`.'
      ] },
      { content: 'order.choose' },
      { h: 'Section 3 — Popular for takeaway', steps: [
        'Insert **MK Section**, rename `03 Popular`, background slot 6. Eyebrow `Most ordered`, H2 `Popular for takeaway`. Delete the intro.',
        'Add a temporary Paragraph: `[Popular products — added in Lesson 13.7]`.',
        'Click **Save**.'
      ] },
      { content: 'order.popularHead' },
      { callout: 'info', title: 'Pickup or delivery is chosen at checkout', text: 'In the reference you pick pickup or delivery on this page. In WooCommerce the customer chooses it on the checkout page (pickup free, delivery US$ 3). The boxes here explain the two options.' }
    ],
    visual: [{ diagram: 'wire-order', caption: 'Order Online: hero, two option cards with buttons, popular products.' }],
    resources: { assets: ['page-hero-dishes'], content: ['hero.order-online', 'order.choose', 'order.popularHead'] },
    expected: 'The page explains Pickup and Delivery and the Start Your Order button opens the (still empty) Shop page.',
    checklist: ['Hero texts correct.', 'Pickup and Delivery cards with correct texts.', 'Start Your Order → /shop/; View Full Menu → /menu/.', 'Popular section with a placeholder line.'] },

  { id: 'm11-l08', title: 'Private Dining page', time: '75 min', keywords: 'private dining spaces river room palm terrace included faq details accordion inquiry anchor',
    objective: 'Build the Private Dining page including the FAQ accordion and the inquiry area.',
    build: 'Split hero, three space cards, “Everything taken care of”, a photo row, inquiry area with sidebar, and FAQ.',
    before: ['Finish {{lesson:m11-l07}}.'],
    body: [
      splitHeroSteps('Private Dining', 'river-room-portrait'),
      { content: 'hero.private-dining' },
      { h: 'Section 2 — Choose your setting', steps: [
        'Insert **MK Section**, rename `02 Spaces`, background slot 6. Fill eyebrow, H2, intro; 48 px margin below.',
        'Add a **Grid** (min column `340px`, gap `24px`) with three **MK Card**s.',
        'Fill each card: image, eyebrow, H5 title, price paragraph → the capacity (e.g. `Up to 24 seated`), description. Images: {{asset:river-room}}, {{asset:hero-palm-bar}}, {{asset:dining-room-full}}.'
      ] },
      { content: ['pd.spacesHead', 'pd.space1', 'pd.space2', 'pd.space3'] },
      { h: 'Section 3 — Everything taken care of', steps: [
        'Insert **MK Split**, rename `03 Included`. Delete the image and the button. Keep eyebrow, H2 and paragraph in the **left** column.',
        'In the right column add a **Grid** (min column `220px`, gap `24px`) with six Spectra **Info Box** blocks (icon left of title, gold icons): titles and texts from the copy box.'
      ] },
      { content: ['pd.included', 'pd.includedList'] },
      { h: 'Section 4 — Private events at Mesurado', steps: [
        'Insert **MK Section**, rename `04 Gallery row`, background slot 6. Build a heading row (as in {{lesson:m10-l04}}) with an outline `Explore Gallery →` → `/gallery/`.',
        'Add a **Grid** (min column `260px`) with four Image blocks at **1:1**: {{asset:pd-candlelit}}, {{asset:pd-sunset-guests}}, {{asset:pd-set-menu}}, {{asset:pd-cake}}.'
      ] },
      { content: 'pd.gallery' },
      { h: 'Section 5 — Inquiry area', steps: [
        'Insert **MK Section**, rename `05 Inquiry`. Fill eyebrow, H2 and intro.',
        'Select the section Group → **Advanced → HTML anchor** → type `inquiry`. Now the hero button “Make an Inquiry” (link `#inquiry`) jumps here.',
        'Add **Columns 66/33**, gap `48px`, top aligned. Left: a temporary Paragraph `[Private dining inquiry form — added in Lesson 13.4]`. Right: a **Group** `mk-card mk-card-body` with H5 `Prefer to talk?`, the phone and email lines, and a secondary (gold) button `Catering Instead? →` → `/catering/`.'
      ] },
      { content: ['pd.formHead', 'pd.side'] },
      { h: 'Section 6 — FAQ (accordion)', steps: [
        'Insert **MK Section**, rename `06 FAQ`, background slot 6. Eyebrow `FAQ`, H2 `Private dining questions`. Delete the intro.',
        'Add a **Details** block (search “Details”). Type the question in its summary line and the answer in the paragraph inside.',
        'In the sidebar, tick **Open by default** for the **first** question only.',
        'Add three more Details blocks for the other questions.',
        'Style: give each Details block a bottom border 1 px `#e5e0d6` and padding 16 px top/bottom (Styles). Make the summary text bold.',
        'Click **Save**.'
      ] },
      { content: ['pd.faqHead', 'pd.faq1', 'pd.faq2', 'pd.faq3', 'pd.faq4'] }
    ],
    visual: [{ diagram: 'wire-private', caption: 'Private Dining page, top to bottom.' }],
    resources: { assets: ['river-room-portrait', 'river-room', 'hero-palm-bar', 'dining-room-full', 'pd-candlelit', 'pd-sunset-guests', 'pd-set-menu', 'pd-cake'] },
    expected: 'All six sections present. “Make an Inquiry” jumps to the inquiry area. FAQ questions open and close; the first is open when the page loads.',
    troubleshoot: ['anchor-not-jumping', 'info-box-pro'],
    checklist: ['Split hero with Make an Inquiry (#inquiry) and View Menu buttons.', 'Three space cards with capacities.', 'Six included items with icons.', 'Four square photos and an Explore Gallery button.', 'Inquiry section has the anchor `inquiry` and the sidebar.', 'Four FAQ items; the first opens by default.'] },

  { id: 'm11-l09', title: 'Catering page', time: '70 min', keywords: 'catering services packages how it works quote anchor faq',
    objective: 'Build the Catering page.',
    build: 'Split hero, three service cards, three packages, three steps, the quote area and FAQ.',
    before: ['Finish {{lesson:m11-l08}}.'],
    body: [
      splitHeroSteps('Catering', 'catering-buffet'),
      { content: 'hero.catering' },
      { h: 'Section 2 — What we cater', steps: [
        'Insert **MK Section**, rename `02 Services`, background slot 6. Eyebrow `Services`, H2 `What we cater`; delete intro.',
        'Add a **Grid** (min `340px`) with three **MK Card**s: images {{asset:catering-office}}, {{asset:catering-wedding}}, {{asset:catering-family}}. Price paragraph → guest numbers.'
      ] },
      { content: ['cat.servicesHead', 'cat.s1', 'cat.s2', 'cat.s3'] },
      { h: 'Section 3 — Example packages', steps: [
        'Insert **MK Section**, rename `03 Packages`. Fill eyebrow, H2 and intro.',
        'Add a **Grid** (min `340px`). In it, three **Group**s with classes `mk-card mk-card-body` and block spacing `12px`.',
        'In each package: Paragraph eyebrow (class `mk-eyebrow`), Heading **H4**, Paragraph, a **List** with the four items (start each with ✓ or use the List block), and a bold Paragraph with the price.'
      ] },
      { content: ['cat.pkgHead', 'cat.pkg1', 'cat.pkg2', 'cat.pkg3'] },
      { h: 'Section 4 — How it works', steps: [
        'Insert **MK Section**, rename `04 How it works`, background slot 6. Eyebrow and H2; delete intro.',
        'Add a **Grid** (min `340px`) with three `mk-card mk-card-body` Groups. Each: a Paragraph with the step number (`1`, `2`, `3`) in Playfair Display 32 px, colour `#7d5a12`; Heading **H5**; Paragraph.'
      ] },
      { content: 'cat.how' },
      { h: 'Section 5 — Request a quote', steps: [
        'Insert **MK Section**, rename `05 Quote`. Fill eyebrow, H2, intro.',
        'Select the section → **Advanced → HTML anchor** → `quote`.',
        'Add a temporary Paragraph `[Catering quote form — added in Lesson 13.5]`.'
      ] },
      { content: 'cat.formHead' },
      { h: 'Section 6 — FAQ', steps: [
        'Build exactly like the Private Dining FAQ ({{lesson:m11-l08}}): background slot 6, eyebrow `FAQ`, H2 `Catering questions`, four **Details** blocks, first open by default.',
        'Click **Save**.'
      ] },
      { content: ['cat.faqHead', 'cat.faq1', 'cat.faq2', 'cat.faq3', 'cat.faq4'] }
    ],
    visual: [{ diagram: 'wire-catering', caption: 'Catering page, top to bottom.' }],
    resources: { assets: ['catering-buffet', 'catering-office', 'catering-wedding', 'catering-family'] },
    expected: 'Catering matches the reference structure; “Request a Quote” jumps to the quote section.',
    troubleshoot: ['anchor-not-jumping'],
    checklist: ['Split hero with Request a Quote (#quote) and Private Dining buttons.', 'Three service cards with guest numbers.', 'Three packages with tick lists and prices.', 'Three numbered steps.', 'Quote section has anchor `quote`.', 'FAQ with four items, first open.'] },

  { id: 'm11-l10', title: 'Journal: posts and the Journal page', time: '100 min', keywords: 'journal blog posts categories featured image excerpt query loop pagination news',
    objective: 'Create the eight Journal articles as posts and build a Journal page that lists them automatically.',
    build: 'Eight published posts in two categories, and a Journal page with a featured story and a 3-column post grid.',
    before: ['Finish {{lesson:m11-l09}}.', 'Categories created in {{lesson:m09-l01}}.'],
    body: [
      { callout: 'info', title: 'Why posts?', text: 'Articles are **posts** because they are dated and belong to categories. The Journal page uses a **Query Loop** block that lists posts automatically — add a new post and it appears on the Journal page by itself.' },
      { h: 'Create one post', steps: [
        'Go to **Posts → Add New Post**.',
        'Title: `Welcome to Mesurado Kitchen & Palm Bar`.',
        ['Content (paste from the “Article body” copy box):', ['A meta line Paragraph (14 px, grey): `Mesurado team · 3 min read`.', 'Two paragraphs, a **Heading H3** `The morning decides the menu`, a **Quote** block with the quotation, then two more paragraphs.', 'At the end, a **Buttons** block: `Reserve a Table` → `/reservations/`, `Explore Menu` → `/menu/` (outline).']],
        'In the sidebar **Post** tab → **Categories**: tick **News & Updates** and untick General.',
        '**Featured image** → **Set featured image** → {{asset:journal-a1}}.',
        '**Excerpt** → paste the excerpt from the copy box.',
        '**Publish** date: click the date next to **Publish** and set it to the date in the table (year 2026).',
        'Click **Publish**.'
      ] },
      { callout: 'warn', title: 'If the button says “Schedule”', text: 'WordPress schedules posts with future dates. If your computer’s date is earlier than the post date, choose a date in the past (keep the same order: newest = Welcome, oldest = Meet the bar team) so the post publishes now.' },
      { content: 'j.body' },
      { h: 'Create the other seven posts', table: { head: ['Post title', 'Category', 'Date', 'Image'], rows: P.articles.map(function (a) { return ['**' + a[2] + '**', a[1], a[3] + ' 2026', '{{asset:journal-' + a[0] + '}}']; }) } },
      { content: P.articles.map(function (a) { return 'j.' + a[0]; }) },
      { h: 'Build the Journal page', steps: [
        'Open **Pages → Journal**. Insert **MK Page Hero**, replace the image with {{asset:page-hero-cocktail-river}} and fill the texts.',
        'Insert **MK Section**, rename `02 Featured`. Delete its eyebrow, H2 and intro.',
        'Add a **Query Loop** block. Choose the layout **Image at left** (or start blank and add Post Featured Image, Post Terms, Post Title, Post Date, Post Excerpt).',
        'Query settings (sidebar): **Inherit query from template** OFF; **Post type** Posts; **Items per page** `1`; **Order by** Newest to oldest; **Filters → Taxonomies/Categories**: `News & Updates`, `Events & Promotions`.',
        'Style the featured post: image aspect **16:9**; title as **H2**; add a **Read More** block (or the excerpt’s “more” link) with text `Read More →`.',
        'Insert another **MK Section**, rename `03 From the journal`. Eyebrow `Latest`, H2 `From the journal`; delete the intro.',
        'Under the heading add a Paragraph with three links: `All` → `/journal/`, `News & Updates` → `/category/news-updates/`, `Events & Promotions` → `/category/events-promotions/` (separate them with ` · `).',
        'Add a **Query Loop** with layout **Grid** (3 columns). Query: Posts, **Items per page** `6`, **Offset** `1` (skip the featured post), same two categories.',
        'In the post template keep: Featured Image (aspect 4:3), Post Terms (category, class `mk-eyebrow`), Post Title (H5, linked), Post Date, Post Excerpt.',
        'Make sure a **Pagination** block is inside the Query Loop below the template (add one if missing). It shows **Next Page** when there are more posts — the free equivalent of “Load More Stories”.',
        'Click **Save**. Check the category link addresses by visiting **Posts → Categories** and hovering over each category’s **View** link — adjust the links if your slugs differ.'
      ] },
      { content: ['hero.journal', 'j.head'] }
    ],
    visual: [{ diagram: 'query-loop', caption: 'How a Query Loop works: settings pick the posts; the Post Template repeats for each post.' }],
    resources: { assets: ['page-hero-cocktail-river'].concat(P.articles.map(function (a) { return 'journal-' + a[0]; })), content: ['j.body', 'hero.journal', 'j.head'] },
    expected: 'Eight published posts. The Journal page shows “Welcome to Mesurado Kitchen & Palm Bar” as the featured story, then a grid of the next six posts and a link to the next page.',
    troubleshoot: ['query-loop-empty', 'post-scheduled', 'permalinks-404'],
    checklist: ['Eight posts published with categories, featured images, excerpts and dates.', 'Journal hero correct.', 'Featured Query Loop shows one post.', 'Grid Query Loop shows six posts with offset 1 and pagination.', 'Category links open the category archives.'] },

  { id: 'm11-l11', title: 'Special Events: event posts and the events page', time: '75 min', keywords: 'special events posts tags query loop featured event music family',
    objective: 'Create the five events as posts and list them on the Special Events page.',
    build: 'Five event posts (category Special Events, with tags) and a Special Events page with a featured event and an events grid.',
    before: ['Finish {{lesson:m11-l10}}.'],
    body: [
      { h: 'Create the event posts', steps: [
        'Go to **Posts → Add New Post**. Title: `Palm Bar Live: Acoustic Evenings`.',
        ['Content (from the copy box for that event):', ['Paragraph (class `mk-eyebrow`): the place, e.g. `The Palm Bar`.', 'Paragraph (14 px): date · time · place.', 'Paragraph 1 (the description) and Paragraph 2 (the booking line).', 'A **Group** `mk-card mk-card-body` with H5 `Join us`, its paragraph, and buttons `Reserve a Table` → `/reservations/` and `Make an Inquiry` → `/contact/` (outline).']],
        'Category: **Special Events** only. **Tags**: type the tag from the table (e.g. `Music`) and press {{kbd:Enter}}.',
        'Featured image and excerpt from the table and copy box.',
        'Set the **Publish** date so that the events are ordered: Acoustic Evenings newest, then Supper Club, Palm Wine Tasting, Family Sunday Brunch, Christmas Eve Dinner (use any recent past dates, one day apart).',
        'Click **Publish**. Repeat for all five events.'
      ] },
      { table: { head: ['Event', 'Tag', 'Date shown in content', 'Image'], rows: P.events.map(function (e) { return ['**' + e[2] + '**', e[1], e[3] + ', ' + e[4], e[0] === 'e5' ? '{{asset:catering-family}}' : '{{asset:event-' + e[0] + '}}']; }) } },
      { content: P.events.map(function (e) { return 'ev.' + e[0]; }) },
      { callout: 'info', title: 'Event dates vs post dates', text: 'The date students see (for example “Saturday 14 November”) is written in the post content. The WordPress publish date only controls the order of the list.' },
      { h: 'Build the Special Events page', steps: [
        'Open **Pages → Special Events**. Insert **MK Page Hero** with {{asset:page-hero-cocktail-river}} and the texts below.',
        'Insert **MK Section**, rename `02 Featured`. Delete eyebrow, H2, intro. Add a **Query Loop** with layout **Image at left**: items per page `1`, category **Special Events**. Add a Paragraph above the title in the template: `Featured event` (class `mk-eyebrow`). Image 16:9; title H2; excerpt; a Read More link `View Details →`.',
        'Insert **MK Section**, rename `03 Upcoming`. Eyebrow `What’s on`, H2 `Upcoming events`. Under it, a Paragraph of tag links: `All events` → `/special-events/`, `Music` → `/tag/music/`, `Food & supper clubs` → `/tag/food-supper-clubs/`, `Palm Bar` → `/tag/palm-bar/`, `Family` → `/tag/family/`.',
        'Add a **Query Loop** grid (3 columns): category **Special Events**, items per page `9`. Template: image 4:3, title H5 (linked), excerpt.',
        'At the bottom, insert **MK Reservation Band** and change it to the events texts below.',
        'Click **Save**. Check the tag link addresses at **Posts → Tags** (hover **View**).'
      ] },
      { content: ['hero.special-events', 'ev.featured', 'ev.listHead', 'ev.cta'] }
    ],
    visual: [{ diagram: 'wire-events', caption: 'Special Events page: hero, featured event, events grid, band.' }],
    resources: { assets: ['page-hero-cocktail-river', 'event-e1', 'event-e2', 'event-e3', 'event-e4', 'catering-family'] },
    expected: 'Special Events shows Palm Bar Live as the featured event, a grid of all five events, and the “Planning something special?” band. Clicking an event opens its post with date, time, place and buttons.',
    troubleshoot: ['query-loop-empty', 'post-scheduled'],
    checklist: ['Five event posts in category Special Events, each with a tag and featured image.', 'Featured event shows the newest event.', 'Events grid lists all five.', 'Tag links work.', 'Band texts changed to the events version.', 'Event posts do NOT appear on the Journal page.'] },

  { id: 'm11-l12', title: 'Gallery page (tabs and lightbox)', time: '60 min', tools: 'Spectra Tabs', keywords: 'gallery tabs lightbox expand on click masonry captions food room palm bar events',
    objective: 'Build the photo gallery with category tabs and click-to-enlarge photos.',
    build: 'Five tabs (All, Food, Room, Palm Bar, Events) with Gallery blocks that open photos larger when clicked.',
    before: ['Finish {{lesson:m11-l11}}.'],
    body: [
      heroSteps('Gallery', 'page-hero-terrace-night'),
      { content: 'hero.gallery' },
      { h: 'Build the tabs', steps: [
        'Insert **MK Section**, rename `02 Gallery`. Delete eyebrow, H2 and intro.',
        'Add a Spectra **Tabs** block with five tabs: `All`, `Food`, `Room`, `Palm Bar`, `Events`. Style them like the Menu tabs ({{lesson:m11-l05}}).',
        'In the **All** tab, add a **Gallery** block. Click **Media Library**, select all 16 gallery photos in the order of the list below ({{kbd:Ctrl}}-click), click **Create a new gallery**, then **Insert gallery**.',
        'Gallery settings: **Columns** `4`; **Crop images to fit** OFF (gives a masonry-like look); **Link to** → **Expand on click** (or **Enlarge on click**); gap `24px`.',
        'Add captions: click each image and type its caption (the label from the list, e.g. `Palm butter, overhead`).',
        'Copy the gallery ({{kbd:Ctrl}} + {{kbd:C}}) into each other tab and remove the images that do not belong (each photo’s category is in brackets in the list).'
      ] },
      { content: ['gal.filters', 'gal.list'] },
      { h: 'Which file is each photo?', table: { head: ['Caption', 'Tab', 'Asset'], rows: [
        ['Palm butter, overhead', 'Food', '{{asset:dish-d1}}'], ['Dining room at dusk', 'Room', '{{asset:dining-room}}'], ['Palm wine being poured', 'Palm Bar', '{{asset:palm-wine-pour}}'], ['Jollof rice, 45°', 'Food', '{{asset:dish-l1}}'],
        ['Acoustic set on the terrace', 'Events', '{{asset:journal-a3}}'], ['River view from the terrace', 'Room', '{{asset:river}}'], ['Fried fish & plantain', 'Food', '{{asset:dish-l3}}'], ['Palm bar counter', 'Palm Bar', '{{asset:palm-wine-gourds}}'],
        ['Cassava leaf', 'Food', '{{asset:dish-d2}}'], ['Table set for dinner', 'Room', '{{asset:hero-terrace-table}}'], ['Private dinner, long table', 'Events', '{{asset:river-room-portrait}}'], ['Sunset cocktails', 'Palm Bar', '{{asset:sunset-cocktails}}'],
        ['Coconut candy tart', 'Food', '{{asset:dish-x1}}'], ['Kitchen pass', 'Room', '{{asset:chef-plating}}'], ['Catering spread', 'Events', '{{asset:catering-buffet}}'], ['Ginger beer & kola', 'Palm Bar', '{{asset:ginger-kola}}']
      ] } },
      ctaSteps('gal.cta'),
      { content: 'gal.cta' }
    ],
    visual: [{ diagram: 'wire-gallery', caption: 'Gallery page: hero, tabs, photo grid, band.' }],
    resources: { assets: ['page-hero-terrace-night'] },
    expected: 'Five tabs; each shows its photos with captions. Clicking a photo opens it large on a dark background; Esc or the X closes it.',
    troubleshoot: ['lightbox-missing', 'tabs-not-switching'],
    checklist: ['Five tabs with the right names.', 'All tab has 16 photos in order; other tabs have their 4 photos each.', 'Captions match the list.', 'Clicking a photo enlarges it.', 'Band reads “Come by the river”.'] },

  { id: 'm11-l13', title: 'Contact page (layout)', time: '55 min', keywords: 'contact details hours directions map parking accessibility faq',
    objective: 'Build the Contact page layout; the form is added in {{lesson:m13-l03}}.',
    build: 'Hero, form area with “Visit & call” sidebar, directions with map, and FAQ.',
    before: ['Finish {{lesson:m11-l12}}.'],
    body: [
      heroSteps('Contact', 'page-hero-river-table'),
      { content: 'hero.contact' },
      { h: 'Section 2 — Send a message + sidebar', steps: [
        'Insert **MK Section**, rename `02 Message`. Fill eyebrow, H2 and intro. Make “reservations page” in the intro a link to `/reservations/`.',
        'Add **Columns 66/33**, gap `48px`, top aligned.',
        'Left: a Group `mk-card mk-card-body` with the temporary Paragraph `[Contact form — added in Lesson 13.3]`.',
        'Right: a Group `mk-card mk-card-body`: H5 `Visit & call`; three Info Boxes (Address, Telephone, Email); H6 `Opening hours`; a 2-column **Table** of hours; a full-width **Button** `Reserve a Table` → `/reservations/` (Button settings → **Width 100%**).'
      ] },
      { content: ['con.formHead', 'con.side'] },
      { h: 'Section 3 — Getting here', steps: [
        'Insert **MK Split**, rename `03 Directions`, background slot 6, **HTML anchor** `directions`. Delete the image.',
        'In the left column add a Spectra **Google Map** (address `Mamba Point, Monrovia, Liberia`, height 460 px).',
        'Right column: eyebrow, H2, paragraph, two Info Boxes (Parking, Accessibility) and an outline button `Open in Google Maps` → the maps link, opening in a new tab.'
      ] },
      { content: ['con.directions', 'site.maps'] },
      { h: 'Section 4 — FAQ', steps: [
        'Insert **MK Section**, rename `04 FAQ`. Eyebrow `FAQ`, H2 `Good to know`. Four **Details** blocks, first open by default.',
        'Click **Save**.'
      ] },
      { content: ['con.faqHead', 'con.faq1', 'con.faq2', 'con.faq3', 'con.faq4'] }
    ],
    visual: [{ diagram: 'wire-contact', caption: 'Contact page, top to bottom.' }],
    resources: { assets: ['page-hero-river-table'] },
    expected: 'Contact shows the hero, a form placeholder with the Visit & call sidebar, the map and directions on beige, and four FAQ items.',
    troubleshoot: ['map-not-showing'],
    checklist: ['Hero texts correct.', 'Sidebar shows address, phone, email, hours and a full-width Reserve button.', 'Directions section with map, parking and accessibility info.', 'FAQ with four items.'] },

  { id: 'm11-l14', title: 'Legal page', time: '30 min', keywords: 'legal privacy policy terms accessibility anchors',
    objective: 'Build the Legal page with headings the footer links can jump to.',
    build: 'Hero and a narrow column of policy text with three anchors: `privacy`, `terms`, `accessibility`.',
    before: ['Finish {{lesson:m11-l13}}.'],
    body: [
      heroSteps('Legal', 'page-hero-cocktail-river', ['This hero has no intro paragraph — delete it.']),
      { content: 'hero.legal' },
      { h: 'Policy text', steps: [
        'Insert **MK Section**, rename `02 Policies`, content width `760px`. Delete the eyebrow, H2 and intro.',
        'Paste the full text from the copy box. Change each line that starts with `[H2]` into a **Heading H3**-sized **H2** (select the paragraph → toolbar block type → Heading → H2) and delete the `[H2]` marker. Set those headings to size 32 px if they look too big.',
        'Select the **Privacy policy** heading → **Advanced → HTML anchor** → `privacy`.',
        'Select **Terms of use** → anchor `terms`. Select **Accessibility statement** → anchor `accessibility`.',
        'Make the final line `Last updated: 1 November 2026` small (13 px) and grey.',
        'Click **Save**.',
        'Test: click **Privacy Policy**, **Terms** and **Accessibility** in the footer — each should jump to its heading.'
      ] },
      { content: 'legal.body' }
    ],
    resources: { assets: ['page-hero-cocktail-river'], content: ['hero.legal', 'legal.body'] },
    expected: 'The Legal page shows the policies in a narrow column, and the three footer links jump to the right headings.',
    troubleshoot: ['anchor-not-jumping'],
    checklist: ['Hero with title “Privacy, terms & accessibility”.', 'All five policy headings and texts present.', 'Anchors privacy, terms and accessibility work from the footer.'] }
  ] });
})();
