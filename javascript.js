 const container = document.querySelector("#container")
 const square = document.querySelector("#square")
 const reset = document.querySelector("#reset")
 
 
 reset.addEventListener("click", function() {
  const allGrids = document.querySelectorAll(".sketchpad");
  allGrids.forEach(gridToRemove => {
    gridToRemove.remove();
});
  })




 reset.addEventListener("click", ()=>choice())

 

 function choice(){
 
    a = prompt("Escolha um valor de 0 a 100")
    

    for (let i = 0; i < a*a; i++) {   
       let size = document.createElement("div")
       size.classList.add("sketchpad")
       square.appendChild(size)
       size.style.height = 500/a + "px";
       size.style.width = 500/a + "px";
    }
  
 }
 choice()

/*  function grid(){
 let a = choice();
 for (let i = 0; i < a*a; i++) {

    let size = document.createElement("div")
    size.classList.add("sketchpad")
    square.appendChild(size)
    size.style.height = 500/a + "px";
    size.style.width = 500/a + "px";
 }
}
grid() */

square.addEventListener("mouseover", function(e) {
  const hoverGrid = e.target;
  if(hoverGrid.classList.contains("sketchpad")) {
      hoverGrid.style.backgroundColor = ("black");
  }
})