const psw = document.querySelector( "#psw" );

psw.addEventListener( "focus", ( event ) => {
    event.target.style.background = "yellow";
} )
psw.addEventListener( "blur", ( event ) => {
    event.target.style.background = " ";
} )