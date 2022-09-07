const menu = document.querySelectorAll( "li" );
/**
 *  let home = document.querySelector('#home');
home.addEventListener('home',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('dashboard',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('report',(event) => {
    console.log('Report menu item was clicked');
});
 */
// We could simplify the above code to this to help speed up the operation of our javascript
menu.forEach( element => {
    element.addEventListener( "click", ( event ) => {
        console.log( `${event.target.textContent} menu item has been clicked` );
    })
})
