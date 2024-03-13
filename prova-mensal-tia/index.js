import { palavrasNaoAceitas, palavrasPossiveis, } from "./posso-responder.js";


let perguntas = "a escola exibe filmes"
perguntas = perguntas.toLocaleLowerCase()
perguntas = perguntas.split('')

const banco = [
     palavrasPossiveis,palavrasNaoAceitas,
]


for (let i = 0; i < perguntas.length; i++) {
    for (let j = 0; j < banco.length; j++) { 

    if (banco[j].probablyWords.indexOf(perguntas[i]) !==-1){
        banco[j].matched++
        }
    
    }
}

console.log(mostprobablyquestion(perguntas))
