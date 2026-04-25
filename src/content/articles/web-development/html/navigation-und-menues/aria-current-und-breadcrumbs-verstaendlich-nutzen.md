---
title: "HTML – aria-current und Breadcrumbs verständlich nutzen"
description: "Lerne, aktuelle Seitenpositionen in Navigationen und Breadcrumbs sichtbar und semantisch sauber zu markieren."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "navigation-und-menues"
  - "aria-current-und-breadcrumbs-verstaendlich-nutzen"
learningGoals:
  - "Du erklärst, was aria-current ausdrückt."
  - "Du unterscheidest aktuelle Seite, aktueller Schritt und aktiver Zustand."
  - "Du baust Breadcrumbs als Orientierungshilfe statt als Dekoration."
practiceIdeas:
  - "Prüfe ein kleines Beispiel zuerst fachlich und erst danach im Code."
  - "Vergleiche eine schwache und eine bessere Umsetzung."
  - "Teste die Entscheidung mit Tastatur, kleiner Breite und verständlichem sichtbarem Text."
commonMistakes:
  - "aria-current auf mehrere Links derselben Navigation zu setzen."
  - "Den aktuellen Link nur farblich hervorzuheben."
  - "Breadcrumbs ohne klare Reihenfolge zu schreiben."
keyTakeaways:
  - "Die sichtbare Bedeutung und die technische Struktur müssen zusammenpassen."
  - "Robuste Weboberflächen entstehen durch kleine, bewusst geprüfte Entscheidungen."
  - "Ein gutes Review fragt nach Nutzbarkeit, Semantik, Layout und Wartbarkeit."
recognizeSignals:
  - "Es geht um HTML- oder CSS-Entscheidungen, die nicht nur optisch wirken."
  - "Eine Aufgabe fragt nach Bedienbarkeit, Lesbarkeit oder semantischer Zuordnung."
  - "Der Code funktioniert scheinbar, aber die Nutzererfahrung ist noch unsicher."
selfCheckPoints:
  - "Kann ich die Entscheidung ohne Fachjargon erklären?"
  - "Passt der sichtbare Text zur technischen Struktur?"
  - "Bleibt die Lösung bei kleinen Breiten und Tastaturbedienung nutzbar?"
tags:
  - "web development"
  - "html"
  - "navigation"
  - "aria-current"
  - "breadcrumbs"
level: "mittel"
draft: false
---
## Grundidee

Lerne, aktuelle Seitenpositionen in Navigationen und Breadcrumbs sichtbar und semantisch sauber zu markieren. Wichtig ist dabei nicht nur, ob der Code technisch läuft. Entscheidend ist, ob Bedeutung, Bedienung und Gestaltung dieselbe Aussage stützen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst die Entscheidung, dann der Code</h3>
  <p>Viele Webfehler entstehen, weil eine Lösung optisch plausibel wirkt, aber fachlich unklar bleibt. Diese Seite trainiert deshalb eine ruhige Lesart: Was soll die Person verstehen, was soll der Browser wissen, und was muss der Code dafür eindeutig ausdrücken?</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-ux-kontrollpfad.svg" alt="Schematische Orientierung zur Entscheidung: Bedeutung klären, technische Struktur wählen und Nutzbarkeit prüfen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Bedeutung</strong>
    <span>Welche Information oder Handlung soll eindeutig werden?</span>
  </div>
  <div class="visual-item">
    <strong>Struktur</strong>
    <span>Welches HTML- oder CSS-Mittel beschreibt diese Bedeutung sauber?</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung</strong>
    <span>Bleibt die Lösung verständlich, bedienbar und wartbar?</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine Struktur, die viel erklärt</h3>
  <pre><code>&lt;nav aria-label=&quot;Breadcrumb&quot;&gt;
  &lt;ol&gt;
    &lt;li&gt;&lt;a href=&quot;/wissen&quot;&gt;Wissen&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;/wissen/html&quot;&gt;HTML&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a aria-current=&quot;page&quot;&gt;Formulare&lt;/a&gt;&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt den Kern der Entscheidung und vermeidet Nebenthemen, die auf eigene Seiten gehören.</p>
</div>

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Die aktuelle Seite ist nur fett, aber technisch nicht als aktuelle Seite erkennbar.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Der aktuelle Eintrag ist sichtbar hervorgehoben und mit aria-current="page" markiert.</span>
    </div>
  </div>
</div>

## Prüfraster für Reviews

1. Welche sichtbare Aussage macht die Oberfläche?
2. Welche semantische oder layoutbezogene Entscheidung trägt diese Aussage?
3. Was passiert bei Tastaturbedienung, kleiner Breite oder Assistenztechnik?
4. Ist der Code auch für die nächste Person im Projekt verständlich?
5. Gibt es einen einfacheren Weg mit weniger Sonderregeln?

## Abgrenzung

Diese Seite erklärt eine konkrete Webentscheidung. Sie ersetzt keine vollständige Designsystem-Dokumentation und keine Sicherheitsprüfung. Dadurch bleibt der Lernfokus klar: erst fachlich sauber entscheiden, dann die passende Technik einsetzen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Webentwicklung verbindet sichtbare Sprache, Semantik, Gestaltung und Verhalten. Wenn eine dieser Ebenen widerspricht, fühlt sich die Oberfläche schnell unsicher an.</p>
</div>
