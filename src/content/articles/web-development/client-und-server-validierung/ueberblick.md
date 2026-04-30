---
title: "Client- und Servervalidierung"
description: "Clientvalidierung liefert schnelles Feedback im Browser; Servervalidierung ist die verbindliche Prüfung vor Verarbeitung und Speicherung."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formular-validierung", "client-und-server-validierung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML", "Formulare"]
draft: false
---
# Client- und Servervalidierung

Client- und Servervalidierung prüfen Eingaben an unterschiedlichen Stellen. Der Browser kann früh Rückmeldung geben. Der Server entscheidet verbindlich, ob Daten akzeptiert, gespeichert oder abgelehnt werden.

## Einordnung

Formulare sind eine Schnittstelle zwischen Nutzeroberfläche und Anwendung. Alles, was vom Client kommt, kann manipuliert, unvollständig oder veraltet sein. Deshalb ist Clientvalidierung eine Bedienhilfe, aber keine Sicherheits- oder Integritätsgrenze.

## Zentrale Begriffe

- **Clientvalidierung:** Prüfung im Browser, etwa durch HTML-Attribute oder JavaScript.
- **Servervalidierung:** Prüfung nach Eingang des Requests im Backend.
- **Geschäftsregel:** fachliche Bedingung, die der Server durchsetzen muss.
- **Fehlermeldung:** Rückmeldung, die Regelverletzung und Korrekturmöglichkeit verständlich macht.

## Mechanismus

```html
<input name="email" type="email" required />
```

Der Browser kann fehlende oder formal falsche Eingaben melden. Der Server muss trotzdem prüfen, ob die E-Mail-Adresse erlaubt, eindeutig und im konkreten Prozess gültig ist.

```ts
if (!isAllowedEmail(input.email)) {
  return { status: 400, field: "email", message: "Diese E-Mail-Adresse kann nicht verwendet werden." };
}
```

## Typische Fehler

- JavaScript-Prüfungen als Sicherheitsmaßnahme behandeln.
- Serverregeln nicht mit Formularfeedback synchron halten.
- Nur technische Fehlermeldungen wie "invalid input" ausgeben.
- Berechtigungen, Duplikate oder Geschäftsregeln im Browser prüfen wollen.
- Unterschiedliche Regeln auf Client und Server pflegen.

## Abgrenzung

Clientvalidierung verbessert Geschwindigkeit und Bedienbarkeit. Servervalidierung schützt Datenqualität, Berechtigungen und fachliche Regeln. Beide Ebenen haben unterschiedliche Aufgaben und dürfen nicht gegeneinander ausgespielt werden.

## Verwandte Themen

- Formularlabels und Fehlermeldungen
- Accessible Error Messages
- API-Fehlerformate
- Authentifizierung und Autorisierung
