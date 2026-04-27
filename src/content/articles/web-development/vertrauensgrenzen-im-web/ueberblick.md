---
title: "Vertrauensgrenzen im Web"
description: "Überblick über Vertrauensgrenzen zwischen Browser, Server, APIs, Nutzereingaben und externen Diensten."
subject: web-development
section: "Sicherheit"
topicPath:
  - "vertrauensgrenzen-im-web"
learningGoals:
  - "Du verstehst, warum Websysteme in Vertrauenszonen gedacht werden."
  - "Du erkennst Eingaben, Cookies, Tokens und externe APIs als Grenzstellen."
  - "Du kannst Sicherheitsmaßnahmen als Schutz an Vertrauensgrenzen einordnen."
practiceIdeas: []
commonMistakes:
  - "Clientseitige Prüfungen als alleinige Sicherheit zu betrachten."
  - "Alle Daten aus dem eigenen Frontend automatisch zu vertrauen."
keyTakeaways:
  - "Vertrauensgrenzen markieren Übergänge, an denen Daten geprüft werden müssen."
  - "Der Server darf dem Browser nicht blind vertrauen."
recognizeSignals:
  - "Es geht um Authentifizierung, Eingaben, API, Cookies, Tokens oder externe Dienste."
selfCheckPoints:
  - "Kann ich erklären, warum eine Formularprüfung im Browser keine Serverprüfung ersetzt?"
level: einfach
tags:
  - "web-development"
  - "sicherheit"
  - "vertrauensgrenzen"
  - "api"
draft: false
---
# Vertrauensgrenzen im Web

Webanwendungen bestehen aus mehreren Bereichen mit unterschiedlichem Vertrauen: Browser, Server, Datenbank, externe APIs, Nutzergeräte und manchmal Drittanbieter-Skripte. Eine Vertrauensgrenze liegt dort, wo Daten aus einem weniger kontrollierten Bereich in einen stärker geschützten Bereich gelangen.

![Vertrauensgrenzen zwischen Browser, Server, Datenbank und externem Dienst.](/schlaufuchs-platform/images/overviews/v146/vertrauensgrenzen-im-web.svg)

*Vertrauensgrenzen zwischen Browser, Server, Datenbank und externem Dienst.*

## Grundidee

Der Browser ist wichtig für Bedienung und Darstellung, aber aus Sicht des Servers nicht vertrauenswürdig. Nutzer können Requests verändern, JavaScript deaktivieren, Tokens kopieren oder versteckte Felder manipulieren. Deshalb müssen Berechtigungen, Eingaben und Geschäftsregeln serverseitig geprüft werden.

## Bedeutung im Zusammenhang

Auch zwischen Serverdiensten gibt es Grenzen. Eine interne API, ein Zahlungsdienst, ein Upload-Service oder ein Authentifizierungsanbieter liefern Daten, die geprüft, begrenzt und protokolliert werden müssen. Sicherheitsmaßnahmen wie Validierung, Escaping, CSRF-Schutz, SameSite-Cookies, Content Security Policy und Berechtigungsprüfungen schützen unterschiedliche Grenzstellen.

## Typische Anwendung

Gute Architektur macht diese Grenzen sichtbar. Sie fragt: Wer darf welche Daten erzeugen? Wer darf sie verändern? Wo werden sie validiert? Welche Annahmen gelten nur innerhalb eines Systems?

## Abgrenzung

Ein häufiger Fehler ist, die Herkunft einer Anfrage mit ihrer Vertrauenswürdigkeit gleichzusetzen. Ein Request an die eigene API kann trotzdem manipuliert sein.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
