let link = document.querySelector( 'a' );

link.addEventListener( "click", ( event ) => {
    console.log( "Clicked" );
    event.preventDefault();
})