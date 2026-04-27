---
title: "umask und Standardrechte"
description: "Einordnung von umask als Vorgabe für neu erzeugte Datei- und Verzeichnisrechte."
subject: linux
section: "Rechte und Sicherheit"
topicPath:
  - "umask-und-standardrechte"
  - "ueberblick"
learningGoals:
  - "Du kannst umask und Standardrechte als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird `umask` mit `chmod` verwechselt."
keyTakeaways:
  - "umask entfernt Standardrechte bei neuen Dateien."
  - "Sie ist wichtig für Privatsphäre und Teamarbeit."
  - "Vorhandene Dateien werden dadurch nicht automatisch geändert."
recognizeSignals:
  - "Es geht um umask und Standardrechte als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich umask und Standardrechte in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "rechte"
  - "umask"
draft: false
---

# umask und Standardrechte

`umask` legt fest, welche Rechte bei neu erzeugten Dateien und Verzeichnissen standardmäßig entfernt werden. Sie ist keine Berechtigung selbst, sondern eine Maske. Dadurch beeinflusst sie, ob neue Dateien eher privat oder gruppenfreundlich angelegt werden.

## Einordnung

Standardrechte sind wichtig, weil nicht jede Datei manuell nachbearbeitet wird. In Benutzerkonten, Diensten, Deployments und gemeinsamen Verzeichnissen entscheidet `umask` mit darüber, wer neue Dateien lesen oder verändern kann.

## Zentrale Aspekte

- **Dateirechte und Verzeichnisrechte als Ausgangswerte:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Maske als Entfernen von Rechten:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **typische Werte wie 022 oder 077:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Auswirkung auf Dienste und gemeinsame Arbeitsbereiche:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Eine `umask` von 022 führt häufig dazu, dass andere Benutzer lesen dürfen, aber nicht schreiben. Eine `umask` von 077 macht neue Dateien deutlich privater. In Gruppenprojekten kann eine passendere Maske nötig sein, damit Teammitglieder arbeiten können.

## Abgrenzung

`umask` ändert nicht rückwirkend vorhandene Dateien. Sie beeinflusst neue Erzeugungsvorgänge. Außerdem können Programme Rechte explizit setzen und dadurch Erwartungen verändern.

## Häufige Missverständnisse

Häufig wird `umask` mit `chmod` verwechselt. `chmod` ändert vorhandene Rechte, `umask` beeinflusst zukünftige Standardrechte. Ein weiterer Fehler ist, Dienste mit zu offener Maske laufen zu lassen.

## Kurz zusammengefasst

- umask entfernt Standardrechte bei neuen Dateien.
- Sie ist wichtig für Privatsphäre und Teamarbeit.
- Vorhandene Dateien werden dadurch nicht automatisch geändert.
