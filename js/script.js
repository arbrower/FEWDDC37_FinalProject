

$(document).ready(function(){

  function hot () {
    console.log('show the milk questions');
    event.preventDefault();
    $('#hotMilkSection').slideDown();
    $('#temperatureSection').hide();
  }

  function hotNoMilkFunction () {
    console.log('Find the no milk options');
    event.preventDefault();
    $('#hotNoMilkSection').slideDown();
    $('#hotMilkSection').hide();
  }

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
    console.log('Show the espresso cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkPourOver').slideDown ();
  }

  $('#hot').click(hot);
  $('#hotNoMilk').click(hotNoMilkFunction);
  $('#drip').click(dripShowFunction);
  $('#espresso').click(espressoShowFunction);
  $('#pourOver').click(pourOverShowFunction);
});