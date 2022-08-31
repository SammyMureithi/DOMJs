const menus = document.querySelector( "#menu" );

const li = document.createElement( "li" );
li.textContent = "Services";
menus.insertAfter( li, menus.lastChild );