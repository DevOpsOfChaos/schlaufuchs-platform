---
title: "Grundlagen: Paketverwaltung und Updates"
description: "Allgemeiner Überblick über Pakete, Repositories, Abhängigkeiten und sichere Aktualisierung unter Linux."
subject: linux
section: "System"
topicPath:
  - system
  - paketverwaltung-und-updates
  - grundlagen-paketverwaltung-und-updates
learningGoals:
  - "Du erklärst Paketverwaltung als geordnetes Installieren und Aktualisieren von Software."
  - "Du beschreibst Repositories als vertrauenswürdige Softwarequellen."
  - "Du unterscheidest Installation, Update und Upgrade."
practiceIdeas: []
commonMistakes:
  - "Software beliebig aus dem Internet herunterzuladen."
  - "Update und Upgrade gleichzusetzen."
  - "Abhängigkeiten als störende Zusatzpakete zu betrachten."
keyTakeaways:
  - "Paketverwaltung hält Software und Abhängigkeiten nachvollziehbar."
  - "Repositories sind zentrale Quellen für geprüfte Pakete."
  - "Regelmäßige Updates verbessern Sicherheit und Stabilität."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - linux
  - pakete
  - updates
  - repository
draft: false
---
## Begriff

Die **Paketverwaltung** ist das System, mit dem Linux-Distributionen Software installieren, aktualisieren und entfernen. Pakete enthalten Programme, Bibliotheken, Konfigurationsvorlagen oder Dokumentation.

## Repositories

Pakete werden meist aus Repositories bezogen. Das sind verwaltete Softwarequellen einer Distribution oder eines Anbieters. Die Paketverwaltung kennt diese Quellen und kann daraus passende Versionen herunterladen.

## Abhängigkeiten

Viele Programme benötigen weitere Bibliotheken oder Werkzeuge. Diese Beziehungen heißen Abhängigkeiten. Die Paketverwaltung versucht, sie automatisch passend zu installieren und Konflikte zu vermeiden.

## Update und Upgrade

Ein Update aktualisiert oft zunächst die Paketlisten. Ein Upgrade installiert neuere Paketversionen. Die genauen Begriffe unterscheiden sich je nach Paketmanager, die Grundidee bleibt aber: Zuerst wissen, was verfügbar ist; dann gezielt aktualisieren.

<div class="note-panel">
  <p><strong>Merke:</strong> Paketverwaltung ist die geordnete Softwareversorgung eines Linux-Systems: installieren, aktualisieren, entfernen und Abhängigkeiten im Blick behalten.</p>
</div>
