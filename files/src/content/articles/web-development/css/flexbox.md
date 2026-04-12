---
title: Flexbox – Grundlagen
description: Flexbox hilft dabei, Elemente in einer Zeile oder Spalte flexibel und
  kontrolliert anzuordnen.
subject: web-development
section: css
topicPath:
- css
- flexbox
learningGoals:
- Du verstehst die Grundidee eines Flex-Containers.
- Du ordnest häufige Eigenschaften wie justify-content und align-items ein.
- Du erkennst, warum Flexbox für viele Layout-Probleme so nützlich ist.
level: einfach
tags:
- css
- flexbox
- layout
- align-items
- justify-content
draft: false
practiceIdeas:
- Nimm einen Container und ändere nur display, flex-direction und justify-content,
  um die Hauptwirkung zu sehen.
- Beobachte, wie sich align-items von justify-content unterscheidet.
- Teste, wie einzelne Elemente mit flex-grow mehr Platz bekommen.
commonMistakes:
- Hauptachse und Querachse nicht auseinanderhalten.
- justify-content und align-items verwechseln.
- Flexbox einsetzen, ohne zuerst den Container als Flex-Container zu definieren.
keyTakeaways:
- Flexbox ordnet Elemente entlang einer Haupt- und einer Querachse.
- justify-content arbeitet auf der Hauptachse, align-items auf der Querachse.
- Ohne display: flex greifen die typischen Flexbox-Eigenschaften nicht.
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Flexbox ist ein CSS-Werkzeug, mit dem Elemente kontrolliert in Zeilen oder Spalten ausgerichtet werden. Gerade für Navigationen, Karten oder Button-Gruppen ist das sehr nützlich.</p>
  <ul>
    <li>Du lernst den Unterschied zwischen Container und Kind-Elementen.</li>
    <li>Du verstehst die Wirkung wichtiger Flexbox-Eigenschaften.</li>
    <li>Du erkennst typische Layout-Probleme, die Flexbox elegant löst.</li>
  </ul>
</div>

## Grundidee

Flexbox arbeitet mit einem Eltern-Element, das zum Flex-Container wird. Alle direkten Kinder darin werden als Flex-Items behandelt.

Der wichtigste Start ist:

<div class="wide-example">

```css
.container {
  display: flex;
}
```

</div>

Ab diesem Moment verhalten sich die direkten Kinder anders als im normalen Blocklayout.

## Container und Items

Der Flex-Container steuert das Layout. Die Kinder reagieren auf diese Regeln.

Wichtige Frage beim Lesen von CSS ist daher immer:

- Welche Regel gehört zum Container?
- Welche Regel gehört zu einem Kind-Element?

## Wichtige Eigenschaften

### <code>justify-content</code>

Steuert die Verteilung entlang der Hauptachse.

### <code>align-items</code>

Steuert die Ausrichtung entlang der Querachse.

### <code>gap</code>

Regelt den Abstand zwischen den Elementen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine einfache Leiste mit Abstand</h3>
  <div class="wide-example">

```css
.leiste {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

  </div>
  <p>Die Elemente stehen in einer Reihe, haben Abstand und werden auf der Querachse sauber ausgerichtet.</p>
</div>

## Warum Flexbox so nützlich ist

Viele Layout-Fragen lassen sich mit Flexbox einfacher lösen als mit älteren Techniken.

Typische Einsatzfälle sind:

- Navigationen
- Kartenreihen
- Button-Gruppen
- horizontale oder vertikale Ausrichtung
- flexible Verteilung von Platz

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Beobachte die Wirkung einzelner Eigenschaften</h3>
  <ul>
    <li>Was passiert, wenn du nur <code>display: flex</code> setzt?</li>
    <li>Wie verändert sich das Layout bei <code>justify-content: center</code>?</li>
    <li>Was ändert sich bei <code>align-items: center</code>?</li>
    <li>Welche Wirkung hat <code>gap</code> im Vergleich zu einzelnen Margins?</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Eigenschaften dem Kind statt dem Container zuzuordnen.</li>
    <li>Hauptachse und Querachse zu verwechseln.</li>
    <li>Zu glauben, Flexbox sei nur für horizontale Reihen gedacht.</li>
    <li>Abstände mit vielen Einzel-Margins zu lösen, obwohl <code>gap</code> klarer wäre.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Flexbox beginnt mit <code>display: flex</code>.</li>
    <li>Der Container steuert, die Kinder reagieren.</li>
    <li><code>justify-content</code> und <code>align-items</code> lösen unterschiedliche Ausrichtungsfragen.</li>
    <li>Flexbox ist eines der wichtigsten Werkzeuge für moderne Layouts.</li>
  </ul>
</div>


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Flexbox – Grundlagen** oder um eng verwandte Begriffe aus **css**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du verstehst die Grundidee eines Flex-Containers.?
- Kannst du in eigenen Worten erklären, wie du du ordnest häufige Eigenschaften wie justify-content und align-items ein.?
- Kannst du in eigenen Worten erklären, wie du du erkennst, warum Flexbox für viele Layout-Probleme so nützlich ist.?
