const removeOne = document.querySelector( "#menu" );
const removeAll = document.querySelector( "#removeAll" );

removeOne.removeChild( removeOne.firstElementChild );
while ( removeAll.firstChild ) {
    removeAll.removeChild( removeAll.firstChild );
}