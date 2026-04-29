---
title: "Autocomplete und Inputmode sinnvoll nutzen"
description: "Verstehe, wie diese Attribute Eingaben angenehmer machen und warum sie Hilfen für das Ausfüllen sind, nicht bloß technische Nebensätze."
subject: "web-development"
section: "HTML"
topicPath: ["html", "autocomplete-und-inputmode-sinnvoll-nutzen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Gute Formulare sind nicht nur korrekt, sondern auch **leichter auszufüllen**. Genau hier helfen `autocomplete` und `inputmode`.

Die beiden Attribute wirken ähnlich hilfreich, haben aber unterschiedliche Aufgaben:

- `autocomplete` unterstützt beim Wiederverwenden bekannter Angaben,
- `inputmode` gibt vor allem einen Hinweis auf die passende Tastatur oder Eingabeart.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kontaktformular auf dem Smartphone</h3>
  <p>Eine E-Mail-Adresse, eine Telefonnummer und eine Postleitzahl werden auf einem kleinen Bildschirm viel angenehmer eingegeben, wenn das Formular passende Hinweise gibt. Dann muss der Nutzer nicht unnötig zwischen Tastaturen und Eingabemustern wechseln.</p>
</div>

## Die Rollen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>autocomplete</strong>
    <span>Hilft beim Ausfüllen mit bekannten Daten wie E-Mail, Name oder Adresse.</span>
  </div>
  <div class="visual-item">
    <strong>inputmode</strong>
    <span>Gibt einen Hinweis, welche Art von Tastatur oder Eingabemuster sinnvoll ist.</span>
  </div>
</div>

## Mini-Demo: gleiches Formular, andere Eingabehilfe

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Felder sehen ähnlich aus – die Eingabeunterstützung nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne passende Hinweise</strong></p>
      <div style="display:grid; gap:0.55rem; padding:0.9rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:10px;">E-Mail</div>
        <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:10px;">Telefon</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Felder sind da, aber sie helfen wenig beim schnellen Ausfüllen.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit autocomplete und inputmode</strong></p>
      <div style="display:grid; gap:0.55rem; padding:0.9rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <div style="padding:0.75rem; border:1px solid #60a5fa; border-radius:10px;">E-Mail · bekannte Adresse anbieten</div>
        <div style="padding:0.75rem; border:1px solid #34d399; border-radius:10px;">Telefon · numerische Eingabe unterstützen</div>
      </div>
      <p style="margin:0.55rem 0 0;">Das Formular bleibt simpel, fühlt sich beim Eingeben aber deutlich klüger an.</p>
    </div>
  </div>
</div>

```html
<input type="email" autocomplete="email" inputmode="email" />
<input type="tel" autocomplete="tel" inputmode="tel" />
```

## Eine ruhige Trennung

<div class="compare-card">
  <p class="card-kicker">Wichtige Lesart</p>
  <h3>Ausfüllhilfe ist etwas anderes als Eingabetastatur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>autocomplete</strong>
      <span>Hilft beim Wiederverwenden passender Angaben.</span>
    </div>
    <div class="compare-item">
      <strong>inputmode</strong>
      <span>Verbessert die Eingabesituation, besonders auf mobilen Geräten.</span>
    </div>
  </div>
</div>

## Autocomplete und Inputmode lösen unterschiedliche Probleme

Das eine unterstützt bekannte Eingaben, das andere unterstützt die passende Eingabeform. Genau diese Trennung macht Formulare ruhiger und verständlicher.

## Eine ruhige Prüfstrategie

1. Welche Datenart wird eingegeben?
2. Gibt es bekannte Standardangaben, die wiederverwendet werden können?
3. Welche Eingabetastatur wäre dafür hilfreich?
4. Erst danach an optische Formularfeinheiten denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Formularattribute unterstützen den <strong>Nutzungsfluss</strong> – nicht nur die Syntax.</p>
</div>
