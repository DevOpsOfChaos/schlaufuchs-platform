---
title: "Benutzer und Gruppen verstehen"
description: "Ordne Benutzer, Gruppen und ihre Rolle für Zugriffe im Linux-System ein."
subject: "linux"
section: "system"
topicPath: ["system", "benutzer-und-gruppen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "system"]
draft: false
---
## Benutzer als Systemidentitäten

Ein Benutzer steht im Linux-System nicht nur für einen Namen, sondern für eine konkrete Identität mit Homeverzeichnis, Gruppen und Rechten.

## Gruppen als gemeinsame Ebene

Gruppen helfen, Zugriffe nicht für jede Person einzeln zu verwalten. Stattdessen kann mehreren Benutzern über eine Gruppe gemeinsamer Zugriff gegeben werden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Datei für ein kleines Team</h3>
  <p>Wenn eine Datei dem Benutzer <code>fox</code> gehört, aber auch Mitglieder der Gruppe <code>adm</code> lesen dürfen, dann reicht es nicht, nur den Besitzer anzusehen. Erst Benutzer, Gruppe und Rechte zusammen beschreiben die Lage.</p>
</div>

## Anwendungen

Sobald du mit Teamordnern, Rechten oder Servern arbeitest, musst du diese Struktur verstehen. Sie ist Grundlage für Ordnung und Sicherheit.
