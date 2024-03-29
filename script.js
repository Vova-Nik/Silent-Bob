"use strict"
console.clear();
console.log("script loaded");

// let btnOk = document.querySelector('#button1');

const parag = document.querySelector('.lorem');
parag.style.width = '80%';

parag.onmouseenter = () => {
  console.log('Mouse catched');
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

let myCount = outer(0);

//----------------------closures-----------------------------

document.querySelector('.button1').onclick = function (event) {
  console.log('Button1');
  myCount(1);
  document.querySelector('.first').innerHTML = myCount(4);
  return false;
}
document.querySelector('.button2').onclick = function (event) {
  console.log('Button2');
  myCount(2);
  document.querySelector('.first').innerHTML = myCount(4);
  return false;
}
document.querySelector('.button3').onclick = function (event) {
  console.log('Button2');
  myCount(3);
  document.querySelector('.first').innerHTML = myCount(4);
  return false;
}

document.querySelector('.button').ondblclick = function (event) {
  console.info('Button dblclk');
  return false;
}

const myImage = document.querySelector('img');

let myRequest = new Request('flowers.jpg');

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error('HTTP error, status = ' + response.status);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
