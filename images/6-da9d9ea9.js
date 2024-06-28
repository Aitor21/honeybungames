import {
  s as V,
  V as A,
  _ as E,
  J as M,
  R as q,
  Y as B,
  G as H,
  Z as I,
  r as T,
  a as g,
  o as n,
  c as m,
  b as l,
  e as f,
  D as h,
  F as S,
  S as r,
  N as y,
  w as C,
  h as b,
  d as K,
  E as k,
  t as u,
  T as L,
} from "./index-754231d5.js";
import { l as N, d as z, s as D } from "./sampleSize-95c5ce50.js";
import { u as U } from "./home-52e6e4d5.js";
import "./filter-b9302deb.js";
function G(e, a, s) {
  return e && e.length
    ? ((a = s || a === void 0 ? 1 : V(a)), A(e, 0, a < 0 ? 0 : a))
    : [];
}
const J = {
    data() {
      return {
        visible: !1,
        names: {},
        shuffled: [],
        disabled: !1,
        timeout: null,
        prev: { names: {}, keys: [] },
        modal: { open: !1, target: 0, index: 0 },
        parallax: {
          pos: { roll: 0, tilt: 0 },
          roll: 0,
          tilt: 0,
          ease: 0.1,
          loop: null,
        },
      };
    },
    computed: {
      content() {
        return this.$routing.post.content.home_who;
      },
      cards() {
        const e = this;
        let a;
        switch (!0) {
          case e._is("xl"):
            a = 4;
            break;
          case e._is("lg"):
            a = 3;
            break;
          case e._is("sm"):
            a = 2;
            break;
          default:
            a = 1;
        }
        return G(e.shuffled, a);
      },
      theme() {
        const e = this;
        return e.cards[e.modal.target] || N(e.cards);
      },
      modalCard() {
        const e = this;
        return e.cards[e.modal.index] || N(e.cards);
      },
      parallaxStyle() {
        const e = this;
        return {
          card: {
            "--un-rotate-y": -e.parallax.tilt * 30 + "deg",
            "--un-rotate-x": -e.parallax.roll * 40 + "deg",
          },
          image: {
            "--un-translate-x": e.parallax.tilt * 1.2 + "em",
            "--un-translate-y": -e.parallax.roll * 1.2 + "em",
          },
        };
      },
    },
    created() {
      const e = this;
      M(["male", "female", "dog"], (a) => {
        e.names[a] = e.content["names_" + a].split(`
`);
      }),
        e._api
          .query({
            post_type: "character",
            fields: ["title", "content.details.character"],
          })
          .then((a) => {
            (e.characters = a.posts), e.shuffle();
          });
    },
    mounted() {
      const e = this;
      e.parallaxLoop(),
        q(e.$refs.section, ([{ isIntersecting: a }]) => {
          e.visible = a;
        });
    },
    beforeUnmount() {
      clearTimeout(this.timeout), cancelAnimationFrame(this.parallax.loop);
    },
    methods: {
      shuffle() {
        const e = this;
        if (e.disabled) return;
        (e.disabled = !0),
          (e.timeout = setTimeout(() => {
            e.disabled = !1;
          }, 700));
        const a = {};
        M(["male", "female", "dog"], (d) => {
          const p = z(e.names[d], e.prev.names[d]);
          (a[d] = D(p, 4)), (e.prev.names[d] = a[d]);
        });
        const s = e._window.data("colors"),
          w = B(e.characters),
          i = z(w, e.prev.keys),
          t = D(i, 4);
        (e.prev.keys = t),
          (e.shuffled = H(t, (d, p) => {
            const _ = e.characters[d],
              c = _.content.details,
              v = a[c.name][p];
            return {
              ...c,
              key: U(),
              title: _.title,
              name: v,
              image: c.profile.src,
              color: s[c.color] ? s[c.color].DEFAULT : null,
              border: s[c.color] ? s[c.color][1] : null,
              text: c.text.replaceAll("[name]", v),
            };
          })),
          (e.modal.target = 0),
          e._analytics.track("Team shuffled");
      },
      cardClicked(e) {
        const a = this;
        (a.modal.index = e),
          (a.modal.open = !0),
          a._analytics.track("Team card " + a.modalCard.name + " opened"),
          a.$nextTick(() => {
            const s = a.$refs.modal;
            s && (a.parallax.pos = I(s));
          });
      },
      closeModal() {
        const e = this;
        (e.modal.open = !1), (e.parallax.pos = { roll: 0, tilt: 0 });
      },
      parallaxLoop() {
        const e = this;
        let a = e.parallax.pos.roll - e.parallax.roll,
          s = e.parallax.pos.tilt - e.parallax.tilt;
        (e.parallax.roll = e.parallax.roll + a * e.parallax.ease),
          (e.parallax.tilt = e.parallax.tilt + s * e.parallax.ease),
          (e.parallax.loop = requestAnimationFrame(e.parallaxLoop));
      },
    },
  },
  R = { class: "template-home_6", ref: "section" },
  Y = { class: "--ratio relative" },
  Z = { class: "template-home_6_play --title" },
  j = { class: "--type-subtitle-play --type-cms" },
  O = { class: "--button" },
  P = { class: "template-home_6_work --title" },
  Q = { class: "--type-title-work --type-cms" },
  W = l("strong", null, "heroes", -1),
  X = { class: "--button" },
  $ = { key: 0, class: "template-home_6_cards" },
  ee = { class: "template-home_6_cards-grid" },
  te = ["onClick", "onMouseenter"],
  ae = ["src", "alt"],
  le = { class: "template-home_6_cards-plate" },
  se = ["textContent"],
  oe = ["textContent"],
  re = { key: 0, class: "template-home_6_modal", ref: "modal" },
  de = ["src"],
  ce = { class: "template-home_6_modal-pos" },
  ne = ["src", "alt"],
  me = { class: "template-home_6_cards-plate" },
  ie = ["textContent"],
  _e = ["textContent"],
  he = { class: "template-home_6_cards-back" },
  ue = ["textContent"],
  pe = ["textContent"],
  fe = ["innerHTML"];
