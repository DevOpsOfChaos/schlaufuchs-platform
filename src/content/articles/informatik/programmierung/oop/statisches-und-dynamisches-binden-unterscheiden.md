---
title: "Statisches und dynamisches Binden unterscheiden"
description: "Verstehe, wann die passende Methode schon beim Kompilieren feststeht und wann sie erst zur Laufzeit gewaehlt wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "statisches-und-dynamisches-binden-unterscheiden"]
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

Nicht immer ist sofort klar, welche konkrete Methode am Ende ausgefuehrt wird. Manchmal steht das schon frueh fest, manchmal erst spaeter.

## Zwei Lesemodelle

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Frueh festgelegt oder zur Laufzeit entschieden</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Statisches Binden</strong>
      <span>Die Methode wird anhand der bekannten Typinformation frueh festgelegt.</span>
    </div>
    <div class="compare-item">
      <strong>Dynamisches Binden</strong>
      <span>Die passende Methode wird erst zur Laufzeit am wirklichen Objekt entschieden.</span>
    </div>
  </div>
</div>

## Leitbeispiel

Wenn eine Referenz vom Typ `A` auf ein Objekt der Klasse `B` zeigt, dann ist die ruhige Frage:

**Soll der Aufruf dem Referenztyp folgen oder dem echten Objekttyp?**

Bei virtuellen Methoden kann genau daraus polymorphes Verhalten entstehen.

## Warum das Thema schwer wirkt

Viele Codebeispiele zeigen nur Namen und Klassen. Das eigentliche Denkbild ist aber:

- Welcher Typ steht links in der Referenz?
- Welches Objekt steckt wirklich dahinter?
- Ist die Methode virtuell?

## Nicht dieselbe Frage wie beim Ueberschreiben

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Erst Struktur, dann Entscheidungszeit</h3>
    <p>Zuerst klaerst du, ob Methoden ueberschrieben werden. Danach klaerst du, ob die Auswahl frueh oder spaet getroffen wird.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Alles unter einem Schlagwort sammeln</h3>
    <p>Dann vermischen sich Ueberschreiben, virtual und Laufzeitwahl unnötig.</p>
  </section>
</div>

`virtual` und `override` sind die sichtbaren Sprachmittel. Hier geht es noch abstrakter um die Frage, **wann** die Entscheidung faellt.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Referenztyp lesen</strong>
    <span>Welche Klasse ist an der Aufrufstelle sichtbar?</span>
  </div>
  <div class="step-item">
    <strong>2. Objekttyp lesen</strong>
    <span>Auf welches konkrete Objekt zeigt die Referenz wirklich?</span>
  </div>
  <div class="step-item">
    <strong>3. virtual pruefen</strong>
    <span>Erst dann entscheiden, ob statisch oder dynamisch gebunden wird.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Dynamisches Binden ist die ruhige Antwort auf die Frage, wie gemeinsame Schnittstellen bei unterschiedlichen Unterklassen wirklich lebendig werden.</p>
</div>
