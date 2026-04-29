---
title: "$_FILES und move_uploaded_file verstehen"
description: "Verstehe, welche Informationen PHP zu einem Upload bereitstellt und warum erst geprüft und dann verschoben wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "files-array-und-move-uploaded-file-verstehen"]
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

Bei einem Dateiupload speichert PHP nicht sofort einfach „die fertige Datei am Zielort“. Stattdessen stellt PHP zunächst technische Informationen in <code>$_FILES</code> bereit. Daraus wird sichtbar, **was angekommen ist** und **was noch geprüft werden muss**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Bild soll hochgeladen werden</h3>
  <p>Das Formular sendet eine Datei. Auf dem Server stehen nun Dateiname, Größe, Typ, Fehlercode und ein temporärer Speicherort bereit. Erst danach wird entschieden, ob die Datei wirklich übernommen wird.</p>
</div>

## Wichtige Felder in $_FILES

<div class="visual-grid">
  <div class="visual-item">
    <strong>name</strong>
    <span>Der ursprüngliche Dateiname auf der Client-Seite.</span>
  </div>
  <div class="visual-item">
    <strong>tmp_name</strong>
    <span>Der temporäre Name oder Pfad, unter dem die Datei auf dem Server liegt.</span>
  </div>
  <div class="visual-item">
    <strong>size</strong>
    <span>Die Größe der hochgeladenen Datei in Bytes.</span>
  </div>
  <div class="visual-item">
    <strong>error</strong>
    <span>Ein technischer Hinweis, ob beim Upload etwas schiefgelaufen ist.</span>
  </div>
</div>

## Erst prüfen, dann verschieben

<div class="step-grid">
  <div class="step-item">
    <strong>1. Upload annehmen</strong>
    <span>PHP legt technische Daten in $_FILES ab.</span>
  </div>
  <div class="step-item">
    <strong>2. Prüfen</strong>
    <span>Größe, Fehlercode, Dateityp und gewünschte Regeln werden kontrolliert.</span>
  </div>
  <div class="step-item">
    <strong>3. Verschieben</strong>
    <span>Mit <code>move_uploaded_file</code> wird die Datei gezielt an ihren Zielort verschoben.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Upload ist fachlich erst dann „fertig“, wenn die Datei geprüft und bewusst an den Zielort übernommen wurde.</p>
</div>
