---
title: "HTML – Skip-Link und Landmarks für bessere Orientierung"
description: "Lerne, wie main, nav, header, footer und ein Skip-Link Tastatur- und Screenreader-Nutzung erleichtern."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "navigation-und-menues"
  - "skip-link-und-landmarks-fuer-bessere-orientierung"
learningGoals:
  - "Du erklärst, warum Landmark-Elemente Orientierung geben."
  - "Du verstehst den Zweck eines Skip-Links."
  - "Du trennst visuelle Kopfbereiche von semantischen Seitenregionen."
practiceIdeas:
  - "Baue eine einfache Seitenstruktur aus header, nav, main und footer."
  - "Prüfe, ob der Hauptinhalt per Tastatur schnell erreichbar ist."
  - "Erkläre, warum mehrere nav-Bereiche unterscheidbare Namen brauchen können."
commonMistakes:
  - "Nur div-Container ohne semantische Bereiche zu verwenden."
  - "Einen Skip-Link optisch zu verstecken, aber beim Fokus nicht sichtbar zu machen."
  - "Mehrere Navigationen ohne verständlichen Namen einzubauen."
keyTakeaways:
  - "Landmarks geben der Seite eine navigierbare Struktur."
  - "Ein Skip-Link spart Tastaturwegen über wiederholte Navigation."
  - "Der Hauptinhalt sollte eindeutig in main liegen."
recognizeSignals:
  - "Es geht um Tastaturnavigation, Seitenstruktur, main, nav oder Skip-Link."
  - "Eine Aufgabe fragt nach Orientierung auf langen Seiten."
  - "Der Kopfbereich wird auf jeder Seite wiederholt."
selfCheckPoints:
  - "Gibt es genau einen zentralen main-Bereich?"
  - "Ist der Skip-Link beim Fokus sichtbar?"
  - "Sind Navigationen eindeutig verständlich?"
tags:
  - "web development"
  - "html"
  - "navigation"
  - "landmarks"
  - "accessibility"
level: mittel
draft: false
---
## Grundidee

Lerne, wie main, nav, header, footer und ein Skip-Link Tastatur- und Screenreader-Nutzung erleichtern. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nicht alle wollen sich durch jedes Menü tabben</h3>
  <p>Wer eine Seite mit der Tastatur bedient, möchte wiederholte Navigation überspringen können. Semantische Landmarks und ein sichtbarer Skip-Link machen die Seite schneller und berechenbarer.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-ux-kontrollpfad.svg" alt="Seitengerüst mit Skip-Link, Navigation, Hauptinhalt und Fußbereich." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Wiederholte Navigation überspringen.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>Hauptinhalt eindeutig markieren.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Navigationen verständlich benennen.</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code><a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<header>...</header>
<nav aria-label="Hauptnavigation">...</nav>
<main id="inhalt">...</main>
<footer>...</footer></code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt nicht jedes Detail, sondern den didaktischen Kern: erst Bedeutung klären, dann Code schreiben.</p>
</div>

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Eine lange Linkliste kommt vor jedem Inhalt und muss immer komplett durchlaufen werden.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Ein Skip-Link springt direkt zum main-Bereich und wird beim Tastaturfokus sichtbar.</span>
    </div>
  </div>
</div>

## Prüfraster für Reviews

1. Welche Person oder welches Gerät muss die Information verstehen?
2. Ist die Information sichtbar, semantisch oder beides?
3. Gibt es eine technische Verknüpfung, die mehr ist als reine Optik?
4. Funktioniert die Lösung auch mit Tastatur, Screenreader, kleiner Breite oder reduzierter Bewegung?
5. Bleibt der Code wartbar, ohne Spezialtricks zu stapeln?

## Abgrenzung

Diese Seite behandelt Grundstruktur und Orientierung. Komplexe Menüs, Fokusfallen oder JavaScript-Menüs brauchen eigene Prüfungen. Dadurch bleibt die Seite klar: Sie erklärt eine konkrete Entscheidung und vermischt sie nicht mit allen Nachbarthemen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
