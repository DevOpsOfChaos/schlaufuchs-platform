---
title: Formular-Validierung und Feedback
description: Verstehe, wie Formulare Eingaben prüfen und wie Hinweise und Rückmeldungen Nutzerinnen und Nutzern helfen.
subject: web-development
section: HTML
topicPath:
  - html
  - formular-validierung
tags:
  - html
  - formular
  - validation
  - feedback
learningGoals:
  - "Du erklärst, warum Validierung schon beim Eingeben hilfreich ist."
  - "Du unterscheidest Label, Hinweis und Fehlermeldung."
  - "Du planst Formularfeedback so, dass Eingaben verständlich korrigiert werden können."
practiceIdeas:
  - "Formuliere zu einem Feld eine klare Beschriftung und eine kurze Hilfe."
  - "Vergleiche einen guten und einen schlechten Fehlerhinweis."
  - "Prüfe, welche Informationen schon vor dem Absenden sichtbar sein sollten."
commonMistakes:
  - "Nur rote Markierungen ohne erklärenden Text zu verwenden."
  - "Platzhalter mit echten Beschriftungen zu verwechseln."
  - "Fehlermeldungen erst sehr spät oder zu unklar zu zeigen."
keyTakeaways:
  - "Validierung hilft, Eingaben früh zu prüfen."
  - "Beschriftung, Hinweis und Fehlermeldung haben unterschiedliche Aufgaben."
  - "Gutes Feedback erklärt, was falsch ist und wie es richtig wird."
recognizeSignals:
  - "Es geht um Formulare, Eingabefelder, required, pattern oder Rückmeldungen."
  - "Du sollst erklären, wie Nutzende durch ein Formular geführt werden."
  - "Ein Beispiel fragt, warum ein Hinweis oder eine Fehlermeldung verständlich sein muss."
selfCheckPoints:
  - "Kann ich Label und Hinweis auseinanderhalten?"
  - "Kann ich eine hilfreiche Fehlermeldung formulieren?"
  - "Kann ich erklären, warum Farbe allein nicht als Feedback reicht?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Ein Formular ist nicht nur eine Sammlung von Feldern. Es ist ein Dialog mit der Person, die etwas eingibt. Genau deshalb sind Validierung und Feedback entscheidend.

## Was Validierung leisten soll

Validierung prüft, ob Eingaben zu den erwarteten Regeln passen. Das kann zum Beispiel bedeuten:

- ein Feld muss ausgefüllt sein,
- eine E-Mail soll ein sinnvolles Format haben,
- oder eine Eingabe darf nur bestimmte Zeichen enthalten.

## Warum gute Hinweise genauso wichtig sind

Wer nur Fehler meldet, hilft oft zu spät. Besser ist es, schon vorher verständliche Hinweise zu geben:

- welche Angaben verlangt werden,
- welches Format erwartet wird,
- und was optional ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Guter Fehlertext statt bloßer Markierung</h3>
  <p>Ein roter Rahmen allein sagt nur, dass etwas nicht stimmt. Ein klarer Hinweis wie „Bitte gib eine E-Mail-Adresse im Format name@example.de ein“ hilft dagegen direkt bei der Korrektur.</p>
</div>

## Label, Hinweis und Fehlermeldung unterscheiden

Diese drei Dinge haben verschiedene Aufgaben:

- **Label**: Was ist dieses Feld?
- **Hinweis**: Was wird erwartet?
- **Fehlermeldung**: Was ist gerade falsch und wie kann es behoben werden?

Gerade diese Trennung macht Formulare verständlicher und zugänglicher.

## Warum Platzhalter kein Ersatz sind

Platzhalter können nützlich sein, aber sie verschwinden oft beim Eingeben. Deshalb ersetzen sie keine echte Beschriftung.

## Woran man gutes Formularfeedback erkennt

Gutes Feedback ist:

1. früh,
2. klar formuliert,
3. nicht nur farblich,
4. und direkt an der Eingabe orientiert.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du das Thema weiterdenken</h3>
  <ul>
    <li>Schreibe für ein Formularfeld jeweils ein Label, einen Hinweis und eine Fehlermeldung.</li>
    <li>Prüfe, ob eine Person ohne Vorwissen das Feld richtig ausfüllen könnte.</li>
    <li>Vergleiche gutes Feedback mit einer unklaren Meldung wie „Ungültige Eingabe“.</li>
  </ul>
</div>
