---
title: Pipes und Umleitungen gezielt einsetzen
description: Lies kleine Shell-Befehlsketten fachlich sauber und entscheide, wie Daten weitergegeben oder gespeichert werden.
subject: linux
section: Shell
topicPath:
  - shell
  - pipes-und-umleitungen
  - pipes-und-umleitungen-gezielt-einsetzen
level: einfach
draft: false
tags:
  - linux
  - pipe
  - redirection
hintPoints:
  - "Lies die Befehlszeile von links nach rechts."
  - "Frage bei jedem Operator, ob er Daten speichert oder an den nächsten Schritt weiterreicht."
selfCheckPoints:
  - "Kannst du Pipe und Umleitung in jedem Beispiel unterscheiden?"
  - "Bleibt klar, ob eine Datei überschrieben oder ergänzt wird?"
transferIdeas:
  - "Formuliere eine eigene kleine Befehlskette mit Pipe oder Umleitung."
  - "Erkläre einem anderen Menschen die Zeile ohne Fachjargon."
reflectionPrompt: "Welcher Unterschied zwischen Pipe und Umleitung war für dich beim Lesen von Shell-Befehlen der wichtigste?"
---

## Aufgabe 1: Zeile erklären

Erkläre in Worten, was hier passiert:

```bash
cat notizen.txt | wc
```

## Aufgabe 2: Umleitung unterscheiden

Erkläre den Unterschied zwischen:

```bash
echo Test > notiz.txt
```

und

```bash
echo Test >> notiz.txt
```

## Aufgabe 3: Zweck begründen

Wann ist eine Pipe sinnvoller als eine Umleitung in eine Datei? Nenne ein kurzes Beispiel.
