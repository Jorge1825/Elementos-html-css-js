$(window).load(function () {
  var body = $("body"),
    universo = $("#universo"),
    solarsys = $("#sistema-solar");

  var init = function () {
    body
      .removeClass("vista-2D abriendo")
      .addClass("ver-3D")
      .delay(2000)
      .queue(function () {
        $(this).removeClass("esconder-Ui").addClass("con-velo");
        $(this).dequeue();
      });
  };

  var setView = function (view) {
    universo.removeClass().addClass(view);
  };

  $("#alternar-datos").click(function (e) {
    body.toggleClass("abrir-datos Cerrar-datos");
    e.preventDefault();
  });

  $("#alternar-controles").click(function (e) {
    body.toggleClass("abrir-controles Cerrar-opciones");
    e.preventDefault();
  });

  $("#datos a").click(function (e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find("a").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

  $(".con-vista").click(function () {
    body.toggleClass("ver-3D vista-2D");
  });
  $(".con-zoom").click(function () {
    body.toggleClass("aumentar-zoom cerrar-zoom");
  });
  $(".con-velo").click(function () {
    setView("escala-estirada con-velo");
  });
  $(".con-tama").click(function () {
    setView("escala-s con-tama");
  });
  $(".con-distancia").click(function () {
    setView("escala-d con-distancia");
  });

  init();
});
