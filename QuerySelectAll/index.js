const myNavs = document.querySelectorAll( "nav > ul > li" );
 myNavs.forEach( element => {
     element.addEventListener( "mouseover", function () {
        element.className="mouseover"
     } )
     element.addEventListener( "mouseleave", () => {
         element.className="myNav"
     })
})