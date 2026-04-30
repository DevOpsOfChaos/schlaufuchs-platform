---
title: "Lösung – Alt-Texte passend entscheiden"
description: "Musterlösung zu: Ordne Bilder als dekorativ oder informativ ein und formuliere passende Alt-Texte."
subject: "web-development"
section: "HTML"
topicPath: ["html", "bilder-und-alt-texte", "dekorative-und-informative-bilder-unterscheiden"]
taskId: "wd-html-v95-dekorative-informative-bilder"
relatedExercise: "src/content/exercises/web-development/html/bilder-und-alt-texte/dekorative-und-informative-bilder-unterscheiden"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Das Schmuckmuster ist dekorativ und kann alt="" haben. Das Warnsymbol braucht nur dann einen Alt-Text, wenn der sichtbare Text die Warnung nicht bereits enthält. Das Diagramm braucht die Kernaussage als Text oder eine ausführliche Beschreibung.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
<img src="muster.svg" alt="">
<img src="warnung.svg" alt="Warnung">
<img src="ladezeiten.svg" alt="Die Ladezeit steigt nach dem dritten Schritt deutlich an.">
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
