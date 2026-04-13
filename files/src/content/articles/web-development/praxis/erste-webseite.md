---
title: Erste Webseite – Grundlagen
description: Führe HTML und CSS in einem kleinen ersten Projekt zusammen und lerne
  die wichtigsten Schritte für eine saubere Startseite.
subject: web-development
section: Praxis
topicPath:
- praxis
- erste-webseite
learningGoals:
- Du verstehst den Aufbau einer ersten kleinen Webseite.
- Du trennst Struktur und Gestaltung sauber.
- Du planst kleine Webprojekte in klaren Schritten.
practiceIdeas:
- Plane eine Miniseite zuerst als Struktur und dann als Gestaltung.
- Trenne in einem kleinen Projekt HTML-Aufbau und CSS-Aufgaben.
- Prüfe, welche Teile Struktur und welche Darstellung sind.
commonMistakes:
- Zu früh an Details zu denken, bevor die Struktur steht.
- HTML und CSS als einen ungetrennten Block zu sehen.
- Eine erste Seite zu groß statt bewusst klein zu planen.
keyTakeaways:
- Eine erste Webseite entsteht in kleinen Schritten.
- Struktur kommt vor Gestaltung.
- Schon kleine Projekte zeigen das Zusammenspiel von HTML und CSS.
tags:
- web-development
- html
- css
- erste-webseite
- praxis
level: einfach
draft: false
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Eine erste Webseite muss nicht spektakulär sein. Für den Einstieg ist viel wichtiger, dass sie <strong>klar aufgebaut</strong>, <strong>lesbar</strong> und <strong>sauber organisiert</strong> ist. Genau daran lernst du, wie HTML und CSS wirklich zusammenarbeiten.</p>
  <ul>
    <li>Du planst eine kleine Seite mit wenigen, aber sinnvollen Bereichen.</li>
    <li>Du unterscheidest klar zwischen Inhalt und Gestaltung.</li>
    <li>Du entwickelst ein ruhiges Einstiegsprojekt statt eines chaotischen Sammelversuchs.</li>
  </ul>
</div>

## Was du hier lernst

Auf dieser Seite lernst du,

- Du verstehst den Aufbau einer ersten kleinen Webseite.
- Du trennst Struktur und Gestaltung sauber.
- Du planst kleine Webprojekte in klaren Schritten.

## Die Grundidee eines ersten Webprojekts

Bei einer ersten Webseite geht es nicht darum, sofort alles zu können. Sie ist ein Lernprojekt, in dem du Struktur, Gestaltung und Ordnung zusammen übst.

Ein gutes erstes Projekt beantwortet vor allem diese Fragen:

- Welche Inhalte sollen überhaupt auf die Seite?
- Wie werden diese Inhalte in HTML gegliedert?
- Wie wird daraus mit CSS eine lesbare Gestaltung?

## Welche Dateien meistens reichen

Für ein kleines erstes Projekt genügen oft schon zwei zentrale Dateien:

- <code>index.html</code>
- <code>style.css</code>

Die HTML-Datei enthält den Inhalt und die Struktur. Die CSS-Datei beschreibt Schrift, Farben, Abstände und das allgemeine Erscheinungsbild.

<div class="wide-example">

```text
projekt/
├── index.html
└── style.css
```

</div>

## Sinnvolle Grundstruktur einer ersten Seite

Eine erste Webseite kann sehr einfach aufgebaut sein. Zum Beispiel so:

- Überschrift oder Seitenkopf,
- kurzer Einleitungstext,
- Navigation,
- ein bis zwei Inhaltsabschnitte,
- Footer.

Das reicht bereits, um saubere Struktur, semantische Bereiche und erste Gestaltungsschritte zu lernen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine kleine persönliche Startseite</h3>
  <p>Stell dir eine Seite vor, die oben deinen Namen zeigt, darunter einen kurzen Einführungstext, dann einen Abschnitt „Über mich“, einen Bereich mit drei Interessen und ganz unten einen einfachen Footer. Dieses Projekt ist klein, aber didaktisch stark, weil du Struktur und Gestaltung bewusst kombinierst.</p>
</div>

## HTML und CSS zusammendenken

HTML und CSS haben unterschiedliche Rollen.

- <strong>HTML</strong> beschreibt den Inhalt und seine Struktur.
- <strong>CSS</strong> beschreibt, wie dieser Inhalt aussieht.

Gerade beim ersten Projekt ist diese Trennung wichtig. Wer beides durcheinanderdenkt, baut meist unruhig, unübersichtlich und schwer wartbar.

## Warum Einfachheit am Anfang gut ist

Viele Anfänger möchten sofort Animationen, viele Farben, mehrere Spalten und unzählige Klassen benutzen. Das führt schnell dazu, dass nichts mehr wirklich klar ist.

Besser ist:

- wenige Bereiche,
- ruhige Typografie,
- klare Abstände,
- wenige Farben,
- und nachvollziehbare Benennungen.

## Sinnvolle Gestaltungsentscheidungen

Für ein erstes Projekt sind diese Entscheidungen oft besonders hilfreich:

- eine gut lesbare Überschrift,
- ausreichend Abstand zwischen Bereichen,
- höchstens wenige Farben,
- klar unterscheidbare Abschnitte,
- eine einfache, stabile Navigation.

<div class="practice-card">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So planst du deine erste Seite sinnvoll</h3>
  <ul>
    <li>Lege zuerst die Inhalte fest, bevor du an Farben denkst.</li>
    <li>Skizziere die Reihenfolge der Bereiche auf Papier oder in Stichpunkten.</li>
    <li>Baue die HTML-Struktur zuerst fertig und beginne dann mit CSS.</li>
    <li>Frage dich bei jeder Regel: Macht sie die Seite klarer oder nur voller?</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>HTML und CSS werden nicht sauber getrennt gedacht.</li>
    <li>Die CSS-Datei wird nicht oder falsch eingebunden.</li>
    <li>Es werden zu viele Farben und Effekte gleichzeitig eingesetzt.</li>
    <li>Bereiche stehen ohne klare Reihenfolge auf der Seite.</li>
    <li>Klassen werden zufällig statt systematisch vergeben.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Eine erste Webseite braucht Klarheit, nicht Komplexität.</li>
    <li>HTML liefert Struktur, CSS liefert Gestaltung.</li>
    <li>Wenige Dateien und ruhige Layouts sind für den Einstieg ideal.</li>
    <li>Kleine saubere Projekte lehren mehr als große chaotische Versuche.</li>
    <li>Erst die Inhalte ordnen, dann die Gestaltung verfeinern.</li>
  </ul>
</div>


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Erste Webseite – Grundlagen** oder um eng verwandte Begriffe aus **Praxis**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du verstehst den Aufbau einer ersten kleinen Webseite.?
- Kannst du in eigenen Worten erklären, wie du du trennst Struktur und Gestaltung sauber.?
- Kannst du in eigenen Worten erklären, wie du du planst kleine Webprojekte in klaren Schritten.?

## Merksätze

- Eine erste Webseite entsteht in kleinen Schritten.
- Struktur kommt vor Gestaltung.
- Schon kleine Projekte zeigen das Zusammenspiel von HTML und CSS.
