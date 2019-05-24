# Simplon Exchange App

_Native app of Simplon Exchange. This is a Q/A platform to help Simplon community._

Technologies:

- React Native
- Redux
- React Navigation
- React Thunk
- Laravel API

## IMPORTANT

**N'UTILISER QUE YARN !!**

## Creation d'une nouvelle page (Screen)

1. Créer une Screen dans le dossier screen en suivant l'exemple ExampleScreen ou HomeScreen;
2. Créer une stack en rapport à votre Screen dans le dossier navigation/stack en suivant l'exemple du HomeStack.js
3. Importer le Screen dans votre stack;
4. Importez votre Stack dans le fichier navigator.js

## Éditer le fichier de config

1. Dupliquer le fichier "example.config.js"
2. Le renommer "config.js"
3. Insérer les bonnes valeurs aux variables existantes
4. Si vous ajoutez une nouvelle constante, la sauvegarder également dans "example.config.js" (avec une valeur fausse) pour qu'il n'y ait plus que la valeur à changer pour les prochains développeurs.
5. **NE JAMAIS COMMIT "CONFIG.JS" !!**

## Amplitude Analytics

Pour créer des event trackers, il faut suivre la documentation du paquet Amplitude d'Expo [disponible ici](https://docs.expo.io/versions/latest/sdk/amplitude/)

Amplitude est initialisé dans le constructor de App.js.

- GraphQL
- Expo MailComposer
- Expo Cli
- React Native Elements
-

## Creation d'une nouvelle page (Screen)

1. Créer une Screen dans le dossier screen en suivant l'exemple ExampleScreen ou HomeScreen;
2. Créer une stack en rapport à votre Screen dans le dossier navigation/stack en suivant l'exemple du HomeStack.js
3. Importer le Screen dans votre stack;
4. Importez votre Stack dans le fichier navigator.js
