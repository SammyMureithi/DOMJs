const RadioGroup = document.querySelector( "#radioGroup" );
const languages = ["Html", "Css", "React", "Vue", "Angular"];

for(let language of languages){
    let label = document.createElement( 'label' );
    let input = document.createElement( "input" );
    input.type = "radio";
    input.name = "languages";
    input.value = language;
    label.appendChild( input );
    label.setAttribute( "for", language );
    label.appendChild( document.createTextNode( language ) );
     RadioGroup.appendChild( label );
}
const RadioBtn = document.querySelectorAll( "input" );
RadioBtn.forEach( Radio => {
    Radio.addEventListener( "click", () => {
      
        if ( !Radio.checked ) {
            console.log( "Already Checked" );
        }
        else {
            console.log( Radio.value+" Check successful...")
        }
    })
})
