(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '0yTM': function (e, t, r) {
      var n = r('M6MO');
      e.exports = { MDXRenderer: n };
    },
    'A9u+': function (e, t, r) {},
    F0kF: function (e, t, r) {},
    Ly5D: function (e, t, r) {},
    M6MO: function (e, t, r) {
      function n(e, t, r) {
        return (n = a()
          ? Reflect.construct
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var a = new (Function.bind.apply(e, n))();
              return r && o(a, r.prototype), a;
            }).apply(null, arguments);
      }
      function a() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r('rSj+'),
        r('Cwzy'),
        r('OksV'),
        r('uydD'),
        r('T/cs'),
        r('dXXY'),
        r('K1mI'),
        r('f4UW'),
        r('Qf75'),
        r('AF8K'),
        r('odAc'),
        r('cl5/'),
        r('cl5/'),
        r('Qf75'),
        r('AF8K'),
        r('K1mI'),
        r('f4UW'),
        r('T/cs'),
        r('rSj+'),
        r('dXXY'),
        r('uydD'),
        r('Cwzy'),
        r('odAc'),
        r('OksV');
      var f = r('ERkP'),
        p = r('ZVZ0'),
        m = p.useMDXComponents,
        d = p.mdx,
        y = r('Amv9').useMDXScope;
      e.exports = function (e) {
        var t = e.scope,
          r = e.components,
          a = e.children,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, ['scope', 'components', 'children']),
          i = m(r),
          u = y(t),
          s = f.useMemo(
            function () {
              if (!a) return null;
              var e = l({ React: f, mdx: d }, u),
                t = Object.keys(e),
                r = t.map(function (t) {
                  return e[t];
                });
              return n(Function, ['_fn'].concat(c(t), ['' + a])).apply(
                void 0,
                [{}].concat(c(r)),
              );
            },
            [a, t],
          );
        return f.createElement(s, l({ components: i }, o));
      };
    },
    UK60: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'query', function () {
          return w;
        });
      r('AF8K'),
        r('odAc'),
        r('K1mI'),
        r('f4UW'),
        r('uydD'),
        r('T/cs'),
        r('dXXY'),
        r('QHfF'),
        r('Qf75'),
        r('v6Ak'),
        r('13E5');
      var n = r('ERkP'),
        a = r.n(n),
        o = r('0yTM'),
        c = r('j/s1'),
        i = (r('Ly5D'), r('F0kF'), r('gkKy')),
        u =
          (r('Cwzy'),
          r('OksV'),
          r('gs/B'),
          r('0plx'),
          ['wip', 'bêta', 'stable']);
      var l = c.b.span.withConfig({
          displayName: 'StatusFlag__Flag',
          componentId: 'sc-7n1e6b-0',
        })(
          [
            'color:#fff;font-size:10px;font-weight:400;letter-spacing:0.05em;text-transform:uppercase;line-height:1;padding:2px 4px;',
            '',
          ],
          function (e) {
            var t = e.status;
            return 'stable' === t
              ? '\n        background: #2d5883;\n    '
              : 'wip' === t
              ? '\n        background: #e3cb58;\n    '
              : '\n        background: #e35876;\n    ';
          },
        ),
        s = function (e) {
          var t = e.status,
            r = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = {},
                o = Object.keys(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
              return a;
            })(e, ['status']);
          if (!t) return !1;
          var n = (function (e) {
            if (!e) return e;
            var t = e.toLowerCase();
            return !!u.includes(t) && t;
          })(t);
          return (
            !!n && a.a.createElement(l, Object.assign({}, r, { status: n }), n)
          );
        },
        f = (r('iyo3'), r('Wbzz'));
      r('ya6z');
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return m(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var d = (function (e) {
          var t, r;
          function n() {
            for (
              var t, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              ((t =
                e.call.apply(e, [this].concat(n)) ||
                this).orderPageTab = function (e) {
                var t = p(e)
                    .sort(function (e, t) {
                      return (
                        e.node.frontmatter.order - t.node.frontmatter.order
                      );
                    })
                    .filter(function (e) {
                      return 'index' !== e.node.fields.fileName.name;
                    }),
                  r = p(e).find(function (e) {
                    return 'index' === e.node.fields.fileName.name;
                  });
                return [
                  {
                    title: 'Usage',
                    slug: r.node.fields.slug,
                    status: r.node.frontmatter.status,
                  },
                ].concat(
                  p(
                    t.map(function (e) {
                      return {
                        title: e.node.frontmatter.title,
                        slug: e.node.fields.slug,
                        status: e.node.frontmatter.status,
                      };
                    }),
                  ),
                );
              }),
              t
            );
          }
          return (
            (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (n.prototype.render = function () {
              var e = this.props.samePageTabs,
                t = this.orderPageTab(e);
              return a.a.createElement(
                'div',
                { className: 'c-page-tabs', id: 'page_tabs_menu' },
                a.a.createElement(
                  'div',
                  { className: 'c-page-tabs__tabs' },
                  t.map(function (e) {
                    return a.a.createElement(
                      f.a,
                      {
                        className: 'c-page-tabs__tab',
                        key: e.slug,
                        to: e.slug,
                        activeClassName: 'is-active',
                      },
                      e.title,
                      e.status &&
                        a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(s, {
                            className: 'c-page-tabs__flag',
                            status: e.status,
                          }),
                        ),
                    );
                  }),
                ),
              );
            }),
            n
          );
        })(n.PureComponent),
        y = (r('jdxj'), r('jNQY'));
      r('A9u+');
      var b = (function (e) {
          var t, r;
          function n() {
            for (
              var t, r = arguments.length, n = new Array(r), o = 0;
              o < r;
              o++
            )
              n[o] = arguments[o];
            return (
              ((t =
                e.call.apply(e, [this].concat(n)) || this).scroller = function (
                e,
              ) {
                var t = e.hash;
                (t = t.replace('#', '')), (t = decodeURIComponent(t));
                var r = document
                    .querySelector('[id="' + t + '"]')
                    .getBoundingClientRect(),
                  n = document.getElementById('scroller');
                n.scrollTop = r.y + n.scrollTop - 132;
              }),
              (t.onClick = function (e) {
                e.preventDefault();
                var r = e.target.hash;
                return t.scroller({ hash: r }), !1;
              }),
              (t.renderList = function (e) {
                return e.map(function (e, r) {
                  var n = e.url,
                    o = e.title,
                    c = e.items;
                  c &&
                    (c = a.a.createElement(
                      'ul',
                      { className: 'c-toc__list', key: 'group_' + r },
                      t.renderList(c),
                    ));
                  var i = !1;
                  return (
                    o &&
                      ((o = (o = o.replace(/\{#([\w-]+)\}$/, function (e, t) {
                        return (n = '#' + t), '';
                      })).trim()),
                      (i = a.a.createElement(
                        'a',
                        {
                          className: 'c-toc__list-link',
                          onClick: t.onClick,
                          href: n,
                        },
                        o,
                      ))),
                    a.a.createElement(
                      'li',
                      { className: 'c-toc__list-item', key: n + '_link_' + r },
                      i,
                      c,
                    )
                  );
                });
              }),
              t
            );
          }
          (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r);
          var o = n.prototype;
          return (
            (o.componentDidMount = function () {
              var e = this,
                t = window.location.href.match(/#[\w-_]+$/);
              t &&
                setTimeout(function () {
                  e.scroller({ hash: t[0] });
                }, 800),
                document.querySelectorAll('.anchor-toc').forEach(function (e) {
                  (e.title = 'Click to copy the link'),
                    e.addEventListener('click', function (e) {
                      e.preventDefault(), Object(y.a)(e.currentTarget.href);
                    });
                });
            }),
            (o.render = function () {
              var e = this.props,
                t = e.tableOfContents,
                r = void 0 === t ? {} : t,
                n = e.className,
                o = void 0 === n ? '' : n;
              return (
                !!r.items &&
                a.a.createElement(
                  'aside',
                  { className: o + ' c-toc', id: 'toc' },
                  a.a.createElement(
                    'div',
                    { className: 'c-toc__wrapper' },
                    a.a.createElement(
                      'h2',
                      { className: 'c-toc__title' },
                      'Table of content',
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'c-toc__lists-wrapper' },
                      a.a.createElement(
                        'ul',
                        { className: 'c-toc__list' },
                        this.renderList(r.items),
                      ),
                    ),
                  ),
                )
              );
            }),
            n
          );
        })(n.PureComponent),
        g = r('/Pyj');
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return h(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return h(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return h(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var _ = c.b.div.withConfig({
          displayName: 'pattern-page__PageContentWrapper',
          componentId: 'kchkxf-0',
        })(['display:flex;flex-direction:row;']),
        w =
          ((t.default = function (e) {
            var t = e.data,
              r = e.location,
              n = t.mdx,
              c = t.mdx.tableOfContents,
              u = v(t.allMdx.edges).filter(function (e) {
                var t = e.node;
                return (
                  t.fields.fileName.relativePath.replace(
                    t.fields.fileName.base,
                    '',
                  ) ===
                  n.fields.fileName.relativePath.replace(
                    n.fields.fileName.base,
                    '',
                  )
                );
              }),
              l = u.find(function (e) {
                return 'index' === e.node.fields.fileName.name;
              }).node.frontmatter,
              f = l.title,
              p = l.description,
              m =
                (l.status,
                n.fields.slug && n.fields.slug.split('/'),
                u.length > 1);
            return a.a.createElement(
              i.a,
              { location: r, tableOfContents: c },
              a.a.createElement(
                'header',
                { className: 'c-page__header' },
                a.a.createElement(
                  g.a,
                  { className: 'c-page__main-heading' },
                  f,
                ),
                a.a.createElement(
                  'p',
                  { className: 'c-page__lead-body-copy' },
                  p,
                ),
                !m &&
                  n.frontmatter.status &&
                  a.a.createElement(s, { status: n.frontmatter.status }),
              ),
              a.a.createElement(
                _,
                null,
                a.a.createElement(
                  'div',
                  { className: 'c-page__body' },
                  m && a.a.createElement(d, { samePageTabs: u }),
                  a.a.createElement(
                    'div',
                    { className: 's-mdx' },
                    a.a.createElement(o.MDXRenderer, null, n.body),
                  ),
                ),
                a.a.createElement(b, {
                  className: 'c-page__side-col',
                  tableOfContents: c,
                }),
              ),
            );
          }),
          '2082632504');
    },
    'cl5/': function (e, t, r) {
      var n = r('1nmM'),
        a = r('3d6S'),
        o = r('PXoN'),
        c = r('cKZz'),
        i = r('BtUU'),
        u = r('9+pC'),
        l = r('Rk5+'),
        s = (r('WDj7').Reflect || {}).construct,
        f = u(function () {
          function e() {}
          return !(s(function () {}, [], e) instanceof e);
        }),
        p = !u(function () {
          s(function () {});
        });
      n(n.S + n.F * (f || p), 'Reflect', {
        construct: function (e, t) {
          o(e), c(t);
          var r = arguments.length < 3 ? e : o(arguments[2]);
          if (p && !f) return s(e, t, r);
          if (e == r) {
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
            }
            var n = [null];
            return n.push.apply(n, t), new (l.apply(e, n))();
          }
          var u = r.prototype,
            m = a(i(u) ? u : Object.prototype),
            d = Function.apply.call(e, m, t);
          return i(d) ? d : m;
        },
      });
    },
    ya6z: function (e, t, r) {},
  },
]);
//# sourceMappingURL=component---src-templates-pattern-page-tsx-9a410ffcd832a7da3035.js.map
