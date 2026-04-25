---
title: "Lösung – Animationen mit reduced motion entschärfen"
description: "Musterlösung zu: Bewerte eine starke Animation und plane eine reduzierte Alternative."
subject: web-development
section: "CSS"
topicPath:
  - "css"
  - "responsive-layouts"
  - "reduced-motion-und-animationen-zugaenglich-planen"
taskId: "wd-css-v95-reduced-motion"
relatedExercise: "web-development/css/responsive-layouts/reduced-motion-und-animationen-zugaenglich-planen"
tags:
  - "web development"
  - "css"
  - "animation"
  - "reduced motion"
  - "accessibility"
draft: false
---
## Lösung zu Aufgabe 1

Die starke Bewegung sollte reduziert werden. prefers-reduced-motion kann Animationen stark verkürzen oder ersetzen. Der geöffnete Zustand muss zusätzlich über Fokus, Überschrift, aria-Zustand oder sichtbare Markierung klar werden.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
@media (prefers-reduced-motion: reduce) {
  .menu { transition: none; }
}
.menu[aria-hidden="false"] { display: block; }
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
