# Linux – Zielseite `shell-und-prompt`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/shell-und-prompt` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zur Linux-Shell.

Die Seite soll erklären, was die Shell ist, wie sie sich vom Terminal unterscheidet und was der Prompt bedeutet.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shell-Grundlagen

Sie kommt sinnvoll **nach** den ersten Terminal-/Dateisystemseiten und **vor**:
- `linux/streams-und-umleitungen`
- `linux/pipes-und-befehle-kombinieren`
- `linux/shellskripte-grundlagen`
- `linux/ssh-grundlagen`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was die Shell ist
- was ein Terminal ist
- warum Shell und Terminal nicht genau dasselbe sind
- was der Prompt ist
- warum Befehle über die Shell an das System weitergegeben werden
- dass `bash` ein typischer Standardfall ist

Die Seite soll **noch nicht** tief in Umleitungen, Pipes, Skripte oder SSH abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Pipes im Detail
- Umleitungen im Detail
- Shellskripte ausführlich
- SSH-Verbindungen ausführlich
- Shell-Historie als Hauptthema
- lange Vergleiche aller Shell-Typen
- Kernel-/Systemarchitektur im Technikdetail

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shell.html`
- `linux/linux_aufgaben/linux_aufgaben_shell.html`
- `linux/linux_shell/linux_shell_aufgabe_01.html`
- `linux/linux_shell/linux_shell_aufgabe_02.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- die Shell-Grundidee klar und ruhig erklären
- Terminal und Shell sprachlich sauber trennen
- mit kleinen, echten Prompt-Beispielen arbeiten
- keine unnötige Fachsprache stapeln
- eine gute Brücke zu Umleitungen, Pipes, Shellskripten und SSH bilden
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es geht.

### Inhalt
- Titel: `Shell und Prompt verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Wenn du im Terminal einen Befehl eintippst, arbeitet im Hintergrund meist eine Shell, die deine Eingabe auswertet und an das System weitergibt.

## 2) Abschnitt: Was ist die Shell?
### Ziel
Die Grundfunktion verständlich erklären.

### Kernpunkte
- die Shell ist eine textbasierte Schnittstelle
- sie nimmt Befehle entgegen
- sie prüft die Eingabe und startet passende Programme oder Aktionen
- sie vermittelt zwischen Benutzer und System

### Stil
- einfach
- funktional
- ohne Architekturbalast

## 3) Abschnitt: Was ist das Terminal?
### Ziel
Terminal und Shell nicht vermischen.

### Inhalt
- das Terminal ist die Umgebung bzw. das Fenster, in dem du arbeitest
- die Shell läuft darin und verarbeitet deine Eingaben
- ein Terminal kann eine Shell enthalten

### Wichtiger Satz
Das Terminal ist der Arbeitsraum – die Shell ist das Werkzeug, das deine Befehle versteht.

## 4) Abschnitt: Was ist der Prompt?
### Ziel
Einen ständig sichtbaren Teil der Shell früh erklären.

### Beispiel
```txt
anna@rechner:~$ 
```

### Erklärung
- der Prompt zeigt an, dass die Shell auf deine Eingabe wartet
- oft enthält er Benutzername, Rechnername und aktuelles Verzeichnis
- nach dem Prompt beginnt dein Befehl

### Wichtig
Nicht zu tief in anpassbare Prompt-Themen oder Sonderzeichen abgleiten.

## 5) Abschnitt: Wie läuft ein Befehl ab?
### Ziel
Die Shell in Aktion zeigen.

### Mini-Ablauf
- du tippst `pwd`
- die Shell verarbeitet den Befehl
- das passende Programm oder die passende Funktion wird ausgeführt
- das Ergebnis erscheint im Terminal

### Mini-Beispiel
```txt
anna@rechner:~$ pwd
/home/anna
```

## 6) Abschnitt: Bash als typischer Standardfall
### Ziel
`bash` knapp und alltagstauglich einordnen.

### Inhalt
- auf vielen Linux-Systemen ist `bash` eine häufige Standard-Shell
- für Einsteiger reicht es meist, diese Shell zuerst kennenzulernen
- später gibt es auch andere Shells, aber das ist kein Einstiegsschwerpunkt

## 7) Abschnitt: Warum ist die Shell wichtig?
### Ziel
Den praktischen Nutzen greifbar machen.

### Praxisbeispiele
- Dateien und Ordner verwalten
- Programme starten
- Systeminformationen abrufen
- später Skripte ausführen
- später Fernzugriffe per SSH nutzen

### Form
3–5 kompakte Nutzenkarten statt langer Theorie

## 8) Lernmodus / interaktive Module
### Modul A: Terminal oder Shell?
Zuordnungsübung:
- Terminal
- Shell
- Prompt

Ziel:
- Begriffe sauber auseinanderhalten

### Modul B: Wo beginnt die Eingabe?
Prompt-Beispiel:
```txt
anna@rechner:~$ ls
```

Fragen:
- Welcher Teil ist der Prompt?
- Welcher Teil ist der Befehl?

### Modul C: Was passiert nach Enter?
Kurzer Ablauf mit Auswahlkarten:
- Shell wartet
- Befehl wird ausgewertet
- Ausgabe erscheint

### Modul D: Prompt lesen
Beispiel:
```txt
lina@server:/var/www$ 
```

Fragen:
- Welcher Benutzer ist aktiv?
- Auf welchem Rechner wird gearbeitet?
- Welches Verzeichnis ist sichtbar?

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Die Shell nimmt deine Befehle entgegen und führt sie über das System aus – der Prompt zeigt dir, wann sie auf Eingabe wartet.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie die Shell mit Ein- und Ausgaben arbeitet und wie du diese mit Umleitungen steuerst.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und verständlich formuliert sein
- keine unnötige Fachwörterdichte haben
- Begriffe sofort erklären
- nicht historisch oder akademisch wirken
- Einsteiger nicht mit Details überladen

## Visuelle Regeln
- kleine, saubere Prompt-Beispiele
- keine überbreiten Terminalblöcke
- kompakte Vergleichskomponente für Terminal / Shell / Prompt
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
### Altbild `linux_shell_jw_web.png`
**Nicht direkt übernehmen.**

### Stattdessen neu bauen
Empfohlen ist eine kleine Schichten-/Beziehungs-Komponente:
- Benutzer
- Terminal
- Shell
- System / Programme

Oder alternativ eine kompakte visuelle Erklärung mit Prompt-Beispiel.

### Warum
- fachlich präziser
- optisch konsistenter
- besser in die neue UI integrierbar
- Altgrafik ist dafür nicht stark genug

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Terminal und Shell nicht gleichsetzen
- Prompt nicht als „Befehl“ missverstehen lassen
- Bash nur als typischen Standardfall, nicht als einzig mögliche Shell darstellen
- Shell nicht zu abstrakt erklären

## Verbindung zu anderen Zielseiten
### Direkt danach
- `linux/streams-und-umleitungen`
- `linux/pipes-und-befehle-kombinieren`

### Später angrenzend
- `linux/shellskripte-grundlagen`
- `linux/ssh-grundlagen`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Vergleichskomponente für Terminal / Shell / Prompt
- 2–4 Lernmodus-Elemente
- kleine Prompt-Beispiele
- 1 Merksatz-Block
- 1 Übergang zu Streams / Umleitungen

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- eine zentrale Grundidee im Linux-Bereich klärt
- später viele andere Seiten verständlicher macht
- ohne Altbilder auskommt
- sich sehr gut mit kleinen Demo-Komponenten umsetzen lässt
