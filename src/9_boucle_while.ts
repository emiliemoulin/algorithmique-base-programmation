import PromptSync from 'prompt-sync'
let prompt = PromptSync()

// Code défini dans les paramètres du téléphone
let codePIN = 1111

// Après quelque minutes d'inactivité, le téléphone se vérouille

let codePinATester: number

do {
  codePinATester = parseInt(prompt('Veuillez entrer votre code PIN : ')) // 1111
  if (codePinATester !== codePIN) {
    console.log('Code PIN Erroné.Veuillez ressayer')
  } else {
    console.log('Appareil deverouillé')
  }
} while (codePinATester !== codePIN) //true

// 1. Le code doit être défini par l'utilisateur des les reglages de l'appareil
// 2. Il ne doit être composé que des nombres et toujours avoir 4 caractères
// 3. Limiter le nombre des tentatives à 5(Sans boucle for)
// 4. Au bout de 3 tentatives, il faut commencer à afficher le nombre de tentatives restantes
// 5. Si au bout de 5 tentatives, le code est toujours erroné, alors on bloque l'appareil
