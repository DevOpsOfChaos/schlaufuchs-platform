---
title: Formulare und Eingaben in HTML
description: Verstehe Formulare als strukturierte Eingabeschnittstellen und nutze Labels, Eingabefelder und Gruppen sinnvoll.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
tags:
  - html
  - form
  - input
  - label
  - accessibility
learningGoals:
  - "Du verstehst den Aufbau einfacher HTML-Formulare."
  - "Du ordnest label, input, textarea und select fachlich richtig ein."
  - "Du erkennst, warum Beschriftung und Struktur für Nutzbarkeit und Zugänglichkeit wichtig sind."
practiceIdeas:
  - "Baue ein kleines Formular mit Name, Auswahl und Freitextfeld."
  - "Prüfe bei jedem Eingabefeld, ob ein Label sinnvoll zugeordnet ist."
  - "Vergleiche ein Formular mit und ohne Gruppierung über fieldset und legend."
commonMistakes:
  - "Formularfelder ohne klare Beschriftung anzulegen."
  - "Nur auf das Aussehen statt auf die Funktion der Eingabeelemente zu achten."
  - "Placeholder mit echter Beschriftung zu verwechseln."
keyTakeaways:
  - "Formulare strukturieren Eingaben und nicht nur das Layout."
  - "Labels sind zentral für Verständlichkeit und Zugänglichkeit."
  - "Unterschiedliche Eingabetypen haben unterschiedliche Aufgaben."
recognizeSignals:
  - "Es geht um Formulare, Eingabefelder, Auswahlfelder, Beschriftung oder Validierung."
  - "Du sollst eine Eingabesituation nicht nur bauen, sondern in ihrer Struktur erklären."
  - "Ein Beispiel fragt nach der Rolle von label, input, textarea oder select."
selfCheckPoints:
  - "Kann ich ein Formular fachlich in sinnvolle Bausteine zerlegen?"
  - "Kann ich erklären, warum ein Label mehr ist als nur sichtbarer Text?"
  - "Kann ich ein einfaches Formular mit passenden Elementen planen?"
level: einfach
draft: false
---

## Warum Formulare mehr als nur Felder sind

Formulare sind der Standardweg, um Nutzereingaben auf Webseiten strukturiert aufzunehmen. Sie verbinden technische Funktion, inhaltliche Klarheit und Zugänglichkeit.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kontaktformular mit klaren Rollen</h3>
  <p>Ein Namensfeld, eine E-Mail-Adresse, ein Auswahlfeld und ein Nachrichtenfeld wirken auf den ersten Blick simpel. Fachlich sauber werden sie aber erst dann, wenn Beschriftungen, Gruppen und Eingabearten zusammenpassen.</p>
</div>

## Zentrale Bausteine

### form

Das <code>form</code>-Element fasst Eingaben zusammen und markiert, dass Daten gemeinsam übermittelt oder verarbeitet werden sollen.

### label

Ein <code>label</code> beschreibt ein Eingabefeld. Es hilft nicht nur optisch, sondern macht die Eingabe auch für Hilfstechnologien besser verständlich.

### input

Mit <code>input</code> entstehen unterschiedliche Eingabefelder, zum Beispiel für Text, E-Mail oder Auswahl.

### textarea und select

Mehrzeilige Eingaben gehören in <code>textarea</code>. Auswahllisten werden mit <code>select</code> und <code>option</code> gebaut.

## Warum Beschriftung so wichtig ist

Ein Formular ist nur dann wirklich benutzbar, wenn klar ist,

- was eingegeben werden soll,
- welches Feld zu welcher Frage gehört,
- und welche Angaben nötig oder optional sind.

Deshalb sind Labels, Gruppierung und Hinweise keine Nebensache.

## Placeholder ist kein Ersatz für Struktur

Placeholder-Text kann ergänzen, aber er ersetzt keine saubere Beschriftung. Wer Formulare nur über visuelle Hinweise baut, macht sie oft unklarer und weniger zugänglich.

## Gruppierung und Orientierung

Mit <code>fieldset</code> und <code>legend</code> lassen sich zusammengehörige Eingaben bündeln. Dadurch wird besonders bei längeren Formularen schneller klar, welche Felder inhaltlich zusammengehören.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So planst du Formulare ruhiger</h3>
  <ul>
    <li>Starte mit den inhaltlichen Fragen, nicht mit dem CSS.</li>
    <li>Wähle für jede Eingabe den passenden Typ.</li>
    <li>Prüfe anschließend, ob jedes Feld verständlich beschriftet ist.</li>
  </ul>
</div>
