"use strict"
console.clear();
console.log("script loaded");

let btnOk = document.querySelector('#button1');

const parag = document.querySelector('.lorem');
parag.style.width = '50%';

parag.onmouseenter = () => {
  console.log('Mouse catched');
  //parag.style.background = '#3d0505';
};
let a = {};
document.querySelector('.inp1').onkeydown = function (event) {
  console.log('charcode:' + event.charcode);
  console.log('code:' + event.code);
  a = event;
  console.log('event:' + a);
};


//----------------------closures-----------------------------
function outer(closed) {
  let counter = closed;
   return function innerFunc(cc) {
    switch(cc){
    case 1:
      counter++;
      break;
    case 2:
      counter--;
      break;
    case 3:
      counter = 0;
      break;
    }
    return counter;
  }
}

let myCount = outer(128);

//----------------------closures-----------------------------

document.querySelector('.button1').onclick = function (event) {
  console.log('Button1');
  myCount(1);
  document.querySelector('.first').innerHTML = myCount(4);
}
document.querySelector('.button2').onclick = function (event) {
  console.log('Button2');
  myCount(2);
  document.querySelector('.first').innerHTML = myCount(4);
}
document.querySelector('.button3').onclick = function (event) {
  console.log('Button2');
  myCount(3);
  document.querySelector('.first').innerHTML = myCount(4);
}



document.querySelector('.first').innerHTML = '0';
// document.querySelector('.first').innerHTML = myCount(3);
counter = 345;
