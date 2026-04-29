---
title: "Authentifizierung und Autorisierung"
description: "Einordnung des Unterschieds zwischen Anmeldung und Berechtigung im Web."
subject: "web-development"
section: "Sicherheit"
topicPath: ["authentifizierung-und-autorisierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Sicherheit"]
draft: false
---
# Authentifizierung und Autorisierung

![Schaubild zu Authentifizierung und Autorisierung.](/schlaufuchs-platform/images/overviews/v150/authentifizierung-und-autorisierung.svg)

*Das Schaubild trennt Identitätsprüfung und Rechteentscheidung.*



Authentifizierung klärt, wer eine Person oder ein System ist. Autorisierung klärt, was diese Identität tun darf. Beide Begriffe hängen zusammen, sind aber nicht dasselbe. Eine erfolgreiche Anmeldung bedeutet noch nicht, dass jeder Zugriff erlaubt ist.

## Einordnung

Webanwendungen müssen beide Ebenen sauber trennen. Login, Session und Token beantworten die Identitätsfrage. Rollen, Rechte, Besitzverhältnisse und Regeln entscheiden über erlaubte Aktionen. Diese Prüfung muss serverseitig stattfinden.

## Zentrale Aspekte

- **Identitätsnachweis durch Passwort, Token oder externe Anmeldung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Rollen und Berechtigungen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Ressourcenbesitz und Zugriffskontrolle:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **serverseitige Prüfung jeder geschützten Aktion:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Benutzer kann angemeldet sein, aber nicht berechtigt, ein fremdes Dokument zu ändern. Ein Adminbereich darf nicht nur über versteckte Links geschützt werden. APIs müssen Berechtigungen genauso prüfen wie sichtbare Seiten.

## Abgrenzung

Frontend-Prüfungen verbessern Bedienung, sind aber kein Sicherheitsersatz. Alles, was im Browser läuft, kann manipuliert werden. Die verbindliche Entscheidung muss auf dem Server oder in der geschützten Backend-Schicht liegen.

## Häufige Missverständnisse

Ein häufiger Fehler ist, Authentifizierung und Autorisierung gleichzusetzen. Ebenso gefährlich ist es, nur die Navigation auszublenden und die eigentliche Route oder API offen zu lassen. Sicherheit entsteht durch konsequente Prüfung, nicht durch unsichtbare Buttons.

## Kurz zusammengefasst

- Authentifizierung beantwortet die Frage nach der Identität.
- Autorisierung beantwortet die Frage nach erlaubten Aktionen.
- Berechtigungen müssen serverseitig geprüft werden.
