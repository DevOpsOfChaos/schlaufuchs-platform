---
title: Dateirechte
description: Dateirechte bestimmen in Linux, wer Dateien lesen, verändern oder ausführen
  darf, und sind zentral für sauberes und sicheres Arbeiten.
subject: linux
section: system
topicPath:
- system
- dateirechte
learningGoals:
- Du liest einfache Linux-Dateirechte sicher.
- Du unterscheidest Besitzer, Gruppe und andere.
- Du ordnest typische Rechtekombinationen fachlich ein.
level: einfach
tags:
- linux
- rechte
- chmod
- dateirechte
- ls
draft: false
practiceIdeas:
- Lies mehrere Rechteketten wie rw-r--r-- oder rwxr-xr-x laut in Besitzer, Gruppe
  und andere auf.
- Vergleiche eine Datei mit 644 und ein Skript mit 755 und erkläre den Unterschied.
- Ordne zu, wann ein x-Bit bei Dateien wichtig ist und wann bei Verzeichnissen.
commonMistakes:
- Die drei Rechteblöcke nicht sauber den Gruppen Besitzer, Gruppe und andere zuordnen.
- x immer nur als „ausführen“ lesen und seine Bedeutung bei Verzeichnissen übersehen.
- chmod-Werte auswendig nutzen, ohne zu verstehen, welche Rechte dadurch gesetzt werden.
keyTakeaways:
- Linux trennt Rechte immer in Besitzer, Gruppe und andere.
- r, w und x haben je nach Datei oder Verzeichnis leicht unterschiedliche praktische
  Wirkung.
- Rechte sollten bewusst gesetzt werden und nicht zufällig entstehen.
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Dateirechte legen fest, wer etwas lesen, ändern oder ausführen darf. Genau deshalb sind sie in Linux ein Kernpunkt für Ordnung und Sicherheit.</p>
  <ul>
    <li>Du verstehst die Rollen Besitzer, Gruppe und andere.</li>
    <li>Du liest Zeichenfolgen wie <code>rw-r--r--</code>.</li>
    <li>Du erkennst, wann Rechte zu offen oder zu eng gesetzt sind.</li>
  </ul>
</div>

## Was du hier lernst

Auf dieser Seite lernst du,

- Du liest einfache Linux-Dateirechte sicher.
- Du unterscheidest Besitzer, Gruppe und andere.
- Du ordnest typische Rechtekombinationen fachlich ein.

## Grundidee

Linux behandelt nicht alle Benutzer gleich. Für jede Datei und jeden Ordner wird unterschieden, was erlaubt ist.

Die drei wichtigen Gruppen sind:

- Besitzer
- Gruppe
- andere

Die drei wichtigen Rechte sind:

- `r` = lesen
- `w` = schreiben
- `x` = ausführen

## Rechte lesen

Eine typische Rechteanzeige sieht so aus:

<div class="wide-example">

```text
rw-r--r--
```

</div>

Das liest man in drei Blöcken:

- `rw-` für den Besitzer
- `r--` für die Gruppe
- `r--` für andere

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Rechte <code>rw-r--r--</code></h3>
  <ul>
    <li>Besitzer: lesen und schreiben</li>
    <li>Gruppe: nur lesen</li>
    <li>Andere: nur lesen</li>
  </ul>
</div>

## Warum diese Trennung wichtig ist

Gerade in Mehrbenutzersystemen sollen nicht alle alles ändern dürfen. Rechte schützen Inhalte und sorgen dafür, dass Verantwortlichkeiten klar bleiben.

Das ist besonders wichtig bei:

- persönlichen Dateien,
- Konfigurationsdateien,
- Skripten,
- gemeinsam genutzten Arbeitsbereichen.

## Rechte bewusst interpretieren

Nicht jede Rechtekombination ist automatisch sinnvoll. Man sollte immer fragen:

- Wer muss lesen dürfen?
- Wer muss schreiben dürfen?
- Muss etwas überhaupt ausführbar sein?

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Was du in der Linux-Lernshell testen solltest</h3>
  <ul>
    <li><code>ls -l</code> um Rechte sichtbar zu machen</li>
    <li>Dateien mit unterschiedlichen Rechten vergleichen</li>
    <li>überlegen, welche Rolle Besitzer, Gruppe und andere jeweils haben</li>
  </ul>
  <p>Später kann die universelle Shell genau dafür vorbereitete Beispieldateien bereitstellen.</p>
</div>

## Rechte und Homeverzeichnis

Besonders gut sieht man das Thema im Homeverzeichnis. Dort liegen oft persönliche Dateien, die nicht für alle frei änderbar sein sollen.

Deshalb ist Dateirechte-Verständnis keine Nebensache, sondern direkte Alltagspraxis in Linux.

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Besitzer, Gruppe und andere werden verwechselt.</li>
    <li><code>r</code>, <code>w</code> und <code>x</code> werden zu ungenau gelesen.</li>
    <li>Man glaubt, mehr Rechte seien automatisch besser.</li>
    <li>Ausführbarkeit wird gesetzt, obwohl es fachlich keinen Sinn ergibt.</li>
    <li>Rechte werden auswendig gelernt statt in ihrer Wirkung verstanden.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Dateirechte steuern Zugriffe in Linux.</li>
    <li>Es gibt die drei Rollen Besitzer, Gruppe und andere.</li>
    <li><code>r</code>, <code>w</code> und <code>x</code> beschreiben lesen, schreiben und ausführen.</li>
    <li>Rechte sollten bewusst und nicht zufällig gesetzt werden.</li>
    <li>Wer Rechte lesen kann, versteht Linux deutlich besser.</li>
  </ul>
</div>


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Dateirechte** oder um eng verwandte Begriffe aus **system**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du liest einfache Linux-Dateirechte sicher.?
- Kannst du in eigenen Worten erklären, wie du du unterscheidest Besitzer, Gruppe und andere.?
- Kannst du in eigenen Worten erklären, wie du du ordnest typische Rechtekombinationen fachlich ein.?

## Merksätze

- Linux trennt Rechte immer in Besitzer, Gruppe und andere.
- r, w und x haben je nach Datei oder Verzeichnis leicht unterschiedliche praktische Wirkung.
- Rechte sollten bewusst gesetzt werden und nicht zufällig entstehen.
