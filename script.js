const botaoModo = document.getElementById('botao-modo');

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
function mudarInfo(opcao) {
    const titulo = document.getElementById('titulo-info');
    const paragrafo = document.getElementById('paragrafo-info');

    if (opcao === 1) {
        titulo.innerText = "Título da Informação 1";
        paragrafo.innerText = "Aqui você digita o texto explicativo sobre o primeiro assunto do seu site. Pode ser um parágrafo longo ou curto.";
    } 
    else if (opcao === 2) {
        titulo.innerText = "Título da Informação 2";
        paragrafo.innerText = "Este é o espaço da segunda informação. Basta apagar este texto dentro das aspas e escrever o que você quiser.";
    } 
    else if (opcao === 3) {
        titulo.innerText = "Título da Informação 3";
        paragrafo.innerText = "Aqui fica o conteúdo do terceiro botão. Você tem total controle sobre o que colocar aqui pelo JavaScript.";
    }
}