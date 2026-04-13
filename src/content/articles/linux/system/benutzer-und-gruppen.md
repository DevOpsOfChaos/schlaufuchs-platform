---
title: Benutzer und Gruppen verstehen
description: Ordne Benutzer, Gruppen und ihre Rolle für Zugriffe im Linux-System ein.
subject: linux
section: system
topicPath:
- system
- benutzer-und-gruppen
learningGoals:
- Du verstehst Benutzer als Identitäten und Gruppen als gemeinsame Rechteebene.
- Du liest Ausgaben von whoami, groups und id bewusster.
- Du erkennst, warum Benutzer, Gruppen und Rechte zusammen gedacht werden.
practiceIdeas:
- Vergleiche whoami, groups und id in der Lernshell.
- Prüfe mit ls -l oder stat, wem eine Datei gehört.
- Erkläre den Unterschied zwischen privatem Zugriff und Gruppenzugriff an einem eigenen Beispiel.
commonMistakes:
- Benutzer und Gruppen als dasselbe zu behandeln.
- Rechte losgelöst von Identitäten zu betrachten.
- Zu denken, dass jede Datei automatisch für alle gleich gedacht ist.
keyTakeaways:
- Benutzer beschreiben Identitäten im System.
- Gruppen bündeln mehrere Benutzer unter gemeinsamen Regeln.
- Rechte werden erst mit Benutzer und Gruppe wirklich verständlich.
tags:
- linux
- benutzer
- gruppen
- system
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Benutzer und Gruppen verstehen direkt oder greift eng benachbarte Begriffe aus system auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich verstehst Benutzer als Identitäten und Gruppen als gemeinsame Rechteebene?
- Kann ich liest Ausgaben von whoami, groups und id bewusster?
- Kann ich erkennst, warum Benutzer, Gruppen und Rechte zusammen gedacht werden?
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
