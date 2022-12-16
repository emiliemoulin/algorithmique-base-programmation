import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let longueur: number = 500
let largeur: number = 250
let perimetre = 2 * (longueur + largeur)
let surface = longueur * largeur

console.log(perimetre)
console.log(surface)
