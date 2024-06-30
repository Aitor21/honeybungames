/*!
 * Version 0.1.0
 * © 2024 Honey Bun Games
 */
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
      e.names[a] = e.content["names_" + a].split("\n");
    });
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
    e.parallaxLoop();
    q(e.$refs.section, ([{ isIntersecting: a }]) => {
      e.visible = a;
    });
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.parallax.loop);
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
};

const R = { class: "template-home_6", ref: "section" },
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
                C(
                  f(
                    d,
                    {
                      class: "--inverted --xl",
                      title: e.content.button_title,
                      "onExecute:click": t.shuffle,
                    },
                    { default: h(() => [b(" Shuffle the team ")]), _: 1 },
                    8,
                    ["title", "onExecute:click"]
                  ),
                  [[_, !0]]
                ),
              ]),
            ]),
            work: h(() => [
              t.theme
                ? (n(),
                  m(
                    S,
                    { key: 0 },
                    [
                      l(
                        "div",
                        {
                          class: "template-home_6_work-bg",
                          style: r({ "background-color": t.theme.color }),
                        },
                        null,
                        4
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_work-border",
                          style: r({ "border-color": t.theme.border }),
                        },
                        null,
                        4
                      ),
                      l(
                        "div",
                        {
                          class: "template-home_6_work-gradient",
                          style: r({ "background-color": t.theme.border }),
                        },
                        null,
                        4
                      ),
                    ],
                    64
                  ))
                : y("", !0),
              l("div", P, [
                C((n(), m("h4", Q, [b(" Who works on these ")])), [
                  [_],
                  [c, { animation: "pop-twist", delay: 250 }],
                ]),
                l(
                  "div",
                  {
                    class: "--mask",
                    style: r({ "background-color": t.theme.color }),
                  },
                  [C((n(), m("span", null, [W])), [[c, { animation: "fade" }]])],
                  4
                ),
              ]),
              l("div", X, [
                C(
                  f(
                    d,
                    {
                      title: e.content.button_title,
                      "onExecute:click": t.shuffle,
                    },
                    { default: h(() => [b(" Shuffle the team ")]), _: 1 },
                    8,
                    ["title", "onExecute:click"]
                  ),
                  [[_, !0]]
                ),
              ]),
            ]),
            _: 1,
          }),
        ]),
        e.cards.length > 0
          ? (n(),
            m("div", $, [
              l("div", ee, [
                (n(!0),
                m(
                  S,
                  null,
                  K(e.cards, (v, F) => (
                    n(),
                    m(
                      "div",
                      {
                        key: F,
                        class: "template-home_6_cards-item",
                        onClick: (x) => t.cardClicked(F),
                        onMouseenter: (x) => (i.modal.target = F),
                      },
                      [
                        l(
                          "div",
                          {
                            class: "template-home_6_cards-image",
                            style: r(t.parallaxStyle.card),
                          },
                          [
                            l("img", {
                              src: v.image,
                              alt: v.name,
                              style: r(t.parallaxStyle.image),
                            }),
                          ],
                          4
                        ),
                        l("div", le, [
                          l(
                            "h3",
                            { class: "--name", textContent: u(v.name) },
                            null,
                            8,
                            se
                          ),
                          l(
                            "p",
                            { class: "--title", textContent: u(v.title) },
                            null,
                            8,
                            oe
                          ),
                        ]),
                      ],
                      40,
                      te
                    )
                  )),
                  128
                )),
              ]),
            ]))
          : y("", !0),
        i.modal.open
          ? (n(),
            m(
              "div",
              re,
              [
                l("div", {
                  class: "template-home_6_modal-bg",
                  style: r({ "background-color": t.modalCard.color }),
                  onClick: a[0] || (a[0] = (...v) => t.closeModal && t.closeModal(...v)),
                }),
                l(
                  "div",
                  {
                    class: "template-home_6_modal-body",
                    style: r({ "border-color": t.modalCard.border }),
                  },
                  [
                    l("div", {
                      class: "template-home_6_modal-close",
                      onClick: a[1] || (a[1] = (...v) => t.closeModal && t.closeModal(...v)),
                    }),
                    l("img", {
                      class: "template-home_6_modal-pattern",
                      src: e._img("icons/pattern.svg"),
                    }),
                    l("div", ce, [
                      l(
                        "div",
                        {
                          class: "template-home_6_modal-image",
                          style: r(t.parallaxStyle.card),
                        },
                        [
                          l("img", {
                            src: t.modalCard.image,
                            alt: t.modalCard.name,
                            style: r(t.parallaxStyle.image),
                          }),
                        ],
                        4
                      ),
                      l("div", me, [
                        l(
                          "h3",
                          { class: "--name", textContent: u(t.modalCard.name) },
                          null,
                          8,
                          ie
                        ),
                        l(
                          "p",
                          { class: "--title", textContent: u(t.modalCard.title) },
                          null,
                          8,
                          _e
                        ),
                      ]),
                    ]),
                    l(
                      "div",
                      he,
                      [
                        l(
                          "h3",
                          { class: "--name", textContent: u(t.modalCard.name) },
                          null,
                          8,
                          ue
                        ),
                        l(
                          "p",
                          { class: "--title", textContent: u(t.modalCard.title) },
                          null,
                          8,
                          pe
                        ),
                        C(
                          l(
                            "div",
                            {
                              class: "--text",
                              innerHTML: t.modalCard.text,
                            },
                            null,
                            8,
                            fe
                          ),
                          [[v]]
                        ),
                      ],
                      512
                    ),
                  ],
                  4
                ),
              ],
              512
            ))
          : y("", !0),
      ],
      512
    )
  );
}

const xe = E(J, [["render", ve]]);

export { xe as default };
