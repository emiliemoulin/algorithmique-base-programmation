import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let langue = prompt('Veuillez choisir la langue : ')

langue = langue.toLowerCase()

switch (langue) {
  case 'français':
    console.log('Bonjour')
    break
  case 'espagnol':
    console.log('Holla')
    break
  case 'anglais':
    console.log('Hello')
    break
  case 'allemand':
    console.log('Guten tag')
    break
  default:
    console.log('Langue non supportée')
}
