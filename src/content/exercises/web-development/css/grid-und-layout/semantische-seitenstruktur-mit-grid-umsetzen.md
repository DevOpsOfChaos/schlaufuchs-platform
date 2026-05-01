---
title: "Semantische Seitenstruktur mit CSS Grid umsetzen"
description: "Konkrete Aufgabe zu HTML5-Strukturelementen und grid-template-areas: Header, Navigation, Inhalt, Aside und Footer als ruhiges Seitenlayout aufbauen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "grid-und-layout", "semantische-seitenstruktur-mit-grid-umsetzen"]
taskId: "web-css-grid-semantisches-layout"
tags: ["web-development", "CSS", "CSS Grid", "HTML5", "Semantik", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---

Eine Seite soll aus fünf semantischen Bereichen bestehen:

- `header`
- `nav`
- `main`
- `aside`
- `footer`

Die Bereiche sollen nicht mit frei platzierten `div`-Containern nachgebaut werden. Nutze semantische HTML5-Elemente und ordne sie mit CSS Grid zu einem Seitenlayout an.

![Zielraster für ein semantisches CSS-Grid-Layout](/schlaufuchs-platform/illustrations/web-development/css-grid-semantisches-layout.svg)

## Ausgangsdaten

Das Layout soll diese Struktur haben:

```text
header header header
nav    main   aside
footer footer footer
```

Die mittlere Zeile besteht aus drei Spalten:

```text
nav:   12rem
main:  1fr
aside: 14rem
```

Der Abstand zwischen den Bereichen beträgt `1rem`.

## Aufgabe

1. Schreibe ein minimales HTML-Dokument mit `header`, `nav`, `main`, `aside` und `footer`.
2. Weise den Bereichen sinnvolle Beispielinhalte zu, damit die Struktur im Browser lesbar ist.
3. Schreibe CSS mit `display: grid`, `grid-template-columns` und `grid-template-areas`.
4. Weise jedem semantischen Element die passende `grid-area` zu.
5. Ergänze eine responsive Regel: Bei einer Breite unter `760px` sollen alle Bereiche untereinander stehen.
6. Erkläre kurz, warum `grid-template-areas` für dieses Layout geeigneter ist als eine Reihe improvisierter Breiten- und Margin-Regeln.

## Erwartetes Ergebnis

Am Ende muss aus dem CSS eindeutig hervorgehen:

- welche Flächen das Raster besitzt,
- welche semantischen Elemente diesen Flächen zugeordnet sind,
- wie das Layout bei kleinen Breiten vereinfacht wird.

## Quellenhinweis

Diese Aufgabe wurde aus dem legacy Schlaufuchs-Material `legacy/selected/web-development/web-css-aufgabe-02-grid-layout/css_aufgabe_02.html` und der zugehörigen Layoutabbildung fachlich neu erstellt. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datumsangabe 15.06.2020. Text, Struktur und Diagramm wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
