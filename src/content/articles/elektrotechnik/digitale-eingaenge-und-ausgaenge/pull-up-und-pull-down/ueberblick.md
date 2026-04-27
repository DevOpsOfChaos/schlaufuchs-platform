---
title: "Pull-up und Pull-down"
description: "Allgemeiner Überblick über Pull-up- und Pull-down-Widerstände und ihre Bedeutung für stabile digitale Eingänge."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "digitale-eingaenge-und-ausgaenge"
  - "pull-up-und-pull-down"
  - "ueberblick"
learningGoals:
  - "Du kennst den Zweck von Pull-up- und Pull-down-Widerständen."
  - "Du kannst schwebende Eingänge erklären."
  - "Du verstehst die Grundidee eines definierten Ruhezustands."
practiceIdeas: []
commonMistakes:
  - "Einen offenen Eingang als automatisch Low zu betrachten."
  - "Pull-up und Pull-down nur als Softwareeinstellung zu verstehen."
keyTakeaways:
  - "Pull-up und Pull-down legen einen definierten Pegel fest, wenn kein aktives Signal anliegt."
  - "Sie verhindern schwebende Eingänge und zufällige Zustandswechsel."
recognizeSignals:
  - "Es geht um offene Schalter, Taster, undefinierte Pegel oder zufällige Eingangswerte."
selfCheckPoints:
  - "Kann ich erklären, welcher Pegel bei geöffnetem Taster anliegt?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "pull-up"
  - "pull-down"
  - "digitale eingänge"
draft: false
---

# Pull-up und Pull-down

![Schaubild zu Pull-up und Pull-down als definierte Eingangsbeschaltung.](/schlaufuchs-platform/images/overviews/v148/pull-up-und-pull-down.svg)

*Das Schaubild ordnet ein, wie Widerstände Eingänge auf einen definierten Pegel ziehen.*


Pull-up- und Pull-down-Widerstände sorgen dafür, dass ein digitaler Eingang einen definierten Zustand hat, wenn kein aktives Signal angeschlossen ist. Ohne eine solche Festlegung kann ein Eingang elektrisch „schweben“. Er liegt dann nicht sicher auf High oder Low, sondern reagiert empfindlich auf Störungen, Berührung, Leitungskapazitäten oder benachbarte Signale.

Ein Pull-up verbindet den Eingang über einen Widerstand mit der positiven Versorgung. Der Ruhezustand ist dadurch High. Ein Pull-down verbindet den Eingang über einen Widerstand mit Masse. Der Ruhezustand ist dadurch Low. Der Widerstand begrenzt den Strom, wenn ein Schalter oder ein anderes Signal den Eingang auf den jeweils anderen Pegel zieht.

## Zweck

Der wichtigste Zweck ist nicht die Verstärkung eines Signals, sondern die Festlegung eines sicheren Grundzustands. Bei einem Taster ist oft nur während des Tastendrucks eine direkte Verbindung vorhanden. Im geöffneten Zustand wäre der Eingang ohne Pull-Widerstand unbestimmt. Mit Pull-up oder Pull-down ist klar, welcher Wert gelesen wird.

## Typische Schaltungen

Bei einer Pull-up-Schaltung liegt der Eingang über den Widerstand auf High. Der Taster verbindet den Eingang beim Drücken mit Masse, sodass Low gelesen wird. Bei einer Pull-down-Schaltung liegt der Eingang im Ruhezustand auf Low. Der Taster verbindet ihn beim Drücken mit der Versorgung, sodass High gelesen wird.

Viele Mikrocontroller besitzen interne Pull-up- oder Pull-down-Widerstände. Diese lassen sich per Software aktivieren, ersetzen aber nicht das Verständnis der Schaltung. In empfindlichen oder langen Leitungen können externe Widerstände sinnvoller sein, weil ihr Wert und ihre Lage gezielt gewählt werden können.

## Abgrenzung

Pull-Widerstände sind nicht dasselbe wie Entprellung. Sie legen den Pegel fest, verhindern aber nicht automatisch die schnellen Wechsel eines mechanischen Kontakts beim Schalten. Sie sind auch keine Treiber für große Lasten. Ihr Strom ist bewusst klein.

## Häufige Missverständnisse

Ein offener Eingang ist nicht automatisch Low. Er ist undefiniert. Ebenso bedeutet ein aktivierter Pull-up nicht, dass ein Signal immer High bleibt. Ein ausreichend starkes externes Signal oder ein geschlossener Taster kann den Eingang gezielt auf Low ziehen.

## Kurz zusammengefasst

Pull-up und Pull-down machen digitale Eingänge berechenbar. Sie legen einen Ruhezustand fest, verhindern schwebende Pins und bilden die Grundlage für zuverlässige Taster- und Schaltsignale.
