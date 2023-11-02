let motAleatoire = '';
let tirets = '';
let motADeviner = [];

// Liste de mots
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

// Choisir un mot aléatoire dans la liste et le retourner sous forme de tableau
function genererMot(max) {
    let nombreAleatoire = Math.floor(Math.random() * max);
    motAleatoire = tableauDeMots[nombreAleatoire];

    for (let i = 0; i < motAleatoire.length; i++) {
        motADeviner.push(motAleatoire[i]);
    }
    return motADeviner;
}

// Générer le nombre de tirets correspondant au nombre de lettres
function genererTirets() {
    for (let i = 0; i < motAleatoire.length; i++) {
        tirets = document.querySelector('.tirets').append(' _ ');
    }
}

function nouvellePartie() {
    console.log(genererMot(tableauDeMots.length));
    genererTirets();
}

nouvellePartie();

// Écrivez une fonction pour gérer le clic sur une lettre du clavier virtuel et vérifier si la lettre est correcte.

// Gérez le décompte des erreurs et l'affichage progressif de l'image du pendu.
// Vérifiez si le joueur a gagné ou perdu la partie.
// Affichez des messages d'état en fonction du déroulement du jeu.
// Étape 5 : Interaction utilisateur

// Ajoutez des gestionnaires d'événements pour le bouton "Nouvelle Partie" et les lettres du clavier virtuel.

// Étape 7 : Personnalisation et améliorations (facultatif)

// Ajoutez des fonctionnalités supplémentaires comme un chronomètre, des niveaux de difficulté, ou un classement en ligne.
// Personnalisez davantage les styles et l'interface utilisateur.

// function qui écrit le motAleatoire dans les tirets. chaque lettre représente 1 tiret
// Créer un tableau qui comporte 1 index de lettre