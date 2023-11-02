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

// Sélectionnez tous les éléments de lettre du clavier virtuel
let lettres = document.querySelectorAll('td');

// Ajoutez un gestionnaire d'événements pour chaque lettre
lettres.forEach(function(e) {
    e.addEventListener('click', function() {
        // Récupérez la lettre cliquée depuis le contenu de l'élément
        let lettreCliquee = e.textContent;
        console.log(lettreCliquee);
    });
});