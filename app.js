


$(document).ready(function() {

    $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data) {

      for (var i = 0; i < 3; i++) {
        var cover = document.createElement('img');
        cover.setAttribute("src", "images/" + data.results[i].cover_art);
        var body = $(".cover1");
        cover.style.margin = '20px';
        body.append(cover);
      }
    });
});

// function coverChooser(min, max) {
//   min = Math.ceil(0);
//   max = Math.floor(data.results.length);
//   var chosenOne = Math.floor(Math.random() * (max - min)) + min;
//   return chosenOne;
// }
