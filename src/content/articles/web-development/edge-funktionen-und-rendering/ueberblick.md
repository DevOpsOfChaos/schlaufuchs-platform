---
title: "Edge-Funktionen und Rendering"
description: "Edge Rendering führt ausgewählte Serverlogik näher am Nutzer aus, erfordert aber klare Grenzen bei Laufzeit, Daten und Cache."
subject: "web-development"
section: "HTTP, Browser und Webplattform"
topicPath: ["http-browser-und-webplattform", "edge-rendering"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTTP", "Deployment"]
draft: false
---
# Edge-Funktionen und Rendering

Edge Rendering erzeugt oder verändert Antworten auf Servern, die geografisch näher am Nutzer liegen als ein zentrales Backend.

## Einordnung

CDNs und Edge-Plattformen können HTML, Weiterleitungen, Personalisierung oder kleine API-Antworten nahe am Nutzer ausführen. Das kann Latenz reduzieren, bringt aber Einschränkungen bei Laufzeit, Datenzugriff und Debugging.

## Zentrale Begriffe

- Edge-Funktionen laufen verteilt.
- Nähe zum Nutzer kann Antwortzeiten senken.
- Nicht jede Node-API oder Datenbankverbindung ist verfügbar.
- Caching und Personalisierung müssen sorgfältig zusammenpassen.
- Kaltstarts, Laufzeitlimits und Observability unterscheiden sich von klassischen Serverumgebungen.

## Beispiel

Eine Webseite kann an der Edge anhand der Spracheinstellung eine passende Variante auswählen, ohne das zentrale Backend für jede Anfrage zu belasten.

```ts
export function middleware(request: Request) {
  const language = request.headers.get("accept-language") ?? "de";
  return chooseLocalizedResponse(language);
}
```

Das Beispiel passt nur, wenn die Entscheidung ohne transaktionale Datenbanklogik und ohne vertrauliche Geschäftsentscheidung getroffen werden kann.

## Typische Fehler

- Edge als allgemeinen Performance-Schalter behandeln.
- Personalisierte Antworten falsch cachen.
- Datenbankverbindungen oder Node-spezifische APIs voraussetzen, die an der Edge nicht verfügbar sind.
- Fehleranalyse unterschätzen, weil Ausführung verteilt statt zentral passiert.
- Sicherheits- oder Geschäftslogik ohne klare Daten- und Konsistenzgrenzen verlagern.

## Abgrenzung

Edge Rendering ersetzt nicht jedes Backend. Komplexe Geschäftslogik, Transaktionen und zentrale Datenkonsistenz bleiben oft im Ursprungssystem.

## Verwandte Themen

- CDN
- Cache-Control und Browser-Cache
- Server-Side Rendering und Static Site Generation
- Content Negotiation
