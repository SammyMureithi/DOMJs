const paragraph = document.getElementById( "message" );
const paragraphStyles = getComputedStyle( paragraph );
console.log( "Styles of Paragraph" );
console.log( paragraphStyles.padding );
//we could also get styles of specific elements
const style=getComputedStyle(paragraph,"::first-letter")
console.log( style.fontSize );