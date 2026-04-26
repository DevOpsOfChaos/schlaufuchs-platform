---
title: "Grundlagen: Request, Response und Statuscodes"
description: "Allgemeiner Überblick über HTTP-Anfragen, Antworten und Statuscodes im Web."
subject: web-development
section: "HTTP und Browser"
topicPath:
  - http-und-browser
  - request-response-und-statuscodes
  - grundlagen-request-response-und-statuscodes
learningGoals:
  - "Du erklärst HTTP als Anfrage-Antwort-Modell."
  - "Du beschreibst Statuscodes als kurze Ergebnisangaben einer Antwort."
  - "Du unterscheidest URL, Methode, Header und Body grob."
practiceIdeas: []
commonMistakes:
  - "404 als Serverausfall zu deuten."
  - "GET und POST nur nach Formularen zu unterscheiden."
  - "Statuscodes zu ignorieren und nur den sichtbaren Seiteninhalt zu betrachten."
keyTakeaways:
  - "HTTP besteht aus Request und Response."
  - "Statuscodes geben an, wie eine Anfrage beantwortet wurde."
  - "Fehlerdiagnose im Web beginnt oft bei Netzwerk- und Antwortdaten."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - web
  - http
  - request
  - response
  - statuscode
draft: false
---
## Begriff

**HTTP** ist das grundlegende Protokoll für viele Vorgänge im Web. Ein Browser oder Client sendet einen **Request**. Ein Server antwortet mit einer **Response**. Statuscodes fassen das Ergebnis dieser Antwort knapp zusammen.

## Request und Response

Ein Request enthält eine Zieladresse, häufig eine Methode wie `GET` oder `POST`, zusätzliche Header und manchmal einen Body. Die Response enthält einen Statuscode, Header und häufig den eigentlichen Inhalt. Das kann HTML, JSON, ein Bild, eine Datei oder eine Fehlermeldung sein.

## Statuscodes

Statuscodes sind dreistellige Zahlen. `200` steht typischerweise für Erfolg, `404` für nicht gefunden, `500` für einen Serverfehler. Die erste Ziffer gibt die grobe Klasse an, zum Beispiel Erfolg, Umleitung, Clientfehler oder Serverfehler.

## Bedeutung für Webentwicklung

Viele Probleme werden klarer, wenn man nicht nur die sichtbare Seite betrachtet. Entwicklertools zeigen, welche Requests gesendet wurden, welche Antworten kamen und ob Ressourcen blockiert, umgeleitet oder fehlerhaft geladen wurden.

<div class="note-panel">
  <p><strong>Merke:</strong> Das Web arbeitet in vielen Fällen als Gespräch aus Anfrage und Antwort. Statuscodes sind die kurzen Rückmeldungen dieses Gesprächs.</p>
</div>
