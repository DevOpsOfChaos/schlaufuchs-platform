---
title: Bilder und Alt-Texte
description: Verstehe, wie Bilder im Web eingebunden werden und warum gute Alternativtexte für Bedeutung, Funktion und Zugänglichkeit entscheidend sind.
subject: web-development
section: HTML
topicPath:
  - html
  - bilder-und-alt-texte
tags:
  - bild
  - alt
  - zugänglichkeit
  - html
learningGoals:
  - "Du erklärst, warum Bilder im Web einen passenden Alternativtext brauchen können."
  - "Du unterscheidest informative, dekorative und funktionale Bilder grob voneinander."
  - "Du erkennst, dass guter Alternativtext die Bedeutung oder Funktion beschreibt, nicht nur das Aussehen."
practiceIdeas:
  - "Vergleiche für ein Bild mehrere mögliche alt-Texte und bewerte sie."
  - "Ordne Bilder danach ein, ob sie informativ, dekorativ oder funktional sind."
  - "Prüfe bei einem Beispiel, ob der Alternativtext wirklich den Zweck des Bildes trifft."
commonMistakes:
  - "Jedes Bild mit demselben allgemeinen Muster zu beschreiben."
  - "Bei funktionalen Bildern nur das Aussehen statt die Aktion zu benennen."
  - "Dekorative Bilder unnötig mit bedeutungsleerem Text zu versehen."
keyTakeaways:
  - "Alt-Texte sollen Bedeutung oder Funktion eines Bildes zugänglich machen."
  - "Nicht jedes Bild braucht denselben Typ von Alternativtext."
  - "Guter Alternativtext richtet sich nach dem Zweck des Bildes im Kontext."
recognizeSignals:
  - "Es geht um Bilder, img, alt, Zugänglichkeit oder Sinn eines Bildes im Kontext."
  - "Du sollst entscheiden, was ein guter Alt-Text leisten muss."
  - "Ein Beispiel fragt nicht nur nach HTML-Syntax, sondern nach der Funktion des Bildes."
selfCheckPoints:
  - "Kann ich zwischen dekorativem, informativem und funktionalem Bild unterscheiden?"
  - "Kann ich erklären, warum ein Alt-Text den Zweck statt nur die Optik beschreiben soll?"
  - "Kann ich für ein Beispiel einen passenden Alternativtext formulieren?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Bilder sind im Web nicht nur Schmuck. Sie transportieren Informationen, unterstützen Navigation oder lösen sogar Aktionen aus. Genau deshalb reicht es nicht, sie nur visuell zu betrachten.

Der Alternativtext hilft dabei, den Zweck oder die Bedeutung eines Bildes zugänglich zu machen, wenn das Bild selbst nicht gesehen werden kann.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Icon im Such-Button</h3>
  <p>Wenn ein Lupenbild nur visuell zeigt, dass ein Button die Suche auslöst, ist nicht „Lupe“ die wichtigste Information, sondern die Funktion „Suche“.</p>
</div>

## Nicht jedes Bild hat denselben Zweck

Ein Bild kann sehr unterschiedlich eingesetzt sein:

- **informativ**, wenn es eine inhaltliche Aussage trägt,
- **dekorativ**, wenn es nur Gestaltung unterstützt,
- **funktional**, wenn es Teil eines Links oder Buttons ist.

Davon hängt ab, wie der Alternativtext aussehen sollte.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Informativ</p>
    <h3>Die Aussage zählt</h3>
    <p>Der Alt-Text soll die wesentliche Information transportieren, die das Bild dem Inhalt hinzufügt.</p>
  </section>
  <section>
    <p class="card-kicker">Dekorativ</p>
    <h3>Keine Zusatzbedeutung</h3>
    <p>Wenn das Bild nur schmückt, sollte kein künstlicher Bedeutungs-Text erfunden werden.</p>
  </section>
  <section>
    <p class="card-kicker">Funktional</p>
    <h3>Die Aktion zählt</h3>
    <p>Hier soll der Alt-Text oder der zugängliche Name die Funktion des Elements erklären.</p>
  </section>
</div>

## Informative Bilder

Bei informativen Bildern soll der Alt-Text die wesentliche Aussage des Bildes transportieren. Es geht nicht darum, jedes Detail aufzuzählen, sondern das Bedeutende knapp und klar wiederzugeben.

<pre><code>&lt;img src="diagramm.png" alt="Umsatz steigt von Januar bis März deutlich an" /&gt;</code></pre>

## Dekorative Bilder

Dekorative Bilder tragen keine wichtige Information für das Verständnis des Inhalts. In solchen Fällen sollte der Alternativtext nicht mit bedeutungslosem Text gefüllt werden.

<pre><code>&lt;img src="ornament.png" alt="" /&gt;</code></pre>

## Funktionale Bilder

Wenn ein Bild Teil einer Aktion ist – etwa als verlinktes Logo oder Icon in einem Button –, sollte der Alternativtext die **Funktion oder das Ziel** beschreiben.

<pre><code>&lt;a href="/suche"&gt;
  &lt;img src="lupe.svg" alt="Suche" /&gt;
&lt;/a&gt;</code></pre>

Gerade hier zeigt sich, dass Alternativtext immer vom Kontext abhängt.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Erst der Zweck, dann der Text</h3>
  <div class="signal-flow compact">
    <div><strong>Bild im Kontext ansehen</strong><span>Was macht es hier?</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Typ einordnen</strong><span>informativ, dekorativ oder funktional</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Alt-Text formulieren</strong><span>nur die relevante Bedeutung nennen</span></div>
  </div>
</div>

## Gute Alt-Texte entstehen aus dem Zweck

Die wichtigste Frage lautet nicht: „Wie sieht das Bild aus?“, sondern: „Wozu ist dieses Bild hier da?“

Erst aus dieser Frage ergibt sich, ob man die Information, die Funktion oder gar nichts formulieren sollte.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So prüfst du Alt-Texte ruhiger</h3>
  <ul>
    <li>Frage zuerst, ob das Bild Information, Gestaltung oder Funktion trägt.</li>
    <li>Formuliere dann nur das, was für diesen Zweck wirklich wichtig ist.</li>
    <li>Prüfe am Ende, ob der Alt-Text auch ohne das sichtbare Bild sinnvoll bleibt.</li>
  </ul>
</div>
