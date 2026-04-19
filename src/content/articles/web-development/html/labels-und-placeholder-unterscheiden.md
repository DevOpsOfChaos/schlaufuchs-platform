---
title: Labels und Placeholder unterscheiden
description: Verstehe, warum ein sichtbares Label die eigentliche Feldbeschriftung ist und warum Placeholder diese Aufgabe nicht zuverlässig ersetzt.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - labels-und-placeholder-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen Label und Placeholder.
  - Du beschreibst, warum Placeholder keine vollständige Feldbeschriftung ersetzt.
  - Du planst Formularfelder eher über Fragen und Beschriftungen als über graue Beispieltexte.
practiceIdeas:
  - Vergleiche ein Feld mit sichtbarem Label und ein Feld nur mit Placeholder.
  - Prüfe bei Formularen, welche Information dauerhaft sichtbar bleiben muss.
  - Lies Placeholder als Ergänzung und nicht als Hauptbeschriftung.
commonMistakes:
  - Placeholder mit echter Beschriftung zu verwechseln.
  - zu glauben, dass ein grauer Beispieltext für Orientierung ausreicht.
  - Formulare zuerst nach Optik statt nach verständlichen Fragen zu bauen.
keyTakeaways:
  - Ein Label benennt das Feld dauerhaft und klar.
  - Placeholder kann ergänzen, ersetzt aber keine richtige Beschriftung.
  - Gute Formulare beginnen mit verständlichen Fragen und nicht mit Designtricks.
recognizeSignals:
  - Es geht um Formulare, Eingabefelder, Beschriftung oder graue Beispieltexte.
  - Du sollst erklären, warum ein Feld ohne sichtbares Label problematisch wird.
  - In Beispielen wird ein Formular sichtbar unklar, obwohl ein Placeholder vorhanden ist.
selfCheckPoints:
  - Kann ich Label und Placeholder sauber unterscheiden?
  - Kann ich erklären, warum Beschriftung dauerhaft sichtbar bleiben sollte?
  - Kann ich formulieren, wann ein Placeholder sinnvoll ergänzt, aber nicht trägt?
tags:
  - html
  - form
  - label
  - placeholder
level: einfach
draft: false
---

## Grundidee

Ein Formularfeld braucht eine **klare Frage**. Diese Frage wird durch ein sichtbares `label` gestellt. Ein Placeholder im Feld kann helfen, ist aber etwas anderes: Er ist eher ein kurzer Hinweis oder ein Beispiel im Eingabebereich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Feld mit grauem Beispieltext</h3>
  <p>In einem Kontaktformular steht im Eingabefeld nur <code>name@example.de</code>. Das sieht zunächst ordentlich aus. Sobald etwas eingegeben wird, verschwindet der Text aber. Die eigentliche Frage nach der E-Mail-Adresse war damit nie dauerhaft klar sichtbar.</p>
</div>

## Zwei verschiedene Rollen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Label</p>
    <h3>Die eigentliche Feldbeschriftung</h3>
    <p>Das Label sagt dauerhaft, welche Information erwartet wird.</p>
  </section>
  <section>
    <p class="card-kicker">Placeholder</p>
    <h3>Ein zusätzlicher Hinweis</h3>
    <p>Der Placeholder kann ein Format, ein Beispiel oder eine knappe Ergänzung zeigen.</p>
  </section>
</div>

## Mini-Demo: dieselbe Eingabe, andere Klarheit

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein Feld wird nicht durch grauen Text verständlich, sondern durch seine Frage</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <label for="mail-gut" style="display:block; font-weight:700; margin-bottom:0.45rem;">E-Mail-Adresse</label>
      <input id="mail-gut" type="email" placeholder="name@example.de" style="width:100%; padding:0.7rem 0.8rem; border-radius:12px; border:1px solid #94a3b8; box-sizing:border-box;" />
      <p style="margin:0.6rem 0 0;">Die Frage bleibt sichtbar, auch wenn schon etwas eingegeben wurde.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <input type="email" placeholder="name@example.de" style="width:100%; padding:0.7rem 0.8rem; border-radius:12px; border:1px solid #94a3b8; box-sizing:border-box;" />
      <p style="margin:0.6rem 0 0;">Der graue Text sieht zunächst hilfreich aus, ersetzt aber die eigentliche Feldfrage nicht dauerhaft.</p>
    </div>
  </div>
</div>

## Warum Placeholder oft zu schwach ist

Placeholder verschwindet oft, sobald eingegeben wird. Genau deshalb ist er keine verlässliche Hauptorientierung. Wer später nochmal auf das Feld schaut, sieht den Hinweis möglicherweise gar nicht mehr.

## Diese Seite behandelt bewusst nur Formularbeschriftung

Hier geht es um **Feldfragen in Formularen**. Die Benennung von Icon-Buttons oder Bedienelementen mit `aria-label` ist eine andere Aufgabe und gehört auf die eigene ARIA-Seite.

<pre><code>&lt;label for="mail"&gt;E-Mail-Adresse&lt;/label&gt;
&lt;input id="mail" type="email" placeholder="name@example.de" /&gt;</code></pre>

## Eine ruhige Prüfstrategie

1. Welche Frage stellt dieses Feld?
2. Ist diese Frage dauerhaft sichtbar?
3. Ergänzt der Placeholder nur ein Beispiel oder versucht er die ganze Beschriftung zu tragen?
4. Erst danach an Feinschliff und Optik denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein gutes Formular beginnt mit klaren sichtbaren Fragen. Placeholder darf helfen, aber nicht die eigentliche Beschriftung ersetzen.</p>
</div>
