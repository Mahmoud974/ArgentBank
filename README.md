Mettre en œuvre un système de gestion du state dans une application React
La base de code du dépôt GitHub - fichiers de gestion du state Redux peut être validée si :

❒ Elle utilise le système de gestion du state Redux 

❒ La mise en œuvre de Redux contient :

❒ un store pour gérer l'ensemble des données

❒ action(s) pour l'envoi d'informations

❒ reducers  pour le traitement des changements de state des demandes

 

Interagir avec une API
Le code des interactions du CRUD avec l'API sur le repo GitHub peut être validé si :

❒ L'utilisateur est en mesure de se connecter avec succès : 

❒ L'utilisateur peut se rendre sur la page de connexion (/login)

❒ L'utilisateur peut remplir des informations d’identité

❒ L'utilisateur peut naviguer avec succès vers une page de profil (/profile)

❒ L'utilisateur peut modifier avec succès son profil (nom et prénom)

❒ L'utilisateur peut se déconnecter avec succès :

❒ Voir le bouton de déconnexion lors de la connexion

❒ Cliquer sur le bouton de déconnexion

❒ Retourner à la page d'accueil (/) 

❒ La page d'accueil correspond à la maquette

❒ La page de connexion correspond à la maquette (y compris les informations sur les caractères de remplissage et le statut d'erreur si l'utilisateur ne peut pas se connecter)

❒ La page du profil correspond à la maquette 

❒ Les utilisateurs connectés peuvent voir le bouton de déconnexion qui correspond à la maquette

❒ Toutes les pages sont responsive.


S'authentifier à une API sécurisée
Le code pour l’authentification et qui interroge l'API sécurisée peut être validé si : 

❒ L'authentification est effectuée à l'aide d'un token JWT

❒ L'utilisateur peut voir la page de profil lorsqu'il est connecté :

❒ La page de profil doit contenir le nom et le prénom.

❒ La page de profil doit contenir les informations relatives au compte bancaire du titulaire (telles qu'elles figurent sur la maquette)

❒ L'utilisateur ne peut pas voir la page de profil lorsqu'il est déconnecté 


Modéliser une API
La documentation Swagger en YAML pour le modèle de l’API avec les endpoints peut être validé si :

❒ Un fichier YAML est livré en utilisant la syntaxe de l'API Swagger

❒ Il contient les endpoints de l'API qui répondent aux exigences suivantes de l'utilisateur :

❒ Voir toutes ses transactions pour le mois en cours

❒ Voir les détails supplémentaires d'une transaction dans une vue supplémentaire

❒ Ajout, modification ou suppression d'informations supplémentaires sur une transaction

❒ Les paramètres de l'API sont écrits en utilisant la convention REST (c'est-à-dire GET, PUT, etc.)

❒ L’URL de l'API est spécifiée pour chaque modèle. 

❒ Il y a une description de ce que fait chaque endpoint. 

❒ Il existe des paramètres possibles pour tenir compte de différents scénarios. 

❒ Il existe différentes réponses avec des codes de réponse correspondants qui ont un sens pour cet endpoint. 