---
title: "Größenrahmen mit Clamp begründen"
description: "Begründe, warum clamp für responsive Größen sinnvoll ist und welche Rolle Untergrenze, flexible Mitte und Obergrenze spielen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "clamp-fuer-responsives-sizing-verstehen", "groessenrahmen-mit-clamp-begruenden"]
taskId: "AUTO-GROESSENRAHMEN-MIT-CLAMP-BEGRUENDEN"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Clamp lesen

Gegeben ist:

```css
font-size: clamp(1.2rem, 2vw + 1rem, 2.4rem);
```

Erkläre in Worten:
- was die Untergrenze ist,
- was die flexible Mitte macht,
- und was die Obergrenze schützt.

## Aufgabe 2: Fester Wert gegen Clamp

Vergleiche eine feste Überschriftengröße von `2rem` mit einer Überschrift, die `clamp()` nutzt.

Beschreibe, warum die zweite Lösung auf sehr kleinen und sehr großen Breiten oft ruhiger wirkt.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Clamp ist nur eine komplizierte Schreibweise für einen Einzelwert.“

Erkläre, warum das nicht stimmt.
