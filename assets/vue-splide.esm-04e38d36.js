import {
  aa as Vt,
  ab as lr,
  ac as dr,
  o as st,
  c as Nn,
  b as Er,
  ad as ct,
  ae as rn,
  af as gr,
  ag as hr,
  ah as _r,
  ai as mr,
  aj as an,
  r as Ar,
  f as on,
  D as un,
  ak as Tr,
} from "./index-754231d5.js";
function sn(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Sr(e, n, t) {
  return (
    n && sn(e.prototype, n),
    t && sn(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var cn = "(prefers-reduced-motion: reduce)",
  Ce = 1,
  yr = 2,
  Pe = 3,
  ke = 4,
  qe = 5,
  it = 6,
  ft = 7,
  Lr = {
    CREATED: Ce,
    MOUNTED: yr,
    IDLE: Pe,
    MOVING: ke,
    SCROLLING: qe,
    DRAGGING: it,
    DESTROYED: ft,
  };
function de(e) {
  e.length = 0;
}
function Ae(e, n, t) {
  return Array.prototype.slice.call(e, n, t);
}
function B(e) {
  return e.bind.apply(e, [null].concat(Ae(arguments, 1)));
}
var Rn = setTimeout,
  bt = function () {};
function fn(e) {
  return requestAnimationFrame(e);
}
function Et(e, n) {
  return typeof n === e;
}
function Ge(e) {
  return !xt(e) && Et("object", e);
}
var kt = Array.isArray,
  pn = B(Et, "function"),
  _e = B(Et, "string"),
  je = B(Et, "undefined");
function xt(e) {
  return e === null;
}
function On(e) {
  try {
    return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function Ze(e) {
  return kt(e) ? e : [e];
}
function ne(e, n) {
  Ze(e).forEach(n);
}
function Ft(e, n) {
  return e.indexOf(n) > -1;
}
function at(e, n) {
  return e.push.apply(e, Ze(n)), e;
}
function fe(e, n, t) {
  e &&
    ne(n, function (r) {
      r && e.classList[t ? "add" : "remove"](r);
    });
}
function oe(e, n) {
  fe(e, _e(n) ? n.split(" ") : n, !0);
}
function Je(e, n) {
  ne(n, e.appendChild.bind(e));
}
function $t(e, n) {
  ne(e, function (t) {
    var r = (n || t).parentNode;
    r && r.insertBefore(t, n);
  });
}
function ze(e, n) {
  return On(e) && (e.msMatchesSelector || e.matches).call(e, n);
}
function bn(e, n) {
  var t = e ? Ae(e.children) : [];
  return n
    ? t.filter(function (r) {
        return ze(r, n);
      })
    : t;
}
function Qe(e, n) {
  return n ? bn(e, n)[0] : e.firstElementChild;
}
var We = Object.keys;
function Ie(e, n, t) {
  return (
    e &&
      (t ? We(e).reverse() : We(e)).forEach(function (r) {
        r !== "__proto__" && n(e[r], r);
      }),
    e
  );
}
function He(e) {
  return (
    Ae(arguments, 1).forEach(function (n) {
      Ie(n, function (t, r) {
        e[r] = n[r];
      });
    }),
    e
  );
}
function he(e) {
  return (
    Ae(arguments, 1).forEach(function (n) {
      Ie(n, function (t, r) {
        kt(t)
          ? (e[r] = t.slice())
          : Ge(t)
          ? (e[r] = he({}, Ge(e[r]) ? e[r] : {}, t))
          : (e[r] = t);
      });
    }),
    e
  );
}
function vn(e, n) {
  ne(n || We(e), function (t) {
    delete e[t];
  });
}
function ue(e, n) {
  ne(e, function (t) {
    ne(n, function (r) {
      t && t.removeAttribute(r);
    });
  });
}
function k(e, n, t) {
  Ge(n)
    ? Ie(n, function (r, i) {
        k(e, i, r);
      })
    : ne(e, function (r) {
        xt(t) || t === "" ? ue(r, n) : r.setAttribute(n, String(t));
      });
}
function we(e, n, t) {
  var r = document.createElement(e);
  return n && (_e(n) ? oe(r, n) : k(r, n)), t && Je(t, r), r;
}
function re(e, n, t) {
  if (je(t)) return getComputedStyle(e)[n];
  xt(t) || (e.style[n] = "" + t);
}
function Ye(e, n) {
  re(e, "display", n);
}
function Cn(e) {
  (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
}
function ie(e, n) {
  return e.getAttribute(n);
}
function ln(e, n) {
  return e && e.classList.contains(n);
}
function ee(e) {
  return e.getBoundingClientRect();
}
function Ne(e) {
  ne(e, function (n) {
    n && n.parentNode && n.parentNode.removeChild(n);
  });
}
function wn(e) {
  return Qe(new DOMParser().parseFromString(e, "text/html").body);
}
function ce(e, n) {
  e.preventDefault(), n && (e.stopPropagation(), e.stopImmediatePropagation());
}
function Dn(e, n) {
  return e && e.querySelector(n);
}
function Ut(e, n) {
  return n ? Ae(e.querySelectorAll(n)) : [];
}
function ve(e, n) {
  fe(e, n, !1);
}
function Ct(e) {
  return e.timeStamp;
}
function Le(e) {
  return _e(e) ? e : e ? e + "px" : "";
}
var et = "splide",
  Bt = "data-" + et;
function Ue(e, n) {
  if (!e) throw new Error("[" + et + "] " + (n || ""));
}
var me = Math.min,
  vt = Math.max,
  lt = Math.floor,
  Xe = Math.ceil,
  Q = Math.abs;
function Pn(e, n, t) {
  return Q(e - n) < t;
}
function ot(e, n, t, r) {
  var i = me(n, t),
    l = vt(n, t);
  return r ? i < e && e < l : i <= e && e <= l;
}
function Oe(e, n, t) {
  var r = me(n, t),
    i = vt(n, t);
  return me(vt(r, e), i);
}
function wt(e) {
  return +(e > 0) - +(e < 0);
}
function Dt(e, n) {
  return (
    ne(n, function (t) {
      e = e.replace("%s", "" + t);
    }),
    e
  );
}
function Gt(e) {
  return e < 10 ? "0" + e : "" + e;
}
var dn = {};
function Ir(e) {
  return "" + e + Gt((dn[e] = (dn[e] || 0) + 1));
}
function Mn() {
  var e = [];
  function n(a, s, c, o) {
    i(a, s, function (u, h, d) {
      var E = "addEventListener" in u,
        f = E
          ? u.removeEventListener.bind(u, h, c, o)
          : u.removeListener.bind(u, c);
      E ? u.addEventListener(h, c, o) : u.addListener(c),
        e.push([u, h, d, c, f]);
    });
  }
  function t(a, s, c) {
    i(a, s, function (o, u, h) {
      e = e.filter(function (d) {
        return d[0] === o && d[1] === u && d[2] === h && (!c || d[3] === c)
          ? (d[4](), !1)
          : !0;
      });
    });
  }
  function r(a, s, c) {
    var o,
      u = !0;
    return (
      typeof CustomEvent == "function"
        ? (o = new CustomEvent(s, { bubbles: u, detail: c }))
        : ((o = document.createEvent("CustomEvent")),
          o.initCustomEvent(s, u, !1, c)),
      a.dispatchEvent(o),
      o
    );
  }
  function i(a, s, c) {
    ne(a, function (o) {
      o &&
        ne(s, function (u) {
          u.split(" ").forEach(function (h) {
            var d = h.split(".");
            c(o, d[0], d[1]);
          });
        });
    });
  }
  function l() {
    e.forEach(function (a) {
      a[4]();
    }),
      de(e);
  }
  return { bind: n, unbind: t, dispatch: r, destroy: l };
}
var Te = "mounted",
  En = "ready",
  Ee = "move",
  xe = "moved",
  zt = "click",
  Vn = "active",
  kn = "inactive",
  xn = "visible",
  Fn = "hidden",
  X = "refresh",
  Z = "updated",
  Me = "resize",
  gt = "resized",
  $n = "drag",
  Un = "dragging",
  Bn = "dragged",
  ht = "scroll",
  pe = "scrolled",
  Nr = "overflow",
  Wt = "destroy",
  Gn = "arrows:mounted",
  zn = "arrows:updated",
  Wn = "pagination:mounted",
  Hn = "pagination:updated",
  Ht = "navigation:mounted",
  Yt = "autoplay:play",
  Yn = "autoplay:playing",
  Xt = "autoplay:pause",
  Kt = "lazyload:loaded",
  Xn = "sk",
  Kn = "sh",
  dt = "ei";
function W(e) {
  var n = e ? e.event.bus : document.createDocumentFragment(),
    t = Mn();
  function r(l, a) {
    t.bind(n, Ze(l).join(" "), function (s) {
      a.apply(a, kt(s.detail) ? s.detail : []);
    });
  }
  function i(l) {
    t.dispatch(n, l, Ae(arguments, 1));
  }
  return (
    e && e.event.on(Wt, t.destroy),
    He(t, { bus: n, on: r, off: B(t.unbind, n), emit: i })
  );
}
function _t(e, n, t, r) {
  var i = Date.now,
    l,
    a = 0,
    s,
    c = !0,
    o = 0;
  function u() {
    if (!c) {
      if (
        ((a = e ? me((i() - l) / e, 1) : 1),
        t && t(a),
        a >= 1 && (n(), (l = i()), r && ++o >= r))
      )
        return d();
      s = fn(u);
    }
  }
  function h(m) {
    m || f(), (l = i() - (m ? a * e : 0)), (c = !1), (s = fn(u));
  }
  function d() {
    c = !0;
  }
  function E() {
    (l = i()), (a = 0), t && t(a);
  }
  function f() {
    s && cancelAnimationFrame(s), (a = 0), (s = 0), (c = !0);
  }
  function v(m) {
    e = m;
  }
  function A() {
    return c;
  }
  return { start: h, rewind: E, pause: d, cancel: f, set: v, isPaused: A };
}
function Rr(e) {
  var n = e;
  function t(i) {
    n = i;
  }
  function r(i) {
    return Ft(Ze(i), n);
  }
  return { set: t, is: r };
}
function pr(e, n) {
  var t = _t(n || 0, e, null, 1);
  return function () {
    t.isPaused() && t.start();
  };
}
function Or(e, n, t) {
  var r = e.state,
    i = t.breakpoints || {},
    l = t.reducedMotion || {},
    a = Mn(),
    s = [];
  function c() {
    var f = t.mediaQuery === "min";
    We(i)
      .sort(function (v, A) {
        return f ? +v - +A : +A - +v;
      })
      .forEach(function (v) {
        u(i[v], "(" + (f ? "min" : "max") + "-width:" + v + "px)");
      }),
      u(l, cn),
      h();
  }
  function o(f) {
    f && a.destroy();
  }
  function u(f, v) {
    var A = matchMedia(v);
    a.bind(A, "change", h), s.push([f, A]);
  }
  function h() {
    var f = r.is(ft),
      v = t.direction,
      A = s.reduce(function (m, _) {
        return he(m, _[1].matches ? _[0] : {});
      }, {});
    vn(t),
      E(A),
      t.destroy
        ? e.destroy(t.destroy === "completely")
        : f
        ? (o(!0), e.mount())
        : v !== t.direction && e.refresh();
  }
  function d(f) {
    matchMedia(cn).matches && (f ? he(t, l) : vn(t, We(l)));
  }
  function E(f, v, A) {
    he(t, f),
      v && he(Object.getPrototypeOf(t), f),
      (A || !r.is(Ce)) && e.emit(Z, t);
  }
  return { setup: c, destroy: o, reduce: d, set: E };
}
var mt = "Arrow",
  At = mt + "Left",
  Tt = mt + "Right",
  qn = mt + "Up",
  jn = mt + "Down",
  gn = "rtl",
  St = "ttb",
  Nt = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [qn, Tt],
    ArrowRight: [jn, At],
  };
function br(e, n, t) {
  function r(l, a, s) {
    s = s || t.direction;
    var c = s === gn && !a ? 1 : s === St ? 0 : -1;
    return (
      (Nt[l] && Nt[l][c]) ||
      l.replace(/width|left|right/i, function (o, u) {
        var h = Nt[o.toLowerCase()][c] || o;
        return u > 0 ? h.charAt(0).toUpperCase() + h.slice(1) : h;
      })
    );
  }
  function i(l) {
    return l * (t.direction === gn ? 1 : -1);
  }
  return { resolve: r, orient: i };
}
var le = "role",
  De = "tabindex",
  Cr = "disabled",
  ae = "aria-",
  tt = ae + "controls",
  Zn = ae + "current",
  hn = ae + "selected",
  te = ae + "label",
  qt = ae + "labelledby",
  Jn = ae + "hidden",
  jt = ae + "orientation",
  Ke = ae + "roledescription",
  _n = ae + "live",
  mn = ae + "busy",
  An = ae + "atomic",
  Zt = [le, De, Cr, tt, Zn, te, qt, Jn, jt, Ke],
  se = et + "__",
  Se = "is-",
  Rt = et,
  Tn = se + "track",
  wr = se + "list",
  yt = se + "slide",
  Qn = yt + "--clone",
  Dr = yt + "__container",
  Jt = se + "arrows",
  Lt = se + "arrow",
  er = Lt + "--prev",
  tr = Lt + "--next",
  It = se + "pagination",
  nr = It + "__page",
  Pr = se + "progress",
  Mr = Pr + "__bar",
  Vr = se + "toggle",
  kr = se + "spinner",
  xr = se + "sr",
  Fr = Se + "initialized",
  Re = Se + "active",
  rr = Se + "prev",
  ir = Se + "next",
  Pt = Se + "visible",
  Mt = Se + "loading",
  ar = Se + "focus-in",
  or = Se + "overflow",
  $r = [Re, Pt, rr, ir, Mt, ar, or],
  Ur = {
    slide: yt,
    clone: Qn,
    arrows: Jt,
    arrow: Lt,
    prev: er,
    next: tr,
    pagination: It,
    page: nr,
    spinner: kr,
  };
function Br(e, n) {
  if (pn(e.closest)) return e.closest(n);
  for (var t = e; t && t.nodeType === 1 && !ze(t, n); ) t = t.parentElement;
  return t;
}
var Gr = 5,
  Sn = 200,
  ur = "touchstart mousedown",
  pt = "touchmove mousemove",
  Ot = "touchend touchcancel mouseup click";
function zr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.bind,
    a = e.root,
    s = t.i18n,
    c = {},
    o = [],
    u = [],
    h = [],
    d,
    E,
    f;
  function v() {
    g(), D(), _();
  }
  function A() {
    i(X, m),
      i(X, v),
      i(Z, _),
      l(
        document,
        ur + " keydown",
        function (S) {
          f = S.type === "keydown";
        },
        { capture: !0 }
      ),
      l(a, "focusin", function () {
        fe(a, ar, !!f);
      });
  }
  function m(S) {
    var O = Zt.concat("style");
    de(o), ve(a, u), ve(d, h), ue([d, E], O), ue(a, S ? O : ["style", Ke]);
  }
  function _() {
    ve(a, u),
      ve(d, h),
      (u = M(Rt)),
      (h = M(Tn)),
      oe(a, u),
      oe(d, h),
      k(a, te, t.label),
      k(a, qt, t.labelledby);
  }
  function g() {
    (d = p("." + Tn)),
      (E = Qe(d, "." + wr)),
      Ue(d && E, "A track/list element is missing."),
      at(o, bn(E, "." + yt + ":not(." + Qn + ")")),
      Ie(
        { arrows: Jt, pagination: It, prev: er, next: tr, bar: Mr, toggle: Vr },
        function (S, O) {
          c[O] = p("." + S);
        }
      ),
      He(c, { root: a, track: d, list: E, slides: o });
  }
  function D() {
    var S = a.id || Ir(et),
      O = t.role;
    (a.id = S),
      (d.id = d.id || S + "-track"),
      (E.id = E.id || S + "-list"),
      !ie(a, le) && a.tagName !== "SECTION" && O && k(a, le, O),
      k(a, Ke, s.carousel),
      k(E, le, "presentation");
  }
  function p(S) {
    var O = Dn(a, S);
    return O && Br(O, "." + Rt) === a ? O : void 0;
  }
  function M(S) {
    return [
      S + "--" + t.type,
      S + "--" + t.direction,
      t.drag && S + "--draggable",
      t.isNavigation && S + "--nav",
      S === Rt && Re,
    ];
  }
  return He(c, { setup: v, mount: A, destroy: m });
}
var Ve = "slide",
  Fe = "loop",
  nt = "fade";
function Wr(e, n, t, r) {
  var i = W(e),
    l = i.on,
    a = i.emit,
    s = i.bind,
    c = e.Components,
    o = e.root,
    u = e.options,
    h = u.isNavigation,
    d = u.updateOnMove,
    E = u.i18n,
    f = u.pagination,
    v = u.slideFocus,
    A = c.Direction.resolve,
    m = ie(r, "style"),
    _ = ie(r, te),
    g = t > -1,
    D = Qe(r, "." + Dr),
    p;
  function M() {
    g ||
      ((r.id = o.id + "-slide" + Gt(n + 1)),
      k(r, le, f ? "tabpanel" : "group"),
      k(r, Ke, E.slide),
      k(r, te, _ || Dt(E.slideLabel, [n + 1, e.length]))),
      S();
  }
  function S() {
    s(r, "click", B(a, zt, P)),
      s(r, "keydown", B(a, Xn, P)),
      l([xe, Kn, pe], L),
      l(Ht, F),
      d && l(Ee, w);
  }
  function O() {
    (p = !0),
      i.destroy(),
      ve(r, $r),
      ue(r, Zt),
      k(r, "style", m),
      k(r, te, _ || "");
  }
  function F() {
    var C = e.splides
      .map(function (y) {
        var b = y.splide.Components.Slides.getAt(n);
        return b ? b.slide.id : "";
      })
      .join(" ");
    k(r, te, Dt(E.slideX, (g ? t : n) + 1)),
      k(r, tt, C),
      k(r, le, v ? "button" : ""),
      v && ue(r, Ke);
  }
  function w() {
    p || L();
  }
  function L() {
    if (!p) {
      var C = e.index;
      I(), N(), fe(r, rr, n === C - 1), fe(r, ir, n === C + 1);
    }
  }
  function I() {
    var C = x();
    C !== ln(r, Re) &&
      (fe(r, Re, C), k(r, Zn, (h && C) || ""), a(C ? Vn : kn, P));
  }
  function N() {
    var C = H(),
      y = !C && (!x() || g);
    if (
      (e.state.is([ke, qe]) || k(r, Jn, y || ""),
      k(Ut(r, u.focusableNodes || ""), De, y ? -1 : ""),
      v && k(r, De, y ? -1 : 0),
      C !== ln(r, Pt) && (fe(r, Pt, C), a(C ? xn : Fn, P)),
      !C && document.activeElement === r)
    ) {
      var b = c.Slides.getAt(e.index);
      b && Cn(b.slide);
    }
  }
  function V(C, y, b) {
    re((b && D) || r, C, y);
  }
  function x() {
    var C = e.index;
    return C === n || (u.cloneStatus && C === t);
  }
  function H() {
    if (e.is(nt)) return x();
    var C = ee(c.Elements.track),
      y = ee(r),
      b = A("left", !0),
      $ = A("right", !0);
    return lt(C[b]) <= Xe(y[b]) && lt(y[$]) <= Xe(C[$]);
  }
  function z(C, y) {
    var b = Q(C - n);
    return !g && (u.rewind || e.is(Fe)) && (b = me(b, e.length - b)), b <= y;
  }
  var P = {
    index: n,
    slideIndex: t,
    slide: r,
    container: D,
    isClone: g,
    mount: M,
    destroy: O,
    update: L,
    style: V,
    isWithin: z,
  };
  return P;
}
function Hr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = r.bind,
    s = n.Elements,
    c = s.slides,
    o = s.list,
    u = [];
  function h() {
    d(), i(X, E), i(X, d);
  }
  function d() {
    c.forEach(function (L, I) {
      v(L, I, -1);
    });
  }
  function E() {
    p(function (L) {
      L.destroy();
    }),
      de(u);
  }
  function f() {
    p(function (L) {
      L.update();
    });
  }
  function v(L, I, N) {
    var V = Wr(e, I, N, L);
    V.mount(),
      u.push(V),
      u.sort(function (x, H) {
        return x.index - H.index;
      });
  }
  function A(L) {
    return L
      ? M(function (I) {
          return !I.isClone;
        })
      : u;
  }
  function m(L) {
    var I = n.Controller,
      N = I.toIndex(L),
      V = I.hasFocus() ? 1 : t.perPage;
    return M(function (x) {
      return ot(x.index, N, N + V - 1);
    });
  }
  function _(L) {
    return M(L)[0];
  }
  function g(L, I) {
    ne(L, function (N) {
      if ((_e(N) && (N = wn(N)), On(N))) {
        var V = c[I];
        V ? $t(N, V) : Je(o, N), oe(N, t.classes.slide), O(N, B(l, Me));
      }
    }),
      l(X);
  }
  function D(L) {
    Ne(
      M(L).map(function (I) {
        return I.slide;
      })
    ),
      l(X);
  }
  function p(L, I) {
    A(I).forEach(L);
  }
  function M(L) {
    return u.filter(
      pn(L)
        ? L
        : function (I) {
            return _e(L) ? ze(I.slide, L) : Ft(Ze(L), I.index);
          }
    );
  }
  function S(L, I, N) {
    p(function (V) {
      V.style(L, I, N);
    });
  }
  function O(L, I) {
    var N = Ut(L, "img"),
      V = N.length;
    V
      ? N.forEach(function (x) {
          a(x, "load error", function () {
            --V || I();
          });
        })
      : I();
  }
  function F(L) {
    return L ? c.length : u.length;
  }
  function w() {
    return u.length > t.perPage;
  }
  return {
    mount: h,
    destroy: E,
    update: f,
    register: v,
    get: A,
    getIn: m,
    getAt: _,
    add: g,
    remove: D,
    forEach: p,
    filter: M,
    style: S,
    getLength: F,
    isEnough: w,
  };
}
function Yr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.bind,
    a = r.emit,
    s = n.Slides,
    c = n.Direction.resolve,
    o = n.Elements,
    u = o.root,
    h = o.track,
    d = o.list,
    E = s.getAt,
    f = s.style,
    v,
    A,
    m;
  function _() {
    g(), l(window, "resize load", pr(B(a, Me))), i([Z, X], g), i(Me, D);
  }
  function g() {
    (v = t.direction === St),
      re(u, "maxWidth", Le(t.width)),
      re(h, c("paddingLeft"), p(!1)),
      re(h, c("paddingRight"), p(!0)),
      D(!0);
  }
  function D(P) {
    var C = ee(u);
    (P || A.width !== C.width || A.height !== C.height) &&
      (re(h, "height", M()),
      f(c("marginRight"), Le(t.gap)),
      f("width", O()),
      f("height", F(), !0),
      (A = C),
      a(gt),
      m !== (m = z()) && (fe(u, or, m), a(Nr, m)));
  }
  function p(P) {
    var C = t.padding,
      y = c(P ? "right" : "left");
    return (C && Le(C[y] || (Ge(C) ? 0 : C))) || "0px";
  }
  function M() {
    var P = "";
    return (
      v &&
        ((P = S()),
        Ue(P, "height or heightRatio is missing."),
        (P = "calc(" + P + " - " + p(!1) + " - " + p(!0) + ")")),
      P
    );
  }
  function S() {
    return Le(t.height || ee(d).width * t.heightRatio);
  }
  function O() {
    return t.autoWidth ? null : Le(t.fixedWidth) || (v ? "" : w());
  }
  function F() {
    return Le(t.fixedHeight) || (v ? (t.autoHeight ? null : w()) : S());
  }
  function w() {
    var P = Le(t.gap);
    return (
      "calc((100%" +
      (P && " + " + P) +
      ")/" +
      (t.perPage || 1) +
      (P && " - " + P) +
      ")"
    );
  }
  function L() {
    return ee(d)[c("width")];
  }
  function I(P, C) {
    var y = E(P || 0);
    return y ? ee(y.slide)[c("width")] + (C ? 0 : x()) : 0;
  }
  function N(P, C) {
    var y = E(P);
    if (y) {
      var b = ee(y.slide)[c("right")],
        $ = ee(d)[c("left")];
      return Q(b - $) + (C ? 0 : x());
    }
    return 0;
  }
  function V(P) {
    return N(e.length - 1) - N(0) + I(0, P);
  }
  function x() {
    var P = E(0);
    return (P && parseFloat(re(P.slide, c("marginRight")))) || 0;
  }
  function H(P) {
    return parseFloat(re(h, c("padding" + (P ? "Right" : "Left")))) || 0;
  }
  function z() {
    return e.is(nt) || V(!0) > L();
  }
  return {
    mount: _,
    resize: D,
    listSize: L,
    slideSize: I,
    sliderSize: V,
    totalSize: N,
    getPadding: H,
    isOverflow: z,
  };
}
var Xr = 2;
function Kr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = n.Elements,
    a = n.Slides,
    s = n.Direction.resolve,
    c = [],
    o;
  function u() {
    i(X, h), i([Z, Me], E), (o = A()) && (f(o), n.Layout.resize(!0));
  }
  function h() {
    d(), u();
  }
  function d() {
    Ne(c), de(c), r.destroy();
  }
  function E() {
    var m = A();
    o !== m && (o < m || !m) && r.emit(X);
  }
  function f(m) {
    var _ = a.get().slice(),
      g = _.length;
    if (g) {
      for (; _.length < m; ) at(_, _);
      at(_.slice(-m), _.slice(0, m)).forEach(function (D, p) {
        var M = p < m,
          S = v(D.slide, p);
        M ? $t(S, _[0].slide) : Je(l.list, S),
          at(c, S),
          a.register(S, p - m + (M ? 0 : g), D.index);
      });
    }
  }
  function v(m, _) {
    var g = m.cloneNode(!0);
    return oe(g, t.classes.clone), (g.id = e.root.id + "-clone" + Gt(_ + 1)), g;
  }
  function A() {
    var m = t.clones;
    if (!e.is(Fe)) m = 0;
    else if (je(m)) {
      var _ = t[s("fixedWidth")] && n.Layout.slideSize(0),
        g = _ && Xe(ee(l.track)[s("width")] / _);
      m = g || (t[s("autoWidth")] && e.length) || t.perPage * Xr;
    }
    return m;
  }
  return { mount: u, destroy: d };
}
function qr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = e.state.set,
    s = n.Layout,
    c = s.slideSize,
    o = s.getPadding,
    u = s.totalSize,
    h = s.listSize,
    d = s.sliderSize,
    E = n.Direction,
    f = E.resolve,
    v = E.orient,
    A = n.Elements,
    m = A.list,
    _ = A.track,
    g;
  function D() {
    (g = n.Transition), i([Te, gt, Z, X], p);
  }
  function p() {
    n.Controller.isBusy() || (n.Scroll.cancel(), S(e.index), n.Slides.update());
  }
  function M(y, b, $, q) {
    y !== b && P(y > $) && (L(), O(w(V(), y > $), !0)),
      a(ke),
      l(Ee, b, $, y),
      g.start(b, function () {
        a(Pe), l(xe, b, $, y), q && q();
      });
  }
  function S(y) {
    O(N(y, !0));
  }
  function O(y, b) {
    if (!e.is(nt)) {
      var $ = b ? y : F(y);
      re(m, "transform", "translate" + f("X") + "(" + $ + "px)"),
        y !== $ && l(Kn);
    }
  }
  function F(y) {
    if (e.is(Fe)) {
      var b = I(y),
        $ = b > n.Controller.getEnd(),
        q = b < 0;
      (q || $) && (y = w(y, $));
    }
    return y;
  }
  function w(y, b) {
    var $ = y - z(b),
      q = d();
    return (y -= v(q * (Xe(Q($) / q) || 1)) * (b ? 1 : -1)), y;
  }
  function L() {
    O(V(), !0), g.cancel();
  }
  function I(y) {
    for (var b = n.Slides.get(), $ = 0, q = 1 / 0, K = 0; K < b.length; K++) {
      var ge = b[K].index,
        T = Q(N(ge, !0) - y);
      if (T <= q) (q = T), ($ = ge);
      else break;
    }
    return $;
  }
  function N(y, b) {
    var $ = v(u(y - 1) - H(y));
    return b ? x($) : $;
  }
  function V() {
    var y = f("left");
    return ee(m)[y] - ee(_)[y] + v(o(!1));
  }
  function x(y) {
    return t.trimSpace && e.is(Ve) && (y = Oe(y, 0, v(d(!0) - h()))), y;
  }
  function H(y) {
    var b = t.focus;
    return b === "center" ? (h() - c(y, !0)) / 2 : +b * c(y) || 0;
  }
  function z(y) {
    return N(y ? n.Controller.getEnd() : 0, !!t.trimSpace);
  }
  function P(y) {
    var b = v(w(V(), y));
    return y ? b >= 0 : b <= m[f("scrollWidth")] - ee(_)[f("width")];
  }
  function C(y, b) {
    b = je(b) ? V() : b;
    var $ = y !== !0 && v(b) < v(z(!1)),
      q = y !== !1 && v(b) > v(z(!0));
    return $ || q;
  }
  return {
    mount: D,
    move: M,
    jump: S,
    translate: O,
    shift: w,
    cancel: L,
    toIndex: I,
    toPosition: N,
    getPosition: V,
    getLimit: z,
    exceededLimit: C,
    reposition: p,
  };
}
function jr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = n.Move,
    s = a.getPosition,
    c = a.getLimit,
    o = a.toPosition,
    u = n.Slides,
    h = u.isEnough,
    d = u.getLength,
    E = t.omitEnd,
    f = e.is(Fe),
    v = e.is(Ve),
    A = B(V, !1),
    m = B(V, !0),
    _ = t.start || 0,
    g,
    D = _,
    p,
    M,
    S;
  function O() {
    F(), i([Z, X, dt], F), i(gt, w);
  }
  function F() {
    (p = d(!0)), (M = t.perMove), (S = t.perPage), (g = P());
    var T = Oe(_, 0, E ? g : p - 1);
    T !== _ && ((_ = T), a.reposition());
  }
  function w() {
    g !== P() && l(dt);
  }
  function L(T, U, J) {
    if (!ge()) {
      var Y = N(T),
        j = z(Y);
      j > -1 && (U || j !== _) && ($(j), a.move(Y, j, D, J));
    }
  }
  function I(T, U, J, Y) {
    n.Scroll.scroll(T, U, J, function () {
      var j = z(a.toIndex(s()));
      $(E ? me(j, g) : j), Y && Y();
    });
  }
  function N(T) {
    var U = _;
    if (_e(T)) {
      var J = T.match(/([+\-<>])(\d+)?/) || [],
        Y = J[1],
        j = J[2];
      Y === "+" || Y === "-"
        ? (U = x(_ + +("" + Y + (+j || 1)), _))
        : Y === ">"
        ? (U = j ? C(+j) : A(!0))
        : Y === "<" && (U = m(!0));
    } else U = f ? T : Oe(T, 0, g);
    return U;
  }
  function V(T, U) {
    var J = M || (K() ? 1 : S),
      Y = x(_ + J * (T ? -1 : 1), _, !(M || K()));
    return Y === -1 && v && !Pn(s(), c(!T), 1) ? (T ? 0 : g) : U ? Y : z(Y);
  }
  function x(T, U, J) {
    if (h() || K()) {
      var Y = H(T);
      Y !== T && ((U = T), (T = Y), (J = !1)),
        T < 0 || T > g
          ? !M && (ot(0, T, U, !0) || ot(g, U, T, !0))
            ? (T = C(y(T)))
            : f
            ? (T = J ? (T < 0 ? -(p % S || S) : p) : T)
            : t.rewind
            ? (T = T < 0 ? g : 0)
            : (T = -1)
          : J && T !== U && (T = C(y(U) + (T < U ? -1 : 1)));
    } else T = -1;
    return T;
  }
  function H(T) {
    if (v && t.trimSpace === "move" && T !== _)
      for (var U = s(); U === o(T, !0) && ot(T, 0, e.length - 1, !t.rewind); )
        T < _ ? --T : ++T;
    return T;
  }
  function z(T) {
    return f ? (T + p) % p || 0 : T;
  }
  function P() {
    for (var T = p - (K() || (f && M) ? 1 : S); E && T-- > 0; )
      if (o(p - 1, !0) !== o(T, !0)) {
        T++;
        break;
      }
    return Oe(T, 0, p - 1);
  }
  function C(T) {
    return Oe(K() ? T : S * T, 0, g);
  }
  function y(T) {
    return K() ? me(T, g) : lt((T >= g ? p - 1 : T) / S);
  }
  function b(T) {
    var U = a.toIndex(T);
    return v ? Oe(U, 0, g) : U;
  }
  function $(T) {
    T !== _ && ((D = _), (_ = T));
  }
  function q(T) {
    return T ? D : _;
  }
  function K() {
    return !je(t.focus) || t.isNavigation;
  }
  function ge() {
    return e.state.is([ke, qe]) && !!t.waitForTransition;
  }
  return {
    mount: O,
    go: L,
    scroll: I,
    getNext: A,
    getPrev: m,
    getAdjacent: V,
    getEnd: P,
    setIndex: $,
    getIndex: q,
    toIndex: C,
    toPage: y,
    toDest: b,
    hasFocus: K,
    isBusy: ge,
  };
}
var Zr = "http://www.w3.org/2000/svg",
  Jr =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  rt = 40;
