---
title: Textwerte und Zeichenketten begründen
description: Begründe bei kleinen Beispielen, wann ein einzelnes Zeichen und wann ein ganzer String nötig ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - typen-und-texte
  - zeichenketten-mit-std-string-verstehen
  - textwerte-und-zeichenketten-begruenden
taskId: INF-PROG-CPP-STRING-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - string
hintPoints:
  - "Ein einzelnes Zeichen ist noch kein ganzer Text."
  - "Frage bei jedem Beispiel: Brauche ich einen Buchstaben oder ein ganzes Wort?"
selfCheckPoints:
  - "Sind char und string nicht verwechselt?"
  - "Wird die Typwahl mit der Art des Textes begründet?"
transferIdeas:
  - "Übertrage die Entscheidung auf Dateinamen, Städtenamen oder Befehleingaben."
reflectionPrompt: "Warum ist für viele Texteingaben ein einzelnes Zeichen als Modell zu klein?"
---

## Aufgabe 1: Typen zuordnen

Ordne begründet zu:

- Anfangsbuchstabe eines Namens
- vollständiger Benutzername
- Ja/Nein als einzelnes Zeichen <code>J</code> oder <code>N</code>
- Stadtname

Wo passt eher <code>char</code>, wo eher <code>std::string</code>?

## Aufgabe 2: Unterschied erklären

Erkläre in eigenen Worten den Unterschied zwischen einem Zeichen wie <code>'A'</code> und einem Text wie <code>"Anna"</code>.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Für einen Namen reicht doch ein <code>char</code>, schließlich besteht er auch nur aus Buchstaben."

Erkläre, warum das fachlich nicht reicht.
