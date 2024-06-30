import {
  _ as m,
  o,
  c as s,
  b as a,
  e as p,
  D as Z,
  N as C,
  T as k,
  C as f,
  r as c,
  a as h,
  w as d,
  h as G,
  E as b,
} from "./index-754231d5.js";
import { r as _ } from "./home-52e6e4d5.js";
import { p as M } from "./grav-buttons-502c075b.js";
import "./filter-b9302deb.js";
const w = {
    name: "",
    data() {
      return { gradient: 0, shape: 0, interval: null };
    },
    methods: {
      randomise() {
        const t = this;
        (t.gradient = _(0, 8)), (t.shape = _(0, 11));
      },
      logoClicked() {
        const t = this;
        clearInterval(t.interval), t.randomise();
      },
    },
    created() {
      const t = this;
      t.randomise(),
        (t.interval = setInterval(() => {
          t.randomise();
        }, 1e3));
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
  },
  L = f(
    //'<g transform="translate(625 7) scale(0.53)"><path fill="currentColor" d="M3.58375 1.19086h2.04184L5.9307 19.2797l-2.01838.0234-.32857-18.11224ZM.180664 1.00317 8.91133.885864 8.9348 2.8097l-8.707197.16424-.046939-1.97077ZM11.6001 1.02663l3.0041-.04692L18.6174 16.957h-.5163l3.8725-15.93037h2.9337l.4928 18.27647h-1.9949l-.2581-17.85416h.4224L19.2042 18.2004h-1.7133L13.0552 1.84779l.3051-.02347.2112 17.47878h-1.9714V1.02663Z"></path></g><g transform="translate(5 0)"><path fill="currentColor" d="M577.146 92.908V7.377h35.653l-.34 16.671H594.7v17.215h13.16v15.561H594.7v19.412h17.985v16.671Zm-23.126-.227-13.071-31.734.228 31.734H523.3l-.316-85.53h17.531l.271 35.245 12.685-35.245h19.615l-18.823 44.577 19.366 40.953Zm-53.185 0-1.676-13.818h-13.342l-1.54 13.818h-18.1l11.62-85.53h28.631l12.707 85.53Zm-13.138-30.805h9.378l-4.892-40.183Zm-42.672 30.805-1.631-62.97-9.332 62.97h-16.99l-9.331-62.97-1.631 62.97h-17.441l3.94-85.53h26.638l6.32 58.553 6.3-58.553h26.638l3.964 85.53Zm-78.963 0-8.788-29.786c-1.223.158-2.492.249-3.805.316V92.68h-17.555V7.15c6.909-.34 15.132 0 17.1 0 18.527 0 30.487 9.446 30.487 28.518l-.023-.023c0 10.487-4.1 17.826-11.166 22.311l12.05 34.724Zm-12.594-68.5v22.492c9.241.113 12.933-3.715 12.933-11.235 0-7.182-3.552-11.286-11.743-11.285-.386.004-.783.013-1.19.032Zm-60.094 68.5V7.151H329l-.317 16.671h-17.758v17.214h13.16V56.6h-13.16v19.412h17.985v16.671Zm-54.067 0V7.151h13.16c21.473 0 35.516 13.93 35.516 44.622-.747 29.4-14.021 40.908-35.516 40.908Zm17.555-18.416v.023c9.693-1.562 13.159-9.242 13.159-22.492 0-17.237-3.466-23.739-13.159-24.984Zm-44.4 18.416-14.519-48.179 1.789 48.179h-17.758l-.771-85.53h19.616l14.474 50.716-1.2-50.716h17.668l-.566 85.53Zm-163.334 0-5.64-64.351-7.52 64.351H10.644L0 7.151h19.639l4.824 62.9 7.565-62.9 22.9.226 7.2 62.653 4.1-62.878h18.188l-9.649 85.53Z"></path></g><defs><linearGradient id="--gradient-0"><stop offset="0%" stop-color="#FFF69E"></stop><stop offset="100%" stop-color="#88FFBF"></stop></linearGradient><linearGradient id="--gradient-1"><stop offset="0%" stop-color="#FFFACC"></stop><stop offset="100%" stop-color="#FFAAEE"></stop></linearGradient><linearGradient id="--gradient-2"><stop offset="0%" stop-color="#FFBDEA"></stop><stop offset="100%" stop-color="#BA8FFF"></stop></linearGradient><linearGradient id="--gradient-3"><stop offset="0%" stop-color="#FFE5D2"></stop><stop offset="100%" stop-color="#99DEFF"></stop></linearGradient><linearGradient id="--gradient-4"><stop offset="0%" stop-color="#FEFFC2"></stop><stop offset="100%" stop-color="#FFA284"></stop></linearGradient><linearGradient id="--gradient-5"><stop offset="0%" stop-color="#79FFBD"></stop><stop offset="100%" stop-color="#4DC9FF"></stop></linearGradient><linearGradient id="--gradient-6"><stop offset="0%" stop-color="#FFF690"></stop><stop offset="100%" stop-color="#FF879F"></stop></linearGradient><linearGradient id="--gradient-7"><stop offset="0%" stop-color="#DFFDFF"></stop><stop offset="100%" stop-color="#7DAADE"></stop></linearGradient><linearGradient id="--gradient-8"><stop offset="0%" stop-color="#FDC8E8"></stop><stop offset="100%" stop-color="#9ADBFF"></stop></linearGradient></defs>',
    3
  ),
  D = ["fill"],
  V = { key: "shape-0", d: "m86 8 26 52 52 26-52 26-26 52-26-52L8 86l52-26Z" },
  E = {
    key: "shape-1",
    d: "m171.97,86c0-13.81-11.19-25-25-25-.23,0-.46.01-.69.02.17-.16.33-.31.5-.47,9.76-9.76,9.76-25.59,0-35.36-9.76-9.76-25.59-9.76-35.36,0-.16.16-.32.33-.47.5,0-.23.02-.46.02-.69,0-13.81-11.19-25-25-25s-25,11.19-25,25c0,.23.01.46.02.69-.16-.17-.31-.33-.47-.5-9.76-9.76-25.59-9.76-35.36,0-9.76,9.76-9.76,25.59,0,35.36.16.16.33.32.5.47-.23,0-.46-.02-.68-.02C11.16,61-.03,72.19-.03,86s11.19,25,25,25c.23,0,.46-.01.68-.02-.17.16-.33.31-.5.47-9.76,9.76-9.76,25.59,0,35.36,9.76,9.76,25.59,9.76,35.36,0,.16-.16.32-.33.47-.5,0,.23-.02.46-.02.69,0,13.81,11.19,25,25,25s25-11.19,25-25c0-.23-.01-.46-.02-.69.16.17.31.34.47.5,9.76,9.76,25.59,9.76,35.35,0,9.76-9.76,9.76-25.59,0-35.36-.16-.16-.33-.32-.5-.47.23,0,.46.02.69.02,13.81,0,25-11.19,25-25Z",
  },
  x = {
    key: "shape-2",
    d: "m63 39 7 14c1 3-3 6-5 3l-9-13a24 24 0 0 0-41 2l-1 1c-9 15 1 35 19 36l15 2c4 0 4 6 0 6l-15 1a25 25 0 0 0-19 37l1 1c9 15 30 16 41 2l9-13c2-3 6 0 5 3l-7 14c-7 16 5 34 23 34s30-18 23-34l-7-14c-1-3 3-6 5-3l9 13c11 14 32 13 41-2l1-1a25 25 0 0 0-19-37l-15-1c-4 0-4-6 0-6l15-2c18-1 28-21 19-36l-1-1c-9-15-30-16-41-2l-9 13c-2 3-6 0-5-3l7-14c7-16-5-35-23-35S56 23 63 39Z",
  },
  A = {
    key: "shape-3",
    d: "M86 0c3 21 30 28 43 12-8 19 12 39 31 31-16 13-9 40 12 43-21 3-28 30-12 43-19-8-39 12-31 31-13-16-40-9-43 12-3-21-30-28-43-12 8-19-12-39-31-31 16-13 9-40-12-43 21-3 28-30 12-43 19 8 39-12 31-31 13 16 40 9 43-12Z",
  },
  B = {
    key: "shape-4",
    d: "m87-1 8 59 40-45-25 54 57-16-50 32 57 17-59 1 39 45-51-32 9 59-25-54-25 54 8-59-50 32 38-45-59-1 57-17L6 51l57 16-24-54 39 45Z",
  },
  H = {
    key: "shape-5",
    d: "M79 12a9 9 0 0 1 15 0l10 18c2 4 6 6 10 5l20-6c7-2 13 4 11 10l-6 20c-1 4 0 8 4 10l18 10a9 9 0 0 1 0 15l-18 10c-4 2-5 6-4 10l6 20a9 9 0 0 1-11 11l-20-6c-4-1-8 0-10 4l-10 18a9 9 0 0 1-15 0l-10-18c-2-4-6-5-10-4l-20 6c-6 2-12-4-10-11l6-20c1-4-1-8-5-10L12 94a9 9 0 0 1 0-15l18-10c4-2 6-6 5-10l-6-20a8 8 0 0 1 10-10l20 6c4 1 8-1 10-5Z",
  },
  S = {
    key: "shape-6",
    d: "M86 7c33 0 14 52 14 52s31-45 50-21-31 44-31 44 54-5 47 25c-7 31-54 3-54 3s39 39 10 53c-30 14-36-40-36-40s-7 54-36 40c-28-14 10-53 10-53s-47 31-54-3c-8-33 47-25 47-25S3 65 22 38c18-27 49 21 49 21S53 7 86 7Z",
  },
  N = {
    key: "shape-7",
    d: "M86 1s-1 42 18 53 55-10 55-10-36 20-36 42 36 43 36 43-36-22-55-11-18 53-18 53 1-42-18-53-55 11-55 11 36-21 36-43-36-42-36-42 36 21 55 10S86 1 86 1Z",
  },
  T = {
    key: "shape-8",
    d: "M86 1c19 0 11 49 11 49s19-46 36-35-17 46-17 46 40-27 49-9c8 17-40 30-40 30s49-1 47 18c-3 19-50 4-50 4s42 26 29 40-44-23-44-23 22 44 3 50c-18 5-24-44-24-44s-6 49-24 44c-19-6 2-50 2-50s-31 38-43 23 29-40 29-40-47 15-50-4 47-18 47-18S-1 69 7 52s49 9 49 9-33-36-17-46 35 35 35 35S66 1 86 1Z",
  },
  I = {
    key: "shape-9",
    d: "m83 78-9-65h26L90 78l39-53 19 19-53 39 65-9v26L95 90l53 39-19 19-39-53 10 65H74l9-65-39 53-19-19 53-39-65 10V74l65 9-53-39 19-19Z",
  },
  P = {
    key: "shape-10",
    d: "M86 86S63 57 54 33c-4-9-8-22 0-25 9-4 15 8 18 17 10 25 14 61 14 61Zm0 0s23 29 33 53c3 9 7 22-1 25-9 4-14-8-18-17-10-25-14-61-14-61Zm15-61C90 50 86 86 86 86s23-28 33-53c4-9 8-21 0-25-8-3-15 9-18 17ZM86 86s-4 36-15 61c-3 8-10 21-18 17s-4-16 0-25c10-24 33-53 33-53s-29 23-53 33c-9 3-22 7-25-1-4-9 8-14 17-18 25-10 61-14 61-14s-36-4-61-15C17 68 5 61 8 53c4-8 16-4 25 0 25 10 53 33 53 33Zm53-32c-24 9-53 32-53 32s28 23 53 33c9 4 21 8 25 0s-9-15-17-18c-25-11-61-15-61-15s37-4 61-14c9-3 21-9 17-18-3-8-16-4-25 0Z",
  },
  W = {
    key: "shape-11",
    d: "M61 6h50v37l32-18 25 43-32 19 32 18-25 43-32-18v37H61v-37l-32 18-25-43 32-18L4 68l25-43 32 18Z",
  };
function $(t, l, v, e, r) {
  return (
    o(),
    s(
      "svg",
      {
        role: "img",
        class: "",
        viewBox: "0 0 640 100",
        preserveAspectRatio: "xMinYMin meet",
        fill: "none",
        xmlns: "",
        "aria-label": "",

        /onClick:
          l[0] || (l[0] = (...n) => r.logoClicked && r.logoClicked(...n)),
        onMouseenter: l[1] || (l[1] = (n) => t.$emit("hover", !0)),
        onMouseleave: l[2] || (l[2] = (n) => t.$emit("hover", !1)),
      },
      [
        L,
        a(
          "g",
          {
            transform: "translate(90 5) scale(0.53)",
            fill: "url(#--gradient-" + e.gradient + ")",
          },
          [
            p(
              k,
              { mode: "out-in", name: "" },
              {
                default: Z(() => [
                  e.shape === 0
                    ? (o(), s("path", V))
                    : e.shape === 1
                    ? (o(), s("path", E))
                    : e.shape === 2
                    ? (o(), s("path", x))
                    : e.shape === 3
                    ? (o(), s("path", A))
                    : e.shape === 4
                    ? (o(), s("path", B))
                    : e.shape === 5
                    ? (o(), s("path", H))
                    : e.shape === 6
                    ? (o(), s("path", S))
                    : e.shape === 7
                    ? (o(), s("path", N))
                    : e.shape === 8
                    ? (o(), s("path", T))
                    : e.shape === 9
                    ? (o(), s("path", I))
                    : e.shape === 10
                    ? (o(), s("path", P))
                    : e.shape === 11
                    ? (o(), s("path", W))
                    : C("", !0),
                ]),
                _: 1,
              }
            ),
          ],
          8,
          D
        ),
      ],
      32
    )
  );
}
const z = m(w, [["render", $]]);
const R = {
    components: { "": z, "part-grav-buttons": M },
    data() {
      return { logo: { hover: !1 } };
    },
    computed: {
      options() {
        return this.$api.options;
      },
    },
  },
  U = { class: "template-home_footer-play" },
  Y = { class: "" },//"template-home_footer-play_title" },
  j = { class: "" },//"--type-alttitle-play" },
  q = { class: "" },//"template-home_footer-play_middle" },
  J = ["innerHTML"],
  K = { class: "template-home_footer-play_bottom" },
  O = f(
    '<div class=""><span class="bg-pink"></span><span class="bg-blue"></span><span class="bg-green"></span><span class="bg-purple"></span><span class="bg-orange"></span><span class="bg-yellow"></span><span class="bg-red"></span></div>',
    1
  );
function Q(t, l, v, g, e, r) {
  const n = c(""),
    F = c("part-grav-buttons"),
    i = h("orphans"),
    u = h("nl2br");
  return (
    o(),
    s("section", U, [
      a("div", Y, [
        d((o(), s("p", j, [G("")])), [
          [i],
        ]),
      ]),
      a(
        "div",
        {
          class: b([
            "template-home_footer-play_top",
            { "--hover": e.logo.hover },
          ]),
        },
        [p(n, { onHover: l[0] || (l[0] = (y) => (e.logo.hover = y)) })],
        2
      ),
      a("div", q, [
        d(
          a(
            "p",
            {
              class: "--type-text-play --type-cms",
              innerHTML: r.options.strapline,
            },
            null,
            8,
            J
          ),
          [[i], [u]]
        ),
      ]),
      a("div", K, [p(F)]),
      O,
    ])
  );
}
const t1 = m(R, [["render", Q]]);
export { t1 as default };
