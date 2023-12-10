(window.webpackJsonp = window.webpackJsonp || []).push([
  [0, 5, 6, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  {
    446: function (t, e, o) {
      var content = o(450);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("b407ff8e", content, !0, { sourceMap: !1 });
    },
    447: function (t, e, o) {
      "use strict";
      o.r(e);
      o(266);
      var n = {
          components: {},
          props: {
            rotation: { required: !0, type: Number },
            position: { required: !0, type: Object },
            size: { required: !0, type: Number },
            preventDirection: { required: !1, type: Boolean, default: !1 },
          },
          data: function () {
            return { tl: null };
          },
          computed: {
            movement: function () {
              return "".concat(500 * Math.random());
            },
            capyPosition: function () {
              return {
                top: "".concat(this.position.top, "%"),
                left: "".concat(this.position.left, "%"),
              };
            },
          },
          mounted: function () {
            this.animate();
          },
          methods: {
            animate: function () {
              (this.tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".page-content",
                  pin: !1,
                  start: "top top",
                  end: "bottom top",
                  scrub: 1,
                },
              })),
                this.tl.to(this.$refs.capy, { y: this.movement });
            },
          },
        },
        r = (o(454), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "svg",
              {
                ref: "capy",
                staticClass: "astro-capy absolute",
                class: [
                  "rotate-" + t.rotation,
                  { flip: Math.random() < 0.3 && !t.preventDirection },
                ],
                style: [t.capyPosition, { height: t.size + "px" }],
                attrs: { viewBox: "0 0 200 246" },
              },
              [
                o("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M42.064 150.559h38.338V185.1H42.064zM45.83 61.043h17.504v17.262H45.83z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M61.996 45.838H79.5V63.1H61.996z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M77.01 30.79h31.07v17.387H77.01z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M107.103 30.79h46.95v17.387h-46.95z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M154.05 45.911h14.944V63.3H154.05z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M168.796 61.047h16.114v17.387h-16.114z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M183.886 76.811H200v77.106h-16.114z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M168.796 90.832h16.114v77.515h-16.114zM152.68 106.812h16.115v77.515H152.68z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    "fill-opacity": ".3",
                    d: "M107.914 182.035h46.05v17.368h-46.05z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M76.95 182.035h31.026v17.368H76.951z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#f8f9cc",
                    d: "M75.37 116.712h22.95v28.135H75.37z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    d: "M154.05 61.023V45.848H77.08v15.175H62.12v15.759H46.99v45.725h120.26v31.396h17.66V76.782h-16.08V61.023h-14.78Z",
                    "fill-opacity": ".1",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#016eb9",
                    d: "M62.183 152.247H91.48v16.092H62.183z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#016eb9",
                    d: "M76.931 168.034h77.04v16.29H76.93zM31.17 199.398h76.797v15.604H31.17z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#016eb9",
                    d: "M11.723 214.001h27.336v15.712H11.723zM62.185 212.316h15.64v17.398h-15.64zM92.076 212.316h15.886v17.398H92.076z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M60.256 107.036h93.795v15.472H60.256z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M60.246 120.944H77.17v32.035H60.246z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M76.94 138.244h91.89v30.098H76.94z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M93.2 122.047h75.626v18.943H93.2zM31.189 0h15.795v15.794H31.189zM31.189 30.82h15.795V76.78H31.189zM0 184.189h15.976v61.633H0zM31.191 152.977h15.795v92.844H31.191z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M14.974 168.035h16.744v46.97H14.974zM46.063 168.341h16.12v46.664h-16.12z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#229df8",
                    d: "M59.58 184.325h17.35V199.4H59.58zM46.68 92.036h15.294v60.942H46.679zM76.934 92.036h15.901v29.174H76.934z",
                  },
                }),
                t._v(" "),
                o("path", {
                  attrs: {
                    fill: "#fff",
                    d: "M31.193 76.778h15.802v76.197H31.193z",
                  },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "591c2d2e",
          null
        );
      e.default = component.exports;
    },
    448: function (t, e, o) {
      "use strict";
      o.r(e);
      o(90), o(91);
      var n = {
          components: {},
          props: { button: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            isExternal: function () {
              return "story" !== this.button.link.linktype;
            },
            link: function () {
              var link = "/";
              return (
                "story" === this.button.link.linktype &&
                  this.button.link &&
                  this.button.link.story &&
                  this.button.link.story.url &&
                  (link = {
                    path:
                      "/" === this.button.link.story.url
                        ? "/"
                        : "/".concat(this.button.link.story.url),
                    hash: this.button.link.anchor,
                  }),
                ("url" !== this.button.link.linktype &&
                  "asset" !== this.button.link.linktype) ||
                  (link = this.button.link.url),
                "email" === this.button.link.linktype &&
                  (link = "mailto:".concat(this.button.link.email)),
                link
              );
            },
          },
          methods: {},
        },
        r = o(3),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return t.isExternal
              ? o(
                  "a",
                  {
                    staticClass: "btn hover:scale-110 duration-200",
                    attrs: { href: t.link, target: "_blank" },
                  },
                  [
                    o("span", {
                      staticClass: "btn-text",
                      domProps: { innerHTML: t._s(t.button.text) },
                    }),
                    t._v(" "),
                    o("div", { staticClass: "btn-bg" }, [
                      o(
                        "svg",
                        {
                          staticClass: "btn-bg-border text-primary",
                          attrs: {
                            viewBox: "0 0 107 62",
                            preserveAspectRatio: "none",
                          },
                        },
                        [
                          o("path", {
                            attrs: {
                              fill: "transparent",
                              stroke: "currentColor",
                              "stroke-width": "3",
                              d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]
                )
              : o(
                  "nuxt-link",
                  {
                    staticClass: "btn hover:scale-110 duration-200",
                    attrs: { to: t.link },
                  },
                  [
                    o("span", {
                      staticClass: "btn-text",
                      domProps: { innerHTML: t._s(t.button.text) },
                    }),
                    t._v(" "),
                    o("div", { staticClass: "btn-bg" }, [
                      o(
                        "svg",
                        {
                          staticClass: "btn-bg-border text-primary",
                          attrs: {
                            viewBox: "0 0 107 62",
                            preserveAspectRatio: "none",
                          },
                        },
                        [
                          o("path", {
                            attrs: {
                              fill: "transparent",
                              stroke: "currentColor",
                              "stroke-width": "3",
                              d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]
                );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    449: function (t, e, o) {
      "use strict";
      o(446);
    },
    450: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".game-platform{position:relative;display:flex;align-items:center;justify-content:center}.game-platform .platform-icon{height:100%;width:100%}.game-platform .platform-icon svg{height:inherit;width:inherit}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    451: function (t, e, o) {
      var content = o(455);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("a5f376a0", content, !0, { sourceMap: !1 });
    },
    452: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: {},
          props: { platform: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {},
          methods: {},
        },
        r = (o(449), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "a",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.platform,
                    expression: "platform",
                  },
                ],
                staticClass: "game-platform",
                attrs: {
                  href: t.platform.link,
                  target: "_blank",
                  rel: "noreferer, noopener",
                },
              },
              [
                o("div", {
                  staticClass: "platform-icon",
                  domProps: { innerHTML: t._s(t.platform.platform_logo) },
                }),
                t._v(" "),
                o("p", { staticClass: "sr-only" }, [
                  t._v(t._s(t.platform.name)),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    453: function (t, e, o) {
      var content = o(461);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("254ce442", content, !0, { sourceMap: !1 });
    },
    454: function (t, e, o) {
      "use strict";
      o(451);
    },
    455: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".astro-capy.flip[data-v-591c2d2e]{transform:scaleX(-1)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    456: function (t, e, o) {
      var content = o(466);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("135bbbe0", content, !0, { sourceMap: !1 });
    },
    457: function (t, e, o) {
      var content = o(470);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("255e5c74", content, !0, { sourceMap: !1 });
    },
    460: function (t, e, o) {
      "use strict";
      o(453);
    },
    461: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".game-card[data-v-3fcabe34]{position:relative}.game-card .game-card-image[data-v-3fcabe34]{position:relative;z-index:10;display:block;height:0px;width:100%;transform-origin:bottom;overflow:hidden;transition-duration:300ms;padding-top:56.25%;-webkit-clip-path:url(#game-card-mask);clip-path:url(#game-card-mask)}.game-card .game-card-image .logo[data-v-3fcabe34]{max-height:7rem;transition-duration:300ms}.game-card .game-card-image .image[data-v-3fcabe34]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;transition-duration:300ms}@media(hover:hover){.game-card:hover .game-card-image[data-v-3fcabe34]{z-index:20}.game-card:hover .game-card-image[data-v-3fcabe34]{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform)}.game-card:hover .game-card-image .logo[data-v-3fcabe34]{--tw-scale-x:.9;--tw-scale-y:.9;transform:var(--tw-transform)}.game-card:hover .game-card-image .image[data-v-3fcabe34]{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform)}.game-card:hover .game-title[data-v-3fcabe34]{--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity))}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    462: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: { GamePlatform: o(452).default },
          props: { game: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            gameLink: function () {
              return "/".concat(this.game.full_slug);
            },
          },
          methods: {},
        },
        r = (o(460), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "article",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.game,
                    expression: "game",
                  },
                ],
                ref: "game",
                staticClass: "game-card",
              },
              [
                o(
                  "nuxt-link",
                  { staticClass: "game-card-image", attrs: { to: t.gameLink } },
                  [
                    o(
                      "div",
                      {
                        staticClass:
                          "game-card-logo absolute top-0 left-0 w-full h-full z-20 flex p-7",
                        class: t.game.content.logo_position,
                      },
                      [
                        o(
                          "div",
                          { staticClass: "logo-wrapper" },
                          [
                            t.game.content.logo && t.game.content.logo.filename
                              ? o("nuxt-img", {
                                  staticClass:
                                    "logo w-full h-full object-contain",
                                  attrs: {
                                    provider: "storyblok",
                                    width: "350",
                                    height: "350",
                                    loading: "lazy",
                                    fit: "in",
                                    alt: t.game.content.logo.alt,
                                    src: t.game.content.logo.filename,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ]
                    ),
                    t._v(" "),
                    t.game.content.featured_image &&
                    t.game.content.featured_image.filename
                      ? o("nuxt-img", {
                          staticClass: "image",
                          attrs: {
                            provider: "storyblok",
                            width: "400",
                            height: "300",
                            loading: "lazy",
                            fit: "in",
                            alt: t.game.content.featured_image.alt,
                            src: t.game.content.featured_image.filename,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                o(
                  "div",
                  {
                    staticClass:
                      "game-card-details flex items-center justify-between mt-2",
                  },
                  [
                    o("nuxt-link", { attrs: { to: t.gameLink } }, [
                      o(
                        "h1",
                        {
                          staticClass:
                            "game-title duration-300 text-white uppercase text-2xl tracking-tight",
                        },
                        [t._v(t._s(t.game.name))]
                      ),
                    ]),
                    t._v(" "),
                    t.game.content.platforms && t.game.content.platforms.length
                      ? o(
                          "div",
                          {
                            staticClass:
                              "game-platforms flex gap-3 items-center justify-end",
                          },
                          t._l(t.game.content.platforms, function (t) {
                            return o("GamePlatform", {
                              key: t._uid,
                              staticClass:
                                "h-6 text-primary opacity-60 hover:text-secondary hover:opacity-100 duration-200",
                              attrs: { platform: t },
                            });
                          }),
                          1
                        )
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "3fcabe34",
          null
        );
      e.default = component.exports;
    },
    465: function (t, e, o) {
      "use strict";
      o(456);
    },
    466: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".game-slide[data-v-4dba51c2]{position:relative;height:0px;width:100%;overflow:hidden;padding-top:150%}@media (min-width: 768px){.game-slide[data-v-4dba51c2]{padding-top:100%}}@media (min-width: 1024px){.game-slide[data-v-4dba51c2]{padding-top:56.25%}}@media (min-width: 1536px){.game-slide[data-v-4dba51c2]{padding-top:50%}}.game-slide .game-logo-wrapper[data-v-4dba51c2]{will-change:transform}.game-slide .platforms[data-v-4dba51c2]{position:relative;filter:drop-shadow(2px 2px 6px rgba(0,0,0,.3))}.game-slide .platforms .platforms-bg[data-v-4dba51c2]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(34, 157, 248, var(--tw-bg-opacity));-webkit-clip-path:url(#btn-shape-long);clip-path:url(#btn-shape-long)}.game-slide .container[data-v-4dba51c2]{position:absolute;top:0px;left:0px;right:0px;z-index:20;display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center}@media (min-width: 1280px){.game-slide .container[data-v-4dba51c2]{justify-content:flex-end}.game-slide .container[data-v-4dba51c2]{padding-bottom:15rem}}.game-slide .slide-bg[data-v-4dba51c2]{pointer-events:none;position:absolute;top:0px;left:0px;z-index:0;margin-top:2.5rem;height:100%;width:100%;--tw-scale-x:1.5;--tw-scale-y:1.5;transform:var(--tw-transform);transition-duration:500ms}.slick-active .game-slide .slide-bg[data-v-4dba51c2]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    467: function (t, e, o) {
      var content = o(490);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("cc79743e", content, !0, { sourceMap: !1 });
    },
    468: function (t, e, o) {
      var content = o(492);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("fc6986de", content, !0, { sourceMap: !1 });
    },
    469: function (t, e, o) {
      "use strict";
      o(457);
    },
    470: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".community[data-v-399a8650]{margin-top:-5rem;padding-top:7rem;padding-bottom:20rem}@media (min-width: 1024px){.community[data-v-399a8650]{padding-top:13rem;padding-bottom:13rem}}.community .container[data-v-399a8650]{position:relative;z-index:20}.community .community-graphic[data-v-399a8650]{position:absolute;bottom:0px;right:0px;z-index:10;height:100%;width:100%}.community .community-graphic--main[data-v-399a8650]{display:flex;align-items:flex-end;justify-content:flex-end;overflow:hidden}.community .input[data-v-399a8650]{-webkit-clip-path:url(#btn-shape-long);clip-path:url(#btn-shape-long)}.community .section-bg[data-v-399a8650]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}.community .section-bg .bg-image-wrapper[data-v-399a8650]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.community .section-bg .image[data-v-399a8650]{opacity:.06}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    471: function (t, e, o) {
      var content = o(494);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("59f47474", content, !0, { sourceMap: !1 });
    },
    472: function (t, e, o) {
      var content = o(496);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("d630747c", content, !0, { sourceMap: !1 });
    },
    473: function (t, e, o) {
      var content = o(498);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("0cabef72", content, !0, { sourceMap: !1 });
    },
    474: function (t, e, o) {
      var content = o(500);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("cd72bc48", content, !0, { sourceMap: !1 });
    },
    475: function (t, e, o) {
      var content = o(502);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("7913e394", content, !0, { sourceMap: !1 });
    },
    476: function (t, e, o) {
      var content = o(504);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("7a533d15", content, !0, { sourceMap: !1 });
    },
    477: function (t, e, o) {
      var content = o(506);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("0e555cf2", content, !0, { sourceMap: !1 });
    },
    485: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(517),
        r = o(518),
        l = o(487),
        c = o(519),
        d = o(520),
        m = o(521),
        f = o(522),
        h = o(523),
        v = o(524),
        x = o(525),
        k = {
          components: {
            GamesSlider: n.default,
            FeaturedGames: r.default,
            CommunityBlock: l.default,
            PageIntro: c.default,
            PageHero: d.default,
            CentralText: m.default,
            FeaturedText: f.default,
            GamesListing: h.default,
            ContactBlock: v.default,
            StandardContent: x.default,
          },
          props: { blok: { required: !0, type: Object } },
        },
        _ = (o(528), o(3)),
        component = Object(_.a)(
          k,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              { staticClass: "page-components" },
              t._l(t.blok.body, function (t) {
                return o(t.component.replace("_", "-"), {
                  key: t._uid,
                  tag: "component",
                  attrs: { blok: t },
                });
              }),
              1
            );
          },
          [],
          !1,
          null,
          "27d02d6a",
          null
        );
      e.default = component.exports;
    },
    486: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: { GamePlatform: o(452).default },
          props: { game: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            gameLink: function () {
              return "/".concat(this.game.full_slug);
            },
          },
          methods: {
            openTrailer: function () {
              this.$store.commit("trailer/toggleTrailer", {
                trailer: this.game.content.trailer_embed,
              });
            },
          },
        },
        r = (o(465), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "article",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.game,
                    expression: "game",
                  },
                ],
                ref: "section",
                staticClass: "game-slide",
              },
              [
                o(
                  "div",
                  { staticClass: "container" },
                  [
                    o(
                      "nuxt-link",
                      {
                        staticClass:
                          "game-logo-wrapper hover:scale-110 duration-200 ease-in-out block px-16 md:px-0",
                        attrs: { to: t.gameLink },
                      },
                      [
                        t.game.content.logo && t.game.content.logo.filename
                          ? o("nuxt-img", {
                              staticClass:
                                "game-logo w-full h-full object-contain block",
                              attrs: {
                                provider: "storyblok",
                                width: "600",
                                height: "240",
                                loading: "lazy",
                                fit: "in",
                                alt: t.game.content.logo.alt,
                                src: t.game.content.logo.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    o(
                      "div",
                      {
                        staticClass:
                          "game-extras mt-6 md:mt-10 xl:mt-28 w-full flex flex-wrap items-center justify-center gap-2",
                      },
                      [
                        t.game.content.trailer_embed
                          ? o(
                              "button",
                              {
                                staticClass:
                                  "btn btn--round p-3 md:p-5 hover:scale-110 duration-200",
                                on: { click: t.openTrailer },
                              },
                              [t._m(0)]
                            )
                          : t._e(),
                        t._v(" "),
                        o(
                          "nuxt-link",
                          {
                            staticClass:
                              "btn btn--shaped hover:scale-110 duration-200 py-3 md:py-5 px-10",
                            attrs: { to: t.gameLink },
                          },
                          [
                            o("span", { staticClass: "btn-text" }, [
                              t._v("More"),
                            ]),
                            t._v(" "),
                            o("div", { staticClass: "btn-bg" }, [
                              o(
                                "svg",
                                {
                                  staticClass: "btn-bg-border text-primary",
                                  attrs: {
                                    viewBox: "0 0 107 62",
                                    preserveAspectRatio: "none",
                                  },
                                },
                                [
                                  o("path", {
                                    attrs: {
                                      fill: "transparent",
                                      stroke: "currentColor",
                                      "stroke-width": "3",
                                      d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                                    },
                                  }),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        t.game.content.platforms &&
                        t.game.content.platforms.length
                          ? o(
                              "div",
                              {
                                staticClass:
                                  "platforms flex gap-5 items-center justify-center py-3 px-10",
                              },
                              [
                                o(
                                  "p",
                                  {
                                    staticClass:
                                      "relative z-10 text-white uppercase font-secondary text-2xl",
                                  },
                                  [t._v("Buy Now!")]
                                ),
                                t._v(" "),
                                t._l(t.game.content.platforms, function (t) {
                                  return o("GamePlatform", {
                                    key: t._uid,
                                    staticClass:
                                      "relative z-10 text-white hover:text-secondary duration-200 h-9",
                                    attrs: { platform: t },
                                  });
                                }),
                                t._v(" "),
                                o("div", { staticClass: "platforms-bg" }),
                              ],
                              2
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                o(
                  "div",
                  { staticClass: "slide-bg" },
                  [
                    t.game.content.featured_image &&
                    t.game.content.featured_image.filename
                      ? o("nuxt-img", {
                          staticClass:
                            "image block w-full h-full object-cover object-center",
                          attrs: {
                            provider: "storyblok",
                            width: "1920",
                            height: "1080",
                            loading: "lazy",
                            fit: "in",
                            alt: t.game.content.featured_image.alt,
                            src: t.game.content.featured_image.filename,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("span", { staticClass: "btn-text" }, [
                e("i", { staticClass: "fas fa-play" }),
              ]);
            },
          ],
          !1,
          null,
          "4dba51c2",
          null
        );
      e.default = component.exports;
    },
    487: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(118),
        r = o(45),
        l = {
          components: { RichText: n.default, SocialAccount: r.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { tl: null, st: null, bg: null, bgSt: null };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 50%",
                  pin: !1,
                  scrub: !1,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.graphic,
                  { x: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.title,
                  { y: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.text,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.tl.from(
                  this.$refs.social,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.tl.from(
                  this.$refs.newsletter,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        c = (o(469), o(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section community",
              },
              [
                o(
                  "div",
                  {
                    staticClass:
                      "container flex flex-col lg:flex-row lg:items-stretch",
                  },
                  [
                    o(
                      "div",
                      {
                        staticClass:
                          "community-content relative z-10 w-full lg:w-1/2 xl:w-1/3",
                      },
                      [
                        o("div", {
                          ref: "title",
                          staticClass:
                            "title text-body text-7xl sm:text-8xl tracking-tighter",
                          domProps: {
                            innerHTML: t._s(t.$md.render(t.blok.title)),
                          },
                        }),
                        t._v(" "),
                        o(
                          "div",
                          { ref: "text", staticClass: "text-wrapper" },
                          [
                            o("RichText", {
                              staticClass:
                                "text-body-light font-primary font-normal text-base md:text-lg leading-8 mt-7 max-w-xl pr-12",
                              attrs: { blok: t.blok.text },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        t.blok.social_links && t.blok.social_links.length
                          ? o(
                              "div",
                              {
                                ref: "social",
                                staticClass: "social-links mt-7",
                              },
                              [
                                o(
                                  "ul",
                                  {
                                    staticClass:
                                      "menu flex items-center items-end gap-5 h-full",
                                  },
                                  t._l(t.blok.social_links, function (t) {
                                    return o(
                                      "li",
                                      { key: t._uid },
                                      [
                                        o("SocialAccount", {
                                          staticClass:
                                            "text-5xl text-primary-theme hover:text-secondary",
                                          attrs: { account: t },
                                        }),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                ),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        o("div", { ref: "newsletter" }, [
                          o("div", { attrs: { id: "sib-form-container" } }, [
                            o(
                              "div",
                              {
                                staticClass: "sib-form-message-panel",
                                staticStyle: {
                                  "font-size": "16px",
                                  "text-align": "left",
                                  color: "#661d1d",
                                  "background-color": "#ffeded",
                                  "border-radius": "3px",
                                  "border-color": "#ff4949",
                                  "max-width": "540px",
                                },
                                attrs: { id: "error-message" },
                              },
                              [
                                o(
                                  "div",
                                  {
                                    staticClass:
                                      "sib-form-message-panel__text sib-form-message-panel__text--center",
                                  },
                                  [
                                    o(
                                      "svg",
                                      {
                                        staticClass:
                                          "sib-icon sib-notification__icon",
                                        attrs: { viewBox: "0 0 512 512" },
                                      },
                                      [
                                        o("path", {
                                          attrs: {
                                            d: "M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z",
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "span",
                                      {
                                        staticClass:
                                          "sib-form-message-panel__inner-text",
                                      },
                                      [
                                        t._v(
                                          "\n                       OH NO!  Your subscription could not be saved. Please try again.\n                   "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            o("div"),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "sib-form-message-panel",
                                staticStyle: {
                                  "font-size": "16px",
                                  "text-align": "left",
                                  color: "#085229",
                                  "background-color": "#e7faf0",
                                  "border-radius": "3px",
                                  "border-color": "#13ce66",
                                  "max-width": "540px",
                                },
                                attrs: { id: "success-message" },
                              },
                              [
                                o(
                                  "div",
                                  {
                                    staticClass:
                                      "sib-form-message-panel__text sib-form-message-panel__text--center",
                                  },
                                  [
                                    o(
                                      "svg",
                                      {
                                        staticClass:
                                          "sib-icon sib-notification__icon",
                                        attrs: { viewBox: "0 0 512 512" },
                                      },
                                      [
                                        o("path", {
                                          attrs: {
                                            d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z",
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "span",
                                      {
                                        staticClass:
                                          "sib-form-message-panel__inner-text",
                                      },
                                      [
                                        t._v(
                                          "\n                       Your subscription has been successful.  HOORAY VIDEO GAMES!\n                   "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticStyle: {
                                  background: "none",
                                  margin: "0",
                                  padding: "0",
                                },
                                attrs: { id: "sib-container" },
                              },
                              [
                                o(
                                  "form",
                                  {
                                    attrs: {
                                      id: "sib-form",
                                      method: "POST",
                                      action:
                                        "https://de4407ac.sibforms.com/serve/MUIEAAIiXDTNswaUo9T0NKvz1HfKcU-ndH6SEvo5iNd74HZ0DIrTMAL-gRTstAsezj38OMXb4Zc9ddNIFau9aFTnXFVm2uV4QxmRzmg8LpoC7s00DSv5PsGPaNW96WJ6a51QTWhScEQoWzss_SwjwuVPc9srBfKSlBUeNYbbv4UA8fiS5XTPdfALaRhjS-_8omKdHNUURBm44iCu",
                                      "data-type": "subscription",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      {
                                        staticClass:
                                          "form-row flex items-stretch mt-1 w-full",
                                      },
                                      [
                                        o("input", {
                                          staticClass:
                                            "input w-full px-4 py-1 bg-input-bg text-input-text placeholder-input-text placeholder-opacity-75 font-secondary uppercase text-base md:text-2xl",
                                          attrs: {
                                            type: "email",
                                            id: "EMAIL",
                                            name: "EMAIL",
                                            autocomplete: "off",
                                            required: "",
                                            placeholder:
                                              "e.g. yourname@example.com",
                                          },
                                        }),
                                        t._v(" "),
                                        o(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn--shaped relative -ml-8 py-6 px-6 md:px-12 flex-shrink-0",
                                            attrs: {
                                              type: "submit",
                                              form: "sib-form",
                                            },
                                          },
                                          [
                                            o(
                                              "span",
                                              { staticClass: "btn-text" },
                                              [t._v("Sign up")]
                                            ),
                                            t._v(" "),
                                            o(
                                              "span",
                                              { staticClass: "btn-bg" },
                                              [
                                                o(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "btn-bg-border text-primary-theme",
                                                    attrs: {
                                                      viewBox: "0 0 107 62",
                                                      preserveAspectRatio:
                                                        "none",
                                                    },
                                                  },
                                                  [
                                                    o("path", {
                                                      attrs: {
                                                        fill: "transparent",
                                                        stroke: "currentColor",
                                                        "stroke-width": "3",
                                                        d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o("input", {
                                      staticClass: "input--hidden",
                                      attrs: {
                                        type: "text",
                                        name: "email_address_check",
                                        value: "",
                                      },
                                    }),
                                    t._v(" "),
                                    o("input", {
                                      attrs: {
                                        type: "hidden",
                                        name: "locale",
                                        value: "en",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                t.blok.newsletter_text
                                  ? o("RichText", {
                                      staticClass: "standard-text small-text",
                                      attrs: { blok: t.blok.newsletter_text },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                t.blok.graphic && t.blok.graphic.filename
                  ? o(
                      "div",
                      { ref: "graphic", staticClass: "community-graphic" },
                      [
                        o(
                          "div",
                          {
                            staticClass:
                              "community-graphic--main w-full h-full absolute z-0",
                          },
                          [
                            o("nuxt-img", {
                              staticClass:
                                "graphic relative opacity-40 md:opacity-100 block h-full object-contain object-right-bottom lg:object-right-top w-full sm:w-8/12 md:w-5/12 lg:w-10/12 3xl:w-9/12 -bottom-32 md:-bottom-10 xl:bottom-0",
                              attrs: {
                                provider: "storyblok",
                                width: "1600",
                                height: "1600",
                                loading: "lazy",
                                fit: "in",
                                alt: t.blok.graphic.alt,
                                src: t.blok.graphic.filename,
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                  : t._e(),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "399a8650",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RichText: o(118).default,
        SocialAccount: o(45).default,
      });
    },
    489: function (t, e, o) {
      "use strict";
      o(467);
    },
    490: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".games-slider{position:relative}.games-slider .slick-slide{height:100%}.games-slider .game-slide-wrapper{height:100%;width:100%;display:block!important}.games-slider .slick-arrow{position:absolute;z-index:20;top:50%;transform:translateY(-50%)}.games-slider .slick-arrow .icon{transition-duration:200ms}.games-slider .slick-arrow.slick-prev{left:0.75rem}@media (min-width: 768px){.games-slider .slick-arrow.slick-prev{left:2.5rem}}.games-slider .slick-arrow.slick-next{right:0.75rem}@media (min-width: 768px){.games-slider .slick-arrow.slick-next{right:2.5rem}}@media(hover:hover){.games-slider .slick-arrow:hover .icon{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}.games-slider .slick-arrow:hover .icon{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity))}}.games-slider .slick-dots{position:absolute;bottom:6rem;left:0px;z-index:30;width:100%;align-items:center;justify-content:center;gap:0.5rem}@media (min-width: 768px){.games-slider .slick-dots{bottom:7rem}}@media (min-width: 1280px){.games-slider .slick-dots{bottom:10rem}}.games-slider .slick-dots{display:flex!important}.games-slider .slick-dots li{display:block}.games-slider .slick-dots li button{display:block;height:1rem;width:1rem;border-radius:9999px;border-width:4px;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));color:transparent;transition-duration:200ms;text-indent:-9999px}@media(hover:hover){.games-slider .slick-dots li button:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}}.games-slider .slick-dots li.slick-active{pointer-events:none}.games-slider .slick-dots li.slick-active button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    491: function (t, e, o) {
      "use strict";
      o(468);
    },
    492: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".featured-games[data-v-e943b076]{margin-top:-7rem;padding-top:15rem;padding-bottom:10rem}.featured-games .container[data-v-e943b076]{position:relative;top:0px;z-index:20;margin-top:-20rem}.featured-games .section-bg[data-v-e943b076]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-2);clip-path:url(#section-mask-2)}.featured-games .section-bg .bg-image-wrapper[data-v-e943b076]{position:absolute;left:0px;z-index:0;width:100%;top:-100px;height:calc(100% + 200px)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    493: function (t, e, o) {
      "use strict";
      o(471);
    },
    494: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".page-intro[data-v-c13a4bc8]{margin-top:-6rem;padding-top:8rem;padding-bottom:15rem}@media (min-width: 1024px){.page-intro[data-v-c13a4bc8]{padding-bottom:16rem}}.page-intro .container[data-v-c13a4bc8]{position:relative;z-index:20}.page-intro .graphic[data-v-c13a4bc8]{filter:drop-shadow(-4px -4px white) drop-shadow(4px 4px white) drop-shadow(4px -4px white) drop-shadow(-4px 4px white)}@media (min-width: 1024px){.page-intro .graphic[data-v-c13a4bc8]{filter:drop-shadow(-10px -10px white) drop-shadow(10px 10px white) drop-shadow(10px -10px white) drop-shadow(-10px 10px white)}}.page-intro .section-bg[data-v-c13a4bc8]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}.page-intro .section-bg .bg-image-wrapper[data-v-c13a4bc8]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.page-intro .section-bg .image[data-v-c13a4bc8]{opacity:.06}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    495: function (t, e, o) {
      "use strict";
      o(472);
    },
    496: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".page-hero[data-v-6bc8f428]{height:0px;width:100%;padding-top:80%}@media (min-width: 1024px){.page-hero[data-v-6bc8f428]{padding-top:56.25%}}@media (min-width: 1536px){.page-hero[data-v-6bc8f428]{padding-top:40%}}.page-hero .section-bg[data-v-6bc8f428]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-2);clip-path:url(#section-mask-2)}.page-hero .section-bg .bg-image-wrapper[data-v-6bc8f428]{position:absolute;left:0px;z-index:0;width:100%;top:-100px;height:calc(100% + 200px)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    497: function (t, e, o) {
      "use strict";
      o(473);
    },
    498: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".central-text[data-v-4722b617]{margin-top:-6rem;padding-top:10rem;padding-bottom:13rem}.central-text .container[data-v-4722b617]{position:relative;z-index:20}.central-text .section-bg[data-v-4722b617]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-2);clip-path:url(#section-mask-2)}.central-text .section-bg .bg-image-wrapper[data-v-4722b617]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.central-text .section-bg .image[data-v-4722b617]{opacity:.06}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    499: function (t, e, o) {
      "use strict";
      o(474);
    },
    500: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".featured-text[data-v-1e038bd2]{margin-top:-6rem;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity));padding-top:10rem;padding-bottom:10rem}@media (min-width: 1024px){.featured-text[data-v-1e038bd2]{padding-top:15rem;padding-bottom:15rem}}.featured-text[data-v-1e038bd2]{-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}.featured-text .container[data-v-1e038bd2]{position:relative;z-index:20}.featured-text .section-bg[data-v-1e038bd2]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity))}.featured-text .section-bg .bg-image-wrapper[data-v-1e038bd2]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    501: function (t, e, o) {
      "use strict";
      o(475);
    },
    502: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".games-listing[data-v-ea5bb11e]{margin-top:-5rem;padding-top:5rem;padding-bottom:10rem}@media (min-width: 768px){.games-listing[data-v-ea5bb11e]{padding-top:18rem}}.games-listing .container[data-v-ea5bb11e]{position:relative;top:0px;z-index:20}@media (min-width: 768px){.games-listing .container[data-v-ea5bb11e]{margin-top:-18rem}}@media (min-width: 1280px){.games-listing .container[data-v-ea5bb11e]{margin-top:-20rem}}.games-listing .section-bg[data-v-ea5bb11e]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity))}@media (min-width: 768px){.games-listing .section-bg[data-v-ea5bb11e]{-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}}.games-listing .section-bg .bg-image-wrapper[data-v-ea5bb11e]{position:absolute;left:0px;z-index:0;width:100%;top:-100px;height:calc(100% + 200px)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    503: function (t, e, o) {
      "use strict";
      o(476);
    },
    504: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.contact .contact-main[data-v-4d72ed53]{position:relative;z-index:10;padding-top:10rem;padding-bottom:20rem}@media (min-width: 768px){.contact .contact-main[data-v-4d72ed53]{padding-top:15rem;padding-bottom:15rem}}.contact .contact-extra[data-v-4d72ed53]{position:relative;z-index:0;padding-top:1.25rem;padding-bottom:10rem}@media (min-width: 1280px){.contact .contact-extra .extra-block[data-v-4d72ed53]{position:relative}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{content:""}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{position:absolute}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{top:0px}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{left:-4rem}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{height:100%}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{--tw-bg-opacity:1;background-color:rgba(77, 79, 92, var(--tw-bg-opacity))}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{opacity:0.1}.contact .contact-extra .extra-block[data-v-4d72ed53]:not(:nth-child(2)):before{width:2px}}.contact .container[data-v-4d72ed53]{position:relative;z-index:20;height:100%;justify-content:center}.contact .input[data-v-4d72ed53]{-webkit-clip-path:url(#btn-shape-long);clip-path:url(#btn-shape-long)}.contact .contact-graphic[data-v-4d72ed53]{position:absolute;bottom:0px;right:0px;z-index:10;height:100%;width:100%}.contact .contact-graphic--main[data-v-4d72ed53]{display:flex;align-items:flex-end;justify-content:flex-end;overflow:hidden;-webkit-clip-path:url(#contact-mask);clip-path:url(#contact-mask)}.contact .contact-graphic--overlap[data-v-4d72ed53]{display:flex;align-items:flex-end;justify-content:flex-end}.contact .section-bg[data-v-4d72ed53]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity));-webkit-clip-path:url(#contact-mask);clip-path:url(#contact-mask)}.contact .section-bg .bg-image-wrapper[data-v-4d72ed53]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.contact .section-bg .image[data-v-4d72ed53]{opacity:.06}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    505: function (t, e, o) {
      "use strict";
      o(477);
    },
    506: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".standard-content[data-v-466c8a70]:first-child{padding-top:10rem}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    514: function (t, e, o) {
      var content = o(529);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("ad203478", content, !0, { sourceMap: !1 });
    },
    517: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(159),
        r = o.n(n),
        l = (o(267), o(486)),
        c = {
          components: { VueSlickCarousel: r.a, GameSlide: l.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !0,
                draggable: !1,
                infinite: !0,
                fade: !0,
                focusOnSelect: !0,
              },
            };
          },
          mounted: function () {},
          computed: {},
          methods: {},
        },
        d = (o(489), o(3)),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section games-slider",
              },
              [
                t.blok.games && t.blok.games.length
                  ? o(
                      "VueSlickCarousel",
                      t._b(
                        {
                          ref: "carousel",
                          staticClass: "carousel w-full",
                          scopedSlots: t._u(
                            [
                              {
                                key: "prevArrow",
                                fn: function (t) {
                                  return [
                                    o("div", { staticClass: "custom-arrow" }, [
                                      o(
                                        "svg",
                                        {
                                          staticClass: "text-white icon",
                                          attrs: {
                                            width: "21",
                                            height: "42",
                                            viewBox: "0 0 21 42",
                                          },
                                        },
                                        [
                                          o("path", {
                                            attrs: {
                                              "fill-rule": "evenodd",
                                              fill: "currentColor",
                                              d: "m20.814 14.441-6.343 6.37H.546L20.814.455v13.986Zm0 12.767v13.986L.546 20.838h13.925l6.343 6.37Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ];
                                },
                              },
                              {
                                key: "nextArrow",
                                fn: function (t) {
                                  return [
                                    o("div", { staticClass: "custom-arrow" }, [
                                      o(
                                        "svg",
                                        {
                                          staticClass: "text-white icon",
                                          attrs: {
                                            width: "21",
                                            height: "42",
                                            viewBox: "0 0 21 42",
                                          },
                                        },
                                        [
                                          o("path", {
                                            attrs: {
                                              "fill-rule": "evenodd",
                                              fill: "currentColor",
                                              d: "m.185 14.441 6.343 6.37h13.925L.185.455v13.986Zm0 12.767v13.986l20.268-20.356H6.528l-6.343 6.37Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ];
                                },
                              },
                            ],
                            null,
                            !1,
                            2250960134
                          ),
                        },
                        "VueSlickCarousel",
                        t.settings,
                        !1
                      ),
                      [
                        t._v(" "),
                        t._v(" "),
                        t._l(t.blok.games, function (t) {
                          return o(
                            "div",
                            { key: t.uuid, staticClass: "game-slide-wrapper" },
                            [o("GameSlide", { attrs: { game: t } })],
                            1
                          );
                        }),
                      ],
                      2
                    )
                  : t._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    518: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(462),
        r = {
          components: { AstroCapy: o(447).default, GameCard: n.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {
              tl: null,
              st: null,
              bg: null,
              bgSt: null,
              rotation: [0, 1, 2, 3, 6, 12, 45],
            };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            getRandomInt: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            },
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 25%",
                  pin: !1,
                  scrub: !0,
                  once: !0,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.game,
                  { y: 200, duration: 0.8, stagger: 0.1 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.button,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        l = (o(491), o(3)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section featured-games",
              },
              [
                o("div", { staticClass: "container" }, [
                  o(
                    "div",
                    {
                      staticClass:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
                    },
                    t._l(t.blok.games, function (t) {
                      return o(
                        "div",
                        {
                          key: t.uuid,
                          ref: "game",
                          refInFor: !0,
                          staticClass: "game-card-wrapper",
                        },
                        [o("GameCard", { attrs: { game: t } })],
                        1
                      );
                    }),
                    0
                  ),
                  t._v(" "),
                  o(
                    "div",
                    {
                      ref: "button",
                      staticClass: "flex items-center justify-center mt-16",
                    },
                    [
                      o(
                        "nuxt-link",
                        {
                          staticClass:
                            "btn btn--shaped py-5 px-12 hover:scale-110 duration-200",
                          attrs: { to: "/games" },
                        },
                        [
                          o("span", { staticClass: "btn-text" }, [
                            t._v("View All"),
                          ]),
                          t._v(" "),
                          o("div", { staticClass: "btn-bg" }, [
                            o(
                              "svg",
                              {
                                staticClass: "btn-bg-border text-primary",
                                attrs: {
                                  viewBox: "0 0 107 62",
                                  preserveAspectRatio: "none",
                                },
                              },
                              [
                                o("path", {
                                  attrs: {
                                    fill: "transparent",
                                    stroke: "currentColor",
                                    "stroke-width": "3",
                                    d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { staticClass: "absolute z-10 top-0 left-0 w-full h-full" },
                    t._l(Number(t.blok.capy_number), function (i) {
                      return o("AstroCapy", {
                        key: "capy-" + i,
                        attrs: {
                          position: {
                            top: t.getRandomInt(0, 100),
                            left: t.getRandomInt(0, 100),
                          },
                          size: t.getRandomInt(40, 80),
                          rotation:
                            t.rotation[
                              Math.floor(Math.random() * t.rotation.length)
                            ],
                        },
                      });
                    }),
                    1
                  ),
                  t._v(" "),
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "e943b076",
          null
        );
      e.default = component.exports;
      installComponents(component, { AstroCapy: o(447).default });
    },
    519: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(118),
        r = o(448),
        l = {
          components: { RichText: n.default, AppButton: r.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { tl: null, st: null, bg: null, bgSt: null };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 50%",
                  pin: !1,
                  scrub: !1,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.graphic,
                  { x: -200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.title,
                  { y: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.text,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.tl.from(
                  this.$refs.buttons,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        c = (o(493), o(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section page-intro",
              },
              [
                o(
                  "div",
                  {
                    staticClass:
                      "container flex flex-col lg:flex-row justify-center gap-12",
                  },
                  [
                    o(
                      "div",
                      {
                        ref: "graphic",
                        staticClass:
                          "page-intro-graphic relative w-full lg:w-1/2",
                      },
                      [
                        t.blok.graphic && t.blok.graphic.filename
                          ? o("nuxt-img", {
                              staticClass:
                                "graphic block relative lg:absolute -mt-24 lg:mt-0 lg:-top-32 right-0 w-40 lg:w-auto",
                              attrs: {
                                provider: "storyblok",
                                width: "550",
                                height: "1000",
                                loading: "lazy",
                                fit: "in",
                                alt: t.blok.graphic.alt,
                                src: t.blok.graphic.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    o(
                      "div",
                      { staticClass: "page-intro-content w-full lg:w-1/2" },
                      [
                        t.blok.title
                          ? o("div", {
                              ref: "title",
                              staticClass:
                                "title text-body text-5xl sm:text-6xl tracking-tight",
                              domProps: {
                                innerHTML: t._s(t.$md.render(t.blok.title)),
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        t.blok.text
                          ? o(
                              "div",
                              { ref: "text", staticClass: "text-wrapper" },
                              [
                                o("RichText", {
                                  staticClass:
                                    "text-body-light font-primary font-normal text-base md:text-lg leading-8 mt-7 max-w-xl pr-12",
                                  attrs: { blok: t.blok.text },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        t.blok.buttons && t.blok.buttons.length
                          ? o(
                              "div",
                              {
                                ref: "buttons",
                                staticClass:
                                  "flex items-center justify-start mt-5 gap-6 relative",
                              },
                              t._l(t.blok.buttons, function (button) {
                                return o("AppButton", {
                                  key: button._uid,
                                  staticClass: "btn--shaped py-5 px-10",
                                  attrs: { button: button },
                                });
                              }),
                              1
                            )
                          : t._e(),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "c13a4bc8",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RichText: o(118).default,
        AppButton: o(448).default,
      });
    },
    520: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: { AstroCapy: o(447).default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { st: null, bg: null, rotation: [0, 1, 2, 3, 6, 12, 45] };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            getRandomInt: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            },
            animate: function () {
              (this.bg = gsap.timeline()),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        r = (o(495), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section page-hero",
              },
              [
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { staticClass: "absolute z-10 top-0 left-0 w-full h-full" },
                    t._l(Number(t.blok.capy_number), function (i) {
                      return o("AstroCapy", {
                        key: "capy-" + i,
                        attrs: {
                          position: {
                            top: t.getRandomInt(0, 100),
                            left: t.getRandomInt(0, 100),
                          },
                          size: t.getRandomInt(40, 80),
                          rotation:
                            t.rotation[
                              Math.floor(Math.random() * t.rotation.length)
                            ],
                        },
                      });
                    }),
                    1
                  ),
                  t._v(" "),
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "2200",
                              height: "1200",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "6bc8f428",
          null
        );
      e.default = component.exports;
      installComponents(component, { AstroCapy: o(447).default });
    },
    521: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(118),
        r = o(448),
        l = o(447),
        c = {
          components: {
            RichText: n.default,
            AppButton: r.default,
            AstroCapy: l.default,
          },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { tl: null, st: null, bg: null, bgSt: null };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 50%",
                  pin: !1,
                  scrub: !1,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.graphic,
                  { x: -200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.title,
                  { y: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.text,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.tl.from(
                  this.$refs.buttons,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        d = (o(497), o(3)),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section central-text",
              },
              [
                o(
                  "div",
                  { staticClass: "container" },
                  [
                    o("AstroCapy", {
                      attrs: {
                        position: { top: -155, left: 10 },
                        size: 260,
                        rotation: 0,
                        preventDirection: "",
                      },
                    }),
                    t._v(" "),
                    o(
                      "div",
                      {
                        staticClass:
                          "central-text-content text-center flex flex-col items-center justify-center",
                      },
                      [
                        t.blok.title
                          ? o(
                              "h1",
                              {
                                ref: "title",
                                staticClass:
                                  "title text-body text-6xl sm:text-8xl tracking-tight",
                              },
                              [t._v(t._s(t.blok.title))]
                            )
                          : t._e(),
                        t._v(" "),
                        t.blok.text
                          ? o(
                              "div",
                              { ref: "text", staticClass: "text-wrapper" },
                              [
                                o("RichText", {
                                  staticClass:
                                    "text-body-light font-primary font-normal text-base md:text-lg leading-8 mt-7 max-w-5xl",
                                  attrs: { blok: t.blok.text },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        t.blok.buttons && t.blok.buttons.length
                          ? o(
                              "div",
                              {
                                ref: "buttons",
                                staticClass:
                                  "flex items-center justify-start mt-5 gap-6 relative",
                              },
                              t._l(t.blok.buttons, function (button) {
                                return o("AppButton", {
                                  key: button._uid,
                                  staticClass: "btn--shaped py-5 px-10",
                                  attrs: { button: button },
                                });
                              }),
                              1
                            )
                          : t._e(),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "4722b617",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        AstroCapy: o(447).default,
        RichText: o(118).default,
        AppButton: o(448).default,
      });
    },
    522: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(118),
        r = o(448),
        l = {
          components: { RichText: n.default, AppButton: r.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { tl: null, st: null, bg: null, bgSt: null };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 50%",
                  pin: !1,
                  scrub: !1,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.graphic,
                  { x: -200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.title,
                  { y: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.text,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.tl.from(
                  this.$refs.buttons,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        c = (o(499), o(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section featured-text",
              },
              [
                t.blok.image && t.blok.image.filename
                  ? o(
                      "div",
                      {
                        staticClass:
                          "featured-text-image absolute opacity-20 lg:opacity-100 z-10 top-0 left-0 h-full w-full lg:w-5/12 xl:w-1/2",
                      },
                      [
                        o("nuxt-img", {
                          staticClass:
                            "image block w-full h-full object-cover object-center",
                          attrs: {
                            provider: "storyblok",
                            width: "1200",
                            height: "1200",
                            loading: "lazy",
                            fit: "in",
                            alt: t.blok.image.alt,
                            src: t.blok.image.filename,
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                o(
                  "div",
                  {
                    staticClass: "container flex justify-start lg:justify-end",
                  },
                  [
                    o(
                      "div",
                      {
                        staticClass:
                          "featured-text-content w-full lg:w-1/2 xl:w-5/12",
                      },
                      [
                        t.blok.title
                          ? o(
                              "h1",
                              {
                                ref: "title",
                                staticClass:
                                  "title text-pale text-3xl sm:text-5xl tracking-tight max-w-lg",
                              },
                              [t._v(t._s(t.blok.title))]
                            )
                          : t._e(),
                        t._v(" "),
                        t.blok.text
                          ? o(
                              "div",
                              {
                                ref: "text",
                                staticClass: "text-wrapper max-w-2xl",
                              },
                              [
                                o("RichText", {
                                  staticClass:
                                    "text-pale text-opacity-80 font-primary font-normal text-base md:text-lg leading-8 mt-7 max-w-5xl",
                                  attrs: { blok: t.blok.text },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        t.blok.buttons && t.blok.buttons.length
                          ? o(
                              "div",
                              {
                                ref: "buttons",
                                staticClass:
                                  "flex items-center justify-start mt-5 gap-6 relative",
                              },
                              t._l(t.blok.buttons, function (button) {
                                return o("AppButton", {
                                  key: button._uid,
                                  staticClass: "btn--shaped py-5 px-10",
                                  attrs: { button: button },
                                });
                              }),
                              1
                            )
                          : t._e(),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "1e038bd2",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RichText: o(118).default,
        AppButton: o(448).default,
      });
    },
    523: function (t, e, o) {
      "use strict";
      o.r(e);
      o(22), o(25), o(21), o(9), o(36), o(20), o(37);
      var n = o(13),
        r = o(50);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, o);
        }
        return e;
      }
      var c = {
          components: { GameCard: o(462).default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {
              tl: null,
              st: null,
              bg: null,
              bgSt: null,
              rotation: [0, 1, 2, 3, 6, 12, 45],
            };
          },
          mounted: function () {
            this.animate();
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? l(Object(source), !0).forEach(function (e) {
                    Object(n.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : l(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(r.b)({ getGames: "games/getGames" })),
          methods: {
            getRandomInt: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            },
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 25%",
                  pin: !1,
                  scrub: !0,
                  once: !0,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.game,
                  { y: 200, duration: 0.8, stagger: 0.1 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.button,
                  { y: 200, duration: 0.8 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        d = c,
        m = (o(501), o(3)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section games-listing",
              },
              [
                o("div", { staticClass: "container" }, [
                  o(
                    "div",
                    {
                      staticClass:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
                    },
                    t._l(t.getGames, function (t) {
                      return o(
                        "div",
                        {
                          key: t.uuid,
                          ref: "game",
                          refInFor: !0,
                          staticClass: "game-card-wrapper",
                        },
                        [o("GameCard", { attrs: { game: t } })],
                        1
                      );
                    }),
                    0
                  ),
                ]),
                t._v(" "),
                o("div", { staticClass: "section-bg" }, [
                  o(
                    "div",
                    { staticClass: "absolute z-10 top-0 left-0 w-full h-full" },
                    t._l(Number(t.blok.capy_number), function (i) {
                      return o("AstroCapy", {
                        key: "capy-" + i,
                        attrs: {
                          position: {
                            top: t.getRandomInt(0, 100),
                            left: t.getRandomInt(0, 100),
                          },
                          size: t.getRandomInt(40, 80),
                          rotation:
                            t.rotation[
                              Math.floor(Math.random() * t.rotation.length)
                            ],
                        },
                      });
                    }),
                    1
                  ),
                  t._v(" "),
                  o(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? o("nuxt-img", {
                            staticClass:
                              "image block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "1920",
                              height: "1080",
                              loading: "lazy",
                              fit: "in",
                              alt: t.blok.background_image.alt,
                              src: t.blok.background_image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "ea5bb11e",
          null
        );
      e.default = component.exports;
      installComponents(component, { AstroCapy: o(447).default });
    },
    524: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(118),
        r = o(45),
        l = {
          components: { RichText: n.default, SocialAccount: r.default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return { tl: null, st: null, bg: null, bgSt: null };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.tl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                this.tl.addLabel("start"),
                (this.st = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "top 50%",
                  pin: !1,
                  scrub: !1,
                  animation: this.tl,
                })),
                (this.bgSt = ScrollTrigger.create({
                  trigger: this.$refs.section,
                  start: "top bottom",
                  end: "bottom top",
                  pin: !1,
                  scrub: !0,
                  once: !1,
                  animation: this.bg,
                })),
                this.st.enable(),
                this.bgSt.enable(),
                this.tl.from(
                  this.$refs.graphic,
                  { x: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.title,
                  { y: 200, duration: 0.8 },
                  "start"
                ),
                this.tl.from(
                  this.$refs.content,
                  { y: 200, duration: 0.8, stagger: 0.1 },
                  "-=.6"
                ),
                this.bg.fromTo(
                  this.$refs.bg,
                  { y: -100, duration: 0.8 },
                  { y: 100, duration: 0.8 }
                );
            },
          },
        },
        c = (o(503), o(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass: "section contact",
              },
              [
                o("div", { staticClass: "contact-main" }, [
                  o("div", { staticClass: "container flex flex-col" }, [
                    o(
                      "div",
                      {
                        staticClass:
                          "contact-content relative z-10 w-full xl:w-1/2 2xl:w-1/3",
                      },
                      [
                        o(
                          "h1",
                          {
                            ref: "title",
                            staticClass:
                              "title text-white text-7xl sm:text-8xl tracking-tighter mb-8",
                          },
                          [t._v(t._s(t.blok.title))]
                        ),
                        t._v(" "),
                        t.blok.content_blocks
                          ? o(
                              "div",
                              {
                                staticClass:
                                  "content-blocks flex flex-col gap-10",
                              },
                              t._l(t.blok.content_blocks, function (e) {
                                return o(
                                  "div",
                                  {
                                    key: e._uid,
                                    ref: "content",
                                    refInFor: !0,
                                    staticClass: "content-block",
                                  },
                                  [
                                    o(
                                      "h2",
                                      {
                                        staticClass:
                                          "title text-primary text-2xl lg:text-3xl",
                                      },
                                      [t._v(t._s(e.title))]
                                    ),
                                    t._v(" "),
                                    o("RichText", {
                                      staticClass:
                                        "text-white font-primary mt-3 leading-loose text-base lg:text-lg max-w-lg",
                                      attrs: { blok: e.text },
                                    }),
                                    t._v(" "),
                                    e.buttons && e.buttons.length
                                      ? o(
                                          "div",
                                          {
                                            ref: "buttons",
                                            refInFor: !0,
                                            staticClass:
                                              "flex items-center justify-start mt-5 gap-6 relative",
                                          },
                                          t._l(e.buttons, function (button) {
                                            return o("AppButton", {
                                              key: button._uid,
                                              staticClass:
                                                "btn--shaped py-5 px-10",
                                              attrs: { button: button },
                                            });
                                          }),
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  1
                                );
                              }),
                              0
                            )
                          : t._e(),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  t.blok.graphic && t.blok.graphic.filename
                    ? o(
                        "div",
                        { ref: "graphic", staticClass: "contact-graphic" },
                        [
                          t.blok.graphic_overlap &&
                          t.blok.graphic_overlap.filename
                            ? o(
                                "div",
                                {
                                  staticClass:
                                    "contact-graphic--overlap w-full h-full absolute z-10",
                                },
                                [
                                  o("nuxt-img", {
                                    staticClass:
                                      "graphic relative block w-full md:w-5/12 lg:w-9/12 xl:w-8/12  3xl:w-7/12 -bottom-14 md:-bottom-10 lg:-bottom-24",
                                    attrs: {
                                      provider: "storyblok",
                                      width: "1600",
                                      height: "1600",
                                      loading: "lazy",
                                      fit: "in",
                                      alt: t.blok.graphic_overlap.alt,
                                      src: t.blok.graphic_overlap.filename,
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          o(
                            "div",
                            {
                              staticClass:
                                "contact-graphic--main w-full h-full absolute z-0",
                            },
                            [
                              o("nuxt-img", {
                                staticClass:
                                  "graphic relative block w-full md:w-5/12 lg:w-9/12 xl:w-8/12 3xl:w-7/12 -bottom-14 md:-bottom-10 lg:-bottom-24",
                                attrs: {
                                  provider: "storyblok",
                                  width: "1600",
                                  height: "1600",
                                  loading: "lazy",
                                  fit: "in",
                                  alt: t.blok.graphic.alt,
                                  src: t.blok.graphic.filename,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  o("div", { staticClass: "section-bg" }, [
                    o(
                      "div",
                      { ref: "bg", staticClass: "bg-image-wrapper" },
                      [
                        t.blok.background_image &&
                        t.blok.background_image.filename
                          ? o("nuxt-img", {
                              staticClass:
                                "image block w-full h-full object-cover object-center",
                              attrs: {
                                provider: "storyblok",
                                width: "1920",
                                height: "1080",
                                loading: "lazy",
                                fit: "in",
                                alt: t.blok.background_image.alt,
                                src: t.blok.background_image.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "contact-extra" }, [
                  o(
                    "div",
                    {
                      staticClass:
                        "container grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-12",
                    },
                    [
                      t.blok.social_graphic && t.blok.social_graphic.filename
                        ? o(
                            "div",
                            {
                              staticClass:
                                "social-graphic hidden lg:block absolute -top-10 -left-5",
                            },
                            [
                              t.blok.social_graphic &&
                              t.blok.social_graphic.filename
                                ? o("nuxt-img", {
                                    staticClass:
                                      "image block w-full h-full object-contain object-center",
                                    attrs: {
                                      provider: "storyblok",
                                      width: "300",
                                      height: "400",
                                      loading: "lazy",
                                      fit: "in",
                                      alt: t.blok.social_graphic.alt,
                                      src: t.blok.social_graphic.filename,
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      o(
                        "div",
                        {
                          staticClass:
                            "extra-block lg:col-span-4 lg:col-start-3",
                        },
                        [
                          o(
                            "div",
                            { staticClass: "extra-block-content" },
                            [
                              o("h2", { staticClass: "title text-3xl" }, [
                                t._v(t._s(t.blok.social_title)),
                              ]),
                              t._v(" "),
                              o("RichText", {
                                staticClass:
                                  "text-body-light font-primary mt-3 text-base max-w-sm",
                                attrs: { blok: t.blok.social_text },
                              }),
                              t._v(" "),
                              t.blok.social_links && t.blok.social_links.length
                                ? o(
                                    "ul",
                                    {
                                      staticClass:
                                        "flex h-full items-stretch justify-start gap-4 mt-4",
                                    },
                                    t._l(t.blok.social_links, function (t) {
                                      return o(
                                        "li",
                                        {
                                          key: t._uid,
                                          staticClass: "social-wrapper",
                                        },
                                        [
                                          o("SocialAccount", {
                                            staticClass:
                                              "text-3xl text-primary hover:text-secondary",
                                            attrs: { account: t },
                                          }),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "extra-block lg:col-span-3" }, [
                        o("div", { staticClass: "extra-block-content" }, [
                          o("h2", { staticClass: "title text-3xl" }, [
                            t._v(t._s(t.blok.location_title)),
                          ]),
                          t._v(" "),
                          o("div", {
                            staticClass:
                              "text-primary font-bold font-primary mt-3 text-base max-w-sm",
                            domProps: {
                              innerHTML: t._s(
                                t.$md.render(t.blok.location_address)
                              ),
                            },
                          }),
                        ]),
                      ]),
                      t._v(" "),
                      o(
                        "div",
                        { staticClass: "extra-block flex lg:col-span-3" },
                        [
                          o(
                            "div",
                            { staticClass: "extra-block-content" },
                            [
                              o("h2", { staticClass: "title text-3xl" }, [
                                t._v(t._s(t.blok.newsletter_title)),
                              ]),
                              t._v(" "),
                              o("RichText", {
                                staticClass:
                                  "text-body-light font-primary mt-3 text-base max-w-sm",
                                attrs: { blok: t.blok.newsletter_text },
                              }),
                              t._v(" "),
                              o("div", { ref: "newsletter" }, [
                                o(
                                  "div",
                                  { attrs: { id: "sib-form-container" } },
                                  [
                                    o(
                                      "div",
                                      {
                                        staticClass: "sib-form-message-panel",
                                        staticStyle: {
                                          "font-size": "16px",
                                          "text-align": "left",
                                          color: "#661d1d",
                                          "background-color": "#ffeded",
                                          "border-radius": "3px",
                                          "border-color": "#ff4949",
                                          "max-width": "540px",
                                        },
                                        attrs: { id: "error-message" },
                                      },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "sib-form-message-panel__text sib-form-message-panel__text--center",
                                          },
                                          [
                                            o(
                                              "svg",
                                              {
                                                staticClass:
                                                  "sib-icon sib-notification__icon",
                                                attrs: {
                                                  viewBox: "0 0 512 512",
                                                },
                                              },
                                              [
                                                o("path", {
                                                  attrs: {
                                                    d: "M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            t._v(" "),
                                            o(
                                              "span",
                                              {
                                                staticClass:
                                                  "sib-form-message-panel__inner-text",
                                              },
                                              [
                                                t._v(
                                                  "\n                       OH NO!  Your subscription could not be saved. Please try again.\n                   "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o("div"),
                                    t._v(" "),
                                    o(
                                      "div",
                                      {
                                        staticClass: "sib-form-message-panel",
                                        staticStyle: {
                                          "font-size": "16px",
                                          "text-align": "left",
                                          color: "#085229",
                                          "background-color": "#e7faf0",
                                          "border-radius": "3px",
                                          "border-color": "#13ce66",
                                          "max-width": "540px",
                                        },
                                        attrs: { id: "success-message" },
                                      },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "sib-form-message-panel__text sib-form-message-panel__text--center",
                                          },
                                          [
                                            o(
                                              "svg",
                                              {
                                                staticClass:
                                                  "sib-icon sib-notification__icon",
                                                attrs: {
                                                  viewBox: "0 0 512 512",
                                                },
                                              },
                                              [
                                                o("path", {
                                                  attrs: {
                                                    d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            t._v(" "),
                                            o(
                                              "span",
                                              {
                                                staticClass:
                                                  "sib-form-message-panel__inner-text",
                                              },
                                              [
                                                t._v(
                                                  "\n                       Your subscription has been successful.  HOORAY VIDEO GAMES!\n                   "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      {
                                        staticStyle: {
                                          background: "none",
                                          margin: "0",
                                          padding: "0",
                                        },
                                        attrs: { id: "sib-container" },
                                      },
                                      [
                                        o(
                                          "form",
                                          {
                                            attrs: {
                                              id: "sib-form",
                                              method: "POST",
                                              action:
                                                "https://de4407ac.sibforms.com/serve/MUIEAAIiXDTNswaUo9T0NKvz1HfKcU-ndH6SEvo5iNd74HZ0DIrTMAL-gRTstAsezj38OMXb4Zc9ddNIFau9aFTnXFVm2uV4QxmRzmg8LpoC7s00DSv5PsGPaNW96WJ6a51QTWhScEQoWzss_SwjwuVPc9srBfKSlBUeNYbbv4UA8fiS5XTPdfALaRhjS-_8omKdHNUURBm44iCu",
                                              "data-type": "subscription",
                                            },
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-row flex items-stretch mt-1 w-full",
                                              },
                                              [
                                                o("input", {
                                                  staticClass:
                                                    "input w-full px-4 py-1 bg-input-bg text-input-text placeholder-input-text placeholder-opacity-75 font-secondary uppercase text-base md:text-2xl",
                                                  attrs: {
                                                    type: "email",
                                                    id: "EMAIL",
                                                    name: "EMAIL",
                                                    autocomplete: "off",
                                                    required: "",
                                                    placeholder:
                                                      "e.g. yourname@example.com",
                                                  },
                                                }),
                                                t._v(" "),
                                                o(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn--shaped relative -ml-8 py-6 px-6 md:px-12 flex-shrink-0",
                                                    attrs: {
                                                      type: "submit",
                                                      form: "sib-form",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "span",
                                                      {
                                                        staticClass: "btn-text",
                                                      },
                                                      [t._v("Sign up")]
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                      "span",
                                                      { staticClass: "btn-bg" },
                                                      [
                                                        o(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "btn-bg-border text-primary-theme",
                                                            attrs: {
                                                              viewBox:
                                                                "0 0 107 62",
                                                              preserveAspectRatio:
                                                                "none",
                                                            },
                                                          },
                                                          [
                                                            o("path", {
                                                              attrs: {
                                                                fill: "transparent",
                                                                stroke:
                                                                  "currentColor",
                                                                "stroke-width":
                                                                  "3",
                                                                d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            o("input", {
                                              staticClass: "input--hidden",
                                              attrs: {
                                                type: "text",
                                                name: "email_address_check",
                                                value: "",
                                              },
                                            }),
                                            t._v(" "),
                                            o("input", {
                                              attrs: {
                                                type: "hidden",
                                                name: "locale",
                                                value: "en",
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.blok.newsletter_legal
                                          ? o("RichText", {
                                              staticClass:
                                                "standard-text small-text",
                                              attrs: {
                                                blok: t.blok.newsletter_legal,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "4d72ed53",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RichText: o(118).default,
        AppButton: o(448).default,
        SocialAccount: o(45).default,
      });
    },
    525: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: { RichText: o(118).default },
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {},
          methods: {},
        },
        r = (o(505), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.blok,
                    expression: "blok",
                  },
                ],
                ref: "section",
                staticClass:
                  "section standard-content pt-20 pb-40 min-h-screen block",
              },
              [
                o(
                  "div",
                  { staticClass: "container container--small" },
                  [
                    o("RichText", {
                      staticClass: "standard-text",
                      attrs: { blok: t.blok.content },
                    }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "466c8a70",
          null
        );
      e.default = component.exports;
      installComponents(component, { RichText: o(118).default });
    },
    528: function (t, e, o) {
      "use strict";
      o(514);
    },
    529: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".page-components[data-v-27d02d6a]{position:relative;z-index:10;width:100%}.page-components>.section[data-v-27d02d6a]{position:relative;width:100%}.page-components>.section[data-v-27d02d6a]:first-child{z-index:0}.page-components>.section[data-v-27d02d6a]:nth-child(2){z-index:1}.page-components>.section[data-v-27d02d6a]:nth-child(3){z-index:2}.page-components>.section[data-v-27d02d6a]:nth-child(4){z-index:3}.page-components>.section[data-v-27d02d6a]:nth-child(5){z-index:4}.page-components>.section[data-v-27d02d6a]:nth-child(6){z-index:5}.page-components>.section[data-v-27d02d6a]:nth-child(7){z-index:6}.page-components>.section[data-v-27d02d6a]:nth-child(8){z-index:7}.page-components>.section[data-v-27d02d6a]:nth-child(9){z-index:8}.page-components>.section[data-v-27d02d6a]:nth-child(10){z-index:9}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
  },
]);
