---
title: "Informatik – Secrets nicht im Quellcode speichern"
description: "Lerne Secrets nicht im Quellcode speichern als kleines, klar prüfbares Unterthema mit Abgrenzung, Beispiel und Gegenprobe."
subject: "informatik"
section: "Sicherheit und Betrieb"
topicPath:
  - "sicherheit-und-betrieb"
  - "zugriff-logs-und-geheimnisse"
  - "v110-teil-1"
  - "secrets-nicht-im-quellcode-speichern"
learningGoals:
  - "Du erklärst Secrets nicht im Quellcode speichern als eigenes Unterthema."
  - "Du grenzt eine typische Verwechslung fachlich ab."
  - "Du nutzt einen konkreten Prüfschritt und eine Gegenprobe."
practiceIdeas:
  - "Schreibe ein Mini-Beispiel mit falscher und richtiger Einordnung."
  - "Erstelle eine Gegenprobe mit verändertem Wert, Zustand oder Kontext."
  - "Vergleiche die Seite mit einem Nachbarthema und nenne die Trennkante."
commonMistakes:
  - "Private Daten werden als normale Projekteinstellung behandelt."
  - "Das Thema nur einem breiten Kapitel zuordnen."
  - "Eine Lösung formulieren, die keine konkrete Prüfung enthält."
keyTakeaways:
  - "Secrets nicht im Quellcode speichern wird über Einordnung, Abgrenzung und Gegenprobe stabil."
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
  - "informatik"
  - "struktur"
  - "praxis"
  - "sicherheit-und-betrieb"
  - "zugriff-logs-und-geheimnisse"
  - "secrets-nicht-im-quellcode-speichern"
level: "einfach"
draft: false
---

## Grundidee

**Secrets nicht im Quellcode speichern** ist bewusst als enges Unterthema angelegt. Die Seite beantwortet nicht das ganze Kapitel, sondern die kleine fachliche Entscheidung, die in Aufgaben oft den Unterschied macht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein API-Schlüssel steht direkt in einer Konfigurationsdatei im Repo.</h3>
  <p>Für diese Situation reicht ein breiter Sammelbegriff nicht aus. Du brauchst eine klare Einordnung, eine Abgrenzung und einen prüfbaren Schritt.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Feinstruktur statt Sammelkapitel</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/informatik-v110-secrets-nicht-im-quellcode-speichern.svg" alt="Lernillustration zu Secrets nicht im Quellcode speichern." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich klingende Dinge sauber trennen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Naheliegender Fehler</strong><span>Private Daten werden als normale Projekteinstellung behandelt.</span></div>
    <div class="compare-item"><strong>Prüfschritt</strong><span>Prüfe, ob der Wert geheim ist und aus der Umgebung kommen sollte.</span></div>
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
