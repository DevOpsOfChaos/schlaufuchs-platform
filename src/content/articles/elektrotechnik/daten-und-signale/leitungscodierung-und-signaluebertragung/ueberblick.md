---
title: "Leitungscodierung und Signalübertragung"
description: "Technische Referenz zu digitalen Signalen, Übertragungsketten und Leitungscodes wie NRZ, RZ und Manchester-Codierung."
subject: "elektrotechnik"
section: "Daten und Signale"
topicPath: ["daten-und-signale", "leitungscodierung-und-signaluebertragung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Daten", "Signale", "Leitungscodierung", "NRZ", "Manchester"]
draft: false
---

Leitungscodierung beschreibt, wie digitale Daten als elektrische oder optische Signalverläufe auf einer Übertragungsstrecke dargestellt werden. Sie ist nicht dasselbe wie Verschlüsselung und nicht dasselbe wie ein Datenprotokoll.

## Definition und Grundidee

Digitale Daten bestehen logisch aus Zuständen wie `0` und `1`. Eine reale Leitung überträgt aber physikalische Größen: Spannung, Strom, Lichtleistung oder Pegelwechsel. Eine Leitungscodierung legt fest, welcher Signalverlauf welche Datenbedeutung hat.

Die Grundfrage lautet:

```text
Wie wird eine Bitfolge als zeitlicher Signalverlauf auf der Leitung dargestellt?
```

## Einordnung

Eine Übertragungskette besteht aus mehreren Ebenen:

- Datenquelle erzeugt Bits.
- Codierung übersetzt Bits in Signalzustände.
- Sender erzeugt den physikalischen Pegel.
- Leitung überträgt das Signal mit Störungen und Verlusten.
- Empfänger rekonstruiert Pegel, Takt und Daten.
- Auswertung interpretiert die empfangene Bitfolge.

Leitungscodierung liegt nahe an der physikalischen und datentechnischen Schnittstelle. Sie bestimmt nicht allein die Datenrate, aber sie beeinflusst Bandbreite, Gleichanteil, Taktrückgewinnung und Störanfälligkeit.

## Signal, Pegel und Takt

Ein digitales Signal ist nicht automatisch ideal rechteckig. Reale Flanken haben Anstiegszeiten, Leitungen besitzen Kapazitäten und Störungen überlagern sich. Deshalb sind Pegel, Schwellwerte und Timing entscheidend.

Wichtige Begriffe:

- **Bitdauer:** Zeitfenster, in dem ein Bit übertragen wird.
- **Pegel:** elektrischer Zustand, der als High, Low oder weiterer Zustand interpretiert wird.
- **Flanke:** Übergang zwischen Pegeln.
- **Takt:** zeitlicher Bezug, wann ein Zustand ausgewertet wird.
- **Gleichanteil:** durchschnittlicher Signalanteil, der bei manchen Übertragungswegen problematisch ist.

## NRZ-Codierung

Bei NRZ-Verfahren bleibt der Pegel während einer Bitdauer konstant. NRZ steht für **Non Return to Zero**. Das Signal kehrt innerhalb des Bitfensters nicht zwangsläufig auf einen Nullpegel zurück.

Einfache Varianten:

- **NRZ unipolar:** ein Pegel für `0`, ein positiver Pegel für `1`.
- **NRZ bipolar:** zwei gegensätzliche Pegel für `0` und `1`.

Vorteile:

- einfache Darstellung,
- geringer Bandbreitenbedarf,
- gute Nutzdatenrate.

Nachteile:

- lange Folgen gleicher Bits erzeugen keine Flanken,
- Taktrückgewinnung kann schwierig werden,
- Gleichanteil kann je nach Variante problematisch sein.

## RZ-Codierung

RZ steht für **Return to Zero**. Der Signalpegel kehrt innerhalb einer Bitdauer auf einen Bezugspegel zurück.

Vorteile:

- mehr Übergänge im Signal,
- Timing kann leichter aus dem Signal erkennbar sein.

Nachteile:

- höhere Bandbreite nötig,
- geringere Effizienz bei gleicher Symbolrate.

RZ ist deshalb nicht automatisch besser. Es tauscht Bandbreite gegen Taktinformation.

## Manchester-Codierung

Bei der Manchester-Codierung liegt die Information im Pegelwechsel innerhalb der Bitdauer. In der Definition nach IEEE 802.3 kann eine fallende Flanke eine `0` und eine steigende Flanke eine `1` darstellen.

Wichtige Eigenschaft: Jedes Bit enthält einen Übergang. Dadurch kann der Empfänger den Takt besser rekonstruieren.

Vorteile:

- Taktrückgewinnung aus dem Signal,
- kein dauerhafter Gleichanteil,
- robustere Synchronisation bei langen Bitfolgen.

Nachteile:

- höhere Bandbreite,
- geringere Nutzdatenrate bezogen auf die nötige Signaländerung,
- Timing der Flanke ist kritisch.

## Auswahlkriterien

Ein Leitungscode wird nach technischen Randbedingungen gewählt:

- verfügbare Bandbreite,
- nötige Taktrückgewinnung,
- zulässiger Gleichanteil,
- Störumgebung,
- Kopplung der Übertragungsstrecke,
- gewünschte Datenrate,
- Aufwand im Sender und Empfänger.

Ein Code mit vielen Übergängen ist oft leichter zu synchronisieren, braucht aber mehr Bandbreite. Ein einfacher Code ist effizienter, kann aber bei langen gleichbleibenden Bitfolgen Probleme erzeugen.

## Typische Fehler

- **Leitungscodierung mit Verschlüsselung verwechseln:** Codierung macht Signale übertragbar; Verschlüsselung schützt Inhalte.
- **Pegel und Bit gleichsetzen:** Ein Bit ist logische Information, ein Pegel ist physikalische Darstellung.
- **Flanken ignorieren:** Viele Empfänger werten nicht nur Pegel, sondern auch Zeitpunkt und Übergänge aus.
- **Bandbreite unterschätzen:** Manchester-ähnliche Verfahren brauchen mehr Signalwechsel.
- **Gleichanteil vergessen:** Manche Übertragungsstrecken können Gleichanteile schlecht übertragen.
- **Takt als selbstverständlich annehmen:** Ohne Übergänge kann Taktrückgewinnung schwierig werden.

## Abgrenzung

Leitungscodierung beschreibt die Signalform auf der Übertragungsstrecke. Protokolle regeln Adressen, Frames, Fehlererkennung und Reihenfolge. Modulation beschreibt, wie ein Trägersignal verändert wird. Fehlerkorrektur und Verschlüsselung sind weitere getrennte Schichten.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/elektrotechnik-daten-und-signale-leitungscodierung/` neu geschrieben und adaptiert, insbesondere aus `signale_grundlagen.html`, `signaluebertragung_grundlagen.html` und `leitungscodierung.html`. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt, mit Autorenkürzel JW und Datum 11.1.2019. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
