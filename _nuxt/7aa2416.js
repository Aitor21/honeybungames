(window.webpackJsonp = window.webpackJsonp || []).push([
  [2, 7, 8, 10, 11, 13],
  {
    457: function (t, e, r) {
      var content = r(470);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("255e5c74", content, !0, { sourceMap: !1 });
    },
    458: function (t, e, r) {
      var content = r(480);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("780b606c", content, !0, { sourceMap: !1 });
    },
    459: function (t, e, r) {
      var content = r(482);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("6b330287", content, !0, { sourceMap: !1 });
    },
    464: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = {
          components: { RichText: r(118).default },
          props: { feature: { required: !0, type: Object } },
          data: function () {
            return {};
          },
          mounted: function () {},
          computed: {},
          methods: {},
        },
        l = (r(481), r(3)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "article",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.feature,
                    expression: "feature",
                  },
                ],
                staticClass: "game-feature",
              },
              [
                r(
                  "p",
                  {
                    staticClass:
                      "text-white small-heading font-secondary text-base md:text-lg lg:text-xl tracking-tight",
                  },
                  [t._v(t._s(t.feature.small_heading))]
                ),
                t._v(" "),
                r("div", { staticClass: "game-feature-image w-full" }, [
                  r(
                    "div",
                    { staticClass: "image-wrapper" },
                    [
                      t.feature.image && t.feature.image.filename
                        ? r("nuxt-img", {
                            staticClass:
                              "image absolute top-0 left-0 block w-full h-full object-cover object-center",
                            attrs: {
                              provider: "storyblok",
                              width: "800",
                              height: "800",
                              loading: "lazy",
                              fit: "in",
                              alt: t.feature.image.alt,
                              src: t.feature.image.filename,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                r(
                  "div",
                  { staticClass: "game-feature-content w-full pt-5" },
                  [
                    r(
                      "h1",
                      {
                        staticClass:
                          "text-dark text-xl md:text-2xl lg:text-4xl tracking-tight",
                      },
                      [t._v(t._s(t.feature.title))]
                    ),
                    t._v(" "),
                    r("RichText", {
                      staticClass:
                        "feature-text text-dark font-primary mt-3 text-opacity-70 pr-5 lg:pr-8",
                      attrs: { blok: t.feature.text },
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
          "9ab8d830",
          null
        );
      e.default = component.exports;
      installComponents(component, { RichText: r(118).default });
    },
    469: function (t, e, r) {
      "use strict";
      r(457);
    },
    470: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".community[data-v-399a8650]{margin-top:-5rem;padding-top:7rem;padding-bottom:20rem}@media (min-width: 1024px){.community[data-v-399a8650]{padding-top:13rem;padding-bottom:13rem}}.community .container[data-v-399a8650]{position:relative;z-index:20}.community .community-graphic[data-v-399a8650]{position:absolute;bottom:0px;right:0px;z-index:10;height:100%;width:100%}.community .community-graphic--main[data-v-399a8650]{display:flex;align-items:flex-end;justify-content:flex-end;overflow:hidden}.community .input[data-v-399a8650]{-webkit-clip-path:url(#btn-shape-long);clip-path:url(#btn-shape-long)}.community .section-bg[data-v-399a8650]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(247, 249, 251, var(--tw-bg-opacity));-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}.community .section-bg .bg-image-wrapper[data-v-399a8650]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.community .section-bg .image[data-v-399a8650]{opacity:.06}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    478: function (t, e, r) {
      var content = r(508);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("e545673a", content, !0, { sourceMap: !1 });
    },
    479: function (t, e, r) {
      "use strict";
      r(458);
    },
    480: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".main-feature[data-v-5a4f3c6d]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:1.5rem}@media (min-width: 768px){.main-feature[data-v-5a4f3c6d]{flex-wrap:nowrap}}@media (min-width: 1024px){.main-feature[data-v-5a4f3c6d]{gap:3.5rem}}@media (min-width: 1280px){.main-feature[data-v-5a4f3c6d]{gap:7rem}}.main-feature .main-feature-image .image-wrapper[data-v-5a4f3c6d]{position:relative;height:0px;width:100%;overflow:hidden;border-radius:0.75rem;background-color:var(--secondary-theme);box-shadow:0 0 20px rgba(0,0,0,.5);padding-top:56.25%}@media (min-width: 768px){.main-feature .main-feature-image .image-wrapper[data-v-5a4f3c6d]{padding-top:90%}.feature-wrapper:nth-child(2n) .main-feature[data-v-5a4f3c6d]{flex-direction:row-reverse}.feature-wrapper:nth-child(2n) .main-feature[data-v-5a4f3c6d]{text-align:right}.feature-wrapper:nth-child(2n) .main-feature .feature-text[data-v-5a4f3c6d]{margin-left:auto}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    481: function (t, e, r) {
      "use strict";
      r(459);
    },
    482: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".game-feature[data-v-9ab8d830]{position:relative;display:block}.game-feature .game-feature-image[data-v-9ab8d830]{filter:drop-shadow(0 0 20px rgba(0,0,0,.5))}.game-feature .game-feature-image .image-wrapper[data-v-9ab8d830]{position:relative;height:0px;width:100%;overflow:hidden;-webkit-clip-path:url(#game-card-mask);clip-path:url(#game-card-mask);background-color:var(--secondary-theme);padding-top:56.25%}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    483: function (t, e, r) {
      var content = r(510);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("064e1f23", content, !0, { sourceMap: !1 });
    },
    487: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(118),
        l = r(45),
        n = {
          components: { RichText: o.default, SocialAccount: l.default },
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
        c = (r(469), r(3)),
        component = Object(c.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
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
                r(
                  "div",
                  {
                    staticClass:
                      "container flex flex-col lg:flex-row lg:items-stretch",
                  },
                  [
                    r(
                      "div",
                      {
                        staticClass:
                          "community-content relative z-10 w-full lg:w-1/2 xl:w-1/3",
                      },
                      [
                        r("div", {
                          ref: "title",
                          staticClass:
                            "title text-body text-7xl sm:text-8xl tracking-tighter",
                          domProps: {
                            innerHTML: t._s(t.$md.render(t.blok.title)),
                          },
                        }),
                        t._v(" "),
                        r(
                          "div",
                          { ref: "text", staticClass: "text-wrapper" },
                          [
                            r("RichText", {
                              staticClass:
                                "text-body-light font-primary font-normal text-base md:text-lg leading-8 mt-7 max-w-xl pr-12",
                              attrs: { blok: t.blok.text },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        t.blok.social_links && t.blok.social_links.length
                          ? r(
                              "div",
                              {
                                ref: "social",
                                staticClass: "social-links mt-7",
                              },
                              [
                                r(
                                  "ul",
                                  {
                                    staticClass:
                                      "menu flex items-center items-end gap-5 h-full",
                                  },
                                  t._l(t.blok.social_links, function (t) {
                                    return r(
                                      "li",
                                      { key: t._uid },
                                      [
                                        r("SocialAccount", {
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
                        r("div", { ref: "newsletter" }, [
                          r("div", { attrs: { id: "sib-form-container" } }, [
                            r(
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
                                r(
                                  "div",
                                  {
                                    staticClass:
                                      "sib-form-message-panel__text sib-form-message-panel__text--center",
                                  },
                                  [
                                    r(
                                      "svg",
                                      {
                                        staticClass:
                                          "sib-icon sib-notification__icon",
                                        attrs: { viewBox: "0 0 512 512" },
                                      },
                                      [
                                        r("path", {
                                          attrs: {
                                            d: "M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z",
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    r(
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
                            r("div"),
                            t._v(" "),
                            r(
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
                                r(
                                  "div",
                                  {
                                    staticClass:
                                      "sib-form-message-panel__text sib-form-message-panel__text--center",
                                  },
                                  [
                                    r(
                                      "svg",
                                      {
                                        staticClass:
                                          "sib-icon sib-notification__icon",
                                        attrs: { viewBox: "0 0 512 512" },
                                      },
                                      [
                                        r("path", {
                                          attrs: {
                                            d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z",
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    r(
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
                            r(
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
                                r(
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
                                    r(
                                      "div",
                                      {
                                        staticClass:
                                          "form-row flex items-stretch mt-1 w-full",
                                      },
                                      [
                                        r("input", {
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
                                        r(
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
                                            r(
                                              "span",
                                              { staticClass: "btn-text" },
                                              [t._v("Sign up")]
                                            ),
                                            t._v(" "),
                                            r(
                                              "span",
                                              { staticClass: "btn-bg" },
                                              [
                                                r(
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
                                                    r("path", {
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
                                    r("input", {
                                      staticClass: "input--hidden",
                                      attrs: {
                                        type: "text",
                                        name: "email_address_check",
                                        value: "",
                                      },
                                    }),
                                    t._v(" "),
                                    r("input", {
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
                                  ? r("RichText", {
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
                  ? r(
                      "div",
                      { ref: "graphic", staticClass: "community-graphic" },
                      [
                        r(
                          "div",
                          {
                            staticClass:
                              "community-graphic--main w-full h-full absolute z-0",
                          },
                          [
                            r("nuxt-img", {
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
                r("div", { staticClass: "section-bg" }, [
                  r(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? r("nuxt-img", {
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
        RichText: r(118).default,
        SocialAccount: r(45).default,
      });
    },
    488: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(118),
        l =
          (r(463),
          {
            components: { RichText: o.default },
            props: {
              feature: { required: !0, type: Object },
              primaryColor: { required: !0, type: String },
              color: { required: !1, type: String, default: "#ffffff" },
            },
            data: function () {
              return {};
            },
            mounted: function () {},
            computed: {
              textColor: function () {
                return r(463)(this.primaryColor).isLight() ? "#000" : "#fff";
              },
            },
            methods: {},
          }),
        n = (r(479), r(3)),
        component = Object(n.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "article",
              {
                directives: [
                  {
                    name: "editable",
                    rawName: "v-editable",
                    value: t.feature,
                    expression: "feature",
                  },
                ],
                staticClass: "main-feature",
              },
              [
                r(
                  "div",
                  { staticClass: "main-feature-image w-full lg:w-1/2" },
                  [
                    r(
                      "div",
                      { staticClass: "image-wrapper" },
                      [
                        t.feature.image && t.feature.image.filename
                          ? r("nuxt-img", {
                              staticClass:
                                "image absolute top-0 left-0 block w-full h-full object-cover object-center",
                              attrs: {
                                provider: "storyblok",
                                width: "800",
                                height: "800",
                                loading: "lazy",
                                fit: "in",
                                alt: t.feature.image.alt,
                                src: t.feature.image.filename,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                r(
                  "div",
                  { staticClass: "main-feature-content w-full lg:w-1/2" },
                  [
                    r(
                      "p",
                      {
                        staticClass:
                          "small-heading font-secondary text-lg md:text-xl lg:text-3xl tracking-tight",
                        style: "color: " + t.color,
                      },
                      [t._v(t._s(t.feature.small_heading))]
                    ),
                    t._v(" "),
                    r(
                      "h1",
                      {
                        staticClass:
                          "custom-color--primary text-3xl md:text-4xl lg:text-7xl tracking-tight",
                        style: "color: " + t.textColor,
                      },
                      [t._v(t._s(t.feature.title))]
                    ),
                    t._v(" "),
                    r("RichText", {
                      staticClass:
                        "feature-text custom-color--primary font-primary mt-5 text-opacity-70 max-w-xl",
                      style: "color: " + t.textColor,
                      attrs: { blok: t.feature.text },
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
          "5a4f3c6d",
          null
        );
      e.default = component.exports;
      installComponents(component, { RichText: r(118).default });
    },
    507: function (t, e, r) {
      "use strict";
      r(478);
    },
    508: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".game-media{margin-top:-2.5rem;padding-bottom:11rem}@media (min-width: 640px){.game-media{margin-top:-7rem}}.game-media .container{position:relative;z-index:20}.game-media .slick-slide{height:100%}.game-media .slick-arrow{position:absolute;bottom:-3rem;z-index:20}.game-media .slick-arrow .icon{transition-duration:200ms}.game-media .slick-arrow.slick-prev{left:0}@media (min-width: 768px){.game-media .slick-arrow.slick-prev{left:auto;right:58%}}@media (min-width: 1024px){.game-media .slick-arrow.slick-prev{right:55%}}.game-media .slick-arrow.slick-next{right:0}@media (min-width: 768px){.game-media .slick-arrow.slick-next{right:auto;left:58%}}@media (min-width: 1024px){.game-media .slick-arrow.slick-next{left:55%}}@media(hover:hover){.game-media .slick-arrow:hover .icon{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}.game-media .slick-arrow:hover .icon{--tw-text-opacity:1;color:rgba(244, 195, 0, var(--tw-text-opacity))}}.game-media .slick-dots{position:absolute;bottom:-3rem;left:0px;z-index:10;width:100%;align-items:center;justify-content:center;gap:0.5rem;display:flex!important}.game-media .slick-dots li{display:block}.game-media .slick-dots li button{display:block;height:1rem;width:1rem;border-radius:9999px;border-width:4px;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));color:transparent;opacity:0.5;transition-duration:200ms;text-indent:-9999px}@media(hover:hover){.game-media .slick-dots li button:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:var(--tw-transform)}.game-media .slick-dots li button:hover{opacity:1}}.game-media .slick-dots li.slick-active{pointer-events:none}.game-media .slick-dots li.slick-active button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));opacity:1}.game-media .section-bg{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden;-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1);background-color:var(--accent-theme)}.game-media .section-bg .bg-image-wrapper{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.game-media .section-bg .image{opacity:.06}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    509: function (t, e, r) {
      "use strict";
      r(483);
    },
    510: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".game-features[data-v-0c0ba7db]{margin-top:-9rem}.game-features .main-features[data-v-0c0ba7db]{position:relative;z-index:10}.game-features .main-features .section-bg[data-v-0c0ba7db]{background-color:var(--primary-theme);-webkit-clip-path:url(#section-mask-1);clip-path:url(#section-mask-1)}.game-features .other-features[data-v-0c0ba7db]{position:relative;z-index:20;margin-top:-5rem}.game-features .other-features .section-bg[data-v-0c0ba7db]{background-color:var(--secondary-theme);-webkit-clip-path:url(#section-mask-2);clip-path:url(#section-mask-2)}.game-features .section-bg[data-v-0c0ba7db]{position:absolute;top:0px;left:0px;z-index:0;height:100%;width:100%;overflow:hidden}.game-features .section-bg .bg-image-wrapper[data-v-0c0ba7db]{position:absolute;left:0px;width:100%;top:-100px;height:calc(100% + 200px)}.game-features .section-bg .image[data-v-0c0ba7db]{opacity:.06}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    515: function (t, e, r) {
      var content = r(531);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(16).default)("1355bc44", content, !0, { sourceMap: !1 });
    },
    526: function (t, e, r) {
      "use strict";
      r.r(e);
      r(34), r(160);
      var o = r(161),
        l = r(162),
        n = r(159),
        c = r.n(n),
        d =
          (r(267),
          {
            components: {
              MediaImage: o.default,
              MediaVideo: l.default,
              VueSlickCarousel: c.a,
            },
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
                  fade: !1,
                  focusOnSelect: !0,
                },
                slides: [],
                items: [],
                tl: null,
                st: null,
                bg: null,
                bgSt: null,
              };
            },
            mounted: function () {
              var t = this;
              this.$nextTick(function () {
                var e = t.$store.state.windowWidth < 768 ? 4 : 6;
                for (
                  t.blok.media_items.map(function (e) {
                    t.items.push(e);
                  });
                  t.items.length > 0;

                ) {
                  var r = t.items.splice(0, e);
                  t.slides.push(r);
                }
              }),
                this.animate();
            },
            methods: {
              animate: function () {
                (this.tl = gsap.timeline()),
                  (this.bg = gsap.timeline()),
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
                    this.$refs.media,
                    { y: 200, duration: 0.8, stagger: 0.1 },
                    "start"
                  ),
                  this.bg.fromTo(
                    this.$refs.bg,
                    { y: -100, duration: 0.8 },
                    { y: 100, duration: 0.8 }
                  );
              },
            },
          }),
        m = (r(507), r(3)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
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
                staticClass: "section game-media",
              },
              [
                r(
                  "div",
                  { staticClass: "container -top-10" },
                  [
                    t.slides && t.slides.length
                      ? r(
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
                                        r(
                                          "div",
                                          { staticClass: "custom-arrow" },
                                          [
                                            r(
                                              "svg",
                                              {
                                                staticClass: "text-white icon",
                                                attrs: {
                                                  height: "18",
                                                  viewBox: "0 0 15 18",
                                                },
                                              },
                                              [
                                                r("path", {
                                                  attrs: {
                                                    "fill-rule": "evenodd",
                                                    fill: "currentColor",
                                                    d: "m.781 8.968 14.203-8.2v16.4L.781 8.968Z",
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
                                        r(
                                          "div",
                                          { staticClass: "custom-arrow" },
                                          [
                                            r(
                                              "svg",
                                              {
                                                staticClass: "text-white icon",
                                                attrs: {
                                                  height: "18",
                                                  viewBox: "0 0 15 18",
                                                },
                                              },
                                              [
                                                r("path", {
                                                  attrs: {
                                                    "fill-rule": "evenodd",
                                                    fill: "currentColor",
                                                    d: "m14.999 8.968-14.203 8.2V.768l14.203 8.2Z",
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
                                3120762584
                              ),
                            },
                            "VueSlickCarousel",
                            t.settings,
                            !1
                          ),
                          [
                            t._v(" "),
                            t._v(" "),
                            t._l(t.slides, function (e, i) {
                              return r(
                                "div",
                                {
                                  key: "slide-" + i,
                                  staticClass: "w-full h-full",
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "grid w-full h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8",
                                    },
                                    t._l(e, function (e) {
                                      return r(
                                        "div",
                                        {
                                          key: e._uid,
                                          ref: "media",
                                          refInFor: !0,
                                          staticClass: "grid-item-wrapper",
                                        },
                                        [
                                          r(e.component.replace("_", "-"), {
                                            tag: "component",
                                            attrs: {
                                              media: e,
                                              "full-size": !1,
                                              gallery: t.blok.media_items,
                                            },
                                          }),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        )
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                r("div", { staticClass: "section-bg" }, [
                  r(
                    "div",
                    { ref: "bg", staticClass: "bg-image-wrapper" },
                    [
                      t.blok.background_image &&
                      t.blok.background_image.filename
                        ? r("nuxt-img", {
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
          null,
          null
        );
      e.default = component.exports;
    },
    527: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(488),
        l = r(464),
        n = {
          components: { MainFeature: o.default, GameFeature: l.default },
          props: {
            blok: { required: !0, type: Object },
            primaryColor: { required: !0, type: String },
          },
          data: function () {
            return {
              mainTl: null,
              otherTl: null,
              main: null,
              other: null,
              bg: null,
              bgSt: null,
            };
          },
          mounted: function () {
            this.animate();
          },
          computed: {},
          methods: {
            animate: function () {
              (this.mainTl = gsap.timeline()),
                (this.otherTl = gsap.timeline()),
                (this.bg = gsap.timeline()),
                (this.main = ScrollTrigger.create({
                  trigger: this.$refs.sectionMain,
                  start: "top bottom",
                  end: "top 25%",
                  pin: !1,
                  scrub: !0,
                  once: !0,
                  animation: this.mainTl,
                })),
                (this.other = ScrollTrigger.create({
                  trigger: this.$refs.sectionOther,
                  start: "top bottom",
                  end: "top 25%",
                  pin: !1,
                  scrub: !0,
                  once: !0,
                  animation: this.otherTl,
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
                this.main.enable(),
                this.other.enable(),
                this.bgSt.enable(),
                this.mainTl.from(this.$refs.main, {
                  y: 200,
                  duration: 0.8,
                  stagger: 0.2,
                }),
                this.otherTl.from(this.$refs.feature, {
                  y: 200,
                  duration: 0.8,
                  stagger: 0.1,
                }),
                this.bg
                  .fromTo(
                    this.$refs.bg1,
                    { y: -100, duration: 0.8 },
                    { y: 100, duration: 0.8 }
                  )
                  .fromTo(
                    this.$refs.bg2,
                    { y: -100, duration: 0.8 },
                    { y: 100, duration: 0.8 },
                    "-=.8"
                  );
            },
          },
        },
        c = (r(509), r(3)),
        component = Object(c.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
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
                staticClass: "section game-features min-h-screen",
              },
              [
                r(
                  "div",
                  {
                    ref: "sectionMain",
                    staticClass: "main-features pt-20 pb-80",
                  },
                  [
                    r(
                      "div",
                      {
                        staticClass:
                          "main-feature-items relative z-30 -mt-10 w-full",
                      },
                      [
                        r(
                          "div",
                          {
                            staticClass:
                              "container flex flex-col gap-10 lg:gap-0",
                          },
                          t._l(t.blok.main_features, function (e) {
                            return r(
                              "div",
                              {
                                key: e._uid,
                                ref: "main",
                                refInFor: !0,
                                staticClass: "feature-wrapper",
                              },
                              [
                                r("MainFeature", {
                                  attrs: {
                                    feature: e,
                                    "primary-color": t.primaryColor,
                                    color: t.blok.headings_color
                                      ? t.blok.headings_color.color
                                      : null,
                                  },
                                }),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ]
                    ),
                    t._v(" "),
                    r("div", { staticClass: "section-bg" }, [
                      r(
                        "div",
                        { ref: "bg1", staticClass: "bg-image-wrapper" },
                        [
                          t.blok.main_background &&
                          t.blok.main_background.filename
                            ? r("nuxt-img", {
                                staticClass:
                                  "image block w-full h-full object-cover object-center",
                                attrs: {
                                  provider: "storyblok",
                                  width: "1920",
                                  height: "1080",
                                  loading: "lazy",
                                  fit: "in",
                                  alt: t.blok.main_background.alt,
                                  src: t.blok.main_background.filename,
                                },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                t.blok.other_features && t.blok.other_features.length
                  ? r(
                      "div",
                      { ref: "sectionOther", staticClass: "other-features" },
                      [
                        r(
                          "div",
                          {
                            staticClass:
                              "other-feature-items relative block z-30 w-full -top-36 pb-10",
                          },
                          [
                            r(
                              "div",
                              {
                                staticClass:
                                  "container grid grid-col-1 lg:grid-cols-3 gap-5 lg:gap-7",
                              },
                              t._l(t.blok.other_features, function (t) {
                                return r(
                                  "div",
                                  {
                                    key: t._uid,
                                    ref: "feature",
                                    refInFor: !0,
                                    staticClass: "feature-wrapper",
                                  },
                                  [r("GameFeature", { attrs: { feature: t } })],
                                  1
                                );
                              }),
                              0
                            ),
                          ]
                        ),
                        t._v(" "),
                        r("div", { staticClass: "section-bg" }, [
                          r(
                            "div",
                            { ref: "bg2", staticClass: "bg-image-wrapper" },
                            [
                              t.blok.other_background &&
                              t.blok.other_background.filename
                                ? r("nuxt-img", {
                                    staticClass:
                                      "image block w-full h-full object-cover object-center",
                                    attrs: {
                                      provider: "storyblok",
                                      width: "1920",
                                      height: "1080",
                                      loading: "lazy",
                                      fit: "in",
                                      alt: t.blok.other_background.alt,
                                      src: t.blok.other_background.filename,
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                        ]),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "0c0ba7db",
          null
        );
      e.default = component.exports;
      installComponents(component, { GameFeature: r(464).default });
    },
    530: function (t, e, r) {
      "use strict";
      r(515);
    },
    531: function (t, e, r) {
      var o = r(15)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".game-components[data-v-8088b6d2]{position:relative;z-index:10;min-height:100vh;width:100%}.game-components>.section[data-v-8088b6d2]{position:relative;width:100%}.game-components>.section[data-v-8088b6d2]:first-child{z-index:0}.game-components>.section[data-v-8088b6d2]:nth-child(2){z-index:1}.game-components>.section[data-v-8088b6d2]:nth-child(3){z-index:2}.game-components>.section[data-v-8088b6d2]:nth-child(4){z-index:3}.game-components>.section[data-v-8088b6d2]:nth-child(5){z-index:4}.game-components>.section[data-v-8088b6d2]:nth-child(6){z-index:5}.game-components>.section[data-v-8088b6d2]:nth-child(7){z-index:6}.game-components>.section[data-v-8088b6d2]:nth-child(8){z-index:7}.game-components>.section[data-v-8088b6d2]:nth-child(9){z-index:8}.game-components>.section[data-v-8088b6d2]:nth-child(10){z-index:9}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    538: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(526),
        l = r(527),
        n = r(487),
        c = {
          components: {
            GameMedia: o.default,
            GameFeatures: l.default,
            CommunityBlock: n.default,
          },
          props: {
            blok: { required: !0, type: Object },
            primaryColor: { required: !0, type: String },
          },
        },
        d = (r(530), r(3)),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              { staticClass: "game-components" },
              [
                t._l(t.blok.body, function (e) {
                  return r(e.component.replace("_", "-"), {
                    key: e._uid,
                    tag: "component",
                    attrs: { blok: e, "primary-color": t.primaryColor },
                  });
                }),
                t._v(" "),
                t.blok.extras && t.blok.extras.length
                  ? r(
                      "div",
                      { staticClass: "extra-components relative z-10" },
                      t._l(t.blok.extras, function (t) {
                        return r(t.component.replace("_", "-"), {
                          key: t._uid,
                          tag: "component",
                          attrs: { blok: t },
                        });
                      }),
                      1
                    )
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "8088b6d2",
          null
        );
      e.default = component.exports;
    },
  },
]);
