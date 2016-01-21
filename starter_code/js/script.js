$(document).ready(function(){

$("#search-btn").click(function(){
var searchvalue = $("#search-query").val();
  searchFlickr(searchvalue,function(results){
      for (var m = 0; m < 10; m++) {
          var image = results[m];
          $('#search-results').append('<img src="' + image.media.m + '" />');
      }
  });
});
});