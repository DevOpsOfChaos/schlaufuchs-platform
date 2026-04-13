---
title: Dateirechte mit ls, stat und chmod lesen
description: Verstehe, wie du Dateirechte sichtbar machst, interpretierst und einfache Änderungen in der Shell einordnest.
subject: linux
section: Shell
topicPath:
  - shell
  - dateirechte-mit-ls-stat-und-chmod-lesen
tags:
  - ls
  - stat
  - chmod
  - rechte
learningGoals:
  - "Du erklärst, warum Dateirechte in der Shell wichtig sind."
  - "Du liest einfache Rechteausgaben mit ls -l oder stat sinnvoll."
  - "Du ordnest chmod als Werkzeug zum Ändern von Rechten ein."
practiceIdeas:
  - "Vergleiche mehrere Dateien nach ihren Rechten."
  - "Lies mit stat und ls -l dieselbe Datei aus zwei Blickwinkeln."
  - "Begründe, warum eine Datei eher offen oder eher restriktiv gesetzt sein sollte."
commonMistakes:
  - "Rechte nur auswendig zu lesen statt ihre Wirkung zu deuten."
  - "Dateiinhalt und Zugriffsrechte zu vermischen."
  - "Zu denken, chmod ändere automatisch Inhalt oder Besitzer."
keyTakeaways:
  - "Rechte steuern, wer was mit einer Datei tun darf."
  - "ls -l und stat machen Rechte aus verschiedenen Blickwinkeln sichtbar."
  - "chmod ändert Rechte, nicht den Inhalt der Datei."
recognizeSignals:
  - "Es geht um ls -l, stat, chmod oder die Frage, wer auf etwas zugreifen darf."
  - "Du sollst Rechte lesen, vergleichen oder bewusst einordnen."
  - "Ein Beispiel fragt nach sicherer oder offener Konfiguration."
selfCheckPoints:
  - "Kann ich erklären, warum Rechte von Dateiinhalten getrennt gedacht werden?"
  - "Kann ich ls -l und stat als Prüfwerkzeuge einordnen?"
  - "Kann ich chmod als Rechteänderung und nicht als Inhaltsänderung beschreiben?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

In Linux geht es bei Dateien nicht nur darum, **was** in ihnen steht, sondern auch darum, **wer** damit etwas tun darf. Genau dafür gibt es Dateirechte.
