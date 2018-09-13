var reachedBtm = false;
var allLoaded = false;
var i = 0;
var n = 15;
var items = [];

$(document).ready(function(){
  
  $.getJSON("./json/artwork.json", function(data) {    
    $.each(data, function (indexInArray, valueOfElement) { 
       items.push(valueOfElement);   
    });
    console.log('length =', items.length);
    addItems()
  });

  $(window).on('scroll', function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      if(!reachedBtm && !allLoaded) {
        reachedBtm = true;
        addItems();     
      }
    }
  })

  //DOM 
  $('span').click(function(){
    $('#nav').addClass('navbarClicked')
  })
})

function addItems() {  
  if (items.length >= n) {
    var looped = 0
    for (; i < n; i++) {      
      if (i === items.length) {
        allLoaded = true;
        console.log(i , 'break');      
        break;
      }
      var item = items[i]
      $(".showcase").append(`
      <div class="artwork">
        <img src="${item.thumbnail}" alt="">
        <div class="description">
          <span>
            <h3>${item.title}</h3>
            <p>${item.discription}</p>
          </span>
        </div>
      </div>
      `)
      looped++
    }
    n += looped
    if ( items.length < n) {
      n = items.length
    }
    reachedBtm = false;
  } else {
    console.log('done');    
    allLoaded = true;
  }
}
