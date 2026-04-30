---
title: "CORS und Same-Origin"
description: "Allgemeiner Überblick über Same-Origin-Policy, CORS und sichere Browser-Zugriffe auf externe Ressourcen."
subject: "web-development"
section: "Web-Plattform"
topicPath: ["cors-und-same-origin", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Web-Plattform"]
draft: false
---
# CORS und Same-Origin

![Schaubild zu CORS und Same-Origin.](/schlaufuchs-platform/images/overviews/v149/cors-und-same-origin.svg)

*Das Schaubild zeigt Ursprung, Fremdherkunft und Freigaberegeln.*


Die Same-Origin-Policy ist eine Sicherheitsregel im Browser. Sie beschränkt, wie Webseiten auf Inhalte anderer Herkunft zugreifen dürfen. CORS ist ein Mechanismus, mit dem Server bestimmte Zugriffe ausdrücklich erlauben können.

## Bedeutung

Diese Regeln schützen Nutzerinnen und Nutzer vor vielen ungewollten Zugriffen zwischen Webseiten. Gleichzeitig beeinflussen sie, wie Webanwendungen mit APIs, Dateien und externen Diensten kommunizieren.

## Typische Teilaspekte

- **Origin:** Eine Origin besteht aus Schema, Host und Port.
- **Browserregel:** Der Browser erzwingt die Einschränkung; der Server definiert erlaubte Ausnahmen.
- **Preflight:** Bestimmte Anfragen werden vorab mit einer OPTIONS-Anfrage geprüft.
- **Credentials:** Cookies und Authentifizierungsdaten unterliegen besonders strengen Regeln.

## Beispiel

Eine lokale Webapp kann eine API auf einer anderen Domain nicht einfach beliebig auslesen. Der API-Server muss passende CORS-Header senden.

## Abgrenzung

CORS ist kein Ersatz für echte Zugriffskontrolle. Ein Server muss weiterhin prüfen, wer welche Daten sehen oder ändern darf.

## Häufige Missverständnisse

Häufig wird ein CORS-Fehler als Netzwerkfehler verstanden. Tatsächlich kann die Antwort angekommen sein, aber der Browser gibt sie dem JavaScript-Code nicht frei.

## Einordnung im Gesamtzusammenhang

CORS verbindet Browser-Sicherheit, HTTP, API-Design, Authentifizierung und lokale Entwicklungsumgebungen.
