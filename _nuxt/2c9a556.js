(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    113: function (t, e, n) {
      "use strict";
      (function (t) {
        var o = n(151),
          r = n(152),
          l = n(262),
          c = n(263);
        e.a = {
          components: {
            "app-header": o.default,
            "app-footer": r.default,
            MediaModal: l.default,
            TrailerModal: c.default,
          },
          computed: {
            isStaging: function () {
              var e =
                this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
                  ? "draft"
                  : "published";
              return "true" === t.env.NUXT_ENV_IS_SPA && "draft" !== e;
            },
          },
          mounted: function () {
            var t = this;
            this.$store.dispatch("setWindowWidth"),
              window.addEventListener("resize", function () {
                t.$store.dispatch("setWindowWidth");
              });
          },
          methods: {
            enterMenu: function (t, e) {
              gsap.to(".page-content-wrapper", {
                x: "-30vw",
                rotation: -10,
                duration: 0.4,
              }),
                gsap.from(t, {
                  x: "50vw",
                  rotation: 10,
                  duration: 0.4,
                  onComplete: e,
                });
            },
            leaveMenu: function (t, e) {
              gsap.to(t, {
                x: "70vw",
                autoAlpha: 0,
                rotation: 10,
                duration: 0.4,
              }),
                gsap.to(".page-content-wrapper", {
                  x: 0,
                  rotation: 0,
                  duration: 0.4,
                  onComplete: e,
                });
            },
            enter: function (t, e) {
              gsap.fromTo(
                t,
                { duration: 0.25, autoAlpha: 0 },
                { autoAlpha: 1 }
              ),
                gsap.from(".modal-content", {
                  duration: 0.25,
                  scale: 0.4,
                  y: 100,
                  onComplete: e,
                });
            },
            leave: function (t, e) {
              gsap.fromTo(
                t,
                { duration: 0.25, autoAlpha: 1 },
                { autoAlpha: 0, onComplete: e }
              );
            },
          },
        };
      }.call(this, n(112)));
    },
    118: function (t, e, n) {
      "use strict";
      n.r(e);
      n(38), n(29), n(49);
      var o = n(251),
        r = {
          props: { blok: { required: !0, type: Object } },
          components: { VRuntimeTemplate: o.a },
          computed: {
            content: function () {
              return (
                "<div>" +
                this.$storyapi.richTextResolver.render(this.blok) +
                "</div>"
              );
            },
          },
          created: function () {
            this.$storyapi.setComponentResolver(function (component, t) {
              return "<component :blok='"
                .concat(
                  JSON.stringify(t),
                  "'\n                         :is=\"'"
                )
                .concat(component.replace("_", "-"), "'\"></component>");
            });
          },
        },
        l = r,
        c = (n(325), n(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)("v-runtime-template", {
              staticClass: "text-content",
              attrs: { template: t.content },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    151: function (t, e, n) {
      "use strict";
      n.r(e);
      n(22), n(25), n(21), n(9), n(36), n(20), n(37);
      var o = n(13),
        r = n(50),
        l = n(259);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var d = {
          components: { SocialAccount: n(45).default, MenuItem: l.default },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(r.b)({ getSettings: "settings/getSettings" })),
          methods: {
            closeMenu: function () {
              this.$store.commit("menu/toggleMenu", "close");
            },
            toggleMenu: function () {
              this.$store.commit("menu/toggleMenu");
            },
          },
        },
        m = d,
        h = (n(321), n(3)),
        component = Object(h.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "header",
              { ref: "header", staticClass: "site-header" },
              [
                n(
                  "nuxt-link",
                  {
                    staticClass: "header-logo",
                    attrs: { to: { path: "/", hash: "top" } },
                  },
                  [
                    n(
                      "div",
                      { on: { click: t.closeMenu } },
                      [
                        t.getSettings.header_logo &&
                        t.getSettings.header_logo.filename
                          ? n("nuxt-img", {
                              staticClass: "image w-20 md:w-auto",
                              attrs: {
                                provider: "storyblok",
                                width: "140",
                                height: "400",
                                loading: "lazy",
                                fit: "in",
                                alt: t.getSettings.header_logo.alt,
                                src: t.getSettings.header_logo.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "header-menus relative z-20 hidden lg:flex items-center items-end h-full pr-8 lg:pr-12",
                  },
                  [
                    t.getSettings.header_menu &&
                    t.getSettings.header_menu.length
                      ? n("nav", { staticClass: "main-menu h-full" }, [
                          n(
                            "ul",
                            {
                              staticClass:
                                "menu flex items-center items-end gap-2 h-full",
                            },
                            t._l(t.getSettings.header_menu, function (t) {
                              return n("MenuItem", {
                                key: t._uid,
                                attrs: { blok: t },
                              });
                            }),
                            1
                          ),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.getSettings.header_social &&
                    t.getSettings.header_social.length
                      ? n("nav", { staticClass: "social-menu h-full" }, [
                          n(
                            "ul",
                            {
                              staticClass:
                                "menu flex items-center items-end gap-3 h-full",
                            },
                            t._l(t.getSettings.header_social, function (t) {
                              return n(
                                "li",
                                { key: t._uid },
                                [
                                  n("SocialAccount", {
                                    staticClass:
                                      "text-2xl text-primary hover:text-secondary",
                                    attrs: { account: t },
                                  }),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ])
                      : t._e(),
                  ]
                ),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass: "menu-btn flex lg:hidden w-20",
                    class: t.$store.getters["menu/isMenuOpen"]
                      ? "active items-center"
                      : "items-end",
                    on: { click: t.toggleMenu },
                  },
                  [
                    n("span", {
                      staticClass: "line line--top",
                      class: t.$store.getters["menu/isMenuOpen"]
                        ? "w-full rotate-45 transform"
                        : "w-full",
                    }),
                    t._v(" "),
                    t.$store.getters["menu/isMenuOpen"]
                      ? t._e()
                      : n("span", { staticClass: "line w-full" }),
                    t._v(" "),
                    n("span", {
                      staticClass: "line line--bottom",
                      class: t.$store.getters["menu/isMenuOpen"]
                        ? "w-full -rotate-45 transform"
                        : "w-full",
                    }),
                  ]
                ),
                t._v(" "),
                n("div", { staticClass: "header-bg" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "383ca758",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        SocialAccount: n(45).default,
        Header: n(151).default,
      });
    },
    152: function (t, e, n) {
      "use strict";
      n.r(e);
      n(22), n(25), n(21), n(9), n(36), n(20), n(37);
      var o = n(13),
        r = n(50),
        l = n(260),
        c = n(45),
        d = n(118),
        m = n(261);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var f = {
          components: {
            SocialAccount: c.default,
            MenuItem: l.default,
            RichText: d.default,
            "app-logo": m.default,
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? h(Object(source), !0).forEach(function (e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : h(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(r.b)({ getSettings: "settings/getSettings" })),
          methods: {
            closeMenu: function () {
              this.$store.commit("menu/toggleMenu", "close");
            },
            toggleMenu: function () {
              this.$store.commit("menu/toggleMenu");
            },
          },
        },
        x = f,
        w = (n(327), n(3)),
        component = Object(w.a)(
          x,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "footer",
              { ref: "footer", staticClass: "site-footer" },
              [
                n(
                  "div",
                  {
                    staticClass:
                      "container relative z-20 flex flex-wrap lg:flex-nowrap h-full items-center justify-center gap-y-8 xl:gap-28",
                  },
                  [
                    t._l(t.getSettings.footer_logos, function (t) {
                      return n(
                        "div",
                        {
                          staticClass:
                            "footer-col w-1/2 flex items-center justify-center p-3 xl:p-0",
                        },
                        [n("app-logo", { attrs: { logo: t } })],
                        1
                      );
                    }),
                    t._v(" "),
                    n("div", { staticClass: "footer-col w-full" }, [
                      t.getSettings.footer_menu &&
                      t.getSettings.footer_menu.length
                        ? n(
                            "nav",
                            { staticClass: "main-menu h-full" },
                            [
                              n(
                                "ul",
                                {
                                  staticClass:
                                    "menu flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-start gap-x-3 xl:gap-4 h-full",
                                },
                                t._l(t.getSettings.footer_menu, function (t) {
                                  return n("MenuItem", {
                                    key: t._uid,
                                    attrs: { blok: t },
                                  });
                                }),
                                1
                              ),
                              t._v(" "),
                              n("RichText", {
                                staticClass:
                                  "footer-text text-center xl:text-left text-white text-sm mt-2",
                                attrs: { blok: t.getSettings.footer_text },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "footer-col w-full" }, [
                      t.getSettings.footer_social &&
                      t.getSettings.footer_social.length
                        ? n("nav", { staticClass: "social-menu h-full" }, [
                            n(
                              "ul",
                              {
                                staticClass:
                                  "menu flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-start gap-x-3 xl:gap-3 h-full",
                              },
                              t._l(t.getSettings.footer_social, function (t) {
                                return n(
                                  "li",
                                  { key: t._uid },
                                  [
                                    n("SocialAccount", {
                                      staticClass:
                                        "text-3xl text-white hover:text-secondary",
                                      attrs: { account: t },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              0
                            ),
                          ])
                        : t._e(),
                    ]),
                  ],
                  2
                ),
                t._v(" "),
                t.getSettings.footer_graphic &&
                t.getSettings.footer_graphic.filename
                  ? n("nuxt-img", {
                      staticClass:
                        "footer-graphic w-28 lg:w-52 absolute z-10 -bottom-14 -right-8 xl:-right-14 pointer-events-none",
                      attrs: {
                        provider: "storyblok",
                        width: "200",
                        height: "600",
                        loading: "lazy",
                        fit: "in",
                        alt: t.getSettings.footer_graphic.alt,
                        src: t.getSettings.footer_graphic.filename,
                      },
                    })
                  : t._e(),
                t._v(" "),
                n("div", { staticClass: "footer-bg" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "10a5d72d",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        RichText: n(118).default,
        SocialAccount: n(45).default,
        Footer: n(152).default,
      });
    },
    158: function (t, e) {
      gsap.registerPlugin(ScrollTrigger);
    },
    161: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: {},
          props: {
            media: { required: !0, type: Object },
            gallery: { required: !0, type: Array },
            fullSize: { required: !1, type: Boolean, default: !1 },
          },
          computed: {
            mediaSize: function () {
              return {
                width: this.fullSize ? 1920 : 600,
                height: this.fullSize ? 1080 : 400,
              };
            },
          },
          methods: {
            enlargeMedia: function () {
              this.$store.commit("media/toggleMedia", {
                items: this.gallery,
                item: this.media,
              });
            },
          },
        },
        r = (n(329), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.fullSize
              ? n(
                  "div",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.media,
                        expression: "media",
                      },
                    ],
                    staticClass: "media-item media-image",
                  },
                  [
                    t.media.image && t.media.image.filename
                      ? n(
                          "span",
                          { staticClass: "image-wrapper" },
                          [
                            n("nuxt-img", {
                              staticClass: "image",
                              attrs: {
                                provider: "storyblok",
                                width: t.mediaSize.width,
                                height: t.mediaSize.height,
                                fit: "in",
                                loading: "lazy",
                                src: t.media.image.filename,
                                alt: t.media.image.alt,
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                )
              : n(
                  "button",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.media,
                        expression: "media",
                      },
                    ],
                    staticClass: "media-item media-item-button media-image",
                    on: { click: t.enlargeMedia },
                  },
                  [
                    t.media.image && t.media.image.filename
                      ? n(
                          "span",
                          { staticClass: "image-wrapper" },
                          [
                            n("nuxt-img", {
                              staticClass: "image",
                              attrs: {
                                provider: "storyblok",
                                width: t.mediaSize.width,
                                height: t.mediaSize.height,
                                fit: "in",
                                loading: "lazy",
                                src: t.media.image.filename,
                                alt: t.media.image.alt,
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
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
    162: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: {},
          props: {
            media: { required: !0, type: Object },
            gallery: { required: !0, type: Array },
            fullSize: { required: !1, type: Boolean, default: !1 },
          },
          computed: {
            mediaSize: function () {
              return {
                width: this.fullSize ? 1920 : 600,
                height: this.fullSize ? 1080 : 400,
              };
            },
          },
          methods: {
            enlargeMedia: function () {
              this.$store.commit("media/toggleMedia", {
                items: this.gallery,
                item: this.media,
              });
            },
          },
        },
        r = (n(331), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.fullSize
              ? n(
                  "div",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.media,
                        expression: "media",
                      },
                    ],
                    staticClass:
                      "media-item media-video bg-background-charcoal",
                  },
                  [
                    n("div", {
                      staticClass: "video-embed",
                      domProps: { innerHTML: t._s(t.media.video_embed) },
                    }),
                  ]
                )
              : n(
                  "button",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.media,
                        expression: "media",
                      },
                    ],
                    staticClass: "media-item media-item-button media-video",
                    on: { click: t.enlargeMedia },
                  },
                  [
                    t._m(0),
                    t._v(" "),
                    t.media.poster && t.media.poster.filename
                      ? n(
                          "span",
                          { staticClass: "image-wrapper" },
                          [
                            n("nuxt-img", {
                              staticClass: "image",
                              attrs: {
                                provider: "storyblok",
                                width: t.mediaSize.width,
                                height: t.mediaSize.height,
                                fit: "in",
                                loading: "lazy",
                                src: t.media.poster.filename,
                                alt: t.media.poster.alt,
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "span",
                { staticClass: "play-btn flex items-center justify-center" },
                [
                  e(
                    "span",
                    {
                      staticClass:
                        "btn btn--round p-5 hover:scale-110 duration-200",
                    },
                    [
                      e("span", { staticClass: "btn-text" }, [
                        e("i", { staticClass: "fas fa-play" }),
                      ]),
                    ]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    201: function (t, e, n) {
      var content = n(308);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("1990a5aa", content, !0, { sourceMap: !1 });
    },
    205: function (t, e, n) {
      var content = n(318);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("7d126250", content, !0, { sourceMap: !1 });
    },
    206: function (t, e, n) {
      var content = n(320);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("5e2a6789", content, !0, { sourceMap: !1 });
    },
    207: function (t, e, n) {
      var content = n(322);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("5de4de16", content, !0, { sourceMap: !1 });
    },
    208: function (t, e, n) {
      var content = n(324);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("3b7f6160", content, !0, { sourceMap: !1 });
    },
    209: function (t, e, n) {
      var content = n(326);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("85b7cb70", content, !0, { sourceMap: !1 });
    },
    210: function (t, e, n) {
      var content = n(328);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("01d2941a", content, !0, { sourceMap: !1 });
    },
    211: function (t, e, n) {
      var content = n(330);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("a1dff3bc", content, !0, { sourceMap: !1 });
    },
    212: function (t, e, n) {
      var content = n(332);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("af393bbc", content, !0, { sourceMap: !1 });
    },
    213: function (t, e, n) {
      var content = n(335);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("28d1d8d4", content, !0, { sourceMap: !1 });
    },
    214: function (t, e, n) {
      var content = n(337);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("531039b6", content, !0, { sourceMap: !1 });
    },
    215: function (t, e, n) {
      var content = n(339);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("22d43eaa", content, !0, { sourceMap: !1 });
    },
    216: function (t, e, n) {
      var content = n(341);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("164d196f", content, !0, { sourceMap: !1 });
    },
    217: function (t, e, n) {
      var content = n(343);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("47bf35c0", content, !0, { sourceMap: !1 });
    },
    259: function (t, e, n) {
      "use strict";
      n.r(e);
      n(90), n(91);
      var o = {
          components: {},
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            isExternal: function () {
              return "story" !== this.blok.link.linktype;
            },
            link: function () {
              var link = "/";
              return (
                "story" === this.blok.link.linktype &&
                  (link = {
                    path:
                      "/" === this.blok.link.story.url
                        ? "/"
                        : "/".concat(this.blok.link.story.url),
                    hash: this.blok.link.anchor,
                  }),
                ("url" !== this.blok.link.linktype &&
                  "asset" !== this.blok.link.linktype) ||
                  (link = this.blok.link.url),
                "email" === this.blok.link.linktype &&
                  (link = "mailto:".concat(this.blok.link.email)),
                link
              );
            },
          },
          methods: {},
        },
        r = (n(317), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal
              ? n(
                  "li",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item external-link",
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      attrs: {
                        href: t.link,
                        target: "_blank",
                        rel: "noreferer, noopener",
                      },
                      domProps: { innerHTML: t._s(t.blok.text) },
                    }),
                  ]
                )
              : n(
                  "nuxt-link",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item",
                    attrs: { to: t.link, tag: "li" },
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      domProps: { innerHTML: t._s(t.blok.text) },
                    }),
                  ]
                );
          },
          [],
          !1,
          null,
          "19d4da8a",
          null
        );
      e.default = component.exports;
    },
    260: function (t, e, n) {
      "use strict";
      n.r(e);
      n(90), n(91);
      var o = {
          components: {},
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            isExternal: function () {
              return "story" !== this.blok.link.linktype;
            },
            link: function () {
              var link = "/";
              return (
                "story" === this.blok.link.linktype &&
                  (link = {
                    path:
                      "/" === this.blok.link.story.url
                        ? "/"
                        : "/".concat(this.blok.link.story.url),
                    hash: this.blok.link.anchor,
                  }),
                ("url" !== this.blok.link.linktype &&
                  "asset" !== this.blok.link.linktype) ||
                  (link = this.blok.link.url),
                "email" === this.blok.link.linktype &&
                  (link = "mailto:".concat(this.blok.link.email)),
                link
              );
            },
          },
          methods: {},
        },
        r = (n(323), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal
              ? n(
                  "li",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item external-link",
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      attrs: {
                        href: t.link,
                        target: "_blank",
                        rel: "noreferer, noopener",
                      },
                      domProps: { innerHTML: t._s(t.blok.text) },
                    }),
                  ]
                )
              : n(
                  "nuxt-link",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item",
                    attrs: { to: t.link, tag: "li" },
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      domProps: { innerHTML: t._s(t.blok.text) },
                    }),
                  ]
                );
          },
          [],
          !1,
          null,
          "7cabcde7",
          null
        );
      e.default = component.exports;
    },
    261: function (t, e, n) {
      "use strict";
      n.r(e);
      n(90), n(91);
      var o = {
          components: {},
          props: { logo: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            isExternal: function () {
              return "story" !== this.logo.link.linktype;
            },
            link: function () {
              var link = "/";
              return (
                "story" === this.logo.link.linktype &&
                  (link = {
                    path:
                      "/" === this.logo.link.story.url
                        ? "/"
                        : "/".concat(this.logo.link.story.url),
                    hash: this.logo.link.anchor,
                  }),
                ("url" !== this.logo.link.linktype &&
                  "asset" !== this.logo.link.linktype) ||
                  (link = this.logo.link.url),
                "email" === this.logo.link.linktype &&
                  (link = "mailto:".concat(this.logo.link.email)),
                link
              );
            },
          },
          methods: {},
        },
        r = n(3),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal
              ? n("div", { staticClass: "logo external-link" }, [
                  n(
                    "a",
                    {
                      staticClass: "link block w-auto h-32",
                      attrs: {
                        href: t.link,
                        target: "_blank",
                        rel: "noreferer, noopener",
                      },
                    },
                    [
                      t.logo.logo && t.logo.logo.filename
                        ? n("nuxt-img", {
                            staticClass: "image w-full h-full object-contain",
                            attrs: {
                              provider: "storyblok",
                              width: "300",
                              height: "200",
                              loading: "lazy",
                              fit: "in",
                              alt: t.logo.logo.alt,
                              src: t.logo.logo.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ])
              : n(
                  "nuxt-link",
                  { staticClass: "logo", attrs: { to: t.link, tag: "div" } },
                  [
                    n(
                      "a",
                      { staticClass: "link block w-auto h-32" },
                      [
                        t.logo.logo && t.logo.logo.filename
                          ? n("nuxt-img", {
                              staticClass: "image w-full h-full object-contain",
                              attrs: {
                                provider: "storyblok",
                                width: "300",
                                height: "200",
                                loading: "lazy",
                                fit: "in",
                                alt: t.logo.logo.alt,
                                src: t.logo.logo.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
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
    262: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(161),
        r = n(162),
        l = n(159),
        c = n.n(l),
        d =
          (n(267),
          {
            components: {
              MediaImage: o.default,
              MediaVideo: r.default,
              VueSlickCarousel: c.a,
            },
            data: function () {
              return {};
            },
            computed: {
              getIndex: function () {
                return this.$store.state.media.items
                  ? this.$store.state.media.items.indexOf(
                      this.$store.state.media.item
                    )
                  : 0;
              },
            },
            methods: {
              closeModal: function () {
                this.$store.commit("media/toggleMedia", {
                  items: [],
                  item: null,
                });
              },
            },
          }),
        m = (n(334), n(3)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "media-modal" }, [
              n(
                "button",
                {
                  staticClass: "media-modal--close text-4xl text-white p-5",
                  on: { click: t.closeModal },
                },
                [n("i", { staticClass: "far fa-times" })]
              ),
              t._v(" "),
              n("div", { staticClass: "modal-content media-modal-content" }, [
                t.$store.state.media.item
                  ? n(
                      "div",
                      [
                        t.$store.state.media.items &&
                        t.$store.state.media.items.length
                          ? n(
                              "VueSlickCarousel",
                              {
                                ref: "carousel",
                                staticClass: "media-gallery-content mt-5",
                                attrs: {
                                  arrows: !0,
                                  dots: !1,
                                  "initial-slide": t.getIndex,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "prevArrow",
                                      fn: function (t) {
                                        return [
                                          n(
                                            "div",
                                            { staticClass: "custom-arrow" },
                                            [
                                              n(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "text-white icon",
                                                  attrs: {
                                                    width: "21",
                                                    height: "42",
                                                    viewBox: "0 0 21 42",
                                                  },
                                                },
                                                [
                                                  n("path", {
                                                    attrs: {
                                                      "fill-rule": "evenodd",
                                                      fill: "currentColor",
                                                      d: "m20.814 14.441-6.343 6.37H.546L20.814.455v13.986Zm0 12.767v13.986L.546 20.838h13.925l6.343 6.37Z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ];
                                      },
                                    },
                                    {
                                      key: "nextArrow",
                                      fn: function (t) {
                                        return [
                                          n(
                                            "div",
                                            { staticClass: "custom-arrow" },
                                            [
                                              n(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "text-white icon",
                                                  attrs: {
                                                    width: "21",
                                                    height: "42",
                                                    viewBox: "0 0 21 42",
                                                  },
                                                },
                                                [
                                                  n("path", {
                                                    attrs: {
                                                      "fill-rule": "evenodd",
                                                      fill: "currentColor",
                                                      d: "m.185 14.441 6.343 6.37h13.925L.185.455v13.986Zm0 12.767v13.986l20.268-20.356H6.528l-6.343 6.37Z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ];
                                      },
                                    },
                                  ],
                                  null,
                                  !1,
                                  2250960134
                                ),
                              },
                              [
                                t._v(" "),
                                t._v(" "),
                                t._l(t.$store.state.media.items, function (e) {
                                  return n(
                                    "div",
                                    {
                                      key: e._uid,
                                      staticClass: "slide w-full h-full",
                                    },
                                    [
                                      n(e.component.replace("_", "-"), {
                                        tag: "component",
                                        attrs: {
                                          media: e,
                                          "full-size": !0,
                                          gallery: t.$store.state.media.items,
                                        },
                                      }),
                                    ],
                                    1
                                  );
                                }),
                              ],
                              2
                            )
                          : t._e(),
                      ],
                      1
                    )
                  : t._e(),
              ]),
              t._v(" "),
              n("div", {
                staticClass: "media-modal-bg",
                on: { click: t.closeModal },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    263: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: {},
          methods: {
            closeTrailer: function () {
              this.$store.commit("trailer/toggleTrailer", {
                trailer: null,
                open: !1,
              });
            },
          },
        },
        r = (n(336), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "trailer-modal" }, [
              n(
                "button",
                {
                  staticClass: "modal-close text-4xl text-white p-5",
                  on: { click: t.closeTrailer },
                },
                [n("i", { staticClass: "far fa-times" })]
              ),
              t._v(" "),
              n("div", { staticClass: "modal-content trailer-modal-content" }, [
                n("div", {
                  staticClass: "video-embed",
                  domProps: {
                    innerHTML: t._s(t.$store.getters["trailer/getTrailer"]),
                  },
                }),
              ]),
              t._v(" "),
              n("div", {
                staticClass: "modal-bg",
                on: { click: t.closeTrailer },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    264: function (t, e, n) {
      "use strict";
      n.r(e);
      n(90), n(91);
      var o = {
          components: {},
          props: { blok: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {
            isExternal: function () {
              return "story" !== this.blok.link.linktype;
            },
            link: function () {
              var link = "/";
              return (
                "story" === this.blok.link.linktype &&
                  (link = {
                    path:
                      "/" === this.blok.link.story.url
                        ? "/"
                        : "/".concat(this.blok.link.story.url),
                    hash: this.blok.link.anchor,
                  }),
                ("url" !== this.blok.link.linktype &&
                  "asset" !== this.blok.link.linktype) ||
                  (link = this.blok.link.url),
                "email" === this.blok.link.linktype &&
                  (link = "mailto:".concat(this.blok.link.email)),
                link
              );
            },
          },
          methods: {
            closeMenu: function () {
              this.$store.commit("menu/toggleMenu", "close");
            },
          },
        },
        r = (n(340), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal
              ? n(
                  "li",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item external-link",
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      attrs: { href: t.link, target: "_blank" },
                      domProps: { innerHTML: t._s(t.blok.text) },
                    }),
                  ]
                )
              : n(
                  "nuxt-link",
                  {
                    directives: [
                      {
                        name: "editable",
                        rawName: "v-editable",
                        value: t.blok,
                        expression: "blok",
                      },
                    ],
                    staticClass: "menu-item",
                    attrs: { to: t.link, tag: "li" },
                  },
                  [
                    n("a", {
                      staticClass: "link",
                      domProps: { innerHTML: t._s(t.blok.text) },
                      on: { click: t.closeMenu },
                    }),
                  ]
                );
          },
          [],
          !1,
          null,
          "6cecb6e0",
          null
        );
      e.default = component.exports;
    },
    265: function (t, e, n) {
      "use strict";
      var o = n(113).a,
        r = (n(338), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isStaging
              ? n(
                  "div",
                  {
                    staticClass:
                      "staging h-screen w-full flex items-center justify-center",
                  },
                  [
                    n(
                      "h1",
                      {
                        staticClass:
                          "text-primary uppercase font-primary text-2xl lg:text-4xl text-center",
                      },
                      [
                        t._v(
                          "Sorry, you don't have\n    permission to view this staging site."
                        ),
                      ]
                    ),
                  ]
                )
              : n(
                  "div",
                  { staticClass: "site-wrapper" },
                  [
                    n("app-header"),
                    t._v(" "),
                    n(
                      "transition",
                      {
                        attrs: { mode: "out-in" },
                        on: { css: !1, enter: t.enterMenu, leave: t.leaveMenu },
                      },
                      [
                        t.$store.getters["menu/isMenuOpen"]
                          ? n("Mobile")
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "transition",
                      { on: { enter: t.enter, leave: t.leave, css: !1 } },
                      [t.$store.state.media.open ? n("MediaModal") : t._e()],
                      1
                    ),
                    t._v(" "),
                    n(
                      "transition",
                      { on: { enter: t.enter, leave: t.leave, css: !1 } },
                      [
                        t.$store.state.trailer.open
                          ? n("TrailerModal")
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "page-content-wrapper relative overflow-hidden min-h-screen",
                      },
                      [n("nuxt")],
                      1
                    ),
                    t._v(" "),
                    n("app-footer"),
                    t._v(" "),
                    n("CookieControl", { attrs: { locale: "en" } }),
                    t._v(" "),
                    n(
                      "svg",
                      { staticClass: "w-0 h-0 absolute pointer-events-none" },
                      [
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "header-mask",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.000532 0.0114)",
                                d: "M0 0v79.265l83.325 6.339 147.824-6.669 81.66 2.724 135.279 3.4 127.256.62 189.909-4.145 180.09 4.019 52.43.173 118.84-5.289 76.59 2.173 247.69-5.57 236.36 9.259 204.46-6.436V0H0Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "footer-mask",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.000525 0.003)",
                                d: "M1920.237 385.12V54.71l-93.22-10.33-155.04 5.49-198.27-13.62-115.92-3.69-227.96.57-220.53-12.94-132.8 3.41-80.88-6.27-255.316-.08L205.187 0 0 2.23v382.89h1920.237Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "nav-active",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.0212 0.095)",
                                d: "m0 1.75 1.478 7.999s16.895-.75 21.963 0c5.069.75 19.429-.25 20.908-.5 1.478-.25 1.9-8.749 1.9-8.749L0 1.75Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "btn-shape",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.0093 0.017)",
                                d: "M90.827 5.851s-40.2-5.078-67.581-.337c0 0-16.345-.086-17.956 11.359-2.133 11.445-.149 24.599 3.059 31.072 3.208 6.474 6.292 9.233 12.195 9.776 5.902.543 61.557.688 67.676-.358 6.119-1.045 12.025-7.464 13.017-17.064.992-9.6 7.743-30.336-10.41-34.448Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "btn-shape-long",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.00194 0.0166)",
                                d: "M500.83 5.851S55.303.773 24.974 5.514c0 0-18.105-.086-20.178 11.359-2.074 11.445.124 24.599 3.677 31.072 3.797 6.474 6.97 9.233 13.508 9.776 6.538.543 469.184.688 475.962-.358 6.777-1.045 13.319-7.464 14.418-17.064 1.099-9.6 7.6-30.336-11.531-34.448Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "section-mask-1",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.000521 0.0011)",
                                d: "M.388 893.1 0 79.427l225.876-16.326 239.402-1.054L645.013 50.07l155.653-3.679 114.302-10.215 230.002-4.415 198.13-12.347 331.18-5.674L1827.88 0 1921 1.653l-.72 891.447h.72v64.771H0v-64.77h.388Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "section-mask-2",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.000521 0.0011)",
                                d: "M1919.005 1022.583H0V0l235.075 2.448 227.67 17.991 246.37 3.173 86.12 6.755 126.65-1.31 208.33 13.023 226.18 3.602 317.85 18.455 151.58-1.616 93.18 9.258v950.804Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "game-card-mask",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.00204 0.0036)",
                                d: "m489.4 15.045-.07-6.008s-.81-6.918-8.49-6.918c-7.69 0-50.6-.345-50.6-.345s-29.66-.339-51.9.927c-22.23 1.266-43.69.701-49.16.439-5.48-.261-33.65-1.37-43.2-1.412-9.55-.041-23.59.325-33.52-.302C242.52.799 215.39.204 207.04.045c-8.35-.159-38.22.006-56.41 2.232-18.19 2.227-30.8 2.385-46.13 2.501-15.34.117-39.17-1.117-49.05-.885-9.87.232-40.08.08-45.85.212-5.77.132-7.17 3.527-7.39 5.978C2 12.534 4.43 54.19 3.32 66.148c-1.11 11.957-1.83 30.626-1.69 36.861.15 6.24-.04 26-.89 29.15-.85 3.15-.91 45.58-.49 49.91.41 4.33-.06 52.62-.06 52.62s.25 27.1 1.04 30.47c.78 3.38 1.15 8.08 6.71 8.67 5.56.59 23.98-1.64 37.82-1.58 13.83.06 35.23 1.55 47.97 1.7 12.74.15 32.58 1.72 43.98 1.5 11.39-.22 140 1.68 155.14-.39 15.14-2.07 68.29-1.48 68.29-1.48s28.19-.07 42.34 1.07c14.15 1.13 55.62 1.46 57.46 1.43 1.85-.03 20.59-.42 20.59-.42s7.17-.41 7.43-4.76c.27-4.35-2.46-19.28-2.34-25.96.11-6.68 2.2-34.86 2.51-39.64.32-4.79.27-190.254.27-190.254Z",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "clipPath",
                          {
                            attrs: {
                              id: "contact-mask",
                              clipPathUnits: "objectBoundingBox",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                transform: "scale(0.00052 0.00123)",
                                d: "M1937.73 753.883s-119.22.094-126.23-.213c-7.01-.073-109.57-.98-116.07-.8-6.5.178-64.79 4.804-71.89 4.983-5.85.18-159.75 11.408-167.27 10.615-7.53-.793-68.03.47-70.03.48-2-.495-55.03-1.033-55.03-1.033s-109.02 1.006-119 1.781c-9.98.776-77.87 6.441-92.4 5.05-14.52-.6-103.08-1.66-108.61-2.508-5.52-.37-100.417 4.27-102.416 4.325-1.999.055-119.83 8.094-136.366 6.762-16.535-1.045-177.029 1.38-186.553.643-9.524-.738-155.927 4.8-170.907 5.713-14.288.913-157.261 10.84-170.784 10.212-13.522-.628-133.642-3.318-144.638-3.014-10.995.303-49.384 4.863-54.383 5.001-4.998.138-45.154 5.166-45.154 5.166V0H1937.73v753.883Z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                );
          },
          [],
          !1,
          null,
          "585b909e",
          null
        );
      e.a = component.exports;
      installComponents(component, { Mobile: n(443).default });
    },
    268: function (t, e, n) {
      n(269), (t.exports = n(270));
    },
    295: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = function (t) {
          t.app, t.isServer;
          var e = t.route,
            n = t.store,
            o = t.isDev,
            r = e.query._storyblok || o ? "draft" : "published";
          if (!n.state.games.games._uid)
            return n.dispatch("games/loadGames", { version: r });
        });
    },
    296: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = function (t) {
          t.app, t.isServer;
          var e = t.route,
            n = t.store,
            o = t.isDev,
            r = e.query._storyblok || o ? "draft" : "published";
          if (!n.state.settings.settings._uid)
            return n.dispatch("settings/loadSettings", { version: r });
        });
    },
    307: function (t, e, n) {
      "use strict";
      n(201);
    },
    308: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".title[data-v-309da901]{margin-bottom:1.25rem;font-family:nickname, sans serif;font-size:2.25rem;line-height:2.5rem;text-transform:uppercase;--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity))}@media (min-width: 1024px){.title[data-v-309da901]{font-size:6.25rem;line-height:.8}}.text[data-v-309da901]{font-family:Montserrat, sans serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(30, 40, 48, var(--tw-text-opacity))}@media (min-width: 1024px){.text[data-v-309da901]{font-size:1.375rem;line-height:1}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    313: function (t, e, n) {
      var content = n(314);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(16).default)("a12183a8", content, !0, { sourceMap: !1 });
    },
    314: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.container{width:100%;}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}@media (min-width: 1800px){.container{max-width:1800px;}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.pointer-events-none{pointer-events:none;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.top-0{top:0px;}.left-0{left:0px;}.-top-36{top:-9rem;}.right-0{right:0px;}.-top-10{top:-2.5rem;}.-bottom-12{bottom:-3rem;}.-bottom-32{bottom:-8rem;}.bottom-0{bottom:0px;}.-bottom-14{bottom:-3.5rem;}.-left-5{left:-1.25rem;}.-left-16{left:-4rem;}.-right-8{right:-2rem;}.-left-4{left:-1rem;}.top-5{top:1.25rem;}.left-8{left:2rem;}.-top-1{top:-0.25rem;}.-left-44{left:-11rem;}.left-3{left:0.75rem;}.right-3{right:0.75rem;}.bottom-24{bottom:6rem;}.z-10{z-index:10;}.z-30{z-index:30;}.z-20{z-index:20;}.z-0{z-index:0;}.z-50{z-index:50;}.z-40{z-index:40;}.mt-3{margin-top:0.75rem;}.-mt-10{margin-top:-2.5rem;}.mt-10{margin-top:2.5rem;}.mt-5{margin-top:1.25rem;}.mb-5{margin-bottom:1.25rem;}.mt-7{margin-top:1.75rem;}.-mt-24{margin-top:-6rem;}.mt-1{margin-top:0.25rem;}.-ml-8{margin-left:-2rem;}.-mt-20{margin-top:-5rem;}.mb-8{margin-bottom:2rem;}.mt-4{margin-top:1rem;}.mt-16{margin-top:4rem;}.-mt-80{margin-top:-20rem;}.mt-2{margin-top:0.5rem;}.ml-4{margin-left:1rem;}.mt-6{margin-top:1.5rem;}.block{display:block;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.h-full{height:100%;}.h-0{height:0px;}.h-9{height:2.25rem;}.h-4{height:1rem;}.h-32{height:8rem;}.h-2{height:0.5rem;}.h-16{height:4rem;}.h-7{height:1.75rem;}.h-20{height:5rem;}.h-6{height:1.5rem;}.h-3{height:0.75rem;}.h-screen{height:100vh;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}.w-4{width:1rem;}.w-auto{width:auto;}.w-2{width:0.5rem;}.w-40{width:10rem;}.w-1\\/2{width:50%;}.w-28{width:7rem;}.w-20{width:5rem;}.w-0{width:0px;}.max-w-xl{max-width:36rem;}.max-w-5xl{max-width:64rem;}.max-w-lg{max-width:32rem;}.max-w-sm{max-width:24rem;}.max-w-2xl{max-width:42rem;}.flex-shrink-0{flex-shrink:0;}.origin-center{transform-origin:center;}.origin-right{transform-origin:right;}.rotate-0{--tw-rotate:0deg;transform:var(--tw-transform);}.rotate-1{--tw-rotate:1deg;transform:var(--tw-transform);}.rotate-2{--tw-rotate:2deg;transform:var(--tw-transform);}.rotate-3{--tw-rotate:3deg;transform:var(--tw-transform);}.rotate-6{--tw-rotate:6deg;transform:var(--tw-transform);}.rotate-12{--tw-rotate:12deg;transform:var(--tw-transform);}.rotate-45{--tw-rotate:45deg;transform:var(--tw-transform);}.-rotate-45{--tw-rotate:-45deg;transform:var(--tw-transform);}.scale-125{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform);}.scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform);}.scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform);}.scale-150{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:var(--tw-transform);}.scale-y-0{--tw-scale-y:0;transform:var(--tw-transform);}.transform{transform:var(--tw-transform);}.resize{resize:both;}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.flex-row-reverse{flex-direction:row-reverse;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-start{align-items:flex-start;}.items-end{align-items:flex-end;}.items-center{align-items:center;}.items-stretch{align-items:stretch;}.justify-start{justify-content:flex-start;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-10{gap:2.5rem;}.gap-5{gap:1.25rem;}.gap-2{gap:0.5rem;}.gap-3{gap:0.75rem;}.gap-6{gap:1.5rem;}.gap-4{gap:1rem;}.gap-8{gap:2rem;}.gap-12{gap:3rem;}.gap-1{gap:0.25rem;}.gap-y-8{row-gap:2rem;}.gap-x-3{-moz-column-gap:0.75rem;column-gap:0.75rem;}.overflow-hidden{overflow:hidden;}.rounded-full{border-radius:9999px;}.rounded-xl{border-radius:0.75rem;}.border-4{border-width:4px;}.border-l-2{border-left-width:2px;}.border-white{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));}.border-opacity-30{--tw-border-opacity:0.3;}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-primary{--tw-bg-opacity:1;background-color:rgba(34, 157, 248, var(--tw-bg-opacity));}.bg-pale{--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));}.bg-input-bg{--tw-bg-opacity:1;background-color:rgba(196, 206, 217, var(--tw-bg-opacity));}.bg-body-light{--tw-bg-opacity:1;background-color:rgba(77, 79, 92, var(--tw-bg-opacity));}.bg-dark{--tw-bg-opacity:1;background-color:rgba(3, 5, 20, var(--tw-bg-opacity));}.bg-transparent{background-color:transparent;}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));}.bg-body{--tw-bg-opacity:1;background-color:rgba(30, 40, 48, var(--tw-bg-opacity));}.bg-secondary{--tw-bg-opacity:1;background-color:rgba(244, 195, 0, var(--tw-bg-opacity));}.bg-opacity-75{--tw-bg-opacity:0.75;}.object-contain{-o-object-fit:contain;object-fit:contain;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-center{-o-object-position:center;object-position:center;}.object-right-bottom{-o-object-position:right bottom;object-position:right bottom;}.p-5{padding:1.25rem;}.p-3{padding:0.75rem;}.p-6{padding:1.5rem;}.p-10{padding:2.5rem;}.p-7{padding:1.75rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-12{padding-left:3rem;padding-right:3rem;}.py-40{padding-top:10rem;padding-bottom:10rem;}.py-16{padding-top:4rem;padding-bottom:4rem;}.px-16{padding-left:4rem;padding-right:4rem;}.px-8{padding-left:2rem;padding-right:2rem;}.pt-5{padding-top:1.25rem;}.pr-5{padding-right:1.25rem;}.pt-20{padding-top:5rem;}.pb-80{padding-bottom:20rem;}.pb-10{padding-bottom:2.5rem;}.pl-7{padding-left:1.75rem;}.pl-10{padding-left:2.5rem;}.pt-40{padding-top:10rem;}.pr-12{padding-right:3rem;}.pt-28{padding-top:7rem;}.pb-40{padding-bottom:10rem;}.pt-60{padding-top:15rem;}.pt-32{padding-top:8rem;}.pb-60{padding-bottom:15rem;}.pr-8{padding-right:2rem;}.pl-6{padding-left:1.5rem;}.text-center{text-align:center;}.font-secondary{font-family:nickname, sans serif;}.font-primary{font-family:Montserrat, sans serif;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-2xl{font-size:1.375rem;line-height:1;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-5xl{font-size:3.125rem;line-height:.9;}.text-6xl{font-size:4rem;line-height:.9;}.text-7xl{font-size:4.5rem;line-height:.8;}.text-8xl{font-size:6.25rem;line-height:.8;}.text-9xl{font-size:8rem;line-height:.8;}.text-10xl{font-size:12rem;line-height:.7;}.text-base{font-size:1rem;line-height:1.5rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.font-normal{font-weight:400;}.font-bold{font-weight:700;}.uppercase{text-transform:uppercase;}.leading-8{line-height:2rem;}.leading-loose{line-height:2;}.tracking-tight{letter-spacing:-0.025em;}.tracking-tighter{letter-spacing:-0.05em;}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.text-dark{--tw-text-opacity:1;color:rgba(3, 5, 20, var(--tw-text-opacity));}.text-secondary{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity));}.text-transparent{color:transparent;}.text-primary{--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity));}.text-body{--tw-text-opacity:1;color:rgba(30, 40, 48, var(--tw-text-opacity));}.text-body-light{--tw-text-opacity:1;color:rgba(77, 79, 92, var(--tw-text-opacity));}.text-input-text{--tw-text-opacity:1;color:rgba(113, 122, 132, var(--tw-text-opacity));}.text-pale{--tw-text-opacity:1;color:rgba(247, 249, 251, var(--tw-text-opacity));}.text-opacity-70{--tw-text-opacity:0.7;}.text-opacity-80{--tw-text-opacity:0.8;}.underline{text-decoration:underline;}.placeholder-input-text::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(113, 122, 132, var(--tw-placeholder-opacity));}.placeholder-input-text:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(113, 122, 132, var(--tw-placeholder-opacity));}.placeholder-input-text::placeholder{--tw-placeholder-opacity:1;color:rgba(113, 122, 132, var(--tw-placeholder-opacity));}.placeholder-opacity-75::-moz-placeholder{--tw-placeholder-opacity:0.75;}.placeholder-opacity-75:-ms-input-placeholder{--tw-placeholder-opacity:0.75;}.placeholder-opacity-75::placeholder{--tw-placeholder-opacity:0.75;}.opacity-40{opacity:0.4;}.opacity-20{opacity:0.2;}.opacity-60{opacity:0.6;}.outline-none{outline:2px solid transparent;outline-offset:2px;}.drop-shadow{--tw-drop-shadow:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));filter:var(--tw-filter);}.filter{filter:var(--tw-filter);}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-200{transition-duration:200ms;}.duration-100{transition-duration:100ms;}.duration-300{transition-duration:300ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}@font-face{font-family:\"nickname\";src:url(/fonts/nickname_demo-webfont.woff2) format(\"woff2\"),url(/fonts/nickname_demo-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}h1, h2, h3, h4, h5, h6{font-family:nickname, sans serif;}h1,h2,h3,h4,h5,h6,p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}p{font-family:Montserrat, sans serif;}p a,p span{font-size:inherit;font-family:inherit;font-weight:inherit}body{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}html{scroll-behavior:smooth}:root{--primary-theme:#229df8;--secondary-theme:#f4c300}.container{margin:0 auto;max-width:1536px;padding-left:1.5rem;padding-right:1.5rem}@media (min-width: 1536px){.container{padding-left:0px;padding-right:0px;}}.container--small{max-width:768px;}img{max-width:100%}.btn{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:1.125rem;line-height:1.75rem;}@media (min-width: 768px){.btn{font-size:1.25rem;line-height:1.75rem;}}.btn{color:#229df8;color:var(--primary-theme);filter:drop-shadow(2px 2px 6px rgba(0,0,0,.3))}.btn .btn-text{position:relative;z-index:10;text-align:center;font-family:nickname, sans serif;text-transform:uppercase;}.btn--shaped .btn-bg{position:absolute;left:0px;z-index:0;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));top:-2px;-webkit-clip-path:url(#btn-shape);clip-path:url(#btn-shape);}.btn--shaped .btn-bg .btn-bg-border{position:absolute;width:85%;height:85%;top:52%;left:50%;transform:translate(-50%,-50%);}@media(hover:hover){.btn--shaped:hover{--tw-text-opacity:1;color:rgba(247, 249, 251, var(--tw-text-opacity));}.btn--shaped:hover .btn-bg{--tw-bg-opacity:1;background-color:rgba(244, 195, 0, var(--tw-bg-opacity));}.btn--shaped:hover .btn-bg .btn-bg-border{--tw-text-opacity:1;color:rgba(247, 249, 251, var(--tw-text-opacity));}}.btn--round{height:3rem;width:3rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));font-size:1rem;line-height:1.5rem;}@media (min-width: 768px){.btn--round{height:4rem;}.btn--round{width:4rem;}.btn--round{font-size:1.125rem;line-height:1.75rem;}}.btn--round:after{content:\"\";position:absolute;top:0px;left:0px;border-radius:9999px;border:3px solid #229df8;border:3px solid var(--primary-theme);width:80%;height:80%;top:50%;left:50%;transform:translate(-50%,-50%)}@media(hover:hover){.btn--round:hover{--tw-text-opacity:1;color:rgba(247, 249, 251, var(--tw-text-opacity));}.btn--round:hover{background-color:#f4c300;background-color:var(--secondary-theme)}.btn--round:hover:after{border-color:#f7f9fb}}.bg-primary-theme{background-color:#229df8;background-color:var(--primary-theme)}.text-primary-theme{color:#229df8;color:var(--primary-theme)}.hover\\:rotate-12:hover{--tw-rotate:12deg;transform:var(--tw-transform);}.hover\\:scale-110:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform);}.hover\\:scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform);}.hover\\:text-secondary:hover{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity));}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.hover\\:opacity-100:hover{opacity:1;}@media (min-width: 640px){.sm\\:-mt-28{margin-top:-7rem;}.sm\\:w-8\\/12{width:66.666667%;}.sm\\:text-10xl{font-size:12rem;line-height:.7;}.sm\\:text-8xl{font-size:6.25rem;line-height:.8;}.sm\\:text-5xl{font-size:3.125rem;line-height:.9;}.sm\\:text-6xl{font-size:4rem;line-height:.9;}}@media (min-width: 768px){.md\\:-bottom-10{bottom:-2.5rem;}.md\\:-left-48{left:-12rem;}.md\\:bottom-28{bottom:7rem;}.md\\:mt-10{margin-top:2.5rem;}.md\\:-mt-72{margin-top:-18rem;}.md\\:w-5\\/12{width:41.666667%;}.md\\:w-auto{width:auto;}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:flex-nowrap{flex-wrap:nowrap;}.md\\:gap-4{gap:1rem;}.md\\:p-5{padding:1.25rem;}.md\\:px-0{padding-left:0px;padding-right:0px;}.md\\:px-12{padding-left:3rem;padding-right:3rem;}.md\\:py-60{padding-top:15rem;padding-bottom:15rem;}.md\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.md\\:pt-72{padding-top:18rem;}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.md\\:text-2xl{font-size:1.375rem;line-height:1;}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.md\\:opacity-100{opacity:1;}}@media (min-width: 1024px){.lg\\:absolute{position:absolute;}.lg\\:-bottom-24{bottom:-6rem;}.lg\\:-top-32{top:-8rem;}.lg\\:-left-14{left:-3.5rem;}.lg\\:left-12{left:3rem;}.lg\\:col-span-4{grid-column:span 4 / span 4;}.lg\\:col-span-3{grid-column:span 3 / span 3;}.lg\\:col-start-3{grid-column-start:3;}.lg\\:mt-0{margin-top:0px;}.lg\\:block{display:block;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:w-1\\/2{width:50%;}.lg\\:w-10\\/12{width:83.333333%;}.lg\\:w-9\\/12{width:75%;}.lg\\:w-5\\/12{width:41.666667%;}.lg\\:w-auto{width:auto;}.lg\\:w-52{width:13rem;}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.lg\\:grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:flex-nowrap{flex-wrap:nowrap;}.lg\\:items-stretch{align-items:stretch;}.lg\\:justify-end{justify-content:flex-end;}.lg\\:gap-0{gap:0px;}.lg\\:gap-7{gap:1.75rem;}.lg\\:gap-8{gap:2rem;}.lg\\:gap-14{gap:3.5rem;}.lg\\:object-right-top{-o-object-position:right top;object-position:right top;}.lg\\:py-60{padding-top:15rem;padding-bottom:15rem;}.lg\\:pr-8{padding-right:2rem;}.lg\\:pr-12{padding-right:3rem;}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}.lg\\:text-7xl{font-size:4.5rem;line-height:.8;}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.lg\\:text-2xl{font-size:1.375rem;line-height:1;}.lg\\:text-8xl{font-size:6.25rem;line-height:.8;}.lg\\:opacity-100{opacity:1;}}@media (min-width: 1280px){.xl\\:bottom-0{bottom:0px;}.xl\\:-right-14{right:-3.5rem;}.xl\\:bottom-40{bottom:10rem;}.xl\\:mt-28{margin-top:7rem;}.xl\\:-mt-80{margin-top:-20rem;}.xl\\:w-1\\/3{width:33.333333%;}.xl\\:w-1\\/2{width:50%;}.xl\\:w-8\\/12{width:66.666667%;}.xl\\:w-5\\/12{width:41.666667%;}.xl\\:flex-nowrap{flex-wrap:nowrap;}.xl\\:justify-start{justify-content:flex-start;}.xl\\:justify-end{justify-content:flex-end;}.xl\\:gap-28{gap:7rem;}.xl\\:gap-4{gap:1rem;}.xl\\:gap-3{gap:0.75rem;}.xl\\:p-0{padding:0px;}.xl\\:text-left{text-align:left;}}@media (min-width: 1536px){.\\32xl\\:w-1\\/3{width:33.333333%;}}@media (min-width: 1800px){.\\33xl\\:w-9\\/12{width:75%;}.\\33xl\\:w-7\\/12{width:58.333333%;}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    317: function (t, e, n) {
      "use strict";
      n(205);
    },
    318: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.menu-item[data-v-19d4da8a]{position:relative;z-index:50;height:100%;text-align:center;font-family:nickname, sans serif;font-size:1.125rem;line-height:1.75rem;font-weight:300;--tw-text-opacity:1;color:rgba(30, 40, 48, var(--tw-text-opacity))}@media (min-width: 1024px){.menu-item[data-v-19d4da8a]{font-size:1.25rem;line-height:1.75rem}}.menu-item .link[data-v-19d4da8a]{position:relative;display:flex;height:100%;width:100%;align-items:center;justify-content:center;padding-left:0.5rem;padding-right:0.5rem}.menu-item .link[data-v-19d4da8a]:before{content:"";-webkit-clip-path:url(#nav-active);clip-path:url(#nav-active);position:absolute;left:0px;top:-0.25rem;display:block;height:0.75rem;width:100%;transform-origin:top;--tw-scale-y:0;transform:var(--tw-transform);--tw-bg-opacity:1;background-color:rgba(244, 195, 0, var(--tw-bg-opacity));transition-duration:200ms;will-change:transform}.menu-item.nuxt-link-exact-active .link[data-v-19d4da8a]{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity));transition-duration:200ms;will-change:background}.menu-item.nuxt-link-exact-active .link[data-v-19d4da8a]:before{--tw-scale-y:1;transform:var(--tw-transform)}@media(hover:hover){.menu-item:hover .link[data-v-19d4da8a]:before{--tw-scale-y:1;transform:var(--tw-transform)}}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    319: function (t, e, n) {
      "use strict";
      n(206);
    },
    320: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".social-account[data-v-2d5979ca]{display:block;transition-duration:300ms}.social-account[data-v-2d5979ca]:hover{--tw-rotate:6deg;transform:var(--tw-transform);--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    321: function (t, e, n) {
      "use strict";
      n(207);
    },
    322: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.site-header[data-v-383ca758]{position:fixed;top:0px;left:0px;z-index:50;display:flex;height:5rem;width:100%;align-items:center;justify-content:flex-end;filter:drop-shadow(5px 5px 20px rgba(0,0,0,.2))}.site-header .header-logo[data-v-383ca758]{position:absolute;top:1.25rem;left:2rem;z-index:20;transition-duration:200ms}.site-header .header-logo[data-v-383ca758]:hover{--tw-rotate:12deg;transform:var(--tw-transform)}@media (min-width: 1024px){.site-header .header-logo[data-v-383ca758]{left:3rem}}.site-header .social-menu[data-v-383ca758]{position:relative;margin-left:1rem;padding-left:1.5rem}.site-header .social-menu[data-v-383ca758]:before{content:"";position:absolute;left:0px;height:1.5rem;border-left-width:2px;--tw-border-opacity:1;border-color:rgba(34, 157, 248, var(--tw-border-opacity));--tw-border-opacity:0.3;top:50%;transform:translateY(-50%)}.site-header .menu-btn[data-v-383ca758]{position:absolute;top:0px;right:0px;z-index:30;height:100%;flex-direction:column;justify-content:center;gap:0.25rem;padding:1.5rem;transition-duration:300ms}.site-header .menu-btn .line[data-v-383ca758]{position:relative;right:0px;display:block;transform-origin:right;--tw-bg-opacity:1;background-color:rgba(30, 40, 48, var(--tw-bg-opacity));transition-duration:300ms;height:2px}.site-header .menu-btn.active .line--top[data-v-383ca758]{top:14px;right:3px}.site-header .menu-btn.active .line--bottom[data-v-383ca758]{bottom:14px;right:3px}.site-header .header-bg[data-v-383ca758]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));-webkit-clip-path:url(#header-mask);clip-path:url(#header-mask)}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    323: function (t, e, n) {
      "use strict";
      n(208);
    },
    324: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.menu-item[data-v-7cabcde7]{position:relative;z-index:50;height:100%;text-align:center;font-family:nickname, sans serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}@media (min-width: 1024px){.menu-item[data-v-7cabcde7]{font-size:1.375rem;line-height:1}}@media (min-width: 1280px){.menu-item[data-v-7cabcde7]:not(:first-child){margin-left:0.75rem}.menu-item[data-v-7cabcde7]:not(:first-child):before{content:""}.menu-item[data-v-7cabcde7]:not(:first-child):before{position:absolute}.menu-item[data-v-7cabcde7]:not(:first-child):before{left:-1rem}.menu-item[data-v-7cabcde7]:not(:first-child):before{height:1.75rem}.menu-item[data-v-7cabcde7]:not(:first-child):before{border-left-width:2px}.menu-item[data-v-7cabcde7]:not(:first-child):before{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}.menu-item[data-v-7cabcde7]:not(:first-child):before{opacity:0.2}.menu-item[data-v-7cabcde7]:not(:first-child):before{top:50%;transform:translateY(-50%)}}.menu-item .link[data-v-7cabcde7]{position:relative;display:flex;height:100%;width:100%;align-items:center;justify-content:center;transition-duration:200ms}.menu-item.nuxt-link-exact-active .link[data-v-7cabcde7]{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity));transition-duration:200ms}@media(hover:hover){.menu-item:hover .link[data-v-7cabcde7]{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity))}}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    325: function (t, e, n) {
      "use strict";
      n(209);
    },
    326: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.text-content{position:relative}.text-content h1, .text-content h2, .text-content h3, .text-content h4, .text-content h5, .text-content h6{margin-bottom:1.25rem;font-family:nickname, sans serif;text-transform:uppercase;--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity))}.text-content h1{font-size:3.125rem;line-height:.9}@media (min-width: 1024px){.text-content h1{font-size:4rem;line-height:.9}}.text-content h2{font-size:2.25rem;line-height:2.5rem}@media (min-width: 1024px){.text-content h2{font-size:3.125rem;line-height:.9}}.text-content h3{font-size:1.875rem;line-height:2.25rem}@media (min-width: 1024px){.text-content h3{font-size:2.25rem;line-height:2.5rem}}.text-content h4{font-size:1.375rem;line-height:1}@media (min-width: 1024px){.text-content h4{font-size:1.875rem;line-height:2.25rem}}.text-content p{font-family:inherit;color:inherit;font-weight:inherit}.text-content p:not(:last-child){margin-bottom:1.25rem}.text-content p a{--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity));--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));text-decoration:underline;transition-duration:100ms}.text-content ol, .text-content ul{margin-bottom:1.25rem;display:block;list-style-type:none}.text-content li{position:relative;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1.75rem}.text-content li p{font-weight:700}.text-content ul li:before{content:"";position:absolute;left:0px;height:0.5rem;width:0.5rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(34, 157, 248, var(--tw-bg-opacity));top:.625rem}.text-content ol{counter-reset:number-counter}.text-content ol li{counter-increment:number-counter;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2.5rem}.text-content ol li:before{content:counter(number-counter);position:absolute;top:0px;left:0px;--tw-rotate:-12deg;transform:var(--tw-transform);font-family:nickname, sans serif;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity))}.text-content ol li:nth-child(odd):before{--tw-rotate:12deg;transform:var(--tw-transform)}.text-content.standard-text{font-family:Montserrat, sans serif;font-size:1rem;line-height:1.5rem}.text-content.standard-text a{--tw-text-opacity:1;color:rgba(34, 157, 248, var(--tw-text-opacity))}.text-content.small-text{font-size:0.875rem;line-height:1.25rem}.text-content.footer-text p:not(:last-child){margin-bottom:0.5rem}.text-content.footer-text p a{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));text-decoration:underline;transition-duration:200ms}.text-content.footer-text p a:hover{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity));text-decoration:none}.text-content.font-primary>p, .text-content.font-primary li{font-family:Montserrat, sans serif}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    327: function (t, e, n) {
      "use strict";
      n(210);
    },
    328: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.site-footer[data-v-10a5d72d]{position:relative;z-index:0;margin-top:-7rem;width:100%;padding-top:4rem;padding-bottom:4rem}.site-footer .footer-col[data-v-10a5d72d]{position:relative}@media (min-width: 1280px){.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{content:""}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{position:absolute}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{left:-1.25rem}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{height:4rem}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{border-left-width:2px}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{opacity:0.2}@media (min-width: 1024px){.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{left:-3.5rem}}.site-footer .footer-col[data-v-10a5d72d]:not(:first-child):before{top:50%;transform:translateY(-50%)}}.site-footer .footer-bg[data-v-10a5d72d]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(34, 157, 248, var(--tw-bg-opacity));-webkit-clip-path:url(#footer-mask);clip-path:url(#footer-mask)}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    329: function (t, e, n) {
      "use strict";
      n(211);
    },
    330: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".media-image{position:relative;display:block;height:0px;width:100%;overflow:hidden;transition-duration:200ms;will-change:transform;filter:drop-shadow(5px 5px 8px rgba(0,0,0,.5));padding-top:56.25%}.media-image .image-wrapper{position:absolute;top:0px;left:0px;height:100%;width:100%;overflow:hidden;-webkit-clip-path:url(#game-card-mask);clip-path:url(#game-card-mask)}.media-image .image{z-index:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;transition-duration:200ms;will-change:transform}@media(hover:hover){.media-image.media-item-button:hover{z-index:40}.media-image.media-item-button:hover .image{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    331: function (t, e, n) {
      "use strict";
      n(212);
    },
    332: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".media-video{position:relative;display:block;height:0px;width:100%;overflow:hidden;transition-duration:200ms;filter:drop-shadow(5px 5px 8px rgba(0,0,0,.5));padding-top:56.25%}.media-video .image, .media-video .video-embed, .media-video iframe{position:absolute;top:0px;left:0px;height:100%;width:100%}.media-video .image-wrapper{position:absolute;top:0px;left:0px;height:100%;width:100%;overflow:hidden;-webkit-clip-path:url(#game-card-mask);clip-path:url(#game-card-mask)}.media-video .image{-o-object-fit:cover;object-fit:cover}.media-video.media-item-button .play-btn{position:absolute;top:0px;left:0px;z-index:20;z-index:10;height:100%;width:100%}.media-video.media-item-button .image{z-index:0;transition-duration:200ms}@media(hover:hover){.media-video.media-item-button:hover{z-index:40}.media-video.media-item-button:hover .image{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}.media-video.media-item-button:hover .btn{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform)}.media-video.media-item-button:hover .btn{--tw-text-opacity:1;color:rgba(247, 249, 251, var(--tw-text-opacity))}.media-video.media-item-button:hover .btn{background-color:var(--secondary-theme)}.media-video.media-item-button:hover .btn:after{border-color:#f7f9fb}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    334: function (t, e, n) {
      "use strict";
      n(213);
    },
    335: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".media-modal{position:fixed;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center;z-index:200}.media-modal--close{position:absolute;top:0px;right:0px;outline:2px solid transparent;outline-offset:2px;z-index:250;transition:.3s ease-in-out}@media(hover:hover){.media-modal--close:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform)}.media-modal--close:hover{transform:var(--tw-transform)}.media-modal--close:hover{outline:2px solid transparent;outline-offset:2px}}.media-modal-content{position:relative;background-color:transparent;padding:1.25rem;width:1400px;max-width:90vw;z-index:350}.media-modal-content .slick-arrow{position:absolute;z-index:20;display:block;transform-origin:center;top:50%;transform:translateY(-50%);filter:drop-shadow(2px 2px 5px rgba(0,0,0,.4))}.media-modal-content .slick-arrow .icon{transition-duration:200ms;will-change:transform}.media-modal-content .slick-arrow.slick-prev{left:2rem}.media-modal-content .slick-arrow.slick-next{right:2rem}@media(hover:hover){.media-modal-content .slick-arrow:hover .icon{--tw-rotate:6deg;transform:var(--tw-transform)}.media-modal-content .slick-arrow:hover .icon{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}}.media-modal-bg{position:absolute;top:0px;left:0px;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.75}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    336: function (t, e, n) {
      "use strict";
      n(214);
    },
    337: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".trailer-modal{position:fixed;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center;z-index:200}.trailer-modal .modal-close{position:absolute;top:0px;right:0px;outline:2px solid transparent;outline-offset:2px;z-index:250;transition:.3s ease-in-out}@media(hover:hover){.trailer-modal .modal-close:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:var(--tw-transform)}.trailer-modal .modal-close:hover{transform:var(--tw-transform)}.trailer-modal .modal-close:hover{outline:2px solid transparent;outline-offset:2px}}.trailer-modal .modal-content{position:relative;background-color:transparent;padding:1.25rem;width:1400px;max-width:90vw;z-index:350}.trailer-modal .modal-content .video-embed{position:relative;height:0px;padding-top:56.25%}.trailer-modal .modal-content .video-embed iframe{position:absolute;top:0px;height:100%;width:100%}.trailer-modal .modal-bg{position:absolute;top:0px;left:0px;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.75}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    338: function (t, e, n) {
      "use strict";
      n(215);
    },
    339: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".site-wrapper[data-v-585b909e]{position:relative;width:100%;overflow:hidden}.site-wrapper .page-content-wrapper[data-v-585b909e]{will-change:opacity;transition:opacity .3s ease-in}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    340: function (t, e, n) {
      "use strict";
      n(216);
    },
    341: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".menu-item[data-v-6cecb6e0]{text-align:center;font-family:nickname, sans serif;font-size:1.875rem;line-height:2.25rem;text-transform:uppercase;--tw-text-opacity:1;color:rgba(30, 40, 48, var(--tw-text-opacity))}.menu-item.nuxt-link-exact-active .link[data-v-6cecb6e0]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));transition-duration:200ms;will-change:background}@media(hover:hover){.menu-item:hover .link[data-v-6cecb6e0]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    342: function (t, e, n) {
      "use strict";
      n(217);
    },
    343: function (t, e, n) {
      var o = n(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        '.mobile-menu[data-v-ec47fc72]{position:fixed;top:0px;right:0px;z-index:40;display:flex;width:50%;align-items:center;justify-content:flex-end;--tw-bg-opacity:1;background-color:rgba(244, 195, 0, var(--tw-bg-opacity));padding:2.5rem;height:calc(100vh + 200px);transition:background-color .3s ease-in-out}.mobile-menu .mobile-menus[data-v-ec47fc72]{align-items:stretch;justify-content:flex-end}.mobile-menu[data-v-ec47fc72]:before{pointer-events:none;position:absolute;top:0px;left:-11rem;display:block;height:100%;--tw-bg-opacity:1;background-color:rgba(244, 195, 0, var(--tw-bg-opacity))}@media (min-width: 768px){.mobile-menu[data-v-ec47fc72]:before{left:-12rem}}.mobile-menu[data-v-ec47fc72]:before{z-index:-1;width:150%;transform:rotate(-10deg);content:""}',
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    344: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        }),
        n.d(e, "actions", function () {
          return c;
        });
      var o = function () {
          return { windowWidth: null };
        },
        r = {},
        l = {
          setWidth: function (t, e) {
            t.windowWidth = e;
          },
        },
        c = {
          setWindowWidth: function (t, e) {
            var n = this,
              o = t.commit;
            (this.windowWidth = window.innerWidth),
              window.addEventListener("resize", function () {
                n.windowWidth = window.innerWidth;
              }),
              o("setWidth", this.windowWidth);
          },
        };
    },
    345: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        }),
        n.d(e, "actions", function () {
          return c;
        });
      var o = function () {
          return { games: {} };
        },
        r = {
          getGames: function (t) {
            return t.games.data.stories;
          },
        },
        l = {
          setGames: function (t, e) {
            t.games = e;
          },
        },
        c = {
          loadGames: function (t, e) {
            var n = t.commit;
            return this.$storyapi
              .get("cdn/stories/", {
                starts_with: "games/",
                resolve_links: "url",
                per_page: 24,
                page: 1,
                is_startpage: 0,
                sort_by: "content.release_date:desc",
                resolve_relations: "",
                version: e.version,
              })
              .then(function (t) {
                n("setGames", t);
              });
          },
        };
    },
    346: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        });
      var o = function () {
          return { open: !1, item: null, items: null };
        },
        r = {
          isMediaOpen: function (t) {
            return t.open;
          },
        },
        l = {
          toggleMedia: function (t, e) {
            (t.open = !t.open), (t.items = e.items), (t.item = e.item);
          },
        };
    },
    347: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        });
      var o = function () {
          return { open: !1 };
        },
        r = {
          isMenuOpen: function (t) {
            return t.open;
          },
        },
        l = {
          toggleMenu: function (t, e) {
            "close" === e && (t.open = !1),
              "open" === e && (t.open = !0),
              e || (t.open = !t.open);
          },
        };
    },
    348: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        }),
        n.d(e, "actions", function () {
          return c;
        });
      var o = function () {
          return { settings: {} };
        },
        r = {
          getSettings: function (t) {
            return t.settings;
          },
        },
        l = {
          setSettings: function (t, e) {
            t.settings = e;
          },
        },
        c = {
          loadSettings: function (t, e) {
            var n = t.commit;
            return this.$storyapi
              .get("cdn/stories/settings", {
                resolve_links: "url",
                resolve_relations: "",
                version: e.version,
              })
              .then(function (t) {
                n("setSettings", t.data.story.content);
              });
          },
        };
    },
    349: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "getters", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        });
      var o = function () {
          return { open: !1, trailer: null };
        },
        r = {
          isTrailerOpen: function (t) {
            return t.open;
          },
          getTrailer: function (t) {
            return t.trailer;
          },
        },
        l = {
          toggleTrailer: function (t, e) {
            (t.open = !t.open), (t.trailer = e.trailer);
          },
        };
    },
    350: function (t, e, n) {
      var map = {
        "./de": 218,
        "./de.js": 218,
        "./en": 143,
        "./en.js": 143,
        "./es": 219,
        "./es.js": 219,
        "./fr": 220,
        "./fr.js": 220,
        "./hr": 221,
        "./hr.js": 221,
        "./hu": 222,
        "./hu.js": 222,
        "./it": 223,
        "./it.js": 223,
        "./ja": 224,
        "./ja.js": 224,
        "./no": 225,
        "./no.js": 225,
        "./pt": 226,
        "./pt.js": 226,
        "./ru": 227,
        "./ru.js": 227,
        "./uk": 228,
        "./uk.js": 228,
      };
      function o(t) {
        var e = r(t);
        return n(e);
      }
      function r(t) {
        if (!n.o(map, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[t];
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.resolve = r),
        (t.exports = o),
        (o.id = 350);
    },
    360: function (t, e) {},
    443: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(264),
        r = n(45),
        l = {
          components: { MenuItem: o.default, SocialAccount: r.default },
          props: {},
          data: function () {
            return { active: !1 };
          },
          computed: {
            getSettings: function () {
              return this.$store.getters["settings/getSettings"];
            },
            logoLink: function () {
              return { path: "/", hash: "top" };
            },
          },
          methods: {
            toggleMenu: function () {
              this.active = !this.active;
            },
            scrolled: function () {
              this.scroll = window.pageYOffset;
            },
          },
        },
        c = (n(342), n(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "mobile-menu" }, [
              n(
                "div",
                { staticClass: "mobile-menus flex flex-col items-center" },
                [
                  t.getSettings.header_menu && t.getSettings.header_menu.length
                    ? n("nav", { staticClass: "mobile-menu-menu" }, [
                        n(
                          "ul",
                          {
                            staticClass:
                              "menu flex flex-col items-end gap-2 md:gap-4",
                          },
                          t._l(t.getSettings.header_menu, function (link) {
                            return n("MenuItem", {
                              key: link._uid,
                              attrs: { blok: link },
                            });
                          }),
                          1
                        ),
                      ])
                    : t._e(),
                  t._v(" "),
                  n(
                    "ul",
                    {
                      staticClass:
                        "flex h-full items-stretch justify-end gap-4 mt-10",
                    },
                    t._l(t.getSettings.header_social, function (t) {
                      return n(
                        "li",
                        { key: t._uid, staticClass: "social-wrapper" },
                        [
                          n("SocialAccount", {
                            staticClass: "text-3xl text-body hover:text-white",
                            attrs: { account: t },
                          }),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          "ec47fc72",
          null
        );
      e.default = component.exports;
      installComponents(component, { SocialAccount: n(45).default });
    },
    45: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: {},
          props: { account: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {},
          methods: {},
        },
        r = (n(319), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "a",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.account,
                    expression: "account",
                  },
                ],
                staticClass: "social-account",
                attrs: {
                  href: t.account.link.url,
                  target: "_blank",
                  rel: "noreferer, noopener",
                },
              },
              [
                n("span", {
                  staticClass: "account-icon",
                  domProps: { innerHTML: t._s(t.account.icon) },
                }),
                t._v(" "),
                n("span", { staticClass: "sr-only" }, [
                  t._v(t._s(t.account.name)),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "2d5979ca",
          null
        );
      e.default = component.exports;
    },
    58: function (t, e, n) {
      "use strict";
      var o = {
          props: ["error"],
          head: function () {
            return {
              title: "".concat(this.error.statusCode, " - Capybara Games"),
            };
          },
        },
        r = (n(307), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass:
                  "h-screen flex flex-col items-center justify-center",
              },
              [
                404 === t.error.statusCode
                  ? n("div", { staticClass: "content text-center" }, [
                      n("h1", { staticClass: "title" }, [t._v("404")]),
                      t._v(" "),
                      n("p", { staticClass: "text" }, [
                        t._v(
                          "We couldn't find that page. Please go back and try another page."
                        ),
                      ]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "flex justify-center mt-10" },
                        [
                          n(
                            "nuxt-link",
                            {
                              staticClass: "btn btn--shaped py-3 px-8",
                              attrs: { to: "/" },
                            },
                            [
                              n("span", { staticClass: "btn-text" }, [
                                t._v("Go Home"),
                              ]),
                              t._v(" "),
                              n("div", { staticClass: "btn-bg" }, [
                                n(
                                  "svg",
                                  {
                                    staticClass: "btn-bg-border text-primary",
                                    attrs: {
                                      viewBox: "0 0 107 62",
                                      preserveAspectRatio: "none",
                                    },
                                  },
                                  [
                                    n("path", {
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
                    ])
                  : n("div", { staticClass: "content text-center" }, [
                      n("h1", { staticClass: "title" }, [t._v("OOPS.")]),
                      t._v(" "),
                      n("p", { staticClass: "text" }, [
                        t._v(
                          "Something went wrong. Please refresh and try again."
                        ),
                      ]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "flex justify-center mt-10" },
                        [
                          n(
                            "nuxt-link",
                            {
                              staticClass: "btn btn--shaped py-3 px-8",
                              attrs: { to: "/" },
                            },
                            [
                              n("span", { staticClass: "btn-text" }, [
                                t._v("Go Home"),
                              ]),
                              t._v(" "),
                              n("div", { staticClass: "btn-bg" }, [
                                n(
                                  "svg",
                                  {
                                    staticClass: "btn-bg-border text-primary",
                                    attrs: {
                                      viewBox: "0 0 107 62",
                                      preserveAspectRatio: "none",
                                    },
                                  },
                                  [
                                    n("path", {
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
              ]
            );
          },
          [],
          !1,
          null,
          "309da901",
          null
        );
      e.a = component.exports;
    },
  },
  [[268, 30, 4, 31]],
]);
