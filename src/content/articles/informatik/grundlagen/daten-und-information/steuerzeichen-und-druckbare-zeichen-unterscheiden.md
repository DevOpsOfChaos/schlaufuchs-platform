---
title: Steuerzeichen und druckbare Zeichen unterscheiden
description: Verstehe, warum eine Zeichentabelle nicht nur sichtbare Buchstaben und Ziffern enthält, sondern auch Steuerzeichen für technische Abläufe.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - daten-und-information
  - steuerzeichen-und-druckbare-zeichen-unterscheiden
learningGoals:
  - Du unterscheidest druckbare Zeichen und Steuerzeichen.
  - Du ordnest typische Beispiele wie TAB, LF oder CR grob ihrer Funktion zu.
  - Du erklärst, warum eine Zeichentabelle nicht nur sichtbaren Text enthält.
practiceIdeas:
  - Markiere in einer kleinen Tabelle, welche Einträge sichtbar und welche steuernd sind.
  - Erkläre, warum ein Zeilenumbruch ein Zeichenwert sein kann, ohne als Buchstabe sichtbar zu werden.
  - Vergleiche Leerzeichen, Tabulator und Zeilenumbruch.
commonMistakes:
  - Alle Tabellenwerte als sichtbare Zeichen zu erwarten.
  - Leerzeichen und "nichts" gleichzusetzen.
  - CR und LF nur als Programmierspracheffekt statt als Steuerzeichen zu sehen.
keyTakeaways:
  - Nicht jedes Zeichen einer Kodierung ist sichtbar druckbar.
  - Steuerzeichen dienen der technischen Steuerung von Ausgaben oder Eingaben.
  - Auch unsichtbare Zeichen können für Textverarbeitung zentral sein.
recognizeSignals:
  - Es geht um TAB, LF, CR, ESC, DEL oder Leerzeichen.
  - Eine ASCII-Tabelle enthält Einträge ohne sichtbaren Buchstaben.
  - Du sollst erklären, warum ein Zeichen technisch wichtig, aber nicht druckbar ist.
selfCheckPoints:
  - Kann ich sichtbare und steuernde Zeichen trennen?
  - Kann ich typische Beispiele nennen?
  - Kann ich erklären, warum "unsichtbar" nicht "bedeutungslos" heißt?
tags:
  - informatik
  - ascii
  - steuerzeichen
  - daten
level: einfach
draft: false
---

## Grundidee

In Zeichentabellen stehen nicht nur Buchstaben, Ziffern und Satzzeichen. Es gibt auch **Steuerzeichen**, die keinen normalen sichtbaren Text darstellen, sondern technische Abläufe beeinflussen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Warum TAB und LF keine normalen Buchstaben sind</h3>
  <p>Ein Tabulator oder ein Zeilenumbruch wird in einer Kodierung als Zeichenwert geführt. Trotzdem sieht man dabei nicht einfach einen Buchstaben auf dem Bildschirm. Das Zeichen steuert stattdessen Abstand oder Zeilenwechsel.</p>
</div>

## Zwei Gruppen ruhig trennen

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Sichtbare Zeichen gegen Steuerzeichen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>druckbare Zeichen</strong><span>Buchstaben, Ziffern, Satzzeichen und andere sichtbare Symbole.</span></div>
    <div class="compare-item"><strong>Steuerzeichen</strong><span>Zeichenwerte mit technischer Funktion, z. B. TAB, LF oder CR.</span></div>
  </div>
</div>

## Typische Beispiele

- <code>SP</code>: Leerzeichen
- <code>TAB</code>: Tabulator
- <code>LF</code>: Zeilenvorschub
- <code>CR</code>: Wagenrücklauf
- <code>ESC</code>: Escape
- <code>DEL</code>: Löschen

## Mini-Demo: sichtbar vs. technisch wirksam

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Drei Zeichenarten im Vergleich</h3>
  <div style="display:grid; gap:0.55rem;">
    <div style="padding:0.7rem; border-radius:12px; background:#dbeafe;"><strong>A</strong> → sichtbar druckbar</div>
    <div style="padding:0.7rem; border-radius:12px; background:#dcfce7;"><strong>SP</strong> → unsichtbar, aber als Abstand wirksam</div>
    <div style="padding:0.7rem; border-radius:12px; background:#fef3c7;"><strong>LF</strong> → unsichtbar, aber Zeilenwechsel auslösend</div>
  </div>
</div>

## Warum das wichtig ist

Textverarbeitung, Konsolenausgabe, Dateien und Netzwerkprotokolle arbeiten nicht nur mit sichtbaren Symbolen. Gerade unsichtbare Zeichen können dabei das Verhalten deutlich verändern.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Sichtbar oder steuernd?</strong><span>Erzeugt der Wert ein Symbol oder steuert er Verhalten?</span></div>
  <div class="step-item"><strong>2. Wirkung benennen</strong><span>Geht es um Abstand, Zeilenwechsel oder andere technische Steuerung?</span></div>
  <div class="step-item"><strong>3. Unsichtbar nicht unterschätzen</strong><span>Auch nicht sichtbare Zeichen können wichtige Wirkung haben.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Zeichenwert kann technisch wichtig sein, ohne als sichtbares Symbol zu erscheinen.</p>
</div>
