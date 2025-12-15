// Portfolio Data - Struttura organizzata come masterPortfolio
// Mantiene tutte le informazioni di Riccardo con struttura professionale

export const personalInfo = {
  name: 'Riccardo Zozzolotto',
  title: 'AI Developer & Data Analyst',
  location: 'Treviso, Italia',
  email: 'rzozzolotto@gmail.com',
  phone: '+39 376 238 1731',
  age: '21 anni',
  experience: '2+ anni',
  education: 'ITS Digital Academy + Liceo Scientifico',
  description: 'Trasformo dati e codice in soluzioni intelligenti e funzionali. Specializzato in Machine Learning, Data Analysis e sviluppo di applicazioni data-driven.',
  resumeLink: '#',
  socialLinks: {
    github: 'https://github.com/zozzy04',
    linkedin: '#',
    email: 'mailto:rzozzolotto@gmail.com'
  }
};

export const aboutData = {
  title: 'Chi Sono',
  subtitle: 'Conosciamoci meglio',
  sections: [
    {
      icon: 'User',
      title: 'Chi Sono',
      description: 'Sono Riccardo, un giovane sviluppatore AI di 21 anni appassionato di tecnologia e innovazione. Mi piace trasformare idee complesse in soluzioni semplici ed efficaci.'
    },
    {
      icon: 'Rocket',
      title: 'Il Mio Lavoro',
      description: 'Lavoro come AI Developer & Data Analyst presso Enernext, dove sviluppo soluzioni intelligenti e analisi dati per ottimizzare i processi aziendali.'
    },
    {
      icon: 'Code',
      title: 'Le Mie Competenze',
      description: 'Mi occupo di analisi, automazione e sviluppo con tecnologie come Python, Power BI, Qlik, Knime, SQL, React/Vite, Orange e altri strumenti moderni.'
    }
  ],
  personalDetails: [
    { icon: 'MapPin', label: 'Località', value: 'Treviso, Italia' },
    { icon: 'Clock', label: 'Età', value: '21 anni' },
    { icon: 'School', label: 'Formazione', value: 'ITS Digital Academy + Liceo Scientifico' },
    { icon: 'Briefcase', label: 'Esperienza', value: '2+ anni' }
  ],
  interests: [
    'AI Development',
    'Data Analysis',
    'Machine Learning',
    'Web Development',
    'Automation',
    'Innovation'
  ]
};

export const skillsData = {
  title: 'Competenze',
  subtitle: 'Le mie competenze tecniche e formative',
  education: [
    {
      icon: 'School',
      title: 'ITS Digital Academy',
      link: 'https://itsdigitalacademy.com',
      location: 'Treviso, Italia',
      period: '2023 - 2025',
      qualification: 'AI Developer & Data Analyst',
      description: 'Corso biennale specializzato in sviluppo di applicazioni AI e analisi dati. Focus su Python, Machine Learning, Data Visualization e tecnologie moderne.'
    },
    {
      icon: 'GraduationCap',
      title: 'Liceo Scientifico Antonio Scarpa',
      link: 'https://www.antonioscarpa.edu.it',
      location: 'Motta di Livenza, Italia',
      period: '2018 - 2023',
      qualification: 'Diploma di Liceo Scientifico',
      description: 'Percorso di studi scientifico con focus su matematica, fisica, scienze e informatica. Sviluppo di competenze logiche, analitiche e problem solving.'
    }
  ],
  technical: [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'Power BI',
    'Qlik',
    'SQL',
    'Git',
    'Vite',
    'Knime',
    'HTML5',
    'CSS3',
    'Machine Learning',
    'TensorFlow',
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'Orange'
  ]
};

