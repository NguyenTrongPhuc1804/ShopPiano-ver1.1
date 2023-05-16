const imgList = document.querySelectorAll(".item-img img")
let imgPiano = document.querySelector(".img-modal")

imgList.forEach((img, idx) => {
    img.addEventListener("click", (e) => {

        const imgSrc = e.target.src
        imgPiano.src = imgSrc
    })
})
