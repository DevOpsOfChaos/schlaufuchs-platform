---
title: Prozesse
description: Prozesse beschreiben laufende Programme im System und helfen dabei zu
  verstehen, wie Aufgaben gestartet, verwaltet und beendet werden.
subject: informatik
section: Systemnah
topicPath:
- systemnah
- prozesse
learningGoals:
- Du unterscheidest Programm und Prozess.
- Du verstehst Prozesse als laufende Systemabläufe.
- Du ordnest sichtbare und unsichtbare Prozesse besser ein.
practiceIdeas:
- Beschreibe einen Programmstart als Folge mehrerer Prozessschritte.
- Vergleiche sichtbare Programme, Dienste und Hintergrundprozesse.
- Ordne typische Systemaktivitäten dem Begriff Prozess zu.
commonMistakes:
- Programm und Prozess vollständig gleichzusetzen.
- Nur sichtbare Fenster als Prozesse zu betrachten.
- Systemaktivität nicht als verwalteten Ablauf zu verstehen.
keyTakeaways:
- Prozesse sind laufende Programmausführungen.
- Ein System verwaltet viele Prozesse parallel.
- Prozessverständnis macht Rechnerverhalten lesbarer.
tags:
- Prozesse
- Betriebssystem
- Programm
- Ausführung
- System
level: einfach
draft: false
---
<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Das Wort <strong>Prozess</strong> taucht in Informatik und Betriebssystemen ständig auf. Gemeint ist damit nicht einfach irgendein Programm, sondern ein <strong>gerade laufender Ablauf</strong>. Wer den Unterschied versteht, kann Systemvorgänge, Fehlersuche und Ressourcenverbrauch viel besser einordnen.</p>
  <ul>
    <li>Du trennst gespeicherte Programme und laufende Prozesse sauber voneinander.</li>
    <li>Du lernst typische Zustände wie bereit, laufend und wartend kennen.</li>
    <li>Du verstehst, warum Prozesse Speicher, Rechenzeit und Verwaltung brauchen.</li>
  </ul>
</div>

## Programm und Prozess unterscheiden

Ein <strong>Programm</strong> ist zunächst eine gespeicherte Anweisungssammlung, also zum Beispiel eine installierte Anwendung oder ausführbare Datei.

Ein <strong>Prozess</strong> entsteht erst dann, wenn dieses Programm wirklich gestartet wird. Dann bekommt es Speicher, eine Kennung und einen aktuellen Zustand. Aus einer Datei auf dem Datenträger wird also ein aktiver Ablauf im System.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Browser-Datei und Browser-Prozess</h3>
  <p>Die installierte Browser-Anwendung auf der Festplatte ist ein Programm. Öffnest du den Browser, startet ein Prozess. Öffnest du zusätzlich ein weiteres Fenster oder einen weiteren Dienst, können sogar mehrere Prozesse beteiligt sein.</p>
</div>

## Was zu einem Prozess gehört

Ein Prozess ist mehr als nur „ein Fenster“. Typisch sind unter anderem:

- Programmanweisungen,
- Daten im Arbeitsspeicher,
- ein aktueller Zustand,
- eine Prozess-ID,
- zugewiesene Prozessorzeit,
- und oft offene Ressourcen wie Dateien oder Gerätezugriffe.

Darum ist ein Prozess immer ein technischer Gesamtzustand und nicht nur ein sichtbares Symbol auf dem Bildschirm.

## Typische Prozesszustände

Prozesse bleiben nicht ständig aktiv rechnend. Ein Betriebssystem wechselt sie je nach Situation zwischen verschiedenen Zuständen.

Häufige Grundzustände sind:

- <strong>bereit</strong> – der Prozess kann ausgeführt werden,
- <strong>laufend</strong> – der Prozess bekommt gerade Rechenzeit,
- <strong>wartend</strong> – der Prozess wartet zum Beispiel auf Eingaben oder Daten,
- <strong>beendet</strong> – der Ablauf ist abgeschlossen.

