import {
  _ as o,
  a as e,
  o as c,
  c as _,
  w as r,
  b as a,
} from "./index-754231d5.js";
const i = {
    computed: {
      content() {
        return this.$routing.post.content.home_where;
      },
    },
  },
  p = { class: "template-home_10b" },
  l = ["innerHTML"];
function d(h, u, m, v, b, t) {
  const n = e("orphans"),
    s = e("nl2br");
  return (
    c(),
    _("section", p, [
      r(
        a(
          "p",
          {
            class: "--type-text-play --type-cms",
            innerHTML: t.content.dividing_text,
          },
          null,
          8,
          l
        ),
        [[n], [s]]
      ),
    ])
  );
}
const x = o(i, [["render", d]]);
export { x as default };
