---
title: "Daten und Codierung"
description: "Verstehe, wie Informationen als Daten dargestellt werden und warum Codierung für digitale Systeme zentral ist."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "daten-und-codierung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Grundlagen"]
draft: false
---
## Warum dieses Thema grundlegend ist

Viele Einsteigerthemen in der Informatik wirken auf den ersten Blick sehr technisch. Dahinter steckt aber oft dieselbe Grundfrage: **Wie wird etwas für ein System so dargestellt, dass es verarbeitet werden kann?** Genau darum geht es bei Daten und Codierung.

Wenn Menschen Informationen austauschen, arbeiten sie mit Bedeutung. Ein Computer verarbeitet dagegen zunächst nur Zustände, Zeichen und festgelegte Darstellungen. Die Brücke zwischen beidem ist die Codierung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Das Wort bleibt gleich, die Darstellung ändert sich</h3>
  <p>Das Wort <strong>Hallo</strong> kann als sichtbarer Text auf dem Bildschirm stehen, als Folge einzelner Buchstaben gespeichert sein oder intern über Zahlencodes repräsentiert werden. Für den Menschen bleibt die Information ähnlich. Für das System ist entscheidend, welche Datenfolge tatsächlich vorliegt.</p>
</div>

## Information ist nicht dasselbe wie Daten

Im Alltag werden beide Begriffe oft vermischt. In der Informatik hilft eine klare Trennung:

- **Information** meint die Bedeutung.
- **Daten** sind die Form, in der etwas dargestellt und verarbeitet wird.

Ein Beispiel:

- Die Aussage „Der Raum ist 22 °C warm“ ist für dich eine Information.
- Die Zeichenfolge, die gemessene Zahl oder der gespeicherte Messwert sind Daten.

Digitale Systeme arbeiten auf der Ebene der Daten. Die Bedeutung entsteht erst dadurch, dass Menschen oder Programme diese Daten nach festen Regeln interpretieren.

## Warum Codierung gebraucht wird

Ein System kann Inhalte nur dann speichern, übertragen oder verarbeiten, wenn klar geregelt ist, **wie** diese Inhalte dargestellt werden. Diese Regel nennt man Codierung.

Codierung beantwortet zum Beispiel Fragen wie:

- Wie wird ein Buchstabe dargestellt?
- Wie wird eine Zahl gespeichert?
- Wie wird ein Ja-Nein-Zustand codiert?
- Wie werden Farben, Töne oder Bilder in Daten übersetzt?

Ohne solche Regeln gäbe es keine verlässliche Verarbeitung.

## Einfache Beispiele für Codierung

### Buchstaben

Texte werden nicht als „Bedeutung“ abgespeichert, sondern als Folgen von Zeichenwerten. Dafür braucht man eine Zeichenkodierung.

### Zahlen

Auch Zahlen müssen dargestellt werden. Je nach Kontext ist wichtig,

- ob eine Zahl als Zahl interpretiert wird,
- ob sie als Text eingegeben wurde,
- oder ob sie in anderer Form gespeichert ist.

### Zustände

Viele technische Situationen lassen sich als zwei klare Zustände darstellen, zum Beispiel

- an / aus,
- wahr / falsch,
- 1 / 0.

Damit entsteht die Grundlage für digitale Verarbeitung.

## Warum digitale Systeme mit festen Darstellungen arbeiten

Computer verstehen keine Bedeutung im menschlichen Sinn. Sie verarbeiten regelgebundene Zustände. Dadurch werden Systeme

- schnell,
- eindeutig,
- wiederholbar,
- und für viele verschiedene Aufgaben nutzbar.

Gerade deshalb ist es wichtig, früh zu verstehen: Der Rechner „weiß“ nicht automatisch, was etwas bedeutet. Er verarbeitet das, was durch Datenrepräsentation und Codierung festgelegt wurde.

## Woran man gute Erklärungen erkennt

Eine gute Erklärung zu diesem Thema trennt klar:

1. Welche Information soll ausgedrückt werden?
2. Welche Daten liegen tatsächlich vor?
3. Welche Codierungsregel verbindet beides?

Wer diese drei Ebenen auseinanderhält, versteht später auch Dateiformate, Zeichencodierungen, Speichergrößen und viele andere Systemthemen leichter.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du das Thema weiterdenken</h3>
  <ul>
    <li>Vergleiche eine Zahl als Rechenwert mit derselben Zahl als Text in einem Formular.</li>
    <li>Überlege, welche Datenfolge hinter einem Emoji, einem Zeichen oder einem einfachen Status steckt.</li>
    <li>Frage bei jedem digitalen Beispiel: Welche Information ist gemeint, und wie wird sie dargestellt?</li>
  </ul>
</div>
