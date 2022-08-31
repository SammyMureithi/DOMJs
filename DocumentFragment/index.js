const language = document.querySelector( "#language" );

const languages = ["Js", "ReactJs", "Css", "Html", "Ruby", "Php", "Python", "Rails"];

const fragment = document.createDocumentFragment();

languages.map( element => {
    let li = document.createElement( "li" );
    li.innerHTML = element;
    fragment.appendChild( li );

} );
language.appendChild( fragment );