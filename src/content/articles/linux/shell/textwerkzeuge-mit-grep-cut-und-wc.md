---
title: Textwerkzeuge mit grep, cut und wc
description: Nutze einfache Shell-Werkzeuge, um Texte zu durchsuchen, Felder auszulesen und Ausgaben zusammenzufassen.
subject: linux
section: Shell
topicPath:
  - shell
  - textwerkzeuge-mit-grep-cut-und-wc
tags:
  - linux
  - grep
  - cut
  - wc
learningGoals:
  - "Du ordnest grep, cut und wc ihren typischen Aufgaben zu."
  - "Du liest einfache Textanalysen in der Shell fachlich sauber."
  - "Du erkennst, wann Suchen, Herausschneiden oder Zusammenfassen gebraucht wird."
practiceIdeas:
  - "Vergleiche bewusst, ob du nach Zeilen suchst, Felder auswählst oder nur zählst."
  - "Nutze kleine Testdateien statt direkt große Ausgaben."
  - "Beschreibe vor der Ausführung, was der Befehl liefern sollte."
commonMistakes:
  - "Zu glauben, dass alle drei Werkzeuge dasselbe leisten."
  - "grep nur als Suchbegriff statt als Zeilenfilter zu verstehen."
  - "cut ohne sauberen Trenner zu verwenden."
keyTakeaways:
  - "grep filtert Zeilen nach Mustern."
  - "cut wählt Teile von Zeilen oder Feldern aus."
  - "wc fasst Ausgaben in Zählwerten zusammen."
recognizeSignals:
  - "Es geht um Dateiausgaben, Textzeilen, Suchmuster, Spalten oder Zählwerte."
  - "Du sollst entscheiden, welches Werkzeug zu einer Analyseaufgabe passt."
  - "Ein Beispiel fragt nach Filtern, Extrahieren oder Zählen."
selfCheckPoints:
  - "Kann ich grep, cut und wc funktional unterscheiden?"
  - "Kann ich erklären, welches Werkzeug für welche Aufgabe passt?"
  - "Kann ich den erwarteten Output grob vorhersagen?"
level: einfach
draft: false
---

## Warum diese Werkzeuge zusammenpassen

Viele Shell-Aufgaben bestehen nicht darin, große Programme zu schreiben, sondern Ausgaben gezielt zu lesen und weiterzuverarbeiten. Genau dafür sind kleine Textwerkzeuge nützlich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Aus einer Liste nur das Relevante holen</h3>
  <p>Mit <code>grep</code> findest du nur die Zeilen, die ein Muster enthalten. Mit <code>cut</code> liest du daraus gezielt Felder aus. Mit <code>wc</code> kannst du anschließend zusammenfassen, wie viele Zeilen oder Wörter übrig geblieben sind.</p>
</div>

## grep

<code>grep</code> durchsucht Text nach einem Muster. Praktisch betrachtet filtert es meist Zeilen.

Das ist hilfreich, wenn du aus einer längeren Ausgabe nur die Zeilen brauchst, die ein bestimmtes Wort oder Zeichenmuster enthalten.

## cut

<code>cut</code> schneidet aus Zeilen bestimmte Teile heraus. Besonders nützlich ist das bei klar getrennten Feldern, zum Beispiel bei Doppelpunkten oder Kommas.

## wc

<code>wc</code> zählt Zeilen, Wörter oder Zeichen. Damit wird aus einer großen Ausgabe eine kleine Zusammenfassung.

## Warum diese Werkzeuge nicht austauschbar sind

- <code>grep</code> sucht und filtert,
- <code>cut</code> extrahiert,
- <code>wc</code> zählt.

Wer diese Rollen sauber trennt, liest Shell-Zeilen viel ruhiger.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So wählst du das passende Werkzeug</h3>
  <ul>
    <li>Frage zuerst: Suche ich Zeilen, Felder oder Zählwerte?</li>
    <li>Prüfe danach, welches Werkzeug genau diese Aufgabe erfüllt.</li>
    <li>Kombiniere die Werkzeuge erst, wenn die Einzelrollen klar sind.</li>
  </ul>
</div>
