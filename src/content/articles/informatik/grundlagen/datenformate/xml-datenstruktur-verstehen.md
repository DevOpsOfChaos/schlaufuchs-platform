---
title: XML-Datenstruktur verstehen
description: Verstehe, wie XML Daten mit Tags, Attributen und klar verschachtelten Elementen strukturiert.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - xml-datenstruktur-verstehen
learningGoals:
  - Du erklärst die Grundidee von XML als hierarchisches Textformat.
  - Du unterscheidest Elemente, Attribute und Textinhalt.
  - Du prüfst einfache XML-Beispiele auf Wohlgeformtheit.
practiceIdeas:
  - Markiere in einem XML-Beispiel Wurzelelement, Kindelemente und Attribute.
  - Prüfe, ob Beginn- und End-Tags paarig und korrekt geschachtelt sind.
  - Vergleiche Textinhalt und Attributwerte in einem kleinen XML-Dokument.
commonMistakes:
  - Zu denken, XML sei nur "HTML mit anderen Tags".
  - Attribute und Elemente unruhig durcheinanderzubringen.
  - Ein Dokument mit mehreren äußersten Elementen zuzulassen.
keyTakeaways:
  - XML bildet hierarchische Daten mit Tags ab.
  - Ein wohlgeformtes XML-Dokument hat genau ein Wurzelelement und korrekt geschlossene Tags.
  - Attribute ergänzen Elemente, ersetzen aber nicht jede Struktur.
recognizeSignals:
  - Ein Beispiel nutzt öffnende und schließende Tags.
  - Es geht um hierarchische Textdaten oder Datenaustausch.
  - Du sollst prüfen, ob eine Struktur formal sauber aufgebaut ist.
selfCheckPoints:
  - Kann ich Wurzelelement, Unterelement und Attribut benennen?
  - Kann ich erklären, was ein wohlgeformtes Dokument ausmacht?
  - Kann ich Fehler in der Verschachtelung ruhig finden?
level: einfach
tags:
  - informatik
  - xml
  - datenformate
  - struktur
  - markup
draft: false
---

## Grundidee

XML ist ein textbasiertes Format für hierarchische Daten. Es arbeitet mit frei benennbaren Tags und macht dadurch Struktur sehr sichtbar. Menschen können XML lesen, und Programme können die Struktur gezielt verarbeiten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine kleine Gästeliste als Baumstruktur</h3>
  <p>Ein XML-Dokument kann eine Veranstaltung beschreiben, in der ein Wurzelelement mehrere Gäste enthält. Jeder Gast kann Namen, Getränke oder Eigenschaften besitzen. Dadurch entsteht eine klar geschachtelte Baumstruktur.</p>
</div>

## Die wichtigsten Bausteine

<div class="visual-grid">
  <div class="visual-item">
    <strong>Element</strong>
    <span>Ein Element hat meist einen Beginn-Tag und einen End-Tag, zum Beispiel <code>&lt;gast&gt;...&lt;/gast&gt;</code>.</span>
  </div>
  <div class="visual-item">
    <strong>Attribut</strong>
    <span>Ein Attribut ergänzt ein Element um zusätzliche Angaben, zum Beispiel <code>datum="31.12.11"</code>.</span>
  </div>
  <div class="visual-item">
    <strong>Textinhalt</strong>
    <span>Zwischen den Tags kann eigentlicher Inhalt stehen, etwa ein Name oder ein Getränk.</span>
  </div>
  <div class="visual-item">
    <strong>Wurzelelement</strong>
    <span>Jedes wohlgeformte XML-Dokument besitzt genau ein äußerstes Element.</span>
  </div>
</div>

## Wohlgeformt heißt formal sauber

Ein XML-Dokument ist wohlgeformt, wenn unter anderem diese Regeln eingehalten werden:

- genau ein Wurzelelement,
- sauber passende Beginn- und End-Tags,
- korrekt verschachtelte Ebenen,
- Attribute mit Anführungszeichen,
- und gleiche Groß-/Kleinschreibung bei Tag-Namen.

<div class="compare-card">
  <p class="card-kicker">Gut oder fehlerhaft?</p>
  <h3>Typische Prüfstellen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sauber</strong>
      <span><code>&lt;gast name="Albert"&gt;&lt;/gast&gt;</code> ist korrekt geöffnet und geschlossen.</span>
    </div>
    <div class="compare-item">
      <strong>Fehlerhaft</strong>
      <span><code>&lt;gast&gt;&lt;name&gt;...&lt;/gast&gt;&lt;/name&gt;</code> verletzt die Verschachtelung.</span>
    </div>
  </div>
</div>

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Wurzel suchen</strong>
    <span>Finde zuerst das äußerste Element.</span>
  </div>
  <div class="step-item">
    <strong>2. Ebenen lesen</strong>
    <span>Prüfe danach, welche Elemente darunter geschachtelt sind.</span>
  </div>
  <div class="step-item">
    <strong>3. Attribute trennen</strong>
    <span>Unterscheide ergänzende Attribute von eigentlichen Unterelementen.</span>
  </div>
  <div class="step-item">
    <strong>4. Paarigkeit prüfen</strong>
    <span>Achte zuletzt auf passende und korrekt geschlossene Tags.</span>
  </div>
</div>
