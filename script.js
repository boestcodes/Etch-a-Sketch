const WIDTH = 320;
const HEIGHT = 320;

let pixels = [];

const body = document.querySelector("body");
const gridSize = document.querySelectorAll("input");
const canvas = document.querySelector("#canvas");
const container = document.createElement("div");
container.setAttribute("style", `height: ${HEIGHT}px; width: ${WIDTH}px; border: 1px solid black`);
container.setAttribute("id", "container");
canvas.appendChild(container);

console.log("Start")
//let divisor = gridSize.value;


//draw grid one time to start with default value
drawGrid(16)

//remove existing pixels
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//draw the grid
function drawGrid(divisor){

  let heightPixel = 100/divisor;
  let widthPixel = 100/divisor;

  for(i=0; i<(divisor * divisor); i++){
    
    const pixel = document.createElement("div");
    pixel.setAttribute("style", `height: ${heightPixel}%; width: ${widthPixel}%`);
    pixel.style.backgroundColor = "green";
    pixel.addEventListener(("mouseover"), ()=> {
      pixel.style.backgroundColor = "yellow"
    })
    //pixel.style.border = "1px solid hsl(50, 32%, 85%)";
    container.appendChild(pixel);
    
  }
  console.log(pixels)
}

//iterate through radio buttons
gridSize.forEach((item) =>{
  item.addEventListener("input" , () =>{
    removeAllChildNodes(container);
    drawGrid(item.value);
  });
});





  