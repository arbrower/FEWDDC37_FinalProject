

$(document).ready(function(){

  function hot () {
    console.log('show the milk questions');
    event.preventDefault();
    $('#hotMilkSection').slideDown();
    $('#temperatureSection').hide();
  }

  // Milk Section

  function hotNoMilkFunction () {
    console.log('Find the no milk options');
    event.preventDefault();
    $('#hotNoMilkSection').slideDown();
    $('#hotMilkSection').hide();
  }

  function hotYesMilkFunction () {
    console.log('Find the yes milk options');
    event.preventDefault();
    $('#hotYesMilkSection').slideDown();
    $('#hotMilkSection').hide();
  }

  // Drink Section

  function dripShowFunction () {
    console.log('Show the drip cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkDrip').slideDown ();
  }

  function espressoShowFunction () {
    console.log('Show the espresso cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkEspresso').slideDown ();
  }

  function pourOverShowFunction () {
    console.log('Show the pour over cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkPourOver').slideDown ();
  }

  function cortadoShowFunction () {
    console.log('Show the cortado cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkCortado').slideDown ();
  }

  function macchiatoShowFunction () {
    console.log('Show the macchiato cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkMacchiato').slideDown ();
  }

  function flatWhiteShowFunction () {
    console.log('Show the flat white cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkFlatWhite').slideDown ();
  }

  function cappuccinoShowFunction () {
    console.log('Show the cappuccino cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkCappuccino').slideDown ();
  }

  function latteShowFunction () {
    console.log('Show the latte cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkLatte').slideDown ();
  }

  

  $('#hot').click(hot);


  $('#hotNoMilk').click(hotNoMilkFunction);
  $('#hotYesMilk').click(hotYesMilkFunction);


  $('#drip').click(dripShowFunction);
  $('#espresso').click(espressoShowFunction);
  $('#pourOver').click(pourOverShowFunction);
  $('#cortado').click(cortadoShowFunction);
  $('#macchiato').click(macchiatoShowFunction);
  $('#flatWhite').click(flatWhiteShowFunction);
  $('#cappuccino').click(cappuccinoShowFunction);
  $('#latte').click(latteShowFunction);


});

$(document).ready(function() {

  var array=["Swings Coffee", "Gregory's Coffee", "La Colombe", "Filter", "Qualia Coffee"];
  $('#randomButton').bind('click', function() {

      var random = array[Math.floor(Math.random() * array.length)];

      $("h1").html(random);
  });
});