export interface LinuxShellScenario {
  key: string;
  title: string;
  intro: string;
  prompt: string;
  startPath: string;
  suggestedCommands: string[];
  quickNotes?: string[];
  trySteps?: string[];
  entries: Array<{
    path: string;
    type: "dir" | "file";
    content?: string;
    perms?: string;
  }>;
}

export const linuxShellScenarios: Record<string, LinuxShellScenario> = {
  "shell/dateien-und-ordner": {
    key: "shell/dateien-und-ordner",
    title: "Dateien und Ordner ausprobieren",
    intro: "Nutze die Lernshell wie einen ruhigen Übungsraum. Prüfe zuerst deinen Ort, sieh dir dann den Inhalt an und bewege dich erst danach weiter.",
    prompt: "schlaufuchs@shell",
    startPath: "/home/fox",
    suggestedCommands: ["pwd","ls","cd dokumente","ls -l","tree","cat aufgaben.txt | sort | uniq","printf alpha:beta\\n | cut -d : -f 2","cat aufgaben.txt | wc","realpath lernplan.txt"],
    quickNotes: ["Starte mit Orientierung: pwd, ls, cd.","Nutze tree, wenn du Strukturen statt einzelner Dateinamen sehen willst.","Mit mkdir, touch, cp und mv kannst du auch selbst etwas aufbauen."],
    trySteps: ["Öffne zuerst mit pwd und ls deinen Ausgangspunkt.","Wechsle nach dokumente und lies mit cat eine Datei.","Probiere anschließend sort, uniq und wc auf einer kleinen Textdatei aus."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/dokumente", type: "dir", perms: "755" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "Heute im Terminal zuerst mit pwd und ls orientieren.\n" },
      { path: "/home/fox/dokumente/lernplan.txt", type: "file", perms: "644", content: "1. pwd\n2. ls\n3. cd\n" },
      { path: "/home/fox/dokumente/aufgaben.txt", type: "file", perms: "644", content: "daten\ndatei\ndatei\nordner\npfad\n" },
      { path: "/home/fox/projekte/webseite", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/webseite/index.html", type: "file", perms: "644", content: "<h1>Hallo Welt</h1>\n" }
    ]
  },
  "shell/hilfe-im-terminal": {
    key: "shell/hilfe-im-terminal",
    title: "Hilfe im Terminal nutzen",
    intro: "Hier geht es nicht ums Raten, sondern ums Nachschlagen. Probiere vor allem man, help und kleine Kontrollbefehle aus.",
    prompt: "schlaufuchs@help",
    startPath: "/home/fox",
    suggestedCommands: ["man ls","help","which grep","cat beispiele/datei.txt | grep Hilfe","printf hallo\\nwelt\\n | wc","printf eins:zwei\\n | cut -d : -f 2"],
    quickNotes: ["Vergleiche man und help: beides hilft, aber mit anderem Fokus.","Nutze which, wenn du prüfen willst, ob ein Befehl in dieser Lernshell vorhanden ist."],
    trySteps: ["Sieh dir zuerst mit help an, welche Befehle die Lernshell kennt.","Vergleiche danach man ls mit einer echten kleinen Dateiarbeit.","Suche anschließend mit grep gezielt in einer Beispieldatei."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele/datei.txt", type: "file", perms: "644", content: "Hilfetexte lesen spart Fehler.\nMit grep kannst du gezielt nach Worten suchen.\n" }
    ]
  },
  "system/dateirechte": {
    key: "system/dateirechte",
    title: "Dateirechte lesen und verändern",
    intro: "Diese Lernshell zeigt dir Beispieldateien mit unterschiedlichen Rechten. Nutze ls -l, stat, cat und testweise chmod, um die Wirkung bewusst zu lesen.",
    prompt: "schlaufuchs@rechte",
    startPath: "/home/fox",
    suggestedCommands: ["ls -l","stat geheim.txt","chmod 640 geheim.txt","ls -l","cat geheim.txt | wc","file geheim.txt"],
    quickNotes: ["Erst lesen, dann ändern: ls -l oder stat geben dir den sauberen Ausgangspunkt.","Achte darauf, wie sich nur die Rechte ändern, nicht automatisch der Inhalt."],
    trySteps: ["Vergleiche erst mehrere Dateien mit ls -l.","Lies eine Datei mit stat genauer.","Ändere dann testweise ein Rechtebeispiel mit chmod und prüfe die Ausgabe erneut."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/geheim.txt", type: "file", perms: "600", content: "Nur der Besitzer soll alles lesen können.\n" },
      { path: "/home/fox/teaminfo.txt", type: "file", perms: "644", content: "Die Gruppe darf hier mitlesen.\n" },
      { path: "/home/fox/skript.sh", type: "file", perms: "755", content: "#!/bin/bash\necho Hallo\n" }
    ]
  },
  "praxis/terminal-nutzen": {
    key: "praxis/terminal-nutzen",
    title: "Ruhig im Terminal arbeiten",
    intro: "Diese Variante ist stärker auf Arbeitsweise ausgelegt. Probiere kleine Schritte aus und lies die Ausgaben bewusst.",
    prompt: "schlaufuchs@praxis",
    startPath: "/home/fox",
    suggestedCommands: ["pwd","ls","mkdir test","cd test","touch notiz.txt","cp ../start.txt kopie.txt","tree","cat kopie.txt | wc","history"],
    quickNotes: ["Arbeite in kleinen Schritten und kontrolliere nach fast jedem Befehl die Ausgabe.","Mit reset kannst du jederzeit zum Anfangszustand zurückgehen."],
    trySteps: ["Lege zuerst ein kleines Testverzeichnis an.","Erzeuge eine Datei und kopiere sie an einen zweiten Ort.","Nutze danach tree oder history, um deinen Weg kontrolliert nachzuvollziehen."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/start.txt", type: "file", perms: "644", content: "Arbeite in kleinen, kontrollierten Schritten.\n" }
    ]
  },
  "praxis/nano": {
    key: "praxis/nano",
    title: "nano ohne Druck ausprobieren",
    intro: "nano ist hier bewusst vereinfacht simuliert. Du kannst Dateien aufrufen und verstehen, was ein Editor macht, ohne eine echte Shell zu verlassen.",
    prompt: "schlaufuchs@nano",
    startPath: "/home/fox",
    suggestedCommands: ["ls","nano notizen.txt","cat notizen.txt","touch neu.txt","nano neu.txt","printf testnotiz > neu.txt","cat neu.txt","uname -a"],
    quickNotes: ["In der Lernshell ersetzt nano nicht alles, sondern erklärt den typischen Arbeitsablauf.","Öffne, lies, ändere gedanklich und kontrolliere dann den Dateinamen oder Inhalt."],
    trySteps: ["Öffne erst eine vorhandene Datei mit nano.","Prüfe danach mit cat, um welche Datei es geht.","Lege anschließend eine neue Datei an und simuliere den gleichen Ablauf noch einmal."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "In nano erst lesen, dann ändern, dann bewusst speichern.\n" }
    ]
  },
  "system/benutzer-und-gruppen": {
    key: "system/benutzer-und-gruppen",
    title: "Benutzer und Gruppen einordnen",
    intro: "Hier lässt sich vor allem beobachten, wem Dateien gehören und wie Rechte damit zusammenhängen. Fokus: lesen, vergleichen, einordnen.",
    prompt: "schlaufuchs@users",
    startPath: "/home/fox",
    suggestedCommands: ["whoami","groups","id","env","ls -l","stat projekt.txt","cat team.csv | cut -d : -f 1","cat team.csv | sort | uniq"],
    quickNotes: ["Die Ausgabe von id und groups hilft beim Einordnen von Benutzer und Gruppe.","Vergleiche diese Infos anschließend mit ls -l oder stat einer Datei."],
    trySteps: ["Sieh dir zuerst mit whoami, groups und id deine Identität an.","Vergleiche diese Informationen danach mit ls -l einer Datei.","Nutze stat, wenn du die gleiche Datei noch genauer lesen willst."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/projekt.txt", type: "file", perms: "664", content: "Projektdatei für die gemeinsame Gruppe.\n" },
      { path: "/home/fox/privat.txt", type: "file", perms: "600", content: "Nur für den Besitzer.\n" },
      { path: "/home/fox/team.csv", type: "file", perms: "644", content: "fox:adm\nlea:adm\nnoah:plugdev\n" }
    ]
  }
};

const linuxShellAliases: Record<string, string> = {
  "system/benutzer-und-gruppen-grundlagen": "system/benutzer-und-gruppen",
  "benutzer-und-gruppen-grundlagen": "system/benutzer-und-gruppen",
  "benutzer-und-gruppen": "system/benutzer-und-gruppen",
  "dateirechte": "system/dateirechte",
  "nano": "praxis/nano",
  "terminal-nutzen": "praxis/terminal-nutzen",
};

export const getLinuxShellScenario = (key: string) => {
  if (linuxShellScenarios[key]) return linuxShellScenarios[key];
  const alias = linuxShellAliases[key];
  if (alias && linuxShellScenarios[alias]) return linuxShellScenarios[alias];

  const compactKey = key.split("/").filter(Boolean).join("/");
  if (linuxShellScenarios[compactKey]) return linuxShellScenarios[compactKey];

  const suffixMatch = Object.keys(linuxShellScenarios).find((scenarioKey) =>
    compactKey === scenarioKey.split("/").at(-1) || compactKey.endsWith(`/${scenarioKey.split("/").at(-1)}`),
  );

  return suffixMatch ? linuxShellScenarios[suffixMatch] : null;
};
