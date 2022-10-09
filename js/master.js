let burgerIcon = document.getElementById("burger-icon")
let nav = document.getElementById("nav")
let closeIcon = document.getElementById("close")
let up = document.getElementById("up")

burgerIcon.onclick = function(){
    nav.style.display = "block"
    burgerIcon.style.visibility = "hidden"
    closeIcon.style.visibility = "visible"
    closeIcon.style.display = "block"
}
closeIcon.onclick = function(){
    nav.style.display = "none"
    burgerIcon.style.visibility = "visible"
    closeIcon.style.visibility = "hidden"
    closeIcon.style.display = "none"
}
window.onscroll = function(){
    if(scrollY >= 400){
        up.style.visibility = "visible"
        up.style.opacity = "0.7"
        up.style.transform = "translateY(0px)"
    }
    else{
        up.style.visibility = "hidden"
        up.style.opacity = "0"
        up.style.transform = "translateY(50px)"
    }
}
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}