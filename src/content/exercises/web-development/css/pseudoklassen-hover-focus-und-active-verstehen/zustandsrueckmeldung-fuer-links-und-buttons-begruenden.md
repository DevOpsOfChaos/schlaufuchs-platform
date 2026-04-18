---
title: Zustandsrückmeldung für Links und Buttons begründen
description: Begründe, warum hover, focus und active unterschiedliche Rollen haben und welche Rückmeldung in einer Oberfläche sinnvoll ist.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - pseudoklassen-hover-focus-und-active-verstehen
  - zustandsrueckmeldung-fuer-links-und-buttons-begruenden
level: einfach
draft: false
tags:
  - css
  - pseudoklassen
  - fokus
hintPoints:
  - "Frage immer zuerst: Welcher Nutzungszustand soll hier sichtbar werden?"
  - "Trenne Maus, Tastatur und Klickmoment sauber."
  - "Denke an Rückmeldung, nicht nur an Dekoration."
selfCheckPoints:
  - "Hast du hover, focus und active getrennt erklärt?"
  - "Benennst du die besondere Rolle von focus?"
  - "Ist klar, warum Zustände die Bedienung unterstützen?"
transferIdeas:
  - "Übertrage die Aufgabe auf Menüs, Formulare oder Karten mit klickbaren Bereichen."
  - "Vergleiche einen Link im Fließtext mit einem großen Call-to-Action-Button."
reflectionPrompt: "Warum ist eine Oberfläche unruhig oder unzugänglich, wenn nur hover gestaltet wird?"
---

## Aufgabe 1: Zustände unterscheiden

Ein Button reagiert auf der Seite auf drei Situationen:

- Maus liegt darüber,
- Tastaturfokus liegt darauf,
- Button wird gerade geklickt.

Ordne diesen Situationen die Pseudoklassen <code>:hover</code>, <code>:focus</code> und <code>:active</code> zu und erkläre kurz, was jeweils sichtbar gemacht werden sollte.

## Aufgabe 2: Denkfehler prüfen

Jemand gestaltet nur <code>:hover</code>, entfernt aber die sichtbare Fokus-Rückmeldung vollständig.

Erkläre, warum das problematisch ist.

## Aufgabe 3: Rückmeldung begründen

Eine wichtige Aktion soll im Klickmoment leicht eingedrückt wirken.

Begründe, warum dieser Effekt eher zu <code>:active</code> passt als zu einem dauerhaften Normalzustand.
