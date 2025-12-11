# Portfolio di Riccardo Zozzolotto

Un portfolio moderno ed elegante per Riccardo Zozzolotto, AI Developer & Data Analyst professionale.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale con animazioni fluide
- **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Performance**: Caricamento veloce e ottimizzazioni SEO
- **Accessibilità**: Conforme agli standard WCAG 2.1
- **Animazioni**: Transizioni e animazioni moderne con CSS e React
- **SEO Ottimizzato**: Meta tag completi e struttura semantica
- **Dark/Light Mode**: Toggle per cambiare tema

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React 19, Vite
- **Styling**: CSS3 con variabili CSS personalizzate
- **Icons**: Lucide React
- **Animazioni**: CSS Animations
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── Header.jsx      # Header con navigazione
│   ├── Hero.jsx        # Sezione hero principale
│   ├── About.jsx       # Sezione chi sono
│   ├── Skills.jsx      # Sezione competenze
│   ├── Experience.jsx  # Sezione esperienze lavorative
│   ├── Projects.jsx    # Sezione progetti
│   ├── Contact.jsx     # Sezione contatti
│   └── Footer.jsx      # Footer
├── context/            # Context per il tema
│   └── ThemeContext.jsx
├── hooks/              # Custom hooks
│   └── useTheme.js
├── styles/
│   └── sections.css    # Stili per le sezioni
├── App.css             # Stili principali
├── App.jsx             # Componente principale
└── main.jsx           # Entry point
```

## 🎨 Sezioni del Portfolio

### 1. **Header**
- Navigazione fissa con effetto blur
- Menu responsive per mobile
- Toggle tema dark/light
- Animazioni smooth scroll

### 2. **Hero Section**
- Presentazione principale con animazioni
- Call-to-action buttons
- Social links
- Background animato con gradient

### 3. **About**
- Informazioni personali e professionali
- Card con informazioni personali
- Interessi e competenze
- Layout responsive

### 4. **Skills**
- Competenze organizzate per categoria
- Barre di progresso animate
- Formazione e certificazioni
- Sezioni separate per educazione e competenze tecniche

### 5. **Experience**
- Timeline delle esperienze lavorative
- Dettagli per ogni posizione
- Tecnologie utilizzate
- Statistiche professionali

### 6. **Projects**
- Galleria progetti con filtri
- Overlay con azioni (Live/Code)
- Dettagli tecnici e caratteristiche
- Categorie: AI/ML, Data Analysis, Web Development

### 7. **Contact**
- Form di contatto funzionale
- Informazioni di contatto
- Social media links
- Indicatore di disponibilità
- Messaggio di successo

### 8. **Footer**
- Link rapidi organizzati per categoria
- Informazioni di contatto
- Social media
- Copyright

## 🚀 Installazione e Avvio

1. **Clona il repository**
   ```bash
   git clone https://github.com/riccardozozzolotto/portfolio-nuovo.git
   cd portfolio-nuovo
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   ```
   http://localhost:5173
   ```

## 📦 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Build per produzione
- `npm run preview` - Preview del build
- `npm run lint` - Esegue ESLint

## ⚠️ Note Importanti

### Problemi con File Nascosti di macOS
Se stai sviluppando su macOS, potresti incontrare errori ESLint causati da file nascosti di sistema (file che iniziano con `._`). Questi file vengono automaticamente esclusi dal `.gitignore`, ma se li incontri durante lo sviluppo:

1. **Rimuovi i file nascosti**:
   ```bash
   find . -name "._*" -type f -delete
   ```

2. **Verifica che non ci siano errori**:
   ```bash
   npm run lint
   ```

### Struttura del Context
Il tema è gestito tramite React Context per evitare problemi con React Fast Refresh:
- `src/context/ThemeContext.jsx` - Provider del tema
- `src/hooks/useTheme.js` - Hook personalizzato per utilizzare il tema

## 🎯 Personalizzazione

### Colori
I colori sono definiti come variabili CSS in `src/App.css`:
```css
:root {
  --primary-color: #9CAF88; /* Verde salvia */
  --accent-color: #6B7C5A; /* Verde salvia scuro */
  --text-primary: #4A5D3A; /* Verde salvia molto scuro */
  /* ... altri colori */
}
```

### Contenuto
Modifica i componenti in `src/components/` per aggiornare:
- Informazioni personali
- Esperienze lavorative
- Progetti
- Competenze
- Contatti

### Stili
- `src/App.css` - Stili principali e layout
- `src/styles/sections.css` - Stili delle sezioni
- `src/index.css` - Reset e utility classes

## 📱 Responsive Design

Il portfolio è completamente responsive con breakpoint:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy Loading**: Componenti caricati on-demand
- **CSS Ottimizzato**: Variabili CSS e utility classes
- **Fonts Ottimizzati**: Google Fonts con preconnect
- **Images**: Ottimizzate e responsive

## 🔧 Configurazione

### Vite
Il progetto usa Vite per build veloci e HMR:
```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
}
```

### ESLint
Configurazione ESLint per React:
```javascript
// eslint.config.js
export default [
  js,
  reactHooks,
  reactRefresh,
  globals
]
```

## 📈 SEO

- Meta tag completi per social media
- Open Graph tags
- Twitter Card tags
- Schema markup
- Sitemap (da generare)

## 🌐 Deployment

### Vercel (Raccomandato)
1. Push su GitHub
2. Connetti repository a Vercel
3. Deploy automatico

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
1. Installa `gh-pages`
2. Configura script in `package.json`
3. Deploy con `npm run deploy`

## 📞 Supporto

Per domande o supporto:
- **Email**: riccardo@zozzolotto.com
- **LinkedIn**: [Riccardo Zozzolotto](https://linkedin.com/in/riccardozozzolotto)
- **GitHub**: [@riccardozozzolotto](https://github.com/riccardozozzolotto)

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

---

**Sviluppato con ❤️ da Riccardo Zozzolotto**
