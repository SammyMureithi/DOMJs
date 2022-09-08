const input = document.querySelector( ".input" );
const result = document.querySelector( "#result" );
const result1 = document.querySelector( "#result1" );
const result2 = document.querySelector( "#result2" );
const inputRadios = document.querySelectorAll( "input[type=radio]" );
const Options = document.querySelectorAll( "#lang" );

input.addEventListener( "change", ( e ) => {
    result.textContent = e.target.value;
} );

// lets handle the change for Radio buttons
inputRadios.forEach( inputRadio => {
    inputRadio.addEventListener( "change", ( e ) => {
        
        result2.textContent = `${inputRadio.id} checkbox changed`;
    } )
} );
Options.forEach( option => {
    option.addEventListener( "change", function ( e ) {
        result1.textContent = `Option Changed to ${option.value}`;
   })
})