---
title: "CSRF und Formularschutz"
description: "Überblick über Cross-Site Request Forgery und Schutzmaßnahmen für zustandsändernde Anfragen."
subject: web-development
section: "Sicherheit"
topicPath:
  - "csrf-und-formularschutz"
  - "ueberblick"
learningGoals:
  - "Du kannst CSRF und Formularschutz als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird angenommen, POST allein schütze vor CSRF."
keyTakeaways:
  - "CSRF betrifft zustandsändernde Aktionen mit automatischen Cookies."
  - "Token und SameSite helfen als Schutzmechanismen."
  - "Lesende und schreibende Anfragen sollten klar getrennt sein."
recognizeSignals:
  - "Es geht um CSRF und Formularschutz als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich CSRF und Formularschutz in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web development"
  - "csrf"
  - "sicherheit"
draft: false
---

# CSRF und Formularschutz

CSRF beschreibt Angriffe, bei denen eine fremde Seite den Browser eines angemeldeten Benutzers dazu bringt, eine unerwünschte Anfrage an eine andere Anwendung zu senden. Das ist möglich, weil Cookies bei passenden Anfragen automatisch mitgesendet werden können.

## Einordnung

Besonders gefährdet sind zustandsändernde Aktionen wie Passwortänderungen, Bestellungen, Löschvorgänge oder Einstellungen. Moderne Browser- und Framework-Funktionen reduzieren das Risiko, aber die Anwendung muss Schutz bewusst einplanen.

## Zentrale Aspekte

- **CSRF-Token in Formularen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **SameSite-Cookie-Attribute:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Unterscheidung von lesenden und schreibenden Methoden:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Prüfung von Origin oder Referer als Zusatzsignal:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Formular zum Ändern einer E-Mail-Adresse kann ein serverseitig erzeugtes CSRF-Token enthalten. Der Server akzeptiert die Änderung nur, wenn Token und Session zusammenpassen. Dadurch kann eine fremde Seite nicht einfach ein gültiges Formular nachbilden.

## Abgrenzung

CSRF ist nicht dasselbe wie XSS. Bei XSS wird Code in der angegriffenen Seite ausgeführt. Bei CSRF nutzt ein Angreifer vorhandene Cookies und Browserverhalten aus, ohne den Inhalt der Zielseite kontrollieren zu müssen.

## Häufige Missverständnisse

Häufig wird angenommen, POST allein schütze vor CSRF. Das stimmt nicht. Auch POST-Anfragen können von fremden Seiten ausgelöst werden. Ebenso problematisch ist, sensible Änderungen über GET-URLs auszuführen.

## Kurz zusammengefasst

- CSRF betrifft zustandsändernde Aktionen mit automatischen Cookies.
- Token und SameSite helfen als Schutzmechanismen.
- Lesende und schreibende Anfragen sollten klar getrennt sein.
