---
title: Ein- und Ausgabe mit cin und cout verstehen
description: Verstehe, wie ein einfaches C++-Programm Eingaben liest und Ausgaben Schritt für Schritt sichtbar macht.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - erstes-programm
  - ein-und-ausgabe-mit-cin-und-cout-verstehen
learningGoals:
  - Du erklärst die Rollen von cout und cin im Grundablauf eines kleinen Programms.
  - Du liest den Operatorfluss mit << und >> ruhiger statt nur als ungewohnte Syntax.
  - Du beschreibst, wie Eingabe, Verarbeitung und Ausgabe zusammenhängen.
practiceIdeas:
  - Lies ein Mini-Programm zuerst nur als Ablauf aus Ausgabe, Eingabe und Rückmeldung.
  - Erkläre bei einem Beispiel, welche Zeile eine Frage stellt und welche Zeile einen Wert übernimmt.
  - Formuliere in Worten, was zwischen Tastatureingabe und Bildschirmausgabe passiert.
commonMistakes:
  - cout und cin nur als Befehlswörter auswendig zu lernen.
  - << und >> mit Rechenoperatoren zu verwechseln.
  - Zu übersehen, dass Eingabe und Ausgabe Teil desselben Programmablaufs sind.
keyTakeaways:
  - cout gibt Text oder Werte aus.
  - cin liest einen Wert in eine Variable ein.
  - Einfache Programme werden über Einlesen, Verarbeiten und Ausgeben lesbar.
recognizeSignals:
  - Es geht um Konsolenprogramme, Eingaben, Ausgaben oder die ersten Codezeilen in C++.
  - Du sollst erklären, was eine Zeile mit cin oder cout bewirkt.
  - In Beispielen musst du die Richtung von Datenfluss im Code ruhig lesen.
selfCheckPoints:
  - Kann ich erklären, was cout macht?
  - Kann ich erklären, was cin macht?
  - Kann ich den kleinen Ablauf von Eingabe zu Ausgabe in Worten beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - cin
  - cout
  - eingabe
  - ausgabe
draft: false
---

## Grundidee

Schon sehr kleine C++-Programme zeigen oft denselben Grundablauf: Das Programm gibt einen Hinweis aus, liest eine Eingabe ein und zeigt danach ein Ergebnis oder eine Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Zahl eingeben und wieder anzeigen</h3>
  <p>Ein Programm fragt nach einer Zahl, liest sie über <code>cin</code> ein und gibt sie anschließend mit <code>cout</code> wieder aus. So wird sichtbar, wie Eingabe und Ausgabe an einer Variablen zusammenarbeiten.</p>
</div>

## Die zwei Grundrollen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">cout</p>
    <h3>Etwas sichtbar machen</h3>
    <p><code>cout</code> schickt Text oder Werte zur Ausgabe. Das Programm zeigt also etwas auf dem Bildschirm an.</p>
  </section>
  <section>
    <p class="card-kicker">cin</p>
    <h3>Etwas übernehmen</h3>
    <p><code>cin</code> liest einen eingegebenen Wert ein und schreibt ihn in eine Variable.</p>
  </section>
</div>

## Ein kleines Beispiel

```cpp
int zahl;
cout << "Bitte Zahl eingeben:" << endl;
cin >> zahl;
cout << "Zahl = " << zahl << endl;
```

So kannst du das ruhig lesen:

- Es wird zuerst eine Variable vorbereitet.
- Danach wird eine Aufforderung ausgegeben.
- Dann liest das Programm die Eingabe ein.
- Zum Schluss wird der eingelesene Wert wieder angezeigt.

## Die Operatoren << und >>

Bei <code>cout</code> taucht oft <code>&lt;&lt;</code> auf, bei <code>cin</code> oft <code>&gt;&gt;</code>. Für den Einstieg hilft eine einfache Denkweise:

- <code>&lt;&lt;</code> kannst du als „zur Ausgabe schicken“ lesen.
- <code>&gt;&gt;</code> kannst du als „in die Variable übernehmen“ lesen.

<div class="note-panel">
  <p><strong>Merke:</strong> Für Anfänger ist wichtiger, die Datenrichtung zu verstehen, als die Operator-Schreibweise sofort formal auswendig zu lernen.</p>
</div>

## Datenfluss statt Einzelzeilen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Ein kleiner Konsolenablauf</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Hinweis ausgeben</strong><span>Das Programm stellt eine Frage.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wert einlesen</strong><span>Die Eingabe landet in einer Variablen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Ergebnis anzeigen</strong><span>Der gespeicherte Wert wird wieder sichtbar.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Wo wird etwas angezeigt?</strong>
    <span>Suche zuerst die Zeilen mit <code>cout</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Wo wird etwas eingelesen?</strong>
    <span>Suche danach die Zeile mit <code>cin</code>.</span>
  </div>
  <div class="step-item">
    <strong>3. Welche Variable ist beteiligt?</strong>
    <span>Prüfe, wohin die Eingabe geschrieben wird.</span>
  </div>
  <div class="step-item">
    <strong>4. Wie läuft es insgesamt?</strong>
    <span>Lies den Code zuletzt als zusammenhängenden kleinen Ablauf.</span>
  </div>
</div>
