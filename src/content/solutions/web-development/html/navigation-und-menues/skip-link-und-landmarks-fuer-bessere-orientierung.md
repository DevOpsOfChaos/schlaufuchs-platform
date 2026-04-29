---
title: "Lösung – Seitenstruktur mit Skip-Link verbessern"
description: "Musterlösung zu: Plane eine zugängliche Grundstruktur für eine Seite mit wiederholter Navigation."
subject: "web-development"
section: "HTML"
topicPath: ["html", "navigation-und-menues", "skip-link-und-landmarks-fuer-bessere-orientierung"]
taskId: "wd-html-v95-skip-link-landmarks"
relatedExercise: "web-development/html/navigation-und-menues/skip-link-und-landmarks-fuer-bessere-orientierung"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Ein Skip-Link vor der Navigation erlaubt den direkten Sprung zum Hauptinhalt. header, nav, main und footer machen die Struktur zusätzlich verständlich. Der Skip-Link muss beim Fokus sichtbar sein.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<nav aria-label="Hauptnavigation">...</nav>
<main id="inhalt">...</main>
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
