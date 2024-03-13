export const palavrasPossiveis  = {
    probablyWords: ['Qual', 'o', 'nome', 'do', 'fundador', 'da', 'instituição', 'e', 'Quem', 'era', 'ele', 'A', 'escola', 'oferece', 'curso', 'técnico', 'Quais','Onde', 'entro', 'em', 'contato', 'pra', 'matricula', 'ou', 'rematricula',],
 matched: 0,

}


export const palavrasNaoAceitas = {
    notProbablyWords: ['futebol', 'volei', 'jogos', 'comida',
    'produtos', 'de', 'limpesa', 'filmes', ],
    matched: 0,
}


function showAnsher(index) {
    switch (index) {
        case 0:
            return "o fundador da instituição foi bento quirino, ele era um empresario da epoca e estudou piscologia"

        case 1:
            return "sim oferecemos cursos tecnicos, oferecemos varios como informatica, biotec, e veterinaria"
        
        case 2:
            return "vc pode entrar em contato pelo site, email e telefone"
        

        default:
            return "so posso fala sobre a escola tirando isso nao respondo"

        
    }
    
}



export function mostprobablyquestion(pergunta){
    if (pergunta.includes("palavrasNaoAceitas")) {
        return "nao falo nada alem de coisas sobre a escola"
    }

    let matches = [
        palavrasNaoAceitas.matched,
        palavrasPossiveis.matched,

    ]



console.log(matches)
console.log(math.max(...matches))
console.log(matches.indexOf(Math.max(...matches)))

return showAnsher(matches.indexOf(math.max(...matches)))

}

//usei um banco de palavras nao aceitas e fiz uma abordagem parecida com o do arquivo do chat bor feito em aula, pois decorei os codigos entao pro isso soube fazer 