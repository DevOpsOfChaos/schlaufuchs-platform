---
title: "Container-Grundlagen"
description: "Allgemeiner Überblick über Container, Images und isolierte Laufzeitumgebungen unter Linux."
subject: "linux"
section: "System"
topicPath: ["container-grundlagen", "ueberblick"]
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
# Container-Grundlagen

![Schaubild zu Container-Grundlagen.](/schlaufuchs-platform/images/overviews/v149/container-grundlagen.svg)

*Das Schaubild ordnet Image, Container und Host-Ressourcen ein.*



Container verpacken Anwendungen mit ihrer Laufzeitumgebung in eine isolierte Ausführungseinheit. Sie nutzen Funktionen des Linux-Kernels.

## Einordnung

Container sind wichtig für Entwicklung, Deployment und reproduzierbare Umgebungen. Sie sind leichter als virtuelle Maschinen, teilen aber den Host-Kernel.

## Zentrale Aspekte

- **Image:** Beschreibt Dateisystembasis und Startkonfiguration.
- **Container:** Eine laufende Instanz eines Images.
- **Isolation:** Namespaces und cgroups trennen Sicht und Ressourcen.
- **Volumes:** Daten können außerhalb des Containers dauerhaft liegen.

## Beispiele und Zusammenhang

Eine Webanwendung kann in einem Container mit definierter Node-Version laufen. Das reduziert Unterschiede zwischen lokalem System und Build-Server.

## Abgrenzung

Container sind nicht dasselbe wie virtuelle Maschinen. Sie isolieren anders und teilen den Kernel des Hosts.

## Häufige Missverständnisse

Daten im Container werden oft für dauerhaft gehalten, obwohl sie ohne Volume verloren gehen können.

## Kurz zusammengefasst

- Container isolieren Prozesse und Umgebung.
- Images beschreiben, Container laufen daraus.
- Persistente Daten brauchen bewusste Speicherstrategie.
