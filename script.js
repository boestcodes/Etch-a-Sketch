const body = document.querySelector("body");
const gridSize = document.querySelectorAll("input");

const WIDTH = 640;
const HEIGHT = 640;
let divisor = gridSize.value;

const container = document.createElement("div");
container.setAttribute("style", `height: ${HEIGHT}px; width: ${WIDTH}px; border: 1px solid black`);
container.setAttribute("id", "container");
body.appendChild(container);

const pixel = document.createElement("div");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gridSize.forEach((item) =>{
  item.addEventListener("input" , () =>{
    divisor = item.value;
    let widthPixel = WIDTH/divisor-2;
    let heightPixel = HEIGHT/divisor-2;
    removeAllChildNodes(container)
    console.log(widthPixel)
    
    for(i=0; i<(divisor * divisor); i++){
      const pixel = document.createElement("div");
      pixel.setAttribute("style", `height: ${heightPixel}px; width: ${widthPixel}px; border: 1px solid black`);
      pixel.style.backgroundColor = "white";
      pixel.style.border = "1px solid hsl(50, 32%, 85%)";
      container.appendChild(pixel);
      
    }
  });
});


  

