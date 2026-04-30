---
title: "Lösung – Fokuszustände zugänglich verbessern"
description: "Musterlösung zu: Verbessere eine Button- und Linkgestaltung, damit Tastaturbedienung sichtbar bleibt."
subject: "web-development"
section: "CSS"
topicPath: ["css", "selektoren", "focus-visible-hover-und-pointer-zustaende-planen"]
taskId: "wd-css-v95-focus-hover-pointer"
relatedExercise: "src/content/exercises/web-development/css/selektoren/focus-visible-hover-und-pointer-zustaende-planen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

outline darf nicht ersatzlos entfernt werden. Ein focus-visible-Stil muss sichtbar und kontrastreich sein. Hover kann zusätzlich bleiben, ist aber kein Ersatz für Fokus.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
a:focus-visible, button:focus-visible { outline: 3px solid currentColor; outline-offset: 0.2rem; }
a:hover { text-decoration-thickness: 0.18em; }
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
