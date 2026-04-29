---
title: "Datentypen in Informationssystemen einordnen"
description: "Verstehe, warum unterschiedliche Daten unterschiedliche Datentypen brauchen und was dabei ruhig unterschieden werden sollte."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "daten-und-information", "datentypen-in-informationssystemen-einordnen"]
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

Ein Informationssystem verarbeitet nicht einfach „irgendwelche Werte“. Es muss wissen, ob etwas als Text, Zahl, Datum oder Wahrheitswert behandelt werden soll. Genau dafür gibt es Datentypen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Onlineshop speichert sehr unterschiedliche Angaben</h3>
  <p>Produktname, Preis, Bestelldatum und Lieferstatus sehen im System völlig verschieden aus. Ein Preis soll berechnet werden, ein Datum zeitlich eingeordnet, ein Produktname angezeigt und ein Lieferstatus als wahr/falsch oder als klarer Zustand gespeichert werden. Ein gemeinsamer Typ für alles wäre fachlich unruhig.</p>
</div>

## Typische Datentypen fachlich lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Text</strong>
    <span>Namen, Adressen oder Beschreibungen sollen lesbar gespeichert und dargestellt werden.</span>
  </div>
  <div class="visual-item">
    <strong>Zahl</strong>
    <span>Preise, Mengen oder Gewichte sollen berechnet oder verglichen werden können.</span>
  </div>
  <div class="visual-item">
    <strong>Datum und Zeit</strong>
    <span>Bestellzeitpunkte, Termine oder Fristen brauchen eine zeitliche Struktur.</span>
  </div>
  <div class="visual-item">
    <strong>Bool</strong>
    <span>Ja/Nein-, wahr/falsch- oder aktiv/inaktiv-Entscheidungen brauchen nur zwei Zustände.</span>
  </div>
</div>

## Ziffern sind nicht automatisch Rechenwerte

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Postleitzahl und Preis sehen beide numerisch aus, sind aber fachlich nicht gleich</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Postleitzahl</strong>
      <span>Sie enthält Ziffern, ist aber eher eine Kennzeichnung. Mit ihr wird nicht sinnvoll gerechnet.</span>
    </div>
    <div class="compare-item">
      <strong>Preis</strong>
      <span>Er ist ein numerischer Wert, mit dem gerechnet, verglichen oder summiert werden soll.</span>
    </div>
  </div>
</div>

## Warum Datentypen die Verarbeitung steuern

Ein passender Datentyp beeinflusst direkt,

- welche Prüfungen möglich sind,
- wie Eingaben validiert werden,
- wie Daten sortiert und verglichen werden,
- und welche Auswertungen ruhig funktionieren.

Ein Datum kann zum Beispiel nach Tagen geordnet werden, ein Bool-Wert kann direkt Entscheidungen steuern, und ein Text bleibt in seiner ursprünglichen Schreibweise erhalten.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Was beschreibt der Wert fachlich?</strong>
    <span>Ist es eine Bezeichnung, ein Messwert, ein Zeitpunkt oder ein Zustand?</span>
  </div>
  <div class="step-item">
    <strong>2. Wie soll damit gearbeitet werden?</strong>
    <span>Soll gerechnet, sortiert, verglichen oder nur angezeigt werden?</span>
  </div>
  <div class="step-item">
    <strong>3. Welcher Datentyp passt dazu?</strong>
    <span>Wähle den Typ nach der Rolle des Wertes, nicht nur nach seiner Schreibweise.</span>
  </div>
  <div class="step-item">
    <strong>4. Welche Fehler vermeidet das?</strong>
    <span>Ein guter Datentyp verhindert unruhige Sonderfälle in Eingabe und Auswertung.</span>
  </div>
</div>
