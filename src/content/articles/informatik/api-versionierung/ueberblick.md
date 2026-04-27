---
title: "API-Versionierung"
description: "Allgemeiner Überblick über API-Versionierung und den Umgang mit veränderlichen Schnittstellen."
subject: "informatik"
section: "Schnittstellen"
topicPath:
  - "api-versionierung"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig werden kleine Änderungen als harmlos betrachtet. Für externe Nutzer kann auch eine veränderte Fehlermeldung oder Sortierung relevant sein."
keyTakeaways:
  - "API-Versionierung schützt Nutzer vor überraschenden Brüchen. Sie verlangt klare Kompatibilitätsregeln und gute Kommunikation."
  - "Versionierung löst keine schlechte Schnittstellengestaltung. Zu viele Versionen können Wartung und Support erschweren."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "informatik"
  - "api"
  - "versionierung"
  - "schnittstellen"
draft: false
---

# API-Versionierung

![Schaubild zu API-Versionierung.](/schlaufuchs-platform/images/overviews/v149/api-versionierung.svg)

*Das Schaubild ordnet Weiterentwicklung, Kompatibilität und Clients ein.*



API-Versionierung beschreibt Strategien, mit denen Änderungen an Schnittstellen nachvollziehbar und kompatibel eingeführt werden.

Schnittstellen werden von anderen Programmen genutzt. Änderungen können deshalb nicht nur intern betrachtet werden, sondern betreffen abhängige Systeme.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Abwärtskompatible Änderungen können bestehende Clients weiter funktionieren lassen.
- Brechende Änderungen brauchen Kommunikation, Übergangszeit oder neue Versionen.
- Versionierung kann über URL, Header, Paketversion oder Schema erfolgen.

## Abgrenzung

Versionierung löst keine schlechte Schnittstellengestaltung. Zu viele Versionen können Wartung und Support erschweren.

## Beispiele

- Ein neues optionales Feld ist meist weniger kritisch als das Entfernen eines bestehenden Feldes.
- Eine öffentliche API kann alte Versionen zeitlich begrenzt weiterbetreiben.

## Häufiges Missverständnis

Häufig werden kleine Änderungen als harmlos betrachtet. Für externe Nutzer kann auch eine veränderte Fehlermeldung oder Sortierung relevant sein.

## Kurz zusammengefasst

API-Versionierung schützt Nutzer vor überraschenden Brüchen. Sie verlangt klare Kompatibilitätsregeln und gute Kommunikation.
