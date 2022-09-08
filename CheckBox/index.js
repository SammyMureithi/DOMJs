const container = document.querySelector( "#checkBox" );

const colors = ["Red", "Green", "Yellow", "White", "Purple"];

const checkBoxs = colors.map( color => {
    let label = document.createElement( "label" );
    let id = color;
    label.setAttribute( "for", id );
    let checkBox = document.createElement( "input" );
    checkBox.type = "checkBox";
    checkBox.name = `color-${id}`;
    
    checkBox.id = id;
    label.appendChild( checkBox );
    label.appendChild( document.createTextNode( color ) );
    container.appendChild( label )
    return label
} );

