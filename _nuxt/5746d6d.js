(window.webpackJsonp = window.webpackJsonp || []).push([
  [27, 9, 18],
  {
    446: function (t, e, o) {
      var content = o(450);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("b407ff8e", content, !0, { sourceMap: !1 });
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
    484: function (t, e, o) {
      var content = o(512);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("3ebe81b7", content, !0, { sourceMap: !1 });
    },
    511: function (t, e, o) {
      "use strict";
      o(484);
    },
    512: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".game-hero[data-v-05b9a3ba]{position:relative;z-index:0;height:0px;width:100%;overflow:hidden;padding-top:150%}@media (min-width: 768px){.game-hero[data-v-05b9a3ba]{padding-top:100%}}@media (min-width: 1024px){.game-hero[data-v-05b9a3ba]{padding-top:56.25%}}@media (min-width: 1536px){.game-hero[data-v-05b9a3ba]{padding-top:50%}}.game-hero .game-logo-wrapper[data-v-05b9a3ba]{will-change:transform}.game-hero .platforms[data-v-05b9a3ba]{position:relative;filter:drop-shadow(2px 2px 6px rgba(0,0,0,.3))}@media(hover:hover){.game-hero .platforms .platform[data-v-05b9a3ba]:hover{color:var(--secondary-theme)}}.game-hero .platforms .platforms-bg[data-v-05b9a3ba]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;-webkit-clip-path:url(#btn-shape-long);clip-path:url(#btn-shape-long)}.game-hero .container[data-v-05b9a3ba]{position:absolute;top:0px;left:0px;right:0px;z-index:20;display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center}@media (min-width: 1280px){.game-hero .container[data-v-05b9a3ba]{justify-content:flex-end}.game-hero .container[data-v-05b9a3ba]{padding-bottom:15rem}}.game-hero .hero-bg[data-v-05b9a3ba]{pointer-events:none;position:absolute;top:0px;left:0px;z-index:0;margin-top:2.5rem;height:100%;width:100%}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    513: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          components: { GamePlatform: o(452).default },
          props: { game: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {
            openTrailer: function () {
              this.$store.commit("trailer/toggleTrailer", {
                trailer: this.game.content.trailer_embed,
              });
            },
          },
        },
        r = (o(511), o(3)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o("article", { ref: "section", staticClass: "game-hero" }, [
              o("div", { staticClass: "container" }, [
                o(
                  "div",
                  {
                    staticClass:
                      "game-logo-wrapper hover:scale-110 duration-200 ease-in-out block px-10 md:px-0",
                  },
                  [
                    t.game.content.logo && t.game.content.logo.filename
                      ? o("nuxt-img", {
                          staticClass:
                            "game-logo w-full h-full object-contain block",
                          attrs: {
                            provider: "storyblok",
                            width: "600",
                            height: "250",
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
                      "game-extras mt-10 xl:mt-28 w-full flex flex-wrap items-center justify-center gap-2",
                  },
                  [
                    t.game.content.trailer_embed
                      ? o(
                          "button",
                          {
                            staticClass:
                              "btn btn--round p-5 hover:scale-110 duration-200",
                            on: { click: t.openTrailer },
                          },
                          [t._m(0)]
                        )
                      : t._e(),
                    t._v(" "),
                    t.game.content.platforms && t.game.content.platforms.length
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
                                  "relative z-10 text-white platform duration-200 h-9",
                                attrs: { platform: t },
                              });
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "platforms-bg bg-primary-theme",
                            }),
                          ],
                          2
                        )
                      : t._e(),
                  ]
                ),
              ]),
              t._v(" "),
              o(
                "div",
                { staticClass: "hero-bg" },
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
            ]);
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
          "05b9a3ba",
          null
        );
      e.default = component.exports;
    },
    516: function (t, e, o) {
      var content = o(533);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(16).default)("6fee871c", content, !0, { sourceMap: !1 });
    },
    532: function (t, e, o) {
      "use strict";
      o(516);
    },
    533: function (t, e, o) {
      var n = o(15)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".game-details-page[data-v-21e1fbae]{background-color:var(--primary-theme)}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    542: function (t, e, o) {
      "use strict";
      o.r(e);
      o(26), o(25), o(59);
      var n = o(538),
        r = {
          components: { GameHero: o(513).default, Game: n.default },
          data: function () {
            return { story: { content: {} }, st: null, tl: null };
          },
          computed: {
            primaryColor: function () {
              return this.story.content.primary_color &&
                this.story.content.primary_color.color
                ? this.story.content.primary_color.color
                : "#229df8";
            },
            secondaryColor: function () {
              return this.story.content.secondary_color &&
                this.story.content.secondary_color.color
                ? this.story.content.secondary_color.color
                : "#f4c300";
            },
            accentColor: function () {
              return this.story.content.accent_color &&
                this.story.content.accent_color.color
                ? this.story.content.accent_color.color
                : "#030514";
            },
          },
          mounted: function () {
            var t = this;
            this.$storybridge.resolveRelations([], function (data) {
              "input" === data.action
                ? data.story.id === t.story.id &&
                  (t.story.content = data.story.content)
                : window.location.reload();
            });
          },
          asyncData: function (t) {
            var e = t.query._storyblok || t.isDev ? "draft" : "published";
            return t.app.$storyapi
              .get("cdn/stories/games/".concat(t.route.params.slug), {
                version: e,
                resolve_relations: "",
                resolve_links: "url",
              })
              .then(function (t) {
                return t.data;
              })
              .catch(function (e) {
                t.error({
                  statusCode: e.response.status,
                  message: e.response.data,
                });
              });
          },
          head: function () {
            return {
              title:
                this.story.content.meta && this.story.content.meta.title
                  ? "".concat(
                      this.story.content.meta.title,
                      " - Capybara Games"
                    )
                  : "".concat(this.story.name, " - Capybara Games"),
              meta: [
                {
                  hid: "description",
                  name: "description",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.description
                      ? this.story.content.meta.description
                      : "",
                },
                {
                  property: "og:title",
                  content:
                    this.story.content.meta && this.story.content.meta.og_title
                      ? this.story.content.meta.og_title
                      : "".concat(this.story.name, " - Capybara Games"),
                },
                {
                  property: "og:description",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.og_description
                      ? this.story.content.meta.og_description
                      : "",
                },
                {
                  property: "og:image",
                  content:
                    this.story.content.meta && this.story.content.meta.og_image
                      ? this.story.content.meta.og_image
                      : "",
                },
                {
                  name: "twitter:card",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.twitter_description
                      ? this.story.content.meta.twitter_description
                      : "",
                },
                {
                  name: "twitter:title",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.twitter_title
                      ? this.story.content.meta.twitter_title
                      : "",
                },
                {
                  name: "twitter:description",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.twitter_description
                      ? this.story.content.meta.twitter_description
                      : "",
                },
                {
                  name: "twitter:image",
                  content:
                    this.story.content.meta &&
                    this.story.content.meta.twitter_image
                      ? this.story.content.meta.twitter_image
                      : "",
                },
              ],
            };
          },
        },
        c = (o(532), o(3)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              {
                staticClass: "relative game-details-page min-h-screen",
                style:
                  "--primary-theme: " +
                  t.primaryColor +
                  "; --secondary-theme: " +
                  t.secondaryColor +
                  "; --accent-theme: " +
                  t.accentColor,
              },
              [
                o("GameHero", { attrs: { game: t.story } }),
                t._v(" "),
                o(
                  "div",
                  { staticClass: "game-details-components" },
                  [
                    t.story.content.component
                      ? o(t.story.content.component.replace("_", "-"), {
                          key: t.story.content._uid,
                          tag: "component",
                          attrs: {
                            blok: t.story.content,
                            game: t.story,
                            "page-name": t.story.name,
                            "primary-color": t.primaryColor,
                          },
                        })
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
          "21e1fbae",
          null
        );
      e.default = component.exports;
      installComponents(component, { GameHero: o(513).default });
    },
  },
]);
