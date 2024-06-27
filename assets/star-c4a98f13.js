import { _ as dt, o as vt, c as Et, b as mt } from "./index-754231d5.js";
/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ function pt(t) {
  t.length = 0;
}
function M(t, n, e) {
  return Array.prototype.slice.call(t, n, e);
}
function S(t) {
  return t.bind.apply(t, [null].concat(M(arguments, 1)));
}
function z(t) {
  return requestAnimationFrame(t);
}
function B(t, n) {
  return typeof n === t;
}
var k = Array.isArray;
S(B, "function");
S(B, "string");
S(B, "undefined");
function j(t) {
  return k(t) ? t : [t];
}
function H(t, n) {
  j(t).forEach(n);
}
var gt = Object.keys;
function yt(t, n, e) {
  if (t) {
    var r = gt(t);
    r = e ? r.reverse() : r;
    for (var i = 0; i < r.length; i++) {
      var u = r[i];
      if (u !== "__proto__" && n(t[u], u) === !1) break;
    }
  }
  return t;
}
function _t(t) {
  return (
    M(arguments, 1).forEach(function (n) {
      yt(n, function (e, r) {
        t[r] = n[r];
      });
    }),
    t
  );
}
var ht = Math.min;
function At() {
  var t = [];
  function n(s, f, a, l) {
    i(s, f, function (c, v, d) {
      var _ = "addEventListener" in c,
        E = _
          ? c.removeEventListener.bind(c, v, a, l)
          : c.removeListener.bind(c, a);
      _ ? c.addEventListener(v, a, l) : c.addListener(a),
        t.push([c, v, d, a, E]);
    });
  }
  function e(s, f, a) {
    i(s, f, function (l, c, v) {
      t = t.filter(function (d) {
        return d[0] === l && d[1] === c && d[2] === v && (!a || d[3] === a)
          ? (d[4](), !1)
          : !0;
      });
    });
  }
  function r(s, f, a) {
    var l,
      c = !0;
    return (
      typeof CustomEvent == "function"
        ? (l = new CustomEvent(f, { bubbles: c, detail: a }))
        : ((l = document.createEvent("CustomEvent")),
          l.initCustomEvent(f, c, !1, a)),
      s.dispatchEvent(l),
      l
    );
  }
  function i(s, f, a) {
    H(s, function (l) {
      l &&
        H(f, function (c) {
          c.split(" ").forEach(function (v) {
            var d = v.split(".");
            a(l, d[0], d[1]);
          });
        });
    });
  }
  function u() {
    t.forEach(function (s) {
      s[4]();
    }),
      pt(t);
  }
  return { bind: n, unbind: e, dispatch: r, destroy: u };
}
var K = "move",
  Y = "moved",
  bt = "updated",
  U = "drag",
  wt = "dragged",
  Z = "scroll",
  J = "scrolled",
  Lt = "destroy";
function Ot(t) {
  var n = t ? t.event.bus : document.createDocumentFragment(),
    e = At();
  function r(u, s) {
    e.bind(n, j(u).join(" "), function (f) {
      s.apply(s, k(f.detail) ? f.detail : []);
    });
  }
  function i(u) {
    e.dispatch(n, u, M(arguments, 1));
  }
  return (
    t && t.event.on(Lt, e.destroy),
    _t(e, { bus: n, on: r, off: S(e.unbind, n), emit: i })
  );
}
function tt(t, n, e, r) {
  var i = Date.now,
    u,
    s = 0,
    f,
    a = !0,
    l = 0;
  function c() {
    if (!a) {
      if (
        ((s = t ? ht((i() - u) / t, 1) : 1),
        e && e(s),
        s >= 1 && (n(), (u = i()), r && ++l >= r))
      )
        return d();
      z(c);
    }
  }
  function v(h) {
    !h && E(), (u = i() - (h ? s * t : 0)), (a = !1), z(c);
  }
  function d() {
    a = !0;
  }
  function _() {
    (u = i()), (s = 0), e && e(s);
  }
  function E() {
    f && cancelAnimationFrame(f), (s = 0), (f = 0), (a = !0);
  }
  function L(h) {
    t = h;
  }
  function A() {
    return a;
  }
  return { start: v, rewind: _, pause: d, cancel: E, set: L, isPaused: A };
}
function Tt(t, n) {
  var e;
  function r() {
    e ||
      ((e = tt(
        n || 0,
        function () {
          t(), (e = null);
        },
        null,
        1
      )),
      e.start());
  }
  return r;
}
var St = "is-active",
  Dt = "slide",
  xt = "fade";
