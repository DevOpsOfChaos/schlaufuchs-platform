---
title: "find und prune"
description: "Überblick über `find -prune` zum gezielten Ausschließen von Verzeichnissen bei Dateisuchen."
subject: linux
section: "Dateisuche"
topicPath:
  - "find-prune"
  - "ueberblick"
learningGoals:
  - "Du kannst find und prune als allgemeinen Begriff einordnen."
  - "Du kennst Zweck, typische Teilaspekte und Grenzen des Themas."
  - "Du kannst häufige Missverständnisse erkennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Viele Fehler entstehen, wenn -prune wie ein gewöhnlicher Ausschlussfilter verstanden und falsch mit -name kombiniert wird."
keyTakeaways:
  - "find -prune beendet die Suche in ausgewählten Verzeichniszweigen, bevor sie weiter durchlaufen werden."
  - "Damit lassen sich große, irrelevante oder gefährliche Bereiche wie node_modules, .git oder gemountete Backups überspringen."
  - "prune ist kein nachträglicher Filter. Es verändert den Suchweg selbst."
recognizeSignals:
  - "Es geht um find und prune, wenn die Reihenfolge der Ausdrücke in find ist entscheidend."
  - "Das Thema wird relevant, wenn Beispiele wie eine Suche kann .git-Verzeichnisse überspringen, damit Treffer in internen Git-Dateien nicht stören."
selfCheckPoints:
  - "Kann ich find und prune in eigenen Worten erklären?"
  - "Kann ich Zweck, Grenze und ein typisches Beispiel unterscheiden?"
  - "Kann ich ein häufiges Missverständnis zum Thema benennen?"
level: einfach
tags:
  - "linux"
  - "find"
  - "suche"
  - "shell"
draft: false
---
# find und prune

## Begriff

find -prune beendet die Suche in ausgewählten Verzeichniszweigen, bevor sie weiter durchlaufen werden.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Damit lassen sich große, irrelevante oder gefährliche Bereiche wie node_modules, .git oder gemountete Backups überspringen.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Die Reihenfolge der Ausdrücke in find ist entscheidend.
- prune verhindert das Betreten eines Verzeichnisses, nicht nur die Ausgabe.
- Kombinationen mit -o und -print müssen sorgfältig gelesen werden.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

prune ist kein nachträglicher Filter. Es verändert den Suchweg selbst.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Eine Suche kann .git-Verzeichnisse überspringen, damit Treffer in internen Git-Dateien nicht stören.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Viele Fehler entstehen, wenn -prune wie ein gewöhnlicher Ausschlussfilter verstanden und falsch mit -name kombiniert wird.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

find und prune steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
