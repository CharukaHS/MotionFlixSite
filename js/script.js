$(document).ready(function(){
  
  $.getJSON("./json/artwork.json", function(data) {
    var items = []
    $.each(data, function (indexInArray, valueOfElement) { 
       items.push(valueOfElement)       
    });
    console.log(items);
  });
  
  


  $('span').click(function(){
    $('#nav').addClass('navbarClicked')
  })
})