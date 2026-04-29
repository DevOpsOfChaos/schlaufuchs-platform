---
title: "Lösung – eine Chip-Liste responsive machen"
description: "Musterlösung zu: Verbessere eine horizontale Liste, damit sie auf kleinen Breiten kontrolliert umbricht."
subject: "web-development"
section: "CSS"
topicPath: ["css", "flexbox", "flex-wrap-gap-und-zeilenumbruch-verstehen"]
taskId: "wd-css-v95-flex-wrap-gap"
relatedExercise: "web-development/css/flexbox/flex-wrap-gap-und-zeilenumbruch-verstehen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Die Liste braucht flex-wrap: wrap und gap. Dadurch dürfen die Chips in neue Zeilen umbrechen, ohne dass am Zeilenende falsche Außenränder entstehen.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
.tag-list { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.tag { flex: 0 1 auto; }
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
