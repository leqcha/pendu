let motAleatoire = '';
let tirets = [];
let motADeviner = [];
let coups = 7;
let numeroImage = 0;
let lettre = '';

let score = document.querySelector('.score');
let image = document.querySelector('img');

// Liste de mots
let tableauDeMots = [
    "chien", "chat", "table", "ordinateur", "maison", "voiture", "fenetre", "porte", "fleur", "arbre",
    "soleil", "lune", "étoile", "plage", "mer", "montagne", "riviere", "pont", "nuage", "herbe",
    "cafe", "livre", "stylo", "papier", "musique", "film", "fenetre", "vélo", "ballon", "portable",
    "ordinateur", "ecran", "clavier", "souris", "ecouteurs", "casque", "telecommande", "pizza", "hamburger", "sandwich",
    "chocolat", "gateau", "bonbon", "glace", "soda", "eau", "jus", "orange", "pomme"
];

// Suppression des accents et des majuscules
// function supprimerAccents(str) {
//     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }
// let tableauDeMotsSansAccents = tableauDeMots.map(mot => supprimerAccents(mot.toLowerCase()));
// console.log(tableauDeMotsSansAccents);


// Générer une nouvelle partie au clic sur le bouton nouvelle partie
let nouvellePartieBtn = document.querySelector('.nouvellePartie');
nouvellePartieBtn.addEventListener('click', nouvellePartie);

function nouvellePartie() {
    // remise à 0 des variables et fonctions
    document.querySelector('.tirets').textContent = '';
    numeroImage = 0;
    image.src = `images/${numeroImage}.png`;
    coups = 7;
    score.textContent = coups;
    tirets = [];
    motADeviner = [];

    motADeviner = genererMot(tableauDeMots.length);
    console.log(motADeviner);
    copieMotAleatoire();
    genererTirets();
}

function copieMotAleatoire(){
    motADeviner = motAleatoire.split('');
    console.log(motADeviner);
}

// Générer des tirets pour le tableau copieMotAleatoire
function genererTirets() {
    for (let i = 0; i < motAleatoire.length; i++) {
        tirets = document.querySelector('.tirets').append(' _ ');
    }
}



// Choisir un mot aléatoire dans la liste et le retourner sous forme de tableau
function genererMot(max) {
    let nombreAleatoire = Math.floor(Math.random() * max);
    motAleatoire = tableauDeMots[nombreAleatoire];

    for (let i = 0; i < motAleatoire.length; i++) {
        motADeviner.push(motAleatoire[i]);
    }
    return motADeviner;
}


let lettreElements = document.querySelectorAll('td');
lettreElements.forEach(function (e) {
    e.addEventListener('click', function () {
        lettre = e.textContent;
        console.log(lettre);
        verifierLettre(lettre);
    });
});

function verifierLettre(lettre) {
    let lettreTrouvee = false;

    for (let i = 0; i < motADeviner.length; i++) {
        if (motADeviner[i] === lettre) {
            lettreTrouvee = true;
        }
    }

    if (lettreTrouvee) {
        console.log('la lettre est dans le mot');
        score.textContent = coups;
    } else if (coups === 0 || coups < 0) {
        alert('perdu');
        image.src = 'images/7.png';
    } else {
        console.log('la lettre n\'est pas dans le mot');
        coups--;
        score.textContent = coups;
        image.src = `images/${++numeroImage}.png`;
    }

}

nouvellePartie();
