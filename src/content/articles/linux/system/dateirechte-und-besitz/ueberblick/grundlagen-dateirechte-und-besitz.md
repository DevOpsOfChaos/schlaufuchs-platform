---
title: Linux – Dateirechte und Besitz im Überblick
description: Erklärt Benutzer, Gruppen, Rechte und Besitz als Grundlage für Zugriffskontrolle.
subject: linux
section: System
topicPath:
  - "system"
  - "dateirechte-und-besitz"
  - "ueberblick"
learningGoals:
  - "Den Themenbereich Dateirechte und Besitz im Überblick allgemein einordnen."
  - "Grundbegriffe, Nutzen und typische Grenzen unterscheiden."
  - "Einzelne Lernseiten als Vertiefung statt als Einstieg lesen."
practiceIdeas:
  - "Erstelle eine kurze Begriffskarte mit Zweck, typischem Beispiel und häufiger Verwechslung."
  - "Ordne vorhandene Lernseiten danach, welchen Teil des Überblicks sie vertiefen."
  - "Formuliere zu jedem Abschnitt eine eigene Kontrollfrage."
commonMistakes:
  - "Besitz und Rechte zu vermischen."
  - "Verzeichnisrechte wie Dateirechte zu lesen."
keyTakeaways:
  - "Linux-Zugriff hängt von Benutzer, Gruppe und Rechten ab."
  - "Dateien und Verzeichnisse müssen getrennt gelesen werden."
  - "Rechte erklären viele Zugriffsfehler systematisch."
recognizeSignals:
  - "Ein Unterthema enthält viele einzelne Situationsseiten, aber es fehlt eine gemeinsame Einordnung."
  - "Begriffe werden in Aufgaben verwendet, bevor Zweck und Zusammenhang klar sind."
  - "Man muss entscheiden, welche Vertiefungsseite als nächstes sinnvoll ist."
selfCheckPoints:
  - "Kann ich das Thema in zwei bis drei Sätzen allgemein erklären?"
  - "Kann ich Zweck, Vorgehen und typische Fehler getrennt benennen?"
  - "Kann ich erklären, welche Vertiefungsseite zu welcher Frage passt?"
level: einfach
tags:
  - "linux"
  - "rechte"
  - "besitz"
  - "chmod"
  - "überblick"
draft: false
---

## Überblick

Linux schützt Dateien und Verzeichnisse über Eigentümer, Gruppen und Rechte. Dadurch wird festgelegt, wer lesen, schreiben oder ausführen darf.

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt nicht jede Spezialaufgabe im Detail, sondern ordnet die wichtigsten Begriffe, Ziele und Entscheidungen ein. Die einzelnen Lernseiten im gleichen Themenfeld können danach als Vertiefungen gelesen werden.

## Begriff und Zweck

Dateirechte regeln Zugriff. Besitz legt fest, welchem Benutzer und welcher Gruppe eine Datei zugeordnet ist.

## Typische Bestandteile

Wichtig sind Benutzer, Gruppe, andere, sowie die Rechte Lesen, Schreiben und Ausführen. Bei Verzeichnissen haben diese Rechte teilweise andere praktische Bedeutungen als bei Dateien.

## Vorgehensweise

Zuerst wird mit einer langen Liste geprüft, wem die Datei gehört. Danach werden die drei Rechteblöcke gelesen und auf den konkreten Zugriff bezogen.

## Abgrenzung

Rechteprobleme sind nicht automatisch Programmfehler. Oft fehlt nur ein Leserecht, Schreibrecht oder Ausführrecht an der richtigen Stelle.

## Typische Fehler

Viele verwechseln Ausführen bei Dateien mit Betreten bei Verzeichnissen. Bei Verzeichnissen ist das Ausführrecht nötig, um in den Ordner hineinzugelangen.

## Orientierung für weitere Lernseiten

Eine gute Reihenfolge ist meist:

1. zuerst die Grundbegriffe klären,
2. danach einfache Beispiele lesen,
3. anschließend Sonderfälle oder Fehlersituationen betrachten,
4. zum Schluss Aufgaben nutzen, um die eigene Erklärung zu prüfen.

<blockquote>
<strong>Merksatz:</strong> Eine Überblicksseite beantwortet zuerst „Worum geht es überhaupt?“ und erst danach „Wie löse ich einen bestimmten Fall?“.
</blockquote>
