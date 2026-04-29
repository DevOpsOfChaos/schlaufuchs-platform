---
title: "ESD und empfindliche Bauteile"
description: "Einordnung elektrostatischer Entladung und des Schutzes empfindlicher Bauteile."
subject: "elektrotechnik"
section: "Sicherheit"
topicPath: ["esd-und-empfindliche-bauteile", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Sicherheit"]
draft: false
---
# ESD und empfindliche Bauteile

![Schaubild zu ESD und empfindlichen Bauteilen.](/schlaufuchs-platform/images/overviews/v150/esd-und-empfindliche-bauteile.svg)

*Das Schaubild zeigt, wie elektrostatische Entladung Bauteile belasten kann und wo Schutzmaßnahmen greifen.*



ESD steht für elektrostatische Entladung. Dabei gleichen sich elektrische Ladungen sehr schnell aus. Für Menschen ist eine kleine Entladung oft nur als Funke spürbar oder gar nicht bemerkbar, empfindliche Halbleiter können dabei jedoch beschädigt werden.

## Einordnung

Moderne Mikrocontroller, Sensoren, MOSFETs und Schnittstellenbausteine besitzen sehr kleine Strukturen. Dadurch können kurze Spannungsspitzen genügen, um Bauteile sofort oder schleichend zu schädigen. ESD-Schutz betrifft deshalb Lagerung, Handhabung, Aufbau und Schaltungsdesign.

## Zentrale Aspekte

- **Ladungsaufbau durch Reibung oder Kleidung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **ESD-Armband, Matte und leitfähige Verpackung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Schutzdioden und TVS-Bauteile an Schnittstellen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **latente Schäden, die erst später auffallen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein MOSFET-Gate kann durch Berührung ohne Schutz beschädigt werden. Externe Anschlüsse wie USB, Tasterleitungen oder Steckverbinder können ESD-Impulse in eine Schaltung einleiten. Schutzbauteile leiten solche Impulse kontrollierter ab, wenn sie passend platziert sind.

## Abgrenzung

ESD-Schutz bedeutet nicht, dass eine Schaltung unzerstörbar wird. Schutzmaßnahmen reduzieren Risiken, müssen aber zur Schnittstelle, zum Gehäuse, zur Masseführung und zur erwarteten Umgebung passen.

## Häufige Missverständnisse

Häufig wird ESD ignoriert, solange Bauteile zunächst funktionieren. Latente Schäden können aber später zu Ausfällen führen. Ein weiterer Fehler ist, Schutzbauteile weit entfernt vom Stecker zu platzieren, sodass der Impuls bereits durch empfindliche Bereiche fließt.

## Kurz zusammengefasst

- ESD kann Bauteile auch ohne sichtbaren Funken schädigen.
- Schutz beginnt bei Handhabung und Layout.
- Externe Anschlüsse brauchen besondere Aufmerksamkeit.
