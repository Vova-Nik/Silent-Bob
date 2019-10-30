console.clear();
console.log("script loaded");
console.log("-1/0 = " + -1/0);

let myDiv = document.querySelector("#test");
myDiv.innerHTML = 'nnn ';
myDiv.innerHTML += '\n0';
//  myDiv.innerHTML += Boolean(null<=0);
let i = 3;


function showMessage(from, text = "текст не добавлен") {
    console.log( from + ": " + text );
  }
  
  // showMessage("ANT"); // Аня: текст не добавлен
  // showMessage("ANT", "ghbdtn");

  const button = document.querySelector('button');
  const input = document.querySelector('.age');
  button.onclick = ()=>{
    let num = + input.value;
    console.log(num);
    if(num >= 16)
      console.log('welcom');
    else
      console.log('Bye');
  }

  let a = 3;

switch (a) {
  case 3:
    {
      console.log ('Маловато' );
      console.log ('Маловато1' );
      break;
    }
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
    
}
