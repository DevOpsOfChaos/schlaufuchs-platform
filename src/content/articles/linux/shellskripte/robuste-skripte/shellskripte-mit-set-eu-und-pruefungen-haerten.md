---
title: "Linux – Shellskripte mit set -eu und Prüfungen härten"
description: "Mache kleine Skripte robuster, indem du fehlende Variablen, Fehlercodes und gefährliche Annahmen früh sichtbar machst."
subject: "linux"
section: "Shellskripte"
topicPath:
  - "shellskripte"
  - "robuste-skripte"
  - "shellskripte-mit-set-eu-und-pruefungen-haerten"
learningGoals:
  - "Du erklärst die Kernidee von „Skriptrobustheit“ in eigenen Worten."
  - "Du ordnest das Thema einem klaren Unterthema zu statt es in einem Sammelbereich zu verlieren."
  - "Du leitest eine kleine Gegenprobe für echte Aufgaben oder Projekte ab."
practiceIdeas:
  - "Markiere zuerst, welche Unterfrage wirklich gestellt ist."
  - "Notiere eine typische Fehlannahme und eine passende Gegenprobe."
  - "Übertrage die Denkbewegung auf ein zweites kleines Beispiel."
commonMistakes:
  - "rm mit leerer Variable riskieren"
  - "Fehlercodes ignorieren"
  - "Skript nur im eigenen Ordner testen"
keyTakeaways:
  - "Skriptrobustheit wird klarer, wenn Zustand, Ursache und Prüfschritt getrennt werden."
  - "Kleine Unterthemen sind leichter auffindbar und besser prüfbar als breite Sammelordner."
  - "Eine gute Erklärung endet mit einer konkreten Gegenprobe."
recognizeSignals:
  - "Die Aufgabe enthält einen scheinbar kleinen Sonderfall oder Fehlerzustand."
  - "Es muss zwischen Begriffen unterschieden werden, die im Alltag leicht vermischt werden."
  - "Eine Entscheidung soll begründet und nicht nur auswendig angewendet werden."
selfCheckPoints:
  - "Kann ich das Unterthema mit einem Satz von Nachbarthemen abgrenzen?"
  - "Kann ich einen typischen Fehler benennen?"
  - "Kann ich eine konkrete Prüfung oder Rechnung anschließen?"
tags:
  - "linux"
  - "shell"
  - "system"
  - "praxis"
  - "skriptrobustheit"
  - "shellskripte"
  - "robuste-skripte"
level: "mittel"
draft: false
---

## Grundidee

Ein Shellskript ist schnell geschrieben, aber auch schnell gefährlich. Robuste Skripte prüfen Eingaben, reagieren auf Fehlercodes und brechen lieber kontrolliert ab als still falsch weiterzulaufen.

<div class="example-card">
  <p class="card-kicker">Unterthema</p>
  <h3>Skriptrobustheit: kleine Frage statt Sammelbox</h3>
  <p>Diese Seite behandelt bewusst nur einen abgegrenzten Ausschnitt. Dadurch bleibt klar, welche Entscheidung trainiert wird und welche Nachbarfragen auf andere Seiten gehören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/linux-v106-script-safety.svg" alt="Lernillustration zu Skriptrobustheit." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. Eingabe prüfen
2. set -eu setzen
3. Pfad zitieren
4. Fehler erklären
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>Variablen werden gequotet</li>
        <li>Abbruch hat verständliche Meldung</li>
        <li>Testlauf nutzt ungefährliche Daten</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>rm mit leerer Variable riskieren</li>
        <li>Fehlercodes ignorieren</li>
        <li>Skript nur im eigenen Ordner testen</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **shellskripte / robuste-skripte**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Skriptrobustheit bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
