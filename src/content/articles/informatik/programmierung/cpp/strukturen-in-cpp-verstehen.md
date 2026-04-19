---
title: Strukturen in C++ verstehen
description: Verstehe, warum struct mehrere zusammengehörige Werte zu einer logischen Einheit bündelt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - strukturen
  - strukturen-in-cpp-verstehen
learningGoals:
  - Du erklärst, warum eine Struktur mehrere Daten zu einer Einheit bündelt.
  - Du unterscheidest Komponenten einer Struktur von einzelnen losen Variablen.
  - Du liest struct eher als Modell für zusammengehörige Informationen.
practiceIdeas:
  - Überlege, welche Daten zu einem Punkt, Schüler oder Artikel zusammengehören.
  - Vergleiche eine Gruppe einzelner Variablen mit einer logischen Struktur.
  - Lies kleine struct-Beispiele zuerst nur nach ihren Komponenten.
commonMistakes:
  - struct nur als ungewohnte Schreibweise statt als Modell zu sehen.
  - Zusammengehörige Daten weiter als lose Einzelvariablen zu denken.
  - Komponenten und Strukturtyp durcheinanderzubringen.
keyTakeaways:
  - Eine Struktur fasst mehrere zusammengehörige Daten zusammen.
  - Die Komponenten dürfen unterschiedliche Datentypen haben.
  - struct macht Modelle im Code lesbarer.
recognizeSignals:
  - Es geht um Punkte, Personen, Datensätze oder zusammengehörige Werte.
  - Du sollst erklären, warum mehrere Angaben in einer Einheit gespeichert werden.
  - In Beispielen tauchen Komponenten wie x, y oder name gemeinsam auf.
selfCheckPoints:
  - Kann ich erklären, warum eine Struktur sinnvoll ist?
  - Kann ich Strukturtyp und Komponenten trennen?
  - Kann ich ein einfaches Alltagsbeispiel als Struktur beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - struct
  - datentypen
draft: false
---

## Grundidee

Mit einer Struktur kannst du mehrere zusammengehörige Werte als logische Einheit behandeln. Statt einzelne Variablen lose nebeneinander zu notieren, bekommt das Ganze einen gemeinsamen Typ.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Punkt mit x, y und Name</h3>
  <p>Ein Punkt besteht nicht nur aus einer Zahl. Wenn x-Koordinate, y-Koordinate und ein Name zusammengehören, ist eine Struktur ein guter Weg, diese Daten als gemeinsames Modell zu lesen.</p>
</div>

## Was eine Struktur bündelt

<div class="visual-grid">
  <div class="visual-item">
    <strong>logische Einheit</strong>
    <span>Mehrere Angaben gehören fachlich zu demselben Objekt.</span>
  </div>
  <div class="visual-item">
    <strong>Komponenten</strong>
    <span>Die einzelnen Bestandteile heißen members oder Komponenten.</span>
  </div>
  <div class="visual-item">
    <strong>verschiedene Typen</strong>
    <span>Die Komponenten dürfen unterschiedliche Datentypen besitzen.</span>
  </div>
</div>

## Ein kleines Beispiel

```cpp
struct Punkt {
  int x;
  int y;
  string name;
};
```

Ruhige Lesart:

- Es wird ein Strukturtyp mit dem Namen <code>Punkt</code> beschrieben.
- Ein Punkt hat die Komponenten <code>x</code>, <code>y</code> und <code>name</code>.
- Diese Werte gehören später zusammen zu einer Instanz dieses Typs.

## Struktur statt lose Variablen

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Zusammengehörige Daten bündeln</h3>
    <p>Bei einem Punkt, Kunden oder Artikel werden gemeinsame Eigenschaften in einem Typ zusammengefasst.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Viele Einzelvariablen ohne Modell</h3>
    <p>Dann ist schwerer zu erkennen, welche Werte eigentlich zu derselben Sache gehören.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welche Sache wird modelliert?</strong>
    <span>Frage zuerst nach dem gemeinsamen Objekt.</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Angaben gehören dazu?</strong>
    <span>Suche danach die Komponenten.</span>
  </div>
  <div class="step-item">
    <strong>3. Welche Typen haben die Komponenten?</strong>
    <span>Ordne erst dann die Datentypen zu.</span>
  </div>
  <div class="step-item">
    <strong>4. Warum ist das als Einheit sinnvoll?</strong>
    <span>Erkläre den fachlichen Zusammenhang der Werte.</span>
  </div>
</div>
