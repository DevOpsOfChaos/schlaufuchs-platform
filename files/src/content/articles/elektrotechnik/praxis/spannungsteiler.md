---
title: Spannungsteiler
description: Der Spannungsteiler zeigt, wie sich eine Eingangsspannung mit zwei Widerständen gezielt aufteilen lässt.
subject: elektrotechnik
section: Praxis
topicPath:
  - praxis
  - spannungsteiler
learningGoals:
  - Du verstehst den Aufbau eines einfachen Spannungsteilers.
  - Du erkennst, warum Teilspannungen vom Widerstandsverhältnis abhängen.
  - Du kannst die Grundidee in Mess- und Sensorschaltungen einordnen.
level: mittel
tags:
  - Spannungsteiler
  - Widerstände
  - Spannung
  - Reihenschaltung
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Der Spannungsteiler ist eine einfache, aber sehr wichtige Grundschaltung. Mit zwei Widerständen in Reihe lässt sich aus einer größeren Eingangsspannung eine kleinere, gezielte Teilspannung gewinnen. Das ist in Elektronik und Messtechnik sehr nützlich.</p>
  <ul>
    <li>Du verstehst den Aufbau mit zwei Widerständen in Reihe.</li>
    <li>Du erkennst, wie sich die Spannung aufteilt.</li>
    <li>Du ordnest die Schaltung in praktische Anwendungen ein.</li>
  </ul>
</div>

## Grundidee des Spannungsteilers

Zwei Widerstände liegen in Reihe an einer Spannungsquelle. Über beiden zusammen liegt die gesamte Eingangsspannung. Da sich die Spannung auf beide Widerstände verteilt, fällt über jedem einzelnen Widerstand nur ein Teil der Gesamtspannung ab.

## Warum sich die Spannung aufteilt

In einer Reihenschaltung fließt durch beide Widerstände derselbe Strom. Weil aber jeder Widerstand einen eigenen Spannungsabfall verursacht, verteilt sich die Gesamtspannung auf beide Bauteile.

Wichtig ist dabei das Verhältnis:

- größerer Widerstand → größerer Spannungsanteil,
- kleinerer Widerstand → kleinerer Spannungsanteil.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei gleiche Widerstände an 12 V</h3>
  <p>Liegen zwei gleich große Widerstände in Reihe an 12 V, teilen sie die Spannung gleichmäßig. Dann entfallen 6 V auf den ersten und 6 V auf den zweiten Widerstand. Das ist der einfachste Einstieg in die Grundidee des Spannungsteilers.</p>
</div>

## Wovon die Teilspannung abhängt

Entscheidend ist nicht nur die Eingangsspannung, sondern vor allem das Verhältnis der beiden Widerstände. Sind die Widerstände unterschiedlich groß, fällt über dem größeren Widerstand auch ein größerer Anteil der Spannung ab.

## Wo Spannungsteiler gebraucht werden

Spannungsteiler kommen an vielen Stellen vor:

- in Sensorschaltungen,
- in Messschaltungen,
- bei Referenzspannungen,
- in analogen Eingangsstufen,
- und als Grundidee für viele elektronische Auswertungen.

## Wie du die Schaltung gedanklich lesen solltest

Wenn du einen Spannungsteiler siehst, solltest du dir immer zuerst diese Fragen stellen:

1. Liegen die Widerstände wirklich in Reihe?
2. Welche Spannung liegt insgesamt an?
3. An welcher Stelle wird die Teilspannung abgegriffen?
4. Wie verhalten sich die Widerstandswerte zueinander?

<div class="practice-card">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So denkst du einen Spannungsteiler sauber durch</h3>
  <ul>
    <li>Suche zuerst die Reihenschaltung der Widerstände.</li>
    <li>Markiere die Eingangsspannung und die gesuchte Teilspannung.</li>
    <li>Vergleiche die Widerstandswerte, statt nur blind Zahlen einzusetzen.</li>
    <li>Prüfe am Ende, ob die Teilspannung sinnvoll kleiner als die Gesamtspannung ist.</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Den Spannungsteiler mit einer Parallelschaltung verwechseln.</li>
    <li>Nur auf die Gesamtspannung schauen und das Widerstandsverhältnis ignorieren.</li>
    <li>Nicht sauber markieren, wo die Teilspannung abgegriffen wird.</li>
    <li>Eine größere Teilspannung als die Eingangsspannung erwarten.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Ein Spannungsteiler besteht aus Widerständen in Reihe.</li>
    <li>Die Gesamtspannung verteilt sich auf beide Widerstände.</li>
    <li>Die Teilspannungen hängen vom Verhältnis der Widerstände ab.</li>
    <li>Spannungsteiler sind Grundschaltungen in Mess- und Sensorsystemen.</li>
    <li>Eine saubere Schaltungsleseweise verhindert viele Fehler.</li>
  </ul>
</div>
