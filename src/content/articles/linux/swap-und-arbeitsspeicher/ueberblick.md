---
title: "Swap und Arbeitsspeicher"
description: "Allgemeiner Überblick über swap und arbeitsspeicher und die wichtigsten Zusammenhänge."
subject: "linux"
section: "System"
topicPath: ["swap-und-arbeitsspeicher", "ueberblick"]
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
# Swap und Arbeitsspeicher

Swap ist Speicherplatz auf Datenträgern, den Linux nutzen kann, wenn physischer Arbeitsspeicher knapp wird.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Swap kann Abstürze durch Speichermangel vermeiden.
- Zugriffe auf Swap sind meist deutlich langsamer als RAM.
- Die Nutzung hängt von Speicherbedarf und Lastprofil ab.

## Abgrenzung

Swap ist keine vollwertige RAM-Erweiterung.

## Beispiele

- Ein System lagert selten genutzte Speicherseiten aus.
- Ein Server wird langsam, wenn stark geswappt wird.

## Häufiges Missverständnis

Häufig wird Swap entweder als unnötig oder als Lösung für jedes Speicherproblem betrachtet.

## Kurz zusammengefasst

Swap ist ein Sicherheitsnetz, aber kein Ersatz für ausreichenden Arbeitsspeicher.
