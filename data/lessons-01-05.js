/* Modules 01–05. Lesson format is documented in README.md (“Editing lessons”). */
window.GUIDE = window.GUIDE || {};
GUIDE.modules = GUIDE.modules || [];
GUIDE.modules.push(

/* ============================== MODULE 01 ============================== */
{ id: 'm01', title: 'Welcome & Final Project Overview', summary: 'What you will build, the free tools you need and how to use this guide.',
  lessons: [
  { id: 'm01-l01', title: 'Welcome — how to use this guide', time: '15 min', keywords: 'start progress checklist print pdf search offline',
    objective: 'Learn how this guide is organised and how to use its progress tracking, checklists, search and printing so you can work on your own.',
    build: 'Nothing on your website yet. You will set up good habits: a folder for the project and a plan for working through the lessons.',
    before: ['A Windows laptop or desktop computer with at least 8 GB of RAM and 10 GB of free disk space (LocalWP needs this).', 'An internet connection for downloading (about 1 GB in total). After the downloads, most lessons work offline.'],
    body: [
      'Welcome! In this course you will rebuild a complete restaurant website — **Mesurado Kitchen & Palm Bar** — in WordPress. You will work on your own computer, use only free tools, and finish with a website you can show in your portfolio.',
      { h: 'How the guide is organised', steps: [
        'Look at the **left sidebar** (on a phone, tap the ☰ button at the top left). It lists 16 numbered **modules**. Each module contains numbered **lessons**.',
        'Click a module title to open or close its list of lessons. The number on the right (for example `0/4`) shows how many lessons you have completed.',
        'Lessons must be done **in order**. A lesson never asks you to use something you have not created yet.',
        'Every lesson has the same parts: Learning objective → What you will build → Before you begin → Step-by-step instructions → Visual demonstration → Required resources → Expected result → Troubleshooting → Completion checklist → Next lesson.'
      ] },
      { h: 'Tracking your progress', steps: [
        'At the bottom of each lesson is a **Completion checklist**. Tick each item only after you have checked it on your own website.',
        'When every item is ticked, press **Mark lesson complete**. The lesson gets a green tick in the sidebar, and the progress bar at the top increases.',
        'Your progress is saved in **this web browser on this computer**. If you open the guide on a different computer or phone, or clear your browser data, the progress will not be there. Your WordPress website is not affected.',
        'Made a mistake? Press the button again to mark a lesson as not complete. **Reset progress** (bottom of the sidebar) clears everything after asking you twice.'
      ] },
      { h: 'Finding things fast', steps: [
        'Use the **search box** at the top. Try typing `logo` and pressing {{kbd:Enter}}. Results include lessons, troubleshooting fixes, text from the Content Library and images from the Asset Library.',
        'The sidebar also links to five **resource pages**: Website blueprint, Project Asset Library (all images), Project Content Library (all text), Troubleshooting, and Rubric & final checklist.',
        'Whenever you see a grey **Copy** button, press it to copy that text or value. Then paste it into WordPress with {{kbd:Ctrl}} + {{kbd:V}}.'
      ] },
      { h: 'Printing or saving a lesson as a PDF', note: 'Useful if your internet is unreliable or you want to work beside the laptop on paper.', steps: [
        'Open the lesson you want.',
        'Click the printer icon at the top right (or press {{kbd:Ctrl}} + {{kbd:P}}).',
        'In the print window, set **Destination** (or **Printer**) to **Save as PDF** or **Microsoft Print to PDF**.',
        'Click **Save**, choose a folder, and press **Save** again.',
        'To print a whole module at once, use the **Print this whole module** link at the bottom of any lesson.'
      ] },
      { h: 'Set up your project folder', steps: [
        'Open **File Explorer** (the yellow folder icon on the taskbar, or press {{kbd:Windows}} + {{kbd:E}}).',
        'Click **Documents** in the left panel.',
        'Right-click an empty area, choose **New → Folder**, and name it `Mesurado Project`.',
        'Inside it, create two more folders: `assets` (for the images you will download) and `submission` (for your final screenshots and backup).'
      ] },
      { callout: 'tip', title: 'Work rhythm that works', text: 'Plan two or three lessons per sitting. Before you stop, finish the checklist of the lesson you are on — it is much easier to continue later from a clean point.' }
    ],
    visual: [{ diagram: 'guide-layout', caption: 'How this guide is laid out: top bar, sidebar with modules, and the lesson area.' }],
    expected: 'You know where the modules, resources, search and print buttons are, and you have a `Mesurado Project` folder with `assets` and `submission` inside it in your Documents.',
    troubleshoot: [{ q: 'My progress disappeared.', a: 'Progress is stored in your browser. It disappears if you use a different browser, a private/incognito window, another computer, or clear browsing data. Use the same browser each time. Your WordPress site is never affected.' }, { q: 'The Copy button does nothing.', a: 'Some browsers block copying on pages opened from a file. Select the text with your mouse and press Ctrl + C instead.' }],
    checklist: ['I can open and close a module in the sidebar.', 'I searched for “logo” and saw results.', 'I know how to save a lesson as a PDF.', 'I created the `Mesurado Project` folder with `assets` and `submission` folders inside.'] },

  { id: 'm01-l02', title: 'Meet the final project: Mesurado Kitchen & Palm Bar', time: '30 min', keywords: 'reference preview pages sitemap restaurant',
    objective: 'Explore the reference website you must reproduce and understand its pages, navigation and main features.',
    build: 'A clear picture of the finished site: 14 pages, a shared header and footer, forms and an online ordering shop.',
    before: ['Finish {{lesson:m01-l01}}.'],
    body: [
      'Mesurado Kitchen & Palm Bar is a (fictional) riverside restaurant and palm-wine bar in Mamba Point, Monrovia. Your instructor designed its website as a prototype. Your job is to **rebuild it in WordPress** so it looks and works the same way.',
      { h: 'Open the reference website', steps: [
        'Click **Open the reference website** on the course overview page, or use this link: [Mesurado reference prototype](https://claude.ai/artifact/G6vC3teatgeyNBEVwnd27V).',
        'The reference opens as a design canvas showing every page side by side. Use your mouse wheel to zoom and drag to move around. Each page has its name above it (for example **Home**, **Menu**, **Reservations**).',
        'Double-click a page (or use its full-screen option) to view it at full size and click its links and buttons.',
        'Look at the **Home** page from top to bottom. Count the sections — there are 11 between the header and the footer.',
        'Find the **Responsive previews** row. It shows Home, Menu, Reservations and Order at mobile width (390 px) and tablet width (768 px).',
        'Find the **WordPress handoff** board. It is the designer’s summary for developers; this course turns it into beginner steps.'
      ] },
      { callout: 'info', title: 'Sample content', text: 'The restaurant details, team, events, reviews and prices in the reference were written for this project. They are not a real business. Use them exactly as given — they are your “client’s” content.' },
      { h: 'The pages you will build', table: { head: ['Page', 'What it is for'], rows: [
        ['Home', 'Hero slider, welcome, signature dishes, experience, reservation band, seasonal specials, private dining & catering, reviews, gallery preview, location, newsletter'],
        ['Our Story · Our Philosophy · Our Team', 'The “About” pages (under the **About** menu)'],
        ['Menu', 'All 23 dishes and drinks in tabs, with prices, dietary labels and allergens'],
        ['Reservations', 'Table-booking request form'],
        ['Order Online', 'Choose pickup or delivery, then order from a shop with a cart and checkout'],
        ['Private Dining · Catering · Special Events', 'The “Experiences” pages, with inquiry forms and an events list'],
        ['Gallery', '16 photos in tabs, opening larger when clicked'],
        ['Journal', 'News articles (blog posts) with categories'],
        ['Contact', 'Contact form, details, opening hours, map and FAQ'],
        ['Legal', 'Privacy policy, terms and accessibility statement']
      ] } },
      { h: 'Shared parts on every page', list: ['**Header**: logo, main menu with dropdowns, “Order Online” link, “Reserve a Table” button, cart icon. On the homepage the header sits *on top of* the hero photo (transparent).', '**Footer**: dark green with the light logo, a short description, three link columns, copyright, legal links and social icons.', '**Page hero**: a wide photo with a dark green overlay, breadcrumb, small gold label, big heading and intro text.', '**Reservation band**: a centred call-to-action used near the bottom of many pages.'] }
    ],
    visual: [{ diagram: 'sitemap', caption: 'Site map of the reference website. Grey boxes are dropdown items in the main menu.' }, { diagram: 'home-map', caption: 'The 11 homepage sections in order. You will build each one in Module 10.' }],
    resources: { links: ['Reference website: [Mesurado prototype](https://claude.ai/artifact/G6vC3teatgeyNBEVwnd27V)', 'Full analysis: [Website blueprint](#/blueprint)'] },
    expected: 'You can name every page of the site, describe the header and footer, and you have seen the mobile previews.',
    troubleshoot: [{ q: 'The reference link will not open.', a: 'It needs an internet connection and a modern browser (Chrome, Edge or Firefox). If it still fails, ask your instructor for screenshots. Everything you need to build is also described in the Website blueprint and Content Library of this guide.' }],
    checklist: ['I opened the reference website.', 'I scrolled the whole Home page and counted 11 sections.', 'I looked at the mobile previews.', 'I can list the 14 pages from memory or from the table.'] },

  { id: 'm01-l03', title: 'The tools you will use — all free', time: '15 min', keywords: 'free tools localwp astra spectra fluent forms woocommerce cost paid pro',
    objective: 'Know each free tool in the project, what it does, and how to avoid paid “Pro” features.',
    build: 'Your tool list. Nothing is installed yet — that starts in Module 02.',
    before: ['Finish {{lesson:m01-l02}}.'],
    body: [
      { table: { head: ['Purpose', 'Free tool', 'What it does for us'], rows: [
        ['Run WordPress on your laptop', '**LocalWP** (Local)', 'Creates a private WordPress website on your computer — no hosting or internet needed after setup.'],
        ['Website software', '**WordPress** (from WordPress.org)', 'The content management system. Local installs it for you.'],
        ['Theme (overall look)', '**Astra** (free version)', 'Header and footer builders, global colours, fonts, layouts and a transparent header — all free.'],
        ['Page building', '**WordPress Block Editor** (built in)', 'You build every page with blocks: headings, images, columns, buttons, covers, galleries.'],
        ['Extra blocks', '**Spectra** (free, by the makers of Astra)', 'Adds four blocks we need: Slider, Tabs, Icon List and Google Map.'],
        ['Forms', '**Fluent Forms** (free)', 'Newsletter, reservation, contact, private dining and catering forms. Saves every entry inside WordPress.'],
        ['Online ordering', '**WooCommerce** (free)', 'Shop, cart, checkout, pickup and delivery, cash payment.'],
        ['Images & logos', 'Instructor-provided files', 'All 74 images are in the Project Asset Library.'],
        ['Fonts', 'Google Fonts (free)', 'Playfair Display for headings and Inter for text, chosen inside Astra.'],
        ['Backup & submission', 'LocalWP **Export** + WordPress **Tools → Export**', 'A complete .zip of your site plus a content export.']
      ] } },
      { callout: 'free', title: 'The free-only rule', text: ['You must not buy anything for this project. Astra, Spectra, Fluent Forms and WooCommerce all show adverts for paid “Pro” versions inside WordPress. **Ignore every “Upgrade”, “Go Pro”, “Unlock” or padlock button.** Every feature this course uses works in the free versions.', 'If you ever see a setting with a padlock or a “Pro” label, it is not needed. Close it and continue with the lesson.'] },
      { h: 'Why these tools (and not others)?', list: [
        '**Block Editor instead of Elementor**: it is already in WordPress, loads faster on basic laptops, and the free Elementor cannot make a slider with text and buttons.',
        '**Only three plugins** (Spectra, Fluent Forms, WooCommerce): fewer plugins means fewer things to break.',
        '**Fluent Forms**: it keeps every form entry in your dashboard, so you can test forms on your laptop even though it cannot send real email.',
        '**WooCommerce**: the reference has a real cart and checkout; WooCommerce is the free standard for that.'
      ] }
    ],
    expected: 'You can explain what each tool does and you know to ignore all paid upgrade offers.',
    checklist: ['I know what LocalWP, Astra, Spectra, Fluent Forms and WooCommerce do.', 'I understand that I must ignore “Pro” and “Upgrade” offers.'] },

  { id: 'm01-l04', title: 'Requirements, time plan and submission', time: '15 min', keywords: 'requirements submission deadline hours plan overview checklist',
    objective: 'Understand exactly what “finished” means for this project and plan your time.',
    build: 'A personal schedule and the overview checklist of the whole project.',
    before: ['Finish {{lesson:m01-l03}}.'],
    body: [
      { h: 'What you must submit', list: [
        'A complete backup of your WordPress site (a `.zip` exported from LocalWP) — {{lesson:m16-l03}}.',
        'A WordPress content export file (`.xml`) — {{lesson:m16-l03}}.',
        'Screenshots of every page at desktop and mobile width — {{lesson:m16-l02}}.',
        'A short screen-recording walkthrough **if your instructor asks for one** — {{lesson:m16-l02}}.',
        'Your completed final self-assessment checklist — [Rubric & final checklist](#/rubric).'
      ] },
      { h: 'Estimated time per module', table: { head: ['Modules', 'Topic', 'Time'], rows: [
        ['01–03', 'Overview, installing WordPress, the dashboard', 'about 3 hours'],
        ['04–07', 'Theme, plugins, images, design system', 'about 4 hours'],
        ['08–09', 'Pages, header, menu and footer', 'about 4 hours'],
        ['10', 'Homepage (11 sections)', 'about 7 hours'],
        ['11', 'The other 13 pages', 'about 12 hours'],
        ['12–13', 'Buttons, links, forms and online ordering', 'about 6 hours'],
        ['14–16', 'Mobile, testing, backup and submission', 'about 4 hours']
      ] } },
      { callout: 'info', title: 'Total', text: 'Plan for about **40 hours** of work. A steady pace of 6–8 hours a week finishes the project in 5–7 weeks.' },
      { h: 'Project overview checklist', note: 'This is the big picture. Each line becomes many detailed steps later.', list: [
        'WordPress running in LocalWP with the Astra theme',
        'Spectra, Fluent Forms and WooCommerce installed',
        'All 74 images downloaded and uploaded with alt text',
        'Global colours, fonts and button styles set',
        '14 pages created with the correct slugs; Home set as the homepage',
        'Header with logo, dropdown menu, Order Online link, Reserve button and cart; mobile menu working',
        'Footer with four columns and bottom bar',
        'Homepage: 11 sections matching the reference',
        'All other pages built section by section',
        'Five working forms; online ordering with pickup and delivery',
        'Every page checked on desktop, tablet and mobile',
        'Full test completed, backup and export made, submission folder ready'
      ] }
    ],
    expected: 'You know what you will submit, how long it will take, and you have a plan for when you will work.',
    checklist: ['I read what must be submitted.', 'I wrote down when I will work on the project each week.', 'I read the project overview checklist.'] }
  ] },

/* ============================== MODULE 02 ============================== */
{ id: 'm02', title: 'Installing WordPress with LocalWP', summary: 'Install Local, create the Mesurado site, log in and learn the restart routine.',
  lessons: [
  { id: 'm02-l01', title: 'Download and install LocalWP on Windows', time: '30 min', tools: 'LocalWP', keywords: 'localwp local install download windows installer',
    objective: 'Install LocalWP, the free program that runs WordPress websites on your own computer.',
    build: 'LocalWP installed and opening on your Windows computer.',
    before: ['Windows 10 or 11, 64-bit.', 'About 1 GB of internet data for the download and first site.', 'Permission to install programs on the computer (an administrator account).'],
    body: [
      { callout: 'info', title: 'What is “local” development?', text: 'Normally a website lives on a server on the internet. **Local** development means the website lives only on your laptop. Nobody else can see it — which is perfect for learning and building safely.' },
      { h: 'Download Local', steps: [
        'Open your web browser and go to [localwp.com](https://localwp.com/).',
        'Click the green **Download** button (it may say **Download for free**).',
        'In the form that appears, choose **Windows** as your platform.',
        'The form may ask for your name, email and organisation. These are optional for most people — fill in what is required and click **Get it now**.',
        'The installer file (named like `local-x.x.x-windows.exe`, about 600 MB) starts downloading. Wait until it finishes. On slow connections this can take a while — do not close the browser.'
      ] },
      { h: 'Install Local', steps: [
        'Open your **Downloads** folder and double-click the Local installer file.',
        'If Windows asks **“Do you want to allow this app to make changes to your device?”**, click **Yes**.',
        'Choose **Anyone who uses this computer** or **Only for me** (either is fine) and click **Next**.',
        'Keep the suggested install folder and click **Install**. Wait for the progress bar to finish.',
        'Leave **Run Local** ticked and click **Finish**.',
        'The first time Local opens it may ask to accept terms and to send error reports. Accept the terms; error reports are your choice.',
        'If Windows Defender Firewall asks to allow Local to communicate on networks, tick **Private networks** and click **Allow access**. Local needs this to run your site.',
        'Local may ask you to create a free account or log in. This is **optional** — look for a **Skip**, **Continue without an account** or **X** close button.'
      ] }
    ],
    visual: [{ diagram: 'local-app', caption: 'The main parts of the Local window (labelled illustration — your version may look slightly different).' }, { shot: 'm02-l01-local-download.png', caption: 'The localwp.com download page with the Download button.' }],
    resources: { links: ['Download page: [localwp.com](https://localwp.com/)'] },
    expected: 'The Local app is open and shows an empty sites list with a **+** (Create a new site) button at the bottom left.',
    troubleshoot: ['local-wont-start', 'local-install-blocked'],
    checklist: ['Local is installed.', 'Local opens without an error.', 'I allowed Local through the Windows firewall (private networks).'] },

  { id: 'm02-l02', title: 'Create your Mesurado website in Local', time: '20 min', tools: 'LocalWP', keywords: 'new site create admin username password environment preferred',
    objective: 'Create a new local WordPress site and an administrator account.',
    build: 'A WordPress website called **mesurado-kitchen** running on your computer.',
    before: ['Finish {{lesson:m02-l01}}.', 'Have a notebook or a password manager ready to write down your login details.'],
    body: [
      { steps: [
        'In Local, click the **+** button at the bottom left (**Create a new site**).',
        'Choose **Create a new site** (not a blueprint or a copy) and click **Continue**.',
        ['In **What’s your site’s name?** type the name below, then click **Continue**:', ['{{copy:mesurado-kitchen}}', 'Local automatically creates the address `mesurado-kitchen.local`. You can see it under **Advanced options** — do not change it.']],
        'On **Choose your environment**, keep **Preferred** selected and click **Continue**. (Preferred installs the recommended PHP and database versions; you do not need to choose them yourself.)',
        ['On **Set up WordPress**, fill in the administrator account:', ['**WordPress Username**: choose something you will remember, for example `mesurado-admin`. Avoid using `admin`.', '**WordPress Password**: a strong password. Write it down now.', '**WordPress Email**: your own email address.']],
        'Leave **Is this a WordPress Multisite?** set to **No**.',
        'Click **Add site**. Windows may ask permission to change the computer’s “hosts” file — click **Yes**. Local needs this so the address `mesurado-kitchen.local` works.',
        'Wait. Local downloads and sets up WordPress; the first site can take several minutes.',
        'When finished, the site appears in the list on the left with a green dot (running).'
      ] },
      { callout: 'warn', title: 'Write down your login now', text: 'You will log in many times. Record: site address `http://mesurado-kitchen.local/wp-admin`, your username and your password. If you forget them, see {{ts:forgot-login}}.' }
    ],
    visual: [{ shot: 'm02-l02-local-setup-wordpress.png', caption: 'The “Set up WordPress” screen in Local, where you enter the username, password and email.' }],
    resources: { values: [['Site name', '{{copy:mesurado-kitchen}}'], ['Site domain (automatic)', '`mesurado-kitchen.local`'], ['Environment', 'Preferred'], ['Multisite', 'No']] },
    expected: 'Local shows **mesurado-kitchen** in the sites list with a green running dot, and the site overview shows the domain `mesurado-kitchen.local`.',
    troubleshoot: ['local-wont-start', 'site-not-loading'],
    checklist: ['The site **mesurado-kitchen** appears in Local.', 'The dot beside it is green (running).', 'I have written down my WordPress username and password.'] },

  { id: 'm02-l03', title: 'Open the dashboard, log in and log out', time: '15 min', tools: 'LocalWP, WordPress', keywords: 'wp-admin login logout dashboard open site',
    objective: 'Open your site and its dashboard, and log in and out safely.',
    build: 'Access to your WordPress dashboard — the control room for the whole website.',
    before: ['Finish {{lesson:m02-l02}}.'],
    body: [
      { h: 'Open the public website', steps: [
        'In Local, click **mesurado-kitchen** in the sites list.',
        'Click **Open site** (top right of the site overview).',
        'Your browser opens `http://mesurado-kitchen.local` and shows a plain WordPress website with a “Hello world!” post. This is what visitors see. It is plain because we have not added a theme or content yet.'
      ] },
      { h: 'Open the dashboard and log in', steps: [
        'Go back to Local and click **WP Admin** (next to Open site). Or type `mesurado-kitchen.local/wp-admin` in the browser’s address bar.',
        'The WordPress login screen appears. Type your **Username or Email Address** and **Password**.',
        'Tick **Remember Me** if this is your own computer.',
        'Click **Log In**. You now see the **Dashboard** with a black menu on the left.',
        'Tip: bookmark this page ({{kbd:Ctrl}} + {{kbd:D}}) so you can open the dashboard quickly next time.'
      ] },
      { h: 'Switch between dashboard and website', steps: [
        'At the very top of the screen is a thin black **toolbar**. At its left, hover over the house icon with your site name (**Mesurado Kitchen…** or **mesurado-kitchen**).',
        'Click **Visit Site** to see the public site. While logged in, the toolbar stays at the top of the site too.',
        'On the site, hover over the site name in the toolbar and click **Dashboard** to go back.'
      ] },
      { h: 'Log out', steps: [
        'In the top right corner of the toolbar, hover over **Howdy, [your username]**.',
        'Click **Log Out**. You return to the login screen with the message “You are now logged out.”',
        'Log back in now so you are ready for the next lesson.'
      ] }
    ],
    visual: [{ diagram: 'wp-dashboard', caption: 'The WordPress dashboard: toolbar at the top, admin menu on the left, work area in the middle.' }],
    resources: { values: [['Site address', '`http://mesurado-kitchen.local`'], ['Dashboard address', '{{copy:mesurado-kitchen.local/wp-admin}}']] },
    expected: 'You can open the website, open the dashboard, log in, move between them using the toolbar and log out.',
    troubleshoot: ['site-not-loading', 'forgot-login', 'dashboard-wont-open'],
    checklist: ['I opened the site with **Open site**.', 'I logged in at `/wp-admin`.', 'I used the toolbar to visit the site and return to the dashboard.', 'I logged out and back in.', 'I bookmarked the dashboard.'] },

  { id: 'm02-l04', title: 'Reopening your site after a restart', time: '10 min', tools: 'LocalWP', keywords: 'restart start site stop shutdown reopen',
    objective: 'Learn the routine for starting your site each time you work, and stopping it safely.',
    build: 'A reliable start-of-session and end-of-session routine.',
    before: ['Finish {{lesson:m02-l03}}.'],
    body: [
      'Your website only works while Local is running it. After you restart or shut down your computer, the site is **stopped**. Its files and content are safe — you only need to start it again.',
      { h: 'Start of every work session', steps: [
        'Open **Local** from the Start menu (search for “Local”).',
        'Click **mesurado-kitchen** in the sites list. If the dot is grey, the site is stopped.',
        'Click **Start site** (top right). Wait until the dot turns green.',
        'Click **WP Admin** to open the dashboard, and log in if asked.'
      ] },
      { h: 'End of every work session', steps: [
        'Make sure you have saved your work in WordPress (click **Save** or **Update** in the editor).',
        'In Local, click **Stop site**. The dot turns grey.',
        'Close Local. You can now shut down the computer.'
      ] },
      { callout: 'tip', title: 'Practise once now', text: 'Stop the site, close Local, open Local again, start the site and open WP Admin. Doing this once now prevents panic later.' }
    ],
    expected: 'You can start and stop your site, and after restarting Local the site and your content are still there.',
    troubleshoot: ['local-wont-start', 'site-not-loading'],
    checklist: ['I stopped the site and started it again.', 'After starting, WP Admin opened and I could log in.'] }
  ] },

/* ============================== MODULE 03 ============================== */
{ id: 'm03', title: 'Getting Familiar With WordPress', summary: 'The dashboard menus, pages vs posts, the Block Editor and basic settings.',
  lessons: [
  { id: 'm03-l01', title: 'A tour of the dashboard', time: '25 min', keywords: 'dashboard menu posts media pages comments appearance plugins users tools settings',
    objective: 'Know what every item in the WordPress admin menu is for.',
    build: 'Familiarity with the dashboard before you start changing things.',
    before: ['You are logged in to the dashboard ({{lesson:m02-l03}}).'],
    body: [
      { h: 'The admin menu (left side, black)', table: { head: ['Menu item', 'What it is for', 'Will we use it?'], rows: [
        ['**Dashboard**', 'The home screen with summaries and WordPress update notices.', 'Sometimes'],
        ['**Posts**', 'Dated articles, like news or blog entries. They have categories and appear in lists.', 'Yes — Journal and Special Events'],
        ['**Media**', 'The Media Library: every image and file you upload.', 'Yes — all 74 images'],
        ['**Pages**', 'Fixed pages like Home, Menu, Contact. Not dated, not in lists.', 'Yes — 14 pages'],
        ['**Comments**', 'Visitor comments on posts.', 'No (we turn them off)'],
        ['**Appearance**', 'Themes, the Customizer, menus and widgets — how the site looks.', 'Yes — a lot'],
        ['**Plugins**', 'Add extra features (forms, shop, blocks).', 'Yes — 3 plugins'],
        ['**Users**', 'People who can log in, and your profile.', 'Rarely'],
        ['**Tools**', 'Import, export and site health.', 'Yes — export at the end'],
        ['**Settings**', 'Site title, time zone, reading, permalinks and more.', 'Yes']
      ] } },
      { h: 'Explore', steps: [
        'Hover over **Posts** in the menu. A small fly-out shows its sub-items: **All Posts**, **Add New Post**, **Categories**, **Tags**.',
        'Click **Pages → All Pages**. You will see one page called **Sample Page** and maybe **Privacy Policy** (a draft). We will remove these later.',
        'Click **Media → Library**. It is empty for now.',
        'Click **Appearance → Themes**. You see a few default WordPress themes (names like “Twenty Twenty-Five”). One is marked **Active**.',
        'Click **Settings → General** and just look — do not change anything yet.',
        'At the top right of most screens there is a **Screen Options** tab and a **Help** tab. Screen Options lets you show or hide parts of a screen; Help explains the screen.'
      ] },
      { callout: 'info', title: 'Plugins and themes add menu items', text: 'After you install Astra, Spectra, Fluent Forms and WooCommerce, new items appear in this menu (for example **Fluent Forms**, **WooCommerce**, **Products**). This is normal.' }
    ],
    visual: [{ diagram: 'wp-dashboard', caption: 'Dashboard areas. Numbers match the explanations in the table above.' }],
    expected: 'You can find Posts, Media, Pages, Appearance, Plugins and Settings without searching.',
    checklist: ['I opened Pages → All Pages.', 'I opened Media → Library.', 'I opened Appearance → Themes and saw which theme is active.', 'I know what Screen Options does.'] },

  { id: 'm03-l02', title: 'Pages, posts and the Block Editor', time: '40 min', keywords: 'block editor gutenberg inserter list view document overview settings sidebar publish draft page post',
    objective: 'Understand pages vs posts and learn the parts of the Block Editor you will use on every page.',
    build: 'A practice page with a heading, paragraph, image placeholder and button — which you will delete afterwards.',
    before: ['Finish {{lesson:m03-l01}}.'],
    body: [
      { h: 'Page or post?', table: { head: ['', 'Page', 'Post'], rows: [
        ['Example in our project', 'Home, Menu, Contact', 'A Journal article, an event'],
        ['Has a date?', 'No', 'Yes'],
        ['Has categories?', 'No', 'Yes'],
        ['Appears in lists automatically?', 'No', 'Yes (we will show them with a Query Loop block)']
      ] } },
      'A **block** is one piece of content: a heading, a paragraph, an image, a group of columns, a button. You build every page by stacking blocks. The **Block Editor** (sometimes called Gutenberg) is the screen where you do this.',
      { h: 'Open the editor', steps: [
        'Go to **Pages → Add New Page** (older WordPress versions say **Add New**).',
        'If a welcome guide pops up, read it and close it with the **X**. If a window offers page patterns or templates, close it too.',
        'Click **Add title** and type `Practice page`.'
      ] },
      { h: 'Learn the five parts of the editor', steps: [
        '**Block inserter** — the blue **+** button at the top left. Click it to see all blocks. Type in its search box to find one (for example “Heading”). Click it again to close.',
        '**Document Overview (List View)** — the icon with three lines next to the **+**. It shows every block on the page as a tree. You will use it constantly to select blocks inside groups and columns.',
        '**Canvas** — the middle area where the page content appears.',
        '**Settings sidebar** — the right panel. Open or close it with the square **Settings** icon at the top right. It has two tabs: **Page** (settings for the whole page) and **Block** (settings for the selected block). Many blocks split the Block tab into **Settings** (gear) and **Styles** (half-circle) sub-tabs.',
        '**Save / Publish** — top right. **Save draft** keeps the page private. **Publish** makes it public. After publishing, the button becomes **Save**.'
      ] },
      { h: 'Practise adding blocks', steps: [
        'Click in the canvas under the title and type: `This is my practice paragraph.`',
        'Press {{kbd:Enter}} to start a new block. Type `/heading` and press {{kbd:Enter}} — a Heading block appears. Type `My first heading`.',
        'With the heading selected, look at the small **block toolbar** that floats above it. Click **H2** to change the level to **H3**.',
        'Press {{kbd:Enter}}, type `/buttons` and press {{kbd:Enter}}. Type `Reserve a Table` in the button.',
        'Click the **+** inserter, search for **Image** and click it. An image placeholder appears with **Upload** and **Media Library** buttons. Leave it empty for now.',
        'Open **Document Overview** (three lines icon). Click each block name to select it. Notice how the right sidebar changes.',
        'Select the paragraph. In the block toolbar, click the **⋮** (Options) button. Find **Duplicate**, **Move up/down** and **Delete**. Try **Duplicate**, then **Delete** the copy.',
        'Press {{kbd:Ctrl}} + {{kbd:Z}} to undo a change and {{kbd:Ctrl}} + {{kbd:Shift}} + {{kbd:Z}} to redo it.'
      ] },
      { h: 'Save, preview and delete the practice page', steps: [
        'Click **Save draft**.',
        'Click the **Preview** button (the icon that looks like a screen or eye, top right) and choose **Preview in new tab**. Look at the page, then close the tab.',
        'In the right sidebar, select the **Page** tab, scroll to the bottom and click **Move to trash**. (You can also do this from **Pages → All Pages**.)'
      ] }
    ],
    visual: [{ diagram: 'block-editor', caption: 'The Block Editor: (1) block inserter, (2) Document Overview, (3) canvas, (4) settings sidebar with Page and Block tabs, (5) save and publish.' }, { shot: 'm03-l02-block-editor.png', caption: 'The Block Editor with a heading and a paragraph selected.' }],
    expected: 'You can add, select, move, duplicate and delete blocks, use Document Overview, and save a draft.',
    troubleshoot: ['editor-looks-different', 'changes-not-showing'],
    checklist: ['I can open the block inserter and find a block by searching.', 'I can open Document Overview and select a block from it.', 'I know the difference between the **Page** and **Block** tabs.', 'I saved a draft, previewed it and moved the practice page to the trash.'] },

  { id: 'm03-l03', title: 'Clean-up and basic settings', time: '25 min', keywords: 'settings general timezone permalinks post name comments discussion sample page hello world',
    objective: 'Remove WordPress sample content and set the site title, time zone, permalinks and comments.',
    build: 'A clean site with friendly web addresses like `/menu/` and the correct Liberian time zone.',
    before: ['Finish {{lesson:m03-l02}}.'],
    body: [
      { h: 'Delete the sample content', steps: [
        'Go to **Posts → All Posts**. Hover over **Hello world!** and click **Trash**.',
        'Go to **Pages → All Pages**. Hover over **Sample Page** and click **Trash**. Leave the **Privacy Policy** draft for now (we create our own Legal page later — you can trash it too if you prefer).',
        'Go to **Comments**. If there is a sample comment, hover over it and click **Trash**.'
      ] },
      { h: 'General settings', steps: [
        'Go to **Settings → General**.',
        ['**Site Title**: paste the restaurant name.', ['{{content:site.title|Copy it from the Content Library}}: `Mesurado Kitchen & Palm Bar`']],
        '**Tagline**: paste `Liberian cooking by the river, served slowly`.',
        '**Timezone**: open the dropdown and choose **Monrovia** (under Africa). Liberia is UTC+0.',
        '**Date Format**: choose the option that shows the date like **November 1, 2026** or the custom format `l j F` if you want to match the reference style (“Sunday 1 November”).',
        'Leave **WordPress Address** and **Site Address** unchanged.',
        'Scroll down and click **Save Changes**.'
      ] },
      { h: 'Permalinks (web addresses)', steps: [
        'Go to **Settings → Permalinks**.',
        'Under **Common Settings** (or **Permalink structure**), choose **Post name**. Your pages will then have addresses like `mesurado-kitchen.local/menu/`.',
        'Click **Save Changes**.'
      ] },
      { h: 'Turn off comments', steps: [
        'Go to **Settings → Discussion**.',
        'Untick **Allow people to submit comments on new posts**.',
        'Click **Save Changes**.'
      ] },
      { h: 'Practice exercise (5 minutes)', steps: [
        'Without looking at the steps, open **Settings → General** and check the Site Title is correct.',
        'Find **Settings → Reading**. Read the options under **Your homepage displays** — you will change them in Module 08.',
        'Visit your site. The browser tab should now show **Mesurado Kitchen & Palm Bar**.'
      ] }
    ],
    resources: { content: ['site.title', 'site.tagline'], values: [['Timezone', 'Monrovia'], ['Permalink structure', 'Post name']] },
    expected: 'The browser tab shows “Mesurado Kitchen & Palm Bar”, the sample post and page are gone, and Settings → Permalinks is set to Post name.',
    troubleshoot: ['permalinks-404'],
    checklist: ['Hello world! and Sample Page are in the trash.', 'Site Title and Tagline are set.', 'Time zone is Monrovia.', 'Permalinks are set to **Post name**.', 'Comments are turned off for new posts.'] }
  ] },

/* ============================== MODULE 04 ============================== */
{ id: 'm04', title: 'Installing and Configuring the Theme', summary: 'Install the free Astra theme and set its global layout.',
  lessons: [
  { id: 'm04-l01', title: 'Install and activate Astra', time: '15 min', tools: 'Astra', keywords: 'astra theme install activate starter templates',
    objective: 'Install and activate the free Astra theme.',
    build: 'Astra as the active theme of your site.',
    before: ['Your site is running in Local and you are logged in.', 'An internet connection (WordPress downloads the theme).'],
    body: [
      { callout: 'info', title: 'What is a theme?', text: 'A theme controls the overall look: header, footer, fonts, colours and page layouts. Changing the theme does not delete your content.' },
      { steps: [
        'Go to **Appearance → Themes**.',
        'Click **Add New Theme** at the top (older versions: **Add New**).',
        'In the **Search themes…** box at the right, type `Astra`.',
        'Find the theme named **Astra** (by Brainstorm Force). Check the name carefully — there are many themes with similar names.',
        'Hover over it and click **Install**. Wait for the button to change to **Activate**.',
        'Click **Activate**.',
        'Astra may show a welcome message or offer to install **Starter Templates**. **Do not install Starter Templates** — we build the design ourselves. Close or dismiss the message.',
        'Visit your site. The look has changed: you now see a simple Astra header with your site title.'
      ] },
      { callout: 'free', title: 'Ignore Astra Pro offers', text: 'Astra adds an **Astra** item to your menu with links to “Astra Pro” and “Upgrade”. Everything we use is in the free theme.' }
    ],
    visual: [{ shot: 'm04-l01-astra-search.png', caption: 'Appearance → Themes → Add New Theme with “Astra” searched.' }],
    expected: 'Appearance → Themes shows **Astra** as the **Active** theme.',
    troubleshoot: ['theme-install-fails'],
    checklist: ['Astra is installed and active.', 'I did not install Starter Templates.', 'My site now shows the Astra header.'] },

  { id: 'm04-l02', title: 'Tour the Customizer and set the global layout', time: '25 min', tools: 'Astra', keywords: 'customizer container width layout full width sidebar no sidebar global',
    objective: 'Use the Astra Customizer and set the site-wide container width and page layout used by the reference.',
    build: 'A 1240px content area with no sidebars, matching the reference layout.',
    before: ['Finish {{lesson:m04-l01}}.'],
    body: [
      { callout: 'info', title: 'What is the Customizer?', text: 'The Customizer is a screen with settings on the left and a live preview of your site on the right. Changes are not public until you click **Publish**.' },
      { h: 'Open the Customizer', steps: [
        'Go to **Appearance → Customize**.',
        'On the left you see panels such as **Global**, **Header Builder**, **Footer Builder**, **Blog**, **Sidebar**, **Site Identity** (names may vary slightly by version).',
        'At the bottom of the left panel are device icons (desktop, tablet, mobile). Click them to preview other screen sizes.',
        'Click a panel to open it. Click the **<** arrow at the top of the panel to go back.'
      ] },
      { h: 'Set the container (content width)', steps: [
        'Open **Global → Container**.',
        'Set **Container Width** (it may be called **Site Container Width**) to `1240` px.',
        'Set the default **Container Layout** to **Full Width** (sometimes shown as **Full Width / Stretched**) and **Container Style** to **Unboxed** if you see those options. This removes the white box around content so our coloured sections can stretch across the screen.',
        'Click **Publish** at the top of the left panel.'
      ] },
      { h: 'Remove the sidebar', steps: [
        'Go back and open **Sidebar** (it may be inside **Global** or at the top level).',
        'Set **Default Layout** to **No Sidebar**.',
        'Click **Publish**.'
      ] },
      { callout: 'tip', title: 'Settings can be per page too', text: 'Astra also lets you change layout for a single page in the Block Editor. You will use that in {{lesson:m08-l03}} to hide page titles.' }
    ],
    visual: [{ diagram: 'customizer', caption: 'The Astra Customizer: settings panels on the left, live preview on the right, Publish button at the top.' }],
    resources: { values: [['Container width', '{{copy:1240}} px'], ['Container layout', 'Full Width (Stretched)'], ['Container style', 'Unboxed'], ['Sidebar', 'No Sidebar']] },
    expected: 'The Customizer shows Container Width 1240 and No Sidebar, and both are published.',
    troubleshoot: ['customizer-not-saving', 'pro-feature'],
    checklist: ['I can open the Customizer and move between panels.', 'Container Width is 1240 px.', 'Default layout is full width with no sidebar.', 'I clicked **Publish**.'] },

  { id: 'm04-l03', title: 'Site identity basics', time: '10 min', tools: 'Astra', keywords: 'site identity title tagline display',
    objective: 'Confirm the site title and tagline in the theme and decide what shows in the header.',
    build: 'Correct site identity settings. (You add the logo images in Module 09.)',
    before: ['Finish {{lesson:m04-l02}} and {{lesson:m03-l03}}.'],
    body: [
      { steps: [
        'In the Customizer, open **Header Builder**. Click the **Site Title & Logo** (or **Logo**) element in the builder at the bottom of the screen. Its settings open on the left.',
        'Check that **Site Title** shows `Mesurado Kitchen & Palm Bar` and **Tagline** shows `Liberian cooking by the river, served slowly`. If not, correct them.',
        'Turn **Display Site Title** on for now (we switch it off when the logo is added in {{lesson:m09-l02}}).',
        'Turn **Display Tagline** off — the reference header shows no tagline.',
        'Click **Publish**.'
      ] }
    ],
    expected: 'The header shows the site name without a tagline.',
    checklist: ['Site title is correct in the Customizer.', 'The tagline is hidden in the header.', 'Changes are published.'] }
  ] },

/* ============================== MODULE 05 ============================== */
{ id: 'm05', title: 'Installing Essential Free Plugins', summary: 'Install exactly three plugins: Spectra, Fluent Forms and WooCommerce.',
  lessons: [
  { id: 'm05-l01', title: 'How plugins work + install Spectra', time: '20 min', tools: 'Spectra', keywords: 'plugin install activate spectra ultimate addons gutenberg blocks slider tabs icon list map',
    objective: 'Learn to install and activate a plugin safely, starting with Spectra.',
    build: 'The Spectra plugin active, adding Slider, Tabs, Icon List and Google Map blocks to the editor.',
    before: ['An internet connection.', 'Astra is active ({{lesson:m04-l01}}).'],
    body: [
      { callout: 'info', title: 'What is a plugin?', text: 'A plugin adds a feature to WordPress. Install only plugins you need: each one adds weight and possible problems. This project needs exactly three.' },
      { table: { head: ['Plugin name (as shown in WordPress)', 'Made by', 'Why we need it'], rows: [
        ['**Spectra** (full name usually “Spectra Gutenberg Blocks – Website Builder for the Block Editor”)', 'Brainstorm Force', 'Slider, Tabs, Icon List and Google Map blocks'],
        ['**Fluent Forms** (“Contact Form Plugin – Fastest Contact Form Builder Plugin for WordPress by Fluent Forms”)', 'WPManageNinja / Fluent Forms', 'All five forms; stores entries'],
        ['**WooCommerce**', 'Automattic', 'Online ordering: products, cart, checkout']
      ] } },
      { h: 'Install Spectra', steps: [
        'Go to **Plugins → Add New Plugin** (older versions: **Add New**).',
        'In the **Search plugins…** box, type `Spectra`.',
        'Find **Spectra** by **Brainstorm Force**. Check the author name before installing.',
        'Click **Install Now**, wait, then click **Activate**.',
        'Spectra may open a setup or onboarding screen. Choose the option to **skip** or **exit to dashboard**. Do not install extra suggested plugins or templates.'
      ] },
      { h: 'Check that it works', steps: [
        'Go to **Pages → Add New Page**.',
        'Click the **+** inserter and type `Slider`. You should see a **Slider** block with the Spectra icon. Also search for `Tabs`, `Icon List` and `Google Map` — each should appear.',
        'Close the page without saving (click the **W** / back arrow at the top left and choose to leave, or simply go to **Dashboard**).'
      ] },
      { callout: 'warn', title: 'If a block shows a padlock or “Pro”', text: 'Spectra lists some Pro blocks too. We only use Slider, Tabs, Icon List and Google Map. If your version of Spectra does not show a free Slider block, see {{ts:spectra-slider-missing}}.' }
    ],
    visual: [{ shot: 'm05-l01-spectra-search.png', caption: 'Plugins → Add New Plugin with “Spectra” searched; check the author is Brainstorm Force.' }],
    expected: 'Plugins → Installed Plugins lists **Spectra** as active, and the four blocks appear in the editor inserter.',
    troubleshoot: ['plugin-install-fails', 'pro-feature', 'spectra-slider-missing'],
    checklist: ['Spectra is installed and active.', 'I found the Slider, Tabs, Icon List and Google Map blocks in the inserter.', 'I skipped any onboarding offers.'] },

  { id: 'm05-l02', title: 'Install Fluent Forms', time: '15 min', tools: 'Fluent Forms', keywords: 'fluent forms install contact form entries',
    objective: 'Install and activate Fluent Forms.',
    build: 'Fluent Forms active, with its menu in the dashboard.',
    before: ['Finish {{lesson:m05-l01}}.'],
    body: [
      { steps: [
        'Go to **Plugins → Add New Plugin**.',
        'Search for `Fluent Forms`.',
        'Find the plugin by **Fluent Forms** / **WPManageNinja** (the icon is a blue “F”). Click **Install Now**, then **Activate**.',
        'Fluent Forms may show a welcome screen or ask to share usage data. Choose **Skip** or **No thanks**.',
        'A new **Fluent Forms** item appears in the admin menu. Click it. You see **All Forms**, possibly with a demo contact form. Leave it for now.'
      ] },
      { callout: 'info', title: 'Why Fluent Forms?', text: 'It saves every submission under **Fluent Forms → Entries**. Your laptop cannot send real emails, so entries are how you prove your forms work. Read more in {{lesson:m13-l01}}.' }
    ],
    expected: 'The Fluent Forms menu appears in the dashboard.',
    troubleshoot: ['plugin-install-fails', 'pro-feature'],
    checklist: ['Fluent Forms is installed and active.', 'I can open Fluent Forms → All Forms.'] },

  { id: 'm05-l03', title: 'Install WooCommerce', time: '25 min', tools: 'WooCommerce', keywords: 'woocommerce install setup wizard store currency skip',
    objective: 'Install WooCommerce and complete only the essential setup.',
    build: 'WooCommerce active with its Shop, Cart, Checkout and My Account pages created automatically.',
    before: ['Finish {{lesson:m05-l02}}.', 'A good internet connection (WooCommerce is larger than other plugins).'],
    body: [
      { steps: [
        'Go to **Plugins → Add New Plugin** and search for `WooCommerce`.',
        'Find **WooCommerce** by **Automattic**. Click **Install Now**, then **Activate**.',
        'WooCommerce opens a setup wizard (“Welcome to Woo!” or “Set up your store”). Its questions change often. Answer simply: you are **setting up a store for a client** or **just exploring**; the store is in **Liberia** (or the closest option), sells **food & drink**, and you do **not** want extra free or paid extensions.',
        'Whenever the wizard offers to install additional plugins, **untick them** or choose **Skip / No thanks**. We need nothing extra.',
        'If you see a **Skip setup** or **Skip guided setup** link, you may use it — we configure what we need in {{lesson:m13-l06}}.',
        'When the wizard ends, go to **Pages → All Pages**. You should see four new pages created by WooCommerce: **Shop**, **Cart**, **Checkout** and **My Account**. Do not delete them.'
      ] },
      { callout: 'warn', title: 'Coming-soon mode', text: 'Newer WooCommerce versions may put the store in **Coming soon** mode, so logged-out visitors see a placeholder page. On your laptop this does not matter, but to be safe go to **WooCommerce → Settings → Site visibility** and choose **Live**, then **Save changes**.' },
      { callout: 'free', title: 'Payments and paid extensions', text: 'WooCommerce advertises payment services and paid extensions. We use only the built-in **Cash on delivery** payment method. Never enter bank or card details.' }
    ],
    expected: 'WooCommerce is active, and Shop, Cart, Checkout and My Account pages exist.',
    troubleshoot: ['plugin-install-fails', 'woo-wizard-stuck', 'pro-feature'],
    checklist: ['WooCommerce is installed and active.', 'I skipped all extra extensions.', 'Shop, Cart, Checkout and My Account pages exist.', 'Site visibility is set to **Live** (if the option exists).'] }
  ] }
);
