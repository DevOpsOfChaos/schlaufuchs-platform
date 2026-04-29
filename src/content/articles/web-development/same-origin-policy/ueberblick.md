---
title: "Same-Origin-Policy"
description: "Allgemeiner Überblick über die Same-Origin-Policy als Grundregel der Browser-Sicherheit."
subject: "web-development"
section: "Browser-Sicherheit"
topicPath: ["same-origin-policy", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "Browser-Sicherheit"]
draft: false
---
# Same-Origin-Policy

Die Same-Origin-Policy begrenzt, wie Dokumente und Skripte aus einer Herkunft auf Inhalte einer anderen Herkunft zugreifen dürfen.

Browser führen Code aus vielen Quellen aus. Ohne Herkunftsgrenzen könnte eine geöffnete Webseite Daten anderer Webseiten auslesen oder manipulieren.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Eine Origin wird im Kern durch Schema, Host und Port bestimmt.
- CORS erlaubt kontrollierte Ausnahmen für bestimmte Anfragen.
- Cookies, Speicher, Frames und Netzwerkzugriffe haben jeweils eigene Detailregeln.

## Abgrenzung

Same-Origin-Policy verhindert nicht jede Kommunikation mit anderen Servern. Sie begrenzt vor allem, was JavaScript aus Antworten lesen und mit fremden Dokumenten tun darf.

## Beispiele

- Eine Seite darf nicht einfach die privaten Inhalte eines anderen geöffneten Dienstes auslesen.
- Eine API kann per CORS festlegen, welche Ursprünge Antworten lesen dürfen.

## Häufiges Missverständnis

Häufig wird CORS als Serverfehler missverstanden. Tatsächlich ist es eine Browser-Schutzregel, die bewusst konfiguriert werden muss.

## Kurz zusammengefasst

Die Same-Origin-Policy ist eine zentrale Sicherheitsgrenze im Web. Sie schützt Nutzende, indem sie Herkunft und Zugriff miteinander verknüpft.
