(function () {
  function pad(n) {
    return n.toString().padStart(2, '0');
  }

  function updateTime() {
    var el = document.getElementById('live-time');
    if (!el) return;

    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var hh = pad(now.getHours());
    var mm = pad(now.getMinutes());
    var ss = pad(now.getSeconds());

    el.textContent = y + '年 ' + m + '月 ' + d + '日 ' + hh + ':' + mm + ':' + ss;
  }

  updateTime();
  setInterval(updateTime, 1000);
})();
