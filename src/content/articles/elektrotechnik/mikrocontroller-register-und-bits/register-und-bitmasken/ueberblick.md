---
title: "Register und Bitmasken"
description: "Allgemeiner Überblick über Register, Bits und Bitmasken bei der Konfiguration von Mikrocontrollern."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["mikrocontroller-register-und-bits", "register-und-bitmasken", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# Register und Bitmasken
Register sind spezielle Speicherstellen, über die ein Programm Hardware steuert oder ausliest. Bei einem Mikrocontroller können Register festlegen, ob ein Pin Eingang oder Ausgang ist, ob ein Pull-up aktiv ist, ob ein Timer läuft oder ob ein Interrupt ausgelöst wurde. Ein Register ist damit mehr als eine normale Variable: Es ist eine Schnittstelle zur Hardware.

Ein Register besteht aus Bits. Jedes Bit kann eine eigene Bedeutung haben. Ein Bit aktiviert zum Beispiel eine Funktion, ein anderes wählt einen Modus, ein weiteres zeigt einen Status an. Bitmasken helfen dabei, einzelne Bits gezielt zu verändern, ohne die anderen Bits im selben Register zu beschädigen.

## Einordnung

In einfachen Programmen wird Hardware oft über fertige Funktionen angesprochen. Darunter stehen aber fast immer Registerzugriffe. Wer Register versteht, erkennt besser, warum bestimmte Einstellungen zusammengehören und warum kleine Änderungen große Auswirkungen haben können.

Ein typisches Beispiel ist die Pin-Konfiguration. Ein Richtungsregister kann pro Pin festlegen, ob der Anschluss Eingang oder Ausgang ist. Ein Ausgaberegister bestimmt den Ausgangspegel oder aktiviert bei Eingängen einen Pull-up. Ein Eingangsregister zeigt den aktuellen Zustand der Pins.

## Bitmasken

Eine Bitmaske ist ein Wert, bei dem bestimmte Bits gezielt auf `1` gesetzt sind. Mit logischen Operationen kann ein Programm dadurch einzelne Bits setzen, löschen, umschalten oder prüfen. Das ist wichtig, weil ein Register mehrere unabhängige Informationen enthält. Eine unvorsichtige Zuweisung kann sonst alle Bits überschreiben.

## Typische Teilaspekte

Wichtig sind das Setzen von Bits, das Löschen von Bits, das Prüfen von Flags und das Kombinieren mehrerer Einstellungen. Ebenso wichtig ist die Frage, ob ein Register gelesen, geschrieben oder beides werden darf. Manche Statusbits werden durch Schreiben einer `1` gelöscht, was zunächst ungewohnt wirken kann.

## Häufige Missverständnisse

Ein häufiger Fehler ist, ein Register komplett zu überschreiben, obwohl nur ein Bit geändert werden sollte. Ein anderer Fehler ist die Annahme, dass alle Register wie normaler Arbeitsspeicher funktionieren. Hardware-Register können Nebenwirkungen haben: Ein Lesezugriff kann einen Zustand bestätigen, ein Schreibzugriff kann eine Aktion auslösen.

## Kurz zusammengefasst

Register sind die direkte Sprache zwischen Programm und Hardware. Bitmasken machen diese Sprache sicherer, weil sie einzelne Funktionen gezielt ansprechen und Nachbarbits unangetastet lassen.
