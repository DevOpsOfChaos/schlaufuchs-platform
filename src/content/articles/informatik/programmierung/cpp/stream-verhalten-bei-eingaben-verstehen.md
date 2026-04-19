---
title: Stream-Verhalten bei Eingaben verstehen
description: Verstehe, wie cin Eingaben liest, führende Leerzeichen überspringt und an Zwischenräumen stoppt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - ein-und-ausgabe
  - stream-verhalten-bei-eingaben-verstehen
learningGoals:
  - Du erklärst, warum cin führende Zwischenräume meist ignoriert.
  - Du beschreibst, warum Leerzeichen oder Zeilenumbrüche oft das Ende eines Eingabeteils markieren.
  - Du liest Eingaben ruhiger als Zeichenfolge, die zum erwarteten Typ passen muss.
practiceIdeas:
  - Untersuche Beispiele mit Leerzeichen, Tabulatoren und Zeilenumbrüchen.
  - Vergleiche eine Eingabe für int, char und float.
  - Beschreibe, an welcher Stelle cin aufhört zu lesen.
commonMistakes:
  - Zu glauben, cin übernehme automatisch ganze Eingabezeilen.
  - Zwischenraumzeichen als normalen Teil jeder Eingabe zu behandeln.
  - Zu übersehen, dass der erwartete Datentyp das Einlesen mitsteuert.
keyTakeaways:
  - cin überspringt führende Zwischenräume meist.
  - Leerzeichen und Zeilenenden markieren oft das Ende eines Tokens.
  - Der erwartete Datentyp beeinflusst, wie der Stream gelesen wird.
recognizeSignals:
  - Es geht um Leerzeichen, Eingabestreams oder seltsame Eingabeeffekte.
  - Du sollst erklären, warum nur ein Teil einer Eingabe übernommen wurde.
  - In Beispielen werden float, int oder char mit derselben Eingabe verglichen.
selfCheckPoints:
  - Kann ich erklären, warum ein führendes Leerzeichen oft ignoriert wird?
  - Kann ich sagen, wann cin mit einem Eingabeteil stoppt?
  - Kann ich den erwarteten Datentyp in die Erklärung einbauen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - streams
  - cin
  - whitespace
draft: false
---

## Grundidee

Beim Einlesen mit <code>cin</code> ist nicht nur wichtig, **welche Variable** beschrieben wird, sondern auch **wie der Eingabestrom gelesen wird**. Für den Einstieg hilft eine einfache Denkweise: <code>cin</code> liest normalerweise den nächsten passenden Eingabeteil und trennt dabei an Zwischenräumen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Eingabe „34.5a“ für ein float</h3>
  <p>Wenn ein <code>float</code> erwartet wird, liest <code>cin</code> den Teil <code>34.5</code> ein. Der folgende Buchstabe <code>a</code> gehört nicht mehr zu einer gültigen Float-Zahl und bleibt deshalb im Eingabestrom zurück.</p>
</div>

## Führende Zwischenräume

Leerzeichen, Tabulatoren und Zeilenumbrüche am Anfang werden von <code>cin</code> bei vielen einfachen Typen meistens übersprungen. Für dich heißt das: Nicht jedes sichtbare Leerzeichen wird automatisch als „eigentliche Eingabe“ gelesen.

## Wo cin stoppt

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Zwischenraum</p>
    <h3>Typische Trennstelle</h3>
    <p>Ein Leerzeichen oder Zeilenumbruch beendet oft den aktuellen Eingabeteil.</p>
  </section>
  <section>
    <p class="card-kicker">Falsches Zeichen</p>
    <h3>Typ passt nicht mehr</h3>
    <p>Wenn der erwartete Typ nicht mehr passt, stoppt die sinnvolle Übernahme ebenfalls.</p>
  </section>
</div>

## Typ und Eingabe gehören zusammen

```cpp
int i;
char c;
float f;
cin >> i >> c >> f;
```

Diese drei Eingaben werden nicht alle gleich behandelt. Ein <code>int</code> erwartet etwas anderes als ein <code>char</code> oder ein <code>float</code>. Deshalb hilft es, eine Eingabe immer zusammen mit dem erwarteten Datentyp zu lesen.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Stream lesen statt nur Zeichen sehen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Eingabe liegt vor</strong><span>Zeichen, Leerzeichen und Zeilenende sind im Stream vorhanden.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Typ wird erwartet</strong><span>Der Code entscheidet, ob gerade int, char oder float gelesen werden soll.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Passender Teil wird übernommen</strong><span>cin liest nur so weit, wie Eingabe und Typ zusammenpassen.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welcher Typ wird erwartet?</strong>
    <span>Prüfe zuerst die Variable rechts von <code>&gt;&gt;</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Was steht im Stream?</strong>
    <span>Achte auf Zahlen, Buchstaben und Zwischenräume.</span>
  </div>
  <div class="step-item">
    <strong>3. Wo endet der passende Teil?</strong>
    <span>Suche die Stelle, an der Zwischenraum oder Typgrenze greift.</span>
  </div>
  <div class="step-item">
    <strong>4. Was bleibt übrig?</strong>
    <span>Denke mit, dass Restzeichen im Stream verbleiben können.</span>
  </div>
</div>
