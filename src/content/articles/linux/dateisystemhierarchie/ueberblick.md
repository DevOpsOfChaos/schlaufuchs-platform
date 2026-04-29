---
title: "Dateisystemhierarchie"
description: "Überblick über die hierarchische Struktur typischer Linux-Dateisysteme."
subject: "linux"
section: "Dateien und Verzeichnisse"
topicPath: ["dateisystemhierarchie", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateien und Verzeichnisse"]
draft: false
---
# Dateisystemhierarchie

![Schaubild zur Linux-Dateisystemhierarchie.](/schlaufuchs-platform/images/overviews/v149/dateisystemhierarchie.svg)

*Das Schaubild ordnet wichtige Verzeichnisse und ihre typische Rolle ein.*



## Begriff und Zweck

Linux organisiert Dateien in einer hierarchischen Baumstruktur, die bei `/` beginnt. Anders als bei Laufwerksbuchstaben steht ein gemeinsamer Verzeichnisbaum im Mittelpunkt. Geräte, Systemdateien, Programme, Konfiguration, temporäre Daten und Benutzerdateien haben typische Orte.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- /home für Benutzerdaten
- /etc für Systemkonfiguration
- /var für veränderliche Daten
- /usr und /bin für Programme und Systembestandteile

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Eine Konfigurationsdatei eines Dienstes liegt oft unter `/etc`, Protokolle unter `/var/log`, persönliche Dateien unter `/home/<name>`. Externe Datenträger werden in den Baum eingehängt, etwa unter `/mnt` oder `/media`.

## Abgrenzung

Die Verzeichnisstruktur ist kein starres Lernbild, aber eine wichtige Orientierung. Distributionen können Details unterscheiden. Entscheidend ist das Prinzip: Dateien sind nicht zufällig verteilt, sondern folgen Rollen und Verantwortlichkeiten.

## Häufige Missverständnisse

Ein häufiger Fehler ist, Systemverzeichnisse wie normale Ablageorte zu behandeln. Wer ohne Verständnis Dateien in `/usr`, `/bin` oder `/etc` verändert, kann Paketverwaltung und Systemverhalten beschädigen.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
