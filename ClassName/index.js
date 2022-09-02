const h1 = document.querySelector( "#h1" );
const h2 = document.querySelector( "#h12" );
const h3 = document.querySelector( "#h13" );

h1.className = "class0";
h2.classList.add("class2");
h3.className = "changed";

console.log( h1 );
console.log( h2 );
console.log( h3 );
console.log( h2.classList );