import {
  _ as Ve,
  o as J,
  c as X,
  G as ue,
  R as ze,
  J as j,
  r as Ie,
  b as ce,
  F as ve,
  d as he,
  e as ge,
  N as Te,
  S as Be,
  t as Ee,
  D as Le,
  h as Re,
} from "./index-754231d5.js";
import { f as Qe } from "./filter-b9302deb.js";
function Ke(A, d) {
  for (var C = 0; C < d.length; C++) {
    const B = d[C];
    if (typeof B != "string" && !Array.isArray(B)) {
      for (const h in B)
        if (h !== "default" && !(h in A)) {
          const e = Object.getOwnPropertyDescriptor(B, h);
          e &&
            Object.defineProperty(
              A,
              h,
              e.get ? e : { enumerable: !0, get: () => B[h] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(A, Symbol.toStringTag, { value: "Module" })
  );
}
var me =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Je(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var Fe = {
  decomp: at,
  quickDecomp: b,
  isSimple: st,
  removeCollinearPoints: ot,
  removeDuplicatePoints: lt,
  makeCCW: _e,
};
function Xe(A, d, C) {
  C = C || 0;
  var B = [0, 0],
    h,
    e,
    o,
    r,
    a,
    u,
    l;
  return (
    (h = A[1][1] - A[0][1]),
    (e = A[0][0] - A[1][0]),
    (o = h * A[0][0] + e * A[0][1]),
    (r = d[1][1] - d[0][1]),
    (a = d[0][0] - d[1][0]),
    (u = r * d[0][0] + a * d[0][1]),
    (l = h * a - r * e),
    oe(l, 0, C) || ((B[0] = (a * o - e * u) / l), (B[1] = (h * u - r * o) / l)),
    B
  );
}
function pe(A, d, C, B) {
  var h = d[0] - A[0],
    e = d[1] - A[1],
    o = B[0] - C[0],
    r = B[1] - C[1];
  if (o * e - r * h === 0) return !1;
  var a = (h * (C[1] - A[1]) + e * (A[0] - C[0])) / (o * e - r * h),
    u = (o * (A[1] - C[1]) + r * (C[0] - A[0])) / (r * h - o * e);
  return a >= 0 && a <= 1 && u >= 0 && u <= 1;
}
function te(A, d, C) {
  return (d[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (d[1] - A[1]);
}
function ae(A, d, C) {
  return te(A, d, C) > 0;
}
function xe(A, d, C) {
  return te(A, d, C) >= 0;
}
function Oe(A, d, C) {
  return te(A, d, C) < 0;
}
function _(A, d, C) {
  return te(A, d, C) <= 0;
}
var Ye = [],
  qe = [];
function je(A, d, C, B) {
  if (B) {
    var h = Ye,
      e = qe;
    (h[0] = d[0] - A[0]),
      (h[1] = d[1] - A[1]),
      (e[0] = C[0] - d[0]),
      (e[1] = C[1] - d[1]);
    var o = h[0] * e[0] + h[1] * e[1],
      r = Math.sqrt(h[0] * h[0] + h[1] * h[1]),
      a = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      u = Math.acos(o / (r * a));
    return u < B;
  } else return te(A, d, C) === 0;
}
function ee(A, d) {
  var C = d[0] - A[0],
    B = d[1] - A[1];
  return C * C + B * B;
}
function D(A, d) {
  var C = A.length;
  return A[d < 0 ? (d % C) + C : d % C];
}
function be(A) {
  A.length = 0;
}
function Q(A, d, C, B) {
  for (var h = C; h < B; h++) A.push(d[h]);
}
function _e(A) {
  for (var d = 0, C = A, B = 1; B < A.length; ++B)
    (C[B][1] < C[d][1] || (C[B][1] === C[d][1] && C[B][0] > C[d][0])) &&
      (d = B);
  return ae(D(A, d - 1), D(A, d), D(A, d + 1)) ? !1 : (et(A), !0);
}
function et(A) {
  for (var d = [], C = A.length, B = 0; B !== C; B++) d.push(A.pop());
  for (var B = 0; B !== C; B++) A[B] = d[B];
}
function ke(A, d) {
  return Oe(D(A, d - 1), D(A, d), D(A, d + 1));
}
var tt = [],
  nt = [];
function it(A, d, C) {
  var B,
    h,
    e = tt,
    o = nt;
  if (xe(D(A, d + 1), D(A, d), D(A, C)) && _(D(A, d - 1), D(A, d), D(A, C)))
    return !1;
  h = ee(D(A, d), D(A, C));
  for (var r = 0; r !== A.length; ++r)
    if (
      !((r + 1) % A.length === d || r === d) &&
      xe(D(A, d), D(A, C), D(A, r + 1)) &&
      _(D(A, d), D(A, C), D(A, r)) &&
      ((e[0] = D(A, d)),
      (e[1] = D(A, C)),
      (o[0] = D(A, r)),
      (o[1] = D(A, r + 1)),
      (B = Xe(e, o)),
      ee(D(A, d), B) < h)
    )
      return !1;
  return !0;
}
function rt(A, d, C) {
  for (var B = 0; B !== A.length; ++B)
    if (
      !(
        B === d ||
        B === C ||
        (B + 1) % A.length === d ||
        (B + 1) % A.length === C
      ) &&
      pe(D(A, d), D(A, C), D(A, B), D(A, B + 1))
    )
      return !1;
  return !0;
}
function se(A, d, C, B) {
  var h = B || [];
  if ((be(h), d < C)) for (var e = d; e <= C; e++) h.push(A[e]);
  else {
    for (var e = 0; e <= C; e++) h.push(A[e]);
    for (var e = d; e < A.length; e++) h.push(A[e]);
  }
  return h;
}
function de(A) {
  for (
    var d = [], C = [], B = [], h = [], e = Number.MAX_VALUE, o = 0;
    o < A.length;
    ++o
  )
    if (ke(A, o)) {
      for (var r = 0; r < A.length; ++r)
        if (it(A, o, r)) {
          (C = de(se(A, o, r, h))), (B = de(se(A, r, o, h)));
          for (var a = 0; a < B.length; a++) C.push(B[a]);
          C.length < e && ((d = C), (e = C.length), d.push([D(A, o), D(A, r)]));
        }
    }
  return d;
}
function at(A) {
  var d = de(A);
  return d.length > 0 ? He(A, d) : [A];
}
function He(A, d) {
  if (d.length === 0) return [A];
  if (
    d instanceof Array &&
    d.length &&
    d[0] instanceof Array &&
    d[0].length === 2 &&
    d[0][0] instanceof Array
  ) {
    for (var C = [A], B = 0; B < d.length; B++)
      for (var h = d[B], e = 0; e < C.length; e++) {
        var o = C[e],
          r = He(o, h);
        if (r) {
          C.splice(e, 1), C.push(r[0], r[1]);
          break;
        }
      }
    return C;
  } else {
    var h = d,
      B = A.indexOf(h[0]),
      e = A.indexOf(h[1]);
    return B !== -1 && e !== -1 ? [se(A, B, e), se(A, e, B)] : !1;
  }
}
function st(A) {
  var d = A,
    C;
  for (C = 0; C < d.length - 1; C++)
    for (var B = 0; B < C - 1; B++)
      if (pe(d[C], d[C + 1], d[B], d[B + 1])) return !1;
  for (C = 1; C < d.length - 2; C++)
    if (pe(d[0], d[d.length - 1], d[C], d[C + 1])) return !1;
  return !0;
}
function De(A, d, C, B, h) {
  h = h || 0;
  var e = d[1] - A[1],
    o = A[0] - d[0],
    r = e * A[0] + o * A[1],
    a = B[1] - C[1],
    u = C[0] - B[0],
    l = a * C[0] + u * C[1],
    v = e * u - a * o;
  return oe(v, 0, h) ? [0, 0] : [(u * r - o * l) / v, (e * l - a * r) / v];
}
function b(A, d, C, B, h, e, o) {
  (e = e || 100),
    (o = o || 0),
    (h = h || 25),
    (d = typeof d < "u" ? d : []),
    (C = C || []),
    (B = B || []);
  var r = [0, 0],
    a = [0, 0],
    u = [0, 0],
    l = 0,
    v = 0,
    s = 0,
    t = 0,
    n = 0,
    i = 0,
    f = 0,
    g = [],
    S = [],
    x = A,
    M = A;
  if (M.length < 3) return d;
  if ((o++, o > e))
    return console.warn("quickDecomp: max level (" + e + ") reached."), d;
  for (var c = 0; c < A.length; ++c)
    if (ke(x, c)) {
      C.push(x[c]), (l = v = Number.MAX_VALUE);
      for (var m = 0; m < A.length; ++m)
        ae(D(x, c - 1), D(x, c), D(x, m)) &&
          _(D(x, c - 1), D(x, c), D(x, m - 1)) &&
          ((u = De(D(x, c - 1), D(x, c), D(x, m), D(x, m - 1))),
          Oe(D(x, c + 1), D(x, c), u) &&
            ((s = ee(x[c], u)), s < v && ((v = s), (a = u), (i = m)))),
          ae(D(x, c + 1), D(x, c), D(x, m + 1)) &&
            _(D(x, c + 1), D(x, c), D(x, m)) &&
            ((u = De(D(x, c + 1), D(x, c), D(x, m), D(x, m + 1))),
            ae(D(x, c - 1), D(x, c), u) &&
              ((s = ee(x[c], u)), s < l && ((l = s), (r = u), (n = m))));
      if (i === (n + 1) % A.length)
        (u[0] = (a[0] + r[0]) / 2),
          (u[1] = (a[1] + r[1]) / 2),
          B.push(u),
          c < n
            ? (Q(g, x, c, n + 1),
              g.push(u),
              S.push(u),
              i !== 0 && Q(S, x, i, x.length),
              Q(S, x, 0, c + 1))
            : (c !== 0 && Q(g, x, c, x.length),
              Q(g, x, 0, n + 1),
              g.push(u),
              S.push(u),
              Q(S, x, i, c + 1));
      else {
        if ((i > n && (n += A.length), (t = Number.MAX_VALUE), n < i)) return d;
        for (var m = i; m <= n; ++m)
          xe(D(x, c - 1), D(x, c), D(x, m)) &&
            _(D(x, c + 1), D(x, c), D(x, m)) &&
            ((s = ee(D(x, c), D(x, m))),
            s < t && rt(x, c, m) && ((t = s), (f = m % A.length)));
        c < f
          ? (Q(g, x, c, f + 1),
            f !== 0 && Q(S, x, f, M.length),
            Q(S, x, 0, c + 1))
          : (c !== 0 && Q(g, x, c, M.length),
            Q(g, x, 0, f + 1),
            Q(S, x, f, c + 1));
      }
      return (
        g.length < S.length
          ? (b(g, d, C, B, h, e, o), b(S, d, C, B, h, e, o))
          : (b(S, d, C, B, h, e, o), b(g, d, C, B, h, e, o)),
        d
      );
    }
  return d.push(A), d;
}
function ot(A, d) {
  for (var C = 0, B = A.length - 1; A.length > 3 && B >= 0; --B)
    je(D(A, B - 1), D(A, B), D(A, B + 1), d) &&
      (A.splice(B % A.length, 1), C++);
  return C;
}
function lt(A, d) {
  for (var C = A.length - 1; C >= 1; --C)
    for (var B = A[C], h = C - 1; h >= 0; --h)
      if (ft(B, A[h], d)) {
        A.splice(C, 1);
        continue;
      }
}
function oe(A, d, C) {
  return (C = C || 0), Math.abs(A - d) <= C;
}
function ft(A, d, C) {
  return oe(A[0], d[0], C) && oe(A[1], d[1], C);
}
const ut = Je(Fe),
  ct = Ke({ __proto__: null, default: ut }, [Fe]);
var We = { exports: {} };
/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Liam Brummitt and contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function (A, d) {
  (function (B, h) {
    A.exports = h();
  })(me, function () {
    return (function (C) {
      var B = {};
      function h(e) {
        if (B[e]) return B[e].exports;
        var o = (B[e] = { i: e, l: !1, exports: {} });
        return C[e].call(o.exports, o, o.exports, h), (o.l = !0), o.exports;
      }
      return (
        (h.m = C),
        (h.c = B),
        (h.d = function (e, o, r) {
          h.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: r });
        }),
        (h.r = function (e) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (h.t = function (e, o) {
          if (
            (o & 1 && (e = h(e)),
            o & 8 || (o & 4 && typeof e == "object" && e && e.__esModule))
          )
            return e;
          var r = Object.create(null);
          if (
            (h.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            o & 2 && typeof e != "string")
          )
            for (var a in e)
              h.d(
                r,
                a,
                function (u) {
                  return e[u];
                }.bind(null, a)
              );
          return r;
        }),
        (h.n = function (e) {
          var o =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return h.d(o, "a", o), o;
        }),
        (h.o = function (e, o) {
          return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (h.p = ""),
        h((h.s = 20))
      );
    })([
      function (C, B) {
        var h = {};
        (C.exports = h),
          (function () {
            (h._baseDelta = 1e3 / 60),
              (h._nextId = 0),
              (h._seed = 0),
              (h._nowStartTime = +new Date()),
              (h._warnedOnce = {}),
              (h._decomp = null),
              (h.extend = function (o, r) {
                var a, u;
                typeof r == "boolean"
                  ? ((a = 2), (u = r))
                  : ((a = 1), (u = !0));
                for (var l = a; l < arguments.length; l++) {
                  var v = arguments[l];
                  if (v)
                    for (var s in v)
                      u &&
                      v[s] &&
                      v[s].constructor === Object &&
                      (!o[s] || o[s].constructor === Object)
                        ? ((o[s] = o[s] || {}), h.extend(o[s], u, v[s]))
                        : (o[s] = v[s]);
                }
                return o;
              }),
              (h.clone = function (o, r) {
                return h.extend({}, r, o);
              }),
              (h.keys = function (o) {
                if (Object.keys) return Object.keys(o);
                var r = [];
                for (var a in o) r.push(a);
                return r;
              }),
              (h.values = function (o) {
                var r = [];
                if (Object.keys) {
                  for (var a = Object.keys(o), u = 0; u < a.length; u++)
                    r.push(o[a[u]]);
                  return r;
                }
                for (var l in o) r.push(o[l]);
                return r;
              }),
              (h.get = function (o, r, a, u) {
                r = r.split(".").slice(a, u);
                for (var l = 0; l < r.length; l += 1) o = o[r[l]];
                return o;
              }),
              (h.set = function (o, r, a, u, l) {
                var v = r.split(".").slice(u, l);
                return (h.get(o, r, 0, -1)[v[v.length - 1]] = a), a;
              }),
              (h.shuffle = function (o) {
                for (var r = o.length - 1; r > 0; r--) {
                  var a = Math.floor(h.random() * (r + 1)),
                    u = o[r];
                  (o[r] = o[a]), (o[a] = u);
                }
                return o;
              }),
              (h.choose = function (o) {
                return o[Math.floor(h.random() * o.length)];
              }),
              (h.isElement = function (o) {
                return typeof HTMLElement < "u"
                  ? o instanceof HTMLElement
                  : !!(o && o.nodeType && o.nodeName);
              }),
              (h.isArray = function (o) {
                return Object.prototype.toString.call(o) === "[object Array]";
              }),
              (h.isFunction = function (o) {
                return typeof o == "function";
              }),
              (h.isPlainObject = function (o) {
                return typeof o == "object" && o.constructor === Object;
              }),
              (h.isString = function (o) {
                return toString.call(o) === "[object String]";
              }),
              (h.clamp = function (o, r, a) {
                return o < r ? r : o > a ? a : o;
              }),
              (h.sign = function (o) {
                return o < 0 ? -1 : 1;
              }),
              (h.now = function () {
                if (typeof window < "u" && window.performance) {
                  if (window.performance.now) return window.performance.now();
                  if (window.performance.webkitNow)
                    return window.performance.webkitNow();
                }
                return Date.now ? Date.now() : new Date() - h._nowStartTime;
              }),
              (h.random = function (o, r) {
                return (
                  (o = typeof o < "u" ? o : 0),
                  (r = typeof r < "u" ? r : 1),
                  o + e() * (r - o)
                );
              });
            var e = function () {
              return (
                (h._seed = (h._seed * 9301 + 49297) % 233280), h._seed / 233280
              );
            };
            (h.colorToNumber = function (o) {
              return (
                (o = o.replace("#", "")),
                o.length == 3 &&
                  (o =
                    o.charAt(0) +
                    o.charAt(0) +
                    o.charAt(1) +
                    o.charAt(1) +
                    o.charAt(2) +
                    o.charAt(2)),
                parseInt(o, 16)
              );
            }),
              (h.logLevel = 1),
              (h.log = function () {
                console &&
                  h.logLevel > 0 &&
                  h.logLevel <= 3 &&
                  console.log.apply(
                    console,
                    ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                  );
              }),
              (h.info = function () {
                console &&
                  h.logLevel > 0 &&
                  h.logLevel <= 2 &&
                  console.info.apply(
                    console,
                    ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                  );
              }),
              (h.warn = function () {
                console &&
                  h.logLevel > 0 &&
                  h.logLevel <= 3 &&
                  console.warn.apply(
                    console,
                    ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                  );
              }),
              (h.warnOnce = function () {
                var o = Array.prototype.slice.call(arguments).join(" ");
                h._warnedOnce[o] || (h.warn(o), (h._warnedOnce[o] = !0));
              }),
              (h.deprecated = function (o, r, a) {
                o[r] = h.chain(function () {
                  h.warnOnce("🔅 deprecated 🔅", a);
                }, o[r]);
              }),
              (h.nextId = function () {
                return h._nextId++;
              }),
              (h.indexOf = function (o, r) {
                if (o.indexOf) return o.indexOf(r);
                for (var a = 0; a < o.length; a++) if (o[a] === r) return a;
                return -1;
              }),
              (h.map = function (o, r) {
                if (o.map) return o.map(r);
                for (var a = [], u = 0; u < o.length; u += 1) a.push(r(o[u]));
                return a;
              }),
              (h.topologicalSort = function (o) {
                var r = [],
                  a = [],
                  u = [];
                for (var l in o)
                  !a[l] && !u[l] && h._topologicalSort(l, a, u, o, r);
                return r;
              }),
              (h._topologicalSort = function (o, r, a, u, l) {
                var v = u[o] || [];
                a[o] = !0;
                for (var s = 0; s < v.length; s += 1) {
                  var t = v[s];
                  a[t] || r[t] || h._topologicalSort(t, r, a, u, l);
                }
                (a[o] = !1), (r[o] = !0), l.push(o);
              }),
              (h.chain = function () {
                for (var o = [], r = 0; r < arguments.length; r += 1) {
                  var a = arguments[r];
                  a._chained ? o.push.apply(o, a._chained) : o.push(a);
                }
                var u = function () {
                  for (
                    var l,
                      v = new Array(arguments.length),
                      s = 0,
                      t = arguments.length;
                    s < t;
                    s++
                  )
                    v[s] = arguments[s];
                  for (s = 0; s < o.length; s += 1) {
                    var n = o[s].apply(l, v);
                    typeof n < "u" && (l = n);
                  }
                  return l;
                };
                return (u._chained = o), u;
              }),
              (h.chainPathBefore = function (o, r, a) {
                return h.set(o, r, h.chain(a, h.get(o, r)));
              }),
              (h.chainPathAfter = function (o, r, a) {
                return h.set(o, r, h.chain(h.get(o, r), a));
              }),
              (h.setDecomp = function (o) {
                h._decomp = o;
              }),
              (h.getDecomp = function () {
                var o = h._decomp;
                try {
                  !o && typeof window < "u" && (o = window.decomp),
                    !o && typeof me < "u" && (o = me.decomp);
                } catch {
                  o = null;
                }
                return o;
              });
          })();
      },
      function (C, B) {
        var h = {};
        (C.exports = h),
          (function () {
            (h.create = function (e) {
              var o = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
              return e && h.update(o, e), o;
            }),
              (h.update = function (e, o, r) {
                (e.min.x = 1 / 0),
                  (e.max.x = -1 / 0),
                  (e.min.y = 1 / 0),
                  (e.max.y = -1 / 0);
                for (var a = 0; a < o.length; a++) {
                  var u = o[a];
                  u.x > e.max.x && (e.max.x = u.x),
                    u.x < e.min.x && (e.min.x = u.x),
                    u.y > e.max.y && (e.max.y = u.y),
                    u.y < e.min.y && (e.min.y = u.y);
                }
                r &&
                  (r.x > 0 ? (e.max.x += r.x) : (e.min.x += r.x),
                  r.y > 0 ? (e.max.y += r.y) : (e.min.y += r.y));
              }),
              (h.contains = function (e, o) {
                return (
                  o.x >= e.min.x &&
                  o.x <= e.max.x &&
                  o.y >= e.min.y &&
                  o.y <= e.max.y
                );
              }),
              (h.overlaps = function (e, o) {
                return (
                  e.min.x <= o.max.x &&
                  e.max.x >= o.min.x &&
                  e.max.y >= o.min.y &&
                  e.min.y <= o.max.y
                );
              }),
              (h.translate = function (e, o) {
                (e.min.x += o.x),
                  (e.max.x += o.x),
                  (e.min.y += o.y),
                  (e.max.y += o.y);
              }),
              (h.shift = function (e, o) {
                var r = e.max.x - e.min.x,
                  a = e.max.y - e.min.y;
                (e.min.x = o.x),
                  (e.max.x = o.x + r),
                  (e.min.y = o.y),
                  (e.max.y = o.y + a);
              });
          })();
      },
      function (C, B) {
        var h = {};
        (C.exports = h),
          (function () {
            (h.create = function (e, o) {
              return { x: e || 0, y: o || 0 };
            }),
              (h.clone = function (e) {
                return { x: e.x, y: e.y };
              }),
              (h.magnitude = function (e) {
                return Math.sqrt(e.x * e.x + e.y * e.y);
              }),
              (h.magnitudeSquared = function (e) {
                return e.x * e.x + e.y * e.y;
              }),
              (h.rotate = function (e, o, r) {
                var a = Math.cos(o),
                  u = Math.sin(o);
                r || (r = {});
                var l = e.x * a - e.y * u;
                return (r.y = e.x * u + e.y * a), (r.x = l), r;
              }),
              (h.rotateAbout = function (e, o, r, a) {
                var u = Math.cos(o),
                  l = Math.sin(o);
                a || (a = {});
                var v = r.x + ((e.x - r.x) * u - (e.y - r.y) * l);
                return (
                  (a.y = r.y + ((e.x - r.x) * l + (e.y - r.y) * u)),
                  (a.x = v),
                  a
                );
              }),
              (h.normalise = function (e) {
                var o = h.magnitude(e);
                return o === 0 ? { x: 0, y: 0 } : { x: e.x / o, y: e.y / o };
              }),
              (h.dot = function (e, o) {
                return e.x * o.x + e.y * o.y;
              }),
              (h.cross = function (e, o) {
                return e.x * o.y - e.y * o.x;
              }),
              (h.cross3 = function (e, o, r) {
                return (o.x - e.x) * (r.y - e.y) - (o.y - e.y) * (r.x - e.x);
              }),
              (h.add = function (e, o, r) {
                return r || (r = {}), (r.x = e.x + o.x), (r.y = e.y + o.y), r;
              }),
              (h.sub = function (e, o, r) {
                return r || (r = {}), (r.x = e.x - o.x), (r.y = e.y - o.y), r;
              }),
              (h.mult = function (e, o) {
                return { x: e.x * o, y: e.y * o };
              }),
              (h.div = function (e, o) {
                return { x: e.x / o, y: e.y / o };
              }),
              (h.perp = function (e, o) {
                return (o = o === !0 ? -1 : 1), { x: o * -e.y, y: o * e.x };
              }),
              (h.neg = function (e) {
                return { x: -e.x, y: -e.y };
              }),
              (h.angle = function (e, o) {
                return Math.atan2(o.y - e.y, o.x - e.x);
              }),
              (h._temp = [
                h.create(),
                h.create(),
                h.create(),
                h.create(),
                h.create(),
                h.create(),
              ]);
          })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(2),
          r = h(0);
        (function () {
          (e.create = function (a, u) {
            for (var l = [], v = 0; v < a.length; v++) {
              var s = a[v],
                t = { x: s.x, y: s.y, index: v, body: u, isInternal: !1 };
              l.push(t);
            }
            return l;
          }),
            (e.fromPath = function (a, u) {
              var l = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                v = [];
              return (
                a.replace(l, function (s, t, n) {
                  v.push({ x: parseFloat(t), y: parseFloat(n) });
                }),
                e.create(v, u)
              );
            }),
            (e.centre = function (a) {
              for (
                var u = e.area(a, !0), l = { x: 0, y: 0 }, v, s, t, n = 0;
                n < a.length;
                n++
              )
                (t = (n + 1) % a.length),
                  (v = o.cross(a[n], a[t])),
                  (s = o.mult(o.add(a[n], a[t]), v)),
                  (l = o.add(l, s));
              return o.div(l, 6 * u);
            }),
            (e.mean = function (a) {
              for (var u = { x: 0, y: 0 }, l = 0; l < a.length; l++)
                (u.x += a[l].x), (u.y += a[l].y);
              return o.div(u, a.length);
            }),
            (e.area = function (a, u) {
              for (var l = 0, v = a.length - 1, s = 0; s < a.length; s++)
                (l += (a[v].x - a[s].x) * (a[v].y + a[s].y)), (v = s);
              return u ? l / 2 : Math.abs(l) / 2;
            }),
            (e.inertia = function (a, u) {
              for (var l = 0, v = 0, s = a, t, n, i = 0; i < s.length; i++)
                (n = (i + 1) % s.length),
                  (t = Math.abs(o.cross(s[n], s[i]))),
                  (l +=
                    t *
                    (o.dot(s[n], s[n]) +
                      o.dot(s[n], s[i]) +
                      o.dot(s[i], s[i]))),
                  (v += t);
              return (u / 6) * (l / v);
            }),
            (e.translate = function (a, u, l) {
              l = typeof l < "u" ? l : 1;
              var v = a.length,
                s = u.x * l,
                t = u.y * l,
                n;
              for (n = 0; n < v; n++) (a[n].x += s), (a[n].y += t);
              return a;
            }),
            (e.rotate = function (a, u, l) {
              if (u !== 0) {
                var v = Math.cos(u),
                  s = Math.sin(u),
                  t = l.x,
                  n = l.y,
                  i = a.length,
                  f,
                  g,
                  S,
                  x;
                for (x = 0; x < i; x++)
                  (f = a[x]),
                    (g = f.x - t),
                    (S = f.y - n),
                    (f.x = t + (g * v - S * s)),
                    (f.y = n + (g * s + S * v));
                return a;
              }
            }),
            (e.contains = function (a, u) {
              for (
                var l = u.x, v = u.y, s = a.length, t = a[s - 1], n, i = 0;
                i < s;
                i++
              ) {
                if (
                  ((n = a[i]),
                  (l - t.x) * (n.y - t.y) + (v - t.y) * (t.x - n.x) > 0)
                )
                  return !1;
                t = n;
              }
              return !0;
            }),
            (e.scale = function (a, u, l, v) {
              if (u === 1 && l === 1) return a;
              v = v || e.centre(a);
              for (var s, t, n = 0; n < a.length; n++)
                (s = a[n]),
                  (t = o.sub(s, v)),
                  (a[n].x = v.x + t.x * u),
                  (a[n].y = v.y + t.y * l);
              return a;
            }),
            (e.chamfer = function (a, u, l, v, s) {
              typeof u == "number" ? (u = [u]) : (u = u || [8]),
                (l = typeof l < "u" ? l : -1),
                (v = v || 2),
                (s = s || 14);
              for (var t = [], n = 0; n < a.length; n++) {
                var i = a[n - 1 >= 0 ? n - 1 : a.length - 1],
                  f = a[n],
                  g = a[(n + 1) % a.length],
                  S = u[n < u.length ? n : u.length - 1];
                if (S === 0) {
                  t.push(f);
                  continue;
                }
                var x = o.normalise({ x: f.y - i.y, y: i.x - f.x }),
                  M = o.normalise({ x: g.y - f.y, y: f.x - g.x }),
                  c = Math.sqrt(2 * Math.pow(S, 2)),
                  m = o.mult(r.clone(x), S),
                  y = o.normalise(o.mult(o.add(x, M), 0.5)),
                  p = o.sub(f, o.mult(y, c)),
                  P = l;
                l === -1 && (P = Math.pow(S, 0.32) * 1.75),
                  (P = r.clamp(P, v, s)),
                  P % 2 === 1 && (P += 1);
                for (
                  var w = Math.acos(o.dot(x, M)), T = w / P, I = 0;
                  I < P;
                  I++
                )
                  t.push(o.add(o.rotate(m, T * I), p));
              }
              return t;
            }),
            (e.clockwiseSort = function (a) {
              var u = e.mean(a);
              return (
                a.sort(function (l, v) {
                  return o.angle(u, l) - o.angle(u, v);
                }),
                a
              );
            }),
            (e.isConvex = function (a) {
              var u = 0,
                l = a.length,
                v,
                s,
                t,
                n;
              if (l < 3) return null;
              for (v = 0; v < l; v++)
                if (
                  ((s = (v + 1) % l),
                  (t = (v + 2) % l),
                  (n = (a[s].x - a[v].x) * (a[t].y - a[s].y)),
                  (n -= (a[s].y - a[v].y) * (a[t].x - a[s].x)),
                  n < 0 ? (u |= 1) : n > 0 && (u |= 2),
                  u === 3)
                )
                  return !1;
              return u !== 0 ? !0 : null;
            }),
            (e.hull = function (a) {
              var u = [],
                l = [],
                v,
                s;
              for (
                a = a.slice(0),
                  a.sort(function (t, n) {
                    var i = t.x - n.x;
                    return i !== 0 ? i : t.y - n.y;
                  }),
                  s = 0;
                s < a.length;
                s += 1
              ) {
                for (
                  v = a[s];
                  l.length >= 2 &&
                  o.cross3(l[l.length - 2], l[l.length - 1], v) <= 0;

                )
                  l.pop();
                l.push(v);
              }
              for (s = a.length - 1; s >= 0; s -= 1) {
                for (
                  v = a[s];
                  u.length >= 2 &&
                  o.cross3(u[u.length - 2], u[u.length - 1], v) <= 0;

                )
                  u.pop();
                u.push(v);
              }
              return u.pop(), l.pop(), u.concat(l);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(2),
          a = h(7),
          u = h(0),
          l = h(1),
          v = h(11);
        (function () {
          (e._timeCorrection = !0),
            (e._inertiaScale = 4),
            (e._nextCollidingGroupId = 1),
            (e._nextNonCollidingGroupId = -1),
            (e._nextCategory = 1),
            (e._baseDelta = 1e3 / 60),
            (e.create = function (t) {
              var n = {
                  id: u.nextId(),
                  type: "body",
                  label: "Body",
                  parts: [],
                  plugin: {},
                  angle: 0,
                  vertices: o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                  position: { x: 0, y: 0 },
                  force: { x: 0, y: 0 },
                  torque: 0,
                  positionImpulse: { x: 0, y: 0 },
                  constraintImpulse: { x: 0, y: 0, angle: 0 },
                  totalContacts: 0,
                  speed: 0,
                  angularSpeed: 0,
                  velocity: { x: 0, y: 0 },
                  angularVelocity: 0,
                  isSensor: !1,
                  isStatic: !1,
                  isSleeping: !1,
                  motion: 0,
                  sleepThreshold: 60,
                  density: 0.001,
                  restitution: 0,
                  friction: 0.1,
                  frictionStatic: 0.5,
                  frictionAir: 0.01,
                  collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                  slop: 0.05,
                  timeScale: 1,
                  render: {
                    visible: !0,
                    opacity: 1,
                    strokeStyle: null,
                    fillStyle: null,
                    lineWidth: null,
                    sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                  },
                  events: null,
                  bounds: null,
                  chamfer: null,
                  circleRadius: 0,
                  positionPrev: null,
                  anglePrev: 0,
                  parent: null,
                  axes: null,
                  area: 0,
                  mass: 0,
                  inertia: 0,
                  deltaTime: 16.666666666666668,
                  _original: null,
                },
                i = u.extend(n, t);
              return s(i, t), i;
            }),
            (e.nextGroup = function (t) {
              return t
                ? e._nextNonCollidingGroupId--
                : e._nextCollidingGroupId++;
            }),
            (e.nextCategory = function () {
              return (e._nextCategory = e._nextCategory << 1), e._nextCategory;
            });
          var s = function (t, n) {
            (n = n || {}),
              e.set(t, {
                bounds: t.bounds || l.create(t.vertices),
                positionPrev: t.positionPrev || r.clone(t.position),
                anglePrev: t.anglePrev || t.angle,
                vertices: t.vertices,
                parts: t.parts || [t],
                isStatic: t.isStatic,
                isSleeping: t.isSleeping,
                parent: t.parent || t,
              }),
              o.rotate(t.vertices, t.angle, t.position),
              v.rotate(t.axes, t.angle),
              l.update(t.bounds, t.vertices, t.velocity),
              e.set(t, {
                axes: n.axes || t.axes,
                area: n.area || t.area,
                mass: n.mass || t.mass,
                inertia: n.inertia || t.inertia,
              });
            var i = t.isStatic
                ? "#14151f"
                : u.choose([
                    "#f19648",
                    "#f5d259",
                    "#f55a3c",
                    "#063e7b",
                    "#ececd1",
                  ]),
              f = t.isStatic ? "#555" : "#ccc",
              g = t.isStatic && t.render.fillStyle === null ? 1 : 0;
            (t.render.fillStyle = t.render.fillStyle || i),
              (t.render.strokeStyle = t.render.strokeStyle || f),
              (t.render.lineWidth = t.render.lineWidth || g),
              (t.render.sprite.xOffset +=
                -(t.bounds.min.x - t.position.x) /
                (t.bounds.max.x - t.bounds.min.x)),
              (t.render.sprite.yOffset +=
                -(t.bounds.min.y - t.position.y) /
                (t.bounds.max.y - t.bounds.min.y));
          };
          (e.set = function (t, n, i) {
            var f;
            typeof n == "string" && ((f = n), (n = {}), (n[f] = i));
            for (f in n)
              if (Object.prototype.hasOwnProperty.call(n, f))
                switch (((i = n[f]), f)) {
                  case "isStatic":
                    e.setStatic(t, i);
                    break;
                  case "isSleeping":
                    a.set(t, i);
                    break;
                  case "mass":
                    e.setMass(t, i);
                    break;
                  case "density":
                    e.setDensity(t, i);
                    break;
                  case "inertia":
                    e.setInertia(t, i);
                    break;
                  case "vertices":
                    e.setVertices(t, i);
                    break;
                  case "position":
                    e.setPosition(t, i);
                    break;
                  case "angle":
                    e.setAngle(t, i);
                    break;
                  case "velocity":
                    e.setVelocity(t, i);
                    break;
                  case "angularVelocity":
                    e.setAngularVelocity(t, i);
                    break;
                  case "speed":
                    e.setSpeed(t, i);
                    break;
                  case "angularSpeed":
                    e.setAngularSpeed(t, i);
                    break;
                  case "parts":
                    e.setParts(t, i);
                    break;
                  case "centre":
                    e.setCentre(t, i);
                    break;
                  default:
                    t[f] = i;
                }
          }),
            (e.setStatic = function (t, n) {
              for (var i = 0; i < t.parts.length; i++) {
                var f = t.parts[i];
                (f.isStatic = n),
                  n
                    ? ((f._original = {
                        restitution: f.restitution,
                        friction: f.friction,
                        mass: f.mass,
                        inertia: f.inertia,
                        density: f.density,
                        inverseMass: f.inverseMass,
                        inverseInertia: f.inverseInertia,
                      }),
                      (f.restitution = 0),
                      (f.friction = 1),
                      (f.mass = f.inertia = f.density = 1 / 0),
                      (f.inverseMass = f.inverseInertia = 0),
                      (f.positionPrev.x = f.position.x),
                      (f.positionPrev.y = f.position.y),
                      (f.anglePrev = f.angle),
                      (f.angularVelocity = 0),
                      (f.speed = 0),
                      (f.angularSpeed = 0),
                      (f.motion = 0))
                    : f._original &&
                      ((f.restitution = f._original.restitution),
                      (f.friction = f._original.friction),
                      (f.mass = f._original.mass),
                      (f.inertia = f._original.inertia),
                      (f.density = f._original.density),
                      (f.inverseMass = f._original.inverseMass),
                      (f.inverseInertia = f._original.inverseInertia),
                      (f._original = null));
              }
            }),
            (e.setMass = function (t, n) {
              var i = t.inertia / (t.mass / 6);
              (t.inertia = i * (n / 6)),
                (t.inverseInertia = 1 / t.inertia),
                (t.mass = n),
                (t.inverseMass = 1 / t.mass),
                (t.density = t.mass / t.area);
            }),
            (e.setDensity = function (t, n) {
              e.setMass(t, n * t.area), (t.density = n);
            }),
            (e.setInertia = function (t, n) {
              (t.inertia = n), (t.inverseInertia = 1 / t.inertia);
            }),
            (e.setVertices = function (t, n) {
              n[0].body === t
                ? (t.vertices = n)
                : (t.vertices = o.create(n, t)),
                (t.axes = v.fromVertices(t.vertices)),
                (t.area = o.area(t.vertices)),
                e.setMass(t, t.density * t.area);
              var i = o.centre(t.vertices);
              o.translate(t.vertices, i, -1),
                e.setInertia(
                  t,
                  e._inertiaScale * o.inertia(t.vertices, t.mass)
                ),
                o.translate(t.vertices, t.position),
                l.update(t.bounds, t.vertices, t.velocity);
            }),
            (e.setParts = function (t, n, i) {
              var f;
              for (
                n = n.slice(0),
                  t.parts.length = 0,
                  t.parts.push(t),
                  t.parent = t,
                  f = 0;
                f < n.length;
                f++
              ) {
                var g = n[f];
                g !== t && ((g.parent = t), t.parts.push(g));
              }
              if (t.parts.length !== 1) {
                if (((i = typeof i < "u" ? i : !0), i)) {
                  var S = [];
                  for (f = 0; f < n.length; f++) S = S.concat(n[f].vertices);
                  o.clockwiseSort(S);
                  var x = o.hull(S),
                    M = o.centre(x);
                  e.setVertices(t, x), o.translate(t.vertices, M);
                }
                var c = e._totalProperties(t);
                (t.area = c.area),
                  (t.parent = t),
                  (t.position.x = c.centre.x),
                  (t.position.y = c.centre.y),
                  (t.positionPrev.x = c.centre.x),
                  (t.positionPrev.y = c.centre.y),
                  e.setMass(t, c.mass),
                  e.setInertia(t, c.inertia),
                  e.setPosition(t, c.centre);
              }
            }),
            (e.setCentre = function (t, n, i) {
              i
                ? ((t.positionPrev.x += n.x),
                  (t.positionPrev.y += n.y),
                  (t.position.x += n.x),
                  (t.position.y += n.y))
                : ((t.positionPrev.x = n.x - (t.position.x - t.positionPrev.x)),
                  (t.positionPrev.y = n.y - (t.position.y - t.positionPrev.y)),
                  (t.position.x = n.x),
                  (t.position.y = n.y));
            }),
            (e.setPosition = function (t, n, i) {
              var f = r.sub(n, t.position);
              i
                ? ((t.positionPrev.x = t.position.x),
                  (t.positionPrev.y = t.position.y),
                  (t.velocity.x = f.x),
                  (t.velocity.y = f.y),
                  (t.speed = r.magnitude(f)))
                : ((t.positionPrev.x += f.x), (t.positionPrev.y += f.y));
              for (var g = 0; g < t.parts.length; g++) {
                var S = t.parts[g];
                (S.position.x += f.x),
                  (S.position.y += f.y),
                  o.translate(S.vertices, f),
                  l.update(S.bounds, S.vertices, t.velocity);
              }
            }),
            (e.setAngle = function (t, n, i) {
              var f = n - t.angle;
              i
                ? ((t.anglePrev = t.angle),
                  (t.angularVelocity = f),
                  (t.angularSpeed = Math.abs(f)))
                : (t.anglePrev += f);
              for (var g = 0; g < t.parts.length; g++) {
                var S = t.parts[g];
                (S.angle += f),
                  o.rotate(S.vertices, f, t.position),
                  v.rotate(S.axes, f),
                  l.update(S.bounds, S.vertices, t.velocity),
                  g > 0 && r.rotateAbout(S.position, f, t.position, S.position);
              }
            }),
            (e.setVelocity = function (t, n) {
              var i = t.deltaTime / e._baseDelta;
              (t.positionPrev.x = t.position.x - n.x * i),
                (t.positionPrev.y = t.position.y - n.y * i),
                (t.velocity.x = (t.position.x - t.positionPrev.x) / i),
                (t.velocity.y = (t.position.y - t.positionPrev.y) / i),
                (t.speed = r.magnitude(t.velocity));
            }),
            (e.getVelocity = function (t) {
              var n = e._baseDelta / t.deltaTime;
              return {
                x: (t.position.x - t.positionPrev.x) * n,
                y: (t.position.y - t.positionPrev.y) * n,
              };
            }),
            (e.getSpeed = function (t) {
              return r.magnitude(e.getVelocity(t));
            }),
            (e.setSpeed = function (t, n) {
              e.setVelocity(t, r.mult(r.normalise(e.getVelocity(t)), n));
            }),
            (e.setAngularVelocity = function (t, n) {
              var i = t.deltaTime / e._baseDelta;
              (t.anglePrev = t.angle - n * i),
                (t.angularVelocity = (t.angle - t.anglePrev) / i),
                (t.angularSpeed = Math.abs(t.angularVelocity));
            }),
            (e.getAngularVelocity = function (t) {
              return ((t.angle - t.anglePrev) * e._baseDelta) / t.deltaTime;
            }),
            (e.getAngularSpeed = function (t) {
              return Math.abs(e.getAngularVelocity(t));
            }),
            (e.setAngularSpeed = function (t, n) {
              e.setAngularVelocity(t, u.sign(e.getAngularVelocity(t)) * n);
            }),
            (e.translate = function (t, n, i) {
              e.setPosition(t, r.add(t.position, n), i);
            }),
            (e.rotate = function (t, n, i, f) {
              if (!i) e.setAngle(t, t.angle + n, f);
              else {
                var g = Math.cos(n),
                  S = Math.sin(n),
                  x = t.position.x - i.x,
                  M = t.position.y - i.y;
                e.setPosition(
                  t,
                  { x: i.x + (x * g - M * S), y: i.y + (x * S + M * g) },
                  f
                ),
                  e.setAngle(t, t.angle + n, f);
              }
            }),
            (e.scale = function (t, n, i, f) {
              var g = 0,
                S = 0;
              f = f || t.position;
              for (var x = 0; x < t.parts.length; x++) {
                var M = t.parts[x];
                o.scale(M.vertices, n, i, f),
                  (M.axes = v.fromVertices(M.vertices)),
                  (M.area = o.area(M.vertices)),
                  e.setMass(M, t.density * M.area),
                  o.translate(M.vertices, {
                    x: -M.position.x,
                    y: -M.position.y,
                  }),
                  e.setInertia(
                    M,
                    e._inertiaScale * o.inertia(M.vertices, M.mass)
                  ),
                  o.translate(M.vertices, { x: M.position.x, y: M.position.y }),
                  x > 0 && ((g += M.area), (S += M.inertia)),
                  (M.position.x = f.x + (M.position.x - f.x) * n),
                  (M.position.y = f.y + (M.position.y - f.y) * i),
                  l.update(M.bounds, M.vertices, t.velocity);
              }
              t.parts.length > 1 &&
                ((t.area = g),
                t.isStatic ||
                  (e.setMass(t, t.density * g), e.setInertia(t, S))),
                t.circleRadius &&
                  (n === i ? (t.circleRadius *= n) : (t.circleRadius = null));
            }),
            (e.update = function (t, n) {
              n = (typeof n < "u" ? n : 1e3 / 60) * t.timeScale;
              var i = n * n,
                f = e._timeCorrection ? n / (t.deltaTime || n) : 1,
                g = 1 - t.frictionAir * (n / u._baseDelta),
                S = (t.position.x - t.positionPrev.x) * f,
                x = (t.position.y - t.positionPrev.y) * f;
              (t.velocity.x = S * g + (t.force.x / t.mass) * i),
                (t.velocity.y = x * g + (t.force.y / t.mass) * i),
                (t.positionPrev.x = t.position.x),
                (t.positionPrev.y = t.position.y),
                (t.position.x += t.velocity.x),
                (t.position.y += t.velocity.y),
                (t.deltaTime = n),
                (t.angularVelocity =
                  (t.angle - t.anglePrev) * g * f + (t.torque / t.inertia) * i),
                (t.anglePrev = t.angle),
                (t.angle += t.angularVelocity);
              for (var M = 0; M < t.parts.length; M++) {
                var c = t.parts[M];
                o.translate(c.vertices, t.velocity),
                  M > 0 &&
                    ((c.position.x += t.velocity.x),
                    (c.position.y += t.velocity.y)),
                  t.angularVelocity !== 0 &&
                    (o.rotate(c.vertices, t.angularVelocity, t.position),
                    v.rotate(c.axes, t.angularVelocity),
                    M > 0 &&
                      r.rotateAbout(
                        c.position,
                        t.angularVelocity,
                        t.position,
                        c.position
                      )),
                  l.update(c.bounds, c.vertices, t.velocity);
              }
            }),
            (e.updateVelocities = function (t) {
              var n = e._baseDelta / t.deltaTime,
                i = t.velocity;
              (i.x = (t.position.x - t.positionPrev.x) * n),
                (i.y = (t.position.y - t.positionPrev.y) * n),
                (t.speed = Math.sqrt(i.x * i.x + i.y * i.y)),
                (t.angularVelocity = (t.angle - t.anglePrev) * n),
                (t.angularSpeed = Math.abs(t.angularVelocity));
            }),
            (e.applyForce = function (t, n, i) {
              var f = { x: n.x - t.position.x, y: n.y - t.position.y };
              (t.force.x += i.x),
                (t.force.y += i.y),
                (t.torque += f.x * i.y - f.y * i.x);
            }),
            (e._totalProperties = function (t) {
              for (
                var n = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: { x: 0, y: 0 },
                  },
                  i = t.parts.length === 1 ? 0 : 1;
                i < t.parts.length;
                i++
              ) {
                var f = t.parts[i],
                  g = f.mass !== 1 / 0 ? f.mass : 1;
                (n.mass += g),
                  (n.area += f.area),
                  (n.inertia += f.inertia),
                  (n.centre = r.add(n.centre, r.mult(f.position, g)));
              }
              return (n.centre = r.div(n.centre, n.mass)), n;
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(0);
        (function () {
          (e.on = function (r, a, u) {
            for (var l = a.split(" "), v, s = 0; s < l.length; s++)
              (v = l[s]),
                (r.events = r.events || {}),
                (r.events[v] = r.events[v] || []),
                r.events[v].push(u);
            return u;
          }),
            (e.off = function (r, a, u) {
              if (!a) {
                r.events = {};
                return;
              }
              typeof a == "function" &&
                ((u = a), (a = o.keys(r.events).join(" ")));
              for (var l = a.split(" "), v = 0; v < l.length; v++) {
                var s = r.events[l[v]],
                  t = [];
                if (u && s)
                  for (var n = 0; n < s.length; n++) s[n] !== u && t.push(s[n]);
                r.events[l[v]] = t;
              }
            }),
            (e.trigger = function (r, a, u) {
              var l,
                v,
                s,
                t,
                n = r.events;
              if (n && o.keys(n).length > 0) {
                u || (u = {}), (l = a.split(" "));
                for (var i = 0; i < l.length; i++)
                  if (((v = l[i]), (s = n[v]), s)) {
                    (t = o.clone(u, !1)), (t.name = v), (t.source = r);
                    for (var f = 0; f < s.length; f++) s[f].apply(r, [t]);
                  }
              }
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(5),
          r = h(0),
          a = h(1),
          u = h(4);
        (function () {
          (e.create = function (l) {
            return r.extend(
              {
                id: r.nextId(),
                type: "composite",
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null,
                },
              },
              l
            );
          }),
            (e.setModified = function (l, v, s, t) {
              if (
                ((l.isModified = v),
                v &&
                  l.cache &&
                  ((l.cache.allBodies = null),
                  (l.cache.allConstraints = null),
                  (l.cache.allComposites = null)),
                s && l.parent && e.setModified(l.parent, v, s, t),
                t)
              )
                for (var n = 0; n < l.composites.length; n++) {
                  var i = l.composites[n];
                  e.setModified(i, v, s, t);
                }
            }),
            (e.add = function (l, v) {
              var s = [].concat(v);
              o.trigger(l, "beforeAdd", { object: v });
              for (var t = 0; t < s.length; t++) {
                var n = s[t];
                switch (n.type) {
                  case "body":
                    if (n.parent !== n) {
                      r.warn(
                        "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                      );
                      break;
                    }
                    e.addBody(l, n);
                    break;
                  case "constraint":
                    e.addConstraint(l, n);
                    break;
                  case "composite":
                    e.addComposite(l, n);
                    break;
                  case "mouseConstraint":
                    e.addConstraint(l, n.constraint);
                    break;
                }
              }
              return o.trigger(l, "afterAdd", { object: v }), l;
            }),
            (e.remove = function (l, v, s) {
              var t = [].concat(v);
              o.trigger(l, "beforeRemove", { object: v });
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                switch (i.type) {
                  case "body":
                    e.removeBody(l, i, s);
                    break;
                  case "constraint":
                    e.removeConstraint(l, i, s);
                    break;
                  case "composite":
                    e.removeComposite(l, i, s);
                    break;
                  case "mouseConstraint":
                    e.removeConstraint(l, i.constraint);
                    break;
                }
              }
              return o.trigger(l, "afterRemove", { object: v }), l;
            }),
            (e.addComposite = function (l, v) {
              return (
                l.composites.push(v),
                (v.parent = l),
                e.setModified(l, !0, !0, !1),
                l
              );
            }),
            (e.removeComposite = function (l, v, s) {
              var t = r.indexOf(l.composites, v);
              if ((t !== -1 && e.removeCompositeAt(l, t), s))
                for (var n = 0; n < l.composites.length; n++)
                  e.removeComposite(l.composites[n], v, !0);
              return l;
            }),
            (e.removeCompositeAt = function (l, v) {
              return l.composites.splice(v, 1), e.setModified(l, !0, !0, !1), l;
            }),
            (e.addBody = function (l, v) {
              return l.bodies.push(v), e.setModified(l, !0, !0, !1), l;
            }),
            (e.removeBody = function (l, v, s) {
              var t = r.indexOf(l.bodies, v);
              if ((t !== -1 && e.removeBodyAt(l, t), s))
                for (var n = 0; n < l.composites.length; n++)
                  e.removeBody(l.composites[n], v, !0);
              return l;
            }),
            (e.removeBodyAt = function (l, v) {
              return l.bodies.splice(v, 1), e.setModified(l, !0, !0, !1), l;
            }),
            (e.addConstraint = function (l, v) {
              return l.constraints.push(v), e.setModified(l, !0, !0, !1), l;
            }),
            (e.removeConstraint = function (l, v, s) {
              var t = r.indexOf(l.constraints, v);
              if ((t !== -1 && e.removeConstraintAt(l, t), s))
                for (var n = 0; n < l.composites.length; n++)
                  e.removeConstraint(l.composites[n], v, !0);
              return l;
            }),
            (e.removeConstraintAt = function (l, v) {
              return (
                l.constraints.splice(v, 1), e.setModified(l, !0, !0, !1), l
              );
            }),
            (e.clear = function (l, v, s) {
              if (s)
                for (var t = 0; t < l.composites.length; t++)
                  e.clear(l.composites[t], v, !0);
              return (
                v
                  ? (l.bodies = l.bodies.filter(function (n) {
                      return n.isStatic;
                    }))
                  : (l.bodies.length = 0),
                (l.constraints.length = 0),
                (l.composites.length = 0),
                e.setModified(l, !0, !0, !1),
                l
              );
            }),
            (e.allBodies = function (l) {
              if (l.cache && l.cache.allBodies) return l.cache.allBodies;
              for (
                var v = [].concat(l.bodies), s = 0;
                s < l.composites.length;
                s++
              )
                v = v.concat(e.allBodies(l.composites[s]));
              return l.cache && (l.cache.allBodies = v), v;
            }),
            (e.allConstraints = function (l) {
              if (l.cache && l.cache.allConstraints)
                return l.cache.allConstraints;
              for (
                var v = [].concat(l.constraints), s = 0;
                s < l.composites.length;
                s++
              )
                v = v.concat(e.allConstraints(l.composites[s]));
              return l.cache && (l.cache.allConstraints = v), v;
            }),
            (e.allComposites = function (l) {
              if (l.cache && l.cache.allComposites)
                return l.cache.allComposites;
              for (
                var v = [].concat(l.composites), s = 0;
                s < l.composites.length;
                s++
              )
                v = v.concat(e.allComposites(l.composites[s]));
              return l.cache && (l.cache.allComposites = v), v;
            }),
            (e.get = function (l, v, s) {
              var t, n;
              switch (s) {
                case "body":
                  t = e.allBodies(l);
                  break;
                case "constraint":
                  t = e.allConstraints(l);
                  break;
                case "composite":
                  t = e.allComposites(l).concat(l);
                  break;
              }
              return t
                ? ((n = t.filter(function (i) {
                    return i.id.toString() === v.toString();
                  })),
                  n.length === 0 ? null : n[0])
                : null;
            }),
            (e.move = function (l, v, s) {
              return e.remove(l, v), e.add(s, v), l;
            }),
            (e.rebase = function (l) {
              for (
                var v = e
                    .allBodies(l)
                    .concat(e.allConstraints(l))
                    .concat(e.allComposites(l)),
                  s = 0;
                s < v.length;
                s++
              )
                v[s].id = r.nextId();
              return l;
            }),
            (e.translate = function (l, v, s) {
              for (
                var t = s ? e.allBodies(l) : l.bodies, n = 0;
                n < t.length;
                n++
              )
                u.translate(t[n], v);
              return l;
            }),
            (e.rotate = function (l, v, s, t) {
              for (
                var n = Math.cos(v),
                  i = Math.sin(v),
                  f = t ? e.allBodies(l) : l.bodies,
                  g = 0;
                g < f.length;
                g++
              ) {
                var S = f[g],
                  x = S.position.x - s.x,
                  M = S.position.y - s.y;
                u.setPosition(S, {
                  x: s.x + (x * n - M * i),
                  y: s.y + (x * i + M * n),
                }),
                  u.rotate(S, v);
              }
              return l;
            }),
            (e.scale = function (l, v, s, t, n) {
              for (
                var i = n ? e.allBodies(l) : l.bodies, f = 0;
                f < i.length;
                f++
              ) {
                var g = i[f],
                  S = g.position.x - t.x,
                  x = g.position.y - t.y;
                u.setPosition(g, { x: t.x + S * v, y: t.y + x * s }),
                  u.scale(g, v, s);
              }
              return l;
            }),
            (e.bounds = function (l) {
              for (
                var v = e.allBodies(l), s = [], t = 0;
                t < v.length;
                t += 1
              ) {
                var n = v[t];
                s.push(n.bounds.min, n.bounds.max);
              }
              return a.create(s);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(4),
          r = h(5),
          a = h(0);
        (function () {
          (e._motionWakeThreshold = 0.18),
            (e._motionSleepThreshold = 0.08),
            (e._minBias = 0.9),
            (e.update = function (u, l) {
              for (
                var v = l / a._baseDelta, s = e._motionSleepThreshold, t = 0;
                t < u.length;
                t++
              ) {
                var n = u[t],
                  i = o.getSpeed(n),
                  f = o.getAngularSpeed(n),
                  g = i * i + f * f;
                if (n.force.x !== 0 || n.force.y !== 0) {
                  e.set(n, !1);
                  continue;
                }
                var S = Math.min(n.motion, g),
                  x = Math.max(n.motion, g);
                (n.motion = e._minBias * S + (1 - e._minBias) * x),
                  n.sleepThreshold > 0 && n.motion < s
                    ? ((n.sleepCounter += 1),
                      n.sleepCounter >= n.sleepThreshold / v && e.set(n, !0))
                    : n.sleepCounter > 0 && (n.sleepCounter -= 1);
              }
            }),
            (e.afterCollisions = function (u) {
              for (var l = e._motionSleepThreshold, v = 0; v < u.length; v++) {
                var s = u[v];
                if (s.isActive) {
                  var t = s.collision,
                    n = t.bodyA.parent,
                    i = t.bodyB.parent;
                  if (
                    !(
                      (n.isSleeping && i.isSleeping) ||
                      n.isStatic ||
                      i.isStatic
                    ) &&
                    (n.isSleeping || i.isSleeping)
                  ) {
                    var f = n.isSleeping && !n.isStatic ? n : i,
                      g = f === n ? i : n;
                    !f.isStatic && g.motion > l && e.set(f, !1);
                  }
                }
              }
            }),
            (e.set = function (u, l) {
              var v = u.isSleeping;
              l
                ? ((u.isSleeping = !0),
                  (u.sleepCounter = u.sleepThreshold),
                  (u.positionImpulse.x = 0),
                  (u.positionImpulse.y = 0),
                  (u.positionPrev.x = u.position.x),
                  (u.positionPrev.y = u.position.y),
                  (u.anglePrev = u.angle),
                  (u.speed = 0),
                  (u.angularSpeed = 0),
                  (u.motion = 0),
                  v || r.trigger(u, "sleepStart"))
                : ((u.isSleeping = !1),
                  (u.sleepCounter = 0),
                  v && r.trigger(u, "sleepEnd"));
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(9);
        (function () {
          var a = [],
            u = { overlap: 0, axis: null },
            l = { overlap: 0, axis: null };
          (e.create = function (v, s) {
            return {
              pair: null,
              collided: !1,
              bodyA: v,
              bodyB: s,
              parentA: v.parent,
              parentB: s.parent,
              depth: 0,
              normal: { x: 0, y: 0 },
              tangent: { x: 0, y: 0 },
              penetration: { x: 0, y: 0 },
              supports: [],
            };
          }),
            (e.collides = function (v, s, t) {
              if (
                (e._overlapAxes(u, v.vertices, s.vertices, v.axes),
                u.overlap <= 0 ||
                  (e._overlapAxes(l, s.vertices, v.vertices, s.axes),
                  l.overlap <= 0))
              )
                return null;
              var n = t && t.table[r.id(v, s)],
                i;
              n
                ? (i = n.collision)
                : ((i = e.create(v, s)),
                  (i.collided = !0),
                  (i.bodyA = v.id < s.id ? v : s),
                  (i.bodyB = v.id < s.id ? s : v),
                  (i.parentA = i.bodyA.parent),
                  (i.parentB = i.bodyB.parent)),
                (v = i.bodyA),
                (s = i.bodyB);
              var f;
              u.overlap < l.overlap ? (f = u) : (f = l);
              var g = i.normal,
                S = i.supports,
                x = f.axis,
                M = x.x,
                c = x.y;
              M * (s.position.x - v.position.x) +
                c * (s.position.y - v.position.y) <
              0
                ? ((g.x = M), (g.y = c))
                : ((g.x = -M), (g.y = -c)),
                (i.tangent.x = -g.y),
                (i.tangent.y = g.x),
                (i.depth = f.overlap),
                (i.penetration.x = g.x * i.depth),
                (i.penetration.y = g.y * i.depth);
              var m = e._findSupports(v, s, g, 1),
                y = 0;
              if (
                (o.contains(v.vertices, m[0]) && (S[y++] = m[0]),
                o.contains(v.vertices, m[1]) && (S[y++] = m[1]),
                y < 2)
              ) {
                var p = e._findSupports(s, v, g, -1);
                o.contains(s.vertices, p[0]) && (S[y++] = p[0]),
                  y < 2 && o.contains(s.vertices, p[1]) && (S[y++] = p[1]);
              }
              return y === 0 && (S[y++] = m[0]), (S.length = y), i;
            }),
            (e._overlapAxes = function (v, s, t, n) {
              var i = s.length,
                f = t.length,
                g = s[0].x,
                S = s[0].y,
                x = t[0].x,
                M = t[0].y,
                c = n.length,
                m = Number.MAX_VALUE,
                y = 0,
                p,
                P,
                w,
                T,
                I,
                E;
              for (I = 0; I < c; I++) {
                var R = n[I],
                  L = R.x,
                  F = R.y,
                  V = g * L + S * F,
                  O = x * L + M * F,
                  W = V,
                  $ = O;
                for (E = 1; E < i; E += 1)
                  (T = s[E].x * L + s[E].y * F),
                    T > W ? (W = T) : T < V && (V = T);
                for (E = 1; E < f; E += 1)
                  (T = t[E].x * L + t[E].y * F),
                    T > $ ? ($ = T) : T < O && (O = T);
                if (
                  ((P = W - O),
                  (w = $ - V),
                  (p = P < w ? P : w),
                  p < m && ((m = p), (y = I), p <= 0))
                )
                  break;
              }
              (v.axis = n[y]), (v.overlap = m);
            }),
            (e._projectToAxis = function (v, s, t) {
              for (
                var n = s[0].x * t.x + s[0].y * t.y, i = n, f = 1;
                f < s.length;
                f += 1
              ) {
                var g = s[f].x * t.x + s[f].y * t.y;
                g > i ? (i = g) : g < n && (n = g);
              }
              (v.min = n), (v.max = i);
            }),
            (e._findSupports = function (v, s, t, n) {
              var i = s.vertices,
                f = i.length,
                g = v.position.x,
                S = v.position.y,
                x = t.x * n,
                M = t.y * n,
                c = Number.MAX_VALUE,
                m,
                y,
                p,
                P,
                w;
              for (w = 0; w < f; w += 1)
                (y = i[w]),
                  (P = x * (g - y.x) + M * (S - y.y)),
                  P < c && ((c = P), (m = y));
              return (
                (p = i[(f + m.index - 1) % f]),
                (c = x * (g - p.x) + M * (S - p.y)),
                (y = i[(m.index + 1) % f]),
                x * (g - y.x) + M * (S - y.y) < c
                  ? ((a[0] = m), (a[1] = y), a)
                  : ((a[0] = m), (a[1] = p), a)
              );
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(16);
        (function () {
          (e.create = function (r, a) {
            var u = r.bodyA,
              l = r.bodyB,
              v = {
                id: e.id(u, l),
                bodyA: u,
                bodyB: l,
                collision: r,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: !0,
                confirmedActive: !0,
                isSensor: u.isSensor || l.isSensor,
                timeCreated: a,
                timeUpdated: a,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0,
              };
            return e.update(v, r, a), v;
          }),
            (e.update = function (r, a, u) {
              var l = r.contacts,
                v = a.supports,
                s = r.activeContacts,
                t = a.parentA,
                n = a.parentB,
                i = t.vertices.length;
              (r.isActive = !0),
                (r.timeUpdated = u),
                (r.collision = a),
                (r.separation = a.depth),
                (r.inverseMass = t.inverseMass + n.inverseMass),
                (r.friction =
                  t.friction < n.friction ? t.friction : n.friction),
                (r.frictionStatic =
                  t.frictionStatic > n.frictionStatic
                    ? t.frictionStatic
                    : n.frictionStatic),
                (r.restitution =
                  t.restitution > n.restitution
                    ? t.restitution
                    : n.restitution),
                (r.slop = t.slop > n.slop ? t.slop : n.slop),
                (a.pair = r),
                (s.length = 0);
              for (var f = 0; f < v.length; f++) {
                var g = v[f],
                  S = g.body === t ? g.index : i + g.index,
                  x = l[S];
                x ? s.push(x) : s.push((l[S] = o.create(g)));
              }
            }),
            (e.setActive = function (r, a, u) {
              a
                ? ((r.isActive = !0), (r.timeUpdated = u))
                : ((r.isActive = !1), (r.activeContacts.length = 0));
            }),
            (e.id = function (r, a) {
              return r.id < a.id
                ? "A" + r.id + "B" + a.id
                : "A" + a.id + "B" + r.id;
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(2),
          a = h(7),
          u = h(1),
          l = h(11),
          v = h(0);
        (function () {
          (e._warming = 0.4),
            (e._torqueDampen = 1),
            (e._minLength = 1e-6),
            (e.create = function (s) {
              var t = s;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
                i = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
                f = r.magnitude(r.sub(n, i));
              (t.length = typeof t.length < "u" ? t.length : f),
                (t.id = t.id || v.nextId()),
                (t.label = t.label || "Constraint"),
                (t.type = "constraint"),
                (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                (t.damping = t.damping || 0),
                (t.angularStiffness = t.angularStiffness || 0),
                (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                (t.plugin = {});
              var g = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0,
              };
              return (
                t.length === 0 && t.stiffness > 0.1
                  ? ((g.type = "pin"), (g.anchors = !1))
                  : t.stiffness < 0.9 && (g.type = "spring"),
                (t.render = v.extend(g, t.render)),
                t
              );
            }),
            (e.preSolveAll = function (s) {
              for (var t = 0; t < s.length; t += 1) {
                var n = s[t],
                  i = n.constraintImpulse;
                n.isStatic ||
                  (i.x === 0 && i.y === 0 && i.angle === 0) ||
                  ((n.position.x += i.x),
                  (n.position.y += i.y),
                  (n.angle += i.angle));
              }
            }),
            (e.solveAll = function (s, t) {
              for (
                var n = v.clamp(t / v._baseDelta, 0, 1), i = 0;
                i < s.length;
                i += 1
              ) {
                var f = s[i],
                  g = !f.bodyA || (f.bodyA && f.bodyA.isStatic),
                  S = !f.bodyB || (f.bodyB && f.bodyB.isStatic);
                (g || S) && e.solve(s[i], n);
              }
              for (i = 0; i < s.length; i += 1)
                (f = s[i]),
                  (g = !f.bodyA || (f.bodyA && f.bodyA.isStatic)),
                  (S = !f.bodyB || (f.bodyB && f.bodyB.isStatic)),
                  !g && !S && e.solve(s[i], n);
            }),
            (e.solve = function (s, t) {
              var n = s.bodyA,
                i = s.bodyB,
                f = s.pointA,
                g = s.pointB;
              if (!(!n && !i)) {
                n &&
                  !n.isStatic &&
                  (r.rotate(f, n.angle - s.angleA, f), (s.angleA = n.angle)),
                  i &&
                    !i.isStatic &&
                    (r.rotate(g, i.angle - s.angleB, g), (s.angleB = i.angle));
                var S = f,
                  x = g;
                if (
                  (n && (S = r.add(n.position, f)),
                  i && (x = r.add(i.position, g)),
                  !(!S || !x))
                ) {
                  var M = r.sub(S, x),
                    c = r.magnitude(M);
                  c < e._minLength && (c = e._minLength);
                  var m = (c - s.length) / c,
                    y = s.stiffness >= 1 || s.length === 0,
                    p = y ? s.stiffness * t : s.stiffness * t * t,
                    P = s.damping * t,
                    w = r.mult(M, m * p),
                    T = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0),
                    I = (n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0),
                    E = T + I,
                    R,
                    L,
                    F,
                    V,
                    O;
                  if (P > 0) {
                    var W = r.create();
                    (F = r.div(M, c)),
                      (O = r.sub(
                        (i && r.sub(i.position, i.positionPrev)) || W,
                        (n && r.sub(n.position, n.positionPrev)) || W
                      )),
                      (V = r.dot(F, O));
                  }
                  n &&
                    !n.isStatic &&
                    ((L = n.inverseMass / T),
                    (n.constraintImpulse.x -= w.x * L),
                    (n.constraintImpulse.y -= w.y * L),
                    (n.position.x -= w.x * L),
                    (n.position.y -= w.y * L),
                    P > 0 &&
                      ((n.positionPrev.x -= P * F.x * V * L),
                      (n.positionPrev.y -= P * F.y * V * L)),
                    (R =
                      (r.cross(f, w) / E) *
                      e._torqueDampen *
                      n.inverseInertia *
                      (1 - s.angularStiffness)),
                    (n.constraintImpulse.angle -= R),
                    (n.angle -= R)),
                    i &&
                      !i.isStatic &&
                      ((L = i.inverseMass / T),
                      (i.constraintImpulse.x += w.x * L),
                      (i.constraintImpulse.y += w.y * L),
                      (i.position.x += w.x * L),
                      (i.position.y += w.y * L),
                      P > 0 &&
                        ((i.positionPrev.x += P * F.x * V * L),
                        (i.positionPrev.y += P * F.y * V * L)),
                      (R =
                        (r.cross(g, w) / E) *
                        e._torqueDampen *
                        i.inverseInertia *
                        (1 - s.angularStiffness)),
                      (i.constraintImpulse.angle += R),
                      (i.angle += R));
                }
              }
            }),
            (e.postSolveAll = function (s) {
              for (var t = 0; t < s.length; t++) {
                var n = s[t],
                  i = n.constraintImpulse;
                if (
                  !(n.isStatic || (i.x === 0 && i.y === 0 && i.angle === 0))
                ) {
                  a.set(n, !1);
                  for (var f = 0; f < n.parts.length; f++) {
                    var g = n.parts[f];
                    o.translate(g.vertices, i),
                      f > 0 && ((g.position.x += i.x), (g.position.y += i.y)),
                      i.angle !== 0 &&
                        (o.rotate(g.vertices, i.angle, n.position),
                        l.rotate(g.axes, i.angle),
                        f > 0 &&
                          r.rotateAbout(
                            g.position,
                            i.angle,
                            n.position,
                            g.position
                          )),
                      u.update(g.bounds, g.vertices, n.velocity);
                  }
                  (i.angle *= e._warming),
                    (i.x *= e._warming),
                    (i.y *= e._warming);
                }
              }
            }),
            (e.pointAWorld = function (s) {
              return {
                x:
                  (s.bodyA ? s.bodyA.position.x : 0) +
                  (s.pointA ? s.pointA.x : 0),
                y:
                  (s.bodyA ? s.bodyA.position.y : 0) +
                  (s.pointA ? s.pointA.y : 0),
              };
            }),
            (e.pointBWorld = function (s) {
              return {
                x:
                  (s.bodyB ? s.bodyB.position.x : 0) +
                  (s.pointB ? s.pointB.x : 0),
                y:
                  (s.bodyB ? s.bodyB.position.y : 0) +
                  (s.pointB ? s.pointB.y : 0),
              };
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(2),
          r = h(0);
        (function () {
          (e.fromVertices = function (a) {
            for (var u = {}, l = 0; l < a.length; l++) {
              var v = (l + 1) % a.length,
                s = o.normalise({ x: a[v].y - a[l].y, y: a[l].x - a[v].x }),
                t = s.y === 0 ? 1 / 0 : s.x / s.y;
              (t = t.toFixed(3).toString()), (u[t] = s);
            }
            return r.values(u);
          }),
            (e.rotate = function (a, u) {
              if (u !== 0)
                for (
                  var l = Math.cos(u), v = Math.sin(u), s = 0;
                  s < a.length;
                  s++
                ) {
                  var t = a[s],
                    n;
                  (n = t.x * l - t.y * v), (t.y = t.x * v + t.y * l), (t.x = n);
                }
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(0),
          a = h(4),
          u = h(1),
          l = h(2);
        (function () {
          (e.rectangle = function (v, s, t, n, i) {
            i = i || {};
            var f = {
              label: "Rectangle Body",
              position: { x: v, y: s },
              vertices: o.fromPath(
                "L 0 0 L " + t + " 0 L " + t + " " + n + " L 0 " + n
              ),
            };
            if (i.chamfer) {
              var g = i.chamfer;
              (f.vertices = o.chamfer(
                f.vertices,
                g.radius,
                g.quality,
                g.qualityMin,
                g.qualityMax
              )),
                delete i.chamfer;
            }
            return a.create(r.extend({}, f, i));
          }),
            (e.trapezoid = function (v, s, t, n, i, f) {
              (f = f || {}), (i *= 0.5);
              var g = (1 - i * 2) * t,
                S = t * i,
                x = S + g,
                M = x + S,
                c;
              i < 0.5
                ? (c =
                    "L 0 0 L " +
                    S +
                    " " +
                    -n +
                    " L " +
                    x +
                    " " +
                    -n +
                    " L " +
                    M +
                    " 0")
                : (c = "L 0 0 L " + x + " " + -n + " L " + M + " 0");
              var m = {
                label: "Trapezoid Body",
                position: { x: v, y: s },
                vertices: o.fromPath(c),
              };
              if (f.chamfer) {
                var y = f.chamfer;
                (m.vertices = o.chamfer(
                  m.vertices,
                  y.radius,
                  y.quality,
                  y.qualityMin,
                  y.qualityMax
                )),
                  delete f.chamfer;
              }
              return a.create(r.extend({}, m, f));
            }),
            (e.circle = function (v, s, t, n, i) {
              n = n || {};
              var f = { label: "Circle Body", circleRadius: t };
              i = i || 25;
              var g = Math.ceil(Math.max(10, Math.min(i, t)));
              return (
                g % 2 === 1 && (g += 1),
                e.polygon(v, s, g, t, r.extend({}, f, n))
              );
            }),
            (e.polygon = function (v, s, t, n, i) {
              if (((i = i || {}), t < 3)) return e.circle(v, s, n, i);
              for (
                var f = (2 * Math.PI) / t, g = "", S = f * 0.5, x = 0;
                x < t;
                x += 1
              ) {
                var M = S + x * f,
                  c = Math.cos(M) * n,
                  m = Math.sin(M) * n;
                g += "L " + c.toFixed(3) + " " + m.toFixed(3) + " ";
              }
              var y = {
                label: "Polygon Body",
                position: { x: v, y: s },
                vertices: o.fromPath(g),
              };
              if (i.chamfer) {
                var p = i.chamfer;
                (y.vertices = o.chamfer(
                  y.vertices,
                  p.radius,
                  p.quality,
                  p.qualityMin,
                  p.qualityMax
                )),
                  delete i.chamfer;
              }
              return a.create(r.extend({}, y, i));
            }),
            (e.fromVertices = function (v, s, t, n, i, f, g, S) {
              var x = r.getDecomp(),
                M,
                c,
                m,
                y,
                p,
                P,
                w,
                T,
                I,
                E,
                R;
              for (
                M = !!(x && x.quickDecomp),
                  n = n || {},
                  m = [],
                  i = typeof i < "u" ? i : !1,
                  f = typeof f < "u" ? f : 0.01,
                  g = typeof g < "u" ? g : 10,
                  S = typeof S < "u" ? S : 0.01,
                  r.isArray(t[0]) || (t = [t]),
                  E = 0;
                E < t.length;
                E += 1
              )
                if (
                  ((P = t[E]),
                  (y = o.isConvex(P)),
                  (p = !y),
                  p &&
                    !M &&
                    r.warnOnce(
                      "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                    ),
                  y || !M)
                )
                  y ? (P = o.clockwiseSort(P)) : (P = o.hull(P)),
                    m.push({ position: { x: v, y: s }, vertices: P });
                else {
                  var L = P.map(function (G) {
                    return [G.x, G.y];
                  });
                  x.makeCCW(L),
                    f !== !1 && x.removeCollinearPoints(L, f),
                    S !== !1 &&
                      x.removeDuplicatePoints &&
                      x.removeDuplicatePoints(L, S);
                  var F = x.quickDecomp(L);
                  for (w = 0; w < F.length; w++) {
                    var V = F[w],
                      O = V.map(function (G) {
                        return { x: G[0], y: G[1] };
                      });
                    (g > 0 && o.area(O) < g) ||
                      m.push({ position: o.centre(O), vertices: O });
                  }
                }
              for (w = 0; w < m.length; w++) m[w] = a.create(r.extend(m[w], n));
              if (i) {
                var W = 5;
                for (w = 0; w < m.length; w++) {
                  var $ = m[w];
                  for (T = w + 1; T < m.length; T++) {
                    var N = m[T];
                    if (u.overlaps($.bounds, N.bounds)) {
                      var k = $.vertices,
                        U = N.vertices;
                      for (I = 0; I < $.vertices.length; I++)
                        for (R = 0; R < N.vertices.length; R++) {
                          var Z = l.magnitudeSquared(
                              l.sub(k[(I + 1) % k.length], U[R])
                            ),
                            K = l.magnitudeSquared(
                              l.sub(k[I], U[(R + 1) % U.length])
                            );
                          Z < W &&
                            K < W &&
                            ((k[I].isInternal = !0), (U[R].isInternal = !0));
                        }
                    }
                  }
                }
              }
              return m.length > 1
                ? ((c = a.create(r.extend({ parts: m.slice(0) }, n))),
                  a.setPosition(c, { x: v, y: s }),
                  c)
                : m[0];
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(0),
          r = h(8);
        (function () {
          (e.create = function (a) {
            var u = { bodies: [], pairs: null };
            return o.extend(u, a);
          }),
            (e.setBodies = function (a, u) {
              a.bodies = u.slice(0);
            }),
            (e.clear = function (a) {
              a.bodies = [];
            }),
            (e.collisions = function (a) {
              var u = [],
                l = a.pairs,
                v = a.bodies,
                s = v.length,
                t = e.canCollide,
                n = r.collides,
                i,
                f;
              for (v.sort(e._compareBoundsX), i = 0; i < s; i++) {
                var g = v[i],
                  S = g.bounds,
                  x = g.bounds.max.x,
                  M = g.bounds.max.y,
                  c = g.bounds.min.y,
                  m = g.isStatic || g.isSleeping,
                  y = g.parts.length,
                  p = y === 1;
                for (f = i + 1; f < s; f++) {
                  var P = v[f],
                    w = P.bounds;
                  if (w.min.x > x) break;
                  if (
                    !(M < w.min.y || c > w.max.y) &&
                    !(m && (P.isStatic || P.isSleeping)) &&
                    t(g.collisionFilter, P.collisionFilter)
                  ) {
                    var T = P.parts.length;
                    if (p && T === 1) {
                      var I = n(g, P, l);
                      I && u.push(I);
                    } else
                      for (
                        var E = y > 1 ? 1 : 0, R = T > 1 ? 1 : 0, L = E;
                        L < y;
                        L++
                      )
                        for (
                          var F = g.parts[L], S = F.bounds, V = R;
                          V < T;
                          V++
                        ) {
                          var O = P.parts[V],
                            w = O.bounds;
                          if (
                            !(
                              S.min.x > w.max.x ||
                              S.max.x < w.min.x ||
                              S.max.y < w.min.y ||
                              S.min.y > w.max.y
                            )
                          ) {
                            var I = n(F, O, l);
                            I && u.push(I);
                          }
                        }
                  }
                }
              }
              return u;
            }),
            (e.canCollide = function (a, u) {
              return a.group === u.group && a.group !== 0
                ? a.group > 0
                : (a.mask & u.category) !== 0 && (u.mask & a.category) !== 0;
            }),
            (e._compareBoundsX = function (a, u) {
              return a.bounds.min.x - u.bounds.min.x;
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(0);
        (function () {
          (e.create = function (r) {
            var a = {};
            return (
              r ||
                o.log(
                  "Mouse.create: element was undefined, defaulting to document.body",
                  "warn"
                ),
              (a.element = r || document.body),
              (a.absolute = { x: 0, y: 0 }),
              (a.position = { x: 0, y: 0 }),
              (a.mousedownPosition = { x: 0, y: 0 }),
              (a.mouseupPosition = { x: 0, y: 0 }),
              (a.offset = { x: 0, y: 0 }),
              (a.scale = { x: 1, y: 1 }),
              (a.wheelDelta = 0),
              (a.button = -1),
              (a.pixelRatio =
                parseInt(a.element.getAttribute("data-pixel-ratio"), 10) || 1),
              (a.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null,
              }),
              (a.mousemove = function (u) {
                var l = e._getRelativeMousePosition(u, a.element, a.pixelRatio),
                  v = u.changedTouches;
                v && ((a.button = 0), u.preventDefault()),
                  (a.absolute.x = l.x),
                  (a.absolute.y = l.y),
                  (a.position.x = a.absolute.x * a.scale.x + a.offset.x),
                  (a.position.y = a.absolute.y * a.scale.y + a.offset.y),
                  (a.sourceEvents.mousemove = u);
              }),
              (a.mousedown = function (u) {
                var l = e._getRelativeMousePosition(u, a.element, a.pixelRatio),
                  v = u.changedTouches;
                v
                  ? ((a.button = 0), u.preventDefault())
                  : (a.button = u.button),
                  (a.absolute.x = l.x),
                  (a.absolute.y = l.y),
                  (a.position.x = a.absolute.x * a.scale.x + a.offset.x),
                  (a.position.y = a.absolute.y * a.scale.y + a.offset.y),
                  (a.mousedownPosition.x = a.position.x),
                  (a.mousedownPosition.y = a.position.y),
                  (a.sourceEvents.mousedown = u);
              }),
              (a.mouseup = function (u) {
                var l = e._getRelativeMousePosition(u, a.element, a.pixelRatio),
                  v = u.changedTouches;
                v && u.preventDefault(),
                  (a.button = -1),
                  (a.absolute.x = l.x),
                  (a.absolute.y = l.y),
                  (a.position.x = a.absolute.x * a.scale.x + a.offset.x),
                  (a.position.y = a.absolute.y * a.scale.y + a.offset.y),
                  (a.mouseupPosition.x = a.position.x),
                  (a.mouseupPosition.y = a.position.y),
                  (a.sourceEvents.mouseup = u);
              }),
              (a.mousewheel = function (u) {
                (a.wheelDelta = Math.max(
                  -1,
                  Math.min(1, u.wheelDelta || -u.detail)
                )),
                  u.preventDefault();
              }),
              e.setElement(a, a.element),
              a
            );
          }),
            (e.setElement = function (r, a) {
              (r.element = a),
                a.addEventListener("mousemove", r.mousemove),
                a.addEventListener("mousedown", r.mousedown),
                a.addEventListener("mouseup", r.mouseup),
                a.addEventListener("mousewheel", r.mousewheel),
                a.addEventListener("DOMMouseScroll", r.mousewheel),
                a.addEventListener("touchmove", r.mousemove),
                a.addEventListener("touchstart", r.mousedown),
                a.addEventListener("touchend", r.mouseup);
            }),
            (e.clearSourceEvents = function (r) {
              (r.sourceEvents.mousemove = null),
                (r.sourceEvents.mousedown = null),
                (r.sourceEvents.mouseup = null),
                (r.sourceEvents.mousewheel = null),
                (r.wheelDelta = 0);
            }),
            (e.setOffset = function (r, a) {
              (r.offset.x = a.x),
                (r.offset.y = a.y),
                (r.position.x = r.absolute.x * r.scale.x + r.offset.x),
                (r.position.y = r.absolute.y * r.scale.y + r.offset.y);
            }),
            (e.setScale = function (r, a) {
              (r.scale.x = a.x),
                (r.scale.y = a.y),
                (r.position.x = r.absolute.x * r.scale.x + r.offset.x),
                (r.position.y = r.absolute.y * r.scale.y + r.offset.y);
            }),
            (e._getRelativeMousePosition = function (r, a, u) {
              var l = a.getBoundingClientRect(),
                v =
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body,
                s =
                  window.pageXOffset !== void 0
                    ? window.pageXOffset
                    : v.scrollLeft,
                t =
                  window.pageYOffset !== void 0
                    ? window.pageYOffset
                    : v.scrollTop,
                n = r.changedTouches,
                i,
                f;
              return (
                n
                  ? ((i = n[0].pageX - l.left - s),
                    (f = n[0].pageY - l.top - t))
                  : ((i = r.pageX - l.left - s), (f = r.pageY - l.top - t)),
                {
                  x: i / ((a.clientWidth / (a.width || a.clientWidth)) * u),
                  y: f / ((a.clientHeight / (a.height || a.clientHeight)) * u),
                }
              );
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(0);
        (function () {
          (e._registry = {}),
            (e.register = function (r) {
              if (
                (e.isPlugin(r) ||
                  o.warn(
                    "Plugin.register:",
                    e.toString(r),
                    "does not implement all required fields."
                  ),
                r.name in e._registry)
              ) {
                var a = e._registry[r.name],
                  u = e.versionParse(r.version).number,
                  l = e.versionParse(a.version).number;
                u > l
                  ? (o.warn(
                      "Plugin.register:",
                      e.toString(a),
                      "was upgraded to",
                      e.toString(r)
                    ),
                    (e._registry[r.name] = r))
                  : u < l
                  ? o.warn(
                      "Plugin.register:",
                      e.toString(a),
                      "can not be downgraded to",
                      e.toString(r)
                    )
                  : r !== a &&
                    o.warn(
                      "Plugin.register:",
                      e.toString(r),
                      "is already registered to different plugin object"
                    );
              } else e._registry[r.name] = r;
              return r;
            }),
            (e.resolve = function (r) {
              return e._registry[e.dependencyParse(r).name];
            }),
            (e.toString = function (r) {
              return typeof r == "string"
                ? r
                : (r.name || "anonymous") +
                    "@" +
                    (r.version || r.range || "0.0.0");
            }),
            (e.isPlugin = function (r) {
              return r && r.name && r.version && r.install;
            }),
            (e.isUsed = function (r, a) {
              return r.used.indexOf(a) > -1;
            }),
            (e.isFor = function (r, a) {
              var u = r.for && e.dependencyParse(r.for);
              return (
                !r.for ||
                (a.name === u.name && e.versionSatisfies(a.version, u.range))
              );
            }),
            (e.use = function (r, a) {
              if (
                ((r.uses = (r.uses || []).concat(a || [])), r.uses.length === 0)
              ) {
                o.warn(
                  "Plugin.use:",
                  e.toString(r),
                  "does not specify any dependencies to install."
                );
                return;
              }
              for (
                var u = e.dependencies(r),
                  l = o.topologicalSort(u),
                  v = [],
                  s = 0;
                s < l.length;
                s += 1
              )
                if (l[s] !== r.name) {
                  var t = e.resolve(l[s]);
                  if (!t) {
                    v.push("❌ " + l[s]);
                    continue;
                  }
                  e.isUsed(r, t.name) ||
                    (e.isFor(t, r) ||
                      (o.warn(
                        "Plugin.use:",
                        e.toString(t),
                        "is for",
                        t.for,
                        "but installed on",
                        e.toString(r) + "."
                      ),
                      (t._warned = !0)),
                    t.install
                      ? t.install(r)
                      : (o.warn(
                          "Plugin.use:",
                          e.toString(t),
                          "does not specify an install function."
                        ),
                        (t._warned = !0)),
                    t._warned
                      ? (v.push("🔶 " + e.toString(t)), delete t._warned)
                      : v.push("✅ " + e.toString(t)),
                    r.used.push(t.name));
                }
              v.length > 0 && o.info(v.join("  "));
            }),
            (e.dependencies = function (r, a) {
              var u = e.dependencyParse(r),
                l = u.name;
              if (((a = a || {}), !(l in a))) {
                (r = e.resolve(r) || r),
                  (a[l] = o.map(r.uses || [], function (s) {
                    e.isPlugin(s) && e.register(s);
                    var t = e.dependencyParse(s),
                      n = e.resolve(s);
                    return (
                      n && !e.versionSatisfies(n.version, t.range)
                        ? (o.warn(
                            "Plugin.dependencies:",
                            e.toString(n),
                            "does not satisfy",
                            e.toString(t),
                            "used by",
                            e.toString(u) + "."
                          ),
                          (n._warned = !0),
                          (r._warned = !0))
                        : n ||
                          (o.warn(
                            "Plugin.dependencies:",
                            e.toString(s),
                            "used by",
                            e.toString(u),
                            "could not be resolved."
                          ),
                          (r._warned = !0)),
                      t.name
                    );
                  }));
                for (var v = 0; v < a[l].length; v += 1)
                  e.dependencies(a[l][v], a);
                return a;
              }
            }),
            (e.dependencyParse = function (r) {
              if (o.isString(r)) {
                var a =
                  /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                return (
                  a.test(r) ||
                    o.warn(
                      "Plugin.dependencyParse:",
                      r,
                      "is not a valid dependency string."
                    ),
                  { name: r.split("@")[0], range: r.split("@")[1] || "*" }
                );
              }
              return { name: r.name, range: r.range || r.version };
            }),
            (e.versionParse = function (r) {
              var a =
                /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              a.test(r) ||
                o.warn(
                  "Plugin.versionParse:",
                  r,
                  "is not a valid version or range."
                );
              var u = a.exec(r),
                l = Number(u[4]),
                v = Number(u[5]),
                s = Number(u[6]);
              return {
                isRange: !!(u[1] || u[2]),
                version: u[3],
                range: r,
                operator: u[1] || u[2] || "",
                major: l,
                minor: v,
                patch: s,
                parts: [l, v, s],
                prerelease: u[7],
                number: l * 1e8 + v * 1e4 + s,
              };
            }),
            (e.versionSatisfies = function (r, a) {
              a = a || "*";
              var u = e.versionParse(a),
                l = e.versionParse(r);
              if (u.isRange) {
                if (u.operator === "*" || r === "*") return !0;
                if (u.operator === ">") return l.number > u.number;
                if (u.operator === ">=") return l.number >= u.number;
                if (u.operator === "~")
                  return (
                    l.major === u.major &&
                    l.minor === u.minor &&
                    l.patch >= u.patch
                  );
                if (u.operator === "^")
                  return u.major > 0
                    ? l.major === u.major && l.number >= u.number
                    : u.minor > 0
                    ? l.minor === u.minor && l.patch >= u.patch
                    : l.patch === u.patch;
              }
              return r === a || r === "*";
            });
        })();
      },
      function (C, B) {
        var h = {};
        (C.exports = h),
          (function () {
            h.create = function (e) {
              return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
            };
          })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(7),
          r = h(18),
          a = h(13),
          u = h(19),
          l = h(5),
          v = h(6),
          s = h(10),
          t = h(0),
          n = h(4);
        (function () {
          (e.create = function (i) {
            i = i || {};
            var f = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: { x: 0, y: 1, scale: 0.001 },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                },
              },
              g = t.extend(f, i);
            return (
              (g.world = i.world || v.create({ label: "World" })),
              (g.pairs = i.pairs || u.create()),
              (g.detector = i.detector || a.create()),
              (g.grid = { buckets: [] }),
              (g.world.gravity = g.gravity),
              (g.broadphase = g.grid),
              (g.metrics = {}),
              g
            );
          }),
            (e.update = function (i, f) {
              var g = t.now(),
                S = i.world,
                x = i.detector,
                M = i.pairs,
                c = i.timing,
                m = c.timestamp,
                y;
              (f = typeof f < "u" ? f : t._baseDelta),
                (f *= c.timeScale),
                (c.timestamp += f),
                (c.lastDelta = f);
              var p = { timestamp: c.timestamp, delta: f };
              l.trigger(i, "beforeUpdate", p);
              var P = v.allBodies(S),
                w = v.allConstraints(S);
              for (
                S.isModified &&
                  (a.setBodies(x, P), v.setModified(S, !1, !1, !0)),
                  i.enableSleeping && o.update(P, f),
                  e._bodiesApplyGravity(P, i.gravity),
                  f > 0 && e._bodiesUpdate(P, f),
                  s.preSolveAll(P),
                  y = 0;
                y < i.constraintIterations;
                y++
              )
                s.solveAll(w, f);
              s.postSolveAll(P), (x.pairs = i.pairs);
              var T = a.collisions(x);
              u.update(M, T, m),
                i.enableSleeping && o.afterCollisions(M.list),
                M.collisionStart.length > 0 &&
                  l.trigger(i, "collisionStart", { pairs: M.collisionStart });
              var I = t.clamp(20 / i.positionIterations, 0, 1);
              for (
                r.preSolvePosition(M.list), y = 0;
                y < i.positionIterations;
                y++
              )
                r.solvePosition(M.list, f, I);
              for (
                r.postSolvePosition(P), s.preSolveAll(P), y = 0;
                y < i.constraintIterations;
                y++
              )
                s.solveAll(w, f);
              for (
                s.postSolveAll(P), r.preSolveVelocity(M.list), y = 0;
                y < i.velocityIterations;
                y++
              )
                r.solveVelocity(M.list, f);
              return (
                e._bodiesUpdateVelocities(P),
                M.collisionActive.length > 0 &&
                  l.trigger(i, "collisionActive", { pairs: M.collisionActive }),
                M.collisionEnd.length > 0 &&
                  l.trigger(i, "collisionEnd", { pairs: M.collisionEnd }),
                e._bodiesClearForces(P),
                l.trigger(i, "afterUpdate", p),
                (i.timing.lastElapsed = t.now() - g),
                i
              );
            }),
            (e.merge = function (i, f) {
              if ((t.extend(i, f), f.world)) {
                (i.world = f.world), e.clear(i);
                for (var g = v.allBodies(i.world), S = 0; S < g.length; S++) {
                  var x = g[S];
                  o.set(x, !1), (x.id = t.nextId());
                }
              }
            }),
            (e.clear = function (i) {
              u.clear(i.pairs), a.clear(i.detector);
            }),
            (e._bodiesClearForces = function (i) {
              for (var f = i.length, g = 0; g < f; g++) {
                var S = i[g];
                (S.force.x = 0), (S.force.y = 0), (S.torque = 0);
              }
            }),
            (e._bodiesApplyGravity = function (i, f) {
              var g = typeof f.scale < "u" ? f.scale : 0.001,
                S = i.length;
              if (!((f.x === 0 && f.y === 0) || g === 0))
                for (var x = 0; x < S; x++) {
                  var M = i[x];
                  M.isStatic ||
                    M.isSleeping ||
                    ((M.force.y += M.mass * f.y * g),
                    (M.force.x += M.mass * f.x * g));
                }
            }),
            (e._bodiesUpdate = function (i, f) {
              for (var g = i.length, S = 0; S < g; S++) {
                var x = i[S];
                x.isStatic || x.isSleeping || n.update(x, f);
              }
            }),
            (e._bodiesUpdateVelocities = function (i) {
              for (var f = i.length, g = 0; g < f; g++)
                n.updateVelocities(i[g]);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(0),
          a = h(1);
        (function () {
          (e._restingThresh = 2),
            (e._restingThreshTangent = Math.sqrt(6)),
            (e._positionDampen = 0.9),
            (e._positionWarming = 0.8),
            (e._frictionNormalMultiplier = 5),
            (e._frictionMaxStatic = Number.MAX_VALUE),
            (e.preSolvePosition = function (u) {
              var l,
                v,
                s,
                t = u.length;
              for (l = 0; l < t; l++)
                (v = u[l]),
                  v.isActive &&
                    ((s = v.activeContacts.length),
                    (v.collision.parentA.totalContacts += s),
                    (v.collision.parentB.totalContacts += s));
            }),
            (e.solvePosition = function (u, l, v) {
              var s,
                t,
                n,
                i,
                f,
                g,
                S,
                x,
                M = e._positionDampen * (v || 1),
                c = r.clamp(l / r._baseDelta, 0, 1),
                m = u.length;
              for (s = 0; s < m; s++)
                (t = u[s]),
                  !(!t.isActive || t.isSensor) &&
                    ((n = t.collision),
                    (i = n.parentA),
                    (f = n.parentB),
                    (g = n.normal),
                    (t.separation =
                      g.x *
                        (f.positionImpulse.x +
                          n.penetration.x -
                          i.positionImpulse.x) +
                      g.y *
                        (f.positionImpulse.y +
                          n.penetration.y -
                          i.positionImpulse.y)));
              for (s = 0; s < m; s++)
                (t = u[s]),
                  !(!t.isActive || t.isSensor) &&
                    ((n = t.collision),
                    (i = n.parentA),
                    (f = n.parentB),
                    (g = n.normal),
                    (x = t.separation - t.slop * c),
                    (i.isStatic || f.isStatic) && (x *= 2),
                    i.isStatic ||
                      i.isSleeping ||
                      ((S = M / i.totalContacts),
                      (i.positionImpulse.x += g.x * x * S),
                      (i.positionImpulse.y += g.y * x * S)),
                    f.isStatic ||
                      f.isSleeping ||
                      ((S = M / f.totalContacts),
                      (f.positionImpulse.x -= g.x * x * S),
                      (f.positionImpulse.y -= g.y * x * S)));
            }),
            (e.postSolvePosition = function (u) {
              for (
                var l = e._positionWarming,
                  v = u.length,
                  s = o.translate,
                  t = a.update,
                  n = 0;
                n < v;
                n++
              ) {
                var i = u[n],
                  f = i.positionImpulse,
                  g = f.x,
                  S = f.y,
                  x = i.velocity;
                if (((i.totalContacts = 0), g !== 0 || S !== 0)) {
                  for (var M = 0; M < i.parts.length; M++) {
                    var c = i.parts[M];
                    s(c.vertices, f),
                      t(c.bounds, c.vertices, x),
                      (c.position.x += g),
                      (c.position.y += S);
                  }
                  (i.positionPrev.x += g),
                    (i.positionPrev.y += S),
                    g * x.x + S * x.y < 0
                      ? ((f.x = 0), (f.y = 0))
                      : ((f.x *= l), (f.y *= l));
                }
              }
            }),
            (e.preSolveVelocity = function (u) {
              var l = u.length,
                v,
                s;
              for (v = 0; v < l; v++) {
                var t = u[v];
                if (!(!t.isActive || t.isSensor)) {
                  var n = t.activeContacts,
                    i = n.length,
                    f = t.collision,
                    g = f.parentA,
                    S = f.parentB,
                    x = f.normal,
                    M = f.tangent;
                  for (s = 0; s < i; s++) {
                    var c = n[s],
                      m = c.vertex,
                      y = c.normalImpulse,
                      p = c.tangentImpulse;
                    if (y !== 0 || p !== 0) {
                      var P = x.x * y + M.x * p,
                        w = x.y * y + M.y * p;
                      g.isStatic ||
                        g.isSleeping ||
                        ((g.positionPrev.x += P * g.inverseMass),
                        (g.positionPrev.y += w * g.inverseMass),
                        (g.anglePrev +=
                          g.inverseInertia *
                          ((m.x - g.position.x) * w -
                            (m.y - g.position.y) * P))),
                        S.isStatic ||
                          S.isSleeping ||
                          ((S.positionPrev.x -= P * S.inverseMass),
                          (S.positionPrev.y -= w * S.inverseMass),
                          (S.anglePrev -=
                            S.inverseInertia *
                            ((m.x - S.position.x) * w -
                              (m.y - S.position.y) * P)));
                    }
                  }
                }
              }
            }),
            (e.solveVelocity = function (u, l) {
              var v = l / r._baseDelta,
                s = v * v,
                t = s * v,
                n = -e._restingThresh * v,
                i = e._restingThreshTangent,
                f = e._frictionNormalMultiplier * v,
                g = e._frictionMaxStatic,
                S = u.length,
                x,
                M,
                c,
                m;
              for (c = 0; c < S; c++) {
                var y = u[c];
                if (!(!y.isActive || y.isSensor)) {
                  var p = y.collision,
                    P = p.parentA,
                    w = p.parentB,
                    T = P.velocity,
                    I = w.velocity,
                    E = p.normal.x,
                    R = p.normal.y,
                    L = p.tangent.x,
                    F = p.tangent.y,
                    V = y.activeContacts,
                    O = V.length,
                    W = 1 / O,
                    $ = P.inverseMass + w.inverseMass,
                    N = y.friction * y.frictionStatic * f;
                  for (
                    T.x = P.position.x - P.positionPrev.x,
                      T.y = P.position.y - P.positionPrev.y,
                      I.x = w.position.x - w.positionPrev.x,
                      I.y = w.position.y - w.positionPrev.y,
                      P.angularVelocity = P.angle - P.anglePrev,
                      w.angularVelocity = w.angle - w.anglePrev,
                      m = 0;
                    m < O;
                    m++
                  ) {
                    var k = V[m],
                      U = k.vertex,
                      Z = U.x - P.position.x,
                      K = U.y - P.position.y,
                      G = U.x - w.position.x,
                      Y = U.y - w.position.y,
                      z = T.x - K * P.angularVelocity,
                      $e = T.y + Z * P.angularVelocity,
                      Ze = I.x - Y * w.angularVelocity,
                      Ge = I.y + G * w.angularVelocity,
                      ye = z - Ze,
                      Se = $e - Ge,
                      le = E * ye + R * Se,
                      q = L * ye + F * Se,
                      we = y.separation + le,
                      fe = Math.min(we, 1);
                    fe = we < 0 ? 0 : fe;
                    var Pe = fe * N;
                    q < -Pe || q > Pe
                      ? ((M = q > 0 ? q : -q),
                        (x = y.friction * (q > 0 ? 1 : -1) * t),
                        x < -M ? (x = -M) : x > M && (x = M))
                      : ((x = q), (M = g));
                    var Ce = Z * R - K * E,
                      Me = G * R - Y * E,
                      Ae =
                        W /
                        ($ +
                          P.inverseInertia * Ce * Ce +
                          w.inverseInertia * Me * Me),
                      ne = (1 + y.restitution) * le * Ae;
                    if (((x *= Ae), le < n)) k.normalImpulse = 0;
                    else {
                      var Ue = k.normalImpulse;
                      (k.normalImpulse += ne),
                        k.normalImpulse > 0 && (k.normalImpulse = 0),
                        (ne = k.normalImpulse - Ue);
                    }
                    if (q < -i || q > i) k.tangentImpulse = 0;
                    else {
                      var Ne = k.tangentImpulse;
                      (k.tangentImpulse += x),
                        k.tangentImpulse < -M && (k.tangentImpulse = -M),
                        k.tangentImpulse > M && (k.tangentImpulse = M),
                        (x = k.tangentImpulse - Ne);
                    }
                    var ie = E * ne + L * x,
                      re = R * ne + F * x;
                    P.isStatic ||
                      P.isSleeping ||
                      ((P.positionPrev.x += ie * P.inverseMass),
                      (P.positionPrev.y += re * P.inverseMass),
                      (P.anglePrev += (Z * re - K * ie) * P.inverseInertia)),
                      w.isStatic ||
                        w.isSleeping ||
                        ((w.positionPrev.x -= ie * w.inverseMass),
                        (w.positionPrev.y -= re * w.inverseMass),
                        (w.anglePrev -= (G * re - Y * ie) * w.inverseInertia));
                  }
                }
              }
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(9),
          r = h(0);
        (function () {
          (e.create = function (a) {
            return r.extend(
              {
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: [],
              },
              a
            );
          }),
            (e.update = function (a, u, l) {
              var v = a.list,
                s = v.length,
                t = a.table,
                n = u.length,
                i = a.collisionStart,
                f = a.collisionEnd,
                g = a.collisionActive,
                S,
                x,
                M,
                c;
              for (i.length = 0, f.length = 0, g.length = 0, c = 0; c < s; c++)
                v[c].confirmedActive = !1;
              for (c = 0; c < n; c++)
                (S = u[c]),
                  (M = S.pair),
                  M
                    ? (M.isActive ? g.push(M) : i.push(M),
                      o.update(M, S, l),
                      (M.confirmedActive = !0))
                    : ((M = o.create(S, l)),
                      (t[M.id] = M),
                      i.push(M),
                      v.push(M));
              var m = [];
              for (s = v.length, c = 0; c < s; c++)
                (M = v[c]),
                  M.confirmedActive ||
                    (o.setActive(M, !1, l),
                    f.push(M),
                    !M.collision.bodyA.isSleeping &&
                      !M.collision.bodyB.isSleeping &&
                      m.push(c));
              for (c = 0; c < m.length; c++)
                (x = m[c] - c), (M = v[x]), v.splice(x, 1), delete t[M.id];
            }),
            (e.clear = function (a) {
              return (
                (a.table = {}),
                (a.list.length = 0),
                (a.collisionStart.length = 0),
                (a.collisionActive.length = 0),
                (a.collisionEnd.length = 0),
                a
              );
            });
        })();
      },
      function (C, B, h) {
        var e = (C.exports = h(21));
        (e.Axes = h(11)),
          (e.Bodies = h(12)),
          (e.Body = h(4)),
          (e.Bounds = h(1)),
          (e.Collision = h(8)),
          (e.Common = h(0)),
          (e.Composite = h(6)),
          (e.Composites = h(22)),
          (e.Constraint = h(10)),
          (e.Contact = h(16)),
          (e.Detector = h(13)),
          (e.Engine = h(17)),
          (e.Events = h(5)),
          (e.Grid = h(23)),
          (e.Mouse = h(14)),
          (e.MouseConstraint = h(24)),
          (e.Pair = h(9)),
          (e.Pairs = h(19)),
          (e.Plugin = h(15)),
          (e.Query = h(25)),
          (e.Render = h(26)),
          (e.Resolver = h(18)),
          (e.Runner = h(27)),
          (e.SAT = h(28)),
          (e.Sleeping = h(7)),
          (e.Svg = h(29)),
          (e.Vector = h(2)),
          (e.Vertices = h(3)),
          (e.World = h(30)),
          (e.Engine.run = e.Runner.run),
          e.Common.deprecated(
            e.Engine,
            "run",
            "Engine.run ➤ use Matter.Runner.run(engine) instead"
          );
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(15),
          r = h(0);
        (function () {
          (e.name = "matter-js"),
            (e.version = "0.19.0"),
            (e.uses = []),
            (e.used = []),
            (e.use = function () {
              o.use(e, Array.prototype.slice.call(arguments));
            }),
            (e.before = function (a, u) {
              return (
                (a = a.replace(/^Matter./, "")), r.chainPathBefore(e, a, u)
              );
            }),
            (e.after = function (a, u) {
              return (a = a.replace(/^Matter./, "")), r.chainPathAfter(e, a, u);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(6),
          r = h(10),
          a = h(0),
          u = h(4),
          l = h(12),
          v = a.deprecated;
        (function () {
          (e.stack = function (s, t, n, i, f, g, S) {
            for (
              var x = o.create({ label: "Stack" }),
                M = s,
                c = t,
                m,
                y = 0,
                p = 0;
              p < i;
              p++
            ) {
              for (var P = 0, w = 0; w < n; w++) {
                var T = S(M, c, w, p, m, y);
                if (T) {
                  var I = T.bounds.max.y - T.bounds.min.y,
                    E = T.bounds.max.x - T.bounds.min.x;
                  I > P && (P = I),
                    u.translate(T, { x: E * 0.5, y: I * 0.5 }),
                    (M = T.bounds.max.x + f),
                    o.addBody(x, T),
                    (m = T),
                    (y += 1);
                } else M += f;
              }
              (c += P + g), (M = s);
            }
            return x;
          }),
            (e.chain = function (s, t, n, i, f, g) {
              for (var S = s.bodies, x = 1; x < S.length; x++) {
                var M = S[x - 1],
                  c = S[x],
                  m = M.bounds.max.y - M.bounds.min.y,
                  y = M.bounds.max.x - M.bounds.min.x,
                  p = c.bounds.max.y - c.bounds.min.y,
                  P = c.bounds.max.x - c.bounds.min.x,
                  w = {
                    bodyA: M,
                    pointA: { x: y * t, y: m * n },
                    bodyB: c,
                    pointB: { x: P * i, y: p * f },
                  },
                  T = a.extend(w, g);
                o.addConstraint(s, r.create(T));
              }
              return (s.label += " Chain"), s;
            }),
            (e.mesh = function (s, t, n, i, f) {
              var g = s.bodies,
                S,
                x,
                M,
                c,
                m;
              for (S = 0; S < n; S++) {
                for (x = 1; x < t; x++)
                  (M = g[x - 1 + S * t]),
                    (c = g[x + S * t]),
                    o.addConstraint(
                      s,
                      r.create(a.extend({ bodyA: M, bodyB: c }, f))
                    );
                if (S > 0)
                  for (x = 0; x < t; x++)
                    (M = g[x + (S - 1) * t]),
                      (c = g[x + S * t]),
                      o.addConstraint(
                        s,
                        r.create(a.extend({ bodyA: M, bodyB: c }, f))
                      ),
                      i &&
                        x > 0 &&
                        ((m = g[x - 1 + (S - 1) * t]),
                        o.addConstraint(
                          s,
                          r.create(a.extend({ bodyA: m, bodyB: c }, f))
                        )),
                      i &&
                        x < t - 1 &&
                        ((m = g[x + 1 + (S - 1) * t]),
                        o.addConstraint(
                          s,
                          r.create(a.extend({ bodyA: m, bodyB: c }, f))
                        ));
              }
              return (s.label += " Mesh"), s;
            }),
            (e.pyramid = function (s, t, n, i, f, g, S) {
              return e.stack(s, t, n, i, f, g, function (x, M, c, m, y, p) {
                var P = Math.min(i, Math.ceil(n / 2)),
                  w = y ? y.bounds.max.x - y.bounds.min.x : 0;
                if (!(m > P)) {
                  m = P - m;
                  var T = m,
                    I = n - 1 - m;
                  if (!(c < T || c > I)) {
                    p === 1 &&
                      u.translate(y, {
                        x: (c + (n % 2 === 1 ? 1 : -1)) * w,
                        y: 0,
                      });
                    var E = y ? c * w : 0;
                    return S(s + E + c * f, M, c, m, y, p);
                  }
                }
              });
            }),
            (e.newtonsCradle = function (s, t, n, i, f) {
              for (
                var g = o.create({ label: "Newtons Cradle" }), S = 0;
                S < n;
                S++
              ) {
                var x = 1.9,
                  M = l.circle(s + S * (i * x), t + f, i, {
                    inertia: 1 / 0,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 1e-4,
                    slop: 1,
                  }),
                  c = r.create({
                    pointA: { x: s + S * (i * x), y: t },
                    bodyB: M,
                  });
                o.addBody(g, M), o.addConstraint(g, c);
              }
              return g;
            }),
            v(
              e,
              "newtonsCradle",
              "Composites.newtonsCradle ➤ moved to newtonsCradle example"
            ),
            (e.car = function (s, t, n, i, f) {
              var g = u.nextGroup(!0),
                S = 20,
                x = -n * 0.5 + S,
                M = n * 0.5 - S,
                c = 0,
                m = o.create({ label: "Car" }),
                y = l.rectangle(s, t, n, i, {
                  collisionFilter: { group: g },
                  chamfer: { radius: i * 0.5 },
                  density: 2e-4,
                }),
                p = l.circle(s + x, t + c, f, {
                  collisionFilter: { group: g },
                  friction: 0.8,
                }),
                P = l.circle(s + M, t + c, f, {
                  collisionFilter: { group: g },
                  friction: 0.8,
                }),
                w = r.create({
                  bodyB: y,
                  pointB: { x, y: c },
                  bodyA: p,
                  stiffness: 1,
                  length: 0,
                }),
                T = r.create({
                  bodyB: y,
                  pointB: { x: M, y: c },
                  bodyA: P,
                  stiffness: 1,
                  length: 0,
                });
              return (
                o.addBody(m, y),
                o.addBody(m, p),
                o.addBody(m, P),
                o.addConstraint(m, w),
                o.addConstraint(m, T),
                m
              );
            }),
            v(e, "car", "Composites.car ➤ moved to car example"),
            (e.softBody = function (s, t, n, i, f, g, S, x, M, c) {
              (M = a.extend({ inertia: 1 / 0 }, M)),
                (c = a.extend(
                  { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                  c
                ));
              var m = e.stack(s, t, n, i, f, g, function (y, p) {
                return l.circle(y, p, x, M);
              });
              return e.mesh(m, n, i, S, c), (m.label = "Soft Body"), m;
            }),
            v(
              e,
              "softBody",
              "Composites.softBody ➤ moved to softBody and cloth examples"
            );
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(9),
          r = h(0),
          a = r.deprecated;
        (function () {
          (e.create = function (u) {
            var l = {
              buckets: {},
              pairs: {},
              pairsList: [],
              bucketWidth: 48,
              bucketHeight: 48,
            };
            return r.extend(l, u);
          }),
            (e.update = function (u, l, v, s) {
              var t,
                n,
                i,
                f = v.world,
                g = u.buckets,
                S,
                x,
                M = !1;
              for (t = 0; t < l.length; t++) {
                var c = l[t];
                if (
                  !(c.isSleeping && !s) &&
                  !(
                    f.bounds &&
                    (c.bounds.max.x < f.bounds.min.x ||
                      c.bounds.min.x > f.bounds.max.x ||
                      c.bounds.max.y < f.bounds.min.y ||
                      c.bounds.min.y > f.bounds.max.y)
                  )
                ) {
                  var m = e._getRegion(u, c);
                  if (!c.region || m.id !== c.region.id || s) {
                    (!c.region || s) && (c.region = m);
                    var y = e._regionUnion(m, c.region);
                    for (n = y.startCol; n <= y.endCol; n++)
                      for (i = y.startRow; i <= y.endRow; i++) {
                        (x = e._getBucketId(n, i)), (S = g[x]);
                        var p =
                            n >= m.startCol &&
                            n <= m.endCol &&
                            i >= m.startRow &&
                            i <= m.endRow,
                          P =
                            n >= c.region.startCol &&
                            n <= c.region.endCol &&
                            i >= c.region.startRow &&
                            i <= c.region.endRow;
                        !p && P && P && S && e._bucketRemoveBody(u, S, c),
                          (c.region === m || (p && !P) || s) &&
                            (S || (S = e._createBucket(g, x)),
                            e._bucketAddBody(u, S, c));
                      }
                    (c.region = m), (M = !0);
                  }
                }
              }
              M && (u.pairsList = e._createActivePairsList(u));
            }),
            a(e, "update", "Grid.update ➤ replaced by Matter.Detector"),
            (e.clear = function (u) {
              (u.buckets = {}), (u.pairs = {}), (u.pairsList = []);
            }),
            a(e, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
            (e._regionUnion = function (u, l) {
              var v = Math.min(u.startCol, l.startCol),
                s = Math.max(u.endCol, l.endCol),
                t = Math.min(u.startRow, l.startRow),
                n = Math.max(u.endRow, l.endRow);
              return e._createRegion(v, s, t, n);
            }),
            (e._getRegion = function (u, l) {
              var v = l.bounds,
                s = Math.floor(v.min.x / u.bucketWidth),
                t = Math.floor(v.max.x / u.bucketWidth),
                n = Math.floor(v.min.y / u.bucketHeight),
                i = Math.floor(v.max.y / u.bucketHeight);
              return e._createRegion(s, t, n, i);
            }),
            (e._createRegion = function (u, l, v, s) {
              return {
                id: u + "," + l + "," + v + "," + s,
                startCol: u,
                endCol: l,
                startRow: v,
                endRow: s,
              };
            }),
            (e._getBucketId = function (u, l) {
              return "C" + u + "R" + l;
            }),
            (e._createBucket = function (u, l) {
              var v = (u[l] = []);
              return v;
            }),
            (e._bucketAddBody = function (u, l, v) {
              var s = u.pairs,
                t = o.id,
                n = l.length,
                i;
              for (i = 0; i < n; i++) {
                var f = l[i];
                if (!(v.id === f.id || (v.isStatic && f.isStatic))) {
                  var g = t(v, f),
                    S = s[g];
                  S ? (S[2] += 1) : (s[g] = [v, f, 1]);
                }
              }
              l.push(v);
            }),
            (e._bucketRemoveBody = function (u, l, v) {
              var s = u.pairs,
                t = o.id,
                n;
              l.splice(r.indexOf(l, v), 1);
              var i = l.length;
              for (n = 0; n < i; n++) {
                var f = s[t(v, l[n])];
                f && (f[2] -= 1);
              }
            }),
            (e._createActivePairsList = function (u) {
              var l,
                v = u.pairs,
                s = r.keys(v),
                t = s.length,
                n = [],
                i;
              for (i = 0; i < t; i++)
                (l = v[s[i]]), l[2] > 0 ? n.push(l) : delete v[s[i]];
              return n;
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(3),
          r = h(7),
          a = h(14),
          u = h(5),
          l = h(13),
          v = h(10),
          s = h(6),
          t = h(0),
          n = h(1);
        (function () {
          (e.create = function (i, f) {
            var g = (i ? i.mouse : null) || (f ? f.mouse : null);
            g ||
              (i && i.render && i.render.canvas
                ? (g = a.create(i.render.canvas))
                : f && f.element
                ? (g = a.create(f.element))
                : ((g = a.create()),
                  t.warn(
                    "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                  )));
            var S = v.create({
                label: "Mouse Constraint",
                pointA: g.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: { strokeStyle: "#90EE90", lineWidth: 3 },
              }),
              x = {
                type: "mouseConstraint",
                mouse: g,
                element: null,
                body: null,
                constraint: S,
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
              },
              M = t.extend(x, f);
            return (
              u.on(i, "beforeUpdate", function () {
                var c = s.allBodies(i.world);
                e.update(M, c), e._triggerEvents(M);
              }),
              M
            );
          }),
            (e.update = function (i, f) {
              var g = i.mouse,
                S = i.constraint,
                x = i.body;
              if (g.button === 0) {
                if (S.bodyB) r.set(S.bodyB, !1), (S.pointA = g.position);
                else
                  for (var M = 0; M < f.length; M++)
                    if (
                      ((x = f[M]),
                      n.contains(x.bounds, g.position) &&
                        l.canCollide(x.collisionFilter, i.collisionFilter))
                    )
                      for (
                        var c = x.parts.length > 1 ? 1 : 0;
                        c < x.parts.length;
                        c++
                      ) {
                        var m = x.parts[c];
                        if (o.contains(m.vertices, g.position)) {
                          (S.pointA = g.position),
                            (S.bodyB = i.body = x),
                            (S.pointB = {
                              x: g.position.x - x.position.x,
                              y: g.position.y - x.position.y,
                            }),
                            (S.angleB = x.angle),
                            r.set(x, !1),
                            u.trigger(i, "startdrag", { mouse: g, body: x });
                          break;
                        }
                      }
              } else
                (S.bodyB = i.body = null),
                  (S.pointB = null),
                  x && u.trigger(i, "enddrag", { mouse: g, body: x });
            }),
            (e._triggerEvents = function (i) {
              var f = i.mouse,
                g = f.sourceEvents;
              g.mousemove && u.trigger(i, "mousemove", { mouse: f }),
                g.mousedown && u.trigger(i, "mousedown", { mouse: f }),
                g.mouseup && u.trigger(i, "mouseup", { mouse: f }),
                a.clearSourceEvents(f);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(2),
          r = h(8),
          a = h(1),
          u = h(12),
          l = h(3);
        (function () {
          (e.collides = function (v, s) {
            for (
              var t = [],
                n = s.length,
                i = v.bounds,
                f = r.collides,
                g = a.overlaps,
                S = 0;
              S < n;
              S++
            ) {
              var x = s[S],
                M = x.parts.length,
                c = M === 1 ? 0 : 1;
              if (g(x.bounds, i))
                for (var m = c; m < M; m++) {
                  var y = x.parts[m];
                  if (g(y.bounds, i)) {
                    var p = f(y, v);
                    if (p) {
                      t.push(p);
                      break;
                    }
                  }
                }
            }
            return t;
          }),
            (e.ray = function (v, s, t, n) {
              n = n || 1e-100;
              for (
                var i = o.angle(s, t),
                  f = o.magnitude(o.sub(s, t)),
                  g = (t.x + s.x) * 0.5,
                  S = (t.y + s.y) * 0.5,
                  x = u.rectangle(g, S, f, n, { angle: i }),
                  M = e.collides(x, v),
                  c = 0;
                c < M.length;
                c += 1
              ) {
                var m = M[c];
                m.body = m.bodyB = m.bodyA;
              }
              return M;
            }),
            (e.region = function (v, s, t) {
              for (var n = [], i = 0; i < v.length; i++) {
                var f = v[i],
                  g = a.overlaps(f.bounds, s);
                ((g && !t) || (!g && t)) && n.push(f);
              }
              return n;
            }),
            (e.point = function (v, s) {
              for (var t = [], n = 0; n < v.length; n++) {
                var i = v[n];
                if (a.contains(i.bounds, s))
                  for (
                    var f = i.parts.length === 1 ? 0 : 1;
                    f < i.parts.length;
                    f++
                  ) {
                    var g = i.parts[f];
                    if (a.contains(g.bounds, s) && l.contains(g.vertices, s)) {
                      t.push(i);
                      break;
                    }
                  }
              }
              return t;
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(4),
          r = h(0),
          a = h(6),
          u = h(1),
          l = h(5),
          v = h(2),
          s = h(14);
        (function () {
          var t, n;
          typeof window < "u" &&
            ((t =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (c) {
                window.setTimeout(function () {
                  c(r.now());
                }, 1e3 / 60);
              }),
            (n =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.msCancelAnimationFrame)),
            (e._goodFps = 30),
            (e._goodDelta = 1e3 / 60),
            (e.create = function (c) {
              var m = {
                  engine: null,
                  element: null,
                  canvas: null,
                  mouse: null,
                  frameRequestId: null,
                  timing: {
                    historySize: 60,
                    delta: 0,
                    deltaHistory: [],
                    lastTime: 0,
                    lastTimestamp: 0,
                    lastElapsed: 0,
                    timestampElapsed: 0,
                    timestampElapsedHistory: [],
                    engineDeltaHistory: [],
                    engineElapsedHistory: [],
                    elapsedHistory: [],
                  },
                  options: {
                    width: 800,
                    height: 600,
                    pixelRatio: 1,
                    background: "#14151f",
                    wireframeBackground: "#14151f",
                    hasBounds: !!c.bounds,
                    enabled: !0,
                    wireframes: !0,
                    showSleeping: !0,
                    showDebug: !1,
                    showStats: !1,
                    showPerformance: !1,
                    showBounds: !1,
                    showVelocity: !1,
                    showCollisions: !1,
                    showSeparations: !1,
                    showAxes: !1,
                    showPositions: !1,
                    showAngleIndicator: !1,
                    showIds: !1,
                    showVertexNumbers: !1,
                    showConvexHulls: !1,
                    showInternalEdges: !1,
                    showMousePosition: !1,
                  },
                },
                y = r.extend(m, c);
              return (
                y.canvas &&
                  ((y.canvas.width = y.options.width || y.canvas.width),
                  (y.canvas.height = y.options.height || y.canvas.height)),
                (y.mouse = c.mouse),
                (y.engine = c.engine),
                (y.canvas = y.canvas || g(y.options.width, y.options.height)),
                (y.context = y.canvas.getContext("2d")),
                (y.textures = {}),
                (y.bounds = y.bounds || {
                  min: { x: 0, y: 0 },
                  max: { x: y.canvas.width, y: y.canvas.height },
                }),
                (y.controller = e),
                (y.options.showBroadphase = !1),
                y.options.pixelRatio !== 1 &&
                  e.setPixelRatio(y, y.options.pixelRatio),
                r.isElement(y.element) && y.element.appendChild(y.canvas),
                y
              );
            }),
            (e.run = function (c) {
              (function m(y) {
                (c.frameRequestId = t(m)),
                  i(c, y),
                  e.world(c, y),
                  (c.options.showStats || c.options.showDebug) &&
                    e.stats(c, c.context, y),
                  (c.options.showPerformance || c.options.showDebug) &&
                    e.performance(c, c.context, y);
              })();
            }),
            (e.stop = function (c) {
              n(c.frameRequestId);
            }),
            (e.setPixelRatio = function (c, m) {
              var y = c.options,
                p = c.canvas;
              m === "auto" && (m = S(p)),
                (y.pixelRatio = m),
                p.setAttribute("data-pixel-ratio", m),
                (p.width = y.width * m),
                (p.height = y.height * m),
                (p.style.width = y.width + "px"),
                (p.style.height = y.height + "px");
            }),
            (e.lookAt = function (c, m, y, p) {
              (p = typeof p < "u" ? p : !0),
                (m = r.isArray(m) ? m : [m]),
                (y = y || { x: 0, y: 0 });
              for (
                var P = {
                    min: { x: 1 / 0, y: 1 / 0 },
                    max: { x: -1 / 0, y: -1 / 0 },
                  },
                  w = 0;
                w < m.length;
                w += 1
              ) {
                var T = m[w],
                  I = T.bounds ? T.bounds.min : T.min || T.position || T,
                  E = T.bounds ? T.bounds.max : T.max || T.position || T;
                I &&
                  E &&
                  (I.x < P.min.x && (P.min.x = I.x),
                  E.x > P.max.x && (P.max.x = E.x),
                  I.y < P.min.y && (P.min.y = I.y),
                  E.y > P.max.y && (P.max.y = E.y));
              }
              var R = P.max.x - P.min.x + 2 * y.x,
                L = P.max.y - P.min.y + 2 * y.y,
                F = c.canvas.height,
                V = c.canvas.width,
                O = V / F,
                W = R / L,
                $ = 1,
                N = 1;
              W > O ? (N = W / O) : ($ = O / W),
                (c.options.hasBounds = !0),
                (c.bounds.min.x = P.min.x),
                (c.bounds.max.x = P.min.x + R * $),
                (c.bounds.min.y = P.min.y),
                (c.bounds.max.y = P.min.y + L * N),
                p &&
                  ((c.bounds.min.x += R * 0.5 - R * $ * 0.5),
                  (c.bounds.max.x += R * 0.5 - R * $ * 0.5),
                  (c.bounds.min.y += L * 0.5 - L * N * 0.5),
                  (c.bounds.max.y += L * 0.5 - L * N * 0.5)),
                (c.bounds.min.x -= y.x),
                (c.bounds.max.x -= y.x),
                (c.bounds.min.y -= y.y),
                (c.bounds.max.y -= y.y),
                c.mouse &&
                  (s.setScale(c.mouse, {
                    x: (c.bounds.max.x - c.bounds.min.x) / c.canvas.width,
                    y: (c.bounds.max.y - c.bounds.min.y) / c.canvas.height,
                  }),
                  s.setOffset(c.mouse, c.bounds.min));
            }),
            (e.startViewTransform = function (c) {
              var m = c.bounds.max.x - c.bounds.min.x,
                y = c.bounds.max.y - c.bounds.min.y,
                p = m / c.options.width,
                P = y / c.options.height;
              c.context.setTransform(
                c.options.pixelRatio / p,
                0,
                0,
                c.options.pixelRatio / P,
                0,
                0
              ),
                c.context.translate(-c.bounds.min.x, -c.bounds.min.y);
            }),
            (e.endViewTransform = function (c) {
              c.context.setTransform(
                c.options.pixelRatio,
                0,
                0,
                c.options.pixelRatio,
                0,
                0
              );
            }),
            (e.world = function (c, m) {
              var y = r.now(),
                p = c.engine,
                P = p.world,
                w = c.canvas,
                T = c.context,
                I = c.options,
                E = c.timing,
                R = a.allBodies(P),
                L = a.allConstraints(P),
                F = I.wireframes ? I.wireframeBackground : I.background,
                V = [],
                O = [],
                W,
                $ = { timestamp: p.timing.timestamp };
              if (
                (l.trigger(c, "beforeRender", $),
                c.currentBackground !== F && M(c, F),
                (T.globalCompositeOperation = "source-in"),
                (T.fillStyle = "transparent"),
                T.fillRect(0, 0, w.width, w.height),
                (T.globalCompositeOperation = "source-over"),
                I.hasBounds)
              ) {
                for (W = 0; W < R.length; W++) {
                  var N = R[W];
                  u.overlaps(N.bounds, c.bounds) && V.push(N);
                }
                for (W = 0; W < L.length; W++) {
                  var k = L[W],
                    U = k.bodyA,
                    Z = k.bodyB,
                    K = k.pointA,
                    G = k.pointB;
                  U && (K = v.add(U.position, k.pointA)),
                    Z && (G = v.add(Z.position, k.pointB)),
                    !(!K || !G) &&
                      (u.contains(c.bounds, K) || u.contains(c.bounds, G)) &&
                      O.push(k);
                }
                e.startViewTransform(c),
                  c.mouse &&
                    (s.setScale(c.mouse, {
                      x: (c.bounds.max.x - c.bounds.min.x) / c.options.width,
                      y: (c.bounds.max.y - c.bounds.min.y) / c.options.height,
                    }),
                    s.setOffset(c.mouse, c.bounds.min));
              } else
                (O = L),
                  (V = R),
                  c.options.pixelRatio !== 1 &&
                    c.context.setTransform(
                      c.options.pixelRatio,
                      0,
                      0,
                      c.options.pixelRatio,
                      0,
                      0
                    );
              !I.wireframes || (p.enableSleeping && I.showSleeping)
                ? e.bodies(c, V, T)
                : (I.showConvexHulls && e.bodyConvexHulls(c, V, T),
                  e.bodyWireframes(c, V, T)),
                I.showBounds && e.bodyBounds(c, V, T),
                (I.showAxes || I.showAngleIndicator) && e.bodyAxes(c, V, T),
                I.showPositions && e.bodyPositions(c, V, T),
                I.showVelocity && e.bodyVelocity(c, V, T),
                I.showIds && e.bodyIds(c, V, T),
                I.showSeparations && e.separations(c, p.pairs.list, T),
                I.showCollisions && e.collisions(c, p.pairs.list, T),
                I.showVertexNumbers && e.vertexNumbers(c, V, T),
                I.showMousePosition && e.mousePosition(c, c.mouse, T),
                e.constraints(O, T),
                I.hasBounds && e.endViewTransform(c),
                l.trigger(c, "afterRender", $),
                (E.lastElapsed = r.now() - y);
            }),
            (e.stats = function (c, m, y) {
              for (
                var p = c.engine,
                  P = p.world,
                  w = a.allBodies(P),
                  T = 0,
                  I = 55,
                  E = 44,
                  R = 0,
                  L = 0,
                  F = 0;
                F < w.length;
                F += 1
              )
                T += w[F].parts.length;
              var V = {
                Part: T,
                Body: w.length,
                Cons: a.allConstraints(P).length,
                Comp: a.allComposites(P).length,
                Pair: p.pairs.list.length,
              };
              (m.fillStyle = "#0e0f19"),
                m.fillRect(R, L, I * 5.5, E),
                (m.font = "12px Arial"),
                (m.textBaseline = "top"),
                (m.textAlign = "right");
              for (var O in V) {
                var W = V[O];
                (m.fillStyle = "#aaa"),
                  m.fillText(O, R + I, L + 8),
                  (m.fillStyle = "#eee"),
                  m.fillText(W, R + I, L + 26),
                  (R += I);
              }
            }),
            (e.performance = function (c, m) {
              var y = c.engine,
                p = c.timing,
                P = p.deltaHistory,
                w = p.elapsedHistory,
                T = p.timestampElapsedHistory,
                I = p.engineDeltaHistory,
                E = p.engineElapsedHistory,
                R = y.timing.lastDelta,
                L = f(P),
                F = f(w),
                V = f(I),
                O = f(E),
                W = f(T),
                $ = W / L || 0,
                N = 1e3 / L || 0,
                k = 4,
                U = 12,
                Z = 60,
                K = 34,
                G = 10,
                Y = 69;
              (m.fillStyle = "#0e0f19"),
                m.fillRect(0, 50, U * 4 + Z * 5 + 22, K),
                e.status(
                  m,
                  G,
                  Y,
                  Z,
                  k,
                  P.length,
                  Math.round(N) + " fps",
                  N / e._goodFps,
                  function (z) {
                    return P[z] / L - 1;
                  }
                ),
                e.status(
                  m,
                  G + U + Z,
                  Y,
                  Z,
                  k,
                  I.length,
                  R.toFixed(2) + " dt",
                  e._goodDelta / R,
                  function (z) {
                    return I[z] / V - 1;
                  }
                ),
                e.status(
                  m,
                  G + (U + Z) * 2,
                  Y,
                  Z,
                  k,
                  E.length,
                  O.toFixed(2) + " ut",
                  1 - O / e._goodFps,
                  function (z) {
                    return E[z] / O - 1;
                  }
                ),
                e.status(
                  m,
                  G + (U + Z) * 3,
                  Y,
                  Z,
                  k,
                  w.length,
                  F.toFixed(2) + " rt",
                  1 - F / e._goodFps,
                  function (z) {
                    return w[z] / F - 1;
                  }
                ),
                e.status(
                  m,
                  G + (U + Z) * 4,
                  Y,
                  Z,
                  k,
                  T.length,
                  $.toFixed(2) + " x",
                  $ * $ * $,
                  function (z) {
                    return (T[z] / P[z] / $ || 0) - 1;
                  }
                );
            }),
            (e.status = function (c, m, y, p, P, w, T, I, E) {
              (c.strokeStyle = "#888"),
                (c.fillStyle = "#444"),
                (c.lineWidth = 1),
                c.fillRect(m, y + 7, p, 1),
                c.beginPath(),
                c.moveTo(m, y + 7 - P * r.clamp(0.4 * E(0), -2, 2));
              for (var R = 0; R < p; R += 1)
                c.lineTo(
                  m + R,
                  y + 7 - (R < w ? P * r.clamp(0.4 * E(R), -2, 2) : 0)
                );
              c.stroke(),
                (c.fillStyle =
                  "hsl(" + r.clamp(25 + 95 * I, 0, 120) + ",100%,60%)"),
                c.fillRect(m, y - 7, 4, 4),
                (c.font = "12px Arial"),
                (c.textBaseline = "middle"),
                (c.textAlign = "right"),
                (c.fillStyle = "#eee"),
                c.fillText(T, m + p, y - 5);
            }),
            (e.constraints = function (c, m) {
              for (var y = m, p = 0; p < c.length; p++) {
                var P = c[p];
                if (!(!P.render.visible || !P.pointA || !P.pointB)) {
                  var w = P.bodyA,
                    T = P.bodyB,
                    I,
                    E;
                  if (
                    (w ? (I = v.add(w.position, P.pointA)) : (I = P.pointA),
                    P.render.type === "pin")
                  )
                    y.beginPath(),
                      y.arc(I.x, I.y, 3, 0, 2 * Math.PI),
                      y.closePath();
                  else {
                    if (
                      (T ? (E = v.add(T.position, P.pointB)) : (E = P.pointB),
                      y.beginPath(),
                      y.moveTo(I.x, I.y),
                      P.render.type === "spring")
                    )
                      for (
                        var R = v.sub(E, I),
                          L = v.perp(v.normalise(R)),
                          F = Math.ceil(r.clamp(P.length / 5, 12, 20)),
                          V,
                          O = 1;
                        O < F;
                        O += 1
                      )
                        (V = O % 2 === 0 ? 1 : -1),
                          y.lineTo(
                            I.x + R.x * (O / F) + L.x * V * 4,
                            I.y + R.y * (O / F) + L.y * V * 4
                          );
                    y.lineTo(E.x, E.y);
                  }
                  P.render.lineWidth &&
                    ((y.lineWidth = P.render.lineWidth),
                    (y.strokeStyle = P.render.strokeStyle),
                    y.stroke()),
                    P.render.anchors &&
                      ((y.fillStyle = P.render.strokeStyle),
                      y.beginPath(),
                      y.arc(I.x, I.y, 3, 0, 2 * Math.PI),
                      y.arc(E.x, E.y, 3, 0, 2 * Math.PI),
                      y.closePath(),
                      y.fill());
                }
              }
            }),
            (e.bodies = function (c, m, y) {
              var p = y;
              c.engine;
              var P = c.options,
                w = P.showInternalEdges || !P.wireframes,
                T,
                I,
                E,
                R;
              for (E = 0; E < m.length; E++)
                if (((T = m[E]), !!T.render.visible)) {
                  for (R = T.parts.length > 1 ? 1 : 0; R < T.parts.length; R++)
                    if (((I = T.parts[R]), !!I.render.visible)) {
                      if (
                        (P.showSleeping && T.isSleeping
                          ? (p.globalAlpha = 0.5 * I.render.opacity)
                          : I.render.opacity !== 1 &&
                            (p.globalAlpha = I.render.opacity),
                        I.render.sprite &&
                          I.render.sprite.texture &&
                          !P.wireframes)
                      ) {
                        var L = I.render.sprite,
                          F = x(c, L.texture);
                        p.translate(I.position.x, I.position.y),
                          p.rotate(I.angle),
                          p.drawImage(
                            F,
                            F.width * -L.xOffset * L.xScale,
                            F.height * -L.yOffset * L.yScale,
                            F.width * L.xScale,
                            F.height * L.yScale
                          ),
                          p.rotate(-I.angle),
                          p.translate(-I.position.x, -I.position.y);
                      } else {
                        if (I.circleRadius)
                          p.beginPath(),
                            p.arc(
                              I.position.x,
                              I.position.y,
                              I.circleRadius,
                              0,
                              2 * Math.PI
                            );
                        else {
                          p.beginPath(),
                            p.moveTo(I.vertices[0].x, I.vertices[0].y);
                          for (var V = 1; V < I.vertices.length; V++)
                            !I.vertices[V - 1].isInternal || w
                              ? p.lineTo(I.vertices[V].x, I.vertices[V].y)
                              : p.moveTo(I.vertices[V].x, I.vertices[V].y),
                              I.vertices[V].isInternal &&
                                !w &&
                                p.moveTo(
                                  I.vertices[(V + 1) % I.vertices.length].x,
                                  I.vertices[(V + 1) % I.vertices.length].y
                                );
                          p.lineTo(I.vertices[0].x, I.vertices[0].y),
                            p.closePath();
                        }
                        P.wireframes
                          ? ((p.lineWidth = 1),
                            (p.strokeStyle = "#bbb"),
                            p.stroke())
                          : ((p.fillStyle = I.render.fillStyle),
                            I.render.lineWidth &&
                              ((p.lineWidth = I.render.lineWidth),
                              (p.strokeStyle = I.render.strokeStyle),
                              p.stroke()),
                            p.fill());
                      }
                      p.globalAlpha = 1;
                    }
                }
            }),
            (e.bodyWireframes = function (c, m, y) {
              var p = y,
                P = c.options.showInternalEdges,
                w,
                T,
                I,
                E,
                R;
              for (p.beginPath(), I = 0; I < m.length; I++)
                if (((w = m[I]), !!w.render.visible))
                  for (
                    R = w.parts.length > 1 ? 1 : 0;
                    R < w.parts.length;
                    R++
                  ) {
                    for (
                      T = w.parts[R],
                        p.moveTo(T.vertices[0].x, T.vertices[0].y),
                        E = 1;
                      E < T.vertices.length;
                      E++
                    )
                      !T.vertices[E - 1].isInternal || P
                        ? p.lineTo(T.vertices[E].x, T.vertices[E].y)
                        : p.moveTo(T.vertices[E].x, T.vertices[E].y),
                        T.vertices[E].isInternal &&
                          !P &&
                          p.moveTo(
                            T.vertices[(E + 1) % T.vertices.length].x,
                            T.vertices[(E + 1) % T.vertices.length].y
                          );
                    p.lineTo(T.vertices[0].x, T.vertices[0].y);
                  }
              (p.lineWidth = 1), (p.strokeStyle = "#bbb"), p.stroke();
            }),
            (e.bodyConvexHulls = function (c, m, y) {
              var p = y,
                P,
                w,
                T;
              for (p.beginPath(), w = 0; w < m.length; w++)
                if (
                  ((P = m[w]), !(!P.render.visible || P.parts.length === 1))
                ) {
                  for (
                    p.moveTo(P.vertices[0].x, P.vertices[0].y), T = 1;
                    T < P.vertices.length;
                    T++
                  )
                    p.lineTo(P.vertices[T].x, P.vertices[T].y);
                  p.lineTo(P.vertices[0].x, P.vertices[0].y);
                }
              (p.lineWidth = 1),
                (p.strokeStyle = "rgba(255,255,255,0.2)"),
                p.stroke();
            }),
            (e.vertexNumbers = function (c, m, y) {
              var p = y,
                P,
                w,
                T;
              for (P = 0; P < m.length; P++) {
                var I = m[P].parts;
                for (T = I.length > 1 ? 1 : 0; T < I.length; T++) {
                  var E = I[T];
                  for (w = 0; w < E.vertices.length; w++)
                    (p.fillStyle = "rgba(255,255,255,0.2)"),
                      p.fillText(
                        P + "_" + w,
                        E.position.x + (E.vertices[w].x - E.position.x) * 0.8,
                        E.position.y + (E.vertices[w].y - E.position.y) * 0.8
                      );
                }
              }
            }),
            (e.mousePosition = function (c, m, y) {
              var p = y;
              (p.fillStyle = "rgba(255,255,255,0.8)"),
                p.fillText(
                  m.position.x + "  " + m.position.y,
                  m.position.x + 5,
                  m.position.y - 5
                );
            }),
            (e.bodyBounds = function (c, m, y) {
              var p = y;
              c.engine;
              var P = c.options;
              p.beginPath();
              for (var w = 0; w < m.length; w++) {
                var T = m[w];
                if (T.render.visible)
                  for (
                    var I = m[w].parts, E = I.length > 1 ? 1 : 0;
                    E < I.length;
                    E++
                  ) {
                    var R = I[E];
                    p.rect(
                      R.bounds.min.x,
                      R.bounds.min.y,
                      R.bounds.max.x - R.bounds.min.x,
                      R.bounds.max.y - R.bounds.min.y
                    );
                  }
              }
              P.wireframes
                ? (p.strokeStyle = "rgba(255,255,255,0.08)")
                : (p.strokeStyle = "rgba(0,0,0,0.1)"),
                (p.lineWidth = 1),
                p.stroke();
            }),
            (e.bodyAxes = function (c, m, y) {
              var p = y;
              c.engine;
              var P = c.options,
                w,
                T,
                I,
                E;
              for (p.beginPath(), T = 0; T < m.length; T++) {
                var R = m[T],
                  L = R.parts;
                if (R.render.visible)
                  if (P.showAxes)
                    for (I = L.length > 1 ? 1 : 0; I < L.length; I++)
                      for (w = L[I], E = 0; E < w.axes.length; E++) {
                        var F = w.axes[E];
                        p.moveTo(w.position.x, w.position.y),
                          p.lineTo(
                            w.position.x + F.x * 20,
                            w.position.y + F.y * 20
                          );
                      }
                  else
                    for (I = L.length > 1 ? 1 : 0; I < L.length; I++)
                      for (w = L[I], E = 0; E < w.axes.length; E++)
                        p.moveTo(w.position.x, w.position.y),
                          p.lineTo(
                            (w.vertices[0].x +
                              w.vertices[w.vertices.length - 1].x) /
                              2,
                            (w.vertices[0].y +
                              w.vertices[w.vertices.length - 1].y) /
                              2
                          );
              }
              P.wireframes
                ? ((p.strokeStyle = "indianred"), (p.lineWidth = 1))
                : ((p.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                  (p.globalCompositeOperation = "overlay"),
                  (p.lineWidth = 2)),
                p.stroke(),
                (p.globalCompositeOperation = "source-over");
            }),
            (e.bodyPositions = function (c, m, y) {
              var p = y;
              c.engine;
              var P = c.options,
                w,
                T,
                I,
                E;
              for (p.beginPath(), I = 0; I < m.length; I++)
                if (((w = m[I]), !!w.render.visible))
                  for (E = 0; E < w.parts.length; E++)
                    (T = w.parts[E]),
                      p.arc(T.position.x, T.position.y, 3, 0, 2 * Math.PI, !1),
                      p.closePath();
              for (
                P.wireframes
                  ? (p.fillStyle = "indianred")
                  : (p.fillStyle = "rgba(0,0,0,0.5)"),
                  p.fill(),
                  p.beginPath(),
                  I = 0;
                I < m.length;
                I++
              )
                (w = m[I]),
                  w.render.visible &&
                    (p.arc(
                      w.positionPrev.x,
                      w.positionPrev.y,
                      2,
                      0,
                      2 * Math.PI,
                      !1
                    ),
                    p.closePath());
              (p.fillStyle = "rgba(255,165,0,0.8)"), p.fill();
            }),
            (e.bodyVelocity = function (c, m, y) {
              var p = y;
              p.beginPath();
              for (var P = 0; P < m.length; P++) {
                var w = m[P];
                if (w.render.visible) {
                  var T = o.getVelocity(w);
                  p.moveTo(w.position.x, w.position.y),
                    p.lineTo(w.position.x + T.x, w.position.y + T.y);
                }
              }
              (p.lineWidth = 3), (p.strokeStyle = "cornflowerblue"), p.stroke();
            }),
            (e.bodyIds = function (c, m, y) {
              var p = y,
                P,
                w;
              for (P = 0; P < m.length; P++)
                if (m[P].render.visible) {
                  var T = m[P].parts;
                  for (w = T.length > 1 ? 1 : 0; w < T.length; w++) {
                    var I = T[w];
                    (p.font = "12px Arial"),
                      (p.fillStyle = "rgba(255,255,255,0.5)"),
                      p.fillText(I.id, I.position.x + 10, I.position.y - 10);
                  }
                }
            }),
            (e.collisions = function (c, m, y) {
              var p = y,
                P = c.options,
                w,
                T,
                I,
                E;
              for (p.beginPath(), I = 0; I < m.length; I++)
                if (((w = m[I]), !!w.isActive))
                  for (
                    T = w.collision, E = 0;
                    E < w.activeContacts.length;
                    E++
                  ) {
                    var R = w.activeContacts[E],
                      L = R.vertex;
                    p.rect(L.x - 1.5, L.y - 1.5, 3.5, 3.5);
                  }
              for (
                P.wireframes
                  ? (p.fillStyle = "rgba(255,255,255,0.7)")
                  : (p.fillStyle = "orange"),
                  p.fill(),
                  p.beginPath(),
                  I = 0;
                I < m.length;
                I++
              )
                if (
                  ((w = m[I]),
                  !!w.isActive &&
                    ((T = w.collision), w.activeContacts.length > 0))
                ) {
                  var F = w.activeContacts[0].vertex.x,
                    V = w.activeContacts[0].vertex.y;
                  w.activeContacts.length === 2 &&
                    ((F =
                      (w.activeContacts[0].vertex.x +
                        w.activeContacts[1].vertex.x) /
                      2),
                    (V =
                      (w.activeContacts[0].vertex.y +
                        w.activeContacts[1].vertex.y) /
                      2)),
                    T.bodyB === T.supports[0].body || T.bodyA.isStatic === !0
                      ? p.moveTo(F - T.normal.x * 8, V - T.normal.y * 8)
                      : p.moveTo(F + T.normal.x * 8, V + T.normal.y * 8),
                    p.lineTo(F, V);
                }
              P.wireframes
                ? (p.strokeStyle = "rgba(255,165,0,0.7)")
                : (p.strokeStyle = "orange"),
                (p.lineWidth = 1),
                p.stroke();
            }),
            (e.separations = function (c, m, y) {
              var p = y,
                P = c.options,
                w,
                T,
                I,
                E,
                R;
              for (p.beginPath(), R = 0; R < m.length; R++)
                if (((w = m[R]), !!w.isActive)) {
                  (T = w.collision), (I = T.bodyA), (E = T.bodyB);
                  var L = 1;
                  !E.isStatic && !I.isStatic && (L = 0.5),
                    E.isStatic && (L = 0),
                    p.moveTo(E.position.x, E.position.y),
                    p.lineTo(
                      E.position.x - T.penetration.x * L,
                      E.position.y - T.penetration.y * L
                    ),
                    (L = 1),
                    !E.isStatic && !I.isStatic && (L = 0.5),
                    I.isStatic && (L = 0),
                    p.moveTo(I.position.x, I.position.y),
                    p.lineTo(
                      I.position.x + T.penetration.x * L,
                      I.position.y + T.penetration.y * L
                    );
                }
              P.wireframes
                ? (p.strokeStyle = "rgba(255,165,0,0.5)")
                : (p.strokeStyle = "orange"),
                p.stroke();
            }),
            (e.inspector = function (c, m) {
              c.engine;
              var y = c.selected,
                p = c.render,
                P = p.options,
                w;
              if (P.hasBounds) {
                var T = p.bounds.max.x - p.bounds.min.x,
                  I = p.bounds.max.y - p.bounds.min.y,
                  E = T / p.options.width,
                  R = I / p.options.height;
                m.scale(1 / E, 1 / R),
                  m.translate(-p.bounds.min.x, -p.bounds.min.y);
              }
              for (var L = 0; L < y.length; L++) {
                var F = y[L].data;
                switch (
                  (m.translate(0.5, 0.5),
                  (m.lineWidth = 1),
                  (m.strokeStyle = "rgba(255,165,0,0.9)"),
                  m.setLineDash([1, 2]),
                  F.type)
                ) {
                  case "body":
                    (w = F.bounds),
                      m.beginPath(),
                      m.rect(
                        Math.floor(w.min.x - 3),
                        Math.floor(w.min.y - 3),
                        Math.floor(w.max.x - w.min.x + 6),
                        Math.floor(w.max.y - w.min.y + 6)
                      ),
                      m.closePath(),
                      m.stroke();
                    break;
                  case "constraint":
                    var V = F.pointA;
                    F.bodyA && (V = F.pointB),
                      m.beginPath(),
                      m.arc(V.x, V.y, 10, 0, 2 * Math.PI),
                      m.closePath(),
                      m.stroke();
                    break;
                }
                m.setLineDash([]), m.translate(-0.5, -0.5);
              }
              c.selectStart !== null &&
                (m.translate(0.5, 0.5),
                (m.lineWidth = 1),
                (m.strokeStyle = "rgba(255,165,0,0.6)"),
                (m.fillStyle = "rgba(255,165,0,0.1)"),
                (w = c.selectBounds),
                m.beginPath(),
                m.rect(
                  Math.floor(w.min.x),
                  Math.floor(w.min.y),
                  Math.floor(w.max.x - w.min.x),
                  Math.floor(w.max.y - w.min.y)
                ),
                m.closePath(),
                m.stroke(),
                m.fill(),
                m.translate(-0.5, -0.5)),
                P.hasBounds && m.setTransform(1, 0, 0, 1, 0, 0);
            });
          var i = function (c, m) {
              var y = c.engine,
                p = c.timing,
                P = p.historySize,
                w = y.timing.timestamp;
              (p.delta = m - p.lastTime || e._goodDelta),
                (p.lastTime = m),
                (p.timestampElapsed = w - p.lastTimestamp || 0),
                (p.lastTimestamp = w),
                p.deltaHistory.unshift(p.delta),
                (p.deltaHistory.length = Math.min(p.deltaHistory.length, P)),
                p.engineDeltaHistory.unshift(y.timing.lastDelta),
                (p.engineDeltaHistory.length = Math.min(
                  p.engineDeltaHistory.length,
                  P
                )),
                p.timestampElapsedHistory.unshift(p.timestampElapsed),
                (p.timestampElapsedHistory.length = Math.min(
                  p.timestampElapsedHistory.length,
                  P
                )),
                p.engineElapsedHistory.unshift(y.timing.lastElapsed),
                (p.engineElapsedHistory.length = Math.min(
                  p.engineElapsedHistory.length,
                  P
                )),
                p.elapsedHistory.unshift(p.lastElapsed),
                (p.elapsedHistory.length = Math.min(
                  p.elapsedHistory.length,
                  P
                ));
            },
            f = function (c) {
              for (var m = 0, y = 0; y < c.length; y += 1) m += c[y];
              return m / c.length || 0;
            },
            g = function (c, m) {
              var y = document.createElement("canvas");
              return (
                (y.width = c),
                (y.height = m),
                (y.oncontextmenu = function () {
                  return !1;
                }),
                (y.onselectstart = function () {
                  return !1;
                }),
                y
              );
            },
            S = function (c) {
              var m = c.getContext("2d"),
                y = window.devicePixelRatio || 1,
                p =
                  m.webkitBackingStorePixelRatio ||
                  m.mozBackingStorePixelRatio ||
                  m.msBackingStorePixelRatio ||
                  m.oBackingStorePixelRatio ||
                  m.backingStorePixelRatio ||
                  1;
              return y / p;
            },
            x = function (c, m) {
              var y = c.textures[m];
              return y || ((y = c.textures[m] = new Image()), (y.src = m), y);
            },
            M = function (c, m) {
              var y = m;
              /(jpg|gif|png)$/.test(m) && (y = "url(" + m + ")"),
                (c.canvas.style.background = y),
                (c.canvas.style.backgroundSize = "contain"),
                (c.currentBackground = m);
            };
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(5),
          r = h(17),
          a = h(0);
        (function () {
          var u, l;
          if (
            (typeof window < "u" &&
              ((u =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame),
              (l =
                window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame)),
            !u)
          ) {
            var v;
            (u = function (s) {
              v = setTimeout(function () {
                s(a.now());
              }, 1e3 / 60);
            }),
              (l = function () {
                clearTimeout(v);
              });
          }
          (e.create = function (s) {
            var t = {
                fps: 60,
                deltaSampleSize: 60,
                counterTimestamp: 0,
                frameCounter: 0,
                deltaHistory: [],
                timePrev: null,
                frameRequestId: null,
                isFixed: !1,
                enabled: !0,
              },
              n = a.extend(t, s);
            return (
              (n.delta = n.delta || 1e3 / n.fps),
              (n.deltaMin = n.deltaMin || 1e3 / n.fps),
              (n.deltaMax = n.deltaMax || 1e3 / (n.fps * 0.5)),
              (n.fps = 1e3 / n.delta),
              n
            );
          }),
            (e.run = function (s, t) {
              return (
                typeof s.positionIterations < "u" &&
                  ((t = s), (s = e.create())),
                (function n(i) {
                  (s.frameRequestId = u(n)), i && s.enabled && e.tick(s, t, i);
                })(),
                s
              );
            }),
            (e.tick = function (s, t, n) {
              var i = t.timing,
                f;
              s.isFixed
                ? (f = s.delta)
                : ((f = n - s.timePrev || s.delta),
                  (s.timePrev = n),
                  s.deltaHistory.push(f),
                  (s.deltaHistory = s.deltaHistory.slice(-s.deltaSampleSize)),
                  (f = Math.min.apply(null, s.deltaHistory)),
                  (f = f < s.deltaMin ? s.deltaMin : f),
                  (f = f > s.deltaMax ? s.deltaMax : f),
                  (s.delta = f));
              var g = { timestamp: i.timestamp };
              o.trigger(s, "beforeTick", g),
                (s.frameCounter += 1),
                n - s.counterTimestamp >= 1e3 &&
                  ((s.fps = s.frameCounter * ((n - s.counterTimestamp) / 1e3)),
                  (s.counterTimestamp = n),
                  (s.frameCounter = 0)),
                o.trigger(s, "tick", g),
                o.trigger(s, "beforeUpdate", g),
                r.update(t, f),
                o.trigger(s, "afterUpdate", g),
                o.trigger(s, "afterTick", g);
            }),
            (e.stop = function (s) {
              l(s.frameRequestId);
            }),
            (e.start = function (s, t) {
              e.run(s, t);
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(8),
          r = h(0),
          a = r.deprecated;
        (function () {
          (e.collides = function (u, l) {
            return o.collides(u, l);
          }),
            a(e, "collides", "SAT.collides ➤ replaced by Collision.collides");
        })();
      },
      function (C, B, h) {
        var e = {};
        (C.exports = e), h(1);
        var o = h(0);
        (function () {
          (e.pathToVertices = function (r, a) {
            typeof window < "u" &&
              !("SVGPathSeg" in window) &&
              o.warn(
                "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
              );
            var u,
              l,
              v,
              s,
              t,
              n,
              i,
              f,
              g,
              S,
              x = [],
              M,
              c,
              m = 0,
              y = 0,
              p = 0;
            a = a || 15;
            var P = function (T, I, E) {
                var R = E % 2 === 1 && E > 1;
                if (!g || T != g.x || I != g.y) {
                  g && R ? ((M = g.x), (c = g.y)) : ((M = 0), (c = 0));
                  var L = { x: M + T, y: c + I };
                  (R || !g) && (g = L), x.push(L), (y = M + T), (p = c + I);
                }
              },
              w = function (T) {
                var I = T.pathSegTypeAsLetter.toUpperCase();
                if (I !== "Z") {
                  switch (I) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      (y = T.x), (p = T.y);
                      break;
                    case "H":
                      y = T.x;
                      break;
                    case "V":
                      p = T.y;
                      break;
                  }
                  P(y, p, T.pathSegType);
                }
              };
            for (
              e._svgPathToAbsolute(r), v = r.getTotalLength(), n = [], u = 0;
              u < r.pathSegList.numberOfItems;
              u += 1
            )
              n.push(r.pathSegList.getItem(u));
            for (i = n.concat(); m < v; ) {
              if (((S = r.getPathSegAtLength(m)), (t = n[S]), t != f)) {
                for (; i.length && i[0] != t; ) w(i.shift());
                f = t;
              }
              switch (t.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  (s = r.getPointAtLength(m)), P(s.x, s.y, 0);
                  break;
              }
              m += a;
            }
            for (u = 0, l = i.length; u < l; ++u) w(i[u]);
            return x;
          }),
            (e._svgPathToAbsolute = function (r) {
              for (
                var a,
                  u,
                  l,
                  v,
                  s,
                  t,
                  n = r.pathSegList,
                  i = 0,
                  f = 0,
                  g = n.numberOfItems,
                  S = 0;
                S < g;
                ++S
              ) {
                var x = n.getItem(S),
                  M = x.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(M))
                  "x" in x && (i = x.x), "y" in x && (f = x.y);
                else
                  switch (
                    ("x1" in x && (l = i + x.x1),
                    "x2" in x && (s = i + x.x2),
                    "y1" in x && (v = f + x.y1),
                    "y2" in x && (t = f + x.y2),
                    "x" in x && (i += x.x),
                    "y" in x && (f += x.y),
                    M)
                  ) {
                    case "m":
                      n.replaceItem(r.createSVGPathSegMovetoAbs(i, f), S);
                      break;
                    case "l":
                      n.replaceItem(r.createSVGPathSegLinetoAbs(i, f), S);
                      break;
                    case "h":
                      n.replaceItem(
                        r.createSVGPathSegLinetoHorizontalAbs(i),
                        S
                      );
                      break;
                    case "v":
                      n.replaceItem(r.createSVGPathSegLinetoVerticalAbs(f), S);
                      break;
                    case "c":
                      n.replaceItem(
                        r.createSVGPathSegCurvetoCubicAbs(i, f, l, v, s, t),
                        S
                      );
                      break;
                    case "s":
                      n.replaceItem(
                        r.createSVGPathSegCurvetoCubicSmoothAbs(i, f, s, t),
                        S
                      );
                      break;
                    case "q":
                      n.replaceItem(
                        r.createSVGPathSegCurvetoQuadraticAbs(i, f, l, v),
                        S
                      );
                      break;
                    case "t":
                      n.replaceItem(
                        r.createSVGPathSegCurvetoQuadraticSmoothAbs(i, f),
                        S
                      );
                      break;
                    case "a":
                      n.replaceItem(
                        r.createSVGPathSegArcAbs(
                          i,
                          f,
                          x.r1,
                          x.r2,
                          x.angle,
                          x.largeArcFlag,
                          x.sweepFlag
                        ),
                        S
                      );
                      break;
                    case "z":
                    case "Z":
                      (i = a), (f = u);
                      break;
                  }
                (M == "M" || M == "m") && ((a = i), (u = f));
              }
            });
        })();
      },
      function (C, B, h) {
        var e = {};
        C.exports = e;
        var o = h(6);
        h(0),
          (function () {
            (e.create = o.create),
              (e.add = o.add),
              (e.remove = o.remove),
              (e.clear = o.clear),
              (e.addComposite = o.addComposite),
              (e.addBody = o.addBody),
              (e.addConstraint = o.addConstraint);
          })();
      },
    ]);
  });
})(We);
var H = We.exports;
const vt = {
    sm: {
      width: 923,
      height: 227,
      offset: { x: -74, y: -45 },
      path: "0 221, 53 221, 49 193, 49 154, 53 112, 60 79, 73 51, 93 34, 118 27, 150 34, 167 47, 176 68, 182 98, 189 144, 201 123, 218 109, 247 103, 269 106, 288 118, 302 137, 308 154, 308 106, 356 106, 358 112, 367 106, 384 103, 397 103, 416 109, 433 126, 433 112, 450 112, 450 63, 500 63, 500 112, 531 112, 531 165, 546 123, 563 109, 584 103, 611 103, 634 112, 648 126, 657 154, 667 130, 681 115, 699 106, 721 103, 746 109, 767 126, 767 115, 788 115, 788 60, 837 60, 837 112, 866 112, 866 162, 832 162, 832 221, 922 221, 922 227, 0 227",
    },
    lg: {
      width: 1490,
      height: 240,
      offset: { x: -21, y: -41 },
      path: "0 240, 0 234, 54 234, 49 197, 49 146, 50 117, 54 86, 64 55, 76 38, 88 29, 107 17, 128 15, 149 17, 168 27, 188 47, 195 72, 199 95, 199 157, 205 139, 222 108, 251 98, 286 99, 306 109, 318 122, 318 109, 338 108, 338 52, 396 52, 395 109, 431 109, 431 163, 393 163, 393 233, 502 234, 501 101, 517 100, 502 80, 499 54, 507 41, 519 31, 529 30, 540 30, 551 37, 561 55, 559 74, 543 100, 559 100, 563 137, 568 100, 615 99, 620 108, 637 99, 658 96, 675 97, 692 108, 710 132, 714 167, 714 234, 784 234, 785 165, 764 165, 764 110, 786 110, 786 51, 842 51, 841 108, 878 108, 877 138, 905 108, 935 96, 961 96, 985 106, 998 117, 1012 140, 1012 102, 1072 102, 1073 217, 1087 235, 1101 217, 1100 103, 1160 103, 1161 143, 1172 123, 1200 102, 1236 95, 1267 107, 1282 121, 1294 136, 1295 23, 1352 23, 1351 107, 1360 103, 1373 99, 1389 98, 1404 102, 1424 115, 1433 131, 1439 152, 1439 234, 1491 234, 1491 240",
    },
  },
  ht = {},
  gt = ["viewBox"],
  mt = {
    key: 0,
    d: "M930 240h-47a140 140 0 0 1-3-19 219 219 0 0 1-1-22 185 185 0 0 1 2-31 98 98 0 0 1 8-25 81 81 0 0 1 11-18 51 51 0 0 1 13-11 64 64 0 0 1 16-7 69 69 0 0 1 17-2 66 66 0 0 1 17 2 62 62 0 0 1 16 7 50 50 0 0 1 13 12 79 79 0 0 1 11 18 102 102 0 0 1 7 24 192 192 0 0 1 2 31 206 206 0 0 1-1 22 132 132 0 0 1-4 19h-46a54 54 0 0 0 4-12c2-8 3-18 3-31s-1-23-3-31a59 59 0 0 0-3-10 27 27 0 0 0-4-7 17 17 0 0 0-5-4 14 14 0 0 0-7-2 16 16 0 0 0-7 2 18 18 0 0 0-5 4 28 28 0 0 0-5 7 57 57 0 0 0-3 11c-2 8-3 18-3 29a165 165 0 0 0 1 25 59 59 0 0 0 5 17l1 2Zm414 0h-41l-1-209 43 1v91a40 40 0 0 1 9-9 43 43 0 0 1 12-7 52 52 0 0 1 16-2 60 60 0 0 1 12 1 47 47 0 0 1 10 4 44 44 0 0 1 9 6 48 48 0 0 1 8 8 52 52 0 0 1 6 10 77 77 0 0 1 4 13c3 10 4 21 4 34v59h-42v-49a159 159 0 0 0-2-22 53 53 0 0 0-3-15 19 19 0 0 0-8-8 22 22 0 0 0-11-3 20 20 0 0 0-7 2 19 19 0 0 0-6 3 24 24 0 0 0-5 7 45 45 0 0 0-4 9 84 84 0 0 0-2 19l-1 57Zm-637 0h-44a2103 2103 0 0 0 0-55 102 102 0 0 0-1-19 38 38 0 0 0-5-13 21 21 0 0 0-7-7 19 19 0 0 0-10-3 19 19 0 0 0-6 1 17 17 0 0 0-5 3 20 20 0 0 0-5 6 43 43 0 0 0-3 8c-2 5-3 13-3 21v58h-44l-1-131h39l3 17a41 41 0 0 1 12-12 44 44 0 0 1 13-7 63 63 0 0 1 17-2 55 55 0 0 1 11 1 44 44 0 0 1 10 4 40 40 0 0 1 9 5 45 45 0 0 1 7 8 50 50 0 0 1 6 10 76 76 0 0 1 4 13c2 9 3 20 3 33v61Zm-154 0h-44V110l44-1v131Zm738 0h-45c2-5 3-11 3-19l43 2a99 99 0 0 1-1 17Zm-76 0h-46a129 129 0 0 1-4-20 199 199 0 0 1-1-23 168 168 0 0 1 2-29 100 100 0 0 1 6-23 81 81 0 0 1 11-18 54 54 0 0 1 13-12 61 61 0 0 1 15-7 63 63 0 0 1 17-3h2a62 62 0 0 1 14 2 64 64 0 0 1 15 5 57 57 0 0 1 13 10 66 66 0 0 1 10 13 63 63 0 0 1 7 17 88 88 0 0 1 3 21l-42 3a63 63 0 0 0-2-14 34 34 0 0 0-4-10 21 21 0 0 0-6-6 12 12 0 0 0-7-3 16 16 0 0 0-7 2 19 19 0 0 0-6 5 30 30 0 0 0-5 7 58 58 0 0 0-3 11c-2 8-2 18-2 30a174 174 0 0 0 2 26l4 16h1Zm-61 0h-49a44 44 0 0 0 2-7 97 97 0 0 0 3-21V110l43-1Zm-85 0h-47a170 170 0 0 1-1-22V109h44v101a116 116 0 0 0 1 18 47 47 0 0 0 3 12Zm-235 0h-43v-5l1-79h-20v-40h20l1-57h42l-1 57h37l-1 40h-36l-2 71a36 36 0 0 0 2 13Zm-446 0h-43v-5l1-79h-20v-40h20l1-57h42l-1 57h37l-1 40h-37l-1 71a36 36 0 0 0 2 13Zm-63 0h-42a29 29 0 0 0 2-9l40 1v8Zm-75 0h-43a138 138 0 0 1-4-19 218 218 0 0 1-1-23 182 182 0 0 1 3-31 98 98 0 0 1 7-24 82 82 0 0 1 10-18 50 50 0 0 1 14-11 60 60 0 0 1 31-9 60 60 0 0 1 18 3 49 49 0 0 1 15 8 62 62 0 0 1 12 13 73 73 0 0 1 9 16 100 100 0 0 1 5 19 125 125 0 0 1 2 21l-1 16a86 86 0 0 1-1 11h-80a90 90 0 0 0 1 15 48 48 0 0 0 3 12v1Zm17-96a15 15 0 0 0-6 2 19 19 0 0 0-6 4 27 27 0 0 0-5 7 45 45 0 0 0-3 10 68 68 0 0 0-1 17h42a74 74 0 0 0 0-17 41 41 0 0 0-3-10 24 24 0 0 0-4-7 18 18 0 0 0-7-4 19 19 0 0 0-7-2Zm-77 96h-44a24 24 0 0 0 2-3 46 46 0 0 0 4-11 74 74 0 0 0 2-14 137 137 0 0 0 0-23h-25l-1-44h63l1 4a288 288 0 0 1 3 46 209 209 0 0 1-1 22 189 189 0 0 1-4 21v2Zm-72 0H65a122 122 0 0 1-5-22 368 368 0 0 1-3-99 262 262 0 0 1 5-31 129 129 0 0 1 9-27 91 91 0 0 1 13-21 54 54 0 0 1 9-8 51 51 0 0 1 10-6 55 55 0 0 1 12-3 69 69 0 0 1 12-2 76 76 0 0 1 23 4 48 48 0 0 1 17 9 67 67 0 0 1 12 14 64 64 0 0 1 8 17 127 127 0 0 1 4 18 135 135 0 0 1 1 19l-42 4a85 85 0 0 0-2-19 36 36 0 0 0-7-15 17 17 0 0 0-6-5 18 18 0 0 0-8-1 16 16 0 0 0-9 2 23 23 0 0 0-7 9 61 61 0 0 0-4 12 112 112 0 0 0-4 17 389 389 0 0 0-2 44l1 32a242 242 0 0 0 3 25 111 111 0 0 0 4 18 44 44 0 0 0 6 12 28 28 0 0 0 3 3ZM530 90a24 24 0 0 1-9-2 28 28 0 0 1-8-6 25 25 0 0 1-6-9 28 28 0 0 1-2-10 29 29 0 0 1 2-10 27 27 0 0 1 6-9 25 25 0 0 1 7-5 20 20 0 0 1 9-2h1a22 22 0 0 1 9 2 24 24 0 0 1 8 5 26 26 0 0 1 6 9 28 28 0 0 1 1 10 30 30 0 0 1-1 11 25 25 0 0 1-6 8 25 25 0 0 1-8 6 23 23 0 0 1-9 2Z",
  },
  pt = {
    key: 1,
    d: "M791 227v-72h-17v-36h18V68h38l-1 51h33l-1 36h-32l-1 63a39 39 0 0 0 0 9Zm-56 0a49 49 0 0 0 1-14l39 2a92 92 0 0 1-1 12Zm-71 0q-4-15-4-35 0-29 7-47t21-27a54 54 0 0 1 29-9 56 56 0 0 1 28 7 54 54 0 0 1 21 20q8 14 8 34l-37 3q0-14-5-22t-12-7q-7 0-12 5t-7 17q-2 11-2 27 0 23 5 34Zm-49 0v-21l-6-2a41 41 0 0 0-12-2 23 23 0 0 0-11 3 18 18 0 0 0-8 7 22 22 0 0 0-2 10 26 26 0 0 0 0 5h-40v-1q0-18 6-29a41 41 0 0 1 18-17q12-6 27-6 16 0 29 5v-11q0-14-5-20t-14-6q-8 0-13 5t-5 14h-37q1-16 7-27a41 41 0 0 1 17-18q12-6 29-6 30 0 44 16t14 44v57Zm7-18Zm-167 17v-71h-17v-36h18V68h38l-1 51h33v36h-33l-1 63a39 39 0 0 0 0 8Zm-59 0v-46q0-19-5-28t-15-8a16 16 0 0 0-11 3q-4 4-7 12l-3 19v48l-39 1V113l34-1 3 16a36 36 0 0 1 10-11q11-8 28-8 21 0 33 16t11 50v52Zm-134 0a57 57 0 0 0 2-7q3-10 3-27t-3-28q-2-11-7-15a13 13 0 0 0-10-5 15 15 0 0 0-11 5q-5 5-7 15t-3 27q0 24 5 36h-41a165 165 0 0 1-3-34q0-31 8-50t23-26a58 58 0 0 1 29-8 56 56 0 0 1 29 8q13 8 22 27t8 49a155 155 0 0 1-3 33Zm-126 0q4-6 5-17a265 265 0 0 0 2-31l40 2q0 27-4 46Zm-70 0q-9-30-9-74t8-70 23-37q14-11 34-11 28 0 42 21t16 63l-39 7q-2-26-7-38t-13-12q-7 0-13 7t-9 25q-3 18-3 46 0 39 7 61a50 50 0 0 0 5 12Z",
  };
function xt(A, d, C, B, h, e) {
  return (
    J(),
    X(
      "svg",
      {
        role: "img",
        class: "svg-get-in-contact fill-navy",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: A._is("lg") ? "0 0 1490 240" : "0 0 923 227",
        preserveAspectRatio: "xMidYMin meet",
      },
      [A._is("lg") ? (J(), X("path", mt)) : (J(), X("path", pt))],
      8,
      gt
    )
  );
}
const dt = Ve(ht, [["render", xt]]);
const yt = {
    components: { "svg-get-in-contact": dt },
    props: { error: { type: String, default: "" } },
    data() {
      return { visible: !1, cursor: null };
    },
    computed: {
      buttons() {
        const A = this.$api.options.links.split(`
`);
        return ue(A, (d) => {
          const C = d.split(" | ");
          return { label: C[0], url: C[1] };
        });
      },
      letters() {
        const A = this;
        let d = "";
        A.error
          ? (d = A._is("lg") ? "Error" + A.error : A.error)
          : (d = A._is("lg") ? "LoremIpsum" : "Lorem"),
          (d = d.replaceAll(" ", "").split(""));
        const C = this._window.data("colors"),
          B = Qe(ue(C, "DEFAULT")).slice(2);
        return ue(d, (h, e) => ({ character: h, color: B[e % B.length] }));
      },
    },
    beforeCreate() {
      this.matter = {};
    },
    mounted() {
      const A = this;
      ze(A.$refs.matter, ([{ isIntersecting: d }]) => {
        A.visible = d;
      });
    },
    watch: {
      visible: {
        handler(A) {
          const d = this;
          A ? d.matterInit() : d.matterDestroy();
        },
        immediate: !0,
      },
    },
    methods: {
      matterInit() {
        const A = this,
          d = A.matter;
        H.Common.setDecomp(ct),
          (d.engine = H.Engine.create()),
          (d.world = d.engine.world),
          (d.$el = A.$refs.matter),
          (d.width = d.$el.offsetWidth),
          (d.height = d.$el.offsetHeight),
          (d.render = H.Render.create({
            element: d.$el,
            engine: d.engine,
            options: {
              background: "transparent",
              wireframes: !1,
              width: d.width,
              height: d.height,
            },
          })),
          H.Render.run(d.render),
          H.Render.lookAt(d.render, {
            min: { x: 0, y: 0 },
            max: { x: d.width, y: d.height },
          }),
          (d.runner = H.Runner.create()),
          H.Runner.run(d.runner, d.engine),
          (d.assets = []);
        const C = (o, r) => (
            (r = r || 0),
            {
              x: o.offsetLeft - r,
              y: o.offsetTop - r,
              w: o.offsetWidth + r * 2,
              h: o.offsetHeight + r * 2,
            }
          ),
          B = () => {
            j(d.assets, (i) => {
              H.World.remove(d.world, i);
            }),
              (d.assets.length = 0);
            const o = A.$refs.assets;
            if (!o) return;
            const r = o.querySelectorAll(".--wall");
            j(r, (i) => {
              const f = C(i);
              d.assets.push(
                H.Bodies.rectangle(f.x, f.y, f.w, f.h, {
                  render: { fillStyle: "transparent" },
                  isStatic: !0,
                })
              );
            });
            const a = { ...vt[A._is("lg") ? "lg" : "sm"] };
            if (
              ((a.vertices = H.Vertices.fromPath(a.path)),
              (a.$el = o.querySelector(".--text")),
              a.$el)
            ) {
              (a.scale = d.width / a.width), (a.rect = C(a.$el));
              const i = H.Bodies.fromVertices(
                0,
                0,
                a.vertices,
                { render: { fillStyle: "transparent" }, isStatic: !0 },
                !0
              );
              H.Body.setCentre(i, a.offset),
                H.Body.setPosition(i, { x: a.rect.x, y: a.rect.y }),
                H.Body.scale(i, a.scale, a.scale),
                d.assets.push(i);
            }
            const u = o.querySelectorAll(".--letter"),
              l = d.width * 0.01,
              v = d.height * 0.15;
            j(u, (i, f) => {
              const g = C(i, 6),
                S = l + (d.width / u.length) * f,
                x = f % 2 === 0 ? v : -v;
              d.assets.push(
                H.Bodies.rectangle(S, g.y + x, g.w, g.h, {
                  grab: !0,
                  render: { fillStyle: "transparent" },
                  restitution: 0.8,
                  frictionAir: 0.01 + (f % 3) * 0.01,
                  chamfer: { radius: g.h * 0.2 },
                  $el: i,
                })
              );
            });
            const s = o.querySelectorAll(".--button"),
              t = d.width * 0.1,
              n = d.height * 0.15;
            j(s, (i, f) => {
              const g = C(i, 8),
                S = t + (d.width / s.length) * f,
                x = f % 2 === 0 ? -n : n;
              d.assets.push(
                H.Bodies.rectangle(S, g.y + x, g.w, g.h, {
                  render: { fillStyle: "transparent" },
                  friction: 0.8,
                  frictionAir: (f % 3) * 0.01,
                  frictionStatic: 0.9,
                  chamfer: { radius: g.h * 0.5 },
                  $el: i,
                })
              );
            }),
              j(d.assets, (i) => {
                H.Composite.add(d.world, i);
              });
          };
        B(),
          H.Events.on(d.engine, "beforeUpdate", (o) => {
            const r = d.$el.offsetHeight,
              a = d.$el.offsetWidth;
            (d.height !== r || d.width !== a) &&
              ((d.height = r),
              (d.width = a),
              (d.render.bounds.max.x = d.width),
              (d.render.bounds.max.y = d.height),
              (d.render.options.width = d.width),
              (d.render.options.height = d.height),
              (d.render.canvas.width = d.width),
              (d.render.canvas.height = d.height),
              j(d.assets, (u) => {
                u.$el &&
                  (u.$el.style.removeProperty("left"),
                  u.$el.style.removeProperty("top"),
                  u.$el.style.removeProperty("--un-rotate"));
              }),
              B()),
              j(d.assets, (u) => {
                u.$el &&
                  (u.$el.style.setProperty("left", u.position.x + "px"),
                  u.$el.style.setProperty("top", u.position.y + "px"),
                  u.$el.style.setProperty(
                    "--un-rotate",
                    u.angle * (180 / Math.PI) + "deg"
                  ));
              });
          });
        const h = H.Mouse.create(d.render.canvas),
          e = H.MouseConstraint.create(d.engine, {
            mouse: h,
            constraint: { stiffness: 0.2, render: { visible: !1 } },
          });
        H.Composite.add(d.world, e),
          d.render.canvas.removeEventListener("mousewheel", h.mousewheel),
          d.render.canvas.removeEventListener("DOMMouseScroll", h.mousewheel),
          d.render.canvas.removeEventListener("touchstart", e.mouse.mousedown),
          d.render.canvas.removeEventListener("touchmove", e.mouse.mousemove),
          d.render.canvas.removeEventListener("touchend", e.mouse.mouseup),
          d.render.canvas.addEventListener("touchstart", e.mouse.mousedown, {
            passive: !0,
          }),
          d.render.canvas.addEventListener("mouseleave", (o) => {
            e.mouse.mouseup(o);
          }),
          d.render.canvas.addEventListener("touchmove", (o) => {
            e.body && e.mouse.mousemove(o);
          }),
          d.render.canvas.addEventListener("touchend", (o) => {
            e.body && e.mouse.mouseup(o);
          }),
          H.Events.on(e, "mousedown", (o) => {
            const r = H.Query.point(d.assets, o.mouse.position);
            r[0] && r[0].grab ? (A.cursor = "grabbing") : (A.cursor = null);
          }),
          H.Events.on(e, "mouseup", (o) => {
            A.cursor === "grabbing" && A._analytics.track("Letter yeeted"),
              (A.cursor = null);
          }),
          H.Events.on(e, "mousemove", (o) => {
            if (A.cursor !== "grabbing") {
              const r = H.Query.point(d.assets, o.mouse.position);
              r[0] && r[0].grab ? (A.cursor = "grab") : (A.cursor = null);
            }
          }),
          (d.render.mouse = h);
      },
      matterDestroy() {
        const d = this.matter;
        d &&
          (d.world && H.World.clear(d.world),
          d.engine &&
            (H.Engine.clear(d.engine),
            H.Runner.stop(d.engine),
            H.Events.off(d.engine, "beforeUpdate")),
          d.render &&
            (H.Render.stop(d.render),
            d.render.textures && (d.render.textures = {}),
            d.render.canvas &&
              (d.render.canvas.remove(),
              (d.render.canvas = null),
              (d.render.context = null))),
          d.assets &&
            j(d.assets, (C) => {
              C.$el &&
                (C.$el.style.removeProperty("left"),
                C.$el.style.removeProperty("top"),
                C.$el.style.removeProperty("--un-rotate"));
            }));
      },
    },
  },
  St = { class: "part-grav-buttons_matter", ref: "matter" },
  wt = { class: "part-grav-buttons_assets", ref: "assets" },
  Pt = { class: "--wall" },
  Ct = { key: 0, class: "--text" },
  Mt = { key: 1, class: "--button" },
  At = { class: "--button" };
function It(A, d, C, B, h, e) {
  const o = Ie("svg-get-in-contact"),
    r = Ie("ui-button");
  return (
    J(),
    X(
      "div",
      { class: "part-grav-buttons", style: Be({ cursor: h.cursor }) },
      [
        ce("div", St, null, 512),
        ce(
          "div",
          wt,
          [
            (J(),
            X(
              ve,
              null,
              he(4, (a) => ce("div", Pt)),
              64
            )),
            C.error ? Te("", !0) : (J(), X("div", Ct, [ge(o)])),
            (J(!0),
            X(
              ve,
              null,
              he(
                e.letters,
                (a) => (
                  J(),
                  X(
                    "div",
                    {
                      class: "--letter",
                      style: Be({ "background-color": a.color }),
                    },
                    Ee(a.character),
                    5
                  )
                )
              ),
              256
            )),
            C.error
              ? (J(),
                X("div", Mt, [
                  ge(
                    r,
                    { link: "/", variant: "bordered" },
                    { default: Le(() => [Re(" ← Go back ")]), _: 1 }
                  ),
                ]))
              : Te("", !0),
            (J(!0),
            X(
              ve,
              null,
              he(
                e.buttons,
                (a) => (
                  J(),
                  X("div", At, [
                    ge(
                      r,
                      { link: a.url, variant: "bordered" },
                      { default: Le(() => [Re(Ee(a.label), 1)]), _: 2 },
                      1032,
                      ["link"]
                    ),
                  ])
                )
              ),
              256
            )),
          ],
          512
        ),
      ],
      4
    )
  );
}
const Et = Ve(yt, [["render", It]]);
export { Et as p };
