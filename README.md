# ERP_TP

## Installation et lancement
 
### Première option
 * Télécharger le ZIP présent sur le Drive
 * Décompresser l'archive
 * Dans le dossier executer ERP_TP.exe

### Deuxième option
 * Cloner ou télécharger le dossier
 * Se rendre dans le dossier ERP_TP et effectuer la commande `npm install`
 * Dans le dossier ERP_TP effectuer la commande `npm start`
 
## Hypothèses

 * Les employés travaillent les jours fériés.
 * Les employés ne travaillent pas le samedi et le dimanche.
 * L'efficacité est la même pour tous les employés.
 * Les projets sont réalisés les uns à la suite des autres, par odre croissant de date de livraison.
 * Si une équipe (développement ou gestion de projet) finit avant l'autre, elle peut passer au projet suivant.
 * Les jours de travail sont des entiers (pas de demi-journées).
 * Les employés supplémentaires embauchés ne rejoignent pas le projet en cours de route. Ils sont donc embauchés 4 mois avant le projet qui présente un retard.
 * Les employés embauchés ont la même efficacité que les autres.
 * Le nombre de ressource supplémentaire est calculé pour terminer le projet dans les temps, en réalité, il faudrait ajouter de la marge

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
 
 ## Résultats

  * A - Il est possible de livrer les 3 clients dans les temps
    * Le dernier projet se termine le 27/11/2018
  * B - Pas de problème
  * C - Avec une efficience de 80%
    * Il n'est pas possible de livrer HTC VR
    * Le projet se termine 10 jours en retard (11/01/2019)
  * D - Il n'est pas possible de valider la date du 01/01/2019
    * Le projet a 56 jours de développement de retard
    * Le projet a 15 jours de retard sur la gestion de projet
    * Il faudrait embaucher des développeurs et des chefs de projet supplémentaire
  * E - Il faut embaucher 120 jours avant le début du projet :
    * 3 Développeurs pour que le développement se termine le 28/12/2018
    * 1 Chef de projet pour que la gestion de projet se termine le 30/12/2018

## Contributeurs 

ABDOUL MALIK Emilie 

AZZOUZ Mohamed 

DELL Quentin 

HIERTZ Jordan
