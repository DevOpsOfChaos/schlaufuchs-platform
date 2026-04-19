---
title: Serverseitige Validierungsreihenfolge verstehen
description: Verstehe, in welcher Reihenfolge Formulardaten auf dem Server sinnvoll geprüft werden sollten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - serverseitige-validierungsreihenfolge-verstehen
learningGoals:
  - Du erklärst eine ruhige Reihenfolge für serverseitige Datenprüfung.
  - Du unterscheidest Typprüfung, Längenprüfung und Inhaltsprüfung.
  - Du begründest, warum HTML-Attribute oder JavaScript allein nicht reichen.
practiceIdeas:
  - Ordne Prüfschritte für ein Formular mit Alter, Name und E-Mail.
  - Erkläre, warum eine spätere Inhaltsprüfung ohne saubere Grundprüfung unruhig wird.
  - Vergleiche clientseitige Hinweise mit echter serverseitiger Kontrolle.
commonMistakes:
  - Sich auf maxlength oder type="number" als Schutz zu verlassen.
  - Prüfungen ohne Reihenfolge durcheinander auszuführen.
  - Zu glauben, String-Eingaben hätten auf dem Server schon automatisch den richtigen Datentyp.
keyTakeaways:
  - Clientseitige Regeln helfen, ersetzen aber keine serverseitige Prüfung.
  - Eine ruhige Prüfstrategie geht meist von Typ über Länge zu Inhalt und Bereich.
  - Erst eine saubere Reihenfolge macht Validierung nachvollziehbar.
recognizeSignals:
  - Es geht um Formulare, Validierung, Strings aus POST oder GET.
  - Ein Beispiel fragt nach Sicherheits- oder Qualitätsprüfung.
  - Du sollst erklären, wie Eingaben sinnvoll geprüft werden.
selfCheckPoints:
  - Kann ich sagen, warum Serverprüfung nötig bleibt?
  - Kann ich eine sinnvolle Prüf-Reihenfolge nennen?
  - Kann ich Typ, Länge und Inhalt sauber trennen?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - validierung
  - formular
  - sicherheit
draft: false
---

## Grundidee

Formulardaten kommen auf dem Server zunächst oft als Strings an. Deshalb ist eine ruhige serverseitige Prüfung wichtig. HTML-Attribute, JavaScript oder vorgegebene Formularwerte helfen zwar, sind aber kein verlässlicher Schutz.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Formular für Name, Alter und E-Mail</h3>
  <p>Clientseitig sieht alles sauber aus: Pflichtfelder, maxlength und input-Typen sind gesetzt. Trotzdem muss der Server die Daten erneut prüfen, weil Formulare manipuliert oder direkte Requests geschickt werden können.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Existiert der Wert?</strong>
    <span>Zuerst prüfen, ob ein erwartetes Feld überhaupt angekommen ist.</span>
  </div>
  <div class="step-item">
    <strong>2. Passt der Datentyp grob?</strong>
    <span>Dann prüfen oder wandeln, ob Zahl, Text oder boolesche Logik fachlich passt.</span>
  </div>
  <div class="step-item">
    <strong>3. Länge und Anzahl prüfen</strong>
    <span>Ist der String zu lang oder enthält ein Array zu viele Einträge?</span>
  </div>
  <div class="step-item">
    <strong>4. Inhalt und Bereich prüfen</strong>
    <span>Erst jetzt kommen Muster, erlaubte Zeichen, Wertebereiche oder fachliche Regeln.</span>
  </div>
</div>

## Warum diese Reihenfolge hilft

<div class="compare-card">
  <p class="card-kicker">Nicht alles auf einmal</p>
  <h3>Frühe Grundprüfung vor späterer Detailprüfung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Frühe Prüfung</strong>
      <span>Existenz, Typ und grobe Struktur machen spätere Schritte stabiler.</span>
    </div>
    <div class="compare-item">
      <strong>Spätere Prüfung</strong>
      <span>Inhalt, Bereich und fachliche Bedeutung folgen erst danach.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Validierung ist nicht nur eine Sammlung von Funktionen, sondern eine sinnvolle Reihenfolge von Prüfentscheidungen.</p>
</div>
