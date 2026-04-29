# Audit-Nachtrag v187 – Web Development Sanierung

Stand: 2026-04-29

Dieser Nachtrag dokumentiert den kumulativen Austauschblock `schlaufuchs_v187_web_development_sanierung.zip`. Der Block ist additiv angelegt und berührt keine bestehenden Kernlogikdateien. Ziel ist ein größerer echter Web-Development-Sanierungsblock mit ruhigen Überblicksseiten, passenden SVGs, Aufgaben und direkt zugehörigen Lösungen.

## Umfang

| Bereich | Anzahl |
|---|---:|
| Neue Web-Development-Überblicksseiten | 32 |
| Neue SVG-Dateien | 32 |
| Neue Aufgaben | 64 |
| Neue Lösungen | 64 |
| Neue Status-/Audit-Dokumente | 2 |

## Themenabdeckung

| Thema | Section | TopicPath | Artikel | Aufgaben | Lösungen | SVG |
|---|---|---|---:|---:|---:|---:|
| Web-Entwicklung im Überblick | `grundlagen` | `grundlagen / web-entwicklung-ueberblick` | 1 | 2 | 2 | 1 |
| HTML-Struktur im Überblick | `html` | `html-und-semantik / struktur` | 1 | 2 | 2 | 1 |
| Semantik und Landmarks | `html` | `html-und-semantik / landmarks` | 1 | 2 | 2 | 1 |
| Text, Typografie und Lesefluss | `html-css` | `html-und-semantik / text-und-lesefluss` | 1 | 2 | 2 | 1 |
| Listen, Tabellen und Inhaltsgruppen | `html` | `html-und-semantik / inhaltsgruppen` | 1 | 2 | 2 | 1 |
| Links, Navigation und Pfade | `html` | `html-und-semantik / links-und-navigation` | 1 | 2 | 2 | 1 |
| Bilder, Medien und Alternativtexte | `html` | `html-und-semantik / medien` | 1 | 2 | 2 | 1 |
| Formulare, Eingaben und Labels | `html` | `html-und-semantik / formulare` | 1 | 2 | 2 | 1 |
| CSS-Überblick und Regelaufbau | `css` | `css-und-layout / grundlagen` | 1 | 2 | 2 | 1 |
| Selektoren, Kaskade und Spezifität | `css` | `css-und-layout / kaskade` | 1 | 2 | 2 | 1 |
| Box-Modell, Abstände und Größen | `css` | `css-und-layout / box-modell` | 1 | 2 | 2 | 1 |
| Farben, Kontrast und Lesbarkeit | `css` | `css-und-layout / farben-und-kontrast` | 1 | 2 | 2 | 1 |
| Layoutfluss, Display und Positionierung | `css` | `css-und-layout / layoutfluss` | 1 | 2 | 2 | 1 |
| Flexbox im Überblick | `css` | `css-und-layout / flexbox` | 1 | 2 | 2 | 1 |
| CSS Grid im Überblick | `css` | `css-und-layout / grid` | 1 | 2 | 2 | 1 |
| Responsive Design im Überblick | `css` | `css-und-layout / responsive-design` | 1 | 2 | 2 | 1 |
| Barrierefreiheit im Web | `qualitaet` | `qualitaet-und-zugaenglichkeit / barrierefreiheit` | 1 | 2 | 2 | 1 |
| Browser und DevTools | `werkzeuge` | `werkzeuge-und-projektarbeit / browser-devtools` | 1 | 2 | 2 | 1 |
| Projektstruktur, Dateien und Assets | `werkzeuge` | `werkzeuge-und-projektarbeit / projektstruktur` | 1 | 2 | 2 | 1 |
| JavaScript im Frontend | `javascript` | `javascript-und-interaktion / rolle-im-frontend` | 1 | 2 | 2 | 1 |
| DOM und Interaktion | `javascript` | `javascript-und-interaktion / dom` | 1 | 2 | 2 | 1 |
| Events und Zustand | `javascript` | `javascript-und-interaktion / events-und-zustand` | 1 | 2 | 2 | 1 |
| Datenladen und Fetch API | `javascript` | `javascript-und-interaktion / datenladen` | 1 | 2 | 2 | 1 |
| Formularvalidierung und Feedback | `javascript` | `javascript-und-interaktion / formularfeedback` | 1 | 2 | 2 | 1 |
| Web-Performance-Grundlagen | `qualitaet` | `qualitaet-und-zugaenglichkeit / performance` | 1 | 2 | 2 | 1 |
| Web-Sicherheit-Grundlagen | `qualitaet` | `qualitaet-und-zugaenglichkeit / sicherheit` | 1 | 2 | 2 | 1 |
| SEO, Metadaten und Snippets | `qualitaet` | `qualitaet-und-zugaenglichkeit / metadaten` | 1 | 2 | 2 | 1 |
| Static-Site-Deployment | `deployment` | `deployment-und-betrieb / static-sites` | 1 | 2 | 2 | 1 |
| Git und Versionierung im Webprojekt | `werkzeuge` | `werkzeuge-und-projektarbeit / git-versionierung` | 1 | 2 | 2 | 1 |
| Tests, Checklisten und Abnahme | `qualitaet` | `qualitaet-und-zugaenglichkeit / tests-und-abnahme` | 1 | 2 | 2 | 1 |
| Designsysteme und Komponenten | `architektur` | `werkzeuge-und-projektarbeit / komponenten` | 1 | 2 | 2 | 1 |
| Webarchitektur: Client, Server und Static | `architektur` | `deployment-und-betrieb / webarchitektur` | 1 | 2 | 2 | 1 |

## Qualitätsregeln

- Jede Aufgabe hat eine direkt passende Lösung.
- Jede Lösung enthält `taskId` und `relatedExercise`.
- `relatedExercise` verweist auf den generierten Exercise-ID-Pfad ohne Dateiendung.
- Alle neuen Content-Dateien verwenden `subject: web-development`.
- Alle neuen Dateien sind UTF-8 ohne bekannte Mojibake-Marker.
- Der Block ist additiv und liegt in `sanierung-v187`, damit keine bestehenden Dateien überschrieben werden.

## Offene Folgearbeit

Nach dem Einspielen dieses Blocks sollte der nächste kumulative Block Web Development entweder weiter verdichten oder den nächsten Fachbereich Mathematik beginnen. Ein voller `npm run quality` ist erst nach einem größeren Meilenstein sinnvoll, weil der lokale Lauf laut Arbeitsmodus sehr lange dauert.
