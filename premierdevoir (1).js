//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
//TODO

// var a = 4;
// var b = 5;
// console.log(a+b);

//Afficher la chaine de caractère suivante en majuscule
// const team = 'avengers';
// console.log(team.toUpperCase())

//Afficher la première lettre de la chaine de caractère suivante
// let team = 'avengers';
// console.log(team[0]);

//afficher la chaine de caractère suivante exepté la première lettre.
// const str = 'avengers';
// console.log(str.substr(1));
// expected output: "vengers"

//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// let firstName = 'Tony';
// let lastName = 'Stark';
// let fullName = firstName + ' ' +lastName
// console.log(fullName)

//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
// let team = 'avengers';
// console.log(team[0].toUpperCase()+team[1]+team[2]+team[3]+team[4]+team[5]+team[6]+team[7]);
//correction : //1) je met tout en minuscule 
//2) j'isole la première lettre
//3) je la met dans une variable 
//4) j'affiche la concaténation
// cont villeEnMin= ville.toLowercase();
// const firstLetter = villes[0];
// const firstLetterMaj = firstLetter.toUPPERCASE
// console.log(firstLetter+VILLE)

//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
//TODO

// const villes = ["Paris", "Marseille", "Brest"];
// let thirdElement = villes[2];
// console.log(villes[2])
// const count = villes.push('Lyon');
// console.log(villes);
// let removedItem = villes[villes.length - 2]
// console.log(removedItem); 
//*********pas sûre que ce soit juste, je me demande si j'ai supprimé et ajouté un élèment.

//Les boucles
//
//Comme tu le sais sans doute, pour parcourir un tableau,
//il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//élément au carré et affiche le tableau.

// const array1 = [2, 4, 8];
// for(let index = 0; index < 3; index++){
//    console.log(Math.pow(2, 2)); 
//    console.log(Math.pow(4, 2)); 
//    console.log(Math.pow(8, 2)); 
// }
//******Je ne comprend pas pourquoi les chiffres au carré s'affichent 3 fois dans la console.

// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
// const promo = [12, 13, 17, 3, 14, 18];
// function numAverage(a) {
//     var b = a.length,
//         c = 0, i;
//     for (i = 0; i < b; i++){
//       c += Number(a[i]);
//     }
//     return c/b;
//   }
//   numAverage([12, 13, 17, 3, 14, 18]);
// console.log(numAverage(12, 13, 17, 3, 14, 18))
//*********Ça ne fonctionne pas, je pense que l'erreur est dans la console */
