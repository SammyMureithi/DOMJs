const menu = document.querySelector( "#menu" );

menu.insertAdjacentHTML( "beforebegin", "<h2>Web Technologies</h2>" );
menu.insertAdjacentHTML( "afterbegin", "<li>HTML</li>" );
menu.insertAdjacentHTML( "beforeend", "<li>TypeScript</li>" );
menu.insertAdjacentHTML("afterend","<h2>To continue</h2>")