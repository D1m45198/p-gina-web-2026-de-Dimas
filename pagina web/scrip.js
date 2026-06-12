// BOTÕES DE CURTIR

const botoesReacao = document.querySelectorAll(
    "article button"
);

botoesReacao.forEach((botao) => {

    let ativo = false;

    botao.addEventListener("click", () => {

        const contador = botao.querySelector("span");

        let valor = Number(contador.textContent);

        if(!ativo){
            contador.textContent = valor + 1;
            ativo = true;

            botao.style.backgroundColor = "#88B257";
            botao.style.color = "white";
        }
        else{
            contador.textContent = valor - 1;
            ativo = false;

            botao.style.backgroundColor = "";
            botao.style.color = "";
        }
    });

});


// MODO ESCURO

const btnTemaEscuro =
document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

