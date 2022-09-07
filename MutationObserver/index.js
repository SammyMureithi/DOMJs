//Let's get all the elements from the HTML
const list = document.querySelector( "#list" );
const btnStart = document.querySelector( "#btnStart" );
const btnStop = document.querySelector( "#btnStop" );
const btnAdd = document.querySelector( "#btnAdd" );
const btnRemove = document.querySelector( "#btnRemove" );

//lets first make the btnStop disabled since we cannot stop what we have not yet started
btnStop.disabled = true;
console.log( btnStop );

//lets fisrt create our Mutation CallBack Function

function log( Mutations ) {
    for ( let Mutation in Mutations ) {
        if (Mutation.type == "ChildList") {
            console.log( Mutation );
        }
        
    }
}
//let create an observer object
let observer = new MutationObserver( log );

//lets start observing when startObserve button is clicked
btnStart.addEventListener( "click", () => {
    observer.observe( list, {
        childList: true
    } );
    console.log( "Observing ..." );
    btnStart.disabled = true;
    btnStop.disabled = false;
} );
//let stop Observing on click of stopObserving btn

btnStop.addEventListener( "click", () => {
    observer.disconnect();
    btnStart.disabled = false;
    btnStop.disabled = true;
    console.log( "Observation stopping ...." )
} );
//Lets add a new element on Click of Add button
let counter = 1;
btnAdd.addEventListener( "click", () => {
    let li = document.createElement( "li" );
    li.textContent = `Item ${counter++}`;
    list.appendChild( li );
    btnRemove.disabled = false;
} );

//lets remove the last item on RemoveItem button Clicked
btnRemove.addEventListener( "click", function () {
    list.removeChild( list.lastElementChild );
    if (! list.lastElementChild) {
        console.log( "No more elements to be removed" );
        btnRemove.disabled="true"
    }
    else {
        console.log( "Remove successfully" );
    }
})

