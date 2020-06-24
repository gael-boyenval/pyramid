(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '/KhS': function (e, t, n) {
      'use strict';
      var r = n('WDj7'),
        a = n('R3DE'),
        i = n('Ugv/'),
        o = n('neiJ'),
        s = n('rs7R'),
        l = n('9+pC'),
        c = n('ajfu').f,
        u = n('az0j').f,
        p = n('2+mA').f,
        d = n('whD0').trim,
        f = r.Number,
        g = f,
        m = f.prototype,
        h = 'Number' == i(n('3d6S')(m)),
        b = 'trim' in String.prototype,
        y = function (e) {
          var t = s(e, !1);
          if ('string' == typeof t && t.length > 2) {
            var n,
              r,
              a,
              i = (t = b ? t.trim() : d(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (a = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (a = 55);
                  break;
                default:
                  return +t;
              }
              for (var o, l = t.slice(2), c = 0, u = l.length; c < u; c++)
                if ((o = l.charCodeAt(c)) < 48 || o > a) return NaN;
              return parseInt(l, r);
            }
          }
          return +t;
        };
      if (!f(' 0o1') || !f('0b1') || f('+0x1')) {
        f = function (e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof f &&
            (h
              ? l(function () {
                  m.valueOf.call(n);
                })
              : 'Number' != i(n))
            ? o(new g(y(t)), n, f)
            : y(t);
        };
        for (
          var v,
            w = n('q25y')
              ? c(g)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ',',
                ),
            E = 0;
          w.length > E;
          E++
        )
          a(g, (v = w[E])) && !a(f, v) && p(f, v, u(g, v));
        (f.prototype = m), (m.constructor = f), n('SWlE')(r, 'Number', f);
      }
    },
    '/Pyj': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return c;
        }),
        n.d(t, 'c', function () {
          return u;
        }),
        n.d(t, 'd', function () {
          return p;
        });
      n('uydD'), n('Cwzy'), n('odAc'), n('OksV'), n('gs/B');
      var r = n('ERkP'),
        a = n.n(r),
        i = n('O94r'),
        o = n.n(i);
      n('xv4y');
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var l = function (e) {
          var t = e.children,
            n = e.className,
            r = s(e, ['children', 'className']);
          return a.a.createElement(
            'h1',
            Object.assign(
              { className: o()('t-heading-1', { className: n }) },
              r,
            ),
            t,
          );
        },
        c = function (e) {
          var t = e.children,
            n = e.className,
            r = s(e, ['children', 'className']);
          return a.a.createElement(
            'h2',
            Object.assign(
              { className: o()('t-heading-2', { className: n }) },
              r,
            ),
            t,
          );
        },
        u = function (e) {
          var t = e.children,
            n = e.className,
            r = s(e, ['children', 'className']);
          return a.a.createElement(
            'h3',
            Object.assign(
              { className: o()('t-heading-3', { className: n }) },
              r,
            ),
            t,
          );
        },
        p = function (e) {
          var t = e.children,
            n = e.className,
            r = s(e, ['children', 'className']);
          return a.a.createElement(
            'h4',
            Object.assign(
              { className: o()('t-heading-4', { className: n }) },
              r,
            ),
            t,
          );
        };
    },
    '/Qoa': function (e) {
      e.exports = JSON.parse(
        '{"data":{"allMdx":{"totalCount":9,"edges":[{"node":{"id":"4826176e-a182-5328-be28-24f549f99586","frontmatter":{"title":"Getting started","order":1,"description":"Here are the Components! There are a lot of them and they are very cool and well designed!"},"fields":{"slug":"/example/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/index.mdx","extension":"mdx"}},"excerpt":"hello titre 3 hello je suis une liste Je suis une citation"}},{"node":{"id":"5a5e911b-81b9-5e08-95bd-807427f9aa6f","frontmatter":{"title":"Introduction","order":1,"description":"item level 2"},"fields":{"slug":"/example/introduction/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/introduction/index.mdx","extension":"mdx"}},"excerpt":"hello hello hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor elit non ante ultrices, vel laoreet nisi ullamcorper…"}},{"node":{"id":"cdc1069c-2e5a-5dfb-9d5f-56a689707de8","frontmatter":{"title":"How to use the design system when and where you want to","order":1,"description":"item level 3"},"fields":{"slug":"/example/introduction/how-to-use/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/introduction/how-to-use/index.mdx","extension":"mdx"}},"excerpt":"hello lorem"}},{"node":{"id":"1c507061-98b2-5368-8de3-a06d3015b806","frontmatter":{"title":"Install the dependencies","order":2,"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nunc porttitor, elementum enim non, vehicula diam. Fusce maximus dolor ut nibh varius, quis maximus orci imperdiet. Nulla tempus velit mi, sed malesuada diam bibendum vitae."},"fields":{"slug":"/example/introduction/install-dependencies/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/introduction/install-dependencies/index.mdx","extension":"mdx"}},"excerpt":"This is my usage related documentation"}},{"node":{"id":"bfb75396-5b63-51b0-b9af-31d4e2afe2c5","frontmatter":{"title":"Scss","order":2,"description":null},"fields":{"slug":"/example/introduction/install-dependencies/scss/","fileName":{"name":"scss","base":"scss.mdx","relativePath":"docs/example/introduction/install-dependencies/scss.mdx","extension":"mdx"}},"excerpt":"heading 2 heading 3 heading 4 lorem"}},{"node":{"id":"fb701434-bf57-5015-97b9-47042d440463","frontmatter":{"title":"Foo bar baz","order":2,"description":"item level 3"},"fields":{"slug":"/example/introduction/install-dependencies/test/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/introduction/install-dependencies/test/index.mdx","extension":"mdx"}},"excerpt":"hello lorem"}},{"node":{"id":"1477cbdd-7e7e-5b6a-8372-4cb408a7bc91","frontmatter":{"title":"Start working","order":3,"description":"item level 2"},"fields":{"slug":"/example/start-working/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/start-working/index.mdx","extension":"mdx"}},"excerpt":"hello lorem"}},{"node":{"id":"e6227aa8-5a1a-5085-b16a-807883c97dd1","frontmatter":{"title":"item level 3","order":3,"description":"item level 3"},"fields":{"slug":"/example/start-working/level3/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/example/start-working/level3/index.mdx","extension":"mdx"}},"excerpt":"hello lorem"}},{"node":{"id":"8a0e37bf-1786-5c42-b3a1-7c97cd78260a","frontmatter":{"title":"Buttons","order":2,"description":"Buttons are used to trigger actions. Their appearance is depending on the type of action required from the user, or the context"},"fields":{"slug":"/toto/","fileName":{"name":"index","base":"index.mdx","relativePath":"docs/toto/index.mdx","extension":"mdx"}},"excerpt":"Buttons are used to  trigger actions . Their appearance is depending on the type of action required from the user, or the context…"}}]}}}',
      );
    },
    '4JZy': function (e, t) {
      e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    AbK1: function (e, t, n) {
      'use strict';
      n('he6s'), n('QHfF'), n('LAy0'), n('13E5');
      t.a = function (e) {
        function t(e, t, r) {
          var a = t.trim().split(g);
          t = a;
          var i = a.length,
            o = e.length;
          switch (o) {
            case 0:
            case 1:
              var s = 0;
              for (e = 0 === o ? '' : e[0] + ' '; s < i; ++s)
                t[s] = n(e, t[s], r).trim();
              break;
            default:
              var l = (s = 0);
              for (t = []; s < i; ++s)
                for (var c = 0; c < o; ++c)
                  t[l++] = n(e[c] + ' ', a[s], r).trim();
          }
          return t;
        }
        function n(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(m, '$1' + e.trim());
            case 58:
              return e.trim() + t.replace(m, '$1' + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf('\f'))
                return t.replace(
                  m,
                  (58 === e.charCodeAt(0) ? '' : '$1') + e.trim(),
                );
          }
          return e + t;
        }
        function r(e, t, n, i) {
          var o = e + ';',
            s = 2 * t + 3 * n + 4 * i;
          if (944 === s) {
            e = o.indexOf(':', 9) + 1;
            var l = o.substring(e, o.length - 1).trim();
            return (
              (l = o.substring(0, e).trim() + l + ';'),
              1 === _ || (2 === _ && a(l, 1)) ? '-webkit-' + l + l : l
            );
          }
          if (0 === _ || (2 === _ && !a(o, 1))) return o;
          switch (s) {
            case 1015:
              return 97 === o.charCodeAt(10) ? '-webkit-' + o + o : o;
            case 951:
              return 116 === o.charCodeAt(3) ? '-webkit-' + o + o : o;
            case 963:
              return 110 === o.charCodeAt(5) ? '-webkit-' + o + o : o;
            case 1009:
              if (100 !== o.charCodeAt(4)) break;
            case 969:
            case 942:
              return '-webkit-' + o + o;
            case 978:
              return '-webkit-' + o + '-moz-' + o + o;
            case 1019:
            case 983:
              return '-webkit-' + o + '-moz-' + o + '-ms-' + o + o;
            case 883:
              if (45 === o.charCodeAt(8)) return '-webkit-' + o + o;
              if (0 < o.indexOf('image-set(', 11))
                return o.replace(S, '$1-webkit-$2') + o;
              break;
            case 932:
              if (45 === o.charCodeAt(4))
                switch (o.charCodeAt(5)) {
                  case 103:
                    return (
                      '-webkit-box-' +
                      o.replace('-grow', '') +
                      '-webkit-' +
                      o +
                      '-ms-' +
                      o.replace('grow', 'positive') +
                      o
                    );
                  case 115:
                    return (
                      '-webkit-' +
                      o +
                      '-ms-' +
                      o.replace('shrink', 'negative') +
                      o
                    );
                  case 98:
                    return (
                      '-webkit-' +
                      o +
                      '-ms-' +
                      o.replace('basis', 'preferred-size') +
                      o
                    );
                }
              return '-webkit-' + o + '-ms-' + o + o;
            case 964:
              return '-webkit-' + o + '-ms-flex-' + o + o;
            case 1023:
              if (99 !== o.charCodeAt(8)) break;
              return (
                '-webkit-box-pack' +
                (l = o
                  .substring(o.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')) +
                '-webkit-' +
                o +
                '-ms-flex-pack' +
                l +
                o
              );
            case 1005:
              return d.test(o)
                ? o.replace(p, ':-webkit-') + o.replace(p, ':-moz-') + o
                : o;
            case 1e3:
              switch (
                ((t = (l = o.substring(13).trim()).indexOf('-') + 1),
                l.charCodeAt(0) + l.charCodeAt(t))
              ) {
                case 226:
                  l = o.replace(v, 'tb');
                  break;
                case 232:
                  l = o.replace(v, 'tb-rl');
                  break;
                case 220:
                  l = o.replace(v, 'lr');
                  break;
                default:
                  return o;
              }
              return '-webkit-' + o + '-ms-' + l + o;
            case 1017:
              if (-1 === o.indexOf('sticky', 9)) break;
            case 975:
              switch (
                ((t = (o = e).length - 10),
                (s =
                  (l = (33 === o.charCodeAt(t) ? o.substring(0, t) : o)
                    .substring(e.indexOf(':', 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | l.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > l.charCodeAt(8)) break;
                case 115:
                  o = o.replace(l, '-webkit-' + l) + ';' + o;
                  break;
                case 207:
                case 102:
                  o =
                    o.replace(
                      l,
                      '-webkit-' + (102 < s ? 'inline-' : '') + 'box',
                    ) +
                    ';' +
                    o.replace(l, '-webkit-' + l) +
                    ';' +
                    o.replace(l, '-ms-' + l + 'box') +
                    ';' +
                    o;
              }
              return o + ';';
            case 938:
              if (45 === o.charCodeAt(5))
                switch (o.charCodeAt(6)) {
                  case 105:
                    return (
                      (l = o.replace('-items', '')),
                      '-webkit-' + o + '-webkit-box-' + l + '-ms-flex-' + l + o
                    );
                  case 115:
                    return (
                      '-webkit-' + o + '-ms-flex-item-' + o.replace(k, '') + o
                    );
                  default:
                    return (
                      '-webkit-' +
                      o +
                      '-ms-flex-line-pack' +
                      o.replace('align-content', '').replace(k, '') +
                      o
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === A.test(e))
                return 115 ===
                  (l = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                  ? r(e.replace('stretch', 'fill-available'), t, n, i).replace(
                      ':fill-available',
                      ':stretch',
                    )
                  : o.replace(l, '-webkit-' + l) +
                      o.replace(l, '-moz-' + l.replace('fill-', '')) +
                      o;
              break;
            case 962:
              if (
                ((o =
                  '-webkit-' +
                  o +
                  (102 === o.charCodeAt(5) ? '-ms-' + o : '') +
                  o),
                211 === n + i &&
                  105 === o.charCodeAt(13) &&
                  0 < o.indexOf('transform', 10))
              )
                return (
                  o
                    .substring(0, o.indexOf(';', 27) + 1)
                    .replace(f, '$1-webkit-$2') + o
                );
          }
          return o;
        }
        function a(e, t) {
          var n = e.indexOf(1 === t ? ':' : '{'),
            r = e.substring(0, 3 !== t ? n : 10);
          return (
            (n = e.substring(n + 1, e.length - 1)),
            F(2 !== t ? r : r.replace(x, '$1'), n, t)
          );
        }
        function i(e, t) {
          var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ';'
            ? n.replace(E, ' or ($1)').substring(4)
            : '(' + t + ')';
        }
        function o(e, t, n, r, a, i, o, s, c, u) {
          for (var p, d = 0, f = t; d < R; ++d)
            switch ((p = I[d].call(l, e, f, n, r, a, i, o, s, c, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                f = p;
            }
          if (f !== t) return f;
        }
        function s(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((F = null),
              e
                ? 'function' != typeof e
                  ? (_ = 1)
                  : ((_ = 2), (F = e))
                : (_ = 0)),
            s
          );
        }
        function l(e, n) {
          var s = e;
          if ((33 > s.charCodeAt(0) && (s = s.trim()), (s = [s]), 0 < R)) {
            var l = o(-1, n, s, s, O, N, 0, 0, 0, 0);
            void 0 !== l && 'string' == typeof l && (n = l);
          }
          var p = (function e(n, s, l, p, d) {
            for (
              var f,
                g,
                m,
                v,
                E,
                k = 0,
                x = 0,
                A = 0,
                S = 0,
                I = 0,
                F = 0,
                P = (m = f = 0),
                L = 0,
                $ = 0,
                D = 0,
                B = 0,
                z = l.length,
                M = z - 1,
                U = '',
                G = '',
                V = '',
                W = '';
              L < z;

            ) {
              if (
                ((g = l.charCodeAt(L)),
                L === M &&
                  0 !== x + S + A + k &&
                  (0 !== x && (g = 47 === x ? 10 : 47),
                  (S = A = k = 0),
                  z++,
                  M++),
                0 === x + S + A + k)
              ) {
                if (
                  L === M &&
                  (0 < $ && (U = U.replace(u, '')), 0 < U.trim().length)
                ) {
                  switch (g) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      U += l.charAt(L);
                  }
                  g = 59;
                }
                switch (g) {
                  case 123:
                    for (
                      f = (U = U.trim()).charCodeAt(0), m = 1, B = ++L;
                      L < z;

                    ) {
                      switch ((g = l.charCodeAt(L))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((g = l.charCodeAt(L + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (P = L + 1; P < M; ++P)
                                  switch (l.charCodeAt(P)) {
                                    case 47:
                                      if (
                                        42 === g &&
                                        42 === l.charCodeAt(P - 1) &&
                                        L + 2 !== P
                                      ) {
                                        L = P + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === g) {
                                        L = P + 1;
                                        break e;
                                      }
                                  }
                                L = P;
                              }
                          }
                          break;
                        case 91:
                          g++;
                        case 40:
                          g++;
                        case 34:
                        case 39:
                          for (; L++ < M && l.charCodeAt(L) !== g; );
                      }
                      if (0 === m) break;
                      L++;
                    }
                    switch (
                      ((m = l.substring(B, L)),
                      0 === f &&
                        (f = (U = U.replace(c, '').trim()).charCodeAt(0)),
                      f)
                    ) {
                      case 64:
                        switch (
                          (0 < $ && (U = U.replace(u, '')),
                          (g = U.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            $ = s;
                            break;
                          default:
                            $ = T;
                        }
                        if (
                          ((B = (m = e(s, $, m, g, d + 1)).length),
                          0 < R &&
                            ((E = o(
                              3,
                              m,
                              ($ = t(T, U, D)),
                              s,
                              O,
                              N,
                              B,
                              g,
                              d,
                              p,
                            )),
                            (U = $.join('')),
                            void 0 !== E &&
                              0 === (B = (m = E.trim()).length) &&
                              ((g = 0), (m = ''))),
                          0 < B)
                        )
                          switch (g) {
                            case 115:
                              U = U.replace(w, i);
                            case 100:
                            case 109:
                            case 45:
                              m = U + '{' + m + '}';
                              break;
                            case 107:
                              (m = (U = U.replace(h, '$1 $2')) + '{' + m + '}'),
                                (m =
                                  1 === _ || (2 === _ && a('@' + m, 3))
                                    ? '@-webkit-' + m + '@' + m
                                    : '@' + m);
                              break;
                            default:
                              (m = U + m), 112 === p && ((G += m), (m = ''));
                          }
                        else m = '';
                        break;
                      default:
                        m = e(s, t(s, U, D), m, p, d + 1);
                    }
                    (V += m),
                      (m = D = $ = P = f = 0),
                      (U = ''),
                      (g = l.charCodeAt(++L));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (B = (U = (0 < $ ? U.replace(u, '') : U).trim()).length)
                    )
                      switch (
                        (0 === P &&
                          ((f = U.charCodeAt(0)),
                          45 === f || (96 < f && 123 > f)) &&
                          (B = (U = U.replace(' ', ':')).length),
                        0 < R &&
                          void 0 !==
                            (E = o(1, U, s, n, O, N, G.length, p, d, p)) &&
                          0 === (B = (U = E.trim()).length) &&
                          (U = '\0\0'),
                        (f = U.charCodeAt(0)),
                        (g = U.charCodeAt(1)),
                        f)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === g || 99 === g) {
                            W += U + l.charAt(L);
                            break;
                          }
                        default:
                          58 !== U.charCodeAt(B - 1) &&
                            (G += r(U, f, g, U.charCodeAt(2)));
                      }
                    (D = $ = P = f = 0), (U = ''), (g = l.charCodeAt(++L));
                }
              }
              switch (g) {
                case 13:
                case 10:
                  47 === x
                    ? (x = 0)
                    : 0 === 1 + f &&
                      107 !== p &&
                      0 < U.length &&
                      (($ = 1), (U += '\0')),
                    0 < R * j && o(0, U, s, n, O, N, G.length, p, d, p),
                    (N = 1),
                    O++;
                  break;
                case 59:
                case 125:
                  if (0 === x + S + A + k) {
                    N++;
                    break;
                  }
                default:
                  switch ((N++, (v = l.charAt(L)), g)) {
                    case 9:
                    case 32:
                      if (0 === S + k + x)
                        switch (I) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = '';
                            break;
                          default:
                            32 !== g && (v = ' ');
                        }
                      break;
                    case 0:
                      v = '\\0';
                      break;
                    case 12:
                      v = '\\f';
                      break;
                    case 11:
                      v = '\\v';
                      break;
                    case 38:
                      0 === S + x + k && (($ = D = 1), (v = '\f' + v));
                      break;
                    case 108:
                      if (0 === S + x + k + C && 0 < P)
                        switch (L - P) {
                          case 2:
                            112 === I && 58 === l.charCodeAt(L - 3) && (C = I);
                          case 8:
                            111 === F && (C = F);
                        }
                      break;
                    case 58:
                      0 === S + x + k && (P = L);
                      break;
                    case 44:
                      0 === x + A + S + k && (($ = 1), (v += '\r'));
                      break;
                    case 34:
                    case 39:
                      0 === x && (S = S === g ? 0 : 0 === S ? g : S);
                      break;
                    case 91:
                      0 === S + x + A && k++;
                      break;
                    case 93:
                      0 === S + x + A && k--;
                      break;
                    case 41:
                      0 === S + x + k && A--;
                      break;
                    case 40:
                      if (0 === S + x + k) {
                        if (0 === f)
                          switch (2 * I + 3 * F) {
                            case 533:
                              break;
                            default:
                              f = 1;
                          }
                        A++;
                      }
                      break;
                    case 64:
                      0 === x + A + S + k + P + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < S + k + A))
                        switch (x) {
                          case 0:
                            switch (2 * g + 3 * l.charCodeAt(L + 1)) {
                              case 235:
                                x = 47;
                                break;
                              case 220:
                                (B = L), (x = 42);
                            }
                            break;
                          case 42:
                            47 === g &&
                              42 === I &&
                              B + 2 !== L &&
                              (33 === l.charCodeAt(B + 2) &&
                                (G += l.substring(B, L + 1)),
                              (v = ''),
                              (x = 0));
                        }
                  }
                  0 === x && (U += v);
              }
              (F = I), (I = g), L++;
            }
            if (0 < (B = G.length)) {
              if (
                (($ = s),
                0 < R &&
                  void 0 !== (E = o(2, G, $, n, O, N, B, p, d, p)) &&
                  0 === (G = E).length)
              )
                return W + G + V;
              if (((G = $.join(',') + '{' + G + '}'), 0 != _ * C)) {
                switch ((2 !== _ || a(G, 2) || (C = 0), C)) {
                  case 111:
                    G = G.replace(y, ':-moz-$1') + G;
                    break;
                  case 112:
                    G =
                      G.replace(b, '::-webkit-input-$1') +
                      G.replace(b, '::-moz-$1') +
                      G.replace(b, ':-ms-input-$1') +
                      G;
                }
                C = 0;
              }
            }
            return W + G + V;
          })(T, s, n, 0, 0);
          return (
            0 < R &&
              void 0 !== (l = o(-2, p, s, s, O, N, p.length, 0, 0, 0)) &&
              (p = l),
            '',
            (C = 0),
            (N = O = 1),
            p
          );
        }
        var c = /^\0+/g,
          u = /[\0\r\f]/g,
          p = /: */g,
          d = /zoo|gra/,
          f = /([,: ])(transform)/g,
          g = /,\r+?/g,
          m = /([\t\r\n ])*\f?&/g,
          h = /@(k\w+)\s*(\S*)\s*/,
          b = /::(place)/g,
          y = /:(read-only)/g,
          v = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          E = /([\s\S]*?);/g,
          k = /-self|flex-/g,
          x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          A = /stretch|:\s*\w+\-(?:conte|avail)/,
          S = /([^-])(image-set\()/,
          N = 1,
          O = 1,
          C = 0,
          _ = 1,
          T = [],
          I = [],
          R = 0,
          F = null,
          j = 0;
        return (
          (l.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                R = I.length = 0;
                break;
              default:
                if ('function' == typeof t) I[R++] = t;
                else if ('object' == typeof t)
                  for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else j = 0 | !!t;
            }
            return e;
          }),
          (l.set = s),
          void 0 !== e && s(e),
          l
        );
      };
    },
    DY47: function (e, t, n) {
      'use strict';
      var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        a = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return (
            r.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
      t.a = a;
    },
    F63i: function (e, t) {
      var n,
        r,
        a = (e.exports = {});
      function i() {
        throw new Error('setTimeout has not been defined');
      }
      function o() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          r = o;
        }
      })();
      var l,
        c = [],
        u = !1,
        p = -1;
      function d() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (p = -1), c.length && f());
      }
      function f() {
        if (!u) {
          var e = s(d);
          u = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++p < t; ) l && l[p].run();
            (p = -1), (t = c.length);
          }
          (l = null),
            (u = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function g(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new g(e, t)), 1 !== c.length || u || s(f);
      }),
        (g.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (a.title = 'browser'),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ''),
        (a.versions = {}),
        (a.on = m),
        (a.addListener = m),
        (a.once = m),
        (a.off = m),
        (a.removeListener = m),
        (a.removeAllListeners = m),
        (a.emit = m),
        (a.prependListener = m),
        (a.prependOnceListener = m),
        (a.listeners = function (e) {
          return [];
        }),
        (a.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (a.cwd = function () {
          return '/';
        }),
        (a.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (a.umask = function () {
          return 0;
        });
    },
    HCNv: function (e, t, n) {
      n('uydD'),
        n('Cwzy'),
        n('OksV'),
        n('8LQc'),
        n('Rq2X'),
        n('KXhL'),
        n('AF8K'),
        n('12ig'),
        n('odAc'),
        n('jdxj'),
        n('13E5'),
        n('OPGF');
      var r,
        a,
        i,
        o =
          ((r = 0),
          (a = {
            util: {
              encode: function (e) {
                return e instanceof i
                  ? new i(e.type, a.util.encode(e.content), e.alias)
                  : 'Array' === a.util.type(e)
                  ? e.map(a.util.encode)
                  : e
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (e) {
                return Object.prototype.toString
                  .call(e)
                  .match(/\[object (\w+)\]/)[1];
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, '__id', { value: ++r }),
                  e.__id
                );
              },
              clone: function (e, t) {
                var n = a.util.type(e);
                switch (((t = t || {}), n)) {
                  case 'Object':
                    if (t[a.util.objId(e)]) return t[a.util.objId(e)];
                    for (var r in ((i = {}), (t[a.util.objId(e)] = i), e))
                      e.hasOwnProperty(r) && (i[r] = a.util.clone(e[r], t));
                    return i;
                  case 'Array':
                    if (t[a.util.objId(e)]) return t[a.util.objId(e)];
                    var i = [];
                    return (
                      (t[a.util.objId(e)] = i),
                      e.forEach(function (e, n) {
                        i[n] = a.util.clone(e, t);
                      }),
                      i
                    );
                }
                return e;
              },
            },
            languages: {
              extend: function (e, t) {
                var n = a.util.clone(a.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var i = (r = r || a.languages)[e];
                if (2 == arguments.length) {
                  for (var o in (n = arguments[1]))
                    n.hasOwnProperty(o) && (i[o] = n[o]);
                  return i;
                }
                var s = {};
                for (var l in i)
                  if (i.hasOwnProperty(l)) {
                    if (l == t)
                      for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
                    s[l] = i[l];
                  }
                return (
                  a.languages.DFS(a.languages, function (t, n) {
                    n === r[e] && t != e && (this[t] = s);
                  }),
                  (r[e] = s)
                );
              },
              DFS: function (e, t, n, r) {
                for (var i in ((r = r || {}), e))
                  e.hasOwnProperty(i) &&
                    (t.call(e, i, e[i], n || i),
                    'Object' !== a.util.type(e[i]) || r[a.util.objId(e[i])]
                      ? 'Array' !== a.util.type(e[i]) ||
                        r[a.util.objId(e[i])] ||
                        ((r[a.util.objId(e[i])] = !0),
                        a.languages.DFS(e[i], t, i, r))
                      : ((r[a.util.objId(e[i])] = !0),
                        a.languages.DFS(e[i], t, null, r)));
              },
            },
            plugins: {},
            highlight: function (e, t, n) {
              var r = { code: e, grammar: t, language: n };
              return (
                (r.tokens = a.tokenize(r.code, r.grammar)),
                i.stringify(a.util.encode(r.tokens), r.language)
              );
            },
            matchGrammar: function (e, t, n, r, i, o, s) {
              var l = a.Token;
              for (var c in n)
                if (n.hasOwnProperty(c) && n[c]) {
                  if (c == s) return;
                  var u = n[c];
                  u = 'Array' === a.util.type(u) ? u : [u];
                  for (var p = 0; p < u.length; ++p) {
                    var d = u[p],
                      f = d.inside,
                      g = !!d.lookbehind,
                      m = !!d.greedy,
                      h = 0,
                      b = d.alias;
                    if (m && !d.pattern.global) {
                      var y = d.pattern.toString().match(/[imuy]*$/)[0];
                      d.pattern = RegExp(d.pattern.source, y + 'g');
                    }
                    d = d.pattern || d;
                    for (
                      var v = r, w = i;
                      v < t.length;
                      w += t[v].length, ++v
                    ) {
                      var E = t[v];
                      if (t.length > e.length) return;
                      if (!(E instanceof l)) {
                        if (m && v != t.length - 1) {
                          if (((d.lastIndex = w), !(O = d.exec(e)))) break;
                          for (
                            var k = O.index + (g ? O[1].length : 0),
                              x = O.index + O[0].length,
                              A = v,
                              S = w,
                              N = t.length;
                            A < N &&
                            (S < x || (!t[A].type && !t[A - 1].greedy));
                            ++A
                          )
                            k >= (S += t[A].length) && (++v, (w = S));
                          if (t[v] instanceof l) continue;
                          (C = A - v), (E = e.slice(w, S)), (O.index -= w);
                        } else {
                          d.lastIndex = 0;
                          var O = d.exec(E),
                            C = 1;
                        }
                        if (O) {
                          g && (h = O[1] ? O[1].length : 0),
                            (x =
                              (k = O.index + h) + (O = O[0].slice(h)).length);
                          var _ = E.slice(0, k),
                            T = E.slice(x),
                            I = [v, C];
                          _ && (++v, (w += _.length), I.push(_));
                          var R = new l(c, f ? a.tokenize(O, f) : O, b, O, m);
                          if (
                            (I.push(R),
                            T && I.push(T),
                            Array.prototype.splice.apply(t, I),
                            1 != C && a.matchGrammar(e, t, n, v, w, !0, c),
                            o)
                          )
                            break;
                        } else if (o) break;
                      }
                    }
                  }
                }
            },
            hooks: { add: function () {} },
            tokenize: function (e, t, n) {
              var r = [e],
                i = t.rest;
              if (i) {
                for (var o in i) t[o] = i[o];
                delete t.rest;
              }
              return a.matchGrammar(e, r, t, 0, 0, !1), r;
            },
          }),
          ((i = a.Token = function (e, t, n, r, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (r || '').length),
              (this.greedy = !!a);
          }).stringify = function (e, t, n) {
            if ('string' == typeof e) return e;
            if ('Array' === a.util.type(e))
              return e
                .map(function (n) {
                  return i.stringify(n, t, e);
                })
                .join('');
            var r = {
              type: e.type,
              content: i.stringify(e.content, t, n),
              tag: 'span',
              classes: ['token', e.type],
              attributes: {},
              language: t,
              parent: n,
            };
            if (e.alias) {
              var o = 'Array' === a.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(r.classes, o);
            }
            var s = Object.keys(r.attributes)
              .map(function (e) {
                return (
                  e +
                  '="' +
                  (r.attributes[e] || '').replace(/"/g, '&quot;') +
                  '"'
                );
              })
              .join(' ');
            return (
              '<' +
              r.tag +
              ' class="' +
              r.classes.join(' ') +
              '"' +
              (s ? ' ' + s : '') +
              '>' +
              r.content +
              '</' +
              r.tag +
              '>'
            );
          }),
          a);
      (e.exports = o), (o.default = o);
    },
    LAy0: function (e, t, n) {
      'use strict';
      n('whD0')('trim', function (e) {
        return function () {
          return e(this, 3);
        };
      });
    },
    'LJP+': function (e, t, n) {},
    LNZx: function (e, t, n) {
      'use strict';
      if (n('q25y')) {
        var r = n('PZOW'),
          a = n('WDj7'),
          i = n('9+pC'),
          o = n('1nmM'),
          s = n('lGaV'),
          l = n('Xjn8'),
          c = n('3D/l'),
          u = n('Sto+'),
          p = n('Ys7q'),
          d = n('68DA'),
          f = n('H0jE'),
          g = n('7n7h'),
          m = n('/9sY'),
          h = n('cvBB'),
          b = n('oV0Y'),
          y = n('rs7R'),
          v = n('R3DE'),
          w = n('j1MT'),
          E = n('BtUU'),
          k = n('gTGn'),
          x = n('/14B'),
          A = n('3d6S'),
          S = n('jWYI'),
          N = n('ajfu').f,
          O = n('8fRy'),
          C = n('VukQ'),
          _ = n('je6E'),
          T = n('PoSw'),
          I = n('0TVp'),
          R = n('Jz/K'),
          F = n('Cwzy'),
          j = n('qWkm'),
          P = n('BbOq'),
          L = n('7sbX'),
          $ = n('OD0c'),
          D = n('rAvv'),
          B = n('2+mA'),
          z = n('az0j'),
          M = B.f,
          U = z.f,
          G = a.RangeError,
          V = a.TypeError,
          W = a.Uint8Array,
          q = Array.prototype,
          Y = l.ArrayBuffer,
          H = l.DataView,
          X = T(0),
          Z = T(2),
          K = T(3),
          Q = T(4),
          J = T(5),
          ee = T(6),
          te = I(!0),
          ne = I(!1),
          re = F.values,
          ae = F.keys,
          ie = F.entries,
          oe = q.lastIndexOf,
          se = q.reduce,
          le = q.reduceRight,
          ce = q.join,
          ue = q.sort,
          pe = q.slice,
          de = q.toString,
          fe = q.toLocaleString,
          ge = _('iterator'),
          me = _('toStringTag'),
          he = C('typed_constructor'),
          be = C('def_constructor'),
          ye = s.CONSTR,
          ve = s.TYPED,
          we = s.VIEW,
          Ee = T(1, function (e, t) {
            return Ne(R(e, e[be]), t);
          }),
          ke = i(function () {
            return 1 === new W(new Uint16Array([1]).buffer)[0];
          }),
          xe =
            !!W &&
            !!W.prototype.set &&
            i(function () {
              new W(1).set({});
            }),
          Ae = function (e, t) {
            var n = g(e);
            if (n < 0 || n % t) throw G('Wrong offset!');
            return n;
          },
          Se = function (e) {
            if (E(e) && ve in e) return e;
            throw V(e + ' is not a typed array!');
          },
          Ne = function (e, t) {
            if (!E(e) || !(he in e))
              throw V('It is not a typed array constructor!');
            return new e(t);
          },
          Oe = function (e, t) {
            return Ce(R(e, e[be]), t);
          },
          Ce = function (e, t) {
            for (var n = 0, r = t.length, a = Ne(e, r); r > n; ) a[n] = t[n++];
            return a;
          },
          _e = function (e, t, n) {
            M(e, t, {
              get: function () {
                return this._d[n];
              },
            });
          },
          Te = function (e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              s = k(e),
              l = arguments.length,
              u = l > 1 ? arguments[1] : void 0,
              p = void 0 !== u,
              d = O(s);
            if (null != d && !x(d)) {
              for (o = d.call(s), r = [], t = 0; !(i = o.next()).done; t++)
                r.push(i.value);
              s = r;
            }
            for (
              p && l > 2 && (u = c(u, arguments[2], 2)),
                t = 0,
                n = m(s.length),
                a = Ne(this, n);
              n > t;
              t++
            )
              a[t] = p ? u(s[t], t) : s[t];
            return a;
          },
          Ie = function () {
            for (var e = 0, t = arguments.length, n = Ne(this, t); t > e; )
              n[e] = arguments[e++];
            return n;
          },
          Re =
            !!W &&
            i(function () {
              fe.call(new W(1));
            }),
          Fe = function () {
            return fe.apply(Re ? pe.call(Se(this)) : Se(this), arguments);
          },
          je = {
            copyWithin: function (e, t) {
              return D.call(
                Se(this),
                e,
                t,
                arguments.length > 2 ? arguments[2] : void 0,
              );
            },
            every: function (e) {
              return Q(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            fill: function (e) {
              return $.apply(Se(this), arguments);
            },
            filter: function (e) {
              return Oe(
                this,
                Z(Se(this), e, arguments.length > 1 ? arguments[1] : void 0),
              );
            },
            find: function (e) {
              return J(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            findIndex: function (e) {
              return ee(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            forEach: function (e) {
              X(Se(this), e, arguments.length > 1 ? arguments[1] : void 0);
            },
            indexOf: function (e) {
              return ne(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            includes: function (e) {
              return te(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            join: function (e) {
              return ce.apply(Se(this), arguments);
            },
            lastIndexOf: function (e) {
              return oe.apply(Se(this), arguments);
            },
            map: function (e) {
              return Ee(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            reduce: function (e) {
              return se.apply(Se(this), arguments);
            },
            reduceRight: function (e) {
              return le.apply(Se(this), arguments);
            },
            reverse: function () {
              for (
                var e, t = Se(this).length, n = Math.floor(t / 2), r = 0;
                r < n;

              )
                (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
              return this;
            },
            some: function (e) {
              return K(
                Se(this),
                e,
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
            sort: function (e) {
              return ue.call(Se(this), e);
            },
            subarray: function (e, t) {
              var n = Se(this),
                r = n.length,
                a = b(e, r);
              return new (R(n, n[be]))(
                n.buffer,
                n.byteOffset + a * n.BYTES_PER_ELEMENT,
                m((void 0 === t ? r : b(t, r)) - a),
              );
            },
          },
          Pe = function (e, t) {
            return Oe(this, pe.call(Se(this), e, t));
          },
          Le = function (e) {
            Se(this);
            var t = Ae(arguments[1], 1),
              n = this.length,
              r = k(e),
              a = m(r.length),
              i = 0;
            if (a + t > n) throw G('Wrong length!');
            for (; i < a; ) this[t + i] = r[i++];
          },
          $e = {
            entries: function () {
              return ie.call(Se(this));
            },
            keys: function () {
              return ae.call(Se(this));
            },
            values: function () {
              return re.call(Se(this));
            },
          },
          De = function (e, t) {
            return (
              E(e) &&
              e[ve] &&
              'symbol' != typeof t &&
              t in e &&
              String(+t) == String(t)
            );
          },
          Be = function (e, t) {
            return De(e, (t = y(t, !0))) ? p(2, e[t]) : U(e, t);
          },
          ze = function (e, t, n) {
            return !(De(e, (t = y(t, !0))) && E(n) && v(n, 'value')) ||
              v(n, 'get') ||
              v(n, 'set') ||
              n.configurable ||
              (v(n, 'writable') && !n.writable) ||
              (v(n, 'enumerable') && !n.enumerable)
              ? M(e, t, n)
              : ((e[t] = n.value), e);
          };
        ye || ((z.f = Be), (B.f = ze)),
          o(o.S + o.F * !ye, 'Object', {
            getOwnPropertyDescriptor: Be,
            defineProperty: ze,
          }),
          i(function () {
            de.call({});
          }) &&
            (de = fe = function () {
              return ce.call(this);
            });
        var Me = f({}, je);
        f(Me, $e),
          d(Me, ge, $e.values),
          f(Me, {
            slice: Pe,
            set: Le,
            constructor: function () {},
            toString: de,
            toLocaleString: Fe,
          }),
          _e(Me, 'buffer', 'b'),
          _e(Me, 'byteOffset', 'o'),
          _e(Me, 'byteLength', 'l'),
          _e(Me, 'length', 'e'),
          M(Me, me, {
            get: function () {
              return this[ve];
            },
          }),
          (e.exports = function (e, t, n, l) {
            var c = e + ((l = !!l) ? 'Clamped' : '') + 'Array',
              p = 'get' + e,
              f = 'set' + e,
              g = a[c],
              b = g || {},
              y = g && S(g),
              v = !g || !s.ABV,
              k = {},
              x = g && g.prototype,
              O = function (e, n) {
                M(e, n, {
                  get: function () {
                    return (function (e, n) {
                      var r = e._d;
                      return r.v[p](n * t + r.o, ke);
                    })(this, n);
                  },
                  set: function (e) {
                    return (function (e, n, r) {
                      var a = e._d;
                      l &&
                        (r =
                          (r = Math.round(r)) < 0
                            ? 0
                            : r > 255
                            ? 255
                            : 255 & r),
                        a.v[f](n * t + a.o, r, ke);
                    })(this, n, e);
                  },
                  enumerable: !0,
                });
              };
            v
              ? ((g = n(function (e, n, r, a) {
                  u(e, g, c, '_d');
                  var i,
                    o,
                    s,
                    l,
                    p = 0,
                    f = 0;
                  if (E(n)) {
                    if (
                      !(
                        n instanceof Y ||
                        'ArrayBuffer' == (l = w(n)) ||
                        'SharedArrayBuffer' == l
                      )
                    )
                      return ve in n ? Ce(g, n) : Te.call(g, n);
                    (i = n), (f = Ae(r, t));
                    var b = n.byteLength;
                    if (void 0 === a) {
                      if (b % t) throw G('Wrong length!');
                      if ((o = b - f) < 0) throw G('Wrong length!');
                    } else if ((o = m(a) * t) + f > b) throw G('Wrong length!');
                    s = o / t;
                  } else (s = h(n)), (i = new Y((o = s * t)));
                  for (
                    d(e, '_d', { b: i, o: f, l: o, e: s, v: new H(i) });
                    p < s;

                  )
                    O(e, p++);
                })),
                (x = g.prototype = A(Me)),
                d(x, 'constructor', g))
              : (i(function () {
                  g(1);
                }) &&
                  i(function () {
                    new g(-1);
                  }) &&
                  P(function (e) {
                    new g(), new g(null), new g(1.5), new g(e);
                  }, !0)) ||
                ((g = n(function (e, n, r, a) {
                  var i;
                  return (
                    u(e, g, c),
                    E(n)
                      ? n instanceof Y ||
                        'ArrayBuffer' == (i = w(n)) ||
                        'SharedArrayBuffer' == i
                        ? void 0 !== a
                          ? new b(n, Ae(r, t), a)
                          : void 0 !== r
                          ? new b(n, Ae(r, t))
                          : new b(n)
                        : ve in n
                        ? Ce(g, n)
                        : Te.call(g, n)
                      : new b(h(n))
                  );
                })),
                X(
                  y !== Function.prototype ? N(b).concat(N(y)) : N(b),
                  function (e) {
                    e in g || d(g, e, b[e]);
                  },
                ),
                (g.prototype = x),
                r || (x.constructor = g));
            var C = x[ge],
              _ = !!C && ('values' == C.name || null == C.name),
              T = $e.values;
            d(g, he, !0),
              d(x, ve, c),
              d(x, we, !0),
              d(x, be, g),
              (l ? new g(1)[me] == c : me in x) ||
                M(x, me, {
                  get: function () {
                    return c;
                  },
                }),
              (k[c] = g),
              o(o.G + o.W + o.F * (g != b), k),
              o(o.S, c, { BYTES_PER_ELEMENT: t }),
              o(
                o.S +
                  o.F *
                    i(function () {
                      b.of.call(g, 1);
                    }),
                c,
                { from: Te, of: Ie },
              ),
              'BYTES_PER_ELEMENT' in x || d(x, 'BYTES_PER_ELEMENT', t),
              o(o.P, c, je),
              L(c),
              o(o.P + o.F * xe, c, { set: Le }),
              o(o.P + o.F * !_, c, $e),
              r || x.toString == de || (x.toString = de),
              o(
                o.P +
                  o.F *
                    i(function () {
                      new g(1).slice();
                    }),
                c,
                { slice: Pe },
              ),
              o(
                o.P +
                  o.F *
                    (i(function () {
                      return (
                        [1, 2].toLocaleString() !=
                        new g([1, 2]).toLocaleString()
                      );
                    }) ||
                      !i(function () {
                        x.toLocaleString.call([1, 2]);
                      })),
                c,
                { toLocaleString: Fe },
              ),
              (j[c] = _ ? C : T),
              r || _ || d(x, ge, T);
          });
      } else e.exports = function () {};
    },
    O94r: function (e, t, n) {
      var r;
      n('RX8P'),
        (function () {
          'use strict';
          var n = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var i = typeof r;
                if ('string' === i || 'number' === i) e.push(r);
                else if (Array.isArray(r) && r.length) {
                  var o = a.apply(null, r);
                  o && e.push(o);
                } else if ('object' === i)
                  for (var s in r) n.call(r, s) && r[s] && e.push(s);
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (r = function () {
                  return a;
                }.apply(t, [])) || (e.exports = r);
        })();
    },
    OD0c: function (e, t, n) {
      'use strict';
      var r = n('gTGn'),
        a = n('oV0Y'),
        i = n('/9sY');
      e.exports = function (e) {
        for (
          var t = r(this),
            n = i(t.length),
            o = arguments.length,
            s = a(o > 1 ? arguments[1] : void 0, n),
            l = o > 2 ? arguments[2] : void 0,
            c = void 0 === l ? n : a(l, n);
          c > s;

        )
          t[s++] = e;
        return t;
      };
    },
    Pu0A: function (e, t, n) {
      n('npfV'),
        n('uydD'),
        n('Cwzy'),
        n('odAc'),
        n('OksV'),
        (e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ('object' != typeof e || !e || 'object' != typeof t || !t)
            return !1;
          var i = Object.keys(e),
            o = Object.keys(t);
          if (i.length !== o.length) return !1;
          for (
            var s = Object.prototype.hasOwnProperty.bind(t), l = 0;
            l < i.length;
            l++
          ) {
            var c = i[l];
            if (!s(c)) return !1;
            var u = e[c],
              p = t[c];
            if (
              !1 === (a = n ? n.call(r, u, p, c) : void 0) ||
              (void 0 === a && u !== p)
            )
              return !1;
          }
          return !0;
        });
    },
    QU4f: function (e, t, n) {},
    RR6j: function (e, t) {
      e.exports = {
        plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
        styles: [
          {
            types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
            style: { color: '#6c6783' },
          },
          { types: ['namespace'], style: { opacity: 0.7 } },
          { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
          { types: ['property', 'function'], style: { color: '#9a86fd' } },
          {
            types: ['tag-id', 'selector', 'atrule-id'],
            style: { color: '#eeebff' },
          },
          { types: ['attr-name'], style: { color: '#c4b9fe' } },
          {
            types: [
              'boolean',
              'string',
              'entity',
              'url',
              'attr-value',
              'keyword',
              'control',
              'directive',
              'unit',
              'statement',
              'regex',
              'at-rule',
              'placeholder',
              'variable',
            ],
            style: { color: '#ffcc99' },
          },
          { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
          { types: ['inserted'], style: { textDecorationLine: 'underline' } },
          { types: ['italic'], style: { fontStyle: 'italic' } },
          { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
          { types: ['important'], style: { color: '#c4b9fe' } },
        ],
      };
    },
    'T4+q': function (e, t, n) {
      'use strict';
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    Wbzz: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return c;
      });
      n('/KhS');
      var r = n('ERkP'),
        a = n.n(r),
        i = n('O+tk'),
        o = n.n(i);
      n.d(t, 'a', function () {
        return o.a;
      });
      n('lw3w'), n('emEt').default.enqueue;
      var s = a.a.createContext({});
      function l(e) {
        var t = e.staticQueryData,
          n = e.data,
          r = e.query,
          i = e.render,
          o = n ? n.data : t[r] && t[r].data;
        return a.a.createElement(
          a.a.Fragment,
          null,
          o && i(o),
          !o && a.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var c = function (e) {
        var t = e.data,
          n = e.query,
          r = e.render,
          i = e.children;
        return a.a.createElement(s.Consumer, null, function (e) {
          return a.a.createElement(l, {
            data: t,
            query: n,
            render: r || i,
            staticQueryData: e,
          });
        });
      };
    },
    Xjn8: function (e, t, n) {
      'use strict';
      var r = n('WDj7'),
        a = n('q25y'),
        i = n('PZOW'),
        o = n('lGaV'),
        s = n('68DA'),
        l = n('H0jE'),
        c = n('9+pC'),
        u = n('Sto+'),
        p = n('7n7h'),
        d = n('/9sY'),
        f = n('cvBB'),
        g = n('ajfu').f,
        m = n('2+mA').f,
        h = n('OD0c'),
        b = n('FGC+'),
        y = r.ArrayBuffer,
        v = r.DataView,
        w = r.Math,
        E = r.RangeError,
        k = r.Infinity,
        x = y,
        A = w.abs,
        S = w.pow,
        N = w.floor,
        O = w.log,
        C = w.LN2,
        _ = a ? '_b' : 'buffer',
        T = a ? '_l' : 'byteLength',
        I = a ? '_o' : 'byteOffset';
      function R(e, t, n) {
        var r,
          a,
          i,
          o = new Array(n),
          s = 8 * n - t - 1,
          l = (1 << s) - 1,
          c = l >> 1,
          u = 23 === t ? S(2, -24) - S(2, -77) : 0,
          p = 0,
          d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          (e = A(e)) != e || e === k
            ? ((a = e != e ? 1 : 0), (r = l))
            : ((r = N(O(e) / C)),
              e * (i = S(2, -r)) < 1 && (r--, (i *= 2)),
              (e += r + c >= 1 ? u / i : u * S(2, 1 - c)) * i >= 2 &&
                (r++, (i /= 2)),
              r + c >= l
                ? ((a = 0), (r = l))
                : r + c >= 1
                ? ((a = (e * i - 1) * S(2, t)), (r += c))
                : ((a = e * S(2, c - 1) * S(2, t)), (r = 0)));
          t >= 8;
          o[p++] = 255 & a, a /= 256, t -= 8
        );
        for (
          r = (r << t) | a, s += t;
          s > 0;
          o[p++] = 255 & r, r /= 256, s -= 8
        );
        return (o[--p] |= 128 * d), o;
      }
      function F(e, t, n) {
        var r,
          a = 8 * n - t - 1,
          i = (1 << a) - 1,
          o = i >> 1,
          s = a - 7,
          l = n - 1,
          c = e[l--],
          u = 127 & c;
        for (c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
        for (
          r = u & ((1 << -s) - 1), u >>= -s, s += t;
          s > 0;
          r = 256 * r + e[l], l--, s -= 8
        );
        if (0 === u) u = 1 - o;
        else {
          if (u === i) return r ? NaN : c ? -k : k;
          (r += S(2, t)), (u -= o);
        }
        return (c ? -1 : 1) * r * S(2, u - t);
      }
      function j(e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
      }
      function P(e) {
        return [255 & e];
      }
      function L(e) {
        return [255 & e, (e >> 8) & 255];
      }
      function $(e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
      }
      function D(e) {
        return R(e, 52, 8);
      }
      function B(e) {
        return R(e, 23, 4);
      }
      function z(e, t, n) {
        m(e.prototype, t, {
          get: function () {
            return this[n];
          },
        });
      }
      function M(e, t, n, r) {
        var a = f(+n);
        if (a + t > e[T]) throw E('Wrong index!');
        var i = e[_]._b,
          o = a + e[I],
          s = i.slice(o, o + t);
        return r ? s : s.reverse();
      }
      function U(e, t, n, r, a, i) {
        var o = f(+n);
        if (o + t > e[T]) throw E('Wrong index!');
        for (var s = e[_]._b, l = o + e[I], c = r(+a), u = 0; u < t; u++)
          s[l + u] = c[i ? u : t - u - 1];
      }
      if (o.ABV) {
        if (
          !c(function () {
            y(1);
          }) ||
          !c(function () {
            new y(-1);
          }) ||
          c(function () {
            return new y(), new y(1.5), new y(NaN), 'ArrayBuffer' != y.name;
          })
        ) {
          for (
            var G,
              V = ((y = function (e) {
                return u(this, y), new x(f(e));
              }).prototype = x.prototype),
              W = g(x),
              q = 0;
            W.length > q;

          )
            (G = W[q++]) in y || s(y, G, x[G]);
          i || (V.constructor = y);
        }
        var Y = new v(new y(2)),
          H = v.prototype.setInt8;
        Y.setInt8(0, 2147483648),
          Y.setInt8(1, 2147483649),
          (!Y.getInt8(0) && Y.getInt8(1)) ||
            l(
              v.prototype,
              {
                setInt8: function (e, t) {
                  H.call(this, e, (t << 24) >> 24);
                },
                setUint8: function (e, t) {
                  H.call(this, e, (t << 24) >> 24);
                },
              },
              !0,
            );
      } else
        (y = function (e) {
          u(this, y, 'ArrayBuffer');
          var t = f(e);
          (this._b = h.call(new Array(t), 0)), (this[T] = t);
        }),
          (v = function (e, t, n) {
            u(this, v, 'DataView'), u(e, y, 'DataView');
            var r = e[T],
              a = p(t);
            if (a < 0 || a > r) throw E('Wrong offset!');
            if (a + (n = void 0 === n ? r - a : d(n)) > r)
              throw E('Wrong length!');
            (this[_] = e), (this[I] = a), (this[T] = n);
          }),
          a &&
            (z(y, 'byteLength', '_l'),
            z(v, 'buffer', '_b'),
            z(v, 'byteLength', '_l'),
            z(v, 'byteOffset', '_o')),
          l(v.prototype, {
            getInt8: function (e) {
              return (M(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
              return M(this, 1, e)[0];
            },
            getInt16: function (e) {
              var t = M(this, 2, e, arguments[1]);
              return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
              var t = M(this, 2, e, arguments[1]);
              return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
              return j(M(this, 4, e, arguments[1]));
            },
            getUint32: function (e) {
              return j(M(this, 4, e, arguments[1])) >>> 0;
            },
            getFloat32: function (e) {
              return F(M(this, 4, e, arguments[1]), 23, 4);
            },
            getFloat64: function (e) {
              return F(M(this, 8, e, arguments[1]), 52, 8);
            },
            setInt8: function (e, t) {
              U(this, 1, e, P, t);
            },
            setUint8: function (e, t) {
              U(this, 1, e, P, t);
            },
            setInt16: function (e, t) {
              U(this, 2, e, L, t, arguments[2]);
            },
            setUint16: function (e, t) {
              U(this, 2, e, L, t, arguments[2]);
            },
            setInt32: function (e, t) {
              U(this, 4, e, $, t, arguments[2]);
            },
            setUint32: function (e, t) {
              U(this, 4, e, $, t, arguments[2]);
            },
            setFloat32: function (e, t) {
              U(this, 4, e, B, t, arguments[2]);
            },
            setFloat64: function (e, t) {
              U(this, 8, e, D, t, arguments[2]);
            },
          });
      b(y, 'ArrayBuffer'),
        b(v, 'DataView'),
        s(v.prototype, o.VIEW, !0),
        (t.ArrayBuffer = y),
        (t.DataView = v);
    },
    ZMF8: function (e, t, n) {},
    cvBB: function (e, t, n) {
      var r = n('7n7h'),
        a = n('/9sY');
      e.exports = function (e) {
        if (void 0 === e) return 0;
        var t = r(e),
          n = a(t);
        if (t !== n) throw RangeError('Wrong length!');
        return n;
      };
    },
    gPam: function (e, t, n) {
      n('LNZx')('Uint32', 4, function (e) {
        return function (t, n, r) {
          return e(this, t, n, r);
        };
      });
    },
    gkKy: function (e, t, n) {
      'use strict';
      var r = n('xXyX'),
        a = n('ERkP'),
        i = n.n(a),
        o = n('ZVZ0'),
        s = n('Wbzz'),
        l = (n('sIWT'), n('l266'), n('0plx'), n('bIcM'), n('v6Ak'), n('O94r')),
        c = n.n(l),
        u = (n('kF1u'), n('j/s1')),
        p =
          (Object(u.b)(s.a).withConfig({
            displayName: 'MenuItem__MenuLink',
            componentId: 'cecnnq-0',
          })(
            [
              'flex:1;display:block;margin:6px 0;color:#4682b4;&:hover{text-decoration:underline;}',
              ' ',
              '',
            ],
            function (e) {
              return (
                e.isPartOfCurrentlocation && Object(u.a)(['font-weight:600;'])
              );
            },
            function (e) {
              var t = e.level;
              return 1 === t
                ? Object(u.a)(['font-size:1.125rem;'])
                : 2 === t
                ? Object(u.a)(['font-size:1rem;color:#666;'])
                : 3 === t
                ? Object(u.a)(['font-size:0.875rem;color:#666;'])
                : void 0;
            },
          ),
          function (e) {
            var t = e.to,
              n = e.content,
              r = e.level,
              a = e.isPartOfCurrentlocation;
            return t
              ? i.a.createElement(
                  s.a,
                  {
                    to: t,
                    className: c()('c-menu-link', {
                      'c-menu-link--level-1': r - 1 == 1,
                      'c-menu-link--level-2': r - 1 == 2,
                      'c-menu-link--level-3': r - 1 >= 3,
                      'is-part-of-current-location': a,
                    }),
                  },
                  a
                    ? i.a.createElement('mark', null, n)
                    : i.a.createElement(i.a.Fragment, null, n),
                )
              : i.a.createElement('p', null, n);
          }),
        d = (n('gs/B'), n('/Qoa')),
        f =
          (n('iyo3'),
          n('QHfF'),
          n('13E5'),
          function (e, t) {
            void 0 === t && (t = ''), t && t.pathname && (t = t.pathname);
            return (function e(n) {
              return n.map(function (n) {
                var r = n.path.replace('docs', '');
                return (
                  (n.isOpened = t.includes(r)),
                  (n.isPartOfCurrentlocation = t.includes(r)),
                  n.content && n.content.length && (n.content = e(n.content)),
                  n
                );
              });
            })(e);
          }),
        g = function (e) {
          var t = e.Component;
          return function (e) {
            var n =
              e.location && e.location.pathname ? e.location.pathname : '';
            return i.a.createElement(s.b, {
              query: m,
              render: function (r) {
                var a = (function (e, t) {
                  var n = void 0 === t ? {} : t,
                    r = n.basedir,
                    a = void 0 === r ? 'docs/' : r,
                    i = (n.location, []);
                  e.forEach(function (e) {
                    var t = (e = e.node).fields.fileName.relativePath,
                      n = e.fields.slug,
                      r = t.replace(a, '').split('/');
                    r.pop();
                    var o,
                      s = r.length,
                      l = e.frontmatter,
                      c = l.title,
                      u = l.order,
                      p = l.description,
                      d = i,
                      f = a;
                    r.forEach(function (e) {
                      var t;
                      (f = (f += '/' + e).replace('//', '/')),
                        (t = f),
                        (o = d.find(function (e) {
                          return e.path === t;
                        })) ||
                          ((o = {
                            path: f,
                            dirPath: f,
                            name: e,
                            slug: n,
                            level: s,
                            title: c,
                            order: u,
                            description: p,
                            type: 'directory',
                            content: [],
                          }),
                          d.push(o)),
                        (d = o.content);
                    });
                  });
                  return (
                    (function e(t) {
                      t.sort(function (e, t) {
                        return e.order - t.order;
                      }),
                        t.forEach(function (t) {
                          t.content && e(t.content);
                        });
                    })(i),
                    i
                  );
                })(r.allMdx.edges, { location: n });
                return i.a.createElement(
                  t,
                  Object.assign({ siteMapData: a }, e),
                );
              },
              data: d,
            });
          };
        },
        m = '1872193205';
      n('Rq2X');
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function b(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function y(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n('he6s');
      n('8LQc');
      function v(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      var w = n('7nmT'),
        E = n.n(w),
        k = !1,
        x = i.a.createContext(null),
        A = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? i
                  ? ((a = 'exited'), (r.appearStatus = 'entering'))
                  : (a = 'entered')
                : (a =
                    t.unmountOnExit || t.mountOnEnter ? 'unmounted' : 'exited'),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          y(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && 'unmounted' === t.status
                ? { status: 'exited' }
                : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? 'entering' !== n && 'entered' !== n && (t = 'entering')
                  : ('entering' !== n && 'entered' !== n) || (t = 'exiting');
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  'number' != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    'entering' === t
                      ? this.performEnter(e)
                      : this.performExit())
                  : this.props.unmountOnExit &&
                    'exited' === this.state.status &&
                    this.setState({ status: 'unmounted' });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [E.a.findDOMNode(this), r],
                i = a[0],
                o = a[1],
                s = this.getTimeouts(),
                l = r ? s.appear : s.enter;
              (!e && !n) || k
                ? this.safeSetState({ status: 'entered' }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, o),
                  this.safeSetState({ status: 'entering' }, function () {
                    t.props.onEntering(i, o),
                      t.onTransitionEnd(l, function () {
                        t.safeSetState({ status: 'entered' }, function () {
                          t.props.onEntered(i, o);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : E.a.findDOMNode(this);
              t && !k
                ? (this.props.onExit(r),
                  this.safeSetState({ status: 'exiting' }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: 'exited' }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: 'exited' }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : E.a.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = a[0],
                    o = a[1];
                  this.props.addEndListener(i, o);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if ('unmounted' === e) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  b(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]));
              return i.a.createElement(
                x.Provider,
                { value: null },
                'function' == typeof n
                  ? n(e, r)
                  : i.a.cloneElement(i.a.Children.only(n), r),
              );
            }),
            t
          );
        })(i.a.Component);
      function S() {}
      (A.contextType = x),
        (A.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: S,
          onEntering: S,
          onEntered: S,
          onExit: S,
          onExiting: S,
          onExited: S,
        }),
        (A.UNMOUNTED = 'unmounted'),
        (A.EXITED = 'exited'),
        (A.ENTERING = 'entering'),
        (A.ENTERED = 'entered'),
        (A.EXITING = 'exiting');
      var N = A,
        O = function (e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' == typeof n.className
                  ? (n.className = v(n.className, r))
                  : n.setAttribute(
                      'class',
                      v((n.className && n.className.baseVal) || '', r),
                    ))
              );
              var n, r;
            })
          );
        },
        C = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t =
                e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {},
              }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1];
                t.removeClasses(a, 'exit'),
                  t.addClass(a, i ? 'appear' : 'enter', 'base'),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1] ? 'appear' : 'enter';
                t.addClass(a, i, 'active'),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1] ? 'appear' : 'enter';
                t.removeClasses(a, i),
                  t.addClass(a, i, 'done'),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, 'appear'),
                  t.removeClasses(n, 'enter'),
                  t.addClass(n, 'exit', 'base'),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, 'exit', 'active'),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, 'exit'),
                  t.addClass(n, 'exit', 'done'),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = 'string' == typeof n,
                  a = r ? '' + (r && n ? n + '-' : '') + e : n[e];
                return {
                  baseClassName: a,
                  activeClassName: r ? a + '-active' : n[e + 'Active'],
                  doneClassName: r ? a + '-done' : n[e + 'Done'],
                };
              }),
              t
            );
          }
          y(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + 'ClassName'],
                a = this.getClassNames('enter').doneClassName;
              'appear' === t && 'done' === n && a && (r += ' ' + a),
                'active' === n && e && e.scrollTop,
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(' ').forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        ' ' +
                                        (e.className.baseVal || e.className) +
                                        ' '
                                      ).indexOf(' ' + t + ' ');
                              })(n, r) ||
                              ('string' == typeof n.className
                                ? (n.className = n.className + ' ' + r)
                                : n.setAttribute(
                                    'class',
                                    ((n.className && n.className.baseVal) ||
                                      '') +
                                      ' ' +
                                      r,
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                a = n.active,
                i = n.done;
              (this.appliedClasses[t] = {}),
                r && O(e, r),
                a && O(e, a),
                i && O(e, i);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, b(e, ['classNames']));
              return i.a.createElement(
                N,
                h({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            t
          );
        })(i.a.Component);
      C.defaultProps = { classNames: '' };
      var _ = C;
      n('QU4f');
      var T = (function (e) {
          var t, n;
          function r(t) {
            var n, r, a;
            return (
              ((n = e.call(this, t) || this).openMenu = function (e) {
                n.setState({
                  menuArray: (function t(n) {
                    return n.map(function (n, r) {
                      return (
                        e.includes(n.dirPath) && (n.isOpened = !0),
                        n.content &&
                          n.content.length > 0 &&
                          (n.content = t(n.content)),
                        n
                      );
                    });
                  })(n.state.menuArray),
                });
              }),
              (n.closeMenu = function (e) {
                n.setState({
                  menuArray: (function t(n) {
                    return n.map(function (n, r) {
                      return (
                        e === n.dirPath && (n.isOpened = !1),
                        n.content &&
                          n.content.length > 0 &&
                          (n.content = t(n.content)),
                        n
                      );
                    });
                  })(n.state.menuArray),
                });
              }),
              (n.buildMenu = function (e, t) {
                return (
                  void 0 === t && (t = !0),
                  i.a.createElement(
                    'ul',
                    { className: c()('c-left-menu__group', { 'is-open': t }) },
                    e.map(function (e) {
                      return i.a.createElement(
                        'li',
                        { key: e.dirPath },
                        i.a.createElement(
                          'div',
                          { className: 'c-left-menu__item' },
                          i.a.createElement(p, {
                            to: e.slug,
                            content: e.title,
                            level: e.level,
                            isPartOfCurrentlocation: e.isPartOfCurrentlocation,
                          }),
                          e.content.length > 0 &&
                            i.a.createElement(
                              'button',
                              {
                                className: 'c-left-menu__open-btn',
                                onClick: e.isOpened
                                  ? function () {
                                      return n.closeMenu(e.dirPath);
                                    }
                                  : function () {
                                      return n.openMenu(e.dirPath);
                                    },
                              },
                              i.a.createElement(
                                'svg',
                                {
                                  className: c()('c-left-menu__open-icon', {
                                    'is-open': e.isOpened,
                                    'c-left-menu__open-icon--level-1':
                                      e.level - 1 == 1,
                                  }),
                                  viewBox: '0 0 20 20',
                                  width: '20',
                                  height: '20',
                                  'vector-effect': 'non-scaling-stroke',
                                },
                                i.a.createElement('polyline', {
                                  stroke: 'currentColor',
                                  fill: 'transparent',
                                  points: '17.9,6.5 10,14.4 2.1,6.5',
                                }),
                              ),
                            ),
                        ),
                        e.content.length > 0 &&
                          i.a.createElement(
                            _,
                            {
                              in: t,
                              timeout: 350,
                              classNames: 'is-open',
                              unmountOnExit: !0,
                            },
                            n.buildMenu(e.content, e.isOpened),
                          ),
                      );
                    }),
                  )
                );
              }),
              (n.state = {
                menuArray:
                  ((r = n.props.siteMapData),
                  (a = n.props.location),
                  f(r, a).find(function (e) {
                    return e.isPartOfCurrentlocation;
                  }).content),
              }),
              n
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              return i.a.createElement(
                'aside',
                { className: 'c-left-menu' },
                this.buildMenu(this.state.menuArray, !0),
              );
            }),
            r
          );
        })(a.Component),
        I = g({ Component: T }),
        R = function () {
          return 'preview';
        },
        F = n('jNQY');
      var j = u.b.div.withConfig({
          displayName: 'Copy__Info',
          componentId: 'sc-1cn0eps-0',
        })([
          'width:100%;padding:3px 5px;font-size:10px;color:#999;line-height:2em;cursor:pointer;position:relative;box-sizing:border-box;&:not(:last-child){border-bottom:solid 1px #f5f5f5;}',
        ]),
        P = u.b.div.withConfig({
          displayName: 'Copy__Copied',
          componentId: 'sc-1cn0eps-1',
        })([
          'position:absolute;right:1rem;top:50%;transform:translateY(-50%);color:#f5f5f5;background:#999;border-radius:3px;padding:3px;line-height:1;font-size:9px;',
        ]),
        L = (function (e) {
          var t, n;
          function r(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).copyToClipBoard = function () {
                var e = n.props.value ? n.props.value : n.props.children;
                Object(F.a)(e)
                  .then(function () {
                    n.setState({ copied: !0 }),
                      setTimeout(function () {
                        return n.setState({ copied: !1 });
                      }, 3e3);
                  })
                  .catch(function () {
                    return !1;
                  });
              }),
              (n.state = { copied: !1 }),
              n
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              var e = this.props.children,
                t = this.state.copied;
              return i.a.createElement(
                j,
                { onClick: this.copyToClipBoard },
                e,
                t && i.a.createElement(P, null, 'copied'),
              );
            }),
            r
          );
        })(i.a.Component);
      var $,
        D,
        B = u.b.div.withConfig({
          displayName: 'Color__Container',
          componentId: 't5g59o-0',
        })([
          'border-radius:4px;overflow:hidden;box-shadow:1px 2px 2px 0 rgba(0,0,0,0.1);border:solid 1px rgba(0,0,0,0.05);padding:0;',
        ]),
        z = u.b.div.withConfig({
          displayName: 'Color__Swatch',
          componentId: 't5g59o-1',
        })(
          [
            'width:100%;padding-bottom:8%;max-height:150px;margin-bottom:10px;',
            ';',
          ],
          function (e) {
            var t = e.color;
            return t && Object(u.a)(['background:', ';'], t);
          },
        ),
        M = u.b.div.withConfig({
          displayName: 'Color__Label',
          componentId: 't5g59o-2',
        })([
          'display:inline-block;min-width:35px;text-transform:uppercase;text-align:center;margin-right:10px;padding-right:10px;border-right:solid 1px #f5f5f5;',
        ]),
        U = (function (e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              var e = this.props,
                t = e.color,
                n = e.scss,
                r = e.ios,
                a = e.android,
                o = e.es6;
              return i.a.createElement(
                B,
                null,
                i.a.createElement(z, { color: t }),
                i.a.createElement(L, {
                  value: t,
                  children: i.a.createElement(G, { label: 'val', value: t }),
                }),
                i.a.createElement(L, {
                  value: n,
                  children: i.a.createElement(G, { label: 'scss', value: n }),
                }),
                i.a.createElement(L, {
                  value: r,
                  children: i.a.createElement(G, { label: 'ios', value: r }),
                }),
                i.a.createElement(L, {
                  value: a,
                  children: i.a.createElement(G, { label: 'andr', value: a }),
                }),
                i.a.createElement(L, {
                  value: o,
                  children: i.a.createElement(G, { label: 'es6', value: o }),
                }),
              );
            }),
            r
          );
        })(a.PureComponent),
        G = function (e) {
          var t = e.label,
            n = e.value;
          return i.a.createElement(
            'span',
            null,
            i.a.createElement(M, null, i.a.createElement('span', null, t)),
            i.a.createElement('b', null, n),
          );
        },
        V = U,
        W = u.b.div.withConfig({
          displayName: 'Swatch__ColorWrapper',
          componentId: 'eqjyy7-0',
        })(['flex:0 0 32%;min-width:75px;box-sizing:border-box;padding:7px;']),
        q = u.b.div.withConfig({
          displayName: 'Swatch__Wrapper',
          componentId: 'eqjyy7-1',
        })(['display:flex;flex-flow:row wrap;align-items:stretch;']),
        Y = function () {
          return i.a.createElement(
            q,
            null,
            i.a.createElement(W, { key: 'tutu' }, 'COLOR'),
          );
        },
        H =
          (n('LJP+'),
          function (e) {
            var t = e.children,
              n = e.not;
            return i.a.createElement(
              'div',
              { className: c()('c-do', { 'c-do--not': n }) },
              i.a.createElement(
                'div',
                { className: 'c-do__icon-wrapper' },
                i.a.createElement(
                  'svg',
                  { className: 'c-do__icon', viewBox: '0 0 20 20' },
                  i.a.createElement('circle', {
                    className: 'c-do__icon-circle',
                    cx: '10',
                    cy: '10',
                    r: '10',
                  }),
                  n
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement('line', {
                          className: 'c-do__icon-path',
                          x1: '5.4',
                          y1: '5.4',
                          x2: '14.6',
                          y2: '14.6',
                        }),
                        i.a.createElement('line', {
                          className: 'c-do__icon-path',
                          x1: '5.4',
                          y1: '14.6',
                          x2: '14.6',
                          y2: '5.4',
                        }),
                      )
                    : i.a.createElement('path', {
                        id: 'Tracé_8',
                        className: 'c-do__icon-path',
                        d: 'M5.3,8.8l3.9,5l6.2-8.2',
                      }),
                ),
              ),
              i.a.createElement('div', { className: 'c-do__content' }, t),
            );
          }),
        X =
          (n('LAy0'),
          n('uydD'),
          n('Cwzy'),
          n('odAc'),
          n('OksV'),
          n('e5a8'),
          n('RX8P'),
          n('OPGF'),
          n('KXhL'),
          n('HCNv')),
        Z = n.n(X);
      (Z.a.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/i,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
              inside: {
                punctuation: [
                  /^=/,
                  { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                ],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: /&#?[\da-z]{1,8};/i,
      }),
        (Z.a.languages.markup.tag.inside['attr-value'].inside.entity =
          Z.a.languages.markup.entity),
        Z.a.hooks.add('wrap', function (e) {
          'entity' === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(Z.a.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: Z.a.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r['language-' + t] = {
              pattern: /[\s\S]+/,
              inside: Z.a.languages[t],
            };
            var a = {};
            (a[e] = {
              pattern: RegExp(
                /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  e,
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              Z.a.languages.insertBefore('markup', 'cdata', a);
          },
        }),
        (Z.a.languages.xml = Z.a.languages.extend('markup', {})),
        (Z.a.languages.html = Z.a.languages.markup),
        (Z.a.languages.mathml = Z.a.languages.markup),
        (Z.a.languages.svg = Z.a.languages.markup),
        (function (e) {
          var t = {
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                inside: {
                  variable: [
                    { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                    /^\$\(\(/,
                  ],
                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                  punctuation: /\(\(?|\)\)?|,|;/,
                },
              },
              {
                pattern: /\$\([^)]+\)|`[^`]+`/,
                greedy: !0,
                inside: { variable: /^\$\(|^`|\)$|`$/ },
              },
              /\$(?:[\w#?*!@]+|\{[^}]+\})/i,
            ],
          };
          e.languages.bash = {
            shebang: {
              pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
              alias: 'important',
            },
            comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
            string: [
              {
                pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
                lookbehind: !0,
                greedy: !0,
                inside: t,
              },
              {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: t,
              },
            ],
            variable: t.variable,
            function: {
              pattern: /(^|[\s;|&])(?:add|alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zip|zypper)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            boolean: {
              pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
              lookbehind: !0,
            },
            operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/,
          };
          var n = t.variable[1].inside;
          (n.string = e.languages.bash.string),
            (n.function = e.languages.bash.function),
            (n.keyword = e.languages.bash.keyword),
            (n.boolean = e.languages.bash.boolean),
            (n.operator = e.languages.bash.operator),
            (n.punctuation = e.languages.bash.punctuation),
            (e.languages.shell = e.languages.bash);
        })(Z.a),
        (Z.a.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (Z.a.languages.c = Z.a.languages.extend('clike', {
          'class-name': {
            pattern: /(\b(?:enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        Z.a.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: 'property',
            inside: {
              string: {
                pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                lookbehind: !0,
              },
              directive: {
                pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: 'keyword',
              },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete Z.a.languages.c.boolean,
        (Z.a.languages.cpp = Z.a.languages.extend('c', {
          'class-name': {
            pattern: /(\b(?:class|enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
          boolean: /\b(?:true|false)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        })),
        Z.a.languages.insertBefore('cpp', 'string', {
          'raw-string': {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: 'string',
            greedy: !0,
          },
        }),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
              inside: { rule: /@[\w-]+/ },
            },
            url: RegExp('url\\((?:' + t.source + '|.*?)\\)', 'i'),
            selector: RegExp(
              '[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)',
            ),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    'attr-name': {
                      pattern: /^\s*style/i,
                      inside: n.tag.inside,
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': { pattern: /.+/i, inside: e.languages.css },
                  },
                  alias: 'language-css',
                },
              },
              n.tag,
            ));
        })(Z.a),
        (Z.a.languages.css.selector = {
          pattern: Z.a.languages.css.selector,
          inside: {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                'case-sensitivity': {
                  pattern: /(\s)[si]$/i,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                attribute: {
                  pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                  lookbehind: !0,
                },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  {
                    pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                    lookbehind: !0,
                  },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            'n-th': {
              pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
              lookbehind: !0,
              inside: { number: /[\dn]+/, operator: /[+-]/ },
            },
            punctuation: /[()]/,
          },
        }),
        Z.a.languages.insertBefore('css', 'property', {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        Z.a.languages.insertBefore('css', 'function', {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: /-?[\d.]+/,
        }),
        (Z.a.languages.javascript = Z.a.languages.extend('clike', {
          'class-name': [
            Z.a.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (Z.a.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        Z.a.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          'function-variable': {
            pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: Z.a.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: Z.a.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: Z.a.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: Z.a.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        Z.a.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\${[^}]+}/,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation',
                  },
                  rest: Z.a.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        Z.a.languages.markup &&
          Z.a.languages.markup.tag.addInlined('script', 'javascript'),
        (Z.a.languages.js = Z.a.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside[
              'class-name'
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            );
          var n = function e(t) {
            return t
              ? 'string' == typeof t
                ? t
                : 'string' == typeof t.content
                ? t.content
                : t.content.map(e).join('')
              : '';
          };
          e.hooks.add('after-tokenize', function (t) {
            ('jsx' !== t.language && 'tsx' !== t.language) ||
              (function t(r) {
                for (var a = [], i = 0; i < r.length; i++) {
                  var o = r[i],
                    s = !1;
                  if (
                    ('string' != typeof o &&
                      ('tag' === o.type &&
                      o.content[0] &&
                      'tag' === o.content[0].type
                        ? '</' === o.content[0].content[0].content
                          ? a.length > 0 &&
                            a[a.length - 1].tagName ===
                              n(o.content[0].content[1]) &&
                            a.pop()
                          : '/>' === o.content[o.content.length - 1].content ||
                            a.push({
                              tagName: n(o.content[0].content[1]),
                              openedBraces: 0,
                            })
                        : a.length > 0 &&
                          'punctuation' === o.type &&
                          '{' === o.content
                        ? a[a.length - 1].openedBraces++
                        : a.length > 0 &&
                          a[a.length - 1].openedBraces > 0 &&
                          'punctuation' === o.type &&
                          '}' === o.content
                        ? a[a.length - 1].openedBraces--
                        : (s = !0)),
                    (s || 'string' == typeof o) &&
                      a.length > 0 &&
                      0 === a[a.length - 1].openedBraces)
                  ) {
                    var l = n(o);
                    i < r.length - 1 &&
                      ('string' == typeof r[i + 1] ||
                        'plain-text' === r[i + 1].type) &&
                      ((l += n(r[i + 1])), r.splice(i + 1, 1)),
                      i > 0 &&
                        ('string' == typeof r[i - 1] ||
                          'plain-text' === r[i - 1].type) &&
                        ((l = n(r[i - 1]) + l), r.splice(i - 1, 1), i--),
                      (r[i] = new e.Token('plain-text', l, null, l));
                  }
                  o.content && 'string' != typeof o.content && t(o.content);
                }
              })(t.tokens);
          });
        })(Z.a),
        ($ = Z.a),
        (D = $.languages.javadoclike = {
          parameter: {
            pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
            lookbehind: !0,
          },
          keyword: {
            pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0,
          },
          punctuation: /[{}]/,
        }),
        Object.defineProperty(D, 'addSupport', {
          value: function (e, t) {
            'string' == typeof e && (e = [e]),
              e.forEach(function (e) {
                !(function (e, t) {
                  var n = $.languages[e];
                  if (n) {
                    var r = n['doc-comment'];
                    if (!r) {
                      var a = {
                        'doc-comment': {
                          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                          alias: 'comment',
                        },
                      };
                      r = (n = $.languages.insertBefore(e, 'comment', a))[
                        'doc-comment'
                      ];
                    }
                    if (
                      (r instanceof RegExp &&
                        (r = n['doc-comment'] = { pattern: r }),
                      Array.isArray(r))
                    )
                      for (var i = 0, o = r.length; i < o; i++)
                        r[i] instanceof RegExp && (r[i] = { pattern: r[i] }),
                          t(r[i]);
                    else t(r);
                  }
                })(e, function (e) {
                  e.inside || (e.inside = {}), (e.inside.rest = t);
                });
              });
          },
        }),
        D.addSupport(['java', 'javascript', 'php'], D),
        (function (e) {
          var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend('clike', {
            'class-name': [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
            ],
            number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('java', 'class-name', {
              annotation: {
                alias: 'punctuation',
                pattern: /(^|[^.])@\w+/,
                lookbehind: !0,
              },
              namespace: {
                pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              generics: {
                pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  'class-name': n,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
            });
        })(Z.a),
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, i) {
                if (n.language === r) {
                  var o = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ('function' == typeof i && !i(e)) return e;
                    for (
                      var a, s = o.length;
                      -1 !== n.code.indexOf((a = t(r, s)));

                    )
                      ++s;
                    return (o[s] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    i = Object.keys(n.tokenStack);
                  !(function o(s) {
                    for (var l = 0; l < s.length && !(a >= i.length); l++) {
                      var c = s[l];
                      if (
                        'string' == typeof c ||
                        (c.content && 'string' == typeof c.content)
                      ) {
                        var u = i[a],
                          p = n.tokenStack[u],
                          d = 'string' == typeof c ? c : c.content,
                          f = t(r, u),
                          g = d.indexOf(f);
                        if (g > -1) {
                          ++a;
                          var m = d.substring(0, g),
                            h = new e.Token(
                              r,
                              e.tokenize(p, n.grammar),
                              'language-' + r,
                              p,
                            ),
                            b = d.substring(g + f.length),
                            y = [];
                          m && y.push.apply(y, o([m])),
                            y.push(h),
                            b && y.push.apply(y, o([b])),
                            'string' == typeof c
                              ? s.splice.apply(s, [l, 1].concat(y))
                              : (c.content = y);
                        }
                      } else c.content && o(c.content);
                    }
                    return s;
                  })(n.tokens);
                }
              },
            },
          });
        })(Z.a),
        (function (e) {
          (e.languages.php = e.languages.extend('clike', {
            keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: 'constant' },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('php', 'string', {
              'shell-comment': {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: 'comment',
              },
            }),
            e.languages.insertBefore('php', 'comment', {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: 'important',
              },
            }),
            e.languages.insertBefore('php', 'keyword', {
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            e.languages.insertBefore('php', 'operator', {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php },
          };
          e.languages.insertBefore('php', 'string', {
            'nowdoc-string': {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: 'string',
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: 'symbol',
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            'heredoc-string': {
              pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: 'string',
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: 'symbol',
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: t,
              },
            },
            'single-quoted-string': {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: 'string',
            },
            'double-quoted-string': {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: 'string',
              inside: { interpolation: t },
            },
          }),
            delete e.languages.php.string,
            e.hooks.add('before-tokenize', function (t) {
              if (/<\?/.test(t.code)) {
                e.languages['markup-templating'].buildPlaceholders(
                  t,
                  'php',
                  /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi,
                );
              }
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'php');
            });
        })(Z.a),
        (function (e) {
          var t = e.languages.javascript,
            n = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,
            r = '(@(?:param|arg|argument|property)\\s+(?:' + n + '\\s+)?)';
          (e.languages.jsdoc = e.languages.extend('javadoclike', {
            parameter: {
              pattern: RegExp(r + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          })),
            e.languages.insertBefore('jsdoc', 'keyword', {
              'optional-parameter': {
                pattern: RegExp(
                  r + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source,
                ),
                lookbehind: !0,
                inside: {
                  parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                  code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: t,
                    alias: 'language-javascript',
                  },
                  punctuation: /[=[\]]/,
                },
              },
              'class-name': [
                {
                  pattern: RegExp('(@[a-z]+\\s+)' + n),
                  lookbehind: !0,
                  inside: { punctuation: /[.,:?=<>|{}()[\]]/ },
                },
                {
                  pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
              ],
              example: {
                pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                  code: {
                    pattern: /^(\s*(?:\*\s*)?).+$/m,
                    lookbehind: !0,
                    inside: t,
                    alias: 'language-javascript',
                  },
                },
              },
            }),
            e.languages.javadoclike.addSupport('javascript', e.languages.jsdoc);
        })(Z.a),
        (Z.a.languages.actionscript = Z.a.languages.extend('javascript', {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (Z.a.languages.actionscript['class-name'].alias = 'function'),
        Z.a.languages.markup &&
          Z.a.languages.insertBefore('actionscript', 'string', {
            xml: {
              pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: { rest: Z.a.languages.markup },
            },
          }),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  rest: e.languages.javascript,
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(Z.a),
        (function (e) {
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript.function.source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: /(\.\s*)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var t = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n],
              a = e.languages.javascript[r];
            'RegExp' === e.util.type(a) &&
              (a = e.languages.javascript[r] = { pattern: a });
            var i = a.inside || {};
            (a.inside = i), (i['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(Z.a),
        (function (e) {
          (e.languages.flow = e.languages.extend('javascript', {})),
            e.languages.insertBefore('flow', 'keyword', {
              type: [
                {
                  pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                  alias: 'tag',
                },
              ],
            }),
            (e.languages.flow[
              'function-variable'
            ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            delete e.languages.flow.parameter,
            e.languages.insertBefore('flow', 'operator', {
              'flow-punctuation': {
                pattern: /\{\||\|\}/,
                alias: 'punctuation',
              },
            }),
            Array.isArray(e.languages.flow.keyword) ||
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              {
                pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                lookbehind: !0,
              },
              {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0,
              },
            );
        })(Z.a),
        (Z.a.languages.n4js = Z.a.languages.extend('javascript', {
          keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
        })),
        Z.a.languages.insertBefore('n4js', 'constant', {
          annotation: { pattern: /@+\w+/, alias: 'operator' },
        }),
        (Z.a.languages.n4jsd = Z.a.languages.n4js),
        (Z.a.languages.typescript = Z.a.languages.extend('javascript', {
          keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (Z.a.languages.ts = Z.a.languages.typescript),
        (Z.a.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          deleted: /^[-<].*$/m,
          inserted: /^[+>].*$/m,
          diff: { pattern: /^!(?!!).+$/m, alias: 'important' },
        }),
        (Z.a.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (Z.a.languages.go = Z.a.languages.extend('clike', {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete Z.a.languages.go['class-name'],
        (Z.a.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
          operator: /[!=|]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g,
              );
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'handlebars',
              );
            });
        })(Z.a),
        (Z.a.languages.json = {
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (Z.a.languages.less = Z.a.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        Z.a.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (Z.a.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (Z.a.languages.markdown = Z.a.languages.extend('markup', {})),
        Z.a.languages.insertBefore('markdown', 'prolog', {
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
          code: [
            { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
            { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                'code-block': {
                  pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                  lookbehind: !0,
                },
                'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)/,
              alias: 'important',
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#+.+/m,
              lookbehind: !0,
              alias: 'important',
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          'url-reference': {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: 'url',
          },
          bold: {
            pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
          },
          italic: {
            pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^[*_]|[*_]$/ },
          },
          strike: {
            pattern: /(^|[^\\])(~~?)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            greedy: !0,
            inside: { punctuation: /^~~?|~~?$/ },
          },
          url: {
            pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
            inside: {
              variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
              string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
            },
          },
        }),
        ['bold', 'italic', 'strike'].forEach(function (e) {
          ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
            e !== t &&
              (Z.a.languages.markdown[e].inside[t] = Z.a.languages.markdown[t]);
          });
        }),
        Z.a.hooks.add('after-tokenize', function (e) {
          ('markdown' !== e.language && 'md' !== e.language) ||
            (function e(t) {
              if (t && 'string' != typeof t)
                for (var n = 0, r = t.length; n < r; n++) {
                  var a = t[n];
                  if ('code' === a.type) {
                    var i = a.content[1],
                      o = a.content[3];
                    if (
                      i &&
                      o &&
                      'code-language' === i.type &&
                      'code-block' === o.type &&
                      'string' == typeof i.content
                    ) {
                      var s =
                        'language-' +
                        i.content.trim().split(/\s+/)[0].toLowerCase();
                      o.alias
                        ? 'string' == typeof o.alias
                          ? (o.alias = [o.alias, s])
                          : o.alias.push(s)
                        : (o.alias = [s]);
                    }
                  } else e(a.content);
                }
            })(e.tokens);
        }),
        Z.a.hooks.add('wrap', function (e) {
          if ('code-block' === e.type) {
            for (var t = '', n = 0, r = e.classes.length; n < r; n++) {
              var a = e.classes[n],
                i = /language-(.+)/.exec(a);
              if (i) {
                t = i[1];
                break;
              }
            }
            var o = Z.a.languages[t];
            if (o) {
              var s = e.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
              e.content = Z.a.highlight(s, o, t);
            }
          }
        }),
        (Z.a.languages.md = Z.a.languages.markdown),
        (Z.a.languages.objectivec = Z.a.languages.extend('c', {
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete Z.a.languages.objectivec['class-name'],
        (Z.a.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: 'variable' },
          directive: { pattern: /\B#\w+/, alias: 'function' },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/,
        }),
        (Z.a.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (Z.a.languages.python[
          'string-interpolation'
        ].inside.interpolation.inside.rest = Z.a.languages.python),
        (Z.a.languages.py = Z.a.languages.python),
        (Z.a.languages.reason = Z.a.languages.extend('clike', {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        Z.a.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete Z.a.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(Z.a),
        (Z.a.languages.scss = Z.a.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)*url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        Z.a.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        Z.a.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        Z.a.languages.insertBefore('scss', 'function', {
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (Z.a.languages.scss.atrule.inside.rest = Z.a.languages.scss),
        (Z.a.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: {
              pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
              greedy: !0,
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
              pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
              lookbehind: !0,
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
            ],
            punctuation: /[{}()\[\];:,]/,
          };
          (t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: t,
            },
          }),
            (t.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: t },
            }),
            (e.languages.stylus = {
              comment: {
                pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t },
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: t.interpolation },
                  },
                  rest: t,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: t.interpolation,
                  punctuation: /[{},]/,
                },
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(Z.a),
        (Z.a.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (Z.a.languages.yaml = {
          scalar: {
            pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: 'string',
          },
          comment: /#.*/,
          key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: 'atrule',
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: 'important',
          },
          datetime: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: 'number',
          },
          boolean: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important',
          },
          null: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important',
          },
          string: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
        (Z.a.languages.yml = Z.a.languages.yaml);
      var K = Z.a,
        Q = n('RR6j'),
        J = { Prism: K, theme: n.n(Q).a },
        ee = (n('0W7U'), /\r\n|\r|\n/),
        te = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '', empty: !0 })
            : 1 === e.length && '' === e[0].content && (e[0].empty = !0);
        },
        ne = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        re = function (e) {
          for (
            var t = [[]],
              n = [e],
              r = [0],
              a = [e.length],
              i = 0,
              o = 0,
              s = [],
              l = [s];
            o > -1;

          ) {
            for (; (i = r[o]++) < a[o]; ) {
              var c = void 0,
                u = t[o],
                p = n[o][i];
              if (
                ('string' == typeof p
                  ? ((u = o > 0 ? u : ['plain']), (c = p))
                  : ((u = ne(u, p.type)),
                    p.alias && (u = ne(u, p.alias)),
                    (c = p.content)),
                'string' == typeof c)
              ) {
                var d = c.split(ee),
                  f = d.length;
                s.push({ types: u, content: d[0] });
                for (var g = 1; g < f; g++)
                  te(s), l.push((s = [])), s.push({ types: u, content: d[g] });
              } else o++, t.push(u), n.push(c), r.push(0), a.push(c.length);
            }
            o--, t.pop(), n.pop(), r.pop(), a.pop();
          }
          return te(s), l;
        };
      n('RT/e');
      function ae() {
        return (ae =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ie = function (e, t) {
        var n = e.plain,
          r = Object.create(null),
          a = e.styles.reduce(function (e, n) {
            n.types;
            var r = n.languages,
              a = n.style;
            return (
              (r && !r.includes(t)) ||
                n.types.forEach(function (t) {
                  var n = ae({}, e[t], a);
                  e[t] = n;
                }),
              e
            );
          }, r);
        return (
          (a.root = n), (a.plain = ae({}, n, { backgroundColor: null })), a
        );
      };
      function oe() {
        return (oe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function se(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var le = (function (e) {
          var t, n;
          function r() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t =
                e.call.apply(e, [this].concat(r)) || this).prevTheme = void 0),
              (t.prevLanguage = void 0),
              (t.themeDict = void 0),
              (t.getThemeDict = function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? ie(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              (t.getLineProps = function (e) {
                var n = e.key,
                  r = e.className,
                  a = e.style,
                  i =
                    (e.line,
                    oe({}, se(e, ['key', 'className', 'style', 'line']), {
                      className: 'token-line',
                      style: void 0,
                      key: void 0,
                    })),
                  o = t.getThemeDict(t.props);
                return (
                  void 0 !== o && (i.style = o.plain),
                  void 0 !== a &&
                    (i.style = void 0 !== i.style ? oe({}, i.style, a) : a),
                  void 0 !== n && (i.key = n),
                  r && (i.className += ' ' + r),
                  i
                );
              }),
              (t.getStyleForToken = function (e) {
                var n = e.types,
                  r = e.empty,
                  a = n.length,
                  i = t.getThemeDict(t.props);
                if (void 0 !== i) {
                  if (1 === a && 'plain' === n[0])
                    return r ? { display: 'inline-block' } : void 0;
                  if (1 === a && !r) return i[n[0]];
                  var o = r ? { display: 'inline-block' } : {},
                    s = n.map(function (e) {
                      return i[e];
                    });
                  return Object.assign.apply(Object, [o].concat(s));
                }
              }),
              (t.getTokenProps = function (e) {
                var n = e.key,
                  r = e.className,
                  a = e.style,
                  i = e.token,
                  o = oe({}, se(e, ['key', 'className', 'style', 'token']), {
                    className: 'token ' + i.types.join(' '),
                    children: i.content,
                    style: t.getStyleForToken(i),
                    key: void 0,
                  });
                return (
                  void 0 !== a &&
                    (o.style = void 0 !== o.style ? oe({}, o.style, a) : a),
                  void 0 !== n && (o.key = n),
                  r && (o.className += ' ' + r),
                  o
                );
              }),
              t
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                a = e.children,
                i = this.getThemeDict(this.props),
                o = t.languages[n],
                s = void 0 !== o ? t.tokenize(r, o, n) : [r];
              return a({
                tokens: re(s),
                className: 'prism-code language-' + n,
                style: void 0 !== i ? i.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            r
          );
        })(a.Component),
        ce = (n('rj7r'), /{([\d,-]+)}/),
        ue = function (e) {
          var t = e.code,
            n = e.language,
            r = (function (e) {
              if (ce.test(e)) {
                var t = ce
                  .exec(e)[1]
                  .split(',')
                  .map(function (e) {
                    return e.split('-').map(function (e) {
                      return parseInt(e, 10);
                    });
                  });
                return function (e) {
                  var n = e + 1;
                  return t.some(function (e) {
                    var t = e[0],
                      r = e[1];
                    return r ? n >= t && n <= r : n === t;
                  });
                };
              }
              return function () {
                return !1;
              };
            })(e.lines);
          return i.a.createElement(
            le,
            Object.assign({}, J, { code: t, language: n, theme: null }),
            function (e) {
              var t = e.className,
                n = e.tokens,
                a = e.getLineProps,
                o = e.getTokenProps;
              return i.a.createElement(
                'pre',
                { className: t + ' c-code__pre' },
                i.a.createElement(
                  'code',
                  { className: t + ' c-code__code-block' },
                  n.map(function (e, t) {
                    var n = a({ line: e, key: t });
                    return (
                      (n.className =
                        n.className +
                        ' c-code__line c-code__line--numbered ' +
                        (r(t + 1) ? 'c-code__line--highlight' : '')),
                      (n.ln = t + 1),
                      i.a.createElement(
                        'div',
                        n,
                        e.map(function (e, t) {
                          return i.a.createElement(
                            'span',
                            o({ token: e, key: t }),
                          );
                        }),
                      )
                    );
                  }),
                ),
              );
            },
          );
        },
        pe = function (e) {
          var t = e.children,
            n = t.props,
            r = n.className,
            o = n.lines,
            s = n.filename,
            l = Object(a.useState)(!1),
            c = l[0],
            u = l[1],
            p = r ? r.split('language-').pop().toLowerCase() : '',
            d = t.props && t.props.children ? t.props.children : t;
          return i.a.createElement(
            'div',
            { className: 'c-code' },
            s &&
              i.a.createElement('div', { className: 'c-code__file-name' }, s),
            i.a.createElement(
              'div',
              { className: 'c-code__wrapper' },
              d && i.a.createElement(ue, { code: d, language: p, lines: o }),
              i.a.createElement(
                'button',
                {
                  className: 'c-code__copy-btn',
                  onClick: function () {
                    var e, t;
                    (e = d),
                      (t = u),
                      Object(F.a)(e)
                        .then(function () {
                          t(!0),
                            setTimeout(function () {
                              return t(!1);
                            }, 3e3);
                        })
                        .catch(function () {
                          return !1;
                        });
                  },
                },
                c ? 'copied' : 'copy code',
              ),
            ),
          );
        };
      var de = u.b.code.withConfig({
          displayName: 'InlineCode__Info',
          componentId: 'r2yw8v-0',
        })([
          "position:relative;padding:1px 5px 2px;font-size:0.8em;background-color:#eff0f1;line-height:1.2;font-weight:400;cursor:pointer;box-sizing:border-box;font-family:Menlo,Monaco,'Courier New',monospace;border-radius:2px;",
        ]),
        fe = u.b.span.withConfig({
          displayName: 'InlineCode__Copied',
          componentId: 'r2yw8v-1',
        })([
          "display:inline-block;padding:1px 5px;border-radius:2px 2px 0 0;font-size:12px;line-height:2em;position:absolute;font-size:12px;background-color:#999;color:#fff;bottom:100%;left:0;font-family:'LeroyMerlin',sans-serif;",
        ]),
        ge = (function (e) {
          var t, n;
          function r(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).copyToClipBoard = function () {
                Object(F.a)(n.props.children)
                  .then(function () {
                    n.setState({ copied: !0 }),
                      setTimeout(function () {
                        return n.setState({ copied: !1 });
                      }, 3e3);
                  })
                  .catch(function () {
                    return !1;
                  });
              }),
              (n.state = { copied: !1 }),
              n
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function () {
              var e = this.props.children,
                t = this.state.copied;
              return i.a.createElement(
                de,
                { onClick: this.copyToClipBoard },
                e,
                t && i.a.createElement(fe, null, 'copied'),
              );
            }),
            r
          );
        })(i.a.Component),
        me = { info: 'Information', warning: 'Warning', tips: 'Useful tip' },
        he = u.b.div.withConfig({
          displayName: 'Highlight__Container',
          componentId: 'sc-7s1kcg-0',
        })(['margin:2rem 0;padding:1rem 1.5rem 2rem;', ''], function (e) {
          var t = e.theme;
          return 'info' === t
            ? Object(u.a)([
                'background-color:#f5f5f5;border-left:solid 8px #ccc;',
              ])
            : 'warning' === t
            ? Object(u.a)(['background-color:pink;border-left:solid 8px red;'])
            : 'tips' === t &&
              Object(u.a)([
                'background-color:lightblue;border-left:solid 8px deepskyblue;',
              ]);
        }),
        be = u.b.div.withConfig({
          displayName: 'Highlight__Theme',
          componentId: 'sc-7s1kcg-1',
        })(
          [
            'font-size:0.875rem;line-height:1;display:inline-flex;justify-content:center;align-items:center;font-weight:bold;letter-spacing:0.05em;text-transform:uppercase;',
            '',
          ],
          function (e) {
            var t = e.theme;
            return 'info' === t
              ? Object(u.a)(['color:#999;'])
              : 'warning' === t
              ? Object(u.a)(['color:orange;'])
              : 'tips' === t && Object(u.a)(['color:blue;']);
          },
        ),
        ye = u.b.div.withConfig({
          displayName: 'Highlight__Content',
          componentId: 'sc-7s1kcg-2',
        })(
          [
            'margin-top:0.5rem;>:first-child{margin-top:0;}>:last-child{margin-bottom:0;}h1,h2,h3,h4{margin-bottom:0.5em;',
            '}',
          ],
          function (e) {
            var t = e.theme;
            return 'info' === t
              ? Object(u.a)(['color:#999;'])
              : 'warning' === t
              ? Object(u.a)(['color:orange;'])
              : 'tips' === t && Object(u.a)(['color:blue;']);
          },
        ),
        ve = function (e) {
          var t = e.children,
            n = e.theme,
            r = void 0 === n ? 'info' : n,
            a = e.title;
          return i.a.createElement(
            he,
            { theme: r },
            i.a.createElement(be, { theme: r }, a || me[r]),
            i.a.createElement(ye, { theme: r }, t),
          );
        },
        we = n('t5xW'),
        Ee =
          (n('tRWy'),
          function (e) {
            var t = e.children,
              n = e.slug,
              r = e.thumbNail,
              a = e.title,
              o = e.description;
            return i.a.createElement(
              'li',
              { key: n },
              i.a.createElement(
                s.a,
                { className: 'subcontents__link', to: n },
                r &&
                  i.a.createElement(
                    'div',
                    { className: 'subcontents__thumbnail' },
                    i.a.createElement('img', { src: r.node.publicURL, alt: a }),
                  ),
                i.a.createElement(
                  'p',
                  { className: 'subcontents__body' },
                  i.a.createElement(
                    'span',
                    { className: 'subcontents__title' },
                    a,
                  ),
                  o &&
                    i.a.createElement(
                      'span',
                      { className: 'subcontents__description' },
                      o.substring(0, 240),
                    ),
                ),
              ),
              t,
            );
          }),
        ke = function (e) {
          var t = e.slug,
            n = e.title,
            r = e.description;
          return i.a.createElement(
            s.a,
            { to: t, className: 'subcontents__submenu-item' },
            i.a.createElement('span', { className: 'subcontents__title' }, n),
            r &&
              i.a.createElement(
                'p',
                { className: 'subcontents__description' },
                r.substring(0, 240),
              ),
          );
        },
        xe = function (e) {
          var t = e.siteMapData,
            n = e.allPreviewsImgs,
            r = e.location,
            a = /^\/|\/$/g,
            o = r.pathname.replace(a, '').split('/'),
            s = t,
            l = [];
          o.forEach(function (e) {
            l.push(e);
            var t = s.find(function (e) {
              return e.slug.replace(a, '') === l.join('/');
            });
            t && t.content && (s = t.content);
          });
          var c = (function e(t, n, r) {
            void 0 === t && (t = []),
              void 0 === n && (n = []),
              void 0 === r && (r = 0);
            var a = t.map(function (t) {
              var a = t.title,
                o = t.slug,
                s = t.dirPath,
                l = t.description,
                c = n.find(function (e) {
                  return e.node.relativePath === s + '/thumbnail.png';
                }),
                u = t.content.length ? e(t.content, n, 1) : null;
              return r
                ? i.a.createElement(ke, {
                    key: o,
                    title: a,
                    slug: o,
                    description: l,
                  })
                : i.a.createElement(
                    Ee,
                    { key: o, title: a, slug: o, thumbNail: c, description: l },
                    u,
                  );
            });
            return r
              ? i.a.createElement(
                  'div',
                  { className: 'subcontents__submenu-wrapper' },
                  a,
                )
              : i.a.createElement('ul', null, a);
          })(s, n);
          return i.a.createElement('div', { className: 'subcontents' }, c);
        },
        Ae = function (e) {
          return i.a.createElement(s.b, {
            query: Ne,
            render: function (t) {
              return i.a.createElement(
                xe,
                Object.assign({ allPreviewsImgs: t.allFile.edges }, e),
              );
            },
            data: we,
          });
        },
        Se = function (e) {
          var t = g({ Component: Ae });
          return function (n) {
            return i.a.createElement(t, Object.assign({ location: e }, n));
          };
        },
        Ne = '1975076514',
        Oe = (n('Qf75'), n('O+tk')),
        Ce = n.n(Oe),
        _e =
          (n('ZMF8'),
          g({
            Component: function (e) {
              var t = e.dsName,
                n = e.version,
                r = e.siteMapData,
                a = e.location,
                o = f(r, a);
              return i.a.createElement(
                'header',
                { className: 'c-header' },
                i.a.createElement(
                  'div',
                  { className: 'c-header__logo' },
                  i.a.createElement(
                    Ce.a,
                    { className: 'c-header__logo-link', to: '/' },
                    t,
                  ),
                  i.a.createElement(
                    'span',
                    { className: 'c-header__logo-version' },
                    n,
                  ),
                ),
                i.a.createElement(
                  'nav',
                  { className: 'c-header__nav' },
                  i.a.createElement(
                    'ul',
                    { className: 'c-header__nav-items' },
                    o.map(function (e) {
                      var t = e.name,
                        n = e.slug,
                        r = e.isPartOfCurrentlocation;
                      return i.a.createElement(
                        'li',
                        {
                          key: n + '-' + t.trim(),
                          className: 'c-header__nav-item',
                        },
                        i.a.createElement(
                          Ce.a,
                          {
                            to: n,
                            activeClassName: 'c-header__nav-link--active',
                            className: 'c-header__nav-link',
                          },
                          r
                            ? i.a.createElement('mark', null, t)
                            : i.a.createElement(i.a.Fragment, null, t),
                        ),
                      );
                    }),
                  ),
                ),
                i.a.createElement(
                  'div',
                  { className: 'c-header__search' },
                  'Search',
                ),
              );
            },
          })),
        Te = n('/Pyj'),
        Ie = {
          Color: V,
          Swatch: Y,
          Do: H,
          IconViewer: function () {
            return 'icon viewer';
          },
          DesignerKitLink: function () {
            return 'designkit link';
          },
          Highlight: ve,
          pre: pe,
          code: pe,
          inlineCode: ge,
          h1: Te.b,
          h2: Te.b,
          h3: Te.c,
          h4: Te.d,
        },
        Re =
          ((t.a = function (e) {
            var t = e.children,
              n = e.location,
              a = (function (e) {
                return function (t) {
                  return i.a.createElement(
                    R,
                    Object.assign({}, t, { location: e }),
                  );
                };
              })(n);
            return (
              (Ie.Preview = a),
              (Ie.SubContents = Se(n)),
              i.a.createElement(s.b, {
                query: Re,
                render: function (e) {
                  return i.a.createElement(
                    'div',
                    { className: 'l-layout' },
                    i.a.createElement(
                      'div',
                      { className: 'l-layout__header' },
                      i.a.createElement(_e, {
                        location: n,
                        dsName: 'Pyramid',
                        version: 'v1.14.24',
                      }),
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'l-layout__left-menu' },
                      i.a.createElement(I, {
                        location: n,
                        siteTitle: e.site.siteMetadata.title,
                      }),
                    ),
                    i.a.createElement(
                      o.MDXProvider,
                      { components: Ie },
                      i.a.createElement(
                        'div',
                        { className: 'l-layout__main', id: 'scroller' },
                        t,
                      ),
                    ),
                  );
                },
                data: r,
              })
            );
          }),
          '4130953669');
    },
    hTPx: function (e, t, n) {
      'use strict';
      n('T/cs'), n('dXXY');
      var r = 'function' == typeof Symbol && Symbol.for,
        a = r ? Symbol.for('react.element') : 60103,
        i = r ? Symbol.for('react.portal') : 60106,
        o = r ? Symbol.for('react.fragment') : 60107,
        s = r ? Symbol.for('react.strict_mode') : 60108,
        l = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        u = r ? Symbol.for('react.context') : 60110,
        p = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        f = r ? Symbol.for('react.forward_ref') : 60112,
        g = r ? Symbol.for('react.suspense') : 60113,
        m = r ? Symbol.for('react.suspense_list') : 60120,
        h = r ? Symbol.for('react.memo') : 60115,
        b = r ? Symbol.for('react.lazy') : 60116,
        y = r ? Symbol.for('react.block') : 60121,
        v = r ? Symbol.for('react.fundamental') : 60117,
        w = r ? Symbol.for('react.responder') : 60118,
        E = r ? Symbol.for('react.scope') : 60119;
      function k(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case p:
                case d:
                case o:
                case l:
                case s:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case b:
                    case h:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function x(e) {
        return k(e) === d;
      }
      (t.AsyncMode = p),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = a),
        (t.ForwardRef = f),
        (t.Fragment = o),
        (t.Lazy = b),
        (t.Memo = h),
        (t.Portal = i),
        (t.Profiler = l),
        (t.StrictMode = s),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return x(e) || k(e) === p;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === f;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === b;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === i;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === s;
        }),
        (t.isSuspense = function (e) {
          return k(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === o ||
            e === d ||
            e === l ||
            e === s ||
            e === g ||
            e === m ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === h ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === E ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = k);
    },
    'j/s1': function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return ie;
        });
        n('V0Us'),
          n('KXhL'),
          n('43gM'),
          n('RX8P'),
          n('RT/e'),
          n('+jsN'),
          n('bi+L'),
          n('jdxj'),
          n('QHfF'),
          n('8LQc'),
          n('K1mI'),
          n('ZQBo'),
          n('gPam'),
          n('LAy0'),
          n('13E5'),
          n('Rq2X'),
          n('Qf75'),
          n('jHf7'),
          n('AF8K'),
          n('12ig'),
          n('he6s'),
          n('uydD'),
          n('Cwzy'),
          n('odAc'),
          n('OksV'),
          n('gs/B');
        var r = n('kvVz'),
          a = n('ERkP'),
          i = n.n(a),
          o = (n('Pu0A'), n('AbK1')),
          s = n('T4+q'),
          l = n('DY47'),
          c = n('oXkQ'),
          u = n.n(c);
        function p() {
          return (p =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var d = function (e, t) {
            for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
              n.push(t[r], e[r + 1]);
            return n;
          },
          f = function (e) {
            return (
              null !== e &&
              'object' == typeof e &&
              '[object Object]' ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !Object(r.typeOf)(e)
            );
          },
          g = Object.freeze([]),
          m = Object.freeze({});
        function h(e) {
          return 'function' == typeof e;
        }
        function b(e) {
          return e.displayName || e.name || 'Component';
        }
        function y(e) {
          return e && 'string' == typeof e.styledComponentId;
        }
        var v =
            (void 0 !== e && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
            'data-styled',
          w = 'undefined' != typeof window && 'HTMLElement' in window,
          E =
            ('boolean' == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY) ||
            (void 0 !== e &&
              ({}.REACT_APP_SC_DISABLE_SPEEDY || {}.SC_DISABLE_SPEEDY)) ||
            !1,
          k = function () {
            return n.nc;
          };
        function x(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          throw new Error(
            'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' +
              e +
              ' for more information.' +
              (n.length > 0 ? ' Additional arguments: ' + n.join(', ') : ''),
          );
        }
        var A = function (e) {
            var t = document.head,
              n = e || t,
              r = document.createElement('style'),
              a = (function (e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                  var r = t[n];
                  if (r && 1 === r.nodeType && r.hasAttribute(v)) return r;
                }
              })(n),
              i = void 0 !== a ? a.nextSibling : null;
            r.setAttribute(v, 'active'),
              r.setAttribute('data-styled-version', '5.1.1');
            var o = k();
            return o && r.setAttribute('nonce', o), n.insertBefore(r, i), r;
          },
          S = (function () {
            function e(e) {
              var t = (this.element = A(e));
              t.appendChild(document.createTextNode('')),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    if (a.ownerNode === e) return a;
                  }
                  x(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (n) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && 'string' == typeof t.cssText
                  ? t.cssText
                  : '';
              }),
              e
            );
          })(),
          N = (function () {
            function e(e) {
              var t = (this.element = A(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var n = document.createTextNode(t),
                    r = this.nodes[e];
                  return (
                    this.element.insertBefore(n, r || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : '';
              }),
              e
            );
          })(),
          O = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : '';
              }),
              e
            );
          })(),
          C = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                    (a <<= 1) < 0 && x(16, '' + e);
                  (this.groupSizes = new Uint32Array(a)),
                    this.groupSizes.set(n),
                    (this.length = a);
                  for (var i = r; i < a; i++) this.groupSizes[i] = 0;
                }
                for (
                  var o = this.indexOfGroup(e + 1), s = 0, l = t.length;
                  s < l;
                  s++
                )
                  this.tag.insertRule(o, t[s]) && (this.groupSizes[e]++, o++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                  this.groupSizes[e] = 0;
                  for (var a = n; a < r; a++) this.tag.deleteRule(n);
                }
              }),
              (t.getGroup = function (e) {
                var t = '';
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var n = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    a = r + n,
                    i = r;
                  i < a;
                  i++
                )
                  t += this.tag.getRule(i) + '/*!sc*/\n';
                return t;
              }),
              e
            );
          })(),
          _ = new Map(),
          T = new Map(),
          I = 1,
          R = function (e) {
            if (_.has(e)) return _.get(e);
            var t = I++;
            return _.set(e, t), T.set(t, e), t;
          },
          F = function (e) {
            return T.get(e);
          },
          j = function (e, t) {
            t >= I && (I = t + 1), _.set(e, t), T.set(t, e);
          },
          P = 'style[' + v + '][data-styled-version="5.1.1"]',
          L = new RegExp(
            '^' + v + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)',
          ),
          $ = function (e, t, n) {
            for (var r, a = n.split(','), i = 0, o = a.length; i < o; i++)
              (r = a[i]) && e.registerName(t, r);
          },
          D = function (e, t) {
            for (
              var n = t.innerHTML.split('/*!sc*/\n'),
                r = [],
                a = 0,
                i = n.length;
              a < i;
              a++
            ) {
              var o = n[a].trim();
              if (o) {
                var s = o.match(L);
                if (s) {
                  var l = 0 | parseInt(s[1], 10),
                    c = s[2];
                  0 !== l &&
                    (j(c, l), $(e, c, s[3]), e.getTag().insertRules(l, r)),
                    (r.length = 0);
                } else r.push(o);
              }
            }
          },
          B = w,
          z = { isServer: !w, useCSSOMInjection: !E },
          M = (function () {
            function e(e, t, n) {
              void 0 === e && (e = z),
                void 0 === t && (t = {}),
                (this.options = p({}, z, {}, e)),
                (this.gs = t),
                (this.names = new Map(n)),
                !this.options.isServer &&
                  w &&
                  B &&
                  ((B = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll(P), n = 0, r = t.length;
                      n < r;
                      n++
                    ) {
                      var a = t[n];
                      a &&
                        'active' !== a.getAttribute(v) &&
                        (D(e, a), a.parentNode && a.parentNode.removeChild(a));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return R(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t) {
                return new e(p({}, this.options, {}, t), this.gs, this.names);
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                return (
                  this.tag ||
                  (this.tag =
                    ((t = this.options),
                    (n = t.isServer),
                    (r = t.useCSSOMInjection),
                    (a = t.target),
                    (e = n ? new O(a) : r ? new S(a) : new N(a)),
                    new C(e)))
                );
                var e, t, n, r, a;
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((R(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var n = new Set();
                  n.add(t), this.names.set(e, n);
                }
              }),
              (t.insertRules = function (e, t, n) {
                this.registerName(e, t), this.getTag().insertRules(R(e), n);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(R(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), n = t.length, r = '', a = 0;
                    a < n;
                    a++
                  ) {
                    var i = F(a);
                    if (void 0 !== i) {
                      var o = e.names.get(i),
                        s = t.getGroup(a);
                      if (void 0 !== o && 0 !== s.length) {
                        var l = v + '.g' + a + '[id="' + i + '"]',
                          c = '';
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (c += e + ',');
                          }),
                          (r += '' + s + l + '{content:"' + c + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return r;
                })(this);
              }),
              e
            );
          })(),
          U = function (e, t) {
            for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
            return e;
          },
          G = function (e) {
            return U(5381, e);
          };
        var V = /^\s*\/\/.*$/gm;
        function W(e) {
          var t,
            n,
            r,
            a = void 0 === e ? m : e,
            i = a.options,
            s = void 0 === i ? m : i,
            l = a.plugins,
            c = void 0 === l ? g : l,
            u = new o.a(s),
            p = [],
            d = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + '}');
                  } catch (n) {}
              }
              return function (n, r, a, i, o, s, l, c, u, p) {
                switch (n) {
                  case 1:
                    if (0 === u && 64 === r.charCodeAt(0))
                      return e(r + ';'), '';
                    break;
                  case 2:
                    if (0 === c) return r + '/*|*/';
                    break;
                  case 3:
                    switch (c) {
                      case 102:
                      case 112:
                        return e(a[0] + r), '';
                      default:
                        return r + (0 === p ? '/*|*/' : '');
                    }
                  case -2:
                    r.split('/*|*/}').forEach(t);
                }
              };
            })(function (e) {
              p.push(e);
            }),
            f = function (e, r, a) {
              return r > 0 &&
                -1 !== a.slice(0, r).indexOf(n) &&
                a.slice(r - n.length, r) !== n
                ? '.' + t
                : e;
            };
          function h(e, a, i, o) {
            void 0 === o && (o = '&');
            var s = e.replace(V, ''),
              l = a && i ? i + ' ' + a + ' { ' + s + ' }' : s;
            return (
              (t = o),
              (n = a),
              (r = new RegExp('\\' + n + '\\b', 'g')),
              u(i || !a ? '' : a, l)
            );
          }
          return (
            u.use(
              [].concat(c, [
                function (e, t, a) {
                  2 === e &&
                    a.length &&
                    a[0].lastIndexOf(n) > 0 &&
                    (a[0] = a[0].replace(r, f));
                },
                d,
                function (e) {
                  if (-2 === e) {
                    var t = p;
                    return (p = []), t;
                  }
                },
              ]),
            ),
            (h.hash = c.length
              ? c
                  .reduce(function (e, t) {
                    return t.name || x(15), U(e, t.name);
                  }, 5381)
                  .toString()
              : ''),
            h
          );
        }
        var q = i.a.createContext(),
          Y = (q.Consumer, i.a.createContext()),
          H = (Y.Consumer, new M()),
          X = W();
        function Z() {
          return Object(a.useContext)(q) || H;
        }
        function K() {
          return Object(a.useContext)(Y) || X;
        }
        var Q = (function () {
            function e(e, t) {
              var n = this;
              (this.inject = function (e) {
                e.hasNameForId(n.id, n.name) ||
                  e.insertRules(n.id, n.name, X.apply(void 0, n.stringifyArgs));
              }),
                (this.toString = function () {
                  return x(12, String(n.name));
                }),
                (this.name = e),
                (this.id = 'sc-keyframes-' + e),
                (this.stringifyArgs = t);
            }
            return (
              (e.prototype.getName = function () {
                return this.name;
              }),
              e
            );
          })(),
          J = /([A-Z])/g,
          ee = /^ms-/;
        function te(e) {
          return e.replace(J, '-$1').toLowerCase().replace(ee, '-ms-');
        }
        var ne = function (e) {
            return null == e || !1 === e || '' === e;
          },
          re = function e(t, n) {
            var r = [];
            return (
              Object.keys(t).forEach(function (n) {
                if (!ne(t[n])) {
                  if (f(t[n])) return r.push.apply(r, e(t[n], n)), r;
                  if (h(t[n])) return r.push(te(n) + ':', t[n], ';'), r;
                  r.push(
                    te(n) +
                      ': ' +
                      ((a = n),
                      (null == (i = t[n]) || 'boolean' == typeof i || '' === i
                        ? ''
                        : 'number' != typeof i || 0 === i || a in s.a
                        ? String(i).trim()
                        : i + 'px') + ';'),
                  );
                }
                var a, i;
                return r;
              }),
              n ? [n + ' {'].concat(r, ['}']) : r
            );
          };
        function ae(e, t, n) {
          if (Array.isArray(e)) {
            for (var r, a = [], i = 0, o = e.length; i < o; i += 1)
              '' !== (r = ae(e[i], t, n)) &&
                (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
            return a;
          }
          return ne(e)
            ? ''
            : y(e)
            ? '.' + e.styledComponentId
            : h(e)
            ? 'function' != typeof (s = e) ||
              (s.prototype && s.prototype.isReactComponent) ||
              !t
              ? e
              : ae(e(t), t, n)
            : e instanceof Q
            ? n
              ? (e.inject(n), e.getName())
              : e
            : f(e)
            ? re(e)
            : e.toString();
          var s;
        }
        function ie(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return h(e) || f(e)
            ? ae(d(g, [e].concat(n)))
            : 0 === n.length && 1 === e.length && 'string' == typeof e[0]
            ? e
            : ae(d(e, n));
        }
        var oe = function (e) {
            return (
              'function' == typeof e ||
              ('object' == typeof e && null !== e && !Array.isArray(e))
            );
          },
          se = function (e) {
            return (
              '__proto__' !== e && 'constructor' !== e && 'prototype' !== e
            );
          };
        function le(e, t, n) {
          var r = e[n];
          oe(t) && oe(r) ? ce(r, t) : (e[n] = t);
        }
        function ce(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          for (var a = 0, i = n; a < i.length; a++) {
            var o = i[a];
            if (oe(o)) for (var s in o) se(s) && le(e, o[s], s);
          }
          return e;
        }
        var ue = /(a)(d)/gi,
          pe = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function de(e) {
          var t,
            n = '';
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = pe(t % 52) + n;
          return (pe(t % 52) + n).replace(ue, '$1-$2');
        }
        function fe(e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (h(n) && !y(n)) return !1;
          }
          return !0;
        }
        var ge = (function () {
            function e(e, t) {
              (this.rules = e),
                (this.staticRulesId = ''),
                (this.isStatic = fe(e)),
                (this.componentId = t),
                (this.baseHash = G(t)),
                M.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, n) {
                var r = this.componentId;
                if (this.isStatic && !n.hash) {
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(r, this.staticRulesId)
                  )
                    return this.staticRulesId;
                  var a = ae(this.rules, e, t).join(''),
                    i = de(U(this.baseHash, a.length) >>> 0);
                  if (!t.hasNameForId(r, i)) {
                    var o = n(a, '.' + i, void 0, r);
                    t.insertRules(r, i, o);
                  }
                  return (this.staticRulesId = i), i;
                }
                for (
                  var s = this.rules.length,
                    l = U(this.baseHash, n.hash),
                    c = '',
                    u = 0;
                  u < s;
                  u++
                ) {
                  var p = this.rules[u];
                  if ('string' == typeof p) c += p;
                  else {
                    var d = ae(p, e, t),
                      f = Array.isArray(d) ? d.join('') : d;
                    (l = U(l, f + u)), (c += f);
                  }
                }
                var g = de(l >>> 0);
                if (!t.hasNameForId(r, g)) {
                  var m = n(c, '.' + g, void 0, r);
                  t.insertRules(r, g, m);
                }
                return g;
              }),
              e
            );
          })(),
          me =
            (new Set(),
            function (e, t, n) {
              return (
                void 0 === n && (n = m),
                (e.theme !== n.theme && e.theme) || t || n.theme
              );
            }),
          he = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          be = /(^-|-$)/g;
        function ye(e) {
          return e.replace(he, '-').replace(be, '');
        }
        function ve(e) {
          return 'string' == typeof e && !0;
        }
        var we = function (e) {
          return de(G(e) >>> 0);
        };
        var Ee = i.a.createContext();
        Ee.Consumer;
        var ke = {};
        function xe(e, t, n) {
          var r = e.attrs,
            i = e.componentStyle,
            o = e.defaultProps,
            s = e.foldedComponentIds,
            c = e.shouldForwardProp,
            u = e.styledComponentId,
            d = e.target;
          Object(a.useDebugValue)(u);
          var f = (function (e, t, n) {
              void 0 === e && (e = m);
              var r = p({}, t, { theme: e }),
                a = {};
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    i,
                    o = e;
                  for (t in (h(o) && (o = o(r)), o))
                    r[t] = a[t] =
                      'className' === t
                        ? ((n = a[t]),
                          (i = o[t]),
                          n && i ? n + ' ' + i : n || i)
                        : o[t];
                }),
                [r, a]
              );
            })(me(t, Object(a.useContext)(Ee), o) || m, t, r),
            g = f[0],
            b = f[1],
            y = (function (e, t, n, r) {
              var i = Z(),
                o = K(),
                s =
                  e.isStatic && !t
                    ? e.generateAndInjectStyles(m, i, o)
                    : e.generateAndInjectStyles(n, i, o);
              return Object(a.useDebugValue)(s), s;
            })(i, r.length > 0, g),
            v = n,
            w = b.$as || t.$as || b.as || t.as || d,
            E = ve(w),
            k = b !== t ? p({}, t, {}, b) : t,
            x = c || (E && l.a),
            A = {};
          for (var S in k)
            '$' !== S[0] &&
              'as' !== S &&
              ('forwardedAs' === S
                ? (A.as = k[S])
                : (x && !x(S, l.a)) || (A[S] = k[S]));
          return (
            t.style &&
              b.style !== t.style &&
              (A.style = p({}, t.style, {}, b.style)),
            (A.className = Array.prototype
              .concat(s, u, y !== u ? y : null, t.className, b.className)
              .filter(Boolean)
              .join(' ')),
            (A.ref = v),
            Object(a.createElement)(w, A)
          );
        }
        function Ae(e, t, n) {
          var r = y(e),
            a = !ve(e),
            o = t.displayName,
            s =
              void 0 === o
                ? (function (e) {
                    return ve(e) ? 'styled.' + e : 'Styled(' + b(e) + ')';
                  })(e)
                : o,
            l = t.componentId,
            c =
              void 0 === l
                ? (function (e, t) {
                    var n = 'string' != typeof e ? 'sc' : ye(e);
                    ke[n] = (ke[n] || 0) + 1;
                    var r = n + '-' + we(n + ke[n]);
                    return t ? t + '-' + r : r;
                  })(t.displayName, t.parentComponentId)
                : l,
            d = t.attrs,
            f = void 0 === d ? g : d,
            m =
              t.displayName && t.componentId
                ? ye(t.displayName) + '-' + t.componentId
                : t.componentId || c,
            h =
              r && e.attrs
                ? Array.prototype.concat(e.attrs, f).filter(Boolean)
                : f,
            v = t.shouldForwardProp;
          r &&
            e.shouldForwardProp &&
            (v = v
              ? function (n, r) {
                  return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
                }
              : e.shouldForwardProp);
          var w,
            E = new ge(r ? e.componentStyle.rules.concat(n) : n, m),
            k = function (e, t) {
              return xe(w, e, t);
            };
          return (
            (k.displayName = s),
            ((w = i.a.forwardRef(k)).attrs = h),
            (w.componentStyle = E),
            (w.displayName = s),
            (w.shouldForwardProp = v),
            (w.foldedComponentIds = r
              ? Array.prototype.concat(
                  e.foldedComponentIds,
                  e.styledComponentId,
                )
              : g),
            (w.styledComponentId = m),
            (w.target = r ? e.target : e),
            (w.withComponent = function (e) {
              var r = t.componentId,
                a = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                  return a;
                })(t, ['componentId']),
                i = r && r + '-' + (ve(e) ? e : ye(b(e)));
              return Ae(e, p({}, a, { attrs: h, componentId: i }), n);
            }),
            Object.defineProperty(w, 'defaultProps', {
              get: function () {
                return this._foldedDefaultProps;
              },
              set: function (t) {
                this._foldedDefaultProps = r ? ce({}, e.defaultProps, t) : t;
              },
            }),
            (w.toString = function () {
              return '.' + w.styledComponentId;
            }),
            a &&
              u()(w, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                self: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            w
          );
        }
        var Se = function (e) {
          return (function e(t, n, a) {
            if ((void 0 === a && (a = m), !Object(r.isValidElementType)(n)))
              return x(1, String(n));
            var i = function () {
              return t(n, a, ie.apply(void 0, arguments));
            };
            return (
              (i.withConfig = function (r) {
                return e(t, n, p({}, a, {}, r));
              }),
              (i.attrs = function (r) {
                return e(
                  t,
                  n,
                  p({}, a, {
                    attrs: Array.prototype.concat(a.attrs, r).filter(Boolean),
                  }),
                );
              }),
              i
            );
          })(Ae, e);
        };
        [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'marker',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ].forEach(function (e) {
          Se[e] = Se(e);
        });
        t.b = Se;
      }.call(this, n('F63i')));
    },
    jHf7: function (e, t, n) {
      var r = n('BtUU'),
        a = n('fcJl').onFreeze;
      n('/Wwk')('freeze', function (e) {
        return function (t) {
          return e && r(t) ? e(a(t)) : t;
        };
      });
    },
    jNQY: function (e, t, n) {
      'use strict';
      n('29Kz'), n('odAc');
      t.a = function (e) {
        var t = window.navigator.clipboard;
        if (!t || 'function' != typeof t.writeText) {
          var n = document.createElement('textarea');
          (n.value = e),
            n.setAttribute('readonly', 'true'),
            n.setAttribute('contenteditable', 'true'),
            (n.style.position = 'absolute'),
            (n.style.left = '-9999px'),
            document.body.appendChild(n),
            n.select();
          var r = document.createRange(),
            a = window.getSelection();
          return (
            a.removeAllRanges(),
            a.addRange(r),
            n.setSelectionRange(0, n.value.length),
            document.execCommand('copy'),
            document.body.removeChild(n),
            Promise.resolve()
          );
        }
        return t.writeText(e);
      };
    },
    kF1u: function (e, t, n) {},
    kvVz: function (e, t, n) {
      'use strict';
      e.exports = n('hTPx');
    },
    l266: function (e, t, n) {},
    lGaV: function (e, t, n) {
      for (
        var r,
          a = n('WDj7'),
          i = n('68DA'),
          o = n('VukQ'),
          s = o('typed_array'),
          l = o('view'),
          c = !(!a.ArrayBuffer || !a.DataView),
          u = c,
          p = 0,
          d = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
            ',',
          );
        p < 9;

      )
        (r = a[d[p++]])
          ? (i(r.prototype, s, !0), i(r.prototype, l, !0))
          : (u = !1);
      e.exports = { ABV: c, CONSTR: u, TYPED: s, VIEW: l };
    },
    lw3w: function (e, t, n) {
      var r;
      e.exports = ((r = n('rzlk')) && r.default) || r;
    },
    oXkQ: function (e, t, n) {
      'use strict';
      n('dXXY'), n('KXhL');
      var r = n('kvVz'),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(e) {
        return r.isMemo(e) ? o : s[e.$$typeof] || a;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = o);
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        g = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (g) {
            var a = f(n);
            a && a !== g && e(t, a, r);
          }
          var o = u(n);
          p && (o = o.concat(p(n)));
          for (var s = l(t), m = l(n), h = 0; h < o.length; ++h) {
            var b = o[h];
            if (!(i[b] || (r && r[b]) || (m && m[b]) || (s && s[b]))) {
              var y = d(n, b);
              try {
                c(t, b, y);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    rAvv: function (e, t, n) {
      'use strict';
      var r = n('gTGn'),
        a = n('oV0Y'),
        i = n('/9sY');
      e.exports =
        [].copyWithin ||
        function (e, t) {
          var n = r(this),
            o = i(n.length),
            s = a(e, o),
            l = a(t, o),
            c = arguments.length > 2 ? arguments[2] : void 0,
            u = Math.min((void 0 === c ? o : a(c, o)) - l, o - s),
            p = 1;
          for (
            l < s && s < l + u && ((p = -1), (l += u - 1), (s += u - 1));
            u-- > 0;

          )
            l in n ? (n[s] = n[l]) : delete n[s], (s += p), (l += p);
          return n;
        };
    },
    rj7r: function (e, t, n) {},
    rzlk: function (e, t, n) {
      'use strict';
      n.r(t);
      n('rSj+'), n('dXXY'), n('uydD'), n('Cwzy'), n('odAc'), n('OksV');
      var r = n('ERkP'),
        a = n.n(r),
        i = n('IOVJ');
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t.default = function (e) {
        var t = e.location,
          n = e.pageResources;
        return n
          ? a.a.createElement(
              i.a,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        s(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({ location: t, pageResources: n }, n.json),
            )
          : null;
      };
    },
    sIWT: function (e, t, n) {},
    t5xW: function (e) {
      e.exports = JSON.parse('{"data":{"allFile":{"edges":[]}}}');
    },
    tRWy: function (e, t, n) {},
    whD0: function (e, t, n) {
      var r = n('1nmM'),
        a = n('d59D'),
        i = n('9+pC'),
        o = n('4JZy'),
        s = '[' + o + ']',
        l = RegExp('^' + s + s + '*'),
        c = RegExp(s + s + '*$'),
        u = function (e, t, n) {
          var a = {},
            s = i(function () {
              return !!o[e]() || '​' != '​'[e]();
            }),
            l = (a[e] = s ? t(p) : o[e]);
          n && (a[n] = l), r(r.P + r.F * s, 'String', a);
        },
        p = (u.trim = function (e, t) {
          return (
            (e = String(a(e))),
            1 & t && (e = e.replace(l, '')),
            2 & t && (e = e.replace(c, '')),
            e
          );
        });
      e.exports = u;
    },
    xXyX: function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Mozaic"}}}}',
      );
    },
    xv4y: function (e, t, n) {},
  },
]);
//# sourceMappingURL=f0b27e2c13ca9723f66aa85d58fcdd887e2cbc6e-3249fa8d84d7f1f8f3b8.js.map
