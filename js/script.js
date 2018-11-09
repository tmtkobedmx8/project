
$( window ).on( 'load', () => {
  $( '.header-description' ).addClass( 'animated lightSpeedIn delay-1s' );
} );

$( '.header-description-btn' ).on( 'click', () => {
  let $spinner = $( '.circle' );
  let myVar;
  $( '.header-description' ).css( 'display', 'none' );
  
  setTimeout( function() {
    debugger;
    $spinner.css( 'display', 'block' );
  }, 500 );

    setTimeout( function() {
      $spinner.css( 'display', 'none' );
    }, 3000);
});