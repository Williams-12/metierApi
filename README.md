Voici un modèle de fichier `README.md` très détaillé pour expliquer le projet et son fonctionnement :

---

# API Métier

Ce projet fournit une API simple pour gérer une liste de métiers. L'API permet de récupérer, ajouter, mettre à jour et supprimer des métiers, avec des informations détaillées sur chaque métier. Elle est construite avec **Express.js**, un framework pour Node.js.

## Fonctionnalités

L'API expose les routes suivantes pour interagir avec les données des métiers :

- **GET /metiers** : Récupère tous les métiers.
- **GET /metiers/:id** : Récupère un métier par son ID.
- **POST /metiers** : Ajoute un nouveau métier.
- **PUT /metiers/:id** : Met à jour un métier existant.
- **DELETE /metiers/:id** : Supprime un métier.

### Structure des données des métiers

Chaque métier contient les informations suivantes :

- `id`: Identifiant unique du métier (généré automatiquement à l'ajout).
- `nom`: Le nom du métier.
- `definition`: Une brève description du métier.
- `missions`: Une liste des missions principales du métier.
- `competences`: Un objet contenant deux catégories de compétences :
  - `techniques`: Liste des compétences techniques.
  - `humaines`: Liste des compétences humaines.
- `outils`: Liste des outils utilisés pour ce métier.
- `salaires`: Un objet avec les salaires en fonction du niveau d'expérience :
  - `debutant`: Salaire d'un débutant.
  - `intermediaire`: Salaire d'un intermédiaire.
  - `senior`: Salaire d'un senior.
- `avantages`: Une liste des avantages liés au métier.
- `limites`: Une liste des limites ou défis du métier.
- `parcours`: Le parcours typique pour accéder à ce métier.

Exemple de métier :

```json
{
  "id": 1,
  "nom": "Développeur Frontend",
  "definition": "Spécialiste de l'interface utilisateur et de l'expérience utilisateur.",
  "missions": ["Créer des interfaces web interactives", "Optimiser l'affichage et la performance", "Collaborer avec les designers"],
  "competences": {
    "techniques": ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
    "humaines": ["Créativité", "Communication", "Esprit d'équipe"]
  },
  "outils": ["Figma", "VS Code", "Git"],
  "salaires": {
    "debutant": "30k€/an",
    "intermediaire": "45k€/an",
    "senior": "60k€/an"
  },
  "avantages": ["Travail créatif", "Forte demande sur le marché"],
  "limites": ["Évolution technologique rapide", "Dépendance aux designers"],
  "parcours": "Formation en développement web ou autodidacte."
}
```

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- NPM

### Étapes d'installation

1. Clonez ce dépôt :

   ```bash
   git clone git@github.com:Williams-12/metierApi.git
   ```

2. Accédez au dossier du projet :

   ```bash
   cd api-metiers
   ```

3. Installez les dépendances nécessaires :

   ```bash
   npm install
   ```

4. Lancez le serveur localement :

   ```bash
   npm start
   ```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000).

## Routes API

### 1. Récupérer tous les métiers

- **Méthode** : `GET`
- **URL** : `/metiers`

Retourne une liste de tous les métiers.

**Exemple de réponse** :

```json
[
  {
    "id": 1,
    "nom": "Développeur Frontend",
    "definition": "Spécialiste de l'interface utilisateur...",
    ...
  },
  {
    "id": 2,
    "nom": "Développeur Backend",
    "definition": "Gère la logique, les bases de données...",
    ...
  }
]
```

### 2. Récupérer un métier par ID

- **Méthode** : `GET`
- **URL** : `/metiers/:id`

Permet de récupérer un métier spécifique en fournissant son ID.

**Exemple de requête** :

```bash
GET /metiers/1
```

**Exemple de réponse** :

```json
{
  "id": 1,
  "nom": "Développeur Frontend",
  "definition": "Spécialiste de l'interface utilisateur...",
  ...
}
```

### 3. Ajouter un nouveau métier

- **Méthode** : `POST`
- **URL** : `/metiers`

Permet d'ajouter un nouveau métier à la liste.

**Exemple de requête** :

```json
{
  "nom": "Développeur Fullstack",
  "definition": "Maîtrise à la fois le développement frontend et backend.",
  "missions": ["Développer des applications complètes", "Gérer le backend et le frontend"],
  "competences": {
    "techniques": ["JavaScript", "Node.js", "React"],
    "humaines": ["Autonomie", "Adaptabilité"]
  },
  "outils": ["Docker", "Git", "Postman"],
  "salaires": {
    "debutant": "40k€/an",
    "intermediaire": "55k€/an",
    "senior": "75k€/an"
  },
  "avantages": ["Polyvalence", "Demande forte"],
  "limites": ["Charge de travail élevée", "Technologies multiples"],
  "parcours": "Formation complète ou autodidacte."
}
```

**Réponse (201 Created)** :

```json
{
  "id": 15,
  "nom": "Développeur Fullstack",
  "definition": "Maîtrise à la fois le développement frontend et backend.",
  ...
}
```

### 4. Mettre à jour un métier par ID

- **Méthode** : `PUT`
- **URL** : `/metiers/:id`

Permet de mettre à jour un métier existant.

**Exemple de requête** :

```json
{
  "nom": "Développeur Backend",
  "definition": "Mise à jour de la définition.",
  "missions": ["Développer des APIs", "Optimiser les bases de données"]
}
```

**Réponse** :

```json
{
  "id": 2,
  "nom": "Développeur Backend",
  "definition": "Mise à jour de la définition.",
  ...
}
```

### 5. Supprimer un métier par ID

- **Méthode** : `DELETE`
- **URL** : `/metiers/:id`

Permet de supprimer un métier en fournissant son ID.

**Exemple de requête** :

```bash
DELETE /metiers/1
```

**Réponse** :

```json
{
  "message": "Métier supprimé"
}
```

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express.js** : Framework minimaliste pour la gestion des routes.
- **JavaScript (ES6)** : Langage de programmation utilisé pour construire l'API.

## Auteurs

- **Williams GOUBALI** : Créateur du projet.