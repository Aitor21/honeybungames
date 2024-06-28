import {
  _ as S,
  R as b,
  G as p,
  r as _,
  o as e,
  c as i,
  b as c,
  f as a,
  D as r,
  e as h,
  F as y,
  d as x,
  E as k,
  S as g,
  t as w,
  N as W,
} from "./index-754231d5.js";
import { s as B, A as D } from "./star-c4a98f13.js";
import { S as F, a as N } from "./vue-splide.esm-04e38d36.js";
import { f as A } from "./filter-b9302deb.js";
const E = {
    components: { splide: F, "splide-slide": N, "svg-star": B },
    data() {
      return {
        visible: !1,
        extensions: { AutoScroll: D },
        options: {
          type: "loop",
          drag: !1,
          focus: "center",
          fixedWidth: "2em",
          gap: "0.3em",
          arrows: !1,
          pagination: !1,
          autoScroll: { speed: 0.5, pauseOnHover: !1, pauseOnFocus: !1 },
        },
      };
    },
    mounted() {
      const o = this;
      b(o.$refs.section, ([{ isIntersecting: n }]) => {
        o.visible = n;
      });
    },
    computed: {
      playWords() {
        const o = "Lorem Ipsum Dolor ".split(""),
          n = this._window.data("colors"),
          l = A(p(n, "DEFAULT")).slice(2);
        return p(o, (d, t) => ({
          character: d,
          divider: d === " ",
          color: l[t % l.length],
        }));
      },
      workWords() {
        const o = "Creative Compadres ".split(""),
          n = this._window.data("colors");
        return p(o, (l, d) => ({
          character: l,
          divider: l === " ",
          color: n.blue[1],
        }));
      },
    },
  },
  L = { class: "template-home_2", ref: "section" },
  V = { class: "relative" },
  z = c("div", { class: "--ratio" }, null, -1),
  O = { class: "template-home_2_play absolute-fill" },
  G = ["textContent"],
  H = { class: "absolute-fill flex-center" },
  I = { class: "template-home_2_work" },
  R = ["textContent"];
function T(o, n, l, d, t, u) {
  const m = _("svg-star"),
    f = _("splide-slide"),
    v = _("splide"),
    C = _("ui-theme");
  return (
    e(),
    i(
      "section",
      L,
      [
        c("div", V, [
          z,
          t.visible
            ? (e(),
              a(
                C,
                { key: 0, class: "absolute-fill" },
                {
                  play: r(() => [
                    c("div", O, [
                      h(
                        v,
                        {
                          options: t.options,
                          extensions: t.extensions,
                          class: "--carousel",
                        },
                        {
                          default: r(() => [
                            (e(!0),
                            i(
                              y,
                              null,
                              x(
                                u.playWords,
                                (s) => (
                                  e(),
                                  a(
                                    f,
                                    {
                                      class: k([
                                        "--letter",
                                        { "--divider": s.divider },
                                      ]),
                                      style: g({ "--hover": s.color }),
                                    },
                                    {
                                      default: r(() => [
                                        s.divider
                                          ? (e(), a(m, { key: 0 }))
                                          : (e(),
                                            i(
                                              "span",
                                              {
                                                key: 1,
                                                textContent: w(s.character),
                                              },
                                              null,
                                              8,
                                              G
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["class", "style"]
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["options", "extensions"]
                      ),
                    ]),
                  ]),
                  work: r(() => [
                    c("div", H, [
                      c("div", I, [
                        h(
                          v,
                          {
                            options: t.options,
                            extensions: t.extensions,
                            class: "--carousel",
                          },
                          {
                            default: r(() => [
                              (e(!0),
                              i(
                                y,
                                null,
                                x(
                                  u.workWords,
                                  (s) => (
                                    e(),
                                    a(
                                      f,
                                      {
                                        class: k([
                                          "--letter",
                                          { "--divider": s.divider },
                                        ]),
                                        style: g({ "--hover": s.color }),
                                      },
                                      {
                                        default: r(() => [
                                          s.divider
                                            ? (e(), a(m, { key: 0 }))
                                            : (e(),
                                              i(
                                                "span",
                                                {
                                                  key: 1,
                                                  textContent: w(s.character),
                                                },
                                                null,
                                                8,
                                                R
                                              )),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["class", "style"]
                                    )
                                  )
                                ),
                                256
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["options", "extensions"]
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ))
            : W("", !0),
        ]),
      ],
      512
    )
  );
}
const K = S(E, [["render", T]]);
export { K as default };
