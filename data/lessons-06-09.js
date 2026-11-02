/* Modules 06–09 */
window.GUIDE = window.GUIDE || {};
GUIDE.modules = GUIDE.modules || [];
GUIDE.modules.push(

/* ============================== MODULE 06 ============================== */
{ id: 'm06', title: 'Working With Images and Logos', summary: 'Download the instructor’s images, upload them with alt text, and learn every image skill the build needs.',
  lessons: [
  { id: 'm06-l01', title: 'Download and organise the project assets', time: '20 min', keywords: 'download zip asset pack extract unzip file types png webp jpg folder',
    objective: 'Download all instructor-provided images and logos and organise them on your computer.',
    build: 'A tidy `Mesurado Project\\assets` folder with every logo and photo, ready to upload.',
    before: ['The `Mesurado Project` folder from {{lesson:m01-l01}}.', 'About 9 MB of internet data.'],
    body: [
      { h: 'Download the asset pack', steps: [
        'Open the [Project Asset Library](#/assets) (also in the sidebar).',
        'Click **Download the complete asset pack (.zip)**. A file named `mesurado-asset-pack.zip` (about 8 MB) downloads to your **Downloads** folder.',
        'Open **File Explorer → Downloads**. Right-click `mesurado-asset-pack.zip` and choose **Extract All…**.',
        'Click **Browse…**, select `Documents\\Mesurado Project\\assets`, click **Select Folder**, then **Extract**.',
        'Open the extracted folder. You will see seven folders: `logos`, `heroes`, `photos`, `menu`, `team`, `events` and `journal`.'
      ] },
      { callout: 'tip', title: 'Slow connection?', text: 'If the ZIP will not finish downloading, open the Asset Library and use the **Download image** button on each card for the images of the lesson you are working on. Save them into the matching folder.' },
      { h: 'Understand the file types', table: { head: ['Type', 'Ending', 'Used for in this project'], rows: [
        ['PNG', '`.png`', 'The four logos. PNG keeps the background transparent so the logo sits nicely on any colour.'],
        ['WebP', '`.webp`', 'All 70 photos. WebP is a modern format that looks like JPG but is much smaller, so pages load faster. WordPress supports it.'],
        ['JPG / JPEG', '`.jpg`', 'Not used here, but common for photos from cameras and phones.']
      ] } },
      { h: 'Learn the naming', list: [
        'Every file has a clear name in lowercase with hyphens, for example `menu-palm-butter.webp` or `page-hero-dishes.webp`. **Do not rename the files** — lessons refer to these names.',
        '`home-hero-1-terrace.webp`, `-2-`, `-3-` are the three homepage slider images.',
        '`page-hero-….webp` files are the wide images at the top of inner pages.',
        'Logos: `mesurado-logo-full-color.png` (dark logo for light backgrounds), `mesurado-logo-reversed.png` (light logo for dark backgrounds), and two square monograms.'
      ] }
    ],
    resources: { links: ['[Project Asset Library](#/assets) — every file with its size, use and alt text'] },
    expected: 'Your `assets` folder contains seven sub-folders with 74 images in total.',
    troubleshoot: ['zip-wont-open', 'broken-image'],
    checklist: ['I downloaded the asset pack (or the single images I need).', 'I extracted the ZIP into `Mesurado Project\\assets`.', 'I can tell PNG and WebP files apart.', 'I did not rename any files.'] },

  { id: 'm06-l02', title: 'Upload images to the Media Library with alt text', time: '45 min', keywords: 'media library upload add new media file alt text alternative text drag drop',
    objective: 'Upload every project image to WordPress and give each one useful alternative text.',
    build: 'A Media Library containing all 74 project images, each with correct alt text.',
    before: ['Finish {{lesson:m06-l01}}.'],
    body: [
      { callout: 'info', title: 'What is alt text?', text: 'Alternative (“alt”) text describes an image for people who use screen readers and for search engines. It also shows if the image fails to load. Good alt text says what is in the picture in a short sentence. Every Asset Library card shows the alt text to use, with a **Copy alt text** button.' },
      { h: 'Upload many images at once', steps: [
        'In the dashboard, go to **Media → Add New Media File** (older versions: **Media → Add New**).',
        'Open File Explorer beside the browser and go to `Mesurado Project\\assets\\logos`.',
        'Select all four files ({{kbd:Ctrl}} + {{kbd:A}}) and drag them into the **Drop files to upload** box in the browser. (Or click **Select Files** and choose them.)',
        'Wait until each file shows a thumbnail and the progress bar disappears.',
        'Repeat for the folders `heroes`, `photos`, `menu`, `team`, `events` and `journal`. Upload one folder at a time so you can spot problems.'
      ] },
      { h: 'Add alt text', steps: [
        'Go to **Media → Library**. Click the **grid** icon to see thumbnails.',
        'Click the first image. The **Attachment details** window opens.',
        'In the [Project Asset Library](#/assets), find the same image (use the search box at the top of this guide and type the filename). Click **Copy alt text**.',
        'Back in WordPress, click in the **Alternative Text** box and paste ({{kbd:Ctrl}} + {{kbd:V}}). WordPress saves automatically when you click outside the box.',
        'Use the **>** arrow at the top right of the window to go to the next image. Repeat for every image.',
        'For the four `page-hero-…` images, **leave Alt Text empty**. They are decorative backgrounds behind text, so screen readers should skip them.'
      ] },
      { callout: 'tip', title: 'Work faster', text: 'Alt text for menu dishes is simply the dish name (for example “Jollof Rice”). Team portraits use the person’s name and role.' },
      { h: 'Check the upload', steps: [
        'At the top of the Media Library, the filter dropdown shows **All media items**. Count the images: you should have **74**.',
        'Type `menu-` in the **Search media** box. You should see the 22 dish and drink images.'
      ] }
    ],
    visual: [{ shot: 'm06-l02-attachment-details.png', caption: 'The Attachment details window with the Alternative Text field.' }],
    resources: { links: ['[Project Asset Library](#/assets) — copy alt text from each card'] },
    expected: 'The Media Library contains 74 images; logos and photos have alt text and the four page-hero images have none.',
    troubleshoot: ['upload-failed', 'upload-max-size', 'broken-image'],
    checklist: ['All 74 images are in the Media Library.', 'Every logo and photo has alt text.', 'The four page-hero backgrounds have empty alt text.', 'Searching “menu-” shows the dish images.'] },

  { id: 'm06-l03', title: 'Insert, resize, crop, align and replace images', time: '40 min', keywords: 'image block aspect ratio crop resize alignment full width wide replace cover background',
    objective: 'Practise every image skill used in the project on a practice page.',
    build: 'A temporary “Image practice” page that you delete at the end.',
    before: ['Finish {{lesson:m06-l02}}.'],
    body: [
      { h: 'Insert an image from the Media Library', steps: [
        'Go to **Pages → Add New Page** and title it `Image practice`.',
        'Click the **+** inserter, search for **Image** and add it.',
        'Click **Media Library**, click {{asset:dining-room}} (`dining-room.webp`) and click **Select**.',
        'Check the alt text in the right sidebar (**Block → Settings → Alternative text**). It came from the Media Library.'
      ] },
      { h: 'Set the shape (aspect ratio) and size', steps: [
        'With the image selected, open the right sidebar **Block → Settings**.',
        'Find **Aspect ratio** and choose **Classic (3:2)**. Set **Scale** to **Cover** so the photo fills the shape without stretching.',
        'Try **Square – 1:1** and **Portrait (3:4 / 4:5)** too. These are the shapes the reference uses: 3:2 for wide photos, 4:5 for tall photos, 1:1 for gallery squares, 4:3 for card images.',
        'Set **Resolution** (or **Image size**) to **Large** or **Full Size** for big photos and **Medium Large** for cards.'
      ] },
      { h: 'Align', steps: [
        'In the block toolbar above the image, click the **Align** button.',
        'Try **None**, **Wide width** and **Full width**. Full width stretches the image across the whole screen (used for hero backgrounds).',
        'Set it back to **None**.'
      ] },
      { h: 'Crop', steps: [
        'In the block toolbar, click the **Crop** icon.',
        'Drag the corners, or choose an aspect ratio from the toolbar, then click **Apply**. WordPress saves a cropped copy; the original stays in the Media Library.',
        'Press {{kbd:Ctrl}} + {{kbd:Z}} to undo the crop — we use aspect ratio settings instead of permanent crops in this project.'
      ] },
      { h: 'Replace an image', steps: [
        'In the block toolbar, click **Replace**.',
        'Choose **Open Media Library**, select {{asset:river}} and click **Select**. The new image takes the place of the old one and keeps your size settings.'
      ] },
      { h: 'Use an image as a background (Cover block)', steps: [
        'Add a **Cover** block (search “Cover” in the inserter).',
        'Click **Media Library** and choose {{asset:page-hero-dishes}}.',
        'In the sidebar **Block → Styles**, find **Overlay** and set the colour to `#0e1e16`. Set **Overlay opacity** to `62`.',
        'Click inside the cover and type a heading. Notice the text is light on the dark overlay — this is exactly how the page heroes work.',
        'In **Block → Settings**, find **Minimum height** and enter `360` px.'
      ] },
      { h: 'Clean up', steps: [
        'Click **Save draft**, then **Preview** to view it.',
        'Move the page to the trash (**Page** tab → **Move to trash**). The images stay in the Media Library.'
      ] }
    ],
    visual: [{ diagram: 'aspect-ratios', caption: 'The four image shapes used in the reference and where each appears.' }],
    resources: { assets: ['dining-room', 'river', 'page-hero-dishes'], values: [['Overlay colour', '{{hex:#0e1e16}}'], ['Overlay opacity', '{{copy:62}} %'], ['Page hero minimum height', '{{copy:360}} px']] },
    expected: 'You can insert an image, change its aspect ratio, align it, replace it and use a Cover block with a dark overlay.',
    troubleshoot: ['aspect-ratio-missing', 'broken-image'],
    checklist: ['I inserted an image from the Media Library.', 'I changed the aspect ratio with Scale set to Cover.', 'I tried the alignment options.', 'I replaced an image.', 'I made a Cover block with a #0e1e16 overlay at 62%.', 'I trashed the practice page.'] }
  ] },

/* ============================== MODULE 07 ============================== */
{ id: 'm07', title: 'Applying the Website Design System', summary: 'Global colours, fonts, buttons, spacing, helper CSS and reusable patterns.',
  lessons: [
  { id: 'm07-l01', title: 'Global colours', time: '25 min', tools: 'Astra', keywords: 'colors colours palette global hex forest gold ivory',
    objective: 'Enter the Mesurado colour palette into Astra so every block can use it.',
    build: 'Astra’s Global Palette filled with the nine main Mesurado colours.',
    before: ['Finish Module 04.'],
    body: [
      'The reference uses deep **forest green**, warm **gold**, soft **ivory** backgrounds and **charcoal** text. You enter these once; then they appear as colour swatches in every block.',
      { h: 'Set the Global Palette', steps: [
        'Go to **Appearance → Customize → Global → Colors**.',
        'At the top is **Global Palette** with 9 colour circles. Click the first circle. A colour picker opens.',
        'Click in the HEX box (it shows a code like `#046bd2`), delete it, and paste the first colour from the table below. Press {{kbd:Enter}}.',
        'Repeat for all nine circles in the order of the table.',
        'Click **Publish**.'
      ] },
      { table: { head: ['Palette slot', 'Colour name', 'HEX', 'Used for'], rows: [
        ['1', 'Forest 950', '{{hex:#0e1e16}}', 'Primary buttons, dark bands, footer'],
        ['2', 'Forest 800', '{{hex:#26382f}}', 'Button hover'],
        ['3', 'Charcoal 900', '{{hex:#242424}}', 'Headings'],
        ['4', 'Stone 600', '{{hex:#68665f}}', 'Body text'],
        ['5', 'Ivory 100', '{{hex:#f8f5ef}}', 'Site background'],
        ['6', 'Ivory 200', '{{hex:#f0ece3}}', 'Alternate section background'],
        ['7', 'Stone 300', '{{hex:#e5e0d6}}', 'Borders'],
        ['8', 'Gold 700', '{{hex:#7d5a12}}', 'Eyebrow labels, links'],
        ['9', 'Gold 300', '{{hex:#d1b686}}', 'Secondary buttons, gold on dark']
      ] } },
      { h: 'Set the base colours', note: 'Below the palette, Astra has settings for the main colours. Click each swatch and choose the palette colour shown.', steps: [
        '**Text Color** → slot 4 (`#68665f`).',
        '**Theme Color** / **Accent** → slot 1 (`#0e1e16`).',
        '**Link Color** → slot 8 (`#7d5a12`); **Link Hover Color** → slot 1.',
        '**Heading Color** (may be under **Headings** or **Typography**) → slot 3 (`#242424`).',
        '**Site Background** (may be under **Global → Colors → Background** or **Global → Container**) → slot 5 (`#f8f5ef`). If there is a separate **Content Background**, set it to slot 5 as well.',
        'Click **Publish**.'
      ] },
      { callout: 'info', title: 'Extra colours', text: 'Four more colours are used occasionally: white `#ffffff` (cards), Ivory 50 `#fdf9f2` (text on dark), Gold 600 `#a27315` (accent borders) and `#c3bfb3` (paragraph text on dark). Type these HEX codes into a block’s colour picker when a lesson asks for them.' }
    ],
    visual: [{ diagram: 'palette', caption: 'The Mesurado palette in Astra’s nine slots.' }],
    resources: { values: [['Overlay on hero images', '{{hex:#0e1e16}} at 62% opacity'], ['White', '{{hex:#ffffff}}'], ['Ivory 50 (text on dark)', '{{hex:#fdf9f2}}'], ['Gold 600', '{{hex:#a27315}}'], ['Paragraph on dark', '{{hex:#c3bfb3}}']] },
    expected: 'The site background turns light ivory, links turn gold-brown, and in the Block Editor every colour picker shows the nine Mesurado swatches.',
    troubleshoot: ['colors-not-applying', 'customizer-not-saving'],
    checklist: ['All nine palette slots have the exact HEX codes.', 'Text, link, heading and background colours use the palette.', 'The live site background is ivory `#f8f5ef`.'] },

  { id: 'm07-l02', title: 'Typography: Playfair Display and Inter', time: '25 min', tools: 'Astra', keywords: 'typography fonts google fonts playfair display inter heading sizes h1 h2 responsive',
    objective: 'Set the heading and body fonts and the heading sizes for desktop and mobile.',
    build: 'Site-wide typography matching the reference.',
    before: ['Finish {{lesson:m07-l01}}.'],
    body: [
      { h: 'Body font', steps: [
        'Go to **Appearance → Customize → Global → Typography**.',
        'Under **Body Font** (or **Base Typography**), open the **Font Family** list and type `Inter`. Select **Inter**.',
        'Set **Font Weight** to **400** (Normal).',
        'Set **Font Size** to `16` px and **Line Height** to `1.6`.'
      ] },
      { h: 'Heading font', steps: [
        'Under **Headings Font** (or **Heading Typography**), choose the family **Playfair Display**.',
        'Set **Font Weight** to **600**.',
        'Set **Line Height** to `1.2`.'
      ] },
      { h: 'Heading sizes', note: 'Astra lets you set each heading size separately for desktop, tablet and mobile. Click the small device icon beside the size box to switch device.', steps: [
        'Open each heading (**H1** to **H6**) in the Typography panel.',
        'Enter the desktop size from the table, then click the device icon, choose **mobile**, and enter the mobile size. Use the mobile size for tablet as well where the table shows it.',
        'Click **Publish**.'
      ] },
      { table: { head: ['Heading', 'Desktop', 'Tablet & mobile', 'Where the reference uses it'], rows: [
        ['H1', '{{copy:52}} px', '{{copy:36}} px', 'Page titles in page heroes'],
        ['H2', '{{copy:42}} px', '{{copy:30}} px', 'Section headings'],
        ['H3', '{{copy:32}} px', '{{copy:25}} px', 'Sub-section headings'],
        ['H4', '{{copy:26}} px', '{{copy:22}} px', 'Catering package names, form headings'],
        ['H5', '{{copy:21}} px', '{{copy:21}} px', 'Card titles (dishes, principles)'],
        ['H6', '{{copy:18}} px', '{{copy:18}} px', 'Small panel headings']
      ] } },
      { callout: 'info', title: 'The homepage hero title', text: 'The hero title on the homepage is even larger (64 px desktop, 40 px mobile). You will set that size directly on that block in {{lesson:m10-l02}}.' },
      { callout: 'tip', title: 'Fonts and slow internet', text: 'Astra loads Google Fonts from the internet. If you work offline, your site shows a fallback font (Georgia / Arial). The correct fonts return when you are online. You do not need to change anything.' }
    ],
    resources: { values: [['Body font', 'Inter, 400, 16 px, line height 1.6'], ['Heading font', 'Playfair Display, 600, line height 1.2'], ['Navigation', 'Inter 500, 15 px (set in {{lesson:m09-l03}})'], ['Buttons', 'Inter 600, 15 px (set in {{lesson:m07-l03}})']] },
    expected: 'Headings on your site display in the elegant serif Playfair Display; paragraphs display in Inter.',
    troubleshoot: ['fonts-not-changing'],
    checklist: ['Body font is Inter 400, 16 px.', 'Heading font is Playfair Display 600.', 'H1–H6 sizes are set for desktop and mobile.', 'Changes are published.'] },

  { id: 'm07-l03', title: 'Buttons and links', time: '20 min', tools: 'Astra', keywords: 'buttons global button style radius padding primary secondary outline hover',
    objective: 'Give every button the Mesurado style: dark green, 6px corners, 48px tall.',
    build: 'A global button style, plus the know-how to make secondary (gold) and outline buttons.',
    before: ['Finish {{lesson:m07-l02}}.'],
    body: [
      { h: 'Global button style', steps: [
        'Go to **Appearance → Customize → Global → Buttons**.',
        'Set **Text Color** to `#fdf9f2` and **Text Hover Color** to `#fdf9f2`.',
        'Set **Background Color** to slot 1 (`#0e1e16`) and **Background Hover Color** to slot 2 (`#26382f`).',
        'Set **Border Radius** to `6` px on all corners.',
        'Set **Padding**: top and bottom `14` px, left and right `24` px.',
        'Open the button **Typography** (or **Font**) settings: **Inter**, weight **600**, size `15` px.',
        'Click **Publish**.'
      ] },
      { h: 'The other button styles (made per block)', table: { head: ['Style', 'How to make it on a Buttons block'], rows: [
        ['**Primary** (dark)', 'Nothing to do — this is the default from the global style.'],
        ['**Secondary** (gold)', 'Select the button → **Block → Styles → Color**: Background = slot 9 `#d1b686`, Text = slot 1 `#0e1e16`.'],
        ['**Outline**', 'Select the button → in **Styles**, click the **Outline** style. Set Text = slot 1 and Border colour = slot 1, border width 1 px. Background: none.'],
        ['**Outline on dark**', 'Outline style with Text and Border = `#fdf9f2`.'],
        ['**Gold on dark** (primary on dark sections)', 'Background `#d1b686`, Text `#0e1e16`.'],
        ['**Large**', 'Padding top/bottom `18` px, left/right `32` px, font size `16` px (hero and reservation band buttons).'],
        ['**Text link** (“See Seasonal Menu →”)', 'Not a button: a Paragraph with a link, coloured slot 8.']
      ] } },
      { callout: 'tip', title: 'Arrows on buttons', text: 'The reference shows small arrows on some buttons (“Explore Full Menu →”). Type the arrow character directly in the button text: copy it here {{copy:→}}.' }
    ],
    visual: [{ diagram: 'buttons', caption: 'The Mesurado button styles.' }],
    resources: { values: [['Background', '{{hex:#0e1e16}}'], ['Hover background', '{{hex:#26382f}}'], ['Text', '{{hex:#fdf9f2}}'], ['Border radius', '{{copy:6}} px'], ['Padding', '14 px top/bottom · 24 px left/right'], ['Font', 'Inter 600, 15 px']] },
    expected: 'Any new Buttons block appears dark green with ivory text and slightly rounded corners.',
    troubleshoot: ['button-style-wrong'],
    checklist: ['Global button colours, radius, padding and font are set.', 'I know how to make secondary, outline and large buttons.'] },

  { id: 'm07-l04', title: 'The section recipe: widths and spacing', time: '30 min', keywords: 'group block full width content width padding spacing section layout 1240 96',
    objective: 'Learn the one layout recipe used by every section of the reference site.',
    build: 'An understanding of the Group block settings that make a full-width coloured band with centred 1240px content.',
    before: ['Finish {{lesson:m07-l03}}.'],
    body: [
      'Almost every section in the reference is the same structure: a **full-width band** (with an ivory, light-beige or dark-green background) holding **content centred in a 1240 px column**, with **96 px of space above and below**. Learn this once and you can build any section.',
      { h: 'Build a test section', steps: [
        'Create a draft page called `Layout practice` (**Pages → Add New Page**).',
        'Add a **Group** block (search “Group”). If asked to choose a layout, choose **Group** (the plain one).',
        'In the block toolbar, click **Align** and choose **Full width**.',
        ['In the sidebar **Block → Settings → Layout**:', ['Turn **Inner blocks use content width** ON.', 'Set **Content** width to `1240px` (type the number; make sure the unit is px).', 'Leave **Wide** empty.']],
        ['In **Block → Styles → Dimensions → Padding**: click the “unlink” icon so you can set sides separately:', ['Top `96px`, Bottom `96px`', 'Left `32px`, Right `32px` (this keeps text off the screen edges on phones).']],
        'Set **Block spacing** (in Dimensions) to `24px`.',
        'In **Styles → Color → Background**, choose slot 6 (`#f0ece3`).',
        'In **Block → Advanced → Additional CSS class(es)**, type `mk-section`. (After {{lesson:m07-l05}} this class automatically reduces the padding to 64 px on phones.)',
        'Click the **+** inside the group and add a Heading and a Paragraph. They sit in the centred column while the background stretches edge to edge.'
      ] },
      { table: { head: ['Section type', 'Background', 'Padding top/bottom'], rows: [
        ['Normal section', 'slot 5 `#f8f5ef` (or none)', '96 px'],
        ['“Subtle” section (alternating)', 'slot 6 `#f0ece3`', '96 px'],
        ['Dark band', 'slot 1 `#0e1e16`', '96 px (64 px for compact bands)'],
        ['On phones', 'same', '64 px — done automatically by the `mk-section` class']
      ] } },
      { h: 'Columns inside a section', steps: [
        'Inside the group, add a **Columns** block and choose **50 / 50**.',
        'Select the Columns block (use **Document Overview**). In **Styles → Dimensions**, set **Block spacing** (horizontal) to `64px` — this is the gap between image and text in “split” sections.',
        'In **Block → Settings**, make sure **Stack on mobile** is ON.',
        'In the toolbar, set **Vertical alignment** to **Align middle**.'
      ] },
      { callout: 'info', title: 'You will save this as a pattern', text: 'In {{lesson:m07-l06}} you save these sections as reusable patterns, so you never repeat these settings by hand. Keep this practice page as a draft until then.' }
    ],
    visual: [{ diagram: 'section-recipe', caption: 'The section recipe: a full-width Group with 1240 px content, 96 px vertical padding and 32 px side padding.' }],
    resources: { values: [['Content width', '{{copy:1240px}}'], ['Section padding (desktop)', '96 px top and bottom, 32 px sides'], ['Section padding (mobile)', '64 px top and bottom, 20 px sides'], ['Gap in split sections', '{{copy:64px}}'], ['Gap between cards', '{{copy:24px}}']] },
    expected: 'Your practice section shows a beige band across the full screen with the heading and text aligned to a centred column.',
    troubleshoot: ['full-width-not-working', 'spacing-wrong'],
    checklist: ['I made a Group full width.', 'Content width is 1240 px.', 'Padding is 96 / 32 / 96 / 32.', 'I added a 50/50 Columns block with a 64 px gap and stack on mobile.'] },

  { id: 'm07-l05', title: 'Add the Mesurado helper CSS', time: '15 min', tools: 'Astra', keywords: 'additional css custom css class eyebrow card mk-eyebrow mk-card',
    objective: 'Add a small, ready-made piece of CSS that gives you four reusable styles.',
    build: 'Helper classes: `mk-eyebrow` (gold label), `mk-card` (white card), `mk-dark` (text on dark sections) and `mk-order-link` (header link).',
    before: ['Finish {{lesson:m07-l04}}.'],
    body: [
      { callout: 'info', title: 'Why a little CSS?', text: 'The small gold UPPERCASE labels above headings appear more than 40 times in the reference. Setting font size, weight, spacing, case and colour by hand each time would take hours. One copy-and-paste here saves that time. You do not need to understand the code.' },
      { h: 'Paste the CSS', steps: [
        'Go to **Appearance → Customize → Additional CSS**.',
        'Click **Copy** on the box below.',
        'Click inside the big code box in the Customizer and paste ({{kbd:Ctrl}} + {{kbd:V}}). If there is already text, paste below it.',
        'Click **Publish**.'
      ] },
      { content: 'css.helpers' },
      { h: 'How to use a class', steps: [
        'In the Block Editor, select a block (for example a Paragraph).',
        'In the right sidebar **Block** tab, scroll down and open **Advanced**.',
        'In **Additional CSS class(es)**, type the class name, for example `mk-eyebrow`.',
        'The block changes in the editor and on the site.'
      ] },
      { table: { head: ['Class', 'Put it on', 'Result'], rows: [
        ['`mk-eyebrow`', 'A short Paragraph above a heading', 'Small gold capitals with wide letter spacing'],
        ['`mk-card`', 'A Group that holds an image and text', 'White box, thin beige border, 10 px rounded corners'],
        ['`mk-card-body`', 'The inner Group below the card image', '24 px padding inside the card'],
        ['`mk-dark`', 'A dark-green section Group', 'Headings ivory, paragraphs soft grey, eyebrows light gold'],
        ['`mk-price`', 'A Paragraph with a price', 'Bold charcoal price'],
        ['`mk-section`', 'Every section Group (already in your patterns)', 'Padding becomes 64 px on phones; buttons become full width on phones'],
        ['`mk-display`', 'The big homepage hero headings', '64 px on computers, 40 px on phones'],
        ['`mk-order-link`', 'Used automatically by the header HTML in {{lesson:m09-l02}}', 'Outline “Order Online” link']
      ] } },
      { h: 'Try it', steps: [
        'Open your `Layout practice` draft page.',
        'Add a Paragraph above the heading, type `Welcome to Mesurado` and give it the class `mk-eyebrow`. It turns into a small gold label.',
        'Click **Save draft**.'
      ] }
    ],
    resources: { content: ['css.helpers'] },
    expected: 'A paragraph with the class `mk-eyebrow` shows as small, spaced, gold uppercase text.',
    troubleshoot: ['css-class-not-working'],
    checklist: ['The helper CSS is pasted into Additional CSS and published.', 'I can add a class in Advanced → Additional CSS class(es).', 'The `mk-eyebrow` test worked.'] },

  { id: 'm07-l06', title: 'Create reusable patterns', time: '40 min', keywords: 'patterns reusable create pattern synced unsynced section split card my patterns',
    objective: 'Save the sections you build most often as patterns so you can insert them in one click.',
    build: 'Four patterns: **MK Section**, **MK Split (image left)**, **MK Card** and **MK Dark Band**.',
    before: ['Finish {{lesson:m07-l05}}.', 'WordPress 6.3 or newer (Local installs the latest).'],
    body: [
      { callout: 'info', title: 'What is a pattern?', text: 'A **pattern** is a saved group of blocks. You insert it like a block, then change the text and images. **Not synced** patterns become independent copies — exactly what we want for sections.' },
      { h: 'Pattern 1 — MK Section', steps: [
        'Open your `Layout practice` draft. Make sure the section Group has the settings from {{lesson:m07-l04}} (full width, 1240 content, padding 96/32, class `mk-section`) and change its background to slot 5.',
        'Inside it, keep: a Paragraph with class `mk-eyebrow` (text `Eyebrow`), a Heading H2 (text `Section heading`) and a Paragraph (text `Intro text`).',
        'Select the outer Group (use **Document Overview**).',
        'In the block toolbar, click **⋮** (Options) → **Create pattern** (older versions: **Create Reusable block**).',
        'Name it `MK Section`, turn **Synced** OFF, and click **Add** / **Create**.'
      ] },
      { h: 'Pattern 2 — MK Split (image left)', steps: [
        'Below, insert your **MK Section** pattern: click **+** → **Patterns** tab → **My patterns** → **MK Section**.',
        'Delete the eyebrow, heading and paragraph inside it. Add a **Columns** block, choose **50 / 50**, gap `64px`, vertical alignment middle, **Stack on mobile** ON.',
        'In the left column, add an **Image** block; choose any photo; set **Aspect ratio 3:2** and **Scale: Cover**.',
        'In the right column add: Paragraph `Eyebrow` (class `mk-eyebrow`), Heading H2 `Heading`, Paragraph `Text`, and a **Buttons** block with one button `Button →` set to the **Outline** style.',
        'Select the outer Group and create a pattern named `MK Split`, not synced.'
      ] },
      { h: 'Pattern 3 — MK Card', steps: [
        'Somewhere on the page (inside any section), add a **Group** block. Give it the class `mk-card`. Set its **Layout** to **Flex**, **Vertical**, block spacing `0`.',
        'Inside it add an **Image** (aspect **4:3**, scale **Cover**).',
        'Below the image, add another **Group** with class `mk-card-body` and block spacing `8px`. Inside it add: Paragraph `Badge or eyebrow` (class `mk-eyebrow`), Heading **H5** `Card title`, Paragraph `Price` (class `mk-price`), Paragraph `Description`.',
        'Select the outer card Group and create a pattern named `MK Card`, not synced.'
      ] },
      { h: 'Pattern 4 — MK Dark Band', steps: [
        'Insert **MK Section** again. Change its **Background** to slot 1 (`#0e1e16`) and add the class `mk-dark` to the Group.',
        'Change the eyebrow, heading and paragraph texts to `Eyebrow`, `Heading`, `Text`. Add a Buttons block with two buttons: one with background `#d1b686` and text `#0e1e16`, one Outline with ivory `#fdf9f2` text and border.',
        'Select the Group and create a pattern named `MK Dark Band`, not synced.'
      ] },
      { h: 'Check and clean up', steps: [
        'Click **+** → **Patterns** → **My patterns**. You should see all four patterns.',
        'You can also manage them at **Appearance → Editor → Patterns** or **Patterns** in the admin (location depends on version), or at `/wp-admin/edit.php?post_type=wp_block`.',
        'Move the `Layout practice` page to the trash. The patterns are kept.'
      ] }
    ],
    visual: [{ diagram: 'patterns', caption: 'The four patterns and their inner blocks.' }],
    expected: '**My patterns** lists MK Section, MK Split, MK Card and MK Dark Band, all unsynced.',
    troubleshoot: ['pattern-synced-by-mistake', 'create-pattern-missing'],
    checklist: ['MK Section saved (not synced).', 'MK Split saved (not synced).', 'MK Card saved (not synced).', 'MK Dark Band saved (not synced).', 'The practice page is in the trash.'] }
  ] },

/* ============================== MODULE 08 ============================== */
{ id: 'm08', title: 'Creating the Required Website Pages', summary: 'Create all 14 pages with the right slugs and set Home as the homepage.',
  lessons: [
  { id: 'm08-l01', title: 'Create, save, publish and edit your first page', time: '20 min', keywords: 'page title slug url permalink draft publish preview update home',
    objective: 'Create the Home page and learn the full page workflow: title, slug, draft, publish, preview and update.',
    build: 'A published, empty **Home** page.',
    before: ['Finish Module 07.'],
    body: [
      { steps: [
        'Go to **Pages → Add New Page**.',
        'Click **Add title** and type `Home`.',
        'Open the right sidebar **Page** tab. Find the **URL** or **Link** setting (in the **Summary** panel). Click it.',
        'In **Permalink** / **Slug**, make sure it says `home`. (A slug is the last part of the web address. Use lowercase letters and hyphens only.)',
        'Click **Save draft**. A message “Draft saved” appears.',
        'Click **Publish**. WordPress asks “Are you ready to publish?” — click **Publish** again.',
        'A panel shows **Home is now live** with **View Page**. Click **View Page** to see it (it is empty for now).',
        'Go back to the editor tab. Notice the main button now says **Save** (newer versions) or **Update** (older versions). Use it every time you change a published page.'
      ] },
      { callout: 'warn', title: 'Draft vs published', text: 'A **draft** is invisible to visitors and missing from menus. Make sure every project page is **published** before you test the menu.' }
    ],
    resources: { values: [['Title', 'Home'], ['Slug', '{{copy:home}}']] },
    expected: 'Pages → All Pages shows **Home** with the status Published.',
    troubleshoot: ['page-wont-publish', 'permalinks-404'],
    checklist: ['The Home page exists and is published.', 'Its slug is `home`.', 'I know where Save draft, Publish, Preview and Save/Update are.'] },

  { id: 'm08-l02', title: 'Create the other 13 pages', time: '30 min', keywords: 'pages inventory slugs our-story menu reservations contact legal',
    objective: 'Create every remaining page of the reference site with the exact title and slug.',
    build: 'All 14 project pages, published and empty, ready to build.',
    before: ['Finish {{lesson:m08-l01}}.'],
    body: [
      { h: 'Repeat for each page in the table', steps: [
        'Go to **Pages → Add New Page**.',
        'Type the **Title** exactly as in the table.',
        'In **Page → URL**, check the slug matches the table. WordPress usually makes it automatically; fix it if not.',
        'Click **Publish** → **Publish**.',
        'Repeat until all pages are created.'
      ] },
      { table: { head: ['#', 'Page title', 'Slug', 'Where it appears in navigation'], rows: GUIDE.project.pages.map(function (p, i) { return [String(i + 1), '**' + p.title + '**', '{{copy:' + p.slug + '}}', p.nav]; }) } },
      { callout: 'info', title: 'WooCommerce pages', text: 'You will also see **Shop**, **Cart**, **Checkout** and **My Account** from WooCommerce. Keep them. The **Shop** page is where customers order from in {{lesson:m13-l07}}.' },
      { h: 'Check the list', steps: [
        'Go to **Pages → All Pages**.',
        'You should see the 14 pages plus the four WooCommerce pages, all **Published**.',
        'Hover over any page and click **View** to check its address, for example `mesurado-kitchen.local/our-story/`.'
      ] }
    ],
    expected: 'Pages → All Pages lists all 14 project pages as Published, each with the slug in the table.',
    troubleshoot: ['slug-has-2', 'page-wont-publish'],
    checklist: GUIDE.project.pages.map(function (p) { return '**' + p.title + '** published with slug `' + p.slug + '`'; }) },

  { id: 'm08-l03', title: 'Set the homepage and page layout options', time: '25 min', tools: 'Astra', keywords: 'static homepage reading settings front page disable title astra settings full width transparent header',
    objective: 'Make Home the front page and set every page to full width with no automatic title.',
    build: 'A site whose front page is Home, with clean full-width pages ready for your own heroes.',
    before: ['Finish {{lesson:m08-l02}}.'],
    body: [
      { h: 'Set the static homepage', steps: [
        'Open your WordPress dashboard.',
        'Locate **Settings** in the menu on the left.',
        'Click **Settings → Reading**.',
        'Find the section labelled **Your homepage displays**.',
        'Select **A static page**.',
        'Open the **Homepage** dropdown and choose **Home**.',
        'Leave **Posts page** set to **— Select —** (our Journal is a normal page that lists posts itself).',
        'Scroll down and click **Save Changes**.',
        'Open your website in a new tab and confirm that the empty Home page now appears at `mesurado-kitchen.local/`.'
      ] },
      { h: 'Page layout settings (do this for every page)', note: 'Every page in the reference starts with its own hero, so we hide Astra’s automatic page title and remove all side spacing.', steps: [
        'Go to **Pages → All Pages** and open **Home** in the editor.',
        'At the top right, click the **Astra** icon (a small “A”, labelled **Astra Settings** or **Astra Page Settings**). A panel opens.',
        'Set **Container** / **Content Layout** to **Full Width** and **Container Style** to **Unboxed** (if shown).',
        'Set **Sidebar** to **No Sidebar**.',
        'Under **Disable Elements**, tick **Disable Title** (and **Disable Breadcrumb** / **Featured Image** if shown).',
        'For **Home only**: find **Transparent Header** and set it to **Enabled**. (For every other page leave it as **Default** or set **Disabled**.)',
        'Click **Save**.',
        'Repeat steps 1–5 and 7 for the other 13 pages. (Tip: open each from **Pages → All Pages**.)'
      ] },
      { callout: 'tip', title: 'Quick check', text: 'Visit any page. You should see the header, an empty area and the footer — no grey page title. That empty area is where you will build.' }
    ],
    visual: [{ diagram: 'astra-page-settings', caption: 'The Astra page settings panel in the Block Editor.' }],
    resources: { values: [['Homepage displays', 'A static page'], ['Homepage', 'Home'], ['Posts page', '— Select — (none)'], ['Content layout', 'Full Width / Unboxed'], ['Sidebar', 'No Sidebar'], ['Disable title', 'Ticked on all 14 pages'], ['Transparent header', 'Enabled on Home only']] },
    expected: '`mesurado-kitchen.local/` shows the Home page, and no page shows an automatic title.',
    troubleshoot: ['homepage-wrong', 'astra-settings-missing'],
    checklist: ['Settings → Reading uses a static page with Home as the homepage.', 'All 14 pages are Full Width, No Sidebar, with the title disabled.', 'Transparent Header is enabled on Home only.'] }
  ] },

/* ============================== MODULE 09 ============================== */
{ id: 'm09', title: 'Building the Header, Navigation & Footer', summary: 'Main menu with dropdowns, logo, buttons, transparent header, mobile menu and footer.',
  lessons: [
  { id: 'm09-l01', title: 'Create the main menu and footer menu', time: '40 min', keywords: 'menus navigation dropdown submenu custom link categories primary menu footer menu legal',
    objective: 'Build the main navigation with all dropdowns, plus the small legal menu for the footer.',
    build: '**Main Menu** (8 top items, 15 dropdown items) and **Legal Menu** (3 items).',
    before: ['All 14 pages are published ({{lesson:m08-l02}}).'],
    body: [
      { h: 'First: create the post categories', note: 'The Journal dropdown links to two post categories, so we create them now. The third category is for events.', steps: [
        'Go to **Posts → Categories**.',
        'In **Add New Category**, type the **Name** `News & Updates` and click **Add New Category**.',
        'Add two more: `Events & Promotions` and `Special Events`.',
        'Hover over **Uncategorized** → **Edit**, and rename it to `General` (WordPress needs one default category). Click **Update**.'
      ] },
      { h: 'Create the Main Menu', steps: [
        'Go to **Appearance → Menus**.',
        'Click **create a new menu** (if a menu already exists). In **Menu Name** type `Main Menu` and click **Create Menu**.',
        'In the left column, open **Pages** → **View All**. Tick **Home**, **Our Story**, **Our Philosophy**, **Our Team**, **Menu**, **Reservations**, **Private Dining**, **Catering**, **Special Events**, **Gallery**, **Journal**, **Contact**. Click **Add to Menu**.',
        'Open **Custom Links**. For each dropdown item under **Menu**, add a custom link: **URL** `/menu/`, **Link Text** as below, then **Add to Menu**: `Full Menu`, `Breakfast & Brunch`, `Lunch`, `Dinner`, `Drinks & Cocktails`, `Desserts`, `Seasonal Specials`.',
        'Open **Categories** → **View All**. Tick **News & Updates** and **Events & Promotions** → **Add to Menu**.'
      ] },
      { h: 'Arrange and rename the items', note: 'Drag items up and down to change order. Drag an item slightly to the **right** under another item to make it a dropdown (sub-item).', steps: [
        'Arrange the order exactly as the diagram below.',
        'The top-level **About** item is the **Our Story** page: click its arrow to open it and change **Navigation Label** to `About`. Then add **Our Story** again from Pages (it will be the first dropdown item) and drag **Our Story**, **Our Philosophy** and **Our Team** to the right under About.',
        'Do the same for **Experiences**: add **Private Dining** a second time, rename the top one to `Experiences`, and nest Private Dining, Catering and Special Events under it.',
        'Nest the seven Menu custom links under **Menu**.',
        'Nest **News & Updates** and **Events & Promotions** under **Journal**.',
        'Under **Menu Settings** at the bottom, tick **Primary Menu** as the display location (Astra may call it **Primary Menu** or **Primary**).',
        'Click **Save Menu**.'
      ] },
      { content: 'nav.structure' },
      { h: 'Create the Legal Menu (footer)', steps: [
        'Click **create a new menu**, name it `Legal Menu`, **Create Menu**.',
        ['Add three **Custom Links**:', ['`/legal/#privacy` — `Privacy Policy`', '`/legal/#terms` — `Terms`', '`/legal/#accessibility` — `Accessibility`']],
        'Tick the display location **Footer Menu** and click **Save Menu**.'
      ] },
      { callout: 'info', title: 'Why do Menu sub-items all go to /menu/?', text: 'The reference prototype also opens the full Menu page from every Menu sub-item. On that page, students click the tab they want. This matches the reference behaviour.' }
    ],
    visual: [{ diagram: 'menu-tree', caption: 'The finished Main Menu. Indented items are dropdown sub-items.' }],
    resources: { content: ['nav.structure'] },
    expected: 'Your site header shows Home, About, Menu, Reservations, Experiences, Gallery, Journal, Contact, and hovering About, Menu, Experiences and Journal opens dropdowns.',
    troubleshoot: ['menu-items-missing', 'dropdown-not-showing'],
    checklist: ['Three categories exist: News & Updates, Events & Promotions, Special Events.', 'Main Menu has 8 top-level items in the right order.', 'About, Menu, Experiences and Journal have the right dropdown items.', 'Main Menu is assigned to Primary Menu.', 'Legal Menu has 3 links and is assigned to Footer Menu.'] },

  { id: 'm09-l02', title: 'Header layout: logo, menu, Order Online, Reserve button and cart', time: '40 min', tools: 'Astra', keywords: 'header builder logo site icon favicon button html cart primary row',
    objective: 'Arrange the desktop header like the reference using Astra’s free Header Builder.',
    build: 'Logo on the left; main menu, “Order Online”, “Reserve a Table” and the cart icon on the right.',
    before: ['Finish {{lesson:m09-l01}}.', 'Logos uploaded ({{lesson:m06-l02}}).'],
    body: [
      { h: 'Open the Header Builder', steps: [
        'Go to **Appearance → Customize → Header Builder**.',
        'A grid appears at the bottom of the screen with three rows (**Above Header**, **Primary Header**, **Below Header**), each with left, centre and right zones. Make sure the **desktop** icon is selected.',
        'We only use the **Primary Header** row. If any elements sit in the Above or Below rows, hover over them and click the **X** to remove them.'
      ] },
      { h: 'Add the logo', steps: [
        'Click the **Site Title & Logo** element in the Primary row (left zone).',
        'Under **Logo**, click **Select logo** (or **Choose Image**) and pick {{asset:logo-full}} from the Media Library. Click **Select**; if asked to crop, click **Skip cropping**.',
        'Set **Logo Width** to `190` px for desktop.',
        'Turn **Display Site Title** OFF.',
        'Under **Site Icon** (it may be in **Site Identity**), choose {{asset:mono-full}}. This is the small icon in the browser tab.'
      ] },
      { h: 'Arrange the right side', steps: [
        'In the Primary row, click the **+** in the **right** zone and add **Primary Menu** (if it is not already there).',
        'Click **+** in the right zone again and add **HTML 1**. Click the new HTML 1 element and paste the code below into its content box. This makes the **Order Online** link.',
        'Click **+** again and add **Button 1**. Click it and set **Text** to `Reserve a Table` and **Link** to `/reservations/`.',
        'Click **+** again and add **Cart** (WooCommerce). Set its icon to a bag or basket.',
        'Drag the elements in the right zone into this order: **Primary Menu**, **HTML 1**, **Button 1**, **Cart**.',
        'Click **Publish**.'
      ] },
      { content: 'header.orderHtml' },
      { callout: 'free', title: 'Free elements only', text: 'Astra Free includes one Button element and two HTML elements. That is why “Order Online” is an HTML link styled by our helper CSS. Ignore elements marked Pro.' }
    ],
    visual: [{ diagram: 'header-builder', caption: 'Primary Header row: logo left; menu, Order Online, Reserve a Table and cart right.' }],
    resources: { assets: ['logo-full', 'mono-full'], content: ['header.orderHtml', 'header.reserve'], values: [['Logo width (desktop)', '{{copy:190}} px'], ['Button 1 link', '{{copy:/reservations/}}']] },
    expected: 'The header shows the dark Mesurado logo on the left and, on the right, the menu, an outlined “Order Online” link, a dark “Reserve a Table” button and a bag icon. The browser tab shows the monogram icon.',
    troubleshoot: ['logo-too-big', 'html-element-shows-code', 'cart-missing'],
    checklist: ['The full-colour logo is in the header at about 190 px wide.', 'The site title text is hidden.', 'The site icon is the monogram.', 'Right zone order: menu, Order Online, Reserve a Table, cart.', 'Changes are published.'] },

  { id: 'm09-l03', title: 'Header colours, spacing and the transparent homepage header', time: '40 min', tools: 'Astra', keywords: 'header colors height border menu color hover dropdown submenu transparent header reversed logo',
    objective: 'Style the header like the reference and make it transparent over the homepage hero.',
    build: 'An 88 px ivory header with a thin border and gold hover colour; on Home, a transparent header with the light logo.',
    before: ['Finish {{lesson:m09-l02}}.'],
    body: [
      { h: 'Primary header row', steps: [
        'In **Header Builder**, click the settings for the **Primary Header** row (hover over the row and click its gear icon, or click an empty part of the row).',
        'Set **Height** to `88` px.',
        'Open the **Design** tab. Set **Background** to slot 5 (`#f8f5ef`).',
        'Set **Bottom Border** size `1` px, colour slot 7 (`#e5e0d6`).'
      ] },
      { h: 'Menu style', steps: [
        'Click the **Primary Menu** element. In **General**, set **Submenu** container animation to none or fade (your choice).',
        'In **Design**: **Menu Color** (link colour) → `#242424`; **Hover** and **Active** colours → slot 8 `#7d5a12`.',
        'Set **Menu Font**: Inter, weight **500**, size `15` px.',
        'Set the **horizontal spacing** (Menu item padding left/right) to about `12` px.',
        'Open **Submenu** settings: **Background** `#ffffff`, **Border** 1 px `#e5e0d6`, **Border radius** 10 px if available, link colour `#242424`, hover `#7d5a12`.'
      ] },
      { h: 'Button 1 style', steps: [
        'Click **Button 1** → **Design**.',
        'Text `#fdf9f2`, Background `#0e1e16`, hover background `#26382f`, border radius `6` px, font size `14` px, padding `10` px top/bottom and `16` px left/right (the reference uses a small button here).',
        'Click **Publish**.'
      ] },
      { h: 'Transparent header on the homepage', steps: [
        'In the Customizer, find **Transparent Header** (inside **Header Builder** or at the top level, depending on version).',
        'Leave **Enable on Complete Website** OFF (we already enabled it for Home only in {{lesson:m08-l03}}).',
        'Turn ON **Different Logo for Transparent Header** and choose {{asset:logo-reversed}}. Set its width to `190` px.',
        'Open the **Colors** for the transparent header: **Background** fully transparent; **Menu link** `#fdf9f2`; **Menu hover/active** `#d1b686`; **Submenu** link `#242424` (the dropdown stays white).',
        'If transparent header colours for buttons are available, set Button background `#d1b686` and text `#0e1e16`.',
        'Click **Publish**. Visit the homepage: the header now floats over the top of the page (you will see it properly once the hero slider is built in {{lesson:m10-l02}}).'
      ] }
    ],
    visual: [{ diagram: 'header-states', caption: 'Normal header (top) and transparent homepage header over a photo (bottom).' }],
    resources: { assets: ['logo-reversed'], values: [['Header height', '{{copy:88}} px'], ['Header background', '{{hex:#f8f5ef}}'], ['Bottom border', '1 px {{hex:#e5e0d6}}'], ['Menu link', '{{hex:#242424}}'], ['Menu hover / active', '{{hex:#7d5a12}}'], ['Transparent menu link', '{{hex:#fdf9f2}}'], ['Transparent hover', '{{hex:#d1b686}}']] },
    expected: 'On inner pages: an 88 px ivory header with a thin beige line under it, dark menu links that turn gold on hover. On Home: no background, the light logo and ivory links.',
    troubleshoot: ['transparent-header-not-working', 'pro-feature'],
    checklist: ['Header height 88 px, background ivory, 1 px bottom border.', 'Menu links are charcoal and turn gold on hover/active.', 'Dropdowns are white with a thin border.', 'Home uses the transparent header with the reversed logo.'] },

  { id: 'm09-l04', title: 'Mobile header and menu', time: '30 min', tools: 'Astra', keywords: 'mobile header toggle hamburger off canvas flyout responsive menu monogram',
    objective: 'Set up the header for phones and tablets: logo, Reserve button and a menu toggle that opens a side panel.',
    build: 'A mobile header like the reference, with a working slide-in menu.',
    before: ['Finish {{lesson:m09-l03}}.'],
    body: [
      { h: 'Switch the builder to mobile', steps: [
        'In **Appearance → Customize → Header Builder**, click the **tablet/mobile** device icon at the bottom of the builder (or at the bottom of the left panel).',
        'The builder now shows the **mobile** header rows. Elements here are separate from desktop.'
      ] },
      { h: 'Arrange the mobile header', steps: [
        'In the **Primary Header** row: put **Site Title & Logo** on the left; on the right put **Button 1** and then **Toggle Button**.',
        'Remove anything else from the mobile rows (click the **X**).',
        'Click the logo element. If you see **Different Logo For Mobile Devices**, turn it ON and choose {{asset:mono-full}}. If your version has no such option, set the mobile **Logo Width** to `130` px instead — the full logo is fine.',
        'Set the mobile Primary row **Height** to `64` px.'
      ] },
      { h: 'Toggle button and off-canvas menu', steps: [
        'Click **Toggle Button**. Choose the **Minimal** or **Outline** style and set its colour to `#0e1e16`.',
        'Click **Off-Canvas** (in the mobile builder, often under the rows). Set **Type** (or **Popup type**) to **Flyout**, **Position** to **Right**.',
        'Make sure the **Mobile Menu** element is inside the Off-Canvas area. If the area is empty, click its **+** and add **Mobile Menu**.',
        'Click **Mobile Menu** and set it to use **Main Menu** (it usually uses the Primary Menu automatically). Set link colour `#242424`, hover `#7d5a12`.',
        'Click **Publish**.'
      ] },
      { h: 'Test the mobile menu', steps: [
        'Still in the Customizer with the mobile preview, click the toggle (☰) in the preview. A panel slides in from the right with the menu.',
        'Click the arrow next to **About**: the dropdown opens with Our Story, Our Philosophy and Our Team.',
        'Close the panel with its **X**.',
        'Also test in the browser: open your site, press {{kbd:F12}}, click the phone/tablet icon (Toggle device toolbar) and choose a phone size. Use the menu there. Press {{kbd:F12}} again to close.'
      ] },
      { callout: 'info', title: 'Small difference from the reference', text: 'The reference changes the mobile button text to “Reserve”. Astra Free uses the same button text on all devices, so yours says “Reserve a Table”. This is an accepted difference.' }
    ],
    visual: [{ diagram: 'mobile-header', caption: 'Mobile header: monogram left; Reserve button and menu toggle right; menu slides in from the right.' }],
    resources: { assets: ['mono-full', 'mono-reversed'], values: [['Mobile header height', '{{copy:64}} px'], ['Off-canvas type', 'Flyout, right side']] },
    expected: 'At phone width the header shows the logo, the Reserve button and a ☰ toggle; tapping the toggle opens the full menu with working dropdown arrows.',
    troubleshoot: ['mobile-menu-not-opening', 'dropdown-not-showing'],
    checklist: ['Mobile header shows logo, button and toggle.', 'The toggle opens a flyout menu from the right.', 'Dropdowns open inside the mobile menu.', 'I tested in the browser’s device toolbar ({{kbd:F12}}).'] },

  { id: 'm09-l05', title: 'Build the footer', time: '50 min', tools: 'Astra', keywords: 'footer builder widgets columns copyright social legal dark',
    objective: 'Recreate the dark four-column footer with the bottom bar.',
    build: 'Footer: brand column (light logo, text, button) + Visit, Explore and Menu columns; bottom bar with copyright, legal links and social icons.',
    before: ['Finish {{lesson:m09-l04}}.'],
    body: [
      { h: 'Set up the footer rows', steps: [
        'Go to **Appearance → Customize → Footer Builder** (desktop view).',
        'Click the **Primary Footer** row settings. Set **Columns** to **4** and choose a layout where the first column is wider (for example **40 / 20 / 20 / 20**). If no such layout exists, choose equal columns.',
        'Add **Widget 1**, **Widget 2**, **Widget 3** and **Widget 4** to the four columns (click **+** in each column).',
        'In the **Below Footer** row, set **3 columns**. Add **Copyright** (left), **Footer Menu** (centre) and **Social 1** (right).',
        'Remove other elements from the **Above Footer** row.'
      ] },
      { h: 'Footer colours and spacing', steps: [
        'Primary Footer row **Design**: Background slot 1 `#0e1e16`; padding top `80` px, bottom `40` px.',
        'Below Footer row **Design**: Background `#0e1e16`; top border 1 px `#34483d`; padding `24` px top and bottom.',
        'Text colour `#c3bfb3`; link colour `#fdf9f2`; link hover `#d1b686`; widget title colour `#fdf9f2`.',
        'Click **Publish**.'
      ] },
      { h: 'Fill the four widget areas', note: 'Widgets are edited with blocks. Use Appearance → Widgets (outside the Customizer) — it is easier.', steps: [
        'Go to **Appearance → Widgets**. You see areas named **Footer Widget 1** to **Footer Widget 4** (or Widget 1–4).',
        ['**Footer Widget 1** (brand): add an **Image** block with {{asset:logo-reversed}}, width `190` px. Add a **Paragraph** with the footer description. Add a **Buttons** block: `Reserve a Table` → `/reservations/`, background `#d1b686`, text `#0e1e16`.', ['Description: {{content:footer.about}}']],
        '**Footer Widget 2** (Visit): add a **Heading** H6 `Visit`. Add a **List** block with the four lines: address, phone, email, `Opening hours`. Link each line to `/contact/` (select the text, press {{kbd:Ctrl}} + {{kbd:K}}, type `/contact/`, press {{kbd:Enter}}).',
        '**Footer Widget 3** (Explore): Heading H6 `Explore`; List: `Our Story` → `/our-story/`, `Private Dining` → `/private-dining/`, `Catering` → `/catering/`, `Special Events` → `/special-events/`.',
        '**Footer Widget 4** (Menu): Heading H6 `Menu`; List: `Full Menu` → `/menu/`, `Seasonal Specials` → `/menu/`, `Drinks & Cocktails` → `/menu/`, `Order Online` → `/order-online/`.',
        'For each List block, open **Styles** and remove the bullet look if needed by choosing a list style with no markers, or leave the bullets — content matters more.',
        'Click **Update**.'
      ] },
      { h: 'Bottom bar', steps: [
        'Back in **Customize → Footer Builder**, click **Copyright**. Replace the text with the copyright line below.',
        'Click **Footer Menu** and make sure it uses **Legal Menu**.',
        'Click **Social 1**. Remove the default networks and add **Instagram** (`https://www.instagram.com/`) and **Facebook** (`https://www.facebook.com/`). Set icon colour `#fdf9f2`, hover `#d1b686`.',
        'Click **Publish**.'
      ] }
    ],
    visual: [{ diagram: 'footer', caption: 'Footer layout: four columns above a three-part bottom bar.' }],
    resources: { assets: ['logo-reversed'], content: ['footer.about', 'footer.visit', 'footer.explore', 'footer.menu', 'footer.copyright', 'footer.social'], values: [['Footer background', '{{hex:#0e1e16}}'], ['Footer text', '{{hex:#c3bfb3}}'], ['Footer links / headings', '{{hex:#fdf9f2}}'], ['Link hover', '{{hex:#d1b686}}'], ['Bottom bar divider', '{{hex:#34483d}}']] },
    expected: 'Every page ends with a dark green footer: light logo, description and gold button on the left, three link columns, then a thin line and a bottom bar with copyright, three legal links and two social icons.',
    troubleshoot: ['widgets-not-showing', 'footer-colors-wrong'],
    checklist: ['Primary footer has 4 columns with the right content.', 'Footer background is #0e1e16 and text is readable.', 'Bottom bar shows copyright, Legal Menu and Instagram + Facebook icons.', 'All footer links open the correct pages.'] }
  ] }
);
