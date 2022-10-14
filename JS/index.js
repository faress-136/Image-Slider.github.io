var allImages = Array.from(document.querySelectorAll('.item img')) 
var lightBoxContainer = document.getElementById("lightBoxContainer")
var content = document.querySelector(".content img")
var imgSection = document.getElementById("imgSection")
var exitBtn = document.getElementById("exitBtn")
var nextBtn = document.getElementById("nextBtn")
var prevBtn = document.getElementById("prevBtn")
var currentIndex

console.log(lightBoxContainer)

imgSection.addEventListener('click', function(e){
    e.stopPropagation()
})

lightBoxContainer.addEventListener('click', function(){
    closeWindow()
})


nextBtn.addEventListener('click',function(){
    nextImg()
})

prevBtn.addEventListener('click',function(){
    prevImg()
})

exitBtn.addEventListener('click',function (){
    closeWindow()
})

for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click',function(e){
    var currentImage = e.target.getAttribute("src")
    console.log(currentImage)
    content.setAttribute("src",currentImage)
    currentIndex = allImages.indexOf(e.target)
    lightBoxContainer.classList.replace("d-none","d-flex")
   })   
}

function closeWindow(){
    lightBoxContainer.classList.replace("d-flex","d-none")

}

function nextImg(){
    currentIndex++
    if(currentIndex >= allImages.length){
        currentIndex = 0
    }
    var nextImg = allImages[currentIndex].getAttribute("src")
    content.setAttribute("src",nextImg)

}

function prevImg(){
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = allImages.length - 1
    }
    var prevImg = allImages[currentIndex].getAttribute("src")
    content.setAttribute("src",prevImg)

}

document.addEventListener('keyup', function(e){
    console.log(e);
    switch(e.key){
        case 'ArrowRight':
            nextImg()
            break
        case 'ArrowLeft':
            prevImg()
            break
        case 'Escape':
            closeWindow()
            break
    }
})