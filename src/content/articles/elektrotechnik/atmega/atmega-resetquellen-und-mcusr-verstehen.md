---
title: ATmega – Resetquellen und MCUSR verstehen
description: Verstehe, dass ein Reset am ATmega nicht nur „Neustart“ bedeutet, sondern je nach Ursache eine andere Systemgeschichte erzählt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - systemstart-und-robustheit
  - atmega-resetquellen-und-mcusr-verstehen
learningGoals:
  - Du unterscheidest typische Resetquellen am ATmega sauber.
  - Du beschreibst die Rolle des MCUSR-Registers als Hinweisspur auf die Resetursache.
  - Du liest Resets eher als Diagnosefrage als als bloßen Neustart.
practiceIdeas:
  - Ordne Resetursachen wie Power-on, externen Reset oder Watchdog funktional ein.
  - Lies MCUSR zuerst als Diagnosehilfe und nicht als irgendein weiteres Statusregister.
  - Prüfe bei instabilem Verhalten, welche Resetquelle wahrscheinlicher ist.
commonMistakes:
  - jeden Reset einfach nur als „Controller startet halt neu“ abzutun.
  - Resetursache und Resetwirkung nicht zu trennen.
  - MCUSR zu spät oder gar nicht als Diagnosehilfe mitzudenken.
keyTakeaways:
  - Verschiedene Resetquellen erzählen unterschiedliche Systemgeschichten.
  - MCUSR kann Hinweise auf die letzte Resetursache liefern.
  - Wer Resets diagnostisch liest, findet Fehler ruhiger als mit bloßem Neustartdenken.
recognizeSignals:
  - Es geht um Power-on-Reset, externen Reset, Brown-out oder Watchdog-Reset.
  - Ein System startet unerwartet neu oder wirkt instabil.
  - In Aufgaben soll zwischen Ursache des Resets und Verhalten danach unterschieden werden.
selfCheckPoints:
  - Kann ich mehrere Resetquellen funktional unterscheiden?
  - Kann ich erklären, warum MCUSR für die Diagnose wertvoll ist?
  - Kann ich einen Reset eher als Hinweis als als Endpunkt lesen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - reset
  - mcusr
level: mittel
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
