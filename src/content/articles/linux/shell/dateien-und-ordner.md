---
title: Dateien und Ordner im Terminal
description: Verstehe, wie du dich durch Verzeichnisse bewegst und Inhalte im Terminal sauber liest.
subject: linux
section: shell
topicPath:
- shell
- dateien-und-ordner
learningGoals:
- Du bewegst dich sicher zwischen Verzeichnissen.
- Du liest Dateinamen, Pfade und Ordnerstrukturen bewusster.
- Du verstehst den Zusammenhang zwischen aktuellem Ort und ausgeführten Befehlen.
practiceIdeas:
- Nutze pwd, ls, cd und tree in der Lernshell nacheinander.
- Wechsle bewusst in Unterordner und wieder zurück.
- Lies Dateistrukturen mit tree oder find statt nur einzelne Namen anzusehen.
commonMistakes:
- Den aktuellen Pfad nicht zu prüfen.
- Relative und absolute Pfade zu verwechseln.
- Im falschen Verzeichnis zu arbeiten.
keyTakeaways:
- Dein aktueller Ort bestimmt, worauf sich viele Befehle beziehen.
- Pfade sind keine Nebensache, sondern Grundlage der Orientierung.
- Struktur lesen ist wichtiger als blind klicken oder raten.
tags:
- linux
- shell
- dateien
- ordner
- pfade
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Dateien und Ordner im Terminal direkt oder greift eng benachbarte Begriffe aus shell auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich bewegst dich sicher zwischen Verzeichnissen?
- Kann ich liest Dateinamen, Pfade und Ordnerstrukturen bewusster?
- Kann ich verstehst den Zusammenhang zwischen aktuellem Ort und ausgeführten Befehlen?
---

## Orientierung beginnt mit dem aktuellen Verzeichnis

Im Terminal ist dein aktueller Ort entscheidend. Viele Befehle beziehen sich auf genau dieses Verzeichnis. Deshalb ist <code>pwd</code> oft der erste sinnvolle Schritt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vom Homeverzeichnis in einen Unterordner</h3>
  <p>Mit <code>pwd</code> prüfst du deinen Startpunkt, mit <code>ls</code> den Inhalt und mit <code>cd dokumente</code> wechselst du bewusst in einen Unterordner. Danach prüfst du erneut, ob du wirklich dort bist.</p>
</div>

## Wichtige Grundbefehle

<div class="comparison-grid">
  <section>
    <p class="card-kicker">pwd</p>
    <h3>Wo bin ich gerade?</h3>
    <p>Zeigt den aktuellen Pfad. Gut, bevor du überhaupt weiterarbeitest.</p>
    <div class="command-strip"><code>pwd</code></div>
  </section>
  <section>
    <p class="card-kicker">ls</p>
    <h3>Was liegt hier?</h3>
    <p>Listet Inhalte auf. Hilfreich, um den aktuellen Ort besser zu lesen.</p>
    <div class="command-strip"><code>ls</code></div>
  </section>
  <section>
    <p class="card-kicker">cd</p>
    <h3>Wohin will ich wechseln?</h3>
    <p>Ändert den aktuellen Ort. Danach beziehen sich viele Befehle auf den neuen Kontext.</p>
    <div class="command-strip"><code>cd dokumente</code></div>
  </section>
</div>

## Struktur statt Einzelnamen lesen

Ein häufiger Anfängerfehler ist, nur auf einen Dateinamen zu schauen. Besser ist es, eine Struktur zu lesen:

<div class="figure-card">
  <p class="card-kicker">Orientierungsbild</p>
  <h3>So entsteht ein klares Bild vom Verzeichnis</h3>
  <div class="signal-flow compact">
    <div><strong>pwd</strong><span>aktuellen Ort prüfen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>ls oder tree</strong><span>Inhalte und Struktur lesen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>cd</strong><span>bewusst den Ort ändern</span></div>
  </div>
</div>

Gerade mit <code>tree</code> oder <code>find</code> wird sichtbar, dass Dateien nicht isoliert existieren, sondern in einer geordneten Umgebung liegen.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Den Pfad und die Struktur mitdenken</h3>
    <p>Du prüfst erst den aktuellen Ort und liest dann, wie Dateien und Ordner zusammenhängen.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur auf Namen reagieren</h3>
    <p>Wenn du nur einzelne Dateinamen ansiehst, übersiehst du leicht Verzeichniswechsel, Ebenen und den eigentlichen Kontext.</p>
  </section>
</div>

## Relative und absolute Pfade

Ein Pfad kann relativ oder absolut sein. Relativ bedeutet: vom aktuellen Ort aus gedacht. Absolut bedeutet: vom Wurzelverzeichnis aus gedacht.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Relativ</p>
    <h3>Vom aktuellen Ort aus</h3>
    <p>Passt gut, wenn du deinen Arbeitsort kennst und bewusst von dort weitergehst.</p>
    <div class="command-strip"><code>cd dokumente/projekt</code></div>
  </section>
  <section>
    <p class="card-kicker">Absolut</p>
    <h3>Vom Wurzelverzeichnis aus</h3>
    <p>Hilft, wenn du einen eindeutigen, ortsunabhängigen Pfad nennen willst.</p>
    <div class="command-strip"><code>cd /home/fox/dokumente/projekt</code></div>
  </section>
</div>

## Anwendungen

Sobald du Dateien bearbeitest, kopierst, verschiebst oder suchst, brauchst du diese Orientierung ständig. Sie ist Grundlage für fast jede weitere Linux-Arbeit.

<div class="note-panel">
  <p><strong>Merke:</strong> Im Terminal ist Orientierung keine Vorstufe, sondern Teil der eigentlichen Arbeit. Wer den Ort nicht sauber liest, versteht auch die Wirkung vieler Befehle nicht richtig.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So arbeitest du mit Dateien und Ordnern ruhiger</h3>
  <ol>
    <li>Prüfe zuerst mit <code>pwd</code>, wo du wirklich bist.</li>
    <li>Lies danach mit <code>ls</code> oder <code>tree</code>, was an diesem Ort vorhanden ist.</li>
    <li>Wechsle erst dann mit <code>cd</code> weiter und kontrolliere den neuen Ort erneut.</li>
  </ol>
</div>
