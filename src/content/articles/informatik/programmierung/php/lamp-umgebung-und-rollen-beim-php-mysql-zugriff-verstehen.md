---
title: LAMP-Umgebung und Rollen beim PHP-MySQL-Zugriff verstehen
description: Verstehe, welche Rolle Browser, Webserver, PHP und Datenbank bei einer Webanfrage spielen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - lamp-umgebung-und-rollen-beim-php-mysql-zugriff-verstehen
learningGoals:
  - Du unterscheidest Browser, Webserver, PHP und Datenbank fachlich.
  - Du erklärst, warum ein Datenbankzugriff typischerweise über ein PHP-Skript läuft.
  - Du liest den Gesamtablauf einer Anfrage ruhiger als System.
practiceIdeas:
  - Beschreibe den Weg einer Anfrage von der URL bis zur HTML-Antwort.
  - Ordne, an welcher Stelle SQL überhaupt ins Spiel kommt.
  - Erkläre, warum der Browser nicht direkt mit den PHP-Variablen der Serverseite arbeitet.
commonMistakes:
  - Browser und Serverlogik zusammenzuwerfen.
  - Zu denken, die Datenbank antworte direkt an den Browser.
  - PHP und MySQL als „eine Sache“ zu lesen.
keyTakeaways:
  - Browser, Webserver, PHP und Datenbank haben unterschiedliche Rollen.
  - PHP verbindet häufig die Browseranfrage mit Datenbanklogik und HTML-Ausgabe.
  - Erst der Gesamtablauf macht Backend-Themen verständlich.
recognizeSignals:
  - Es geht um Webserver, PHP-Processor, MySQL-Server oder Request/Response.
  - Ein Beispiel zeigt mehrere Hosts oder Schichten.
  - Du sollst ein Systembild statt nur Einzelfunktionen erklären.
selfCheckPoints:
  - Kann ich die Rollen der vier Teile sauber trennen?
  - Kann ich sagen, warum die Datenbank nicht direkt den Browser bedient?
  - Kann ich den Gesamtweg einer Anfrage beschreiben?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - mysql
  - backend
  - lamp
draft: false
---

## Grundidee

Bei einer typischen Webanwendung arbeiten mehrere Rollen zusammen: Browser, Webserver, PHP und Datenbank. Erst wenn diese Rollen getrennt verstanden werden, wirkt Backend-Logik nicht mehr wie ein chaotischer Block.

<div class="figure-card">
  <p class="card-kicker">Systembild</p>
  <h3>So läuft ein einfacher Seitenaufruf mit Datenbankzugriff</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Browser</strong><span>sendet eine Anfrage</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Webserver</strong><span>nimmt die Ressource an und reicht PHP weiter</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>PHP</strong><span>verarbeitet Logik und fragt bei Bedarf die Datenbank</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>MySQL</strong><span>liefert Daten zurück</span></div>
  </div>
</div>

## Die Rollen getrennt lesen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Browser</p>
    <h3>Fragt an und zeigt an</h3>
    <p>Der Browser stellt die Anfrage und zeigt das Ergebnis, aber er verarbeitet nicht den PHP-Quelltext auf dem Server.</p>
  </section>
  <section>
    <p class="card-kicker">Webserver</p>
    <h3>Verteilt die Anfrage</h3>
    <p>Er liefert statische Dateien aus oder übergibt PHP-Dateien an die passende Verarbeitung.</p>
  </section>
  <section>
    <p class="card-kicker">PHP</p>
    <h3>Verarbeitet serverseitig</h3>
    <p>Hier entstehen Logik, Datenbankzugriff und die HTML-Antwort.</p>
  </section>
  <section>
    <p class="card-kicker">MySQL</p>
    <h3>Speichert und liefert Daten</h3>
    <p>Die Datenbank beantwortet Datenanfragen, aber sie spricht nicht direkt „mit dem Browser“.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei einem PHP-MySQL-System ist PHP typischerweise die vermittelnde Schicht zwischen Browseranfrage und Datenbankzugriff.</p>
</div>
