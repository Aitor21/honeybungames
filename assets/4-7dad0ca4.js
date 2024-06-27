import {
  _ as c,
  r as o,
  o as p,
  c as d,
  e as t,
  D as e,
  b as s,
  h as a,
} from "./index-754231d5.js";
import { S as u, b as m, a as h } from "./vue-splide.esm-04e38d36.js";
const f = {
    components: { splide: u, "splide-track": m, "splide-slide": h },
    data() {
      return {
        options: {
          type: "loop",
          autoWidth: !0,
          focus: "center",
          arrows: !0,
          pagination: !1,
          mediaQuery: "min",
          flickPower: 200,
          role: "contentinfo",
          breakpoints: { 1024: { drag: !1 } },
        },
      };
    },
  },
  w = { class: "template-home_4" },
  v = { class: "template-home_4_play --slider" },
  k = s(
    "div",
    { class: "--content" },
    [
      s("p", { class: "--stat" }, [
        s("strong", null, "10"),
        a(" to "),
        s("strong", null, "20"),
      ]),
      s("p", null, "Minutes"),
    ],
    -1
  ),
  y = s(
    "div",
    { class: "--content" },
    [
      s("p", { class: "--stat" }, [s("strong", null, "100"), a("% ")]),
      s("p", null, "Enjoyment"),
    ],
    -1
  ),
  g = s(
    "div",
    { class: "--content" },
    [
      s("p", { class: "--stat" }, [
        s("strong", null, "2"),
        a(" to "),
        s("strong", null, "4"),
      ]),
      s("p", null, "Players"),
    ],
    -1
  ),
  x = s(
    "div",
    { class: "splide__arrows --arrows" },
    [
      s("button", { class: "splide__arrow splide__arrow--prev --prev" }, "←"),
      s("button", { class: "splide__arrow splide__arrow--next --next" }, "→"),
    ],
    -1
  ),
  b = { class: "template-home_4_work --slider" },
  S = s(
    "div",
    { class: "template-home_4_work-slide --yellow" },
    [
      s("div", { class: "--content" }, [
        s("p", { class: "--stat" }, [s("strong", null, "5")]),
        s("p", null, "OVERPOWER™ Workshops"),
      ]),
    ],
    -1
  ),
  C = s(
    "div",
    { class: "template-home_4_work-slide --pink" },
    [
      s("div", { class: "--content" }, [
        s("p", { class: "--stat" }, [s("strong", null, "1")]),
        s("p", null, "Perfect Idea"),
      ]),
    ],
    -1
  ),
  E = s(
    "div",
    { class: "template-home_4_work-slide --blue" },
    [
      s("div", { class: "--content" }, [
        s("p", { class: "--stat" }, [s("strong", null, "16")]),
        s("p", null, "Creative Compadres"),
      ]),
    ],
    -1
  ),
  P = s(
    "div",
    { class: "splide__arrows --arrows" },
    [
      s("button", { class: "splide__arrow splide__arrow--prev --prev" }, "←"),
      s("button", { class: "splide__arrow splide__arrow--next --next" }, "→"),
    ],
    -1
  );
function V(B, N, W, O, n, R) {
  const l = o("splide-slide"),
    _ = o("splide-track"),
    i = o("splide"),
    r = o("ui-theme");
  return (
    p(),
    d("section", w, [
      t(r, null, {
        play: e(() => [
          s("div", v, [
            t(
              i,
              { options: n.options, "has-track": !1 },
              {
                default: e(() => [
                  t(_, null, {
                    default: e(() => [
                      t(
                        l,
                        {
                          class: "template-home_4_play-slide --ratio --yellow",
                        },
                        { default: e(() => [k]), _: 1 }
                      ),
                      t(
                        l,
                        { class: "template-home_4_play-slide --ratio --pink" },
                        { default: e(() => [y]), _: 1 }
                      ),
                      t(
                        l,
                        { class: "template-home_4_play-slide --ratio --blue" },
                        { default: e(() => [g]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }),
                  x,
                ]),
                _: 1,
              },
              8,
              ["options"]
            ),
          ]),
        ]),
        work: e(() => [
          s("div", b, [
            t(
              i,
              { options: n.options, "has-track": !1 },
              {
                default: e(() => [
                  t(_, null, {
                    default: e(() => [
                      t(
                        l,
                        { class: "--ratio" },
                        { default: e(() => [S]), _: 1 }
                      ),
                      t(
                        l,
                        { class: "--ratio" },
                        { default: e(() => [C]), _: 1 }
                      ),
                      t(
                        l,
                        { class: "--ratio" },
                        { default: e(() => [E]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }),
                  P,
                ]),
                _: 1,
              },
              8,
              ["options"]
            ),
          ]),
        ]),
        _: 1,
      }),
    ])
  );
}
const j = c(f, [["render", V]]);
export { j as default };
