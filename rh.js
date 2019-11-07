a =  new Map();
a.set(123,"Hi vova");
a.set(124,"Hi Victor");

let tempo = 123;
console.log(a);
console.log(a.values());
let b = a.values();

for(ind in b)
{
  console.log(`${ind} ${b[ind]}`);
}

