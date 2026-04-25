---
title: "ADC-Messwerte beruhigen und sinnvoll deuten"
description: "Übe, eine schwankende ADC-Messreihe geglättet und passend skaliert zu bewerten."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - adc-messwerte-glaetten-und-skalieren
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-adc-glaetten-skalieren"
tags:
  - elektrotechnik
  - mikrocontroller
  - adc
  - sensoren
  - mittelwert
hintPoints:
  - "Trenne Rohwerte, Mittelwert und spätere Anzeigegröße."
  - "Eine kleine Schwankung um wenige Stufen ist noch kein Beweis für einen defekten Sensor."
  - "Überlege, ob die Anwendung schnell reagieren muss oder eine ruhige Anzeige wichtiger ist."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: mittel
draft: false
---


## Aufgabe 1: Messreihe beurteilen

Ein Sensor liefert diese ADC-Rohwerte:

~~~text
511, 513, 512, 514, 512, 513, 511, 512
~~~

Erkläre, warum diese Folge eher nach einer stabilen Messung mit kleiner Schwankung aussieht.

## Aufgabe 2: Mittelwert nutzen

Bilde einen groben Mittelwert aus den acht Werten. Erkläre danach, warum dieser Wert für eine Anzeige ruhiger wirken kann als jeder Einzelwert.

## Aufgabe 3: Glättung bewerten

Nenne je zwei Vorteile und zwei Nachteile, wenn ein Mikrocontroller für eine Anzeige immer den Mittelwert aus acht ADC-Messungen verwendet.
