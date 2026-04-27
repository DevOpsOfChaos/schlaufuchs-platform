---
title: "Shell-Sicherheit"
description: "Überblick über sichere Shell-Nutzung, Quoting und Risiken beim Ausführen zusammengesetzter Befehle."
subject: linux
section: "Sicherheit"
topicPath:
  - "shell-sicherheit"
  - "ueberblick"
learningGoals:
  - "Du kannst Shell-Sicherheit als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Befehle mit unquotierten Variablen zu bauen und anzunehmen, dass Dateinamen immer einfach aussehen."
keyTakeaways:
  - "Shell-Expansionen müssen bewusst kontrolliert werden."
  - "Quoting schützt vor vielen unerwarteten Zerlegungen."
  - "Erhöhte Rechte vergrößern das Risiko kleiner Fehler."
recognizeSignals:
  - "Skripte verarbeiten Dateinamen oder Benutzereingaben."
  - "Ein Befehl wird mit `sudo` oder automatisiert ausgeführt."
selfCheckPoints:
  - "Kann ich Shell-Sicherheit in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "sicherheit"
  - "quoting"
draft: false
---

# Shell-Sicherheit

Shell-Sicherheit bedeutet, Eingaben, Variablen, Pfade und Rechte so zu behandeln, dass Befehle nicht unerwartet oder gefährlich ausgeführt werden.

## Einordnung

Die Shell ist mächtig, weil sie Programme, Dateien und Expansionen kombiniert. Genau diese Stärke kann riskant werden, wenn Benutzereingaben oder Dateinamen unkontrolliert in Befehle gelangen.

## Zentrale Aspekte

- Variablen sollten meist gequotet werden.
- Benutzereingaben gehören nicht ungeprüft in Befehlszeilen.
- Globbing kann mehr Dateien treffen als erwartet.
- Skripte mit erhöhten Rechten brauchen besonders enge Grenzen.

## Beispiele und Zusammenhang

Ein Dateiname mit Leerzeichen oder Semikolon kann ein schlecht geschriebenes Skript anders wirken lassen als geplant.

## Abgrenzung

Shell-Sicherheit ist nicht nur ein Thema für Server. Auch lokale Wartungsskripte können Daten löschen oder Rechte falsch setzen.

## Häufige Missverständnisse

Befehle mit unquotierten Variablen zu bauen und anzunehmen, dass Dateinamen immer einfach aussehen.

## Kurz zusammengefasst

- Shell-Expansionen müssen bewusst kontrolliert werden.
- Quoting schützt vor vielen unerwarteten Zerlegungen.
- Erhöhte Rechte vergrößern das Risiko kleiner Fehler.
