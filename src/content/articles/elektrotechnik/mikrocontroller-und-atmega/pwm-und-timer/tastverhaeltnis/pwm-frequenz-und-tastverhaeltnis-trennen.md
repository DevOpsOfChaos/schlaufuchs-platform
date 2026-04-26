---
title: "Elektrotechnik – PWM-Frequenz und Tastverhältnis trennen"
description: "Lerne PWM-Größen als klar abgegrenztes Unterthema mit Beispiel, Prüfschritt und Gegenprobe."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath:
  - "mikrocontroller-und-atmega"
  - "pwm-und-timer"
  - "tastverhaeltnis"
  - "pwm-frequenz-und-tastverhaeltnis-trennen"
learningGoals:
  - "Du erklärst PWM-Größen in einem klar abgegrenzten Kontext."
  - "Du erkennst die typische Verwechslung mit einem Nachbarthema."
  - "Du nutzt einen konkreten Prüfschritt statt einer breiten Sammelantwort."
practiceIdeas:
  - "Baue ein eigenes Mini-Beispiel mit verändertem Wert oder Zustand."
  - "Notiere bewusst, welches Nachbarthema nicht gemeint ist."
  - "Formuliere einen Merksatz und prüfe ihn an einer Gegenprobe."
commonMistakes:
  - "Das Unterthema zu breit einsortieren."
  - "Nur den Begriff nennen, aber keinen Prüfschritt ausführen."
  - "Die Gegenprobe auslassen und dadurch eine falsche Regel verallgemeinern."
keyTakeaways:
  - "PWM-Größen wird durch Einordnung, Abgrenzung und Gegenprobe prüfbar."
  - "Feinere Unterthemen verbessern Navigation und Lernlogik."
  - "Aufgaben bleiben verständlicher, wenn sie zur Seite und nicht nur zum Fachbereich passen."
recognizeSignals:
  - "Die Aufgabe enthält zwei ähnliche Begriffe oder Zustände."
  - "Eine allgemeine Erklärung wäre möglich, aber nicht präzise genug."
  - "Ein kleiner Test entscheidet, welche Regel gilt."
selfCheckPoints:
  - "Kann ich das Unterthema in einem Satz erklären?"
  - "Habe ich das Nachbarthema ausdrücklich abgegrenzt?"
  - "Ist meine Gegenprobe konkret genug?"
tags:
  - "elektrotechnik"
  - "messen"
  - "schaltungen"
  - "mikrocontroller-und-atmega"
  - "pwm-und-timer"
  - "pwm-größen"
level: "mittel"
draft: false
---

## Grundidee

**PWM-Größen** ist ein bewusst kleines Unterthema. Lerne PWM-Größen als klar abgegrenztes Unterthema mit Beispiel, Prüfschritt und Gegenprobe. Der Punkt wird schnell unübersichtlich, wenn er nur in einem breiten Sammelbereich landet.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Frequenz beschreibt, wie oft eine Periode kommt; das Tastverhältnis beschreibt den High-Anteil.</h3>
  <p>Die Aufgabe ist nicht schwerer, wenn sie kleiner eingeordnet wird. Im Gegenteil: Erst die genaue Trennkante macht sichtbar, welche Regel, Messung, Rechnung oder Codeentscheidung wirklich gebraucht wird.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Vom Fachbereich zum Prüfschritt</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/elektrotec-v108-pwm-frequenz-und-tastverhaeltnis-trennen.svg" alt="Lernillustration zu PWM-Größen." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Warum dieses Unterthema eine eigene Seite verdient

- Es hat eine typische Verwechslung mit einem Nachbarthema.
- Es lässt sich mit einem kurzen Prüfschritt kontrollieren.
- Es taucht in Aufgaben oft als kleine Entscheidung auf, nicht als großes Kapitel.

## Mini-Demo

```text
Schaltung → Messpunkt → Erwartungswert → Fehlerbild
```

Der Prüfschritt ist absichtlich klein. Er soll nicht das ganze Fachgebiet erklären, sondern genau die Stelle absichern, an der Lernende oft falsch abbiegen.

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Nicht zu breit einsortieren</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unübersichtlich</strong>
      <span>Alles unter einem allgemeinen Thema sammeln und die entscheidende Unterscheidung übersehen.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Zeitabstand und High-Anteil nicht vermischen.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Rolle oder Aktion wird wirklich betrachtet?</span></div>
  <div class="step-item"><strong>2. Nachbarthema ausschließen</strong><span>Welche ähnliche Idee wäre hier gerade nicht passend?</span></div>
  <div class="step-item"><strong>3. Gegenprobe bauen</strong><span>Zeitabstand und High-Anteil nicht vermischen.</span></div>
  <div class="step-item"><strong>4. Ergebnis formulieren</strong><span>Schreibe einen Satz, der Regel und Beispiel verbindet.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Lernstruktur entsteht nicht durch immer größere Kapitel, sondern durch kleine, sauber benannte Entscheidungen.</p>
</div>
