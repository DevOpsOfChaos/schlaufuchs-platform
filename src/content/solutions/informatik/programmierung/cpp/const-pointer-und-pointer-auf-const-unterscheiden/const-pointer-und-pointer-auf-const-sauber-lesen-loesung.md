---
title: "Musterlösung – Const-Pointer und Pointer auf const sauber lesen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-PTR-005."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "const-pointer-und-pointer-auf-const-unterscheiden", "const-pointer-und-pointer-auf-const-sauber-lesen"]
taskId: "INF-PROG-CPP-PTR-005"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/const-pointer-und-pointer-auf-const-unterscheiden/const-pointer-und-pointer-auf-const-sauber-lesen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Zwei Deklarationen in Worte übersetzen

<code>const int *p</code> bedeutet: Über <code>p</code> soll der Zielwert nicht verändert werden. <code>int * const q = nullptr;</code> bedeutet: <code>q</code> ist selbst ein fester Pointer, seine gespeicherte Adresse bleibt also fest.

## Aufgabe 2: Mini-Beispiel lesen

- <code>lesend = &amp;b;</code> ist erlaubt, weil der Pointer umgehängt werden darf.
- <code>*lesend = 9;</code> ist nicht erlaubt, weil über diesen Pointer der Zielwert nicht verändert werden soll.
- <code>*fest = 9;</code> ist erlaubt, weil hier nicht der Zielwert, sondern die Adresse im Pointer fest ist.
- <code>fest = &amp;b;</code> ist nicht erlaubt, weil die gespeicherte Adresse in <code>fest</code> fest bleibt.

## Aufgabe 3: Mini-Konsole deuten

Die Ausgabe ist zweimal <code>11</code>, weil <code>const</code> hier nicht die Variable <code>a</code> insgesamt einfriert. Bei <code>const int *lesend</code> ist nur der Schreibzugriff über diesen Pointer eingeschränkt. Bei <code>int * const fest</code> bleibt nur die Adresse im Pointer fest. Wenn <code>a</code> an anderer Stelle geändert wird, können beide Pointer den neuen Wert trotzdem lesen.

## Aufgabe 4: Alias-Demo einordnen

Die Ausgabe ist <code>12</code>, weil <code>*roh = 12;</code> den Wert von <code>a</code> an anderer Stelle verändert. <code>const int *lesend</code> verbietet nur den Schreibzugriff über <code>lesend</code> selbst. Es macht das Objekt <code>a</code> nicht automatisch überall unveränderlich.

## Aufgabe 5: Vier-Felder-Blick ausfüllen

- <code>const int *lesend</code>: Umhängen <strong>ja</strong>, Schreiben über den Pointer <strong>nein</strong>.
- <code>int * const fest</code>: Umhängen <strong>nein</strong>, Schreiben über den Pointer <strong>ja</strong>.

## Aufgabe 6: Denkfehler korrigieren

Die Aussage ist zu ungenau, weil <code>const</code> nicht in beiden Fällen dieselbe Wirkung hat. Einmal schützt es den Zielwert, einmal den Pointer selbst.

## Aufgabe 7: Prüfregel formulieren

Ich prüfe immer erst, wo <code>const</code> steht, und frage dann: Ist der Zielwert geschützt oder bleibt die Adresse im Pointer fest? Danach ergänze ich die zwei Kontrollfragen: Darf ich umhängen? Darf ich über den Pointer schreiben?

## Aufgabe 8: Zur Nachbarseite abgrenzen

Weil diese Seite nicht die Speicherstruktur klärt, sondern die Rolle von <code>const</code>. Hier geht es darum, ob <strong>Zielwert</strong> oder <strong>gespeicherte Adresse</strong> geschützt ist. Die Frage nach fest angelegtem Speicherbereich gegenüber bloßer Adressvariable gehört zur Unterscheidung von Array und Pointer.


## Aufgabe 9: Zwei Freiheiten gleichzeitig deuten

Weil hier zwei verschiedene Erlaubnisse gleichzeitig sichtbar werden: <code>lesend = &amp;b;</code> ist erlaubt, also bleibt der Pointer umhängbar. <code>*fest = 9;</code> ist ebenfalls erlaubt, also ist nicht der Zielwert geschützt, sondern nur die gespeicherte Adresse in <code>fest</code> fest. Genau dadurch wird sichtbar, dass beide Schreibweisen nicht dieselbe Sperre meinen.
