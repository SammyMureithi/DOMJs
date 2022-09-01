const app = document.querySelector( "#app" );

const langs = ["Python", "ReactJs", "Css", "TypeScript"];

const nodes = langs.map( lang => {
    let li = document.createElement( "li" );
    li.textContent = lang
    return li;
} )
app.append( ...nodes );