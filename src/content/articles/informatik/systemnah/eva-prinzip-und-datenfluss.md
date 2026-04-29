---
title: "EVA-Prinzip und Datenfluss"
description: "Verstehe Eingabe, Verarbeitung und Ausgabe als ruhigen Grundablauf vieler Informatiksysteme."
subject: "informatik"
section: "Systemnah"
topicPath: ["systemnah", "eva-prinzip-und-datenfluss"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Systemnah"]
draft: false
---
## Grundidee

Viele technische Systeme lassen sich zunächst sehr ruhig über drei Rollen verstehen:

- **Eingabe**,
- **Verarbeitung**,
- **Ausgabe**.

Dieses Grundmuster nennt man EVA-Prinzip. Es ist hilfreich, weil es aus einem unübersichtlichen Gerät einen geordneten Ablauf macht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Suche in einer App</h3>
  <p>Du gibst einen Begriff ein. Das System verarbeitet diese Eingabe, durchsucht passende Daten und zeigt danach Treffer an. Genau dieses einfache Beispiel zeigt das EVA-Prinzip sehr klar: Etwas kommt hinein, wird bearbeitet und als Ergebnis wieder ausgegeben.</p>
</div>

## Die drei Rollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Eingabe</strong>
    <span>Informationen gelangen in das System, zum Beispiel durch Tastatur, Klick, Sensor oder Datei.</span>
  </div>
  <div class="visual-item">
    <strong>Verarbeitung</strong>
    <span>Das System prüft, ordnet, berechnet oder verändert die Daten nach bestimmten Regeln.</span>
  </div>
  <div class="visual-item">
    <strong>Ausgabe</strong>
    <span>Das Ergebnis wird sichtbar oder wirksam, zum Beispiel auf einem Bildschirm, Lautsprecher oder Aktor.</span>
  </div>
</div>

## So hilft EVA beim Denken

<div class="figure-card">
  <p class="card-kicker">Datenfluss</p>
  <h3>Vom Signal zum Ergebnis</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Eingabe</strong><span>Ein Wert, eine Aktion oder ein Signal kommt an.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Verarbeitung</strong><span>Das System arbeitet nach Regeln mit diesen Daten.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Ausgabe</strong><span>Ein Ergebnis wird sichtbar, hörbar oder technisch wirksam.</span></div>
  </div>
</div>

## EVA ist nicht nur für Computer da

Das Prinzip hilft bei vielen Arten von Systemen:

- Programme,
- Automaten,
- digitale Geräte,
- einfache technische Steuerungen,
- und auch bei der Erklärung vieler Alltagsabläufe.

## Gute und schwache Beschreibung

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Den Ablauf in Rollen lesen</h3>
    <p>Du beschreibst, was hereinkommt, was das System damit macht und woran das Ergebnis erkennbar wird.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur Geräte oder Tasten aufzählen</h3>
    <p>Dann bleibt unklar, welcher Teil Eingabe, Verarbeitung oder Ausgabe überhaupt übernimmt.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Was kommt in das System hinein?
2. Was passiert mit den Daten unterwegs?
3. Wo wird das Ergebnis sichtbar oder wirksam?
4. Gibt es Zwischenspeicherung oder weitere Verarbeitungsschritte?

<div class="note-panel">
  <p><strong>Merke:</strong> EVA ist kein bloßer Merksatz. Es ist eine Denkstruktur, mit der du technische Abläufe lesbarer machst.</p>
</div>
