---
title: Pfade zerlegen und eindeutig angeben
description: Nutze basename, dirname und realpath, um Pfade sauber zu lesen und in ihre Teile zu zerlegen.
subject: linux
section: Shell
topicPath:
  - shell
  - pfade-mit-basename-dirname-und-realpath
  - pfade-zerlegen-und-eindeutig-angeben
level: einfach
draft: false
tags:
  - pfad
  - basename
  - dirname
hintPoints:
  - "Frage zuerst: Welcher Teil ist der Name, welcher Teil ist das Verzeichnis?"
  - "Achte darauf, ob ein relativer oder vollständiger Pfad gemeint ist."
selfCheckPoints:
  - "Kannst du Dateiname und Verzeichnis an einem Beispiel sauber unterscheiden?"
  - "Bleibt klar, wann ein vollständiger Pfad hilfreicher ist als ein relativer?"
transferIdeas:
  - "Übertrage die Idee auf Pfade in einem Projektordner oder in /etc."
  - "Erkläre dieselbe Pfadangabe einmal als Wegbeschreibung und danach mit Shell-Begriffen."
reflectionPrompt: "Was hilft dir am meisten dabei, Pfade in der Shell nicht nur zu sehen, sondern strukturiert zu lesen?"
---

## Aufgabe 1: Pfadteile trennen

Zerlege einen gegebenen Pfad in Dateiname und übergeordnetes Verzeichnis.

## Aufgabe 2: Werkzeug wählen

Begründe, welches Werkzeug besser passt:

- Du willst nur den Dateinamen sehen.
- Du willst wissen, in welchem Verzeichnis die Datei liegt.
- Du willst den vollständigen Pfad eindeutig ausgeben.

## Aufgabe 3: Pfad deuten

Erkläre, warum ein vollständiger Pfad in einer Fehlersuche oft hilfreicher ist als eine ungenaue Angabe wie „liegt irgendwo im Projektordner“.
