---
title: Pfade mit basename, dirname und realpath verstehen
description: Lerne, wie du mit einfachen Werkzeugen Dateinamen, Verzeichnisse und vollständige Pfade sauber auseinanderhältst.
subject: linux
section: Shell
topicPath:
  - shell
  - pfade-mit-basename-dirname-und-realpath
tags:
  - pfad
  - basename
  - dirname
  - realpath
learningGoals:
  - "Du erklärst, was basename, dirname und realpath jeweils sichtbar machen."
  - "Du unterscheidest Dateiname, Ordnerpfad und vollständigen Pfad sauber voneinander."
  - "Du erkennst, warum genaue Pfadangaben in der Shell Missverständnisse verhindern."
practiceIdeas:
  - "Vergleiche denselben Pfad mit basename, dirname und realpath."
  - "Prüfe bei einem Beispiel, welche Information für den nächsten Arbeitsschritt wichtig ist."
  - "Nutze Pfadwerkzeuge, um einen Dateipfad in Teilinformationen zu zerlegen."
commonMistakes:
  - "Dateiname und Verzeichnispfad gleichzusetzen."
  - "Den aktuellen Ort mit dem vollständigen Zielpfad zu verwechseln."
  - "Pfade nur optisch statt strukturell zu lesen."
keyTakeaways:
  - "basename zeigt den letzten Namensteil eines Pfades."
  - "dirname zeigt das übergeordnete Verzeichnis."
  - "realpath macht einen vollständigen, aufgelösten Pfad sichtbar."
recognizeSignals:
  - "Es geht um Pfade, Dateinamen, Verzeichnisse oder die genaue Lage einer Datei."
  - "Du sollst einen Pfad in Bestandteile zerlegen oder eindeutig angeben."
  - "Ein Beispiel fragt, welcher Teil eines Pfades der Name und welcher das Verzeichnis ist."
selfCheckPoints:
  - "Kann ich basename, dirname und realpath in eigenen Worten unterscheiden?"
  - "Kann ich an einem Beispiel Dateiname und Verzeichnis sauber trennen?"
  - "Kann ich erklären, warum vollständige Pfade in der Shell hilfreich sind?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

In der Shell ist ein Pfad nicht bloß Text, sondern eine strukturierte Wegbeschreibung. Wer Pfade sauber lesen kann, arbeitet ruhiger, vermeidet Missverständnisse und versteht besser, worauf sich ein Befehl eigentlich bezieht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Datei im Projektordner</h3>
  <p>Aus einem Pfad wie <code>/home/fox/projekte/app/config/settings.json</code> wird mit <code>basename</code> der Dateiname, mit <code>dirname</code> der übergeordnete Ordner und mit <code>realpath</code> der vollständige Bezugspunkt.</p>
</div>

<div class="comparison-grid">
  <section>
    <p class="card-kicker">basename</p>
    <h3>Was ist der letzte Name?</h3>
    <p>Gut, wenn du nur wissen willst, welche Datei oder welcher Ordner am Ende eines Pfads steht.</p>
    <pre><code>basename /home/fox/projekte/app/config/settings.json
settings.json</code></pre>
  </section>
  <section>
    <p class="card-kicker">dirname</p>
    <h3>Wo liegt dieser Eintrag?</h3>
    <p>Hilfreich, wenn du den umgebenden Ordner brauchst, etwa für den nächsten Wechsel oder Vergleich.</p>
    <pre><code>dirname /home/fox/projekte/app/config/settings.json
/home/fox/projekte/app/config</code></pre>
  </section>
  <section>
    <p class="card-kicker">realpath</p>
    <h3>Wie lautet der eindeutige Pfad?</h3>
    <p>Gut, wenn du Missverständnisse durch relative Angaben vermeiden willst.</p>
    <pre><code>realpath settings.json
/home/fox/projekte/app/config/settings.json</code></pre>
  </section>
</div>

## Drei Werkzeuge, drei Blickwinkel

Pfade lassen sich aus drei nützlichen Perspektiven lesen:

- **Name**: Welcher Eintrag ist gemeint?
- **Ort**: In welchem Verzeichnis liegt er?
- **vollständiger Bezug**: Auf welchen eindeutigen Pfad läuft das Ganze hinaus?

<div class="figure-card">
  <p class="card-kicker">Pfadbild</p>
  <h3>Ein Pfad als zerlegbarer Aufbau</h3>
  <div class="signal-flow compact">
    <div><strong>/home/fox/projekte/app/config</strong><span>Verzeichnisweg</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>settings.json</strong><span>Dateiname</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>vollständiger Bezug</strong><span>eindeutiger Gesamtpfad</span></div>
  </div>
</div>

## Warum diese Trennung hilft

Viele Shell-Probleme entstehen, weil unklar bleibt,

- wo eine Datei liegt,
- welcher Teil der Pfadangabe der Name ist,
- und welches Verzeichnis für den nächsten Schritt wichtig wird.

Pfadwerkzeuge helfen genau an dieser Stelle.

## Typische Situationen in der Praxis

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Beim Lesen</p>
    <h3>Pfad verstehen</h3>
    <p>Du willst nur erkennen, ob sich eine Datei im richtigen Ordner befindet.</p>
  </section>
  <section>
    <p class="card-kicker">Beim Weiterarbeiten</p>
    <h3>Ordner übernehmen</h3>
    <p>Du brauchst das Verzeichnis, um dort weitere Dateien zu prüfen oder dorthin zu wechseln.</p>
  </section>
  <section>
    <p class="card-kicker">Beim Prüfen</p>
    <h3>Eindeutig werden</h3>
    <p>Du willst keine relative Angabe mehr, sondern einen klaren, vollständigen Zielpfad.</p>
  </section>
</div>

## Präzision statt Pfadgefühl

Gerade bei verschachtelten Ordnern reicht ein grober Eindruck oft nicht. Dann hilft es, Pfade nicht nur zu lesen, sondern in ihre Bestandteile zu zerlegen. Das macht Shell-Arbeit sicherer und nachvollziehbarer.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So gehst du bei Pfaden ruhiger vor</h3>
  <ol>
    <li>Frage zuerst: Brauche ich Name, Ordner oder den vollständigen Bezug?</li>
    <li>Wähle dann <code>basename</code>, <code>dirname</code> oder <code>realpath</code>.</li>
    <li>Prüfe am Ende, ob die Ausgabe wirklich die Information liefert, die du für den nächsten Schritt brauchst.</li>
  </ol>
</div>
