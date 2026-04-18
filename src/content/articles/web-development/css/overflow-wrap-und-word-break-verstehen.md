---
title: Overflow-Wrap und Word-Break verstehen
description: Verstehe, wie lange Wörter oder Zeichenketten umgebrochen werden und warum lesbarer Text nicht nur von Breite, sondern auch vom Umbruchverhalten abhängt.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - overflow-wrap-und-word-break-verstehen
learningGoals:
  - Du erklärst die Grundidee von overflow-wrap und word-break.
  - Du beschreibst, warum lange Zeichenketten Layouts sprengen können.
  - Du liest Textumbruch als Lesbarkeits- und Layoutthema zugleich.
practiceIdeas:
  - Vergleiche einen normalen Absatz mit einer langen URL oder einem langen Produktcode.
  - Prüfe, wann ein Zeilenumbruch das Layout schützt und wann er die Lesbarkeit schwächt.
  - Lies Textblöcke eher über Umbruchverhalten als nur über Breite.
commonMistakes:
  - lange Zeichenketten wie normalen Fließtext zu behandeln.
  - jeden harten Umbruch automatisch als gute Lösung zu sehen.
  - Lesbarkeit und Layoutschutz gegeneinander auszuspielen, statt beides zusammen zu denken.
keyTakeaways:
  - Lange Wörter oder URLs können kleine Layouts sprengen.
  - overflow-wrap hilft, Inhalte notfalls umzubrechen.
  - word-break greift stärker ein und sollte bewusster gelesen werden.
recognizeSignals:
  - Es geht um Karten, Chat-Nachrichten, URLs, Codes oder schmale Spalten.
  - Du sollst erklären, warum Text plötzlich aus einer Box herausläuft oder hart bricht.
  - In Beispielen ist die Lesbarkeit genauso wichtig wie das Halten der Boxbreite.
selfCheckPoints:
  - Kann ich overflow-wrap und word-break grob unterscheiden?
  - Kann ich erklären, warum ein langer String das Layout gefährden kann?
  - Kann ich eine ruhige Lösung zwischen Layoutschutz und Lesbarkeit beschreiben?
tags:
  - css
  - text
  - umbruch
  - responsive
level: mittel
draft: false
---

## Grundidee

Normaler Fließtext bricht meist an sinnvollen Stellen um. Lange URLs, IDs oder zusammengesetzte Wörter können dagegen so lang sein, dass eine Box zu schmal wird. Dann helfen Regeln wie `overflow-wrap` oder `word-break`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine schmale Kartenansicht mit langer URL</h3>
  <p>In einer kleinen Mobilkarte passt normaler Text problemlos. Eine lange URL ohne Leerzeichen schiebt die Karte aber plötzlich auseinander. Jetzt wird sichtbar: Das Problem ist nicht nur die Breite, sondern auch das Umbruchverhalten.</p>
</div>

## Zwei ähnliche Werkzeuge mit unterschiedlicher Stärke

<div class="compare-card">
  <p class="card-kicker">Begriffe trennen</p>
  <h3>Beide schützen das Layout, aber nicht auf dieselbe Weise</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>overflow-wrap</strong>
      <span>Hilft, sehr lange Inhalte notfalls umzubrechen, wenn sie sonst die Box sprengen würden.</span>
    </div>
    <div class="compare-item">
      <strong>word-break</strong>
      <span>Greift stärker in den Wortumbruch ein und kann Text auch mitten im Wort zerlegen.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleiche Karte, anderes Umbruchverhalten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Layoutschutz und Lesbarkeit zusammen denken</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="max-width:16rem; padding:0.95rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne Hilfe</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">https://sehrlangebeispieladresseohnepausen.de/konto/ueberblick/monatsarchiv</div>
      <p style="margin:0.55rem 0 0;">Die Zeichenkette will über die Boxbreite hinaus.</p>
    </div>
    <div style="max-width:16rem; padding:0.95rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit overflow-wrap</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; overflow-wrap:anywhere;">https://sehrlangebeispieladresseohnepausen.de/konto/ueberblick/monatsarchiv</div>
      <p style="margin:0.55rem 0 0;">Die Box bleibt stabil und der Inhalt darf bei Bedarf umbrechen.</p>
    </div>
  </div>
</div>

```css
.karte-url {
  overflow-wrap: anywhere;
}
```

## Eine ruhige Prüfstrategie

1. Ist der Inhalt normaler Fließtext oder eine lange Zeichenkette?
2. Soll zuerst die Lesbarkeit oder zuerst der reine Layoutschutz gesichert werden?
3. Reicht eine sanfte Notfalllösung wie `overflow-wrap`?
4. Wird der Text durch den Umbruch noch sinnvoll lesbar?

<div class="note-panel">
  <p><strong>Merke:</strong> Lange Zeichenketten sind kein normaler Absatz. Gute Umbruchregeln schützen die Box, ohne die Lesbarkeit unnötig zu zerstören.</p>
</div>
