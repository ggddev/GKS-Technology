let mod = document.querySelector(".modal-conteudo")
let btn = document.querySelector(".mainTwo")

btn.addEventListener("click", mostreMod)

function mostreMod(){
    mod.style.display = "block"
    btn.style.display = "none"
}

