function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagen");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 8;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "../relogio/img/treinos/fotomanha.jpg";
    document.boby.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = "../relogio/img/treinos/fototarde.jpg";
    document.boby.style.background = "#b9846f";
  } else {
    // BOA NOITE
    img.src = "../relogio/img/treinos/fotonoite.jpg";
    document.boby.style.background = "#515154";
  }
}
