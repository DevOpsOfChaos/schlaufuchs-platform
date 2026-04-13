---
title: Links, Bilder und Pfade
description: Verstehe, wie Webseiten auf andere Seiten, Bilder und Dateien verweisen und warum saubere Pfade wichtig sind.
subject: web-development
section: Praxis
topicPath:
- praxis
- links-bilder-und-pfade
tags:
- html
- links
- bilder
- pfade
learningGoals:
- Du unterscheidest Links, Bildquellen und Dateipfade.
- Du liest relative und absolute Pfade sauber.
- Du erkennst typische Fehler bei der Verknüpfung von Dateien.
practiceIdeas:
- Vergleiche relative und absolute Pfade in kleinen Beispielen.
- Erkläre, warum eine Datei aus einem Unterordner anders verlinkt wird als aus dem Root.
- Prüfe bei jedem Beispiel bewusst Startpunkt und Ziel.
commonMistakes:
- Pfade nur auswendig zu raten statt vom Dateistandort aus zu denken.
- href und src durcheinanderzubringen.
- Bilder und Links gleich zu behandeln, obwohl ihre Aufgabe verschieden ist.
keyTakeaways:
- Pfade hängen vom Ausgangsort der Datei ab.
- href verlinkt Ziele, src lädt Inhalte wie Bilder.
- Saubere Pfade sind Strukturdenken, kein Ratespiel.
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Links, Bilder und Pfade direkt oder greift eng benachbarte Begriffe aus Praxis auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich unterscheidest Links, Bildquellen und Dateipfade?
- Kann ich liest relative und absolute Pfade sauber?
- Kann ich erkennst typische Fehler bei der Verknüpfung von Dateien?
---


## Warum Pfade oft unnötig schwer wirken

Viele Fehler bei HTML-Dateien entstehen nicht durch Tags, sondern durch unklare Pfade. Wer den Ausgangsort einer Datei sauber mitdenkt, löst diese Probleme deutlich ruhiger.

## href und src trennen

Mit <code>href</code> verlinkst du ein Ziel. Mit <code>src</code> lädst du eine Ressource wie ein Bild. Beide arbeiten mit Pfaden, aber nicht mit derselben Aufgabe.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Ordner, anderer Unterordner</h3>
  <p>Liegt eine HTML-Datei im Root und ein Bild in <code>assets/bilder</code>, dann musst du den Weg genau von der HTML-Datei aus lesen. Von einem Unterordner aus beginnt dieser Weg anders.</p>
</div>
