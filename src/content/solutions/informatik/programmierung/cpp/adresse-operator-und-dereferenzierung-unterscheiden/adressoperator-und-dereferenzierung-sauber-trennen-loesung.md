---
title: "Musterlösung – Adressoperator und Dereferenzierung sauber trennen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-PTR-002."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "adresse-operator-und-dereferenzierung-unterscheiden", "adressoperator-und-dereferenzierung-sauber-trennen"]
taskId: "INF-PROG-CPP-PTR-002"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/adresse-operator-und-dereferenzierung-unterscheiden/adressoperator-und-dereferenzierung-sauber-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Vier Ausdrücke unterscheiden

- <code>zahl</code> liefert den normalen Variablenwert.
- <code>&amp;zahl</code> liefert die Adresse von <code>zahl</code>.
- <code>p</code> speichert diese Adresse als Pointerwert.
- <code>*p</code> greift auf den Wert zu, der an dieser Adresse liegt.

## Aufgabe 2: Ergebnisart zuordnen

- <code>zahl</code> → normaler Wert
- <code>&amp;zahl</code> → Adresse
- <code>p</code> → Adresse, weil der Pointer genau diese Adresse speichert
- <code>*p</code> → normaler Wert, nämlich der Zielwert an der gespeicherten Adresse

## Aufgabe 3: Mini-Konsole lesen

Gedanklich entstehen diese drei Ausgabearten:

- <code>zahl</code> gibt den normalen Variablenwert aus, hier <code>100</code>.
- <code>p</code> gibt die gespeicherte Adresse aus.
- <code>*p</code> gibt den Zielwert an dieser Adresse aus, hier wieder <code>100</code>.

## Aufgabe 4: Schreibzugriff sauber lesen

Nach <code>*p = 250;</code> hat <code>zahl</code> den Wert <code>250</code>. Die gespeicherte Adresse in <code>p</code> bleibt dabei dieselbe. Die Dereferenzierung trifft also den Zielwert, nicht den Pointer selbst.

## Aufgabe 5: Zielwert und Zielwechsel trennen

- <code>*p = 250;</code> verändert den Zielwert des aktuell erreichten Objekts. In diesem Beispiel wird also <code>zahl</code> zu <code>250</code>.
- <code>p = &amp;andere;</code> verändert nicht den bisherigen Zielwert, sondern die im Pointer gespeicherte Adresse. Danach zeigt <code>p</code> auf <code>andere</code>.

## Aufgabe 6: Stern richtig deuten

Im Pointer-Kontext bedeutet <code>*</code> hier Dereferenzierung. Das Zeichen beschreibt also keinen Rechenoperator, sondern den Zugriff auf den Zielwert des Pointers.

## Aufgabe 7: Zur Nachbarseite abgrenzen

Hier wird zuerst die <strong>Bedeutung</strong> der Ausdrücke geklärt: <code>&amp;zahl</code> liefert eine Adresse, <code>p</code> speichert eine Adresse, <code>*p</code> greift auf den Zielwert zu. Die Sicherheitsfrage, ob ein Zugriff in einer konkreten Situation erlaubt oder riskant ist, gehört erst zur Nachbarseite über die Prüfung vor der Dereferenzierung.


## Aufgabe 8: Gleiche Ausgabe nicht falsch deuten

Weil beide Ausdrücke in diesem Beispiel auf dieselbe Adresse hinauslaufen können. Didaktisch muss man sie trotzdem unterscheiden: <code>&amp;zahl</code> ermittelt die Adresse aus der Variablen <code>zahl</code>, <code>p</code> liest die bereits gespeicherte Adresse aus der Pointer-Variable. Gleicher sichtbarer Wert bedeutet hier also nicht gleiche Ausdrucksrolle.
