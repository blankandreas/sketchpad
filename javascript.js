 const container = document.querySelector("#container")
 const square = document.querySelector("#square")


 function grid(){
    let size = document.createElement("div")
    size.classList.add("sketchpad")
  /*   let newContent = document.createTextNode("Hi there and greetings!")
    size.appendChild(newContent); */
    square.appendChild(size)

 }

 for (let i = 0; i < 100; i++) {
  grid()
}