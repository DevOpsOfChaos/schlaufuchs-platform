---
title: UML-Multiplizitaet und Navigierbarkeit lesen
description: Verstehe, wie viele Objekte miteinander verbunden sein koennen und in welche Richtung eine Beziehung gedacht wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - uml-multiplizitaet-und-navigierbarkeit-lesen
learningGoals:
  - Du liest Multiplizitaeten wie 1, 0..3 oder * fachlich korrekt.
  - Du erklaerst Navigierbarkeit als Richtung der gedanklichen Erreichbarkeit.
  - Du deutest UML-Beziehungen ruhiger und genauer.
practiceIdeas:
  - Formuliere Multiplizitaeten in vollstaendigen Saetzen.
  - Pruefe bei einer Beziehung, wer wen kennen oder erreichen kann.
  - Trenne Anzahl und Richtung als zwei verschiedene Aussagen.
commonMistakes:
  - Multiplizitaet nur als Deko zu sehen.
  - Navigierbarkeit mit Vererbung zu verwechseln.
  - 0..3 oder * nicht in Worte zu uebersetzen.
keyTakeaways:
  - Multiplizitaet beschreibt die Anzahl moeglicher Beziehungspartner.
  - Navigierbarkeit beschreibt die gedachte Richtung des Zugriffs.
  - Beide Angaben ergaenzen eine Beziehung, ersetzen sie aber nicht.
recognizeSignals:
  - An UML-Linien stehen Zahlen oder Sternchen.
  - Pfeile oder Navigationshinweise tauchen auf.
  - Eine Aufgabe fragt nach Anzahl oder Erreichbarkeit zwischen Objekten.
selfCheckPoints:
  - Kann ich 1, 0..3 und * in Worte uebersetzen?
  - Kann ich Richtung und Anzahl getrennt beschreiben?
  - Kann ich ein Beispiel mit Kunde und Konto oder Arbeiter und Projekt erklaeren?
level: einfach
tags:
  - informatik
  - programmierung
  - uml
  - multiplizitaet
  - navigierbarkeit
draft: false
---

## Grundidee

Eine Beziehung in UML sagt nicht nur, **dass** Klassen verbunden sind. Haeufig wird auch beschrieben, **wie viele** Objekte beteiligt sein koennen und **in welche Richtung** man die Beziehung denken darf.

## Multiplizitaet

Typische Angaben sind:

- <code>1</code> = genau eins
- <code>0..3</code> = null bis drei
- <code>*</code> = beliebig viele

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kunde und Konto</h3>
  <p>Wenn an der Kundenseite <code>0..3</code> steht, heisst das: Ein Kunde kann kein, ein, zwei oder drei Konten haben. Wenn an der Gegenseite <code>1</code> steht, heisst das: Jedes Konto gehoert genau zu einem Kunden.</p>
</div>

## Navigierbarkeit

Navigierbarkeit beschreibt, in welche Richtung eine Beziehung fachlich "begehbar" ist. Also: Von welchem Objekt aus kann man sinnvoll zum anderen gelangen?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Anzahl und Richtung sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Multiplizitaet</strong>
      <span>Wie viele Beziehungspartner sind moeglich?</span>
    </div>
    <div class="compare-item">
      <strong>Navigierbarkeit</strong>
      <span>Von welcher Seite darf oder soll man die Beziehung verfolgen?</span>
    </div>
  </div>
</div>

## Typischer Denkfehler

Viele lesen nur die Zahl oder nur den Pfeil. Fachlich sauber ist aber erst die Kombination: **Wie viele?** und **von wo nach wo?**

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beziehung benennen</strong>
    <span>Was verbindet die Klassen ueberhaupt?</span>
  </div>
  <div class="step-item">
    <strong>2. Zahlen lesen</strong>
    <span>Wie viele Objekte der Gegenseite sind moeglich?</span>
  </div>
  <div class="step-item">
    <strong>3. Richtung lesen</strong>
    <span>Ist Navigieren von A nach B erlaubt, eingeschraenkt oder offen gelassen?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Multiplizitaet beschreibt die Menge, Navigierbarkeit die Richtung. Beides zusammen macht UML-Beziehungen deutlich praeziser.</p>
</div>
