import PromptSync from 'prompt-sync'
let prompt = PromptSync()

// Code défini dans les paramètres du téléphone
let codePIN = 1111

// Après quelque minutes d'inactivité, le téléphone se vérouille
let codePinATester = parseInt(prompt('Veuillez entrer votre code PIN : '))

if (codePinATester !== codePIN) {
  console.log('Code PIN Erroné')
} else {
  console.log('Code PIN correct.Appareil deverouillé')
}

// Opérateurs de comparaision
// > = : Supéreur ou égal
// < = : Inférieur ou égal
// > : strictement supérieur
// < : strictement inférieur
// = = : Egalité
// = = = : Egalité stricte
// ! = : Différence
// ! = = : Différence strict

// Opératers Logiques
// && : ET => Condition évaluée à true, si toutes les conditions sont vraies
// || : OU => Condition évaluée à vraie, si au moins une condition est vraie

let age = parseInt(prompt('Entrez votre age'))
if (age >= 18) {
  console.log('Vous êtes majeur.')
} else if (age > 11 && age <= 17) {
  console.log('Vous êtes ado.')
}
