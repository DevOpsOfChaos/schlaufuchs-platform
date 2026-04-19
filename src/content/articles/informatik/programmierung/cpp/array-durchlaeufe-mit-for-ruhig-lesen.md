---
title: Array-Durchläufe mit for ruhig lesen
description: Verstehe, wie eine for-Schleife nacheinander auf Array-Positionen zugreift und warum der Index dabei die Steuerrolle hat.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - array-durchlaeufe-mit-for-ruhig-lesen
learningGoals:
  - Du erklärst, wie ein Array mit einer for-Schleife Position für Position durchlaufen wird.
  - Du unterscheidest Schleifenzähler und Array-Inhalt.
  - Du liest einen Array-Durchlauf als wiederholten Positionszugriff.
practiceIdeas:
  - Lies kleine Schleifen zuerst nur über Start, Grenze und Schritt.
  - Beschreibe bei einem Beispiel, welche Position in jedem Durchlauf angesprochen wird.
  - Vergleiche einen festen Einzelzugriff mit einem kompletten Durchlauf.
commonMistakes:
  - Den Schleifenzähler mit dem gespeicherten Wert zu verwechseln.
  - Die Schleifenbedingung nicht mit der Arraygröße abzugleichen.
  - Nur auf das Schleifengerüst zu schauen und den Arrayzugriff darin zu übersehen.
keyTakeaways:
  - Eine for-Schleife kann ein Array geordnet durchlaufen.
  - Der Zähler steuert die Position, nicht den Inhalt.
  - Die obere Grenze muss zur Anzahl der Array-Elemente passen.
recognizeSignals:
  - Es geht um Schleifen mit i, Indexzugriffe oder nacheinander gelesene Arraywerte.
  - Du sollst sagen, welche Position in welchem Durchlauf gelesen wird.
  - In Beispielen musst du Schleifenzähler und Feldelement trennen.
selfCheckPoints:
  - Kann ich erklären, wofür i in einem Array-Durchlauf steht?
  - Kann ich die Schleifengrenze mit der Arraygröße verbinden?
  - Kann ich sagen, welcher Zugriff in einem bestimmten Durchlauf stattfindet?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - for
draft: false
---

## Grundidee

Arrays und Schleifen passen fachlich eng zusammen. Wenn alle Elemente eines Arrays nacheinander betrachtet werden sollen, übernimmt die Schleife die Wiederholung und der Index zeigt jeweils auf den aktuellen Platz.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vier Werte nacheinander ausgeben</h3>
  <p>Statt <code>werte[0]</code>, <code>werte[1]</code>, <code>werte[2]</code> und <code>werte[3]</code> einzeln auszuschreiben, kann eine <code>for</code>-Schleife die Positionen nacheinander erzeugen.</p>
</div>

## Das Grundmuster

```cpp
for (int i = 0; i < 4; i++) {
  cout << werte[i] << endl;
}
```

Ruhige Lesart:

- <code>i = 0</code> startet beim ersten Index.
- <code>i &lt; 4</code> begrenzt den Durchlauf auf gültige Plätze.
- <code>i++</code> geht schrittweise zum nächsten Index.
- <code>werte[i]</code> greift in jedem Durchlauf auf den aktuellen Platz zu.

## Schleifenzähler und Inhalt trennen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">i</p>
    <h3>Steuert den Platz</h3>
    <p>Der Schleifenzähler sagt, welche Position gerade angesprochen wird.</p>
  </section>
  <section>
    <p class="card-kicker">werte[i]</p>
    <h3>Ist der Inhalt an diesem Platz</h3>
    <p>Hier steht der tatsächliche Wert, der im Array gespeichert ist.</p>
  </section>
</div>

## Warum die Grenze so wichtig ist

Die Bedingung der Schleife muss zu den gültigen Indizes passen. Hat ein Array vier Elemente, dann sind die erlaubten Indizes:

- 0
- 1
- 2
- 3

Deshalb endet die Schleife bei <code>i &lt; 4</code> und nicht bei <code>i &lt;= 4</code>.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Array mit vier Elementen hat nicht den letzten Index 4, sondern den letzten Index 3.</p>
</div>

## Der typische Grenzfehler

```cpp
int A[] = {2, 4, 6, 8};
for (int i = 0; i <= 4; i++) {
  cout << A[i] << endl;
}
```

Hier liegt der Fehler in <code>i &lt;= 4</code>. Das Array hat zwar vier Elemente, aber der letzte gültige Index ist 3. Der Zugriff <code>A[4]</code> liegt also **außerhalb des Arrays**.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Grenze an der Elementanzahl ausrichten</h3>
    <p>Bei vier Elementen läuft die Schleife mit <code>i &lt; 4</code> nur über die erlaubten Plätze 0 bis 3.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Letzte Elementnummer falsch lesen</h3>
    <p>Wer „vier Elemente“ direkt mit „letzter Index 4“ verwechselt, baut sehr leicht einen Überlauf in die Schleife ein.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Startwert lesen</strong>
    <span>Wo beginnt der Index?</span>
  </div>
  <div class="step-item">
    <strong>2. Grenze prüfen</strong>
    <span>Bis wohin darf der Index wirklich laufen?</span>
  </div>
  <div class="step-item">
    <strong>3. Zugriff suchen</strong>
    <span>Wo wird der Index im Arrayzugriff verwendet?</span>
  </div>
  <div class="step-item">
    <strong>4. Inhalt und Position trennen</strong>
    <span>Erst der Platz, dann der Wert an diesem Platz.</span>
  </div>
</div>
