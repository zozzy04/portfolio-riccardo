import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Award, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Lightbulb, 
  ChevronLeft, 
  ChevronRight,
  School,
  Cpu,
  BarChart3,
  Rocket,
  GitBranch,
  Settings,
  Sparkles,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const educationData = [
    {
      icon: <School size={24} />,
      title: 'ITS Digital Academy',
      link: 'https://itsdigitalacademy.com',
      location: 'Treviso, Italia',
      period: '2023 - 2025',
      qualification: 'AI Developer & Data Analyst',
      description: 'Corso biennale specializzato in sviluppo di applicazioni AI e analisi dati. Focus su Python, Machine Learning, Data Visualization e tecnologie moderne.',
      color: '#9CAF88',
      gradient: 'linear-gradient(135deg, #9CAF88 0%, #B8C9A8 100%)',
      category: 'Education'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Liceo Scientifico Antonio Scarpa',
      link: 'https://www.antonioscarpa.edu.it',
      location: 'Motta di Livenza, Italia',
      period: '2018 - 2023',
      qualification: 'Diploma di Liceo Scientifico',
      description: 'Percorso di studi scientifico con focus su matematica, fisica, scienze e informatica. Sviluppo di competenze logiche, analitiche e problem solving.',
      color: '#6B7C5A',
      gradient: 'linear-gradient(135deg, #6B7C5A 0%, #8BA876 100%)',
      category: 'Education'
    }
  ];

  const technicalSkills = [
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.15-1.04.21-.87.28-.73.32-.59.35-.46.36-.36.36-.26.35-.18.32-.12.28-.07.21-.03h7.39V.18zm-5.3 1.98c-.4 0-.73.33-.73.73s.33.73.73.73.73-.33.73-.73-.33-.73-.73-.73zm6.07 15.1l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-8.1l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.08l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V3.17l.03-.21.07-.28.12-.32.18-.35.26-.36.36-.36.46-.35.59-.32.73-.28.88-.21 1.05-.14 1.23-.05 1.22.06 1.04.15.87.21.73.28.59.32.46.35.36.36.26.36.18.35.12.32.07.28.03.21v7.39h-3.06v-3.06l-.05-.69-.14-.59-.22-.5-.27-.41-.32-.33-.35-.27-.36-.2-.37-.15-.35-.1-.32-.07-.27-.04-.21-.02H8.77l-.21.02-.28.07-.32.12-.35.18-.36.26-.36.36-.35.46-.32.59-.28.73-.21.88-.14 1.05-.05 1.23.06 1.22.15 1.04.21.87.28.73.32.59.35.46.36.36.36.26.35.18.32.12.28.07.21.03h7.39v3.06h-3.06zm1.23 5.3c.4 0 .73-.33.73-.73s-.33-.73-.73-.73-.73.33-.73.73.33.73.73.73z"/>
        </svg>
      ),
      color: '#3776ab'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      color: '#f7df1e'
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-2.713-1.608c.653-1.187 1.13-2.352 1.365-3.2.12-.45.18-.784.18-.99zm-9.77.02c.05.206.12.54.25 1.003.24.85.72 2.02 1.38 3.21a23.49 23.49 0 0 0-2.71 1.6c-.11-.49-.2-.97-.25-1.44-.23-1.868.06-3.32.73-3.703.14-.08.32-.122.54-.122h.05zm4.903 3.08c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.46 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.75 25.75 0 0 0-1.346-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a25.24 25.24 0 0 0-1.1-2.98c.37-1.017.67-2.01.885-2.964zm-13.395.004c.22.96.52 1.957.89 2.98a25.24 25.24 0 0 0-1.1 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.355-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.704-1.158.225-.39.435-.783.636-1.18zm-9.945.02c.2.39.41.783.64 1.175.23.39.465.777.705 1.16-.695-.1-1.365-.23-2.006-.388.18-.63.406-1.282.66-1.933a25.24 25.24 0 0 1 1.346-2.32zm4.657 1.234c.44.02.89.034 1.36.034.46 0 .92-.01 1.36-.034-.44.572-.895 1.096-1.36 1.564-.455-.468-.91-.992-1.36-1.564z"/>
        </svg>
      ),
      color: '#61dafb'
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.080-0.383 c0.585-0.203,0.703-0.250,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      color: '#339933'
    },
    {
      name: 'Power BI',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.5 2.5c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
          <path d="M12.5 6.5c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
          <path d="M12.5 8.5c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      color: '#f2c811'
    },
    {
      name: 'Qlik',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: '#00b7c3'
    },
    {
      name: 'Pandas',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: '#150458'
    },
    {
      name: 'Scikit-learn',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: '#f7931e'
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: '#336791'
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.218-.091-.423-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
      color: '#f05032'
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#646cff'
    },
    {
      name: 'Knime',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: '#0092cc'
    },
    {
      name: 'HTML5',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      color: '#e34f26'
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      color: '#1572b6'
    },
    {
      name: 'TensorFlow',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V7.603l6.168 3.564z"/>
        </svg>
      ),
      color: '#ff6f00'
    },
    {
      name: 'NumPy',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: '#4dabcf'
    },
    {
      name: 'Orange',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: '#ff8c00'
    },
    {
      name: 'Machine Learning',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: '#8b5cf6'
    }
  ];

  const categories = [
    { id: 'education', name: 'Formazione', icon: <BookOpen size={20} /> },
    { id: 'technical', name: 'Competenze Tecniche', icon: <Sparkles size={20} /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplica le competenze per creare l'effetto infinito
  const duplicatedSkills = [...technicalSkills, ...technicalSkills, ...technicalSkills];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competenze</h2>
          <p className="section-subtitle">Le mie competenze tecniche e formative</p>
        </div>

        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          {/* Category Tabs */}
          <div className="skills-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Education Section */}
          {activeCategory === 'education' && (
            <div className="education-section">
              <div className="section-subheader">
                <GraduationCap size={24} />
                <h3>Formazione</h3>
              </div>
              
              <div className="education-grid">
                {educationData.map((education, index) => (
                  <div 
                    key={index} 
                    className="education-card"
                    style={{
                      '--card-color': education.color,
                      '--card-gradient': education.gradient,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="card-glow"></div>
                    <div className="card-particles"></div>
                    
                    <div className="education-header">
                      <div className="education-icon" style={{ background: education.gradient }}>
                        {education.icon}
                      </div>
                      <div className="education-info">
                        <div className="category-badge">
                          {education.category}
                        </div>
                        <h4 className="education-title">
                          <a 
                            href={education.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="education-link"
                          >
                            {education.title}
                          </a>
                        </h4>
                        <p className="education-location">{education.location}</p>
                        <p className="education-period">{education.period}</p>
                      </div>
                    </div>
                    
                    <div className="education-details">
                      <h5 className="education-qualification">{education.qualification}</h5>
                      <p className="education-description">{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills Section */}
          {activeCategory === 'technical' && (
            <div className="technical-skills-section">
              <div className="section-subheader">
                <Award size={24} />
                <h3>Competenze Tecniche</h3>
              </div>
              
              <div className="skills-carousel-container">
                <div className="skills-carousel">
                  {duplicatedSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-card"
                      title={skill.name}
                      style={{
                        '--skill-color': skill.color,
                        '--skill-gradient': skill.gradient,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
