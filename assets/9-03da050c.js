import {
  _,
  R as d,
  r as n,
  o,
  c as a,
  b as i,
  f as m,
  D as l,
  F as u,
  d as f,
  e as v,
  N as g,
} from "./index-754231d5.js";
import { s as h, A as x } from "./star-c4a98f13.js";
import { S, a as b } from "./vue-splide.esm-04e38d36.js";
const k = {
    components: { splide: S, "splide-slide": b, "svg-star": h },
    data() {
      return {
        visible: !1,
        extensions: { AutoScroll: x },
        options: {
          type: "loop",
          drag: !1,
          focus: "center",
          autoWidth: !0,
          gap: "2.5em",
          arrows: !1,
          pagination: !1,
          autoScroll: { speed: 0.5, pauseOnHover: !1, pauseOnFocus: !1 },
        },
      };
    },
    mounted() {
      const e = this;
      d(e.$refs.section, ([{ isIntersecting: t }]) => {
        e.visible = t;
      });
    },
  },
  y = { class: "template-home_9", ref: "section" },
  B = { class: "template-home_9_box" },
  N = ["src"];
function C(e, t, F, V, s, w) {
  const r = n("splide-slide"),
    c = n("splide");
  return (
    o(),
    a(
      "section",
      y,
      [
        i("div", B, [
          s.visible
            ? (o(),
              m(
                c,
                {
                  key: 0,
                  options: s.options,
                  extensions: s.extensions,
                  class: "template-home_9_carousel",
                },
                {
                  default: l(() => [
                    (o(),
                    a(
                      u,
                      null,
                      f(6, (p) =>
                        v(
                          r,
                          null,
                          {
                            default: l(() => [
                              i(
                                "img",
                                { src: e._image("icons/icon-" + p + ".svg") },
                                null,
                                8,
                                N
                              ),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      ),
                      64
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["options", "extensions"]
              ))
            : g("", !0),
        ]),
      ],
      512
    )
  );
}
const D = _(k, [["render", C]]);
export { D as default };
