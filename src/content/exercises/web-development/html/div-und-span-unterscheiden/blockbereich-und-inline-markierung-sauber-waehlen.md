---
title: Blockbereich und Inline-Markierung sauber wählen
description: Begründe, wann div oder span sinnvoller ist und wann eigentlich ein semantisches HTML-Element passender wäre.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
  - div-und-span-unterscheiden
  - blockbereich-und-inline-markierung-sauber-waehlen
level: einfach
draft: false
tags:
  - html
  - div
  - span
hintPoints:
  - "Frage zuerst, ob ein ganzer Bereich oder nur ein kleiner Teil im Satz gemeint ist."
  - "Prüfe, ob nicht sogar ein semantisches Element besser passt."
selfCheckPoints:
  - "Kannst du div und span über ihren Einsatzzweck unterscheiden?"
  - "Kannst du erklären, warum beide keine eigene Semantik tragen?"
transferIdeas:
  - "Übertrage die Logik auf Karten, Statuslabels, Navigationen oder kleine Badges."
reflectionPrompt: "Woran merkst du, dass ein Problem eigentlich nicht 'div oder span', sondern 'semantisches Element oder neutraler Container' lautet?"
---

## Aufgabe 1: Bereich oder Satzteil?

Du baust eine Produktkarte mit Bild, Titel, Preis und Button. Zusätzlich soll im Titel ein kleines Wort wie „neu“ farbig markiert werden.

Begründe, warum für die Karte eher ein `div` und für das kleine Wort eher ein `span` passt.

## Aufgabe 2: Semantik mitdenken

Jemand baut eine Hauptnavigation nur mit `div`-Containern nach.

Erkläre, warum das fachlich unruhig ist und welches semantische HTML-Element hier näherliegt.

## Aufgabe 3: Laufender Text

Nenne ein Beispiel, in dem ein `span` sinnvoll ist, weil die Markierung innerhalb einer bestehenden Textzeile bleiben soll.
