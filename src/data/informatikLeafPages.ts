export const informatikLeafPages = {
  "python-grundlagen": {
    title: "Python Grundlagen",
    eyebrow: "Infoseite",
    description: "Ein ruhiger Einstieg in Syntax, Variablen und erste Programme mit Python.",
    mascot: "/assets/mascots/hacker.png",
    sections: [
      { title: "Erste Schritte", tone: "cs-a", text: "Python eignet sich gut für den Einstieg, weil sich erste Programme schnell lesen und schreiben lassen.", chips: ["Syntax", "Start", "Lesbar"] },
      { title: "Wichtige Bausteine", tone: "cs-b", text: "Variablen, Ausgaben und einfache Bedingungen gehören zu den ersten grundlegenden Bausteinen.", chips: ["Variablen", "print", "if"] },
      { title: "Danach", tone: "cs-c", text: "Darauf folgen Schleifen, Funktionen und sauber strukturierte kleine Programme.", chips: ["Schleifen", "Funktionen", "Struktur"] },
    ],
  },
  algorithmen: {
    title: "Algorithmen",
    eyebrow: "Infoseite",
    description: "Schrittfolgen, Lösungswege und systematisches Denken in der Informatik.",
    mascot: "/assets/mascots/hacker.png",
    sections: [
      { title: "Grundidee", tone: "cs-a", text: "Ein Algorithmus beschreibt einen klaren und endlichen Lösungsweg für ein Problem.", chips: ["Schritte", "klar", "endlich"] },
      { title: "Alltag und Technik", tone: "cs-b", text: "Algorithmen tauchen in Alltag, Software und technischen Abläufen ständig auf.", chips: ["Ablauf", "Logik", "Anwendung"] },
      { title: "Weiterer Weg", tone: "cs-c", text: "Später folgen Pseudocode, Struktogramme und Vergleiche verschiedener Lösungswege.", chips: ["Pseudocode", "Struktogramm", "Vergleich"] },
    ],
  },
  prozesse: {
    title: "Prozesse",
    eyebrow: "Infoseite",
    description: "Was Prozesse sind und wie Programme zur Laufzeit als Prozesse arbeiten.",
    mascot: "/assets/mascots/hacker.png",
    sections: [
      { title: "Programm und Prozess", tone: "cs-a", text: "Ein Programm ist eine Datei. Ein Prozess ist die laufende Ausführung dieses Programms.", chips: ["Programm", "Ausführung", "Prozess"] },
      { title: "Parallelität", tone: "cs-b", text: "Mehrere Prozesse können gleichzeitig oder scheinbar gleichzeitig aktiv sein.", chips: ["parallel", "aktiv", "Ablauf"] },
      { title: "Bedeutung", tone: "cs-c", text: "Das Verständnis von Prozessen hilft bei Betriebssystemen, Fehlersuche und technischem Verständnis.", chips: ["OS", "Fehlersuche", "Verständnis"] },
    ],
  },
} as const;
