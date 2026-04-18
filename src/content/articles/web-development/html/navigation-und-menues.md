---
title: Navigation und Menüs
description: Verstehe, wie Navigation die Struktur einer Website sichtbar macht und warum Menüs klar, erreichbar und konsistent aufgebaut sein müssen.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
tags:
  - navigation
  - menue
  - struktur
  - accessibility
learningGoals:
  - "Du erklärst, warum Navigation die Seitenstruktur sichtbar macht."
  - "Du erkennst, warum Menüs konsistent und erreichbar aufgebaut sein müssen."
  - "Du unterscheidest grob zwischen Navigationsstruktur und bloßer Linksammlung."
practiceIdeas:
  - "Vergleiche zwei Menüs danach, wie klar ihre Struktur ist."
  - "Prüfe bei einer Navigation, ob Ober- und Unterpunkte verständlich bleiben."
  - "Ordne einer kleinen Website sinnvolle Navigationspunkte zu."
commonMistakes:
  - "Ein Menü nur optisch statt strukturell zu planen."
  - "Unterpunkte zu verstecken, ohne alternative Zugänge mitzudenken."
  - "Links zu sammeln, ohne klare Hierarchie oder Beschriftung."
keyTakeaways:
  - "Navigation zeigt die Struktur einer Website."
  - "Menüs müssen klar beschriftet, konsistent und erreichbar sein."
  - "Gute Navigation hilft nicht nur beim Finden, sondern auch beim Verstehen des Aufbaus."
recognizeSignals:
  - "Es geht um Navigation, Menüs, Hierarchie oder Zugänglichkeit von Website-Strukturen."
  - "Du sollst nicht nur Links benennen, sondern Struktur und Erreichbarkeit beurteilen."
  - "Ein Beispiel fragt nach Oberpunkten, Unterpunkten oder Bedienbarkeit eines Menüs."
selfCheckPoints:
  - "Kann ich erklären, warum Navigation mehr ist als eine Linkliste?"
  - "Kann ich benennen, was ein Menü konsistent und zugänglich macht?"
  - "Kann ich eine kleine Seitenstruktur in sinnvolle Navigationspunkte gliedern?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Navigation ist ein zentrales Orientierungssystem einer Website. Sie zeigt nicht nur Wege an, sondern macht die Struktur des Angebots sichtbar.

Darum ist ein gutes Menü nicht bloß eine Designfrage, sondern auch eine Frage von Verständlichkeit und Zugänglichkeit.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Untermenü braucht einen zweiten Weg</h3>
  <p>Wenn Unterpunkte nur in einem Fly-out erscheinen, sollten sie trotzdem anders erreichbar bleiben. So bleibt die Seitenstruktur auch dann zugänglich, wenn das Menü nicht perfekt bedient werden kann.</p>
</div>

## Navigation zeigt Hierarchie

Wenn ein Menü gut geplant ist, erkennt man daran oft schon,

- welche Hauptbereiche es gibt,
- welche Inhalte zusammengehören,
- und wo Unterseiten eingeordnet sind.

So hilft Navigation nicht nur beim Klicken, sondern auch beim inhaltlichen Verstehen.

<div class="figure-card">
  <p class="card-kicker">Strukturbild</p>
  <h3>Von Inhalten zur Navigation</h3>
  <div class="signal-flow compact">
    <div><strong>Inhalte ordnen</strong><span>Was gehört zusammen?</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Hauptpunkte bilden</strong><span>klare Oberbereiche benennen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Unterpunkte zuordnen</strong><span>Hierarchie sichtbar machen</span></div>
  </div>
</div>

## Menüs müssen erreichbar bleiben

Gerade bei Untermenüs reicht es nicht, nur optisch etwas einzublenden. Nutzerinnen und Nutzer müssen Unterpunkte auch zuverlässig erreichen können – nicht nur mit Maus, sondern auch mit Tastatur und klarer Struktur.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Linksammlung</p>
    <h3>Alles nebeneinander</h3>
    <p>Viele Links sind vorhanden, aber die Struktur ist kaum erkennbar.</p>
  </section>
  <section>
    <p class="card-kicker">Navigation</p>
    <h3>Struktur wird sichtbar</h3>
    <p>Haupt- und Unterpunkte sind sinnvoll geordnet, erreichbar und verständlich benannt.</p>
  </section>
</div>

## Ein kleines HTML-Grundgerüst

<pre><code>&lt;nav aria-label="Hauptnavigation"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/lernen"&gt;Lernen&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/aufgaben"&gt;Aufgaben&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/kontakt"&gt;Kontakt&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

## Konsistenz ist wichtiger als kreative Effekte

Ein Menü wirkt dann gut, wenn Bezeichnungen, Positionen und Verhalten verlässlich bleiben. Wechselnde Begriffe, unstete Hierarchien oder versteckte Wege machen eine Seite schnell unruhig und schwer nutzbar.

## Woran gute Navigation erkennbar wird

Eine gute Navigation ist meist dann gegeben, wenn

- Hauptpunkte verständlich benannt sind,
- Unterpunkte logisch zugeordnet sind,
- die Hierarchie ruhig bleibt,
- und wichtige Ziele nicht versteckt werden.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Menü soll nicht beeindrucken, sondern Orientierung geben. Gute Navigation macht Inhalte lesbar, bevor überhaupt geklickt wird.</p>
</div>

## Von der Seitenstruktur zum Menü

Oft ist es hilfreich, zuerst die Inhalte einer Website zu ordnen und erst danach ein Menü zu bauen. Dann wird das Menü zu einem sichtbaren Ausdruck der Struktur – nicht zu einer zufälligen Liste von Links.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So planst du Navigation ruhiger</h3>
  <ul>
    <li>Sortiere Inhalte zuerst nach Themen und Beziehungen.</li>
    <li>Bilde daraus verständliche Hauptpunkte.</li>
    <li>Prüfe dann, ob Unterpunkte klar eingeordnet und auch tatsächlich erreichbar sind.</li>
  </ul>
</div>
