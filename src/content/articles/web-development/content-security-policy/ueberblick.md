---
title: "Content Security Policy"
description: "Überblick über Content Security Policy als Schutzmechanismus gegen unerwünschte Skripte und Ressourcen."
subject: web-development
section: "Sicherheit"
topicPath:
  - "content-security-policy"
  - "ueberblick"
learningGoals:
  - "Du kannst Content Security Policy als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "CSPs werden oft mit zu vielen Wildcards formuliert und schützen dann kaum."
keyTakeaways:
  - "CSP begrenzt erlaubte Quellen."
  - "Sie ist eine zusätzliche Schutzschicht."
  - "Eine wirksame Policy muss getestet werden."
recognizeSignals:
  - "Es geht um Security-Header, externe Skripte oder XSS-Abwehr."
  - "Der Browser blockiert Ressourcen wegen Policy-Verstößen."
selfCheckPoints:
  - "Kann ich Content Security Policy in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "sicherheit"
  - "csp"
  - "security headers"
draft: false
---

# Content Security Policy

![Schaubild zur Content Security Policy.](/schlaufuchs-platform/images/overviews/v149/content-security-policy.svg)

*Das Schaubild zeigt Quellenregeln als Schutz gegen unerwünschte Ressourcen und Skripte.*



Content Security Policy, kurz CSP, legt fest, aus welchen Quellen Skripte, Styles, Bilder, Fonts oder Frames geladen werden dürfen.

## Einordnung

CSP ist eine zusätzliche Schutzschicht gegen Cross-Site-Scripting und versehentlich eingebundene Fremdressourcen. Sie ersetzt keine sichere Programmierung, begrenzt aber Folgen.

## Zentrale Aspekte

- **Quellenregeln:** Direktiven legen erlaubte Ursprünge fest.
- **Inline-Skripte:** Strenge Policies vermeiden unkontrollierten Inline-Code.
- **Report-Modus:** Verstöße können zunächst nur gemeldet werden.
- **Wartbarkeit:** Die Policy muss zu Build, Hosting und Diensten passen.

## Beispiele und Zusammenhang

Eine Seite kann Bilder vom CDN erlauben, Skripte aber nur aus eigenen gebauten Dateien. Unerwartete Skriptquellen werden blockiert.

## Abgrenzung

CSP ist kein Ersatz für Validierung und Escaping, sondern eine zusätzliche Begrenzung.

## Häufige Missverständnisse

CSPs werden oft mit zu vielen Wildcards formuliert und schützen dann kaum.

## Kurz zusammengefasst

- CSP begrenzt erlaubte Quellen.
- Sie ist eine zusätzliche Schutzschicht.
- Eine wirksame Policy muss getestet werden.
