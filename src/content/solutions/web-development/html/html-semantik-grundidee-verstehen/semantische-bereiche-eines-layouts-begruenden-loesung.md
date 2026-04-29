---
title: "Lösung – Semantische Bereiche eines Layouts begründen"
description: "Musterlösung zur Aufgabe über semantische Bereiche, Landmarken und Inhaltsstruktur."
subject: "web-development"
section: "HTML"
topicPath: ["html", "html-semantik-grundidee-verstehen", "semantische-bereiche-eines-layouts-begruenden"]
taskId: "WEB-HTML-CORE-101"
relatedExercise: "web-development/html/html-semantik-grundidee-verstehen/semantische-bereiche-eines-layouts-begruenden"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

- Seitenkopf mit Logo → `header`
- Navigationsleiste → `nav`
- eigenständiger Magazinbeitrag → `article`
- zwei Unterabschnitte im Beitrag → `section`
- Randspalte mit weiterführenden Links → `aside`
- Fußbereich → `footer`

Die sinnvolle Trennung lautet also:  
**Landmarken der Seite** mit `header`, `nav` und `footer`,  
**Hauptinhalt** mit `article`,  
**Untergliederung im Hauptinhalt** mit `section`,  
**ergänzende Inhalte** mit `aside`.

### Aufgabe 2

`aside` passt besser als `main`, weil die Randspalte nicht der zentrale Hauptinhalt der Seite ist.  
`section` ist außerdem nicht dasselbe wie `article`, weil ein Abschnitt meist nur ein Teil eines größeren Ganzen ist, während ein Article eher als eigenständiger Inhalt gedacht wird.

### Aufgabe 3

Die Wahl semantischer Elemente hängt nicht am Farbschema, weil Farben nur Darstellung sind. Semantik beschreibt dagegen die Aufgabe und Rolle eines Bereichs im Dokument.
