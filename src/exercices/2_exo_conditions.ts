import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let age: number = parseInt(prompt("Entrez l'age : "))
if (age >= 7 && age <= 9) {
  console.log('Poussin')
} else if (age >= 10 && age <= 11) {
  console.log('Pupille')
} else if (age >= 12 && age <= 13) {
  console.log('Benjamin')
} else if (age >= 14 && age <= 15) {
  console.log('Minime')
} else if (age >= 16 && age <= 17) {
  console.log('Cadet')
} else {
  console.log("Vous n'appartenez à aucune catégorie")
}
