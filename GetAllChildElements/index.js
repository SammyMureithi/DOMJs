const menu = document.querySelector( "#menu" );
const textContent = [];
const current = document.querySelector( ".current" );
const parent = current.parentNode;
const numberOfChildren = parent.children.length;

for ( i = 0; i < numberOfChildren; i++ ){
    textContent.push( menu.children[i].textContent );
    
}
console.log( textContent );