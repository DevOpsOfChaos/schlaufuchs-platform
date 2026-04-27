---
title: "Deadlocks"
description: "Allgemeiner Überblick über Deadlocks und blockierte Nebenläufigkeit."
subject: "informatik"
section: "Nebenläufigkeit"
topicPath:
  - "deadlocks"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird nur der Ort betrachtet, an dem ein Programm stehen bleibt. Die Ursache liegt oft früher in der Reihenfolge erworbener Sperren."
keyTakeaways:
  - "Deadlocks sind Blockaden durch gegenseitiges Warten. Vermeidung beginnt bei klaren Ressourcenordnungen und bewusstem Sperrdesign."
  - "Ein langsames Programm ist nicht automatisch in einem Deadlock. Es kann auch rechnen, auf I/O warten oder durch Last verzögert sein."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "fortgeschritten"
tags:
  - "informatik"
  - "deadlock"
  - "nebenläufigkeit"
  - "prozesse"
draft: false
---

# Deadlocks

Ein Deadlock entsteht, wenn mehrere Prozesse oder Threads gegenseitig auf Ressourcen warten und dadurch keiner von ihnen fortfahren kann.

Deadlocks treten in nebenläufigen Programmen, Datenbanken, Betriebssystemen und verteilten Systemen auf, wenn Sperren und Ressourcen nicht sauber geordnet werden.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Mehrere Ressourcen und zyklisches Warten sind typische Bestandteile.
- Feste Sperrreihenfolgen können Deadlocks verhindern.
- Timeouts und Erkennung können blockierte Situationen auflösen oder sichtbar machen.

## Abgrenzung

Ein langsames Programm ist nicht automatisch in einem Deadlock. Es kann auch rechnen, auf I/O warten oder durch Last verzögert sein.

## Beispiele

- Thread A hält Sperre 1 und wartet auf Sperre 2, während Thread B Sperre 2 hält und auf Sperre 1 wartet.
- Zwei Datenbanktransaktionen blockieren sich durch gegensätzliche Zugriffsmuster.

## Häufiges Missverständnis

Häufig wird nur der Ort betrachtet, an dem ein Programm stehen bleibt. Die Ursache liegt oft früher in der Reihenfolge erworbener Sperren.

## Kurz zusammengefasst

Deadlocks sind Blockaden durch gegenseitiges Warten. Vermeidung beginnt bei klaren Ressourcenordnungen und bewusstem Sperrdesign.
