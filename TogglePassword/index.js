const input = document.querySelector( "input" );

const btn = document.querySelector( "button" );
console.log( btn.textContent );
if ( input.type == "password" ) {
    btn.textContent = "Show";
}
else {
    btn.textContent="Hide";
}
btn.addEventListener( "click", ( e ) => {
    if ( input.type == "password" ) {
        btn.textContent = "Hide";
        input.setAttribute( "type", "text" );
    }
    else {
        btn.textContent = "Show";
        input.setAttribute( "type", "password" );
    }
})