---
title: ATmega – UART Polling und Interrupt unterscheiden
description: Verstehe, warum UART-Empfang am AVR entweder aktiv abgefragt oder ereignisgesteuert verarbeitet werden kann und warum das im Programm spürbar unterschiedliche Folgen hat.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-polling-und-interrupt-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen UART-Polling und UART-Interrupt fachlich sauber.
  - Du beschreibst die Folgen für Reaktivität und Programmstruktur am AVR.
  - Du liest UART-Code eher als Verarbeitungsstrategie als nur als Registerzugriff.
practiceIdeas:
  - Vergleiche ein UART-Programm mit ständigem Registerprüfen und ein UART-Programm mit ISR.
  - Prüfe, was während langer Wartezeiten beim Polling leicht übersehen werden kann.
  - Lies UART-Empfang zuerst als Zeit- und Reaktionsfrage und erst danach als C-Code.
commonMistakes:
  - Zu denken, Polling und Interrupt seien nur zwei Schreibweisen für dieselbe Programmlogik.
  - Polling automatisch als falsch oder Interrupt automatisch als immer besser zu behandeln.
  - Reaktionsprobleme nur der Baudrate statt der gewählten Struktur zuzuschreiben.
keyTakeaways:
  - Polling fragt aktiv nach einem neuen UART-Ereignis.
  - Interrupts reagieren ereignisgesteuert und entlasten die Hauptschleife von ständigem Nachfragen.
  - Welche Strategie ruhiger ist, hängt von Reaktivität, Einfachheit und restlicher Programmstruktur ab.
recognizeSignals:
  - Es geht um RXC, Empfangen, Wartezeiten oder eine UART-Quelle, die sporadisch Zeichen liefert.
  - Du sollst begründen, warum ein Zeichen aktiv geprüft oder per ISR verarbeitet wird.
  - In Aufgaben ist die Strukturfrage wichtiger als die bloße Registerliste.
selfCheckPoints:
  - Kann ich Polling und Interrupt als unterschiedliche Strategien erklären?
  - Kann ich sagen, wann einfaches Polling noch vertretbar ist?
  - Kann ich begründen, warum ein Interrupt die Hauptschleife ruhiger halten kann?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - interrupt
level: mittel
draft: false
---

## Grundidee

Wenn der AVR über UART ein Zeichen empfangen soll, gibt es mindestens zwei ruhige Denkweisen:

- **Polling**: Das Hauptprogramm schaut immer wieder selbst nach.
- **Interrupt**: Das Ereignis meldet sich, sobald es wirklich auftritt.

Beides kann fachlich richtig sein. Der Unterschied liegt nicht nur im Registercode, sondern in der **Struktur des ganzen Programms**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR empfängt nur ab und zu ein Zeichen vom PC</h3>
  <p>Die serielle Verbindung liefert selten Daten, der Controller soll aber gleichzeitig noch LEDs steuern und einen Taster prüfen. Dann wird wichtig, ob die Hauptschleife ständig nach einem UART-Zeichen fragen muss oder ob ein Ereignis den Empfang nur dann meldet, wenn wirklich etwas angekommen ist.</p>
</div>

## Zwei Strategien ruhig trennen

<div class="compare-card">
  <p class="card-kicker">Strategievergleich</p>
  <h3>Aktiv nachfragen oder auf das Ereignis reagieren</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Polling</strong>
      <span>Die Hauptschleife prüft das Empfangsflag immer wieder selbst und entscheidet dann, ob ein Zeichen gelesen wird.</span>
    </div>
    <div class="compare-item">
      <strong>Interrupt</strong>
      <span>Ein empfangenes Zeichen löst eine passende ISR aus. Das Hauptprogramm muss nicht ständig aktiv nachfragen.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe UART, andere Programmlogik

```c
while (!(UCSR0A & (1 << RXC0))) {
  // warten
}
zeichen = UDR0;
```

Hier fragt das Programm aktiv nach.

```c
ISR(USART_RX_vect) {
  zeichen = UDR0;
}
```

Hier reagiert das Programm auf das Ereignis.

## Was sich fachlich wirklich ändert

Beim Polling bleibt alles in der Hauptschleife. Das ist oft gut lesbar, solange die Aufgabe klein bleibt. Problematisch wird es, wenn die Hauptschleife noch viele andere Dinge tun soll und das ständige Prüfen unnötig blockierend oder unruhig wird.

Beim Interrupt bleibt die Hauptschleife freier. Dafür kommt eine zweite Denkebene dazu:

- Quelle muss korrekt freigegeben sein,
- ISR muss kurz und ruhig bleiben,
- Datenübergabe zwischen ISR und Hauptschleife muss bewusst geplant werden.

## Wann Polling noch völlig okay sein kann

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kleines Testprogramm</strong>
    <span>Wenn nur ein einzelner UART-Fall gezeigt werden soll, ist Polling oft didaktisch völlig ausreichend.</span>
  </div>
  <div class="visual-item">
    <strong>Viele parallele Aufgaben</strong>
    <span>Wenn der Controller gleichzeitig auf Taster, Timer oder andere Ereignisse reagieren soll, wird Interrupt-Denken oft ruhiger.</span>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wie oft tritt das UART-Ereignis wirklich auf?
2. Was muss die Hauptschleife gleichzeitig noch leisten?
3. Reicht aktives Nachfragen oder wird das Programm dadurch unnötig blind?
4. Falls Interrupts genutzt werden, bleibt die ISR kurz und klar?

<div class="note-panel">
  <p><strong>Merke:</strong> UART-Polling und UART-Interrupt sind nicht nur zwei Schreibweisen. Sie beschreiben zwei unterschiedliche Arten, wie das Programm auf serielle Ereignisse reagiert.</p>
</div>
