# La redirection de port

---

*   [Introduction](#introduction)
*   [Plusieurs types d'équipements réseau](#different-network-devices)
*   [Acceder à l'interface web de votre routeur/modem](#accessing-your-router-modem-web-interface)
*   [Mettre en place la redirection de port](#setting-up-the-port-forward)

<a name="introduction"></a>
## Introduction

J'aurais pu écrire un tutoriel pour ouvrir un port de A à Z, mais à la fin vous auriez fait des choses sans même savoir à quoi elles correspondent. Résoudre les problèmes et maintenir votre réseau serait difficile et long. Dans ce guide, nous allons nous concentrer sur la redirection de port et la logique de base qui se cache derrière.

La redirection de port, ou ouverture de port, n'est vraiment pas si difficile qu'il n'y paraît. Le but d'une redirection de port est de rendre accessible un logiciel spécifique de votre ordinateur depuis Internet. Ce procédé est utilisé communément pour des serveurs de jeu, des échanges peer-to-peer ou des applications voix-ip par exemple.

![Overview of two networks. In the first one, port forwarding isn't setup correctly and fails, in the seconds everything works great](assets/screenshots/portforward_overview.png)

Ce n'est pas quelque chose que vous allez mettre en place sur votre PC directement, mais sur l'interface web de votre routeur et/or modem. Dans la plupart des cas (en France), les modems contiennent aussi un routeur intégré, donc il n'y aura qu'un seul appareil à configurer.

Dans mon cas, j'ai désactivé la fonction routeur de mon modem et j'y ai relié un routeur plus puissant. Je devrais donc ouvrir un port sur les deux appareils (modem et routeur externe).

Comme vous pouvez le voir, ça peut devenir un peu déroutant si vous ne savez pas comment est organisé votre réseau.

<a name="different-network-devices"></a>
## Plusieurs types d'équipements réseau

Dans un réseau, vosu êtes susceptibles de trouver ces appareils :

Appareil | Description
--- | ---
Modem | Il est le plus souvent fourni par votre Fournisseur d'Acces à Internet (FAI). En termes simples : il permet de recevoir et d'envoyer les données nécessaires pour votre connexion internet/téléphone/TV.
Routeur | Il permet de créer un réseau (filaire ou WiFi) entre les appareils de votre maison (ordinateurs, téléphones, imprimante...). La plupart des FAI fournissent un routeur intégré au modem (avec ou sans WiFi)
Switch |Ressemble à un routeur, mais fait moins. Il est un peu comme une multiprise réseau, *ex. 1 cable rentre, 3 cables en sortent.*
Hub | Honnêtement, jetez ces truc. Les hubs sont très vieux, ce sont les ancêtres des switch. Tout ce qu'ils font, c'est recevoir des données et les rediriger vers tous les autres appareils. Ils ajoutent de la latence et des interférences sur le réseau. C'était juste pour signaler qu'il serait temps de passer à un switch.

Regardez donc comment est organisé votre réseau, ce sera utile pour la suite.

<a name="accessing-your-router-modem-web-interface"></a>
## Acceder à l'interface web de votre routeur/modem

Maintenant que vous avez une idée de ce que fait un routeur ou un modem, il est temps de vous connecter dessus pour les configurer.

### Étape 1 : trouver l'adresse IP du routeur (passerelle par défaut)

Ouvrez l'invité de commande. Pour cela, faites <kbd>touche Windows + R</kbd> puis écrivez `cmd` et appuyez sur <kbd>Entrée</kbd>. Ou vous pouvez rechercher `Invité de commandes` dans la liste de vos applications

![Partial screenshot of a cmd window](assets/screenshots/portforward_cmd.png)

Tapez `ipconfig` et appuyez sur <kbd>Entrée</kbd>.

![Partial screenshot of a cmd window](assets/screenshots/portforward_cmd_ipconfig.png)

Ceci est ce que j'obtiens, ce sera un peu différent pour vous mais le schéma général sera le même. Ce dont nous avons besoin est l'adresse IP de la ***Passerelle par défaut*** (ici 192.168.0.254).

![Partial screenshot of a cmd window](assets/screenshots/portforward_cmd_result.png)

Ouvrez un navigateur et entrez cette IP dans la barre d'adresse, vous arriverez sur l'interface web de votre routeur (dans l'exemple une Freebox).

![Screenshot of the browser Opera with a login screen of the router](assets/screenshots/portforward_browser.png)

<a name="setting-up-the-port-forward"></a>
## Mettre en place la redirection de port

Chaque fabricant à sa propre iterface, donc elles sont toutes différentes. Il serait impossible pour moi de couvrir tous les modèles de routeurs, et continuer serait inutile pour tous ceux qui n'ont pas une Freebox.

À la place, vous devrez faire une recherche spécifique en fonction de votre modèle de routeur. Vous trouverez [ici](http://pixelboys.fr/regroupement-creer-une-redirection-de-port/) un site qui explique comment ouvrir un port chez les principaux FAI Français.

J'éspère que ce guide aura été un minimum utile, bonne chance !
