---
title: "sudoers und Rechtevergabe"
description: "Allgemeiner Überblick über sudoers, administrative Rechte und kontrollierte Rechtevergabe."
subject: "linux"
section: "Rechte"
topicPath: ["sudoers-und-rechtevergabe", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Rechte"]
draft: false
---
# sudoers und Rechtevergabe

Die sudoers-Konfiguration legt fest, wer welche Befehle mit erhöhten Rechten ausführen darf.

Linux-Systeme trennen normale Nutzerrechte von administrativen Rechten. sudo erlaubt kontrollierte Ausnahmen.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Regeln können Nutzer, Gruppen, Hosts und erlaubte Befehle beschreiben.

Syntaxfehler in sudoers-Dateien können administrative Zugriffe beeinträchtigen.

Das Werkzeug visudo prüft die Konfiguration vor dem Speichern.

## Abgrenzung

Sudo ist keine allgemeine Sicherheitslösung. Zu breite Regeln können praktisch Root-Zugriff bedeuten.

## Beispiele und typische Situationen

Eine Admin-Gruppe darf alle Befehle mit sudo ausführen.

Ein Dienstkonto darf nur einen bestimmten Neustartbefehl nutzen.

## Häufige Missverständnisse

Häufig werden Regeln zu großzügig vergeben. Dadurch entsteht mehr Berechtigung als fachlich nötig.

## Kurz zusammengefasst

Sudoers-Regeln sollten knapp, nachvollziehbar und geprüft sein.
