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
        tirets[i] = '_';
    }
    document.querySelector('.tirets').textContent = tirets.join(' ');
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

            tirets[i] = lettre; // Remplacer le tiret par la lettre

            if (tirets.join('') === motAleatoire) {
                alert('Vous avez trouvez le mot ' + motAleatoire + '!');
                nouvellePartie();
            }
        }
        
    }

    document.querySelector('.tirets').textContent = tirets.join(' '); // Mettre à jour l'affichage des tirets

    if (!lettreTrouvee) {
        console.log('la lettre n\'est pas dans le mot');
        coups--;
        score.textContent = coups;
        image.src = `images/${++numeroImage}.png`;
    } else {
        console.log('la lettre est dans le mot');
    }
}

nouvellePartie();
