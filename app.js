


$(document).ready(function() {

    $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data) {

      for (var i = 0; i < data.results.length; i++) {
        var randomChooser = Math.floor(Math.random() * (data.results.length - 0)) + 0;
        var j = randomChooser;
        var cover = document.createElement('img');
        cover.setAttribute("src", "images/" + data.results[j].cover_art);
        var body = $(".cover1");
        cover.style.margin = '20px';
        body.append(cover);
      }
    });
});
