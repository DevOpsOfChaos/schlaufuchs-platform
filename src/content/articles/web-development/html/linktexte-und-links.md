---
title: Linktexte und Links sinnvoll schreiben
description: Verstehe, warum gute Linktexte Orientierung geben und wie Links inhaltlich statt nur optisch wirken.
subject: web-development
section: HTML
topicPath:
  - html
  - linktexte-und-links
tags:
  - links
  - a-element
  - barrierefreiheit
  - navigation
learningGoals:
  - "Du erklärst, warum Linktexte den Zweck eines Links deutlich machen sollen."
  - "Du unterscheidest aussagekräftige und unklare Linktexte."
  - "Du erkennst Links als inhaltliche Navigation statt nur als klickbare Farbe."
practiceIdeas:
  - "Vergleiche gute und schlechte Linktexte in kleinen Beispielen."
  - "Verbessere unklare Formulierungen wie 'hier klicken'."
  - "Prüfe bei einem Link, ob sein Ziel aus dem Text verständlich wird."
commonMistakes:
  - "Links nur visuell statt inhaltlich zu betrachten."
  - "Linktexte zu allgemein zu formulieren."
  - "Den Zweck des Ziels nicht im Linktext sichtbar zu machen."
keyTakeaways:
  - "Ein guter Linktext macht den Zweck des Ziels erkennbar."
  - "Links sind Teil der Orientierung auf einer Seite."
  - "Unklare Standardformulierungen helfen oft weniger als präzise Benennungen."
recognizeSignals:
  - "Es geht um Navigation, Verlinkung, Linkzweck oder Barrierefreiheit."
  - "Du sollst Links verbessern oder ihre Verständlichkeit beurteilen."
  - "Ein Beispiel vergleicht mehrere Linkformulierungen."
selfCheckPoints:
  - "Kann ich erklären, warum 'hier' oft kein guter Linktext ist?"
  - "Kann ich einen Linkzweck in wenigen Worten präzise beschreiben?"
  - "Kann ich beurteilen, ob ein Linktext auch ohne Farbe sinnvoll bleibt?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Links sind nicht nur klickbare Stellen, sondern Orientierungspunkte. Sie helfen Menschen zu verstehen, wohin eine Seite weiterführt und welche Information dahinter liegt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Links, nur einer hilft wirklich</h3>
  <p><code>Hier klicken</code> sagt fast nichts über das Ziel. Ein Linktext wie <code>Download der Stundenplan-PDF</code> erklärt dagegen sofort, was sich hinter dem Link verbirgt.</p>
</div>

## Ein Link braucht einen erkennbaren Zweck

Ein Link ist am hilfreichsten, wenn sein Zweck aus dem Text deutlich wird.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Unklar</p>
    <h3>„Hier klicken“</h3>
    <p>Der Text sagt kaum etwas darüber, wohin die Reise geht oder was nach dem Klick passiert.</p>
  </section>
  <section>
    <p class="card-kicker">Klar</p>
    <h3>„Zur Übersicht der Prüfungsformate“</h3>
    <p>Das Ziel wird schon vor dem Klick inhaltlich verständlich.</p>
  </section>
</div>

## Links sind Teil der Seitenlogik

Ein Link ist nicht nur eine farbige Stelle im Text. Er ist Teil der Orientierung einer Seite.

<div class="figure-card">
  <p class="card-kicker">Orientierungsbild</p>
  <h3>So hilft ein guter Link beim Lesen</h3>
  <div class="signal-flow compact">
    <div><strong>Linktext lesen</strong><span>Ziel oder Zweck erkennen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Entscheidung treffen</strong><span>Ist das gerade relevant?</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>gezielt weitergehen</strong><span>ohne Rätselraten klicken</span></div>
  </div>
</div>

## Ein kleines HTML-Beispiel

<pre><code>&lt;a href="/pruefungen/formate"&gt;Zur Übersicht der Prüfungsformate&lt;/a&gt;</code></pre>

## Warum Standardformulierungen oft zu schwach sind

Allgemeine Formulierungen wie „hier“, „mehr“ oder „weiter“ wirken nur dann sinnvoll, wenn der Kontext extrem klar ist. Oft ist ein präziserer Zwecktext aber deutlich hilfreicher.

## Gute Linktexte beschreiben nicht alles, aber das Richtige

Ein guter Linktext muss nicht lang sein. Er soll vor allem den Zweck des Ziels erkennbar machen:

- Was finde ich dort?
- Welche Aktion steht dahinter?
- Warum sollte ich dorthin gehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Linktexte helfen auch dann, wenn Farbe, Layout oder unmittelbarer Kontext wegfallen. Genau deshalb sind sie wichtig für Orientierung und Zugänglichkeit.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So verbesserst du Linktexte ruhiger</h3>
  <ul>
    <li>Frage zuerst, welches Ziel oder welche Funktion der Link wirklich hat.</li>
    <li>Formuliere dann einen kurzen Text, der genau diesen Zweck sichtbar macht.</li>
    <li>Prüfe am Ende, ob der Link auch ohne umgebenden Satz noch sinnvoll wirkt.</li>
  </ul>
</div>
