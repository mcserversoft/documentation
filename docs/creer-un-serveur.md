# Créer un serveur

---

*   [Choisir un type de serveur](#choosing-a-server-type)
*   [Détails et acceptation de la license de Minecraft](#details-and-accepting-the-minecraft-eula)
*   [Ajouter les fichiers du serveur avec l'updater](#get-the-server-files-with-the-updater)
*   [Finaliser](#wrapping-it-up)

<a name="choosing-a-server-type"></a>
## Choisir un type de serveur

Il y a de nombreux types de serveurs disponibles. Si vous créez votre premier serveur ou si ces types de serveurs sont nouveaux pour vous, il est important que vous sachiez ce que chaqun fait et ce qu'il apporte.

Certains se concentrent sur les fonctionnalités, d'autres sur les performances, et quelques uns apportent les deux.

![Part of a screenshot of the create instance window, slightly faded out towards the bottom](assets/screenshots/create_server_type.png)

Tous les types de serveurs listés supportent les plugins et sont compatibles entre eux, vous n'êtes donc pas forcés d'en choisir un spécifiquement. Au fur et à mesure que la liste avance, chaque serveur est plus personalisable et ajoute plus de fonctionnalités que les précédents.

Nom | Description | Liens utile
--- | --- | ---
CraftBukkit | Etend l'expérience Vanilla avec des plugins et d'autres fonctionnalités. Si vous souhaitez un serveur simple pour jouer avec quelques amis, sans avoir besoin de modifier chaque aspect du jeu. | [Projet](https://bukkit.org/pages/about-us/)
Spigot | Serveur Minecraft le plus utilisé, basé sur CraftBukkit. | [Projet](https://www.spigotmc.org/wiki/about-spigot/)
PaperSpigot | Fourche hautes performances de Spigot, avec de nombreuses améliorations. | [Projet](https://papermc.io/)
TacoSpigot | Encore meilleures performances qu'avec PaperSpigot. Offre quelques fonctionnalités expérimentales. | [Projet](https://tacospigot.github.io/)

<a name="details-and-accepting-the-minecraft-eula"></a>
## Détails et acceptation de la license de Minecraft

C'est le moment de modifier tous les détails de votre serveur.

Nom du réglage | Description
--- | ---
Server Name | Le nom de votre serveur, visible seulement par vous.
Folder Path | Un chemin unique pour votre serveur, stocké dans le dossier /servers.
Startup Line | La ligne de commande pour démarrer le serveur. Il est tentant de changer la variable <var>[RAM]</var>, mais il est  fortement déconseillé de le faire. À la place, utilisez le champ approprié :  <var>Server Ram</var> <br><br> ***Par défaut :*** `java -Xms256M -Xmx[RAM]M -jar {0}.jar --nojline`
Server Ram | La quantité de RAM que votre serveur pourra utiliser. Si c'est votre premier serveur, gardez la valeur par défaut et augmentez si nécessaire. <br><br>***Par défaut :*** 1024 Mo
Server Port | Ceci est le port logiciel de votre ordinateur qui sera utilisé par le serveur pour envoyer et recevoir des données. Le port par défaut est le <var>25565</var>, si vous voulez avoir plusieurs serveurs en même temps, vous pouvez simplement l'augmenter de 1 à chaque fois.<br><br> ***Par défaut :*** 25565

![Screenshot of the create instance window](assets/screenshots/create_server_eula.png)

Acceptez la license (EULA) pour continuer.

<a name="get-the-server-files-with-the-updater"></a>
## Ajouter les fichiers du serveur avec l'updater

![Screenshot of the create instance window](assets/screenshots/create_server_files.png)

Cliquez sur 'Open Updater Tool'. Depuis la version 10.0.4.4, les fichiers des serveurs ne sont plus fournis. Vous devrez utiliser  [l'updater tool](/docs/maj-un-serveur.md) pour les obtenir.

Une fois cette étape terminée, cliquez sur 'Create Server', cela devrait prendre seulement quelques secondes.

<a name="#wrapping-it-up"></a>
## Finaliser

Tout est terminé ! Facile non ?

![Screenshot of the create instance window](assets/screenshots/create_server_finished.png)
