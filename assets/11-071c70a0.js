import {
  _ as d,
  r,
  a as l,
  o as k,
  c as h,
  b as e,
  e as a,
  D as _,
  E as y,
  w as u,
} from "./index-754231d5.js";
const f = {
    data() {
      return {
        look: {
          step: 0,
          x: 0.5,
          y: 0.5,
          active: !1,
          interval: null,
          speed: 1500,
        },
      };
    },
    computed: {
      content() {
        return this.$routing.post.content.home_where;
      },
    },
    mounted() {
      this.lookInterval();
    },
    beforeUnmount() {
      clearInterval(this.look.interval);
    },
    methods: {
      lookInterval() {
        const t = this;
        clearInterval(t.look.interval),
          (t.look.interval = setInterval(() => {
            t.lookAround();
          }, t.look.speed));
      },
      lookAround() {
        const t = this;
        t.look.active = !0;
        const s = t.look.step + 1;
        switch (((t.look.step = s > 3 ? 0 : s), t.look.step)) {
          case 0:
            (t.look.x = 0.5), (t.look.y = 0.5);
            return;
          case 1:
            (t.look.x = 0.33), (t.look.y = 0.25);
            return;
          case 2:
            (t.look.x = 0.75), (t.look.y = 0.7);
            return;
          case 3:
            (t.look.x = 0.25), (t.look.y = 0.7);
            return;
        }
      },
      cursorLeave() {
        const t = this;
        (t.look.step = 0), (t.look.active = !1), t.lookInterval();
      },
      buttonClicked() {
        this._analytics.track("Buy font button clicked");
      },
    },
  },
  x = { class: "template-home_11" },
  b = { class: "template-home_11_grid" },
  C = { class: "template-home_11_interactive" },
  w = e("div", { class: "template-home_11_type-circle" }, null, -1),
  g = e("div", { class: "template-home_11_type-img --bottom" }, null, -1),
  I = e("div", { class: "template-home_11_type-img --top" }, null, -1),
  L = { class: "template-home_11_text" },
  B = { class: "template-home_11_content" },
  H = ["innerHTML"],
  M = ["innerHTML"];
function T(t, s, D, A, n, o) {
  const p = r("ui-cursor"),
    m = r("ui-button"),
    c = l("orphans"),
    i = l("nl2br"),
    v = l("motion");
  return (
    k(),
    h("section", x, [
      e("div", b, [
        e("div", C, [
          a(
            p,
            {
              class: y([
                "template-home_11_type",
                { "--mobile": t._isBelow("sm") },
              ]),
              onCursorReset: o.cursorLeave,
              resting: { x: 0.55, y: 0.45 },
              position: n.look.active ? { x: n.look.x, y: n.look.y } : null,
            },
            { follow: _(() => [w]), default: _(() => [g, I]), _: 1 },
            8,
            ["class", "onCursorReset", "position"]
          ),
        ]),
        e("div", L, [
          e("div", B, [
            u(
              e(
                "h4",
                {
                  class: "--title --type-subtitle-play",
                  innerHTML: o.content.title_font,
                },
                null,
                8,
                H
              ),
              [[c], [i], [v, { animation: "pop-twist", delay: 250 }]]
            ),
            u(
              e(
                "p",
                { class: "--type-text-play", innerHTML: o.content.text_font },
                null,
                8,
                M
              ),
              [[c], [i]]
            ),
            a(
              m,
              {
                hover: "→",
                link: o.content.link_font,
                onClick: o.buttonClicked,
              },
              null,
              8,
              ["link", "onClick"]
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const N = d(f, [["render", T]]);
export { N as default };
