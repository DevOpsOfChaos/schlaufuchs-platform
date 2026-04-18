---
title: Umgebungsvariablen und PATH verstehen
description: Verstehe, warum die Shell Informationen wie HOME, PWD oder PATH mitführt und wie sie Befehle dadurch besser einordnen kann.
subject: linux
section: Shell
topicPath:
  - shell
  - umgebungsvariablen-und-path
tags:
  - env
  - path
  - umgebungsvariable
  - shell
learningGoals:
  - "Du erklärst, was Umgebungsvariablen in der Shell leisten."
  - "Du beschreibst grob, warum PATH für das Finden von Befehlen wichtig ist."
  - "Du erkennst Variablen wie HOME oder PWD als Arbeitskontext statt als Dateiinhalte."
practiceIdeas:
  - "Vergleiche env, pwd und which in einer kleinen Shell-Situation."
  - "Ordne HOME, PWD und PATH ihren Funktionen grob zu."
  - "Erkläre, warum die Shell einen Befehl finden kann, ohne den vollständigen Pfad auszuschreiben."
commonMistakes:
  - "Umgebungsvariablen mit normalen Dateien zu verwechseln."
  - "PATH nur als Ordner statt als Suchregel der Shell zu sehen."
  - "PWD und HOME gleichzusetzen."
keyTakeaways:
  - "Umgebungsvariablen beschreiben den Arbeitskontext einer Shell."
  - "PATH hilft der Shell beim Finden von Befehlen."
  - "HOME, PWD und PATH haben unterschiedliche Aufgaben."
recognizeSignals:
  - "Es geht um env, HOME, PWD, PATH oder die Frage, wie Befehle gefunden werden."
  - "Du sollst erklären, warum ein Befehl ohne vollständigen Pfad funktioniert."
  - "Ein Beispiel fragt nach Shell-Kontext statt nach Dateiinhalten."
selfCheckPoints:
  - "Kann ich HOME, PWD und PATH grob unterscheiden?"
  - "Kann ich erklären, warum which zu PATH passt?"
  - "Kann ich Umgebungsvariablen als Shell-Kontext beschreiben?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Die Shell arbeitet nicht im luftleeren Raum. Sie kennt Informationen über den aktuellen Ort, das Benutzerverzeichnis und darüber, wo typische Befehle gesucht werden. Diese Informationen stecken oft in **Umgebungsvariablen**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Befehl ohne vollständigen Pfad</h3>
  <p>Wenn du einfach <code>ls</code> eingibst, schreibst du nicht <code>/bin/ls</code> oder <code>/usr/bin/ls</code>. Die Shell findet den Befehl, weil <code>PATH</code> Suchorte vorgibt.</p>
</div>

## Shell-Kontext statt Dateiinhalte

Umgebungsvariablen sind keine normalen Dateien, die du „öffnest“, sondern Informationen, mit denen die Shell arbeitet. Dazu gehören zum Beispiel:

- **HOME** für dein Benutzerverzeichnis,
- **PWD** für das aktuelle Arbeitsverzeichnis,
- **PATH** für typische Suchorte von Befehlen.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">HOME</p>
    <h3>Wo ist mein persönlicher Ausgangspunkt?</h3>
    <p>Beschreibt dein Benutzerverzeichnis als vertrauten Start- und Bezugspunkt.</p>
  </section>
  <section>
    <p class="card-kicker">PWD</p>
    <h3>Wo arbeite ich gerade?</h3>
    <p>Zeigt das aktuelle Verzeichnis, also den momentanen Ort deiner Shell-Sitzung.</p>
  </section>
  <section>
    <p class="card-kicker">PATH</p>
    <h3>Wo sucht die Shell nach Befehlen?</h3>
    <p>Beschreibt Suchorte für Programme, nicht den Ort deiner aktuellen Datei.</p>
  </section>
</div>

## Warum PATH so wichtig ist

Ohne PATH müsste für viele Programme der vollständige Pfad ausgeschrieben werden. PATH macht daraus eine Suchregel der Shell:

<div class="figure-card">
  <p class="card-kicker">Suchidee</p>
  <h3>So findet die Shell einen Befehl</h3>
  <div class="signal-flow compact">
    <div><strong>Befehl eingeben</strong><span>zum Beispiel <code>ls</code></span></div>
    <div class="flow-arrow">→</div>
    <div><strong>PATH prüfen</strong><span>bekannte Suchorte durchsuchen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Programm starten</strong><span>wenn ein passender Treffer gefunden wird</span></div>
  </div>
</div>

## HOME und PWD nicht verwechseln

Ein häufiger Fehler ist, HOME und PWD als dasselbe zu sehen. Das eine ist dein persönlicher Standardort, das andere dein aktueller Aufenthaltsort. Gerade beim Wechseln zwischen Verzeichnissen wird diese Unterscheidung wichtig.

## Woran man gutes Verständnis erkennt

Gutes Verständnis zeigt sich daran, dass du nicht nur Begriffe nennst, sondern ihren Zweck erklären kannst:

- Warum funktioniert ein Befehl ohne vollständigen Pfad?
- Warum ist <code>pwd</code> nicht einfach dasselbe wie HOME?
- Warum beschreibt PATH Suchorte und nicht dein aktuelles Verzeichnis?

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So ordnest du Shell-Kontext ruhiger ein</h3>
  <ol>
    <li>Frage zuerst: Geht es um meinen Ort, meinen Ausgangspunkt oder die Befehlssuche?</li>
    <li>Ordne dann HOME, PWD oder PATH zu.</li>
    <li>Prüfe bei einem Beispiel bewusst, warum die Shell gerade diesen Befehl finden konnte.</li>
  </ol>
</div>
