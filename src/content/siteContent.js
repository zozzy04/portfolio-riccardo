export const siteContent = {
  en: {
    nav: [
      { label: "About",   href: "#about" },
      { label: "Career",  href: "#career" },
      { label: "Blog",    href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],

    hero: {
      available:  "Available for work",
      nameLines:  ["Riccardo", "Zozzolotto"],
      role:       "AI Developer & Data Specialist",
      location:   "Venice, Italy",
      timezone:   "GMT+1",
      scrollHint: "Scroll",
    },

    about: {
      label: "About me",
      heading: ["Building AI", "that survives", "production."],
      bio: "I build LLM systems that work in production: from data ingestion to monitoring dashboards. I think in data, speak in prototypes, and obsess over the unglamorous details — eval pipelines, cost control, and real maintainability for internal teams.",
      stats: [
        { value: "1+", label: "Years experience" },
        { value: "5+", label: "Production systems" },
        { value: "4",  label: "LLM frameworks" },
      ],
      tags: ["LLM Systems", "OCR + NLP", "Data Analytics", "Full-Stack", "Automation"],
      card: {
        name:     "Riccardo Zozzolotto",
        role:     "AI Developer",
        location: "Venice, Italy",
        status:   "Available",
      },
    },

    career: {
      label: "Professional career",
      roles: [
        {
          index:   "01",
          company: "Enernext S.r.l.",
          href:    "https://www.enernext.it/",
          role:    "Software Developer Intern",
          period:  "Oct 2025 — Present",
          location: "Oderzo, Italy",
          tags:    ["AI Integration", "Python", "Data Systems", "Chatbot"],
          bullets: [
            "Software development for AI-powered energy management systems",
            "Designed multi-level corporate chatbot architecture",
            "Built data storage and extraction pipelines",
          ],
        },
        {
          index:   "02",
          company: "Espiù S.r.l.",
          href:    "https://www.espiu.it/",
          role:    "Tech Intern",
          period:  "Jul 2025 — Aug 2025",
          location: "Oderzo, Italy",
          tags:    ["Web App", "AI", "Automation"],
          bullets: [
            "Built a web application integrating AI to automate internal business processes",
            "IT support and infrastructure",
          ],
        },
        {
          index:   "03",
          company: "ITS Digital Academy Mario Volpato",
          href:    "https://itsdigitalacademy.com/",
          role:    "Post-diploma — AI Developer & Data Analyst",
          period:  "Oct 2024 — Present",
          location: "Mestre, Italy",
          tags:    ["Machine Learning", "Data Science", "Deep Learning", "AI Generativa"],
          bullets: [
            "Full curriculum in supervised/unsupervised learning, data science, and generative AI",
            "Modules: Statistical Learning, Deep Learning, Big Data Computing, Data Visualization",
          ],
        },
        {
          index:   "04",
          company: "I.S.I.S.S. Antonio Scarpa",
          href:    "https://www.antonioscarpa.edu.it/",
          role:    "High School Diploma",
          period:  "2018 — 2023",
          location: "Motta di Livenza, Italy",
          tags:    ["Education"],
          bullets: [],
        },
      ],
    },

    textFill: {
      text: "I help companies ship AI that actually survives production — not demos, not prototypes, but systems with real eval pipelines, cost control, and maintainability the team can own.",
    },

    blog: {
      label: "Blog",
      heading: "Writing",
      posts: [
        {
          index:    "01",
          date:     "May 2026",
          title:    "Building a Chatbot That Knows What It Doesn't Know",
          excerpt:  "Most chatbots answer questions. Ours has to answer the right questions — and know when to escalate. At Enernext, the goal is an internal assistant that navigates complex energy documentation: supplier contracts, ARERA regulations, tariff structures. A flat LLM call isn't enough.",
          readTime: "4 min read",
          slug:     "eshub-chatbot",
          body: [
            "Most chatbots answer questions. Ours has to answer the right questions — and know when to escalate.",
            "At Enernext, the goal is an internal assistant that navigates complex energy documentation: supplier contracts, ARERA regulations, tariff structures. A flat LLM call isn't enough. The architecture we're converging on: Python, Claude as reasoning engine, Qdrant running locally as vector store.",
            "The \"multi-level\" part isn't a feature — it's a necessity. Retrieval handles the factual layer. A second prompt pass handles ambiguity. Anything outside the knowledge base gets flagged rather than hallucinated.",
            "Still in development. But the constraints are already teaching more than any tutorial.",
          ],
        },
        {
          index:    "02",
          date:     "Mar 2026",
          title:    "Billdex: Turning Italian Energy Bills Into Structured Data",
          excerpt:  "Nine suppliers, nine naming conventions, nine ways to write the same corrispettivo. Billdex is a pipeline that ingests Italian utility bills, extracts structured fields automatically, and outputs clean, comparable data. The core challenge isn't OCR — it's normalization.",
          readTime: "5 min read",
          slug:     "billdex",
          body: [
            "Energy bills are not standardized. Nine suppliers, nine naming conventions, nine ways to write the same corrispettivo.",
            "Billdex was born out of that frustration. The idea: a pipeline that ingests Italian utility bills — electricity and gas — extracts structured fields automatically, and outputs clean, comparable data. No manual copy-paste, no spreadsheet archaeology.",
            "The core challenge isn't OCR. It's normalization. Getting \"Quota Fissa Distribuzione\" and \"QF Distr.\" to resolve to the same field requires more than regex — it needs a layer of semantic matching. That's where the LLM earns its place: not as the main engine, but as the disambiguation layer when deterministic rules fail.",
            "Still evolving. But the goal is simple — turn a PDF into a row in a database, reliably, at scale.",
          ],
        },
        {
          index:    "03",
          date:     "Jan 2026",
          title:    "Visuro and ESHUB: Two Tools, One Direction",
          excerpt:  "Both started from the same problem: unstructured documents, high information density, zero tolerance for errors. Visuro tackles Italian business registry documents. ESHUB is the RAG chatbot built on Enernext's internal knowledge base. Two surfaces, one bet: structure the unstructured.",
          readTime: "6 min read",
          slug:     "visuro-eshub",
          body: [
            "Both started from the same problem: unstructured documents, high information density, zero tolerance for errors.",
            "Visuro tackles Italian business registry documents — visure camerali. The pipeline runs two passes: GPT-4o Vision for layout-aware extraction, regex and LLM for structured normalization. Benchmarked across 74 documents, scalar field accuracy sits above 80% — but list recall exposed a harder problem. Nested data structures don't survive naive extraction. That's the current frontier.",
            "ESHUB is the RAG chatbot built on top of Enernext's internal knowledge base. Same stack philosophy: Python, Claude, Qdrant local. The retrieval layer grounds every response; nothing gets answered from weights alone. Still in development, but the architecture is locked.",
            "Two different surfaces, same underlying bet: if you can structure the unstructured, everything downstream gets easier.",
          ],
        },
      ],
    },

    contact: {
      label:        "Contact",
      headingLines: ["Let's work", "together."],
      email:        "rzozzolotto@gmail.com",
      calendarUrl:  "https://cal.eu/riccardo-zozzolotto-ro79i8",
      github:       "https://github.com/zozzy04",
      linkedin:     "https://www.linkedin.com/in/riccardo-zozzolotto-53aa732b1/",
    },
  },
};
