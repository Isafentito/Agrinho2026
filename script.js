const botaoModo = document.getElementById('botao-modo');

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
function mudarInfo(opcao) {
    const titulo = document.getElementById('titulo-info');
    const paragrafo = document.getElementById('paragrafo-info');

    if (opcao === 1) {
        titulo.innerText = "O que é?";
        paragrafo.innerText = "Os diferentes meios agrícolas são o conjunto de técnicas, métodos, sistemas e tecnologias utilizados pelo ser humano para cultivar plantas e produzir alimentos, matérias-primas ou outros produtos vegetais.Em termos simples, eles representam as diferentes formas e caminhos de se praticar a agricultura. Em vez de depender apenas do método tradicional (plantar diretamente na terra comum do chão), esses meios englobam todas as alternativas que a ciência e a criatividade humana desenvolveram para adaptar o cultivo a diferentes situações — como a falta de espaço, climas difíceis, escassez de água ou solos que perderam seus nutrientes." } 
    else if (opcao === 2) {
        titulo.innerText = "Quais são os diferentes meios?";
        paragrafo.innerText =;
    } 
    else if (opcao === 3) {
        titulo.innerText = "Como fazer?";
        paragrafo.innerText = "Aqui fica o conteúdo do terceiro botão. Você tem total controle sobre o que colocar aqui pelo JavaScript.";
    }
}