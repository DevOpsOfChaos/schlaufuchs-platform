---
title: Virtual-Methoden und override verstehen
description: Verstehe, warum manche Methoden erst zur Laufzeit passend ausgewaehlt werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - virtual-methoden-und-override-verstehen
learningGoals:
  - Du erklaerst die Rolle von virtual fuer polymorphes Verhalten.
  - Du unterscheidest ueberschriebene Methoden mit und ohne spaete Bindung.
  - Du erkennst, warum Referenzen und Basisklassentypen hier wichtig werden.
practiceIdeas:
  - Vergleiche denselben Methodenaufruf mit und ohne virtual.
  - Beschreibe, welche Klasse bei der Methodenwahl wirklich entscheidet.
  - Erklaere, warum override den Code klarer macht.
commonMistakes:
  - Zu denken, dass Ueberschreiben automatisch immer spaet gebunden ist.
  - Basisklassentyp und konkretes Objekt zu vermischen.
  - Polymorphie mit einfachem Ueberladen zu verwechseln.
keyTakeaways:
  - Mit virtual kann die Methodenwahl zur Laufzeit passend zum echten Objekt erfolgen.
  - override macht deutlich, dass eine Basismethode bewusst ueberschrieben wird.
  - Polymorphie wird besonders wichtig, wenn ueber Referenzen oder Zeiger auf Basistypen gearbeitet wird.
recognizeSignals:
  - Eine Basisklasse deklariert eine Methode als virtual.
  - Eine Unterklasse liefert eine eigene Implementierung mit gleicher Signatur.
  - Ein Aufruf laeuft ueber Referenz oder Zeiger auf die Basisklasse.
selfCheckPoints:
  - Kann ich sagen, wann statische und wann dynamische Methodenwahl gemeint ist?
  - Kann ich die Rolle von virtual in Worten erklaeren?
  - Kann ich beschreiben, welches Objekt fuer die echte Methodenwahl zaehlt?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - polymorphie
  - virtual
draft: false
---

## Grundidee

Beim Ueberschreiben gleichnamiger Methoden ist die wichtigste Frage nicht nur, **welche Signatur gleich ist**, sondern **wann entschieden wird**, welche Methode wirklich laeuft.

## Ohne virtual

Ohne <code>virtual</code> wird oft schon beim Kompilieren festgelegt, welche Methode aufgerufen wird. Dann zaehlt vor allem der Typ der Referenz oder Variable, ueber die du aufrufst.

## Mit virtual

Mit <code>virtual</code> darf die Entscheidung bis zur Laufzeit offen bleiben. Dann zaehlt das **echte konkrete Objekt**, nicht nur der Basisklassentyp der Referenz.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Basistyp zeigt hin – Objekt entscheidet</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Basisklassen-Referenz</strong><span>beschreibt die gemeinsame Schnittstelle</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>virtual</strong><span>verschiebt die Entscheidung bis zur Laufzeit</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Konkretes Objekt</strong><span>liefert die passende Implementierung</span></div>
  </div>
</div>

## Warum override hilft

<div class="example-card">
  <p class="card-kicker">Praxisnutzen</p>
  <h3>Absicht sichtbar machen</h3>
  <p><code>override</code> sagt nicht nur dem Compiler, sondern auch dir beim Lesen: Diese Methode soll bewusst eine Basismethode ersetzen. Das macht Vererbungslogik deutlich ruhiger.</p>
</div>

## Vergleich

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Ueberschrieben ist nicht automatisch polymorph</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ohne virtual</strong>
      <span>Die Methodenwahl bleibt eher beim statischen Typ des Ausdrucks.</span>
    </div>
    <div class="compare-item">
      <strong>Mit virtual</strong>
      <span>Die Methodenwahl kann zum echten Objekttyp wandern und wird erst spaeter entschieden.</span>
    </div>
  </div>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. virtual suchen</strong>
    <span>Nur dann ist spaete Bindung vorgesehen.</span>
  </div>
  <div class="step-item">
    <strong>2. Referenztyp und Objekttyp trennen</strong>
    <span>Frage nicht nur, worueber aufgerufen wird, sondern auch, worauf es zeigt.</span>
  </div>
  <div class="step-item">
    <strong>3. override als Signal lesen</strong>
    <span>Es macht die Ersetzungsabsicht in der Unterklasse deutlich.</span>
  </div>
</div>
