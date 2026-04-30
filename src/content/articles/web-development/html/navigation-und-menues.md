---
title: "Navigation und Menüs"
description: "Verstehe, wie Navigation die Struktur einer Website sichtbar macht und warum Menüs klar, erreichbar und konsistent aufgebaut sein müssen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "navigation-und-menues"]
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

Navigation ist ein zentrales Orientierungssystem einer Website. Sie zeigt nicht nur Wege an, sondern macht die Struktur des Angebots sichtbar.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Untermenü braucht einen zweiten Weg</h3>
  <p>Wenn Unterpunkte nur in einem Fly-out erscheinen, sollten sie trotzdem anders erreichbar bleiben. So bleibt die Seitenstruktur auch dann zugänglich, wenn das Menü nicht perfekt bedient werden kann.</p>
</div>

## Navigation zeigt Hierarchie

Wenn ein Menü gut geplant ist, erkennt man daran oft schon,

- welche Hauptbereiche es gibt,
- welche Inhalte zusammengehören,
- und wo Unterseiten eingeordnet sind.

<div class="figure-card">
  <p class="card-kicker">Strukturbild</p>
  <h3>Von Inhalten zur Navigation</h3>
  <div class="signal-flow compact">
    <div><strong>Inhalte ordnen</strong><span>Was gehört zusammen?</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Hauptpunkte bilden</strong><span>klare Oberbereiche benennen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Unterpunkte zuordnen</strong><span>Hierarchie sichtbar machen</span></div>
  </div>
</div>

## Linksammlung oder Navigation?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Linksammlung</p>
    <h3>Alles nebeneinander</h3>
    <p>Viele Links sind vorhanden, aber die Struktur ist kaum erkennbar.</p>
  </section>
  <section>
    <p class="card-kicker">Navigation</p>
    <h3>Struktur wird sichtbar</h3>
    <p>Haupt- und Unterpunkte sind sinnvoll geordnet, erreichbar und verständlich benannt.</p>
  </section>
</div>

## Menüs müssen erreichbar bleiben

Gerade bei Untermenüs reicht es nicht, nur optisch etwas einzublenden. Nutzende müssen Unterpunkte auch zuverlässig erreichen können – nicht nur mit Maus, sondern auch mit Tastatur und klarer Struktur.

<pre><code>&lt;nav aria-label="Hauptnavigation"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/lernen"&gt;Lernen&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/aufgaben"&gt;Aufgaben&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/kontakt"&gt;Kontakt&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

Hier geht es um **Hierarchie, Hauptpunkte und Erreichbarkeit**. Die Formulierung einzelner Linktexte ist eine andere, kleinere Frage und gehört auf die eigene Linktext-Seite.

## Gute und schwache Menülogik

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Wenige klare Hauptpunkte</h3>
    <p>Die wichtigsten Bereiche sind ruhig benannt, Unterpunkte bleiben nachvollziehbar und die Struktur wirkt auch ohne Hover-Effekte verständlich.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Viele Links ohne erkennbare Ordnung</h3>
    <p>Wenn alles gleichzeitig sichtbar ist, aber keine Hierarchie erkennbar wird, verliert die Navigation ihre eigentliche Orientierungsfunktion.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Welche Hauptbereiche der Website sollen sichtbar werden?
2. Welche Unterpunkte gehören wirklich unter denselben Oberpunkt?
3. Bleiben wichtige Ziele auch erreichbar, wenn ein Untermenü nicht perfekt funktioniert?
4. Bleiben Bezeichnungen und Positionen konsistent?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Menü soll nicht beeindrucken, sondern Orientierung geben. Gute Navigation macht Inhalte lesbar, bevor überhaupt geklickt wird.</p>
</div>
