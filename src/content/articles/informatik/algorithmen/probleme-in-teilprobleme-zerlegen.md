---
title: "Probleme in Teilprobleme zerlegen"
description: "Verstehe, warum komplexe Aufgaben leichter lösbar werden, wenn sie in überschaubare Einzelschritte und Teilprobleme gegliedert werden."
subject: "informatik"
section: "Algorithmen"
topicPath: ["algorithmen", "probleme-in-teilprobleme-zerlegen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Algorithmen"]
draft: false
---
## Warum dieses Thema wichtig ist

Viele Probleme scheitern nicht daran, dass sie unlösbar sind, sondern daran, dass sie **zu groß auf einmal** gedacht werden. Informatik arbeitet deshalb oft so, dass große Aufgaben in kleinere, verständliche Teilaufgaben zerlegt werden.

So entstehen Strukturen, die man besser prüfen, anpassen und später auch automatisieren kann.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Suchfunktion planen</h3>
  <p>Statt nur zu sagen „Baue eine Suche“, kann man die Aufgabe gliedern: Eingabe lesen, Suchbegriff prüfen, passende Daten durchsuchen, Treffer ausgeben. Aus einem großen Ziel werden so mehrere klare Teilprobleme.</p>
</div>

## Vom Gesamtziel zu Teilzielen

Ein gutes Teilproblem ist kleiner als das Gesamtproblem, aber trotzdem sinnvoll. Es sollte so formuliert sein, dass man daran konkret weiterarbeiten kann.

Typische Fragen sind:

- Was muss zuerst klar sein?
- Welche Informationen brauche ich vorher?
- Welche Teilaufgabe kann unabhängig betrachtet werden?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Gesamtziel</p>
    <h3>Was soll am Ende erreicht sein?</h3>
    <p>Das ist die große Aufgabe, zum Beispiel „eine Suche bauen“ oder „Bestellungen sortieren“.</p>
  </section>
  <section>
    <p class="card-kicker">Teilproblem</p>
    <h3>Was ist einzeln lösbar?</h3>
    <p>Ein Teilproblem hat ein eigenes kleines Ziel und bringt das Gesamtproblem einen Schritt weiter.</p>
  </section>
  <section>
    <p class="card-kicker">Zwischenschritt</p>
    <h3>Wie komme ich weiter?</h3>
    <p>Ein Zwischenschritt beschreibt die Reihenfolge oder den Übergang zwischen Teilaufgaben.</p>
  </section>
</div>

## Warum Zerlegung beim Denken hilft

Teilprobleme helfen, weil sie

- Komplexität reduzieren,
- Fehlerquellen sichtbarer machen,
- Abläufe strukturieren,
- und Zusammenarbeit erleichtern.

Wer Probleme gut zerlegt, versteht oft schon einen großen Teil der Lösung, bevor überhaupt programmiert wird.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Vom großen Problem zur bearbeitbaren Struktur</h3>
  <div class="signal-flow compact">
    <div><strong>Gesamtproblem</strong><span>noch zu groß und unklar</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Teilprobleme bilden</strong><span>kleinere Aufgaben finden</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Ablauf ordnen</strong><span>Schritte sinnvoll zusammensetzen</span></div>
  </div>
</div>

## Reihenfolge und Abhängigkeiten

Nicht jedes Teilproblem kann sofort gelöst werden. Manche Schritte bauen auf anderen auf. Darum ist wichtig zu erkennen,

- welche Schritte zuerst kommen,
- welche parallel gedacht werden können,
- und wo Zwischenergebnisse nötig sind.

Das macht aus einer losen Ideenliste einen geordneten Ablauf.

<pre><code>Gesamtziel: Suchfunktion bauen

1. Eingabe lesen
2. Suchbegriff prüfen
3. Daten durchsuchen
4. Treffer sortieren
5. Ergebnis anzeigen</code></pre>

## Gute und schwache Zerlegung

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Teilziele mit klarer Aufgabe</h3>
    <p>Jeder Schritt hat einen eigenen Zweck und bringt das Gesamtziel erkennbar weiter.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur eine lose Punkteliste</h3>
    <p>Wenn Schritte ohne klares Teilziel notiert werden, bleibt der Ablauf unruhig und schwer nachvollziehbar.</p>
  </section>
</div>

## Teilprobleme sind nicht zufällige Unterpunkte

Eine gute Zerlegung besteht nicht nur aus vielen kleinen Stichworten. Sie braucht erkennbare Logik. Teilprobleme sollten

- klar benannt sein,
- ein eigenes Ziel haben,
- und zusammen wieder zum Gesamtziel führen.

## Eine ruhige Denkstrategie

Frage bei einer Aufgabe nacheinander:

1. Was ist das Gesamtziel?
2. Welche kleinere Aufgabe hilft zuerst weiter?
3. Welche Schritte bauen aufeinander auf?
4. Wo muss ich ein Zwischenergebnis sichern?

<div class="note-panel">
  <p><strong>Merke:</strong> Teilprobleme sind nicht einfach „mehr Punkte“. Sie sind bewusst gewählte, einzeln bearbeitbare Bausteine eines größeren Ziels.</p>
</div>

## Warum das auch ohne Programmieren wichtig ist

Algorithmisches Denken beginnt nicht erst mit einer Programmiersprache. Schon beim Planen, Strukturieren und Formulieren zeigt sich, ob ein Problem wirklich verstanden wurde.

Darum ist die Zerlegung in Teilprobleme ein Kernthema für Informatik – und gleichzeitig eine sehr alltagstaugliche Denkweise.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So zerlegst du Probleme ruhiger</h3>
  <ol>
    <li>Formuliere zuerst das Gesamtziel in einem klaren Satz.</li>
    <li>Suche danach nach kleineren Aufgaben, die einzeln bearbeitbar sind.</li>
    <li>Ordne diese Teilprobleme schließlich in eine sinnvolle Reihenfolge.</li>
  </ol>
</div>
