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
document.querySelector('.inp1').onkeydown = function(event){
  console.log('charcode:' + event.charcode);
  console.log('code:' + event.code);
  a=event;
  console.log('event:' + a);
};

document.querySelector('.button1').onkeydown = () =>{
  localStorage.setItem('VVV',124);
  console.log('Saved');
}
document.querySelector('.button2').onkeydown = () =>{
  console.log('Button2')
  let vvv = localStorage.sgetItem('VVV');
  document.querySelector('.inp1').innerHTML = vvv;
}
