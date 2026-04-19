---
title: htmlspecialchars, strip_tags und addslashes vergleichen
description: Verstehe, dass diese Funktionen unterschiedliche Probleme lösen und nicht austauschbar sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - htmlspecialchars-strip-tags-und-addslashes-vergleichen
learningGoals:
  - Du unterscheidest Ausgabeschutz, Tag-Entfernung und Zeichenmaskierung.
  - Du erklärst, warum dieselbe Eingabe je nach Ziel anders behandelt wird.
  - Du vermeidest die Verwechslung von Bereinigen, Escapen und Validieren.
practiceIdeas:
  - Vergleiche, was bei HTML-Ausgabe, Datenbankspeicherung oder Tag-Entfernung jeweils nötig ist.
  - Lies einen Beispielstring mit <script> und begründe die passende Reaktion.
  - Erkläre, warum eine Funktion nicht automatisch jede Sicherheitsfrage löst.
commonMistakes:
  - Zu glauben, eine einzige Funktion sei immer die ganze Lösung.
  - htmlspecialchars und strip_tags gleichzusetzen.
  - addslashes als fachliche Validierung zu missverstehen.
keyTakeaways:
  - htmlspecialchars schützt vor allem die HTML-Ausgabe.
  - strip_tags entfernt HTML-Tags, aber nicht automatisch jedes Risiko.
  - addslashes maskiert bestimmte Zeichen, ist aber kein allgemeines Sicherheitskonzept.
recognizeSignals:
  - Es geht um Anwenderdaten, HTML-Ausgabe, XSS oder problematische Zeichen.
  - Ein Beispiel enthält Tags, Anführungszeichen oder Sonderzeichen.
  - Du sollst die passende Funktion begründen, nicht nur einen Namen nennen.
selfCheckPoints:
  - Kann ich die drei Funktionen nach Zweck trennen?
  - Kann ich sagen, wann htmlspecialchars sinnvoll ist?
  - Kann ich erklären, warum strip_tags keine allgemeine Validierung ersetzt?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - sicherheit
  - xss
  - strings
draft: false
---

## Grundidee

Mehrere PHP-Funktionen bearbeiten problematische Eingaben, aber sie tun **nicht dasselbe**. Wer sie verwechselt, baut schnell unruhige oder falsche Schutzlogik.

<div class="visual-grid">
  <div class="visual-item">
    <strong>htmlspecialchars</strong>
    <span>Wandelt Sonderzeichen so um, dass sie in HTML als Text und nicht als Code erscheinen.</span>
  </div>
  <div class="visual-item">
    <strong>strip_tags</strong>
    <span>Entfernt HTML-Tags aus einer Zeichenkette oder lässt ausgewählte Tags stehen.</span>
  </div>
  <div class="visual-item">
    <strong>addslashes</strong>
    <span>Maskiert bestimmte Zeichen wie Anführungszeichen oder Backslashes.</span>
  </div>
</div>

## Ein Beispiel mit Script-Tag

Wenn eine Eingabe wie <code>&lt;script&gt;alert("XSS")&lt;/script&gt;</code> ankommt, stellen sich verschiedene Fragen:

- Soll der Text **sichtbar angezeigt** werden? Dann ist <code>htmlspecialchars</code> typisch.
- Sollen Tags **entfernt** werden? Dann kann <code>strip_tags</code> eine Rolle spielen.
- Müssen bestimmte Zeichen **maskiert** werden? Dann kann <code>addslashes</code> auftauchen.

## Warum dieselbe Eingabe je nach Ziel anders behandelt wird

<div class="compare-card">
  <p class="card-kicker">Kontext entscheidet</p>
  <h3>Es geht nicht nur um die Eingabe, sondern um ihre spätere Verwendung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>HTML-Ausgabe</strong>
      <span>Hier steht die sichere Darstellung im Browser im Vordergrund.</span>
    </div>
    <div class="compare-item">
      <strong>Tag-Bereinigung</strong>
      <span>Hier geht es darum, Markup zu entfernen oder einzuschränken.</span>
    </div>
    <div class="compare-item">
      <strong>Zeichenmaskierung</strong>
      <span>Hier werden bestimmte Zeichen technisch anders behandelt, ohne automatisch fachlich zu validieren.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Verarbeitung beginnt mit der Frage: <em>Wofür</em> soll der Wert gleich verwendet werden? Erst daraus ergibt sich die passende Funktion.</p>
</div>
