const image = document.querySelector(".lampada")
const btnLigar = document.querySelector(".btn-ligar")
const btnDesligar = document.querySelector(".btn-desligar")

btnLigar.addEventListener("click", function() {
    image.src = "image/ligada.jpg"
})

btnDesligar.addEventListener("click", function() {
    image.src = "image/pngwing.com.png"
})

image.addEventListener("mouseenter", function() {
    image.src = "image/ligada.jpg"
})

image.addEventListener("mouseout", function() {
    image.src = "image/pngwing.com.png"
})

