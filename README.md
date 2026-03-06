# Highsoft Prototype

En React-prototype som kjører på GitHub Pages.

## Komme i gang

### Installere avhengigheter
```bash
npm install
```

### Kjøre lokalt
```bash
npm run dev
```

Åpne [http://localhost:5173](http://localhost:5173) i nettleseren.

## Deploye til GitHub Pages

### Første gang
1. Gå til GitHub repository settings
2. Under "Pages", velg "gh-pages" branch som kilde
3. Kjør deploy-kommandoen:

```bash
npm run deploy
```

### Senere deployments
```bash
npm run deploy
```

Prototypen vil være tilgjengelig på: `https://lindasvendsen.github.io/Prototype-highsoft/`

## Struktur
- `src/App.jsx` - Hovedkomponent
- `src/main.jsx` - React entry point
- `index.html` - HTML template
- `vite.config.js` - Vite konfigurasjon for GitHub Pages
