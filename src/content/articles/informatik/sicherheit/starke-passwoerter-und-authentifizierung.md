---
title: "Starke Passwörter und Authentifizierung"
description: "Verstehe, warum sichere Passwörter allein nicht alles sind und wie Authentifizierung den Zugang schützt."
subject: "informatik"
section: "Sicherheit"
topicPath: ["sicherheit", "starke-passwoerter-und-authentifizierung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Sicherheit"]
draft: false
---
## Grundidee

Ein Passwort schützt einen Zugang nur dann sinnvoll, wenn es nicht leicht zu erraten, zu wiederverwenden oder bequem zu missbrauchen ist. Gleichzeitig reicht ein Passwort allein oft nicht aus. Genau hier kommt **Authentifizierung** ins Spiel: Das System prüft, ob jemand wirklich die berechtigte Person ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Login in ein E-Mail-Konto</h3>
  <p>Beim Anmelden gibst du Benutzername und Passwort ein. In manchen Fällen musst du danach zusätzlich einen Code bestätigen oder ein Gerät freigeben. Schon dieses einfache Beispiel zeigt: Ein Passwort ist ein Teil des Schutzes, aber nicht immer der einzige.</p>
</div>

## Was ein starkes Passwort ausmacht

Ein starkes Passwort ist nicht deshalb stark, weil es „kompliziert aussieht“, sondern weil es schwer zu erraten oder automatisiert zu testen ist. Hilfreich sind zum Beispiel:

- ausreichende Länge,
- keine leicht erratbaren Wörter oder Muster,
- keine Wiederverwendung für viele Konten,
- und eine Strategie, die sich sicher verwalten lässt.

## Passwort und Authentifizierung sind nicht dasselbe

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Passwort ist ein Mittel, Authentifizierung das Ziel</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Passwort</strong>
      <span>Ein Passwort ist eine Information, die nur berechtigte Personen kennen sollten.</span>
    </div>
    <div class="compare-item">
      <strong>Authentifizierung</strong>
      <span>Authentifizierung ist der gesamte Vorgang, mit dem ein System prüft, ob der Zugang erlaubt ist.</span>
    </div>
    <div class="compare-item">
      <strong>Zusätzlicher Faktor</strong>
      <span>Ein weiterer Faktor kann den Schutz stärken, zum Beispiel ein Code auf einem zweiten Gerät.</span>
    </div>
  </div>
</div>

## Warum Wiederverwendung gefährlich ist

Wer dasselbe Passwort an vielen Stellen nutzt, koppelt viele Konten unnötig aneinander. Dann kann ein einzelnes bekannt gewordenes Passwort gleich mehrere Zugänge schwächen.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Unabhängige Konten absichern</h3>
    <p>Wichtige Konten bekommen eigene starke Passwörter und wenn möglich zusätzlichen Schutz.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Ein Passwort für alles</h3>
    <p>Dann wird aus einem einzelnen Risiko schnell ein Problem für mehrere Dienste gleichzeitig.</p>
  </section>
</div>

## Eine ruhige Systemfrage

Wenn du einen Login erklären sollst, helfen diese Fragen:

1. Welche Information muss eingegeben werden?
2. Woran erkennt das System die berechtigte Person?
3. Gibt es nur einen Faktor oder mehrere?
4. Was würde passieren, wenn eine Information bekannt wird?

## Denkbild zum Zugang

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Vom Zugangswunsch zur Freigabe</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Zugang anfragen</strong><span>Jemand möchte ein Konto oder einen Dienst öffnen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Identität prüfen</strong><span>Das System vergleicht die eingegebenen Informationen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Zusätzlich absichern</strong><span>Ein weiterer Faktor kann den Schutz erhöhen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Zugang erlauben</strong><span>Erst nach erfolgreicher Prüfung wird der Zugang freigegeben.</span></div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein starkes Passwort ist wichtig, aber gute Authentifizierung denkt immer das gesamte Schutzsystem mit.</p>
</div>
