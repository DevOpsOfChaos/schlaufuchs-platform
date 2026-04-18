---
title: Ausreißer und Mittelwerte kritisch lesen
description: Verstehe, warum einzelne extreme Werte einen Durchschnitt stark verschieben können und weshalb Median und Spannweite beim Deuten von Daten helfen.
subject: mathematik
section: Daten und Zufall
topicPath:
  - daten-und-zufall
  - mittelwert-median-und-spannweite
  - ausreisser-und-mittelwerte-kritisch-lesen
learningGoals:
  - Du erkennst Ausreißer in kleinen Datensätzen.
  - Du beschreibst, wie extreme Werte den Mittelwert beeinflussen.
  - Du deutest Daten vorsichtiger, wenn Durchschnitt und Mitte nicht dasselbe erzählen.
practiceIdeas:
  - Vergleiche einen Datensatz mit und ohne extremen Einzelwert.
  - Prüfe bei Kennwerten, ob ein Ausreißer den Eindruck verzerrt.
  - Begründe, wann Median hilfreicher wirkt als der Mittelwert.
commonMistakes:
  - den Durchschnitt immer als neutralsten Wert zu lesen.
  - Ausreißer nur als Fehler statt als wichtigen Hinweis zu sehen.
  - einen Kennwert zu nennen, ohne die Verteilung mitzudenken.
keyTakeaways:
  - Ausreißer können Mittelwerte deutlich verschieben.
  - Median und Spannweite helfen, Daten ruhiger einzuordnen.
  - Ein einzelner Kennwert reicht oft nicht für eine faire Deutung.
recognizeSignals:
  - Es geht um Durchschnittswerte, Verteilungen oder ungewöhnlich hohe bzw. niedrige Einzelwerte.
  - Du sollst erklären, warum Daten trotz gleichem Mittelwert unterschiedlich wirken können.
  - In Aufgaben ist die Verteilung der Werte wichtiger als eine einzelne Zahl.
selfCheckPoints:
  - Kann ich einen Ausreißer im Datensatz erkennen?
  - Kann ich erklären, wie er den Mittelwert verändert?
  - Kann ich begründen, wann Median hilfreicher ist?
tags:
  - mathematik
  - daten
  - mittelwert
  - median
  - ausreisser
level: einfach
draft: false
---

## Grundidee

Ein Durchschnitt wirkt oft objektiv. Er kann aber täuschen, wenn ein einzelner Wert sehr stark aus der Reihe fällt. Solche Werte nennt man **Ausreißer**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Fünf Arbeitszeiten in Minuten</h3>
  <p>Vier Personen brauchen für eine Aufgabe ungefähr 18 bis 22 Minuten. Eine Person braucht 80 Minuten. Rechnet man nur den Mittelwert aus, wirkt die ganze Gruppe plötzlich deutlich langsamer, obwohl der eine Extremwert dafür fast allein verantwortlich ist.</p>
</div>

## Was ein Ausreißer sichtbar macht

Ein Ausreißer ist ein Wert, der deutlich höher oder niedriger liegt als die übrigen Werte. Er muss nicht falsch sein, kann aber die Deutung verändern.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Ohne Ausreißer</strong>
    <span>Die Werte liegen relativ nah beieinander. Mittelwert und Mitte erzählen oft ein ähnliches Bild.</span>
  </div>
  <div class="visual-item">
    <strong>Mit Ausreißer</strong>
    <span>Ein einzelner Wert zieht den Durchschnitt stärker in seine Richtung.</span>
  </div>
</div>

## Mini-Vergleich mit Zahlen

<div class="figure-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Gleiche Gruppe, aber ein Wert kippt den Eindruck</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne Ausreißer</strong></p>
      <p style="margin:0;">18, 19, 20, 21, 22</p>
      <p style="margin:0.45rem 0 0;">Mittelwert: 20</p>
      <p style="margin:0.25rem 0 0;">Median: 20</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Ausreißer</strong></p>
      <p style="margin:0;">18, 19, 20, 21, 80</p>
      <p style="margin:0.45rem 0 0;">Mittelwert: 31,6</p>
      <p style="margin:0.25rem 0 0;">Median: 20</p>
    </div>
  </div>
  <p>Der Median bleibt in diesem Beispiel ruhig in der Mitte. Der Mittelwert wird stark nach oben gezogen.</p>
</div>

## Warum Median und Spannweite helfen

Der Median zeigt die mittlere Lage im sortierten Datensatz. Die Spannweite zeigt, wie weit die Werte auseinanderliegen.

Gemeinsam helfen sie dabei,

- den Einfluss extremer Werte zu erkennen,
- Daten vorsichtiger zu deuten,
- und Durchschnittszahlen nicht vorschnell als „typisch“ zu lesen.

<div class="compare-card">
  <p class="card-kicker">Ruhige Deutung</p>
  <h3>Ein Kennwert allein reicht oft nicht</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Mittelwert</strong>
      <span>Gut für einen Gesamtüberblick, aber empfindlich gegenüber Ausreißern.</span>
    </div>
    <div class="compare-item">
      <strong>Median</strong>
      <span>Zeigt die Mitte der sortierten Werte und bleibt bei einzelnen Extremwerten oft stabiler.</span>
    </div>
    <div class="compare-item">
      <strong>Spannweite</strong>
      <span>Hilft zu sehen, wie weit die Werte insgesamt auseinanderliegen.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Sortiere die Werte.
2. Suche nach auffällig hohen oder niedrigen Einzelwerten.
3. Vergleiche Mittelwert und Median.
4. Frage zuletzt, welcher Kennwert den Datensatz fairer beschreibt.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Durchschnitt ist nicht automatisch der typischste Wert.</p>
</div>
