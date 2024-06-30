import {
  $ as h,
  a0 as b,
  a1 as v,
  a2 as g,
  n as w,
  a3 as C,
  a4 as O,
  a5 as T,
  j as I,
  a6 as L,
  a7 as R,
  a8 as $,
  a9 as _,
  x as j,
  y as k,
  s as z,
} from "./index-754231d5.js";
import { s as x, i as H } from "./home-52e6e4d5.js";
function M(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, t[0]);
    case 2:
      return n.call(e, t[0], t[1]);
    case 3:
      return n.call(e, t[0], t[1], t[2]);
  }
  return n.apply(e, t);
}
var N = 800,
  P = 16,
  D = Date.now;
function E(n) {
  var e = 0,
    t = 0;
  return function () {
    var r = D(),
      i = P - (r - t);
    if (((t = r), i > 0)) {
      if (++e >= N) return arguments[0];
    } else e = 0;
    return n.apply(void 0, arguments);
  };
}
function F(n) {
  return function () {
    return n;
  };
}
var U = h
  ? function (n, e) {
      return h(n, "toString", {
        configurable: !0,
        enumerable: !1,
        value: F(e),
        writable: !0,
      });
    }
  : b;
const G = U;
var W = E(G);
const Y = W;
function Z(n, e) {
  var t = n == null ? 0 : n.length;
  return !!t && v(n, e, 0) > -1;
}
var d = Math.max;
function q(n, e, t) {
  return (
    (e = d(e === void 0 ? n.length - 1 : e, 0)),
    function () {
      for (
        var r = arguments, i = -1, f = d(r.length - e, 0), s = Array(f);
        ++i < f;

      )
        s[i] = r[e + i];
      i = -1;
      for (var a = Array(e + 1); ++i < e; ) a[i] = r[i];
      return (a[e] = t(s)), M(n, this, a);
    }
  );
}
function B(n, e) {
  return Y(q(n, e, b), n + "");
}
var S = g ? g.isConcatSpreadable : void 0;
function J(n) {
  return w(n) || C(n) || !!(S && n && n[S]);
}
function A(n, e, t, r, i) {
  var f = -1,
    s = n.length;
  for (t || (t = J), i || (i = []); ++f < s; ) {
    var a = n[f];
    e > 0 && t(a)
      ? e > 1
        ? A(a, e - 1, t, r, i)
        : O(i, a)
      : r || (i[i.length] = a);
  }
  return i;
}
function m(n, e, t) {
  return (
    n === n &&
      (t !== void 0 && (n = n <= t ? n : t),
      e !== void 0 && (n = n >= e ? n : e)),
    n
  );
}
function y(n) {
  return T(n) && I(n);
}
function K(n, e, t) {
  for (var r = -1, i = n == null ? 0 : n.length; ++r < i; )
    if (t(e, n[r])) return !0;
  return !1;
}
var Q = 200;
function V(n, e, t, r) {
  var i = -1,
    f = Z,
    s = !0,
    a = n.length,
    u = [],
    p = e.length;
  if (!a) return u;
  t && (e = L(e, R(t))),
    r
      ? ((f = K), (s = !1))
      : e.length >= Q && ((f = _), (s = !1), (e = new $(e)));
  n: for (; ++i < a; ) {
    var l = n[i],
      o = t == null ? l : t(l);
    if (((l = r || l !== 0 ? l : 0), s && o === o)) {
      for (var c = p; c--; ) if (e[c] === o) continue n;
      u.push(l);
    } else f(e, o, r) || u.push(l);
  }
  return u;
}
var X = B(function (n, e) {
  return y(n) ? V(n, A(e, 1, y, !0)) : [];
});
const an = X;
function fn(n) {
  var e = n == null ? 0 : n.length;
  return e ? n[e - 1] : void 0;
}
function nn(n, e) {
  return x(j(n), m(e, 0, n.length));
}
function en(n, e) {
  var t = k(n);
  return x(t, m(e, 0, t.length));
}
function sn(n, e, t) {
  (t ? H(n, e, t) : e === void 0) ? (e = 1) : (e = z(e));
  var r = w(n) ? nn : en;
  return r(n, e);
}
export { an as d, fn as l, sn as s };
