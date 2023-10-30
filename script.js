let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
let e = document.querySelector('.e');
let f = document.querySelector('.f');
let g = document.querySelector('.g');
let h = document.querySelector('.h');
let i = document.querySelector('.i');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');
let m = document.querySelector('.m');
let n = document.querySelector('.n');
let o = document.querySelector('.o');
let p = document.querySelector('.p');
let q = document.querySelector('.q');
let r = document.querySelector('.r');
let s = document.querySelector('.s');
let t = document.querySelector('.t');
let u = document.querySelector('.u');
let v = document.querySelector('.v');
let w = document.querySelector('.w');
let x = document.querySelector('.x');
let y = document.querySelector('.y');
let z = document.querySelector('.z');

let lettre = '';
let motAleatoire = '';
let tirets = '';

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

// Choisir un mot aléatoire dans la liste
function genererMot(max) {
    let nombreAleatoire = Math.floor(Math.random() * max); // Génère un index aléatoire
    motAleatoire = tableauDeMots[nombreAleatoire]; // Sélectionne le mot correspondant à l'index
    return motAleatoire;
}
console.log(genererMot(tableauDeMots.length));

// Générer le nombre de tirets correspondant au nombre de lettres
function genererTirets() {
    for (let i = 0; i < motAleatoire.length; i++) {
        tirets = document.querySelector('.tirets').append(' _ ');
    }
}
genererTirets();

// Écrivez une fonction pour initialiser une nouvelle partie (réinitialisation des variables, affichage initial, etc.).

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