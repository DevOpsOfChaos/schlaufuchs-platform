---
title: Primitive Datentypen in C++ verstehen
description: Verstehe, warum C++ für einfache Werte verschiedene Grundtypen bereitstellt und wie du sie ruhiger einordnest.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - primitive-datentypen
  - primitive-datentypen-in-cpp-verstehen
learningGoals:
  - Du erklärst, was primitive Datentypen in C++ sind.
  - Du unterscheidest bool, Zeichen-, Ganzzahl- und Gleitkommatypen in ihrer Rolle.
  - Du liest Variablendeklarationen ruhiger über den Zweck des Wertes statt nur über den Namen.
practiceIdeas:
  - Ordne Werte wie true, 42, 'A' und 3.14 den passenden Grundtypen zu.
  - Vergleiche zwei Variablen und erkläre nicht nur den Typ, sondern auch den Grund für die Wahl.
  - Prüfe bei kleinen Codebeispielen zuerst den Bedeutungsbereich des Wertes und erst danach die Syntax.
commonMistakes:
  - Alle Zahlenwerte automatisch als denselben Typ zu sehen.
  - bool, char und int nur als unterschiedliche Schreibweisen statt als verschiedene Rollen zu behandeln.
  - primitive Typen mit "beliebig genau" oder "immer gleich groß" gleichzusetzen.
keyTakeaways:
  - Primitive Datentypen bilden die Grundlage für einfache Werte in C++.
  - Nicht jeder Wert ist "einfach nur eine Zahl".
  - Die Typwahl folgt der Bedeutung des Wertes, nicht nur seiner Schreibweise.
recognizeSignals:
  - Es geht um Variablen, Literale, Grundtypen oder die Frage, welcher Wert in welcher Form gespeichert wird.
  - Du sollst erklären, warum ein bestimmter Typ passt.
  - In Beispielen musst du zwischen Ja/Nein, Zeichen, ganzen Zahlen und Näherungswerten unterscheiden.
selfCheckPoints:
  - Kann ich bool, char, Ganzzahl- und Gleitkommatypen sauber unterscheiden?
  - Kann ich die Typwahl mit der Bedeutung des Wertes begründen?
  - Kann ich erklären, warum nicht alle Werte denselben Typ brauchen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - datentypen
  - variablen
draft: false
---

## Grundidee

Primitive Datentypen sind in C++ die kleinsten grundlegenden Wertarten. Sie beschreiben noch keine komplexen Objekte oder Container, sondern einfache einzelne Werte wie Wahrheitswerte, Zeichen, ganze Zahlen oder Näherungswerte.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Anmeldung prüft sehr unterschiedliche Werte</h3>
  <p>Eine Anmeldung braucht zum Beispiel einen Wahrheitswert für „angemeldet oder nicht“, eine Zahl für die Anzahl der Fehlversuche und vielleicht ein einzelnes Zeichen als Statuskürzel. Genau daran sieht man: Nicht jeder Wert spielt dieselbe fachliche Rolle, also sollte auch nicht jeder Wert als derselbe Typ gedacht werden.</p>
</div>

## Welche Grundideen dahinterstecken

<div class="visual-grid">
  <div class="visual-item">
    <strong>bool</strong>
    <span>Ein bool-Wert steht für genau zwei Zustände: wahr oder falsch.</span>
  </div>
  <div class="visual-item">
    <strong>char</strong>
    <span>Ein char steht für ein einzelnes Zeichen wie <code>'A'</code> oder <code>'?'</code>.</span>
  </div>
  <div class="visual-item">
    <strong>Ganzzahltypen</strong>
    <span>Typen wie <code>int</code> oder <code>long</code> sind für ganze Werte ohne Nachkommastellen gedacht.</span>
  </div>
  <div class="visual-item">
    <strong>Gleitkommatypen</strong>
    <span><code>float</code> und <code>double</code> passen zu Messwerten oder anderen Näherungswerten mit Nachkommastellen.</span>
  </div>
</div>

## Nicht nur die Schreibweise zählt

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Gleiche Oberfläche, andere Rolle</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>0</code> als Zahl</strong>
      <span>Als ganze Zahl kann <code>0</code> eine Menge, einen Zähler oder einen Index bedeuten.</span>
    </div>
    <div class="compare-item">
      <strong><code>false</code> als Zustand</strong>
      <span>Hier geht es nicht um eine Menge, sondern um eine Ja/Nein-Aussage.</span>
    </div>
    <div class="compare-item">
      <strong><code>'0'</code> als Zeichen</strong>
      <span>Das ist kein Rechenergebnis, sondern das einzelne Zeichen Null.</span>
    </div>
  </div>
</div>

Wer diese Rollen trennt, liest C++-Deklarationen deutlich ruhiger.

## Ein kleines Beispiel

```cpp
bool angemeldet = false;
char kennung = 'A';
int fehlversuche = 2;
double temperatur = 21.5;
```

Dieses Beispiel zeigt vier verschiedene Typentscheidungen:

- <code>angemeldet</code> braucht nur zwei Zustände,
- <code>kennung</code> hält genau ein Zeichen,
- <code>fehlversuche</code> ist eine ganze Anzahl,
- <code>temperatur</code> ist ein Näherungswert mit Nachkommastellen.

## Auch <code>auto</code> und <code>void</code> gehören zur Grundorientierung

<div class="figure-card">
  <p class="card-kicker">Einordnung</p>
  <h3>Nicht jeder Typname bedeutet „Wert speichern“</h3>
  <div class="step-grid">
    <div class="step-item">
      <strong><code>auto</code></strong>
      <span>Der Compiler leitet den Typ aus dem Startwert ab. Das hilft bei klaren Initialisierungen, ersetzt aber nicht das Denken über die Rolle des Wertes.</span>
    </div>
    <div class="step-item">
      <strong><code>void</code></strong>
      <span><code>void</code> steht gerade dafür, dass kein Wert zurückgegeben oder erwartet wird.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche fachliche Rolle hat der Wert?
2. Braucht er nur wahr/falsch, ein Zeichen, eine ganze Anzahl oder einen Näherungswert?
3. Muss mit dem Wert gerechnet werden oder dient er nur als Zustand oder Zeichen?
4. Erst dann den konkreten Typ wählen.

<div class="note-panel">
  <p><strong>Merke:</strong> Primitive Datentypen unterscheiden sich nicht nur technisch, sondern vor allem in der Frage, <em>welche Art von Wert</em> sie ausdrücken sollen.</p>
</div>

## Warum das Thema wichtig ist

Wer primitive Datentypen sauber versteht, liest Variablen, Parameter und kleine Funktionsbeispiele deutlich sicherer. Das ist eine wichtige Grundlage für spätere Themen wie Container, Klassen und Operatoren.
