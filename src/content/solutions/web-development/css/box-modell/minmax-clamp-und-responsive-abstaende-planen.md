---
title: "Lösung – starre Abstände in flexible Werte übersetzen"
description: "Musterlösung zu: Verbessere ein Kartenlayout mit minmax und clamp, damit es ruhiger reagiert."
subject: "web-development"
section: "CSS"
topicPath: ["css", "box-modell", "minmax-clamp-und-responsive-abstaende-planen"]
taskId: "wd-css-v95-minmax-clamp-responsive"
relatedExercise: "web-development/css/box-modell/minmax-clamp-und-responsive-abstaende-planen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

gap und padding können mit clamp fließend wachsen. Die Grid-Spalten können mit auto-fit und minmax eine sinnvolle Mindestbreite behalten. Dadurch werden weniger Breakpoints nötig.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
.cards { grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr)); gap: clamp(0.8rem, 2vw, 1.5rem); }
.card { padding: clamp(1rem, 2.5vw, 2rem); }
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
