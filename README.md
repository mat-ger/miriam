# Miriam Gertz

Statische Website mit Next.js und React. Die Seiten werden beim Build vollständig als HTML, CSS und JavaScript in `out/` exportiert.

## Lokal entwickeln

Voraussetzung: Node.js 24 und npm. Die getestete Version steht in `.nvmrc` und wird auch für GitHub Actions verwendet.

```bash
npm ci
npm run dev
```

Die Entwicklungsseite ist unter `http://localhost:3000` erreichbar. Der Build benötigt beim ersten Abruf der Schriftart gegebenenfalls Netzwerkzugriff.

## Inhalte pflegen

Die Texte und der Seitenaufbau liegen direkt in den jeweiligen `page.tsx`-Dateien unter `src/app/`. Absätze, Links, Listen und Hervorhebungen werden als JSX geschrieben; wiederverwendbare React-Komponenten ermöglichen Teaser, Angebote und Tabellen.

Praxisadresse, Kontakt und Domain stehen in `src/site.ts`; seitenspezifische Metadaten liegen neben den jeweiligen Seiten unter `src/app/`. Originalbilder liegen in `src/bilder_raw/`. In `src/image-variants.json` werden ihre Pfade, die vorhandenen Bild-URLs und die gewünschten Breiten je Motiv festgelegt. Beim Entwicklungsstart und Build erzeugt `scripts/optimize-images.mjs` daraus responsive WebP-Varianten mit inhaltsabhängigen Dateinamen und ein Bildmanifest, ohne Bilder über ihre Originalgröße hinaus zu vergrößern. Unveränderte Varianten werden wiederverwendet; veraltete generierte Varianten werden entfernt. Die generierten Dateien und das Manifest sind nicht Teil des Git-Repositories. Das aktuelle Praxisfoto stammt weiterhin aus `public/praxis_1024.jpg`; das Original in `src/bilder_raw/praxis-rosensteingasse.jpeg` zeigt einen anderen Raum und wird nicht verwendet. Die bestehende URL `banner.jpg` bleibt erhalten; das Original liegt in `src/bilder_raw/startseite.jpg`.

## Lokale Prüfung

```bash
npm run build
npm test
npm run typecheck
npm run lint
npm start
```

`npm start` zeigt den gebauten statischen Export unter `http://localhost:4173`. Der Exporttest prüft Inhalte, Metadaten, strukturierte Daten, Bildvarianten, Sitemap und bestehende Angebotsanker. Eine Browserprüfung auf mobilen und großen Bildschirmen ergänzt die automatischen Tests.

## Veröffentlichung

Ein veröffentlichtes GitHub-Release startet den Workflow `.github/workflows/deploy.yml`, auch bei einem Pre-Release. Der Workflow baut den Stand des Release-Tags und veröffentlicht ihn nur nach erfolgreichem Lint, Build, Typprüfung und Exporttest. Ein Release-Entwurf oder ein Push allein veröffentlicht nichts.

Für diesen Workflow muss unter **Settings > Pages > Build and deployment** als Source **GitHub Actions** gewählt sein. Die Custom Domain `www.gertz.at` und **Enforce HTTPS** bleiben dort konfiguriert; beim Actions-Deployment ist keine `CNAME`-Datei im Artefakt erforderlich. Falls das Environment `github-pages` Deployment-Regeln verwendet, müssen Release-Tags zugelassen sein. Domain-DNS und HTTPS für `gertz.at` ohne `www` sind unabhängig davon separat zu prüfen.

Die bisherigen Skripte `static` und `deploy` dienen nur dem früheren Deployment über einen Branch. Sie werden vom Release-Workflow nicht verwendet; beim Wechsel der Pages-Source auf GitHub Actions veröffentlicht ein Push auf diesen Branch die Website nicht mehr.