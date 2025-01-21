function alterarStatus(id) {
    //selecionar o jogo
    let jogo = document.getElementById (`game-${id}`)
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
    //alugar o jogo
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    }
}