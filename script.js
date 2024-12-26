document.getElementById("btn").onclick = function(){

document.getElementById("heading").innerText = "I am learning JS"
document.getElementById("heading").style.color = "white"
document.getElementById("heading").style.backgroundColor = "black"

}


document.getElementById("btn-reset").onclick = function(){

document.getElementById("heading").innerText = "learning java script"
    document.getElementById("heading").style.color = "black"
    document.getElementById("heading").style.backgroundColor = "transparent"

}

document.getElementById("light-on").onclick = function(){
 document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif"
 document.body.style.backgroundColor = "white"
}

document.getElementById("light-off").onclick = function(){
 document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif"
 document.body.style.backgroundColor = "black"

}