export const experienceData = {
  title: 'Esperienze',
  subtitle: 'Il mio percorso professionale',
  experiences: [
    {
      icon: 'Brain',
      title: 'AI Developer Trainee',
      company: 'Enernext',
      companyLink: 'https://enernext.it',
      location: 'Italia',
      period: 'Ottobre 2025 - Presente',
      description: 'Tirocinio come AI Developer Trainee presso Enernext, dove sviluppo app e software con AI applicata per soluzioni innovative nel settore energetico.',
      technologies: ['AI/ML', 'Python', 'React', 'JavaScript', 'Machine Learning']
    },
    {
      icon: 'Brain',
      title: 'Stagista',
      company: 'EsPiù S.r.l. Società Benefit',
      companyLink: 'https://espiu.it',
      location: 'Treviso, Italia',
      period: 'Maggio 2025 - Giugno 2025',
      description: 'Stage presso EsPiù nell\'Innovation Hub, dove mi sono occupato di sviluppo di soluzioni AI e analisi dati per ottimizzare i processi aziendali.',
      technologies: ['Python', 'Power BI', 'Qlik', 'Knime', 'SQL', 'React']
    },
    {
      icon: 'Briefcase',
      title: 'Manovale',
      company: 'OPITERGIUM VINI Società Agricola Cooperativa',
      companyLink: 'https://www.cantinaoderzo.it/',
      location: 'Oderzo, Veneto, Italia',
      period: 'Agosto 2024 - Ottobre 2024',
      description: 'Lavoro stagionale a tempo pieno come manovale in cantina, occupandomi della produzione e lavorazione del vino.',
      technologies: []
    },
    {
      icon: 'Briefcase',
      title: 'Manovale',
      company: 'OPITERGIUM VINI Società Agricola Cooperativa',
      companyLink: 'https://www.cantinaoderzo.it/',
      location: 'Oderzo, Veneto, Italia',
      period: 'Settembre 2024 - Ottobre 2024',
      description: 'Stagione in cantina come manovale, supportando le attività di produzione vinicola durante il periodo della vendemmia.',
      technologies: []
    },
    {
      icon: 'Briefcase',
      title: 'Magazziniere',
      company: 'Eraldo Store',
      companyLink: 'https://eraldo.store',
      location: 'Ceggia, Veneto, Italia',
      period: 'Marzo 2024 - Giugno 2024',
      description: 'Lavoro a tempo pieno come magazziniere, gestendo la movimentazione merci, l\'organizzazione del magazzino e le operazioni logistiche.',
      technologies: []
    },
    {
      icon: 'Briefcase',
      title: 'Manovale',
      company: 'OPITERGIUM VINI Società Agricola Cooperativa',
      companyLink: 'https://www.cantinaoderzo.it/',
      location: 'Oderzo, Veneto, Italia',
      period: 'Agosto 2023 - Settembre 2023',
      description: 'Lavoro stagionale come manovale in cantina durante il periodo della vendemmia, supportando le operazioni di produzione vinicola.',
      technologies: []
    },
    {
      icon: 'Briefcase',
      title: 'Stagista',
      company: 'Gruppo Geromin',
      companyLink: 'https://www.gruppogeromin.com/it',
      location: 'San Stino di Livenza, Veneto, Italia',
      period: 'Luglio 2021 - Agosto 2021',
      description: 'Stage part-time presso Gruppo Geromin, acquisendo esperienza nel settore aziendale e supportando le attività operative.',
      technologies: []
    }
  ]
};

export const projectsData = {
  title: 'Progetti',
  subtitle: 'I miei lavori più recenti e significativi',
  projects: [
    {
      title: 'Portfolio Personale',
      category: 'web',
      description: 'Portfolio professionale sviluppato con React e Vite. Design moderno e responsive con animazioni fluide, dark mode e ottimizzazioni SEO.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript', 'GSAP'],
      status: 'completato',
      liveUrl: 'https://riccardozozzolotto.com',
      codeUrl: 'https://github.com/zozzy04/portfolio-riccardo',
      image: '/project-portfolio.jpg'
    },
    {
      title: 'Web App Analisi Fatture Energetiche',
      category: 'data',
      description: 'Web application per l\'analisi e l\'estrazione dati con catalogazione e archiviazione da fatture energetiche e del gas. Sistema completo con inserimento dati diretto nel database.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Power BI', 'API REST'],
      status: 'in-sviluppo',
      image: '/project-energy.jpg'
    }
  ],
  filters: [
    { id: 'all', label: 'Tutti' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'web', label: 'Web Development' }
  ]
};

export const contactData = {
  title: 'Contatti',
  subtitle: 'Contattami per collaborazioni e opportunità',
  info: [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'rzozzolotto@gmail.com',
      link: 'mailto:rzozzolotto@gmail.com'
    },
    {
      icon: 'Phone',
      title: 'Telefono',
      value: '+39 376 238 1731',
      link: 'tel:+393762381731'
    },
    {
      icon: 'MapPin',
      title: 'Località',
      value: 'Treviso, Italia',
      link: 'https://maps.google.com/?q=Treviso,Italia'
    }
  ],
  availability: 'Sono sempre interessato a nuove opportunità e collaborazioni.'
};

export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

