export type Language = 'EN' | 'AL';

export interface TranslationDictionary {
  nav: {
    projects: string;
    services: string;
    about: string;
    partners: string;
    contact: string;
    startProject: string;
    downloadCv: string;
    subtitle: string;
  };
  hero: {
    badge: string;
    headlineMain: string;
    headlineAccent: string;
    companyName: string;
    subheadline: string;
    btnProjects: string;
    btnContact: string;
    btnDownloadCatalog: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
    stat4Value: string;
  };
  about: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    para1: string;
    para2: string;
    niptTag: string;
    specializationsTitle: string;
    specializations: string[];
    inventoryTitle: string;
    exploreCapabilities: string;
    imageTitle: string;
    imageSubtitle: string;
    stats: { value: string; label: string; highlight: string }[];
  };
  projects: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
    categories: {
      all: string;
      infra: string;
      residential: string;
      roads: string;
      tunnels: string;
    };
    inspectBtn: string;
  };
  services: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
    inventoryTag: string;
    inventoryTitle: string;
    scaffoldingTag: string;
    scaffoldingTitle: string;
    scaffoldingDesc: string;
    scaffoldingBtn: string;
    items: {
      number: string;
      title: string;
      description: string;
      features: string[];
    }[];
  };
  partners: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
  };
  statement: {
    line1: string;
    line2: string;
    line3: string;
    tagline: string;
  };
  contact: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
    headquarters: string;
    phone: string;
    email: string;
    nipt: string;
    regionsTitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      sector: string;
      desc: string;
      descPlaceholder: string;
      submitBtn: string;
      sectors: {
        infra: string;
        roads: string;
        residential: string;
        villas: string;
        concrete: string;
        scaffolding: string;
        tunnels: string;
        general: string;
      };
      successTitle: string;
      successDesc: string;
      anotherInquiry: string;
    };
  };
  modal: {
    location: string;
    completion: string;
    client: string;
    overview: string;
    specs: string;
    galleryTitle: string;
    footerText: string;
    inquireBtn: string;
  };
  footer: {
    headline: string;
    headlineBold: string;
    sitemap: string;
    contacts: string;
    downloadPdf: string;
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  EN: {
    nav: {
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      partners: 'Partners',
      contact: 'Contact',
      startProject: 'Start a Project',
      downloadCv: 'Official Catalog PDF',
      subtitle: 'ALBANIA • SINCE 2008'
    },
    hero: {
      badge: 'ALBANIA INFRASTRUCTURE & CONSTRUCTION LEADERS',
      headlineMain: 'BUILDING WHAT',
      headlineAccent: 'COMES NEXT.',
      companyName: 'CAPO CONSTRUCTION',
      subheadline: 'Construction, infrastructure and engineering solutions built with precision, experience and a vision for the future.',
      btnProjects: 'Explore Our Projects',
      btnContact: 'Contact Us',
      btnDownloadCatalog: 'Download Official PDF CV',
      stat1: 'Years Experience',
      stat2: 'Scaffolding Fleet',
      stat3: 'Major Infrastructure',
      stat4: 'Active Operations',
      stat4Value: 'Since 2008'
    },
    about: {
      tag: '01 / ABOUT CAPO CONSTRUCTION',
      titleMain: 'Built on Experience.',
      titleAccent: 'Designed for the Future.',
      para1: 'CAPO CONSTRUCTION is a premier Albanian construction and engineering enterprise established in 2008, with active civil infrastructure and residential operations available in every territory of Albania.',
      para2: 'Our team brings extensive expertise in heavy structural rebar binding, post-tensioned concrete casting, high-altitude mountain road cuts, municipal water treatment facilities, panoramic highway tunnels, and over 15,000 m² of certified system facade scaffolding. We maintain long-term strategic alliances with major contractors including 2T, Albstar, Gener2 & TAP, Classic Konstruksion, Bregu SH.A, PEVLAKU, BIGTAM, and 5D Konstruksion.',
      niptTag: 'AVAILABLE IN EVERY TERRITORY OF ALBANIA',
      specializationsTitle: 'CORE CAPABILITIES & SECTORS',
      specializations: [
        'Vlora International Airport terminal scaffolding',
        'Tirana-Elbasan Panoramic Tunnel framing',
        'Rolling Hills luxury villas & estates',
        'Qukës - Qafë Plloçë highway retaining walls & bridges',
        'Pogradec, Gramsh, Korçë & Shkodër wastewater stations',
        'Lin - Pogradec highway bridges & underpasses',
        'Gusmar - Kuç - Tepelenë alpine highway & culverts',
        '15,000 m² certified system facade scaffolding fleet',
        '10,000 m² timber & 500 m² metal structural formwork'
      ],
      inventoryTitle: 'COMPANY MATERIAL & FLEET INVENTORY',
      exploreCapabilities: 'Explore Technical Capabilities',
      imageTitle: 'Rolling Hills Luxury Complex',
      imageSubtitle: 'Architectural Cantilever & Structural Frame',
      stats: [
        { value: '25+', label: 'Years of Engineering Experience', highlight: 'Quarter century of proven execution' },
        { value: '15,000 m²', label: 'Scaffolding System Capacity', highlight: 'Modern European certified scaffolding' },
        { value: '50+', label: 'Major Infrastructure Projects', highlight: 'Roads, bridges, tunnels & civil works' },
        { value: 'Since 2008', label: 'Active Commercial Operations', highlight: 'Available in every territory of Albania' }
      ]
    },
    projects: {
      tag: '02 / PORTFOLIO EXHIBIT FROM OFFICIAL CV',
      titleMain: 'SELECTED',
      titleAccent: 'PROJECTS.',
      desc: 'Authentic project gallery extracted directly from Capo Construction’s official catalog, featuring real photos of Vlora Airport, Panoramic Tunnel, Rolling Hills Villas, Qukës-Qafë Plloçë highway, and wastewater pumping stations.',
      categories: {
        all: 'All',
        infra: 'Infrastructure',
        residential: 'Residential & Villas',
        roads: 'Roads & Bridges',
        tunnels: 'Tunnels & Structural Works'
      },
      inspectBtn: 'Inspect Specs & Photo Gallery'
    },
    services: {
      tag: '03 / CAPABILITIES & EQUIPMENT FLEET',
      titleMain: 'WHAT WE',
      titleAccent: 'BUILD.',
      desc: 'End-to-end civil engineering, high-rise residential construction, alpine highway corridors, heavy structural concrete, and 15,000 m² of specialized system scaffolding.',
      inventoryTag: 'EQUIPMENT & MATERIAL FLEET',
      inventoryTitle: 'Official Capo Construction Equipment Inventory',
      scaffoldingTag: 'SPECIALIZED FLEET & EQUIPMENT',
      scaffoldingTitle: '15,000 m² Facade Scaffolding Fleet',
      scaffoldingDesc: 'We own and deploy over 15,000 m² of modern European-certified system scaffolding for high-rise commercial structures, Vlora International Airport, 5D Konstruksion 5-tower complex in Tirana, and regional facade restorations.',
      scaffoldingBtn: 'Request Fleet & Equipment Quote',
      items: [
        {
          number: '01',
          title: 'Residential Construction',
          description: 'High-end apartment towers, multi-family housing complexes, and modern urban living spaces engineered with precision structural frames and acoustic comfort.',
          features: ['High-density residential towers', 'Seismic-resistant C30/37 structural frames', 'Subterranean multi-level garages', 'Turnkey interior structural finishes']
        },
        {
          number: '02',
          title: 'Villa Construction',
          description: 'Bespoke modern luxury residences featuring cantilevered concrete architecture, expansive floor-to-ceiling glazing, and seamless indoor-outdoor integration.',
          features: ['Custom architectural cantilevers', 'Smart thermal isolation envelopes', 'Infinity pool structural engineering', 'Private underground wellness suites']
        },
        {
          number: '03',
          title: 'Infrastructure',
          description: 'Large-scale civil engineering projects including municipal water treatment facilities, flood prevention barriers, and public utility networks.',
          features: ['Wastewater treatment plants', 'Stormwater management systems', 'Heavy earthworks & foundation piling', 'Municipal utility infrastructure']
        },
        {
          number: '04',
          title: 'Roads & Bridges',
          description: 'Highway corridors, alpine mountain roads, cable-stayed and concrete viaduct bridges engineered for heavy load endurance and extreme weather resilience.',
          features: ['Multi-lane highway construction', 'Concrete viaducts & bridge piers', 'Slope stabilization & rock anchoring', 'Anti-skid high-performance asphalt']
        },
        {
          number: '05',
          title: 'Concrete & Reinforcement',
          description: 'Specialized structural concrete pouring, post-tensioning, heavy steel rebar mesh fabrication, and high-strength load-bearing foundation slabs.',
          features: ['Precision formwork engineering', 'Heavy rebar binding & cage assembly', 'High-strength structural pour mixes', 'Seismic damper slab integrations']
        },
        {
          number: '06',
          title: 'Facade Scaffolding',
          description: '15,000+ m² modular facade scaffolding capacity with rapid assembly, safety-certified framework, and high-altitude restoration support.',
          features: ['15,000 m² system scaffolding capacity', 'Heavy-duty exterior working platforms', 'Safety net & debris containment', 'Multi-story structural restoration access']
        },
        {
          number: '07',
          title: 'Tunnels & Structural Works',
          description: 'Subterranean transport tunnels, portal framing, underground galleries, and heavy cavern excavations built using modern NATM tunneling standards.',
          features: ['Tunnel portal excavations', 'Shotcrete & rock bolt anchoring', 'Underground drainage galleries', 'Deep foundation retaining walls']
        },
        {
          number: '08',
          title: 'General Construction Services',
          description: 'End-to-end general contracting, project management, site supervision, equipment fleet logistics, and technical engineering consultation.',
          features: ['Complete EPC general contracting', 'Heavy machinery fleet deployment', 'Site safety & quality assurance', 'Engineering consulting & cost auditing']
        }
      ]
    },
    partners: {
      tag: '05 / STRATEGIC ECOSYSTEM FROM OFFICIAL CATALOG',
      titleMain: 'TRUSTED THROUGH',
      titleAccent: 'EXPERIENCE.',
      desc: 'Longterm partnerships with Albania’s leading infrastructure authorities, general contractors, energy partners, and real estate developers.'
    },
    statement: {
      line1: "WE DON'T JUST",
      line2: 'BUILD STRUCTURES.',
      line3: 'WE BUILD WHAT LASTS.',
      tagline: 'CAPO CONSTRUCTION • ALBANIA • INFRASTRUCTURE EXCELLENCE'
    },
    contact: {
      tag: '06 / PROJECT INQUIRY & CONTACT',
      titleMain: "LET'S BUILD",
      titleAccent: 'SOMETHING GREAT.',
      desc: 'Whether you are initiating a major public infrastructure tender, high-rise residential complex, or require specialized 15,000 m² scaffolding deployment, our engineering team is ready to consult across all of Albania.',
      headquarters: 'Albania',
      phone: '+355 69 417 2942 / +355 69 374 8971',
      email: 'capoconstruction@yahoo.com',
      nipt: 'Available in every territory of Albania',
      regionsTitle: 'Territorial Operations & Presence',
      form: {
        name: 'Full Name *',
        namePlaceholder: 'e.g. Eng. Arben Hoxha',
        email: 'Email Address *',
        emailPlaceholder: 'arben@company.al',
        phone: 'Phone Number',
        phonePlaceholder: '069 ...',
        company: 'Company / Organization',
        companyPlaceholder: 'Engineering Firm / Developer',
        sector: 'Project Sector',
        desc: 'Project Description & Timeline',
        descPlaceholder: 'Share estimated location, built-up area (m²), structural requirements...',
        submitBtn: 'Start a Project',
        sectors: {
          infra: 'Municipal Infrastructure & Water',
          roads: 'Roads, Bridges & Alpine Corridors',
          residential: 'Residential Towers & Multi-Family',
          villas: 'Luxury Villa & Estate Construction',
          concrete: 'Heavy Concrete & Rebar Reinforcement',
          scaffolding: '15,000 m² Facade Scaffolding Fleet',
          tunnels: 'Subterranean Tunnels & Structural Works',
          general: 'General Construction Services'
        },
        successTitle: 'Inquiry Received',
        successDesc: 'Thank you for contacting CAPO CONSTRUCTION. Our senior engineering team will review your specifications and get in touch within 24 hours.',
        anotherInquiry: 'Submit Another Inquiry'
      }
    },
    modal: {
      location: 'Location',
      completion: 'Completion',
      client: 'Client Partner',
      overview: 'Project Overview & CV Details',
      specs: 'Key Technical Specifications',
      galleryTitle: 'Official Site Photos',
      footerText: 'CAPO CONSTRUCTION • ALBANIA',
      inquireBtn: 'Inquire Similar Project'
    },
    footer: {
      headline: 'Building with experience.',
      headlineBold: 'Building for the future.',
      sitemap: 'Sitemap',
      contacts: 'Direct Contacts',
      downloadPdf: 'Download Official Catalog (PDF)',
      rights: 'CAPO CONSTRUCTION SH.P.K. All rights reserved. Available in every territory of Albania.',
      backToTop: 'Back to top'
    }
  },
  AL: {
    nav: {
      projects: 'Projektet',
      services: 'Shërbimet',
      about: 'Rreth Nesh',
      partners: 'Partnerët',
      contact: 'Kontakt',
      startProject: 'Nis një Projekt',
      downloadCv: 'Katalogu Zyrtar (PDF)',
      subtitle: 'SHQIPËRI • QË NGA 2008'
    },
    hero: {
      badge: 'LIDERË TË INFRASTRUKTURËS DHE NDËRTIMIT NË SHQIPËRI',
      headlineMain: 'NDËRTOJMË',
      headlineAccent: 'TË ARDHMEN.',
      companyName: 'CAPO CONSTRUCTION',
      subheadline: 'Zgjidhje ndërtimi, infrastrukture dhe inxhinierie të ndërtuara me precizion, përvojë dhe një vizion të qartë për të ardhmen.',
      btnProjects: 'Eksploro Projektet Tona',
      btnContact: 'Na Kontaktoni',
      btnDownloadCatalog: 'Shkarko Katalogun Zyrtar (PDF CV)',
      stat1: 'Vjet Përvojë',
      stat2: 'Kapacitet Skelash',
      stat3: 'Projekte Infrastrukture',
      stat4: 'Operacione me Inovacion',
      stat4Value: 'Që nga 2008'
    },
    about: {
      tag: '01 / RRETH CAPO CONSTRUCTION',
      titleMain: 'E ndërtuar mbi përvojë.',
      titleAccent: 'E projektuar për të ardhmen.',
      para1: 'Capo Construction ka nisur aktivitetin e ndërtimit në vitin 2008, duke u zhvilluar si një kompani e besueshme dhe e specializuar, e disponueshme në çdo territor të Shqipërisë.',
      para2: 'Me një qasje profesionale dhe përkushtim ndaj cilësisë, kemi ndërtuar një histori të suksesshme me mbi 15,000 m² skeleri fasade të certifikuar, 10,000 m² armaturë druri, 500 m² armaturë metalike dhe 200 m² armaturë plastike. Ruajmë bashkëpunime strategjike afatgjata me kompanitë kryesore si 2T, Albstar, Gener2 & TAP, Classic Konstruksion, Bregu SH.A, PEVLAKU, BIGTAM dhe 5D Konstruksion.',
      niptTag: 'E DISPONUESHME NË ÇDO TERRITOR TË SHQIPËRISË',
      specializationsTitle: 'KAPACITETET KRYESORE DHE SEKTORËT',
      specializations: [
        'Skeleri fasade për ndërtesat e Aeroportit të Vlorës',
        'Tuneli Panoramik Tiranë-Elbasan (Autostrada Mamel)',
        'Vilat luksoze Rolling Hills (Sauk & Korçë)',
        'Segmenti rrugor Qukës - Qafë Plloçë (mure, ura & bokse)',
        'Stacionet e pompimit Pogradec, Gramsh, Korçë & Shkodër',
        'Rruga Lin - Pogradec (nënkalime, ura & bordura)',
        'Rruga Gusmar - Kuç - Tepelenë & Depo Uji Nivicë',
        '15,000 m² skeleri fasade me standarde europiane',
        '10,000 m² armaturë druri & 500 m² armaturë metalike'
      ],
      inventoryTitle: 'INVENTARI I MATERIALEVE DHE FLOTËS SË MAKINERIVE',
      exploreCapabilities: 'Eksploro Kapacitetet Teknike',
      imageTitle: 'Kompleksi i Vilave Rolling Hills',
      imageSubtitle: 'Strukturë Betoni dhe Fasadë Xhami',
      stats: [
        { value: '25+', label: 'Vjet Përvojë Inxhinierike', highlight: 'Çerek shekulli ekzekutim i provuar' },
        { value: '15,000 m²', label: 'Kapacitet Sisteme Skelash', highlight: 'Skela me certifikim europian' },
        { value: '50+', label: 'Projekte të Mëdha Infrastrukturore', highlight: 'Rrugë, ura, tunele dhe vepra civile' },
        { value: 'Që nga 2008', label: 'Operacione Aktive Tregtare', highlight: 'E disponueshme në çdo territor të Shqipërisë' }
      ]
    },
    projects: {
      tag: '02 / EKSPozita e PROJEKTEVE NGA CV ZYRARE',
      titleMain: 'PROJEKTET E',
      titleAccent: 'ZGJEDHURA.',
      desc: 'Galeri autentike e nxjerrë direkt nga katalogu zyrtar i Capo Construction, me fotografi reale nga Aeroporti i Vlorës, Tuneli Panoramik, Vilat Rolling Hills, Rruga Qukës-Qafë Plloçë dhe stacionet e pompimit.',
      categories: {
        all: 'Të gjitha',
        infra: 'Infrastrukturë',
        residential: 'Banim & Vila',
        roads: 'Rrugë & Ura',
        tunnels: 'Tunele & Punime Strukturore'
      },
      inspectBtn: 'Shiko Specifikimet & Galerinë e Fotove'
    },
    services: {
      tag: '03 / KAPACITETET DHE FLOTA E MATERIALEVE',
      titleMain: 'ÇFARË',
      titleAccent: 'NDËRTOJMË.',
      desc: 'Inxhinieri e plotë civile, ndërtim godinash rezidenciale, rrugë kombëtare alpine, punime betoni të rëndë dhe 15,000 m² flotë skelash të specializuara.',
      inventoryTag: 'INVENTARI I MATERIALEVE DHE PAJISJEVE',
      inventoryTitle: 'Inventari Zyrtar i Materialeve Capo Construction',
      scaffoldingTag: 'FLOTË DHE PAJISJE TË SPECIALIZUARA',
      scaffoldingTitle: 'Flotë Skelash Fasade prej 15,000 m²',
      scaffoldingDesc: 'Zotërojmë dhe përdorim mbi 15,000 m² skela me sistem europian të certifikuar për Aeroportin e Vlorës, 5D Konstruksion (5 pallate në Tiranë), Pogradec, Elbasan dhe Librazhd.',
      scaffoldingBtn: 'Kërko Ofertë për Skela & Pajisje',
      items: [
        {
          number: '01',
          title: 'Ndërtim Banesash & Soliterë',
          description: 'Kulla banimi luksoze, komplekse rezidenciale dhe hapësira moderne urbane të ndërtuara me precizion strukturor dhe izolim akustik.',
          features: ['Kulla banimi me densitet të lartë', 'Korniza strukturore antisizmike C30/37', 'Garazhe nëntokësore me shumë nivele', 'Përfundime strukturore me çelës në dorë']
        },
        {
          number: '02',
          title: 'Ndërtim Vilash Luksoze',
          description: 'Rezidenca private luksoze me arkitekturë me konzola betoni, dritare te mëdha xhami dhe integrim të përsosur me natyrën.',
          features: ['Konzola betoni arkitekturore', 'Izolim termik i mençur', 'Inxhinieri e pishinave me pamje pafundësi', 'Suita nëntokësore relaksi']
        },
        {
          number: '03',
          title: 'Infrastrukturë Civile',
          description: 'Projekte të mëdha inxhinierike përfshirë impiantet e trajtimit të ujërave të ndotura, mbrojtjen nga përmbytjet dhe rrjetet publike.',
          features: ['Impiante të trajtimit të ujërave të ndotura', 'Sisteme drenazhi të ujërave me shira', 'Gërmime të rënda dhe shtylla themeli', 'Infrastrukturë publike ujësjellës-kanalizime']
        },
        {
          number: '04',
          title: 'Rrugë & Ura',
          description: 'Korridore autostradash, rrugë alpine malore, ura me varëse çeliku dhe viadukte betoni të projektuara për ngarkesa të rënda.',
          features: ['Ndërtim autostradash me shumë kalime', 'Viadukte betoni dhe këmbë urash', 'Stabilizim skarpatesh dhe ankorim me shkëmb', 'Asfalt me performancë të lartë kundër rrëshqitjes']
        },
        {
          number: '05',
          title: 'Beton & Armaturë',
          description: 'Hedhje e betonit strukturor, post-tensione, fabrikim me rrjetë hekuri dhe pllaka themelesh me rezistencë të lartë.',
          features: ['Formallëqe inxhinierike precize', 'Thurje e armatureve të rënda', 'Përzierje betoni me rezistencë të lartë', 'Integrim i amortizuesve sizmikë']
        },
        {
          number: '06',
          title: 'Skela Fasade',
          description: 'Kapacitet mbi 15,000 m² skela fasade modulare me montim të shpejtë, siguri të certifikuar dhe mbështetje për punime në lartësi.',
          features: ['Kapacitet 15,000 m² skela sisteme', 'Platforma pune me rezistencë të lartë', 'Rrjeta sigurie kundër rënies', 'Akses për restaurim fasadash me shumë kate']
        },
        {
          number: '07',
          title: 'Tunele & Punime Strukturore',
          description: 'Tunele transporti nëntokësor, portalet e tuneleve, galeri drenazhi dhe gërmime të rënda të ndërtuara sipas standardeve NATM.',
          features: ['Gërmime të portaleve të tuneleve', 'Ankorim me betonsprit dhe shufra shkëmbi', 'Galeri nëntokësore drenazhi', 'Mure mbajtës themelesh të thella']
        },
        {
          number: '08',
          title: 'Shërbime të Përgjithshme Ndërtimi',
          description: 'Kontraktime të përgjithshme EPC, menaxhim projekti, mbikëqyrje kantieri, logjistikë makinerish dhe konsulencë inxhinierike.',
          features: ['Kontraktim i plotë general EPC', 'Përdorim i flotës së makinerive të rënda', 'Siguria në kantier dhe kontroll cilësie', 'Konsulencë inxhinierike dhe auditim kostoje']
        }
      ]
    },
    partners: {
      tag: '05 / EKOSISTEMI STRATEGJIK NGA CV ZYRTARE',
      titleMain: 'E BESUAR PËRMES',
      titleAccent: 'PËRVOJËS.',
      desc: 'Bashkëpunime afatgjata me autoritetet kryesore të infrastrukturës në Shqipëri, sipërmarrës të përgjithshëm dhe zhvillues rezidencialë.'
    },
    statement: {
      line1: 'NE NUK NDËRTOJMË',
      line2: 'VETËM STRUKTURA.',
      line3: 'NE NDËRTOJMË ATË QË ZGJAT.',
      tagline: 'CAPO CONSTRUCTION • SHQIPËRI • EKSOLENCË NË INFRASTRUKTURË'
    },
    contact: {
      tag: '06 / KËRKESË PËR PROJEKT & KONTAKT',
      titleMain: 'LE TË NDËRTOJMË',
      titleAccent: 'ÇFARË TË MADHE.',
      desc: 'Pavarësisht nëse po nisni një tender të madh infrastrukture publike, kompleks banimi me shumë kate ose keni nevojë për përdorim skelash prej 15,000 m², ekipi ynë inxhinierik është gati t’ju konsultojë në çdo territor të Shqipërisë.',
      headquarters: 'Shqipëri',
      phone: '+355 69 417 2942 / +355 69 374 8971',
      email: 'capoconstruction@yahoo.com',
      nipt: 'E disponueshme në çdo territor të Shqipërisë',
      regionsTitle: 'Prania dhe Operacionet Territoriale',
      form: {
        name: 'Emri i Plotë *',
        namePlaceholder: 'p.sh. Ing. Arben Hoxha',
        email: 'Adresa Email *',
        emailPlaceholder: 'arben@kompania.al',
        phone: 'Numri i Telefonit',
        phonePlaceholder: '069 ...',
        company: 'Kompania / Organizata',
        companyPlaceholder: 'Firma Inxhinierike / Zhvillues',
        sector: 'Sektori i Projektit',
        desc: 'Përshkrimi i Projektit & Kohëzgjatja',
        descPlaceholder: 'Ndani vendndodhjen e parashikuar, sipërfaqen e ndërtimit (m²), kërkesat strukturore...',
        submitBtn: 'Nis një Projekt',
        sectors: {
          infra: 'Infrastrukturë Publike & Ujësjellës',
          roads: 'Rrugë, Ura & Korridore Alpine',
          residential: 'Kulla Banimi & Komplekse',
          villas: 'Ndërtim Vilash Luksoze & Rezidenca',
          concrete: 'Beton i Rëndë & Armaturë Hekuri',
          scaffolding: 'Flotë Skelash Fasade 15,000 m²',
          tunnels: 'Tunele Nëntokësore & Punime Strukturore',
          general: 'Shërbime të Përgjithshme Ndërtimi'
        },
        successTitle: 'Kërkesa u Pranua',
        successDesc: 'Faleminderit që kontaktuat CAPO CONSTRUCTION. Ekipi ynë i inxhinierisë do të shqyrtojë specifikimet tuaja dhe do t\'ju kontaktojë brenda 24 orëve.',
        anotherInquiry: 'Dërgo një Kërkesë Tjetër'
      }
    },
    modal: {
      location: 'Vendndodhja',
      completion: 'Përfundimi',
      client: 'Partneri Klient',
      overview: 'Përmbledhja e Projektit & Detajet nga CV',
      specs: 'Specifikimet Kryesore Teknike',
      galleryTitle: 'Fotografitë Reale nga Kantieri',
      footerText: 'CAPO CONSTRUCTION • SHQIPËRI',
      inquireBtn: 'Kërko Projekt të Ngjashëm'
    },
    footer: {
      headline: 'Ndërtim me përvojë.',
      headlineBold: 'Ndërtim për të ardhmen.',
      sitemap: 'Harta e Faqes',
      contacts: 'Kontaktet Direkte',
      downloadPdf: 'Shkarko Katalogun Zyrtar (PDF)',
      rights: 'CAPO CONSTRUCTION SH.P.K. Të gjitha të drejtat të rezervuara. E disponueshme në çdo territor të Shqipërisë.',
      backToTop: 'Kthehu lart'
    }
  }
};
