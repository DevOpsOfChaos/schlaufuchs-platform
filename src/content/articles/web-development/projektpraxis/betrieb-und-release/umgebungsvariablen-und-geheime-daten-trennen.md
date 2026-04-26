---
title: "Web-Projektpraxis – Umgebungsvariablen und geheime Daten trennen"
description: "Trenne öffentliche Konfiguration, Umgebungsvariablen und echte Secrets, damit keine Zugangsdaten versehentlich im Frontend landen."
subject: "web-development"
section: "Projektpraxis"
topicPath:
  - "projektpraxis"
  - "betrieb-und-release"
  - "umgebungsvariablen-und-geheime-daten-trennen"
learningGoals:
  - "Du erklärst die Kernidee von „Umgebungsvariablen und geheime Daten trennen“."
  - "Du trennst sichtbare Nutzerwirkung, technische Ursache und organisatorische Prüffrage."
  - "Du leitest aus einem kleinen Web-Szenario eine robuste Projektregel ab."
practiceIdeas:
  - "Prüfe eine vorhandene Web-Seite mit genau diesem Blick und notiere drei konkrete Beobachtungen."
  - "Formuliere aus einer technischen Regel eine kurze Review-Frage."
  - "Verbinde eine technische Maßnahme mit einer sichtbaren Auswirkung für Nutzende."
commonMistakes:
  - "Passwörter in Beispieldateien committen"
  - "public und secret vermischen"
  - "lokale Werte ohne Erklärung voraussetzen"
keyTakeaways:
  - "Sichtbar ist nicht geheim"
  - "Projektpraxis wird besser, wenn Entscheidungen klein, prüfbar und dokumentiert bleiben."
  - "Robuste Web-Arbeit denkt Idealfall, Fehlerfall und späteres Ändern gemeinsam."
recognizeSignals:
  - "Eine Seite funktioniert im Idealfall, aber der Veröffentlichungs- oder Fehlerfall ist unklar."
  - "Du sollst nicht nur Code schreiben, sondern Betrieb, Wartung oder Review mitdenken."
  - "Eine technische Entscheidung braucht eine einfache Gegenprobe."
selfCheckPoints:
  - "Kann ich das Risiko ohne Fachjargon erklären?"
  - "Kann ich eine konkrete Prüffrage formulieren?"
  - "Kann ich zeigen, was sich für Nutzende oder Wartende verbessert?"
tags:
  - "web development"
  - "secrets"
  - "umgebungsvariablen"
  - "sicherheit"
  - "konfiguration"
level: "mittel"
draft: false
---

## Grundidee

Nicht jede Konfiguration ist geheim. Ein öffentlicher Basis-Pfad ist etwas anderes als ein API-Schlüssel. Gute Web-Projektpraxis benennt deshalb sauber, was im Browser sichtbar sein darf und was nur auf dem Server oder in der Build-Umgebung liegen darf.

<div class="example-card">
  <p class="card-kicker">Konfiguration</p>
  <h3>Sichtbar ist nicht geheim</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich noch einbauen?“, sondern: „Welche kleine Entscheidung macht die Seite nach dem nächsten Release verständlicher, sicherer oder leichter prüfbar?“</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Einzelproblem zur prüfbaren Entscheidung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v105-config-secrets.svg" alt="Schematische Lernillustration zu Web-Projektpraxis – Umgebungsvariablen und geheime Daten trennen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Eine ruhige Prüfkette

```text
1. öffentliche URL prüfen
2. Secret benennen
3. Frontend-Bundle kontrollieren
4. Repository sauber halten
```

Die Mini-Demo ist bewusst klein. Sie zeigt nicht jede mögliche Sonderregel, sondern die Denkbewegung: erst Zustand verstehen, dann Risiko begrenzen, dann mit einer konkreten Gegenprobe prüfen.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du die Qualität erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
      <li>Secrets stehen nicht im Code</li>
      <li>Variablen haben klare Namen</li>
      <li>Dokumentation sagt, wo Werte gesetzt werden</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>Passwörter in Beispieldateien committen</li>
      <li>public und secret vermischen</li>
      <li>lokale Werte ohne Erklärung voraussetzen</li>
      </ul>
    </div>
  </div>
</div>

## Prüfstrategie für echte Projekte

<div class="step-grid">
  <div class="step-item">
    <strong>1. Auswirkung benennen</strong>
    <span>Was sieht, merkt oder verliert eine Nutzerin in diesem Zustand?</span>
  </div>
  <div class="step-item">
    <strong>2. technische Grenze finden</strong>
    <span>Welche Datei, Einstellung, Abhängigkeit oder Oberfläche ist wirklich beteiligt?</span>
  </div>
  <div class="step-item">
    <strong>3. kleine Maßnahme wählen</strong>
    <span>Welche Änderung löst genau dieses Problem, ohne neue Nebenwirkungen zu erzeugen?</span>
  </div>
  <div class="step-item">
    <strong>4. Gegenprobe festhalten</strong>
    <span>Welche Prüfung zeigt später, dass das Problem nicht wieder auftaucht?</span>
  </div>
</div>

## Abgrenzung

Diese Seite ersetzt keine vollständige Betriebsdokumentation. Sie trainiert eine einzelne robuste Denkbewegung innerhalb kleiner Webprojekte. Die Nachbarseiten zu HTML, CSS und JavaScript erklären die konkrete Umsetzung einzelner Oberflächen- und Codeentscheidungen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Secret ist erst dann sicher behandelt, wenn es nicht im Repository, nicht im Client-Code und nicht in Screenshots auftaucht.</p>
</div>
