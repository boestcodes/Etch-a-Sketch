const body = document.querySelector("body");
const gridSize = document.querySelectorAll("input");
const canvas = document.querySelector("#canvas");

const WIDTH = 320;
const HEIGHT = 320;
let divisor = gridSize.value;

const container = document.createElement("div");
container.setAttribute("style", `height: ${HEIGHT}px; width: ${WIDTH}px; border: 1px solid black`);
container.setAttribute("id", "container");
canvas.appendChild(container);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gridSize.forEach((item) =>{
  item.addEventListener("input" , () =>{
    divisor = item.value;
    //let widthPixel = WIDTH/divisor-2;
    //let heightPixel = HEIGHT/divisor-2;
    let heightPixel = 100/divisor
    let widthPixel = 100/divisor
    removeAllChildNodes(container)
    console.log(widthPixel)
    
    for(i=0; i<(divisor * divisor); i++){
      console.log(i)
      const pixel = document.createElement("div");
      pixel.setAttribute("style", `height: ${heightPixel}%; width: ${widthPixel}%`);
      pixel.style.backgroundColor = "green";
      //pixel.style.border = "1px solid hsl(50, 32%, 85%)";
      container.appendChild(pixel);
      
    }
  });
});


  