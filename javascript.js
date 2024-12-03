 const container = document.querySelector("#container")
 const square = document.querySelector("#square")
 const reset = document.querySelector("#reset")
 const color = document.querySelector("#color")
 
 reset.addEventListener("click", function() {
  inicial()
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

function inicial (){
square.addEventListener("mouseover", function(e) {
  const hoverGrid = e.target;
  if(hoverGrid.classList.contains("sketchpad")) {
      hoverGrid.style.backgroundColor = ("black");
  }
})
}
inicial() 


color.addEventListener("click", ()=>colorindo())

function colorindo(){
 square.addEventListener("mouseover", function(e) {
    const hoverGrid = e.target;
    if(hoverGrid.classList.contains("sketchpad")) {
       
        hoverGrid.style.backgroundColor = randomColor();
    }

  })
}

function randomColor () {
let r =  Math.floor(Math.random()*255);
let g =  Math.floor(Math.random()*255);
let b =  Math.floor(Math.random()*255);
let a =  Math.random()*1

let colorFinal = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

console.log(colorFinal)
return colorFinal

   }


 

   
