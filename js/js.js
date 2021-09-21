let button = document.getElementById("icon")
let links = document.getElementById("links")
let cont = 0
button.addEventListener("click", function(){
  if(cont == 0){
    links.className="links one"
    cont = 1
  }
  else{
links.classList.remove("two")
links.className = ("enlace uno")
cont = 0
}
})