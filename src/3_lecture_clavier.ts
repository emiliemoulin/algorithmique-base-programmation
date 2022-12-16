import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let nom = prompt('Veuillez saisir votre nom: ')
let prenom = prompt('Veuillez entrer votre prenom : ')
console.log(`${prenom} ${nom}`)
console.log(prenom + ' ' + nom)
