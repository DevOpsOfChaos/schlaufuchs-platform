---
title: ATmega – PWM als Grundidee verstehen
description: Verstehe, wie der AVR mit Timer und Compare aus digitalem Schalten ein zeitlich gemitteltes Steuersignal macht.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - pwm-und-signalerzeugung
  - atmega-pwm-als-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von PWM als schnelles Ein- und Ausschalten mit veränderlichem Tastverhältnis.
  - Du beschreibst, warum PWM oft keine echte Analogspannung ist.
  - Du liest PWM ruhiger als Zeitverhältnis statt als magische Helligkeits- oder Motorspannung.
practiceIdeas:
  - Vergleiche zwei Tastverhältnisse und ihre grobe Wirkung auf LED oder Motor.
  - Übersetze eine PWM zuerst in Ein-Zeit und Aus-Zeit innerhalb einer Periode.
  - Prüfe, warum Timer und Compare für PWM zusammengedacht werden müssen.
commonMistakes:
  - PWM mit einer echten kontinuierlichen Analogspannung gleichzusetzen.
  - Nur den Mittelwert zu sehen und die schnelle Schaltstruktur zu vergessen.
  - Frequenz und Tastverhältnis durcheinanderzubringen.
keyTakeaways:
  - PWM schaltet digital, aber in einem zeitlich gewichteten Verhältnis.
  - Das Tastverhältnis bestimmt grob die mittlere Wirkung.
  - Timer, Zählbereich und Compare-Wert bilden zusammen die Grundlage einer PWM.
recognizeSignals:
  - Es geht um PWM, Duty Cycle, Tastverhältnis oder Helligkeitssteuerung am AVR.
  - Du sollst erklären, warum eine LED heller oder dunkler wirkt.
  - In Aufgaben werden Timer, Compare und Schaltverhältnis gemeinsam betrachtet.
selfCheckPoints:
  - Kann ich Tastverhältnis und Frequenz sauber unterscheiden?
  - Kann ich erklären, warum PWM keine echte Analogspannung sein muss?
  - Kann ich die Wirkung eines größeren Compare-Werts grob einordnen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
  - timer
level: mittel
draft: false
---

PWM steht für **Pulsweitenmodulation**. Die Grundidee ist einfach: Ein Ausgang wird schnell zwischen **ein** und **aus** umgeschaltet. Entscheidend ist nicht nur, dass geschaltet wird, sondern **wie lange innerhalb einer Periode der Ein-Zustand anhält**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED wird heller, ohne dass der Pin analog ausgibt</h3>
  <p>Am AVR-Pin liegt trotzdem nur digital ein hoher oder niedriger Pegel an. Die LED wirkt aber heller oder dunkler, weil sich das zeitliche Verhältnis zwischen Ein und Aus ändert. Genau deshalb ist PWM ein Zeit- und nicht zuerst ein Analogthema.</p>
</div>

## PWM zuerst als Zeitbild lesen

Eine PWM lässt sich grob so denken:

```text
Ein | Ein | Ein | Aus
```

oder

```text
Ein | Aus | Aus | Aus
```

In beiden Fällen bleibt das Signal digital. Geändert wird nur das **Tastverhältnis**, also der Anteil der Ein-Zeit innerhalb einer vollständigen Periode.

## Frequenz und Tastverhältnis trennen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Wie schnell wiederholt sich die PWM und wie lang bleibt sie innerhalb der Periode an?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Frequenz</strong>
      <span>Sie beschreibt, wie oft sich das gesamte Muster pro Sekunde wiederholt.</span>
    </div>
    <div class="compare-item">
      <strong>Tastverhältnis</strong>
      <span>Es beschreibt, welcher Anteil einer einzelnen Periode im Ein-Zustand liegt.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleiche Frequenz, anderes Tastverhältnis

<div class="figure-card">
  <p class="card-kicker">Mini-Signalbild</p>
  <h3>Die Periodendauer bleibt, aber die Ein-Zeit verändert sich</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>25&nbsp;Prozent</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>Ein | Aus | Aus | Aus</code></pre>
      <p style="margin:0.6rem 0 0;">Kurze Ein-Zeit, schwächere mittlere Wirkung.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>75&nbsp;Prozent</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>Ein | Ein | Ein | Aus</code></pre>
      <p style="margin:0.6rem 0 0;">Längere Ein-Zeit, stärkere mittlere Wirkung.</p>
    </div>
  </div>
</div>

## Warum PWM oft nicht „analog“ sein muss

Eine PWM kann an einem Ausgang weiterhin nur `0` oder `1` liefern. Trotzdem kann ihre Wirkung gemittelt erscheinen:

- eine LED wirkt heller oder dunkler,
- ein Motor bekommt mehr oder weniger mittlere Antriebswirkung,
- eine Last reagiert auf den zeitlichen Mittelwert.

Genau deshalb ist PWM didaktisch ein gutes Beispiel für den Unterschied zwischen **Signalform** und **wahrgenommener Wirkung**.

## Timer und Compare gehören dazu

Am AVR entsteht PWM typischerweise nicht „einfach so“, sondern über einen Timer mit festem Zählrahmen und einem Compare-Wert. Diese Seite bleibt bewusst bei der Grundidee, aber die ruhige Lesart ist schon hier wichtig:

- der Timer liefert die periodische Struktur,
- der Compare-Wert beeinflusst den Umschaltpunkt,
- daraus entsteht das Tastverhältnis.

## Drei Verwechslungen bewusst vermeiden

<div class="compare-card">
  <p class="card-kicker">Diagnose</p>
  <h3>Typische Kurzschlüsse bei PWM</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>PWM gleich Analogspannung</strong>
      <span>Das ist zu grob. Das Signal kann vollständig digital bleiben.</span>
    </div>
    <div class="compare-item">
      <strong>Nur Duty Cycle sehen</strong>
      <span>Dann wird leicht vergessen, dass auch die Frequenz die Wahrnehmung oder Wirkung mitprägt.</span>
    </div>
    <div class="compare-item">
      <strong>Compare-Wert ohne Zeitbild</strong>
      <span>Dann werden Registerzahlen gelernt, ohne die zeitliche Struktur des Signals zu verstehen.</span>
    </div>
  </div>
</div>

## Abgrenzung zu den Nachbarseiten

Diese Seite erklärt die **Grundidee der PWM als zeitliches Schaltverhältnis**.  
Sie behandelt bewusst noch nicht im Detail,

- welche PWM-Modi es am AVR gibt,
- wie Registerkonfigurationen im Einzelnen aussehen,
- oder wie man konkrete Frequenzen exakt berechnet.

So bleibt das Thema erst einmal klar: **Wie wird aus digitalem Schalten eine zeitlich gewichtete Wirkung?**

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Periodische Struktur sehen</strong>
    <span>Was wiederholt sich hier als Grundmuster?</span>
  </div>
  <div class="step-item">
    <strong>2. Ein-Zeit und Aus-Zeit trennen</strong>
    <span>Welcher Anteil der Periode liegt im aktiven Zustand?</span>
  </div>
  <div class="step-item">
    <strong>3. Frequenz getrennt halten</strong>
    <span>Nicht verwechseln, wie oft das Muster kommt und wie lang es innerhalb einer Periode anliegt.</span>
  </div>
  <div class="step-item">
    <strong>4. Wirkung erst danach deuten</strong>
    <span>Helligkeit oder Motorverhalten sind Folgen des Zeitverhältnisses, nicht der eigentliche Ausgangspunkt.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> PWM ist keine „analoge Magie“, sondern eine <strong>zeitlich gewichtete digitale Schaltfolge</strong>.</p>
</div>
