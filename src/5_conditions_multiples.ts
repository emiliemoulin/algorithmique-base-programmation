import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let langue = prompt('Veuillez choisir la langue : ')

if (langue === 'français') {
  console.log('Bonjour')
} else if (langue === 'anglais') {
  console.log('Hello')
} else if (langue === 'espagnol') {
  console.log('Holla')
} else if (langue === 'allemand') {
  console.log('Guten tag')
} else {
  console.log('Langue non supportée')
}
