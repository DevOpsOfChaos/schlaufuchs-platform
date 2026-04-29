---
title: "Informatik – Nebenwirkungen im Code markieren"
description: "Lerne nebenwirkungen im code markieren als kleines Unterthema mit Beispiel, Abgrenzung und Prüfstrategie."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["programmieren", "funktionen-und-schnittstellen", "nebenwirkungen-im-code-markieren"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Feinstruktur Informatik"]
draft: false
---
## Grundidee

**Nebenwirkungen im Code markieren** ist bewusst als kleines Unterthema angelegt. Lerne nebenwirkungen im code markieren als kleines Unterthema mit Beispiel, Abgrenzung und Prüfstrategie. Dadurch bleibt die Seite auffindbar und landet nicht in einem übergroßen Sammelbereich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Funktion ändert zusätzlich eine globale Liste.</h3>
  <p>Die wichtige Entscheidung lautet: Welcher kleine fachliche Schritt muss zuerst geklärt werden, bevor gerechnet, programmiert, gemessen oder gestaltet wird?</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Vier Prüfschritte</h3>
  <div class="step-grid">
    <div class="step-item"><strong>1. Kontext lesen</strong><span>Welche Daten, Bauteile, Werte oder UI-Zustände sind wirklich gegeben?</span></div>
    <div class="step-item"><strong>2. Unterthema wählen</strong><span>Gehört die Aufgabe zu „Funktionen und Schnittstellen“ oder zu einem Nachbarthema?</span></div>
    <div class="step-item"><strong>3. Trennkante prüfen</strong><span>Nebenwirkungen müssen sichtbar gemacht und begründet werden.</span></div>
    <div class="step-item"><strong>4. Gegenprobe machen</strong><span>Ändere einen Wert oder Zustand und prüfe, ob die Erklärung stabil bleibt.</span></div>
  </div>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Woran du das Unterthema erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unsaubere Lesart</strong>
      <span>Änderungen außerhalb der Funktion bleiben unerwähnt.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Nebenwirkungen müssen sichtbar gemacht und begründet werden.</span>
    </div>
  </div>
</div>

## Mini-Beispiel

```text
Situation: Eine Funktion ändert zusätzlich eine globale Liste.
Frage: Welche kleine Entscheidung ist zuerst nötig?
Prüfung: Benenne Unterthema, typische Verwechslung und Gegenprobe.
```

Eine gute Lösung nennt nicht nur ein Ergebnis. Sie erklärt kurz, **warum genau dieses Unterthema** passt und welcher Fehler dadurch vermieden wird.

## Strukturhinweis

Diese Seite bleibt absichtlich schmal. Sie soll ein klarer Baustein im Unterthema **Funktionen und Schnittstellen** sein. Vertiefungen, Nachbarthemen und allgemeine Grundlagen gehören auf eigene Seiten, damit die Fachbereiche übersichtlich bleiben.

<div class="practice-card">
  <p class="card-kicker">Übungsidee</p>
  <h3>Eigene Gegenprobe</h3>
  <p>Erstelle ein zweites Beispiel, in dem der typische Fehler naheliegt. Erkläre dann in zwei Sätzen, welcher Prüfschritt ihn verhindert.</p>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Nebenwirkungen müssen sichtbar gemacht und begründet werden.</p>
</div>
