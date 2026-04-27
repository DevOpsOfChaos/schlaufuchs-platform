---
title: "HTTP-Statuscodes"
description: "Einordnung von HTTP-Statuscodes als Rückmeldungen eines Servers."
subject: web-development
section: "HTTP"
topicPath:
  - "http-statuscodes"
  - "ueberblick"
learningGoals:
  - "Du kannst HTTP-Statuscodes als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, jede Fehlersituation mit `200 OK` und einer Fehlermeldung im Inhalt zu beantworten."
keyTakeaways:
  - "Statuscodes sind Teil der technischen Bedeutung einer Antwort."
  - "Passende Codes machen Anwendungen robuster und besser beobachtbar."
  - "Inhalt und Status müssen zusammenpassen."
recognizeSignals:
  - "Es geht um HTTP-Statuscodes als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich HTTP-Statuscodes in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web development"
  - "http"
  - "statuscode"
draft: false
---

# HTTP-Statuscodes

HTTP-Statuscodes sind dreistellige Rückmeldungen, mit denen ein Server das Ergebnis einer Anfrage beschreibt. Sie zeigen, ob eine Anfrage erfolgreich war, weitergeleitet wurde, fehlerhaft war oder serverseitig nicht verarbeitet werden konnte.

## Einordnung

Statuscodes sind ein wichtiger Teil robuster Webentwicklung. Sie beeinflussen Browser-Verhalten, Caching, Suchmaschinen, Fehlermeldungen und API-Clients. Eine Anwendung sollte nicht nur HTML oder JSON zurückgeben, sondern auch den passenden Status.

## Zentrale Aspekte

- **2xx für Erfolg:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **3xx für Weiterleitungen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **4xx für Clientfehler:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **5xx für Serverfehler:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

`200 OK` bedeutet erfolgreichen Abruf. `404 Not Found` zeigt, dass die angefragte Ressource nicht gefunden wurde. `401 Unauthorized` und `403 Forbidden` unterscheiden fehlende Anmeldung von fehlender Berechtigung. `500 Internal Server Error` weist auf ein Problem auf Serverseite hin.

## Abgrenzung

Statuscodes ersetzen keine verständlichen Fehlermeldungen. Ein API-Client braucht oft zusätzlich eine strukturierte Fehlerantwort. Für Benutzer sollte eine Fehlerseite erklären, was passiert ist und wie es weitergehen kann.

## Häufige Missverständnisse

Ein häufiger Fehler ist, jede Fehlersituation mit `200 OK` und einer Fehlermeldung im Inhalt zu beantworten. Dadurch können Clients, Caches und Monitoring-Systeme Fehler nicht zuverlässig erkennen. Ebenso problematisch ist ein falscher Einsatz von `404`, wenn eigentlich eine Berechtigung fehlt.

## Kurz zusammengefasst

- Statuscodes sind Teil der technischen Bedeutung einer Antwort.
- Passende Codes machen Anwendungen robuster und besser beobachtbar.
- Inhalt und Status müssen zusammenpassen.
