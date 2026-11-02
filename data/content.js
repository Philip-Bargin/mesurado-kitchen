/* Project Content Library — every piece of text students paste into WordPress.
   Text is copied from the Reference A prototype. Each item: id, page, section, label, text.
   Lessons refer to items by id, so editing text here updates every lesson. */
window.GUIDE = window.GUIDE || {};
(function () {
  var P = GUIDE.project, I = P.info;
  var C = [];
  function add(id, page, section, label, text, code) { C.push({ id: id, page: page, section: section, label: label, text: text, code: !!code }); }
  function money(n) { return 'US$ ' + (n % 1 ? n.toFixed(2) : n); }
  var hoursText = I.hours.map(function (h) { return h[0] + ': ' + h[1]; }).join('\n');

  /* ---------- Site-wide ---------- */
  add('site.title', 'Site-wide', 'Site identity', 'Site Title', P.name);
  add('site.tagline', 'Site-wide', 'Site identity', 'Tagline', P.tagline);
  add('site.address', 'Site-wide', 'Business details', 'Address', I.address);
  add('site.addressShort', 'Site-wide', 'Business details', 'Short address (footer)', I.addressShort);
  add('site.phone', 'Site-wide', 'Business details', 'Telephone', I.phone);
  add('site.phoneLink', 'Site-wide', 'Business details', 'Telephone link (for buttons)', 'tel:+231775123480');
  add('site.email', 'Site-wide', 'Business details', 'Email', I.email);
  add('site.emailLink', 'Site-wide', 'Business details', 'Email link (for buttons)', 'mailto:' + I.email);
  add('site.hours', 'Site-wide', 'Business details', 'Opening hours', hoursText + '\n' + I.kitchenNote);
  add('site.maps', 'Site-wide', 'Business details', 'Google Maps link (Get Directions)', I.mapsHref);
  add('site.mapQuery', 'Site-wide', 'Business details', 'Address to type into the Google Map block', I.mapQuery);

  add('nav.structure', 'Site-wide', 'Main navigation', 'Menu structure (top level → dropdown items)',
    'Home\nAbout → Our Story, Our Philosophy, Our Team\nMenu → Full Menu, Breakfast & Brunch, Lunch, Dinner, Drinks & Cocktails, Desserts, Seasonal Specials\nReservations\nExperiences → Private Dining, Catering, Special Events\nGallery\nJournal → News & Updates, Events & Promotions\nContact');
  add('header.reserve', 'Site-wide', 'Header', 'Header button', 'Reserve a Table');
  add('header.order', 'Site-wide', 'Header', 'Header link', 'Order Online');
  add('header.orderHtml', 'Site-wide', 'Header', 'HTML for the “Order Online” header link (paste into the Astra HTML 1 element)', '<a class="mk-order-link" href="/order-online/">Order Online</a>', true);

  add('footer.about', 'Site-wide', 'Footer — brand column', 'Footer description', 'A riverside kitchen and palm-wine bar in Monrovia. Liberian cooking, made with care and served slowly.');
  add('footer.button', 'Site-wide', 'Footer — brand column', 'Footer button', 'Reserve a Table');
  add('footer.visit', 'Site-wide', 'Footer — Visit column', 'Heading + lines', 'Visit\n' + I.addressShort + '\n' + I.phone + '\n' + I.email + '\nOpening hours');
  add('footer.explore', 'Site-wide', 'Footer — Explore column', 'Heading + links', 'Explore\nOur Story\nPrivate Dining\nCatering\nSpecial Events');
  add('footer.menu', 'Site-wide', 'Footer — Menu column', 'Heading + links', 'Menu\nFull Menu\nSeasonal Specials\nDrinks & Cocktails\nOrder Online');
  add('footer.copyright', 'Site-wide', 'Footer — bottom bar', 'Copyright text', '© 2026 Mesurado Kitchen & Palm Bar. All rights reserved.');
  add('footer.legal', 'Site-wide', 'Footer — bottom bar', 'Legal links', 'Privacy Policy\nTerms\nAccessibility');
  add('footer.social', 'Site-wide', 'Footer — bottom bar', 'Social links (placeholders until the restaurant gives real profile links)', 'https://www.instagram.com/\nhttps://www.facebook.com/');

  add('cta.default', 'Site-wide', 'Reservation band (reused on many pages)', 'Default band text',
    'Eyebrow: Reservations\nHeading: Your table by the river\nText: Book lunch, dinner or a quiet evening at the palm bar.\nButton 1: Reserve a Table → /reservations/\nButton 2: Explore Menu → /menu/\nSmall line: Prefer to call? ' + I.phone);

  /* ---------- Home ---------- */
  var H = 'Home';
  add('home.h1', H, 'Hero slider', 'Hidden page heading (for screen readers and search engines)', 'Mesurado Kitchen & Palm Bar — Liberian restaurant and palm bar in Mamba Point, Monrovia');
  add('home.s1', H, 'Hero slider', 'Slide 1', 'Eyebrow: Kitchen & Palm Bar · Mamba Point, Monrovia\nHeading: Liberian cooking by the river, served slowly\nText: Palm butter simmered for hours, fish from the morning’s market and palm wine poured fresh at the bar. Come for lunch, stay for the sunset.\nButton 1: Reserve a Table → /reservations/\nButton 2: Explore Menu → /menu/');
  add('home.s2', H, 'Hero slider', 'Slide 2', 'Eyebrow: The Palm Bar\nHeading: Fresh palm wine as the sun goes down\nText: Tapped every morning and poured cold all day, with house ginger beer, kola cocktails and acoustic sets on Saturday nights.\nButton 1: Reserve a Table → /reservations/\nButton 2: See What’s On → /special-events/');
  add('home.s3', H, 'Hero slider', 'Slide 3', 'Eyebrow: Private dining & catering\nHeading: Celebrations by the water, or at your door\nText: The River Room seats 24, the Palm Terrace welcomes 60, and our catering team brings the feast to you.\nButton 1: Plan an Event → /private-dining/\nButton 2: Explore Catering → /catering/');
  add('home.welcome', H, '2 · Welcome to Mesurado', 'Section text', 'Eyebrow: Welcome to Mesurado\nHeading (H2): A riverside table for good food and long conversations\nParagraph 1: Mesurado Kitchen & Palm Bar brings the dishes Liberians grow up with to a calm room by the water. We cook from the market, season with care and let every plate take the time it needs.\nParagraph 2: Whether it’s a quick lunch, a family dinner or an evening with friends at the palm bar, we’ll look after you from the first glass to the last bite.\nButton (outline): Discover Our Story → /our-story/');
  add('home.dishesHead', H, '3 · Signature dishes', 'Section heading', 'Eyebrow: From the kitchen\nHeading (H2): Signature dishes\nIntro: A few of the plates guests come back for, cooked the way they’re made at home.\nButton (secondary): Explore Full Menu → /menu/');
  add('home.experience', H, '4 · The experience', 'Section text', 'Eyebrow: The experience\nHeading (H2): Cooked with patience, served with care\nParagraph: Good Liberian food can’t be hurried. Our kitchen starts early, our soups simmer for hours and our team takes the time to get to know you.\nButton (outline): Explore Experiences → /private-dining/');
  add('home.experienceList', H, '4 · The experience', 'Icon list (4 items: icon — title — text)', 'Leaf icon — Fresh from the market — Fish, greens and fruit bought each morning decide the day’s specials.\nFire icon — Slow, honest cooking — Palm butter, cassava leaf and pepper soup made the long way.\nGlass icon — The palm bar — Fresh palm wine, house ginger beer and cocktails as the sun goes down.\nPeople icon — Warm hospitality — A table for two or forty — we’ll make room and make you welcome.');
  add('home.reserve', H, '5 · Reservation band (dark)', 'Section text', 'Eyebrow: Reservations\nHeading (H2): Your table by the river is waiting\nParagraph: Book lunch, dinner or an evening at the palm bar in under a minute. Tell us about birthdays, allergies or a quiet corner and we’ll have it ready.\nButton 1 (gold): Reserve a Table → /reservations/\nButton 2 (outline): Groups & Private Dining → /private-dining/\nSmall line: Or call us on ' + I.phone);
  add('home.seasonalHead', H, '6 · Seasonal specials', 'Section heading', 'Eyebrow: This season\nHeading (H2): Seasonal specials\nIntro: What the market and the river are giving us right now.\nText button: See Seasonal Menu → /menu/');
  add('home.promo1', H, '6 · Seasonal specials', 'Card 1', 'Eyebrow: Seasonal\nTitle: River crab is back\nText: Crab and potato greens with palm oil and rice, while the season lasts.\nMeta: Until the season ends\nLink: /menu/');
  add('home.promo2', H, '6 · Seasonal specials', 'Card 2', 'Eyebrow: Palm Bar\nTitle: Palm wine tasting Saturdays\nText: Follow fresh palm wine from sweet morning tap to evening pour, with snacks from the kitchen.\nMeta: Saturdays, 4 pm – 6 pm\nLink: /special-events/');
  add('home.promo3', H, '6 · Seasonal specials', 'Card 3', 'Eyebrow: Chef’s selection\nTitle: The tasting plate\nText: Five small plates from this week’s market, chosen by the kitchen.\nMeta: Dinner only\nLink: /menu/');
  add('home.gatherHead', H, '7 · Private dining and catering', 'Section heading', 'Eyebrow: Gatherings\nHeading (H2): Private dining and catering\nIntro: Celebrations, business dinners and family occasions — at our place or yours.');
  add('home.gatherPD', H, '7 · Private dining and catering', 'Left column', 'Heading (H3): Private dining\nText: Reserve a private room or the whole restaurant, with a set menu planned with our chef and a team dedicated to your table.\nButton (primary): Plan a Private Event → /private-dining/');
  add('home.gatherCat', H, '7 · Private dining and catering', 'Right column', 'Heading (H3): Catering\nText: Our kitchen, delivered. From office lunches to weddings, we cook, deliver and serve the dishes your guests will remember.\nButton (secondary): Explore Catering → /catering/');
  add('home.guestsHead', H, '8 · What our guests say', 'Section heading (centred)', 'Eyebrow: Guest experiences\nHeading (H2): What our guests say\nIntro: A few words from the people who share our tables.');
  add('home.galleryHead', H, '9 · A look inside', 'Section heading', 'Eyebrow: Gallery\nHeading (H2): A look inside\nIntro: Food, the room, the palm bar and the evenings we share.\nButton (outline): Explore Gallery → /gallery/\nFour square images: Palm butter, overhead · Dining room at dusk · Palm wine being poured · Jollof rice');
  add('home.visit', H, '10 · Visit Mesurado', 'Section text', 'Eyebrow: Visit Mesurado\nHeading (H2): Find us by the river\nAddress: ' + I.address + '\nTelephone: ' + I.phone + '\nEmail: ' + I.email + '\n' + hoursText + '\nButton 1 (primary): Get Directions → Google Maps link\nButton 2 (outline): Contact Us → /contact/');
  add('home.news', H, '11 · Newsletter', 'Section text', 'Eyebrow: Newsletter\nHeading (H2): News from the river\nText: Seasonal dishes, palm bar evenings and events — once a month, never more.');
  add('home.newsForm', H, '11 · Newsletter', 'Newsletter form labels', 'Field: Email address (placeholder: name@example.com) — required\nCheckbox: Yes, send me Mesurado news. I can unsubscribe at any time. — required\nButton: Subscribe\nSuccess message: You’re on the list. Thank you — we’ll send Mesurado news to your inbox once a month.');

  /* ---------- Page heroes ---------- */
  var heroes = [
    ['Our Story', 'About Mesurado', 'Our story', 'Opened in 2025 on the water at Mamba Point by chef Musu Kollie — a kitchen and palm bar built around the food Liberians love and the welcome they’re known for.', 'Home / About / Our Story', 'Buttons: Reserve a Table → /reservations/ · Explore Menu → /menu/'],
    ['Our Philosophy', 'About Mesurado', 'Our philosophy', 'Four principles guide what happens in our kitchen and dining room.', 'Home / About / Our Philosophy', ''],
    ['Our Team', 'About Mesurado', 'Our team', 'The cooks, bartenders and hosts who make Mesurado what it is.', 'Home / About / Our Team', ''],
    ['Menu', 'Kitchen & Palm Bar', 'Our menu', 'Liberian classics cooked the long way, seasonal plates from the market and drinks from the palm bar.', 'Home / Menu', ''],
    ['Reservations', 'Reservations', 'Reserve a table', 'Choose a date, pick a time and tell us who’s coming. It takes about a minute.', 'Home / Reservations', ''],
    ['Order Online', 'Pickup & delivery', 'Order online', 'Mesurado favourites, packed with care. Choose pickup or delivery to start.', 'Home / Order Online', ''],
    ['Private Dining', 'Experiences', 'Private dining', 'Birthdays, business dinners, family gatherings — reserve a private space by the river with a menu planned around your guests.', 'Home / Experiences / Private Dining', 'Buttons: Make an Inquiry → #inquiry · View Menu → /menu/'],
    ['Catering', 'Experiences', 'Catering', 'Mesurado’s kitchen, at your place. We cook, deliver and serve Liberian food for offices, weddings and family celebrations.', 'Home / Experiences / Catering', 'Buttons: Request a Quote → #quote · Private Dining → /private-dining/'],
    ['Special Events', 'Experiences', 'Special events', 'Live music at the palm bar, supper clubs and seasonal celebrations.', 'Home / Experiences / Special Events', ''],
    ['Gallery', 'A look inside', 'Gallery', 'Food, the room, the palm bar and the evenings we share.', 'Home / Gallery', ''],
    ['Journal', 'News & stories', 'Journal', 'News from the kitchen, the palm bar and the river.', 'Home / Journal', ''],
    ['Contact', 'Get in touch', 'Contact us', 'Questions, feedback or a booking you’d like to talk through — we’re glad to hear from you.', 'Home / Contact', ''],
    ['Legal', 'Legal', 'Privacy, terms & accessibility', '', 'Home / Legal', '']
  ];
  heroes.forEach(function (h) {
    add('hero.' + h[0].toLowerCase().replace(/[^a-z]+/g, '-'), h[0], 'Page hero', 'Hero text', 'Breadcrumb: ' + h[4] + '\nEyebrow: ' + h[1] + '\nHeading (H1): ' + h[2] + (h[3] ? '\nIntro: ' + h[3] : '') + (h[5] ? '\n' + h[5] : ''));
  });

  /* ---------- Our Story ---------- */
  add('story.began', 'Our Story', '2 · How it began (image left)', 'Section text', 'Eyebrow: How it began\nHeading (H2): Named for the river, built for gathering\nParagraph 1: The Mesurado River meets the Atlantic at Monrovia. We took its name because a river is where people have always gathered — to trade, to cook, to sit together as the light goes.\nParagraph 2: Musu Kollie grew up cooking beside her grandmother in Gbarnga, then spent twelve years in kitchens in Accra and London. When she came home in 2023, she went looking for a room by the water where a meal is never rushed. She found it in an old warehouse on Waterside Road.\nParagraph 3: Two years of restoration later, Mesurado opened its doors in March 2025, with sixty seats inside, a terrace over the river and a bar built around the palm wine of her childhood.');
  add('story.kitchen', 'Our Story', '3 · The kitchen (image right)', 'Section text', 'Eyebrow: The kitchen\nHeading (H2): The dishes we grew up with, cooked with care\nParagraph 1: Our menu is built on Liberian classics — palm butter, cassava leaf, pepper soup, jollof rice — cooked the long way, with rice from Lofa County farmers, palm oil from a women’s cooperative in Bong County and fish from the West Point landing each morning.\nParagraph 2: Alongside them, the kitchen cooks seasonal plates that follow the market. Ask what came in this morning; it’s usually the best thing on the menu.\nButton (outline): Explore Menu → /menu/');
  add('story.bar', 'Our Story', '4 · The palm bar (image left)', 'Section text', 'Eyebrow: The palm bar\nHeading (H2): A glass of palm wine at golden hour\nParagraph 1: The palm bar pours fresh palm wine through the day, house ginger beer and cocktails made with Liberian flavours — kola, hibiscus, pineapple and pepper. It’s the place to wait for friends, or to stay long after dinner.\nParagraph 2: On Saturdays, local musicians play acoustic sets on the terrace from 7:30 pm.');
  add('story.more', 'Our Story', '5 · Get to know Mesurado (2 cards)', 'Section text', 'Eyebrow: More about us\nHeading (H2): Get to know Mesurado\nCard 1 — Eyebrow: Our Philosophy · Title: How we cook and how we host · Text: Hospitality, quality ingredients and patient cooking — the principles behind every plate. · Link: /our-philosophy/\nCard 2 — Eyebrow: Our Team · Title: The people in the kitchen and on the floor · Text: Meet the chefs, bar team and hosts who look after you. · Link: /our-team/');

  /* ---------- Our Philosophy ---------- */
  add('phil.quote', 'Our Philosophy', '2 · What we believe', 'Section text', 'Eyebrow: What we believe\nQuote: A good meal is more than food on a plate. It’s time given, care taken and a welcome you remember.\nParagraph: We cook the dishes of Liberia with respect for the people who taught us and the farmers and fishermen who supply us. We take our time in the kitchen so that you can take yours at the table.\nCitation: — Musu Kollie, Founder & Head Chef');
  add('phil.principlesHead', 'Our Philosophy', '3 · Our principles (4 cards)', 'Section heading', 'Eyebrow: Our principles\nHeading (H2): How we cook, how we host');
  add('phil.principles', 'Our Philosophy', '3 · Our principles (4 cards)', 'Four cards (icon — title — text)', 'People icon — Hospitality first — Every guest is welcomed like family. We learn names, remember preferences and make room for the unexpected.\nLeaf icon — Quality ingredients — We buy fresh, buy local where we can and let the market decide what’s special today.\nFire icon — Craft and patience — Soups simmer for hours, sauces are made from scratch and nothing leaves the pass until it’s right.\nUtensils icon — Thoughtful preparation — Clear allergen information, dishes adapted where we can, and honest advice on what to order.');
  add('phil.market', 'Our Philosophy', '4 · From market to table (image left)', 'Section text', 'Eyebrow: From market to table\nHeading (H2): The morning decides the menu\nParagraph 1: Our day starts at the market. The fish that’s best, the greens that are freshest and the fruit that’s ripest shape our specials — so the menu changes a little every day.\nParagraph 2: When something runs out, we say so. We’d rather tell you a dish is sold out than serve it less than right.\nButton (outline): See Seasonal Specials → /menu/');
  add('phil.cta', 'Our Philosophy', '5 · Reservation band', 'Band text', 'Eyebrow: Come and see\nHeading: Taste it for yourself\nText: Reserve a table for lunch or dinner, or drop by the palm bar this evening.\nButtons: Reserve a Table · Explore Menu\nSmall line: Prefer to call? ' + I.phone);

  /* ---------- Our Team ---------- */
  add('team.head', 'Our Team', '2 · The people behind your meal', 'Section heading', 'Eyebrow: Kitchen & floor\nHeading (H2): The people behind your meal\nIntro: Forty people cook, pour and host at Mesurado. Meet the four who lead them.');
  P.team.forEach(function (t, i) { add('team.p' + (i + 1), 'Our Team', '2 · The people behind your meal', 'Team card ' + (i + 1) + ' — ' + t[0], 'Name: ' + t[0] + '\nRole: ' + t[1] + '\nBio: ' + t[2]); });
  add('team.join', 'Our Team', '3 · Join the Mesurado family (image left)', 'Section text', 'Eyebrow: Work with us\nHeading (H2): Join the Mesurado family\nParagraph: We’re always glad to hear from cooks, bartenders and hosts who care about Liberian food and good service. Send your CV to careers@mesuradokitchen.com or tell us about yourself through our contact page.\nButton (outline): Get in Touch → /contact/');
  add('team.guests', 'Our Team', '4 · What our guests say', 'Section heading (centred)', 'Eyebrow: Guest experiences\nHeading (H2): What our guests say\nIntro: A few words from the people who share our tables.\n(Use the same three testimonials as the homepage.)');

  /* ---------- Testimonials ---------- */
  P.testimonials.forEach(function (t, i) { add('testi.' + (i + 1), 'Home', '8 · What our guests say', 'Testimonial ' + (i + 1) + ' (5 stars)', 'Quote: ' + t[0] + '\nName: ' + t[1] + '\nDetail: ' + t[2]); });

  /* ---------- Menu ---------- */
  add('menu.note', 'Menu', '2 · Menu sections', 'Note under the tabs', 'Select any dish for details and allergens. Prices in US dollars; Liberian dollars accepted at the daily rate.');
  P.menuCats.forEach(function (cat, ci) {
    var items = P.menu.filter(function (m) { return m[1] === cat[0]; });
    add('menu.cat.' + cat[0], 'Menu', '2 · Menu sections', 'Tab ' + (ci + 1) + ' — ' + cat[1] + ' (heading)', 'Eyebrow: ' + (ci + 1 < 10 ? '0' : '') + (ci + 1) + ' · Menu\nHeading (H2): ' + cat[1] + '\nCount: ' + items.length + ' dishes');
    items.forEach(function (m) {
      add('menu.' + m[0], 'Menu', cat[1], m[2] + ' — ' + money(m[3]), (m[7] ? 'Badge: ' + m[7] + '\n' : '') + 'Name (H5): ' + m[2] + '\nPrice: ' + money(m[3]) + '\nDescription: ' + m[4] + '\nDietary: ' + m[5] + '\nAllergens: ' + m[6]);
    });
  });
  add('menu.allergy', 'Menu', '3 · Allergies & dietary needs', 'Section text', 'Eyebrow: Allergies & dietary needs\nHeading (H3): Tell us before you order\nParagraph: Our kitchen handles fish, shellfish, peanuts, gluten, dairy and eggs. Let your server know about any allergy and we’ll guide you through the menu. Breakfast & brunch is served daily until 11:30 am, and from 10 am on Sundays.\nPanel heading (H6): Dietary key\nTags: Vegetarian · Vegan · Gluten-free · Dairy-free · Spicy · Seafood');
  add('menu.cta', 'Menu', '4 · Reservation band', 'Band text', 'Eyebrow: Reservations\nHeading: Hungry already?\nText: Reserve a table, or order for pickup and delivery.\nButton 1: Reserve a Table → /reservations/\nButton 2: Order Online → /order-online/\nSmall line: Prefer to call? ' + I.phone);

  /* ---------- Reservations ---------- */
  add('res.notice', 'Reservations', '2 · Booking form', 'Notice above the form (adapted: the prototype’s “Prototype booking” notice reworded for a real request form)', 'Reservation requests: this form sends a request to the restaurant. Your table is confirmed when the team contacts you by phone or email.');
  add('res.formHead', 'Reservations', '2 · Booking form', 'Form heading', 'When are you joining us?');
  add('res.fields', 'Reservations', '2 · Booking form', 'Form fields (in order)', 'How many guests? — Dropdown: 1 guest, 2 guests, 3 guests, 4 guests, 5 guests, 6 guests, 7 guests, 8 guests, 9 or more (we’ll call you) — required\nChoose a date — Date field — required\nChoose a time — Dropdown with groups — Lunch: ' + P.forms.reservationTimes.Lunch.join(', ') + ' · Dinner: ' + P.forms.reservationTimes.Dinner.join(', ') + ' — required\nFull name — required\nEmail (placeholder name@example.com) — required\nTelephone (placeholder +231 77 000 0000; help text: We’ll only call about this booking.) — required\nOccasion — Dropdown, optional: ' + P.forms.occasions.join(', ') + '\nSpecial requests — Text area, optional (placeholder: Allergies, high chair, a table by the river…)\nCheckbox: I understand this is a request until the restaurant confirms it. — required\nButton: Request My Table');
  add('res.success', 'Reservations', '2 · Booking form', 'Confirmation message', 'Booking request received. Thank you — we’ve received your request and will confirm your table by phone or email shortly. Need to change something? Call ' + I.phone + '.');
  add('res.side', 'Reservations', '3 · Sidebar: Good to know', 'Sidebar text', 'Heading (H6): Good to know\nClock icon — Opening hours: Mon – Thu 11:30 am – 10 pm · Fri – Sat 11:30 am – 12 am · Sun 10 am – 9 pm\nPeople icon — Nine or more guests? Private dining (link → /private-dining/)\nPhone icon — ' + I.phone);
  add('res.large', 'Reservations', '3 · Sidebar: Good to know', 'Large group note', 'Booking for nine or more? We’ll arrange a group table or private room with you. Plan a private event or call ' + I.phone + '.');

  /* ---------- Order Online ---------- */
  add('order.choose', 'Order Online', '2 · How would you like your order?', 'Section text', 'Heading (H3): How would you like your order?\nBox 1 — Pickup: Collect from 18 Waterside Road. Ready in about 25 minutes.\nBox 2 — Delivery: Mamba Point, Sinkor, Congo Town and Paynesville. Delivery US$ 3, 45 – 60 minutes.\nButton 1 (primary, large): Start Your Order → /shop/\nButton 2 (outline, large): View Full Menu → /menu/');
  add('order.popularHead', 'Order Online', '3 · Popular for takeaway', 'Section heading', 'Eyebrow: Most ordered\nHeading (H2): Popular for takeaway\n(Show the products Palm Butter, Jollof Rice and Fresh Palm Wine.)');  add('order.payNote', 'Order Online', 'Checkout', 'Payment method title and description', 'Title: Cash at pickup or on delivery\nDescription: Pay in cash when you collect your order or when it arrives. Prices in US dollars and include GST.');
  add('order.areas', 'Order Online', 'Checkout', 'Delivery areas (for the shipping zone)', P.forms.deliveryAreas.join('\n'));
  add('order.delivery', 'Order Online', 'Checkout', 'Delivery method name and cost', 'Method title: Delivery (Mamba Point to Paynesville)\nCost: 3');
  add('order.pickup', 'Order Online', 'Checkout', 'Pickup location', 'Location name: Mesurado Kitchen & Palm Bar\nAddress: 18 Waterside Road, Mamba Point, Monrovia\nDetails: Ready in about 25 minutes. Collect from the front counter.');

  /* ---------- Private Dining ---------- */
  add('pd.spacesHead', 'Private Dining', '2 · Choose your setting (3 cards)', 'Section heading', 'Eyebrow: Our spaces\nHeading (H2): Choose your setting\nIntro: Three settings, each with its own team and a menu planned with our chef.');
  add('pd.space1', 'Private Dining', '2 · Choose your setting (3 cards)', 'Card 1', 'Eyebrow: Private room\nTitle: The River Room\nMeta: Up to 24 seated\nText: An enclosed room for seated dinners and meetings, with its own service team.');
  add('pd.space2', 'Private Dining', '2 · Choose your setting (3 cards)', 'Card 2', 'Eyebrow: Semi-private\nTitle: The Palm Terrace\nMeta: 40 seated · 60 standing\nText: Open-air tables over the water, ideal for sunset receptions and palm bar gatherings.');
  add('pd.space3', 'Private Dining', '2 · Choose your setting (3 cards)', 'Card 3', 'Eyebrow: Exclusive use\nTitle: The whole restaurant\nMeta: 120 seated · 180 standing\nText: Take over Mesurado for weddings, launches and milestone celebrations.');
  add('pd.included', 'Private Dining', '3 · Everything taken care of', 'Section text', 'Eyebrow: Included\nHeading (H2): Everything taken care of\nParagraph: Tell us what you’re celebrating and we’ll handle the rest. Every booking includes a dedicated host, a tasting call with the chef and set-up to your plan.');
  add('pd.includedList', 'Private Dining', '3 · Everything taken care of', 'Six features (icon — title — text)', 'Utensils — Set menus — Planned with the chef, with dietary options.\nGlass — Palm bar packages — Palm wine, cocktails and soft drinks.\nPeople — Dedicated team — A host and servers just for your group.\nStar — Celebration touches — Cakes, flowers and place cards on request.\nAccessibility — Accessible access — Tell us your needs and we’ll plan around them.\nCalendar — Flexible timing — Lunch, dinner or late evening events.');
  add('pd.gallery', 'Private Dining', '4 · Private events at Mesurado', 'Section heading', 'Eyebrow: Gallery\nHeading (H2): Private events at Mesurado\nButton (outline): Explore Gallery → /gallery/\nFour square images: Long table · Terrace reception · Set menu course · Celebration cake');
  add('pd.formHead', 'Private Dining', '5 · Inquiry form (anchor: inquiry)', 'Section heading', 'Eyebrow: Inquiry\nHeading (H2): Tell us about your event\nIntro: We’ll reply with availability, menu ideas and a quote.');
  add('pd.fields', 'Private Dining', '5 · Inquiry form (anchor: inquiry)', 'Form fields', 'Full name — required\nEmail — required\nTelephone (placeholder +231 77 000 0000) — required\nPreferred date — Date — required\nNumber of guests — Number, minimum 1 — required\nType of event — Dropdown: ' + P.forms.eventTypes.join(', ') + ' — required\nTell us more — Text area, optional (placeholder: Space you’d like, budget, dietary needs, timings…)\nButton: Submit Inquiry');
  add('pd.success', 'Private Dining', '5 · Inquiry form (anchor: inquiry)', 'Confirmation message', 'Inquiry received. Thank you — our events team will reply within one working day.');
  add('pd.side', 'Private Dining', '5 · Inquiry form (anchor: inquiry)', 'Sidebar: Prefer to talk?', 'Heading (H5): Prefer to talk?\n' + I.phone + '\n' + I.email + '\nButton (secondary): Catering Instead? → /catering/');
  add('pd.faqHead', 'Private Dining', '6 · FAQ', 'Section heading', 'Eyebrow: FAQ\nHeading (H2): Private dining questions');
  P.faqs.privateDining.forEach(function (f, i) { add('pd.faq' + (i + 1), 'Private Dining', '6 · FAQ', 'Question ' + (i + 1), 'Q: ' + f[0] + '\nA: ' + f[1]); });

  /* ---------- Catering ---------- */
  add('cat.servicesHead', 'Catering', '2 · What we cater (3 cards)', 'Section heading', 'Eyebrow: Services\nHeading (H2): What we cater');
  add('cat.s1', 'Catering', '2 · What we cater (3 cards)', 'Card 1', 'Eyebrow: Workplace\nTitle: Office lunches & meetings\nMeta: 10 – 150 guests\nText: Boxed lunches and shared platters delivered on time, with clear labels for dietary needs.');
  add('cat.s2', 'Catering', '2 · What we cater (3 cards)', 'Card 2', 'Eyebrow: Celebrations\nTitle: Weddings & parties\nMeta: 50 – 400 guests\nText: Buffets and family-style feasts with service staff, set-up and clearing.');
  add('cat.s3', 'Catering', '2 · What we cater (3 cards)', 'Card 3', 'Eyebrow: Gatherings\nTitle: Family & community events\nMeta: 20 guests and up\nText: Big pots of jollof, palm butter and cassava leaf for naming ceremonies, memorials and reunions.');
  add('cat.pkgHead', 'Catering', '3 · Example packages', 'Section heading', 'Eyebrow: Example packages\nHeading (H2): Starting points for your menu\nIntro: Every quote is tailored to your guest count and menu — these are the most popular starting points.');
  P.cateringPackages.forEach(function (p, i) { add('cat.pkg' + (i + 1), 'Catering', '3 · Example packages', 'Package ' + (i + 1) + ' — ' + p[1], 'Eyebrow: ' + p[0] + '\nTitle (H4): ' + p[1] + '\nText: ' + p[2] + '\nTick list:\n' + p[3].map(function (x) { return '✓ ' + x; }).join('\n') + '\nPrice (bold): ' + p[4]); });
  add('cat.how', 'Catering', '4 · How it works', 'Section text', 'Eyebrow: How it works\nHeading (H2): Three steps to a well-fed crowd\n1 — Tell us about your event — Date, place, guest numbers and the kind of food you’d like.\n2 — Get a tailored menu — We’ll suggest dishes, quantities and service style, with a clear quote.\n3 — We cook and serve — Our team delivers, sets up and serves, then clears away.');
  add('cat.formHead', 'Catering', '5 · Request a quote (anchor: quote)', 'Section heading', 'Eyebrow: Catering inquiry\nHeading (H2): Request a quote\nIntro: Share the details and our catering team will reply with a menu and price.');
  add('cat.fields', 'Catering', '5 · Request a quote (anchor: quote)', 'Form fields', 'Full name — required\nOrganisation — optional\nEmail — required\nTelephone (placeholder +231 77 000 0000) — required\nEvent date — Date — required\nNumber of guests — Number, minimum 1 — required\nService style — Radio buttons in a row: ' + P.forms.serviceStyles.join(', ') + ' — required\nEvent location (placeholder: Venue or neighbourhood) — required\nMenu ideas and other details — Text area, optional\nButton: Submit Inquiry');
  add('cat.success', 'Catering', '5 · Request a quote (anchor: quote)', 'Confirmation message', 'Request received. Thank you — our catering team will reply within one working day.');
  add('cat.faqHead', 'Catering', '6 · FAQ', 'Section heading', 'Eyebrow: FAQ\nHeading (H2): Catering questions');
  P.faqs.catering.forEach(function (f, i) { add('cat.faq' + (i + 1), 'Catering', '6 · FAQ', 'Question ' + (i + 1), 'Q: ' + f[0] + '\nA: ' + f[1]); });

  /* ---------- Special Events ---------- */
  add('ev.featured', 'Special Events', '2 · Featured event', 'Section text', 'Eyebrow: Featured event\n(Shows the first upcoming event post: Palm Bar Live: Acoustic Evenings)\nButtons: View Details → the event post · Reserve a Table → /reservations/');
  add('ev.listHead', 'Special Events', '3 · Upcoming events', 'Section heading', 'Eyebrow: What’s on\nHeading (H2): Upcoming events\nFilter labels: All events · Music · Food & supper clubs · Palm Bar · Family');
  P.events.forEach(function (e, i) {
    add('ev.' + e[0], 'Special Events', 'Event posts (category: Special Events)', 'Event ' + (i + 1) + ' — ' + e[2],
      'Post title: ' + e[2] + '\nTag: ' + e[1] + '\nExcerpt: ' + e[6] + '\n\n--- Post content ---\nEyebrow: ' + e[5] + '\nDate: ' + e[3] + '\nTime: ' + e[4] + '\nPlace: ' + e[5] + '\nParagraph 1: ' + e[7] + '\nParagraph 2: ' + P.eventFooter + '\nPanel heading: Join us\nPanel text: Reserve a table for the evening, or ask us about group bookings.\nButtons: Reserve a Table → /reservations/ · Make an Inquiry → /contact/');
  });
  add('ev.cta', 'Special Events', '4 · Reservation band', 'Band text', 'Eyebrow: Your own event\nHeading: Planning something special?\nText: Book a private room, the terrace or the whole restaurant.\nButton 1: Plan a Private Event → /private-dining/\nButton 2: Catering → /catering/\nSmall line: Prefer to call? ' + I.phone);

  /* ---------- Journal ---------- */
  add('j.head', 'Journal', '3 · From the journal', 'Section heading', 'Eyebrow: Latest\nHeading (H2): From the journal\nFilter labels: All · News & Updates · Events & Promotions\nButton under the grid: Load More Stories');
  P.articles.forEach(function (a, i) {
    add('j.' + a[0], 'Journal', 'Journal posts', 'Post ' + (i + 1) + ' — ' + a[2], 'Post title: ' + a[2] + '\nCategory: ' + a[1] + '\nDate to set: ' + a[3] + ' 2026\nReading time: ' + a[4] + '\nExcerpt: ' + a[5]);
  });
  add('j.body', 'Journal', 'Journal posts', 'Article body (use for every post)', P.articleBody[0] + '\n\n' + P.articleBody[1] + '\n\nHeading (H3): ' + P.articleSubhead + '\n\n' + P.articleQuote + '\n\n' + P.articleBody[2] + '\n\n' + P.articleBody[3]);

  /* ---------- Gallery ---------- */
  add('gal.filters', 'Gallery', '2 · Photo gallery', 'Tab labels', 'All · Food · Room · Palm Bar · Events');
  add('gal.list', 'Gallery', '2 · Photo gallery', 'The 16 photos and their captions', P.gallery.map(function (g, i) { return (i + 1) + '. ' + g[1] + ' (' + g[0] + ')'; }).join('\n'));
  add('gal.cta', 'Gallery', '3 · Reservation band', 'Band text', 'Eyebrow: See it for yourself\nHeading: Come by the river\nText: Reserve a table for lunch, dinner or sunset at the palm bar.\nButtons: Reserve a Table · Explore Menu\nSmall line: Prefer to call? ' + I.phone);

  /* ---------- Contact ---------- */
  add('con.formHead', 'Contact', '2 · Send a message', 'Section heading', 'Eyebrow: Send a message\nHeading (H2): How can we help?\nIntro: For table bookings, the quickest route is our reservations page.');
  add('con.fields', 'Contact', '2 · Send a message', 'Form fields', 'Name — required\nEmail (placeholder name@example.com) — required\nTelephone (placeholder +231 77 000 0000) — optional\nSubject — Dropdown: ' + P.forms.subjects.join(', ') + ' — required\nMessage — Text area, 6 rows — required\nButton: Send message');
  add('con.success', 'Contact', '2 · Send a message', 'Confirmation message', 'Thanks for your message. We’ll reply within one working day.');
  add('con.side', 'Contact', '2 · Sidebar: Visit & call', 'Sidebar text', 'Heading (H5): Visit & call\nAddress: ' + I.address + '\nTelephone: ' + I.phone + '\nEmail: ' + I.email + '\nHeading (H6): Opening hours\n' + hoursText + '\nButton (full width): Reserve a Table → /reservations/');
  add('con.directions', 'Contact', '3 · Getting here (map left)', 'Section text', 'Eyebrow: Directions\nHeading (H2): Getting here\nParagraph: From Broad Street, head towards Mamba Point on UN Drive and turn left onto Waterside Road after the old lighthouse turning. We’re the white building with the green awning at the end of the road, right on the water — about ten minutes from central Monrovia.\nPin icon — Parking — Free guarded parking for 30 cars beside the restaurant; taxis and keke drop off at the front door.\nAccessibility icon — Accessibility — Step-free entrance, ramp to the terrace and an accessible restroom on the ground floor.\nButton (outline): Open in Google Maps → Google Maps link');
  add('con.faqHead', 'Contact', '4 · FAQ', 'Section heading', 'Eyebrow: FAQ\nHeading (H2): Good to know');
  P.faqs.contact.forEach(function (f, i) { add('con.faq' + (i + 1), 'Contact', '4 · FAQ', 'Question ' + (i + 1), 'Q: ' + f[0] + '\nA: ' + f[1]); });

  /* ---------- Legal ---------- */
  add('legal.body', 'Legal', '2 · Policies', 'Full page text (H2 headings marked)', 'These terms and policies apply to mesuradokitchen.com and to bookings, orders and events with Mesurado Kitchen & Palm Bar, 18 Waterside Road, Mamba Point, Monrovia, Liberia.\n\n[H2] Privacy policy\nWe collect only what we need to look after you: your name, phone number and email when you reserve a table, order food, send an inquiry or join our newsletter, plus any dietary notes you choose to share. We use it to confirm and manage your booking or order, answer your questions and, if you opt in, send our monthly newsletter.\n\nWe share your details only with the services that run these features — our reservation system, online ordering and payment providers, and our email service — and never sell them. Booking and order records are kept for two years; newsletter details until you unsubscribe. To see, correct or delete your information, email hello@mesuradokitchen.com and we’ll respond within 30 days.\n\n[H2] Reservations & cancellations\nTables are held for 15 minutes after the booking time. Please cancel or change a booking at least 4 hours ahead. Groups of eight or more, private dining and events require a 25% deposit, refundable up to 7 days before the date.\n\n[H2] Online ordering\nPrices are in US dollars and include GST; Liberian dollars are accepted at the day’s rate. Menu availability can change during service — if a dish sells out after you order, we’ll call you to offer a substitute or a refund. Delivery times are estimates and may be longer in heavy traffic or rain.\n\n[H2] Terms of use\nContent on this website, including text, photographs and the Mesurado name and logo, belongs to Mesurado Kitchen & Palm Bar and may not be reused without permission. We work to keep menus, prices and opening hours accurate but they may change without notice.\n\n[H2] Accessibility statement\nWe aim for this website to meet WCAG 2.2 level AA, and our restaurant has step-free access and an accessible restroom. If anything on the site or in the restaurant doesn’t work for you, contact us at ' + I.email + ' or ' + I.phone + ' and we’ll help.\n\nLast updated: 1 November 2026');

  /* ---------- Code snippets & files ---------- */
  add('css.helpers', 'Site-wide', 'Additional CSS (Lesson 7.5)', 'Mesurado helper CSS — paste into Appearance → Customize → Additional CSS', [
    '/* Mesurado helper classes — add a class in a block\'s Advanced → Additional CSS class(es) */',
    '',
    '/* Eyebrow label: small gold capitals above headings */',
    '.mk-eyebrow { font-size: 13px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; color: #7d5a12; margin-bottom: 8px; }',
    '.mk-dark .mk-eyebrow, .mk-eyebrow.on-dark { color: #d1b686; }',
    '',
    '/* White card with border and rounded corners */',
    '.mk-card { background: #ffffff; border: 1px solid #e5e0d6; border-radius: 10px; overflow: hidden; height: 100%; }',
    '.mk-card-body { padding: 24px; }',
    '',
    '/* Text on dark sections */',
    '.mk-dark h1, .mk-dark h2, .mk-dark h3, .mk-dark h4 { color: #fdf9f2; }',
    '.mk-dark p, .mk-dark li { color: #c3bfb3; }',
    '',
    '/* Header "Order Online" outline link */',
    '.mk-order-link { display: inline-block; padding: 9px 16px; border: 1px solid #0e1e16; border-radius: 6px; color: #0e1e16; font-weight: 600; font-size: 14px; text-decoration: none; }',
    '.mk-order-link:hover { background: rgba(14, 30, 22, 0.06); color: #0e1e16; }',
    '.ast-theme-transparent-header .mk-order-link { border-color: #fdf9f2; color: #fdf9f2; }',
    '',
    '/* OPTIONAL: keep the header visible while scrolling (Astra\'s own sticky header is a Pro feature).',
    '   Test it. If the header does not stay at the top, delete these three lines — it is not required. */',
    'body:not(.ast-theme-transparent-header) #masthead { position: sticky; top: 0; z-index: 99; }',
    '.admin-bar:not(.ast-theme-transparent-header) #masthead { top: 32px; }',
    'body:not(.ast-theme-transparent-header) { overflow-x: clip; }',
    '',
    '/* Price label on menu cards */',
    '.mk-price { font-weight: 600; color: #242424; font-size: 16px; }',
    '',
    '/* Homepage hero title: 64px on computers, 40px on phones */',
    '.mk-display { font-size: 64px !important; line-height: 1.12; }',
    '',
    '/* Phones and small tablets */',
    '@media (max-width: 767px) {',
    '  .mk-section { padding-top: 64px !important; padding-bottom: 64px !important; padding-left: 20px !important; padding-right: 20px !important; }',
    '  .mk-display { font-size: 40px !important; }',
    '  .mk-section .wp-block-buttons > .wp-block-button { width: 100%; }',
    '  .mk-section .wp-block-button__link { width: 100%; }',
    '}'
  ].join('\n'), true);

  GUIDE.content = C;
})();
