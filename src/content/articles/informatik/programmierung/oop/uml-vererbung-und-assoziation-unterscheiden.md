---
title: "UML-Vererbung und Assoziation unterscheiden"
description: "Verstehe, wann in UML eher eine ist-ein-Beziehung und wann eher eine hat-ein- oder benutzt-ein-Beziehung vorliegt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "uml-vererbung-und-assoziation-unterscheiden"]
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

In UML sehen Beziehungen schnell aehnlich aus. Fachlich steckt aber etwas sehr Unterschiedliches dahinter. Die wichtigste erste Trennung ist: **Vererbung** oder **Assoziation**?

<div class="compare-card">
  <p class="card-kicker">Leitfrage</p>
  <h3>Ist es eher Spezialisierung oder Beziehung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Vererbung</strong>
      <span>Eine Klasse ist eine speziellere Form einer anderen Klasse. Sprachmuster: <em>ist ein</em>.</span>
    </div>
    <div class="compare-item">
      <strong>Assoziation</strong>
      <span>Eine Klasse steht zu einer anderen in Beziehung. Sprachmuster: <em>hat ein</em> oder <em>benutzt ein</em>.</span>
    </div>
  </div>
</div>

## Vererbung

Wenn "Klasse B ist eine speziellere Form von Klasse A" fachlich sinnvoll klingt, dann ist Vererbung wahrscheinlich die passendere Idee.

Beispiel:
- Eine Fussgaengerampel ist eine Ampel.
- Eine Lehrkraft ist eine Person.

Hier geht es um Spezialisierung und gemeinsame Eigenschaften.

## Assoziation

Wenn eine Klasse etwas besitzt, nutzt oder mit etwas verbunden ist, dann ist eher eine Assoziation gemeint.

Beispiel:
- Ein Kunde hat Konten.
- Ein Arbeiter arbeitet an Projekten.

Hier geht es nicht darum, dass das eine "eine speziellere Form" des anderen waere.

## Warum Sprachmuster so hilfreich sind

<div class="example-card">
  <p class="card-kicker">Denkhilfe</p>
  <h3>Ist-ein vs. hat-ein</h3>
  <p>Die Frage <em>Ist ein Konto ein Kunde?</em> klingt sofort falsch. Die Frage <em>Hat ein Kunde ein Konto?</em> klingt dagegen fachlich passend. Schon dadurch wird klar: Hier liegt keine Vererbung vor, sondern eine Beziehung.</p>
</div>

## UML ruhig lesen

1. Zuerst Beziehung in Worte uebersetzen.
2. Dann entscheiden: Spezialisierung oder Objektbeziehung?
3. Erst danach das UML-Symbol deuten.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute UML-Leselogik beginnt nicht beim Symbol, sondern bei der fachlichen Aussage hinter der Verbindung.</p>
</div>
