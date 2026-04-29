---
title: "JSON-Datenstruktur verstehen"
description: "Verstehe, wie JSON Werte, Arrays und Objekte hierarchisch organisiert und warum es im Web so häufig genutzt wird."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "datenformate", "json-datenstruktur-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Grundlagen"]
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
