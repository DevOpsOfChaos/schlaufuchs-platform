---
title: POST-Formularfelder und $_POST-Zugriffe richtig zuordnen
description: Ordne name-Attribute in Formularen den passenden serverseitigen $_POST-Zugriffen zu.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - post-formulardaten-aus-name-attributen-lesen
  - post-formularfelder-und-post-zugriffe-richtig-zuordnen
taskId: INF-PHP-REQUEST-003
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
hintPoints:
  - "Achte genau auf Namen, Werte und Quelle der Daten."
  - "Frage zuerst, welcher Schlüssel auf dem Server entsteht."
selfCheckPoints:
  - "Habe ich die zentrale Unterscheidung der Aufgabe sauber benannt?"
  - "Habe ich meinen Ablauf oder Vergleich nachvollziehbar begründet?"
transferIdeas:
  - "Übertrage die Denkweise auf einen ähnlichen kleinen PHP-Ausschnitt."
  - "Formuliere die Logik zusätzlich in einem eigenen Mini-Beispiel."
reflectionPrompt: "Welche fachliche Trennung war hier am wichtigsten?"
---

## Aufgabe 1: Namen lesen

Ein Formular enthält Felder mit:

- <code>name="email"</code>
- <code>name="stadt"</code>

Welche zwei Schlüssel erwartest du serverseitig in <code>$_POST</code>?

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: „Die sichtbare Beschriftung eines Felds ist automatisch der PHP-Schlüssel.“ Erkläre den Fehler.

## Aufgabe 3: Kurz begründen

Warum ist ein passendes <code>name</code>-Attribut für die Übertragung so wichtig?
