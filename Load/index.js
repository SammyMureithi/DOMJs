const logo = document.querySelector( "img" );

window.addEventListener( "load", () => {
    console.log( "Page sucessfully loaded" );

} );

logo.addEventListener( "load", () => {
    console.log("Image load Successful...")
} )
logo.src = "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg";