---
title: "Const-Pointer und Pointer auf const sauber lesen"
description: "Unterscheide bei Pointer-Deklarationen, ob der Zielwert geschützt ist oder die Adresse fest bleibt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "const-pointer-und-pointer-auf-const-unterscheiden", "const-pointer-und-pointer-auf-const-sauber-lesen"]
taskId: "INF-PROG-CPP-PTR-005"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Zwei Deklarationen in Worte übersetzen

Erkläre den Unterschied zwischen:

```cpp
const int *p;
int * const q = nullptr;
```

## Aufgabe 2: Mini-Beispiel lesen

Gegeben ist:

```cpp
int a = 5;
int b = 7;

const int *lesend = &a;
int * const fest = &a;
```

Bewerte für jede Zeile, ob sie erlaubt ist, und begründe kurz:

```cpp
lesend = &b;
*lesend = 9;
*fest = 9;
fest = &b;
```

## Aufgabe 3: Mini-Konsole deuten

Gegeben ist:

```cpp
int a = 5;
const int *lesend = &a;
int * const fest = &a;

a = 11;
cout << *lesend << "\n";
cout << *fest << "\n";
```

Warum ist die gedankliche Ausgabe hier zweimal <code>11</code>, obwohl in beiden Deklarationen <code>const</code> vorkommt?

## Aufgabe 4: Alias-Demo einordnen

Gegeben ist:

```cpp
int a = 5;
int *roh = &a;
const int *lesend = &a;

*roh = 12;
cout << *lesend << "\n";
```

Warum ist die gedankliche Ausgabe hier <code>12</code>, obwohl <code>lesend</code> ein Pointer auf <code>const</code> ist?

## Aufgabe 5: Vier-Felder-Blick ausfüllen

Ordne für beide Varianten zu, ob
- Umhängen erlaubt ist,
- Schreiben über den Pointer erlaubt ist.

## Aufgabe 6: Denkfehler korrigieren

Jemand sagt: „Bei beiden Deklarationen steht <code>const</code>, also darf man einfach gar nichts ändern.“ Warum ist das zu ungenau?

## Aufgabe 7: Prüfregel formulieren

Formuliere eine kurze Leseregel, mit der du beide Schreibweisen ruhig auseinanderhalten kannst.

## Aufgabe 8: Zur Nachbarseite abgrenzen

Warum gehört die Frage „Ist der Speicherbereich selbst fest angelegt oder nur über eine Adresse erreichbar?“ eher zur Seite über Arrayname und Pointer als zu dieser Seite?


## Aufgabe 9: Zwei Freiheiten gleichzeitig deuten

Gegeben ist:

```cpp
int a = 5;
int b = 7;

const int *lesend = &a;
int * const fest = &a;

lesend = &b;
*fest = 9;
```

Warum zeigt gerade dieses Beispiel besonders gut, dass beide Deklarationen nicht dieselbe Art von Sperre meinen?
