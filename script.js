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
  
  showMessage("Аня"); // Аня: текст не добавлен
  showMessage("Аня", "ghbdtn");
