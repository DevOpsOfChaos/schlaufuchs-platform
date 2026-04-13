---
title: Dateirechte lesen und deuten
description: Verstehe, wie Linux Rechte für Besitzer, Gruppe und andere unterscheidet.
subject: linux
section: system
topicPath:
- system
- dateirechte
learningGoals:
- Du liest einfache Rechteanzeigen wie rwx systematischer.
- Du ordnest Rechte immer zusammen mit Besitzer und Gruppe ein.
- Du erkennst typische Unterschiede zwischen privaten und gemeinsamen Dateien.
practiceIdeas:
- Vergleiche in der Lernshell mit ls -l mehrere Dateien mit unterschiedlichen Rechten.
- Nutze stat, um dieselbe Datei noch genauer zu lesen.
- Frage dich bei jeder Datei bewusst, wer lesen, schreiben oder ausführen darf.
commonMistakes:
- Nur auf rwx zu schauen und Besitzer oder Gruppe zu ignorieren.
- Ausführbar mit wichtig oder gefährlich zu verwechseln.
- Rechte zu verändern, ohne die Ausgangslage gelesen zu haben.
keyTakeaways:
- Rechte müssen immer im Kontext gelesen werden.
- Besitzer, Gruppe und andere sind getrennte Ebenen.
- Rechte lesen kommt vor Rechte ändern.
tags:
- linux
- rechte
- dateien
- chmod
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Dateirechte lesen und deuten direkt oder greift eng benachbarte Begriffe aus system auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich liest einfache Rechteanzeigen wie rwx systematischer?
- Kann ich ordnest Rechte immer zusammen mit Besitzer und Gruppe ein?
- Kann ich erkennst typische Unterschiede zwischen privaten und gemeinsamen Dateien?
---


## Drei Ebenen der Rechte

Linux unterscheidet Rechte meist für drei Ebenen:

- Besitzer
- Gruppe
- andere

Dazu kommen die bekannten Buchstaben für Lesen, Schreiben und Ausführen.

## Warum das Lesen wichtiger ist als das Ändern

Viele Lernende wollen schnell zu <code>chmod</code>. Sinnvoller ist zuerst das saubere Lesen der Ausgangslage. Nur wer erkennt, wem eine Datei gehört und welche Rechte schon gesetzt sind, kann Änderungen sinnvoll einordnen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Privat oder gemeinsam?</h3>
  <p>Eine Datei mit restriktiven Rechten wirkt oft privat, eine Datei mit Gruppenleserechten eher teamorientiert. Erst zusammen mit Besitzer und Gruppe wird die Bedeutung klar.</p>
</div>

## Anwendungen

Rechte sind wichtig bei Konfigurationsdateien, Skripten, Teamordnern und allen Situationen, in denen mehrere Personen oder Prozesse zusammenarbeiten.
