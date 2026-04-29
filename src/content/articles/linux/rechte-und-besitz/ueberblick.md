---
title: "Rechte und Besitz"
description: "Allgemeiner Überblick über Dateirechte, Besitzer, Gruppen und Zugriffskontrolle unter Linux."
subject: "linux"
section: "Dateisystem"
topicPath: ["rechte-und-besitz", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisystem"]
draft: false
---
# Rechte und Besitz
Rechte und Besitz bestimmen unter Linux, wer auf eine Datei oder ein Verzeichnis zugreifen darf. Jede Datei hat einen Besitzer und eine Gruppe. Die klassischen Rechte unterscheiden drei Rollen: Besitzer, Gruppe und andere. Für jede Rolle können Lesen, Schreiben und Ausführen erlaubt oder verboten sein.

Diese Rechte schützen Daten, Programme und Systembereiche. Sie ermöglichen aber auch Zusammenarbeit, etwa wenn mehrere Nutzer über eine Gruppe Zugriff auf bestimmte Dateien erhalten.

## Lesen, Schreiben, Ausführen

Bei Dateien bedeutet Lesen, den Inhalt ansehen zu können. Schreiben bedeutet, den Inhalt verändern zu können. Ausführen bedeutet, die Datei als Programm oder Skript starten zu können.

Bei Verzeichnissen ist die Bedeutung anders. Lesen erlaubt, Einträge aufzulisten. Schreiben erlaubt, Einträge anzulegen oder zu entfernen. Ausführen erlaubt, das Verzeichnis zu betreten und Pfade darin aufzulösen. Deshalb kann ein fehlendes Ausführrecht auf einem Verzeichnis Zugriffe blockieren, obwohl Dateirechte scheinbar passen.

## Besitzer und Gruppen

Der Besitzer ist meist der Nutzer, der eine Datei erstellt hat. Die Gruppe kann den Zugriff für mehrere Nutzer bündeln. Mit `chown` wird der Besitz geändert, mit `chmod` werden Rechte geändert. Beide Befehle sollten bewusst eingesetzt werden, weil sie Sicherheit und Funktion beeinflussen.

## Typische Situationen

Ein Skript lässt sich nicht starten, weil das Ausführrecht fehlt. Ein Webserver kann eine Datei nicht lesen, weil Gruppe oder Rechte nicht passen. Ein Nutzer kann eine Datei sehen, aber nicht ändern, weil Schreibrechte fehlen. Solche Fehler erscheinen oft als `Permission denied`.

## Häufige Missverständnisse

`chmod 777` wirkt wie eine schnelle Lösung, öffnet aber Lesen, Schreiben und Ausführen für alle. Das ist selten angemessen. Ein anderes Missverständnis ist, dass Ausführrechte bei Dateien und Verzeichnissen dasselbe bedeuten. Gerade bei Verzeichnissen sind sie für Pfadauflösung zentral.

## Kurz zusammengefasst

Linux-Rechte verbinden Schutz, Ordnung und Zusammenarbeit. Wer Besitzer, Gruppe, Rollen und Rechte unterscheiden kann, löst Zugriffsprobleme gezielt statt mit riskanten Pauschalrechten.
