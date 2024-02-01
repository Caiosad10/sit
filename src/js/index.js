const botao = document.querySelector(".btn-plataforma");
    // const é uma variavel que significa constante

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {    
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    // quando o botão estáa cinza, ele não é lido


    elementoPlataformas.classList.toggle('ativo')

    // a linha acima significa = if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }
})

