---
title: ATmega – Interrupt und ISR verstehen
description: Verstehe, warum ein Interrupt den normalen Ablauf kurz unterbricht und wie eine ISR auf ein Ereignis reagiert, ohne dass ständig aktiv abgefragt werden muss.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-interrupt-und-isr-verstehen
learningGoals:
  - Du erklärst die Grundidee eines Interrupts als Ereignis-Unterbrechung.
  - Du beschreibst die Rolle einer ISR sauber.
  - Du unterscheidest Polling und Interrupt-Reaktion fachlich klar.
practiceIdeas:
  - Vergleiche einen aktiv abgefragten Taster mit einer Interrupt-Reaktion.
  - Lies kleine ISR-Beispiele zuerst als Ereigniskette und dann als Code.
  - Prüfe, welcher Teil vor dem Interrupt, während der ISR und danach passiert.
commonMistakes:
  - Interrupts als „parallel laufenden zweiten Hauptcode“ zu sehen.
  - Zu denken, die ISR ersetze jede Initialisierung automatisch.
  - Globales Freigeben, Quellenfreigabe und Ereignisquelle durcheinanderzubringen.
keyTakeaways:
  - Ein Interrupt unterbricht kurz den normalen Ablauf und springt zu einer passenden ISR.
  - Eine ISR behandelt genau dieses Ereignis und danach läuft das Hauptprogramm weiter.
  - Interrupts brauchen sowohl globale Freigabe als auch die Freigabe der konkreten Quelle.
recognizeSignals:
  - Es geht um sei(), ISR(...), Interruptvektoren oder Ereignisreaktionen.
  - Du sollst erklären, warum ein Mikrocontroller nicht ständig pollen muss.
  - In Aufgaben müssen Hauptprogramm und ISR sauber getrennt werden.
selfCheckPoints:
  - Kann ich Polling und Interrupt fachlich unterscheiden?
  - Kann ich erklären, warum eine ISR nicht „dauerhaft parallel“ läuft?
  - Kann ich globale und lokale Interrupt-Freigabe benennen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - interrupt
  - isr
level: mittel
draft: false
---

Bei AVR-Mikrocontrollern stoppt ein Interrupt den normalen Programmablauf kurz und führt eine spezielle Interrupt Service Routine aus; danach kehrt das Programm an die unterbrochene Stelle zurück. Dafür müssen sowohl die globale Freigabe als auch die jeweilige Quellfreigabe gesetzt sein, und die ISR wird über einen passenden Vektor angebunden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Taster löst sofort eine Reaktion aus</h3>
  <p>Das Hauptprogramm soll nicht die ganze Zeit nur fragen: „Ist der Taster jetzt gedrückt? Ist er jetzt gedrückt?“ Stattdessen soll auf ein Ereignis reagiert werden, wenn es wirklich auftritt. Genau dort beginnt die ruhige Grundidee des Interrupts.</p>
</div>

## Polling und Interrupt zuerst als Denkmodelle trennen

<div class="compare-card">
  <p class="card-kicker">Zwei Reaktionsarten</p>
  <h3>Ständig nachsehen oder auf ein Ereignis springen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Polling</strong>
      <span>Das Hauptprogramm fragt wiederholt aktiv nach, ob ein Zustand eingetreten ist.</span>
    </div>
    <div class="compare-item">
      <strong>Interrupt</strong>
      <span>Ein Ereignis unterbricht den normalen Ablauf kurz und ruft eine passende ISR auf.</span>
    </div>
  </div>
</div>

## Mini-Demo: Was passiert in welcher Phase?

<pre><code>Hauptprogramm läuft normal
→ Ereignis tritt auf
→ Interrupt unterbricht kurz
→ passende ISR wird ausgeführt
→ ISR endet
→ Hauptprogramm läuft an der unterbrochenen Stelle weiter</code></pre>

Genau deshalb ist eine ISR **kein zweites dauerhaftes Hauptprogramm**, sondern eine kurze Reaktion auf ein bestimmtes Ereignis.

## Was zur Freigabe gehört

```c
#include <avr/io.h>
#include <avr/interrupt.h>

sei();
ISR(INT0_vect) {
  // Reaktion auf das Ereignis
}
```

Die ruhige Lesart lautet:

- `sei()` gibt Interrupts global frei,
- die konkrete Quelle muss zusätzlich passend aktiviert sein,
- `ISR(INT0_vect)` beschreibt die Reaktionsfunktion für genau diesen Vektor.

## ISR ruhig lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Vor dem Ereignis</strong>
    <span>Das Hauptprogramm arbeitet normal.</span>
  </div>
  <div class="visual-item">
    <strong>Beim Ereignis</strong>
    <span>Der Prozessor springt kurz zur passenden ISR.</span>
  </div>
  <div class="visual-item">
    <strong>Nach der ISR</strong>
    <span>Das Hauptprogramm läuft weiter – nicht von vorne, sondern an der unterbrochenen Stelle.</span>
  </div>
</div>

## Typischer Denkfehler: „Interrupt heißt automatisch sofort alles erledigt“

Ein Interrupt ersetzt nicht die saubere Vorbereitung des Systems. Die Ereignisquelle muss eingerichtet sein, die ISR muss zum Ereignis passen, und oft muss in der ISR bewusst nur das Nötigste passieren.

## Diese Seite behandelt bewusst die Grundidee, nicht schon komplette Registerrezepte

Hier geht es um **Denkmodell und Grundlogik**:

- Ereignis,
- Unterbrechung,
- ISR,
- Rückkehr ins Hauptprogramm.

Detaillierte Registerkonfiguration für einzelne Quellen baut darauf auf und gehört auf eigene Seiten.

## Eine ruhige Prüfstrategie

1. Ist hier ständiges Nachfragen gemeint oder eine Ereignisreaktion?
2. Gibt es globale Freigabe und Quellenfreigabe?
3. Welche ISR gehört zu welcher Quelle?
4. Was soll in der ISR wirklich passieren – und was besser nicht?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Interrupt ist eine kurze ereignisgesteuerte Unterbrechung. Die ISR reagiert auf genau dieses Ereignis, danach läuft das Hauptprogramm weiter.</p>
</div>
