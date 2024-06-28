import {
  _ as x,
  r as h,
  a,
  o as c,
  c as d,
  b as e,
  w as s,
  e as m,
  D as _,
  h as y,
  t as L,
  T as f,
} from "./index-754231d5.js";
import { a as T } from "./home-52e6e4d5.js";
import "./filter-b9302deb.js";
const H = {
    data() {
      return { index: 0, version: Date.now() };
    },
    computed: {
      content() {
        return this.$routing.post.content.home_lingo;
      },
      items() {
        return T(this.$routing.post.content.home_lingo_items);
      },
      active() {
        return this.items[this.index] || {};
      },
    },
    methods: {
      nextLingo() {
        const t = this,
          l = t.index + 1;
        (t.index = l > t.items.length - 1 ? 0 : l),
          t._analytics.track("Lingo read");
      },
      newVersion() {
        const t = this;
        (t.version = Date.now()), t._analytics.track("Lingo bingo downloaded");
      },
    },
  },
  M = { class: "template-home_8" },
  k = { class: "template-home_8_grid" },
  w = { class: "template-home_8_first" },
  b = ["innerHTML"],
  D = ["innerHTML"],
  C = { class: "template-home_8_second" },
  V = { class: "template-home_8_lingo-cursor" },
  B = ["src"],
  N = { class: "template-home_8_lingo-content" },
  z = ["innerHTML"],
  E = ["innerHTML"],
  R = ["innerHTML"],
  S = ["innerHTML"];
function j(t, l, q, A, r, n) {
  const u = h("ui-button"),
    p = h("ui-cursor"),
    o = a("orphans"),
    i = a("nl2br"),
    g = a("motion");
  return (
    c(),
    d("section", M, [
      e("div", k, [
        e("div", w, [
          s(
            e(
              "h4",
              {
                class: "--title --type-subtitle-play",
                innerHTML: n.content.title_lingo,
              },
              null,
              8,
              b
            ),
            [[o], [i], [g, { animation: "pop-twist", delay: 250 }]]
          ),
          s(
            e(
              "p",
              { class: "--type-text-play", innerHTML: n.content.text_lingo },
              null,
              8,
              D
            ),
            [[o], [i]]
          ),
          e("div", null, [
            m(
              u,
              {
                link: { path: "/api/bingo-card/?v=" + r.version, external: !0 },
                onClick: n.newVersion,
              },
              { default: _(() => [y(L(n.content.button_lingo), 1)]), _: 1 },
              8,
              ["link", "onClick"]
            ),
          ]),
        ]),
        e("div", C, [
          e(
            "button",
            {
              class: "template-home_8_lingo",
              onClick:
                l[0] || (l[0] = (...v) => n.nextLingo && n.nextLingo(...v)),
            },
            [
              m(
                p,
                {
                  class: "template-home_8_lingo-area",
                  resting: t._is("sm")
                    ? { x: 0.85, y: 0.15 }
                    : { x: 0.83, y: 0.9 },
                },
                {
                  follow: _(() => [
                    e("div", V, [
                      (c(),
                      d(
                        "img",
                        {
                          src: t._image("refresh.svg"),
                          loading: "lazy",
                          alt: "Refresh",
                          key: r.index,
                        },
                        null,
                        8,
                        B
                      )),
                    ]),
                  ]),
                  default: _(() => [
                    m(
                      f,
                      { name: "template-home_8_lingo-item", mode: "out-in" },
                      {
                        default: _(() => [
                          (c(),
                          d(
                            "div",
                            {
                              class: "template-home_8_lingo-item",
                              key: r.index,
                            },
                            [
                              e("div", N, [
                                s(
                                  e(
                                    "p",
                                    { innerHTML: n.active.word },
                                    null,
                                    8,
                                    z
                                  ),
                                  [[o], [i]]
                                ),
                                s(
                                  e(
                                    "p",
                                    { innerHTML: n.active.type || "noun" },
                                    null,
                                    8,
                                    E
                                  ),
                                  [[o], [i]]
                                ),
                                s(
                                  e(
                                    "p",
                                    { innerHTML: n.active.sound },
                                    null,
                                    8,
                                    R
                                  ),
                                  [[o], [i]]
                                ),
                                s(
                                  e(
                                    "p",
                                    {
                                      innerHTML: n.active.desc,
                                      class: "---type-cms",
                                    },
                                    null,
                                    8,
                                    S
                                  ),
                                  [[o], [i]]
                                ),
                              ]),
                            ]
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["resting"]
              ),
            ]
          ),
        ]),
      ]),
    ])
  );
}
const J = x(H, [["render", j]]);
export { J as default };
