---
title: Formular-Validierung verstehen
description: Verstehe, warum Formulare Eingaben prüfen und wie klare Rückmeldungen dabei Nutzbarkeit und Fehlerverständnis verbessern.
subject: web-development
section: HTML
topicPath:
  - html
  - formular-validierung
  - formular-validierung-verstehen
learningGoals:
  - Du erklärst, warum Formulare Eingaben prüfen.
  - Du beschreibst den Unterschied zwischen Eingabe und gültiger Eingabe.
  - Du erkennst, warum verständliche Fehlermeldungen Teil guter Nutzbarkeit sind.
practiceIdeas:
  - Prüfe bei einem Formular, welche Eingaben zwingend nötig sind.
  - Vergleiche hilfreiche und unklare Fehlermeldungen.
  - Erkläre, warum leere oder falsch formatierte Eingaben geprüft werden müssen.
commonMistakes:
  - Zu glauben, dass jede eingegebene Information automatisch sinnvoll ist.
  - Pflichtfelder und Formatprüfungen durcheinanderzubringen.
  - Fehlerhinweise nur als Störung statt als Hilfe zu betrachten.
keyTakeaways:
  - Validierung prüft, ob Eingaben vollständig und passend sind.
  - Gute Formulare helfen bei Fehlern mit klaren Rückmeldungen.
  - Nutzbarkeit und Datenqualität hängen hier eng zusammen.
recognizeSignals:
  - Es geht um Formulare, Eingaben, Fehlermeldungen oder Pflichtfelder.
  - Du sollst erklären, warum ein Formular Eingaben nicht einfach blind übernimmt.
  - In Beispielen musst du Nutzersicht und Prüfregel zusammendenken.
selfCheckPoints:
  - Kann ich erklären, warum Validierung nötig ist?
  - Kann ich Pflichtfeld und Formatprüfung unterscheiden?
  - Kann ich beschreiben, was eine gute Fehlermeldung leisten sollte?
tags:
  - html
  - formulare
  - validierung
  - usability
level: einfach
draft: false
---

## Grundidee

Ein Formular sammelt Eingaben. Damit diese Eingaben sinnvoll verarbeitet werden können, müssen sie oft geprüft werden. Diese Prüfung heißt **Validierung**. Sie sorgt dafür, dass nicht nur irgendetwas abgeschickt wird, sondern möglichst **vollständige und passende Angaben**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>E-Mail-Adresse im Kontaktformular</h3>
  <p>Wenn in ein Feld für E-Mail nur ein einzelnes Wort ohne erkennbares Format eingetragen wird, ist zwar etwas eingegeben, aber noch keine sinnvoll nutzbare Adresse. Genau an dieser Stelle zeigt sich, warum Eingabe und gültige Eingabe nicht dasselbe sind.</p>
</div>

## Was Validierung prüft

<div class="visual-grid">
  <div class="visual-item">
    <strong>Vollständigkeit</strong>
    <span>Sind Pflichtangaben überhaupt vorhanden?</span>
  </div>
  <div class="visual-item">
    <strong>Format</strong>
    <span>Passt die Eingabe zur erwarteten Form, zum Beispiel bei E-Mail oder Zahl?</span>
  </div>
  <div class="visual-item">
    <strong>Plausibilität</strong>
    <span>Ist die Eingabe inhaltlich sinnvoll oder offensichtlich problematisch?</span>
  </div>
</div>

## Pflichtfeld und Formatprüfung unterscheiden

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Nicht jede Prüfung meint dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Pflichtfeld</strong>
      <span>Hier geht es darum, dass eine Angabe überhaupt gemacht werden muss.</span>
    </div>
    <div class="compare-item">
      <strong>Formatprüfung</strong>
      <span>Hier geht es darum, ob die gemachte Eingabe zur erwarteten Form passt.</span>
    </div>
  </div>
</div>

## Mini-Demo: schwache und gute Rückmeldung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Fehlerhinweise machen einen echten Unterschied</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Schwache Rückmeldung</strong></p>
      <div style="padding:0.7rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <label style="display:block; font-weight:700; margin-bottom:0.35rem;">E-Mail</label>
        <div style="padding:0.55rem 0.65rem; border:1px solid #fca5a5; border-radius:10px; color:#991b1b;">max@example</div>
        <p style="margin:0.45rem 0 0; color:#991b1b;">Eingabe ungültig.</p>
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Hilfreiche Rückmeldung</strong></p>
      <div style="padding:0.7rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <label style="display:block; font-weight:700; margin-bottom:0.35rem;">E-Mail</label>
        <div style="padding:0.55rem 0.65rem; border:1px solid #fca5a5; border-radius:10px; color:#991b1b;">max@example</div>
        <p style="margin:0.45rem 0 0; color:#991b1b;">Bitte gib eine gültige E-Mail-Adresse mit <code>@</code> ein.</p>
      </div>
    </div>
  </div>
  <p>Beide Varianten blockieren die Eingabe. Nur die zweite hilft aber wirklich beim Korrigieren.</p>
</div>

## Warum Fehlermeldungen wichtig sind

Gute Validierung bedeutet nicht nur „abweisen“, sondern **verständlich helfen**. Eine gute Rückmeldung erklärt möglichst klar,

- welches Feld betroffen ist,
- was daran nicht stimmt,
- und wie die Eingabe verbessert werden kann.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Fehler klar benennen</h3>
    <p>Die Rückmeldung hilft beim Korrigieren statt nur beim Blockieren.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur „Eingabe ungültig“</h3>
    <p>Dann bleibt unklar, was verbessert werden muss und wo der eigentliche Fehler liegt.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Ist die Eingabe überhaupt vorhanden?
2. Passt sie zum erwarteten Format?
3. Ist die Fehlermeldung konkret genug?
4. Hilft die Rückmeldung beim nächsten Versuch sichtbar weiter?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Validierung ist nicht nur Kontrolle. Sie ist auch Nutzerführung.</p>
</div>
