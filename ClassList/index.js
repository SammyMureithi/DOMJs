const div = document.querySelector( "#content" );
//lets check all the classList we have
for (let names of div.classList ) {

    console.log(names)
}
console.log( "Class at the start" )
console.log( div.classList );
//we could add a className to a classList
console.log("New class being added...")
div.classList.add( "new_Class" );
console.log( div.classList );

//we could also remove className from a class
//we could also remove multiple classes seperating them with commas

console.log("main being removed...")
div.classList.remove( "main" );
console.log( div.classList );

//we could also replace our class names
console.log( "Replacing red with green ..." );
div.classList.replace( "red", "green" );
console.log( div.classList );
//we could also check if an element contains a class
console.log("No red color")
console.log( div.classList );
console.log( div.classList.contains( "red" ) )

/**
 * toggle() removes a className from a element in case the element contains the className
 * It also adds the className in case the element was found not to contain the className
 */
//here we are adding a className called red which we don't have
console.log( "Red being added using toggle() method ..." );
div.classList.toggle( "red" )
console.log( div.classList );
//here we are removing the className red since it exists
console.log( "Red being removed toggle() method ..." );
div.classList.toggle( "red" )
console.log( div.classList );
