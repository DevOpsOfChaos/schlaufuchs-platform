---
title: "include, require und once-Varianten unterscheiden"
description: "Verstehe, wie PHP Code modular einbindet und warum include, require und die once-Varianten nicht dieselbe Absicht haben."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "include-require-und-once-varianten-unterscheiden"]
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

Wenn wiederkehrender PHP-Code in eigene Dateien ausgelagert wird, bleiben Seiten übersichtlicher und besser wartbar. Diese Dateien können an passender Stelle eingebunden werden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Navigation, Konfiguration und Hilfsfunktionen</h3>
  <p>Eine Website nutzt auf vielen Seiten dieselbe Navigation oder gemeinsame Hilfsfunktionen. Statt alles zu kopieren, werden diese Teile ausgelagert und eingebunden. Genau hier wird die Unterscheidung zwischen optional und zwingend wichtig.</p>
</div>

## Die Grundvarianten

<div class="comparison-grid">
  <section>
    <p class="card-kicker">include</p>
    <h3>Eher optional einbinden</h3>
    <p>Der Fokus liegt darauf, zusätzlichen Code oder Inhalt an passender Stelle nachzuladen.</p>
  </section>
  <section>
    <p class="card-kicker">require</p>
    <h3>Eher zwingend notwendig</h3>
    <p>Diese Datei ist fachlich so wichtig, dass ohne sie der weitere Ablauf nicht sinnvoll ist.</p>
  </section>
  <section>
    <p class="card-kicker">once</p>
    <h3>Nur einmal einbinden</h3>
    <p>Verhindert, dass dieselbe Datei mehrfach geladen und dadurch etwa eine Funktion doppelt bekannt wird.</p>
  </section>
</div>

## Eine ruhige Entscheidungsfrage

- Ist diese Datei **optional** oder **zwingend**?
- Darf sie **mehrfach** auftauchen oder muss sie **nur einmal** geladen werden?

Genau daraus ergibt sich die Wahl der Variante.

<div class="note-panel">
  <p><strong>Merke:</strong> Die Einbindelogik ist keine bloße Syntaxfrage. Sie beschreibt, wie wichtig ein ausgelagerter Baustein für den restlichen Ablauf ist.</p>
</div>
