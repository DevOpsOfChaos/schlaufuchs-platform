---
title: Arrays und Schleifen – Durchläufe und Fehler prüfen
description: Diese Aufgabe trainiert das Lesen von Array-Zugriffen, Schleifenbedingungen
  und typischen Off-by-one-Fehlern.
subject: informatik
section: Programmierung
topicPath:
- programmieren
- arrays-und-schleifen
- arrays-und-schleifen-fehler-und-durchlaeufe
tags:
- arrays
- schleifen
- index
- debugging
hintPoints:
- Arbeite Durchläufe Zeile für Zeile ab.
- Achte besonders auf Startwert, Endbedingung und Indexzugriffe.
- Notiere Zwischenschritte statt nur das Endergebnis.
selfCheckPoints:
- Ich kann Array-Zugriffe sauber verfolgen.
- Ich erkenne typische Schleifenfehler.
- Ich kann Off-by-one-Probleme erklären.
level: einfach
draft: false
---
## Arbeitsauftrag

Arbeite nicht nur auf das Ergebnis hin, sondern lies jeden Schleifendurchlauf bewusst. Gerade bei Arrays zeigt sich schnell, ob ein Ablauf wirklich verstanden wurde.

## Aufgabe 1 – Indizes sauber benennen

Gegeben ist das Array:

```c
int werte[5] = {3, 5, 8, 13, 21};
```

Beantworte:

1. Welcher Wert liegt am Index 0?
2. Welcher Wert liegt am Index 3?
3. Welcher Index gehört zum letzten Element?

## Aufgabe 2 – Schleife Schritt für Schritt lesen

Gegeben ist:

```c
for (int i = 0; i < 4; i++) {
  printf("%d
", werte[i]);
}
```

Erkläre:

1. Welche Werte von <code>i</code> auftreten.
2. Welche Array-Elemente gelesen werden.
3. Warum das Element mit Index 4 hier nicht ausgegeben wird.

## Aufgabe 3 – Fehler finden

Ein Schüler schreibt:

```c
for (int i = 1; i <= 5; i++) {
  printf("%d
", werte[i]);
}
```

Beschreibe:

1. Was an dieser Schleife problematisch ist.
2. Welche zwei Denkfehler hier zusammenkommen.
3. Wie die Schleife korrekt aussehen könnte.

## Aufgabe 4 – Summe verstehen

Gegeben ist:

```c
int punkte[4] = {7, 9, 6, 8};
int summe = 0;
for (int i = 0; i < 4; i++) {
  summe = summe + punkte[i];
}
```

Erkläre in Worten:

1. Was in jedem Schleifendurchlauf passiert.
2. Warum am Ende 30 in <code>summe</code> steht.

<div class="hint-card">
  <p class="task-kicker">Hinweis</p>
  <p>Bei Arrays lohnt es sich fast immer, die gültigen Indizes zuerst hinzuschreiben. Danach liest sich die Schleife viel klarer.</p>
</div>

<div class="check-card">
  <p class="task-kicker">Selbstkontrolle</p>
  <ul>
    <li>Der erste gültige Index ist meist 0.</li>
    <li>Die Länge eines Arrays ist nicht gleich dem letzten Index.</li>
    <li><code>i &lt; n</code> ist in vielen Fällen die sicherere Bedingung als <code>i &lt;= n</code>.</li>
  </ul>
</div>


## Transfer und Einordnung

Bearbeite zum Schluss noch diese kurzen Zusatzfragen, damit du die Aufgabe nicht nur mechanisch rechnest oder ausfüllst:

1. Wo taucht die Grundidee aus **Arrays und Schleifen – Durchläufe und Fehler prüfen** in einem ähnlichen Kontext aus **Programmierung** wieder auf?
2. Woran würdest du erkennen, dass du denselben Gedanken auch in einer leicht veränderten Aufgabe anwenden musst?
3. Welche Angabe oder Formulierung wäre ein typisches Signal dafür, dass genau dieses Wissen gebraucht wird?


## Kurzreflexion

- Was war in dieser Aufgabe der fachlich wichtigste Schritt?
- Wo war die größte Verwechslungsgefahr?
- Was würdest du vor der nächsten ähnlichen Aufgabe zuerst prüfen?

## Hinweise

- Arbeite Durchläufe Zeile für Zeile ab.
- Achte besonders auf Startwert, Endbedingung und Indexzugriffe.
- Notiere Zwischenschritte statt nur das Endergebnis.

## Selbstkontrolle

- Ich kann Array-Zugriffe sauber verfolgen.
- Ich erkenne typische Schleifenfehler.
- Ich kann Off-by-one-Probleme erklären.
