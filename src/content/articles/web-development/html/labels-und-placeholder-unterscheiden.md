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

## Vorher, währenddessen, danach lesen

<div class="compare-card">
  <p class="card-kicker">Zeitlicher Blick</p>
  <h3>Gute Feldbeschriftung bleibt nicht nur am Anfang klar</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Vor dem Tippen</strong>
      <span>Ein Placeholder kann zunächst noch wie Orientierung wirken.</span>
    </div>
    <div class="compare-item">
      <strong>Während der Eingabe</strong>
      <span>Das sichtbare Label bleibt. Der Placeholder verschwindet oft gerade dann, wenn die Feldfrage noch gebraucht wird.</span>
    </div>
    <div class="compare-item">
      <strong>Nach dem ersten Zeichen</strong>
      <span>Wenn nur der Placeholder die Feldfrage getragen hat, ist die Orientierung instabil geworden.</span>
    </div>
  </div>
</div>

## Mit oder ohne Placeholder kann beides gut sein

Ein häufiger Fehlstart ist, nur zwischen **„Placeholder ja“** und **„Placeholder nein“** zu denken. Die ruhigere Frage ist:

- Wer trägt die eigentliche Feldfrage?
- Und wer liefert nur ein Beispiel oder Format?

Gerade deshalb kann diese Kombination sehr sinnvoll sein:

```html
<label for="telefon">Telefonnummer</label>
<input id="telefon" type="tel" placeholder="+49 123 456789" />
```

Hier stellt das Label die Frage **„Welche Information wird erwartet?“**
Der Placeholder beantwortet nur die Zusatzfrage **„Wie könnte das ungefähr aussehen?“**

## Die Kernfrage ist nicht „Placeholder ja oder nein?“

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Entscheidend ist, wer die Feldfrage trägt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Label plus Placeholder</strong>
      <span>Gut, wenn der Placeholder nur ein Format oder Beispiel ergänzt.</span>
    </div>
    <div class="compare-item">
      <strong>Nur Label</strong>
      <span>Ebenfalls ruhig und oft schon völlig ausreichend, wenn kein Zusatzbeispiel nötig ist.</span>
    </div>
    <div class="compare-item">
      <strong>Nur Placeholder</strong>
      <span>Die Hauptfrage bleibt an einen verschwindenden Hinweis gebunden und wird dadurch instabil.</span>
    </div>
  </div>
</div>

## Ein typischer Fehlschluss: längerer Placeholder sei schon fast ein Label

Ein längerer Placeholder wie <code>Bitte geschäftliche E-Mail-Adresse eingeben</code> wirkt zunächst hilfreicher. Trotzdem bleibt das Grundproblem gleich: Die Orientierung sitzt im Feld und verschwindet oft wieder, sobald jemand tippt. Mehr Text macht aus einem Placeholder also noch keine eigentliche Feldbeschriftung.

## Fehlerfall: Eingabe läuft, Orientierung verschwindet

Gerade bei längeren Formularen schaut man während der Eingabe oft noch einmal zurück: „Was sollte ich hier nochmal eintragen?“ Wenn die Feldfrage nur als Placeholder im Feld stand, fehlt diese Orientierung genau in diesem Moment. Ein sichtbares Label löst genau dieses Problem ruhiger.

## Diese Seite behandelt bewusst Formularfelder, nicht Buttons

Hier geht es um **sichtbare Feldfragen in Formularen**. Die Frage, warum ein Icon-Button eventuell ein `aria-label` braucht und warum sichtbarer Text dort oft trotzdem die ruhigere Lösung ist, gehört auf die eigene Button-/ARIA-Seite.

## Mini-Prüfbild für den Kopf

<pre><code>Welche Frage stellt das Feld?            → zuerst sichtbare Beschriftung suchen
Bleibt diese Frage beim Tippen sichtbar? → Label trägt, Placeholder oft nicht
Hilft der Placeholder nur als Beispiel?  → gut, dann ergänzt er ruhig
Versucht der Placeholder alles allein?   → unruhig, weil die Feldfrage instabil wird</code></pre>

## Eine ruhige Prüfstrategie

1. Welche Frage stellt dieses Feld?
2. Ist diese Frage außerhalb des Feldes sichtbar?
3. Ergänzt der Placeholder nur Format oder Beispiel?
4. Bleibt die Orientierung auch nach dem ersten getippten Zeichen erhalten?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein gutes Formular beginnt mit klar sichtbaren Fragen. Placeholder darf helfen, aber nicht die eigentliche Beschriftung alleine tragen.</p>
</div>
