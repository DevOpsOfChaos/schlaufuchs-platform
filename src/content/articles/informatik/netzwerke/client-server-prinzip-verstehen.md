---
title: Client-Server-Prinzip verstehen
description: Verstehe, wie Anfragen und Antworten zwischen Client und Server zusammen ein digitales System bilden.
subject: informatik
section: Netzwerke
topicPath:
  - netzwerke
  - client-server-prinzip-verstehen
learningGoals:
  - Du beschreibst die Rollen von Client und Server sauber.
  - Du erklärst eine Anfrage als Weg von einer Aktion zur Antwort.
  - Du erkennst, warum viele Internetdienste nach demselben Grundmuster arbeiten.
practiceIdeas:
  - Ordne bei einer Website, einer App oder einem Messenger, was Client und was Server ist.
  - Beschreibe den Weg einer Suchanfrage in eigenen Worten vom Klick bis zur Antwort.
  - Vergleiche zwei Beispiele und prüfe, ob beide demselben Client-Server-Muster folgen.
commonMistakes:
  - Den Client mit dem ganzen Internet gleichzusetzen.
  - Den Server nur als Speicherort statt als aktiven Dienst zu sehen.
  - Nur den Start auf dem eigenen Gerät zu sehen, aber den Antwortweg nicht mitzudenken.
keyTakeaways:
  - Ein Client stellt Anfragen, ein Server beantwortet sie.
  - Viele digitale Dienste folgen demselben Grundmuster aus Anfrage und Antwort.
  - Wer den Anfrageweg versteht, kann Systeme ruhiger erklären und Fehler besser einordnen.
recognizeSignals:
  - Es geht um Webseiten, Apps, Logins, Suchanfragen oder Netzwerke.
  - Du sollst Rollen im System unterscheiden statt nur Geräte aufzuzählen.
  - In einem Beispiel musst du erklären, wo die Antwort eigentlich herkommt.
selfCheckPoints:
  - Kann ich Client und Server funktional unterscheiden?
  - Kann ich einen Anfrageweg Schritt für Schritt beschreiben?
  - Kann ich das Prinzip auf verschiedene Dienste übertragen?
tags:
  - netzwerke
  - client
  - server
  - anfrage
  - antwort
level: einfach
draft: false
---

## Grundidee

Viele digitale Dienste wirken von außen einfach: Du klickst auf einen Link, tippst einen Suchbegriff ein oder meldest dich an. Im Hintergrund läuft aber fast immer dieselbe Grundstruktur: **Ein Client stellt eine Anfrage, ein Server antwortet darauf.**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Website öffnen</h3>
  <p>Du tippst eine Adresse in den Browser ein. Der Browser schickt eine Anfrage. Ein Server verarbeitet diese Anfrage und sendet die passenden Daten zurück. Erst dann erscheint die Website auf deinem Gerät. Genau das ist Client-Server-Denken in einer sehr typischen Form.</p>
</div>

## Was ist der Client?

Der Client ist der Teil des Systems, der aus Sicht der Nutzenden direkt benutzt wird. Das kann zum Beispiel sein:

- ein Browser,
- eine App,
- ein Chatprogramm,
- oder ein anderes Gerät mit einer konkreten Anfrage.

Der Client startet also typischerweise die Kommunikation.

## Was ist der Server?

Der Server ist der Teil des Systems, der Dienste bereitstellt. Er nimmt Anfragen an, verarbeitet sie nach Regeln und sendet Antworten zurück.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Client</p>
    <h3>Fragt an</h3>
    <p>Der Client startet die Aktion, zum Beispiel durch einen Klick, eine Eingabe oder einen Login.</p>
  </section>
  <section>
    <p class="card-kicker">Server</p>
    <h3>Bearbeitet und antwortet</h3>
    <p>Der Server stellt Daten oder Funktionen bereit und liefert eine passende Antwort zurück.</p>
  </section>
</div>

## So läuft eine typische Anfrage ab

<div class="figure-card">
  <p class="card-kicker">Ablauf</p>
  <h3>Vom Klick zur sichtbaren Antwort</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Client-Aktion</strong><span>Ein Browser, eine App oder ein Programm startet die Anfrage.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Server verarbeitet</strong><span>Der Dienst prüft die Anfrage und bereitet die Antwort vor.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Antwort zurück</strong><span>Das Ergebnis wird an den Client gesendet und dort sichtbar.</span></div>
  </div>
</div>

## Mini-Demo: Der Bildschirm ist nicht der ganze Dienst

<div class="compare-card">
  <p class="card-kicker">Systemsicht</p>
  <h3>Was auf deinem Gerät sichtbar ist, ist nur ein Teil der Gesamtstruktur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Client-Seite</strong>
      <span>Hier werden Eingaben gemacht, Klicks ausgelöst und Antworten angezeigt.</span>
    </div>
    <div class="compare-item">
      <strong>Server-Seite</strong>
      <span>Hier werden Daten verarbeitet, geprüft, gespeichert oder als Antwort zusammengesetzt.</span>
    </div>
  </div>
</div>

## Warum das Prinzip so häufig ist

Viele Systeme arbeiten mit derselben Grundidee:

- Browser ruft Website ab,
- Messenger schickt Nachricht,
- App lädt Kontodaten,
- Shop prüft Warenkorb,
- Login sendet Anmeldedaten.

Die Oberfläche wirkt unterschiedlich, aber die Grundlogik aus Anfrage und Antwort bleibt oft sehr ähnlich.

## Was oft davor und danach passiert

Zwischen Client und Server können noch weitere Schritte liegen, etwa:

- Namensauflösung,
- Protokolle für Anfrage und Antwort,
- Zwischenspeicherung,
- Datenbanken oder andere Dienste hinter dem Server.

Trotzdem bleibt das Grundmuster verständlich: **Eine Client-Aktion löst eine Server-Antwort aus.**

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Client und Server als Rollen lesen</h3>
    <p>Dann wird klar, wer anfragt, wer antwortet und wo eine Störung im Ablauf liegen könnte.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur Geräte aufzählen</h3>
    <p>Dann fehlt die eigentliche Funktionslogik des Systems und man versteht den Anfrageweg nur oberflächlich.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Wer startet die Aktion?
2. Welcher Dienst bearbeitet die Anfrage?
3. Woher kommt die Antwort wirklich?
4. Was ist auf dem Client nur sichtbar, aber nicht dort berechnet oder gespeichert?

<div class="note-panel">
  <p><strong>Merke:</strong> Client und Server sind vor allem funktionale Rollen im Ablauf. Der Client startet typischerweise, der Server beantwortet und verarbeitet.</p>
</div>
