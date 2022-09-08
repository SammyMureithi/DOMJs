const message = document.querySelector( "input" );

const display = document.querySelector( "h1" );
message.addEventListener( "keyup", ( e ) => {
    display.textContent = e.target.value;
})