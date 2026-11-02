/* Module 10 — the homepage, one lesson per section, in reference order. */
window.GUIDE = window.GUIDE || {};
GUIDE.modules = GUIDE.modules || [];
(function () {
var P = GUIDE.project;
function dish(id) { return P.menu.filter(function (m) { return m[0] === id; })[0]; }
function money(n) { return 'US$ ' + (n % 1 ? n.toFixed(2) : n); }
var featuredRows = P.homeFeatured.map(function (id, i) { var m = dish(id); return [String(i + 1), '{{asset:dish-' + id + '}}', m[7] || '—', '**' + m[2] + '**', money(m[3]), m[5]]; });

GUIDE.modules.push({ id: 'm10', title: 'Building the Homepage', summary: 'Eleven sections, built one at a time in the exact order of the reference.',
  lessons: [
  { id: 'm10-l01', title: 'Homepage blueprint and setup', time: '20 min', keywords: 'homepage plan sections order list view rename',
    objective: 'Understand the homepage structure and prepare the Home page for building.',
    build: 'An open Home page in the editor with a clear plan of the 11 sections.',
    before: ['Modules 06–09 complete: images uploaded, design system set, patterns created, header and footer done.'],
    body: [
      { h: 'The 11 sections, top to bottom', table: { head: ['#', 'Section', 'Background', 'Built with', 'Lesson'], rows: [
        ['1', 'Hero slider (3 slides)', 'Photos with dark overlay', 'Spectra **Slider**', '{{lesson:m10-l02|10.2}}'],
        ['2', 'Welcome to Mesurado', 'Ivory', '**MK Split** pattern', '{{lesson:m10-l03|10.3}}'],
        ['3', 'Signature dishes (6 cards)', 'Beige', 'MK Section + Grid + **MK Card** ×6', '{{lesson:m10-l04|10.4}}'],
        ['4', 'The experience', 'Ivory', 'MK Split (image right) + Spectra **Info Box** ×4', '{{lesson:m10-l05|10.5}}'],
        ['5', 'Reservation band', 'Dark green', '**MK Dark Band** + Columns', '{{lesson:m10-l06|10.6}}'],
        ['6', 'Seasonal specials (3 cards)', 'Ivory', 'MK Section + Grid + dark cards', '{{lesson:m10-l07|10.7}}'],
        ['7', 'Private dining and catering', 'Beige', 'MK Section + Columns 50/50', '{{lesson:m10-l08|10.8}}'],
        ['8', 'What our guests say (3 reviews)', 'Ivory', 'MK Section + Grid', '{{lesson:m10-l09|10.9}}'],
        ['9', 'A look inside (4 photos)', 'Beige', 'MK Section + Grid of images', '{{lesson:m10-l10|10.10}}'],
        ['10', 'Visit Mesurado', 'Ivory', 'Columns + Spectra **Google Map**', '{{lesson:m10-l11|10.11}}'],
        ['11', 'Newsletter', 'Beige', 'Columns + **Fluent Forms**', '{{lesson:m10-l12|10.12}}']
      ] } },
      { h: 'Prepare the page', steps: [
        'Go to **Pages → All Pages** and click **Home** to open it in the editor.',
        'Check the Astra page settings from {{lesson:m08-l03}}: Full Width, No Sidebar, title disabled, Transparent Header **Enabled**.',
        'Open the reference Home page in another browser tab so you can compare as you work.',
        'Open **Document Overview** (three-lines icon). You will use it to select sections and to rename them.'
      ] },
      { h: 'Name your sections (good habit)', steps: [
        'Each time you add a section Group, open **Document Overview**, click the **⋮** beside the Group and choose **Rename**.',
        'Name it with its number and name, for example `02 Welcome`. This makes long pages easy to navigate and fix.'
      ] },
      { callout: 'tip', title: 'Save often', text: 'Click **Save** after every section. If something goes wrong, the editor’s **Revisions** (Page tab → Revisions) let you go back to an earlier save.' }
    ],
    visual: [{ diagram: 'home-map', caption: 'The homepage sections in order, with their background colours.' }],
    expected: 'The Home page is open in the editor, settings are correct, and you know the order of the 11 sections.',
    checklist: ['I reviewed the 11 sections in the reference.', 'Home page settings are correct (full width, no title, transparent header).', 'I know how to rename a block in Document Overview.'] },

  { id: 'm10-l02', title: 'Section 1 — Hero slider', time: '75 min', tools: 'Spectra Slider', keywords: 'hero slider carousel slides spectra arrows dots background overlay 640',
    objective: 'Build the full-width, three-slide hero slider with photos, dark overlay, text and two buttons per slide.',
    build: 'A 640 px tall slider under the transparent header, with arrows and dots, no autoplay.',
    before: ['Finish {{lesson:m10-l01}}.', 'Spectra installed ({{lesson:m05-l01}}).', 'Hero images uploaded: {{asset:hero-terrace}}, {{asset:hero-palm-bar}}, {{asset:hero-terrace-table}}.'],
    body: [
      { h: 'Description', p: 'The hero fills the top of the homepage. Each slide is a dark-tinted photograph with, at the bottom left: a small gold label, a very large heading, an intro paragraph and two large buttons. Arrows and dots below the text change slides. The reference does not auto-play (the design system discourages moving carousels).' },
      { h: 'Insert and set up the slider', steps: [
        'Click at the very top of the Home page content. Click **+** and search `Slider`. Choose the **Slider** block from Spectra.',
        'In the toolbar, click **Align** → **Full width**.',
        'The slider starts with two slides. Select the Slider (Document Overview → **Slider**) and look for **Add Slide** (a **+** button in the block toolbar or in the sidebar) to add a third slide.',
        ['Select the **Slider** and set in the sidebar (names vary slightly by Spectra version):', ['**Autoplay**: OFF', '**Infinite loop**: ON', '**Transition**: Slide (or Fade)', '**Navigation**: Arrows and Dots', '**Height / Minimum height**: `640` px (desktop), `560` px (mobile)', 'Arrow and dot colour: `#fdf9f2`']]
      ] },
      { h: 'Build slide 1', steps: [
        'In Document Overview, select the first **Slide**.',
        ['Open the slide’s **Style → Background** settings:', ['**Background type**: Image → choose {{asset:hero-terrace}}.', '**Position**: center center; **Size**: Cover.', '**Overlay**: Color `#0e1e16`, **opacity** `62` %.']],
        'Set the slide’s content alignment to **left** and vertical alignment to **bottom** (or set padding so content sits low). Padding: top `184` px (the header is 88 px tall and sits over the slide), bottom `96` px, left and right `32` px. Content width: `1240` px if the option exists.',
        'Inside the slide, add a **Paragraph** with the eyebrow text. Give it the classes `mk-eyebrow on-dark` (Advanced → Additional CSS class(es)).',
        'Add a **Heading**. Set its level to **H1** for slide 1 (only one H1 per page). Type the slide title. Set its colour to `#fdf9f2` and give it the class `mk-display` (Advanced → Additional CSS class(es)) — the helper CSS makes it 64 px on computers and 40 px on phones.',
        'Add a **Paragraph** with the intro. Size `18` px, colour `#fdf9f2`, maximum width about 620 px (put it in a Group with content width 620 px, or simply keep the slide content width narrow).',
        'Add a **Buttons** block with two buttons: **Reserve a Table** (background `#d1b686`, text `#0e1e16`, large padding 18/32) and **Explore Menu** (Outline, text and border `#fdf9f2`). Link them to `/reservations/` and `/menu/`.'
      ] },
      { content: 'home.s1' },
      { h: 'Build slides 2 and 3', steps: [
        'The fastest way: in Document Overview, select all blocks inside slide 1 (click the first, {{kbd:Shift}}-click the last), press {{kbd:Ctrl}} + {{kbd:C}}, select slide 2 and paste with {{kbd:Ctrl}} + {{kbd:V}}. Repeat for slide 3.',
        'Change the texts and links using the copy boxes below. Change slide 2 and 3 headings to **H2**.',
        'Set slide 2 background to {{asset:hero-palm-bar}} and slide 3 to {{asset:hero-terrace-table}}, each with the same `#0e1e16` overlay at 62 %.'
      ] },
      { content: ['home.s2', 'home.s3'] },
      { h: 'Check it', steps: [
        'Click **Save**, then view the page.',
        'The transparent header should sit on top of the photo with the light logo.',
        'Click the arrows and the dots — the slides change. Try the keyboard: click a dot, then press {{kbd:Tab}} to reach arrows and {{kbd:Enter}} to activate.'
      ] },
      { callout: 'warn', title: 'No Slider block in your Spectra?', text: 'Use a core **Cover** block instead (full width, minimum height 640 px, image {{asset:hero-terrace}}, overlay `#0e1e16` at 62 %) with slide 1’s content only. See {{ts:spectra-slider-missing}}. This is an accepted alternative.' }
    ],
    visual: [{ diagram: 'hero-slider', caption: 'Inside one slide: background photo, overlay, then eyebrow, heading, intro and buttons stacked at the bottom left. Arrows and dots below.' }],
    resources: { assets: ['hero-terrace', 'hero-palm-bar', 'hero-terrace-table'], content: ['home.s1', 'home.s2', 'home.s3'],
      values: [['Slider height', '640 px desktop · 560 px mobile'], ['Overlay', '{{hex:#0e1e16}} at 62 %'], ['Title size', '64 px desktop · 40 px mobile, Playfair Display 600, {{hex:#fdf9f2}}'], ['Intro', '18 px, {{hex:#fdf9f2}}'], ['Primary button on dark', 'background {{hex:#d1b686}}, text {{hex:#0e1e16}}'], ['Outline button on dark', 'text and border {{hex:#fdf9f2}}'], ['Slide padding', '184 px top · 96 px bottom · 32 px sides']] },
    expected: 'The homepage opens with a full-width photo slider, dark-tinted, with gold labels, big ivory headings and two buttons per slide. Arrows and dots switch between three slides; nothing moves on its own.',
    troubleshoot: ['spectra-slider-missing', 'text-hidden-under-header', 'transparent-header-not-working'],
    checklist: ['The slider is full width and about 640 px tall.', 'Three slides with the correct photos, overlays, texts and buttons.', 'Slide 1 title is H1; slides 2 and 3 use H2.', 'Arrows and dots work; autoplay is off.', 'All six buttons link to the right pages.'] },

  { id: 'm10-l03', title: 'Section 2 — Welcome to Mesurado', time: '25 min', keywords: 'welcome split image text dining room discover our story',
    objective: 'Build a two-column section with a photo on the left and text on the right.',
    build: 'The “Welcome to Mesurado” section using the MK Split pattern.',
    before: ['Finish {{lesson:m10-l02}}.'],
    body: [
      { h: 'Description', p: 'Ivory background. Left: a 3:2 photo of the dining room. Right: gold eyebrow, H2 heading, two paragraphs and an outline button with an arrow. Content is vertically centred.' },
      { steps: [
        'Click below the slider (Document Overview: select the Slider, then press the **+** that appears below it).',
        'Click **+** → **Patterns** → **My patterns** → **MK Split**. The pattern is inserted.',
        'Rename the Group `02 Welcome`.',
        'Click the image → **Replace** → **Open Media Library** → choose {{asset:dining-room}}. Keep **Aspect ratio 3:2**, **Scale: Cover**.',
        'Replace the texts with the content below: eyebrow, H2 heading, Paragraph 1. Press {{kbd:Enter}} after paragraph 1 to add paragraph 2.',
        'Edit the button: text `Discover Our Story →`, link `/our-story/`, Outline style.',
        'Click **Save** and view the page.'
      ] },
      { content: 'home.welcome' }
    ],
    visual: [{ diagram: 'split-left', caption: 'Split section: image left, text right, 64 px gap, centred vertically.' }],
    resources: { assets: ['dining-room'], content: ['home.welcome'], values: [['Background', '{{hex:#f8f5ef}} (default)'], ['Image ratio', '3:2'], ['Column gap', '64 px'], ['Section padding', '96 px top and bottom']] },
    expected: 'Below the slider: the dining-room photo on the left, and on the right the gold “WELCOME TO MESURADO” label, the heading, two paragraphs and an outline button.',
    troubleshoot: ['spacing-wrong', 'full-width-not-working'],
    checklist: ['Image is the dining room at 3:2.', 'Eyebrow, heading and both paragraphs match the reference.', 'Button is outline style with text “Discover Our Story →” linking to /our-story/.', 'On a phone, the image stacks above the text.'] },

  { id: 'm10-l04', title: 'Section 3 — Signature dishes', time: '60 min', keywords: 'signature dishes cards grid menu card price badge explore full menu',
    objective: 'Build a heading row and a three-column grid of six dish cards.',
    build: 'Six MK Card dish cards in a responsive grid on a beige background.',
    before: ['Finish {{lesson:m10-l03}}.', 'The MK Card pattern ({{lesson:m07-l06}}).'],
    body: [
      { h: 'Description', p: 'Beige (`#f0ece3`) section. At the top: heading block on the left (eyebrow, H2, intro) and a gold **Explore Full Menu →** button on the right. Below: six white cards in three columns. Each card: photo (4:3), optional badge, dish name, price, description and dietary tags.' },
      { h: 'Section and heading row', steps: [
        'Insert **MK Section** below the Welcome section. Rename it `03 Signature dishes`. Set its **Background** to slot 6 (`#f0ece3`).',
        'Replace the eyebrow, heading and intro texts using the copy box.',
        'Select the eyebrow, heading and intro (click the first, {{kbd:Shift}}-click the last). In the toolbar choose **Group** (or ⋮ → **Group**). This keeps them together.',
        'Select that new Group, and in the toolbar click the **Group** icon again and choose **Row**… (or wrap it: select it, ⋮ → **Group**, then change the outer Group’s **Layout** to **Row**). Set **Justification** to **Space between**, **Vertical alignment** to **bottom**, and turn on **Allow to wrap to multiple lines**.',
        'Inside the Row, after the heading Group, add a **Buttons** block with one button `Explore Full Menu →` linked to `/menu/`, background `#d1b686`, text `#0e1e16` (secondary style).',
        'Give the Row a bottom margin of `48` px (Styles → Dimensions → Margin).'
      ] },
      { content: 'home.dishesHead' },
      { h: 'The card grid', steps: [
        'Below the Row (still inside the section), add a **Group** and choose the **Grid** variation (or add a Group and set **Layout → Type: Grid**).',
        'Set **Minimum column width** to `340px` (this gives 3 columns on a laptop, 2 on a tablet and 1 on a phone) and **Block spacing** to `24px`.',
        'Inside the grid, insert the **MK Card** pattern (**+** → Patterns → My patterns → MK Card).',
        ['Fill the card for **Palm Butter**:', ['Image → Replace → {{asset:dish-d1}}', 'Eyebrow paragraph → `Signature` (the badge)', 'H5 → `Palm Butter`', 'Price → `US$ 18.50`', 'Description → paste from the Content Library', 'Add one more small Paragraph for dietary tags: `Seafood · Gluten-free` (size 13 px, colour `#68665f`).']],
        'Select the card, press {{kbd:Ctrl}} + {{kbd:Shift}} + {{kbd:D}} (Duplicate) five times. Edit each copy with the dishes in the table. Where there is no badge, delete the eyebrow paragraph.',
        'Click **Save** and view the page. Check the grid at different widths by making the browser window narrower.'
      ] },
      { table: { head: ['Card', 'Image', 'Badge', 'Name', 'Price', 'Dietary tags'], rows: featuredRows } },
      { content: P.homeFeatured.map(function (id) { return 'menu.' + id; }) }
    ],
    visual: [{ diagram: 'card-grid', caption: 'Heading row with button on the right, then a 3-column grid of dish cards. Each card: image (4:3), badge, name, price, description, tags.' }],
    resources: { assets: P.homeFeatured.map(function (id) { return 'dish-' + id; }), content: ['home.dishesHead'].concat(P.homeFeatured.map(function (id) { return 'menu.' + id; })),
      values: [['Section background', '{{hex:#f0ece3}}'], ['Card background / border', '{{hex:#ffffff}} / 1 px {{hex:#e5e0d6}}, radius 10 px (class `mk-card`)'], ['Card image', '4:3, cover'], ['Card padding', '24 px (class `mk-card-body`)'], ['Grid minimum column width', '{{copy:340px}}'], ['Grid gap', '24 px']] },
    expected: 'A beige section with the heading on the left and a gold button on the right, then six white dish cards in three columns (two rows).',
    troubleshoot: ['grid-not-responsive', 'card-images-different-heights', 'css-class-not-working'],
    checklist: ['Heading row: eyebrow, H2, intro left; gold “Explore Full Menu →” right.', 'Six cards in the order Palm Butter, Jollof Rice, Fresh Palm Wine, Cassava Leaf, Fried Fish & Plantain, Coconut Candy Tart.', 'Badges only on Palm Butter (Signature), Jollof Rice (Chef’s Pick) and Fresh Palm Wine (House Pour).', 'All cards have 4:3 images of equal height.', '3 columns on a laptop, 1 on a phone.'] },

  { id: 'm10-l05', title: 'Section 4 — The experience', time: '45 min', tools: 'Spectra Info Box', keywords: 'experience info box icons chef plating reversed split',
    objective: 'Build a split section with text on the left, a tall photo on the right, and four icon items.',
    build: 'The “Cooked with patience, served with care” section.',
    before: ['Finish {{lesson:m10-l04}}.'],
    body: [
      { h: 'Description', p: 'Ivory background. Left: eyebrow, H2, a paragraph, four items each with a small gold-outlined icon, a bold title and a short line, then an outline button. Right: a tall 4:5 photo of a chef plating food.' },
      { h: 'Layout', steps: [
        'Insert **MK Split** below section 3. Rename it `04 Experience`.',
        'Swap the columns so the image is on the right: select the **left column** (with the image) in Document Overview and click the **Move down / right** arrow in its toolbar.',
        'Replace the image with {{asset:chef-plating}} and change its **Aspect ratio** to **4:5** (Portrait). If 4:5 is not offered, choose **3:4**.',
        'Replace the eyebrow, heading and paragraph text from the copy box.'
      ] },
      { content: 'home.experience' },
      { h: 'The four icon items (Spectra Info Box)', steps: [
        'Below the paragraph, add a **Group** with **Layout: Stack (vertical)**, block spacing `16px`.',
        'Inside it, add a Spectra **Info Box** block.',
        ['Set up the Info Box:', ['**Icon** (or **Image/Icon**): choose a **leaf** icon. Position: **left of title** (or **Left**).', 'Icon size `20` px; icon colour `#7d5a12`.', '**Title**: `Fresh from the market`; heading tag **H6** or **Paragraph**; size 16 px; weight 600; colour `#242424`.', '**Description**: `Fish, greens and fruit bought each morning decide the day’s specials.`; size 15 px; colour `#68665f`.', 'Turn OFF any **Prefix**, **Separator** and **Call to Action** options.']],
        'Duplicate the Info Box three times and change the icon, title and description using the copy box (icons: fire/flame, wine glass, users/people).',
        'Below the group, edit the button: `Explore Experiences →`, link `/private-dining/`, Outline style.',
        'Click **Save**.'
      ] },
      { content: 'home.experienceList' },
      { callout: 'info', title: 'Phone order', text: 'In the reference the photo appears above the text on phones. WordPress columns stack in their order, so yours shows the text first. This is accepted; you may also tick **Stack on mobile** off/on to compare — content is what matters.' }
    ],
    visual: [{ diagram: 'split-right', caption: 'Reversed split: text with four icon items on the left; 4:5 photo on the right.' }],
    resources: { assets: ['chef-plating'], content: ['home.experience', 'home.experienceList'], values: [['Image ratio', '4:5'], ['Icon colour', '{{hex:#7d5a12}}'], ['Item title', '16 px, 600, {{hex:#242424}}'], ['Item text', '15 px, {{hex:#68665f}}']] },
    expected: 'Text on the left with four neat icon rows and an outline button; the tall chef photo on the right.',
    troubleshoot: ['info-box-pro', 'spacing-wrong'],
    checklist: ['Photo is on the right at 4:5.', 'Four icon items with the correct titles and texts.', 'Icons are gold and small.', 'Button “Explore Experiences →” links to /private-dining/.'] },

  { id: 'm10-l06', title: 'Section 5 — Reservation band', time: '35 min', keywords: 'reservation dark band cta call to action terrace',
    objective: 'Build the dark green reservation band with text, two buttons and a photo.',
    build: 'The “Your table by the river is waiting” band.',
    before: ['Finish {{lesson:m10-l05}}.', 'MK Dark Band pattern ({{lesson:m07-l06}}).'],
    body: [
      { h: 'Description', p: 'Full-width dark green (`#0e1e16`) band. Left: light-gold eyebrow, ivory H2, grey paragraph, a gold **Reserve a Table** button and an ivory outline **Groups & Private Dining** button, then a small line with the phone number. Right: a 4:3 terrace photo.' },
      { steps: [
        'Insert **MK Split** below section 4. Rename it `05 Reservation band`.',
        'Select the outer Group. Set **Background** to slot 1 (`#0e1e16`) and add the class `mk-dark` in **Advanced → Additional CSS class(es)**. The text turns light.',
        'Move the image column to the right: select the left **Column** (with the image) in Document Overview and click **Move right / down** in its toolbar.',
        'Replace the image with {{asset:hero-terrace-table}} and set **Aspect ratio 4:3**, **Scale: Cover**.',
        'Replace the eyebrow, heading and paragraph texts from the copy box.',
        'Replace the single outline button: open the **MK Dark Band** pattern on a scratch line, copy its two buttons ({{kbd:Ctrl}} + {{kbd:C}}), paste them here, then delete the scratch pattern. Or style them by hand: Button 1 `Reserve a Table` → `/reservations/`, background `#d1b686`, text `#0e1e16`; Button 2 `Groups & Private Dining` → `/private-dining/`, Outline, text and border `#fdf9f2`. Make both **large** (padding 18 / 32, font 16 px).',
        'Add a last Paragraph: `Or call us on +231 77 512 3480`, size 15 px. Optional: link the number to `tel:+231775123480`.',
        'Click **Save**.'
      ] },
      { content: 'home.reserve' }
    ],
    visual: [{ diagram: 'dark-band', caption: 'Dark band: text and buttons left, terrace photo right.' }],
    resources: { assets: ['hero-terrace-table'], content: ['home.reserve', 'site.phoneLink'], values: [['Background', '{{hex:#0e1e16}} + class `mk-dark`'], ['Eyebrow on dark', '{{hex:#d1b686}} (class `mk-eyebrow on-dark` or handled by `mk-dark`)'], ['Heading', '{{hex:#fdf9f2}}'], ['Paragraph', '{{hex:#c3bfb3}}'], ['Image', '4:3']] },
    expected: 'A deep green band across the page with light text, a gold button, an outline button, the phone line and the terrace photo on the right.',
    troubleshoot: ['dark-text-unreadable', 'button-style-wrong'],
    checklist: ['Background is #0e1e16 across the full width.', 'Headings ivory, paragraph light grey, eyebrow light gold.', 'Two large buttons link to /reservations/ and /private-dining/.', 'Photo is 4:3 on the right.'] },

  { id: 'm10-l07', title: 'Section 6 — Seasonal specials', time: '45 min', keywords: 'seasonal specials promo cards dark cards crab palm wine tasting plate',
    objective: 'Build a heading row with a text link and three dark promotion cards.',
    build: 'Three dark-green cards: River crab is back, Palm wine tasting Saturdays, The tasting plate.',
    before: ['Finish {{lesson:m10-l06}}.'],
    body: [
      { h: 'Description', p: 'Ivory section. Heading row: eyebrow, H2 and intro on the left, a gold text link **See Seasonal Menu →** on the right. Below: three cards with a dark surface. Each card: photo, small gold label, title, text and a small line of meta information.' },
      { h: 'Heading row', steps: [
        'Insert **MK Section**. Rename it `06 Seasonal specials`. Keep the default ivory background.',
        'Build the heading row exactly as in {{lesson:m10-l04}}, but instead of a button, add a **Paragraph** `See Seasonal Menu →`, linked to `/menu/`, colour slot 8, weight 600.'
      ] },
      { content: 'home.seasonalHead' },
      { h: 'Dark promo cards', steps: [
        'Add a **Grid** Group (minimum column width `340px`, gap `24px`).',
        'Insert **MK Card**. Select the card’s outer Group and add the class `mk-dark` (so it reads `mk-card mk-dark`). Set its **Background** to `#19261f` and its **Border** colour to `#34483d`.',
        'Image → {{asset:dish-s1}}. Eyebrow → `Seasonal`. H5 → `River crab is back`. Replace the price paragraph with the meta text `Until the season ends` (size 13 px). Description → card text.',
        'Link the title: select the title text, press {{kbd:Ctrl}} + {{kbd:K}}, type `/menu/`, press {{kbd:Enter}}.',
        'Duplicate the card twice and fill cards 2 and 3 from the copy boxes. Card 2 image {{asset:palm-wine-pour}} (link `/special-events/`); card 3 image {{asset:dish-s3}} (link `/menu/`).',
        'Click **Save**.'
      ] },
      { content: ['home.promo1', 'home.promo2', 'home.promo3'] }
    ],
    visual: [{ diagram: 'promo-cards', caption: 'Promo card: photo, gold label, ivory title, grey text, small meta line — all on dark green.' }],
    resources: { assets: ['dish-s1', 'palm-wine-pour', 'dish-s3'], content: ['home.seasonalHead', 'home.promo1', 'home.promo2', 'home.promo3'], values: [['Card background', '{{hex:#19261f}}'], ['Card border', '{{hex:#34483d}}'], ['Card classes', '`mk-card mk-dark`']] },
    expected: 'An ivory section with three dark cards side by side; text on the cards is easy to read.',
    troubleshoot: ['dark-text-unreadable', 'card-images-different-heights'],
    checklist: ['Heading row with a gold “See Seasonal Menu →” link on the right.', 'Three dark cards with correct images, labels, titles, texts and meta lines.', 'Each card title links to the right page.'] },

  { id: 'm10-l08', title: 'Section 7 — Private dining and catering', time: '35 min', keywords: 'private dining catering two columns river room wedding',
    objective: 'Build a two-column section introducing private dining and catering.',
    build: 'Two side-by-side feature blocks, each with photo, H3, text and button.',
    before: ['Finish {{lesson:m10-l07}}.'],
    body: [
      { h: 'Description', p: 'Beige section with a heading (eyebrow, H2, intro). Below, two equal columns: left “Private dining” with a 3:2 photo of the River Room and a dark button; right “Catering” with a 3:2 wedding buffet photo and a gold button.' },
      { steps: [
        'Insert **MK Section**, rename `07 Gatherings`, background slot 6 (`#f0ece3`). Fill the heading texts and add a bottom margin of `48` px under the intro.',
        'Add a **Columns** block, **50 / 50**, gap `24px`, vertical alignment **top**.',
        'Left column: **Image** {{asset:river-room}} (3:2, cover) → **Heading H3** → **Paragraph** → **Buttons** (primary) `Plan a Private Event →` linking to `/private-dining/`.',
        'Right column: **Image** {{asset:catering-wedding}} (3:2, cover) → **Heading H3** → **Paragraph** → **Buttons** (secondary gold) `Explore Catering →` linking to `/catering/`.',
        'Set block spacing inside each column to `16px`.',
        'Click **Save**.'
      ] },
      { content: ['home.gatherHead', 'home.gatherPD', 'home.gatherCat'] }
    ],
    visual: [{ diagram: 'two-features', caption: 'Two equal columns, each with image, H3, text and button.' }],
    resources: { assets: ['river-room', 'catering-wedding'], content: ['home.gatherHead', 'home.gatherPD', 'home.gatherCat'] },
    expected: 'A beige section with two equal feature columns and their buttons.',
    checklist: ['Heading texts match.', 'Left: River Room photo, “Private dining”, dark button to /private-dining/.', 'Right: wedding photo, “Catering”, gold button to /catering/.', 'Columns stack on mobile.'] },

  { id: 'm10-l09', title: 'Section 8 — What our guests say', time: '35 min', keywords: 'testimonials reviews stars quotes guests centred',
    objective: 'Build a centred heading and three testimonial cards with star ratings.',
    build: 'Three review cards with five gold stars, a quote, a name and a detail line.',
    before: ['Finish {{lesson:m10-l08}}.'],
    body: [
      { h: 'Description', p: 'Ivory section with a **centred** heading. Three white cards: five gold stars, the quote in italic serif, the guest name in bold, then a small grey detail line (“Sample review · Dinner”).' },
      { steps: [
        'Insert **MK Section**, rename `08 Guests`. Fill the texts and set the eyebrow, heading and intro to **Align text: center** (toolbar). Add a bottom margin of `48` px.',
        'Add a **Grid** Group (minimum column width `340px`, gap `24px`).',
        'Inside, add a **Group** with classes `mk-card mk-card-body` and block spacing `16px`.',
        'In the card add a **Paragraph** `★★★★★`, colour `#a27315`, size 18 px, letter spacing 2 px. (Copy the stars here: {{copy:★★★★★}})',
        'Add a **Paragraph** with the quote. In **Styles → Typography** choose the font **Playfair Display** (if offered) or make it *italic*; size 18 px; colour `#242424`.',
        'Add a **Paragraph** with the name, **bold**, colour `#242424`.',
        'Add a **Paragraph** with the detail line, size 13 px, colour `#68665f`.',
        'Duplicate the card twice and fill testimonials 2 and 3.',
        'Click **Save**.'
      ] },
      { content: ['home.guestsHead', 'testi.1', 'testi.2', 'testi.3'] },
      { callout: 'info', title: '“Sample review”', text: 'The detail line deliberately says “Sample review”, because these are not real customers. Keep that wording — it is honest and it matches the reference.' }
    ],
    visual: [{ diagram: 'testimonials', caption: 'Testimonial card layout.' }],
    resources: { content: ['home.guestsHead', 'testi.1', 'testi.2', 'testi.3'], values: [['Stars colour', '{{hex:#a27315}}'], ['Quote', 'Playfair Display / italic, 18 px, {{hex:#242424}}'], ['Detail line', '13 px, {{hex:#68665f}}']] },
    expected: 'A centred heading and three white review cards with gold stars.',
    checklist: ['Heading is centred.', 'Three cards with five gold stars each.', 'Quotes, names and detail lines match exactly.'] },

  { id: 'm10-l10', title: 'Section 9 — A look inside (gallery preview)', time: '30 min', keywords: 'gallery preview four square images link',
    objective: 'Build a row of four square photos that link to the Gallery page.',
    build: 'The gallery preview section.',
    before: ['Finish {{lesson:m10-l09}}.'],
    body: [
      { h: 'Description', p: 'Beige section. Heading row with an outline **Explore Gallery →** button on the right. Below: four square photos in a row, each linking to the Gallery page.' },
      { steps: [
        'Insert **MK Section**, rename `09 Gallery preview`, background slot 6. Build the heading row as in {{lesson:m10-l04}} with an **Outline** button `Explore Gallery →` → `/gallery/`.',
        'Add a **Grid** Group with minimum column width `260px` and gap `24px`.',
        'Add four **Image** blocks inside it: {{asset:dish-d1}}, {{asset:dining-room}}, {{asset:palm-wine-pour}}, {{asset:dish-l1}}.',
        'For each image: **Aspect ratio Square 1:1**, **Scale: Cover**. In the toolbar click the **Link** icon and enter `/gallery/`.',
        'Click **Save**.'
      ] },
      { content: 'home.galleryHead' }
    ],
    visual: [{ diagram: 'gallery-preview', caption: 'Four square images in a row under a heading row.' }],
    resources: { assets: ['dish-d1', 'dining-room', 'palm-wine-pour', 'dish-l1'], content: ['home.galleryHead'], values: [['Image ratio', '1:1'], ['Grid minimum column width', '{{copy:260px}}']] },
    expected: 'Four equal square photos in a row; clicking any of them opens the Gallery page.',
    checklist: ['Heading row with outline “Explore Gallery →” button.', 'Four square images in the correct order.', 'Each image links to /gallery/.', '4 across on a laptop, 2 on a tablet, 1 on a phone.'] },

  { id: 'm10-l11', title: 'Section 10 — Visit Mesurado (map and hours)', time: '45 min', tools: 'Spectra Google Map', keywords: 'map google map address phone email hours directions visit',
    objective: 'Build the location section with a live map, contact details, opening hours and two buttons.',
    build: 'Map on the left; address, phone, email, hours and buttons on the right.',
    before: ['Finish {{lesson:m10-l10}}.', 'Internet connection (the map loads from Google).'],
    body: [
      { h: 'Description', p: 'Ivory section. Left: a map. Right: eyebrow “Visit Mesurado”, H2 “Find us by the river”, three icon rows (address, telephone, email), a small table of opening hours, and two buttons: **Get Directions** (dark) and **Contact Us** (outline).' },
      { h: 'Layout and map', steps: [
        'Insert **MK Split**. Rename it `10 Visit`. Delete its image block.',
        'In the left column, add a Spectra **Google Map** block. In its settings, set **Address** to `Mamba Point, Monrovia, Liberia`, **Zoom** about `15`, **Height** `460` px.',
        'Give the map a 1 px border `#e5e0d6` if the option exists (Style → Border).'
      ] },
      { callout: 'info', title: 'About the map', text: 'The reference shows an illustrated map because the address is fictional. A real Google Map of Mamba Point is the closest free equivalent. The map needs internet; offline, it appears blank — that is normal.' },
      { h: 'Details', steps: [
        'In the right column, replace the eyebrow and heading texts. Delete the sample paragraph.',
        'Add three Spectra **Info Box** blocks (as in {{lesson:m10-l05}}): map-pin icon — **Address** — `18 Waterside Road, Mamba Point, Monrovia, Liberia`; phone icon — **Telephone** — `+231 77 512 3480`; envelope icon — **Email** — `hello@mesuradokitchen.com`.',
        'Add a **Table** block with 2 columns and 3 rows. Fill the opening hours (days left, times right). In **Styles**, choose the **Stripes** style or no style; turn off the header section.',
        'Add a **Buttons** block: `Get Directions` (primary) linking to the Google Maps link below and opening in a new tab (in the link popover, turn on **Open in new tab**); `Contact Us` (outline) → `/contact/`.',
        'Click **Save**.'
      ] },
      { content: ['home.visit', 'site.maps', 'site.mapQuery'] }
    ],
    visual: [{ diagram: 'visit', caption: 'Map left; details, hours table and buttons right.' }],
    resources: { content: ['home.visit', 'site.hours', 'site.maps', 'site.mapQuery'], values: [['Map height', '{{copy:460}} px'], ['Map zoom', '15']] },
    expected: 'A map of Mamba Point on the left; on the right the address, phone and email with icons, a three-row hours table and two buttons. **Get Directions** opens Google Maps in a new tab.',
    troubleshoot: ['map-not-showing', 'info-box-pro'],
    checklist: ['Map shows Mamba Point (when online).', 'Address, phone and email rows with icons.', 'Opening hours table has three correct rows.', 'Get Directions opens Google Maps in a new tab; Contact Us opens /contact/.'] },

  { id: 'm10-l12', title: 'Section 11 — Newsletter (your first form)', time: '50 min', tools: 'Fluent Forms', keywords: 'newsletter form fluent forms email subscribe consent checkbox entries shortcode',
    objective: 'Create a newsletter sign-up form with Fluent Forms, place it on the homepage, and test it.',
    build: 'The “News from the river” section with a working email + consent form.',
    before: ['Finish {{lesson:m10-l11}}.', 'Fluent Forms installed ({{lesson:m05-l02}}).'],
    body: [
      { h: 'Description', p: 'Beige section. Left: eyebrow, H2 and a short line. Right: an email field, a **Subscribe** button and a required consent checkbox.' },
      { h: 'Create the form', steps: [
        'Go to **Fluent Forms → New Form** (or **Add New**). Choose **Blank Form** (or **Create a Blank Form**).',
        'Click the form name at the top (e.g. “Blank Form”) and rename it `Newsletter`.',
        'From the **Input Fields** panel on the right, drag **Email** into the form.',
        'Click the Email field to edit it: **Element Label** `Email address`; **Placeholder** `name@example.com`; **Required** → Yes; error message `Enter an email address like name@example.com.`',
        'From **Advanced Fields**, drag **GDPR Agreement** (or **Terms & Conditions**) below the email. Set its text to `Yes, send me Mesurado news. I can unsubscribe at any time.` and **Required** → Yes; error message `Tick the box to confirm you’d like to receive our emails.`',
        'Click the **Submit Button** at the bottom of the form. Set **Button Text** `Subscribe`. In its style options choose a custom style: background `#0e1e16`, text `#fdf9f2`, hover `#26382f`, radius `6` px.',
        'Click **Save Form** (top right).'
      ] },
      { h: 'Set the confirmation message', steps: [
        'In the form editor, open **Settings & Integrations** (top menu) → **Form Settings**.',
        'Under **Confirmation Settings**, set **Confirmation Type** to **Same Page** and paste the success message below into the message box. Choose **Hide Form** after submission.',
        'Click **Save Settings**.'
      ] },
      { content: 'home.newsForm' },
      { h: 'Place the section', steps: [
        'Back on the Home page, insert **MK Split** at the very bottom (above the footer). Rename `11 Newsletter`. Background slot 6.',
        'Delete the image. In the left column keep only eyebrow, H2 and paragraph; fill them from the copy box. Delete the button.',
        'In the right column, add the **Fluent Forms** block (search “Fluent”) and choose **Newsletter** from its dropdown. (Alternative: copy the form’s **shortcode**, e.g. `[fluentform id="2"]`, from **Fluent Forms → All Forms** and paste it into a **Shortcode** block.)',
        'Set the Columns vertical alignment to **top**.',
        'Click **Save**.'
      ] },
      { content: 'home.news' },
      { h: 'Test the form', steps: [
        'View the homepage and scroll to the bottom.',
        'Click **Subscribe** without typing anything. You should see the two error messages.',
        'Type `test@example.com`, tick the box and click **Subscribe**. The success message replaces the form.',
        'In the dashboard, go to **Fluent Forms → Entries** (or **All Forms** → Newsletter → **Entries**). Your test entry is listed. This proves the form works.'
      ] },
      { callout: 'info', title: 'No real email', text: 'Your local site cannot send real emails, and a real newsletter needs an email service. For this project, a stored entry is the correct result. More in {{lesson:m13-l01}}.' }
    ],
    visual: [{ diagram: 'newsletter', caption: 'Newsletter section: text left, form right.' }, { shot: 'm10-l12-fluent-editor.png', caption: 'The Fluent Forms editor with Email and GDPR Agreement fields.' }],
    resources: { content: ['home.news', 'home.newsForm'] },
    expected: 'The homepage ends with a beige newsletter section above the footer. Submitting an email with the box ticked shows the success message, and the entry appears in Fluent Forms → Entries.',
    troubleshoot: ['form-not-submitting', 'form-styling', 'pro-feature'],
    checklist: ['The Newsletter form has a required email field and a required consent checkbox.', 'The button says Subscribe and is dark green.', 'Empty submit shows errors.', 'A test entry appears in Fluent Forms → Entries.', 'All 11 homepage sections are now in the correct order.'] }
  ] });
})();
