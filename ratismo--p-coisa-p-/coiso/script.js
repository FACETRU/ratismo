const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em 2026, uma nova religião surge no planeta, o Ratismo, onde os seguidores desta religião acreditam que devem amar o queijo acima de tudo, odiar gatos, e respeitar os roedores que na terra e no céu chiem; quem não respeitar deverá ser sacrificado ao Deus Mickey Mouse.",
        alternativas: [
            {
                texto: "Amar a ratoeira",
                afirmacao: "Os ratos já no primeiro contato já não vão muito com a sua cara porem"
            },
            {
                texto: "Amar ao queijo",
                afirmacao: "Os ratos iniciamente ainda desconfiado pegam mais confiança em voce porem"
            }
        ]
    },
    {
        enunciado: "No dia 04 de abril (Dia Mundial do Rato), o mundo inteiro está celebrando este dia, distribuindo queijo às pessoas e aos ratos, e jogando queijos nas calçadas. O que você faz?",
        alternativas: [
            {
                texto: "Irar celebrar esta bela data jogando queijos deliciosos nas ruas",
                afirmacao: "com algumas boas ações suas elas começaram a gostar mais de você"
            },
            {
                texto: "Jogarei queijos com veneno em toda a cidade",
                afirmacao: "Com sua péssima decisão de jogar veneno pela cidade, todos os ratos da cidade começam a te odiar."
            }
        ]
    },
    {
        enunciado: "Após este dia, foi criada a primeira Igreja Ratista, onde o pastor irá passar todos os ensinamentos passados pelos nossos irmãos. Você irá aos cultos?        ",
        alternativas: [
            {
                texto: "Irei a todos os cultos que tiver",
                afirmacao: "e com aprendizador que você aprendeu nos cultos ratista"
            },
            {
                texto: "Vou na igreja e taco fogo na igreja e coloco veneno de rato em toda a vizinhança próxima a igreja",
                afirmacao: "mas com alguns deuses do ratismo amaldiçoando sua vida por suas ações"
            }
        ]
    },
    {
        enunciado: "Na porta da sua casa bate um pregador da palavra dos ratos, você vai ouvir a palavra dos ratos?",
        alternativas: [
            {
                texto: "Prestarei atenção em cada aprendizado",
                afirmacao: "e com aprendizados ouvido por pregadores do bem,você se torna mais sabio."
            },
            {
                texto: "bater a porta na cara da pregador e xinga-lo",
                afirmacao: "e com aprendizados que você deixou de escutar,você foi se tornando alguem menos inteligente do que podia ser."
            }
        ]
    },
    {
        enunciado: "E no arrebatamento,milhares de pessoas voam em direção ao paraíso,mas você por algum motivo fica na terra",
        alternativas: [
            {
                texto: "Eu me ajoelho e percebo que deveria ter dado mais de mim para os ratos, e me arrependo de não ter feito tudo por meus deuses",
                afirmacao: "Mas, independentemente de seus pecados na terra, você pediu perdão por eles, e o Deus Mickey teve misericórdia de sua alma e te levou para o paraíso junto com os outros."
            },
            {
                texto: "Xingo todos os deuses ratos e repugno ainda mais esta religião",
                afirmacao: "E por causa de sua péssima conduta no arrebatamento, o Deus Mickey te condena ao sofrimento eterno."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();