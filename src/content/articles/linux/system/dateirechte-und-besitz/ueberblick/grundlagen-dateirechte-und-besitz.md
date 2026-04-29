---
title: "Linux – Dateirechte und Besitz im Überblick"
description: "Erklärt Benutzer, Gruppen, Rechte und Besitz als Grundlage für Zugriffskontrolle."
subject: "linux"
section: "System"
topicPath: ["system", "dateirechte-und-besitz", "ueberblick", "grundlagen-dateirechte-und-besitz"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "System"]
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
