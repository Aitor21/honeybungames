import {
  _ as f,
  R as g,
  r as p,
  a as i,
  o as l,
  c as _,
  b as e,
  e as c,
  D as s,
  w as r,
  F as k,
  d as w,
  S as x,
  N as T,
  T as L,
} from "./index-754231d5.js";
const H = {
    data() {
      return { visible: !1 };
    },
    computed: {
      content() {
        return this.$routing.post.content.home_who;
      },
    },
    mounted() {
      const t = this;
      g(t.$refs.section, ([{ isIntersecting: m }]) => {
        t.visible = m;
      });
    },
  },
  M = { class: "template-home_5", ref: "section" },
  B = { class: "relative" },
  N = e("div", { class: "template-home_5_play-bg" }, null, -1),
  C = { class: "template-home_5_play --ratio" },
  D = ["innerHTML"],
  V = ["innerHTML"],
  F = { class: "template-home_5_work --ratio" },
  S = ["innerHTML"],
  $ = { class: "template-home_5_media" },
  z = e("div", { class: "template-home_5_media-bg" }, null, -1),
  E = { key: 0, class: "template-home_5_media-parallax" };
function I(t, m, R, j, h, o) {
  const u = p("ui-theme"),
    v = p("ui-parallax"),
    a = i("orphans"),
    n = i("nl2br"),
    y = i("motion");
  return (
    l(),
    _(
      "section",
      M,
      [
        e("div", B, [
          c(u, null, {
            play: s(() => [
              N,
              e("div", C, [
                r(
                  e(
                    "h4",
                    {
                      class: "--type-subtitle-play --type-cms",
                      innerHTML: o.content.title_play,
                    },
                    null,
                    8,
                    D
                  ),
                  [[a], [n], [y, { animation: "pop-twist", delay: 250 }]]
                ),
                r(
                  e(
                    "p",
                    {
                      class: "--type-text-play --type-cms",
                      innerHTML: o.content.text_play,
                    },
                    null,
                    8,
                    V
                  ),
                  [[a], [n]]
                ),
              ]),
            ]),
            work: s(() => [
              e("div", F, [
                r(
                  e(
                    "h4",
                    {
                      class: "--type-title-work",
                      innerHTML: o.content.title_work,
                    },
                    null,
                    8,
                    S
                  ),
                  [[a], [n]]
                ),
              ]),
            ]),
            _: 1,
          }),
          e("div", $, [
            z,
            c(
              L,
              { name: "template-home_5_media-parallax" },
              {
                default: s(() => [
                  h.visible
                    ? (l(),
                      _("div", E, [
                        (l(),
                        _(
                          k,
                          null,
                          w(["back", "middle", "front"], (d, b) =>
                            c(
                              v,
                              { key: d, amount: 0.015 + 0.03 * b },
                              {
                                default: s(() => [
                                  e(
                                    "div",
                                    {
                                      class: "template-home_5_media-cover",
                                      style: x({
                                        backgroundImage:
                                          "url(" +
                                          t._image(
                                            "group-" +
                                              d +
                                              (t._isBelow("sm")
                                                ? "-mobile"
                                                : "") +
                                              ".png"
                                          ) +
                                          ")",
                                      }),
                                    },
                                    null,
                                    4
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["amount"]
                            )
                          ),
                          64
                        )),
                      ]))
                    : T("", !0),
                ]),
                _: 1,
              }
            ),
          ]),
        ]),
      ],
      512
    )
  );
}
const A = f(H, [["render", I]]);
export { A as default };
