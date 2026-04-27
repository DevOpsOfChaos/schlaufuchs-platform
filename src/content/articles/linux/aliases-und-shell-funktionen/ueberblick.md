---
title: "Aliases und Shell-Funktionen"
description: "Überblick über Aliases, Shell-Funktionen und kleine Komfortabkürzungen in der Linux-Shell."
subject: linux
section: "Shell"
topicPath:
  - "aliases-und-shell-funktionen"
  - "ueberblick"
learningGoals:
  - "Du kannst Aliases und Shell-Funktionen als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Aliases werden manchmal so stark genutzt, dass Arbeitsweisen auf anderen Systemen nicht reproduzierbar sind."
keyTakeaways:
  - "Aliases kürzen einfache Befehle ab."
  - "Shell-Funktionen eignen sich für kleine Abläufe."
  - "Für reproduzierbare Skripte sind Abkürzungen vorsichtig zu nutzen."
recognizeSignals:
  - "Ein Befehl verhält sich anders als erwartet."
  - "`type` zeigt alias oder function."
selfCheckPoints:
  - "Kann ich Aliases und Shell-Funktionen in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "alias"
  - "funktionen"
draft: false
---

# Aliases und Shell-Funktionen

![Schaubild zu Aliases und Shell-Funktionen.](/schlaufuchs-platform/images/overviews/v150/aliases-und-shell-funktionen.svg)

*Das Schaubild zeigt, wie Kurzformen und Funktionen Shell-Arbeit wiederholbar machen.*



Aliases und Shell-Funktionen erlauben, häufig genutzte Befehle abzukürzen oder kleine Abläufe direkt in der Shell zu kapseln.

## Einordnung

Sie vereinfachen wiederkehrende Arbeit, können aber verwirren, wenn Befehle nicht mehr das tun, was ihr Name vermuten lässt.

## Zentrale Aspekte

- **Alias:** Eine einfache Textersetzung für kurze Befehle.
- **Funktion:** Sie kann Argumente verarbeiten und mehrere Befehle ausführen.
- **Startdateien:** Definitionen gelten temporär oder dauerhaft.
- **Transparenz:** `type` zeigt Alias, Funktion oder Programm an.

## Beispiele und Zusammenhang

Ein Alias wie `ll="ls -lah"` beschleunigt eine häufige Ansicht. Eine Funktion kann Projektstatus anzeigen und Tests starten.

## Abgrenzung

Ein Alias ist kein eigenes Programm und kann in Skripten oder anderen Umgebungen fehlen.

## Häufige Missverständnisse

Aliases werden manchmal so stark genutzt, dass Arbeitsweisen auf anderen Systemen nicht reproduzierbar sind.

## Kurz zusammengefasst

- Aliases kürzen einfache Befehle ab.
- Shell-Funktionen eignen sich für kleine Abläufe.
- Für reproduzierbare Skripte sind Abkürzungen vorsichtig zu nutzen.
