/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    539: function (e, t, r) {
      "use strict";
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var t in source)
                  Object.prototype.hasOwnProperty.call(source, t) &&
                    (e[t] = source[t]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      function o(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = {
            mimeType: t.mimeType || null,
            onBeforeSend: t.onBeforeSend || Function.prototype,
            onSuccess: t.onSuccess || Function.prototype,
            onError: t.onError || Function.prototype,
            onComplete: t.onComplete || Function.prototype,
          },
          n = Array.isArray(e) ? e : [e],
          o = Array.apply(null, Array(n.length)).map(function (e) {
            return null;
          });
        function c(text) {
          var e = "string" == typeof text,
            t = e && "<" === text.trim().charAt(0);
          return e && !t;
        }
        function l(e, t) {
          r.onError(e, n[t], t);
        }
        function f(e, t) {
          var c = r.onSuccess(e, n[t], t);
          (e = !1 === c ? "" : c || e),
            (o[t] = e),
            -1 === o.indexOf(null) && r.onComplete(o);
        }
        var d = document.createElement("a");
        n.forEach(function (e, i) {
          if (
            (d.setAttribute("href", e),
            (d.href = String(d.href)),
            Boolean(document.all && !window.atob) &&
              d.host.split(":")[0] !== location.host.split(":")[0])
          ) {
            if (d.protocol === location.protocol) {
              var t = new XDomainRequest();
              t.open("GET", e),
                (t.timeout = 0),
                (t.onprogress = Function.prototype),
                (t.ontimeout = Function.prototype),
                (t.onload = function () {
                  var text = t.responseText;
                  c(text) ? f(text, i) : l(t, i);
                }),
                (t.onerror = function (e) {
                  l(t, i);
                }),
                setTimeout(function () {
                  t.send();
                }, 0);
            } else
              console.warn(
                "Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(
                  e,
                  ")"
                )
              ),
                l(null, i);
          } else {
            var n = new XMLHttpRequest();
            n.open("GET", e),
              r.mimeType &&
                n.overrideMimeType &&
                n.overrideMimeType(r.mimeType),
              r.onBeforeSend(n, e, i),
              (n.onreadystatechange = function () {
                if (4 === n.readyState) {
                  var text = n.responseText;
                  (n.status < 400 && c(text)) || (0 === n.status && c(text))
                    ? f(text, i)
                    : l(n, i);
                }
              }),
              n.send();
          }
        });
      }
      function c(e) {
        var t = /\/\*[\s\S]+?\*\//g,
          r =
            /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,
          n = {
            rootElement: e.rootElement || document,
            include: e.include || 'style,link[rel="stylesheet"]',
            exclude: e.exclude || null,
            filter: e.filter || null,
            skipDisabled: !1 !== e.skipDisabled,
            useCSSOM: e.useCSSOM || !1,
            onBeforeSend: e.onBeforeSend || Function.prototype,
            onSuccess: e.onSuccess || Function.prototype,
            onError: e.onError || Function.prototype,
            onComplete: e.onComplete || Function.prototype,
          },
          c = Array.apply(
            null,
            n.rootElement.querySelectorAll(n.include)
          ).filter(function (e) {
            return (
              (t = e),
              (r = n.exclude),
              !(
                t.matches ||
                t.matchesSelector ||
                t.webkitMatchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector
              ).call(t, r)
            );
            var t, r;
          }),
          f = Array.apply(null, Array(c.length)).map(function (e) {
            return null;
          });
        function d() {
          if (-1 === f.indexOf(null)) {
            f.reduce(function (e, t, i) {
              return "" === t && e.push(i), e;
            }, [])
              .reverse()
              .forEach(function (e) {
                return [c, f].forEach(function (t) {
                  return t.splice(e, 1);
                });
              });
            var e = f.join("");
            n.onComplete(e, f, c);
          }
        }
        function m(e, t, r, o) {
          var c = n.onSuccess(e, r, o);
          h(
            (e = void 0 !== c && !1 === Boolean(c) ? "" : c || e),
            r,
            o,
            function (e, o) {
              null === f[t] &&
                (o.forEach(function (data) {
                  return n.onError(data.xhr, r, data.url);
                }),
                !n.filter || n.filter.test(e) ? (f[t] = e) : (f[t] = ""),
                d());
            }
          );
        }
        function v(e, n) {
          var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            c = {};
          return (
            (c.rules = (e.replace(t, "").match(r) || []).filter(function (e) {
              return -1 === o.indexOf(e);
            })),
            (c.urls = c.rules.map(function (e) {
              return e.replace(r, "$1");
            })),
            (c.absoluteUrls = c.urls.map(function (e) {
              return l(e, n);
            })),
            (c.absoluteRules = c.rules.map(function (e, i) {
              var t = c.urls[i],
                r = l(c.absoluteUrls[i], n);
              return e.replace(t, r);
            })),
            c
          );
        }
        function h(e, t, r, c) {
          var l =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
            f =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : [],
            d = v(e, r, f);
          d.rules.length
            ? o(d.absoluteUrls, {
                onBeforeSend: function (e, r, o) {
                  n.onBeforeSend(e, t, r);
                },
                onSuccess: function (e, r, o) {
                  var c = n.onSuccess(e, t, r),
                    l = v((e = !1 === c ? "" : c || e), r, f);
                  return (
                    l.rules.forEach(function (t, i) {
                      e = e.replace(t, l.absoluteRules[i]);
                    }),
                    e
                  );
                },
                onError: function (n, o, m) {
                  l.push({ xhr: n, url: o }),
                    f.push(d.rules[m]),
                    h(e, t, r, c, l, f);
                },
                onComplete: function (n) {
                  n.forEach(function (t, i) {
                    e = e.replace(d.rules[i], t);
                  }),
                    h(e, t, r, c, l, f);
                },
              })
            : c(e, l);
        }
        c.length
          ? c.forEach(function (e, i) {
              var t = e.getAttribute("href"),
                r = e.getAttribute("rel"),
                c =
                  "link" === e.nodeName.toLowerCase() &&
                  t &&
                  r &&
                  -1 !== r.toLowerCase().indexOf("stylesheet"),
                v = !1 !== n.skipDisabled && e.disabled,
                h = "style" === e.nodeName.toLowerCase();
              if (c && !v)
                o(t, {
                  mimeType: "text/css",
                  onBeforeSend: function (t, r, o) {
                    n.onBeforeSend(t, e, r);
                  },
                  onSuccess: function (r, n, o) {
                    var c = l(t);
                    m(r, i, e, c);
                  },
                  onError: function (t, r, o) {
                    (f[i] = ""), n.onError(t, e, r), d();
                  },
                });
              else if (h && !v) {
                var y = e.textContent;
                n.useCSSOM &&
                  (y = Array.apply(null, e.sheet.cssRules)
                    .map(function (e) {
                      return e.cssText;
                    })
                    .join("")),
                  m(y, i, e, location.href);
              } else (f[i] = ""), d();
            })
          : n.onComplete("", []);
      }
      function l(e, base) {
        var t = document.implementation.createHTMLDocument(""),
          b = t.createElement("base"),
          a = t.createElement("a");
        return (
          t.head.appendChild(b),
          t.body.appendChild(a),
          (b.href =
            base ||
            document.baseURI ||
            (document.querySelector("base") || {}).href ||
            location.href),
          (a.href = e),
          a.href
        );
      }
      r.r(t);
      var f = d;
      function d(a, b, e) {
        a instanceof RegExp && (a = m(a, e)),
          b instanceof RegExp && (b = m(b, e));
        var t = v(a, b, e);
        return (
          t && {
            start: t[0],
            end: t[1],
            pre: e.slice(0, t[0]),
            body: e.slice(t[0] + a.length, t[1]),
            post: e.slice(t[1] + b.length),
          }
        );
      }
      function m(e, t) {
        var r = t.match(e);
        return r ? r[0] : null;
      }
      function v(a, b, e) {
        var t,
          r,
          n,
          o,
          c,
          l = e.indexOf(a),
          f = e.indexOf(b, l + 1),
          i = l;
        if (l >= 0 && f > 0) {
          if (a === b) return [l, f];
          for (t = [], n = e.length; i >= 0 && !c; )
            i == l
              ? (t.push(i), (l = e.indexOf(a, i + 1)))
              : 1 == t.length
              ? (c = [t.pop(), f])
              : ((r = t.pop()) < n && ((n = r), (o = f)),
                (f = e.indexOf(b, i + 1))),
              (i = l < f && l >= 0 ? l : f);
          t.length && (c = [n, o]);
        }
        return c;
      }
      function h(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = { preserveStatic: !0, removeComments: !1 },
          o = n({}, r, t),
          c = [];
        function l(e) {
          throw new Error("CSS parse error: ".concat(e));
        }
        function d(t) {
          var r = t.exec(e);
          if (r) return (e = e.slice(r[0].length)), r;
        }
        function m() {
          return d(/^{\s*/);
        }
        function v() {
          return d(/^}/);
        }
        function h() {
          d(/^\s*/);
        }
        function y() {
          if ((h(), "/" === e[0] && "*" === e[1])) {
            for (var i = 2; e[i] && ("*" !== e[i] || "/" !== e[i + 1]); ) i++;
            if (!e[i]) return l("end of comment is missing");
            var t = e.slice(2, i);
            return (e = e.slice(i + 2)), { type: "comment", comment: t };
          }
        }
        function S() {
          for (var e, t = []; (e = y()); ) t.push(e);
          return o.removeComments ? [] : t;
        }
        function E() {
          for (h(); "}" === e[0]; ) l("extra closing bracket");
          var t = d(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
          if (t) {
            var r,
              n = t[0].trim();
            /\/\*/.test(n) &&
              (n = n.replace(
                /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,
                ""
              ));
            var o = /["']\w*,\w*["']/.test(n);
            return (
              o &&
                (n = n.replace(
                  /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,
                  function (e) {
                    return e.replace(/,/g, "‌");
                  }
                )),
              (r = /,/.test(n) ? n.split(/\s*(?![^(]*\)),\s*/) : [n]),
              o &&
                (r = r.map(function (s) {
                  return s.replace(/\u200C/g, ",");
                })),
              r
            );
          }
        }
        function w() {
          if ("@" === e[0]) return T();
          d(/^([;\s]*)+/);
          var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
            r = d(/^(\*?[-#/*\\\w.]+(\[[0-9a-z_-]+\])?)\s*/);
          if (r) {
            if (((r = r[0].trim()), !d(/^:\s*/)))
              return l("property missing ':'");
            var n = d(
                /^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/
              ),
              o = {
                type: "declaration",
                property: r.replace(t, ""),
                value: n ? n[0].replace(t, "").trim() : "",
              };
            return d(/^[;\s]*/), o;
          }
        }
        function C() {
          if (!m()) return l("missing '{'");
          for (var e, t = S(); (e = w()); ) t.push(e), (t = t.concat(S()));
          return v() ? t : l("missing '}'");
        }
        function x() {
          h();
          for (var e, t = []; (e = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); )
            t.push(e[1]), d(/^,\s*/);
          if (t.length)
            return { type: "keyframe", values: t, declarations: C() };
        }
        function O() {
          var e = d(/^@([-\w]+)?keyframes\s*/);
          if (e) {
            var t = e[1];
            if (!(e = d(/^([-\w]+)\s*/))) return l("@keyframes missing name");
            var r,
              n = e[1];
            if (!m()) return l("@keyframes missing '{'");
            for (var o = S(); (r = x()); ) o.push(r), (o = o.concat(S()));
            return v()
              ? { type: "keyframes", name: n, vendor: t, keyframes: o }
              : l("@keyframes missing '}'");
          }
        }
        function k() {
          if (d(/^@page */))
            return { type: "page", selectors: E() || [], declarations: C() };
        }
        function A() {
          var e = d(
            /@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/
          );
          if (e)
            return {
              type: "page-margin-box",
              name:
                "".concat(e[1], "-").concat(e[2]) +
                (e[3] ? "-".concat(e[3]) : ""),
              declarations: C(),
            };
        }
        function _() {
          if (d(/^@font-face\s*/))
            return { type: "font-face", declarations: C() };
        }
        function j() {
          var e = d(/^@supports *([^{]+)/);
          if (e) return { type: "supports", supports: e[1].trim(), rules: B() };
        }
        function L() {
          if (d(/^@host\s*/)) return { type: "host", rules: B() };
        }
        function M() {
          var e = d(/^@media([^{]+)*/);
          if (e)
            return { type: "media", media: (e[1] || "").trim(), rules: B() };
        }
        function V() {
          var e = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
          if (e)
            return {
              type: "custom-media",
              name: e[1].trim(),
              media: e[2].trim(),
            };
        }
        function R() {
          var e = d(/^@([-\w]+)?document *([^{]+)/);
          if (e)
            return {
              type: "document",
              document: e[2].trim(),
              vendor: e[1] ? e[1].trim() : null,
              rules: B(),
            };
        }
        function D() {
          var e = d(/^@(import|charset|namespace)\s*([^;]+);/);
          if (e) return { type: e[1], name: e[2].trim() };
        }
        function T() {
          if ((h(), "@" === e[0])) {
            var t =
              D() ||
              _() ||
              M() ||
              O() ||
              j() ||
              R() ||
              V() ||
              L() ||
              k() ||
              A();
            if (t && !o.preserveStatic) {
              var r = !1;
              if (t.declarations)
                r = t.declarations.some(function (e) {
                  return /var\(/.test(e.value);
                });
              else
                r = (t.keyframes || t.rules || []).some(function (e) {
                  return (e.declarations || []).some(function (e) {
                    return /var\(/.test(e.value);
                  });
                });
              return r ? t : {};
            }
            return t;
          }
        }
        function N() {
          if (!o.preserveStatic) {
            var t = f("{", "}", e);
            if (t) {
              var r =
                  /:(?:root|host)(?![.:#(])/.test(t.pre) &&
                  /--\S*\s*:/.test(t.body),
                n = /var\(/.test(t.body);
              if (!r && !n) return (e = e.slice(t.end + 1)), {};
            }
          }
          var c = E() || [],
            d = o.preserveStatic
              ? C()
              : C().filter(function (e) {
                  var t =
                      c.some(function (s) {
                        return /:(?:root|host)(?![.:#(])/.test(s);
                      }) && /^--\S/.test(e.property),
                    r = /var\(/.test(e.value);
                  return t || r;
                });
          return (
            c.length || l("selector missing"),
            { type: "rule", selectors: c, declarations: d }
          );
        }
        function B(t) {
          if (!t && !m()) return l("missing '{'");
          for (
            var r, n = S();
            e.length && (t || "}" !== e[0]) && (r = T() || N());

          )
            r.type && n.push(r), (n = n.concat(S()));
          return t || v() ? n : l("missing '}'");
        }
        return { type: "stylesheet", stylesheet: { rules: B(!0), errors: c } };
      }
      function y(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = { parseHost: !1, store: {}, onWarning: function () {} },
          o = n({}, r, t),
          c = new RegExp(":".concat(o.parseHost ? "host" : "root", "$"));
        return (
          "string" == typeof e && (e = h(e, o)),
          e.stylesheet.rules.forEach(function (e) {
            "rule" === e.type &&
              e.selectors.some(function (s) {
                return c.test(s);
              }) &&
              e.declarations.forEach(function (e, i) {
                var t = e.property,
                  r = e.value;
                t && 0 === t.indexOf("--") && (o.store[t] = r);
              });
          }),
          o.store
        );
      }
      function S(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = arguments.length > 2 ? arguments[2] : void 0,
          n = {
            charset: function (e) {
              return "@charset " + e.name + ";";
            },
            comment: function (e) {
              return 0 === e.comment.indexOf("__CSSVARSPONYFILL")
                ? "/*" + e.comment + "*/"
                : "";
            },
            "custom-media": function (e) {
              return "@custom-media " + e.name + " " + e.media + ";";
            },
            declaration: function (e) {
              return e.property + ":" + e.value + ";";
            },
            document: function (e) {
              return (
                "@" +
                (e.vendor || "") +
                "document " +
                e.document +
                "{" +
                o(e.rules) +
                "}"
              );
            },
            "font-face": function (e) {
              return "@font-face{" + o(e.declarations) + "}";
            },
            host: function (e) {
              return "@host{" + o(e.rules) + "}";
            },
            import: function (e) {
              return "@import " + e.name + ";";
            },
            keyframe: function (e) {
              return e.values.join(",") + "{" + o(e.declarations) + "}";
            },
            keyframes: function (e) {
              return (
                "@" +
                (e.vendor || "") +
                "keyframes " +
                e.name +
                "{" +
                o(e.keyframes) +
                "}"
              );
            },
            media: function (e) {
              return "@media " + e.media + "{" + o(e.rules) + "}";
            },
            namespace: function (e) {
              return "@namespace " + e.name + ";";
            },
            page: function (e) {
              return (
                "@page " +
                (e.selectors.length ? e.selectors.join(", ") : "") +
                "{" +
                o(e.declarations) +
                "}"
              );
            },
            "page-margin-box": function (e) {
              return "@" + e.name + "{" + o(e.declarations) + "}";
            },
            rule: function (e) {
              var t = e.declarations;
              if (t.length) return e.selectors.join(",") + "{" + o(t) + "}";
            },
            supports: function (e) {
              return "@supports " + e.supports + "{" + o(e.rules) + "}";
            },
          };
        function o(e) {
          for (var o = "", i = 0; i < e.length; i++) {
            var c = e[i];
            r && r(c);
            var l = n[c.type](c);
            l && ((o += l), l.length && c.selectors && (o += t));
          }
          return o;
        }
        return o(e.stylesheet.rules);
      }
      function E(e, t) {
        e.rules.forEach(function (r) {
          r.rules
            ? E(r, t)
            : r.keyframes
            ? r.keyframes.forEach(function (e) {
                "keyframe" === e.type && t(e.declarations, r);
              })
            : r.declarations && t(r.declarations, e);
        });
      }
      d.range = v;
      function w(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = {
            preserveStatic: !0,
            preserveVars: !1,
            variables: {},
            onWarning: function () {},
          },
          o = n({}, r, t);
        return (
          "string" == typeof e && (e = h(e, o)),
          E(e.stylesheet, function (e, t) {
            for (var i = 0; i < e.length; i++) {
              var r = e[i],
                n = r.type,
                c = r.property,
                l = r.value;
              if ("declaration" === n)
                if (o.preserveVars || !c || 0 !== c.indexOf("--")) {
                  if (-1 !== l.indexOf("var(")) {
                    var f = x(l, o);
                    f !== r.value &&
                      ((f = C(f)),
                      o.preserveVars
                        ? (e.splice(i, 0, { type: n, property: c, value: f }),
                          i++)
                        : (r.value = f));
                  }
                } else e.splice(i, 1), i--;
            }
          }),
          S(e)
        );
      }
      function C(e) {
        return (
          (e.match(/calc\(([^)]+)\)/g) || []).forEach(function (t) {
            var r = "calc".concat(t.split("calc").join(""));
            e = e.replace(t, r);
          }),
          e
        );
      }
      function x(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0;
        if (-1 === e.indexOf("var(")) return e;
        var n = f("(", ")", e);
        function o(e) {
          var n = e.split(",")[0].replace(/[\s\n\t]/g, ""),
            o = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
            c = Object.prototype.hasOwnProperty.call(t.variables, n)
              ? String(t.variables[n])
              : void 0,
            l = c || (o ? String(o) : void 0),
            f = r || e;
          return (
            c || t.onWarning('variable "'.concat(n, '" is undefined')),
            l && "undefined" !== l && l.length > 0
              ? x(l, t, f)
              : "var(".concat(f, ")")
          );
        }
        if (n) {
          if ("var" === n.pre.slice(-3)) {
            var c = 0 === n.body.trim().length;
            return c
              ? (t.onWarning("var() must contain a non-whitespace string"), e)
              : n.pre.slice(0, -3) + o(n.body) + x(n.post, t);
          }
          return n.pre + "(".concat(x(n.body, t), ")") + x(n.post, t);
        }
        return (
          -1 !== e.indexOf("var(") &&
            t.onWarning('missing closing ")" in the value "'.concat(e, '"')),
          e
        );
      }
      var O = "undefined" != typeof window,
        k =
          O &&
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("(--a: 0)"),
        A = { group: 0, job: 0 },
        _ = {
          rootElement: O ? document : null,
          shadowDOM: !1,
          include: "style,link[rel=stylesheet]",
          exclude: "",
          variables: {},
          onlyLegacy: !0,
          preserveStatic: !0,
          preserveVars: !1,
          silent: !1,
          updateDOM: !0,
          updateURLs: !0,
          watch: null,
          onBeforeSend: function () {},
          onError: function () {},
          onWarning: function () {},
          onSuccess: function () {},
          onComplete: function () {},
          onFinally: function () {},
        },
        j = {
          cssComments: /\/\*[\s\S]+?\*\//g,
          cssKeyframes: /@(?:-\w*-)?keyframes/,
          cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
          cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
          cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
          cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
          cssVarFunc: /var\(\s*--[\w-]/,
          cssVars:
            /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/,
        },
        L = { dom: {}, job: {}, user: {} },
        M = !1,
        V = null,
        R = 0,
        D = null,
        T = !1;
      function N() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = "cssVars(): ",
          r = n({}, _, e);
        function o(e, n, o, c) {
          !r.silent &&
            window.console &&
            console.error("".concat(t).concat(e, "\n"), n),
            r.onError(e, n, o, c);
        }
        function l(e) {
          !r.silent && window.console && console.warn("".concat(t).concat(e)),
            r.onWarning(e);
        }
        function f(e) {
          r.onFinally(Boolean(e), k, z() - r.__benchmark);
        }
        if (O) {
          if (r.watch) return (r.watch = _.watch), B(r), void N(r);
          if (
            (!1 === r.watch && V && (V.disconnect(), (V = null)),
            !r.__benchmark)
          ) {
            if (M === r.rootElement) return void F(e);
            var d = [].slice.call(
              r.rootElement.querySelectorAll(
                '[data-cssvars]:not([data-cssvars="out"])'
              )
            );
            if (
              ((r.__benchmark = z()),
              (r.exclude = [
                V
                  ? '[data-cssvars]:not([data-cssvars=""])'
                  : '[data-cssvars="out"]',
                "link[disabled]:not([data-cssvars])",
                r.exclude,
              ]
                .filter(function (e) {
                  return e;
                })
                .join(",")),
              (r.variables = H(r.variables)),
              d.forEach(function (e) {
                var t =
                    "style" === e.nodeName.toLowerCase() && e.__cssVars.text,
                  r = t && e.textContent !== e.__cssVars.text;
                t &&
                  r &&
                  (e.sheet && (e.sheet.disabled = !1),
                  e.setAttribute("data-cssvars", ""));
              }),
              !V)
            ) {
              var m = [].slice.call(
                r.rootElement.querySelectorAll('[data-cssvars="out"]')
              );
              m.forEach(function (e) {
                var t = e.getAttribute("data-cssvars-group");
                (t
                  ? r.rootElement.querySelector(
                      '[data-cssvars="src"][data-cssvars-group="'.concat(
                        t,
                        '"]'
                      )
                    )
                  : null) || e.parentNode.removeChild(e);
              }),
                R && d.length < R && ((R = d.length), (L.dom = {}));
            }
          }
          if ("loading" !== document.readyState)
            if (k && r.onlyLegacy) {
              var v = !1;
              if (r.updateDOM) {
                var E =
                  r.rootElement.host ||
                  (r.rootElement === document
                    ? document.documentElement
                    : r.rootElement);
                Object.keys(r.variables).forEach(function (e) {
                  var t = r.variables[e];
                  (v = v || t !== getComputedStyle(E).getPropertyValue(e)),
                    E.style.setProperty(e, t);
                });
              }
              f(v);
            } else
              !T &&
              (r.shadowDOM || r.rootElement.shadowRoot || r.rootElement.host)
                ? c({
                    rootElement: _.rootElement,
                    include: _.include,
                    exclude: r.exclude,
                    skipDisabled: !1,
                    onSuccess: function (e, t, r) {
                      return (
                        !((t.sheet || {}).disabled && !t.__cssVars) &&
                        ((e = (
                          (e = e
                            .replace(j.cssComments, "")
                            .replace(j.cssMediaQueries, "")).match(
                            j.cssVarDeclRules
                          ) || []
                        ).join("")) ||
                          !1)
                      );
                    },
                    onComplete: function (e, t, n) {
                      y(e, { store: L.dom, onWarning: l }), (T = !0), N(r);
                    },
                  })
                : ((M = r.rootElement),
                  c({
                    rootElement: r.rootElement,
                    include: r.include,
                    exclude: r.exclude,
                    skipDisabled: !1,
                    onBeforeSend: r.onBeforeSend,
                    onError: function (e, t, r) {
                      var n = e.responseURL || P(r, location.href),
                        c = e.statusText
                          ? "(".concat(e.statusText, ")")
                          : "Unspecified Error" +
                            (0 === e.status ? " (possibly CORS related)" : "");
                      o(
                        "CSS XHR Error: "
                          .concat(n, " ")
                          .concat(e.status, " ")
                          .concat(c),
                        t,
                        e,
                        n
                      );
                    },
                    onSuccess: function (e, t, n) {
                      if ((t.sheet || {}).disabled && !t.__cssVars) return !1;
                      var o = "link" === t.nodeName.toLowerCase(),
                        c =
                          "style" === t.nodeName.toLowerCase() &&
                          e !== t.textContent,
                        l = r.onSuccess(e, t, n);
                      return (
                        (e = void 0 !== l && !1 === Boolean(l) ? "" : l || e),
                        r.updateURLs && (o || c) && (e = W(e, n)),
                        e
                      );
                    },
                    onComplete: function (e, t) {
                      var c =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [],
                        d = n({}, L.dom, L.user);
                      if (
                        ((L.job = {}),
                        c.forEach(function (e, i) {
                          var n = t[i];
                          if (
                            ((e.__cssVars = e.__cssVars || {}),
                            (e.__cssVars.text = n),
                            j.cssVars.test(n))
                          )
                            try {
                              var c = h(n, {
                                preserveStatic: r.preserveStatic,
                                removeComments: !0,
                              });
                              y(c, {
                                parseHost: Boolean(r.rootElement.host),
                                store: L.dom,
                                onWarning: l,
                              }),
                                (e.__cssVars.tree = c);
                            } catch (t) {
                              o(t.message, e);
                            }
                        }),
                        n(L.job, L.dom),
                        r.updateDOM
                          ? (n(L.user, r.variables), n(L.job, L.user))
                          : (n(L.job, L.user, r.variables), n(d, r.variables)),
                        A.job > 0 &&
                          Boolean(
                            Object.keys(L.job).length > Object.keys(d).length ||
                              Boolean(
                                Object.keys(d).length &&
                                  Object.keys(L.job).some(function (e) {
                                    return L.job[e] !== d[e];
                                  })
                              )
                          ))
                      )
                        I(r.rootElement), N(r);
                      else {
                        var m = [],
                          v = [],
                          E = !1;
                        if (
                          (r.updateDOM && A.job++,
                          c.forEach(function (e, i) {
                            var c = !e.__cssVars.tree;
                            if (e.__cssVars.tree)
                              try {
                                w(
                                  e.__cssVars.tree,
                                  n({}, r, { variables: L.job, onWarning: l })
                                );
                                var f = S(e.__cssVars.tree);
                                if (r.updateDOM) {
                                  var d = t[i],
                                    h = j.cssVarFunc.test(d);
                                  if (
                                    (e.getAttribute("data-cssvars") ||
                                      e.setAttribute("data-cssvars", "src"),
                                    f.length && h)
                                  ) {
                                    var y =
                                        e.getAttribute("data-cssvars-group") ||
                                        ++A.group,
                                      C = f.replace(/\s/g, ""),
                                      x =
                                        r.rootElement.querySelector(
                                          '[data-cssvars="out"][data-cssvars-group="'.concat(
                                            y,
                                            '"]'
                                          )
                                        ) || document.createElement("style");
                                    (E = E || j.cssKeyframes.test(f)),
                                      r.preserveStatic &&
                                        e.sheet &&
                                        (e.sheet.disabled = !0),
                                      x.hasAttribute("data-cssvars") ||
                                        x.setAttribute("data-cssvars", "out"),
                                      C === e.textContent.replace(/\s/g, "")
                                        ? ((c = !0),
                                          x &&
                                            x.parentNode &&
                                            (e.removeAttribute(
                                              "data-cssvars-group"
                                            ),
                                            x.parentNode.removeChild(x)))
                                        : C !==
                                            x.textContent.replace(/\s/g, "") &&
                                          ([e, x].forEach(function (e) {
                                            e.setAttribute(
                                              "data-cssvars-job",
                                              A.job
                                            ),
                                              e.setAttribute(
                                                "data-cssvars-group",
                                                y
                                              );
                                          }),
                                          (x.textContent = f),
                                          m.push(f),
                                          v.push(x),
                                          x.parentNode ||
                                            e.parentNode.insertBefore(
                                              x,
                                              e.nextSibling
                                            ));
                                  }
                                } else
                                  e.textContent.replace(/\s/g, "") !== f &&
                                    m.push(f);
                              } catch (t) {
                                o(t.message, e);
                              }
                            c && e.setAttribute("data-cssvars", "skip"),
                              e.hasAttribute("data-cssvars-job") ||
                                e.setAttribute("data-cssvars-job", A.job);
                          }),
                          (R = r.rootElement.querySelectorAll(
                            '[data-cssvars]:not([data-cssvars="out"])'
                          ).length),
                          r.shadowDOM)
                        )
                          for (
                            var C,
                              x = []
                                .concat(r.rootElement)
                                .concat(
                                  [].slice.call(
                                    r.rootElement.querySelectorAll("*")
                                  )
                                ),
                              i = 0;
                            (C = x[i]);
                            ++i
                          )
                            if (
                              C.shadowRoot &&
                              C.shadowRoot.querySelector("style")
                            ) {
                              var O = n({}, r, { rootElement: C.shadowRoot });
                              N(O);
                            }
                        r.updateDOM && E && U(r.rootElement),
                          (M = !1),
                          r.onComplete(
                            m.join(""),
                            v,
                            JSON.parse(JSON.stringify(L.job)),
                            z() - r.__benchmark
                          ),
                          f(v.length);
                      }
                    },
                  }));
          else
            document.addEventListener("DOMContentLoaded", function t(r) {
              N(e), document.removeEventListener("DOMContentLoaded", t);
            });
        }
      }
      function B(e) {
        function t(e) {
          var t = r(e) && e.hasAttribute("disabled"),
            n = (e.sheet || {}).disabled;
          return t || n;
        }
        function r(e) {
          return (
            "link" === e.nodeName.toLowerCase() &&
            -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet")
          );
        }
        function n(e) {
          return "style" === e.nodeName.toLowerCase();
        }
        window.MutationObserver &&
          (V && (V.disconnect(), (V = null)),
          (V = new MutationObserver(function (o) {
            o.some(function (o) {
              return (
                (function (n) {
                  var o = !1;
                  if ("attributes" === n.type && r(n.target) && !t(n.target)) {
                    var c = "disabled" === n.attributeName,
                      l = "href" === n.attributeName,
                      f = "skip" === n.target.getAttribute("data-cssvars"),
                      d = "src" === n.target.getAttribute("data-cssvars");
                    c
                      ? (o = !f && !d)
                      : l &&
                        (f
                          ? n.target.setAttribute("data-cssvars", "")
                          : d && I(e.rootElement, !0),
                        (o = !0));
                  }
                  return o;
                })(o) ||
                (function (e) {
                  var t = !1;
                  if ("childList" === e.type) {
                    var r = n(e.target),
                      o = "out" === e.target.getAttribute("data-cssvars");
                    t = r && !o;
                  }
                  return t;
                })(o) ||
                (function (e) {
                  var o = !1;
                  return (
                    "childList" === e.type &&
                      (o = [].slice.call(e.addedNodes).some(function (e) {
                        var o =
                            1 === e.nodeType && e.hasAttribute("data-cssvars"),
                          c = n(e) && j.cssVars.test(e.textContent);
                        return !o && (r(e) || c) && !t(e);
                      })),
                    o
                  );
                })(o) ||
                (function (t) {
                  var r = !1;
                  return (
                    "childList" === t.type &&
                      (r = [].slice.call(t.removedNodes).some(function (t) {
                        var r = 1 === t.nodeType,
                          n = r && "out" === t.getAttribute("data-cssvars"),
                          o = r && "src" === t.getAttribute("data-cssvars"),
                          c = o;
                        if (o || n) {
                          var l = t.getAttribute("data-cssvars-group"),
                            f = e.rootElement.querySelector(
                              '[data-cssvars-group="'.concat(l, '"]')
                            );
                          o && I(e.rootElement, !0),
                            f && f.parentNode.removeChild(f);
                        }
                        return c;
                      })),
                    r
                  );
                })(o)
              );
            }) && N(e);
          })).observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["disabled", "href"],
            childList: !0,
            subtree: !0,
          }));
      }
      function F(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        clearTimeout(D),
          (D = setTimeout(function () {
            (e.__benchmark = null), N(e);
          }, t));
      }
      function U(e) {
        var t = [
          "animation-name",
          "-moz-animation-name",
          "-webkit-animation-name",
        ].filter(function (e) {
          return getComputedStyle(document.body)[e];
        })[0];
        if (t) {
          for (
            var r = e.getElementsByTagName("*"),
              n = [],
              o = "__CSSVARSPONYFILL-KEYFRAMES__",
              i = 0,
              c = r.length;
            i < c;
            i++
          ) {
            var l = r[i];
            "none" !== getComputedStyle(l)[t] && ((l.style[t] += o), n.push(l));
          }
          document.body.offsetHeight;
          for (var f = 0, d = n.length; f < d; f++) {
            var m = n[f].style;
            m[t] = m[t].replace(o, "");
          }
        }
      }
      function W(e, t) {
        return (
          (e.replace(j.cssComments, "").match(j.cssUrls) || []).forEach(
            function (r) {
              var n = r.replace(j.cssUrls, "$1"),
                o = P(n, t);
              e = e.replace(r, r.replace(n, o));
            }
          ),
          e
        );
      }
      function H() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = /^-{2}/;
        return Object.keys(e).reduce(function (r, n) {
          return (
            (r[t.test(n) ? n : "--".concat(n.replace(/^-+/, ""))] = e[n]), r
          );
        }, {});
      }
      function P(e) {
        var base =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : location.href,
          t = document.implementation.createHTMLDocument(""),
          b = t.createElement("base"),
          a = t.createElement("a");
        return (
          t.head.appendChild(b),
          t.body.appendChild(a),
          (b.href = base),
          (a.href = e),
          a.href
        );
      }
      function z() {
        return O && (window.performance || {}).now
          ? window.performance.now()
          : new Date().getTime();
      }
      function I(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = [].slice.call(
            e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')
          );
        r.forEach(function (e) {
          return e.setAttribute("data-cssvars", "");
        }),
          t && (L.dom = {});
      }
      (N.reset = function () {
        for (var e in ((A.job = 0),
        (A.group = 0),
        (M = !1),
        V && (V.disconnect(), (V = null)),
        (R = 0),
        (D = null),
        (T = !1),
        L))
          L[e] = {};
      }),
        (t.default = N);
    },
  },
]);
