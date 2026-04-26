---
title: "Elektrotechnik – Open Collector und Pull-up zusammen denken"
description: "Lerne Open Collector und Pull-up zusammen denken als kleines, klar prüfbares Unterthema mit Abgrenzung, Beispiel und Gegenprobe."
subject: "elektrotechnik"
section: "Digitale Praxis"
topicPath:
  - "digitale-praxis"
  - "pegel-timing-entstoerung"
  - "v110-teil-4"
  - "open-collector-und-pullup-zusammen-denken"
learningGoals:
  - "Du erklärst Open Collector und Pull-up zusammen denken als eigenes Unterthema."
  - "Du grenzt eine typische Verwechslung fachlich ab."
  - "Du nutzt einen konkreten Prüfschritt und eine Gegenprobe."
practiceIdeas:
  - "Schreibe ein Mini-Beispiel mit falscher und richtiger Einordnung."
  - "Erstelle eine Gegenprobe mit verändertem Wert, Zustand oder Kontext."
  - "Vergleiche die Seite mit einem Nachbarthema und nenne die Trennkante."
commonMistakes:
  - "Ein Open-Collector-Ausgang wird wie ein Push-Pull-Ausgang behandelt."
  - "Das Thema nur einem breiten Kapitel zuordnen."
  - "Eine Lösung formulieren, die keine konkrete Prüfung enthält."
keyTakeaways:
  - "Open Collector und Pull-up zusammen denken wird über Einordnung, Abgrenzung und Gegenprobe stabil."
  - "Kleine Unterthemen erhöhen Auffindbarkeit und reduzieren Doppelungen."
  - "Aufgabe und Lösung sollen dieselbe fachliche Trennkante nutzen."
recognizeSignals:
  - "Ein Begriff klingt ähnlich wie ein Nachbarthema."
  - "Ein breites Kapitel wäre als Antwort zu ungenau."
  - "Ein konkreter Prüfschritt kann die Entscheidung bestätigen."
selfCheckPoints:
  - "Kann ich das Unterthema in einem Satz benennen?"
  - "Kann ich die typische Verwechslung ausschließen?"
  - "Ist meine Gegenprobe konkret und prüfbar?"
tags:
  - "elektrotechnik"
  - "messen"
  - "praxis"
  - "digitale-praxis"
  - "pegel-timing-entstoerung"
  - "open-collector-und-pull-up-zusammen-denken"
level: "fortgeschritten"
draft: false
---

## Grundidee

**Open Collector und Pull-up zusammen denken** ist bewusst als enges Unterthema angelegt. Die Seite beantwortet nicht das ganze Kapitel, sondern die kleine fachliche Entscheidung, die in Aufgaben oft den Unterschied macht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Mehrere Ausgänge teilen sich eine Leitung.</h3>
  <p>Für diese Situation reicht ein breiter Sammelbegriff nicht aus. Du brauchst eine klare Einordnung, eine Abgrenzung und einen prüfbaren Schritt.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Feinstruktur statt Sammelkapitel</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/elektrotechnik-v110-open-collector-und-pullup-zusammen-denken.svg" alt="Lernillustration zu Open Collector und Pull-up zusammen denken." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich klingende Dinge sauber trennen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Naheliegender Fehler</strong><span>Ein Open-Collector-Ausgang wird wie ein Push-Pull-Ausgang behandelt.</span></div>
    <div class="compare-item"><strong>Prüfschritt</strong><span>Prüfe, wer die Leitung aktiv nach Low zieht und wer High bereitstellt.</span></div>
  </div>
</div>

## Mini-Demo

```text
Messpunkt → Bezug → Erwartungswert → Gegenmessung
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
