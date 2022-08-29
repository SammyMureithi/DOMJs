const current = document.querySelector( ".current" );

const nextElement = current.nextElementSibling;
console.log( nextElement );
function getAllTextContent( e ) {
    let children = [];
    if ( !e.parentNode ) {
        console.log("Has no Parent Node")
        return children;
    }
    let child = e.parentNode.firstChild;
    
    while ( child ) {
        console.log( "Has a First Child" )
        console.log( child.NodeType );
        if ( child.nodeType  === 1 ) {
               children.push(child)
        }
        child = child.nextElementSibling;
    } 
    return children;
    
}
let siblings = getAllTextContent( current );
siblingText = siblings.map( element => element.textContent );
console.log( siblingText );