---
title: "Serverseitige Formularvalidierung verstehen"
description: "Verstehe, warum Formulareingaben immer auch auf dem Server geprüft werden müssen und welche ruhige Prüfreihenfolge dabei hilft."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "serverseitige-formularvalidierung-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Formulare können vom Benutzer oder durch Werkzeuge verändert werden. Darum reicht es nicht, sich nur auf HTML-Attribute oder clientseitiges JavaScript zu verlassen. Der Server muss die Daten selbst prüfen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein scheinbar sicheres Zahlenfeld</h3>
  <p>Ein Formularfeld ist als Zahl markiert und hat eine maximale Länge. Trotzdem kann eine manipulierte Anfrage andere Werte schicken. Erst die serverseitige Prüfung entscheidet, ob die Daten wirklich weiterverarbeitet werden dürfen.</p>
</div>

## Warum das nötig ist

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Server prüft selbst</h3>
    <p>Der Server behandelt jede Eingabe erst einmal als unzuverlässig und prüft sie vor dem Speichern, Ausgeben oder Weiterreichen.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur dem Formular vertrauen</h3>
    <p>Dann hängt die Sicherheit davon ab, dass der Client sich korrekt verhält. Genau das ist aber nicht garantiert.</p>
  </section>
</div>

## Eine ruhige Prüfreihenfolge

<div class="step-grid">
  <div class="step-item">
    <strong>1. Existenz prüfen</strong>
    <span>Ist der Wert überhaupt vorhanden?</span>
  </div>
  <div class="step-item">
    <strong>2. Typ prüfen</strong>
    <span>Passt die Eingabe fachlich zu dem, was erwartet wird?</span>
  </div>
  <div class="step-item">
    <strong>3. Länge oder Anzahl prüfen</strong>
    <span>Ist der Wert zu lang, zu kurz oder zu groß?</span>
  </div>
  <div class="step-item">
    <strong>4. Inhalt prüfen oder bereinigen</strong>
    <span>Enthält der Wert unerlaubte Zeichen, Tags oder ein riskantes Muster?</span>
  </div>
</div>

## Typisch unsichere Annahmen

- <code>maxlength</code> macht noch keine sichere Serverseite.
- <code>readonly</code> kann manipuliert werden.
- Clientseitiges JavaScript kann umgangen oder abgeschaltet werden.

<div class="note-panel">
  <p><strong>Merke:</strong> Auf dem Server kommen Formulardaten zunächst nur als übertragene Eingaben an. Vertrauen entsteht erst nach der Prüfung, nicht vorher.</p>
</div>
