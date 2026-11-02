/* Builds data/assets.js and copies the project images into assets/.
   Usage:  node tools/build-assets.js <folder-with-downloaded-canvas-files>
   The folder must contain files named <canvas-asset-id>.png / .webp, as downloaded
   from the Reference A canvas. Re-run after changing the MAP table below.
   Instructors who host files elsewhere can instead fill in `url` for any entry in
   data/assets.js — the guide prefers `url` over the bundled file when both exist. */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
const ROOT = path.resolve(__dirname, '..');
if (!SRC || !fs.existsSync(SRC)) { console.error('Pass the folder of downloaded canvas files.'); process.exit(1); }

// [canvasId, id, folder, filename, name, display ratio, alt text, [[page, section, lesson], ...]]
const MAP = [
  // ---------- Logos ----------
  ['8538ddbe6231146f328421f1568e79f2', 'logo-full', 'logos', 'mesurado-logo-full-color.png', 'Logo — full colour', 'Keep original', 'Mesurado Kitchen & Palm Bar', [['All pages', 'Header logo (light background)', 'm09-l02']]],
  ['146549131b3c37f51134c82ce8c43443', 'logo-reversed', 'logos', 'mesurado-logo-reversed.png', 'Logo — reversed (for dark backgrounds)', 'Keep original', 'Mesurado Kitchen & Palm Bar', [['Home', 'Transparent header over the hero', 'm09-l03'], ['All pages', 'Footer brand column', 'm09-l05']]],
  ['d2bd7a88a86520fd16031ba97e14b56f', 'mono-full', 'logos', 'mesurado-monogram-full-color.png', 'Monogram — full colour', '1:1', 'Mesurado Kitchen & Palm Bar', [['Whole site', 'Site Icon (browser tab icon)', 'm09-l02'], ['All pages', 'Mobile header logo', 'm09-l04']]],
  ['7610c12c65a4184be6e36a2c854c4e4e', 'mono-reversed', 'logos', 'mesurado-monogram-reversed.png', 'Monogram — reversed', '1:1', 'Mesurado Kitchen & Palm Bar', [['Home', 'Mobile header over the hero', 'm09-l04']]],

  // ---------- Hero backgrounds ----------
  ['159928769a86c0c0a85eed3814ef5fe5', 'hero-terrace', 'heroes', 'home-hero-1-terrace.webp', 'Home hero slide 1 — terrace at golden hour', 'Full-width background', 'The dining terrace over the Mesurado River at golden hour', [['Home', 'Hero slider — slide 1', 'm10-l02']]],
  ['918141256b94d5a3dec5279559ac8206', 'hero-palm-bar', 'heroes', 'home-hero-2-palm-bar.webp', 'Home hero slide 2 — palm bar at sunset', 'Full-width background', 'The palm bar and terrace as the sun sets over the river', [['Home', 'Hero slider — slide 2', 'm10-l02'], ['Private Dining', 'Card: The Palm Terrace', 'm11-l08']]],
  ['a7a6f50c29b6f4ac3a3b053b8589a3b3', 'hero-terrace-table', 'heroes', 'home-hero-3-terrace-table.webp', 'Home hero slide 3 — terrace table at sunset', 'Full-width background · 4:3 in the reservation band', 'Terrace tables at sunset with the river behind', [['Home', 'Hero slider — slide 3', 'm10-l02'], ['Home', 'Reservation band image (4:3)', 'm10-l06'], ['Gallery', 'Room: Table set for dinner', 'm11-l12']]],
  ['778556eecc97bf23910209a960bd723d', 'page-hero-terrace-night', 'heroes', 'page-hero-terrace-night.webp', 'Page hero — riverside terrace at night', 'Full-width background, about 360px tall', '', [['Our Philosophy', 'Page hero', 'm11-l03'], ['Our Team', 'Page hero', 'm11-l04'], ['Gallery', 'Page hero', 'm11-l12']]],
  ['3464ead9770a5f0f7e11545bb6757c46', 'page-hero-dishes', 'heroes', 'page-hero-dishes.webp', 'Page hero — plated dishes and cocktail', 'Full-width background, about 360px tall', '', [['Menu', 'Page hero', 'm11-l05'], ['Order Online', 'Page hero', 'm11-l07']]],
  ['7ea0da776786efcea3f84216f33f29fe', 'page-hero-river-table', 'heroes', 'page-hero-river-table.webp', 'Page hero — table set by the river', 'Full-width background, about 360px tall', '', [['Reservations', 'Page hero', 'm11-l06'], ['Contact', 'Page hero', 'm11-l13']]],
  ['ff9d136d7f7e3124a3457be44fe3c828', 'page-hero-cocktail-river', 'heroes', 'page-hero-cocktail-river.webp', 'Page hero — cocktail by the river', 'Full-width background, about 360px tall', '', [['Special Events', 'Page hero', 'm11-l11'], ['Journal', 'Page hero', 'm11-l10'], ['Legal', 'Page hero', 'm11-l14']]],

  // ---------- Venue & story photos ----------
  ['c21bcaaa7fd52a9438bc1e62bd55e1f1', 'terrace-portrait', 'photos', 'story-terrace-portrait.webp', 'Terrace over the river (portrait)', '4:5', 'The Mesurado terrace on stilts over the river at sunset', [['Our Story', 'Split hero image', 'm11-l02']]],
  ['6465c132f78ac395c139366521077e1a', 'dining-room', 'photos', 'dining-room.webp', 'Dining room set for dinner', '3:2', 'The dining room set for dinner, dark wood tables and ivory linen', [['Home', 'Welcome section', 'm10-l03'], ['Gallery', 'Room: Dining room at dusk', 'm11-l12']]],
  ['92a7c44274b5ecdec92eb5324a6cfdad', 'river', 'photos', 'river-dusk.webp', 'The Mesurado River at dusk', '3:2', 'The Mesurado River at dusk', [['Our Story', 'How it began', 'm11-l02'], ['Gallery', 'Room: River view from the terrace', 'm11-l12']]],
  ['65e0a56f5085f2fc622b499b8b8f2f48', 'chef-plating', 'photos', 'chef-plating.webp', 'Chef plating at the kitchen pass', '4:5', 'A chef plating cassava leaf at the kitchen pass', [['Home', 'The experience', 'm10-l05'], ['Gallery', 'Room: Kitchen pass', 'm11-l12']]],
  ['6d005b02d263f845d0e497e475b884c3', 'kitchen-pots', 'photos', 'kitchen-pots.webp', 'Kitchen at work', '3:2', 'Cooks stirring large pots of palm butter', [['Our Story', 'The kitchen', 'm11-l02']]],
  ['6e627bd89f0604068182836965bd0ed2', 'market', 'photos', 'market.webp', 'Market produce', '4:5 (Philosophy) · card (Story)', 'Baskets of greens, peppers and fresh fish at the morning market', [['Our Story', 'Card: Our Philosophy', 'm11-l02'], ['Our Philosophy', 'From market to table', 'm11-l03']]],
  ['b970d74973afcb291998d51c72e64a6d', 'team-meal', 'photos', 'team-meal.webp', 'Team at family meal', '3:2', 'The team sharing a meal before service', [['Our Team', 'Join the Mesurado family', 'm11-l04']]],
  ['b928d58754acac3432968c2b93cf735d', 'team-group', 'photos', 'team-group.webp', 'Team group portrait', 'Card image', 'Mesurado’s kitchen, bar and floor leaders', [['Our Story', 'Card: Our Team', 'm11-l02']]],
  ['bb49c1fa67cc03e51f061f96c7ae7ed2', 'palm-wine-gourds', 'photos', 'palm-wine-gourds.webp', 'Palm bar counter with gourds', '3:2', 'The palm bar counter with palm wine gourds', [['Our Story', 'The palm bar', 'm11-l02'], ['Gallery', 'Palm Bar: Palm bar counter', 'm11-l12']]],
  ['fb0df67a2a0046841d7f204bee815997', 'palm-wine-pour', 'photos', 'palm-wine-pour.webp', 'Palm wine being poured', 'Card image · 1:1 in gallery', 'Fresh palm wine poured into a gourd cup', [['Home', 'Seasonal specials: Palm wine tasting Saturdays', 'm10-l07'], ['Home', 'Gallery preview', 'm10-l10'], ['Gallery', 'Palm Bar: Palm wine being poured', 'm11-l12']]],
  ['fa955d50f902d5307435fbae2e9bfeee', 'sunset-cocktails', 'photos', 'sunset-cocktails.webp', 'Sunset cocktails', '1:1', 'Sunset cocktails', [['Gallery', 'Palm Bar: Sunset cocktails', 'm11-l12']]],
  ['bdfd33af58f771e568ea12d50f61d731', 'ginger-kola', 'photos', 'ginger-beer-kola.webp', 'Ginger beer and kola', '4:3', 'Ginger beer and kola', [['Gallery', 'Palm Bar: Ginger beer & kola', 'm11-l12']]],
  ['1edee46663515bc5c23190c9beceddad', 'catering-buffet', 'photos', 'catering-buffet.webp', 'Catering buffet spread', '4:5', 'A catering buffet of jollof rice, grilled fish and palm butter', [['Catering', 'Split hero image', 'm11-l09'], ['Gallery', 'Events: Catering spread', 'm11-l12']]],
  ['37bb846ca28de20ab6d0c152fc0b92ec', 'catering-office', 'photos', 'catering-office.webp', 'Office lunch catering', 'Card image', 'Labelled trays of jollof, chicken, cassava leaf and salad at an office lunch', [['Catering', 'Card: Office lunches & meetings', 'm11-l09']]],
  ['9e2506b971845515c1a916a8417621f7', 'catering-wedding', 'photos', 'catering-wedding.webp', 'Wedding buffet', '3:2 (Home) · card (Catering)', 'A server plating food for a bride and groom at a wedding buffet', [['Home', 'Private dining and catering: Catering', 'm10-l08'], ['Catering', 'Card: Weddings & parties', 'm11-l09']]],
  ['387756f18374410a2b303fbea0f62bf2', 'catering-family', 'photos', 'catering-family.webp', 'Family gathering', 'Card image', 'A family serving themselves from large bowls at a gathering', [['Catering', 'Card: Family & community events', 'm11-l09'], ['Special Events', 'Event: Family Sunday Brunch', 'm11-l11']]],
  ['447fb2b9a248bfff5a00a073c3995a0a', 'river-room-portrait', 'photos', 'river-room-portrait.webp', 'River Room long table (portrait)', '4:5', 'A long table set for dinner in the River Room', [['Private Dining', 'Split hero image', 'm11-l08'], ['Gallery', 'Events: Private dinner, long table', 'm11-l12']]],
  ['80baca8fdd60d17a47852099a10689ad', 'river-room', 'photos', 'river-room.webp', 'The River Room', '3:2', 'The River Room set for a private dinner', [['Home', 'Private dining and catering: Private dining', 'm10-l08'], ['Private Dining', 'Card: The River Room', 'm11-l08']]],
  ['a83386e406c74dee0e959563f8b17cbe', 'dining-room-full', 'photos', 'dining-room-full.webp', 'Whole restaurant set for an event', 'Card image', 'The full dining room set for an evening event', [['Private Dining', 'Card: The whole restaurant', 'm11-l08']]],
  ['de4e22e223e5f7fa0d6fb917bd1316cd', 'pd-candlelit', 'photos', 'pd-candlelit-tables.webp', 'Candlelit tables', '1:1', 'Candlelit tables set for a celebration by the river', [['Private Dining', 'Gallery row', 'm11-l08']]],
  ['1d4e8e3fdd5f1d475acd965a06ad6bd6', 'pd-sunset-guests', 'photos', 'pd-sunset-guests.webp', 'Terrace reception', '1:1', 'Guests on the terrace at sunset', [['Private Dining', 'Gallery row', 'm11-l08']]],
  ['3926d1cec591cf7b696038eed91e0d81', 'pd-set-menu', 'photos', 'pd-set-menu-course.webp', 'Set menu course', '1:1', 'A plated course from a set menu', [['Private Dining', 'Gallery row', 'm11-l08']]],
  ['a27b84f88da9e4b9e3f64c00fcd48259', 'pd-cake', 'photos', 'pd-celebration-cake.webp', 'Celebration cake', '1:1', 'A celebration cake at the table', [['Private Dining', 'Gallery row', 'm11-l08']]],
  ['71c00dfa536eaab6f507d24ad96df03e', 'extra-terrace-event', 'photos', 'extra-terrace-event.webp', 'Terrace set for an evening event (spare)', 'Optional', 'Round tables set for an evening event on a riverside terrace', []],

  // ---------- Menu dishes ----------
  ['3f7509ffabde776374cb8966f403cd3e', 'dish-b1', 'menu', 'menu-palm-butter-eggs.webp', 'Dish — Palm Butter Eggs', '4:3 card image', 'Palm Butter Eggs', [['Menu', 'Breakfast & Brunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['d11cca45fe30a078bf0bd4517f5da09a', 'dish-b2', 'menu', 'menu-rice-bread-coffee.webp', 'Dish — Rice Bread & Coffee', '4:3 card image', 'Rice Bread & Coffee', [['Menu', 'Breakfast & Brunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['a15066d216e9b33d68476b145fa321ec', 'dish-b3', 'menu', 'menu-riverside-brunch-plate.webp', 'Dish — Riverside Brunch Plate', '4:3 card image', 'Riverside Brunch Plate', [['Menu', 'Breakfast & Brunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['545f1aa2830db8aeb8051752a293d770', 'dish-b4', 'menu', 'menu-tropical-fruit-yogurt.webp', 'Dish — Tropical Fruit & Yogurt', '4:3 card image', 'Tropical Fruit & Yogurt', [['Menu', 'Breakfast & Brunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['d979934b3734f812d411629c60a229e1', 'dish-l1', 'menu', 'menu-jollof-rice.webp', 'Dish — Jollof Rice', '4:3 card image', 'Jollof Rice', [['Home', 'Signature dishes', 'm10-l04'], ['Menu', 'Lunch', 'm11-l05'], ['Gallery', 'Food: Jollof rice', 'm11-l12'], ['Order Online', 'Product image', 'm13-l07']]],
  ['be3a91e4995232dd4b50de5b635c2cfb', 'dish-l2', 'menu', 'menu-pepper-soup.webp', 'Dish — Pepper Soup', '4:3 card image', 'Pepper Soup', [['Menu', 'Lunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['b3dc134077ed7683f493e07f5192feae', 'dish-l3', 'menu', 'menu-fried-fish-plantain.webp', 'Dish — Fried Fish & Plantain', '4:3 card image', 'Fried Fish & Plantain', [['Home', 'Signature dishes', 'm10-l04'], ['Menu', 'Lunch', 'm11-l05'], ['Gallery', 'Food: Fried fish & plantain', 'm11-l12'], ['Order Online', 'Product image', 'm13-l07']]],
  ['665b51635ea071778aa2ab6d1a589b88', 'dish-l4', 'menu', 'menu-garden-greens-bowl.webp', 'Dish — Garden Greens Bowl', '4:3 card image', 'Garden Greens Bowl', [['Menu', 'Lunch', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['3cd0c3038d726c2366e9a3b44505238d', 'dish-d1', 'menu', 'menu-palm-butter.webp', 'Dish — Palm Butter', '4:3 card image', 'Palm Butter', [['Home', 'Signature dishes', 'm10-l04'], ['Home', 'Gallery preview', 'm10-l10'], ['Menu', 'Dinner', 'm11-l05'], ['Gallery', 'Food: Palm butter, overhead', 'm11-l12'], ['Order Online', 'Product image', 'm13-l07']]],
  ['6e987030216d7f36e80130cd528186ce', 'dish-d2', 'menu', 'menu-cassava-leaf.webp', 'Dish — Cassava Leaf', '4:3 card image', 'Cassava Leaf', [['Home', 'Signature dishes', 'm10-l04'], ['Menu', 'Dinner', 'm11-l05'], ['Gallery', 'Food: Cassava leaf', 'm11-l12'], ['Order Online', 'Product image', 'm13-l07']]],
  ['bc15a254be142958147ec054cf73b774', 'dish-d3', 'menu', 'menu-grilled-lobster-tail.webp', 'Dish — Grilled Lobster Tail', '4:3 card image', 'Grilled Lobster Tail', [['Menu', 'Dinner (shown as sold out)', 'm11-l05']]],
  ['125624075d2f93751627c98c7bf9d1aa', 'dish-d4', 'menu', 'menu-torborgee.webp', 'Dish — Torborgee', '4:3 card image', 'Torborgee', [['Menu', 'Dinner', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['266431a2956261c495a08fdec8cb8b49', 'dish-d5', 'menu', 'menu-eggplant-okra-stew.webp', 'Dish — Eggplant & Okra Stew', '4:3 card image', 'Eggplant & Okra Stew', [['Menu', 'Dinner', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['05908b902f5666e94dded35ee0ddb7c8', 'dish-k1', 'menu', 'menu-fresh-palm-wine.webp', 'Drink — Fresh Palm Wine', '4:3 card image', 'Fresh Palm Wine', [['Home', 'Signature dishes', 'm10-l04'], ['Menu', 'Drinks & Cocktails', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['a6ca9da603ab7ab23e45cf9f2b415c7d', 'dish-k2', 'menu', 'menu-ginger-beer.webp', 'Drink — Ginger Beer', '4:3 card image', 'Ginger Beer', [['Menu', 'Drinks & Cocktails', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['3898ff8e0fe84f7bd63fa01374a6fe50', 'dish-k3', 'menu', 'menu-mesurado-sunset.webp', 'Drink — Mesurado Sunset', '4:3 card image', 'Mesurado Sunset cocktail', [['Menu', 'Drinks & Cocktails', 'm11-l05']]],
  ['4dafcb074235f91e2ce56f79c15a301c', 'dish-k4', 'menu', 'menu-kola-tonic.webp', 'Drink — Kola & Tonic', '4:3 card image', 'Kola & Tonic cocktail', [['Menu', 'Drinks & Cocktails', 'm11-l05']]],
  ['192831a970fc8c54a09136e52c93dc02', 'dish-x1', 'menu', 'menu-coconut-candy-tart.webp', 'Dessert — Coconut Candy Tart', '4:3 card image', 'Coconut Candy Tart', [['Home', 'Signature dishes', 'm10-l04'], ['Menu', 'Desserts', 'm11-l05'], ['Gallery', 'Food: Coconut candy tart', 'm11-l12'], ['Order Online', 'Product image', 'm13-l07']]],
  ['41c1cdaac23a61fa6335ee51123ba372', 'dish-x2', 'menu', 'menu-plantain-cake.webp', 'Dessert — Plantain Cake', '4:3 card image', 'Plantain Cake', [['Menu', 'Desserts', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['d8c346168b4fdb9bcb7ef236cc8235c7', 'dish-x3', 'menu', 'menu-pineapple-sorbet.webp', 'Dessert — Pineapple Sorbet', '4:3 card image', 'Pineapple Sorbet', [['Menu', 'Desserts', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['0a61f07228c1d01a4c08e15f86aba865', 'dish-s1', 'menu', 'menu-crab-potato-greens.webp', 'Dish — Crab & Potato Greens', '4:3 card image', 'Crab and potato greens in palm oil', [['Home', 'Seasonal specials: River crab is back', 'm10-l07'], ['Menu', 'Seasonal Specials', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['87fc10e07764d10108a4874fb007e958', 'dish-s2', 'menu', 'menu-grilled-corn.webp', 'Dish — Grilled Corn & Pepper Butter', '4:3 card image', 'Grilled Corn & Pepper Butter', [['Menu', 'Seasonal Specials', 'm11-l05'], ['Order Online', 'Product image', 'm13-l07']]],
  ['9a335e693feb281e2153b65f5831cfbf', 'dish-s3', 'menu', 'menu-chefs-tasting-plate.webp', 'Dish — Chef’s Tasting Plate', '4:3 card image', 'The chef’s tasting plate of six small Liberian dishes', [['Home', 'Seasonal specials: The tasting plate', 'm10-l07'], ['Menu', 'Seasonal Specials', 'm11-l05']]],

  // ---------- Team ----------
  ['e5ccf2541435b46135e00ea58c3c4fa7', 'team-musu', 'team', 'team-musu-kollie.webp', 'Team — Musu Kollie', '3:4 portrait', 'Musu Kollie, Founder & Head Chef', [['Our Team', 'Team card 1', 'm11-l04']]],
  ['358e438a92212f66a472a17470c246e7', 'team-emmanuel', 'team', 'team-emmanuel-tarr.webp', 'Team — Emmanuel Tarr', '3:4 portrait', 'Emmanuel Tarr, Sous Chef', [['Our Team', 'Team card 2', 'm11-l04']]],
  ['264c1129a4f8f8facb34ca130751dd89', 'team-jallah', 'team', 'team-jallah-kamara.webp', 'Team — Jallah Kamara', '3:4 portrait', 'Jallah Kamara, Bar Manager', [['Our Team', 'Team card 3', 'm11-l04']]],
  ['b9c70bab5e0bc979e464c2a17fcda8ea', 'team-patience', 'team', 'team-patience-wesseh.webp', 'Team — Patience Wesseh', '3:4 portrait', 'Patience Wesseh, Restaurant Manager', [['Our Team', 'Team card 4', 'm11-l04']]],

  // ---------- Events ----------
  ['6b8019e6ec9c34997ab5a58eec691658', 'event-e1', 'events', 'event-acoustic-evenings.webp', 'Event — Palm Bar Live: Acoustic Evenings', '16:9 featured · card image', 'Palm Bar Live: Acoustic Evenings', [['Special Events', 'Featured event + event post', 'm11-l11']]],
  ['8249ddf2de4caf82911359b5f561fbf0', 'event-e2', 'events', 'event-supper-club.webp', 'Event — Supper Club: Up-Country Cooking', 'Card image', 'Supper Club: Up-Country Cooking', [['Special Events', 'Event post', 'm11-l11']]],
  ['08d5e7ce59d11dc1d98469ffaa178229', 'event-e3', 'events', 'event-palm-wine-tasting.webp', 'Event — Palm Wine Tasting', 'Card image', 'Palm Wine Tasting', [['Special Events', 'Event post', 'm11-l11']]],
  ['57ee7534054067c946e98e9eb06df9dc', 'event-e4', 'events', 'event-christmas-eve.webp', 'Event — Christmas Eve Dinner', 'Card image', 'Christmas Eve Dinner', [['Special Events', 'Event post', 'm11-l11']]],

  // ---------- Journal ----------
  ['d990d395e7f0e3ae83164f4634564d26', 'journal-a1', 'journal', 'journal-welcome.webp', 'Journal — Welcome to Mesurado', '16:9 featured · card image', 'Welcome to Mesurado Kitchen & Palm Bar', [['Journal', 'Featured post: Welcome to Mesurado Kitchen & Palm Bar', 'm11-l10']]],
  ['54a41950853411c0cf1a599dc62ea459', 'journal-a2', 'journal', 'journal-palm-butter.webp', 'Journal — How we cook palm butter', 'Card image', 'How we cook palm butter', [['Journal', 'Post: How we cook palm butter', 'm11-l10']]],
  ['ae44be353f282755983f66aea57ba5eb', 'journal-a3', 'journal', 'journal-acoustic-evenings.webp', 'Journal — Acoustic evenings return', 'Card image · 1:1 in gallery', 'Acoustic evenings return to the palm bar', [['Journal', 'Post: Acoustic evenings return to the palm bar', 'm11-l10'], ['Gallery', 'Events: Acoustic set on the terrace', 'm11-l12']]],
  ['2fb171e3b3fca6d10943298c53e78935', 'journal-a4', 'journal', 'journal-fish-market.webp', 'Journal — A morning at the fish market', 'Card image', 'A morning at the fish market', [['Journal', 'Post: A morning at the fish market', 'm11-l10']]],
  ['a302ec782c1e053f9ed777c6364caf31', 'journal-a5', 'journal', 'journal-celebration.webp', 'Journal — Planning a celebration?', 'Card image', 'Planning a celebration? Start here', [['Journal', 'Post: Planning a celebration? Start here', 'm11-l10']]],
  ['4318bcb939e1092e96bb4fdfcaef466c', 'journal-a6', 'journal', 'journal-palm-wine-story.webp', 'Journal — The story of palm wine', 'Card image', 'The story of palm wine', [['Journal', 'Post: The story of palm wine', 'm11-l10']]],
  ['b587879d34d06a4cce7dbce4144c77f9', 'journal-a7', 'journal', 'journal-seasonal-crab.webp', 'Journal — Seasonal crab is back', 'Card image', 'Seasonal crab is back on the menu', [['Journal', 'Post: Seasonal crab is back on the menu', 'm11-l10']]],
  ['0b17eb7bc5f874b57fc80be3913d8a1b', 'journal-a8', 'journal', 'journal-bar-team.webp', 'Journal — Meet the bar team', 'Card image', 'Meet the bar team', [['Journal', 'Post: Meet the bar team', 'm11-l10']]]
];

function dims(p) {
  const b = fs.readFileSync(p).subarray(0, 64);
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const c = b.toString('ascii', 12, 16);
    if (c === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (c === 'VP8L') { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
    if (c === 'VP8X') return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
  }
  return [0, 0];
}
function ratioLabel(w, h) {
  const r = w / h;
  const known = [['1:1', 1], ['4:5', .8], ['3:4', .75], ['4:3', 4 / 3], ['3:2', 1.5], ['16:9', 16 / 9], ['3:1', 3], ['7:9', 7 / 9], ['8:5', 1.6], ['5:2', 2.5], ['2:1', 2], ['13:5', 2.6], ['7:11', 7 / 11], ['18:5', 3.6]];
  let best = known[0];
  for (const k of known) if (Math.abs(k[1] - r) < Math.abs(best[1] - r)) best = k;
  return Math.abs(best[1] - r) / r < 0.04 ? best[0] : r.toFixed(2) + ':1';
}

const out = [];
const seen = new Set();
for (const [cid, id, folder, file, name, display, alt, uses] of MAP) {
  if (seen.has(id)) throw new Error('Duplicate id ' + id);
  seen.add(id);
  const ext = path.extname(file);
  const src = path.join(SRC, cid + ext);
  if (!fs.existsSync(src)) throw new Error('Missing source file ' + src);
  const destRel = 'assets/' + folder + '/' + file;
  const dest = path.join(ROOT, destRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  const [w, h] = dims(dest);
  out.push({
    id, name, group: folder, file: destRel, filename: file,
    format: ext.slice(1).toUpperCase(), width: w, height: h, ratio: ratioLabel(w, h),
    kb: Math.round(fs.statSync(dest).size / 1024),
    display, alt, uses: uses.map(([page, section, lesson]) => ({ page, section, lesson })),
    url: '', canvasId: cid
  });
}

const header = `/* Project Asset Library registry — generated by tools/build-assets.js.
   Each entry is a file the instructor uploaded to the Reference A canvas, copied into
   /assets with a clear filename. To use a different hosted copy (Google Drive, GitHub,
   etc.) put its direct link in \`url\`; the guide will then offer that link instead.
   To add a new asset, add an entry with a unique id; leave \`file\` empty and \`url\`
   empty to show it as "Pending — link not supplied yet". */
window.GUIDE = window.GUIDE || {};
GUIDE.assetGroups = [
  ['logos', 'Logos'], ['heroes', 'Hero backgrounds'], ['photos', 'Venue, story & experience photos'],
  ['menu', 'Menu dishes & drinks'], ['team', 'Team portraits'], ['events', 'Event images'], ['journal', 'Journal images']
];
GUIDE.assets = `;
fs.writeFileSync(path.join(ROOT, 'data', 'assets.js'), header + JSON.stringify(out, null, 1) + ';\n');
console.log('Wrote', out.length, 'assets');
