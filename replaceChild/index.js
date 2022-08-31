const menu = document.querySelector( "#menu" );

const toReplace = document.createElement( "li" );
toReplace.textContent = "Home";
menu.replaceChild( toReplace, menu.firstElementChild );