/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var e = {
            904: () => {
                document.addEventListener("DOMContentLoaded", (function() {
                    document.body.classList.remove("no_transition"), setTimeout((function() {
                        document.getElementById("loader").classList.add("hidden")
                    }), 1500)
                }))
            },
            964: () => {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e(t)
                }

                function t() {
                    "use strict";
                    t = function() {
                        return r
                    };
                    var r = {},
                        a = Object.prototype,
                        i = a.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        n = o.iterator || "@@iterator",
                        m = o.asyncIterator || "@@asyncIterator",
                        s = o.toStringTag || "@@toStringTag";

                    function l(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function d(e, t, r, a) {
                        var i = t && t.prototype instanceof c ? t : c,
                            o = Object.create(i.prototype),
                            n = new F(a || []);
                        return o._invoke = function(e, t, r) {
                            var a = "suspendedStart";
                            return function(i, o) {
                                if ("executing" === a) throw new Error("Generator is already running");
                                if ("completed" === a) {
                                    if ("throw" === i) throw o;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (r.method = i, r.arg = o;;) {
                                    var n = r.delegate;
                                    if (n) {
                                        var m = _(n, r);
                                        if (m) {
                                            if (m === p) continue;
                                            return m
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if ("suspendedStart" === a) throw a = "completed", r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    a = "executing";
                                    var s = f(e, t, r);
                                    if ("normal" === s.type) {
                                        if (a = r.done ? "completed" : "suspendedYield", s.arg === p) continue;
                                        return {
                                            value: s.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === s.type && (a = "completed", r.method = "throw", r.arg = s.arg)
                                }
                            }
                        }(e, r, n), o
                    }

                    function f(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    r.wrap = d;
                    var p = {};

                    function c() {}

                    function u() {}

                    function h() {}
                    var g = {};
                    l(g, n, (function() {
                        return this
                    }));
                    var w = Object.getPrototypeOf,
                        y = w && w(w(G([])));
                    y && y !== a && i.call(y, n) && (g = y);
                    var x = h.prototype = c.prototype = Object.create(g);

                    function b(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function v(t, r) {
                        function a(o, n, m, s) {
                            var l = f(t[o], t, n);
                            if ("throw" !== l.type) {
                                var d = l.arg,
                                    p = d.value;
                                return p && "object" == e(p) && i.call(p, "__await") ? r.resolve(p.__await).then((function(e) {
                                    a("next", e, m, s)
                                }), (function(e) {
                                    a("throw", e, m, s)
                                })) : r.resolve(p).then((function(e) {
                                    d.value = e, m(d)
                                }), (function(e) {
                                    return a("throw", e, m, s)
                                }))
                            }
                            s(l.arg)
                        }
                        var o;
                        this._invoke = function(e, t) {
                            function i() {
                                return new r((function(r, i) {
                                    a(e, t, r, i)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    }

                    function _(e, t) {
                        var r = e.iterator[t.method];
                        if (void 0 === r) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return p;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return p
                        }
                        var a = f(r, e.iterator, t.arg);
                        if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, p;
                        var i = a.arg;
                        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                    }

                    function k(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function z(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function F(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(k, this), this.reset(!0)
                    }

                    function G(e) {
                        if (e) {
                            var t = e[n];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    a = function t() {
                                        for (; ++r < e.length;)
                                            if (i.call(e, r)) return t.value = e[r], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: L
                        }
                    }

                    function L() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return u.prototype = h, l(x, "constructor", h), l(h, "constructor", u), u.displayName = l(h, s, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
                    }, r.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, s, "GeneratorFunction")), e.prototype = Object.create(x), e
                    }, r.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, b(v.prototype), l(v.prototype, m, (function() {
                        return this
                    })), r.AsyncIterator = v, r.async = function(e, t, a, i, o) {
                        void 0 === o && (o = Promise);
                        var n = new v(d(e, t, a, i), o);
                        return r.isGeneratorFunction(t) ? n : n.next().then((function(e) {
                            return e.done ? e.value : n.next()
                        }))
                    }, b(x), l(x, s, "Generator"), l(x, n, (function() {
                        return this
                    })), l(x, "toString", (function() {
                        return "[object Generator]"
                    })), r.keys = function(e) {
                        var t = [];
                        for (var r in e) t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var a = t.pop();
                                    if (a in e) return r.value = a, r.done = !1, r
                                }
                                return r.done = !0, r
                            }
                    }, r.values = G, F.prototype = {
                        constructor: F,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(z), !e)
                                for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function r(r, a) {
                                return n.type = "throw", n.arg = e, t.next = r, a && (t.method = "next", t.arg = void 0), !!a
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var o = this.tryEntries[a],
                                    n = o.completion;
                                if ("root" === o.tryLoc) return r("end");
                                if (o.tryLoc <= this.prev) {
                                    var m = i.call(o, "catchLoc"),
                                        s = i.call(o, "finallyLoc");
                                    if (m && s) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    } else if (m) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var a = this.tryEntries[r];
                                if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var o = a;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var n = o ? o.completion : {};
                            return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(n)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), z(r), p
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var a = r.completion;
                                    if ("throw" === a.type) {
                                        var i = a.arg;
                                        z(r)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, r) {
                            return this.delegate = {
                                iterator: G(e),
                                resultName: t,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = void 0), p
                        }
                    }, r
                }

                function r(e) {
                    return function(e) {
                        if (Array.isArray(e)) return a(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function i(e, t, r, a, i, o, n) {
                    try {
                        var m = e[o](n),
                            s = m.value
                    } catch (e) {
                        return void r(e)
                    }
                    m.done ? t(s) : Promise.resolve(s).then(a, i)
                }
                var o = document.querySelectorAll("video"),
                    n = document.querySelectorAll(".thumbnail"),
                    m = function() {
                        var e, a = (e = t().mark((function e() {
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 2;
                                        break;
                                    case 2:
                                        return e.prev = 2, e.next = 5, Promise.all(r(o).map((function(e) {
                                            return e.play()
                                        })));
                                    case 5:
                                        r(n).forEach((function(e) {
                                            e.style.opacity = 0
                                        })), r(o).forEach((function(e) {
                                            e.style.opacity = 1
                                        })), e.next = 11;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(a, o) {
                                var n = e.apply(t, r);

                                function m(e) {
                                    i(n, a, o, m, s, "next", e)
                                }

                                function s(e) {
                                    i(n, a, o, m, s, "throw", e)
                                }
                                m(void 0)
                            }))
                        });
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                m(), document.addEventListener("click", m), document.addEventListener("touchstart", m)
            },
            61: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Z: () => D
                });
                var a = r(81),
                    i = r.n(a),
                    o = r(645),
                    n = r.n(o),
                    m = r(667),
                    s = r.n(m),
                    l = new URL(r(528), r.b),
                    d = new URL(r(721), r.b),
                    f = new URL(r(991), r.b),
                    p = new URL(r(742), r.b),
                    c = new URL(r(622), r.b),
                    u = new URL(r(145), r.b),
                    h = new URL(r(848), r.b),
                    g = new URL(r(966), r.b),
                    w = new URL(r(907), r.b),
                    y = new URL(r(218), r.b),
                    x = new URL(r(183), r.b),
                    b = new URL(r(733), r.b),
                    v = new URL(r(202), r.b),
                    _ = new URL(r(621), r.b),
                    k = new URL(r(426), r.b),
                    z = new URL(r(782), r.b),
                    F = n()(i()),
                    G = s()(l),
                    L = s()(l, {
                        hash: "?#iefix"
                    }),
                    C = s()(d),
                    A = s()(f),
                    E = s()(p),
                    j = s()(c),
                    T = s()(c, {
                        hash: "?#iefix"
                    }),
                    S = s()(u),
                    B = s()(h),
                    O = s()(g),
                    M = s()(w),
                    R = s()(w, {
                        hash: "?#iefix"
                    }),
                    U = s()(y),
                    P = s()(x),
                    I = s()(b),
                    N = s()(v),
                    q = s()(v, {
                        hash: "?#iefix"
                    }),
                    Z = s()(_),
                    W = s()(k),
                    Y = s()(z);
                F.push([e.id, '@font-face{font-family:"Changa";src:url(' + G + ");src:url(" + L + ') format("embedded-opentype"),url(' + C + ') format("woff2"),url(' + A + ') format("woff"),url(' + E + ') format("truetype");font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:"Changa";src:url(' + j + ");src:url(" + T + ') format("embedded-opentype"),url(' + S + ') format("woff2"),url(' + B + ') format("woff"),url(' + O + ') format("truetype");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Changa";src:url(' + M + ");src:url(" + R + ') format("embedded-opentype"),url(' + U + ') format("woff2"),url(' + P + ') format("woff"),url(' + I + ') format("truetype");font-weight:bold;font-style:normal;font-display:swap}@font-face{font-family:"Changa";src:url(' + N + ");src:url(" + q + ') format("embedded-opentype"),url(' + Z + ') format("woff2"),url(' + W + ') format("woff"),url(' + Y + ') format("truetype");font-weight:600;font-style:normal;font-display:swap}html{font-family:"Changa", sans-serif;color:var(--text);font-size:5.21vw;scroll-behavior:smooth;-webkit-text-size-adjust:100%;overflow-x:hidden;background-color:#003c60}@media (max-width: 768px){html{font-size:31.25vw}}body{background:var(--bg);margin:0;overflow:hidden}#loader.hidden{opacity:0 !important;pointer-events:none}.no_transition *{transition:none !important}*{box-sizing:border-box;margin:0;user-select:none}section{position:relative;transform:translate3d(0, 0, 0)}section>div{position:absolute;top:0;left:0;right:0;bottom:0;transition:all 0.6s linear}img,picture{transform:translate3d(0, 0, 0)}section>*{pointer-events:none}a{background-color:transparent}picture{display:block}img{border-style:none;display:block;width:100%}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:0.01rem dotted ButtonText}textarea{overflow:auto}header{position:fixed;top:0;left:0;right:0;z-index:10;display:flex;justify-content:space-around;align-items:center;padding:0 3.7rem;height:0.8rem;background:linear-gradient(#003c60 0.71rem, #00436b 0.71rem, #00436b 0.75rem, #002c48 0.75rem);box-shadow:0 0.02rem 0.16rem #000}@media (max-width: 768px){header{height:0.46rem;padding:0 0.142rem;justify-content:space-between;background:linear-gradient(#003c60 0.43rem, #00436b 0.43rem, #00436b 0.44rem, #002c48 0.44rem)}}header .logo{width:1.72rem}@media (max-width: 768px){header .logo{width:1.125rem;position:relative;top:-0.025rem}}header .socialLinks{display:flex;gap:0.05rem;margin-left:0.85rem}@media (max-width: 768px){header .socialLinks{display:none}}header .socialLinks picture{width:0.48rem}header .buttons{display:flex;gap:0.12rem}@media (max-width: 768px){header .buttons{gap:0.06rem}}header .buttons .button{display:flex;justify-content:center;align-items:center;position:relative;width:1.25rem;height:0.48rem;transition:filter 0.3s ease}header .buttons .button .disabled{opacity:0;position:absolute}header .buttons .button:hover{filter:grayscale(1);cursor:not-allowed}header .buttons .button:hover .enabled{opacity:0}header .buttons .button:hover .disabled{opacity:1}@media (max-width: 768px){header .buttons .button{width:0.71rem;height:0.293rem}}header .buttons .button picture{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}header .buttons .button span{color:#fff;font-size:0.16rem;font-weight:700;text-shadow:0.01rem 0.02rem 0 rgba(0,0,0,0.25);transition:opacity 0.3s ease}@media (max-width: 768px){header .buttons .button span{font-size:0.09rem;line-height:0.136rem}}header .jags{position:absolute;bottom:0;height:0.15rem;max-width:50%;overflow:hidden}@media (max-width: 768px){header .jags{display:none}}header .jags_1{left:0}header .jags_2{right:0;transform:scaleX(-1)}header .jags img{width:unset;height:100%}.intro{position:fixed;z-index:0;margin-top:0.8rem;margin-bottom:0.85rem;background-color:#8bd1f3}@media (max-width: 768px){.intro{margin-top:0.46rem}}.intro .sky{z-index:1;background:linear-gradient(180deg, #8bd1f3 0%, #bde8fb 17%, #e6f4ff 31.47%);transform:translate3d(0, 0, 0)}.intro .islands{z-index:2;transform:translate3d(0, 0, 0)}.intro .islands .island_1{position:absolute;top:0.77rem;left:5.76rem;width:1.05rem;animation:islandBounce 6s ease-in-out infinite}@media (max-width: 768px){.intro .islands .island_1{top:0.4rem;left:0.18rem;width:0.271rem}}.intro .islands .island_2{position:absolute;top:0.96rem;right:4.65rem;width:1.27rem;animation:islandBounce 6s 0.5s ease-in-out infinite}@media (max-width: 768px){.intro .islands .island_2{top:0.406rem;right:0.126rem;width:0.315rem}}@keyframes islandBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.15rem, 0)}100%{transform:translate3d(0, 0, 0)}}@media (max-width: 768px){@keyframes islandBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.07rem, 0)}100%{transform:translate3d(0, 0, 0)}}}.intro .clouds{z-index:3;transform:translate3d(0, 0, 0)}.intro .clouds picture{width:100%}@media (max-width: 768px){.intro .clouds picture{margin-top:0.5rem}}.intro .platforms{z-index:4;transform:translate3d(0, 0, 0)}.intro .platforms .platform_1{position:absolute;top:2.7rem;right:9rem;width:0.83rem;animation:platformBounce 4s 0.5s ease-in-out infinite}@media (max-width: 768px){.intro .platforms .platform_1{top:1.55rem;right:1.5rem;width:0.265rem}}.intro .platforms .platform_2{position:absolute;top:2.7rem;right:7.43rem;width:1.55rem;animation:platformBounce 4s ease-in-out infinite}@media (max-width: 768px){.intro .platforms .platform_2{top:1.55rem;right:1.01rem;width:0.494rem}}@keyframes platformBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.1rem, 0)}100%{transform:translate3d(0, 0, 0)}}.intro .ground{position:relative;z-index:5;padding-top:0.1rem}@media (max-width: 768px){.intro .ground{padding-top:1rem}}.intro .ground picture{width:100%}.intro .logo{z-index:6;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:0.24rem;pointer-events:unset}.intro .logo .logo_image{width:5.6rem}@media (max-width: 768px){.intro .logo .logo_image{width:2.08rem}}.intro .logo .icons{display:flex;justify-content:center;align-items:center;gap:1rem;margin-top:4.6rem;padding-right:0.2rem}.intro .logo .icons a{display:flex}.intro .logo .icons svg{width:0.6rem;height:0.6rem}@media (max-width: 768px){.intro .logo .icons{margin-top:0;padding-right:0;gap:0.3rem}.intro .logo .icons svg{width:0.3rem;height:0.3rem}}.intro .elems{z-index:6;display:flex;justify-content:center;align-items:flex-start;padding-top:4.3rem;gap:0.24rem}@media (max-width: 768px){.intro .elems{padding-top:1.67rem}.intro .elems .elem_1,.intro .elems .elem_2,.intro .elems .elem_6,.intro .elems .elem_7{display:none}}.intro .elems>div{width:1.8rem;position:relative}@media (max-width: 768px){.intro .elems>div{width:0.862rem}}.intro .elems>div picture{animation:bounce 3s ease-in-out infinite}@keyframes bounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, -0.3rem, 0)}100%{transform:translate3d(0, 0, 0)}}@media (max-width: 768px){@keyframes bounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, -0.15rem, 0)}100%{transform:translate3d(0, 0, 0)}}}.intro .elems>div picture img{animation:rotating 3s ease-in-out infinite}@keyframes rotating{0%{transform:rotate(-5deg) scale(1.3) translate3d(0, 0, 0)}50%{transform:rotate(5deg) scale(1.3) translate3d(0, 0, 0)}100%{transform:rotate(-5deg) scale(1.3) translate3d(0, 0, 0)}}.intro .elems>div .shadow{position:absolute;bottom:0;right:0;width:90%;height:10%;background:#000;opacity:0.2;border-radius:50%;animation:shadow 3s ease-in-out infinite}@keyframes shadow{0%{transform:scale(0.9) translate3d(0, 0, 0);filter:blur(0.02rem)}50%{transform:scale(1) translate3d(0, 0, 0);filter:blur(0.04rem)}100%{transform:scale(0.9) translate3d(0, 0, 0);filter:blur(0.02rem)}}@media (max-width: 768px){@keyframes shadow{0%{transform:scale(0.9) translate3d(0, 0, 0);filter:blur(0.01rem)}50%{transform:scale(1) translate3d(0, 0, 0);filter:blur(0.02rem)}100%{transform:scale(0.9) translate3d(0, 0, 0);filter:blur(0.01rem)}}}.intro .elems .elem_1 picture{animation-delay:0;animation-duration:2.3s}.intro .elems .elem_1 picture img{animation-delay:0.5s;animation-duration:2.3s}.intro .elems .elem_1 .shadow{animation-delay:0;animation-duration:2.3s}.intro .elems .elem_2 picture{animation-delay:0.3s;animation-duration:1.8s}.intro .elems .elem_2 picture img{animation-delay:0.8s;animation-duration:1.8s}.intro .elems .elem_2 .shadow{animation-delay:0.3s;animation-duration:1.8s}.intro .elems .elem_3 picture{animation-delay:-0.1s;animation-duration:2.3s}.intro .elems .elem_3 picture img{animation-delay:0.4s;animation-duration:2.3s}.intro .elems .elem_3 .shadow{animation-delay:-0.1s;animation-duration:2.3s}.intro .elems .elem_4{width:2.5rem;transform:scale(-0.9, 0.9)}@media (max-width: 768px){.intro .elems .elem_4{width:1.09rem}}.intro .elems .elem_4 picture{transform:scale(1.1);animation-delay:0.5s;animation-duration:2.1s}.intro .elems .elem_4 picture img{animation-delay:-1.1s;animation-duration:2.1s}.intro .elems .elem_4 .shadow{animation-delay:0.5s;animation-duration:2.1s}.intro .elems .elem_5 picture{animation-delay:-0.4s;animation-duration:2s}.intro .elems .elem_5 picture img{animation-delay:0.1s;animation-duration:2s}.intro .elems .elem_5 .shadow{animation-delay:-0.4s;animation-duration:2s}.intro .elems .elem_6 picture{animation-delay:0.6s;animation-duration:1.9s}.intro .elems .elem_6 picture img{animation-delay:-0.8s;animation-duration:1.9s}.intro .elems .elem_6 .shadow{animation-delay:0.6s;animation-duration:1.9s}.intro .elems .elem_7 picture{animation-delay:0.1s;animation-duration:2s}.intro .elems .elem_7 picture img{animation-delay:0.6s;animation-duration:2s}.intro .elems .elem_7 .shadow{animation-delay:0.1s;animation-duration:2s}.features{color:#095064;z-index:3;font-size:0.175rem;line-height:0.235rem;margin-top:10rem}@media (max-width: 768px){.features{font-size:0.09rem;line-height:0.115rem;padding-bottom:0.6rem;margin-top:4.35rem}}.features .sky{top:-1rem;z-index:0;background:linear-gradient(180deg, #14397d 2.74%, #2761a1 33.29%, #3579b6 48.31%, #4494c7 62.14%, #55bcdf 73.1%, #56c3e2 79.03%)}.features .cloudsBehindMountain{z-index:1}.features .cloudsBehindMountain picture{margin-top:7.5rem}@media (max-width: 768px){.features .cloudsBehindMountain picture{margin-top:7.9rem}}.features .mountain{z-index:2}.features .mountain picture{margin:7.1rem auto 0;width:14.4rem}@media (max-width: 768px){.features .mountain picture{margin:7.6rem auto 0;width:3rem}}.features .cloudsThin{z-index:2;filter:blur(0.02rem);transform:translate3d(0, 0, 0)}@media (max-width: 768px){.features .cloudsThin{filter:blur(0.01rem)}}.features .cloudsThin .thinCloud{position:absolute;transform-origin:50% -40rem;animation:thinCloudsAnimation 30s linear infinite}@media (max-width: 768px){.features .cloudsThin .thinCloud{transform-origin:50% -10rem}}.features .cloudsThin .thinCloud_1{top:4.5rem;left:5rem;width:9.14rem;animation-delay:-10s}@media (max-width: 768px){.features .cloudsThin .thinCloud_1{top:2.5rem;left:1rem;width:1.9rem}}.features .cloudsThin .thinCloud_2{top:4.5rem;left:5.5rem;width:7.42rem}@media (max-width: 768px){.features .cloudsThin .thinCloud_2{top:2.5rem;left:1rem;width:1.5rem}}.features .cloudsThin .thinCloud_3{top:3.5rem;left:7rem;width:4.34rem;animation-delay:-5s}@media (max-width: 768px){.features .cloudsThin .thinCloud_3{top:1.5rem;left:1rem;width:0.9rem}}.features .cloudsThin .thinCloud_4{top:3.5rem;left:4.5rem;width:10.3rem;animation-delay:-20s}@media (max-width: 768px){.features .cloudsThin .thinCloud_4{top:1.5rem;left:1rem;width:2.1rem}}@keyframes thinCloudsAnimation{0%{transform:rotate(20deg) translate3d(0, 0, 0)}100%{transform:rotate(-20deg) translate3d(0, 0, 0)}}.features .cloudsFluffy{z-index:3;filter:blur(0.01rem);transform:translate3d(0, 0, 0)}.features .cloudsFluffy picture{margin-top:-3.3rem}@media (max-width: 768px){.features .cloudsFluffy picture{margin-top:-1.65rem}}.features .hills{z-index:3}.features .hills picture{margin-top:8.8rem}@media (max-width: 768px){.features .hills picture{margin-top:8.04rem}}.features .cliff{z-index:4}.features .cliff .cliffPicture{margin-top:6.59rem}@media (max-width: 768px){.features .cliff .cliffPicture{margin-top:8.5rem}}.features .cliff .tail{margin-top:0;position:absolute;top:14.9rem;left:9.2rem;width:3.23rem;animation:tailAnimation 4s ease-in-out infinite;transform-origin:0.5rem 0.5rem}@media (max-width: 768px){.features .cliff .tail{top:9.9rem;left:1.54rem;width:0.5rem;transform-origin:0.08rem 0.08rem}}@keyframes tailAnimation{0%{transform:rotate(0) translate3d(0, 0, 0)}50%{transform:rotate(-10deg) translate3d(0, 0, 0)}100%{transform:rotate(0) translate3d(0, 0, 0)}}.features .cliff .leafContainer{position:absolute;top:9.9rem;left:2.5rem;width:0.2rem;height:0.2rem;background:radial-gradient(#c14b98 0%, #67246e 100%);border-radius:50% 5% 50% 5%;transform-origin:2.5rem -2.5rem;animation:leafFlightAnimation 3s ease-out infinite}@media (max-width: 768px){.features .cliff .leafContainer{top:9rem;left:0.4rem;transform-origin:1rem -1rem;width:0.05rem;height:0.05rem}}@keyframes leafFlightAnimation{0%{opacity:0;transform:rotate(0deg) translate3d(0, 0, 0)}40%{opacity:1}100%{opacity:0;transform:rotate(-40deg) translate3d(0, 0, 0)}}.features .cliff .leafContainer_2{animation-delay:1.3s;top:9.6rem;left:3rem}@media (max-width: 768px){.features .cliff .leafContainer_2{top:8.96rem;left:0.52rem}}.features .cliff .leafContainer_3{animation-delay:2.1s;top:9.4rem;left:3.5rem}@media (max-width: 768px){.features .cliff .leafContainer_3{top:8.94rem;left:0.6rem}}.features .cliff .leafContainer_4{animation-delay:0.5s;top:9.3rem;left:4rem}@media (max-width: 768px){.features .cliff .leafContainer_4{top:8.9rem;left:0.7rem}}.features .cliff .leafContainer_5{animation-delay:1.7s;top:10.6rem;left:2rem}@media (max-width: 768px){.features .cliff .leafContainer_5{top:9.2rem;left:0.3rem}}.features .cliff .shroomGlow{position:absolute;background:radial-gradient(50% 50% at 50% 50%, rgba(0,223,231,0.74) 0%, rgba(0,223,231,0.15) 100%);filter:blur(0.5rem);border-radius:50%;animation:shroomGlowAnimation 3s ease-in-out infinite}.features .cliff .shroomGlow_1{width:2rem;height:2rem;top:12.1rem;left:3.1rem}@media (max-width: 768px){.features .cliff .shroomGlow_1{width:0.4rem;height:0.4rem;top:9.4rem;left:0.5rem}}.features .cliff .shroomGlow_2{width:2.5rem;height:2.5rem;top:12.3rem;left:14.1rem;animation-delay:1s}@media (max-width: 768px){.features .cliff .shroomGlow_2{width:0.5rem;height:0.5rem;top:9.4rem;left:2.3rem}}@keyframes shroomGlowAnimation{0%{opacity:0.2;transform:translate3d(0, 0, 0)}50%{opacity:1;transform:translate3d(0, 0, 0)}100%{opacity:0.2;transform:translate3d(0, 0, 0)}}.features .cliff .shroomFlies{position:absolute;animation:flyOpacityAnimation 3s ease-in-out infinite}@media (max-width: 768px){.features .cliff .shroomFlies{display:none}}.features .cliff .shroomFlies .fly{animation:shroomFliesAnimation linear infinite;border-radius:50%;background:#00dfe7}.features .cliff .shroomFlies_1{top:12.1rem;left:3.1rem}.features .cliff .shroomFlies_1 .fly{width:0.1rem;height:0.1rem;filter:blur(0.03rem);transform-origin:0.5rem 0.5rem;animation-duration:6s}.features .cliff .shroomFlies_2{top:12.3rem;left:4.3rem;animation-delay:0.75s}.features .cliff .shroomFlies_2 .fly{width:0.07rem;height:0.07rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.5rem 0.5rem;animation-duration:5.5s;animation-delay:1s}.features .cliff .shroomFlies_3{top:12.1rem;left:4.1rem;animation-delay:1.5s}.features .cliff .shroomFlies_3 .fly{width:0.05rem;height:0.05rem;filter:blur(0.02rem);transform-origin:0.7rem 0.4rem;animation-duration:5s;animation-delay:1.5s}.features .cliff .shroomFlies_4{top:12.3rem;left:3.3rem;animation-delay:2.25s}.features .cliff .shroomFlies_4 .fly{width:0.09rem;height:0.09rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.4rem 0.7rem;animation-duration:5.8s;animation-delay:2s}.features .cliff .shroomFlies_5{top:12.1rem;left:14.1rem}.features .cliff .shroomFlies_5 .fly{width:0.1rem;height:0.1rem;filter:blur(0.03rem);transform-origin:0.5rem 0.5rem;animation-duration:6s}.features .cliff .shroomFlies_6{top:12.7rem;left:15.8rem;animation-delay:0.75s}.features .cliff .shroomFlies_6 .fly{width:0.07rem;height:0.07rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.5rem 0.5rem;animation-duration:5.5s;animation-delay:1s}.features .cliff .shroomFlies_7{top:12.1rem;left:15rem;animation-delay:1.5s}.features .cliff .shroomFlies_7 .fly{width:0.05rem;height:0.05rem;filter:blur(0.02rem);transform-origin:0.7rem 0.4rem;animation-duration:5s;animation-delay:1.5s}.features .cliff .shroomFlies_8{top:12.3rem;left:14.3rem;animation-delay:2.25s}.features .cliff .shroomFlies_8 .fly{width:0.09rem;height:0.09rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.4rem 0.7rem;animation-duration:5.8s;animation-delay:2s}@keyframes shroomFliesAnimation{0%{transform:rotate(0deg) translate3d(0, 0, 0)}100%{transform:rotate(360deg) translate3d(0, 0, 0)}}@keyframes flyOpacityAnimation{0%{opacity:0;transform:translate3d(0, 0, 0)}50%{opacity:1;transform:translate3d(0, 0, 0)}100%{opacity:0;transform:translate3d(0, 0, 0)}}.features .waterfall{z-index:4;position:absolute;top:-2.1rem;right:1.16rem;left:unset;width:6.42rem;height:11.08rem;transform:translate3d(0, 0, 0)}@media (max-width: 768px){.features .waterfall{top:-1.3rem;right:0;width:1.04rem;height:2.281rem}}.features .waterfall *{position:absolute}.features .waterfall .top{top:0;right:0;width:6.09rem}@media (max-width: 768px){.features .waterfall .top{width:0.965rem}}.features .waterfall .bottom{top:8.27rem;left:0;width:4.68rem}@media (max-width: 768px){.features .waterfall .bottom{top:1.7rem;width:0.964rem}}.features .water{position:absolute;z-index:5;top:-1.1rem;right:4rem;width:2.05rem;mix-blend-mode:lighten;opacity:0;transform:translate3d(0, 0, 0)}@media (max-width: 768px){.features .water{top:-1.09rem;right:0.32rem;width:0.424rem}}.features .thumbnail{mix-blend-mode:unset;opacity:1}.features .thumbnail img{transform:scale(0.87);transform-origin:50% 0}.features .scrolls{z-index:5;position:relative;top:-0.36rem;pointer-events:unset;transform:translate3d(0, 0, 0)}.features .scrolls .whitepaper{position:relative;width:4.5rem;height:4.6rem;display:flex;flex-direction:column;align-items:center;padding:0.36rem 0.26rem 0 0.38rem;margin-left:5.23rem;margin-bottom:1.2rem}@media (max-width: 768px){.features .scrolls .whitepaper{width:2.1rem;height:2.33rem;padding:0.166rem 0.18rem 0;margin-left:0.15rem;margin-bottom:0.3rem}}.features .scrolls .whitepaper p{font-weight:500;margin-bottom:0.27rem}@media (max-width: 768px){.features .scrolls .whitepaper p{margin-bottom:0.05rem}}.features .scrolls .whitepaper .learnMore{margin-bottom:0.15rem;font-weight:700}@media (max-width: 768px){.features .scrolls .whitepaper .learnMore{margin-bottom:0.06rem}}.features .scrolls .whitepaper .button{display:flex;justify-content:center;align-items:center;position:relative;cursor:pointer;width:1.25rem;height:0.48rem;transform:scale(1.3);text-decoration:none}@media (max-width: 768px){.features .scrolls .whitepaper .button{width:0.71rem;height:0.29rem}}.features .scrolls .whitepaper .button picture{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.features .scrolls .whitepaper .button span{color:#fff;font-size:0.16rem;font-weight:700;text-shadow:0.01rem 0.02rem 0 rgba(0,0,0,0.25)}@media (max-width: 768px){.features .scrolls .whitepaper .button span{font-size:0.09rem}}.features .scrolls .whitepaper>picture{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-2}.features .scrolls .whitepaper>picture img{height:100%}.features .scrolls .featuresGrid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:0.42rem 0.13rem;width:min-content;margin-left:5.1rem}@media (max-width: 768px){.features .scrolls .featuresGrid{grid-template-columns:1fr 1fr;width:100%;margin-left:0.05rem;grid-gap:0.1rem 0}}.features .scrolls .featuresGrid .feature{width:2.9rem;height:3.7rem;position:relative;padding:1.7rem 0.28rem 0;text-align:center}@media (max-width: 768px){.features .scrolls .featuresGrid .feature{width:1.5rem;height:2rem;padding:0.9rem 0.15rem 0}}.features .scrolls .featuresGrid .feature .heading{font-weight:700;margin-bottom:0.08rem}.features .scrolls .featuresGrid .feature>picture{position:absolute;width:100%;left:0;bottom:0;z-index:-1}.features .scrolls .featuresGrid .feature>picture.crystal_card{width:117%;left:-7%}.features .crystals{z-index:6}.features .crystals .crystal{position:absolute;animation:crystalBounce 2s ease-in-out infinite}.features .crystals .crystal_1{top:-1.06rem;left:2.01rem;width:3.82rem;height:4.34rem;animation-delay:0s;animation-duration:3s}@media (max-width: 768px){.features .crystals .crystal_1{top:-1.5rem;left:0.15rem;width:0.8rem;height:0.91rem}}.features .crystals .crystal_2{top:-2.29rem;left:3.4rem;width:2.21rem;height:2.28rem;animation-delay:0.4s}@media (max-width: 768px){.features .crystals .crystal_2{top:1.6rem;left:1.64rem;width:0.46rem;height:0.48rem;animation-delay:0.2s}}.features .crystals .crystal_3{top:0.21rem;left:10.1rem;width:0.4rem;height:0.4rem;animation-delay:0.2s}@media (max-width: 768px){.features .crystals .crystal_3{top:-1rem;left:1.1rem;width:0.08rem;height:0.08rem;animation-delay:0.4s}}.features .crystals .crystal_4{top:1.75rem;left:9.5rem;width:2.21rem;height:2.28rem;animation-delay:0.6s}@media (max-width: 768px){.features .crystals .crystal_4{top:-1.3rem;left:1.7rem;width:0.46rem;height:0.48rem;animation-delay:0s}}.features .crystals .crystal_5{top:2.33rem;left:8.88rem;width:2.21rem;height:2.28rem;animation-delay:0.3s}@media (max-width: 768px){.features .crystals .crystal_5{top:1.3rem;left:2.5rem;width:0.46rem;height:0.48rem;animation-delay:0.6s}}@keyframes crystalBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.15rem, 0)}100%{transform:translate3d(0, 0, 0)}}@media (max-width: 768px){@keyframes crystalBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.05rem, 0)}100%{transform:translate3d(0, 0, 0)}}}.features .crystals .crystal.shimmer{filter:blur(0.1rem);z-index:-1;animation-name:shimmerBounce}@keyframes shimmerBounce{0%{transform:translate3d(0, 0, 0);opacity:0.8}50%{transform:translate3d(0, 0.15rem, 0);opacity:0.3}100%{transform:translate3d(0, 0, 0);opacity:0.8}}@media (max-width: 768px){@keyframes shimmerBounce{0%{transform:translate3d(0, 0, 0);opacity:0.8}50%{transform:translate3d(0, 0.05rem, 0);opacity:0.3}100%{transform:translate3d(0, 0, 0);opacity:0.8}}}.marketplace{color:#fff;z-index:2}.marketplace .bg{z-index:1;background:linear-gradient(180deg, #3090ba 0%, #2d7dae 47.83%, #294c8c 100%);transform:translate3d(0, 0, 0)}.marketplace .stones{z-index:2;filter:blur(0.01rem);transform:translate3d(0, 0, 0)}.marketplace .stones picture{margin-top:0}@media (max-width: 768px){.marketplace .stones picture{margin-top:0.4rem}}.marketplace .light{z-index:3;filter:blur(0.02rem);transform:translate3d(0, 0, 0)}.marketplace .light picture{margin-top:1rem;width:15.92rem}@media (max-width: 768px){.marketplace .light picture{width:4.88rem;margin-top:0.1rem;opacity:0.6}}.marketplace .content{position:relative;z-index:4;padding-top:3.6rem;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}@media (max-width: 768px){.marketplace .content{padding-top:0.6rem}}.marketplace .content .heading{font-size:0.475rem;line-height:0.645rem;font-weight:700;text-align:center;text-shadow:0 0.01rem 0.2rem #095064;margin-bottom:0.19rem}@media (max-width: 768px){.marketplace .content .heading{font-size:0.12rem;line-height:0.16rem;margin-bottom:0.14rem;text-shadow:0 0.01rem 0.06rem #095064}}.marketplace .content .description{width:7.47rem;font-size:0.19rem;line-height:0.23rem;font-weight:600;text-align:center;text-shadow:0.01rem 0.02rem 0.09rem #072730;margin-bottom:1.5rem}@media (max-width: 768px){.marketplace .content .description{font-size:0.09rem;line-height:0.11rem;margin-bottom:0.31rem;text-shadow:0 0.01rem 0.03rem #095064;width:2.41rem}}.marketplace .content .icons{display:flex;flex-direction:row;justify-content:center;align-items:flex-end;gap:0.39rem;height:1.96rem;margin-bottom:1rem}@media (max-width: 768px){.marketplace .content .icons{gap:0.01rem;height:0.75rem;margin-bottom:0.7rem}}.marketplace .content .icons .icon{position:relative;width:2.36rem;animation:iconBounce 3s ease-in-out infinite}@media (max-width: 768px){.marketplace .content .icons .icon{width:0.97rem}}.marketplace .content .icons .icon_1{animation-delay:0s}.marketplace .content .icons .icon_2{animation-delay:0.6s}.marketplace .content .icons .icon_3{animation-delay:1.2s}.marketplace .content .icons .icon picture{position:absolute;bottom:0;width:100%;z-index:-1;bottom:0}.marketplace .content .icons .icon .elem{width:2.52rem;right:0.03rem}@media (max-width: 768px){.marketplace .content .icons .icon .elem{width:1rem}}@keyframes iconBounce{0%{transform:translate3d(0, 0, 0)}50%{transform:translate3d(0, 0.1rem, 0)}100%{transform:translate3d(0, 0, 0)}}.marketplace .plants{z-index:5}.marketplace .plants .plantsPicture{margin-top:4.1rem;position:relative}@media (max-width: 768px){.marketplace .plants .plantsPicture{margin-top:1.8rem;left:-0.33rem;width:4rem}}.marketplace .plants .flower{position:absolute;top:9.3rem;right:2.2rem;animation:flowerAnimation 5s ease-in-out infinite}@media (max-width: 768px){.marketplace .plants .flower{top:2.9rem;right:-0.05rem}}@keyframes flowerAnimation{50%{transform:rotate(-5deg) translate3d(0, 0, 0)}100%{transform:rotate(0deg) translate3d(0, 0, 0)}}.marketplace .plants .flower picture{position:absolute}.marketplace .plants .flower_stem{bottom:-0.4rem;left:-0.46rem;width:2.35rem}@media (max-width: 768px){.marketplace .plants .flower_stem{bottom:-0.1rem;left:-0.1rem;width:0.8rem}}.marketplace .plants .flower_tip{bottom:2.3rem;left:-1.6rem;width:3.78rem;transform-origin:3rem 2.3rem;animation:flowerTipAnimation 5s 0.5s ease-in-out infinite}@media (max-width: 768px){.marketplace .plants .flower_tip{bottom:0.9rem;left:-0.2rem;width:1.1rem}}@keyframes flowerTipAnimation{50%{transform:rotate(-5deg) translate3d(0, 0, 0)}100%{transform:rotate(0deg) translate3d(0, 0, 0)}}.roadmap{z-index:1}.roadmap .background{z-index:1;transform:translate3d(0, 0, 0)}@media (max-width: 768px){.roadmap .background{width:140%;left:-20%}}.roadmap .background .shroomGlow{position:absolute;background:radial-gradient(50% 50% at 50% 50%, rgba(0,223,231,0.74) 0%, rgba(0,223,231,0.15) 100%);filter:blur(0.1rem);border-radius:50%;animation:glowAnimation 3s ease-in-out infinite}.roadmap .background .shroomGlow_1{width:0.8rem;height:0.8rem;top:3.85rem;left:14.7rem}@media (max-width: 768px){.roadmap .background .shroomGlow_1{width:0.2rem;height:0.2rem;top:3.15rem;left:3.59rem}}.roadmap .background .shroomGlow_2{width:1rem;height:1rem;top:4.6rem;left:17.6rem;animation-delay:1s}@media (max-width: 768px){.roadmap .background .shroomGlow_2{display:none}}.roadmap .background .shroomGlow_3{width:0.7rem;height:0.7rem;top:6rem;left:16.3rem;animation-delay:2s}@media (max-width: 768px){.roadmap .background .shroomGlow_3{display:none}}.roadmap .background .shroomGlow_4{width:0.7rem;height:0.7rem;top:10.3rem;left:1rem;animation-delay:0.5s}@media (max-width: 768px){.roadmap .background .shroomGlow_4{display:none}}.roadmap .background .shroomGlow_5{width:1.1rem;height:0.7rem;top:12.1rem;left:1.6rem;animation-delay:1.5s}@media (max-width: 768px){.roadmap .background .shroomGlow_5{display:none}}.roadmap .background .shroomGlow_6{width:0.7rem;height:0.7rem;top:13.6rem;left:15.4rem;animation-delay:1.5s}@media (max-width: 768px){.roadmap .background .shroomGlow_6{display:none}}.roadmap .background .shroomGlow_7{width:1.2rem;height:1.2rem;top:14.9rem;left:16.5rem;animation-delay:2.5s}@media (max-width: 768px){.roadmap .background .shroomGlow_7{display:none}}.roadmap .background .shroomFlies{position:absolute;animation:flyOpacityAnimation 3s ease-in-out infinite}@media (max-width: 768px){.roadmap .background .shroomFlies{display:none}}.roadmap .background .shroomFlies .fly{animation:shroomFliesAnimation linear infinite;border-radius:50%;background:#00dfe7}.roadmap .background .shroomFlies_1{top:3.85rem;left:14.8rem}.roadmap .background .shroomFlies_1 .fly{width:0.08rem;height:0.08rem;filter:blur(0.03rem);transform-origin:0.2rem 0.2rem;animation-duration:5s}.roadmap .background .shroomFlies_2{top:3.95rem;left:14.7rem;animation-delay:1.5s}.roadmap .background .shroomFlies_2 .fly{width:0.05rem;height:0.05rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.2rem 0.3rem;animation-duration:4.5s;animation-delay:1.5s}.roadmap .background .shroomFlies_3{top:4.6rem;left:17.7rem;animation-delay:0.5s}.roadmap .background .shroomFlies_3 .fly{width:0.08rem;height:0.08rem;filter:blur(0.02rem);transform-origin:0.3rem 0.25rem;animation-duration:4.5s;animation-delay:0.5s}.roadmap .background .shroomFlies_4{top:4.7rem;left:17.6rem;animation-delay:2s}.roadmap .background .shroomFlies_4 .fly{width:0.1rem;height:0.1rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.25rem 0.35rem;animation-duration:5.1s;animation-delay:2s}.roadmap .background .shroomFlies_5{top:6rem;left:16.4rem;animation-delay:1s}.roadmap .background .shroomFlies_5 .fly{width:0.05rem;height:0.05rem;filter:blur(0.03rem);transform-origin:0.15rem 0.2rem;animation-duration:4s;animation-delay:1s}.roadmap .background .shroomFlies_6{top:6.1rem;left:16.3rem;animation-delay:2.5s}.roadmap .background .shroomFlies_6 .fly{width:0.07rem;height:0.07rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.2rem 0.15rem;animation-duration:4.5s;animation-delay:2.5s}.roadmap .background .shroomFlies_7{top:10.3rem;left:1.1rem}.roadmap .background .shroomFlies_7 .fly{width:0.06rem;height:0.06rem;filter:blur(0.02rem);transform-origin:0.15rem 0.15rem;animation-duration:4.4s}.roadmap .background .shroomFlies_8{top:10.4rem;left:1rem;animation-delay:1.5s}.roadmap .background .shroomFlies_8 .fly{width:0.04rem;height:0.04rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.15rem 0.2rem;animation-duration:4s;animation-delay:1.5s}.roadmap .background .shroomFlies_9{top:12.1rem;left:1.8rem;animation-delay:1s}.roadmap .background .shroomFlies_9 .fly{width:0.1rem;height:0.1rem;filter:blur(0.02rem);transform-origin:0.25rem 0.35rem;animation-duration:5s;animation-delay:1s}.roadmap .background .shroomFlies_10{top:12.2rem;left:1.7rem;animation-delay:2.5s}.roadmap .background .shroomFlies_10 .fly{width:0.08rem;height:0.08rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.3rem 0.25rem;animation-duration:4.7s;animation-delay:2.5s}.roadmap .background .shroomFlies_11{top:13.6rem;left:15.5rem;animation-delay:0.5s}.roadmap .background .shroomFlies_11 .fly{width:0.04rem;height:0.04rem;filter:blur(0.02rem);transform-origin:0.25rem 0.2rem;animation-duration:4s;animation-delay:0.5s}.roadmap .background .shroomFlies_12{top:13.7rem;left:15.4rem;animation-delay:2s}.roadmap .background .shroomFlies_12 .fly{width:0.07rem;height:0.07rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.2rem 0.2rem;animation-duration:4.6s;animation-delay:2s}.roadmap .background .shroomFlies_13{top:14.9rem;left:16.7rem;animation-delay:1.5s}.roadmap .background .shroomFlies_13 .fly{width:0.09rem;height:0.09rem;filter:blur(0.02rem);transform-origin:0.25rem 0.2rem;animation-duration:4.9s;animation-delay:1.5s}.roadmap .background .shroomFlies_14{top:15rem;left:16.6rem}.roadmap .background .shroomFlies_14 .fly{width:0.08rem;height:0.08rem;filter:blur(0.02rem);animation-direction:reverse;transform-origin:0.2rem 0.3rem;animation-duration:4.6s}@keyframes shroomFliesAnimation{0%{transform:rotate(0deg) translate3d(0, 0, 0)}100%{transform:rotate(360deg) translate3d(0, 0, 0)}}@keyframes flyOpacityAnimation{0%{opacity:0;transform:translate3d(0, 0, 0)}50%{opacity:1;transform:translate3d(0, 0, 0)}100%{opacity:0;transform:translate3d(0, 0, 0)}}.roadmap .background .redCrystalGlow{position:absolute;background:radial-gradient(50% 50% at 50% 50%, rgba(217,143,221,0.74) 0%, rgba(217,143,221,0.15) 100%);filter:blur(0.1rem);border-radius:50%;animation:glowAnimation 3s ease-in-out infinite}.roadmap .background .redCrystalGlow_1{width:0.8rem;height:2rem;top:5rem;left:15rem;animation-delay:0.5s}@media (max-width: 768px){.roadmap .background .redCrystalGlow_1{width:0.15rem;height:0.15rem;top:2.5rem;left:1.05rem}}.roadmap .background .redCrystalGlow_2{width:1.4rem;height:1.4rem;top:7rem;left:17.2rem;animation-delay:2s}@media (max-width: 768px){.roadmap .background .redCrystalGlow_2{width:0.23rem;height:0.18rem;top:2.53rem;left:1.17rem}}.roadmap .background .redCrystalGlow_3{width:1.5rem;height:1.5rem;top:11rem;left:-0.3rem;animation-delay:0s}@media (max-width: 768px){.roadmap .background .redCrystalGlow_3{display:none}}.roadmap .background .redCrystalGlow_4{width:0.6rem;height:0.6rem;top:10.7rem;left:4.5rem;animation-delay:1s}@media (max-width: 768px){.roadmap .background .redCrystalGlow_4{display:none}}.roadmap .background .redCrystalGlow_5{width:0.9rem;height:0.7rem;top:10.9rem;left:5.1rem;animation-delay:2s}@media (max-width: 768px){.roadmap .background .redCrystalGlow_5{display:none}}.roadmap .background .footerCrystalGlow{position:absolute;background:radial-gradient(50% 50% at 50% 50%, rgba(101,224,247,0.74) 0%, rgba(101,224,247,0.05) 100%);filter:blur(0.4rem);border-radius:50%;animation:glowAnimation 4s ease-in-out infinite;width:6rem;height:6rem}@media (max-width: 768px){.roadmap .background .footerCrystalGlow{width:1rem;height:1rem}}.roadmap .background .footerCrystalGlow_1{top:16rem;left:-1rem;animation-delay:0s}@media (max-width: 768px){.roadmap .background .footerCrystalGlow_1{top:4rem;left:0.2rem}}.roadmap .background .footerCrystalGlow_2{top:17rem;left:2rem;animation-delay:2s}@media (max-width: 768px){.roadmap .background .footerCrystalGlow_2{top:4.4rem;left:1.2rem}}.roadmap .background .footerCrystalGlow_3{top:17rem;left:11rem;animation-delay:3s}@media (max-width: 768px){.roadmap .background .footerCrystalGlow_3{top:4.4rem;left:2.3rem}}.roadmap .background .footerCrystalGlow_4{top:15rem;left:14rem;animation-delay:1s}@media (max-width: 768px){.roadmap .background .footerCrystalGlow_4{top:3.9rem;left:3rem}}@keyframes glowAnimation{0%{opacity:0.2;transform:translate3d(0, 0, 0)}50%{opacity:0.8;transform:translate3d(0, 0, 0)}100%{opacity:0.2;transform:translate3d(0, 0, 0)}}.roadmap .fog{z-index:2;transform:translate3d(0, 0, 0)}.roadmap .fog picture{margin-top:1.5rem;animation:fogAnimation 5s linear infinite}@media (max-width: 768px){.roadmap .fog picture{margin-top:0.4rem}}@keyframes fogAnimation{0%{opacity:1;transform:translate3d(0, 0, 0)}50%{opacity:0.5;transform:translate3d(0, 0, 0)}100%{opacity:1;transform:translate3d(0, 0, 0)}}.roadmap .bottle{z-index:4;mix-blend-mode:lighten;transform:translate3d(0, 0, 0)}.roadmap .bottle video,.roadmap .bottle .thumbnail{position:absolute;width:2.5rem;top:6.9rem;left:2.8rem;transform:scaleX(1.35);opacity:0}@media (max-width: 768px){.roadmap .bottle video,.roadmap .bottle .thumbnail{width:0.58rem;top:1.61rem;left:0.02rem}}.roadmap .bottle .thumbnail{z-index:3;opacity:1}.roadmap .light{z-index:5}.roadmap .light .lightBehindPaper{background:radial-gradient(50% 50% at 50% 50%, rgba(114,201,201,0.74) 0%, rgba(114,201,201,0.15) 100%);filter:blur(0.5rem);border-radius:50%;width:6rem;height:6rem;margin-top:6rem;margin-left:6.6rem;animation:1s lightningFlashAnimation linear infinite}@media (max-width: 768px){.roadmap .light .lightBehindPaper{width:2rem;height:2rem;margin-top:0.75rem;margin-left:0.6rem}}.roadmap .content{z-index:6;position:relative;display:flex;flex-direction:column;align-items:center;padding-top:4.8rem}@media (max-width: 768px){.roadmap .content{padding-top:0.5rem}}.roadmap .content .heading{font-size:0.4745rem;line-height:0.64rem;font-weight:700;color:#ffffff;text-shadow:0 0.01rem 0.2rem #095064;margin-bottom:0.4026rem}@media (max-width: 768px){.roadmap .content .heading{font-size:0.12rem;line-height:0.16rem;margin-bottom:0.03rem;text-shadow:0 0 0.06rem #095064}}.roadmap .content .papers{display:flex;gap:0.365rem;color:#095064;margin-bottom:3rem;width:min-content}@media (max-width: 768px){.roadmap .content .papers{gap:0.03rem;margin-bottom:0.9rem}}.roadmap .content .papers .paper{width:2.8rem;height:3.6rem;padding:0.2436rem 0.2181rem 0 0.314rem;position:relative}@media (max-width: 768px){.roadmap .content .papers .paper{width:1.01rem;height:1.27rem;padding:0.06rem 0 0 0.09rem}}.roadmap .content .papers .paper_heading{font-size:0.2085rem;line-height:0.25rem;font-weight:700;margin-bottom:0.124rem}@media (max-width: 768px){.roadmap .content .papers .paper_heading{font-size:0.08rem;line-height:0.1rem;margin-bottom:0.03rem}}.roadmap .content .papers .paper ul{padding:0;list-style-position:inside}.roadmap .content .papers .paper li{font-size:0.1765rem;line-height:0.2118rem;font-weight:500}@media (max-width: 768px){.roadmap .content .papers .paper li{font-size:0.07rem;line-height:0.08rem}.roadmap .content .papers .paper li span{margin-left:-0.02rem}}.roadmap .content .papers .paper picture{z-index:-1;width:100%;height:100%;position:absolute;top:0;left:0}.roadmap .content .papers .paper picture img{height:100%}.roadmap .lightning{z-index:7}.roadmap .lightning picture{width:4.1rem;margin-top:7.7rem;margin-left:7.5rem;animation:1s lightningFlashAnimation linear infinite}@media (max-width: 768px){.roadmap .lightning picture{width:1.2rem;margin-top:1.45rem;margin-left:0.97rem}}@keyframes lightningFlashAnimation{0%{opacity:0.8;transform:translate3d(0, 0, 0)}50%{opacity:1;transform:translate3d(0, 0, 0)}100%{opacity:0.8;transform:translate3d(0, 0, 0)}}.partners{z-index:2}.partners .crystals{z-index:4;transform:translate3d(0, 0, 0)}.partners .crystals picture{margin-top:3.6rem}@media (max-width: 768px){.partners .crystals picture{margin-top:1.19rem}}.partners .content{z-index:5;position:relative;display:flex;flex-direction:column;align-items:center;transform:translate3d(0, 0, 0)}.partners .content .heading{font-size:0.4745rem;line-height:0.64rem;font-weight:700;color:#9fd2fd;text-shadow:0 0.01rem 0.2rem #095064;margin-bottom:0.21rem}@media (max-width: 768px){.partners .content .heading{font-size:0.1rem;line-height:0.13rem;margin-bottom:0.08rem;text-shadow:0 0 0.04rem #095064}}.partners .content .partnersGrid{display:flex;flex-wrap:wrap;justify-content:center;gap:0.7rem;width:min-content;margin-bottom:1.1rem;transform:translate3d(0, 0, 0);width:7.2rem}@media (max-width: 768px){.partners .content .partnersGrid{gap:0.15rem;margin-bottom:0.3rem;width:2.2rem}}.partners .content .partnersGrid .partner{width:100%;display:flex;align-items:center;justify-content:center;width:2.2rem}@media (max-width: 768px){.partners .content .partnersGrid .partner{width:0.5rem}}.partners .content .partnersGrid .partner_2{position:relative;top:-0.1rem;width:1.3rem}@media (max-width: 768px){.partners .content .partnersGrid .partner_2{top:-0.02rem;width:0.35rem}}.partners .content .partnersGrid .partner_5{position:relative;width:1.3rem}@media (max-width: 768px){.partners .content .partnersGrid .partner_5{top:-0.02rem;width:0.35rem}}.partners .content .quantum{width:2.5rem;margin-bottom:1.2rem}@media (max-width: 768px){.partners .content .quantum{width:0.6rem;margin-bottom:0.3rem}}footer{position:relative;z-index:9;display:flex;justify-content:center;align-items:center;height:1.1rem;background:linear-gradient(#002c48 0.05rem, #00436b 0.05rem, #00436b 0.09rem, #003c60 0.09rem);box-shadow:0 -0.02rem 0.16rem #000;color:#6edcff;font-size:0.12rem;line-height:0.14rem}@media (max-width: 768px){footer{height:0.61rem;background:linear-gradient(#002c48 0.02rem, #00436b 0.03rem, #00436b 0.04rem, #003c60 0.04rem);font-size:0.06rem;line-height:0.07rem;flex-wrap:wrap;padding:0.05rem 0.15rem}}footer .logo{width:1.727rem;margin-right:0.175rem}@media (max-width: 768px){footer .logo{width:0.97rem;margin-right:0.18rem}}footer .copyright{display:flex;flex-direction:column;margin-right:1.025rem}@media (max-width: 768px){footer .copyright{flex-direction:row;order:10;width:100%;margin-right:0;gap:0.01rem}}footer .subscribe{display:flex;margin-right:0.15rem}@media (max-width: 768px){footer .subscribe{flex-direction:column}}footer .subscribe p{margin-top:0.1rem;margin-right:0.1rem}@media (max-width: 768px){footer .subscribe p{margin-top:0;margin-right:0;margin-left:0.05rem}}footer .poweredBy{display:flex}@media (max-width: 768px){footer .poweredBy{flex-direction:column}}footer .poweredBy p{margin-top:0.1rem;margin-right:0.1rem}@media (max-width: 768px){footer .poweredBy p{margin-top:0;margin-right:0;margin-left:0.05rem}}footer .icons{display:flex;gap:-0.1rem}footer .icons picture{width:0.48rem}@media (max-width: 768px){footer .icons picture{width:0.24rem}}footer .jags{position:absolute;top:0;height:0.15rem;max-width:50%;overflow:hidden}@media (max-width: 768px){footer .jags{display:none}}footer .jags_1{left:0;transform:scale(0, -1)}footer .jags_2{right:0;transform:scale(-1, -1)}footer .jags img{width:unset;height:100%}\n', ""]);
                const D = F
            },
            645: e => {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var r = "",
                                a = void 0 !== t[5];
                            return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), a && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), a && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r
                        })).join("")
                    }, t.i = function(e, r, a, i, o) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var n = {};
                        if (a)
                            for (var m = 0; m < this.length; m++) {
                                var s = this[m][0];
                                null != s && (n[s] = !0)
                            }
                        for (var l = 0; l < e.length; l++) {
                            var d = [].concat(e[l]);
                            a && n[d[0]] || (void 0 !== o && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = o), r && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = r) : d[2] = r), i && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = i) : d[4] = "".concat(i)), t.push(d))
                        }
                    }, t
                }
            },
            667: e => {
                "use strict";
                e.exports = function(e, t) {
                    return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
                }
            },
            81: e => {
                "use strict";
                e.exports = function(e) {
                    return e[1]
                }
            },
            379: e => {
                "use strict";
                var t = [];

                function r(e) {
                    for (var r = -1, a = 0; a < t.length; a++)
                        if (t[a].identifier === e) {
                            r = a;
                            break
                        } return r
                }

                function a(e, a) {
                    for (var o = {}, n = [], m = 0; m < e.length; m++) {
                        var s = e[m],
                            l = a.base ? s[0] + a.base : s[0],
                            d = o[l] || 0,
                            f = "".concat(l, " ").concat(d);
                        o[l] = d + 1;
                        var p = r(f),
                            c = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5]
                            };
                        if (-1 !== p) t[p].references++, t[p].updater(c);
                        else {
                            var u = i(c, a);
                            a.byIndex = m, t.splice(m, 0, {
                                identifier: f,
                                updater: u,
                                references: 1
                            })
                        }
                        n.push(f)
                    }
                    return n
                }

                function i(e, t) {
                    var r = t.domAPI(t);
                    return r.update(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                                r.update(e = t)
                            } else r.remove()
                        }
                }
                e.exports = function(e, i) {
                    var o = a(e = e || [], i = i || {});
                    return function(e) {
                        e = e || [];
                        for (var n = 0; n < o.length; n++) {
                            var m = r(o[n]);
                            t[m].references--
                        }
                        for (var s = a(e, i), l = 0; l < o.length; l++) {
                            var d = r(o[l]);
                            0 === t[d].references && (t[d].updater(), t.splice(d, 1))
                        }
                        o = s
                    }
                }
            },
            569: e => {
                "use strict";
                var t = {};
                e.exports = function(e, r) {
                    var a = function(e) {
                        if (void 0 === t[e]) {
                            var r = document.querySelector(e);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                                r = r.contentDocument.head
                            } catch (e) {
                                r = null
                            }
                            t[e] = r
                        }
                        return t[e]
                    }(e);
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(r)
                }
            },
            216: e => {
                "use strict";
                e.exports = function(e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            565: (e, t, r) => {
                "use strict";
                e.exports = function(e) {
                    var t = r.nc;
                    t && e.setAttribute("nonce", t)
                }
            },
            795: e => {
                "use strict";
                e.exports = function(e) {
                    var t = e.insertStyleElement(e);
                    return {
                        update: function(r) {
                            ! function(e, t, r) {
                                var a = "";
                                r.supports && (a += "@supports (".concat(r.supports, ") {")), r.media && (a += "@media ".concat(r.media, " {"));
                                var i = void 0 !== r.layer;
                                i && (a += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), a += r.css, i && (a += "}"), r.media && (a += "}"), r.supports && (a += "}");
                                var o = r.sourceMap;
                                o && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(a, e, t.options)
                            }(t, e, r)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(t)
                        }
                    }
                }
            },
            589: e => {
                "use strict";
                e.exports = function(e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
            907: (e, t, r) => {
                "use strict";
                e.exports = r.p + "1e1c4529f42c461ea19c.eot"
            },
            733: (e, t, r) => {
                "use strict";
                e.exports = r.p + "7cf4e1bedc71dfdfdaa3.ttf"
            },
            183: (e, t, r) => {
                "use strict";
                e.exports = r.p + "9b9cda2e0026190f966e.woff"
            },
            218: (e, t, r) => {
                "use strict";
                e.exports = r.p + "f70a639cbeed9a568a71.woff2"
            },
            622: (e, t, r) => {
                "use strict";
                e.exports = r.p + "ee7a920801f345399ab3.eot"
            },
            966: (e, t, r) => {
                "use strict";
                e.exports = r.p + "e9965a5bea2b0cc5d196.ttf"
            },
            848: (e, t, r) => {
                "use strict";
                e.exports = r.p + "f8546a1001766fab0599.woff"
            },
            145: (e, t, r) => {
                "use strict";
                e.exports = r.p + "ba233c91aea580177871.woff2"
            },
            528: (e, t, r) => {
                "use strict";
                e.exports = r.p + "13d99e0dec3b8d5b37b2.eot"
            },
            742: (e, t, r) => {
                "use strict";
                e.exports = r.p + "a99afb8e63492ce7d632.ttf"
            },
            991: (e, t, r) => {
                "use strict";
                e.exports = r.p + "87e68eca6ff8f3ca37ac.woff"
            },
            721: (e, t, r) => {
                "use strict";
                e.exports = r.p + "f4434ed53758ac7fdd2c.woff2"
            },
            202: (e, t, r) => {
                "use strict";
                e.exports = r.p + "fc839f540f753b02e5ab.eot"
            },
            782: (e, t, r) => {
                "use strict";
                e.exports = r.p + "16ade9d4b11c99dd84c4.ttf"
            },
            426: (e, t, r) => {
                "use strict";
                e.exports = r.p + "5815083eff666e6ff73a.woff"
            },
            621: (e, t, r) => {
                "use strict";
                e.exports = r.p + "aa6fb710e0c3f87f3008.woff2"
            }
        },
        t = {};

    function r(a) {
        var i = t[a];
        if (void 0 !== i) return i.exports;
        var o = t[a] = {
            id: a,
            exports: {}
        };
        return e[a](o, o.exports, r), o.exports
    }
    r.m = e, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.p = "/", r.b = document.baseURI || self.location.href, r.nc = void 0, (() => {
        "use strict";
        r(904);
        var e = "undefined" == typeof arguments ? void 0 : arguments,
            t = void 0,
            a = document.querySelectorAll(".parallax_far_1"),
            i = document.querySelectorAll(".parallax_far_2"),
            o = document.querySelectorAll(".parallax_close_1"),
            n = document.querySelectorAll(".parallax_close_2"),
            m = function(e, t) {
                try {
                    var r = -e.parentElement.getBoundingClientRect().top / t;
                    e.classList.contains("hills") && (r = window.innerWidth > 768 ? Math.min(r, 0) : Math.min(r, 32)), e.classList.contains("mountain") && (r = window.innerWidth > 768 ? Math.min(r, 67) : Math.min(r, 130)), e.classList.contains("stones") && (r = window.innerWidth > 768 ? Math.min(r, -10) : Math.min(r, 4)), e.style.transform = "translateY(".concat(r, "px)")
                } catch (e) {}
            },
            s = function() {
                window.innerWidth > 768 ? (null == a || a.forEach((function(e) {
                    return m(e, 12)
                })), null == i || i.forEach((function(e) {
                    return m(e, 8)
                })), null == o || o.forEach((function(e) {
                    return m(e, -12)
                })), null == n || n.forEach((function(e) {
                    return m(e, -8)
                }))) : (null == a || a.forEach((function(e) {
                    return m(e, 24)
                })), null == i || i.forEach((function(e) {
                    return m(e, 16)
                })), null == o || o.forEach((function(e) {
                    return m(e, -24)
                })), null == n || n.forEach((function(e) {
                    return m(e, -16)
                })))
            };
        setTimeout(s, 1e3);
        var l, d, f, p, c = (l = s, 50, p = !1, function r() {
            if (p) return d = e, void(f = t);
            l.apply(t, e), p = !0, setTimeout((function() {
                p = !1, d && (r.apply(f, d), d = f = null)
            }), 50)
        });
        window.addEventListener("scroll", c), r(964);
        var u = r(379),
            h = r.n(u),
            g = r(795),
            w = r.n(g),
            y = r(569),
            x = r.n(y),
            b = r(565),
            v = r.n(b),
            _ = r(216),
            k = r.n(_),
            z = r(589),
            F = r.n(z),
            G = r(61),
            L = {};
        L.styleTagTransform = F(), L.setAttributes = v(), L.insert = x().bind(null, "head"), L.domAPI = w(), L.insertStyleElement = k(), h()(G.Z, L), G.Z && G.Z.locals && G.Z.locals
    })()
})();