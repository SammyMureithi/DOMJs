const menu = document.getElementById( "menu" );

const langs = ['Css', "ReactJs", "Python", "DevOpts"];

const node = langs.map( lang => {
    let li = document.createElement( "li" );
    li.textContent = lang;
    return li;
} );
menu.prepend( ...node );