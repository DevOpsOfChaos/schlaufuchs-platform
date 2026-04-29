---
title: "Grundlagen: Cookies, Sessions und Login"
description: "Allgemeiner Überblick über Cookies, serverseitige Sessions, Anmeldung und sichere Zustandsverwaltung im Web."
subject: "web-development"
section: "Web-Sicherheit"
topicPath: ["security", "cookies-sessions-und-login", "ueberblick", "grundlagen-cookies-sessions-und-login"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Web-Sicherheit"]
draft: false
---
## Begriff

Ein **Cookie** ist ein kleines Datenstück, das eine Webseite im Browser speichern kann. Bei passenden späteren Anfragen sendet der Browser dieses Cookie wieder an den Server. Dadurch kann ein Webangebot einen Nutzer oder eine Sitzung wiedererkennen.

Eine **Session** beschreibt einen zusammenhängenden Nutzungszustand, zum Beispiel eine Anmeldung. Häufig speichert der Browser nur eine zufällige Sitzungskennung im Cookie, während die eigentlichen Sitzungsdaten auf dem Server liegen.

## Warum Zustand im Web besonders ist

HTTP-Anfragen sind grundsätzlich einzelne Nachrichten. Der Server erhält eine Anfrage und beantwortet sie. Ohne zusätzliche Informationen wüsste er bei der nächsten Anfrage nicht automatisch, ob sie zur gleichen Person gehört.

Cookies und Sessions lösen dieses Problem, indem sie Wiedererkennung ermöglichen. Dadurch werden Warenkörbe, Logins, Spracheinstellungen oder gespeicherte Zustände möglich.

## Cookie und Session unterscheiden

Ein Cookie liegt im Browser und wird bei Anfragen mitgesendet. Eine Session ist meist der fachliche Zustand, der mit einer Kennung verknüpft ist. Diese Unterscheidung ist wichtig: Im Cookie sollte nicht unbedacht alles gespeichert werden, was der Server über den Nutzer weiß.

Sicherer ist oft, im Cookie nur eine schwer erratbare Kennung abzulegen und die eigentlichen Daten serverseitig zu verwalten.

## Sicherheitsfragen

Login-Zustände müssen geschützt werden. Dazu gehören sichere Übertragung, sinnvolle Ablaufzeiten, Schutz vor Diebstahl der Sitzungskennung und eine klare Abmeldung. Auch Cookie-Einstellungen wie `HttpOnly`, `Secure` und `SameSite` können wichtig werden.

Diese Details sind keine kosmetischen Zusätze, sondern Teil der Frage, ob ein Login-System zuverlässig und vertrauenswürdig funktioniert.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Cookie-Attribute, Formular-Logins, Token, CSRF oder Session-Ablauf. Diese Überblicksseite erklärt den allgemeinen Rahmen: Cookies ermöglichen Wiedererkennung, Sessions verwalten Zustand, und Login-Systeme müssen diesen Zustand schützen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Cookie ist nicht automatisch eine Session. Oft enthält es nur den Schlüssel, mit dem der Server die passende Session wiederfindet.</p>
</div>
