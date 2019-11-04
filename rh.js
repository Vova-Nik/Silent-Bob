console.clear();
console.log("script loaded");

let btnOk = document.querySelector('#button1');

const parag = document.querySelector('.lorem');
const btnChange = document.querySelector('.changeStyleBtn');

btnChange.onclick = () => {
  console.log(`btnChange pressed`);
  if (btnChange.getAttribute('data-state') == 0) {
    parag.classList.add('parag1');
    btnChange.setAttribute('data-state', '1');
    console.log(`Button state = ${btnChange.getAttribute('data-state')}`);
  }
  else {
    parag.classList.remove('parag1');
    btnChange.setAttribute('data-state', '0');
    console.log(`Button state = ${btnChange.getAttribute('data-state')}`);
  }
}

parag.style.width = '50%';
const testDiv = document.querySelector('#testDiv');
//testDiv.innerHTML = 'Hi Vova <br> Ewrth is OK';



const mObject = {
  'a': 'ad vova',
  'b': 'bd petya',
  'c': 'cd alla',
  'd': 'dd Lalisa'
};


for(let k in mObject){
  console.log('k = ' + mObject[k]);
 }

a = new Set();
a.add('Vova');
a.add('Peter');
a.add('Nik');
console.log('a = ' + a);
console.log(a);

aa = Array(a);
console.log(aa);


let o = [4, 5, 12, 200, 1, 0, -2];
let b = o.map(function(item, index){
  //console.log(`item = ${item}`);
  return item;
})
console.log(o);

