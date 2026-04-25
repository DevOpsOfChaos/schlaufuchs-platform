---
title: "HTML – preload, prefetch und Resource Hints einordnen"
description: "Ordne Resource Hints als Priorisierungshilfe ein, ohne jede Datei vorsorglich als wichtig zu markieren."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "performance-und-medien"
  - "preload-prefetch-und-resource-hints-einordnen"
learningGoals:
  - "Du erklärst die Grundidee von preload, prefetch und Resource Hints einordnen."
  - "Du trennst sichtbares Nutzerverhalten, technische Ursache und passende Entscheidung."
  - "Du begründest eine robuste Lösung statt nur einen einzelnen Trick zu merken."
practiceIdeas:
  - "Beschreibe zuerst die sichtbare Situation auf der Seite."
  - "Markiere danach die technische Stelle, an der die Entscheidung getroffen wird."
  - "Formuliere am Ende eine Prüffrage, mit der du die Lösung kontrollierst."
commonMistakes:
  - "Nur den Erfolgsfall oder Schönfall zu betrachten."
  - "Performance, Sicherheit oder Wartbarkeit erst nachträglich zu prüfen."
  - "Werkzeuge zu benutzen, ohne die eigentliche Browserentscheidung zu benennen."
keyTakeaways:
  - "Robuste Webentwicklung verbindet Inhalt, Gestaltung, Verhalten und Prüfung."
  - "Gute Entscheidungen sind sichtbar begründet und nicht nur technisch möglich."
  - "Resource Hints sind Prioritäten, keine Dekoration. Jeder Hinweis sollte eine klare Ladeentscheidung ausdrücken."
recognizeSignals:
  - "Es geht um Ladeverhalten, Diagnose, Sicherheit oder Projektqualität."
  - "Eine Seite funktioniert grundsätzlich, soll aber stabiler, schneller oder verständlicher werden."
  - "Du sollst nicht nur Code schreiben, sondern eine Entscheidung begründen."
selfCheckPoints:
  - "Kann ich die sichtbare Auswirkung für Nutzerinnen und Nutzer benennen?"
  - "Kann ich die technische Ursache von der Lösung trennen?"
  - "Habe ich einen Fehler-, Lade- oder Sicherheitsfall mitgedacht?"
level: "fortgeschritten"
tags:
  - "web development"
  - "html"
  - "performance"
  - "preload"
  - "prefetch"
draft: false
---

## Grundidee

Resource Hints sind Hinweise an den Browser. Sie sind kein Allheilmittel und kein Ersatz für gute Dateigrößen. Wer sie falsch nutzt, macht manchmal genau das Gegenteil: Unwichtige Dateien drängeln sich vor wichtige Inhalte.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die wichtige Schrift ja, die mögliche Unterseite vielleicht nicht</h3>
  <p>Eine Schrift für den sofort sichtbaren Hero-Bereich kann preload verdienen. Ein Skript für eine vielleicht später besuchte Unterseite ist eher ein Kandidat für prefetch oder gar keinen Hinweis.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung als kleiner Ablauf</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-resource-hints-priority.svg" alt="Prioritätenmodell für preload, prefetch und normales Laden." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Die drei wichtigsten Blickrichtungen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Ladepriorität</strong>
    <span>Welche sichtbare oder technische Rolle spielt dieser Teil im Browser?</span>
  </div>
  <div class="visual-item">
    <strong>kritische Ressource</strong>
    <span>Welche Entscheidung muss hier bewusst getroffen werden?</span>
  </div>
  <div class="visual-item">
    <strong>mögliche spätere Navigation</strong>
    <span>Woran erkennst du, ob die Entscheidung wirklich zur Seite passt?</span>
  </div>
</div>

## Mini-Demo

```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="prefetch" href="/wissen/css/layout-grundlagen/">
```

Das Beispiel ist bewusst klein. Es soll nicht alle Sonderfälle abdecken, sondern den fachlichen Kern sichtbar machen: Erst die Aufgabe verstehen, dann die Browserentscheidung treffen, dann prüfen.

## Zwei Lesarten vergleichen

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>So wird aus einem Trick eine begründete Entscheidung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>preload</strong>
      <span>Diese Ressource wird sehr bald für die aktuelle Seite gebraucht.</span>
    </div>
    <div class="compare-item">
      <strong>prefetch</strong>
      <span>Diese Ressource könnte für eine spätere Navigation nützlich sein.</span>
    </div>
  </div>
</div>

## Ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Aktuelle</strong>
    <span>Aktuelle Seite vor möglicher Zukunft priorisieren.</span>
  </div>
  <div class="step-item">
    <strong>2. Nur</strong>
    <span>Nur wenige wirklich kritische Ressourcen markieren.</span>
  </div>
  <div class="step-item">
    <strong>3. as-Attribut</strong>
    <span>as-Attribut korrekt setzen.</span>
  </div>
  <div class="step-item">
    <strong>4. Nachmessen,</strong>
    <span>Nachmessen, ob der Hinweis tatsächlich hilft.</span>
  </div>
</div>

## Typische Kontrollfragen

- Welche sichtbare Wirkung soll für Nutzerinnen und Nutzer entstehen?
- Welche Ressource, welcher Zustand oder welche Sicherheitseigenschaft ist dafür entscheidend?
- Was passiert im langsamen Netzwerk, bei fehlenden Daten oder bei ungeplanter Eingabe?
- Kann eine andere Person die Entscheidung später nachvollziehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Resource Hints sind Prioritäten, keine Dekoration. Jeder Hinweis sollte eine klare Ladeentscheidung ausdrücken.</p>
</div>
