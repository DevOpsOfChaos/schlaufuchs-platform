---
title: "GET und POST bei Formularen unterscheiden"
description: "Verstehe, wie Formulardaten ankommen und warum GET und POST unterschiedliche Rollen fuer Sichtbarkeit und Zweck haben."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "get-und-post-bei-formularen-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Wenn ein Formular abgeschickt wird, muessen die Eingaben zum Server gelangen. Dabei stellt sich zuerst die ruhige Frage:

**Soll diese Anfrage eher sichtbar und wiederholbar sein oder eher still Daten uebertragen?**

Genau daraus ergibt sich oft schon, ob GET oder POST besser passt.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Sichtbare Anfrage oder stillere Datenuebertragung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>GET</strong>
      <span>Parameter erscheinen oft sichtbar in der URL und passen deshalb gut zu Such oder Filteranfragen.</span>
    </div>
    <div class="compare-item">
      <strong>POST</strong>
      <span>Daten werden typischerweise im Request uebertragen und nicht direkt als URL Parameter sichtbar gemacht.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Suche und Login sind nicht dieselbe Formularidee</h3>
  <p>Eine Suchanfrage darf oft sichtbar und wiederholbar sein. Ein Login Formular soll dagegen Benutzerdaten uebertragen, ohne sie direkt in der URL zu zeigen. Schon diese unterschiedliche Zweckfrage fuehrt oft zur passenden Request Art.</p>
</div>

## Mini-Demo: dieselbe Oberflaeche, andere Formularlogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Nicht die Eingabebox entscheidet, sondern die Art der Anfrage</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>Suche</strong>
      <p style="margin:0.55rem 0 0;">Suchwort soll sichtbar in der URL stehen und erneut aufrufbar bleiben.</p>
      <code>GET</code>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>Login</strong>
      <p style="margin:0.55rem 0 0;">Anmeldedaten werden gesendet, ohne direkt Teil der sichtbaren URL zu werden.</p>
      <code>POST</code>
    </div>
  </div>
</div>

## Was POST nicht automatisch bedeutet

POST ist nicht einfach das magische Sicherheitswort. Die Methode hilft bei der Art der Uebertragung, ersetzt aber nicht weitere Sicherheitslogik, Pruefung oder Transportschutz.

GET und POST erklaeren, **wie eine einzelne Anfrage ankommt**. Sessions erklaeren dagegen, wie Zustand ueber mehrere Anfragen hinweg erhalten oder beendet wird.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zweck fragen</strong>
    <span>Geht es um Suche, Ansicht oder um das Senden und Verarbeiten von Eingaben?</span>
  </div>
  <div class="step-item">
    <strong>2. Sichtbarkeit deuten</strong>
    <span>Sollen Werte sichtbar in der URL auftauchen oder eher nicht?</span>
  </div>
  <div class="step-item">
    <strong>3. Arbeitsweise vergleichen</strong>
    <span>Passt die Anfrage besser zu wiederholbarer Ansicht oder zu Formularuebertragung?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> GET und POST werden ruhiger, wenn du zuerst den Zweck der Anfrage klaerst und erst danach die Technik benennst.</p>
</div>
