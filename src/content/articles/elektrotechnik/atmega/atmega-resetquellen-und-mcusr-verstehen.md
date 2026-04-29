---
title: "ATmega – Resetquellen und MCUSR verstehen"
description: "Verstehe, dass ein Reset am ATmega nicht nur „Neustart“ bedeutet, sondern je nach Ursache eine andere Systemgeschichte erzählt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-resetquellen-und-mcusr-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
Ein Reset beim ATmega ist nicht nur ein „neu anfangen“. Je nach Ursache steckt dahinter eine andere Geschichte: Versorgung wurde eingeschaltet, jemand hat den Reset-Pin betätigt, der Watchdog hat eingegriffen oder die Spannung war zu niedrig. Genau deshalb lohnt sich ein diagnostischer Blick auf Resetquellen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Schaltung startet immer wieder neu</h3>
  <p>Eine AVR-Schaltung läuft kurz an, dann beginnt alles erneut. Wer nur sieht „Es gab wieder einen Reset“, weiß noch fast nichts. Erst die Frage nach der Ursache macht aus dem Neustart eine brauchbare Diagnose.</p>
</div>

## Typische Resetquellen ruhig unterscheiden

<div class="visual-grid">
  <div class="visual-item">
    <strong>Power-on-Reset</strong>
    <span>Der Controller startet, weil die Versorgung eingeschaltet oder neu angelegt wurde.</span>
  </div>
  <div class="visual-item">
    <strong>Externer Reset</strong>
    <span>Ein Signal am Reset-Pin löst den Neustart gezielt oder unbeabsichtigt aus.</span>
  </div>
  <div class="visual-item">
    <strong>Watchdog-Reset</strong>
    <span>Der Controller startet neu, weil der Watchdog keine rechtzeitige Rückmeldung bekommen hat.</span>
  </div>
  <div class="visual-item">
    <strong>Brown-out-Reset</strong>
    <span>Die Versorgungsspannung war zu niedrig für einen sicheren Betrieb.</span>
  </div>
</div>

## MCUSR: nicht die Lösung, aber eine wichtige Spur

Das Register `MCUSR` ist didaktisch wertvoll, weil es nicht den Fehler selbst löst, aber Hinweise auf die letzte Resetursache liefern kann. Man liest es deshalb am besten als **Spurenspeicher direkt nach dem Start**.

## Mini-Demo: gleicher Neustart, verschiedene Geschichten

<div class="compare-card">
  <p class="card-kicker">Diagnose statt Bauchgefühl</p>
  <h3>Neustart ist das sichtbare Ergebnis, nicht schon die Ursache</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sichtbar gleich</strong>
      <span>Das Programm beginnt wieder von vorn.</span>
    </div>
    <div class="compare-item">
      <strong>Technisch verschieden</strong>
      <span>Versorgung, Reset-Pin, Watchdog oder Brown-out können dahinterstehen.</span>
    </div>
  </div>
</div>

## Diese Seite klärt bewusst Resetursachen, nicht Fuse-Details

Hier geht es um die Frage, **warum** ein Reset stattgefunden haben kann und wie `MCUSR` als Diagnosehilfe eingeordnet wird. Die dauerhaften Startvorgaben über Fuse-Bits und die Taktwahl gehören auf die eigene Startkonfigurationsseite.

## Eine ruhige Prüfstrategie

1. Was ist sichtbar passiert?
2. Welche Resetquellen kommen grundsätzlich in Frage?
3. Gibt es eine Hinweisspur über `MCUSR`?
4. Welche Ursache passt am besten zum beobachteten Verhalten?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Reset ist nicht nur ein Neustart, sondern oft eine Diagnosechance. Sichtbar gleiches Verhalten kann technisch ganz unterschiedliche Ursachen haben.</p>
</div>
