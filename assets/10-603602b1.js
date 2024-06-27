import {
  _ as b,
  o as p,
  c as u,
  b as o,
  Z as Q,
  r as _,
  a as n,
  w as d,
  e as m,
  S as f,
  C as g,
} from "./index-754231d5.js";
const k = {},
  w = {
    role: "img",
    class: "svg-blob",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 500 500",
    preserveAspectRatio: "none",
  },
  y = o(
    "path",
    null,
    [
      o("animate", {
        attributeName: "d",
        dur: "10000ms",
        repeatCount: "indefinite",
        values:
          "M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z",
      }),
    ],
    -1
  ),
  z = [y];
function C(t, e) {
  return p(), u("svg", w, z);
}
const L = b(k, [["render", C]]);
const M = {
    components: { "svg-blob": L },
    data() {
      return {
        parallax: { roll: 0, tilt: 0 },
        load: null,
        resting: { active: !0, roll: 0.3, tilt: 0.05, z: -20 },
        box: { roll: 0, tilt: 0, z: 0, flipped: !1, ease: 0.1, loop: null },
      };
    },
    computed: {
      content() {
        return this.$routing.post.content.home_where;
      },
      boxStyle() {
        const t = this;
        return {
          "--un-rotate-x": t.box.roll * 100 + "deg",
          "--un-rotate-y": t.box.tilt * 100 + "deg",
          "--un-rotate-z": t.box.z + "deg",
        };
      },
    },
    created() {
      const t = this;
      t._window.data("touch") && (t.resting.active = !1);
    },
    mounted() {
      const t = this;
      (t.load = setTimeout(() => {
        t.parallax = Q(t.$refs.parallax);
      }, 240)),
        t.boxLoop();
    },
    beforeUnmount() {
      cancelAnimationFrame(this.box.loop), clearTimeout(this.load);
    },
    methods: {
      boxLoop() {
        const t = this;
        let e = t.parallax.roll - t.box.roll,
          s = t.parallax.tilt - t.box.tilt,
          a = 0 - t.box.z;
        t.resting.active &&
          ((e = t.resting.roll - t.box.roll),
          (s = t.resting.tilt - t.box.tilt),
          (a = t.resting.z - t.box.z)),
          t.box.flipped && ((s = s + 1.5), (a = a + 1)),
          t._window.data("touch") && (e = e + 0.5),
          (t.box.roll = t.box.roll + e * t.box.ease),
          (t.box.tilt = t.box.tilt + s * t.box.ease),
          (t.box.z = t.box.z + a * t.box.ease),
          (t.box.loop = requestAnimationFrame(t.boxLoop));
      },
      cursorEnter() {
        const t = this;
        t._window.data("touch") || (t.resting.active = !1);
      },
      cursorLeave() {
        const t = this;
        t._window.data("touch") || (t.resting.active = !0);
      },
      boxClicked() {
        const t = this;
        (t.box.flipped = !t.box.flipped), t._analytics.track("Box flipped");
      },
      buttonClicked() {
        this._analytics.track("Buy game button clicked");
      },
    },
  },
  B = { class: "template-home_10_grid" },
  T = { class: "template-home_10_text" },
  S = { class: "template-home_10_content" },
  Z = ["innerHTML"],
  E = ["innerHTML"],
  H = { class: "template-home_10_interactive" },
  N = { class: "template-home_10_ratio" },
  A = { class: "template-home_10_scene" },
  F = g(
    '<div class="template-home_10_face --front"></div><div class="template-home_10_face --back"></div><div class="template-home_10_face --right"></div><div class="template-home_10_face --left"></div><div class="template-home_10_face --top"></div><div class="template-home_10_face --bottom"></div>',
    6
  ),
  V = [F];
function D(t, e, s, a, q, l) {
  const v = _("ui-button"),
    x = _("svg-blob"),
    r = n("orphans"),
    c = n("nl2br"),
    h = n("motion");
  return (
    p(),
    u(
      "section",
      {
        class: "template-home_10",
        onMouseenter:
          e[1] || (e[1] = (...i) => l.cursorEnter && l.cursorEnter(...i)),
        onMouseleave:
          e[2] || (e[2] = (...i) => l.cursorLeave && l.cursorLeave(...i)),
        ref: "parallax",
      },
      [
        o("div", B, [
          o("div", T, [
            o("div", S, [
              d(
                o(
                  "h4",
                  {
                    class: "--title --type-subtitle-play",
                    innerHTML: l.content.title_game,
                  },
                  null,
                  8,
                  Z
                ),
                [[r], [c], [h, { animation: "pop-twist", delay: 250 }]]
              ),
              d(
                o(
                  "p",
                  { class: "--type-text-play", innerHTML: l.content.text_game },
                  null,
                  8,
                  E
                ),
                [[r], [c]]
              ),
              m(
                v,
                {
                  hover: "→",
                  link: l.content.link_game,
                  onClick: l.buttonClicked,
                },
                null,
                8,
                ["link", "onClick"]
              ),
            ]),
          ]),
          o("div", H, [
            m(x),
            o("div", N, [
              o("div", A, [
                o(
                  "div",
                  { class: "template-home_10_box", style: f(l.boxStyle) },
                  V,
                  4
                ),
              ]),
            ]),
            o("button", {
              label: "Flip box",
              class: "template-home_10_button",
              onClick:
                e[0] || (e[0] = (...i) => l.boxClicked && l.boxClicked(...i)),
            }),
          ]),
        ]),
      ],
      544
    )
  );
}
const U = b(M, [["render", D]]);
export { U as default };
