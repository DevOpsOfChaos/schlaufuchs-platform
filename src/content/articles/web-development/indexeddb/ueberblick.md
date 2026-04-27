---
title: "IndexedDB"
description: "Allgemeiner Überblick über IndexedDB als strukturierten Speicher im Browser."
subject: "web-development"
section: "Browser-Speicher"
topicPath:
  - "indexeddb"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird lokaler Browser-Speicher als dauerhaft garantiert betrachtet. Nutzer, Browser oder Speicherbereinigung können Daten entfernen."
keyTakeaways:
  - "IndexedDB ist ein mächtiger lokaler Speicher für Webanwendungen. Er eignet sich besonders für Offline-Fähigkeit und größere strukturierte Daten."
  - "IndexedDB ersetzt keinen Server und keine Datensicherung. Lokale Browserdaten können gelöscht, begrenzt oder gerätegebunden sein."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "web development"
  - "indexeddb"
  - "browser-speicher"
  - "daten"
draft: false
---

# IndexedDB

IndexedDB ist eine browserseitige Datenbank für größere oder strukturiertere Datenmengen, die dauerhaft lokal gespeichert werden können.

Während Cookies und einfacher Web Storage für kleine Werte gedacht sind, eignet sich IndexedDB für komplexere Offline- oder Cache-Szenarien.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Daten werden in Objekt-Speichern organisiert.
- Transaktionen schützen zusammenhängende Lese- und Schreibvorgänge.
- Die API ist asynchron, weil Speicherzugriffe die Oberfläche nicht blockieren sollen.

## Abgrenzung

IndexedDB ersetzt keinen Server und keine Datensicherung. Lokale Browserdaten können gelöscht, begrenzt oder gerätegebunden sein.

## Beispiele

- Eine Web-App kann Offline-Entwürfe lokal speichern.
- Ein Medienkatalog kann Metadaten zwischenspeichern, um schneller zu starten.

## Häufiges Missverständnis

Häufig wird lokaler Browser-Speicher als dauerhaft garantiert betrachtet. Nutzer, Browser oder Speicherbereinigung können Daten entfernen.

## Kurz zusammengefasst

IndexedDB ist ein mächtiger lokaler Speicher für Webanwendungen. Er eignet sich besonders für Offline-Fähigkeit und größere strukturierte Daten.
