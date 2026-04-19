---
title: Vererbung und Polymorphie grob einordnen
description: Verstehe Vererbung als Spezialisierung und Polymorphie als gemeinsames Verhalten bei unterschiedlicher Auspraegung.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - vererbung-und-polymorphie-grob-einordnen
learningGoals:
  - Du beschreibst Vererbung als Spezialisierung.
  - Du erklaerst Polymorphie als gemeinsames Auftreten mit unterschiedlicher Umsetzung.
  - Du ordnest UML- und OOP-Beispiele ruhiger in Worte ein.
practiceIdeas:
  - Formuliere ist-ein-Aussagen zu Klassen.
  - Vergleiche gemeinsame Schnittstelle und verschiedene Auspraegungen.
  - Lies ein Beispiel zuerst in Alltagssprache und dann als OOP-Modell.
commonMistakes:
  - Vererbung mit Besitzbeziehungen zu verwechseln.
  - Polymorphie nur als schweres Fremdwort zu sehen.
  - Oberklasse und Unterklasse nicht sauber zu trennen.
keyTakeaways:
  - Vererbung beschreibt eine Klassenhierarchie.
  - Polymorphie beschreibt gleichartige Aufrufe mit unterschiedlicher konkreter Wirkung.
  - Beide Konzepte haengen oft zusammen, sind aber nicht dasselbe.
recognizeSignals:
  - Es geht um Oberklasse, Unterklasse oder gemeinsame Schnittstellen.
  - Ein UML-Diagramm zeigt Generalisierung oder Spezialisierung.
  - Mehrere Objekte reagieren unterschiedlich auf denselben Methodenaufruf.
selfCheckPoints:
  - Kann ich Vererbung in einem Satz beschreiben?
  - Kann ich Polymorphie in Alltagssprache erklaeren?
  - Kann ich beide Begriffe trennen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - vererbung
  - polymorphie
draft: false
---

## Grundidee

Vererbung und Polymorphie sind zwei wichtige OOP-Ideen, die oft zusammen auftreten, aber nicht dasselbe meinen.

## Vererbung

Vererbung bedeutet: Eine Klasse baut auf einer anderen Klasse auf. Die Unterklasse uebernimmt Eigenschaften und Verhalten der Oberklasse und kann sie erweitern oder anpassen. Die ruhigste Sprachform ist hier: **ist ein**.

## Polymorphie

Polymorphie bedeutet: Verschiedene Objekte koennen ueber eine gemeinsame Schnittstelle angesprochen werden, aber unterschiedlich reagieren. Das macht Modelle flexibler, weil nicht immer alle konkreten Details an der Aufrufstelle bekannt sein muessen.

<div class="compare-card">
  <p class="card-kicker">Trennung</p>
  <h3>Hierarchie vs. Verhalten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Vererbung</strong>
      <span>Fragt: Wie haengen Klassen in einer Hierarchie zusammen?</span>
    </div>
    <div class="compare-item">
      <strong>Polymorphie</strong>
      <span>Fragt: Wie koennen verschiedene Objekte gleich angesprochen, aber unterschiedlich ausgefuehrt werden?</span>
    </div>
  </div>
</div>

## Leitbeispiel Ampel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gemeinsame Ampel-Idee, unterschiedliche konkrete Formen</h3>
  <p>Es kann eine allgemeinere Ampelklasse geben und spezielle Unterformen. Gleichzeitig koennen Objekte dieser Unterformen auf denselben Methodenaufruf unterschiedlich reagieren. Genau dort wird die Trennung von Vererbung und Polymorphie sichtbar.</p>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Klassenhierarchie pruefen</strong>
    <span>Geht es um Oberklasse und Unterklasse?</span>
  </div>
  <div class="step-item">
    <strong>2. Verhalten pruefen</strong>
    <span>Geht es um gleiche Aufrufe mit unterschiedlicher Wirkung?</span>
  </div>
  <div class="step-item">
    <strong>3. Begriffe trennen</strong>
    <span>Hierarchie ist Vererbung, unterschiedliche konkrete Wirkung ist Polymorphie.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Vererbung ordnet Klassen. Polymorphie erklaert Verhalten ueber eine gemeinsame Schnittstelle.</p>
</div>
## Ergaenzung: Polymorphie wird erst mit Bindung konkret

Polymorphie bleibt leicht zu abstrakt, wenn man nur von "gleicher Schnittstelle" spricht. Wirklich sichtbar wird sie erst bei der Frage, **wann** entschieden wird, welche Methode gilt. Genau dort helfen spaeter Begriffe wie <code>virtual</code>, statisches Binden und dynamisches Binden.
