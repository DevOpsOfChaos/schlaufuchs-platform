---
title: "JavaScript – Fehlerzustände in der Oberfläche verständlich machen"
description: "Fehlerzustände in Weboberflächen müssen technisch abgefangen und als verständliche UI-Rückmeldung dargestellt werden."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "robustheit-und-fehler", "fehlerzustaende-in-der-oberflaeche-verstaendlich-machen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "JavaScript"]
draft: false
---
## Grundidee

Ein Fehlerzustand ist ein definierter Zustand der Oberfläche. JavaScript muss technische Fehler abfangen, fachlich einordnen und so darstellen, dass Nutzende wissen, was passiert ist und welcher nächste Schritt möglich ist.

## Einordnung

Oberflächen haben nicht nur Erfolgszustände. Laden, leerer Inhalt, fehlende Berechtigung, Validierungsfehler und technische Ausfälle müssen jeweils als eigene Zustände behandelt werden. Eine Konsolenausgabe reicht dafür nicht aus.

## Zentrale Begriffe

- **Fehlerquelle:** Netzwerk, Serverantwort, Validierung, Berechtigung oder unerwarteter Codepfad.
- **UI-Zustand:** sichtbarer Zustand der Oberfläche, etwa `loading`, `error`, `empty` oder `success`.
- **Recovery:** nächster sinnvoller Schritt, zum Beispiel erneut versuchen oder Eingabe korrigieren.
- **Fehlerdetail:** technische Information für Logs, nicht automatisch für die Oberfläche.

## Beispiel

```js
try {
  await saveSettings();
  showStatus("Gespeichert.");
} catch (error) {
  console.error(error);
  showError("Speichern nicht möglich. Bitte später erneut versuchen.");
}
```

Der technische Fehler wird geloggt. Die Oberfläche zeigt eine knappe, handlungsfähige Meldung. Stacktraces, interne Pfade oder rohe Serverobjekte gehören nicht in die sichtbare Nutzermeldung.

## Typische Fehler

- Fehler nur in der Konsole ausgeben.
- Button oder Formular nach einem Fehler in einem blockierten Zustand lassen.
- Technische Details ungefiltert anzeigen.
- Netzwerkfehler und Validierungsfehler gleich behandeln.
- Keine Wiederholungs- oder Korrekturmöglichkeit anbieten.

## Abgrenzung

Fehlerzustände sind nicht dasselbe wie Exception Handling im Code. Exception Handling fängt technische Fehler ab. UI-Fehlerzustände übersetzen sie in sichtbare, bedienbare Zustände.

## Verwandte Themen

- Fetch-Status und Netzwerkfehler
- Accessible Error Messages
- Ladezustände und Empty States
- Defensive DOM-Zugriffe
