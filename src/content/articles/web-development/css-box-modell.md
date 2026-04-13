---
title: CSS-Box-Modell
description: Verstehe, wie Inhalt, Innenabstand, Rand und Außenabstand zusammen eine Box bilden.
subject: web-development
section: CSS
topicPath:
- css
- box-modell
learningGoals:
- Du beschreibst die Teile des Box-Modells sauber.
- Du erkennst den Unterschied zwischen padding, border und margin.
- Du liest Layout-Abstände systematischer.
practiceIdeas:
- Zerlege ein einzelnes Element in Inhalt, padding, border und margin.
- Vergleiche zwei Boxen, die unterschiedlich weit auseinanderstehen.
- Erkläre bei einem Beispiel, welche Fläche tatsächlich zum Element gehört.
commonMistakes:
- padding und margin gleichzusetzen.
- border nur als Farbe oder Linie statt als Teil der Box zu sehen.
- Abstand zu sehen, ohne seine Ursache zu benennen.
keyTakeaways:
- Jedes Element lässt sich als Box verstehen.
- padding liegt innen, margin außen.
- Das Box-Modell macht CSS-Layering und Abstände lesbarer.
tags:
- css
- box-modell
- layout
- abstand
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt CSS-Box-Modell direkt oder greift eng benachbarte Begriffe aus CSS auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich beschreibst die Teile des Box-Modells sauber?
- Kann ich erkennst den Unterschied zwischen padding, border und margin?
- Kann ich liest Layout-Abstände systematischer?
---


## Grundidee

Im CSS wird fast jedes Element als Box behandelt. Diese Box besteht nicht nur aus dem sichtbaren Inhalt, sondern aus mehreren Schichten, die gemeinsam das Layout beeinflussen.

## Die Teile der Box

Typisch unterschieden werden:

- Inhalt,
- padding,
- border,
- margin.

Gerade diese klare Schichtung macht das Modell so hilfreich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Textkarte mit Abstand</h3>
  <p>Steht Text in einer Karte mit Innenabstand, Rahmen und Abstand zur nächsten Karte, dann wirken mehrere Schichten gleichzeitig. Das Box-Modell hilft dir, diese Schichten getrennt zu lesen statt alles nur als „irgendwie Abstand“ wahrzunehmen.</p>
</div>

## Warum das Box-Modell so wichtig ist

Viele Layoutprobleme wirken kompliziert, sind aber in Wahrheit nur unklar benannte Abstände. Wer das Box-Modell sauber versteht, liest CSS ruhiger und verändert Seiten gezielter.
