---
title: "HTML – Bildgrößen, srcset und sizes für Ladezeit planen"
description: "Verstehe, wie responsive Bilder dem Browser helfen, die passende Bilddatei statt unnötig großer Medien zu laden."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "performance-und-medien"
  - "bildgroessen-srcset-sizes-und-ladezeit"
learningGoals:
  - "Du erklärst die Grundidee von Bildgrößen, srcset und sizes für Ladezeit planen."
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
  - "Responsive Bilder sparen Ladezeit, wenn HTML dem Browser ehrlich sagt, welche Bildgrößen wirklich gebraucht werden."
recognizeSignals:
  - "Es geht um Ladeverhalten, Diagnose, Sicherheit oder Projektqualität."
  - "Eine Seite funktioniert grundsätzlich, soll aber stabiler, schneller oder verständlicher werden."
  - "Du sollst nicht nur Code schreiben, sondern eine Entscheidung begründen."
selfCheckPoints:
  - "Kann ich die sichtbare Auswirkung für Nutzerinnen und Nutzer benennen?"
  - "Kann ich die technische Ursache von der Lösung trennen?"
  - "Habe ich einen Fehler-, Lade- oder Sicherheitsfall mitgedacht?"
level: "mittel"
tags:
  - "web development"
  - "html"
  - "bilder"
  - "srcset"
  - "performance"
draft: false
---

## Grundidee

Ein Bild kann fachlich korrekt, aber technisch viel zu groß sein. Responsive Bilder lösen nicht das Designproblem, sondern das Ladeproblem: Der Browser bekommt mehrere sinnvolle Varianten und wählt passend zur Anzeigegröße.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Smartphone braucht nicht dasselbe Hero-Bild wie ein Desktop-Monitor</h3>
  <p>Wenn eine Karte auf dem Handy nur 340 Pixel breit ist, muss nicht zwingend ein 2400-Pixel-Bild geladen werden. srcset und sizes beschreiben, welche Datei für welche Breite sinnvoll ist.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung als kleiner Ablauf</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-responsive-images-flow.svg" alt="Schematische Auswahl passender Bildgrößen für unterschiedliche Viewports." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Die drei wichtigsten Blickrichtungen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Anzeigegröße</strong>
    <span>Welche sichtbare oder technische Rolle spielt dieser Teil im Browser?</span>
  </div>
  <div class="visual-item">
    <strong>Dateigröße</strong>
    <span>Welche Entscheidung muss hier bewusst getroffen werden?</span>
  </div>
  <div class="visual-item">
    <strong>Browserentscheidung</strong>
    <span>Woran erkennst du, ob die Entscheidung wirklich zur Seite passt?</span>
  </div>
</div>

## Mini-Demo

```html
<img
  src="karte-800.jpg"
  srcset="karte-400.jpg 400w, karte-800.jpg 800w, karte-1200.jpg 1200w"
  sizes="(max-width: 700px) 92vw, 42rem"
  alt="Lernkarte mit Beispielinhalt"
/>
```

Das Beispiel ist bewusst klein. Es soll nicht alle Sonderfälle abdecken, sondern den fachlichen Kern sichtbar machen: Erst die Aufgabe verstehen, dann die Browserentscheidung treffen, dann prüfen.

## Zwei Lesarten vergleichen

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>So wird aus einem Trick eine begründete Entscheidung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>srcset</strong>
      <span>Welche Bildvarianten stehen zur Verfügung?</span>
    </div>
    <div class="compare-item">
      <strong>sizes</strong>
      <span>Wie groß wird das Bild im Layout ungefähr angezeigt?</span>
    </div>
  </div>
</div>

## Ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Bild</strong>
    <span>Bild im Layout betrachten, nicht nur im Dateisystem.</span>
  </div>
  <div class="step-item">
    <strong>2. Kleine,</strong>
    <span>Kleine, mittlere und große Varianten festlegen.</span>
  </div>
  <div class="step-item">
    <strong>3. sizes</strong>
    <span>sizes passend zur CSS-Breite formulieren.</span>
  </div>
  <div class="step-item">
    <strong>4. Alt-Text</strong>
    <span>Alt-Text weiterhin inhaltlich sauber halten.</span>
  </div>
</div>

## Typische Kontrollfragen

- Welche sichtbare Wirkung soll für Nutzerinnen und Nutzer entstehen?
- Welche Ressource, welcher Zustand oder welche Sicherheitseigenschaft ist dafür entscheidend?
- Was passiert im langsamen Netzwerk, bei fehlenden Daten oder bei ungeplanter Eingabe?
- Kann eine andere Person die Entscheidung später nachvollziehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Responsive Bilder sparen Ladezeit, wenn HTML dem Browser ehrlich sagt, welche Bildgrößen wirklich gebraucht werden.</p>
</div>