function Qr(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.bind,
    a = r.emit,
    s = t.classes,
    c = t.i18n,
    o = n.Elements,
    u = n.Controller,
    h = o.arrows,
    d = o.track,
    E = h,
    f = o.prev,
    v = o.next,
    A,
    m,
    _ = {};
  function g() {
    p(), i(Z, D);
  }
  function D() {
    M(), g();
  }
  function p() {
    var I = t.arrows;
    I && !(f && v) && F(),
      f &&
        v &&
        (He(_, { prev: f, next: v }),
        Ye(E, I ? "" : "none"),
        oe(E, (m = Jt + "--" + t.direction)),
        I && (S(), L(), k([f, v], tt, d.id), a(Gn, f, v)));
  }
  function M() {
    r.destroy(),
      ve(E, m),
      A ? (Ne(h ? [f, v] : E), (f = v = null)) : ue([f, v], Zt);
  }
  function S() {
    i([Te, xe, X, pe, dt], L),
      l(v, "click", B(O, ">")),
      l(f, "click", B(O, "<"));
  }
  function O(I) {
    u.go(I, !0);
  }
  function F() {
    (E = h || we("div", s.arrows)),
      (f = w(!0)),
      (v = w(!1)),
      (A = !0),
      Je(E, [f, v]),
      !h && $t(E, d);
  }
  function w(I) {
    var N =
      '<button class="' +
      s.arrow +
      " " +
      (I ? s.prev : s.next) +
      '" type="button"><svg xmlns="' +
      Zr +
      '" viewBox="0 0 ' +
      rt +
      " " +
      rt +
      '" width="' +
      rt +
      '" height="' +
      rt +
      '" focusable="false"><path d="' +
      (t.arrowPath || Jr) +
      '" />';
    return wn(N);
  }
  function L() {
    if (f && v) {
      var I = e.index,
        N = u.getPrev(),
        V = u.getNext(),
        x = N > -1 && I < N ? c.last : c.prev,
        H = V > -1 && I > V ? c.first : c.next;
      (f.disabled = N < 0),
        (v.disabled = V < 0),
        k(f, te, x),
        k(v, te, H),
        a(zn, f, v, N, V);
    }
  }
  return { arrows: _, mount: g, destroy: M, update: L };
}
var ei = Bt + "-interval";
function ti(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.bind,
    a = r.emit,
    s = _t(t.interval, e.go.bind(e, ">"), S),
    c = s.isPaused,
    o = n.Elements,
    u = n.Elements,
    h = u.root,
    d = u.toggle,
    E = t.autoplay,
    f,
    v,
    A = E === "pause";
  function m() {
    E && (_(), d && k(d, tt, o.track.id), A || g(), M());
  }
  function _() {
    t.pauseOnHover &&
      l(h, "mouseenter mouseleave", function (F) {
        (f = F.type === "mouseenter"), p();
      }),
      t.pauseOnFocus &&
        l(h, "focusin focusout", function (F) {
          (v = F.type === "focusin"), p();
        }),
      d &&
        l(d, "click", function () {
          A ? g() : D(!0);
        }),
      i([Ee, ht, X], s.rewind),
      i(Ee, O);
  }
  function g() {
    c() &&
      n.Slides.isEnough() &&
      (s.start(!t.resetProgress), (v = f = A = !1), M(), a(Yt));
  }
  function D(F) {
    F === void 0 && (F = !0), (A = !!F), M(), c() || (s.pause(), a(Xt));
  }
  function p() {
    A || (f || v ? D(!1) : g());
  }
  function M() {
    d && (fe(d, Re, !A), k(d, te, t.i18n[A ? "play" : "pause"]));
  }
  function S(F) {
    var w = o.bar;
    w && re(w, "width", F * 100 + "%"), a(Yn, F);
  }
  function O(F) {
    var w = n.Slides.getAt(F);
    s.set((w && +ie(w.slide, ei)) || t.interval);
  }
  return { mount: m, destroy: s.cancel, play: g, pause: D, isPaused: c };
}
function ni(e, n, t) {
  var r = W(e),
    i = r.on;
  function l() {
    t.cover && (i(Kt, B(s, !0)), i([Te, Z, X], B(a, !0)));
  }
  function a(c) {
    n.Slides.forEach(function (o) {
      var u = Qe(o.container || o.slide, "img");
      u && u.src && s(c, u, o);
    });
  }
  function s(c, o, u) {
    u.style(
      "background",
      c ? 'center/cover no-repeat url("' + o.src + '")' : "",
      !0
    ),
      Ye(o, c ? "none" : "");
  }
  return { mount: l, destroy: B(a, !1) };
}
var ri = 10,
  ii = 600,
  ai = 0.6,
  oi = 1.5,
  ui = 800;
