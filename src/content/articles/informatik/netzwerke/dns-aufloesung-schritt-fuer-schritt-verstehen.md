---
title: "DNS-Auflösung Schritt für Schritt verstehen"
description: "Verstehe, wie aus einem Domainnamen eine passende Netzwerkadresse wird und warum Namen im Netz Orientierung geben, während Adressen die technische Zustellung ermöglichen."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "dns-aufloesung-schritt-fuer-schritt-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Netzwerke"]
draft: false
---
## Grundidee

Menschen arbeiten lieber mit Namen wie `beispiel.de` als mit langen Zahlenfolgen. Computer und Netzwerke brauchen für die Zustellung aber technische Adressen. DNS ist die Brücke zwischen diesen beiden Ebenen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Website wird über ihren Namen geöffnet</h3>
  <p>Du tippst eine Webadresse in den Browser ein. Damit der Browser die Anfrage an das richtige Ziel schicken kann, muss aus dem leicht merkbaren Namen zuerst die passende Adresse ermittelt werden. Genau diese Übersetzung ist die Kernidee von DNS.</p>
</div>

## Welche Rollen zusammenkommen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Domainname</strong>
    <span>Leicht lesbarer Name für Menschen, zum Beispiel <code>schule.de</code>.</span>
  </div>
  <div class="visual-item">
    <strong>IP-Adresse</strong>
    <span>Technische Adresse, an die Anfragen zugestellt werden können.</span>
  </div>
  <div class="visual-item">
    <strong>DNS</strong>
    <span>Ordnet Namen und Adressen zueinander und macht die Übersetzung nutzbar.</span>
  </div>
</div>

## Schritt für Schritt denken

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Vom eingegebenen Namen zur passenden Adresse</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Name eingeben</strong><span>Zum Beispiel <code>beispiel.de</code> im Browser.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Name auflösen</strong><span>DNS ermittelt die passende technische Adresse.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Anfrage senden</strong><span>Erst jetzt kann die Netzwerkanfrage an das richtige Ziel gehen.</span></div>
  </div>
</div>

## Mini-Vergleich: Orientierung und Zustellung

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Ein Name hilft Menschen, eine Adresse hilft dem Netz</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Domainname</strong>
      <span>Gut merkbar, lesbar und für Menschen geeignet.</span>
    </div>
    <div class="compare-item">
      <strong>IP-Adresse</strong>
      <span>Technisch entscheidend für die Zustellung der Anfrage.</span>
    </div>
  </div>
</div>

## Was DNS nicht ist

DNS speichert nicht „die ganze Website" und beantwortet auch nicht direkt die Inhaltsanfrage. Es hilft zunächst nur dabei, den **richtigen technischen Zielpunkt** zu finden.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>DNS als Zuordnungsdienst</h3>
    <p>Der Name wird mit einer passenden Adresse verbunden, damit die eigentliche Anfrage richtig zugestellt werden kann.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>DNS als ganze Website missverstehen</h3>
    <p>Dann wird Namensauflösung mit Datentransport oder Seitenausgabe vermischt.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. Arbeite ich gerade mit **einem Namen** oder **einer Adresse**?
2. Geht es um **Orientierung** oder um **technische Zustellung**?
3. Ist DNS hier die eigentliche Antwort oder nur ein vorbereitender Schritt?
4. Kommt der Seiteninhalt erst **nach** der Namensauflösung?

<div class="note-panel">
  <p><strong>Merke:</strong> DNS liefert nicht die Website selbst. DNS sorgt zuerst dafür, dass ein leicht lesbarer Name zur passenden technischen Adresse führt.</p>
</div>
