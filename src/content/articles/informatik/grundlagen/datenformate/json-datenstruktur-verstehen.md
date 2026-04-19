---
title: JSON-Datenstruktur verstehen
description: Verstehe, wie JSON Werte, Arrays und Objekte hierarchisch organisiert und warum es im Web so häufig genutzt wird.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - json-datenstruktur-verstehen
learningGoals:
  - Du erklärst die Grundbausteine von JSON.
  - Du unterscheidest Objekt, Eigenschaft und Array sicher.
  - Du liest eine verschachtelte JSON-Struktur ruhiger von außen nach innen.
practiceIdeas:
  - Markiere in einem JSON-Beispiel, wo Objekt, Array, Schlüssel und Werte stehen.
  - Prüfe bei einer API-Antwort, welche Informationen in Listen und welche in Objekten liegen.
  - Zerlege ein verschachteltes JSON in kleinere Teilblöcke.
commonMistakes:
  - Objekt und Array zu verwechseln.
  - Zu denken, Schlüssel seien beliebige unmarkierte Wörter.
  - Bool- oder null-Werte wie Zeichenketten zu behandeln.
keyTakeaways:
  - JSON nutzt Objekte mit Schlüsseln und Werten sowie Arrays für Listen.
  - JSON ist gut lesbar und für Datenaustausch im Web sehr verbreitet.
  - Eine ruhige Lesestrategie geht von außen nach innen und trennt Struktur von Inhalt.
recognizeSignals:
  - Du siehst geschweifte oder eckige Klammern.
  - Ein Beispiel enthält Schlüssel-Wert-Paare.
  - Es geht um Datenaustausch, APIs oder Konfigurationsdaten.
selfCheckPoints:
  - Kann ich Objekt und Array sicher unterscheiden?
  - Kann ich erklären, was ein Schlüssel und was ein Wert ist?
  - Kann ich eine verschachtelte Struktur schrittweise lesen?
level: einfach
tags:
  - informatik
  - json
  - datenformate
  - struktur
  - api
draft: false
---

## Grundidee

JSON ist ein textbasiertes Format für strukturierte Daten. Es wird besonders oft im Web genutzt, weil Menschen es noch gut lesen können und Programme es leicht weiterverarbeiten können.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Benutzerprofil mit Hobbys und Zusatzdaten</h3>
  <p>Eine Anwendung speichert Name, Alter, Hobbys und optionale Angaben gemeinsam in einer JSON-Struktur. Einige Werte sind einfache Angaben, andere liegen in einer Liste, und wieder andere sind selbst wieder kleine Objekte. Genau diese Mischung macht JSON praktisch.</p>
</div>

## Die wichtigsten Bausteine

<div class="visual-grid">
  <div class="visual-item">
    <strong>Objekt</strong>
    <span>Ein Objekt beginnt mit <code>{</code> und endet mit <code>}</code>. Es enthält Schlüssel-Wert-Paare.</span>
  </div>
  <div class="visual-item">
    <strong>Array</strong>
    <span>Ein Array beginnt mit <code>[</code> und endet mit <code>]</code>. Es enthält eine geordnete Liste von Werten.</span>
  </div>
  <div class="visual-item">
    <strong>Schlüssel</strong>
    <span>Ein Schlüssel ist eine Zeichenkette und beschreibt, wie ein Wert fachlich benannt ist.</span>
  </div>
  <div class="visual-item">
    <strong>Wert</strong>
    <span>Ein Wert kann Text, Zahl, Bool, <code>null</code>, ein Array oder wieder ein Objekt sein.</span>
  </div>
</div>

## Ein kleines JSON-Beispiel

```json
{
  "name": "Mira",
  "alter": 17,
  "hobbys": ["Lesen", "Klettern"],
  "adresse": {
    "stadt": "Karlsruhe",
    "plz": "76133"
  },
  "newsletter": true,
  "partner": null
}
```

## Von außen nach innen lesen

<div class="figure-card">
  <p class="card-kicker">Lesestrategie</p>
  <h3>So bleibt eine verschachtelte Struktur ruhig</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Außenform prüfen</strong><span>Ist der Gesamtblock ein Objekt oder ein Array?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Schlüssel finden</strong><span>Welche Eigenschaften werden beschrieben?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Werttyp prüfen</strong><span>Ist der Wert einfach, eine Liste oder wieder ein Objekt?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Teilblöcke einzeln lesen</strong><span>Nicht alles auf einmal interpretieren.</span></div>
  </div>
</div>

## Typische Werte in JSON

<div class="compare-card">
  <p class="card-kicker">Wichtige Klarheit</p>
  <h3>JSON kennt nicht nur Text</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zeichenkette</strong>
      <span><code>"Mira"</code> steht in Anführungszeichen.</span>
    </div>
    <div class="compare-item">
      <strong>Zahl</strong>
      <span><code>17</code> steht ohne Anführungszeichen.</span>
    </div>
    <div class="compare-item">
      <strong>Bool / null</strong>
      <span><code>true</code>, <code>false</code> und <code>null</code> sind eigene Werte, keine Texte.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein JSON-Objekt ist keine lose Sammlung von Zeilen, sondern eine klar strukturierte Hierarchie aus Objekten, Arrays und einfachen Werten.</p>
</div>
