import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let distance = parseFloat(prompt('Distance parcourue : '))
let temps = parseFloat(prompt('Temps : '))
let vitesse = distance / temps
console.log(`Vitesse : ${vitesse}m/s`)
