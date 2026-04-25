---
title: "Lösung – eine Datentabelle semantisch verbessern"
description: "Musterlösung zu: Verbessere eine Tabelle so, dass Beschriftung und Kopfzellen fachlich klar werden."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "tabellen-barrierearm"
  - "caption-scope-und-tabellenkopf-sauber-nutzen"
taskId: "wd-html-v95-caption-scope-tabellenkopf"
relatedExercise: "web-development/html/tabellen-barrierearm/caption-scope-und-tabellenkopf-sauber-nutzen"
tags:
  - "web development"
  - "html"
  - "tabellen"
  - "accessibility"
  - "semantik"
draft: false
---
## Lösung zu Aufgabe 1

Die erste Zeile muss als Tabellenkopf ausgezeichnet werden. Eine caption beschreibt den Inhalt der Tabelle. Zeilenköpfe oder Spaltenköpfe brauchen th und bei einfachen Tabellen ein passendes scope.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
<table>
  <caption>Monatliche Preise der Tarife</caption>
  <thead><tr><th scope="col">Tarif</th><th scope="col">Preis</th></tr></thead>
  <tbody><tr><th scope="row">Basis</th><td>9 €</td></tr></tbody>
</table>
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
