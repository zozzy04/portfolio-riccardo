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
      description: 'Lavoro come AI Developer & Data Analyst nell\'Innovation Hub di Espiù S.R.L., dove sviluppo soluzioni intelligenti e analisi dati per ottimizzare i processi aziendali.'
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
      period: '2025 - Presente',
      description: 'Tirocinio come AI Developer Trainee presso Enernext, dove sviluppo app e software con AI applicata per soluzioni innovative nel settore energetico.',
      technologies: ['AI/ML', 'Python', 'React', 'JavaScript', 'Machine Learning']
    },
    {
      icon: 'Brain',
      title: 'AI Developer & Data Analyst',
      company: 'Espiù S.R.L.',
      companyLink: 'https://espiu.it',
      location: 'Treviso, Italia',
      period: 'Maggio 2025 - Settembre 2025',
      description: 'Lavoro nell\'Innovation Hub di Espiù, dove mi occupo di sviluppo di soluzioni AI e analisi dati per ottimizzare i processi aziendali.',
      technologies: ['Python', 'Power BI', 'Qlik', 'Knime', 'SQL', 'React']
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

