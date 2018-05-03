function CambiarEstilo(){

  var styleSheet = document.getElementById('estilo2');
  if (styleSheet.disabled== true){
      styleSheet.disabled = false;
      $("#navbar").attr("class","navbar fixed-top");
      $("#tablaIndex").attr("class","table table-striped table-dark");
      $("#tablaIndex:first-child").attr("class","thead");
      localStorage.setItem("estilo2","true");
  }
  else {
    styleSheet.disabled = true;
    $("#navbar").attr({"class":"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"});
    $("#tablaIndex").attr("class","table table-hover");
    $("#tablaIndex:first-child").attr("class","thead-light");
    localStorage.setItem("estilo2","false");
  }

}
