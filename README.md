# Documentation du Jeu du Pendu

## Introduction
Le "Jeu du Pendu" est un jeu de devinette de mots où le joueur doit deviner un mot en tentant de deviner les lettres qui le composent, tout en évitant de dépasser un nombre limité de tentatives. Ce document explique comment le jeu a été créé en utilisant HTML, CSS, et JavaScript.

## Table des matières
1. **Structure du Projet**
2. **Règles du Jeu**
3. **Fonctionnalités du Jeu**
4. **Utilisation du Jeu**
5. **Personnalisation**
6. **Conclusion**

## 1. Structure du Projet
Le jeu du pendu est composé de trois fichiers principaux :
- `index.html`: Ce fichier HTML définit la structure de la page, y compris l'affichage du jeu, le clavier virtuel, et l'image du pendu.
- `style.css`: Ce fichier CSS gère la mise en forme et le style de la page, y compris la disposition, la police, et les médias queries pour une meilleure expérience utilisateur sur différents appareils.
- `script.js`: Ce fichier JavaScript gère la logique du jeu, y compris la sélection aléatoire du mot à deviner, le suivi des tentatives, la vérification des lettres, etc.

## 2. Règles du Jeu
Le jeu suit des règles simples :
- Le joueur doit deviner un mot en essayant de deviner les lettres une par une.
- Le joueur a un nombre limité de tentatives (7 dans ce jeu).
- Chaque lettre incorrecte coûte une vie, et le jeu se termine lorsque le joueur n'a plus de vies.
- Si le joueur devine correctement toutes les lettres du mot, il gagne la partie.

## 3. Fonctionnalités du Jeu
Le jeu propose les fonctionnalités suivantes :
- Sélection aléatoire d'un mot parmi une liste de mots prédéfinis.
- Affichage des lettres à deviner sous forme de tirets.
- Affichage d'un compteur de vies restantes.
- Affichage d'une image du pendu pour chaque erreur.
- Gestion de la soumission du mot proposé par le joueur.
- Possibilité de commencer une nouvelle partie.

## 4. Utilisation du Jeu
1. Au chargement de la page, le jeu commence automatiquement.
2. Le joueur voit les tirets représentant les lettres à deviner et le compteur de vies.
3. Le joueur peut cliquer sur les lettres dans le clavier virtuel pour les deviner.
4. Le joueur peut soumettre un mot complet s'il pense avoir deviné le mot.
5. Le joueur peut commencer une nouvelle partie à tout moment en appuyant sur le bouton "Nouvelle partie".

## 5. Personnalisation
Il est possible de personnaliser le jeu en modifiant la liste de mots dans le fichier JavaScript (`tableauDeMots`).

## 6. Améliorations possibles
- Le joueur pourrait perdre une vie s'il clique deux fois sur une lettre même trouvée.
- Le joueur pourrait avoir un historique des lettres et mots déjà soumis.
- le jeu pourrait émettre un son à la victoire ou à la defaite.
- La difficulté du jeu pourrait être augmentée ou diminuée selon la longueur du mot à trouver et/ou un nombre de vies inférieur ou supérieur à 7.
