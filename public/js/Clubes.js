function mostrarClubes(clubes) {
    var index;
    for (index = 0; index < clubes.length; ++index) {
        agregarClub(clubes[index]);
    }
}

function agregarClub(club) {
    var tarjeta = $("<div></div>").attr("class","col-sm-3");
    var carta = $("<div></div>").attr({"class":"card"});
    carta.append("<img class='card-im-top' src="+club.escudo+" alt='Card image cap'>");
    var cuerpo = $("<div></div>").attr("class","card-body");
    cuerpo.append($("<h5></h5>").attr("class","card-title").text(club.nombre));
    cuerpo.append($("<p></p>").attr("class","card-text").text(club.descripcion));
    cuerpo.append($("<a></a>").attr({"class":"btn btn-primary","href":club.link,"target":"_blank"}).text("Sitio Web"));
    carta.append(cuerpo);
    tarjeta.append(carta);
    $("#cartas").append(tarjeta);
}
