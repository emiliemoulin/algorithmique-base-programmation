import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let nombre = parseInt(prompt('Entrer un nombre : '))

for (let i = 1; i <= 13; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`)
}
