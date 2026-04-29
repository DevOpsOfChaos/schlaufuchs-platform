---
title: "Innen- und Außenabstand an Boxen beschreiben"
description: "Beschreibe bei einer Box, wo Padding, Border und Margin wirken."
subject: "web-development"
section: "CSS"
topicPath: ["css", "boxenmodell-mit-margin-padding-und-border-verstehen", "innen-und-aussenabstand-an-boxen-beschreiben"]
taskId: "WEB-CSS-CORE-104"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben ist – unter der üblichen Standardannahme <code>box-sizing: content-box</code> – dieses CSS:

```css
.karte {
  width: 240px;
  padding: 16px;
  border: 2px solid #334155;
  margin: 24px;
}
```

## Aufgabe 1: Schichten benennen

Benenne die vier Schichten der Box in sinnvoller Reihenfolge.

## Aufgabe 2: Innen und außen trennen

Erkläre den Unterschied zwischen Padding und Margin an genau diesem Beispiel.

## Aufgabe 3: Sichtbare Boxbreite berechnen

Berechne die sichtbare Boxbreite der Karte. Schreibe deinen Rechenweg dazu.

## Aufgabe 4: Außenabstand mitdenken

Wie groß ist der gesamte Platzbedarf von äußerer Kante zu äußerer Kante, wenn links und rechts auch die Margin mitgerechnet wird? Schreibe deinen Rechenweg dazu.

## Aufgabe 5: Drei Begriffe sortieren

Ordne die drei Begriffe mit je einem kurzen Satz:

- Inhaltsbreite
- sichtbare Boxbreite
- gesamter Platzbedarf im Layout

## Aufgabe 6: Zwei Aussagen prüfen

Bewerte die beiden Aussagen kurz:

- „<code>width: 240px</code> ist die ganze sichtbare Breite der Karte.“
- „Margin vergrößert nicht die sichtbare Box, aber den gesamten Platzbedarf im Layout.“

## Aufgabe 7: Fehlersatz korrigieren

Jemand sagt: „Die Karte ist 324px breit.“

Formuliere diesen Satz so um, dass sichtbar wird, ob die Person die **sichtbare Boxbreite** oder den **gesamten Platzbedarf im Layout** meint.

## Aufgabe 8: Zweite Karte ruhig lesen

Eine zweite Karte hat denselben Inhalt, dieselbe sichtbare Boxbreite, aber diese Werte:

```css
width: 208px;
padding: 32px;
border: 2px solid;
margin: 8px;
```

Erkläre in 3 bis 5 Sätzen,

- was bei beiden Karten sichtbar gleich bleibt,
- was sich bei den inneren Anteilen verändert,
- und was sich im gesamten Platzbedarf des Layouts verändert.

## Aufgabe 9: Formel in Worte übersetzen

Schreibe zwei kurze Merksätze auf:

- einen für die **sichtbare Boxbreite**
- einen für den **gesamten Platzbedarf im Layout**
