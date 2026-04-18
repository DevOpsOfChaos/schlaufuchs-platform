---
title: Cookies und Sessions – Grundidee
description: Verstehe, wie Websites Zustände über mehrere Anfragen hinweg wiedererkennen und warum Cookies und Sessions dabei unterschiedliche Rollen haben.
subject: informatik
section: Sicherheit
topicPath:
  - sicherheit
  - starke-passwoerter-und-authentifizierung
  - cookies-und-sessions-grundidee
learningGoals:
  - Du erklärst die Grundidee von Cookies und Sessions.
  - Du beschreibst, warum Websites ohne gespeicherten Zustand vieles nicht wiedererkennen könnten.
  - Du trennst lokale Merkhilfe im Browser und serverseitigen Sitzungszustand sauber voneinander.
practiceIdeas:
  - Denke einen Login gedanklich über mehrere Seitenaufrufe hinweg durch.
  - Vergleiche einen wiedererkannten Warenkorb mit einer komplett vergessenen Sitzung.
  - Lies Cookies und Sessions nicht als austauschbare Wörter, sondern als zusammenspielende Rollen.
commonMistakes:
  - Cookie und Session gleichzusetzen.
  - zu denken, der Server kenne eine Anmeldung automatisch bei jeder neuen Anfrage.
  - jeden Cookie sofort als Passwortspeicher zu missverstehen.
keyTakeaways:
  - HTTP-Anfragen sind zunächst zustandsarm und müssen oft ergänzt werden.
  - Cookies helfen dem Browser, Informationen zwischen Anfragen mitzunehmen.
  - Sessions helfen dem Server, einen zusammenhängenden Nutzungsvorgang wiederzuerkennen.
recognizeSignals:
  - Es geht um Login, Warenkorb, Wiedererkennung oder gespeicherten Zustand.
  - Du sollst erklären, warum eine Website etwas „merkt“ oder nach dem Neuladen wieder weiß.
  - In Beispielen ist die Zustandslogik wichtiger als ein einzelner Fachbegriff.
selfCheckPoints:
  - Kann ich Cookie und Session auseinanderhalten?
  - Kann ich erklären, warum Wiedererkennung über mehrere Anfragen nötig ist?
  - Kann ich einen Login gedanklich als Zustandskette beschreiben?
tags:
  - informatik
  - sicherheit
  - cookie
  - session
  - login
level: mittel
draft: false
---

## Grundidee

Eine einzelne Anfrage an eine Website ist zunächst nur ein einzelner Kontakt. Trotzdem erwarten wir, dass ein Shop den Warenkorb behält oder ein Dienst merkt, dass wir bereits eingeloggt sind. Genau hier kommen Cookies und Sessions ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Login soll nach dem nächsten Klick noch gelten</h3>
  <p>Du meldest dich an und öffnest danach dein Profil. Ohne eine Form von Wiedererkennung müsste die Website jede neue Anfrage wie einen ganz neuen Besuch behandeln. Damit das nicht passiert, braucht es einen gespeicherten Zusammenhang über mehrere Schritte hinweg.</p>
</div>

## Zwei Rollen im Zusammenspiel

<div class="compare-card">
  <p class="card-kicker">Begriffe trennen</p>
  <h3>Beides hilft bei Wiedererkennung, aber nicht auf dieselbe Weise</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Cookie</strong>
      <span>Eine kleine Information, die der Browser speichert und bei späteren Anfragen wieder mitsenden kann.</span>
    </div>
    <div class="compare-item">
      <strong>Session</strong>
      <span>Ein zusammenhängender serverseitiger Sitzungszustand, mit dem Anfragen einer aktiven Nutzung zugeordnet werden.</span>
    </div>
  </div>
</div>

## Denkbild: Wiedererkennung über mehrere Schritte

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Vom Login zur wiedererkannten Seite</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Anmeldung</strong><span>Die Nutzenden schicken Zugangsdaten an den Dienst.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Session entsteht</strong><span>Der Server merkt sich den zusammenhängenden Sitzungszustand.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Browser sendet Cookie</strong><span>Spätere Anfragen können zur richtigen Sitzung zugeordnet werden.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Profil bleibt erreichbar</strong><span>Die Website erkennt den Besuch als zusammenhängend wieder.</span></div>
  </div>
</div>

## Warum das sicherheitsrelevant ist

Wenn Wiedererkennung schlecht umgesetzt ist, kann es Probleme mit Sitzungsdiebstahl, ungewollter Weitergabe oder fehlender Abmeldung geben. Darum ist die Zustandslogik nicht nur technisch praktisch, sondern auch sicherheitsrelevant.

## Eine ruhige Prüfstrategie

1. Was soll die Website zwischen zwei Anfragen wiedererkennen?
2. Welche Information bleibt im Browser sichtbar oder gespeichert?
3. Welche Zustandslogik liegt auf dem Server?
4. Was passiert nach Abmeldung oder nach Ablauf der Sitzung?

<div class="note-panel">
  <p><strong>Merke:</strong> Cookies und Sessions sind keine identischen Dinge. Der Browser merkt sich etwas mit, der Server führt einen zusammenhängenden Sitzungszustand.</p>
</div>
