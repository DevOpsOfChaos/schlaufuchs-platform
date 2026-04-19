---
title: Objektanzahl mit statischen Membern zaehlen verstehen
description: Verstehe, wie eine Klasse mit einem gemeinsamen Zaehler ihre existierenden Instanzen im Blick behalten kann.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - objektanzahl-mit-statischen-membern-zaehlen-verstehen
learningGoals:
  - Du erklaerst einen typischen Anwendungsfall fuer statische Daten.
  - Du verbindest Konstruktor, Destruktor und static zu einem gemeinsamen Denkbild.
  - Du liest Objektzaehler ruhiger als Klassenaufgabe statt als Objektaufgabe.
practiceIdeas:
  - Verfolge, wann ein Zaehler im Konstruktor erhoeht und im Destruktor erniedrigt wird.
  - Pruefe, warum der Zaehler statisch sein muss.
  - Uebertrage die Idee auf offene Dateien oder angemeldete Instanzen.
commonMistakes:
  - Den Zaehler als normales Attribut pro Objekt anzulegen.
  - Im Konstruktor zu inkrementieren, aber im Destruktor nicht wieder zu dekrementieren.
  - Zu uebersehen, dass sonst die Zahl langfristig unbrauchbar wird.
keyTakeaways:
  - Ein Objektzaehler ist ein klassischer Anwendungsfall fuer statische Daten.
  - Der Zaehler wird meist im Konstruktor erhoeht und im Destruktor erniedrigt.
  - So bleibt sichtbar, wie viele Instanzen gerade existieren.
recognizeSignals:
  - Im Code wird eine Instanzzahl mitgezählt.
  - Konstruktor und Destruktor greifen auf denselben Wert zu.
  - Die Aufgabe fragt nach aktuell existierenden Objekten.
selfCheckPoints:
  - Kann ich sagen, warum der Zaehler static sein muss?
  - Kann ich Konstruktor und Destruktor in diesen Anwendungsfall einordnen?
  - Kann ich den Fehler beschreiben, wenn das Dekrement fehlt?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - static
  - konstruktor
draft: false
---

## Grundidee

Einer der ruhigsten Anwendungsfaelle fuer `static` ist ein gemeinsamer Objektzaehler.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Wie viele Instanzen existieren gerade?</h3>
  <p>Wenn eine Klasse wissen soll, wie viele Objekte aktuell leben, dann darf diese Zahl nicht an nur einem einzelnen Objekt haengen. Sie muss zur Klasse insgesamt gehoeren.</p>
</div>

## Warum ein normales Attribut nicht reicht

Wenn jedes Objekt seinen eigenen Zaehler haette, dann waere das keine gemeinsame Gesamtzahl. Man haette nur viele kleine Einzelzahlen, aber keinen verlaesslichen Ueberblick.

## Konstruktor und Destruktor zusammendenken

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Zaehlen ueber den Lebenszyklus</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Konstruktor</strong><span>Ein neues Objekt kommt hinzu.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Zaehler +1</strong><span>Die gemeinsame Anzahl steigt.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Destruktor</strong><span>Ein Objekt verschwindet wieder.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Zaehler -1</strong><span>Die gemeinsame Anzahl sinkt.</span></div>
  </div>
</div>

## Typischer Fehler

Ein haeufiger Fehler ist, nur im Konstruktor zu erhoehen. Dann zaehlt die Klasse zwar jede Entstehung mit, verliert aber den Blick darauf, wenn Objekte wieder verschwinden.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ziel klären</strong>
    <span>Geht es um eine gemeinsame Anzahl aller Objekte?</span>
  </div>
  <div class="step-item">
    <strong>2. static verlangen</strong>
    <span>Dann muss die Zahl auf Klassenebene liegen.</span>
  </div>
  <div class="step-item">
    <strong>3. Lebenszyklus prüfen</strong>
    <span>Sind Konstruktor und Destruktor beide sauber beteiligt?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein gemeinsamer Objektzaehler ist keine Eigenschaft eines Objekts, sondern eine Eigenschaft der Klasse als Ganzes.</p>
</div>
