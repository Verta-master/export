// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 50000,
    max: 8000000,
    values: [ 50000, 8000000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] );
      $( "#amount-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
});
