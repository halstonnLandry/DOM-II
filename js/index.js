// Your code goes here


//1 nav switch on double click
let toggle=0;
const flexPivot=function(){
  
  if(toggle===0){
  this.style.flexDirection='column';
  toggle=1
  }
  else{
    this.style.flexDirection='row';
    toggle=0
  };
}
const navBar=document.querySelector('nav');
navBar.addEventListener('dblclick',(flexPivot));


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
console.log(hexinator());


//3 page load warning label on load
document.addEventListener('load',alert('WARNING: This page may potentially trigger seizures for people with photosensitive epilepsy.'));


//4 button color randomizer on click
let btnColor = document.getElementsByClassName("btn");
btnColor[0].addEventListener('click',recolor);
btnColor[1].addEventListener('click',recolor);
btnColor[2].addEventListener('click',recolor);


//5 h1 color randomizer on copy
let h1color=document.getElementsByClassName('logo-heading');
console.log(h1color);
h1color[0].addEventListener('copy',recolor);

// ahh alert on right click
document.addEventListener('contextmenu',alert('AAAAHHHH!!!!'));
