function alterarStatus(id) {
    //selecionar o jogo pelo id
    let jogo = document.getElementById (`game-${id}`)
    //nome do jogo
    let nome = jogo.querySelector('.dashboard__item__name');
    //selecionar a imagem
    let imagem = jogo.querySelector('.dashboard__item__img');
    //selecionar o botao
    let botao = jogo.querySelector('.dashboard__item__button');
    //verificar se esta alugado
    let alugado = imagem.classList.contains('dashboard__item__img--rented');
    //alterar o estado do jogo
    //devolver o jogo
    if (alugado) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent =     'Alugar';
        alert(`O jogo ${nome.textContent} agora esta disponivel`)
    //alugar o jogo
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        alert(`O jogo ${nome.textContent} agora esta alugado`);
    }
}