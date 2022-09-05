const box = document.querySelector( ".box" );
const styles = getComputedStyle( box );

let width = box.offsetWidth;
let height = box.offsetHeight;
console.log("Offset[Height/width] always include paddings and borders")
console.log( width );
console.log( height );
console.log( "client[Height/width] always includes paddings but not borders" );
console.log( box.clientWidth );
console.log( box.clientHeight );
//we could also get the margin of our elements
console.log( parseInt( styles.marginBottom ) );
console.log( styles.marginTop );
console.log( parseInt( styles.marginLeft ) );
console.log( styles );
//we could also get the border of our elements
console.log( styles.borderBottom );
console.log( styles.borderLeftWidth );

//lets try getting the height and width of our window
let windowWidth = window.innerWidth 

console.log(windowWidth)