function nt(t, n, e) {
  return Array.prototype.slice.call(t, n, e);
}
function F(t) {
  return t.bind(null, ...nt(arguments, 1));
}
function D(t, n) {
  return typeof n === t;
}
function P(t) {
  return !et(t) && D("object", t);
}
const Vt = Array.isArray;
F(D, "function");
F(D, "string");
const Nt = F(D, "undefined");
function et(t) {
  return t === null;
}
function $t(t) {
  return Vt(t) ? t : [t];
}
function T(t, n) {
  $t(t).forEach(n);
}
function It(t, n, e) {
  t &&
    T(n, (r) => {
      r && t.classList[e ? "add" : "remove"](r);
    });
}
const Pt = Object.keys;
function rt(t, n, e) {
  if (t) {
    let r = Pt(t);
    r = e ? r.reverse() : r;
    for (let i = 0; i < r.length; i++) {
      const u = r[i];
      if (u !== "__proto__" && n(t[u], u) === !1) break;
    }
  }
  return t;
}
function Q(t) {
  return (
    nt(arguments, 1).forEach((n) => {
      rt(n, (e, r) => {
        t[r] = n[r];
      });
    }),
    t
  );
}
function Mt(t, n) {
  T(t, (e) => {
    T(n, (r) => {
      e && e.removeAttribute(r);
    });
  });
}
function ot(t, n, e) {
  P(n)
    ? rt(n, (r, i) => {
        ot(t, i, r);
      })
    : T(t, (r) => {
        et(e) || e === "" ? Mt(r, n) : r.setAttribute(n, String(e));
      });
}
const { min: W, max: X, floor: Yt, ceil: Ut, abs: Zt } = Math;
function Bt(t, n, e) {
  const r = W(n, e),
    i = X(n, e);
  return W(X(r, t), i);
}
const Ft = { speed: 1, autoStart: !0, pauseOnHover: !0, pauseOnFocus: !0 },
  Rt = { startScroll: "Start auto scroll", pauseScroll: "Pause auto scroll" };
function Jt(t, n, e) {
  const { on: r, off: i, bind: u, unbind: s } = Ot(t),
    { translate: f, getPosition: a, toIndex: l, getLimit: c } = n.Move,
    { setIndex: v, getIndex: d } = n.Controller,
    { orient: _ } = n.Direction,
    { toggle: E } = n.Elements,
    { Live: L } = n,
    { root: A } = t,
    h = Tt(n.Arrows.update, 500);
  let m = {},
    p,
    g,
    x,
    V,
    N,
    O;
  function it() {
    const { autoScroll: o } = e;
    m = Q({}, Ft, P(o) ? o : {});
  }
  function R() {
    t.is(xt) || (!p && e.autoScroll !== !1 && ((p = tt(0, ct)), ut(), at()));
  }
  function C() {
    p &&
      (p.cancel(),
      (p = null),
      (O = void 0),
      i([K, U, Z, Y, J]),
      s(A, "mouseenter mouseleave focusin focusout"),
      s(E, "click"));
  }
  function ut() {
    m.pauseOnHover &&
      u(A, "mouseenter mouseleave", (o) => {
        (x = o.type === "mouseenter"), $();
      }),
      m.pauseOnFocus &&
        u(A, "focusin focusout", (o) => {
          (V = o.type === "focusin"), $();
        }),
      m.useToggleButton &&
        u(E, "click", () => {
          g ? b() : w();
        }),
      r(bt, st),
      r([K, U, Z], () => {
        (N = !0), w(!1);
      }),
      r([Y, wt, J], () => {
        (N = !1), $();
      });
  }
  function st() {
    const { autoScroll: o } = e;
    o !== !1 ? ((m = Q({}, m, P(o) ? o : {})), R()) : C(), p && !Nt(O) && f(O);
  }
  function at() {
    m.autoStart &&
      (document.readyState === "complete" ? b() : u(window, "load", b));
  }
  function b() {
    I() && (p.start(!0), L.disable(!0), (V = x = g = !1), G());
  }
  function w(o = !0) {
    g || ((g = o), G(), I() || (p.pause(), L.disable(!1)));
  }
  function $() {
    g || (x || V || N ? w(!1) : b());
  }
  function ct() {
    const o = a(),
      y = ft(o);
    o !== y
      ? (f(y), lt((O = a())))
      : (w(!1), m.rewind && t.go(m.speed > 0 ? 0 : n.Controller.getEnd())),
      h();
  }
  function ft(o) {
    const y = m.speed || 1;
    return (o += _(y)), t.is(Dt) && (o = Bt(o, c(!1), c(!0))), o;
  }
  function lt(o) {
    const { length: y } = t,
      q = (l(o) + y) % y;
    q !== d() &&
      (v(q),
      n.Slides.update(),
      n.Pagination.update(),
      e.lazyLoad === "nearby" && n.LazyLoad.check());
  }
  function G() {
    if (E) {
      const o = g ? "startScroll" : "pauseScroll";
      It(E, St, !g), ot(E, "aria-label", e.i18n[o] || Rt[o]);
    }
  }
  function I() {
    return !p || p.isPaused();
  }
  return { setup: it, mount: R, destroy: C, play: b, pause: w, isPaused: I };
}
const Ct = {},
  Gt = {
    role: "img",
    class: "svg-star",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 39 40",
    preserveAspectRatio: "xMidYMin meet",
  },
  qt = mt(
    "path",
    {
      fill: "currentColor",
      d: "M37.4485 22.2106c-7.3231 3.1644-12.6878 8.4671-15.8384 16.1644-.8515 2.1382-3.7467 2.1382-4.6834 0-3.2358-7.3552-8.345-12.7434-15.41269-15.9934-2.128816-1.0263-1.958511-3.8487.17031-4.7039C9.00747 14.9408 14.0315 9.80924 16.9267 2.71056c.8515-2.13816 3.8319-2.394739 4.6834-.34211 2.81 6.92764 8.0044 12.05925 15.6681 15.05265 2.214.8553 2.2991 3.7631.0852 4.7039l.0851.0856Z",
    },
    null,
    -1
  ),
  zt = [qt];
function Ht(t, n) {
  return vt(), Et("svg", Gt, zt);
}
const Qt = dt(Ct, [["render", Ht]]);
export { Jt as A, Qt as s };
