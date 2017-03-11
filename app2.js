$(document).ready(function() {

    $('.clearTracks').click(function() {
        var place = document.querySelector('.textbox');
        place.innerHTML = '';
    });

    $('.submitTracks').click(function() {
        var place = document.querySelector('.textbox');
        var stuff = getChosenAlbums();
        $.post("https://lit-fortress-6467.herokuapp.com/post", {
            chosenAlbums: stuff
        }, function(data) {
            console.log(data);
        });
    });

    $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data) {

        for (var i = 0; i < data.results.length; i++) {
            var cover = document.createElement('img');
            cover.setAttribute("src", "images/" + data.results[i].cover_art);
            var body = $(".albumsList");
            cover.style.height = '150px';
            cover.style.width = '150px';
            cover.style.margin = '20px';

            cover.setAttribute('artist', data.results[i].artist);
            cover.setAttribute('title', data.results[i].title);

            body.append(cover);

            cover.addEventListener('click', preventAngryAtom);
        }
    });
});

function preventAngryAtom(event) {
    var theTitle = event.target.attributes.title.nodeValue;
    var theArtist = event.target.attributes.artist.nodeValue;
    var getText = document.createElement('p');
    getText.innerHTML = theArtist + ': ' + theTitle;
    var place = document.querySelector('.textbox');
    place.appendChild(getText);
}

function getChosenAlbums() {
    var place = document.querySelector('.textbox');
    var arrayToPush = [];
    console.log(place.childNodes);
    for (var i = 0; i < place.childNodes.length; i++) {
        var newObj = {};
        var artist = place.childNodes[i].innerHTML.split(':')[0].trim();
        var title = place.childNodes[i].innerHTML.split(':')[1].trim();
        newObj.title = title;
        newObj.artist = artist;
        arrayToPush.push(newObj);
    }
    return (arrayToPush);
}
