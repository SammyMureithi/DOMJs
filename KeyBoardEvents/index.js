const msg = document.querySelector( "#message" );

msg.addEventListener( "keydown", ()=>{
    console.log("KeyDown")
} )

msg.addEventListener( "keyup", ()=>{
    console.log("KeyUp")
} )
msg.addEventListener( "keydown", ( event ) => {
    console.log( `Key: ${event.key} and Code: ${event.code}` );
})