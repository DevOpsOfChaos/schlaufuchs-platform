---
title: "Lösung – Media Query oder Container Query wählen"
description: "Musterlösung zu: Entscheide für verschiedene Layoutprobleme, ob Viewport oder Container die richtige Bezugsgröße ist."
subject: web-development
section: "CSS"
topicPath:
  - "css"
  - "responsive-layouts"
  - "container-query-und-media-query-unterscheiden"
taskId: "wd-css-v95-container-media-query"
relatedExercise: "web-development/css/responsive-layouts/container-query-und-media-query-unterscheiden"
tags:
  - "web development"
  - "css"
  - "responsive"
  - "container queries"
  - "media queries"
draft: false
---
## Lösung zu Aufgabe 1

Der Viewport ist groß, aber die Komponente hat wenig Platz. Deshalb ist eine Container Query fachlich passender als eine reine Media Query. Die Karte soll auf ihre eigene verfügbare Breite reagieren.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
.product-list { container-type: inline-size; }
@container (max-width: 24rem) {
  .product-card { grid-template-columns: 1fr; }
}
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
