const menu = document.getElementById( "menu" );
const clonedMenu = menu.cloneNode( true );
clonedMenu.id = "ClonedNode";
document.body.appendChild( clonedMenu );