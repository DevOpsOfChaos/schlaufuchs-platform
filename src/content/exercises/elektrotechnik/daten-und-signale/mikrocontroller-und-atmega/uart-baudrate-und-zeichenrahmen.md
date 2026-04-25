---
title: "UART-Fehlerbilder über Baudrate und Rahmen erklären"
description: "Übe, UART-Probleme als Zusammenspiel aus Zeit, Rahmen und Verdrahtung zu lesen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-baudrate-und-zeichenrahmen
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-uart-baudrate-rahmen"
tags:
  - elektrotechnik
  - mikrocontroller
  - uart
  - baudrate
  - debugging
hintPoints:
  - "Beginne mit Baudrate, Datenbits, Parität und Stoppbits."
  - "Denke bei Verdrahtung immer an TX, RX und GND."
  - "Wirre Zeichen passen häufig zu falscher Baudrate oder falschem Rahmen."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: einfach
draft: false
---


## Aufgabe 1: Fehlerbild deuten

Ein ATmega sendet Text über UART. Im Terminal erscheinen aber nur unlesbare Sonderzeichen. Nenne drei mögliche Ursachen.

## Aufgabe 2: Verbindung prüfen

Beschreibe, wie TX, RX und GND zwischen ATmega und USB-UART-Adapter verbunden werden sollten.

## Aufgabe 3: Zeichenrahmen erklären

Erkläre, warum ein UART-Zeichen durch Startbit und Stoppbit eingerahmt wird.
