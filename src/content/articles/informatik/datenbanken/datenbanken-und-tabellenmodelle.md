---
title: "Datenbanken und Tabellenmodelle"
description: "Verstehe, wie Daten in Tabellen geordnet werden und warum Beziehungen, Eindeutigkeit und Redundanz dabei wichtig sind."
subject: "informatik"
section: "Datenbanken"
topicPath: ["datenbanken", "datenbanken-und-tabellenmodelle"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Datenbanken"]
draft: false
---
## Warum dieses Thema wichtig ist

Sobald Daten nicht nur einmal, sondern immer wieder gebraucht, ergänzt oder verglichen werden, reicht eine lose Liste oft nicht mehr aus. Dann braucht man eine Struktur, in der klar ist,

- welche Merkmale erfasst werden,
- was zu einem einzelnen Eintrag gehört,
- und wie unterschiedliche Informationen zusammenhängen.

Genau dafür sind Tabellenmodelle ein guter Einstieg in das Denken über Datenbanken.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Kursliste statt vieler Zettel</h3>
  <p>Wenn Namen, E-Mail-Adressen und Kursgruppen auf mehreren Zetteln verteilt sind, entstehen schnell Fehler. In einer geordneten Tabelle ist klarer, welche Person zu welcher Gruppe gehört und welche Daten nur einmal gepflegt werden sollten.</p>
</div>

## Was eine Tabelle inhaltlich leistet

Eine Tabelle ist nicht nur eine Darstellung, sondern ein einfaches Modell für geordnete Daten. Typisch sind dabei:

- **Spalten** für Merkmale oder Attribute,
- **Zeilen** für einzelne Datensätze,
- und oft eine Information, die jeden Datensatz eindeutig erkennbar macht.

So wird aus vielen Einzelangaben ein System, das lesbar und überprüfbar bleibt.

## Datensatz, Attribut und Wert unterscheiden

Diese drei Ebenen sollte man sauber auseinanderhalten:

- Ein **Datensatz** beschreibt einen einzelnen Fall, zum Beispiel eine Person oder ein Produkt.
- Ein **Attribut** beschreibt, welche Art von Information gespeichert wird, zum Beispiel Name, Ort oder Nummer.
- Ein **Wert** ist die konkrete Angabe in einer Zelle.

Diese Unterscheidung hilft später bei Datenbanken, Formularen und Auswertungen.

## Warum Eindeutigkeit wichtig ist

In vielen Tabellen braucht man ein Merkmal, das einen Datensatz sicher wiedererkennbar macht. Ohne eine solche Eindeutigkeit kann unklar werden,

- welche Zeile gemeint ist,
- welche Daten zusammengehören,
- und ob zwei Einträge wirklich gleich oder nur ähnlich sind.

Darum spielt ein eindeutiger Schlüsselgedanke schon in einfachen Modellen eine große Rolle.

## Redundanz und Widersprüche

Wenn dieselbe Information an mehreren Stellen auftaucht, klingt das zuerst praktisch. In Wirklichkeit entstehen dadurch leicht Widersprüche.

Beispiel:

- In einer Tabelle steht die gleiche Person zweimal.
- Ihre E-Mail-Adresse wird an einer Stelle geändert, an der anderen nicht.
- Danach ist unklar, welche Angabe richtig ist.

Gerade deshalb denkt Informatik über Struktur, Redundanz und Konsistenz nach.

## Beziehungen zwischen Daten

Viele Daten stehen nicht allein. Eine Person kann zu einem Kurs gehören, ein Produkt zu einer Kategorie, ein Buch zu einer Ausleihe. Schon in einfachen Tabellenmodellen wird sichtbar, dass Daten oft **verknüpft** gedacht werden müssen.

Damit wird das Thema zum Einstieg in echtes Datenbankdenken: nicht nur einzelne Werte speichern, sondern Zusammenhänge beschreiben.

## Worauf man bei einfachen Modellen achten sollte

Ein gutes Einstiegsmodell ist meist dann gelungen, wenn

- die Spalten klar benannt sind,
- jede Zeile genau einen Fall beschreibt,
- Werte nicht unnötig doppelt gespeichert werden,
- und Beziehungen verständlich bleiben.

## Kleine Transferidee

Wenn du das nächste Mal eine Liste mit Namen, Terminen oder Produkten siehst, frage dich:

- Was wäre hier ein Datensatz?
- Welche Spalten wären sinnvoll?
- Welche Information müsste eindeutig sein?
