$(document).ready(function() {
  document.querySelector('form').addEventListener('submit', function() {
    //prevents default behavior of submit button
    event.preventDefault();
    var searchTerm = document.querySelector('input').value;


    $.get('https://omdb-api.now.sh/?t=' + searchTerm, function(data) {
      console.log(data);
    })
  })
})
