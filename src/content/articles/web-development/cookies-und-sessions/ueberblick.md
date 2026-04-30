---
title: "Cookies und Sessions"
description: "Überblick über Cookies, Sessions und zustandsbehaftete Webnutzung."
subject: "web-development"
section: "Browser und Server"
topicPath: ["cookies-und-sessions", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Browser und Server"]
draft: false
---
# Cookies und Sessions

![Schaubild zu Cookies und Sessions.](/schlaufuchs-platform/images/overviews/v149/cookies-und-sessions.svg)

*Das Schaubild zeigt, wie Browser und Server Zustände wiedererkennen.*


HTTP ist grundsätzlich zustandslos: Jede Anfrage steht zunächst für sich. Cookies ermöglichen, kleine Informationen im Browser zu speichern und bei passenden Anfragen wieder mitzuschicken. Sessions nutzen häufig ein Cookie mit einer Kennung, während die eigentlichen Sitzungsdaten serverseitig liegen.

## Einordnung

Cookies und Sessions sind zentral für Anmeldung, Warenkörbe, Spracheinstellungen und viele personalisierte Funktionen. Gleichzeitig berühren sie Sicherheit und Datenschutz, weil sie Benutzer wiedererkennen und Zugriffe ermöglichen können.

## Zentrale Aspekte

- **Session-Cookie und dauerhafte Cookies:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Attribute wie HttpOnly, Secure und SameSite:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **serverseitige Sitzungsdaten:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Ablauf, Logout und Erneuerung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Nach einer Anmeldung setzt der Server oft ein Session-Cookie. Bei späteren Anfragen erkennt er die Sitzung wieder. `HttpOnly` erschwert Zugriff durch JavaScript, `Secure` begrenzt Übertragung auf HTTPS, `SameSite` hilft gegen bestimmte Cross-Site-Angriffe.

## Abgrenzung

Ein Cookie ist kein sicherer Tresor. Inhalte können sichtbar, manipulierbar oder rechtlich relevant sein. Sensible Daten sollten nicht ungeschützt im Cookie liegen. Eine Session muss außerdem ablaufen und bei Logout ungültig werden.

## Häufige Missverständnisse

Häufig wird eine Session nur als Komfortfunktion betrachtet. Tatsächlich ist sie sicherheitskritisch. Fehler entstehen durch zu lange Laufzeiten, fehlendes `Secure`, unklare Logout-Logik oder das Speichern sensibler Daten im Browser.

## Kurz zusammengefasst

- Cookies bringen Zustand in zustandslose HTTP-Kommunikation.
- Sessions sollten serverseitig kontrolliert und zeitlich begrenzt sein.
- Cookie-Attribute sind Teil der Sicherheit.
