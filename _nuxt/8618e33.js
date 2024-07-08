(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    543: function (t, e, n) {
      "use strict";
      n.r(e);
      n(26), n(25), n(59);
      var o = {
          components: { Page: n(485).default },
          data: function () {
            return { story: { content: {} } };
          },
          mounted: function () {
            var t = this;
            this.$storybridge.resolveRelations(
              ["games_slider.games", "featured_games.games"],
              function (data) {
                "input" === data.action
                  ? data.story.id === t.story.id &&
                    (t.story.content = data.story.content)
                  : window.location.reload();
              }
            );
          },
          asyncData: function (t) {
            var e = t.query._storyblok || t.isDev ? "draft" : "published";
            return t.app.$storyapi
              .get("cdn/stories/home", {
                version: e,
                resolve_relations: "games_slider.games,featured_games.games",
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
                      : "Home - Capybara Games",
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
        r = n(3),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "relative page-content z-30 w-full" },
              [
                t.story.content.component
                  ? n(t.story.content.component, {
                      key: t.story.content._uid,
                      tag: "component",
                      attrs: {
                        blok: t.story.content,
                        story: t.story,
                        "page-name": t.story.name,
                      },
                    })
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
  },
]);
