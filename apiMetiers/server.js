// Importation des modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Données des métiers
const metiers = [
    {
        id: 1,
        nom: "Développeur Frontend",
        definition: "Spécialiste de l'interface utilisateur et de l'expérience utilisateur.",
        missions: ["Créer des interfaces web interactives", "Optimiser l'affichage et la performance", "Collaborer avec les designers"],
        competences: {
            techniques: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
            humaines: ["Créativité", "Communication", "Esprit d'équipe"]
        },
        outils: ["Figma", "VS Code", "Git"],
        salaires: {
            debutant: "30k€/an",
            intermediaire: "45k€/an",
            senior: "60k€/an"
        },
        avantages: ["Travail créatif", "Forte demande sur le marché"],
        limites: ["Évolution technologique rapide", "Dépendance aux designers"],
        parcours: "Formation en développement web ou autodidacte."
    },
    {
        id: 2,
        nom: "Développeur Backend",
        definition: "Gère la logique, les bases de données et la sécurité d'une application.",
        missions: ["Développer et maintenir les API", "Gérer les bases de données", "Assurer la sécurité des applications"],
        competences: {
            techniques: ["Node.js", "Express", "MongoDB", "SQL"],
            humaines: ["Rigueur", "Résolution de problèmes", "Autonomie"]
        },
        outils: ["Postman", "Docker", "Git"],
        salaires: {
            debutant: "35k€/an",
            intermediaire: "50k€/an",
            senior: "70k€/an"
        },
        avantages: ["Grande flexibilité", "Évolutif vers l'architecture logicielle"],
        limites: ["Travail parfois abstrait", "Problèmes de performance complexes"],
        parcours: "Formation informatique ou autodidacte avec projets solides."
    },
    {
        id: 3,
        nom: "Développeur Fullstack",
        definition: "Maîtrise à la fois le développement frontend et backend.",
        missions: ["Développer des applications complètes", "Gérer à la fois le backend et le frontend", "Optimiser l'architecture des projets"],
        competences: {
            techniques: ["JavaScript", "Node.js", "React", "MongoDB", "SQL"],
            humaines: ["Adaptabilité", "Autonomie", "Résolution de problèmes"]
        },
        outils: ["Docker", "Git", "Postman"],
        salaires: {
            debutant: "40k€/an",
            intermediaire: "55k€/an",
            senior: "75k€/an"
        },
        avantages: ["Grande polyvalence", "Demande forte sur le marché"],
        limites: ["Charge de travail élevée", "Nécessite de se tenir à jour sur plusieurs technologies"],
        parcours: "Formation complète en développement web ou autodidacte avec projets solides."
    },
    {
        id: 4,
        nom: "Développeur Mobile",
        definition: "Spécialiste des applications mobiles sur iOS et Android.",
        missions: ["Développer des applications mobiles performantes", "Optimiser l'expérience utilisateur mobile", "Assurer la compatibilité multi-plateforme"],
        competences: {
            techniques: ["Flutter", "React Native", "Swift", "Kotlin"],
            humaines: ["Créativité", "Esprit d'équipe", "Résolution de problèmes"]
        },
        outils: ["Android Studio", "Xcode", "Figma"],
        salaires: {
            debutant: "35k€/an",
            intermediaire: "50k€/an",
            senior: "70k€/an"
        },
        avantages: ["Marché en pleine croissance", "Possibilité de travailler en freelance"],
        limites: ["Forte concurrence", "Évolution rapide des technologies mobiles"],
        parcours: "Formation en développement mobile ou autodidacte."
    },
    {
        id: 5,
        nom: "Développeur NoCode / LowCode",
        definition: "Crée des applications sans coder ou avec peu de code.",
        missions: ["Créer des solutions rapides avec des outils NoCode", "Optimiser les workflows d'entreprise", "Automatiser des processus métier"],
        competences: {
            techniques: ["Bubble", "Zapier", "Airtable", "Webflow"],
            humaines: ["Logique métier", "Créativité", "Esprit d'analyse"]
        },
        outils: ["Make", "Glide", "Notion"],
        salaires: {
            debutant: "30k€/an",
            intermediaire: "45k€/an",
            senior: "60k€/an"
        },
        avantages: ["Rapidité de développement", "Accessible sans formation technique"],
        limites: ["Moins de flexibilité", "Dépendance aux plateformes NoCode"],
        parcours: "Autodidacte ou formations spécifiques NoCode."
    },
    {
        id: 6,
        nom: "DevOps",
        definition: "Assure le déploiement, l'automatisation et la gestion des infrastructures.",
        missions: ["Automatiser les processus de développement", "Gérer les infrastructures cloud", "Optimiser les performances des applications"],
        competences: {
            techniques: ["Docker", "Kubernetes", "AWS", "CI/CD"],
            humaines: ["Collaboration", "Esprit d'analyse", "Réactivité"]
        },
        outils: ["Jenkins", "Terraform", "Prometheus"],
        salaires: {
            debutant: "45k€/an",
            intermediaire: "60k€/an",
            senior: "85k€/an"
        },
        avantages: ["Poste stratégique", "Demande forte sur le marché"],
        limites: ["Complexité des outils", "Responsabilité élevée"],
        parcours: "Formation en administration système ou autodidacte."
    },
    {
        id: 7,
        nom: "QA / Testeur logiciel",
        definition: "Spécialiste du contrôle qualité des logiciels et de la validation des fonctionnalités.",
        missions: ["Écrire des cas de test", "Effectuer des tests manuels et automatisés", "Analyser les erreurs et proposer des améliorations"],
        competences: {
            techniques: ["Selenium", "Jest", "Postman", "JIRA", "Cypress"],
            humaines: ["Attention au détail", "Esprit critique", "Communication"]
        },
        outils: ["Jenkins", "TestRail", "Git"],
        salaires: {
            debutant: "30k€/an",
            intermediaire: "40k€/an",
            senior: "55k€/an"
        },
        avantages: ["Stabilité professionnelle", "Rôle essentiel dans l'équipe"],
        limites: ["Tâches répétitives", "Pression pour des délais courts"],
        parcours: "Formation en informatique ou en génie logiciel."
    },
    {
        id: 8,
        nom: "Product Owner",
        definition: "Responsable de la gestion du produit et des priorités de développement.",
        missions: ["Définir les priorités de développement", "Collaborer avec les équipes de développement et de design", "Suivre les performances du produit"],
        competences: {
            techniques: ["Agile", "Scrum", "Jira", "Roadmap produit"],
            humaines: ["Leadership", "Vision produit", "Communication"],
        },
        outils: ["Trello", "Jira", "Confluence"],
        salaires: {
            debutant: "35k€/an",
            intermediaire: "50k€/an",
            senior: "75k€/an"
        },
        avantages: ["Rôle stratégique", "Implication dans la vision du produit"],
        limites: ["Pression des délais", "Responsabilité élevée"],
        parcours: "Formation en gestion de produit ou dans des domaines proches."
    },
    {
        id: 9,
        nom: "Chef de projet technique",
        definition: "Supervise la gestion technique d’un projet informatique.",
        missions: ["Coordonner les équipes de développement", "Assurer le respect des délais", "Gérer les ressources et les risques"],
        competences: {
            techniques: ["Gestion de projet", "Agile", "Leadership", "Planification"],
            humaines: ["Gestion du stress", "Communication", "Adaptabilité"],
        },
        outils: ["MS Project", "Jira", "Trello"],
        salaires: {
            debutant: "40k€/an",
            intermediaire: "60k€/an",
            senior: "85k€/an"
        },
        avantages: ["Responsabilité", "Rôle central dans l'entreprise"],
        limites: ["Stress lié à la gestion de projet", "Horaires parfois étendus"],
        parcours: "Formation en gestion de projet ou ingénierie logicielle."
    },
    {
        id: 10,
        nom: "UI/UX Designer",
        definition: "Spécialiste de l'interface utilisateur et de l'expérience utilisateur d'un produit.",
        missions: ["Concevoir l'interface utilisateur d'applications", "Améliorer l'expérience utilisateur", "Travailler avec les développeurs pour la mise en œuvre"],
        competences: {
            techniques: ["Sketch", "Figma", "Adobe XD", "Principle", "Wireframing"],
            humaines: ["Créativité", "Empathie", "Communication"],
        },
        outils: ["InVision", "Figma", "Adobe Photoshop"],
        salaires: {
            debutant: "30k€/an",
            intermediaire: "45k€/an",
            senior: "60k€/an"
        },
        avantages: ["Créativité", "Rôle clé dans la conception"],
        limites: ["Exigences des clients", "Tâches parfois répétitives"],
        parcours: "Formation en design graphique ou interaction, ou autodidacte."
    },
    {
        id: 11,
        nom: "Data Engineer",
        definition: "Conçoit, construit et gère les infrastructures de données pour l’analyse.",
        missions: ["Construire des pipelines de données", "Gérer les bases de données massives", "Assurer la qualité et l'intégrité des données"],
        competences: {
            techniques: ["Python", "SQL", "Hadoop", "Spark", "ETL"],
            humaines: ["Rigueur", "Résolution de problèmes", "Collaboration"]
        },
        outils: ["Airflow", "Kafka", "PostgreSQL"],
        salaires: {
            debutant: "40k€/an",
            intermediaire: "55k€/an",
            senior: "80k€/an"
        },
        avantages: ["Rôle essentiel dans l'analyse des données", "Haute demande sur le marché"],
        limites: ["Risque de tâches répétitives", "Complexité des systèmes de données"],
        parcours: "Formation en informatique, ingénierie ou autodidacte avec expérience en data."
    },
    {
        id: 12,
        nom: "Data Scientist",
        definition: "Analyse les données pour extraire des informations utiles et prédictives.",
        missions: ["Construire des modèles statistiques et d'IA", "Analyser de grandes quantités de données", "Travailler avec des équipes pour extraire des insights"],
        competences: {
            techniques: ["Python", "R", "Machine Learning", "TensorFlow", "Pandas"],
            humaines: ["Analyse critique", "Curiosité", "Communication"]
        },
        outils: ["Jupyter", "Keras", "Scikit-learn"],
        salaires: {
            debutant: "45k€/an",
            intermediaire: "65k€/an",
            senior: "95k€/an"
        },
        avantages: ["Haute demande dans tous les secteurs", "Travail innovant"],
        limites: ["Évolution rapide des technologies", "Besoin de grandes capacités de calcul"],
        parcours: "Formation en mathématiques, informatique ou autodidacte avec projets en data science."
    },
    {
        id: 13,
        nom: "Tech Lead",
        definition: "Dirige l’équipe technique et assure la réussite des projets logiciels.",
        missions: ["Superviser l'équipe technique", "Concevoir l'architecture logicielle", "Assurer la qualité du code et la livraison"],
        competences: {
            techniques: ["JavaScript", "Java", "Python", "Docker", "Git"],
            humaines: ["Leadership", "Communication", "Prise de décision"]
        },
        outils: ["GitHub", "Jira", "Slack"],
        salaires: {
            debutant: "50k€/an",
            intermediaire: "70k€/an",
            senior: "100k€/an"
        },
        avantages: ["Rôle stratégique", "Grande responsabilité"],
        limites: ["Pression pour maintenir les délais", "Responsabilité élevée"],
        parcours: "Formation en informatique avec expérience en développement et gestion d'équipe."
    },
    {
        id: 14,
        nom: "Architecte logiciel",
        definition: "Conçoit l’architecture technique des systèmes logiciels complexes.",
        missions: ["Définir l'architecture des systèmes", "Choisir les bonnes technologies", "Assurer la scalabilité et la performance des systèmes"],
        competences: {
            techniques: ["Java", "C#", "Microservices", "Docker", "Cloud Computing"],
            humaines: ["Vision stratégique", "Leadership", "Communication"]
        },
        outils: ["AWS", "Azure", "Kubernetes"],
        salaires: {
            debutant: "50k€/an",
            intermediaire: "75k€/an",
            senior: "110k€/an"
        },
        avantages: ["Travail de conception à long terme", "Possibilité de travailler sur des projets d'envergure"],
        limites: ["Stress lié aux décisions architecturales", "Complexité des systèmes"],
        parcours: "Formation en informatique ou génie logiciel avec expérience en architecture logicielle."
    }
];

