/* Module 12 — After the build: SEO, security, backups, performance and maintenance.
   Lesson format is the same as the other lesson files (see lessons-01-05.js). */
window.GUIDE = window.GUIDE || {};
GUIDE.modules = GUIDE.modules || [];
(function () {
var SITE = 'http://mesurado-kitchen.local';

GUIDE.modules.push({ id: 'm12', isNew: true, title: 'Launch & Care: SEO, Security, Backups and Maintenance',
  summary: 'Make the finished site findable, secure, backed up, fast and easy to look after — the work a web manager does after the build.',
  lessons: [

  /* ------------------------------------------------------------------ 12.1 */
  { id: 'm12-l01', title: 'Post-development: what a web manager does after the build', time: '20 min', keywords: 'post launch maintenance web management plan responsibilities local live staging go live',
    objective: 'Understand the jobs that begin once a website is built, and create a simple care plan for Mesurado Kitchen & Palm Bar.',
    build: 'A **Website care plan** document in your project folder that you will complete during this module.',
    before: ['All pages from Module 11 are built and saved.', 'Your LocalWP site **mesurado-kitchen** is running (green dot).'],
    body: [
      'A website is never really “finished”. Once the pages are built, someone must make sure people can **find** it, that it stays **safe**, that nothing is **lost**, that it stays **fast**, and that it keeps **working** after every update. That person is the web manager — and for this project, it is you.',
      { html: '<ol class="flow" aria-label="The website care cycle"><li><b>1</b>Find (SEO)</li><li><b>2</b>Protect (security)</li><li><b>3</b>Save (backups)</li><li><b>4</b>Speed up (performance)</li><li><b>5</b>Maintain (routine)</li></ol>' },
      { table: { head: ['Area', 'The question it answers', 'Lesson'], rows: [
        ['**SEO**', 'Can people find Mesurado on Google when they search “restaurant Mamba Point”?', '{{lesson:m12-l02}}, {{lesson:m12-l03}}'],
        ['**Security**', 'Can a stranger guess the password and take over the site?', '{{lesson:m12-l04}}'],
        ['**Backups**', 'If something breaks tomorrow, can we put it back exactly as it was?', '{{lesson:m12-l05}}'],
        ['**Performance**', 'Does the site load quickly on a phone with a slow connection?', '{{lesson:m12-l06}}'],
        ['**Maintenance**', 'Who updates what, how often, and how do we check nothing broke?', '{{lesson:m12-l07}}']
      ] } },
      { callout: 'info', title: 'Local site vs. live site', text: ['Your site runs on your own laptop (LocalWP), so Google cannot see it and nobody can attack it from the internet. You will still set everything up **exactly as you would on a live site**, so the habits and settings are ready on launch day.', 'Where a step only makes sense on a live site (for example HTTPS certificates or Google Search Console), the lesson says so and asks you to write it in your care plan instead.'] },
      { h: 'Create your care plan document', steps: [
        'Open your project folder (the one you created in {{lesson:m01-l01}}).',
        'Create a new document called `Mesurado-care-plan` (Word, Google Docs or a plain text file are all fine).',
        'Paste the template from the copy box below.',
        'Fill in the **Site details** section now. You will complete the other sections as you finish each lesson in this module.',
        'Save the document.'
      ] },
      { copy: { label: 'Care plan template', text: 'MESURADO KITCHEN & PALM BAR — WEBSITE CARE PLAN\n\nSite details\n- Local address: ' + SITE + '\n- Admin address: ' + SITE + '/wp-admin\n- Administrator username: (do not write the password here)\n- WordPress version:\n- Theme: Astra (free)\n- Plugins in use:\n\n1. SEO\n- SEO plugin:\n- Pages with a meta description:\n- Sitemap address:\n\n2. Security\n- Security measures in place:\n- Who has an account, and their role:\n\n3. Backups\n- Backup tool:\n- Schedule (files / database):\n- Where copies are stored:\n- Last successful restore test (date):\n\n4. Performance\n- Lighthouse scores (Performance / Accessibility / Best Practices / SEO):\n- Improvements made:\n\n5. Maintenance routine\n- Weekly:\n- Monthly:\n- Every 3 months:\n- Before launch (live site only):' } }
    ],
    resources: { links: ['Your care plan document is used again in every lesson of this module and in your final submission.'] },
    expected: 'You can explain the five care areas in your own words, and a care plan document with the Site details filled in is saved in your project folder.',
    troubleshoot: [{ q: 'I don’t know which WordPress version I have.', a: 'Go to **Dashboard → Updates**, or look at the bottom-right corner of any admin screen — it shows “Version 6.x”.' }],
    checklist: ['I can name the five care areas: SEO, security, backups, performance and maintenance.', 'My care plan document exists in my project folder.', 'The **Site details** section is filled in (without any password).'] },

  /* ------------------------------------------------------------------ 12.2 */
  { id: 'm12-l02', title: 'SEO foundations: install Yoast SEO and set up the site', time: '35 min', tools: 'Yoast SEO (free)', keywords: 'seo search engine optimisation yoast site representation organization logo sitemap indexing reading settings',
    objective: 'Install a free SEO plugin and give search engines the basic facts about the restaurant.',
    build: 'Yoast SEO active, Mesurado set up as an **Organization** with its logo, and a working XML sitemap.',
    before: ['Finish {{lesson:m12-l01}}.', 'The restaurant logo is uploaded to the Media Library ({{lesson:m09-l02}}).'],
    body: [
      { callout: 'info', title: 'What is SEO?', text: '**Search Engine Optimisation** means helping search engines like Google understand what each page is about, so the right people find it. Good SEO is mostly clear titles, useful descriptions, sensible headings, descriptive image text and a fast, working site — things you have already started.' },
      { h: 'Check the reading setting first', steps: [
        'Go to **Settings → Reading**.',
        'Find **Search engine visibility**. On your local site it may be ticked (“Discourage search engines from indexing this site”). That is fine for now.',
        'In your care plan, under **Before launch**, write: `Untick “Discourage search engines” in Settings → Reading on launch day.` Forgetting this is one of the most common reasons a new site never appears on Google.'
      ] },
      { h: 'Install Yoast SEO', steps: [
        'Go to **Plugins → Add New Plugin**.',
        'Search for `Yoast SEO`. Check the author is **Team Yoast**.',
        'Click **Install Now**, then **Activate**.',
        'Yoast may open a **First-time configuration** screen. If it does, continue with the next step group. If not, open **Yoast SEO → General → First-time configuration**.'
      ] },
      { h: 'First-time configuration', steps: [
        '**SEO data optimisation**: click **Start SEO data optimisation** and wait until it finishes. Click **Continue**.',
        ['**Site representation**:', ['Choose **Organization**.', 'Organization name: `Mesurado Kitchen & Palm Bar`.', 'Organization logo: click **Select image** and choose the full-colour Mesurado logo from the Media Library.', 'Click **Save and continue**.']],
        '**Social profiles**: leave empty unless your instructor gives you profile links. Click **Save and continue**.',
        '**Personal preferences**: choose **No** for usage tracking and skip the newsletter. Click **Save and continue**, then **Finish configuration**.'
      ] },
      { h: 'Check your XML sitemap', steps: [
        'A sitemap is a list of all your pages that search engines read. Yoast creates it for you.',
        'Open a new browser tab and go to {{copy:' + SITE + '/sitemap_index.xml}}.',
        'You should see a list with entries such as `page-sitemap.xml` and `post-sitemap.xml`. Click **page-sitemap.xml** and confirm your pages (Home, Our Story, Menu, Contact…) are listed.',
        'Write the sitemap address in your care plan under **SEO**.'
      ] },
      { callout: 'warn', title: 'One SEO plugin only', text: 'Never install two SEO plugins (for example Yoast **and** Rank Math). They both write page titles and sitemaps, and they fight each other.' },
      { callout: 'free', title: 'On a live site', text: 'After launch you would also add the site to **Google Search Console** (free), submit the sitemap address there, and create a **Google Business Profile** so the restaurant appears on Google Maps. Add both to your care plan under **Before launch**.' }
    ],
    resources: { values: [['Plugin', 'Yoast SEO (Team Yoast)'], ['Site represents', 'Organization'], ['Organization name', 'Mesurado Kitchen & Palm Bar'], ['Sitemap', '`/sitemap_index.xml`']] },
    expected: 'Yoast SEO is active, the Organization name and logo are set, and the sitemap opens and lists your pages.',
    troubleshoot: [
      { q: 'The sitemap shows “Page not found”.', a: 'Go to **Settings → Permalinks** and click **Save Changes** without changing anything. This refreshes the web addresses. Then reload the sitemap.' },
      { q: 'Yoast keeps showing upgrade adverts.', a: 'That is normal for the free version. Close them; nothing in this course needs Yoast Premium.' }
    ],
    checklist: ['Yoast SEO is installed and active.', 'Site representation is **Organization** with the Mesurado name and logo.', 'The sitemap at `/sitemap_index.xml` lists my pages.', 'The “Discourage search engines” reminder is in my care plan.'] },

  /* ------------------------------------------------------------------ 12.3 */
  { id: 'm12-l03', title: 'On-page and local SEO: titles, descriptions, headings and images', time: '50 min', tools: 'Yoast SEO (free)', keywords: 'seo title meta description focus keyphrase headings h1 h2 alt text internal links local seo nap',
    objective: 'Write search-friendly titles and descriptions for the main pages and check that headings and images follow good practice.',
    build: 'SEO titles and meta descriptions on six key pages, a heading and alt-text audit, and consistent business details.',
    before: ['Finish {{lesson:m12-l02}}.'],
    body: [
      { callout: 'info', title: 'Title vs. meta description', text: ['The **SEO title** is the blue link people click in Google results. Keep it under about **60 characters**.', 'The **meta description** is the short grey text under it. It does not change your ranking directly, but a good one makes people click. Aim for **120–155 characters**.'] },
      { h: 'Add a title and description to each key page', steps: [
        'Go to **Pages → All Pages** and open **Home** in the editor.',
        'Scroll below the page content to the **Yoast SEO** box (or click the Yoast icon in the top-right toolbar).',
        'In **Focus keyphrase**, type the main phrase from the table below.',
        'In **SEO title**, delete what is there and paste the title from the copy box. In **Meta description**, paste the description.',
        'Check the **Google preview**: the text should not be cut off with “…”.',
        'Click **Save**.',
        'Repeat for **Menu**, **Reservations**, **Private Dining**, **Our Story** and **Contact**.'
      ] },
      { table: { head: ['Page', 'Focus keyphrase'], rows: [
        ['Home', '`Liberian restaurant Monrovia`'],
        ['Menu', '`Liberian food menu`'],
        ['Reservations', '`book a table Monrovia`'],
        ['Private Dining', '`private dining Monrovia`'],
        ['Our Story', '`Mesurado Kitchen story`'],
        ['Contact', '`restaurant Mamba Point`']
      ] } },
      { copy: { label: 'Home — SEO title / meta description', text: 'Mesurado Kitchen & Palm Bar | Liberian Restaurant, Monrovia\n\nLiberian cooking by the river in Mamba Point, Monrovia. Palm butter, jollof and fresh fish, palm wine at sunset. Book a table today.' } },
      { copy: { label: 'Menu — SEO title / meta description', text: 'Menu | Liberian Food & Drinks | Mesurado Kitchen\n\nSee our full menu: breakfast, lunch, dinner, seasonal specials, palm wine and cocktails. Fresh Liberian food cooked daily in Monrovia.' } },
      { copy: { label: 'Reservations — SEO title / meta description', text: 'Book a Table in Monrovia | Mesurado Kitchen & Palm Bar\n\nReserve your table at Mesurado Kitchen & Palm Bar in Mamba Point. Riverside terrace, groups welcome. Book online or call +231 77 512 3480.' } },
      { copy: { label: 'Private Dining — SEO title / meta description', text: 'Private Dining & Events in Monrovia | Mesurado Kitchen\n\nHost birthdays, business dinners and celebrations in our River Room or on the terrace. Set menus for 10 to 60 guests in Mamba Point.' } },
      { copy: { label: 'Our Story — SEO title / meta description', text: 'Our Story | Mesurado Kitchen & Palm Bar\n\nHow a family kitchen by the Mesurado River became a Monrovia favourite. Meet the people, the market and the recipes behind Mesurado.' } },
      { copy: { label: 'Contact — SEO title / meta description', text: 'Contact & Directions | Restaurant in Mamba Point, Monrovia\n\nFind Mesurado Kitchen & Palm Bar at 18 Waterside Road, Mamba Point. Opening hours, phone, WhatsApp, email and directions.' } },
      { h: 'Heading audit', note: 'Search engines and screen readers use headings to understand the structure of a page.', steps: [
        'Open the **Home** page in the editor. Click the **Document Overview** button (the list icon at the top left) and choose **Outline**.',
        'Check there is **exactly one H1** on the page. Every other section title should be **H2**, and titles inside a section **H3**.',
        'Look for warnings such as “Incorrect heading level” or headings that skip a level (H2 straight to H4). Fix them by selecting the heading and changing the level in the toolbar.',
        'Repeat for every page. Note any fixes in your care plan.'
      ] },
      { h: 'Image alt-text audit', steps: [
        'Go to **Media → Library** and switch to **List view** (the list icon above the images).',
        'Click each photo that shows something meaningful (dishes, the team, the terrace). Check **Alternative Text** matches the alt text in the [Project Asset Library](#/assets). Copy it from there if it is empty.',
        'Images used only as decoration behind text (for example hero backgrounds) may keep an empty alt text.',
        'Click **Update** (or simply close — alt text saves automatically in the Media Library).'
      ] },
      { h: 'Local SEO: consistent business details', note: 'Google trusts a business more when its **Name, Address and Phone (NAP)** are written exactly the same everywhere.', steps: [
        'Open the footer, the Contact page and the Reservations page.',
        'Check the name is always `Mesurado Kitchen & Palm Bar`, the address is always `18 Waterside Road, Mamba Point, Monrovia, Liberia`, and the phone number is always `+231 77 512 3480`.',
        'Fix any differences (for example “Mesurado Restaurant” or a missing country code).'
      ] },
      { h: 'Internal links', steps: [
        'Open **Our Story**. Make sure at least one sentence links to the **Menu** page and one to **Reservations** (select the words → toolbar link button → type the page name → choose it).',
        'Internal links help visitors move around and help search engines discover every page.'
      ] }
    ],
    resources: { content: [] },
    expected: 'Six key pages have a focus keyphrase, SEO title and meta description; every page has one H1; meaningful images have alt text; and the name, address and phone are identical everywhere.',
    troubleshoot: [
      { q: 'Yoast shows a red or orange dot even after I added everything.', a: 'The dots are advice, not rules. Aim for green on the **meta description length** and **SEO title width**. Do not stuff the keyphrase into every sentence to get a green dot — write naturally for people.' },
      { q: 'I can’t find the Yoast box in the editor.', a: 'Click the **Options (⋮)** menu at the top right → **Preferences → Panels** and make sure **Yoast SEO** is switched on. You can also click the Yoast icon in the top toolbar.' }
    ],
    checklist: ['Home, Menu, Reservations, Private Dining, Our Story and Contact each have an SEO title and meta description.', 'Every page has exactly one H1 and no skipped heading levels.', 'All meaningful images have alt text.', 'Name, address and phone are identical in the footer, Contact and Reservations.', 'Our Story links to Menu and Reservations.'] },

  /* ------------------------------------------------------------------ 12.4 */
  { id: 'm12-l04', title: 'Website security: accounts, logins and plugins', time: '45 min', tools: 'Limit Login Attempts Reloaded · Two Factor (both free)', keywords: 'security password admin user roles two factor 2fa login attempts brute force https ssl update unused plugins themes',
    objective: 'Protect the site against the most common attacks: weak passwords, guessed logins and out-of-date or unused software.',
    build: 'Strong admin password, correct user roles, login-attempt limits, two-factor login, and no unused plugins or themes.',
    before: ['Finish {{lesson:m12-l03}}.', 'A password manager or a safe notebook for new passwords.'],
    body: [
      { callout: 'info', title: 'How most WordPress sites get hacked', text: 'Almost never through clever code. The usual causes are **weak or reused passwords**, **out-of-date plugins and themes**, and **plugins nobody uses any more but nobody removed**. This lesson closes those doors.' },
      { h: '1. Strong password and a safe username', steps: [
        'Go to **Users → Profile**.',
        'Under **Account Management**, click **Set New Password**. WordPress suggests a long random password — keep it (or make one of at least 16 characters).',
        'Save it in your password manager **before** you click **Update Profile**.',
        'Check **Display name publicly as**: choose a name that is **not** your login username (for example `Mesurado Team`). Otherwise your username appears on blog posts and helps attackers.',
        'Click **Update Profile**.'
      ] },
      { h: '2. The right role for every person', steps: [
        'Go to **Users → All Users**.',
        'Only people who manage the whole site should be **Administrator**. Someone who only writes Journal posts should be an **Author** or **Editor**.',
        'Delete any test accounts you no longer need.',
        'Record each account and its role in your care plan under **Security**.'
      ] },
      { table: { head: ['Role', 'Can do', 'Give it to'], rows: [
        ['**Administrator**', 'Everything, including plugins, themes and users', 'The web manager only (1–2 people)'],
        ['**Editor**', 'Publish and edit all pages and posts', 'Restaurant manager who updates the menu'],
        ['**Author**', 'Write and publish their own posts', 'Staff who write Journal posts'],
        ['**Shop manager** (WooCommerce)', 'Manage products and orders', 'Person handling online orders']
      ] } },
      { h: '3. Limit login attempts', steps: [
        'Go to **Plugins → Add New Plugin** and search `Limit Login Attempts Reloaded`. Install and **Activate** it.',
        'If a welcome screen appears, choose the **free** option and skip any sign-up.',
        'Open **Limit Login Attempts** in the left menu → **Settings**.',
        'Keep the defaults: **4 allowed retries**, **20 minutes lockout**. Click **Save Settings** if you changed anything.',
        'Test: open a private browser window, go to `' + SITE + '/wp-admin` and enter a wrong password twice. You should see a message saying how many attempts remain.'
      ] },
      { h: '4. Two-factor login (2FA)', note: 'With 2FA, a stolen password is not enough — the attacker also needs your phone.', steps: [
        'Go to **Plugins → Add New Plugin**, search `Two Factor` and install the plugin by **WordPress.org Contributors**. **Activate** it.',
        'Go to **Users → Profile** and scroll to **Two-Factor Options**.',
        'Tick **Authenticator App**. Scan the QR code with a free authenticator app on your phone (Google Authenticator, Microsoft Authenticator or similar) and type the 6-digit code to confirm.',
        'Also tick **Backup Verification Codes** → **Generate Verification Codes**. Download or print them and keep them somewhere safe — they get you in if you lose your phone.',
        'Click **Update Profile**. Log out and log back in to test it.'
      ] },
      { callout: 'warn', title: 'Don’t lock yourself out', text: 'Keep the backup codes before you log out. If you are ever locked out on your **local** site, open LocalWP → **Go to site folder**, then rename the folder `app/public/wp-content/plugins/two-factor` (for example to `two-factor-off`). You can then log in with just your password. Rename it back afterwards.' },
      { h: '5. Remove what you don’t use', steps: [
        'Go to **Plugins → Installed Plugins**. Any plugin that is **deactivated** and not needed → click **Delete**.',
        'Go to **Appearance → Themes**. Keep **Astra** (active) and **one** default WordPress theme (for example Twenty Twenty-Five) as an emergency fallback. Delete all other themes.',
        'Go to **Dashboard → Updates** and install any available updates (but make a backup first — next lesson. For now, just note what needs updating in your care plan).'
      ] },
      { callout: 'free', title: 'On a live site', text: ['Make sure the site uses **HTTPS** (a padlock in the address bar). Most hosts give a free **Let’s Encrypt** certificate — turn it on in the hosting control panel, then change both addresses in **Settings → General** to start with `https://`.', 'Use a different, strong password for the hosting account and the database. Write in your care plan who holds those logins.'] }
    ],
    resources: { values: [['Login retries', '4'], ['Lockout time', '20 minutes'], ['2FA methods', 'Authenticator App + Backup Verification Codes'], ['Themes kept', 'Astra + one default theme']] },
    expected: 'You log in with a strong password plus a 6-digit code, wrong passwords are limited, every user has the right role, and no unused plugins or themes remain.',
    troubleshoot: [
      { q: 'I locked myself out after too many wrong passwords.', a: 'Wait for the lockout time (20 minutes). On a local site you can also rename the folder `limit-login-attempts-reloaded` in **wp-content/plugins** to switch the plugin off, log in, then rename it back.' },
      { q: 'The authenticator code is always rejected.', a: 'The time on your phone and computer must match. Turn on **automatic date and time** on both devices, then try a fresh code.' }
    ],
    checklist: ['My admin password is long, unique and saved in a password manager.', 'My public display name is not my username.', 'Every user has the lowest role they need; test accounts are deleted.', 'Limit Login Attempts Reloaded is active and tested.', 'Two-factor login works, and my backup codes are stored safely.', 'Unused plugins and extra themes are deleted.'] },

  /* ------------------------------------------------------------------ 12.5 */
  { id: 'm12-l05', title: 'Backups and restoring: UpdraftPlus and LocalWP exports', time: '45 min', tools: 'UpdraftPlus (free) · LocalWP', keywords: 'backup restore updraftplus database files schedule export xml 3-2-1 rule disaster recovery',
    objective: 'Create automatic and manual backups, store copies in more than one place, and prove that a backup can be restored.',
    build: 'A scheduled UpdraftPlus backup, a downloaded backup set, a LocalWP site export and a successful test restore.',
    before: ['Finish {{lesson:m12-l04}}.', 'At least 1 GB free on your computer, and a USB drive or cloud folder (Google Drive, OneDrive).'],
    body: [
      { callout: 'info', title: 'The 3-2-1 rule', text: 'Keep **3** copies of your site, on **2** different kinds of storage (for example your laptop and a USB drive), with **1** copy somewhere else (for example cloud storage). A backup that only lives on the same computer as the site disappears when that computer dies.' },
      { h: 'What a WordPress backup contains', steps: [
        '**The database** — all your text, pages, menus, settings, users and orders.',
        '**The files** — uploads (images), the theme, plugins and configuration.',
        'You need **both** to bring a site back. UpdraftPlus saves them as separate files.'
      ] },
      { h: 'Install and schedule UpdraftPlus', steps: [
        'Go to **Plugins → Add New Plugin**, search `UpdraftPlus` (author **TeamUpdraft**). Install and **Activate**.',
        'Go to **Settings → UpdraftPlus Backups → Settings** tab.',
        '**Files backup schedule**: choose **Weekly** and **retain 4** backups.',
        '**Database backup schedule**: choose **Daily** and **retain 14** backups. (The database changes most often — every new order or form entry.)',
        '**Remote storage**: on a live site you would choose **Google Drive** or **Dropbox** here. On your local site, leave it empty — you will copy the files yourself.',
        'Scroll down and click **Save Changes**.'
      ] },
      { h: 'Run your first manual backup', steps: [
        'Open the **Backup / Restore** tab and click **Backup Now**.',
        'Keep both **Include your database** and **Include your files** ticked. Click **Backup Now**.',
        'Wait for the progress bar to finish. A new row appears under **Existing backups**.',
        'Click each button in that row — **Database**, **Plugins**, **Themes**, **Uploads**, **Others** — and then **Download to your computer**.',
        'Put the downloaded files in a folder named `Mesurado-backup-YYYY-MM-DD` (today’s date) inside your project folder, and copy that folder to your USB drive or cloud storage.'
      ] },
      { h: 'Export the whole site from LocalWP', steps: [
        'Open the **LocalWP** app. Right-click **mesurado-kitchen** → **Export**.',
        'Keep the default exclusions and click **Export site**. Save the `.zip` in your project folder.',
        'This single file can recreate the whole site on any computer with LocalWP (right-click in Local → **Import site**). It is also the file you submit with your final project.'
      ] },
      { h: 'Export your content as XML', steps: [
        'In WordPress, go to **Tools → Export**.',
        'Choose **All content** and click **Download Export File**. Save the `.xml` in your project folder.',
        'This file contains posts, pages, menus and products in a format any WordPress site can import. It does **not** contain settings or images — that is why it is an extra, not your main backup.'
      ] },
      { h: 'Test a restore (the most important step)', note: 'A backup you have never restored is only a hope.', steps: [
        'Make a small, harmless change: open the **Our Story** page, add the word `TEST` at the top, and click **Save**. View the page to confirm “TEST” appears.',
        'Go to **Settings → UpdraftPlus Backups → Backup / Restore**. On the backup you made earlier, click **Restore**.',
        'Tick **Database** only (that is where page text lives) and click **Next**, then **Restore**.',
        'Wait until you see **Restore successful**, then click **Return to UpdraftPlus configuration**. You may need to log in again.',
        'Open **Our Story**: the word “TEST” should be gone.',
        'Write today’s date in your care plan under **Last successful restore test**.'
      ] },
      { callout: 'warn', title: 'Always back up before updating', text: 'Before you update WordPress, a theme or a plugin, run **Backup Now**. If the update breaks something, you can restore in minutes.' }
    ],
    resources: { values: [['Files schedule', 'Weekly, keep 4'], ['Database schedule', 'Daily, keep 14'], ['Backup folder name', '`Mesurado-backup-YYYY-MM-DD`'], ['Extra exports', 'LocalWP `.zip` + Tools → Export `.xml`']] },
    expected: 'UpdraftPlus runs on a schedule, you have a downloaded backup set and a LocalWP export in two places, and you have restored a backup successfully.',
    troubleshoot: [
      { q: 'The backup stops part-way or never finishes.', a: 'Large uploads can time out. In LocalWP make sure the site is running, then try again with **Include your files** unticked (database only). Then back up files separately. Delete old backups in **Existing backups** if disk space is low.' },
      { q: 'After restoring, I am logged out or see the login screen.', a: 'That is normal — the restored database contains the login sessions from backup time. Log in again with your password and 2FA code.' }
    ],
    checklist: ['UpdraftPlus is scheduled: files weekly, database daily.', 'I have downloaded a full backup set and stored it in two places.', 'I have a LocalWP export `.zip` in my project folder.', 'I have a content export `.xml` in my project folder.', 'I restored a backup successfully and recorded the date in my care plan.'] },

  /* ------------------------------------------------------------------ 12.6 */
  { id: 'm12-l06', title: 'Performance, accessibility and quality checks with Lighthouse', time: '40 min', tools: 'Google Chrome (Lighthouse)', keywords: 'performance speed lighthouse pagespeed core web vitals accessibility best practices image size lazy load mobile',
    objective: 'Measure the site’s speed, accessibility, best practices and SEO, and fix the most important problems.',
    build: 'A Lighthouse report for the Home and Menu pages, with scores recorded and at least three improvements made.',
    before: ['Finish {{lesson:m12-l05}} — make a fresh backup before changing anything.', 'Google Chrome installed.'],
    body: [
      { callout: 'info', title: 'Why speed matters', text: 'Many Mesurado guests will open the site on a phone with mobile data. A slow page costs them money and patience, and Google ranks slow pages lower. Lighthouse is a free checker built into Chrome.' },
      { h: 'Run a Lighthouse report', steps: [
        'Log out of WordPress, or open a **private / incognito** window (the admin bar slows pages down and changes the result).',
        'Go to `' + SITE + '`.',
        'Press {{kbd:F12}} to open DevTools. Click the **Lighthouse** tab (if you can’t see it, click **»** to find it).',
        'Mode: **Navigation**. Device: **Mobile**. Categories: tick **Performance**, **Accessibility**, **Best practices** and **SEO**.',
        'Click **Analyze page load** and wait about 30 seconds.',
        'Write the four scores in your care plan under **Performance**. Repeat for the **Menu** page.'
      ] },
      { table: { head: ['Score', 'Meaning'], rows: [
        ['**90–100** (green)', 'Good — nothing urgent.'],
        ['**50–89** (orange)', 'Needs improvement — fix the top suggestions.'],
        ['**0–49** (red)', 'Poor — fix before launch.']
      ] } },
      { callout: 'warn', title: 'Local scores are only a guide', text: 'Your laptop is both the server and the visitor, so Performance numbers will differ from a real host. Accessibility, Best practices and SEO scores are reliable — focus on those.' },
      { h: 'Fix the most common problems', steps: [
        ['**Images too large** (“Properly size images”, “Serve images in next-gen formats”):', ['The project images are already `.webp` and correctly sized. If you uploaded any other photo, resize it to a maximum of **1920 px** wide and re-upload.', 'In the editor, make sure images in columns use the **Large** or **Medium** size, not **Full size**.']],
        ['**Low contrast text** (Accessibility):', ['Lighthouse lists the exact element. Make the text darker or the background lighter until it passes.']],
        ['**Missing alt text** or **links without a name**:', ['Add alt text (see {{lesson:m12-l03}}). Make sure icon-only buttons (for example social icons) have a label.']],
        ['**Too many plugins / scripts**:', ['Each active plugin can add code to every page. Keep only the plugins this course uses.']],
        ['**Heading order**:', ['Fix any skipped heading levels the report lists.']]
      ] },
      { h: 'Check on real screen sizes', steps: [
        'In DevTools, click the **Toggle device toolbar** button (phone and tablet icon) or press {{kbd:Ctrl}} + {{kbd:Shift}} + {{kbd:M}}.',
        'Choose **iPhone SE**, then **iPad Air**, then **Responsive** at 1440 px wide.',
        'Scroll each page. Check nothing overflows sideways, buttons are easy to tap, and text is readable without zooming.',
        'Run Lighthouse again after your fixes and record the new scores next to the old ones.'
      ] }
    ],
    resources: { values: [['Tool', 'Chrome DevTools → Lighthouse'], ['Device', 'Mobile'], ['Target', '90+ for Accessibility, Best practices and SEO']] },
    expected: 'Lighthouse scores for Home and Menu are recorded before and after, Accessibility, Best practices and SEO are 90 or above, and the pages work at phone, tablet and desktop widths.',
    troubleshoot: [
      { q: 'Lighthouse says “The page loaded too slowly” or fails to run.', a: 'Close other heavy programs, make sure the LocalWP site is running, and run it again in an incognito window with no extensions.' },
      { q: 'SEO score is low because “Page is blocked from indexing”.', a: 'That is caused by the **Discourage search engines** setting on your local site ({{lesson:m12-l02}}). It is expected locally — note it and remember to untick it on launch day.' }
    ],
    checklist: ['I ran Lighthouse (Mobile) on Home and Menu and recorded the scores.', 'I made at least three improvements and re-tested.', 'Accessibility, Best practices and SEO are 90 or higher (or I have noted why not).', 'Every page works at phone, tablet and desktop widths.'] },

  /* ------------------------------------------------------------------ 12.7 */
  { id: 'm12-l07', title: 'Maintenance routine, updates and client handover', time: '40 min', tools: 'WordPress Site Health', keywords: 'maintenance updates site health routine weekly monthly checklist handover client documentation broken links spam',
    objective: 'Update WordPress safely, use Site Health, and set up a written maintenance routine you could hand to the restaurant owner.',
    build: 'A safe update completed, a green Site Health status (or a list of what to fix), and a finished care plan with a maintenance calendar.',
    before: ['Finish {{lesson:m12-l06}}.', 'A fresh backup from {{lesson:m12-l05}}.'],
    body: [
      { h: 'The safe update routine', steps: [
        'Run **UpdraftPlus → Backup Now** (database and files).',
        'Go to **Dashboard → Updates**. Read what is waiting: WordPress core, plugins, themes and translations.',
        'Update **plugins first**, one at a time if possible. After each one, open the Home page in another tab and check it still looks right.',
        'Then update **themes**, then **WordPress core**.',
        'Visit the key pages: Home, Menu, Reservations (submit a test form), Order Online (add a product to the cart) and Contact.',
        'If something broke, restore the backup you just made ({{lesson:m12-l05}}), and note which update caused the problem.'
      ] },
      { callout: 'tip', title: 'Read before you click', text: 'If a plugin shows a **major** version jump (for example 4.9 → 5.0), read its changelog first (**View version details**). Major updates are more likely to change how things work.' },
      { h: 'Use Site Health', steps: [
        'Go to **Tools → Site Health**.',
        'Look at the **Status** tab. Open each item under **critical issues** and **recommended improvements**.',
        'Fix what you can: for example remove inactive themes and plugins, or update PHP in LocalWP (**Site overview → PHP version**) if it is marked out of date.',
        'Some items (such as “Your site is not using HTTPS” or “Scheduled events are late”) are normal on a local site. Note them as **live site** tasks.',
        'Open the **Info** tab → **Copy site info to clipboard**. Paste it into your care plan — it records versions and settings on today’s date.'
      ] },
      { h: 'Keep content fresh and tidy', steps: [
        'Go to **Comments**. Delete spam and approve genuine comments (or turn comments off if the restaurant does not want them: **Settings → Discussion**).',
        'Check **Fluent Forms → Entries** and **WooCommerce → Orders** for anything waiting.',
        'Click through the main menu and footer links. Every link should open the right page — no “Page not found”.',
        'Check that opening hours, prices, and events on the site are still correct. Out-of-date information is the most common complaint about restaurant websites.'
      ] },
      { h3: 'Your maintenance calendar' },
      { html: '<div class="cal"><div><h4>Every week</h4><ul><li>Check form entries and orders</li><li>Delete spam comments</li><li>Confirm the automatic backups ran</li></ul></div><div><h4>Every month</h4><ul><li>Backup, then run all updates</li><li>Check Site Health</li><li>Test the forms and the cart</li><li>Click every menu and footer link</li></ul></div><div><h4>Every 3 months</h4><ul><li>Test-restore a backup</li><li>Run Lighthouse and compare scores</li><li>Review users and roles; change passwords</li><li>Update menu prices, events and photos</li></ul></div><div><h4>Every year</h4><ul><li>Renew the domain and hosting</li><li>Review the privacy policy and legal page</li><li>Remove plugins nobody uses</li><li>Refresh SEO titles and descriptions</li></ul></div></div>' },
      { h: 'Complete your care plan and handover notes', steps: [
        'Copy the four boxes of the calendar above into section **5. Maintenance routine** of your care plan.',
        'Under **Before launch**, make sure you have: untick “Discourage search engines”, turn on HTTPS, add remote backup storage, set up Google Search Console and Google Business Profile.',
        'Add a short **Who to call** section: who manages the site, who holds the hosting login, and where the backups are stored.',
        'Read the whole plan as if you were the restaurant owner. Could they follow it without you? Simplify anything that is unclear.',
        'Save the final plan in your project folder. It is part of your final submission.'
      ] }
    ],
    resources: { links: ['**Tools → Site Health** — WordPress’s built-in health checker.', '**Dashboard → Updates** — every waiting update in one place.'] },
    expected: 'WordPress, the theme and the plugins are up to date after a backup, Site Health has no critical issues you can fix locally, and the care plan is complete with a maintenance calendar and launch checklist.',
    troubleshoot: [
      { q: 'After an update the site shows “There has been a critical error on this website”.', a: 'Restore the backup you made before updating. If you cannot reach the dashboard, rename the folder of the plugin you just updated in **wp-content/plugins** (LocalWP → **Go to site folder**), log in, and restore from **UpdraftPlus**.' },
      { q: 'Site Health says “You should remove inactive themes”, but I want a fallback theme.', a: 'Keeping **one** default theme as a fallback is good practice. You can ignore this recommendation for that one theme.' }
    ],
    checklist: ['I made a backup, then updated plugins, themes and WordPress core, and tested the key pages.', 'Site Health shows no critical issues that can be fixed locally.', 'I saved the Site Health info in my care plan.', 'My care plan has a weekly, monthly, quarterly and yearly routine.', 'My care plan has a complete **Before launch** list and a **Who to call** section.'] }
  ] });
})();
