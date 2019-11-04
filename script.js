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

var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};



