---
title: "Grundlagen: Logs und Journal"
description: "Ein allgemeiner Einstieg in Protokolldateien, Systemmeldungen und die Fehlersuche mit Logs."
subject: "linux"
section: "System"
topicPath: ["system", "logs-und-journal", "ueberblick", "grundlagen-logs-und-journal"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "System"]
draft: false
---
## Überblick

Logs sind protokollierte Ereignisse eines Systems oder Programms. Sie helfen dabei, Fehler, Starts, Abstürze, Anmeldungen und Hintergrundprozesse nachzuvollziehen. Unter vielen Linux-Systemen sammelt systemd zusätzlich Meldungen im Journal.

<div class="note-panel">
  <p><strong>Kurz gesagt:</strong> Logs sind das Gedächtnis eines Systems. Sie helfen besonders dann, wenn Fehler nicht direkt sichtbar sind.</p>
</div>

## Zweck von Logs

Logs machen sichtbar, was sonst nur im Hintergrund passiert. Sie ersetzen keine Fehleranalyse, liefern aber Hinweise auf Zeitpunkt, Ursache und betroffene Komponenten.

## Logdateien

Viele Dienste schreiben eigene Logdateien. Je nach System liegen sie zum Beispiel unter /var/log. Dateinamen und Zeitstempel helfen bei der Orientierung.

## Journal

Das systemd-Journal sammelt strukturierte Meldungen vieler Systemdienste. Mit journalctl können diese Meldungen zeitlich, nach Dienst oder nach Priorität gefiltert werden.

## Gute Fehlersuche

Bei der Fehlersuche ist die Reihenfolge wichtig: Zeitpunkt eingrenzen, passende Quelle wählen, relevante Meldungen filtern und danach Hypothesen prüfen.

## Typische Beispiele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Ein Dienst startet nicht und hinterlässt eine Fehlermeldung im Journal.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Eine Anwendung schreibt Warnungen in eine Logdatei.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Nach einem Neustart lässt sich prüfen, welche Dienste Probleme hatten.</span>
  </div>
</div>

## Einordnung im Lernpfad

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt Begriffe und Zusammenhänge, bevor einzelne Detailseiten bestimmte Situationen, Fehlerbilder oder Rechenwege behandeln. Wer neu in das Thema einsteigt, sollte zuerst diese Übersicht lesen und danach gezielt zu passenden Vertiefungen wechseln.

## Abgrenzung

Die Übersicht ersetzt keine Übung und keine Spezialseite. Sie soll den Rahmen geben: Was ist das Thema, warum ist es wichtig, welche Begriffe kommen vor und worauf muss man beim Weiterlesen achten?
