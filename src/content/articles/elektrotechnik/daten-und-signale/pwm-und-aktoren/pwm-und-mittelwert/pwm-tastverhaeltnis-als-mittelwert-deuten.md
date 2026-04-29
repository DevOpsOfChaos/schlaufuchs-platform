---
title: "Elektrotechnik – PWM-Tastverhältnis als Mittelwert deuten"
description: "Lerne PWM-Tastverhältnis als enges, prüfbares Unterthema mit Beispiel, Abgrenzung und Gegenprobe."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["daten-und-signale", "pwm-und-aktoren", "pwm-und-mittelwert", "pwm-tastverhaeltnis-als-mittelwert-deuten"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
## Grundidee

**PWM-Tastverhältnis** ist ein kleines Unterthema mit einer klaren Trennkante. Lerne PWM-Tastverhältnis als enges, prüfbares Unterthema mit Beispiel, Abgrenzung und Gegenprobe. Dadurch bleibt die Seite übersichtlich und landet nicht als weiterer Abschnitt in einem zu breiten Sammelthema.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED wirkt dunkler, obwohl der Pin nur ein- und ausschaltet.</h3>
  <p>Die entscheidende Frage ist nicht: „Zu welchem großen Kapitel gehört das?“, sondern: „Welche kleine Unterscheidung entscheidet diesen Fall?“</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Vom Unterthema zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/elektrotechnik-v109-pwm-tastverhaeltnis-als-mittelwert-deuten.svg" alt="Lernillustration zu PWM-Tastverhältnis." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Nicht alles in denselben Topf werfen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Verwechslung</strong><span>PWM wird als echte Analogspannung verstanden.</span></div>
    <div class="compare-item"><strong>Ruhige Prüfung</strong><span>Betrachte High-Anteil pro Periode.</span></div>
  </div>
</div>

## Mini-Demo

```text
Messpunkt → Bezugspunkt → Erwartung → Gegenmessung
```

Die Mini-Demo ist bewusst klein. Sie soll nicht das ganze Fachgebiet erklären, sondern genau die Trennkante sichtbar machen.

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Kontext nennen</strong><span>Welche Situation liegt vor?</span></div>
  <div class="step-item"><strong>2. Begriff trennen</strong><span>Welches Nachbarthema klingt ähnlich, ist aber nicht gemeint?</span></div>
  <div class="step-item"><strong>3. Prüfschritt wählen</strong><span>Welche Rechnung, Messung, Abfrage oder Beobachtung belegt die Entscheidung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe bilden</strong><span>Was müsste sich ändern, wenn die Einordnung falsch wäre?</span></div>
</div>

## Warum diese Unterteilung hilft

Wenn viele Seiten nur in einem breiten Unterthema liegen, finden Lernende zwar ein Kapitel, aber nicht unbedingt die richtige Trennkante. Diese Seite ist deshalb bewusst schmal geschnitten: Sie passt zu einer konkreten Aufgabe und zu einer konkreten Lösung.

<div class="note-panel"><p><strong>Merke:</strong> Eine gute Lernseite beantwortet nicht alles auf einmal. Sie macht eine fachliche Entscheidung so klar, dass Aufgabe und Lösung direkt daran anschließen können.</p></div>
