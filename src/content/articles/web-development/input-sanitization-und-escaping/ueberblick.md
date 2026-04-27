---
title: "Input Sanitization und Escaping"
description: "Allgemeiner Überblick über Eingabebereinigung, Escaping und sichere Ausgabe von Nutzerdaten im Web."
subject: web-development
section: "Sicherheit"
topicPath:
  - "input-sanitization-und-escaping"
  - "ueberblick"
learningGoals:
  - "Du kannst Input Sanitization und Escaping als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Daten werden oft einmal beim Speichern gereinigt und später automatisch als sicher betrachtet."
keyTakeaways:
  - "Nutzerdaten müssen an Grenzen bewusst behandelt werden."
  - "Escaping ist kontextabhängig."
  - "Validierung, Sanitization und sichere Ausgabe ergänzen sich."
recognizeSignals:
  - "Nutzereingaben erscheinen in HTML, URLs, APIs oder Datenbanken."
  - "Sonderzeichen verändern Struktur oder Verhalten."
selfCheckPoints:
  - "Kann ich Input Sanitization und Escaping in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "sicherheit"
  - "escaping"
  - "input"
draft: false
---

# Input Sanitization und Escaping

Input Sanitization und Escaping verhindern, dass Nutzereingaben ungeprüft als Code, HTML oder SQL interpretiert werden.

## Einordnung

Webanwendungen bewegen Daten zwischen Formularen, URLs, APIs, Datenbanken und HTML. An jeder Grenze muss klar sein, ob Daten geprüft, gespeichert, transformiert oder ausgegeben werden.

## Zentrale Aspekte

- **Kontext:** Escaping hängt von HTML, Attribut, JavaScript, CSS oder SQL ab.
- **Validierung:** Eingaben werden auf erwartete Formate geprüft.
- **Bereinigung:** Unerwünschte Inhalte werden entfernt oder normalisiert.
- **Ausgabe:** Auch gespeicherte Daten müssen sicher dargestellt werden.

## Beispiele und Zusammenhang

Ein Kommentarformular darf Text anzeigen, aber ein eingegebenes `<script>` nicht ausführen. In SQL dürfen Nutzerdaten nicht direkt in Abfragetext geklebt werden.

## Abgrenzung

Sanitization verändert oder begrenzt Eingaben; Escaping schützt die Ausgabe im jeweiligen Kontext.

## Häufige Missverständnisse

Daten werden oft einmal beim Speichern gereinigt und später automatisch als sicher betrachtet.

## Kurz zusammengefasst

- Nutzerdaten müssen an Grenzen bewusst behandelt werden.
- Escaping ist kontextabhängig.
- Validierung, Sanitization und sichere Ausgabe ergänzen sich.
