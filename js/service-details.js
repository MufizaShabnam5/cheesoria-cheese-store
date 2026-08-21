

document.addEventListener('DOMContentLoaded', () => {

  const SERVICES_DATA = {
    'artisan-selection': {
      title: 'Artisan Cheese Selection & Tasting Vault',
      badge: '— Curated Reserve Collection —',
      tagline: 'Direct access to rare subterranean cave-aged wheels, micro-batch seasonal creameries, and AOP-certified European varieties delivered fresh for connoisseurs.',
      duration: 'Bespoke Curation',
      capacity: 'Private & Corporate',
      heroImage: 'assets/cave_aged_cheese.png',
      inclusions: [
        'Curated Flight of 6 Rare European Matured Cheeses (Subterranean Gouda, Truffled Brie, Cave Blue)',
        'Custom Temperature-Controlled Wooden Tasting Crate & Insulation',
        'Master Affineur Tasting Notes, Origin Maps & Pairing Guide',
        'Artisanal Condiment Trio (Wildflower Honey, Fig Jam, Marcona Almonds)',
        'Personalized Leather Keepsake Booklet & Wax-Sealed Certificate'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Aged Delice de Bourgogne', desc: 'Triple-cream French cheese with rich, velvety texture and buttery aroma.' },
        { course: 'Course II', title: '36-Month Reserve Alpine Comté', desc: 'Subterranean cave-aged wheel with nutty, brown-butter crystalline notes.' },
        { course: 'Course III', title: 'Perigord Black Truffle Pecorino', desc: 'Earthy raw sheep milk cheese infused with Italian black truffle veins.' },
        { course: 'Course IV', title: 'Cave-Aged Roquefort Blue', desc: 'Piquant, creamy blue cheese aged in natural limestone caverns.' }
      ]
    },

    'wine-pairing': {
      title: 'Master Sommelier Cheese & Wine Pairing',
      badge: '— Sommelier Masterclass —',
      tagline: 'Harmonized pairing menus crafted by Master Sommeliers, matching vintage European wines, champagnes, and ports with rare subterranean cave-aged artisanal cheeses.',
      duration: '2.5 Hours',
      capacity: '2 — 50 Guests',
      heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
      inclusions: [
        '6 Rare Artisanal Cheeses (Subterranean Gouda, Truffled Brie, Cave Blue, Alpine Gruyère, Aged Comté, Chevre)',
        '4 Reserve Vintage Wine & Champagne Pairings (Grand Cru Burgundy, Vintage Port, Bordeaux Blend, Champagne)',
        'Artisanal Condiment Board (Raw Honeycomb, Dried Mission Figs, Truffle Honey, Candied Marcona Almonds)',
        'Dedicated Master Sommelier & On-Site Service Attendant',
        'Custom Printed Tasting Cards & Personalized Leather Keepsake Booklet'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Aged Delice de Bourgogne & Blanc de Blancs', desc: 'Triple-cream French cheese matched with crisp citrus champagne notes.' },
        { course: 'Course II', title: '36-Month Comté & Chardonnay', desc: 'Nutty brown-butter crystalline cheese paired with oaky white burgundy.' },
        { course: 'Course III', title: 'Perigord Black Truffle Pecorino & Barolo', desc: 'Earthy raw sheep milk cheese accompanied by bold Piedmontese red.' },
        { course: 'Course IV', title: 'Cave-Aged Roquefort & Tawny Port', desc: 'Piquant, creamy blue cheese contrasted with sweet caramelized port wine.' }
      ]
    },

    'custom-platters': {
      title: 'Custom Charcuterie & Grazing Tables',
      badge: '— Handcrafted Culinary Art —',
      tagline: 'Architectural charcuterie and cheese boards decorated with fresh organic figs, honeycomb, artisanal crackers, and candied nuts for grand occasions.',
      duration: '1.5 Hours Setup',
      capacity: '10 — 200+ Guests',
      heroImage: 'assets/new_gourmet_board.png',
      inclusions: [
        'Custom Hand-Carved Mahogany Grazing Boards & Tiered Display Stands',
        'Selection of 8 International Artisanal Cheeses & Cured Iberian Meats',
        'Fresh Organic Seasonal Produce, Fresh Figs, Pomegranates & Edible Flowers',
        'Artisanal Sourdough Flatbreads, Fruit Crisps & Truffle Butter',
        'On-Site Culinary Stylist for Full Venue Setup & Presentation'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Artisanal Reserve Cheese Wheel Showcase', desc: 'Gouda, Camembert, Gorgonzola, and Alpine Swiss wheels.' },
        { course: 'Course II', title: 'Charcuterie & Cured Meat Tower', desc: 'Prosciutto di Parma, Jamón Ibérico de Bellota, Truffle Salami.' },
        { course: 'Course III', title: 'Artisanal Crackers & Condiments', desc: 'Wildflower Honeycomb, Fig Jam, Marcona Almonds, Rosemary Crisps.' },
        { course: 'Course IV', title: 'Gourmet Dessert & Fruit Finishes', desc: 'Dark Chocolate Truffles, Fresh Berries, Organic Dried Fruits.' }
      ]
    },

    'monthly-subscription': {
      title: 'Exclusive Monthly Cheese Club Subscription',
      badge: '— Curated Connoisseur Club —',
      tagline: 'Exclusive monthly deliveries of rare, limited-run seasonal cheeses delivered straight to your doorstep in climate-controlled insulated wooden crates.',
      duration: 'Monthly Delivery',
      capacity: 'Personal & Gifting',
      heroImage: 'assets/cheese_club.png',
      inclusions: [
        '4-5 Hand-Selected Small-Batch Masterwork Cheeses (Total ~1.5kg)',
        'Insulated Cedar Wood Gift Crate with Temperature Cold-Chain Packaging',
        'Detailed Affineur Tasting Notes, Origin Maps & Pairing Recipes',
        'Complimentary Jar of Seasonal Artisanal Preserve or Honeycomb',
        'VIP Access to Limited Vintage Releases & Member Tastings'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Alpine High-Pasture Harvest Box', desc: 'Rare Summer Gruyère, Vacherin Mont d’Or, and Wild Herb Tomme.' },
        { course: 'Course II', title: 'Subterranean Rock Cellar Reserve', desc: '5-Year Vintage Gouda, Cave-Aged Cheddar, Blue Stilton.' },
        { course: 'Course III', title: 'Mediterranean Artisan Selection', desc: 'Truffled Pecorino, Aged Manchego, Wild Rosemary Goat Cheese.' },
        { course: 'Course IV', title: 'French Monastery Masterpieces', desc: 'Époisses de Bourgogne, St. Nectaire, Comté Extra.' }
      ]
    },

    'private-tastings': {
      title: 'Private Cheese Tasting & Masterclass Workshops',
      badge: '— Estate Experience —',
      tagline: 'Exclusive guided tasting workshops and masterclasses hosted by certified Master Cheesemakers at your private estate, yacht, or venue.',
      duration: '3.0 Hours',
      capacity: '6 — 30 Guests',
      heroImage: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80',
      inclusions: [
        'Interactive Masterclass led by Senior Master Affineur',
        'Guided Comparative Flight of 8 Global Champion Cheeses',
        'Professional Cheese Knife Set & Cutting Technique Tutorial',
        'Wine, Cider & Craft Beer Multi-Pairing Flight',
        'Custom Leather Tasting Journal for Each Guest'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Milk Fermentation & Science Intro', desc: 'Understanding Raw vs. Pasteurized, Terroir, and Curd Cutting.' },
        { course: 'Course II', title: 'Soft Rind & Bloomy Mold Tasting', desc: 'Exploring Camembert, Brie de Meaux, and Goat Milk Curds.' },
        { course: 'Course III', title: 'Hard Aged & Crystalline Wheels', desc: 'Comparing 24-Mo Parmigiano Reggiano vs 4-Yr Gouda.' },
        { course: 'Course IV', title: 'Piquant Blue & Dessert Pairings', desc: 'Final course paired with late-harvest dessert wines.' }
      ]
    },

    'corporate-catering': {
      title: 'Corporate Galas & Luxury Event Catering',
      badge: '— Grand Events —',
      tagline: 'Grand cheese towers, interactive live grazing tables, and luxury corporate catering installations for weddings, summits, and high-profile galas.',
      duration: 'Full Event Service',
      capacity: '50 — 500+ Guests',
      heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      inclusions: [
        '5-Tier Sculptural Cheese Cake Tower decorated with Fresh Produce',
        'Live Carving Station with Master Cheesemaker & Sommelier Bar',
        'Full Silverware, Crystal Glassware & Linen Setup',
        'White-Glove Uniformed Service Staff for Full Event Duration',
        'Custom Branded Favors & Take-Home Cheese Gift Boxes'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Grand Cheese Tower & Sculptural Display', desc: '5-Tiered centerpiece with wheels of Gouda, Brie, and Blue.' },
        { course: 'Course II', title: 'Live Raclette & Melted Cheese Bar', desc: 'Freshly scraped Alpine Raclette over artisanal potatoes and cured ham.' },
        { course: 'Course III', title: 'Sommelier Wine & Champagne Bar', desc: 'Curated wine pairings poured by certified sommeliers.' },
        { course: 'Course IV', title: 'Artisanal Dessert & Truffle Table', desc: 'Dark chocolate pairings, sweet figs, and dessert wines.' }
      ]
    },

    'gift-hampers': {
      title: 'Bespoke Luxury Gift Hampers & Wooden Crates',
      badge: '— Executive Gifting —',
      tagline: 'Hand-assembled mahogany and wicker hampers featuring aged reserve wheels, vintage condiments, and gold-plated luxury cheese knives.',
      duration: 'Express Shipping',
      capacity: 'Individual & Bulk',
      heroImage: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=80',
      inclusions: [
        'Hand-Crafted Solid Mahogany Gift Chest with Brass Clasps',
        '3 Aged Reserve Cheese Wheels (Whole or Half Cuts)',
        '2 Bottles of Vintage Reserve Wine or Champagne',
        'Gold-Plated Stainless Steel Cheese Knife & Board Set',
        'Personalized Wax-Sealed Parchment Gift Card'
      ],
      tastingMenu: [
        { course: 'Course I', title: 'Subterranean 3-Year Aged Reserve Gouda Wheel', desc: 'Full-bodied, crystalline, caramel notes.' },
        { course: 'Course II', title: 'Sublime Black Truffle Camembert', desc: 'Rich creamery cheese layered with Italian black truffle.' },
        { course: 'Course III', title: 'Sommelier Vintage Bordeaux Red', desc: 'Full-bodied red wine matched for aged cheeses.' },
        { course: 'Course IV', title: 'Gold-Plated Affineur Knife Trio', desc: 'Soft cheese spreader, hard cheese spade, and blue cheese fork.' }
      ]
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('id') || 'wine-pairing';

  const data = SERVICES_DATA[serviceId] || SERVICES_DATA['wine-pairing'];

  const elBreadcrumbTitle = document.getElementById('breadcrumb-service-title');
  const elBadge = document.getElementById('service-badge');
  const elTitle = document.getElementById('service-title');
  const elTagline = document.getElementById('service-tagline');
  const elDuration = document.getElementById('service-duration');
  const elCapacity = document.getElementById('service-capacity');
  const elHeroImage = document.getElementById('service-hero-image');
  const elInclusionsList = document.getElementById('service-inclusions-list');

  if (elBreadcrumbTitle) elBreadcrumbTitle.textContent = data.title;
  if (elBadge) elBadge.textContent = data.badge;
  if (elTitle) elTitle.innerHTML = data.title.replace('&', '<span class="highlight-gold">&amp;</span>');
  if (elTagline) elTagline.textContent = data.tagline;
  if (elDuration) elDuration.textContent = data.duration;
  if (elCapacity) elCapacity.textContent = data.capacity;
  if (elHeroImage) {
    elHeroImage.src = data.heroImage;
    elHeroImage.alt = data.title;
  }

  if (elInclusionsList && data.inclusions) {
    elInclusionsList.innerHTML = data.inclusions.map(item => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }

  const elTastingMenuList = document.getElementById('tasting-menu-list');
  if (elTastingMenuList && data.tastingMenu) {
    elTastingMenuList.innerHTML = data.tastingMenu.map(item => `
      <div class="menu-item-row">
        <div class="item-course">${item.course}</div>
        <div class="item-details">
          <strong>${item.title}</strong>
          <span>${item.desc}</span>
        </div>
      </div>
    `).join('');
  }

});
