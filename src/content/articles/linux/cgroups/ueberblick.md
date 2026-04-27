---
title: "cgroups"
description: "Überblick über Control Groups zur Begrenzung und Beobachtung von Prozessressourcen."
subject: linux
section: "Ressourcen"
topicPath:
  - "cgroups"
  - "ueberblick"
learningGoals:
  - "Du kannst cgroups als Grundbegriff einordnen."
  - "Du kennst typische Teilaspekte wie CPU, Memory, systemd."
  - "Du kannst häufige Fehlannahmen vom fachlichen Kern unterscheiden."
practiceIdeas: []
commonMistakes:
  - "Container nur als Dateisystemisolation zu verstehen und Ressourcensteuerung auszublenden."
  - "Einzelne Kennwerte ohne Zusammenhang zu Quelle, Umgebung oder Modell zu bewerten."
keyTakeaways:
  - "cgroups beschreibt keinen isolierten Trick, sondern einen Zusammenhang im Bereich Ressourcensteuerung im Kernel."
  - "Wichtige Hinweise liefern vor allem CPU, Memory, systemd."
recognizeSignals:
  - "Es geht um ressourcensteuerung im kernel, cpu oder memory."
selfCheckPoints:
  - "Kann ich erklären, welchen Zweck cgroups erfüllt?"
  - "Kann ich typische Einflussgrößen nennen und voneinander abgrenzen?"
level: einfach
tags:
  - "linux"
  - "ressourcen"
  - "container"
draft: false
---
# cgroups

![Schaubild zu cgroups.](/schlaufuchs-platform/images/overviews/v150/cgroups.svg)

*Das Schaubild zeigt, wie Ressourcen für Prozessgruppen begrenzt und beobachtet werden.*



## Einordnung

cgroups ist ein Grundbegriff im Bereich **Ressourcensteuerung im Kernel**. cgroups ordnen Prozesse Gruppen zu und begrenzen oder messen CPU, Speicher, I/O und andere Ressourcen. In einer Lernplattform ist dieses Thema vor allem deshalb wichtig, weil es viele spätere Detailfragen vorbereitet: Messwerte, Fehlersuche, Entwurfsentscheidungen und technische Grenzen lassen sich erst dann sauber beurteilen, wenn der allgemeine Zusammenhang klar ist.

Der Begriff steht nicht für eine einzelne Rechenregel oder einen isolierten Bedienkniff. Er beschreibt ein Zusammenspiel aus Bedingungen, Annahmen und beobachtbaren Folgen. Je nach Kontext kann derselbe Begriff eher physikalisch, logisch, organisatorisch oder mathematisch wirken. Eine gute Überblicksseite trennt deshalb zuerst die Grundidee von typischen Spezialfällen.

## Bedeutung

Im praktischen Einsatz hilft cgroups, Entscheidungen nicht nur aus Gewohnheit zu treffen. Wer das Thema versteht, kann erklären, welche Größen relevant sind, welche Annahmen geprüft werden müssen und wo ein scheinbar einfaches Verhalten kippen kann. Besonders wichtig ist dabei die Unterscheidung zwischen idealisierten Modellen und realen Bedingungen.

Bei einfachen Beispielen wirkt das Thema oft selbstverständlich. In größeren Systemen entstehen jedoch Wechselwirkungen: Werte ändern sich unter Last, Zustände hängen vom Verlauf ab, Messungen beeinflussen das Ergebnis oder Schnittstellen treffen auf verschiedene Erwartungen. Genau an diesen Übergängen zeigt sich, ob der Begriff nur wiedererkannt oder wirklich verstanden wurde.

## Zentrale Teilaspekte

- **CPU:** Dieser Teilaspekt hilft, das Thema nicht nur als Begriff, sondern als prüfbaren Zusammenhang zu lesen.
- **Memory:** Dieser Teilaspekt hilft, das Thema nicht nur als Begriff, sondern als prüfbaren Zusammenhang zu lesen.
- **systemd:** Dieser Teilaspekt hilft, das Thema nicht nur als Begriff, sondern als prüfbaren Zusammenhang zu lesen.
- **Container:** Dieser Teilaspekt hilft, das Thema nicht nur als Begriff, sondern als prüfbaren Zusammenhang zu lesen.
- **Limits:** Dieser Teilaspekt hilft, das Thema nicht nur als Begriff, sondern als prüfbaren Zusammenhang zu lesen.

