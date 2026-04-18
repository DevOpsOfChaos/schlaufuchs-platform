---
title: Placeholder, Hinweistext und Label unterscheiden
description: Verstehe, welche Aufgabe Feldbeschriftung, Zusatzhinweis und Platzhalter im Formular jeweils haben und warum gleiche Nähe nicht dieselbe Rolle bedeutet.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - placeholder-hinweistext-und-label-unterscheiden
learningGoals:
  - Du unterscheidest Label, Hinweistext und Placeholder nach ihrer Rolle.
  - Du erklärst, warum ein Placeholder keine dauerhafte Hauptbeschriftung ersetzt.
  - Du liest Formulartexte eher als Aufgabenverteilung statt nur als „Text beim Feld“.
practiceIdeas:
  - Zerlege ein Formularfeld bewusst in Benennung, Zusatzhilfe und Beispiel im Feld.
  - Prüfe, welche Information nach der Eingabe sichtbar bleiben muss.
  - Vergleiche ein Feld nur mit Placeholder mit einem sauber beschrifteten Feld.
commonMistakes:
  - Placeholder und Label gleichzusetzen.
  - Hinweistext als eigentliche Feldbenennung zu verwenden.
  - nur auf die Nähe zum Feld statt auf die Funktion des Textes zu achten.
keyTakeaways:
  - Das Label benennt das Feld.
  - Hinweistext ergänzt Regeln oder Kontext.
  - Der Placeholder ist eher ein kurzer Beispiel- oder Erwartungshinweis im Feld.
recognizeSignals:
  - Es geht um Formulare, Eingabefelder oder die Verständlichkeit von Feldtexten.
  - Du sollst erklären, welcher Text wofür da ist.
  - In Beispielen zählt die Rolle des Textes stärker als seine Position.
selfCheckPoints:
  - Kann ich Label, Hinweistext und Placeholder fachlich trennen?
  - Kann ich erklären, welcher Text nach der Eingabe sichtbar bleiben sollte?
  - Kann ich begründen, warum ein Placeholder keine volle Hauptbeschriftung ersetzt?
tags:
  - html
  - formular
  - label
  - placeholder
  - hinweistext
level: einfach
draft: false
---

## Grundidee

Bei Formularen stehen oft mehrere Texte in der Nähe eines Feldes. Trotzdem haben sie **nicht dieselbe Aufgabe**. Genau hier wird ruhiges Formulardenken wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein E-Mail-Feld mit Beispiel und Zusatzhinweis</h3>
  <p>Über dem Feld steht „E-Mail-Adresse“, darunter „Wir senden die Bestätigung an diese Adresse“, und im Feld selbst erscheint grau „max@example.de“. Alle drei Texte helfen – aber auf verschiedene Weise.</p>
</div>

## Die drei Rollen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>Label</strong>
    <span>Benennt das Feld und erklärt, welche Information hier überhaupt gefragt ist.</span>
  </div>
  <div class="visual-item">
    <strong>Hinweistext</strong>
    <span>Ergänzt Regeln, Zweck oder Kontext des Feldes.</span>
  </div>
  <div class="visual-item">
    <strong>Placeholder</strong>
    <span>Gibt im Feld einen kurzen Beispiel- oder Erwartungshinweis, verschwindet aber beim Tippen.</span>
  </div>
</div>

## Mini-Demo: gleicher Eindruck, aber andere Rollen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was nach der Eingabe sichtbar bleibt, ist besonders wichtig</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur Placeholder</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; color:#94a3b8;">max@example.de</div>
      <p style="margin:0.55rem 0 0;">Sobald Eingabe stattfindet, verschwindet dieser Text. Die Aufgabe des Feldes ist dann nicht mehr am Platzhalter ablesbar.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Label plus Hinweis</strong></p>
      <div style="font-weight:700; margin-bottom:0.35rem;">E-Mail-Adresse</div>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; color:#94a3b8;">max@example.de</div>
      <p style="margin:0.45rem 0 0; color:#475569;">Wir senden die Bestätigung an diese Adresse.</p>
      <p style="margin:0.55rem 0 0;">Die Hauptrolle des Feldes bleibt sichtbar, auch wenn schon Text eingetragen wurde.</p>
    </div>
  </div>
</div>

## Warum Placeholder keine Hauptbeschriftung ersetzt

Ein Placeholder ist flüchtig. Er verschwindet beim Tippen und eignet sich deshalb nur begrenzt dafür, die Aufgabe eines Feldes dauerhaft sichtbar zu halten.

<div class="compare-card">
  <p class="card-kicker">Ruhige Rollenlogik</p>
  <h3>Was muss bleiben, was darf Zusatz sein?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Label</strong>
      <span>Soll die eigentliche Bedeutung des Feldes klar und dauerhaft benennen.</span>
    </div>
    <div class="compare-item">
      <strong>Hinweistext</strong>
      <span>Darf ergänzen, wie etwas auszufüllen ist oder warum die Information gebraucht wird.</span>
    </div>
    <div class="compare-item">
      <strong>Placeholder</strong>
      <span>Ist eher eine kurze Hilfestellung im Feld und keine stabile Hauptorientierung.</span>
    </div>
  </div>
</div>

## Gute und schwache Feldlogik

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Benennung, Hilfe und Beispiel trennen</h3>
    <p>Das Feld bleibt verständlich, auch wenn der Nutzer bereits etwas eingetragen hat.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Alles nur in den Placeholder packen</h3>
    <p>Dann verschwindet Orientierung genau in dem Moment, in dem das Feld aktiv benutzt wird.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Was ist die eigentliche Aufgabe des Feldes?
2. Welcher Text benennt diese Aufgabe?
3. Welcher Text ergänzt nur Hinweise oder Beispiele?
4. Verschwindet wichtige Information beim Tippen? Dann ist die Rollenverteilung oft noch nicht sauber.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Formulare trennen Benennung, Erklärung und Beispiel. Wenn alles nur im Placeholder steckt, wird Orientierung schnell fragil.</p>
</div>
