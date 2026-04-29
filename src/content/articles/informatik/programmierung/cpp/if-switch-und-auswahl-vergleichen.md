---
title: "if, else if und switch vergleichen"
description: "Verstehe, wann eine einfache Bedingung, eine Kette von Bedingungen oder eine Mehrfachauswahl in C++ ruhiger passt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "if-switch-und-auswahl-vergleichen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Nicht jede Auswahl sieht gleich aus. Manchmal reicht eine einfache Ja-Nein-Prüfung, manchmal müssen mehrere Bedingungen nacheinander geprüft werden, und manchmal gibt es feste benannte Fälle. Dann ist die Frage nicht nur „geht das?“, sondern „welche Form liest sich ruhiger?“

## Die drei typischen Formen

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>if</code></strong>
    <span>Passt zu einer einzelnen Bedingung mit einem klaren Ja-Nein-Zweig.</span>
  </div>
  <div class="visual-item">
    <strong><code>else if</code></strong>
    <span>Passt zu mehreren Bedingungen, die nacheinander geprüft werden.</span>
  </div>
  <div class="visual-item">
    <strong><code>switch</code></strong>
    <span>Passt gut zu mehreren festen, benannten Fällen wie Menüauswahl oder Statuscode.</span>
  </div>
</div>

## Ein ruhiger Vergleich

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Struktur passend zur Fallart wählen</h3>
    <p>Eine einzelne Login-Prüfung braucht oft nur <code>if</code>. Ein Menü mit klaren Nummern oder Zuständen liest sich oft mit <code>switch</code> ruhiger.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur aus Gewohnheit dieselbe Form nutzen</h3>
    <p>Dann passt die Syntax zwar vielleicht technisch, aber die Auswahlidee bleibt unnötig unruhig.</p>
  </section>
</div>

## Kleine Denkregel

- **Ja oder Nein?** → oft <code>if</code>
- **mehrere Bedingungen mit Vergleichslogik?** → oft <code>else if</code>
- **mehrere feste Fälle?** → oft <code>switch</code>

<div class="note-panel">
  <p><strong>Merke:</strong> Die beste Auswahlstruktur ist nicht die kürzeste, sondern die, die die Fachlogik am ruhigsten zeigt.</p>
</div>
