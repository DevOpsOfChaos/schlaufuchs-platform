---
title: include, require und once-Varianten unterscheiden
description: Verstehe, wie PHP Code modular einbindet und warum include, require und die once-Varianten nicht dieselbe Absicht haben.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - include-require-und-once-varianten-unterscheiden
learningGoals:
  - Du erklärst den Nutzen externer PHP-Dateien zur Modularisierung.
  - Du unterscheidest include und require grob nach ihrer fachlichen Bedeutung.
  - Du erkennst, warum once-Varianten Mehrfacheinbindungen vermeiden.
practiceIdeas:
  - Ordne Kopfbereich, Navigation oder Konfigurationsdatei einer sinnvollen Einbindelogik zu.
  - Prüfe, welche Datei optional ist und welche zwingend benötigt wird.
  - Erkläre, warum eine gemeinsam genutzte Hilfsdatei nicht mehrfach geladen werden sollte.
commonMistakes:
  - Jede Einbindung als gleich wichtig zu behandeln.
  - Zu übersehen, dass mehrfach eingebundene Hilfsdateien Probleme machen können.
  - Modularisierung nur als Dateiorganisation statt als Wartbarkeitslogik zu sehen.
keyTakeaways:
  - include und require dienen dem Einbinden externer PHP-Dateien.
  - once-Varianten vermeiden doppelte Einbindung.
  - Die Wahl hängt davon ab, ob eine Datei optional oder zwingend notwendig ist.
recognizeSignals:
  - Es geht um Templates, ausgelagerten Code, Konfigurationen oder gemeinsam genutzte Funktionen.
  - Ein Beispiel nutzt include, require, include_once oder require_once.
  - Du sollst entscheiden, wie wichtig eine eingebundene Datei für den Seitenaufbau ist.
selfCheckPoints:
  - Kann ich den Nutzen von ausgelagertem Code erklären?
  - Kann ich sagen, wann once sinnvoll ist?
  - Kann ich grob unterscheiden, wann eher include und wann eher require passt?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - modularisierung
  - include
  - require
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