function si(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = e.state.set,
    s = n.Move,
    c = s.getPosition,
    o = s.getLimit,
    u = s.exceededLimit,
    h = s.translate,
    d = e.is(Ve),
    E,
    f,
    v = 1;
  function A() {
    i(Ee, D), i([Z, X], p);
  }
  function m(S, O, F, w, L) {
    var I = c();
    if ((D(), F && (!d || !u()))) {
      var N = n.Layout.sliderSize(),
        V = wt(S) * N * lt(Q(S) / N) || 0;
      S = s.toPosition(n.Controller.toDest(S % N)) + V;
    }
    var x = Pn(I, S, 1);
    (v = 1),
      (O = x ? 0 : O || vt(Q(S - I) / oi, ui)),
      (f = w),
      (E = _t(O, _, B(g, I, S, L), 1)),
      a(qe),
      l(ht),
      E.start();
  }
  function _() {
    a(Pe), f && f(), l(pe);
  }
  function g(S, O, F, w) {
    var L = c(),
      I = S + (O - S) * M(w),
      N = (I - L) * v;
    h(L + N),
      d && !F && u() && ((v *= ai), Q(N) < ri && m(o(u(!0)), ii, !1, f, !0));
  }
  function D() {
    E && E.cancel();
  }
  function p() {
    E && !E.isPaused() && (D(), _());
  }
  function M(S) {
    var O = t.easingFunc;
    return O ? O(S) : 1 - Math.pow(1 - S, 4);
  }
  return { mount: A, destroy: D, scroll: m, cancel: p };
}
var be = { passive: !1, capture: !0 };
function ci(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = r.bind,
    s = r.unbind,
    c = e.state,
    o = n.Move,
    u = n.Scroll,
    h = n.Controller,
    d = n.Elements.track,
    E = n.Media.reduce,
    f = n.Direction,
    v = f.resolve,
    A = f.orient,
    m = o.getPosition,
    _ = o.exceededLimit,
    g,
    D,
    p,
    M,
    S,
    O = !1,
    F,
    w,
    L;
  function I() {
    a(d, pt, bt, be),
      a(d, Ot, bt, be),
      a(d, ur, V, be),
      a(d, "click", z, { capture: !0 }),
      a(d, "dragstart", ce),
      i([Te, Z], N);
  }
  function N() {
    var R = t.drag;
    nn(!R), (M = R === "free");
  }
  function V(R) {
    if (((F = !1), !w)) {
      var G = j(R);
      Y(R.target) &&
        (G || !R.button) &&
        (h.isBusy()
          ? ce(R, !0)
          : ((L = G ? d : window),
            (S = c.is([ke, qe])),
            (p = null),
            a(L, pt, x, be),
            a(L, Ot, H, be),
            o.cancel(),
            u.cancel(),
            P(R)));
    }
  }
  function x(R) {
    if ((c.is(it) || (c.set(it), l($n)), R.cancelable))
      if (S) {
        o.translate(g + J(K(R)));
        var G = ge(R) > Sn,
          ye = O !== (O = _());
        (G || ye) && P(R), (F = !0), l(Un), ce(R);
      } else b(R) && ((S = y(R)), ce(R));
  }
  function H(R) {
    c.is(it) && (c.set(Pe), l(Bn)),
      S && (C(R), ce(R)),
      s(L, pt, x),
      s(L, Ot, H),
      (S = !1);
  }
  function z(R) {
    !w && F && ce(R, !0);
  }
  function P(R) {
    (p = D), (D = R), (g = m());
  }
  function C(R) {
    var G = $(R),
      ye = q(G),
      $e = t.rewind && t.rewindByDrag;
    E(!1),
      M
        ? h.scroll(ye, 0, t.snap)
        : e.is(nt)
        ? h.go(A(wt(G)) < 0 ? ($e ? "<" : "-") : $e ? ">" : "+")
        : e.is(Ve) && O && $e
        ? h.go(_(!0) ? ">" : "<")
        : h.go(h.toDest(ye), !0),
      E(!0);
  }
  function y(R) {
    var G = t.dragMinThreshold,
      ye = Ge(G),
      $e = (ye && G.mouse) || 0,
      vr = (ye ? G.touch : +G) || 10;
    return Q(K(R)) > (j(R) ? vr : $e);
  }
  function b(R) {
    return Q(K(R)) > Q(K(R, !0));
  }
  function $(R) {
    if (e.is(Fe) || !O) {
      var G = ge(R);
      if (G && G < Sn) return K(R) / G;
    }
    return 0;
  }
  function q(R) {
    return (
      m() +
      wt(R) *
        me(
          Q(R) * (t.flickPower || 600),
          M ? 1 / 0 : n.Layout.listSize() * (t.flickMaxPages || 1)
        )
    );
  }
  function K(R, G) {
    return U(R, G) - U(T(R), G);
  }
  function ge(R) {
    return Ct(R) - Ct(T(R));
  }
  function T(R) {
    return (D === R && p) || D;
  }
  function U(R, G) {
    return (j(R) ? R.changedTouches[0] : R)["page" + v(G ? "Y" : "X")];
  }
  function J(R) {
    return R / (O && e.is(Ve) ? Gr : 1);
  }
  function Y(R) {
    var G = t.noDrag;
    return !ze(R, "." + nr + ", ." + Lt) && (!G || !ze(R, G));
  }
  function j(R) {
    return typeof TouchEvent < "u" && R instanceof TouchEvent;
  }
  function fr() {
    return S;
  }
  function nn(R) {
    w = R;
  }
  return { mount: I, disable: nn, isDragging: fr };
}
var fi = { Spacebar: " ", Right: Tt, Left: At, Up: qn, Down: jn };
function Qt(e) {
  return (e = _e(e) ? e : e.key), fi[e] || e;
}
var yn = "keydown";
function vi(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.bind,
    a = r.unbind,
    s = e.root,
    c = n.Direction.resolve,
    o,
    u;
  function h() {
    d(), i(Z, E), i(Z, d), i(Ee, v);
  }
  function d() {
    var m = t.keyboard;
    m && ((o = m === "global" ? window : s), l(o, yn, A));
  }
  function E() {
    a(o, yn);
  }
  function f(m) {
    u = m;
  }
  function v() {
    var m = u;
    (u = !0),
      Rn(function () {
        u = m;
      });
  }
  function A(m) {
    if (!u) {
      var _ = Qt(m);
      _ === c(At) ? e.go("<") : _ === c(Tt) && e.go(">");
    }
  }
  return { mount: h, destroy: E, disable: f };
}
var Be = Bt + "-lazy",
  ut = Be + "-srcset",
  li = "[" + Be + "], [" + ut + "]";
