---
title: Textausgaben analysieren und filtern
description: Entscheide, wann grep, cut oder wc für eine kleine Shell-Analyseaufgabe passend ist.
subject: linux
section: Shell
topicPath:
  - shell
  - textwerkzeuge-mit-grep-cut-und-wc
  - textausgaben-analysieren-und-filtern
level: einfach
draft: false
tags:
  - linux
  - grep
  - cut
  - wc
hintPoints:
  - "Frage zuerst, ob du Zeilen finden, Felder herausziehen oder nur zählen willst."
  - "Prüfe bei cut immer, welcher Trenner verwendet wird."
selfCheckPoints:
  - "Hast du das passende Werkzeug zur Aufgabe gewählt?"
  - "Kannst du erklären, warum die beiden anderen Werkzeuge hier weniger passend wären?"
transferIdeas:
  - "Übertrage die Idee auf eine kleine CSV- oder Logdatei."
  - "Baue aus zwei Werkzeugen eine kleine Befehlskette."
reflectionPrompt: "Welche Frage hilft dir am meisten dabei, grep, cut und wc auseinanderzuhalten?"
---

## Aufgabe 1: Werkzeug wählen

Du willst aus einer Textdatei nur die Zeilen sehen, in denen das Wort `Fehler` vorkommt.

- Welches Werkzeug ist am passendsten?
- Warum?

## Aufgabe 2: Felder lesen

Eine Datei enthält Zeilen wie:

```text
anna:adm
max:plugdev
```

Du möchtest nur die Gruppennamen ausgeben.

- Welches Werkzeug passt?
- Worauf musst du achten?

## Aufgabe 3: Ausgabe zusammenfassen

Du möchtest nur wissen, wie viele Zeilen eine Ausgabe enthält.

- Welches Werkzeug passt?
- Warum ist das etwas anderes als Filtern?
