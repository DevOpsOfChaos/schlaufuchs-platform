---
title: "htmlspecialchars, strip_tags und addslashes vergleichen"
description: "Verstehe, dass diese Funktionen unterschiedliche Probleme lösen und nicht austauschbar sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "htmlspecialchars-strip-tags-und-addslashes-vergleichen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
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
