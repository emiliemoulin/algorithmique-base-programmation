import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let langue = prompt('Veuillez choisir la langue : ')

// Si condition ALORS
// ACTIONS

// 'anglais'==='français' => false

// Une alternative simple

if (langue === 'français') {
  console.log('Bonjour')
} else {
  console.log("Vous n'avez pas choisi une langue valide")
}

// Alternatives multiples
