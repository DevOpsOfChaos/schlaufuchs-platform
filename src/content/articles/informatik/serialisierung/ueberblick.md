---
title: "Serialisierung"
description: "Überblick über Serialisierung als Umwandlung von Datenstrukturen in übertragbare oder speicherbare Formate."
subject: informatik
section: "Daten"
topicPath:
  - "serialisierung"
  - "ueberblick"
learningGoals:
  - "Du kannst Serialisierung als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird angenommen, JSON enthalte dieselben Typen wie die Programmiersprache."
keyTakeaways:
  - "Serialisierung macht Daten speicher- und übertragbar."
  - "Formatwahl beeinflusst Lesbarkeit, Strenge und Effizienz."
  - "Beim Einlesen sind Validierung und Sicherheit wichtig."
recognizeSignals:
  - "Es geht um Serialisierung als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich Serialisierung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "serialisierung"
  - "daten"
draft: false
---

# Serialisierung

Serialisierung wandelt Datenstrukturen in eine Form um, die gespeichert oder übertragen werden kann. Deserialisierung rekonstruiert daraus wieder verwendbare Daten im Programm. Ohne Serialisierung könnten Objekte, Listen oder Einstellungen nicht einfach in Dateien, APIs oder Nachrichten abgelegt werden.

## Einordnung

Formate wie JSON, XML, YAML, CSV oder Binärformate sind verschiedene Arten, Daten zu repräsentieren. Die Wahl hängt davon ab, ob Menschen die Daten lesen sollen, wie streng die Struktur ist und wie wichtig Effizienz ist.

## Zentrale Aspekte

- **Umwandlung von Objekten in Text oder Bytes:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Schema und erwartete Struktur:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Verlust von Typinformationen je nach Format:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Sicherheit beim Einlesen fremder Daten:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Eine Web-API serialisiert eine Antwort oft als JSON. Eine Konfigurationsdatei kann YAML verwenden. Eine Datenbank exportiert Tabellen möglicherweise als CSV. Beim Einlesen müssen Typen, Pflichtfelder und Versionen geprüft werden.

## Abgrenzung

Serialisierung ist nicht automatisch verlustfrei. Datumswerte, spezielle Zahlen, Klasseninstanzen oder Referenzen können je nach Format Zusatzregeln brauchen. Außerdem kann Deserialisierung unsicher sein, wenn fremde Daten ungeprüft ausführbare Strukturen erzeugen.

## Häufige Missverständnisse

Häufig wird angenommen, JSON enthalte dieselben Typen wie die Programmiersprache. Tatsächlich fehlen dort viele Spezialtypen. Ein weiterer Fehler ist, alte gespeicherte Datenformate nicht mit Versionsänderungen kompatibel zu halten.

## Kurz zusammengefasst

- Serialisierung macht Daten speicher- und übertragbar.
- Formatwahl beeinflusst Lesbarkeit, Strenge und Effizienz.
- Beim Einlesen sind Validierung und Sicherheit wichtig.
