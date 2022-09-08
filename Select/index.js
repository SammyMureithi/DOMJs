const selector = document.querySelector( ".select" );

const selections = ["Html", "Javascript", "Css", "React", "Php", "NodeJs", "Vue"];
let select = document.createElement( "select" );
const selection = selections.map( option => {
    let optionNode = document.createElement( "option" );
    // select.setAttribute( "multiple", true );
    optionNode.value = option;
    optionNode.appendChild( document.createTextNode( option ) );
    select.appendChild( optionNode );
} );
selector.appendChild( select );
const myOptions = document.querySelectorAll( "option" );
myOptions.forEach( element => {
    element.addEventListener( "click", ( e ) => {
        console.log( e.target.value );
    })
})
