let modal = document.querySelector(".modal-planos")
let botao = document.querySelector(".botao-planos")
let btnFechar = document.querySelector(".fecharModal")

botao.addEventListener("click", mostrarModal)
btnFechar.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}
