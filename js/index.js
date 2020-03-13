// Your code goes here

//prevent default on a tags


const lonks = document.querySelectorAll("a");

for (let i = 0; i < lonks.length; i++) {
    lonks[i].addEventListener("click", (event) => {
        event.preventDefault();
    });
}



//1 nav switch on double click
let toggle=0;
const flexPivot=function(){
  if(toggle===0){
  navBar.style.flexDirection='column';
  toggle=1
  }
  else{
    navBar.style.flexDirection='row';
    toggle=0
  };
}
const navBar=document.querySelector('nav');
navBar.addEventListener('dblclick',function (event){
  event.stopPropagation();
  flexPivot();
});


//2 background color randomizer on scroll wheel
const hexHelper=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const randyHelper=function(arr){
  hold=Math.floor(Math.random()*arr.length);
  return arr[hold];
}
const hexinator= function(){
  let hexHolder=['#'];
  for(i=0;i<6;i++){
    hexHolder.push(randyHelper(hexHelper));
  }
  return hexHolder.join("");
}
const recolor=function(){
  this.style.backgroundColor=hexinator();
}
const bodyGrab=document.querySelector('body');
bodyGrab.addEventListener('wheel',recolor)


//3 page load warning label on load
document.addEventListener('load',alert('WARNING: This page may potentially trigger seizures for people with photosensitive epilepsy.'));


//4 button color randomizer on click
let btnColor = document.getElementsByClassName("btn");
btnColor[0].addEventListener('click',recolor);
btnColor[1].addEventListener('click',recolor);
btnColor[2].addEventListener('click',recolor);


//5 h1 color randomizer on copy
document.addEventListener('copy',(event)=>alert('Thief!'));

//6 ahh alert on resize

window.addEventListener('resize',((event)=>alert('AAAAHHHHH!!!!!')));


//7 shy fun bus alert on mouseover
const funBus=document.getElementsByTagName("img");
funBus[0].addEventListener('mouseover',((event)=>
alert('Fun bus is shy. do not look at fun bus.')));


//8 typing alert on keydown
document.addEventListener('keydown',(event)=>
alert("Why are you trying to type? There's no text input field here."));

//9
document.addEventListener('contextmenu',(event)=>
alert('wut?'));

//10

bodyGrab.addEventListener('mouseleave',(event)=>
alert("Where are you going?"));

//for prevent prop
window.addEventListener('dblclick',(event)=>
alert("*click*"));