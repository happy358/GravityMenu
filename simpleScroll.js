/*!
 * simpleScroll.js v1.0.0
 * Copyright(c)2020 happy358
 * Site:https://labs.manohara.info/simplescroll/
 * Released under the MIT license.
 * see https://github.com/happy358/simpleScroll/blob/master/LICENSE
 */
(function () {
  var e = document.querySelector("#script_simplescroll");
  var r = e.dataset.size || 35;
  var t = encodeURIComponent(e.dataset.color) || "grey";
  var o = encodeURIComponent(e.dataset.border) || "white";
  var a = e.dataset.bordersize || 1;
  var n = 7;
  var s = document.documentElement;
  var l = document.querySelector("body");
  var i = '<div id="simplescroll" style="position:fixed;bottom:' + n + "px;right:" + n + "px;width:" + r + 'px;height:auto;display:block;z-index:999;">';
  i += '<a id="simplescroll_top" style="width:' + r + "px;height:" + r + "px;display:block;background-repeat:no-repeat;background-position:center center;cursor:pointer;transform:scale(0) translateY(0);transform-origin:bottom center;transition:transform .3s;will-change:height;background-image:url(&quot;data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22" + t + "%22%20stroke%3D%22" + o + "%22%20stroke-width%3D%22" + a + '%22%20points%3D%22255.992%2C92.089%200%2C348.081%2071.821%2C419.911%20255.992%2C235.74%20440.18%2C419.911%20512%2C348.081%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E%0A&quot;);"></a>';
  i += '<a id="simplescroll_bottom" style="width:' + r + "px;height:" + r + "px;display:block;background-repeat:no-repeat;background-position:center center;cursor:pointer;transform-origin:bottom center;transform:scale(1);transition:transform .3s;will-change:height;background-image:url(data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpolygon%20fill%3D%22" + t + "%22%20stroke%3D%22" + o + "%22%20stroke-width%3D%22" + a + '%22%20points%3D%22440.189%2C92.085%20256.019%2C276.255%2071.83%2C92.085%200%2C163.915%20256.019%2C419.915%20512%2C163.915%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E%0A);"></a>';
  i += "</div>";
  l.insertAdjacentHTML("beforeend", i);
  var c = document.querySelector("#simplescroll_bottom");
  var p = document.querySelector("#simplescroll_top");
  var u = s.clientHeight;
  var d = s.scrollHeight;
  var f = false;
  var v;
  c.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    f = true;
    clearTimeout(v);
    v = setTimeout(function () {
      f = false
    }, 1e3);
    p.style.transform = "scale(1) translateY(" + r + "px)";
    c.style.transform = "scale(0)";
    window.scrollTo({
      top: d,
      left: 0,
      behavior: "smooth"
    });
    return
  }, {
    passive: false
  });
  p.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    f = true;
    clearTimeout(v);
    v = setTimeout(function () {
      f = false
    }, 1e3);
    p.style.transform = "scale(0) translateY(0)";
    c.style.transform = "scale(1)";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    return
  }, {
    passive: false
  });
  window.addEventListener("load", m, {
    passive: false
  });
  window.addEventListener("scroll", m, {
    passive: false
  });

  function m(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!f) {
      var t = window.scrollY;
      if (t < 200) {
        p.style.transform = "scale(0) translateY(0)"
      } else {
        p.style.transform = "scale(1) translateY(0)"
      }
      if (d - t - 200 < u) {
        c.style.transform = "scale(0)";
        p.style.transform = "scale(1) translateY(" + r + "px)"
      } else {
        c.style.transform = "scale(1)"
      }
    }
    return
  }
  var g = null;
  var w = window.outerHeight;
  window.addEventListener("resize", function (e) {
    e.preventDefault();
    e.stopPropagation();
    clearTimeout(g);
    g = setTimeout(function () {
      var e = window.outerHeight;
      if (w !== e) {
        u = s.clientHeight;
        d = s.scrollHeight;
        w = e
      }
    }, 500);
    return
  }, {
    passive: false
  });
  document.getElementsByTagName("a").onclick = function (e) {
    var t = e.target;
    if (t.href.charAt(0) != "#") return;
    var r = document.querySelector(t.hash);
    if (!r) return;
    r.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
    e.preventDefault();
    e.stopPropagation();
    return
  }
})();
