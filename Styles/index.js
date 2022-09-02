const content = document.querySelector( "#content" );
function css( e, styles ) {
    for ( const property in styles ) {
        e.style[property]=styles[property]
    }
}

css(content,{background:"yellow",color:"red",fontSize:"2rem"})