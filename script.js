console.clear();
console.log("script loaded");

let btn = document.querySelector('#button1');

btn.onclick = () => {
  console.log(`btn on click call point`);
  parag.classList.add('parag1');
  obj.objPrintVars();
}

let obj = {
  a: 1,
  b: 2,

  objPrintVars() {
    console.log(`objFunc is running a = ${this.a}  b = ${this.b}`);
  }
}

console.log(`a = ${this.a}  b = ${this.b}`);

function oneFunc() {
  console.log(`oneFunc is running`);
}

const parag = document.querySelector('.lorem');
parag.style.width = '200px';
parag.style.backgroundcolor = '#000000';
parag.innerHTML = `1234`;
parag.classList.add(contenteditable = 'true');
console.log(parag.style);

