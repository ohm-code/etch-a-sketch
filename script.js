
let colorChoice = 'purple';
let isBrushDown = false;
let currentButton = "";
let gridSize = '256';
createGrid(gridSize);
const container = document.querySelector('.container')
container.addEventListener('click',brushToggle);
function brushToggle (){
  console.log('toggle!')
  if (isBrushDown == false){
    isBrushDown = true;
    return;
  }
    if (isBrushDown == true){
      isBrushDown = false;
      return;
    }
  console.log(isBrushDown);  
}

function createBox (n){
  let width = 800/(Math.sqrt(n));
  let height = width;
  const box = document.createElement('div');
  box.classList.add('gridBox');
  box.style.display = 'flex';
  box.style.flexWrap = 'wrap';
  box.style.height = height-2+"px"; //account for margin 
  box.style.width = width-2+"px";
  box.style.backgroundColor = 'grey';
  box.style.margin = '1px';
  box.draggable = false;
  box.addEventListener('mouseover',draw);
  function draw(){
    if (currentButton == 'randombutton'){
        colorChoice = getRandomColor();
    }
    if (isBrushDown){
      box.style.backgroundColor = colorChoice;
    }  

  }
  console.log(box.className);
  return box;
}

function createGrid(n){
  const container = document.querySelector('.container');
  container.style.flexWrap = 'wrap';
  //console.log(container);
  for (let i=0; i<n; i++){
    let box = createBox(n);
    container.appendChild(box)
  }

}

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', ()=>{
    colorChoice = 'blue'; 
    console.log(colorChoice);
    currentButton = "bluebutton";
  }) 

const redButton = document.getElementById('red');
 redButton.addEventListener('click', ()=>{
      colorChoice = 'red'; 
      console.log(colorChoice);
      currentButton = "redbutton";
})   
const purpleButton = document.getElementById('purple');
  purpleButton.addEventListener('click', ()=>{
  colorChoice = 'purple'; 
  console.log(colorChoice);
  currentButton = "purplebutton";
}) 
const randomButton = document.getElementById('random');
  randomButton.addEventListener('click', ()=>{
  colorChoice = getRandomColor(); 
  console.log(colorChoice);
  currentButton = "randombutton";
}) 

const fourbyfour = document.getElementById('fourbyfour');
  fourbyfour.addEventListener('click',() => {
    gridSize = 16;
    removeAllChildNodes(container);
    createGrid(gridSize);
  });
const eightbyeight = document.getElementById('eightbyeight');
  eightbyeight.addEventListener('click', () =>{
    gridSize = 64;
    removeAllChildNodes(container);
    createGrid(gridSize);
  });
const sixteenbysixteen = document.getElementById('sixteenbysixteen');
  sixteenbysixteen.addEventListener('click', () => {
    gridSize = 256;
    removeAllChildNodes(container);
    createGrid(gridSize);
  });   


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const boxes = document.querySelectorAll('.gridBox');

const reset = document.getElementById('reset'); //make button call resetAll on click
reset.addEventListener('click',resetAll);

function resetAll(){ //sets all boxes to grey essentially resetting the board
  const boxes = document.querySelectorAll('.gridBox'); 
  boxes.forEach((me)=>me.style.backgroundColor = 'grey'); 
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

