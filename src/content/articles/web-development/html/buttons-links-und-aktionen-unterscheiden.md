---
title: "Buttons, Links und Aktionen unterscheiden"
description: "Verstehe, wann ein Link die richtige Wahl ist, wann ein Button besser passt und warum diese Unterscheidung für Bedienung und Struktur wichtig ist."
subject: "web-development"
section: "HTML"
topicPath: ["html", "buttons-links-und-aktionen-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Nicht alles, was klickbar aussieht, hat in HTML dieselbe Aufgabe. Ein Link und ein Button können optisch ähnlich gestaltet werden, aber sie erfüllen **unterschiedliche Funktionen**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei große blaue Flächen, aber nicht dieselbe Rolle</h3>
  <p>Eine große Fläche mit „Zum Kurs“ führt auf eine andere Seite. Eine ähnlich gestaltete Fläche mit „Speichern“ bleibt auf derselben Seite und löst eine Aktion aus. Optisch mögen beide fast gleich wirken – semantisch sind sie nicht dasselbe.</p>
</div>

## Der Kernunterschied

<div class="compare-card">
  <p class="card-kicker">Funktionsvergleich</p>
  <h3>Ziel wechseln oder etwas auslösen?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Link</strong>
      <span>Ein Link führt zu einem anderen Ziel, zum Beispiel einer anderen Seite, einem Abschnitt oder einer Datei.</span>
    </div>
    <div class="compare-item">
      <strong>Button</strong>
      <span>Ein Button löst eine Aktion aus, etwa speichern, senden, öffnen oder filtern.</span>
    </div>
  </div>
</div>

## Mini-Demo: ähnlich gestaltet, aber anders gedacht

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum Funktion wichtiger ist als Optik</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Navigation</strong></p>
      <a href="#" style="display:inline-block; padding:0.75rem 1rem; border-radius:12px; background:#dbeafe; color:#0f172a; font-weight:700; text-decoration:none;">Zum Kurs</a>
      <p style="margin:0.6rem 0 0;">Hier geht es um einen Zielwechsel. Das spricht für einen Link.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Aktion</strong></p>
      <button type="button" style="padding:0.75rem 1rem; border-radius:12px; border:1px solid #93c5fd; background:#dbeafe; font-weight:700;">Speichern</button>
      <p style="margin:0.6rem 0 0;">Hier bleibt man auf der Oberfläche und löst etwas aus. Das spricht für einen Button.</p>
    </div>
  </div>
</div>

## Zweite Mini-Demo: gleiche Farbe, falsche Begründung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Farbe entscheidet nichts über die HTML-Rolle</h3>
  <div style="display:grid; gap:0.85rem;">
    <div style="display:flex; flex-wrap:wrap; gap:0.7rem; padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <a href="#" style="display:inline-block; padding:0.7rem 1rem; border-radius:12px; background:#0ea5e9; color:white; font-weight:700; text-decoration:none;">Dokumentation öffnen</a>
      <button type="button" style="padding:0.7rem 1rem; border-radius:12px; border:0; background:#0ea5e9; color:white; font-weight:700;">Filter anwenden</button>
    </div>
  </div>
  <p>Beide Bausteine sehen fast gleich aus. Trotzdem bleibt die eine Fläche Navigation und die andere Aktion.</p>
</div>

## Eine ruhige Entscheidungsfrage

Frage nicht zuerst: „Wie soll es aussehen?“

Frage zuerst: **„Führt es zu einem Ziel oder löst es hier etwas aus?“**

Damit lässt sich viel sicherer entscheiden, ob <code>&lt;a&gt;</code> oder <code>&lt;button&gt;</code> passt.

## Typische Situationen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Link</strong>
    <span>Menüpunkte, Artikelverweise, Downloadziele, Sprungmarken innerhalb einer Seite.</span>
  </div>
  <div class="visual-item">
    <strong>Button</strong>
    <span>Formular senden, Modal öffnen, Filter auslösen, Daten speichern.</span>
  </div>
  <div class="visual-item">
    <strong>Wichtiger Gedanke</strong>
    <span>Dass beide mit CSS wie Buttons aussehen können, ändert ihre semantische Aufgabe nicht.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Link ist für Navigation da. Ein Button ist für Aktionen da. Das Aussehen darf ähnlich sein, die Funktion sollte es nicht verwischen.</p>
</div>
