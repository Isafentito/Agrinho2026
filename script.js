const botaoModo = document.getElementById('botao-modo');

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function mudarInfo(opcao) {
    const titulo = document.getElementById('titulo-info');
    const paragrafo = document.getElementById('paragrafo-info');

    if (opcao === 1) {
        titulo.innerText = "O que é?";
        paragrafo.innerText = "Os diferentes meios agrícolas são o conjunto de técnicas, métodos, sistemas e tecnologias utilizados pelo ser humano para cultivar plantas e produzir alimentos, matérias-primas ou outros produtos vegetais. Em termos simples, eles representam as diferentes formas e caminhos de se praticar a agricultura. Em vez de depender apenas do método tradicional (plantar diretamente na terra comum do chão), esses meios englobam todas as alternativas que a ciência e a criatividade humana desenvolveram para adaptar o cultivo a diferentes situações — como a falta de espaço, climas difíceis, escassez de água ou solos que perderam seus nutrientes.";
    } 
    else if (opcao === 2) {
        titulo.innerText = "Quais são os diferentes meios?";
        paragrafo.innerText = `Cultivo em Substrato.
Hidroponia.
Aquaponia.
Agricultura Vertical.
Agrofloresta.`;
    } 
    else if (opcao === 3) {
        titulo.innerText = "Como fazer?";
        paragrafo.innerText = `Como fazer Cultivo em Substrato: Consiste em escolher recipientes como vasos, baldes ou caixotes de feira e preenchê-los com uma mistura rica de terra preta, adubo orgânico (compostagem) e fibra de coco. Dessa forma, as raízes crescem protegidas e bem alimentadas, sem nunca entrar em contato com o solo infértil do chão.

Como fazer Hidroponia Caseira: Monta-se uma estrutura utilizando tubos de PVC nivelados, por onde circula água misturada com uma solução de nutrientes minerais. As plantas são encaixadas em furos ao longo do tubo, mantendo suas raízes suspensas diretamente nessa água enriquecida, dispensando totalmente o uso de terra.

Como fazer Agricultura Vertical: Aproveita-se o espaço das paredes, muros ou paletes empilhados para fixar suportes de plantio, como garrafas PET cortadas e interligadas por cordas. As plantas são cultivadas em camadas, uma em cima da outra, maximizando a produção em locais cimentados ou quintais muito pequenos.

Como fazer Aquaponia: Conecta-se um tanque de criação de peixes a um sistema de tubos com plantas (hidroponia). A água com os resíduos dos peixes é bombeada até as plantas, que absorvem esses dejetos como adubo natural potente. Ao limparem a água, ela retorna filtrada e oxigenada para o tanque dos peixes.

Como fazer Agrofloresta (Sintropia): Planta-se no mesmo terreno uma combinação estratégica de árvores grandes, frutíferas, arbustos e hortaliças. A matéria orgânica gerada pelas podas e pelas folhas que caem é depositada sobre o chão, criando uma camada protetora que recupera a vida, a umidade e a fertilidade do solo degradado com o tempo.`;
    }
}