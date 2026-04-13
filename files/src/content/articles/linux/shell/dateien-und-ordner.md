---
title: Dateien und Ordner – Grundlagen
description: Verstehe, wie Linux Dateien, Ordner und Pfade organisiert und warum diese
  Struktur die Basis für fast alle Terminal-Aufgaben bildet.
subject: linux
section: shell
topicPath:
- shell
- dateien-und-ordner
learningGoals:
- Du unterscheidest sicher zwischen Datei, Ordner und Pfad.
- Du verstehst die Rolle von pwd, ls und cd.
- Du arbeitest im Terminal ruhiger und sicherer, weil du deine Position im Dateisystem
  bewusst prüfst.
level: einfach
tags:
- linux
- shell
- dateien
- ordner
- pfade
draft: false
practiceIdeas:
- Prüfe mit pwd zuerst deinen aktuellen Ort und erkläre dann in eigenen Worten, was
  der ausgegebene Pfad bedeutet.
- Nutze ls in mehreren Verzeichnissen und beobachte, wie sich der Inhalt je nach Ort
  verändert.
- Wechsle mit cd bewusst zwischen zwei Ordnern und überprüfe nach jedem Schritt wieder
  deinen Standort.
commonMistakes:
- Datei und Ordner sprachlich gleich behandeln, obwohl sie unterschiedliche Rollen
  haben.
- Mit cd in einen Ordner springen, ohne vorher zu prüfen, wo man gerade ist.
- Den Pfad nur als Text sehen und nicht als eindeutige Ortsbeschreibung verstehen.
keyTakeaways:
- Erst Ort prüfen, dann Inhalt ansehen, dann bewegen.
- Ein Pfad beschreibt den Ort einer Datei oder eines Ordners eindeutig.
- pwd, ls und cd gehören in Linux zu den wichtigsten Einstiegsbefehlen.
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Dateien und Ordner sind die Grundlage fast aller Linux-Arbeit. Wer im Terminal sicher sein will, muss zuerst verstehen, wo er sich befindet und wie Pfade gelesen werden.</p>
  <ul>
    <li>Du unterscheidest Datei, Ordner und Pfad.</li>
    <li>Du verstehst die drei Einstiegsbefehle <code>pwd</code>, <code>ls</code> und <code>cd</code>.</li>
    <li>Du lernst eine sichere Arbeitsreihenfolge für das Terminal kennen.</li>
  </ul>
</div>

## Was du hier lernst

Auf dieser Seite lernst du,

- Du unterscheidest sicher zwischen Datei, Ordner und Pfad.
- Du verstehst die Rolle von pwd, ls und cd.
- Du arbeitest im Terminal ruhiger und sicherer, weil du deine Position im Dateisystem bewusst prüfst.

## Grundidee

Linux organisiert Inhalte in einer Baumstruktur. Ganz oben steht das Wurzelverzeichnis `/`. Darunter liegen weitere Ordner, Unterordner und Dateien.

Das ist wichtig, weil Terminalbefehle fast nie „im Leeren“ arbeiten. Sie beziehen sich immer auf einen Ort im Dateisystem.

## Datei, Ordner und Pfad

### Datei

Eine Datei enthält Inhalt. Das kann Text, Quellcode, ein Bild oder ein Konfigurationswert sein.

### Ordner

Ein Ordner strukturiert Inhalte. Er kann Dateien und weitere Ordner enthalten.

### Pfad

Ein Pfad beschreibt den Ort einer Datei oder eines Ordners.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Einen Ort eindeutig benennen</h3>
  <p>Wenn eine Datei <code>notizen.txt</code> im Ordner <code>dokumente</code> liegt, dann ist nicht nur der Dateiname wichtig, sondern auch ihr Ort.</p>
  <p>Im Terminal muss oft genau dieser Ort bekannt sein, damit Befehle auf die richtige Datei zugreifen.</p>
</div>

## Die drei wichtigsten Einstiegsbefehle

<div class="wide-example">

```bash
pwd
ls
cd dokumente
```

</div>

- `pwd` zeigt den aktuellen Ort.
- `ls` zeigt den Inhalt des aktuellen Ortes.
- `cd` wechselt in einen anderen Ordner.

Wichtiger als das reine Merken ist die Denklogik dahinter:

1. Ort prüfen
2. Inhalt prüfen
3. dann bewegen

## Das Homeverzeichnis

Viele Terminal-Sitzungen starten im Homeverzeichnis des Benutzers. Dort liegen persönliche Dateien, Einstellungen und Arbeitsbereiche.

Gerade am Anfang ist das hilfreich, weil dieser Bereich überschaubarer ist als das gesamte Linux-Dateisystem.

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Was du in der späteren Übungsshell testen sollst</h3>
  <p>Diese Seite eignet sich perfekt für die universelle Linux-Lernshell. Dort solltest du direkt ausprobieren:</p>
  <ul>
    <li><code>pwd</code> um deinen aktuellen Ort zu sehen</li>
    <li><code>ls</code> um Inhalte zu prüfen</li>
    <li><code>cd</code> um in einen anderen Ordner zu wechseln</li>
    <li>anschließend wieder <code>pwd</code>, um die Veränderung bewusst zu kontrollieren</li>
  </ul>
  <p>Wichtig ist nicht Geschwindigkeit, sondern Orientierung.</p>
</div>

## Gute Arbeitsweise im Terminal

Eine ruhige Arbeitsweise verhindert viele Fehler:

1. Erst den aktuellen Ort klären.
2. Dann den Inhalt ansehen.
3. Erst danach Befehle auf Dateien oder Ordner anwenden.

Wer direkt „auf Verdacht“ tippt, verwechselt schnell Pfade oder bearbeitet falsche Orte.

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Du weißt nicht, in welchem Ordner du gerade bist.</li>
    <li>Du verwechselst Datei und Ordner.</li>
    <li>Du benutzt <code>cd</code>, ohne das Ziel wirklich zu verstehen.</li>
    <li>Du liest die Ausgabe von <code>ls</code> zu oberflächlich.</li>
    <li>Du arbeitest im Terminal schneller, als du die Struktur wirklich erfasst.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Dateien enthalten Inhalte, Ordner strukturieren Inhalte.</li>
    <li>Pfade beschreiben Orte im Dateisystem.</li>
    <li><code>pwd</code>, <code>ls</code> und <code>cd</code> sind zentrale Einstiegsbefehle.</li>
    <li>Gute Terminalarbeit beginnt mit Orientierung.</li>
    <li>Wer seinen Ort kennt, arbeitet deutlich sicherer.</li>
  </ul>
</div>


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Dateien und Ordner – Grundlagen** oder um eng verwandte Begriffe aus **shell**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du unterscheidest sicher zwischen Datei, Ordner und Pfad.?
- Kannst du in eigenen Worten erklären, wie du du verstehst die Rolle von pwd, ls und cd.?
- Kannst du in eigenen Worten erklären, wie du du arbeitest im Terminal ruhiger und sicherer, weil du deine Position im Dateisystem bewusst prüfst.?

## Merksätze

- Erst Ort prüfen, dann Inhalt ansehen, dann bewegen.
- Ein Pfad beschreibt den Ort einer Datei oder eines Ordners eindeutig.
- pwd, ls und cd gehören in Linux zu den wichtigsten Einstiegsbefehlen.
