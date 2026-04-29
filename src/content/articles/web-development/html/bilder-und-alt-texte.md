---
title: "Bilder und Alt-Texte"
description: "Verstehe, wie Bilder im Web eingebunden werden und warum gute Alternativtexte für Bedeutung, Funktion und Zugänglichkeit entscheidend sind."
subject: "web-development"
section: "HTML"
topicPath: ["html", "bilder-und-alt-texte"]
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

Bilder sind im Web nicht nur Schmuck. Sie transportieren Informationen, unterstützen Orientierung oder lösen sogar Aktionen aus. Genau deshalb reicht es nicht, sie nur visuell zu betrachten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Icon im Such-Button</h3>
  <p>Wenn ein Lupenbild nur visuell zeigt, dass ein Button die Suche auslöst, ist nicht Lupe die wichtigste Information, sondern die Funktion Suche.</p>
</div>

## Drei Bildrollen ruhig unterscheiden

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

## Mini-Demo: gleiches Motiv, anderer Zweck

<div class="figure-card">
  <p class="card-kicker">Kontextvergleich</p>
  <h3>Dasselbe Bild braucht je nach Rolle einen anderen Umgang</h3>
  <div style="display:grid; gap:0.8rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px dashed #94a3b8;">
      <strong>Informativ</strong>
      <p style="margin:0.35rem 0 0;">Ein Diagramm zeigt, dass der Umsatz von Januar bis März deutlich steigt.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px dashed #94a3b8;">
      <strong>Dekorativ</strong>
      <p style="margin:0.35rem 0 0;">Ein Ornament im Seitenkopf fügt keine eigene Information hinzu.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px dashed #94a3b8;">
      <strong>Funktional</strong>
      <p style="margin:0.35rem 0 0;">Ein Lupen-Icon steht im Such-Button für die Aktion Suche.</p>
    </div>
  </div>
</div>

## Gute und schwache Alt-Texte

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Der Zweck wird klar</h3>
    <p>Ein funktionales Bild im Such-Button bekommt einen Text wie <code>Suche</code>, weil genau diese Handlung für Nutzende wichtig ist.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur die Optik wird benannt</h3>
    <p>Ein Text wie <code>Lupe</code> beschreibt zwar das Motiv, aber nicht die Funktion des Elements im Kontext.</p>
  </section>
</div>

## Drei typische Fälle

<pre><code>&lt;img src="diagramm.png" alt="Umsatz steigt von Januar bis März deutlich an" /&gt;</code></pre>

<pre><code>&lt;img src="ornament.png" alt="" /&gt;</code></pre>

<pre><code>&lt;a href="/suche"&gt;
  &lt;img src="lupe.svg" alt="Suche" /&gt;
&lt;/a&gt;</code></pre>

## Diese Seite behandelt bewusst den Bildzweck

Die wichtigste Frage lautet nicht: Wie sieht das Bild aus? Sondern: **Wozu ist dieses Bild hier da?** Erst daraus ergibt sich, ob man Information, Funktion oder gar nichts formulieren sollte.

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

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Alt-Text soll fehlende Sicht nicht einfach mit Bildbeschreibung ersetzen, sondern die relevante Information oder Funktion zugänglich machen.</p>
</div>
