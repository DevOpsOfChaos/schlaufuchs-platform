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
    intro:
      "Nutze die Lernshell wie einen ruhigen Übungsraum. Prüfe zuerst deinen Ort, sieh dir dann den Inhalt an und bewege dich erst danach weiter.",
    prompt: "schlaufuchs@shell",
    startPath: "/home/fox",
    suggestedCommands: [
      "pwd",
      "ls",
      "cd dokumente",
      "ls -l",
      "tree",
      "find . -type f -name txt",
      "cat aufgaben.txt | sort -u",
      "printf alpha:beta\\n | cut -d : -f 2",
      "cat aufgaben.txt | nl",
      "du -h .",
      "printenv",
      "paste team.csv team.csv",
      "find . -type d",
      "du -h dokumente",
      "diff notizen.txt dokumente/lernplan.txt",
    ],
    quickNotes: [
      "Starte mit Orientierung: pwd, ls, cd.",
      "Nutze tree oder find, wenn du Strukturen statt einzelner Dateinamen sehen willst.",
      "Mit mkdir, touch, cp und mv kannst du auch selbst etwas aufbauen.",
    ],
    trySteps: [
      "Öffne zuerst mit pwd und ls deinen Ausgangspunkt.",
      "Wechsle nach dokumente und lies mit cat oder less eine Datei.",
      "Probiere anschließend sort, nl und wc auf einer kleinen Textdatei aus.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/.bashrc", type: "file", perms: "644", content: "# persönliche Shell-Konfiguration\n" },
      { path: "/home/fox/dokumente", type: "dir", perms: "755" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "Heute im Terminal zuerst mit pwd und ls orientieren.\n" },
      { path: "/home/fox/dokumente/lernplan.txt", type: "file", perms: "644", content: "1. pwd\n2. ls\n3. cd\n" },
      { path: "/home/fox/dokumente/aufgaben.txt", type: "file", perms: "644", content: "daten\ndatei\ndatei\nordner\npfad\n" },
      { path: "/home/fox/projekte/webseite", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/webseite/index.html", type: "file", perms: "644", content: "<h1>Hallo Welt</h1>\n" },
    ],
  },
  "shell/hilfe-im-terminal": {
    key: "shell/hilfe-im-terminal",
    title: "Hilfe im Terminal nutzen",
    intro:
      "Hier geht es nicht ums Raten, sondern ums Nachschlagen. Probiere vor allem man, --help und kleine Kontrollbefehle aus.",
    prompt: "schlaufuchs@help",
    startPath: "/home/fox",
    suggestedCommands: [
      "man ls",
      "ls --help",
      "help",
      "cat beispiele/datei.txt | grep Hilfe",
      "printf hallo\\nwelt\\n | wc",
      "which grep",
      "cat beispiele/datei.txt | nl",
      "printf eins:zwei\\n | column -s : -t",
    ],
    quickNotes: [
      "Vergleiche man und --help: beides hilft, aber oft mit anderem Umfang.",
      "Nutze help als schnelle Übersicht über diese Lernshell.",
    ],
    trySteps: [
      "Sieh dir zuerst mit help an, welche Befehle die Lernshell kennt.",
      "Vergleiche man ls und ls --help bewusst.",
      "Suche danach mit grep gezielt in einer kleinen Beispieldatei.",
      "Lass dir die Datei zusätzlich mit nl nummeriert anzeigen.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele/datei.txt", type: "file", perms: "644", content: "Hilfetexte lesen spart Fehler.\nMit grep kannst du gezielt nach Worten suchen.\n" },
    ],
  },
  "system/dateirechte": {
    key: "system/dateirechte",
    title: "Dateirechte lesen und verändern",
    intro:
      "Diese Lernshell zeigt dir Beispieldateien mit unterschiedlichen Rechten. Nutze ls -l, stat, cat und testweise chmod, um die Wirkung bewusst zu lesen.",
    prompt: "schlaufuchs@rechte",
    startPath: "/home/fox",
    suggestedCommands: [
      "ls -l",
      "stat geheim.txt",
      "chmod u+rw,g+r,o-rwx geheim.txt",
      "ls -l",
      "cat geheim.txt | wc -w",
      "cat geheim.txt | tr a-z A-Z",
      "du -h geheim.txt",
      "ln -s geheim.txt geheim-link.txt",
      "readlink geheim-link.txt",
      "md5sum geheim.txt",
      "sha256sum teaminfo.txt",
    ],
    quickNotes: [
      "Erst lesen, dann ändern: ls -l oder stat geben dir den sauberen Ausgangspunkt.",
      "Achte darauf, wie sich nur die Rechte ändern, nicht automatisch der Inhalt.",
    ],
    trySteps: [
      "Vergleiche erst mehrere Dateien mit ls -l.",
      "Lies eine Datei mit stat genauer.",
      "Ändere dann testweise ein Rechtebeispiel mit chmod und prüfe die Ausgabe erneut.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/geheim.txt", type: "file", perms: "600", content: "Nur der Besitzer soll alles lesen können.\n" },
      { path: "/home/fox/teaminfo.txt", type: "file", perms: "644", content: "Die Gruppe darf hier mitlesen.\n" },
      { path: "/home/fox/skript.sh", type: "file", perms: "755", content: "#!/bin/bash\necho Hallo\n" },
    ],
  },
  "praxis/terminal-nutzen": {
    key: "praxis/terminal-nutzen",
    title: "Ruhig im Terminal arbeiten",
    intro:
      "Diese Variante ist weniger themenspezifisch und stärker auf Arbeitsweise ausgelegt. Probiere kleine Schritte aus und lies die Ausgaben bewusst.",
    prompt: "schlaufuchs@praxis",
    startPath: "/home/fox",
    suggestedCommands: [
      "pwd",
      "ls",
      "mkdir -p test/unterordner",
      "touch test/unterordner/notiz.txt",
      "cp start.txt test/kopie.txt",
      "tree",
      "wc start.txt",
      "cat start.txt | tr a-z A-Z",
      "ps",
      "date",
      "hostname",
      "uptime",
      "df",
    ],
    quickNotes: [
      "Arbeite in kleinen Schritten und kontrolliere nach fast jedem Befehl die Ausgabe.",
      "Mit reset kannst du jederzeit zum Anfangszustand zurückgehen.",
    ],
    trySteps: [
      "Lege zuerst ein kleines Testverzeichnis an.",
      "Erzeuge eine Datei und kopiere sie an einen zweiten Ort.",
      "Nutze danach tree, wc oder ps, um Struktur und Umgebung kontrolliert anzusehen.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/start.txt", type: "file", perms: "644", content: "Arbeite in kleinen, kontrollierten Schritten.\n" },
    ],
  },
  "praxis/nano": {
    key: "praxis/nano",
    title: "nano ohne Druck ausprobieren",
    intro:
      "nano ist hier bewusst vereinfacht simuliert. Du kannst Dateien aufrufen und verstehen, was ein Editor macht, ohne eine echte Shell zu verlassen.",
    prompt: "schlaufuchs@nano",
    startPath: "/home/fox",
    suggestedCommands: [
      "ls",
      "nano notizen.txt",
      "cat notizen.txt",
      "touch neu.txt",
      "nano neu.txt",
      "less notizen.txt",
      "printf testnotiz > neu.txt",
      "cat neu.txt",
      "ps",
      "uname -a",
      "fmt notizen.txt",
      "rev notizen.txt",
      "md5sum notizen.txt",
      "cmp notizen.txt neu.txt",
    ],
    quickNotes: [
      "In der Lernshell ersetzt nano nicht alles, sondern erklärt den typischen Arbeitsablauf.",
      "Öffne, lies, ändere gedanklich und kontrolliere dann den Dateinamen oder Inhalt.",
    ],
    trySteps: [
      "Öffne erst eine vorhandene Datei mit nano.",
      "Prüfe danach mit cat oder less, um welche Datei es geht.",
      "Lege anschließend eine neue Datei an und simuliere den gleichen Ablauf noch einmal.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "In nano erst lesen, dann ändern, dann bewusst speichern.\n" },
    ],
  },
  "system/benutzer-und-gruppen": {
    key: "system/benutzer-und-gruppen",
    title: "Benutzer und Gruppen einordnen",
    intro:
      "Hier lässt sich vor allem beobachten, wem Dateien gehören und wie Rechte damit zusammenhängen. Fokus: lesen, vergleichen, einordnen.",
    prompt: "schlaufuchs@users",
    startPath: "/home/fox",
    suggestedCommands: [
      "whoami",
      "groups",
      "id",
      "printenv",
      "find . -type f",
      "ls -l",
      "stat projekt.txt",
      "cat team.csv | cut -d : -f 1",
      "cat team.csv | sort | uniq",
      "cat team.csv | column -s : -t",
      "printenv",
      "du -h .",
      "printenv",
      "paste team.csv team.csv",
    ],
    quickNotes: [
      "Die Ausgabe von id und groups hilft beim Einordnen von Benutzer und Gruppe.",
      "Vergleiche diese Infos anschließend mit ls -l oder stat einer Datei.",
    ],
    trySteps: [
      "Sieh dir zuerst mit whoami, groups und id deine Identität an.",
      "Vergleiche diese Informationen danach mit ls -l einer Datei.",
      "Nutze stat, wenn du die gleiche Datei noch genauer lesen willst.",
      "Lass dir die Teamliste zusätzlich tabellarisch mit column anzeigen.",
    ],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/projekt.txt", type: "file", perms: "664", content: "Projektdatei für die gemeinsame Gruppe.\n" },
      { path: "/home/fox/privat.txt", type: "file", perms: "600", content: "Nur für den Besitzer.\n" },
      { path: "/home/fox/team.csv", type: "file", perms: "644", content: "fox:adm\nlea:adm\nnoah:plugdev\n" },
    ],
  },
};

export const getLinuxShellScenario = (key: string) => linuxShellScenarios[key] ?? null;
