export interface Project {
  id: string;
  name: string;
  nameAl: string;
  location: string;
  year: string;
  category: 'Infrastructure' | 'Residential & Villas' | 'Tunnels & Structural Works' | 'Roads & Bridges';
  shortDescription: string;
  shortDescriptionAl: string;
  fullDescription: string;
  fullDescriptionAl: string;
  specs: string[];
  specsAl: string[];
  client: string;
  image: string;
  galleryImages?: string[];
  featured?: boolean;
}

export interface EquipmentInventory {
  name: string;
  nameAl: string;
  quantity: string;
  description: string;
  descriptionAl: string;
}

export const COMPANY_DETAILS = {
  name: 'Capo Construction SH.P.K',
  foundedYear: '2008',
  phonePrimary: '+355 69 417 2942',
  phoneSecondary: '+355 69 374 8971',
  emailPrimary: 'capoconstruction@yahoo.com',
  emailSecondary: 'capoconstruction@yahoo.com',
  instagram: '@capoconstruction',
  headquarters: 'Albania',
  pdfCatalogUrl: '/Capo_Construction_CV.pdf'
};

export const EQUIPMENT_INVENTORY: EquipmentInventory[] = [
  {
    name: 'Certified Facade Scaffolding Fleet',
    nameAl: 'Skeleri Fasade të Certifikuara',
    quantity: '15,000 m²',
    description: 'European-certified system scaffolding for high-rise residential towers, airports, and urban renovations.',
    descriptionAl: 'Skeleri me sistem europian të certifikuar për pallate me shumë kate, aeroporte dhe restaurime fasadash.'
  },
  {
    name: 'Wooden Structural Formwork',
    nameAl: 'Armaturë Druri Strukturore',
    quantity: '10,000 m²',
    description: 'High-grade timber panels and formwork for concrete slabs, beams, and columns.',
    descriptionAl: 'Panele druri me cilësi të lartë për hedhjen e betonit në pllaka, trare dhe kollona.'
  },
  {
    name: 'Heavy Metal Formwork Panels',
    nameAl: 'Armaturë Metalike e Rëndë',
    quantity: '500 m²',
    description: 'Heavy-duty steel shuttering panels for load-bearing retaining walls and subterranean vaults.',
    descriptionAl: 'Panele çeliku për mure mbajtëse me ngarkesë të lartë dhe struktura nëntokësore.'
  },
  {
    name: 'Modular Plastic Formwork',
    nameAl: 'Armaturë Plastike Modulare',
    quantity: '200 m²',
    description: 'Precision reusable plastic formwork for box culverts, drainage channels, and water chambers.',
    descriptionAl: 'Armaturë plastike me precizion për bokse kalimi, kanale drenazhi dhe stacione uji.'
  },
  {
    name: 'Cranes, Heavy Fleet & Machinery',
    nameAl: 'Vinçë, Kamionë & Makineri të Rënda',
    quantity: 'Multi-Fleet',
    description: 'Tower cranes, tipper trucks, light transport trucks, and specialized civil engineering machinery.',
    descriptionAl: 'Vinçë kulla, kamionë vetëshkarkues, kamionçina dhe makineri të rënda inxhinierike.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vlora-airport-scaffolding',
    name: 'Scaffolding',
    nameAl: 'Skeleri',
    location: 'Vlorë International Airport',
    year: '2023 - 2024',
    category: 'Infrastructure',
    shortDescription: 'Deployment of specialized facade scaffolding for terminal buildings and auxiliary infrastructure at Vlora Airport.',
    shortDescriptionAl: 'Vendosja e skelerisë së fasadës për ndërtesat e aeroportit dhe strukturat përbërëse në Aeroportin e Vlorës.',
    fullDescription: 'Capo Construction deployed certified 15,000 m² system scaffolding at the new Vlora International Airport terminal. The project required high-altitude stability, debris containment netting, and strict airport security safety protocols.',
    fullDescriptionAl: 'Capo Construction vendosi skeleri fasade të certifikuar në ndërtesat përbërëse të Aeroportit të ri Ndërkombëtar të Vlorës. Projekti kërkoi stabilitet të lartë në lartësi, rrjeta mbrojtëse dhe protokolle strikte sigurie.',
    specs: [
      'Airport Terminal facade access framing',
      'High-altitude safety mesh & staging platforms',
      'European safety certification compliance',
      'Rapid assembly & multi-structure coverage'
    ],
    specsAl: [
      'Strukturë skeleri për terminalin e aeroportit',
      'Platforma pune me siguri të lartë në lartësi',
      'Përputhshmëri me certifikimet europiane të sigurisë',
      'Montim i shpejtë dhe mbulim i disa objekteve'
    ],
    client: 'Vlora Airport Infrastructure Consortium',
    image: '/images/pdf_images/extracted_p25_img1.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p25_img1.jpeg',
      '/images/pdf_images/extracted_p25_img2.jpeg',
      '/images/pdf_images/extracted_p26_img1.jpeg',
      '/images/pdf_images/extracted_p26_img2.jpeg',
      '/images/pdf_images/extracted_p27_img1.jpeg',
      '/images/pdf_images/extracted_p27_img2.jpeg'
    ],
    featured: true
  },
  {
    id: 'tirana-elbasan-panoramic-tunnel',
    name: 'Panoramic Tunnel – Tirana-Elbasan Highway',
    nameAl: 'Tuneli Panoramik – Autostrada Tiranë-Elbasan',
    location: 'Autostrada Tiranë - Elbasan / Mamel',
    year: '2017 - 2018',
    category: 'Tunnels & Structural Works',
    shortDescription: 'Construction of the panoramic tunnel on the main Tirana-Elbasan transit corridor, including structural shell and retaining works.',
    shortDescriptionAl: 'Ndërtimi i tunelit panoramik në aksin Tiranë - Elbasan, duke përfshirë strukturat mbrojtëse dhe muret mbajtëse.',
    fullDescription: 'Executed in collaboration with 2T, Capo Construction built the structural reinforced frame, side protection walls, and entry portals for the Panoramic Tunnel on the Tirana-Elbasan highway to optimize traffic flow and vehicle safety.',
    fullDescriptionAl: 'Realizuar në bashkëpunim me kompaninë 2T, Capo Construction ndërtoi strukturën e betonit të armuar, muret anësore mbrojtëse dhe portalet e tunelit panoramik në autostradën Tiranë-Elbasan.',
    specs: [
      'Reinforced concrete tunnel vault framing',
      'Side retaining protection walls & drainage',
      'High-capacity rock anchoring',
      'Safety gallery integration with 2T'
    ],
    specsAl: [
      'Kornizë betoni i armuar për tunelin panoramik',
      'Mure mbajtëse anësore dhe sistem drenazhi',
      'Ankorim shkëmbi me rezistencë të lartë',
      'Galeri sigurie në bashkëpunim me 2T'
    ],
    client: '2T & Albanian Road Authority',
    image: '/images/pdf_images/extracted_p13_img2.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p13_img2.jpeg',
      '/images/pdf_images/extracted_p13_img3.jpeg',
      '/images/pdf_images/extracted_p13_img1.jpeg',
      '/images/pdf_images/extracted_p13_img4.jpeg',
      '/images/pdf_images/extracted_p13_img5.jpeg'
    ],
    featured: true
  },
  {
    id: 'rolling-hills-villas',
    name: 'Rolling Hills Luxury Villas & Residences',
    nameAl: 'Vilat në Kompleksin Rolling Hills',
    location: 'Sauk / Tiranë',
    year: '2013 - 2015',
    category: 'Residential & Villas',
    shortDescription: 'Structural rebar cage assembly, concrete framing, and curb works for luxury residences in Rolling Hills.',
    shortDescriptionAl: 'Punime armaturë hekuri, struktura betoni dhe bordura për vilat luksoze në kompleksin Rolling Hills.',
    fullDescription: 'In partnership with Classic Konstruksion and Bregu SH.A, Capo Construction executed the structural rebar binding and concrete framing for luxury villas in Rolling Hills (Sauk/Tirana).',
    fullDescriptionAl: 'Në bashkëpunim me Classic Konstruksion dhe Bregu SH.A, Capo Construction realizoi punimet e armaturës së hekurit dhe strukturat e betonit për vilat luksoze në Rolling Hills (Sauk).',
    specs: [
      'Heavy structural rebar binding for villa foundations',
      'Post-tensioned concrete slab & cantilever casting',
      'Roadside curb & internal infrastructure paving',
      'Long-term partnerships with Classic Konstruksion & Bregu SH.A'
    ],
    specsAl: [
      'Armaturë hekuri me rezistencë të lartë për bazamentet',
      'Pllaka betoni dhe konzola arkitekturore',
      'Bordura anësore dhe sistemim rrugësh brenda kompleksit',
      'Bashkëpunim afatgjatë me Classic Konstruksion & Bregu SH.A'
    ],
    client: 'Classic Konstruksion & Bregu SH.A',
    image: '/images/pdf_images/extracted_p15_img3.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p15_img3.jpeg',
      '/images/pdf_images/extracted_p15_img1.jpeg',
      '/images/pdf_images/extracted_p15_img6.jpeg',
      '/images/pdf_images/extracted_p15_img2.jpeg',
      '/images/pdf_images/extracted_p15_img4.jpeg',
      '/images/pdf_images/extracted_p15_img5.jpeg',
      '/images/pdf_images/extracted_p15_img7.jpeg'
    ],
    featured: true
  },
  {
    id: 'qukes-qafe-plloce',
    name: 'Qukës – Qafë Plloçë Road Axis Works',
    nameAl: 'Segmenti i Rrugës Qukës – Qafë Plloçë',
    location: 'Qukës – Qafë Plloçë Highway Axis',
    year: '2017 - me vazhdim',
    category: 'Roads & Bridges',
    shortDescription: 'Major mountain highway works featuring retaining walls, concrete box culverts, bridges, and stone gabions.',
    shortDescriptionAl: 'Punime infrastrukture rrugore me mure mbajtëse, bokse betoni, ura dhe gabione me gurë.',
    fullDescription: 'One of Capo Construction’s flagship ongoing road projects executed with 2T. Includes heavy retaining walls, concrete drainage box culverts, bridge piers, stone gabion slope stabilization, and mountain road expansion.',
    fullDescriptionAl: 'Një nga projektet kryesore infrastrukturore në bashkëpunim me kompaninë 2T. Përfshin mure mbajtëse betoni, bokse kalimi ujërash, ura, gabione me gurë për stabilizimin e skarpateve dhe zgjerim aksesh.',
    specs: [
      'Reinforced concrete retaining walls & stone gabions',
      'Concrete drainage box culverts & water channels',
      'Bridge pier & underpass structural pours',
      'Continuous road axis completion with 2T'
    ],
    specsAl: [
      'Mure mbajtëse betoni i armuar dhe gabione gurësh',
      'Bokse kalimi ujërash dhe kanale drenazhi',
      'Ura dhe nënkalime me strukturë të fortë',
      'Përfundim i vazhdueshëm i aksit me 2T'
    ],
    client: '2T SH.P.K & Albanian Road Authority',
    image: '/images/pdf_images/extracted_p11_img1.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p11_img1.jpeg',
      '/images/pdf_images/extracted_p11_img2.jpeg',
      '/images/pdf_images/extracted_p11_img3.jpeg',
      '/images/pdf_images/extracted_p11_img4.jpeg',
      '/images/pdf_images/extracted_p12_img1.jpeg',
      '/images/pdf_images/extracted_p12_img2.jpeg',
      '/images/pdf_images/extracted_p12_img3.jpeg'
    ],
    featured: true
  },
  {
    id: 'pogradec-wastewater-station',
    name: 'Wastewater Pumping Station – Pogradec & Gramsh',
    nameAl: 'Stacioni i Pompimit të Ujërave të Zeza – Pogradec & Gramsh',
    location: 'Pogradec & Gramsh',
    year: '2008 - Në vazhdim',
    category: 'Infrastructure',
    shortDescription: 'Structural rebar cage assembly and concrete chambers for municipal wastewater pumping stations.',
    shortDescriptionAl: 'Punime armature dhe dhoma betoni për stacionet e pompimit të ujërave të zeza.',
    fullDescription: 'In active partnership with Albstar since 2008, Capo Construction delivered heavy subterranean rebar cages, concrete pump foundations, retention basins, and treatment plant chambers in Pogradec and Gramsh.',
    fullDescriptionAl: 'Në bashkëpunim aktiv me Albstar që nga viti 2008, Capo Construction ka realizuar armatimin e hekurit dhe strukturat e betonit për stacionet e pompimit të ujërave të zeza në Pogradec dhe Gramsh.',
    specs: [
      'Subterranean waterproof concrete pump chambers',
      'Biological treatment plant structural slabs',
      'Heavy rebar cage fabrication for water pressure',
      'Longstanding strategic alliance with Albstar'
    ],
    specsAl: [
      'Dhoma betoni nëntokësore me hidroizolim të lartë',
      'Pllaka strukturore për impiantet e pastrimit',
      'Montim armaturash hekuri për presion uji',
      'Aleancë strategjike me Albstar që nga 2008'
    ],
    client: 'Albstar SH.P.K & Municipal Water Utilities',
    image: '/images/pdf_images/extracted_p5_img1.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p5_img1.jpeg',
      '/images/pdf_images/extracted_p5_img2.jpeg',
      '/images/pdf_images/extracted_p5_img3.jpeg',
      '/images/pdf_images/extracted_p5_img4.jpeg',
      '/images/pdf_images/extracted_p6_img1.jpeg',
      '/images/pdf_images/extracted_p6_img2.jpeg',
      '/images/pdf_images/extracted_p6_img3.jpeg'
    ],
    featured: true
  },
  {
    id: 'lin-pogradec-road',
    name: 'Lin – Pogradec Road & Underpasses',
    nameAl: 'Punimet në Rrugën Lin – Pogradec',
    location: 'Lin – Pogradec Highway Corridor',
    year: '2015',
    category: 'Roads & Bridges',
    shortDescription: 'Side retaining walls, water underpasses, box culverts, curbs, and bridge structures along Lake Ohrid corridor.',
    shortDescriptionAl: 'Mure mbajtëse, nënkalime, bokse uji, bordura dhe ura përgjatë aksit Lin - Pogradec.',
    fullDescription: 'Executed with PEVLAKU, Capo Construction completed terrain stabilization retaining walls, water drainage underpasses, highway bridges, and curbs along the vital Lin-Pogradec lakeside transit highway.',
    fullDescriptionAl: 'Realizuar me kompaninë PEVLAKU, Capo Construction ndërtoi muret anësore për stabilizimin e terrenit, nënkalimet e ujërave, urat dhe bordurat përgjatë aksit rrugor Lin-Pogradec.',
    specs: [
      'Side slope retention walls along Lake Ohrid',
      'Hydraulic box culverts & water underpasses',
      'Concrete highway bridge span structures',
      'Sub-base drainage & safety barriers with PEVLAKU'
    ],
    specsAl: [
      'Mure mbajtëse anësore për stabilizim terreni',
      'Nënkalime uji dhe bokse shkarkimi',
      'Ura betoni për lidhjen e segmenteve',
      'Bordura dhe drenazh në bashkëpunim me PEVLAKU'
    ],
    client: 'PEVLAKU SH.P.K',
    image: '/images/pdf_images/extracted_p9_img1.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p9_img1.jpeg',
      '/images/pdf_images/extracted_p9_img2.jpeg',
      '/images/pdf_images/extracted_p10_img1.jpeg',
      '/images/pdf_images/extracted_p10_img2.jpeg',
      '/images/pdf_images/extracted_p10_img3.jpeg',
      '/images/pdf_images/extracted_p10_img4.jpeg'
    ],
    featured: false
  },
  {
    id: 'gusmar-kuc-tepelene-road',
    name: 'Gusmar – Kuç – Tepelenë Highway Road Works',
    nameAl: 'Rruga Gusmar – Kuç – Tepelenë',
    location: 'Gusmar – Kuç – Tepelenë Axis',
    year: '2018',
    category: 'Roads & Bridges',
    shortDescription: 'Mountainous road cut retention walls, bridges, and box culverts improving regional transit.',
    shortDescriptionAl: 'Mure mbajtëse, ura dhe bokse kalimi për përmirësimin e infrastrukturës rrugore malore.',
    fullDescription: 'Constructed with 2T, this project delivered heavy retaining walls, concrete bridge decks, and stream culverts through rugged mountainous terrain connecting Gusmar, Kuç, and Tepelenë.',
    fullDescriptionAl: 'Realizuar me kompaninë 2T, ky projekt përfshiu ndërtimin e mureve mbajtëse, urave dhe bokseve të ujërave në terrenin malor Gusmar-Kuç-Tepelenë.',
    specs: [
      'Mountain slope retaining walls & rock fall protection',
      'Stream bridge concrete deck construction',
      'Box culverts & drainage galleries',
      'Executed in coordination with 2T'
    ],
    specsAl: [
      'Mure mbajtëse në terren malor',
      'Ndërtim urash betoni mbi lumenj',
      'Bokse dhe galeri drenazhi',
      'Ekzekutuar me kompaninë 2T'
    ],
    client: '2T SH.P.K',
    image: '/images/pdf_images/extracted_p14_img4.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p14_img4.jpeg',
      '/images/pdf_images/extracted_p14_img1.jpeg',
      '/images/pdf_images/extracted_p14_img3.jpeg',
      '/images/pdf_images/extracted_p14_img2.jpeg'
    ],
    featured: false
  },
  {
    id: 'bigtam-korce-complex',
    name: 'BIGTAM Korçë Urban Building Complex',
    nameAl: 'Kompleksi i Ndërtesave BIGTAM – Korçë',
    location: 'Qyteti i Korçës',
    year: '2019',
    category: 'Residential & Villas',
    shortDescription: 'Multi-story structural framing, rebar works, and facade scaffolding for BIGTAM complex in Korçë.',
    shortDescriptionAl: 'Punime strukturore betoni, armaturë hekuri dhe skeleri fasade për kompleksin BIGTAM në Korçë.',
    fullDescription: 'Executed in collaboration with BIGTAM SH.P.K, Capo Construction delivered the main concrete structural frame and subsequent facade scaffolding installation for this modern urban residential & commercial complex in Korçë.',
    fullDescriptionAl: 'Realizuar me kompaninë BIGTAM SH.P.K, Capo Construction ndërtoi strukturën kryesore të betonit dhe vendosi skelerinë e fasadës për këtë kompleks rezidencial dhe komercial në Korçë.',
    specs: [
      'Multi-level structural concrete frame casting',
      'Facade scaffolding installation & safety platforms',
      'Acoustic & seismic isolation framing',
      'Turnkey structural execution with BIGTAM'
    ],
    specsAl: [
      'Ndërtim me disa kate me strukturë betoni monolit',
      'Montim skelerie fasade me platforma sigurie',
      'Kornizë me izolim akustik dhe antiseizmik',
      'Ekzekutim me sukses me BIGTAM'
    ],
    client: 'BIGTAM SH.P.K',
    image: '/images/pdf_images/extracted_p16_img1.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p16_img1.jpeg',
      '/images/pdf_images/extracted_p16_img2.jpeg',
      '/images/pdf_images/extracted_p17_img1.jpeg',
      '/images/pdf_images/extracted_p17_img2.jpeg',
      '/images/pdf_images/extracted_p17_img3.jpeg'
    ],
    featured: false
  },
  {
    id: '5d-konstruksion-scaffolding-tirana',
    name: '5D Konstruksion 5-Tower Scaffolding Complex',
    nameAl: 'Kompleksi i 5D Konstruksion – Skeleri Fasade (5 Pallate)',
    location: 'Tiranë',
    year: '2024 - me vazhdim',
    category: 'Infrastructure',
    shortDescription: 'Full 15,000 m² system scaffolding coverage for 5 multi-story residential towers in Tirana.',
    shortDescriptionAl: 'Mbulim i plotë me skeleri fasade për 5 pallate banimi me shumë kate në Tiranë.',
    fullDescription: 'Capo Construction installed certified facade scaffolding covering 5 major multi-story apartment towers for 5D Konstruksion in Tirana. Provides complete safety nets, staging walkways, and exterior restoration access.',
    fullDescriptionAl: 'Capo Construction vendosi skeleri fasade të certifikuar për 5 pallate të mëdha banimi të kompleksit 5D Konstruksion në Tiranë. Siguron rrjeta mbrojtëse dhe platforma pune.',
    specs: [
      '15,000 m² scaffolding system deployment',
      'Coverage for 5 high-rise apartment towers',
      'Safety netting & high-altitude staging',
      'Active project execution in Tirana'
    ],
    specsAl: [
      'Montim i 15,000 m² sistem skelerish',
      'Mbulim i 5 pallateve me shumë kate',
      'Rrjeta sigurie dhe platforma lartësie',
      'Punime aktive në Tiranë'
    ],
    client: '5D Konstruksion',
    image: '/images/pdf_images/extracted_p28_img2.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p28_img2.jpeg',
      '/images/pdf_images/extracted_p29_img3.jpeg',
      '/images/pdf_images/extracted_p29_img4.jpeg',
      '/images/pdf_images/extracted_p29_img1.jpeg',
      '/images/pdf_images/extracted_p28_img1.jpeg'
    ],
    featured: false
  },
  {
    id: 'vithkuq-gener2-tap-road',
    name: 'Vithkuq Road & TAP Pipeline Corridor Works',
    nameAl: 'Punimet në Zonën e Vithkuqit (Gener2 & TAP)',
    location: 'Vithkuq, Korçë Region',
    year: '2016',
    category: 'Roads & Bridges',
    shortDescription: 'Road retention walls, borders, manholes, and drainage channels along Trans Adriatic Pipeline (TAP) axis.',
    shortDescriptionAl: 'Mure anësore, bordura, puseta dhe kanale përgjatë aksit të gazsjellësit TAP.',
    fullDescription: 'In joint coordination with Gener2 and TAP (Trans Adriatic Pipeline), Capo Construction built road retaining walls, borders, manholes, and drainage infrastructure to support the natural gas pipeline installation.',
    fullDescriptionAl: 'Në bashkëpunim me kompanitë Gener2 dhe TAP (Trans Adriatic Pipeline), Capo Construction ndërtoi mure mbajtëse, bordura, puseta dhe kanale në aksin rrugor të Vithkuqit.',
    specs: [
      'Side retaining walls along mountain terrain',
      'Concrete borders, manholes & drainage channels',
      'Coordinated execution with TAP gas pipeline laying',
      'High-durability alpine highway infrastructure'
    ],
    specsAl: [
      'Mure mbajtëse anësore në terren malor',
      'Bordura betoni, puseta dhe kanale',
      'Koordinim me shtrimin e tubave të gazit TAP',
      'Infrastrukturë rrugore alpine me jetëgjatësi'
    ],
    client: 'Gener2 & TAP (Trans Adriatic Pipeline)',
    image: '/images/pdf_images/extracted_p8_img4.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p8_img4.jpeg',
      '/images/pdf_images/extracted_p8_img5.jpeg',
      '/images/pdf_images/extracted_p8_img2.jpeg',
      '/images/pdf_images/extracted_p8_img1.jpeg',
      '/images/pdf_images/extracted_p8_img3.jpeg'
    ],
    featured: false
  },
  {
    id: 'landfill-maliq',
    name: 'Maliq Sanitary Landfill Infrastructure',
    nameAl: 'Infrastruktura e Landfillit – Maliq',
    location: 'Maliq',
    year: '2015',
    category: 'Infrastructure',
    shortDescription: 'Heavy earthworks, reinforced retention structures, concrete channels, and environmental barrier containment.',
    shortDescriptionAl: 'Punime dheu të rënda, struktura mbajtëse të armuara, kanale betoni dhe izolim mjedisor.',
    fullDescription: 'Capo Construction executed structural concrete retaining works, drainage channels, and containment infrastructure for the municipal sanitary landfill in Maliq.',
    fullDescriptionAl: 'Capo Construction ndërtoi strukturat e betonit të armuar, muret mbajtëse dhe kanalet e kullimit për landfillin e Maliqit sipas kërkesave teknike.',
    specs: [
      'Concrete retaining barriers & embankment stabilization',
      'Environmental containment drainage channels',
      'Heavy structural concrete pours',
      'High-durability civil engineering standards'
    ],
    specsAl: [
      'Bariera betoni dhe stabilizim skarpatash',
      'Kanale kullimi dhe izolim mjedisor',
      'Hedhje betoni të armuar me ngarkesë të lartë',
      'Standarde të larta inxhinierike'
    ],
    client: 'Municipal Utilities & Civil Contractors',
    image: '/images/pdf_images/extracted_p7_img5.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p7_img5.jpeg',
      '/images/pdf_images/extracted_p7_img1.jpeg',
      '/images/pdf_images/extracted_p7_img2.jpeg',
      '/images/pdf_images/extracted_p7_img3.jpeg',
      '/images/pdf_images/extracted_p7_img4.jpeg'
    ],
    featured: false
  },
  {
    id: 'depo-dinamiti-defex',
    name: 'DEFEX Specialized Magazine Storage Facility',
    nameAl: 'Depo Dinamiti në Bashkëpunim me DEFEX – Korçë',
    location: 'Korçë',
    year: '2018',
    category: 'Tunnels & Structural Works',
    shortDescription: 'High-security reinforced concrete blast-resistant subterranean vaults and security barriers with DEFEX.',
    shortDescriptionAl: 'Strukturë e posaçme e blinduar me beton të armuar me rezistencë të lartë në bashkëpunim me DEFEX.',
    fullDescription: 'Constructed in rigorous compliance with security and blast-containment regulations, Capo Construction built the reinforced concrete vaults, retaining perimeters, and specialized subterranean storage with DEFEX in Korçë.',
    fullDescriptionAl: 'Ndërtuar në përputhje me standardet strikte të sigurisë dhe rezistencës strukturore, Capo Construction realizoi dhomat e blinduara të betonit dhe muret rrethuese me DEFEX në Korçë.',
    specs: [
      'High-strength reinforced concrete blast-resistant vaults',
      'Subterranean protective containment barriers',
      'Certified structural resistance compliance',
      'Specialized engineering execution with DEFEX'
    ],
    specsAl: [
      'Kornizë betoni i armuar me rezistencë maksimale',
      'Bariera mbrojtëse nëntokësore',
      'Përputhshmëri me normat strikte të sigurisë',
      'Ekzekutim i specializuar me DEFEX'
    ],
    client: 'DEFEX & Defense/Mining Authorities',
    image: '/images/pdf_images/extracted_p21_img3.jpeg',
    galleryImages: [
      '/images/pdf_images/extracted_p21_img3.jpeg',
      '/images/pdf_images/extracted_p21_img5.jpeg',
      '/images/pdf_images/extracted_p21_img1.jpeg',
      '/images/pdf_images/extracted_p21_img2.jpeg',
      '/images/pdf_images/extracted_p21_img4.jpeg',
      '/images/pdf_images/extracted_p21_img6.jpeg'
    ],
    featured: false
  }
];

