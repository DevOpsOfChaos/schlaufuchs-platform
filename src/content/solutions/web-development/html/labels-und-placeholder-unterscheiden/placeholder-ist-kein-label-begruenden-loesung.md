---
title: Lösung – Placeholder ist kein Label begründen
description: Musterlösung zur Aufgabe über Labels und Placeholder in Formularen.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - labels-und-placeholder-unterscheiden
taskId: WEB-HTML-A11Y-306
relatedExercise: src/content/exercises/web-development/html/labels-und-placeholder-unterscheiden/placeholder-ist-kein-label-begruenden.md
tags:
  - html
  - form
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

Am ruhigsten verständlich ist das Feld mit sichtbarem Label und zusätzlichem Placeholder, weil die Feldfrage sichtbar bleibt und der Placeholder nur ergänzt. Danach folgt das Feld mit sichtbarem Label ohne Placeholder, weil die Hauptfrage weiterhin klar ist, auch wenn kein Zusatzbeispiel im Feld steht. Am schwächsten ist das Feld nur mit Placeholder, weil die Orientierung an einen Text gebunden wird, der oft wieder verschwindet. Genau diese Reihenfolge zeigt: **Ein Placeholder kann nützlich sein, trägt die Hauptbeschriftung aber nicht selbst.**

### Aufgabe 2

- **Vor dem Tippen:** Alle drei Varianten wirken zunächst noch einigermaßen lesbar, die mit sichtbarem Label aber am ruhigsten.
- **Während der Eingabe:** Beim Feld nur mit Placeholder verschwindet die Hauptorientierung gerade dann, wenn sie gebraucht wird.
- **Nach dem ersten Zeichen:** Das Label bleibt als Frage sichtbar, der Placeholder trägt die Feldfrage nicht mehr.

### Aufgabe 3

Ein Label benennt das Formularfeld fachlich und dauerhaft. Ein Placeholder kann höchstens ein Beispiel oder Format ergänzen, zum Beispiel <code>name@example.de</code>. Er sollte aber nicht die eigentliche Feldfrage alleine tragen.

### Aufgabe 4

Auch ein längerer Placeholder löst das Grundproblem nicht sauber, weil die Feldfrage weiter nur im Eingabefeld steckt. Beim Tippen verschwindet diese Orientierung trotzdem. Mehr Text macht den Placeholder also nicht automatisch zu einer echten Beschriftung.

### Aufgabe 5

Eine ruhige Verbesserung wäre zum Beispiel:

```html
<label for="telefon">Telefonnummer</label>
<input id="telefon" type="tel" placeholder="+49 123 456789" />
```

Hier stellt das Label die sichtbare Feldfrage. Der Placeholder ergänzt nur noch ein möglichiges Format.

### Aufgabe 6

Der Placeholder darf hier eher als Formatbeispiel gelesen werden, weil die eigentliche Feldfrage schon sichtbar durch das Label gestellt ist. Er beantwortet also nicht mehr die Hauptfrage „Was soll hier hinein?“, sondern nur die Zusatzfrage „Wie könnte das aussehen?“.

### Aufgabe 7

Wenn über dem Suchfeld bereits sichtbar eine Überschrift oder ein Label steht, kann der Placeholder ruhig nur noch ergänzen. Dann trägt die eigentliche Feldfrage schon die sichtbare Beschriftung. Der Placeholder hilft höchstens mit einer Formulierung oder einem Beispiel, ersetzt die Frage aber nicht.

### Aufgabe 8

Mehr Placeholder-Text macht die Orientierung zunächst ausführlicher, aber nicht stabiler. Die Feldfrage sitzt weiterhin im Eingabefeld selbst und verschwindet oft, sobald jemand zu tippen beginnt. Gerade deshalb wird aus einem langen Placeholder noch kein echtes Label.
