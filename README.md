# Portfolio Website - Jelle De Souter

## 📋 Updates

### Wat is er nieuw?

**Projectenpagina toegevoegd!**
- ✅ Quantum Computing & Security project card op de hoofdpagina
- ✅ Volledige project detailpagina met:
  - Project overzicht en beschrijving
  - Belangrijkste onderzoeksonderwerpen
  - Praktische implementatie details
  - Belangrijkste bevindingen
  - Downloadbare PDF
  - Link naar Panopto video presentatie
  - Sidebar met technologieën en statistieken

## 📁 Bestandsstructuur

```
portfolio/
├── index.html                          # Hoofdpagina met project card
├── project-quantum.html                # Detailpagina Quantum Computing project
├── css/
│   └── style.css                       # Complete styling (inclusief project pages)
├── js/
│   └── script.js                       # Alle JavaScript functionaliteit
└── magnum_opus_quantum_computing_security.pdf  # Downloadbare PDF
```

## 🚀 Hoe te gebruiken

### Lokaal openen

1. Download alle bestanden
2. Behoud de mapstructuur zoals hierboven
3. Open `index.html` in je browser
4. Scroll naar de Projects sectie om je project te zien
5. Klik op "View Details" voor de volledige projectpagina
6. Klik op het download icoon om de PDF te downloaden

### Online plaatsen

#### Op Netlify (Aanbevolen - gratis):
1. Maak een account op [netlify.com](https://netlify.com)
2. Sleep alle bestanden naar Netlify Drop
3. Je website is live! Je krijgt een URL zoals: `your-name.netlify.app`
4. Je kunt een custom domain toevoegen als je die hebt

#### Op GitHub Pages (Gratis):
1. Maak een GitHub account
2. Creëer een repository genaamd `jelledesouter.github.io`
3. Upload alle bestanden
4. Ga naar Settings > Pages
5. Selecteer de main branch
6. Je site is live op: `https://jelledesouter.github.io`

## ✨ Features

### Hoofdpagina (index.html)
- ✅ Modern hero section met animated code window
- ✅ About sectie met persoonlijke informatie
- ✅ Skills sectie met progress bars
- ✅ **Projects sectie met je Quantum Computing project**
- ✅ Contact formulier met email functionaliteit
- ✅ Dark/Light mode toggle
- ✅ Nederlands/Engels toggle
- ✅ Volledig responsive design

### Project Detailpagina (project-quantum.html)
- ✅ Hero sectie met project meta informatie
- ✅ Download buttons voor PDF en video
- ✅ 4 topic cards met belangrijkste onderzoeksonderwerpen
- ✅ Practical implementation showcase met code voorbeeld
- ✅ 4 genummerde bevindingen (findings)
- ✅ Resources sectie met direct links
- ✅ Sidebar met:
  - Gebruikte technologieën
  - Project statistieken
  - Gerelateerde tags
- ✅ Zelfde styling en navigatie als hoofdpagina
- ✅ Dark/Light mode support
- ✅ Volledig responsive

## 🎨 Styling & Design

De website gebruikt een moderne, tech-geïnspireerde design met:
- 🌈 Gradient accenten (blauw naar cyaan)
- 🌓 Dark mode (standaard) en light mode
- 💫 Smooth animaties en transitions
- 📱 Volledig responsive voor alle schermformaten
- 🎯 Glassmorphism effecten
- ⚡ Performance optimized

### Kleuren

```css
/* Light Mode */
--accent-primary: #0066ff (Tech Blue)
--accent-secondary: #00d4aa (Cyan)
--accent-tertiary: #7c3aed (Purple)

/* Dark Mode (default) */
--bg-primary: #0a0e1a
--bg-secondary: #111827
--text-primary: #f9fafb
--text-secondary: #d1d5db
```

## 🔧 Aanpassingen maken

### Meer projecten toevoegen

1. **Kopieer de project card in index.html:**
   ```html
   <article class="project-card" data-category="your-category">
       <!-- Pas de content aan -->
   </article>
   ```

2. **Maak een nieuwe detailpagina:**
   - Kopieer `project-quantum.html`
   - Hernoem naar bijv. `project-network.html`
   - Pas de content aan
   - Update de navigatie links

### Teksten aanpassen

Alle teksten hebben `data-en` en `data-nl` attributen:
```html
<h2 data-en="English Text" data-nl="Nederlandse Tekst">English Text</h2>
```

De JavaScript zorgt automatisch voor de vertaling wanneer je van taal wisselt.

### Kleuren aanpassen

Pas de CSS variabelen aan in `css/style.css`:
```css
:root {
    --accent-primary: #jouw-kleur;
    --accent-secondary: #jouw-kleur;
}
```

### Eigen informatie toevoegen

- Email: Zoek naar `jelledesouter@gmail.com` en vervang
- LinkedIn: Zoek naar de LinkedIn URL en vervang
- Naam: Zoek naar "Jelle De Souter" en vervang

## 📱 Browser Support

- ✅ Chrome/Edge (Latest 2 versions)
- ✅ Firefox (Latest 2 versions)
- ✅ Safari (Latest 2 versions)
- ✅ Mobile browsers (iOS Safari 12+, Chrome Android)

## 🐛 Troubleshooting

### PDF download werkt niet
- Zorg dat `magnum_opus_quantum_computing_security.pdf` in de root folder staat
- Controleer of de bestandsnaam exact overeenkomt in de HTML

### Dark mode blijft niet opgeslagen
- Controleer of localStorage enabled is in je browser
- Test in een andere browser

### Taal toggle werkt niet
- Check of alle elementen de juiste `data-en` en `data-nl` attributen hebben
- Open de browser console (F12) om errors te checken

### Layout ziet er raar uit
- Clear je browser cache (Ctrl+F5 of Cmd+Shift+R)
- Controleer of alle CSS en JS bestanden correct geladen zijn
- Check of de mapstructuur correct is

## 📞 Support

Als je hulp nodig hebt met de website:
1. Check eerst de troubleshooting sectie hierboven
2. Controleer of alle bestanden de juiste namen hebben
3. Test in een andere browser

## 📄 Licentie

Dit is jouw persoonlijke portfolio website. Gebruik het zoals je wilt!

---

**Laatste update:** November 2025
**Gemaakt voor:** Jelle De Souter
**Project:** Portfolio Website met Quantum Computing Project
