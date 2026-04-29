---
title: "Input Sanitization und Escaping"
description: "Allgemeiner Überblick über Eingabebereinigung, Escaping und sichere Ausgabe von Nutzerdaten im Web."
subject: "web-development"
section: "Sicherheit"
topicPath: ["input-sanitization-und-escaping", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Sicherheit"]
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
