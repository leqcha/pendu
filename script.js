let nombreAleatoire;
let motAleatoire = '';
// Étape 4 : Logique du jeu en JavaScript

// Créez une liste de mots à deviner dans votre script.
let tableauDeMots = [
    "Banane",
    "Chien",
    "Chat",
    "Maison",
    "Avion",
    "Pomme",
    "Table",
    "Orange",
    "Soleil",
    "Lune",
    "Voiture",
    "Gâteau",
    "École",
    "Montagne",
    "Plage",
    "Fleurs",
    "Musique",
    "Livre",
    "Football",
    "Basket",
    "Ordinateur",
    "Téléphone",
    "Pizza",
    "Robot",
    "Dinosaure",
    "Éléphant",
    "Girafe",
    "Oiseau",
    "Papillon",
    "Arbre",
    "Coccinelle",
    "Lapin",
    "Dauphin",
    "Sirène",
    "Fusée",
    "Hélicoptère",
    "Licorne",
    "Dragon",
    "Fraise",
    "Télévision",
    "Fusil",
    "Tarte",
    "Étoile",
    "Guitare",
    "Train",
    "Bateau",
    "Guitare",
    "Piano",
    "Piscine",
    "Horloge"
];

// Choisir un mot aléatoire dans la liste
function genererMot(max) {
    nombreAleatoire = Math.floor(Math.random() * max); // Génère un index aléatoire
    motAleatoire = tableauDeMots[nombreAleatoire]; // Sélectionne le mot correspondant à l'index
    return motAleatoire;
}
console.log(genererMot(tableauDeMots.length));

// Générer le nombre de tirets correspondant au nombre de lettre
let tirets = document.querySelector('.tirets');

for(let i = 0; i < motAleatoire.length;i++){
 document.querySelector('.tirets').append(' _ ');
}

// Écrivez une fonction pour initialiser une nouvelle partie (réinitialisation des variables, affichage initial, etc.).
// Écrivez une fonction pour gérer le clic sur une lettre du clavier virtuel et vérifier si la lettre est correcte.
// Gérez le décompte des erreurs et l'affichage progressif de l'image du pendu.
// Vérifiez si le joueur a gagné ou perdu la partie.
// Affichez des messages d'état en fonction du déroulement du jeu.
// Étape 5 : Interaction utilisateur

// Ajoutez des gestionnaires d'événements pour le bouton "Nouvelle Partie" et les lettres du clavier virtuel.
// Faites en sorte que le jeu réponde aux actions de l'utilisateur (clic sur les lettres, clic sur "Nouvelle Partie", etc.).
// Étape 6 : Tests et débogage

// Étape 7 : Personnalisation et améliorations (facultatif)

// Ajoutez des fonctionnalités supplémentaires comme un chronomètre, des niveaux de difficulté, ou un classement en ligne.
// Personnalisez davantage les styles et l'interface utilisateur.