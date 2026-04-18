---
title: Focus-Visible und Tastaturfokus verstehen
description: Verstehe, warum focus-visible den Tastaturfokus gezielter sichtbar macht und warum Fokusmarkierungen nicht einfach störende Ränder sind.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - focus-visible-und-tastaturfokus-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen focus und focus-visible.
  - Du beschreibst, warum Tastaturfokus sichtbar bleiben muss.
  - Du liest Fokuszustände eher als Bedienhilfe als als bloße Dekoration.
practiceIdeas:
  - Vergleiche einen Buttonzustand bei Mausinteraktion und bei Tastaturnavigation.
  - Prüfe, welche Markierung nur dann auftauchen soll, wenn Orientierung wirklich gebraucht wird.
  - Lies Fokusmarkierungen als Teil der Nutzbarkeit, nicht nur des Styles.
commonMistakes:
  - focus und focus-visible als dasselbe zu behandeln.
  - Fokusmarkierungen aus optischen Gründen komplett zu entfernen.
  - Tastaturbedienung nur mitzudenken, wenn Formulare sichtbar sind.
keyTakeaways:
  - focus-visible ist besonders für sichtbare Tastaturorientierung hilfreich.
  - Nicht jede Mausinteraktion braucht dieselbe Markierung wie die Tastaturnavigation.
  - Gute Fokuszustände sind ein Nutzbarkeitsthema.
recognizeSignals:
  - Es geht um Buttons, Links, Formulare oder Tastaturnavigation.
  - Du sollst erklären, wann eine Fokusmarkierung sichtbar werden sollte.
  - In Beispielen ist Orientierung wichtiger als Farbe oder Designgeschmack.
selfCheckPoints:
  - Kann ich focus und focus-visible sauber trennen?
  - Kann ich erklären, warum Tastaturfokus sichtbar bleiben sollte?
  - Kann ich einen Fokuszustand aus Sicht der Bedienbarkeit lesen?
tags:
  - css
  - focus-visible
  - focus
  - accessibility
level: mittel
draft: false
---

## Grundidee

Ein Element kann den Fokus haben, ohne dass jede Interaktion gleich aussehen muss. `:focus-visible` hilft dabei, Fokus besonders dann klar zu markieren, wenn Nutzende über die Tastatur Orientierung brauchen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Button wird per Tab statt per Maus erreicht</h3>
  <p>Mit der Maus sieht man oft schon, wo man klickt. Mit der Tastatur springt der Fokus dagegen von Element zu Element. Genau dann wird eine klare Markierung wichtig, damit man nicht den Überblick verliert.</p>
</div>

## Focus und Focus-Visible

<div class="compare-card">
  <p class="card-kicker">Begriffe trennen</p>
  <h3>Beides hat mit Fokus zu tun, aber nicht dieselbe Rolle</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>:focus</strong>
      <span>Trifft allgemein, sobald ein Element den Fokus hat.</span>
    </div>
    <div class="compare-item">
      <strong>:focus-visible</strong>
      <span>Hebt vor allem den Fokus dann sichtbar hervor, wenn Orientierung besonders gebraucht wird, etwa per Tastatur.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleiche Schaltfläche, andere Orientierung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die sichtbare Markierung ist eine Bedienhilfe</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mausklick</strong></p>
      <button style="padding:0.7rem 0.95rem; border:1px solid #94a3b8; border-radius:999px; background:white; color:#0f172a;">Profil öffnen</button>
      <p style="margin:0.6rem 0 0;">Der Button ist sichtbar, aber die Position im Fokuspfad spielt gerade kaum eine Rolle.</p>
    </div>
    <div style="padding:1rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Tastaturfokus</strong></p>
      <button style="padding:0.7rem 0.95rem; border:1px solid #94a3b8; border-radius:999px; background:white; color:#0f172a; outline:3px solid #f59e0b; outline-offset:3px;">Profil öffnen</button>
      <p style="margin:0.6rem 0 0;">Jetzt wird die Orientierung im Fokuspfad sichtbar und die Bedienung ruhiger.</p>
    </div>
  </div>
</div>

## Warum Fokusmarkierungen wichtig sind

Ohne sichtbare Fokusmarkierung kann die Tastaturnavigation schnell unklar werden. Dann weiß man nicht mehr, welches Element gerade aktiv ist oder was beim nächsten Tastendruck ausgelöst wird.

```css
.button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

## Eine ruhige Prüfstrategie

1. Kann das Element per Tastatur erreicht werden?
2. Ist im Fokuszustand klar erkennbar, **wo** man sich gerade befindet?
3. Ist die Markierung deutlich genug, ohne das Layout unnötig umzubauen?
4. Wird der Fokus nicht nur für Mausnutzer gedacht?

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Fokus als Orientierung lesen</h3>
    <p>Die sichtbare Markierung hilft beim Navigieren und macht den nächsten Schritt berechenbar.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Fokus nur als störenden Rand sehen</h3>
    <p>Dann verschwindet leicht eine wichtige Bedienhilfe für Tastaturnutzung.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>:focus-visible</code> ist keine Stil-Laune, sondern oft ein sehr sinnvoller Weg, sichtbare Tastaturorientierung ruhig und gezielt zu gestalten.</p>
</div>
