---
title: "Grundlagen: Asynchronität und Promises"
description: "Allgemeiner Überblick über asynchrone Abläufe in JavaScript, Promises, Warten auf Ergebnisse und typische Fehlerquellen."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "asynchronitaet-und-promises", "ueberblick", "grundlagen-asynchronitaet-und-promises"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "JavaScript"]
draft: false
---
## Begriff

**Asynchronität** bedeutet in JavaScript, dass ein Vorgang gestartet wird, dessen Ergebnis erst später verfügbar ist. Typische Beispiele sind Netzwerkanfragen, Timer, Dateizugriffe oder Benutzerinteraktionen. Ein **Promise** beschreibt ein solches zukünftiges Ergebnis.

Asynchroner Code ist wichtig, damit Webseiten während längerer Vorgänge bedienbar bleiben.

## Warum asynchron?

Wenn eine Webseite bei jeder Netzwerkanfrage vollständig warten müsste, würde die Benutzeroberfläche einfrieren. JavaScript kann stattdessen eine Aufgabe anstoßen und später auf das Ergebnis reagieren. Währenddessen bleibt der Browser handlungsfähig.

Das bedeutet aber auch: Der Wert ist nicht sofort da. Code muss mit diesem zeitlichen Abstand umgehen.

## Promises

Ein Promise kann erfüllt werden oder fehlschlagen. Im Erfolgsfall liefert es einen Wert, im Fehlerfall einen Grund. Diese beiden Möglichkeiten müssen beim Programmieren bedacht werden. Ein Promise ist nicht der fertige Wert, sondern ein Objekt, das das zukünftige Ergebnis beschreibt.

## async und await

Mit async und await lässt sich asynchroner Code so schreiben, dass er lesbarer wirkt. await wartet innerhalb einer async-Funktion auf das Ergebnis eines Promises. Trotzdem bleibt der Vorgang asynchron; der Browser wird nicht einfach blockiert wie bei einer klassischen Warteschleife.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln fetch, Fehlerbehandlung, Ladezustände oder konkrete Promise-Ketten. Diese Überblicksseite erklärt den allgemeinen Rahmen: Asynchronität beschreibt zeitversetzte Ergebnisse, und Promises machen diese Ergebnisse programmatisch greifbar.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Promise ist kein fertiger Wert, sondern die Zusage, dass später entweder ein Wert oder ein Fehler vorliegt.</p>
</div>