function di(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.off,
    a = r.bind,
    s = r.emit,
    c = t.lazyLoad === "sequential",
    o = [xe, pe],
    u = [];
  function h() {
    t.lazyLoad && (d(), i(X, d));
  }
  function d() {
    de(u), E(), c ? m() : (l(o), i(o, f), f());
  }
  function E() {
    n.Slides.forEach(function (_) {
      Ut(_.slide, li).forEach(function (g) {
        var D = ie(g, Be),
          p = ie(g, ut);
        if (D !== g.src || p !== g.srcset) {
          var M = t.classes.spinner,
            S = g.parentElement,
            O = Qe(S, "." + M) || we("span", M, S);
          u.push([g, _, O]), g.src || Ye(g, "none");
        }
      });
    });
  }
  function f() {
    (u = u.filter(function (_) {
      var g = t.perPage * ((t.preloadPages || 1) + 1) - 1;
      return _[1].isWithin(e.index, g) ? v(_) : !0;
    })),
      u.length || l(o);
  }
  function v(_) {
    var g = _[0];
    oe(_[1].slide, Mt),
      a(g, "load error", B(A, _)),
      k(g, "src", ie(g, Be)),
      k(g, "srcset", ie(g, ut)),
      ue(g, Be),
      ue(g, ut);
  }
  function A(_, g) {
    var D = _[0],
      p = _[1];
    ve(p.slide, Mt),
      g.type !== "error" && (Ne(_[2]), Ye(D, ""), s(Kt, D, p), s(Me)),
      c && m();
  }
  function m() {
    u.length && v(u.shift());
  }
  return { mount: h, destroy: B(de, u), check: f };
}
function Ei(e, n, t) {
  var r = W(e),
    i = r.on,
    l = r.emit,
    a = r.bind,
    s = n.Slides,
    c = n.Elements,
    o = n.Controller,
    u = o.hasFocus,
    h = o.getIndex,
    d = o.go,
    E = n.Direction.resolve,
    f = c.pagination,
    v = [],
    A,
    m;
  function _() {
    g(), i([Z, X, dt], _);
    var w = t.pagination;
    f && Ye(f, w ? "" : "none"),
      w &&
        (i([Ee, ht, pe], F),
        D(),
        F(),
        l(Wn, { list: A, items: v }, O(e.index)));
  }
  function g() {
    A && (Ne(f ? Ae(A.children) : A), ve(A, m), de(v), (A = null)), r.destroy();
  }
  function D() {
    var w = e.length,
      L = t.classes,
      I = t.i18n,
      N = t.perPage,
      V = u() ? o.getEnd() + 1 : Xe(w / N);
    (A = f || we("ul", L.pagination, c.track.parentElement)),
      oe(A, (m = It + "--" + S())),
      k(A, le, "tablist"),
      k(A, te, I.select),
      k(A, jt, S() === St ? "vertical" : "");
    for (var x = 0; x < V; x++) {
      var H = we("li", null, A),
        z = we("button", { class: L.page, type: "button" }, H),
        P = s.getIn(x).map(function (y) {
          return y.slide.id;
        }),
        C = !u() && N > 1 ? I.pageX : I.slideX;
      a(z, "click", B(p, x)),
        t.paginationKeyboard && a(z, "keydown", B(M, x)),
        k(H, le, "presentation"),
        k(z, le, "tab"),
        k(z, tt, P.join(" ")),
        k(z, te, Dt(C, x + 1)),
        k(z, De, -1),
        v.push({ li: H, button: z, page: x });
    }
  }
  function p(w) {
    d(">" + w, !0);
  }
  function M(w, L) {
    var I = v.length,
      N = Qt(L),
      V = S(),
      x = -1;
    N === E(Tt, !1, V)
      ? (x = ++w % I)
      : N === E(At, !1, V)
      ? (x = (--w + I) % I)
      : N === "Home"
      ? (x = 0)
      : N === "End" && (x = I - 1);
    var H = v[x];
    H && (Cn(H.button), d(">" + x), ce(L, !0));
  }
  function S() {
    return t.paginationDirection || t.direction;
  }
  function O(w) {
    return v[o.toPage(w)];
  }
  function F() {
    var w = O(h(!0)),
      L = O(h());
    if (w) {
      var I = w.button;
      ve(I, Re), ue(I, hn), k(I, De, -1);
    }
    if (L) {
      var N = L.button;
      oe(N, Re), k(N, hn, !0), k(N, De, "");
    }
    l(Hn, { list: A, items: v }, w, L);
  }
  return { items: v, mount: _, destroy: g, getAt: O, update: F };
}
var gi = [" ", "Enter"];
function hi(e, n, t) {
  var r = t.isNavigation,
    i = t.slideFocus,
    l = [];
  function a() {
    e.splides.forEach(function (f) {
      f.isParent || (o(e, f.splide), o(f.splide, e));
    }),
      r && u();
  }
  function s() {
    l.forEach(function (f) {
      f.destroy();
    }),
      de(l);
  }
  function c() {
    s(), a();
  }
  function o(f, v) {
    var A = W(f);
    A.on(Ee, function (m, _, g) {
      v.go(v.is(Fe) ? g : m);
    }),
      l.push(A);
  }
  function u() {
    var f = W(e),
      v = f.on;
    v(zt, d), v(Xn, E), v([Te, Z], h), l.push(f), f.emit(Ht, e.splides);
  }
  function h() {
    k(n.Elements.list, jt, t.direction === St ? "vertical" : "");
  }
  function d(f) {
    e.go(f.index);
  }
  function E(f, v) {
    Ft(gi, Qt(v)) && (d(f), ce(v));
  }
  return {
    setup: B(n.Media.set, { slideFocus: je(i) ? r : i }, !0),
    mount: a,
    destroy: s,
    remount: c,
  };
}
function _i(e, n, t) {
  var r = W(e),
    i = r.bind,
    l = 0;
  function a() {
    t.wheel && i(n.Elements.track, "wheel", s, be);
  }
  function s(o) {
    if (o.cancelable) {
      var u = o.deltaY,
        h = u < 0,
        d = Ct(o),
        E = t.wheelMinThreshold || 0,
        f = t.wheelSleep || 0;
      Q(u) > E && d - l > f && (e.go(h ? "<" : ">"), (l = d)), c(h) && ce(o);
    }
  }
  function c(o) {
    return (
      !t.releaseWheel || e.state.is(ke) || n.Controller.getAdjacent(o) !== -1
    );
  }
  return { mount: a };
}
var mi = 90;
function Ai(e, n, t) {
  var r = W(e),
    i = r.on,
    l = n.Elements.track,
    a = t.live && !t.isNavigation,
    s = we("span", xr),
    c = _t(mi, B(u, !1));
  function o() {
    a &&
      (d(!n.Autoplay.isPaused()),
      k(l, An, !0),
      (s.textContent = "…"),
      i(Yt, B(d, !0)),
      i(Xt, B(d, !1)),
      i([xe, pe], B(u, !0)));
  }
  function u(E) {
    k(l, mn, E), E ? (Je(l, s), c.start()) : (Ne(s), c.cancel());
  }
  function h() {
    ue(l, [_n, An, mn]), Ne(s);
  }
  function d(E) {
    a && k(l, _n, E ? "off" : "polite");
  }
  return { mount: o, disable: d, destroy: h };
}
var Ti = Object.freeze({
    __proto__: null,
    Media: Or,
    Direction: br,
    Elements: zr,
    Slides: Hr,
    Layout: Yr,
    Clones: Kr,
    Move: qr,
    Controller: jr,
    Arrows: Qr,
    Autoplay: ti,
    Cover: ni,
    Scroll: si,
    Drag: ci,
    Keyboard: vi,
    LazyLoad: di,
    Pagination: Ei,
    Sync: hi,
    Wheel: _i,
    Live: Ai,
  }),
  Si = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  yi = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: Ur,
    i18n: Si,
    reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
  };
