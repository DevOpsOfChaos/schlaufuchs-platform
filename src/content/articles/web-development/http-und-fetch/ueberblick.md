---
title: "HTTP und Fetch"
description: "Allgemeiner Überblick über HTTP-Anfragen und die Fetch-Schnittstelle im Browser."
subject: "web-development"
section: "JavaScript"
topicPath: ["http-und-fetch", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "JavaScript"]
draft: false
---
# HTTP und Fetch

![Schaubild zu HTTP und Fetch.](/schlaufuchs-platform/images/overviews/v148/http-und-fetch.svg)

*Das Schaubild zeigt den Grundablauf einer Anfrage vom Browser zum Server und zurück.*


HTTP ist das zentrale Anfrage-Antwort-Protokoll des Webs. Ein Client, zum Beispiel ein Browser, sendet eine Anfrage an einen Server. Der Server antwortet mit Status, Headern und optionalem Inhalt. Webseiten, APIs, Bilder, Stylesheets und Skripte werden über solche Anfragen geladen.

`fetch` ist eine JavaScript-Schnittstelle im Browser, mit der Programme HTTP-Anfragen auslösen können. Sie wird häufig verwendet, um Daten von APIs zu laden, Formulare zu senden oder dynamische Inhalte nachzuladen.

## HTTP-Grundlagen

Eine HTTP-Anfrage besitzt eine Methode. `GET` wird typischerweise zum Abrufen verwendet, `POST` zum Senden neuer Daten, `PUT` oder `PATCH` zum Ändern und `DELETE` zum Entfernen. Header beschreiben Zusatzinformationen wie Inhaltstyp, Sprache oder Authentifizierung. Der Body enthält bei manchen Methoden die eigentlichen Daten.

## Antworten und Statuscodes

Eine Antwort enthält einen Statuscode. Codes im Bereich 200 zeigen Erfolg an. 300er-Codes betreffen Weiterleitungen. 400er-Codes weisen auf Probleme mit der Anfrage hin, etwa fehlende Rechte oder nicht gefundene Ressourcen. 500er-Codes zeigen Serverprobleme an.

## Fetch im Browser

`fetch` liefert ein Promise, das zu einer Response aufgelöst wird, wenn eine Antwort empfangen wurde. Wichtig ist: Ein HTTP-Status wie 404 oder 500 führt nicht automatisch in `catch`. Die Antwort muss geprüft werden, etwa über `response.ok` oder den Statuscode.

## Lade- und Fehlerzustände

Robuste Oberflächen unterscheiden Ladezustand, leere Antwort, fachlichen Fehler, HTTP-Fehler und Netzwerkfehler. Nutzer sollten erkennen, ob Daten geladen werden, ob etwas nicht gefunden wurde oder ob eine Aktion erneut versucht werden kann.

## Häufige Missverständnisse

Ein häufiger Fehler ist, nur den glücklichen Pfad zu behandeln. Netzwerk ist unsicher: Verbindungen können abbrechen, Antworten können langsam sein, Daten können ungültig sein. Ein anderer Fehler ist, alle Fehler gleich darzustellen, obwohl sie unterschiedliche Ursachen haben.

## Kurz zusammengefasst

HTTP verbindet Browser und Server über strukturierte Anfragen und Antworten. Fetch macht diese Kommunikation in JavaScript nutzbar. Gute Webanwendungen behandeln Methoden, Statuscodes, Datenformate und Fehlerzustände bewusst.
