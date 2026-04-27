---
title: "Client-Server-Modell"
description: "Allgemeiner Überblick über Clients, Server, Anfragen und Antworten in vernetzten Systemen."
subject: informatik
section: "Netzwerke"
topicPath:
  - "client-server-modell"
  - "ueberblick"
learningGoals:
  - "Du kannst Client-Server-Modell grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Client-Server-Modell nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Client-Server-Modell beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Client-Server-Modell, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Client-Server-Modell in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "informatik"
  - "client-server"
  - "netzwerk"
  - "protokolle"
draft: false
---
# Client-Server-Modell

![Schaubild zum Client-Server-Modell.](/schlaufuchs-platform/images/overviews/v149/client-server-modell.svg)

*Das Schaubild zeigt Anfrage, Dienst und Antwort als Grundmuster.*



Das Client-Server-Modell beschreibt eine Rollenverteilung in vernetzten Systemen. Ein Client stellt eine Anfrage, ein Server stellt einen Dienst bereit und beantwortet die Anfrage.

## Bedeutung

Dieses Modell ist Grundlage vieler Anwendungen: Webseiten, Datenbanken, Dateiübertragung, E-Mail oder APIs. Wichtig ist, dass Client und Server Aufgaben, Zustand und Verantwortung unterschiedlich tragen.

## Typische Teilaspekte

- **Client:** Der Client initiiert Kommunikation und stellt Anforderungen aus Nutzersicht.
- **Server:** Der Server verarbeitet Anfragen und verwaltet Ressourcen oder Dienste.
- **Protokoll:** Ein Protokoll legt fest, wie Anfrage und Antwort aufgebaut sind.
- **Zustand:** Manche Systeme sind zustandsarm, andere speichern Sitzungen oder Kontext.

## Beispiel

Ein Browser ist Client, wenn er eine Webseite über HTTP anfordert. Der Webserver liefert HTML, CSS, JavaScript oder Daten zurück.

## Abgrenzung

Client und Server sind Rollen, keine festen Gerätetypen. Ein Rechner kann in einem Kontext Client und in einem anderen Server sein.

## Häufige Missverständnisse

Häufig wird angenommen, dass der Client vertrauenswürdig ist. Für Sicherheit muss der Server jedoch Eingaben und Berechtigungen selbst prüfen.

## Einordnung im Gesamtzusammenhang

Das Client-Server-Modell verbindet Netzwerke, Webentwicklung, APIs, Sicherheit und Systemarchitektur.
