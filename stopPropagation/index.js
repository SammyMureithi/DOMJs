const btn = document.querySelector( 'button' );
const card = document.querySelector( ".myCard" );

btn.addEventListener( "click", ( event ) => {
    console.log( " Button Clicked" );
    event.stopPropagation();
} )
document.body.addEventListener( "click", ( event ) => {
    console.log("Body Clicked")
} )
card.addEventListener( "click", ( event ) => {
    console.log( "Card Clicked" );
    event.stopPropagation();
   
})