#!/bin/bash

# Variable für Backup-Namen setzen.
# Der Backup-Ordner trägt den Namen der Variablen
BackupOrdner="Sicherheitstest"

# Hier steht der absolute Pfad der zu sichernden Datei
Dateizusichern="/home/jw/Testverzeichnis/"

# Der Name des Backups ist der Name der zu sichernden Datei
BackupName=$(basename $Dateizusichern)


MyOrdner=$(dirname $0)
cd $MyOrdner

# in den darübergehenden Ordner wechseln
cd ..

if test -d $BackupOrdner
    then
        echo "Der Ordner existiert!"
    else
        mkdir $BackupOrdner
        echo "Der Ordner "$BackupOrdner" wurde angelegt!"
fi

cd $BackupOrdner

# Backup-Pfad für rsync anlegen
BackupPfad=$(pwd)"/"$BackupName

# Probelauf von Rsync zur Kontrolle
rsync -asHSvn $Dateizusichern $BackupPfad

# Benutzereingabe
read -p 'Soll das Backup so ausgeführt werden? (j/n): ' Antwort

if [ $Antwort = "j" ]
    then
    # Backup ausführen
    rsync -asHSv $Dateizusichern $BackupPfad
    else
    echo "Kein Backup!"
fi
