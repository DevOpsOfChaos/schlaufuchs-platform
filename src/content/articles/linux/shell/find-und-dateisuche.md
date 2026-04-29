---
title: "find und Dateisuche"
description: "Verstehe, wie du Dateien über Namen, Typen und Startpfade gezielt suchst statt nur Ordner manuell zu durchsuchen."
subject: "linux"
section: "Shell"
topicPath: ["shell", "find-und-dateisuche"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
## Warum dieses Thema wichtig ist

Sobald Ordnerstrukturen größer werden, reicht reines Durchklicken oder mehrfaches `ls` oft nicht mehr aus. Mit `find` kannst du systematisch nach Dateien und Verzeichnissen suchen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Suche nach allen Markdown-Dateien</h3>
  <p>Mit einem Befehl wie <strong>find . -name '*.md'</strong> beginnt die Suche im aktuellen Verzeichnis. Die Regel sagt danach: Zeige nur Einträge, deren Name auf <strong>.md</strong> endet.</p>
</div>

## Startpfad und Suchregel trennen

Ein guter erster Denkpunkt ist die Trennung von:

- **Startpfad**: Wo soll gesucht werden?
- **Ausdruck**: Woran erkennt find passende Treffer?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Startpfad</p>
    <h3>Wo beginnt die Suche?</h3>
    <p>Legt fest, ab welchem Ort im Verzeichnisbaum gesucht wird.</p>
    <div class="command-strip"><code>find .</code></div>
  </section>
  <section>
    <p class="card-kicker">Suchregel</p>
    <h3>Woran wird erkannt?</h3>
    <p>Bestimmt, welche Einträge aus dem Suchraum überhaupt als Treffer gelten.</p>
    <div class="command-strip"><code>-name '*.md'</code></div>
  </section>
</div>

## Wie find grundsätzlich arbeitet

`find` startet an einem angegebenen Ort und durchsucht von dort aus den Verzeichnisbaum. Dabei prüft es für jeden Fund, ob die angegebenen Bedingungen passen.

<div class="figure-card">
  <p class="card-kicker">Suchbild</p>
  <h3>So entsteht ein Treffer</h3>
  <div class="signal-flow compact">
    <div><strong>Suchort wählen</strong><span>zum Beispiel <code>.</code></span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Baum durchlaufen</strong><span>Ordner und Dateien prüfen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Regel anwenden</strong><span>passende Treffer ausgeben</span></div>
  </div>
</div>

## Typische Suchideen

Gerade am Anfang sind besonders nützlich:

- nach Namen suchen,
- nach Typ suchen,
- oder über den Pfad eingrenzen.

So wird Dateisuche nicht zum Raten, sondern zu einer klaren Arbeitsweise.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Suchraum und Ziel bewusst wählen</h3>
    <p>Du entscheidest zuerst, wo gesucht wird, und formulierst danach eine klare Bedingung für die Treffer.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Einfach überall suchen</h3>
    <p>Wenn Startpfad und Suchregel unklar bleiben, entstehen schnell zu viele oder die falschen Treffer.</p>
  </section>
</div>

## Warum Anführungszeichen wichtig sind

Muster wie `*.md` sollten oft in Anführungszeichen stehen. So bleibt das Muster für `find` erhalten und wird nicht schon vorher von der Shell verändert.

<pre><code>find . -name '*.md'
find . -type f
find projekte -name 'bericht*'</code></pre>

## Woran man gute Suchbefehle erkennt

Gute Befehle sind:

1. klar im Startpunkt,
2. klar in der Bedingung,
3. und möglichst eng genug, um nicht unnötig viele Treffer zu liefern.

## Eine ruhige Suchstrategie

Wenn ein Suchbefehl nicht passt, helfen diese Fragen:

- Habe ich am richtigen Ort gesucht?
- Ist meine Bedingung zu breit oder zu eng?
- Suche ich nach Datei, Ordner oder Namensmuster?
- Wird mein Muster vielleicht schon vorab von der Shell verändert?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei <code>find</code> ist nicht nur wichtig, <em>dass</em> gesucht wird, sondern <em>ab wo</em> und <em>nach welcher Regel</em>. Genau diese zwei Fragen machen den Befehl verständlich.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du das Thema weiterdenken</h3>
  <ul>
    <li>Vergleiche die Suche ab <code>.</code> mit einer Suche ab einem konkreten Unterordner.</li>
    <li>Suche einmal nach Dateinamen und einmal nach Verzeichnissen.</li>
    <li>Erkläre zu jedem Suchbefehl getrennt den Startpunkt und die Bedingung.</li>
  </ul>
</div>
