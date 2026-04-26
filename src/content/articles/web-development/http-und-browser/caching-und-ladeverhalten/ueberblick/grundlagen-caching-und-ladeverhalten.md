---
title: "Grundlagen: Caching und Ladeverhalten"
description: "Allgemeiner Überblick über Browser-Cache, erneute Anfragen, Ladezeit und typische Aktualisierungsprobleme im Web."
subject: web-development
section: "HTTP und Browser"
topicPath:
  - http-und-browser
  - caching-und-ladeverhalten
  - grundlagen-caching-und-ladeverhalten
learningGoals:
  - "Du erklärst Caching als Wiederverwendung bereits geladener Ressourcen."
  - "Du beschreibst den Zusammenhang zwischen Cache und Ladezeit."
  - "Du ordnest Aktualisierungsprobleme als Folge von Speicher- und Gültigkeitsregeln ein."
practiceIdeas: []
commonMistakes:
  - "Den Cache nur als Fehlerquelle zu sehen."
  - "Jede Aktualisierung sofort im Browser zu erwarten."
  - "Caching und dauerhafte Datenspeicherung zu verwechseln."
keyTakeaways:
  - "Caching kann Ladezeiten stark verkürzen."
  - "HTTP-Header und Dateiversionen beeinflussen, wann Ressourcen neu geladen werden."
  - "Aktualisierungsprobleme entstehen oft durch alte gecachte Dateien."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "webentwicklung"
  - "browser"
  - "cache"
  - "performance"
  - "http"
draft: false
---

## Begriff

**Caching** bedeutet, dass bereits geladene Ressourcen zwischengespeichert und später wiederverwendet werden. Ein Browser kann Bilder, CSS-Dateien, JavaScript-Dateien oder andere Ressourcen aus dem Cache laden, statt sie erneut vollständig vom Server anzufordern.

Caching ist ein grundlegender Mechanismus des Webs. Es verbessert Ladezeiten, reduziert Datenverkehr und entlastet Server.

## Browser-Cache

Der Browser-Cache speichert Ressourcen lokal. Beim nächsten Seitenaufruf prüft der Browser, ob eine Ressource wiederverwendet werden darf oder neu angefragt werden muss. Diese Entscheidung hängt von HTTP-Headern, Ablaufzeiten, Validierung und Dateinamen ab.

Für Benutzer wirkt Caching oft unsichtbar. Eine Seite lädt schneller, weil nicht alles erneut übertragen wird.

## Ladeverhalten

Das Ladeverhalten einer Webseite hängt davon ab, welche Ressourcen kritisch sind, wie groß sie sind und ob sie aus dem Cache kommen. CSS kann das erste sichtbare Layout beeinflussen. JavaScript kann Interaktion verzögern. Bilder können große Datenmengen verursachen.

## Aktualisierungsprobleme

Ein typisches Problem ist, dass eine geänderte Datei im Browser noch alt erscheint. Dann verwendet der Browser möglicherweise eine gecachte Version. Moderne Build-Systeme lösen das oft durch Dateinamen mit Hashes. Ändert sich der Inhalt, ändert sich der Dateiname, und der Browser lädt neu.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln DevTools, Netzwerkansicht, Cache-Control oder Build-Assets im Detail. Diese Überblicksseite erklärt den allgemeinen Rahmen: Caching ist kontrollierte Wiederverwendung von Ressourcen und beeinflusst Ladezeit sowie Aktualisierung.

<div class="note-panel">
  <p><strong>Merke:</strong> Cache ist nicht nur ein Problem beim Entwickeln, sondern ein zentrales Werkzeug für schnelle Webseiten.</p>
</div>
