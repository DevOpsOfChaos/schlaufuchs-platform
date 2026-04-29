---
title: "Virtual-Methoden und override verstehen"
description: "Verstehe, warum manche Methoden erst zur Laufzeit passend ausgewaehlt werden und wie virtual und override diese Absicht sichtbar machen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "virtual-methoden-und-override-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Beim Ueberschreiben gleichnamiger Methoden ist die wichtigste Frage nicht nur, welche Signatur gleich ist, sondern **wann entschieden wird**, welche Methode wirklich laeuft.

## Ohne virtual

Ohne <code>virtual</code> wird oft schon beim Kompilieren festgelegt, welche Methode aufgerufen wird. Dann zaehlt vor allem der Typ der Referenz oder Variable, ueber die aufgerufen wird.

## Mit virtual

Mit <code>virtual</code> darf die Entscheidung bis zur Laufzeit offen bleiben. Dann zaehlt das **echte konkrete Objekt** und nicht nur der Basisklassentyp der Referenz.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Basistyp zeigt hin und Objekt entscheidet</h3>
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
  <p><code>override</code> sagt nicht nur dem Compiler, sondern auch dir beim Lesen, dass diese Methode bewusst eine Basismethode ersetzen soll. Das macht Vererbungslogik deutlich ruhiger.</p>
</div>

## Nicht alles auf einmal verwechseln

<div class="compare-card">
  <p class="card-kicker">Sauber trennen</p>
  <h3>Ueberschreiben ist die Struktur und virtual ist die spaetere Auswahl</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ueberschreiben</strong>
      <span>Die Unterklasse definiert dieselbe Methode erneut.</span>
    </div>
    <div class="compare-item">
      <strong>virtual</strong>
      <span>Die Methodenwahl darf sich am echten Objekttyp orientieren.</span>
    </div>
  </div>
</div>

## Diese Seite behandelt bewusst die Marker und die Objektlogik

Die noch allgemeinere Frage, wann man von statischem oder dynamischem Binden spricht, wird im naechsten Thema als eigenes Lesemodell ausgefaltet. Hier bleibt der Fokus auf `virtual`, `override` und der konkreten Objektentscheidung.

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

<div class="note-panel">
  <p><strong>Merke:</strong> `virtual` macht Methodenwahl beweglich und `override` macht Absicht sichtbar.</p>
</div>
