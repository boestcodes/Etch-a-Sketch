const WIDTH = 480;
const HEIGHT = 480;
let activeRes = 16;
let btnActive = false;

let pixels = [];

const body = document.querySelector("body");
const gridSize = document.querySelectorAll("input[name='pixels']");
const color = document.querySelector("#chooseColor");
const resetBtn = document.querySelector("#resetBtn");
const eraseBtn = document.querySelector("#eraseBtn")

const canvas = document.querySelector("#canvas");
const container = document.createElement("div");
container.setAttribute("style", `height: ${HEIGHT}px; width: ${WIDTH}px; border: 1px solid black`);
container.setAttribute("id", "container");
canvas.appendChild(container);

console.log("Start")
//let divisor = gridSize.value;


//draw grid one time to start with default value
drawGrid(activeRes)

//remove existing pixels
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//draw the grid
function drawGrid(divisor){
  activeRes = divisor;
  let heightPixel = 100/divisor;
  let widthPixel = 100/divisor;

  for(i=0; i<(divisor * divisor); i++){
    
    const pixel = document.createElement("div");
    pixel.setAttribute("style", `height: ${heightPixel}%; width: ${widthPixel}%`);
    pixel.style.backgroundColor = "white";
    pixel.style.boxShadow = "inset 0 0 1px #000"
    pixel.addEventListener(("mouseover"), ()=> {
      if(isMouseDown){
        if(btnActive){
          pixel.style.backgroundColor = "white";  
        }
        else{
          pixel.style.backgroundColor = color.value;
        }
      }
    })
    
    pixel.addEventListener(("click"), ()=> {
      if(btnActive){
        pixel.style.backgroundColor = "white";  
      }
      else{
        pixel.style.backgroundColor = color.value;
      }
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

resetBtn.addEventListener(("click"), ()=>{
  removeAllChildNodes(container);
  drawGrid(activeRes)
});

eraseBtn.addEventListener(("click"), () => {
  btnActive = !btnActive;

  if(btnActive){
    eraseBtn.classList.add("active");
  }
  else{
    eraseBtn.classList.remove("active");
  }
  console.log(btnActive)

});

var isMouseDown = false;
document.addEventListener("mousedown", () =>
{ 
  isMouseDown = true;
});
document.addEventListener("mouseup", () =>
{
  isMouseDown = false;
});



  