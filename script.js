const body = document.querySelector("body");
const gridSize = document.querySelector("input[name=pixels]").value;

const WIDTH = 400;
const HEIGHT = 400;
let divisor = gridSize.value;

const widthPixel = WIDTH/divisor-2;
const heightPixel = HEIGHT/divisor-2;

const container = document.createElement("div");
container.setAttribute("style", `height: ${HEIGHT}px; width: ${WIDTH}px; border: 1px solid black`);
container.setAttribute("id", "container");
body.appendChild(container);
console.log(gridSize)



const pixel = document.createElement("div");

gridSize.addEventListener("change", () =>{
  console.log(gridSize)
  divisor = gridSize;
  for(i=0; i<(divisor * divisor); i++){
    const pixel = document.createElement("div");
    pixel.setAttribute("style", `height: ${heightPixel}px; width: ${widthPixel}px; border: 1px solid black`);
    container.appendChild(pixel);
  }
  
});