// Route pour récupérer tous les métiers
app.get('/metiers', (req, res) => {
    res.json(metiers);
});

// Route pour récupérer un métier par ID
app.get('/metiers/:id', (req, res) => {
    const metier = metiers.find(m => m.id === parseInt(req.params.id));
    if (!metier) {
        return res.status(404).json({ message: 'Métier non trouvé' });
    }
    res.json(metier);
});

// Route pour ajouter un nouveau métier
app.post('/metiers', (req, res) => {
    const { nom, definition, missions, competences, outils, salaires, avantages, limites, parcours } = req.body;
    const newMetier = {
        id: metiers.length + 1, // Assigner un ID unique
        nom, definition, missions, competences, outils, salaires, avantages, limites, parcours
    };
    metiers.push(newMetier);
    res.status(201).json(newMetier);
});

// Route pour mettre à jour un métier par ID
app.put('/metiers/:id', (req, res) => {
    const metier = metiers.find(m => m.id === parseInt(req.params.id));
    if (!metier) {
        return res.status(404).json({ message: 'Métier non trouvé' });
    }

    // Mettre à jour les champs
    const { nom, definition, missions, competences, outils, salaires, avantages, limites, parcours } = req.body;
    metier.nom = nom || metier.nom;
    metier.definition = definition || metier.definition;
    metier.missions = missions || metier.missions;
    metier.competences = competences || metier.competences;
    metier.outils = outils || metier.outils;
    metier.salaires = salaires || metier.salaires;
    metier.avantages = avantages || metier.avantages;
    metier.limites = limites || metier.limites;
    metier.parcours = parcours || metier.parcours;

    res.json(metier);
});

// Route pour supprimer un métier par ID
app.delete('/metiers/:id', (req, res) => {
    const metierIndex = metiers.findIndex(m => m.id === parseInt(req.params.id));
    if (metierIndex === -1) {
        return res.status(404).json({ message: 'Métier non trouvé' });
    }

    metiers.splice(metierIndex, 1);
    res.json({ message: 'Métier supprimé' });
});



// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
