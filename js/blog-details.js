

const BLOG_ARTICLES = {
  'subterranean-cave-aging': {
    id: 'subterranean-cave-aging',
    category: 'Cave Aging & Science',
    isEditorPick: true,
    title: 'Subterranean Cave Aging: How Cavern Humidity & Microflora Shape Vintage Gouda',
    subtitle: 'Deep within 80-foot limestone caverns, temperature and humidity remain in flawless equilibrium. Discover how our master affineurs nurture crystalline tyrosine clusters over 36 months.',
    author: 'Jean-Luc Vance',
    authorTitle: 'Master Affineur & Cellar Guardian',
    authorBio: 'With over 22 years of subterranean cellar management across France and Switzerland, Jean-Luc oversees Cheesoria’s rarest vintage reserves.',
    date: 'July 18, 2026',
    readTime: '8 min read',
    heroImage: 'assets/cave_aged_cheese.png',
    imageCaption: '80-Foot Subterranean Limestone Aging Caverns in the Pre-Alps',
    takeaways: [
      'Subterranean cavern aging provides a constant 11°C (52°F) environment and 92% relative humidity essential for crystalline development.',
      'Tyrosine crystals form naturally when enzymes break down milk protein chains during 24 to 36 months of patient cellar maturation.',
      'Optimal sommelier pairing requires high-acid, oxidative Jura whites or aged tawny ports to cut through deep, caramel-infused butterfat.'
    ],
    toc: [
      { id: 'section-cave-environment', label: '1. The Subterranean Cavern Environment' },
      { id: 'section-microflora-science', label: '2. Microflora Rind & Tyrosine Science' },
      { id: 'section-sommelier-pairings', label: '3. Sommelier Wine & Pairing Matrix' },
      { id: 'section-affineur-notes', label: '4. Master Affineur Tasting Guidance' }
    ],
    contentHtml: `
      <h2 id="section-cave-environment">1. The Subterranean Cavern Environment</h2>
      <p class="drop-cap">
        Deep within the limestone heart of our subterranean pre-Alpine caverns, human technology steps aside to let nature take absolute control. Suspended 80 feet beneath earth’s crust, the ambient cellar climate remains in immutable equilibrium: 11°C (52°F) year-round with a constant 92% relative humidity.
      </p>
      <p>
        These natural air currents, filtered through centuries of porous calcite, carry microscopic ambient spores unique to our region. It is in this silent darkness that raw Dutch-style Gouda wheels undergo their 36-month metamorphosis from supple curds to amber, crystalline masterpieces.
      </p>
      <blockquote class="article-blockquote">
        "Time inside a limestone cavern moves differently. A wheel of 36-month vintage Gouda doesn’t merely age—it distills three years of pasture rainfall, mountain grass, and subterranean microflora into crunchy, caramel perfection."
      </blockquote>

      <h2 id="section-microflora-science">2. Microflora Rind &amp; Tyrosine Science</h2>
      <p>
        As moisture slowly evaporates through organic pine aging boards, proteolytic enzymes breakdown milk proteins (caseins) into short amino acid chains. Among these, <strong>tyrosine</strong> separates and crystallizes within the paste.
      </p>
      <div class="article-inline-banner glass-card">
        <div class="banner-stat-box">
          <span class="stat-number">36</span>
          <span class="stat-label">Months Aged</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">92%</span>
          <span class="stat-label">Humidity Ratio</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">11°C</span>
          <span class="stat-label">Cave Temp</span>
        </div>
      </div>
      <div class="article-content-media glass-card">
        <img 
          src="assets/cave_maturation_vault.png" 
          alt="36-Month Subterranean Cellar Aged Vintage Gouda Wheel with Tyrosine Clusters"
          class="article-body-img"
        >
        <div class="article-img-caption">
          ✨ 36-Month Vintage Reserve: Crystalline Tyrosine Clusters Formed During 3 Years of Cellar Aging
        </div>
      </div>
      <p>
        Those delightful, savory "crunchy spots" in aged Gouda are not salt crystals—they are pure amino acid clusters signifying peak biochemical maturity.
      </p>

      <h2 id="section-sommelier-pairings">3. Sommelier Wine &amp; Pairing Matrix</h2>
      <p>
        Pairing an aged vintage Gouda requires beverages capable of cutting through dense butterfat while enhancing butterscotch, toasted pecan, and brown butter notes.
      </p>
      <div class="table-responsive-wrap">
        <table class="pairing-table">
          <thead>
            <tr>
              <th>Beverage / Wine</th>
              <th>Flavor Profile</th>
              <th>Pairing Harmony</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vin Jaune (Savagnin)</strong></td>
              <td>Oxidative, hazelnut, dry spice</td>
              <td><span class="score-badge">Perfect Match</span></td>
            </tr>
            <tr>
              <td><strong>20-Year Tawny Port</strong></td>
              <td>Dried fig, roasted almond, caramel</td>
              <td><span class="score-badge">Exquisite</span></td>
            </tr>
            <tr>
              <td><strong>Trappist Quadruppel Ale</strong></td>
              <td>Dark plum, dark sugar, clove</td>
              <td><span class="score-badge">Gourmet Classic</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="section-affineur-notes">4. Master Affineur Tasting Guidance</h2>
      <p>
        Serve at 18°C (64°F). Bring the wheel to room temperature 45 minutes prior to slicing. Use a teardrop cheese knife to break off jagged, natural shards rather than smooth slices to highlight the crunchy tyrosine crystals.
      </p>
    `
  },

  'pairing-aged-comte-vin-jaune': {
    id: 'pairing-aged-comte-vin-jaune',
    category: 'Sommelier Pairings',
    isEditorPick: false,
    title: 'Sommelier Pairing Masterclass: Aged Vintage Comté & Subterranean Vin Jaune',
    subtitle: 'Unlocking the nutty, caramelized notes of 24-month AOP Comté alongside oxidative Jura wines for an unforgettable tasting experience.',
    author: 'Élodie Laurent',
    authorTitle: 'Head Sommelier & Gastronomy Director',
    authorBio: 'Élodie brings 14 years of Michelin-starred sommelier expertise, specializing in French regional wine & cheese terroir pairings.',
    date: 'July 15, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Artisanal Jura Vin Jaune & 24-Month AOP Comté Shards',
    takeaways: [
      '24-Month AOP Comté develops over 800 identified floral notes including green hazelnut, melted butter, and dried apricot.',
      'Vin Jaune aged under a veil of yeast (voile) for 6 years and 3 months matches the oxidative complexity of aged Comté perfectly.',
      'Always serve Comté at 16–18°C alongside toasted sourdough, roasted walnuts, and wildflower honey.'
    ],
    toc: [
      { id: 'section-comte-terroir', label: '1. The Terroir of Massif du Jura' },
      { id: 'section-vin-jaune-magic', label: '2. The Magic of the Yeast Veil (Voile)' },
      { id: 'section-flavor-chemistry', label: '3. Flavor Chemistry & Synergy' },
      { id: 'section-tasting-notes', label: '4. Tasting Progression & Protocol' }
    ],
    contentHtml: `
      <h2 id="section-comte-terroir">1. The Terroir of Massif du Jura</h2>
      <p class="drop-cap">
        Few pairings in culinary history possess the geographical and cultural intimacy of AOP Comté and Vin Jaune. Both born from the rolling green pastures and Jurassic limestone hills of Eastern France, they represent the absolute pinnacle of regional terroir alignment.
      </p>
      <p>
        Crafted exclusively from Montbéliarde cow’s milk harvested during summer grazing, 24-month Comté reveals over 800 identified aromatic compounds ranging from roasted hazelnuts to brown butter.
      </p>
      <blockquote class="article-blockquote">
        "When you taste Comté and Vin Jaune together, you are not tasting two separate products—you are tasting the ancient limestone soil of the Jura mountain range."
      </blockquote>

      <h2 id="section-vin-jaune-magic">2. The Magic of the Yeast Veil (Voile)</h2>
      <p>
        Vin Jaune is produced from 100% Savagnin grapes left to mature in oak barrels for six full years and three months without topping up. A natural film of yeast forms over the surface, imbuing the wine with golden yellow hues, intense walnut aromas, and vibrant acidity.
      </p>
      <div class="article-inline-banner glass-card">
        <div class="banner-stat-box">
          <span class="stat-number">6Y</span>
          <span class="stat-label">Barrel Aging</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">24M</span>
          <span class="stat-label">Comté Maturation</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">800+</span>
          <span class="stat-label">Aromatic Compounds</span>
        </div>
      </div>

      <h2 id="section-flavor-chemistry">3. Flavor Chemistry &amp; Synergy</h2>
      <p>
        The high concentration of sotolon in Vin Jaune—a compound responsible for curry, maple, and roasted walnut notes—mirrors the lactones and free fatty acids produced in aged Comté during cellar maturation.
      </p>
      <div class="table-responsive-wrap">
        <table class="pairing-table">
          <thead>
            <tr>
              <th>Vintage &amp; Cuvee</th>
              <th>Cheese Age</th>
              <th>Pairing Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Château-Chalon 2015</strong></td>
              <td>24-Month Comté</td>
              <td><span class="score-badge">Gold Standard</span></td>
            </tr>
            <tr>
              <td><strong>Arbois Pupillin Savagnin</strong></td>
              <td>18-Month Comté</td>
              <td><span class="score-badge">Vibrant Acid</span></td>
            </tr>
            <tr>
              <td><strong>Côtes du Jura Tradition</strong></td>
              <td>36-Month Extra Aged</td>
              <td><span class="score-badge">Deep Nutty</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="section-tasting-notes">4. Tasting Progression &amp; Protocol</h2>
      <p>
        Take a small shard of Comté, allow it to warm on your tongue for 5 seconds to melt the milk fats, then sip 15ml of chilled Vin Jaune (14°C). The oxidative walnut notes of the wine lock instantly onto the caramelized hazelnut notes of the cheese.
      </p>
    `
  },

  'alpine-chalets-gruyeres': {
    id: 'alpine-chalets-gruyeres',
    category: 'Artisan Profiles',
    isEditorPick: false,
    title: '14th-Century Alpine Heritage: Hand-Stirring Copper Cauldrons in Swiss Gruyères',
    subtitle: 'Journey high into the Swiss pre-Alps where artisan families still hand-stir copper cauldrons over open wood fires to craft legendary Gruyère D\'Alpage.',
    author: 'Marcello Rossi',
    authorTitle: 'Artisan Historian & Field Explorer',
    authorBio: 'Marcello documents rare high-altitude cheese making traditions across Switzerland, Italy, and Austria.',
    date: 'July 12, 2026',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'High Alpine Pastures in the Canton of Fribourg, Switzerland',
    takeaways: [
      'Gruyère D’Alpage AOP is produced only between May and October when cows graze at high altitudes above 1,500 meters.',
      'Copper cauldrons heated by wood fires impart subtle smoky notes and golden amber hues impossible to replicate in modern factories.',
      'Wheels are pressed in natural linen cloths and salted in mountain brine baths for 24 hours before cellar aging.'
    ],
    toc: [
      { id: 'section-transhumance', label: '1. The Tradition of Transhumance' },
      { id: 'section-copper-cauldron', label: '2. Copper Cauldrons & Wood Fires' },
      { id: 'section-rind-brining', label: '3. Cellar Brining & Maturation' },
      { id: 'section-flavor-notes', label: '4. Flavor & Texture Characteristics' }
    ],
    contentHtml: `
      <h2 id="section-transhumance">1. The Tradition of Transhumance</h2>
      <p class="drop-cap">
        Every May, as alpine snow recedes to reveal lush meadows carpeted with wild thyme, dandelion, and alpine clover, Swiss cheesemaking families move their herds high into the mountains. This centuries-old seasonal migration is known as <em>Transhumance</em>.
      </p>
      <p>
        The unpasteurized milk harvested from these high-altitude pastures contains a rich diversity of botanical aromatic oils that give Gruyère D’Alpage its unmistakable herbal perfume.
      </p>

      <h2 id="section-copper-cauldron">2. Copper Cauldrons &amp; Wood Fires</h2>
      <p>
        Inside 500-year-old stone chalets, fresh raw milk is poured straight into massive copper cauldrons heated over crackling spruce logs. The copper ions react naturally with milk enzymes, stabilizing golden carotenoid pigments.
      </p>
      <div class="article-inline-banner glass-card">
        <div class="banner-stat-box">
          <span class="stat-number">1500m</span>
          <span class="stat-label">Alpine Altitude</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">100%</span>
          <span class="stat-label">Raw Alp Milk</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">14th C</span>
          <span class="stat-label">Heritage Origin</span>
        </div>
      </div>

      <h2 id="section-rind-brining">3. Cellar Brining &amp; Maturation</h2>
      <p>
        After curd cutting with a wire harp, the curd mass is lifted in linen cloths, placed into wooden hoops, and pressed under 900kg of stones. The next morning, wheels enter a 20% mountain salt brine before transfer to humid pine-lined cellars.
      </p>

      <h2 id="section-flavor-notes">4. Flavor &amp; Texture Characteristics</h2>
      <p>
        At 16 months of cellar age, Gruyère D’Alpage presents a dense, ivory paste with occasional tiny weeping eyes (gouttes de pleur), delivering flavors of onion broth, toasted brioche, and sweet alpine flowers.
      </p>
    `
  },

  'luxury-charcuterie-truffle-board': {
    id: 'luxury-charcuterie-truffle-board',
    category: 'Recipes & Platters',
    isEditorPick: false,
    title: 'Luxury Platter Architecture: Crafting the Ultimate Truffle & Charcuterie Board',
    subtitle: 'Step-by-step guidance on balancing texture, acidity, and intensity with black truffle brie, honeycomb, marcona almonds, and cured prosciutto.',
    author: 'Sophie Moreau',
    authorTitle: 'Executive Food Stylist & Culinary Artist',
    authorBio: 'Sophie styles luxury charcuterie installations for VIP private galas and gastronomy publications worldwide.',
    date: 'July 09, 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Handcrafted Truffle Cheese & Cured Prosciutto Platter',
    takeaways: [
      'Incorporate 5 distinct cheese textures: Triple Cream, Soft Bloomy Rind, Hard Aged, Blue, and Semi-Soft.',
      'Pair pungent black truffle brie with raw wildflower honeycomb to neutralize earthy intensity.',
      'Use natural olive wood or slate boards pre-chilled to 15°C for optimal presentation.'
    ],
    toc: [
      { id: 'section-board-rules', label: '1. The 5 Rules of Cheese Selection' },
      { id: 'section-charcuterie-accents', label: '2. Cured Meats & Flavor Accents' },
      { id: 'section-assembly-guide', label: '3. Architectural Board Styling' },
      { id: 'section-pairing-beverages', label: '4. Beverage & Champagne Pairings' }
    ],
    contentHtml: `
      <h2 id="section-board-rules">1. The 5 Rules of Cheese Selection</h2>
      <p class="drop-cap">
        An exceptional luxury platter is an orchestra of contrasts. Never serve cheeses of identical firmness or milk type side-by-side. Always feature a triple-cream brie, a crystalline 24-month hard cheese, a fragrant goat milk chèvre, and a bold blue reserve.
      </p>
      <p>
        For the centerpiece, select a <strong>Périgord Black Truffle Double Cream Brie</strong> layered with real shaved black truffle paste down its center equator.
      </p>

      <h2 id="section-charcuterie-accents">2. Cured Meats &amp; Flavor Accents</h2>
      <p>
        Fold 24-month Prosciutto di Parma into delicate ribbons. Place bowls of Marcona almonds roasted in sea salt and rosemary beside fresh Turkish figs and raw lavender honeycomb.
      </p>
      <div class="article-inline-banner glass-card">
        <div class="banner-stat-box">
          <span class="stat-number">5</span>
          <span class="stat-label">Cheese Textures</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">15°C</span>
          <span class="stat-label">Board Temp</span>
        </div>
        <div class="banner-stat-box">
          <span class="stat-number">100%</span>
          <span class="stat-label">Organic Honey</span>
        </div>
      </div>

      <h2 id="section-assembly-guide">3. Architectural Board Styling</h2>
      <p>
        Start by placing small ceramic bowls (for honey, olives, and cornichons) to anchor the board visually. Arrange cheese wedges fanning outward, then fill remaining negative spaces with charcuterie folds, crackers, and edible flowers.
      </p>

      <h2 id="section-pairing-beverages">4. Beverage &amp; Champagne Pairings</h2>
      <p>
        Pair with a Blanc de Blancs Vintage Champagne or an oak-aged Chardonnay. The effervescent bubbles cleanse milk fats while complimenting the rich truffle butter.
      </p>
    `
  },

  'science-rind-microflora': {
    id: 'science-rind-microflora',
    category: 'Cave Aging',
    isEditorPick: false,
    title: 'The Science of Cheese Rinds: Brevibacterium Bacteria vs. Natural Bloomy Molds',
    subtitle: 'Demystifying Brevibacterium linens, Penicillium camemberti, and how brine washings develop pungent aromas and golden orange hues.',
    author: 'Jean-Luc Vance',
    authorTitle: 'Master Affineur & Cellar Guardian',
    authorBio: 'Jean-Luc specializes in subterranean microflora cultivation and biological rind fermentation.',
    date: 'July 05, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Subterranean Cedar Shelves & Washed Orange Rind Wheels',
    takeaways: [
      'Washed-rind cheeses owe their orange color and aroma to Brevibacterium linens bacteria.',
      'Natural bloomy rinds are formed by Penicillium camemberti mold spores.',
      'Brine washings containing Marc de Bourgogne cider regulate rind pH and prevent spoilage.'
    ],
    toc: [
      { id: 'section-b-linens', label: '1. Brevibacterium Linens & Washed Rinds' },
      { id: 'section-bloomy-molds', label: '2. Bloomy Molds & Velvety Crusts' },
      { id: 'section-humidity-control', label: '3. Humidity & Cellar Pine Shelves' },
      { id: 'section-rind-edibility', label: '4. Rind Edibility & Sommelier Advice' }
    ],
    contentHtml: `
      <h2 id="section-b-linens">1. Brevibacterium Linens &amp; Washed Rinds</h2>
      <p class="drop-cap">
        The vibrant orange crusts of Époisses, Taleggio, and Munster are crafted through patient rubbing with saltwater brine, beer, or brandy. This process encourages <em>Brevibacterium linens</em> bacteria to flourish, generating rich, savory aromas.
      </p>
      <p>
        B. linens thrives in high moisture (95% relative humidity) and alkaline surface environments created when yeast consumes milk acids.
      </p>

      <h2 id="section-bloomy-molds">2. Bloomy Molds &amp; Velvety Crusts</h2>
      <p>
        In contrast, soft bloomy cheeses like Brie de Meaux and Camembert feature a snowy white crust formed by <em>Penicillium camemberti</em> spores. This fluffy mold layer digests fats and proteins outward-in, resulting in a gooey, runny creamline beneath the rind.
      </p>

      <h2 id="section-humidity-control">3. Humidity &amp; Cellar Pine Shelves</h2>
      <p>
        Subterranean cellars utilize untreated spruce or cedar wood boards. The porous wood absorbs excess surface moisture during washing and releases natural tannins that inhibit unwanted wild molds.
      </p>

      <h2 id="section-rind-edibility">4. Rind Edibility &amp; Sommelier Advice</h2>
      <p>
        Both washed and bloomy natural rinds are 100% edible and contain complex flavor compounds. Only synthetic wax or clothbound rinds should be trimmed prior to tasting.
      </p>
    `
  },

  'private-cellar-tastings': {
    id: 'private-cellar-tastings',
    category: 'Gourmet Living',
    isEditorPick: false,
    title: 'Private Cellar Salon: How to Host an Exclusive Cheese Tasting at Home',
    subtitle: 'How to structure temperature progression from mild chèvre to intense blue reserves, complete with sommelier tasting notes and custom scorecards.',
    author: 'Élodie Laurent',
    authorTitle: 'Head Sommelier & Gastronomy Director',
    authorBio: 'Élodie curates private cellar salons for gourmet enthusiasts across Europe and North America.',
    date: 'June 28, 2026',
    readTime: '9 min read',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Private Gourmet Cheese Salon Table Setup',
    takeaways: [
      'Structure the tasting progression from lightest intensity to boldest blue reserve.',
      'Provide individual linen napkins, wooden scorecards, and palate-cleansing green apple slices.',
      'Serve artisan mineral water at room temperature between tasting flights.'
    ],
    toc: [
      { id: 'section-salon-setup', label: '1. Salon Table & Glassware Setup' },
      { id: 'section-tasting-flight', label: '2. The 5-Course Tasting Flight' },
      { id: 'section-cleansing-palate', label: '3. Palate Cleansers & Accompaniments' },
      { id: 'section-scorecards', label: '4. Scoring & Connoisseur Discussion' }
    ],
    contentHtml: `
      <h2 id="section-salon-setup">1. Salon Table &amp; Glassware Setup</h2>
      <p class="drop-cap">
        Hosting an exclusive cheese salon requires meticulous attention to ambient lighting, glassware selection, and temperature control. Ensure the salon room remains at a cool 19°C (66°F) to prevent soft cheeses from breaking down prematurely.
      </p>

      <h2 id="section-tasting-flight">2. The 5-Course Tasting Flight</h2>
      <p>
        Organize cheeses clockwise starting at 12 o’clock in ascending flavor intensity:
      </p>
      <ul>
        <li><strong>Flight 1:</strong> Fresh Aged Goat Chèvre (Sancerre pairing)</li>
        <li><strong>Flight 2:</strong> Bloomy Triple-Cream Truffle Brie (Champagne pairing)</li>
        <li><strong>Flight 3:</strong> 18-Month Alpine Gruyère D'Alpage (Dry Riesling pairing)</li>
        <li><strong>Flight 4:</strong> 36-Month Subterranean Gouda (Tawny Port pairing)</li>
        <li><strong>Flight 5:</strong> Raw Milk Cambalou Roquefort (Sauternes pairing)</li>
      </ul>

      <h2 id="section-cleansing-palate">3. Palate Cleansers &amp; Accompaniments</h2>
      <p>
        Place thin slices of Granny Smith green apple, unsalted marcona almonds, and neutral sourdough crackers between flights to refresh guests' palates.
      </p>

      <h2 id="section-scorecards">4. Scoring &amp; Connoisseur Discussion</h2>
      <p>
        Provide wooden scorecards with evaluation columns for Aroma, Creamline Texture, Acidity, Protein Crunch, and Finish Duration (Caudalies).
      </p>
    `
  },

  'rare-raw-milk-roquefort': {
    id: 'rare-raw-milk-roquefort',
    category: 'Master Affineur',
    isEditorPick: false,
    title: 'The Secrets of Roquefort: Raw Sheep Milk Maturation in Cambalou Caverns',
    subtitle: 'Unveiling the historic natural airflow fault lines of Roquefort-sur-Soulzon that create Penicillium roqueforti veins in sheep\'s milk wheels.',
    author: 'Jean-Luc Vance',
    authorTitle: 'Master Affineur & Cellar Guardian',
    authorBio: 'Jean-Luc has spent 20+ years studying natural cave ventilation and blue mold spore cultivation.',
    date: 'June 22, 2026',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Raw Lacaune Sheep Milk Roquefort Cave Reserve',
    takeaways: [
      'Roquefort is made strictly from raw Lacaune sheep’s milk in the South of France.',
      'Natural cave fissures called fleurines circulate moist mountain air that feeds Penicillium roqueforti.',
      'Matured on wooden racks wrapped in protective foil for 5 to 9 months.'
    ],
    toc: [
      { id: 'section-fleurines', label: '1. The Fleurines of Mount Combalou' },
      { id: 'section-roqueforti-spores', label: '2. Penicillium Roqueforti Spore Culture' },
      { id: 'section-sheep-milk', label: '3. Lacaune Sheep Milk Richness' },
      { id: 'section-roquefort-pairing', label: '4. Sauternes & Sweet Wine Pairings' }
    ],
    contentHtml: `
      <h2 id="section-fleurines">1. The Fleurines of Mount Combalou</h2>
      <p class="drop-cap">
        High above the village of Roquefort-sur-Soulzon, ancient geological cave collapses created vertical rock fissures known as <em>fleurines</em>. These natural vents breathe cool 9°C moist air into subterranean cellars, nurturing blue veins naturally without artificial refrigeration.
      </p>

      <h2 id="section-roqueforti-spores">2. Penicillium Roqueforti Spore Culture</h2>
      <p>
        Traditionally, rye bread loaves are placed inside the damp caverns until consumed by blue mold. The bread is dried and ground into a fine powder, which is dusted into fresh sheep curds prior to wheel molding.
      </p>

      <h2 id="section-sheep-milk">3. Lacaune Sheep Milk Richness</h2>
      <p>
        Lacaune sheep milk contains nearly double the butterfat and protein of cow’s milk, yielding a moist, ivory paste with distinctive blue veins and a salty, peppery finish.
      </p>

      <h2 id="section-roquefort-pairing">4. Sauternes &amp; Sweet Wine Pairings</h2>
      <p>
        Pairing Roquefort with a 2010 Sauternes or Coteaux du Layon produces an iconic contrast: the honeyed, botrytis-sweet wine tames the intense saltiness of the blue cheese.
      </p>
    `
  },

  'vertical-cave-parmigiano': {
    id: 'vertical-cave-parmigiano',
    category: 'Cave Aging & Science',
    isEditorPick: false,
    title: '36-Month Vacche Rosse Parmigiano: Vertical Cave Maturation & Tyrosine Clusters',
    subtitle: 'Exploring the biological brilliance of Red Cow heirloom milk and 3-year wooden rack aging in Emilia-Romagna.',
    author: 'Jean-Luc Vance',
    authorTitle: 'Master Affineur & Cellar Guardian',
    authorBio: 'Jean-Luc collaborates with Italian master affineurs to document centuries-old wheel turning and copper cauldron fermentation.',
    date: 'June 15, 2026',
    readTime: '9 min read',
    heroImage: 'assets/gouda_cheese.png',
    imageCaption: 'Heirloom Vacche Rosse Cellar Maturation Racks',
    takeaways: [
      'Vacche Rosse (Reggiana Red Cow) milk yields higher casein levels optimal for long 36-month aging.',
      'Cellar masters hammer-test every wheel at 12 months using silver mallets to verify interior structural integrity.',
      'Pairs exceptionally with 25-Year Traditional Balsamic Vinegar of Modena DOP and Vintage Champagne.'
    ],
    toc: [
      { id: 'section-vacche-rosse', label: '1. The Reggiana Red Cow Breed' },
      { id: 'section-hammer-testing', label: '2. Sound Wave Hammer Testing' },
      { id: 'section-crystallization', label: '3. Tyrosine Crunch Development' },
      { id: 'section-balsamic-pairing', label: '4. Traditional Balsamic Harmony' }
    ],
    contentHtml: `
      <h2 id="section-vacche-rosse">1. The Reggiana Red Cow Breed</h2>
      <p class="drop-cap">
        Introduced to Northern Italy by the Lombards in the 6th century, the Reggiana Red Cow produces a rich milk packed with K-casein AA variants, enabling extraordinary long-term aging capacity.
      </p>
      <h2 id="section-hammer-testing">2. Sound Wave Hammer Testing</h2>
      <p>
        At 12 months, master inspectors strike every 40kg wheel with a small silver hammer. By analyzing the resonant acoustic pitch, they detect invisible interior fissures or micro-voids.
      </p>
      <div class="article-content-media glass-card">
        <img 
          src="assets/new_cellar_vaults.png" 
          alt="36-Month Parmigiano Reggiano Vertical Cellar Racks"
          class="article-body-img"
        >
        <div class="article-img-caption">
          ✨ 36-Month Cellar Reserve: Vertical Maturation Racks in Emilia-Romagna Caverns
        </div>
      </div>
    `
  },

  'normandy-raw-camembert': {
    id: 'normandy-raw-camembert',
    category: 'Artisan Profiles',
    isEditorPick: false,
    title: 'The Lost Heritage of Normandy: Ladle-Poured Raw Milk Camembert AOP',
    subtitle: 'How 5 manual ladle scoops over wooden molds create the velvety bloomy rind and mushroom aromas of authentic Camembert.',
    author: 'Sophie Moreau',
    authorTitle: 'Executive Food Stylist & Culinary Artist',
    authorBio: 'Sophie chronicles UNESCO-protected culinary traditions across rural French provinces.',
    date: 'June 10, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Artisanal Wooden Box Packed Normandy Camembert AOP',
    takeaways: [
      'Authentic Camembert de Normandie AOP must be ladle-poured by hand in 5 distinct layers.',
      'Made strictly with raw Norman cow milk harvested from grass-fed herds in Calvados and Orne.',
      'Matures in poplar wood boxes that absorb surface moisture and release subtle forest aromas.'
    ],
    toc: [
      { id: 'section-norman-terroir', label: '1. The Norman Grassland Terroir' },
      { id: 'section-five-ladles', label: '2. The 5 Manual Ladle Protocol' },
      { id: 'section-poplar-wood', label: '3. Poplar Wooden Box Maturation' },
      { id: 'section-cider-pairing', label: '4. Normandy Brut Cider Pairing' }
    ],
    contentHtml: `
      <h2 id="section-norman-terroir">1. The Norman Grassland Terroir</h2>
      <p class="drop-cap">
        In the ocean-breeze dampened pastures of Normandy, cows graze on lush coastal grass rich in beta-carotene. The resulting raw milk yields a naturally golden creamline with earthy, forest-floor aromas.
      </p>
      <h2 id="section-five-ladles">2. The 5 Manual Ladle Protocol</h2>
      <p>
        Master cheesemakers pour warm curds into perforated tin molds using a long-handled ladle, repeating the process 5 times over 40-minute intervals to preserve tender curd structure.
      </p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogDetailsPage();
  initCommentSystem();
  initShareActions();
});

function initBlogDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || 'subterranean-cave-aging'; 

  const article = BLOG_ARTICLES[articleId] || BLOG_ARTICLES['subterranean-cave-aging'];

  document.title = `${article.title} | Cheesoria Gazette`;

  setElementText('breadcrumb-active-title', article.title);
  setElementText('article-cat-badge', article.category);
  setElementText('article-hero-title', article.title);
  setElementText('article-hero-subtitle', article.subtitle);
  setElementText('article-author-name', article.author);
  setElementText('article-date-val', article.date);
  setElementText('article-readtime-val', article.readTime);
  setElementText('article-image-caption', article.imageCaption);

  const editorPickBadge = document.getElementById('article-editor-pick');
  if (editorPickBadge) {
    if (article.isEditorPick) {
      editorPickBadge.classList.remove('hidden');
    } else {
      editorPickBadge.classList.add('hidden');
    }
  }

  const heroImg = document.getElementById('article-hero-image');
  if (heroImg) {
    heroImg.src = article.heroImage;
    heroImg.alt = article.title;
  }

  const takeawaysList = document.getElementById('takeaways-list');
  if (takeawaysList && article.takeaways) {
    takeawaysList.innerHTML = article.takeaways.map(item => `<li>${item}</li>`).join('');
  }

  const bodyContent = document.getElementById('article-body-content');
  if (bodyContent && article.contentHtml) {
    bodyContent.innerHTML = article.contentHtml;
  }

  setElementText('author-bio-name', article.author);
  setElementText('author-bio-desc', article.authorBio);

  const tocList = document.getElementById('toc-list');
  if (tocList && article.toc) {
    tocList.innerHTML = article.toc.map(item => `
      <li><a href="${item.id}">${item.label}</a></li>
    `).join('');
  }

  renderRelatedArticles(article.id);

  setupArticleNavigation(article.id);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderRelatedArticles(currentId) {
  const relatedContainer = document.getElementById('related-articles-list');
  if (!relatedContainer) return;

  const keys = Object.keys(BLOG_ARTICLES).filter(k => k !== currentId);
  const selected = keys.slice(0, 7);

  relatedContainer.innerHTML = selected.map(key => {
    const item = BLOG_ARTICLES[key];
    return `
      <a href="blog-details.html?id=${item.id}" class="related-story-card glass-card">
        <div class="related-img-wrap">
          <img src="${item.heroImage}" alt="${item.title}" class="related-img">
        </div>
        <div class="related-info">
          <span class="related-cat">${item.category}</span>
          <h5 class="related-title">${item.title}</h5>
          <span class="related-time">${item.readTime}</span>
        </div>
      </a>
    `;
  }).join('');
}

function setupArticleNavigation(currentId) {
  const keys = Object.keys(BLOG_ARTICLES);
  const currentIndex = keys.indexOf(currentId);

  const prevKey = keys[(currentIndex - 1 + keys.length) % keys.length];
  const nextKey = keys[(currentIndex + 1) % keys.length];

  const prevArticle = BLOG_ARTICLES[prevKey];
  const nextArticle = BLOG_ARTICLES[nextKey];

  const prevBtn = document.getElementById('prev-article-btn');
  const nextBtn = document.getElementById('next-article-btn');

  if (prevBtn) {
    prevBtn.href = `blog-details.html?id=${prevArticle.id}`;
    setElementText('prev-article-title', prevArticle.title);
  }

  if (nextBtn) {
    nextBtn.href = `blog-details.html?id=${nextArticle.id}`;
    setElementText('next-article-title', nextArticle.title);
  }
}

const INITIAL_COMMENTS = [
  {
    name: 'Antoine de Saint-Germain',
    title: 'Certified Sommelier',
    date: 'July 19, 2026',
    comment: 'Exceptional breakdown of the tyrosine crystallization process. Paired our 36-month Gouda allocation with a 2004 Chateau Chalon Vin Jaune last evening—the synergy was magnificent!'
  },
  {
    name: 'Claire Dupont',
    title: 'Gourmet Guild Member',
    date: 'July 17, 2026',
    comment: 'The tasting sequence guide helped structure our weekend private cellar salon. Our guests were wowed by the raw wildflower honeycomb pairing!'
  }
];

function initCommentSystem() {
  const commentsContainer = document.getElementById('comments-list-container');
  const commentForm = document.getElementById('comment-form');

  if (!commentsContainer) return;

  renderComments(INITIAL_COMMENTS);

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('comment-name');
      const bodyInput = document.getElementById('comment-body');

      if (!nameInput.value.trim() || !bodyInput.value.trim()) return;

      const newComment = {
        name: nameInput.value.trim(),
        title: 'Verified Connoisseur',
        date: 'Just Now',
        comment: bodyInput.value.trim()
      };

      INITIAL_COMMENTS.unshift(newComment);
      renderComments(INITIAL_COMMENTS);

      commentForm.reset();

      showDetailsToast('Note Published!', 'Your connoisseur tasting note has been published.');
    });
  }
}

function renderComments(list) {
  const commentsContainer = document.getElementById('comments-list-container');
  const countBadge = document.getElementById('comment-count-badge');
  if (!commentsContainer) return;

  if (countBadge) {
    countBadge.textContent = `${list.length} Notes`;
  }

  commentsContainer.innerHTML = list.map(item => `
    <div class="comment-item-card glass-card">
      <div class="comment-item-header">
        <div class="comment-author-meta">
          <div class="comment-avatar-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <strong class="comment-author-name">${item.name}</strong>
            <span class="comment-author-tag">${item.title}</span>
          </div>
        </div>
        <span class="comment-date">${item.date}</span>
      </div>
      <p class="comment-body-text">${item.comment}</p>
    </div>
  `).join('');
}

function initShareActions() {
  const shareBtn = document.getElementById('article-share-btn');
  const bookmarkBtn = document.getElementById('article-bookmark-btn');
  const toastClose = document.getElementById('details-toast-close');

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showDetailsToast('Link Copied!', 'Article URL has been copied to your clipboard.');
      }).catch(() => {
        showDetailsToast('Share Article', 'Use browser address bar to copy article link.');
      });
    });
  }

  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      bookmarkBtn.classList.toggle('active');
      const isSaved = bookmarkBtn.classList.contains('active');
      showDetailsToast(
        isSaved ? 'Story Bookmarked!' : 'Bookmark Removed',
        isSaved ? 'This article has been saved to your Connoisseur reading list.' : 'Story removed from saved reading list.'
      );
    });
  }

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      const toast = document.getElementById('details-toast');
      if (toast) toast.classList.add('hidden');
    });
  }
}

function showDetailsToast(title, msg) {
  const toast = document.getElementById('details-toast');
  const toastTitle = document.getElementById('details-toast-title');
  const toastMsg = document.getElementById('details-toast-msg');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = msg;

  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}
