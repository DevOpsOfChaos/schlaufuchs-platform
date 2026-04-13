---
title: Arrays und Schleifen
description: Arrays und Schleifen gehören zusammen, weil viele Daten nicht einzeln,
  sondern systematisch verarbeitet werden.
subject: informatik
section: Programmierung
topicPath:
- programmieren
- arrays-und-schleifen
learningGoals:
- Du verstehst, wie Arrays und Schleifen zusammenarbeiten.
- Du liest Index, Länge und Schleifenbedingung sauber.
- Du erkennst typische Grenz- und Zählfehler früher.
practiceIdeas:
- Verfolge ein kleines Array Schritt für Schritt in einer Schleife.
- Ändere Schleifenbedingungen bewusst und beobachte Fehler.
- Übertrage ein Alltagsproblem in Array- und Schleifenlogik.
commonMistakes:
- Bei 1 statt bei 0 zu beginnen.
- Die Schleifenbedingung zu weit zu setzen.
- Index und Wert zu verwechseln.
keyTakeaways:
- Arrays speichern mehrere Werte gleichen Typs.
- Schleifen verarbeiten diese Werte systematisch.
- Saubere Grenzen verhindern Off-by-one-Fehler.
tags:
- Arrays
- Schleifen
- C
- Programmierung
- Index
- for-Schleife
level: einfach
draft: false
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Arrays und Schleifen tauchen fast immer gemeinsam auf. Ein Array speichert mehrere Werte derselben Art. Eine Schleife sorgt dafür, dass diese Werte nacheinander gelesen, geprüft oder verändert werden können. Genau diese Zusammenarbeit ist der Kern des Themas.</p>
  <ul>
    <li>Du verstehst den Unterschied zwischen einem einzelnen Wert und einer Datenfolge.</li>
    <li>Du ordnest Indizes, Länge und Schleifenbedingung sauber ein.</li>
    <li>Du lernst, warum viele typische Fehler gar nicht „kompliziert“, sondern nur ungenau gedacht sind.</li>
  </ul>
</div>

## Was du hier lernst

Auf dieser Seite lernst du,

- Du verstehst, wie Arrays und Schleifen zusammenarbeiten.
- Du liest Index, Länge und Schleifenbedingung sauber.
- Du erkennst typische Grenz- und Zählfehler früher.

## Die Grundidee

Sobald mehrere ähnliche Werte verarbeitet werden sollen, wird einzelner Code schnell unübersichtlich. Statt fünf oder zehn einzelne Variablen anzulegen, werden die Werte in einem Array zusammengefasst.

Eine Schleife übernimmt dann die Wiederholung. So muss ein Arbeitsschritt nicht immer wieder neu ausgeschrieben werden.

## Was ein Array eigentlich macht

Ein Array speichert mehrere Elemente gleichen Typs in fester Reihenfolge. Jeder Eintrag liegt an einer bestimmten Position.

In C sieht das zum Beispiel so aus:

```c
int werte[5] = {3, 5, 8, 13, 21};
```

Hier gibt es fünf ganze Zahlen. Der Zugriff erfolgt nicht über Namen wie `wert1` oder `wert2`, sondern über den Index.

## Warum der Index bei 0 beginnt

Viele Programmiersprachen zählen intern ab 0. Deshalb liegt der erste Eintrag nicht an Position 1, sondern an Position 0.

Das wirkt am Anfang ungewohnt, ist aber in C, Java, JavaScript und Python normal. Gerade deshalb ist es wichtig, sich diese Grundregel früh sauber anzugewöhnen.

## Wie Schleifen dazu passen

Schleifen helfen, wiederkehrende Schritte kontrolliert auszuführen.

Ein typisches Muster ist die `for`-Schleife:

```c
for (int i = 0; i < 5; i++) {
  printf("%d
", werte[i]);
}
```

Hier passiert nichts Geheimnisvolles. Die Schleife:

- startet bei `i = 0`,
- prüft vor jedem Durchlauf `i < 5`,
- erhöht `i` nach jedem Durchlauf um 1.

Damit werden genau die gültigen Positionen `0` bis `4` angesprochen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Summe über ein Array bilden</h3>
  <p>Du hast vier Punktzahlen in einem Array gespeichert und möchtest die Gesamtsumme berechnen. Statt vier Additionen einzeln zu schreiben, gehst du mit einer Schleife einmal durch alle Werte.</p>

```c
int punkte[4] = {7, 9, 6, 8};
int summe = 0;

for (int i = 0; i < 4; i++) {
  summe = summe + punkte[i];
}
```

  <p>Nach dem letzten Durchlauf enthält <code>summe</code> den Wert 30. Das Beispiel zeigt sehr gut, warum Arrays und Schleifen zusammengehören: Die Daten liegen geordnet vor, und die Schleife arbeitet Schritt für Schritt darüber.</p>
</div>

## Was du beim Lesen einer Schleife prüfen solltest

Wenn du eine Schleife siehst, helfen drei einfache Fragen:

1. Bei welchem Wert startet die Schleifenvariable?
2. Bis wohin darf sie laufen?
3. Welches Array-Element wird in jedem Schritt angesprochen?

Mit diesen Fragen kannst du viele Abläufe sauber verstehen, bevor du überhaupt selbst Code schreibst.

## Wofür Arrays und Schleifen oft gebraucht werden

Typische Anwendungen sind:

- Werte ausgeben,
- Summen oder Mittelwerte berechnen,
- das größte oder kleinste Element finden,
- Eingaben geordnet speichern,
- Daten vergleichen oder filtern.

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Die Schleife startet bei 1 statt bei 0.</li>
    <li>Die Bedingung ist zu weit gefasst, etwa <code>i &lt;= 5</code> statt <code>i &lt; 5</code>.</li>
    <li>Die Länge des Arrays und die Schleifenbedingung passen nicht zusammen.</li>
    <li>Man liest Code nur oberflächlich und verfolgt den Index nicht wirklich mit.</li>
    <li>Ein Array wird benutzt, bevor die Werte sinnvoll gesetzt oder geprüft wurden.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Arrays speichern viele Werte gleichen Typs in fester Reihenfolge.</li>
    <li>Schleifen helfen beim systematischen Zugriff auf diese Werte.</li>
    <li>Ein Array mit Länge <code>n</code> hat meist die Indizes <code>0</code> bis <code>n - 1</code>.</li>
    <li>Die wichtigste Kontrollfrage lautet: Welche Indizes sind wirklich gültig?</li>
    <li>Viele Anfängerfehler entstehen durch ungenaue Grenzen, nicht durch komplizierte Theorie.</li>
  </ul>
</div>


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Arrays und Schleifen** oder um eng verwandte Begriffe aus **Programmierung**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du verstehst, wie Arrays und Schleifen zusammenarbeiten.?
- Kannst du in eigenen Worten erklären, wie du du liest Index, Länge und Schleifenbedingung sauber.?
- Kannst du in eigenen Worten erklären, wie du du erkennst typische Grenz- und Zählfehler früher.?

## Merksätze

- Arrays speichern mehrere Werte gleichen Typs.
- Schleifen verarbeiten diese Werte systematisch.
- Saubere Grenzen verhindern Off-by-one-Fehler.