export const PARTNERS_LIST = [
  { name: '2T', category: 'Segmenti Qukës-Qafë Plloçë & Tuneli Panoramik' },
  { name: 'Albstar', category: 'Stacionet e Pompimit & Rruga e Moglicës (2008-Sot)' },
  { name: 'Gener2 & TAP', category: 'Aksi Vithkuq & Gazsjellësi TAP' },
  { name: 'PEVLAKU', category: 'Rruga Lin - Pogradec' },
  { name: 'Classic Konstruksion', category: 'Vilat Rolling Hills Sauk' },
  { name: 'Bregu SH.A', category: 'Vilat & Pallatet Tiranë / Korçë' },
  { name: 'BIGTAM SH.P.K', category: 'Kompleksi Rezidencial Korçë' },
  { name: '5D Konstruksion', category: 'Skeleri Fasade (5 Pallate Tiranë)' },
  { name: 'DEFEX', category: 'Depo Dinamiti Korçë' },
  { name: 'Aeroporti i Vlorës', category: 'Skeleri Fasade Terminali' },
  { name: 'Bashkia Pogradec', category: 'Infrastruktura Ujore & Tushemisht' },
  { name: 'TAB', category: 'Struktura Betoni' }
];

export const REGIONS_LIST = [
  { city: 'Available in every territory of Albania', cityAl: 'E disponueshme në çdo territor të Shqipërisë' }
];
