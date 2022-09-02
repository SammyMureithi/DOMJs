const btn = document.querySelector( "#btnSend" );

if ( btn ) {
    btn.setAttribute( "name", "Send" );
    btn.setAttribute( "disabled", true );
}
console.log( btn );