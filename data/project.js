/* Reference A — Mesurado Kitchen & Palm Bar.
   Content copied from the instructor's prototype canvas (project/site/data.js and page files).
   The prototype itself labels business details, team, events and prices as SAMPLE content
   written for the project. Edit here once and the Content Library and lessons update. */
window.GUIDE = window.GUIDE || {};
GUIDE.project = {
  referenceUrl: 'https://claude.ai/artifact/G6vC3teatgeyNBEVwnd27V',
  name: 'Mesurado Kitchen & Palm Bar',
  tagline: 'Liberian cooking by the river, served slowly',
  info: {
    address: '18 Waterside Road, Mamba Point, Monrovia, Liberia',
    addressShort: '18 Waterside Road, Mamba Point',
    phone: '+231 77 512 3480',
    whatsapp: '+231 88 640 2215',
    email: 'hello@mesuradokitchen.com',
    reservationsEmail: 'reservations@mesuradokitchen.com',
    eventsEmail: 'events@mesuradokitchen.com',
    careersEmail: 'careers@mesuradokitchen.com',
    hours: [
      ['Monday – Thursday', '11:30 am – 10 pm'],
      ['Friday – Saturday', '11:30 am – 12 am'],
      ['Sunday (brunch from 10 am)', '10 am – 9 pm']
    ],
    kitchenNote: 'Kitchen closes one hour before the bar.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Mamba+Point+Monrovia+Liberia',
    mapQuery: 'Mamba Point, Monrovia, Liberia'
  },

  /* Pages in the order students create them */
  pages: [
    { title: 'Home', slug: 'home', nav: 'Home (top level)', parent: '', lesson: 'm10-l01' },
    { title: 'Our Story', slug: 'our-story', nav: 'About → Our Story (the “About” item also opens this page)', parent: '', lesson: 'm11-l02' },
    { title: 'Our Philosophy', slug: 'our-philosophy', nav: 'About → Our Philosophy', parent: '', lesson: 'm11-l03' },
    { title: 'Our Team', slug: 'our-team', nav: 'About → Our Team', parent: '', lesson: 'm11-l04' },
    { title: 'Menu', slug: 'menu', nav: 'Menu (top level, with dropdown)', parent: '', lesson: 'm11-l05' },
    { title: 'Reservations', slug: 'reservations', nav: 'Reservations (top level) + “Reserve a Table” button', parent: '', lesson: 'm11-l06' },
    { title: 'Order Online', slug: 'order-online', nav: 'Header “Order Online” link + footer', parent: '', lesson: 'm11-l07' },
    { title: 'Private Dining', slug: 'private-dining', nav: 'Experiences → Private Dining', parent: '', lesson: 'm11-l08' },
    { title: 'Catering', slug: 'catering', nav: 'Experiences → Catering', parent: '', lesson: 'm11-l09' },
    { title: 'Special Events', slug: 'special-events', nav: 'Experiences → Special Events', parent: '', lesson: 'm11-l11' },
    { title: 'Gallery', slug: 'gallery', nav: 'Gallery (top level)', parent: '', lesson: 'm11-l12' },
    { title: 'Journal', slug: 'journal', nav: 'Journal (top level, with dropdown)', parent: '', lesson: 'm11-l10' },
    { title: 'Contact', slug: 'contact', nav: 'Contact (top level)', parent: '', lesson: 'm11-l13' },
    { title: 'Legal', slug: 'legal', nav: 'Footer: Privacy Policy, Terms, Accessibility', parent: '', lesson: 'm11-l14' }
  ],

  nav: [
    { label: 'Home', to: 'Home' },
    { label: 'About', to: 'Our Story', children: ['Our Story', 'Our Philosophy', 'Our Team'] },
    { label: 'Menu', to: 'Menu', children: ['Full Menu', 'Breakfast & Brunch', 'Lunch', 'Dinner', 'Drinks & Cocktails', 'Desserts', 'Seasonal Specials'] },
    { label: 'Reservations', to: 'Reservations' },
    { label: 'Experiences', to: 'Private Dining', children: ['Private Dining', 'Catering', 'Special Events'] },
    { label: 'Gallery', to: 'Gallery' },
    { label: 'Journal', to: 'Journal', children: ['News & Updates', 'Events & Promotions'] },
    { label: 'Contact', to: 'Contact' }
  ],

  /* Design system "Mesurado" — exact values from ds/mesurado/tokens.css */
  colors: [
    { name: 'Forest 950', hex: '#0e1e16', use: 'Primary buttons, dark bands, footer, header text', astra: 'Global palette 1' },
    { name: 'Forest 800', hex: '#26382f', use: 'Primary button hover', astra: 'Global palette 2' },
    { name: 'Charcoal 900', hex: '#242424', use: 'Headings', astra: 'Global palette 3' },
    { name: 'Stone 600', hex: '#68665f', use: 'Body and secondary text', astra: 'Global palette 4' },
    { name: 'Ivory 100', hex: '#f8f5ef', use: 'Site background', astra: 'Global palette 5' },
    { name: 'Ivory 200', hex: '#f0ece3', use: 'Alternate (“subtle”) section background', astra: 'Global palette 6' },
    { name: 'Stone 300', hex: '#e5e0d6', use: 'Borders and dividers', astra: 'Global palette 7' },
    { name: 'Gold 700', hex: '#7d5a12', use: 'Eyebrow labels and accent text on light backgrounds', astra: 'Global palette 8' },
    { name: 'Gold 300', hex: '#d1b686', use: 'Secondary buttons; buttons and eyebrows on dark backgrounds', astra: 'Global palette 9' },
    { name: 'White', hex: '#ffffff', use: 'Cards and panels', astra: '(custom colour)' },
    { name: 'Ivory 50', hex: '#fdf9f2', use: 'Text on dark backgrounds and photos', astra: '(custom colour)' },
    { name: 'Gold 600', hex: '#a27315', use: 'Accent borders, focus rings', astra: '(custom colour)' },
    { name: 'Forest 900', hex: '#19261f', use: 'Cards on dark backgrounds', astra: '(custom colour)' },
    { name: 'Dark text 2', hex: '#c3bfb3', use: 'Paragraph text on dark backgrounds', astra: '(custom colour)' }
  ],
  overlay: { hex: '#0e1e16', opacity: 62, note: 'Hero and page-title image overlay: Forest 950 at 62% opacity' },
  type: {
    headingFont: 'Playfair Display', headingWeight: '600',
    bodyFont: 'Inter', bodyWeight: '400',
    scale: [
      ['Display (home hero title)', '64px', '40px', '1.12'],
      ['H1 (page titles)', '52px', '36px', '1.15'],
      ['H2 (section titles)', '42px', '30px', '1.2'],
      ['H3', '32px', '25px', '1.25'],
      ['H4', '26px', '22px', '1.3'],
      ['H5 (card titles)', '21px', '21px', '1.35'],
      ['H6', '18px', '18px', '1.4'],
      ['Body large (intros)', '18px', '18px', '1.65'],
      ['Body', '16px', '16px', '1.6'],
      ['Small', '14px', '14px', '1.55'],
      ['Eyebrow label', '13px, weight 600, UPPERCASE, letter spacing 0.24em', 'same', '1.3'],
      ['Navigation links', '15px, weight 500', '—', '1.4'],
      ['Buttons', '15px, weight 600', '15px', '1.3']
    ]
  },
  layout: [
    ['Content width (container)', '1240px, plus 32px side margins'],
    ['Section padding (top and bottom)', '96px desktop · 64px tablet and mobile'],
    ['Compact section padding', '64px'],
    ['Gap between cards / columns', '24px desktop · 20px tablet · 16px mobile'],
    ['Gap in image + text (split) sections', '64px desktop · 40px when stacked'],
    ['Long text width', 'about 68 characters per line'],
    ['Card corner radius', '10px'],
    ['Button corner radius', '6px'],
    ['Button height', '48px normal · 40px small · 56px large'],
    ['Button side padding', '24px normal · 16px small · 32px large'],
    ['Header height', '88px desktop · 64px mobile'],
    ['Hero minimum height', '640px'],
    ['Breakpoints in the reference', '1279px, 1023px (mobile header), 767px (one column), 599px']
  ],
  buttons: [
    ['Primary', 'Background #0e1e16, text #fdf9f2, hover #26382f', 'Reserve a Table, Plan a Private Event'],
    ['Secondary', 'Background #d1b686, text #0e1e16, hover #e2cfa8', 'Explore Full Menu, Explore Catering'],
    ['Outline', 'Transparent, 1px border and text #0e1e16', 'Discover Our Story, Explore Menu'],
    ['Text link button', 'No background, gold text #7d5a12, underline on hover', 'See Seasonal Menu'],
    ['On dark backgrounds', 'Primary becomes gold #d1b686 with dark text; outline becomes ivory #fdf9f2', 'Hero and reservation band']
  ],

  /* Menu — prices in US$ */
  menuCats: [
    ['breakfast', 'Breakfast & Brunch'], ['lunch', 'Lunch'], ['dinner', 'Dinner'],
    ['drinks', 'Drinks & Cocktails'], ['desserts', 'Desserts'], ['seasonal', 'Seasonal Specials']
  ],
  menu: [
    ['b1', 'breakfast', 'Palm Butter Eggs', 9.5, 'Two fried eggs on a palm-butter and tomato sauce, with boiled cassava, fried plantain and sautéed greens.', 'Vegetarian · Gluten-free', 'Egg', '', true],
    ['b2', 'breakfast', 'Rice Bread & Coffee', 6, 'Banana-sweetened rice bread, still warm, with whipped butter and a pot of Liberian coffee.', 'Vegetarian · Gluten-free', 'Dairy', '', true],
    ['b3', 'breakfast', 'Riverside Brunch Plate', 14, 'Two fried eggs, a red bean and greens stew, grilled plantain and fresh mango, pineapple and passion fruit.', 'Vegetarian · Spicy', 'Egg', "Chef's Pick", true],
    ['b4', 'breakfast', 'Tropical Fruit & Yogurt', 7.5, 'Mango, pineapple, papaya, watermelon and passion fruit over thick yogurt with toasted coconut, pistachio and honey.', 'Vegetarian · Gluten-free', 'Dairy, tree nuts', '', true],
    ['l1', 'lunch', 'Jollof Rice', 13, 'Tomato-and-pepper rice cooked low and slow, with grilled chicken and a crisp cabbage salad.', 'Spicy · Dairy-free', 'None of the major allergens', "Chef's Pick", true],
    ['l2', 'lunch', 'Pepper Soup', 11, 'A fiery broth with slow-cooked goat on the bone, scent leaf and hot pepper. Comes with rice or bread.', 'Spicy · Gluten-free', 'None of the major allergens', '', true],
    ['l3', 'lunch', 'Fried Fish & Plantain', 15, 'Whole fish fried crisp, with fried plantain, a fresh salad, lime and our house pepper sauce.', 'Seafood · Gluten-free', 'Fish', '', true],
    ['l4', 'lunch', 'Garden Greens Bowl', 10, 'Crisp greens, avocado, radish, carrot ribbons, cherry tomatoes, pumpkin seeds and feta with a lime dressing.', 'Vegetarian · Gluten-free', 'Dairy', '', true],
    ['d1', 'dinner', 'Palm Butter', 18.5, 'Palm nut soup simmered for hours with chicken, beef, smoked fish and garden eggs. Served with rice.', 'Seafood · Gluten-free', 'Fish', 'Signature', true],
    ['d2', 'dinner', 'Cassava Leaf', 17, 'Pounded cassava leaves stewed with palm oil, chicken and smoked pork. Served with rice.', 'Spicy', 'None of the major allergens', '', true],
    ['d3', 'dinner', 'Grilled Lobster Tail', 32, 'Charcoal-grilled lobster with pepper-lime butter, a crisp slaw and pepper sauce on the side.', 'Seafood · Gluten-free', 'Shellfish, dairy', 'Sold out today', false],
    ['d4', 'dinner', 'Torborgee', 16, 'A rich bean stew with greens and bitter balls, cooked the up-country way. Served with rice and fried plantain.', 'Spicy · Dairy-free', 'None of the major allergens', '', true],
    ['d5', 'dinner', 'Eggplant & Okra Stew', 14, 'Eggplant and okra braised in tomato, onion and pepper, finished with fresh herbs. Served with rice.', 'Vegan · Gluten-free', 'None of the major allergens', '', true],
    ['k1', 'drinks', 'Fresh Palm Wine', 5, 'Tapped daily and served cold — sweet in the morning, livelier by evening.', 'Vegan · Gluten-free', 'Contains alcohol', 'House Pour', true],
    ['k2', 'drinks', 'Ginger Beer', 4, 'House-brewed with fresh ginger, lime and a little pepper heat. Non-alcoholic.', 'Vegan · Spicy', 'None of the major allergens', '', true],
    ['k3', 'drinks', 'Mesurado Sunset', 9, 'Rum, orange, pineapple and hibiscus, layered over ice and finished with a fresh hibiscus flower.', 'Vegan', 'Contains alcohol', '', false],
    ['k4', 'drinks', 'Kola & Tonic', 8, 'Gin, bitter kola syrup and tonic over ice with a wheel of lime.', 'Vegan', 'Contains alcohol', '', false],
    ['x1', 'desserts', 'Coconut Candy Tart', 7, 'Caramelised coconut custard in a crisp pastry shell, topped with toasted coconut.', 'Vegetarian', 'Gluten, dairy, egg', '', true],
    ['x2', 'desserts', 'Plantain Cake', 6.5, 'Ripe plantain cake, warm, with a caramelised top and dried plantain crisps.', 'Vegetarian', 'Gluten, dairy, egg', '', true],
    ['x3', 'desserts', 'Pineapple Sorbet', 5, 'Sharp, bright and dairy-free, with fresh grilled pineapple and mint.', 'Vegan · Gluten-free', 'None of the major allergens', '', true],
    ['s1', 'seasonal', 'Crab & Potato Greens', 21, 'Whole seasonal crab in potato greens and palm oil with soft potatoes, served with rice.', 'Seafood · Gluten-free', 'Shellfish', 'Seasonal', true],
    ['s2', 'seasonal', 'Grilled Corn & Pepper Butter', 6, 'Charred corn on the cob with pepper-lime butter — while the season lasts.', 'Vegetarian · Gluten-free · Spicy', 'Dairy', '', true],
    ['s3', 'seasonal', "Chef's Tasting Plate", 28, 'Six small tastes chosen by the kitchen: jollof, grilled prawn, potato greens, fried fish cake and more. Ask for today’s list.', '—', 'Varies — ask your server', '', false]
  ],
  /* menu columns: id, category, name, price, description, dietary, allergens, badge, orderable online */
  homeFeatured: ['d1', 'l1', 'k1', 'd2', 'l3', 'x1'],
  orderPopular: ['d1', 'l1', 'k1'],

  team: [
    ['Musu Kollie', 'Founder & Head Chef', 'Raised in Gbarnga and trained in Accra and London, Musu cooks the food of her grandmother’s kitchen with a chef’s precision. Her palm butter takes six hours, and she won’t shorten it.'],
    ['Emmanuel Tarr', 'Sous Chef', 'Emmanuel runs the kitchen line and the morning market trip. He grew up fishing off West Point and chooses every snapper himself.'],
    ['Jallah Kamara', 'Bar Manager', 'Jallah built the palm bar programme, from the daily palm wine tap to the kola and hibiscus cocktails. Ask him what’s pouring sweetest today.'],
    ['Patience Wesseh', 'Restaurant Manager', 'Patience has looked after guests in Monrovia’s best dining rooms for fifteen years. She knows the regulars by name and the quiet tables by heart.']
  ],
  testimonials: [
    ['The palm butter tasted like Sunday at my grandmother’s house — and the view over the river at sunset made the evening.', 'Comfort D.', 'Sample review · Dinner'],
    ['We booked the River Room for my father’s seventieth. The team handled everything, and the jollof disappeared in minutes.', 'Joseph K.', 'Sample review · Private dining'],
    ['Fresh palm wine, good music on the terrace and staff who remember your name. Our new Friday place.', 'Hawa S.', 'Sample review · Palm Bar']
  ],
  events: [
    ['e1', 'Music', 'Palm Bar Live: Acoustic Evenings', 'Saturday 14 November', '7:30 pm – 10:30 pm', 'The Palm Bar', 'Acoustic sets on the terrace, a small-plates menu and palm wine poured fresh through the night.', 'A relaxed evening of acoustic music on the terrace. The kitchen serves a short menu of small plates, and the bar pours palm wine and house cocktails. Tables are first come, first served; reserve for groups of six or more.'],
    ['e2', 'Food & supper clubs', 'Supper Club: Up-Country Cooking', 'Saturday 21 November', '7 pm', 'Main dining room', 'A five-course set menu of dishes from Liberia’s counties, cooked by our kitchen team.', 'A five-course set menu exploring dishes from across Liberia’s counties, with the chefs introducing each course. One sitting; dietary needs can be arranged in advance.'],
    ['e3', 'Palm Bar', 'Palm Wine Tasting', 'Saturday 28 November', '4 pm – 6 pm', 'The Palm Bar', 'Taste fresh palm wine through the day as it changes, with snacks from the kitchen.', 'An afternoon tasting that follows palm wine from sweet morning tap to evening pour, with snacks from the kitchen and a short talk from the bar team.'],
    ['e4', 'Food & supper clubs', 'Christmas Eve Dinner', 'Thursday 24 December', '6 pm – 11 pm', 'Main dining room', 'A festive set menu for the holiday — booking essential.', 'A festive set menu for Christmas Eve, with a children’s menu available. Booking essential; a deposit may be required.'],
    ['e5', 'Family', 'Family Sunday Brunch', 'Sunday 6 December', '10 am – 2 pm', 'The Palm Terrace', 'A relaxed brunch with a kids’ corner, rice bread fresh from the oven and fruit from the market.', 'Our monthly family brunch: the full brunch menu, a children’s plate, a supervised colouring and story corner, and fresh juices. Tables for families are held on the terrace.']
  ],
  eventFooter: 'Tables for the evening can be reserved online; for groups of eight or more, call +231 77 512 3480 or email events@mesuradokitchen.com.',
  articles: [
    ['a1', 'News & Updates', 'Welcome to Mesurado Kitchen & Palm Bar', 'Sunday 1 November', '3 min read', 'An introduction to the kitchen, the palm bar and the way we like to look after our guests.'],
    ['a2', 'News & Updates', 'How we cook palm butter', 'Thursday 29 October', '5 min read', 'Hours on the stove, the right palm nuts and patience: a look inside our signature dish.'],
    ['a3', 'Events & Promotions', 'Acoustic evenings return to the palm bar', 'Monday 26 October', '2 min read', 'Live music on the terrace every second Saturday, with small plates and fresh palm wine.'],
    ['a4', 'News & Updates', 'A morning at the fish market', 'Wednesday 21 October', '4 min read', 'Where our fish comes from, and why the day’s catch decides the day’s menu.'],
    ['a5', 'Events & Promotions', 'Planning a celebration? Start here', 'Friday 16 October', '3 min read', 'Private dining, set menus and catering — how to plan a gathering with us.'],
    ['a6', 'News & Updates', 'The story of palm wine', 'Monday 12 October', '6 min read', 'From tree to glass in a single day: how palm wine is tapped, and how it changes.'],
    ['a7', 'Events & Promotions', 'Seasonal crab is back on the menu', 'Thursday 8 October', '2 min read', 'River crab season has started — here is what the kitchen is cooking with it.'],
    ['a8', 'News & Updates', 'Meet the bar team', 'Monday 5 October', '4 min read', 'The people behind the palm bar, and the drinks they are proudest of.']
  ],
  articleBody: [
    'When we opened Mesurado Kitchen & Palm Bar on the water at Mamba Point, we wanted a place that felt like the best of a Liberian Sunday: a long table, a pot that has been on the fire since morning and nobody in a hurry to leave.',
    'Every morning starts at the market. Emmanuel chooses the fish, Musu checks the greens and peppers, and whatever is best that day becomes the day’s special. It means the menu shifts a little with the seasons — crab when the river gives it, corn when the farms are full.',
    'In the evening the palm bar takes over. Jallah taps fresh palm wine each day, and as the sun goes down the terrace fills with friends, families and the sound of acoustic sets on Saturdays.',
    'We hope you’ll come and see for yourself. Book a table, order for pickup, or simply stop by the bar for a glass as the light goes.'
  ],
  articleSubhead: 'The morning decides the menu',
  articleQuote: '“Good Liberian food can’t be hurried. We take our time in the kitchen so you can take yours at the table.” — Musu Kollie',
  gallery: [
    ['Food', 'Palm butter, overhead', '1:1'], ['Room', 'Dining room at dusk', '4:3'], ['Palm Bar', 'Palm wine being poured', '1:1'],
    ['Food', 'Jollof rice, 45°', '4:3'], ['Events', 'Acoustic set on the terrace', '1:1'], ['Room', 'River view from the terrace', '4:3'],
    ['Food', 'Fried fish & plantain', '1:1'], ['Palm Bar', 'Palm bar counter', '4:3'], ['Food', 'Cassava leaf', '4:3'],
    ['Room', 'Table set for dinner', '1:1'], ['Events', 'Private dinner, long table', '4:3'], ['Palm Bar', 'Sunset cocktails', '1:1'],
    ['Food', 'Coconut candy tart', '1:1'], ['Room', 'Kitchen pass', '4:3'], ['Events', 'Catering spread', '1:1'], ['Palm Bar', 'Ginger beer & kola', '4:3']
  ],
  faqs: {
    privateDining: [
      ['How far ahead should I book?', 'As early as you can — weekends and holidays fill first. We’ll confirm availability when we reply to your inquiry.'],
      ['Is there a minimum spend or deposit?', 'A 25% deposit confirms your date. Minimum spends start at US$ 600 for the River Room and US$ 1,200 for the Palm Terrace on Fridays and Saturdays; your quote sets out the full amount.'],
      ['Can you cater for dietary needs?', 'Yes. Tell us about allergies and preferences and the chef will adapt the set menu.'],
      ['Can we bring our own cake or decorations?', 'Usually, yes — let us know in your inquiry and we’ll plan around it.']
    ],
    catering: [
      ['How much notice do you need?', 'Five days for drop-off orders up to 50 guests, two weeks for buffets and at least four weeks for weddings and events over 200.'],
      ['Do you cater outside Monrovia?', 'Yes — we cater across Montserrado and Margibi counties, including Harbel and Kakata. A travel fee applies outside Greater Monrovia.'],
      ['Can you provide vegetarian and allergy-friendly dishes?', 'Yes. We label every dish and can adapt menus for vegetarian, vegan and common allergies.'],
      ['Do you supply plates, cutlery and staff?', 'Buffet and full-service packages include serving staff. Equipment hire can be added to any quote.']
    ],
    contact: [
      ['Do I need a reservation?', 'Walk-ins are welcome when we have space, but booking is the best way to be sure of a table, especially at weekends.'],
      ['Do you cater for allergies?', 'Yes. Tell your server, or mention it in your booking, and we’ll guide you through the menu.'],
      ['Can I order for pickup or delivery?', 'Yes — use Order Online. Delivery areas and times will be confirmed before launch.'],
      ['Are children welcome?', 'Always. We have high chairs, a children’s plate on every menu and a family brunch on the first Sunday of each month.']
    ]
  },
  cateringPackages: [
    ['Drop-off', 'The Office Lunch', 'Delivered ready to serve, in labelled trays.', ['Choice of two mains', 'Rice and one side', 'Fruit platter', 'Ginger beer'], 'From US$ 15 per guest'],
    ['Buffet', 'The Liberian Feast', 'Our classics, served by our team.', ['Palm butter, jollof and cassava leaf', 'Grilled fish or chicken', 'Two sides and salad', 'Dessert table'], 'From US$ 28 per guest'],
    ['Full service', 'The Celebration', 'For weddings and milestone events.', ['Canapés on arrival', 'Plated or family-style dinner', 'Palm bar service', 'Staff, set-up and clearing'], 'From US$ 45 per guest']
  ],
  forms: {
    reservationTimes: { Lunch: ['12 pm', '12:30 pm', '1 pm', '1:30 pm', '2 pm'], Dinner: ['6 pm', '6:30 pm', '7 pm', '7:30 pm', '8 pm', '8:30 pm', '9 pm'] },
    occasions: ['No special occasion', 'Birthday', 'Anniversary', 'Business meal', 'Date night', 'Other'],
    eventTypes: ['Birthday', 'Anniversary', 'Business dinner', 'Wedding or engagement', 'Family gathering', 'Other'],
    serviceStyles: ['Drop-off', 'Buffet with staff', 'Full service'],
    subjects: ['General question', 'Feedback on a visit', 'Private dining', 'Catering', 'Events', 'Press & partnerships', 'Careers'],
    deliveryAreas: ['Mamba Point', 'Downtown / Broad Street', 'Sinkor', 'Congo Town', 'Paynesville'],
    deliveryFee: 3
  }
};
