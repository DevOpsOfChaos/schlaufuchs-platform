---
title: Funktionen ueberladen verstehen
description: Verstehe, warum gleich benannte Funktionen in C++ moeglich sind, solange sich ihre Parametersignatur unterscheidet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-ueberladen-verstehen
learningGoals:
  - Du erklaerst Ueberladung ueber die Parametersignatur.
  - Du trennst Parameterliste und Rueckgabewert sauber.
  - Du liest mehrdeutige Aufrufe vorsichtiger.
practiceIdeas:
  - Vergleiche mehrere Varianten derselben Funktion.
  - Pruefe, welche Aufrufe eindeutig und welche mehrdeutig sind.
  - Begruende, warum der Rueckgabewert allein nicht ausreicht.
commonMistakes:
  - Nur auf den Namen zu achten.
  - Den Rueckgabewert zur Signatur zu zaehlen.
  - Mehrdeutigkeiten bei Typumwandlungen zu uebersehen.
keyTakeaways:
  - Ueberladung braucht gleiche Namen, aber unterschiedliche Parameterlisten.
  - Der Rueckgabewert allein erzeugt keine gueltige Ueberladung.
  - Mehrdeutigkeit ist ein Warnsignal, nicht nur ein kleiner Schoenheitsfehler.
recognizeSignals:
  - Mehrere Funktionen tragen denselben Namen.
  - Es gibt verschiedene Parameterzahlen oder Typen.
  - Ein Aufruf scheint zu mehreren Varianten zu passen.
selfCheckPoints:
  - Kann ich die Parametersignatur benennen?
  - Kann ich erklaeren, warum ein Aufruf mehrdeutig sein kann?
  - Kann ich Rueckgabewert und Parameterliste sauber trennen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - funktionen
  - ueberladung
draft: false
---

## Grundidee

In C++ duerfen mehrere Funktionen denselben Namen tragen, wenn sie sich in Art oder Anzahl ihrer Parameter unterscheiden.

## Die Parametersignatur ist der Schluessel

Die entscheidende Unterscheidung ist nicht der Name allein, sondern die Parametersignatur. Dazu gehoeren die Parameter - nicht aber der Rueckgabewert. Genau deshalb reichen zwei Funktionen mit gleicher Parameterliste und nur anderem Rueckgabewert nicht aus.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Parameterliste ja, Rueckgabewert nein</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Fuer Ueberladung entscheidend</strong>
      <span>Anzahl und Typen der Parameter.</span>
    </div>
    <div class="compare-item">
      <strong>Nicht entscheidend</strong>
      <span>Nur der Rueckgabewert allein.</span>
    </div>
  </div>
</div>

## Leitbeispiel: Mehrere gibAus-Varianten

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Aufruf kann eindeutig oder mehrdeutig sein</h3>
  <p>Ein Aufruf wie <code>gibAus(20L)</code> kann eindeutig zur <code>long</code>-Variante passen. Ein anderer Aufruf kann aber auch mehrdeutig wirken, wenn mehrere Signaturen gleich gut erreichbar sind. Genau das macht Funktionsueberladung zwar praktisch, aber nicht automatisch harmlos.</p>
</div>

## Mehrdeutigkeit ernst nehmen

Wenn der Compiler mehrere passende Varianten sieht, ist das kein blosser Schoenheitsfehler. Es zeigt, dass die Signaturen didaktisch oder technisch zu nah beieinander liegen.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Namen ignorieren</strong>
    <span>Der gleiche Name ist nur der Startpunkt.</span>
  </div>
  <div class="step-item">
    <strong>2. Parameter lesen</strong>
    <span>Welche Typen und wie viele Argumente sind vorgesehen?</span>
  </div>
  <div class="step-item">
    <strong>3. Aufruf abgleichen</strong>
    <span>Welche Variante passt am spezifischsten - oder ist es mehrdeutig?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Funktionsueberladung bedeutet nicht "gleicher Name, irgendwie passend", sondern "gleicher Name, aber sauber unterscheidbare Signaturen".</p>
</div>
