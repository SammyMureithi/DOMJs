const input = document.querySelector( "#Selectors" );
const addBtn = document.querySelector( "#add" );
const Selections = document.querySelector( ".options" );
let select = document.createElement( "select" );
const options = [];
addBtn.addEventListener( "click", ( e ) => {
    e.preventDefault();
    let inputValue = input.value.trim( " " );
    console.log( inputValue.length );
    if ( inputValue.length === 0 ) {
        alert( "Please Fill the options" )
    }
    else {
        options.push( inputValue );
        if ( options.length > 0 ) {
            select.replaceChildren( ...options );
            options.map( option => {
                let option1 = document.createElement( "option" );
                option1.value = option;
                option1.appendChild( document.createTextNode( option ) );
                select.appendChild( option1 );
                Selections.appendChild( select );
            })
            
        }
    }
    
    input.value = ""
} );
