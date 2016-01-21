// WRITE YOUR CODE IN script.js, NOT HERE

// This function searches for photos on Flickr with tags
// that match the search query.
//
// The first argument should be the search query entered by
// the user.
//
// The second argument should be a function to run when results
// are returned from the Flickr API. These are known as
// "callbacks". The function should expect to receive an array
// of results as the first argument, so something like:
//
//    function(results) {
//      // do something
//    }
function searchFlickr(query, callback) {
  // first we make the search query into a tag
  var tag = query.toLowerCase()
                 .replace('#', '') // we don't want to send #
                 .replace(' ', ''); // no spaces in tags

  $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
      tags: tag,
      tagmode: "any",
      format: "json"
    },
    function(results) {
      callback(results.items);
    });
}
