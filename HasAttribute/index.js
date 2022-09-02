const btn = document.getElementById( "btn" );

if ( btn ) {
    let disabled = btn.hasAttribute( 'disabled' );
    console.log( "Button disabled is set to " + disabled );
}