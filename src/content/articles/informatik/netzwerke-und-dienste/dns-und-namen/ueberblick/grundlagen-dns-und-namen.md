---
title: "Grundlagen: DNS und Namen im Netzwerk"
description: "Ein allgemeiner Überblick darüber, warum Netzwerke Namen und Adressen trennen."
subject: informatik
section: "Netzwerke und Dienste"
topicPath:
  - netzwerke-und-dienste
  - dns-und-namen
  - ueberblick
learningGoals:
  - "Du kennst die Grundbegriffe dieses Themenbereichs."
  - "Du kannst typische Situationen grob einordnen, bevor du Detailseiten liest."
  - "Du erkennst, welche Nachbarseiten für Vertiefung oder Übungen passen."
practiceIdeas:
  - "Lies zuerst diese Überblicksseite und danach eine konkrete Lernsituation aus dem gleichen Unterthema."
  - "Notiere die wichtigsten Begriffe und prüfe, welche davon in den Detailseiten wieder auftauchen."
commonMistakes:
  - "Direkt mit Sonderfällen zu beginnen, ohne die Grundbegriffe zu klären."
  - "Ein einzelnes Beispiel für die ganze Themenlogik zu halten."
keyTakeaways:
  - "DNS trennt menschlich verständliche Namen von technischen Adressen und macht Netzwerke dadurch nutzbarer."
recognizeSignals:
  - "Du suchst eine allgemeine Einordnung, bevor du Aufgaben oder Spezialfälle bearbeitest."
  - "Mehrere Detailseiten wirken ähnlich, aber dir fehlt der gemeinsame Rahmen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten beschreiben?"
  - "Kann ich Grundidee, typische Begriffe und Grenzen auseinanderhalten?"
level: einfach
tags:
  - "informatik"
  - "netzwerke"
  - "dns"
  - "namen"
draft: false
---

## Überblick

DNS ist das Namenssystem des Internets. Es verbindet gut lesbare Namen wie Webadressen mit technischen Adressen, die Rechner zur Verbindung benötigen. Dadurch müssen Menschen sich nicht die numerischen Adressen einzelner Server merken.

<div class="note-panel">
  <p><strong>Kurz gesagt:</strong> DNS trennt menschlich verständliche Namen von technischen Adressen und macht Netzwerke dadurch nutzbarer.</p>
</div>

## Name und Adresse

Ein Name ist für Menschen lesbar und kann relativ stabil bleiben. Eine technische Adresse kann sich ändern. DNS vermittelt zwischen beiden Ebenen.

## Auflösung

Bei einer DNS-Auflösung fragt ein Gerät nach, welche Adresse zu einem Namen gehört. Die Antwort kann zwischengespeichert werden, damit nicht jede Anfrage neu bis zur Quelle gehen muss.

## Hierarchie

DNS ist hierarchisch organisiert. Domänen, Unterdomänen und Top-Level-Domänen bilden eine Baumstruktur. Diese Struktur ermöglicht verteilte Zuständigkeiten.

## Fehlerbilder

Wenn DNS nicht funktioniert, kann eine Internetverbindung technisch vorhanden sein, obwohl Webseiten über Namen nicht erreichbar sind. Direkte Adressen oder andere DNS-Server helfen dann bei der Eingrenzung.

## Typische Beispiele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>example.org ist ein Name; die zugehörige IP-Adresse ist die technische Zielinformation.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Ein Router oder Provider-DNS kann Namen für Geräte im Netzwerk auflösen.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Browser zeigen oft nur den Namen, nicht die ganze technische Auflösungskette.</span>
  </div>
</div>

## Einordnung im Lernpfad

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt Begriffe und Zusammenhänge, bevor einzelne Detailseiten bestimmte Situationen, Fehlerbilder oder Rechenwege behandeln. Wer neu in das Thema einsteigt, sollte zuerst diese Übersicht lesen und danach gezielt zu passenden Vertiefungen wechseln.

## Abgrenzung

Die Übersicht ersetzt keine Übung und keine Spezialseite. Sie soll den Rahmen geben: Was ist das Thema, warum ist es wichtig, welche Begriffe kommen vor und worauf muss man beim Weiterlesen achten?