Diese Teilaspekte sollten nicht als lose Stichwortliste gelesen werden. Sie bilden eine kleine Landkarte: Zuerst wird geklärt, was betrachtet wird, dann welche Bedingungen gelten, anschließend welche Grenzen und Fehlbilder auftreten können. Dadurch entsteht ein ruhiger Zugang, bevor konkrete Aufgaben, Messungen oder Implementierungen folgen.

## Zusammenhang und Abgrenzung

cgroups ist eng mit benachbarten Themen verbunden, darf aber nicht mit ihnen gleichgesetzt werden. Ein verwandter Begriff kann dieselben Bauteile, Formeln, Befehle oder Strukturen verwenden und trotzdem eine andere Frage beantworten. Die Abgrenzung gelingt meist über die Leitfrage: Geht es um Ursache, Wirkung, Modell, Messung, Bedienung oder Entscheidung?

Wichtig ist außerdem die Ebene der Betrachtung. Manche Aussagen sind auf Bauteilebene richtig, auf Systemebene aber unvollständig. Andere Aussagen stimmen in einem idealen Modell, werden in realen Umgebungen aber durch Toleranzen, Laufzeiten, Grenzen oder Nutzerverhalten verändert. Eine belastbare Erklärung benennt diese Ebene ausdrücklich.

## Typische Beispiele

Ein typisches Beispiel ist eine Situation, in der ein einzelner Wert zunächst plausibel wirkt, aber erst durch den Zusammenhang erklärbar wird. Dazu gehören etwa Grenzwerte, Zustände, Übergänge, Messpunkte, Datenflüsse oder Wahrscheinlichkeiten. Der konkrete Zahlenwert ist dabei weniger wichtig als die Frage, warum er unter bestimmten Bedingungen entsteht.

Ein zweites Beispiel ist die Fehlersuche. Wenn ein Ergebnis nicht zur Erwartung passt, hilft cgroups dabei, mögliche Ursachen zu sortieren. Statt sofort an der offensichtlichsten Stelle zu ändern, wird geprüft, welche Voraussetzungen gelten, welche Signale oder Daten tatsächlich vorliegen und welche Annahmen noch nicht belegt sind.

## Häufige Missverständnisse

Ein häufiges Missverständnis lautet: Container nur als Dateisystemisolation zu verstehen und Ressourcensteuerung auszublenden. Solche Verkürzungen sind verständlich, weil sie in einfachen Fällen oft nicht sofort auffallen. Sie führen aber zu falschen Schlüssen, sobald Randbedingungen, Messungen, Nebenwirkungen oder unterschiedliche Betriebszustände hinzukommen.

Ebenso problematisch ist es, den Begriff nur über ein einzelnes Werkzeug oder eine einzelne Formel zu definieren. Werkzeuge helfen beim Anwenden, ersetzen aber nicht die fachliche Einordnung. Wer nur die Bedienhandlung kennt, erkennt ähnliche Probleme in anderer Form oft nicht wieder.

## Woran man das Thema erkennt

Das Thema ist meist dann relevant, wenn mehrere Bedingungen gleichzeitig beachtet werden müssen: ein Eingang und ein Ausgang, ein Modell und eine Beobachtung, eine Entscheidung und ihre Folgen oder ein lokaler Wert und sein Systemkontext. Hinweise sind Begriffe wie **CPU**, **Memory** oder **systemd**.

Für Lernende ist ein guter Selbsttest: Lässt sich in eigenen Worten erklären, warum das Thema existiert, welche Grenze es beschreibt und welches typische Missverständnis vermieden werden soll? Wenn diese drei Punkte klar sind, können spätere Spezialseiten deutlich leichter eingeordnet werden.
