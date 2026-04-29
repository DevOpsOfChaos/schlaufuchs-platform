---
title: "curl und wget"
description: "Überblick über Kommandozeilenwerkzeuge zum Abrufen von Webressourcen."
subject: "linux"
section: "Netzwerk"
topicPath: ["curl-und-wget", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Netzwerk"]
draft: false
---
# curl und wget

![Schaubild zu curl und wget.](/schlaufuchs-platform/images/overviews/v150/curl-und-wget.svg)

*Das Schaubild zeigt Abruf, Header, Inhalt und Speicherung als typische Arbeitsschritte.*



`curl` und `wget` sind Werkzeuge, um Daten über Netzwerkprotokolle abzurufen. Beide können HTTP und HTTPS nutzen, unterscheiden sich aber in typischen Stärken. `curl` ist besonders flexibel für APIs und Anfragen, `wget` wird häufig für Downloads und rekursives Abrufen verwendet.

## Einordnung

In Entwicklung, Administration und Fehlersuche sind diese Werkzeuge sehr hilfreich. Sie machen sichtbar, was ein Server antwortet, welche Statuscodes entstehen und wie Downloads oder API-Endpunkte erreichbar sind.

## Zentrale Aspekte

- **HTTP-Anfragen und Header:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Downloads in Dateien:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Statuscodes und Weiterleitungen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Nutzung in Skripten und CI:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

`curl -I` zeigt Antwortheader einer URL. `curl -X POST` kann eine API-Anfrage testen. `wget` eignet sich für einfache Downloads oder das Fortsetzen abgebrochener Übertragungen. Beide Werkzeuge können in Skripten genutzt werden.

## Abgrenzung

Diese Werkzeuge zeigen technische Antworten, ersetzen aber keine vollständige Browserumgebung. JavaScript-Ausführung, Cookies, CORS-Verhalten und Rendering im Browser können zusätzliche Effekte haben.

## Häufige Missverständnisse

Häufig wird nur der sichtbare Inhalt betrachtet und der Statuscode ignoriert. Ein weiterer Fehler ist, sensible Tokens direkt in Shell-History oder Logs zu schreiben. Bei API-Tests sollten Zugangsdaten bewusst geschützt werden.

## Kurz zusammengefasst

- curl und wget helfen beim Abrufen und Prüfen von Webressourcen.
- Header und Statuscodes sind oft wichtiger als der reine Inhalt.
- Zugangsdaten in Befehlen müssen sorgfältig behandelt werden.