function ve(e, a, s, w, i, t) {
  const d = T("ui-button"),
    p = T("ui-theme"),
    _ = g("orphans"),
    c = g("motion"),
    v = g("nl2br");
  return (
    n(),
    m(
      "section",
      R,
      [
        l("div", Y, [
          f(p, null, {
            play: h(() => [
              t.theme
                ? (n(),
                  m(
                    S,
                    { key: 0 },
                    [
                      l(
                        "div",
                        {
                          class: "template-home_6_play-bg",
                          style: r({ "background-color": t.theme.color }),
                        },
                        null,
                        4
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_play-border",
                          style: r({ "border-color": t.theme.border }),
                        },
                        null,
                        4
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_play-gradient",
                          style: r({ "background-color": t.theme.border }),
                        },
                        null,
                        4
                      ),
                    ],
                    64
                  ))
                : y("", !0),
              l("div", Z, [
                C((n(), m("h4", j, [b(" Meet the team ")])), [
                  [_],
                  [c, { animation: "pop-twist", delay: 250 }],
                ]),
              ]),
              l("div", O, [
                f(
                  d,
                  { onClick: t.shuffle, disabled: i.disabled },
                  { default: h(() => [b(" Shuffle colleagues ")]), _: 1 },
                  8,
                  ["onClick", "disabled"]
                ),
              ]),
            ]),
            work: h(() => [
              l("div", P, [C((n(), m("h4", Q, [b(" Meet your "), W])), [[_]])]),
              l("div", X, [
                f(
                  d,
                  {
                    onClick: t.shuffle,
                    disabled: i.disabled,
                    variant: "yellow",
                    uppercase: "",
                  },
                  { default: h(() => [b(" Shuffle ")]), _: 1 },
                  8,
                  ["onClick", "disabled"]
                ),
              ]),
            ]),
            _: 1,
          }),
          i.visible
            ? (n(),
              m("div", $, [
                l("ul", ee, [
                  (n(),
                  m(
                    S,
                    null,
                    K(4, (x, o) =>
                      f(
                        L,
                        { name: "template-home_6_cards-item", mode: "out-in" },
                        {
                          default: h(() => [
                            t.cards[o]
                              ? (n(),
                                m(
                                  "li",
                                  {
                                    key: t.cards[o].key,
                                    class: k([
                                      "template-home_6_cards-item",
                                      "--card-" + (o + 1),
                                    ]),
                                  },
                                  [
                                    l(
                                      "button",
                                      {
                                        class: "template-home_6_cards-pos",
                                        onClick: (F) => t.cardClicked(o),
                                        onMouseenter: (F) =>
                                          (i.modal.target = o),
                                      },
                                      [
                                        l(
                                          "div",
                                          {
                                            class: k([
                                              "template-home_6_cards-front",
                                              {
                                                "--director": !t.cards[o].color,
                                              },
                                            ]),
                                            style: r({
                                              "background-color":
                                                t.cards[o].color,
                                            }),
                                          },
                                          [
                                            l(
                                              "div",
                                              {
                                                class:
                                                  "template-home_6_cards-image",
                                                style: r({
                                                  "border-color":
                                                    t.cards[o].border,
                                                }),
                                              },
                                              [
                                                l(
                                                  "img",
                                                  {
                                                    src: t.cards[o].image,
                                                    alt: t.cards[o].type,
                                                    loading: "lazy",
                                                    width: "546",
                                                    height: "758",
                                                  },
                                                  null,
                                                  8,
                                                  ae
                                                ),
                                              ],
                                              4
                                            ),
                                            l("div", le, [
                                              l(
                                                "p",
                                                {
                                                  textContent: u(
                                                    t.cards[o].name
                                                  ),
                                                },
                                                null,
                                                8,
                                                se
                                              ),
                                              l(
                                                "p",
                                                {
                                                  textContent: u(
                                                    t.cards[o].type
                                                  ),
                                                },
                                                null,
                                                8,
                                                oe
                                              ),
                                            ]),
                                          ],
                                          6
                                        ),
                                      ],
                                      40,
                                      te
                                    ),
                                  ],
                                  2
                                ))
                              : y("", !0),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    ),
                    64
                  )),
                ]),
              ]))
            : y("", !0),
        ]),
        f(
          L,
          { name: "template-home_6_modal" },
          {
            default: h(() => [
              i.modal.open && t.modalCard
                ? (n(),
                  m(
                    "div",
                    re,
                    [
                      l(
                        "div",
                        {
                          class: "template-home_6_modal-bg",
                          style: r({ "border-color": t.modalCard.border }),
                        },
                        null,
                        4
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_modal-bg-shade",
                          style: r({ "background-color": t.theme.color }),
                        },
                        null,
                        4
                      ),
                      l(
                        "button",
                        {
                          class: "template-home_6_modal-close",
                          onClick:
                            a[0] ||
                            (a[0] = (...x) =>
                              t.closeModal && t.closeModal(...x)),
                        },
                        [
                          l(
                            "img",
                            { src: e._image("close.svg"), alt: "Close" },
                            null,
                            8,
                            de
                          ),
                        ]
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_modal-item",
                          onClick:
                            a[1] ||
                            (a[1] = (...x) =>
                              t.closeModal && t.closeModal(...x)),
                        },
                        [
                          l("div", ce, [
                            l(
                              "div",
                              {
                                class: "template-home_6_cards-parallax",
                                style: r(
                                  e._is("md") ? t.parallaxStyle.card : null
                                ),
                              },
                              [
                                l(
                                  "div",
                                  {
                                    class: k([
                                      "template-home_6_cards-front",
                                      { "--director": !t.modalCard.color },
                                    ]),
                                    style: r({
                                      "background-color": t.modalCard.color,
                                    }),
                                  },
                                  [
                                    l(
                                      "div",
                                      {
                                        class: "template-home_6_cards-image",
                                        style: r({
                                          "border-color": t.modalCard.border,
                                        }),
                                      },
                                      [
                                        l(
                                          "img",
                                          {
                                            src: t.modalCard.image,
                                            alt: t.modalCard.type,
                                            style: r(
                                              e._is("md")
                                                ? t.parallaxStyle.image
                                                : null
                                            ),
                                            loading: "lazy",
                                          },
                                          null,
                                          12,
                                          ne
                                        ),
                                      ],
                                      4
                                    ),
                                    l("div", me, [
                                      l(
                                        "p",
                                        { textContent: u(t.modalCard.name) },
                                        null,
                                        8,
                                        ie
                                      ),
                                      l(
                                        "p",
                                        { textContent: u(t.modalCard.type) },
                                        null,
                                        8,
                                        _e
                                      ),
                                    ]),
                                  ],
                                  6
                                ),
                              ],
                              4
                            ),
                          ]),
                          l("div", he, [
                            l(
                              "p",
                              { textContent: u(t.modalCard.name) },
                              null,
                              8,
                              ue
                            ),
                            l(
                              "p",
                              {
                                textContent: u(t.modalCard.type),
                                style: r({ color: t.modalCard.color }),
                              },
                              null,
                              12,
                              pe
                            ),
                            C(
                              l(
                                "p",
                                { innerHTML: t.modalCard.text },
                                null,
                                8,
                                fe
                              ),
                              [[_], [v]]
                            ),
                          ]),
                        ]
                      ),
                    ],
                    512
                  ))
                : y("", !0),
            ]),
            _: 1,
          }
        ),
      ],
      512
    )
  );
}
const Ce = E(J, [["render", ve]]);
export { Ce as default };
