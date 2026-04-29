---
title: "Informatik – JSON-Verschachtelung und flache Tabellen abwägen"
description: "Lerne JSON-Verschachtelung und flache Tabellen abwägen als kleines, klar prüfbares Unterthema mit Abgrenzung, Beispiel und Gegenprobe."
subject: "informatik"
section: "Datenmodellierung"
topicPath: ["datenmodellierung", "struktur-und-identitaet", "v110-teil-4", "json-verschachtelung-und-flache-tabellen-abwaegen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Datenmodellierung"]
draft: false
---
## Grundidee

**JSON-Verschachtelung und flache Tabellen abwägen** ist bewusst als enges Unterthema angelegt. Die Seite beantwortet nicht das ganze Kapitel, sondern die kleine fachliche Entscheidung, die in Aufgaben oft den Unterschied macht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine API liefert verschachtelte Daten, die später gefiltert werden sollen.</h3>
  <p>Für diese Situation reicht ein breiter Sammelbegriff nicht aus. Du brauchst eine klare Einordnung, eine Abgrenzung und einen prüfbaren Schritt.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Feinstruktur statt Sammelkapitel</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/informatik-v110-json-verschachtelung-und-flache-tabellen-abwaegen.svg" alt="Lernillustration zu JSON-Verschachtelung und flache Tabellen abwägen." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich klingende Dinge sauber trennen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Naheliegender Fehler</strong><span>JSON-Struktur wird direkt mit guter Datenbankstruktur verwechselt.</span></div>
    <div class="compare-item"><strong>Prüfschritt</strong><span>Frage, ob Lesen, Filtern oder Aktualisieren wichtiger ist.</span></div>
  </div>
</div>

## Mini-Demo

```text
Datenmodell → Regel → Testfall → Randfall
```

Die Mini-Demo ist kurz gehalten, damit die Trennkante sichtbar bleibt. Sie ist kein Ersatz für das ganze Kapitel, sondern der Anker für diese eine Entscheidung.

## Vier-Fragen-Raster

<div class="step-grid">
  <div class="step-item"><strong>1. Was ist gegeben?</strong><span>Beschreibe die Situation ohne Fachwortnebel.</span></div>
  <div class="step-item"><strong>2. Was wird oft verwechselt?</strong><span>Benenne das Nachbarthema ausdrücklich.</span></div>
  <div class="step-item"><strong>3. Was prüft die Entscheidung?</strong><span>Nutze eine Rechnung, Messung, Beobachtung oder Codeprüfung.</span></div>
  <div class="step-item"><strong>4. Was wäre anders?</strong><span>Baue eine Gegenprobe mit geändertem Kontext.</span></div>
</div>

## Strukturhinweis

Diese Seite liegt in einem kleinen Unterthemenpfad. Dadurch bleibt der Fachbereich auffindbar: Lernende suchen nicht in einem riesigen Sammelthema, sondern landen bei einer konkreten Trennkante.

<div class="note-panel"><p><strong>Merke:</strong> Gute Struktur heißt nicht mehr Ordner um der Ordner willen. Sie heißt: Jede Seite beantwortet eine erkennbare Frage und passt zu genau einer Aufgabe.</p></div>
