

var map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.87, 74.59],
        zoom: 13
    });
});

function alert() {
    document.getElementById("oform").innerHTML = "Заказ оформлен!";
  }

  