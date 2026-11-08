(function () {
  // Дата окончания акции. Формат: 'ГГГГ-ММ-ДДTЧЧ:ММ:СС'
  var deadline = new Date('2026-11-31T00:00:00');

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function tick() {
    var diff = deadline - new Date();

    if (diff <= 0) {
      document.getElementById('t-days').textContent  = '00';
      document.getElementById('t-hours').textContent = '00';
      document.getElementById('t-mins').textContent  = '00';
      document.getElementById('t-secs').textContent  = '00';
      return;
    }

    var days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var mins  = Math.floor((diff / (1000 * 60)) % 60);
    var secs  = Math.floor((diff / 1000) % 60);

    document.getElementById('t-days').textContent  = pad(days);
    document.getElementById('t-hours').textContent = pad(hours);
    document.getElementById('t-mins').textContent  = pad(mins);
    document.getElementById('t-secs').textContent  = pad(secs);
  }

  tick();                 // сразу показать
  setInterval(tick, 1000); // обновлять каждую секунду
})();