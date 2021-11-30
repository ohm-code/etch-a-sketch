
let colorChoice = 'purple';
let isBrushDown = false;
let currentButton = "";
let gridSize = '256';


const blueButton = document.getElementById('blue');
const container = document.querySelector('.container');
const redButton = document.getElementById('red');
const purpleButton = document.getElementById('purple');
const randomButton = document.getElementById('random');
const sixteenbysixteen = document.getElementById('sixteenbysixteen');
const fourbyfour = document.getElementById('fourbyfour');
const eightbyeight = document.getElementById('eightbyeight');
const boxes = document.querySelectorAll('.gridBox');
const reset = document.getElementById('reset'); //make button call resetAll on click


container.addEventListener('click',brushToggle);
reset.addEventListener('click',resetAll);

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
  return box;
}

function createGrid(n){
  const container = document.querySelector('.container');
  container.style.flexWrap = 'wrap';
  //console.log(container);
  for (let i=0; i<n; i++){
    let box = createBox(n);
    container.appendChild(box)
}}


blueButton.addEventListener('click', ()=>{
    colorChoice = 'blue'; 
    console.log(colorChoice);
    currentButton = "bluebutton";
}) 

redButton.addEventListener('click', ()=>{
    colorChoice = 'red'; 
    console.log(colorChoice);
    currentButton = "redbutton";
})   

purpleButton.addEventListener('click', ()=>{
    colorChoice = 'purple'; 
    console.log(colorChoice);
    currentButton = "purplebutton";
}) 

randomButton.addEventListener('click', ()=>{
    colorChoice = getRandomColor(); 
    console.log(colorChoice);
    currentButton = "randombutton";
}) 

fourbyfour.addEventListener('click',() => {
    gridSize = 16;
    removeAllChildNodes(container);
    createGrid(gridSize);
});

eightbyeight.addEventListener('click', () =>{
    gridSize = 64;
    removeAllChildNodes(container);
    createGrid(gridSize);
});

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

function resetAll(){ //sets all boxes to grey essentially resetting the board
  const boxes = document.querySelectorAll('.gridBox'); 
  boxes.forEach((me)=>me.style.backgroundColor = 'grey'); 
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      alert( "tablet functionality not supported yet, please access from your browser");
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      alert( "mobile not supported yet, please access from your computer browser");
  }
  return "desktop";
};

deviceType();
createGrid(gridSize);