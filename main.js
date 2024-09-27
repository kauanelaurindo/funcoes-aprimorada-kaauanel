const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chega em uma mansão, onde deve resolver um desaparecimento da herdeira Emily. Chegando no local você observa os moradores da casa, o tio de Emily e a governanta, que são invasivos e parecem esconder algo?",
        alternativas: [
            {
                texto: "Você decide interrogar todos os moradores, para tentar obter pistas do desaparecimento.",
                afirmacao: "Após conduzir um interrogatório intensivo de tio de Emily. Apresenta uma série de evidências acumuladas que expõem seu envolvimento. Sem saída, confessa seu papel no desaparecimento de Emily. Ele revela que, motivado pela ganância e pela inveja, planejou sequestrar Emily para forçá-la a transferir a herança. Ele havia roubado o colar de esmeraldas como parte de um plano para criar uma falsa pista que desviasse a investigação.Com a confissão dele. Você é capaz de localizar Emily, que estava escondida em uma das dependências secretas da mansão. Emily é resgatada e retorna à segurança a sua casa. O escândalo abalou a cidade, mas também trouxe à tona a verdade sobre os segredos da família Ravenwood. O tio é preso e a mansão passa a ser conhecida como um local de mistérios resolvidos e justiça restaurada.",
            },
            {
                texto: "Você opta por observar e investir discretamente, evitando confrontos para entender melhor a rotina da família.",
                afirmacao: "Ao montar uma armadilha para o tio, descobre que ele não revela a verdade diretamente. No entanto, durante a armadilha, um novo detalhe crucial vem à tona: um vídeo antigo da mansão mostra Emily sendo sequestrada por um desconhecido. A filmagem revela que o tio pode não ser o verdadeiro culpado, mas um cúmplice de alguém mais perigoso e astuto. Com essa nova pista, Sofia percebe que há uma trama ainda mais complexa envolvendo uma rede de conspiração. O verdadeiro responsável pelo desaparecimento de Emily pode estar escondido, e a identidade dele é um mistério.",
            }
        ]
    },

    {
        enunciado: "Enquanto explorava mansão, você encontra uma sala secreta atrás de uma biblioteca falsa dentro, há documentos e fotos antigas. ",
        alternativas: [
            {
                texto: "Você decide examinar os documentos e fotos, acreditando que eles podem contar pistas.",
                afirmacao: "Após conduzir um interrogatório intensivo de tio de Emily. Apresenta uma série de evidências acumuladas que expõem seu envolvimento. Sem saída, confessa seu papel no desaparecimento de Emily. Ele revela que, motivado pela ganância e pela inveja, planejou sequestrar Emily para forçá-la a transferir a herança. Ele havia roubado o colar de esmeraldas como parte de um plano para criar uma falsa pista que desviasse a investigação.Com a confissão dele. Você é capaz de localizar Emily, que estava escondida em uma das dependências secretas da mansão. Emily é resgatada e retorna à segurança a sua casa. O escândalo abalou a cidade, mas também trouxe à tona a verdade sobre os segredos da família Ravenwood. O tio é preso e a mansão passa a ser conhecida como um local de mistérios resolvidos e justiça restaurada.",
            },
            {
                texto: "Você opta por deixar para lá, e busca evidências adicionais na mansão, acreditando que a sala secreta é uma armadilha. ",
                afirmacao: "Ao montar uma armadilha para o tio, descobre que ele não revela a verdade diretamente. No entanto, durante a armadilha, um novo detalhe crucial vem à tona: um vídeo antigo da mansão mostra Emily sendo sequestrada por um desconhecido. A filmagem revela que o tio pode não ser o verdadeiro culpado, mas um cúmplice de alguém mais perigoso e astuto. Com essa nova pista, Sofia percebe que há uma trama ainda mais complexa envolvendo uma rede de conspiração. O verdadeiro responsável pelo desaparecimento de Emily pode estar escondido, e a identidade dele é um mistério.",
            }
        ]
    },
    {
        enunciado: "Um dos moradores da mansão, a prima de Emily, Sofia, conferir ter visto algo suspeito na noite do desaparecimento, mas seu relato é confuso. ",
        alternativas: [
            {
                texto: "Você decide confrontar com as evidências  encontradas e pressiona-lá para obter mais informação.",
                afirmacao: "Após conduzir um interrogatório intensivo de tio de Emily. Apresenta uma série de evidências acumuladas que expõem seu envolvimento. Sem saída, confessa seu papel no desaparecimento de Emily. Ele revela que, motivado pela ganância e pela inveja, planejou sequestrar Emily para forçá-la a transferir a herança. Ele havia roubado o colar de esmeraldas como parte de um plano para criar uma falsa pista que desviasse a investigação.Com a confissão dele. Você é capaz de localizar Emily, que estava escondida em uma das dependências secretas da mansão. Emily é resgatada e retorna à segurança a sua casa. O escândalo abalou a cidade, mas também trouxe à tona a verdade sobre os segredos da família Ravenwood. O tio é preso e a mansão passa a ser conhecida como um local de mistérios resolvidos e justiça restaurada.",
            },
            {
                texto: "Você decide investigar outras pessoas e procurar encaixar a história de Sofia com outras evidências.",
                afirmacao: "Ao montar uma armadilha para o tio, descobre que ele não revela a verdade diretamente. No entanto, durante a armadilha, um novo detalhe crucial vem à tona: um vídeo antigo da mansão mostra Emily sendo sequestrada por um desconhecido. A filmagem revela que o tio pode não ser o verdadeiro culpado, mas um cúmplice de alguém mais perigoso e astuto. Com essa nova pista, Sofia percebe que há uma trama ainda mais complexa envolvendo uma rede de conspiração. O verdadeiro responsável pelo desaparecimento de Emily pode estar escondido, e a identidade dele é um mistério.",
            }
        ]
    },
    {
        enunciado: "Um item valioso da família, um antigo colar desaparece na mesma época que Emily. Isso só aumenta a complexidade do caso.",
        alternativas: [
            {
                texto: "Você foca em descobrir o desaparecimento do colar é um desvio do foco principal.",
                afirmacao: "Ao montar uma armadilha para o tio, descobre que ele não revela a verdade diretamente. No entanto, durante a armadilha, um novo detalhe crucial vem à tona: um vídeo antigo da mansão mostra Emily sendo sequestrada por um desconhecido. A filmagem revela que o tio pode não ser o verdadeiro culpado, mas um cúmplice de alguém mais perigoso e astuto. Com essa nova pista, Sofia percebe que há uma trama ainda mais complexa envolvendo uma rede de conspiração. O verdadeiro responsável pelo desaparecimento de Emily pode estar escondido, e a identidade dele é um mistério.",
            },
            {
                texto: "Você investiga a origem e o valor do colar e analisa quem tinha acesso a jóia.",
                afirmacao: "Após conduzir um interrogatório intensivo de tio de Emily. Apresenta uma série de evidências acumuladas que expõem seu envolvimento. Sem saída, confessa seu papel no desaparecimento de Emily. Ele revela que, motivado pela ganância e pela inveja, planejou sequestrar Emily para forçá-la a transferir a herança. Ele havia roubado o colar de esmeraldas como parte de um plano para criar uma falsa pista que desviasse a investigação.Com a confissão dele. Você é capaz de localizar Emily, que estava escondida em uma das dependências secretas da mansão. Emily é resgatada e retorna à segurança a sua casa. O escândalo abalou a cidade, mas também trouxe à tona a verdade sobre os segredos da família Ravenwood. O tio é preso e a mansão passa a ser conhecida como um local de mistérios resolvidos e justiça restaurada.",
            }
        ]
    },
    {
        enunciado: "Após várias investigações, você está pronta para confrontar o principal suspeito, o tio de Emily, que têm uma história sobre o desaparecimento.",
        alternativas: [
            {
                texto: "Você faz um interrogatório detalhado, apresentando todas as evidências para forca-lo a revelar a verdade ",
                afirmacao: "Após conduzir um interrogatório intensivo de tio de Emily. Apresenta uma série de evidências acumuladas que expõem seu envolvimento. Sem saída, confessa seu papel no desaparecimento de Emily. Ele revela que, motivado pela ganância e pela inveja, planejou sequestrar Emily para forçá-la a transferir a herança. Ele havia roubado o colar de esmeraldas como parte de um plano para criar uma falsa pista que desviasse a investigação.Com a confissão dele. Você é capaz de localizar Emily, que estava escondida em uma das dependências secretas da mansão. Emily é resgatada e retorna à segurança a sua casa. O escândalo abalou a cidade, mas também trouxe à tona a verdade sobre os segredos da família Ravenwood. O tio é preso e a mansão passa a ser conhecida como um local de mistérios resolvidos e justiça restaurada.",
            },
            {
                texto: "Você arma uma armadilha, expondo uma parte das evidências para ver sua reação e receber o que realmente aconteceu com Emily",
                afirmacao: "Ao montar uma armadilha para o tio, descobre que ele não revela a verdade diretamente. No entanto, durante a armadilha, um novo detalhe crucial vem à tona: um vídeo antigo da mansão mostra Emily sendo sequestrada por um desconhecido. A filmagem revela que o tio pode não ser o verdadeiro culpado, mas um cúmplice de alguém mais perigoso e astuto. Com essa nova pista, Sofia percebe que há uma trama ainda mais complexa envolvendo uma rede de conspiração. O verdadeiro responsável pelo desaparecimento de Emily pode estar escondido, e a identidade dele é um mistério.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No Final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();

