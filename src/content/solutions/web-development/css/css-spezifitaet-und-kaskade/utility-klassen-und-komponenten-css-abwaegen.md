---
title: "Lösung – Utility-Klassen und Komponenten-CSS abwägen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-spezifitaet-und-kaskade", "utility-klassen-und-komponenten-css-abwaegen"]
taskId: "web-v103-utility-klassen-und-komponenten-css-abwaegen"
relatedExercise: "web-development/css/css-spezifitaet-und-kaskade/utility-klassen-und-komponenten-css-abwaegen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösung

Ein allgemeiner Abstand kann Utility sein, ein wiederkehrendes Kartenlayout ist eine Komponente und ein einmaliger Ausreißer sollte kritisch geprüft werden.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.

## Beispielhafte Begründung

Eine robuste Umsetzung beginnt mit verständlichem Markup, ergänzt Gestaltung nur dort, wo sie Verhalten nicht verdeckt, und nutzt JavaScript für klare Zustände statt für versteckte Magie. So bleibt die Seite auch dann nachvollziehbar, wenn Daten fehlen, ein Gerät klein ist oder eine Aktion nicht sofort gelingt.
