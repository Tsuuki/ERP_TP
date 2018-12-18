# ERP_TP

## Installation
 * Cloner ou télécharger le dossier
 * Se rendre dans le dossier ERP_TP et effectuer la commande `npm install`

## Lancement de l'application

### Première option
 * Dans le dossier ERP_TP effectuer la commande `npm start`

### Deuxième option
 * Dans le dossier ERP_TP effectuer la commande `npm run build`
 * Executer le fichier `release-builds/ERP_TP-win32-ia32/ERP_TP.exe`

## Hypothèses

 * Les employés travaillent les jours fériés.
 * Les employés ne travaillent pas le samedi et le dimanche.
 * L'efficacité est la même pour tous les employés.
 * Les projets sont réalisés les uns à la suite des autres, par odre croissant de date de livraison.
 * Si une équipe (développement ou gestion de projet) finit avant l'autre, elle peut passer au projet suivant.
 * Les jours de travail sont des entiers (pas de demi-journées).
 * Les employés supplémentaires embauchés ne rejoignent pas le projet en cours de route. Ils sont donc embauchés 4 mois avant le projet qui présente un retard.

## Manuel utilisateur

Une fois l'application lancé il est possible de :

### Gérer l'efficacité des employés

Un bouton "Gérer les employés" en haut de la fenêtre permet d'afficher la gestion de l'efficacité. Il suffit ensuite d'entrer dans le champ texte la valeur (100 pour 100%).

### Ajouter un projet

Un bouton "Gérer les projets" en haut de la fenêtre permet d'afficher les champs pour entrer un nouveau projet dans l'application.

### Lancer la simulation

Un bouton en bas de la fenêtre exécute le script de calcul. Le résultar est affiché dans la même fenêtre.
Les différentes informations affichées sont :
 * La date de début de projet pour l'équipe de développement
 * La date de début de projet pour l'équipe de gestion de projet
 * Le nombre de jours de travail requis pour chacune des deux équipes
 * Le nombre de jours ouvré de travail disponibles pour chacune des deux équipes jusqu'à la date de livraison
 * La date de fin de projet pour l'équipe de développement
 * La date de fin de projet pour l'équipe de gestion de projet

## Répondre aux questions du TP

 * A et B - Il suffit de lancer la simulation et les dates seront affichés
 * C - Dans la gestion des employés, passer l'efficacité à 80% puis relancer la simulation.
 * D - Dans la gestion des projets, ajouter le projet SONI, puis changer l'efficacité a 120% et relancer la simulation.
 * E - La date d'embauche est indiqué quand un projet à du retard

## Contributeurs 

ABDOUL-MALIK Emilie 

AZZOUZ Mohamed 

DELL Quentin 

HIERTZ Jordan