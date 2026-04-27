---
title: "Server-Side Rendering und Static Site Generation"
description: "Überblick über serverseitiges Rendern, statische Generierung und ihre Rolle bei modernen Webprojekten."
subject: web-development
section: "Grundlagen"
topicPath:
  - "server-side-rendering-und-static-site-generation"
  - "ueberblick"
learningGoals:
  - "Du kannst Server-Side Rendering und Static Site Generation als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Dynamisches Rendering wird oft gewählt, obwohl Inhalte selten wechseln und statische Generierung einfacher wäre."
keyTakeaways:
  - "Rendering entscheidet, wann HTML entsteht."
  - "Statische Generierung ist schnell und gut hostbar."
  - "Personalisierte Inhalte brauchen zusätzliche Dynamik."
recognizeSignals:
  - "Es geht um Build, Hosting, Ladezeit oder personalisierte Inhalte."
  - "Eine Seite soll als Datei ausgeliefert oder pro Anfrage erzeugt werden."
selfCheckPoints:
  - "Kann ich Server-Side Rendering und Static Site Generation in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "rendering"
  - "ssr"
  - "static site generation"
draft: false
---

# Server-Side Rendering und Static Site Generation

Server-Side Rendering und Static Site Generation beschreiben, wann und wo HTML für eine Webseite erzeugt wird. Beim serverseitigen Rendern entsteht HTML zur Anfragezeit, bei statischer Generierung bereits im Build.

## Einordnung

Die Unterscheidung hilft, Ladezeit, Hosting, Aktualität und Komplexität eines Webprojekts zu verstehen. Inhaltsseiten können oft statisch sein, personalisierte Dashboards brauchen mehr Dynamik.

## Zentrale Aspekte

- **Auslieferung:** Statische Seiten können einfach über CDN oder GitHub Pages ausgeliefert werden.
- **Aktualität:** Serverseitiges Rendern kann Inhalte pro Anfrage neu berechnen.
- **Build-Zeit:** Statische Generierung verlagert Arbeit in den Build.
- **Komplexität:** Anfragezustand erhöht die Serverlogik.

## Beispiele und Zusammenhang

Einer Lernseite mit festen Inhalten reicht oft ein statischer Build. Eine Kontoseite mit persönlichen Daten muss dagegen pro Nutzer dynamisch erzeugt oder nachgeladen werden.

## Abgrenzung

Statisch bedeutet nicht altmodisch. Viele schnelle und sichere Seiten sind statisch generiert und nutzen JavaScript nur gezielt.

## Häufige Missverständnisse

Dynamisches Rendering wird oft gewählt, obwohl Inhalte selten wechseln und statische Generierung einfacher wäre.

## Kurz zusammengefasst

- Rendering entscheidet, wann HTML entsteht.
- Statische Generierung ist schnell und gut hostbar.
- Personalisierte Inhalte brauchen zusätzliche Dynamik.
