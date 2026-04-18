---
title: Pipes und Umleitungen
description: Verstehe, wie Befehle Daten weitergeben oder in Dateien umleiten, statt jeden Schritt isoliert auszuführen.
subject: linux
section: Shell
topicPath:
  - shell
  - pipes-und-umleitungen
tags:
  - linux
  - shell
  - pipes
  - redirection
learningGoals:
  - "Du verstehst den Unterschied zwischen Pipe und Umleitung."
  - "Du liest einfache Befehlsketten mit |, > und >> fachlich sauber."
  - "Du erkennst, wann Ausgaben weiterverarbeitet und wann sie gespeichert werden sollen."
practiceIdeas:
  - "Vergleiche denselben Befehl einmal mit Ausgabe im Terminal und einmal mit Umleitung in eine Datei."
  - "Lies kleine Befehlsketten immer von links nach rechts."
  - "Prüfe bewusst, ob ein Schritt Daten weitergibt oder nur speichert."
commonMistakes:
  - "Pipe und Umleitung gleichzusetzen."
  - "Zu übersehen, dass > vorhandene Inhalte überschreiben kann."
  - "Befehlsketten als magische Kurzform zu benutzen, ohne den Datenfluss zu verstehen."
keyTakeaways:
  - "Eine Pipe verbindet die Ausgabe eines Befehls mit der Eingabe des nächsten."
  - "> leitet Ausgabe in eine Datei um, >> hängt an eine Datei an."
  - "Der Datenfluss ist bei Shell-Befehlen oft wichtiger als der einzelne Befehl."
recognizeSignals:
  - "Es geht um |, >, >> oder um die Frage, wohin Befehlsausgaben gehen."
  - "Du sollst erklären, wie mehrere Befehle zusammenarbeiten."
  - "Ein Beispiel fragt, ob etwas gespeichert, weitergeleitet oder direkt angezeigt wird."
selfCheckPoints:
  - "Kann ich Pipe und Umleitung sauber unterscheiden?"
  - "Kann ich erklären, was in einer kleinen Befehlszeile zuerst und danach passiert?"
  - "Kann ich den Effekt von > und >> richtig einordnen?"
level: einfach
draft: false
---

## Warum dieses Thema in der Shell zentral ist

Die Shell wird stark, wenn Befehle nicht nur einzeln nebeneinander stehen, sondern Datenflüsse bilden. Pipes und Umleitungen sind genau dafür da.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ausgabe weiterreichen statt abschreiben</h3>
  <p>Mit <code>cat datei.txt | wc</code> wird der Text nicht erst von Hand gelesen und dann gezählt. Die Ausgabe des ersten Befehls geht direkt als Eingabe an den zweiten weiter. Mit <code>echo Test &gt; notiz.txt</code> wird die Ausgabe dagegen in eine Datei geschrieben.</p>
</div>

## Pipe und Umleitung sind nicht dasselbe

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Pipe</p>
    <h3>Ausgabe wird Eingabe</h3>
    <p>Die Daten laufen direkt in den nächsten Befehl. Es geht um Verarbeitung in mehreren Schritten.</p>
    <div class="command-strip"><code>cat datei.txt | wc</code></div>
  </section>
  <section>
    <p class="card-kicker">Umleitung</p>
    <h3>Ausgabe geht an ein Ziel</h3>
    <p>Die Daten werden nicht an einen weiteren Befehl weitergereicht, sondern in eine Datei geschrieben.</p>
    <div class="command-strip"><code>echo Test &gt; notiz.txt</code></div>
  </section>
</div>

## Pipe: Ausgabe wird Eingabe

Eine Pipe verbindet zwei Schritte:

- Der erste Befehl erzeugt eine Ausgabe.
- Der nächste Befehl liest diese Ausgabe als Eingabe.

Dadurch entstehen Ketten, in denen Daten Schritt für Schritt verarbeitet werden.

<div class="figure-card">
  <p class="card-kicker">Datenfluss</p>
  <h3>So liest du eine Pipe</h3>
  <div class="signal-flow compact">
    <div><strong>erster Befehl</strong><span>liefert Output</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>|</strong><span>verbindet die Schritte</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>zweiter Befehl</strong><span>nutzt den Output als Input</span></div>
  </div>
</div>

## Umleitung: Ausgabe geht in eine Datei

Umleitungen ändern, wohin eine Ausgabe geschrieben wird.

- <code>&gt;</code> schreibt in eine Datei und ersetzt den bisherigen Inhalt.
- <code>&gt;&gt;</code> hängt neue Ausgabe an den bestehenden Inhalt an.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">&gt;</p>
    <h3>Neu schreiben oder überschreiben</h3>
    <p>Gut, wenn die Datei bewusst neu gesetzt werden soll.</p>
  </section>
  <section>
    <p class="card-kicker">&gt;&gt;</p>
    <h3>An bestehende Inhalte anhängen</h3>
    <p>Gut, wenn neue Zeilen ergänzt statt alte Inhalte ersetzt werden sollen.</p>
  </section>
</div>

## Gute und schwache Denkweise bei Befehlsketten

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Jeden Schritt als Datenweg lesen</h3>
    <p>Du fragst bei jedem Operator, was mit der Ausgabe passiert: weiter an den nächsten Befehl oder in eine Datei.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Die ganze Zeile als Magie behandeln</h3>
    <p>Dann wird leicht übersehen, wo Daten überschrieben, angehängt oder an den falschen Ort geleitet werden.</p>
  </section>
</div>

## Gute Lesestrategie für Befehlsketten

Viele Fehler entstehen, weil eine ganze Zeile als ein einziger Block wahrgenommen wird. Besser ist:

1. Von links nach rechts lesen.
2. Bei jedem Operator fragen: Weitergabe oder Speicherung?
3. Prüfen, was der nächste Schritt als Eingabe bekommt.

<pre><code>cat daten.txt | grep fox | wc
echo "neue zeile" >> notiz.txt</code></pre>

## Warum das für reale Arbeit wichtig ist

Mit Pipes und Umleitungen werden Ausgaben nutzbar gemacht:

- filtern,
- zählen,
- sortieren,
- speichern,
- weitergeben.

Gerade deshalb gehören sie zu den wichtigsten Shell-Grundideen.

## Eine ruhige Prüfstrategie

Wenn eine Kette nicht das erwartete Ergebnis liefert, helfen diese Fragen:

- Welcher Befehl erzeugt den ersten Output?
- Wird dieser Output weitergegeben oder gespeichert?
- Wird vielleicht eine Datei überschrieben, obwohl nur ergänzt werden sollte?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Pipes und Umleitungen geht es nicht zuerst um Syntax, sondern um die Richtung der Daten. Wer den Datenfluss versteht, versteht meist auch den Befehl.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So liest du Befehlszeilen klarer</h3>
  <ul>
    <li>Markiere zuerst die Operatoren <code>|</code>, <code>&gt;</code> und <code>&gt;&gt;</code>.</li>
    <li>Beschreibe dann in Worten, wohin die Ausgabe jeweils fließt.</li>
    <li>Prüfe am Ende, ob das Ergebnis im Terminal, in einer Datei oder im nächsten Befehl landet.</li>
  </ul>
</div>
