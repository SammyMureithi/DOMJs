const btn = document.getElementById( "btn" );

function showAlert(event) {
    alert( event.type );
}
btn.addEventListener( "click", showAlert );
//we could also add multiple event listeners
btn.addEventListener( "click", ( event ) => {
    console.log( event.type );
} );
// we could also get rid of eventListners as follows
//we cannot remove an event listener using anonymous function 
btn.removeEventListener( "click", showAlert );