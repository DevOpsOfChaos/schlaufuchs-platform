---
title: Placeholder ist kein Label begründen
description: Begründe, warum ein Placeholder die eigentliche Beschriftung eines Formularfeldes nicht zuverlässig ersetzt.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - labels-und-placeholder-unterscheiden
  - placeholder-ist-kein-label-begruenden
taskId: WEB-HTML-A11Y-306
level: einfach
draft: false
tags:
  - html
  - form
  - label
  - placeholder
hintPoints:
  - Frage zuerst, welche Feldfrage dauerhaft sichtbar bleiben muss.
  - Unterscheide Beschriftung und Zusatzhinweis bewusst.
selfCheckPoints:
  - Kannst du Label und Placeholder sauber trennen?
  - Kannst du erklären, warum grauer Beispieltext allein oft nicht reicht?
transferIdeas:
  - Übertrage die Aufgabe auf Login-, Kontakt- oder Suchformulare.
reflectionPrompt: "Warum wirkt ein Feld oft erst dann wirklich verständlich, wenn die Frage außerhalb des Feldes sichtbar bleibt?"
---

Gegeben sind drei Varianten:

```html
<label for="mail-a">E-Mail-Adresse</label>
<input id="mail-a" type="email" placeholder="name@example.de" />

<label for="mail-b">E-Mail-Adresse</label>
<input id="mail-b" type="email" />

<input type="email" placeholder="name@example.de" />
```

## Aufgabe 1: Drei Varianten ordnen

Ordne diese drei Fälle von **am ruhigsten verständlich** nach **am schwächsten orientierend**.

Begründe deine Reihenfolge in 3 bis 5 Sätzen.

## Aufgabe 2: Vorher, währenddessen, danach

Beschreibe kurz, wie sich die Orientierung in den drei Varianten in diesen Momenten verändert:

- vor dem Tippen
- während der Eingabe
- nach dem ersten getippten Zeichen

## Aufgabe 3: Frage und Zusatzhinweis trennen

Erkläre in 2 bis 4 Sätzen, welche Rolle das Label trägt und welche Rolle ein Placeholder höchstens ergänzend übernehmen darf.

## Aufgabe 4: Rettungsversuch prüfen

Jemand sagt: „Dann mache ich den Placeholder einfach länger, dann ersetzt er das Label doch fast.“

Erkläre, warum das die Grundfrage noch nicht sauber löst.

## Aufgabe 5: Feldfrage umbauen

Formuliere aus diesem schwachen Fall eine ruhigere Variante:

```html
<input type="tel" placeholder="+49 123 456789" />
```

## Aufgabe 6: Beispiel statt Hauptfrage prüfen

Bewerte diesen Fall:

```html
<label for="telefon">Telefonnummer</label>
<input id="telefon" type="tel" placeholder="+49 123 456789" />
```

Erkläre kurz, warum der Placeholder hier eher als Formatbeispiel gelesen werden darf.

## Aufgabe 7: Zweiten Feldtyp mitdenken

Ein Suchfeld hat sichtbar schon eine Überschrift darüber, aber zusätzlich noch den Placeholder `Suche nach Themen`.

Erkläre kurz, warum dieser Placeholder dann eher eine Ergänzung als die eigentliche Feldfrage sein kann.


## Aufgabe 8: Zwei ruhige Formularvarianten vergleichen

Vergleiche diese beiden Felder kurz:

```html
<label for="stadt">Stadt</label>
<input id="stadt" type="text" />

<label for="stadt-zwei">Stadt</label>
<input id="stadt-zwei" type="text" placeholder="z. B. Karlsruhe" />
```

Erkläre, warum beide Varianten ruhig sein können und worin sich ihre Zusatzqualität unterscheidet.


## Aufgabe 9: Zwei-Felder-Fall beurteilen

Bewerte dieses kleine Formular:

```html
<input type="text" placeholder="Max Mustermann" />
<input type="email" placeholder="name@example.de" />
```

Erkläre kurz, warum die Orientierung hier nach Beginn der Eingabe noch instabiler wird als bei nur einem einzelnen Placeholder-Feld.