function Li(e, n, t) {
  var r = n.Slides;
  function i() {
    W(e).on([Te, X], l);
  }
  function l() {
    r.forEach(function (s) {
      s.style("transform", "translateX(-" + 100 * s.index + "%)");
    });
  }
  function a(s, c) {
    r.style("transition", "opacity " + t.speed + "ms " + t.easing), Rn(c);
  }
  return { mount: i, start: a, cancel: bt };
}
function Ii(e, n, t) {
  var r = n.Move,
    i = n.Controller,
    l = n.Scroll,
    a = n.Elements.list,
    s = B(re, a, "transition"),
    c;
  function o() {
    W(e).bind(a, "transitionend", function (E) {
      E.target === a && c && (h(), c());
    });
  }
  function u(E, f) {
    var v = r.toPosition(E, !0),
      A = r.getPosition(),
      m = d(E);
    Q(v - A) >= 1 && m >= 1
      ? t.useScroll
        ? l.scroll(v, m, !1, f)
        : (s("transform " + m + "ms " + t.easing), r.translate(v, !0), (c = f))
      : (r.jump(E), f());
  }
  function h() {
    s(""), l.cancel();
  }
  function d(E) {
    var f = t.rewindSpeed;
    if (e.is(Ve) && f) {
      var v = i.getIndex(!0),
        A = i.getEnd();
      if ((v === 0 && E >= A) || (v >= A && E === 0)) return f;
    }
    return t.speed;
  }
  return { mount: o, start: u, cancel: h };
}
var Ni = (function () {
    function e(t, r) {
      (this.event = W()),
        (this.Components = {}),
        (this.state = Rr(Ce)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var i = _e(t) ? Dn(document, t) : t;
      Ue(i, i + " is invalid."),
        (this.root = i),
        (r = he(
          { label: ie(i, te) || "", labelledby: ie(i, qt) || "" },
          yi,
          e.defaults,
          r || {}
        ));
      try {
        he(r, JSON.parse(ie(i, Bt)));
      } catch {
        Ue(!1, "Invalid JSON");
      }
      this._o = Object.create(he({}, r));
    }
    var n = e.prototype;
    return (
      (n.mount = function (r, i) {
        var l = this,
          a = this.state,
          s = this.Components;
        Ue(a.is([Ce, ft]), "Already mounted!"),
          a.set(Ce),
          (this._C = s),
          (this._T = i || this._T || (this.is(nt) ? Li : Ii)),
          (this._E = r || this._E);
        var c = He({}, Ti, this._E, { Transition: this._T });
        return (
          Ie(c, function (o, u) {
            var h = o(l, s, l._o);
            (s[u] = h), h.setup && h.setup();
          }),
          Ie(s, function (o) {
            o.mount && o.mount();
          }),
          this.emit(Te),
          oe(this.root, Fr),
          a.set(Pe),
          this.emit(En),
          this
        );
      }),
      (n.sync = function (r) {
        return (
          this.splides.push({ splide: r }),
          r.splides.push({ splide: this, isParent: !0 }),
          this.state.is(Pe) &&
            (this._C.Sync.remount(), r.Components.Sync.remount()),
          this
        );
      }),
      (n.go = function (r) {
        return this._C.Controller.go(r), this;
      }),
      (n.on = function (r, i) {
        return this.event.on(r, i), this;
      }),
      (n.off = function (r) {
        return this.event.off(r), this;
      }),
      (n.emit = function (r) {
        var i;
        return (
          (i = this.event).emit.apply(i, [r].concat(Ae(arguments, 1))), this
        );
      }),
      (n.add = function (r, i) {
        return this._C.Slides.add(r, i), this;
      }),
      (n.remove = function (r) {
        return this._C.Slides.remove(r), this;
      }),
      (n.is = function (r) {
        return this._o.type === r;
      }),
      (n.refresh = function () {
        return this.emit(X), this;
      }),
      (n.destroy = function (r) {
        r === void 0 && (r = !0);
        var i = this.event,
          l = this.state;
        return (
          l.is(Ce)
            ? W(this).on(En, this.destroy.bind(this, r))
            : (Ie(
                this._C,
                function (a) {
                  a.destroy && a.destroy(r);
                },
                !0
              ),
              i.emit(Wt),
              i.destroy(),
              r && de(this.splides),
              l.set(ft)),
          this
        );
      }),
      Sr(e, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (r) {
            this._C.Media.set(r, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      e
    );
  })(),
  en = Ni;
en.defaults = {};
en.STATES = Lr;
const Ln = [
    Vn,
    Gn,
    zn,
    Xt,
    Yt,
    Yn,
    zt,
    Wt,
    $n,
    Bn,
    Un,
    Fn,
    kn,
    Kt,
    Te,
    Ee,
    xe,
    Ht,
    Wn,
    Hn,
    X,
    Me,
    gt,
    ht,
    pe,
    Z,
    xn,
  ],
  sr = "splide";
function In(e) {
  return e !== null && typeof e == "object";
}
function Ri(e, n) {
  if (e) {
    const t = Object.keys(e);
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (i !== "__proto__" && n(e[i], i) === !1) break;
    }
  }
  return e;
}
function cr(e, n) {
  const t = e;
  return (
    Ri(n, (r, i) => {
      Array.isArray(r)
        ? (t[i] = r.slice())
        : In(r)
        ? (t[i] = cr(In(t[i]) ? t[i] : {}, r))
        : (t[i] = r);
    }),
    t
  );
}
const pi = Vt({
    name: "SplideTrack",
    setup() {
      lr(() => {
        var e;
        const n = dr(sr);
        (e = n == null ? void 0 : n.value) == null || e.refresh();
      });
    },
  }),
  tn = (e, n) => {
    const t = e.__vccOpts || e;
    for (const [r, i] of n) t[r] = i;
    return t;
  },
  Oi = { class: "splide__track" },
  bi = { class: "splide__list" };
function Ci(e, n, t, r, i, l) {
  return st(), Nn("div", Oi, [Er("ul", bi, [ct(e.$slots, "default")])]);
}
const wi = tn(pi, [["render", Ci]]),
  Di = Vt({
    name: "Splide",
    emits: Ln.map((e) => `splide:${e}`),
    components: { SplideTrack: wi },
    props: {
      tag: { default: "div", type: String },
      options: { default: {}, type: Object },
      extensions: Object,
      transition: Function,
      hasTrack: { default: !0, type: Boolean },
      delayUnmount: { default: 1e3, type: Number },
    },
    setup(e, n) {
      const t = rn(),
        r = rn();
      gr(() => {
        r.value &&
          ((t.value = new en(r.value, e.options)),
          c(t.value),
          t.value.mount(e.extensions, e.transition));
      }),
        hr(() => {
          setTimeout(() => {
            var o;
            (o = t.value) == null || o.destroy();
          }, e.delayUnmount);
        }),
        _r(
          () => cr({}, e.options),
          (o) => {
            t.value && (t.value.options = o);
          },
          { deep: !0 }
        ),
        mr(sr, t);
      const i = an(() => {
          var o;
          return ((o = t.value) == null ? void 0 : o.index) || 0;
        }),
        l = an(() => {
          var o;
          return ((o = t.value) == null ? void 0 : o.length) || 0;
        });
      function a(o) {
        var u;
        (u = t.value) == null || u.go(o);
      }
      function s(o) {
        var u;
        (u = t.value) == null || u.sync(o);
      }
      function c(o) {
        Ln.forEach((u) => {
          o.on(u, (...h) => {
            n.emit(`splide:${u}`, o, ...h);
          });
        });
      }
      return { splide: t, root: r, index: i, length: l, go: a, sync: s };
    },
  });
function Pi(e, n, t, r, i, l) {
  const a = Ar("SplideTrack");
  return (
    st(),
    on(
      Tr(e.tag),
      { class: "splide", ref: "root" },
      {
        default: un(() => [
          e.hasTrack
            ? (st(),
              on(
                a,
                { key: 0 },
                { default: un(() => [ct(e.$slots, "default")]), _: 3 }
              ))
            : ct(e.$slots, "default", { key: 1 }),
        ]),
        _: 3,
      },
      512
    )
  );
}
const Fi = tn(Di, [["render", Pi]]),
  Mi = Vt({ name: "SplideSlide" }),
  Vi = { class: "splide__slide" };
function ki(e, n, t, r, i, l) {
  return st(), Nn("li", Vi, [ct(e.$slots, "default")]);
}
const $i = tn(Mi, [["render", ki]]);
export { Fi as S, $i as a, wi as b };