<div class="wide-example">

```text
Programm starten → Prozess entsteht
bereit → laufend → wartend → wieder laufend → beendet
```

</div>

## Warum das Betriebssystem Prozesse verwaltet

Ein modernes System muss viele Abläufe parallel organisieren. Dazu gehören sichtbare Programme, Hintergrunddienste, Netzwerkanfragen oder Druckprozesse.

Das Betriebssystem sorgt deshalb dafür,

- wer gerade Rechenzeit bekommt,
- wie Speicher verteilt wird,
- welche Prozesse warten müssen,
- und welche Prozesse beendet oder priorisiert werden.

Ohne Prozessverwaltung würde ein System sehr schnell chaotisch oder unbrauchbar werden.

## Prozess-ID und Zuordnung

Jeder Prozess bekommt normalerweise eine eindeutige Kennung. Diese Kennung heißt oft <strong>PID</strong>.

Mit ihr kann das System Prozesse unterscheiden und gezielt ansprechen. Das ist wichtig, wenn Prozesse angezeigt, überwacht oder beendet werden sollen.

## Vordergrund und Hintergrund

Nicht jeder Prozess ist als Fenster sichtbar. Viele Prozesse laufen im Hintergrund.

Typische Beispiele sind:

- Update-Dienste,
- Netzwerkdienste,
- Druckdienste,
- Audio- oder Systemhilfsprozesse.

Das hilft auch gegen einen typischen Denkfehler: Ein Prozess ist nicht gleich ein Fenster.

<div class="practice-card">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du das Thema weiterdenken</h3>
  <ul>
    <li>Überlege bei einer App auf deinem Computer: Was ist die Datei und was ist der laufende Ablauf?</li>
    <li>Denke an Programme, die im Hintergrund aktiv bleiben, obwohl du sie nicht direkt siehst.</li>
    <li>Verbinde das Thema mit Betriebssystemen: Wer entscheidet, welcher Prozess gerade laufen darf?</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Programm und Prozess werden gleichgesetzt.</li>
    <li>Ein Prozess wird nur als sichtbares Fenster verstanden.</li>
    <li>Man übersieht, dass Prozesse Speicher und Rechenzeit verbrauchen.</li>
    <li>Man denkt, mehrere Programme liefen „magisch gleichzeitig“, statt verwaltet zu werden.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Ein Programm ist gespeichert, ein Prozess läuft.</li>
    <li>Ein gestartetes Programm wird zum Prozess.</li>
    <li>Prozesse haben Zustände und verbrauchen Ressourcen.</li>
    <li>Das Betriebssystem verwaltet Prozesse, Speicher und Rechenzeit.</li>
    <li>Nicht jeder Prozess ist als Fenster sichtbar.</li>
  </ul>
</div>

## Warum Prozessdenken beim Fehlerfinden hilft

Wer Prozesse verstanden hat, kann typische Systemprobleme besser lesen: Warum reagiert ein Programm nicht? Warum arbeitet etwas im Hintergrund weiter? Warum steigt die Auslastung? Prozesse helfen dabei, Systemverhalten nicht als Chaos, sondern als geordnete Abläufe zu sehen.

## Kleine Transferfrage

Versuche bei jedem Rechnerproblem kurz zu überlegen, ob es eher um *ein laufendes Programm*, *mehrere konkurrierende Prozesse* oder *fehlende Ressourcen* geht. Genau daraus entsteht später sauberes Systemverständnis.


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Prozesse** oder um eng verwandte Begriffe aus **Systemnah**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du unterscheidest Programm und Prozess.?
- Kannst du in eigenen Worten erklären, wie du du verstehst Prozesse als laufende Systemabläufe.?
- Kannst du in eigenen Worten erklären, wie du du ordnest sichtbare und unsichtbare Prozesse besser ein.?
