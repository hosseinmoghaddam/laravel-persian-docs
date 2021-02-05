/*! For license information please see app.js.LICENSE.txt */
!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 0)
}({
    0: function (e, t, n) {
        n("bUC5"), e.exports = n("Ge+w")
    }, "3yRE": function (e, t, n) {
        e.exports = function () {
            "use strict";

            function e(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function n(n) {
                for (var r = 1; r < arguments.length; r++) {
                    var i = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? t(Object(i), !0).forEach((function (t) {
                        e(n, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return n
            }

            function r(e) {
                return Array.from(new Set(e))
            }

            function i() {
                return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")
            }

            function a(e, t) {
                return e == t
            }

            function s(e, t) {
                "template" !== e.tagName.toLowerCase() ? console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`) : 1 !== e.content.childElementCount && console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child element.`)
            }

            function o(e) {
                return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
            }

            function l(e, t) {
                var n;
                return function () {
                    var r = this, i = arguments, a = function () {
                        n = null, e.apply(r, i)
                    };
                    clearTimeout(n), n = setTimeout(a, t)
                }
            }

            function u(e, t, n = {}) {
                return "function" == typeof e ? e.call(t) : new Function(["$data", ...Object.keys(n)], `var __alpine_result; with($data) { __alpine_result = ${e} }; return __alpine_result`)(t, ...Object.values(n))
            }

            const c = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;

            function d(e) {
                const t = m(e.name);
                return c.test(t)
            }

            function f(e, t, n) {
                let r = Array.from(e.attributes).filter(d).map(p), i = r.filter(e => "spread" === e.type)[0];
                if (i) {
                    let e = u(i.expression, t.$data);
                    r = r.concat(Object.entries(e).map(([e, t]) => p({name: e, value: t})))
                }
                return n ? r.filter(e => e.type === n) : function (e) {
                    let t = ["bind", "model", "show", "catch-all"];
                    return e.sort((e, n) => {
                        let r = -1 === t.indexOf(e.type) ? "catch-all" : e.type,
                            i = -1 === t.indexOf(n.type) ? "catch-all" : n.type;
                        return t.indexOf(r) - t.indexOf(i)
                    })
                }(r)
            }

            function p({name: e, value: t}) {
                const n = m(e), r = n.match(c), i = n.match(/:([a-zA-Z0-9\-:]+)/),
                    a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
                return {
                    type: r ? r[1] : null,
                    value: i ? i[1] : null,
                    modifiers: a.map(e => e.replace(".", "")),
                    expression: t
                }
            }

            function m(e) {
                return e.startsWith("@") ? e.replace("@", "x-on:") : e.startsWith(":") ? e.replace(":", "x-bind:") : e
            }

            function h(e, t = Boolean) {
                return e.split(" ").filter(t)
            }

            function g(e, t, n, r, i = !1) {
                if (i) return t();
                if (e.__x_transition && "in" === e.__x_transition.type) return;
                const a = f(e, r, "transition"), s = f(e, r, "show")[0];
                if (s && s.modifiers.includes("transition")) {
                    let r = s.modifiers;
                    if (r.includes("out") && !r.includes("in")) return t();
                    const i = r.includes("in") && r.includes("out");
                    r = i ? r.filter((e, t) => t < r.indexOf("out")) : r, function (e, t, n, r) {
                        const i = {
                            duration: b(t, "duration", 150),
                            origin: b(t, "origin", "center"),
                            first: {opacity: 0, scale: b(t, "scale", 95)},
                            second: {opacity: 1, scale: 100}
                        };
                        E(e, t, n, () => {
                        }, r, i, "in")
                    }(e, r, t, n)
                } else a.some(e => ["enter", "enter-start", "enter-end"].includes(e.value)) ? function (e, t, n, r, i) {
                    const a = h(y((n.find(e => "enter" === e.value) || {expression: ""}).expression, e, t)),
                        s = h(y((n.find(e => "enter-start" === e.value) || {expression: ""}).expression, e, t)),
                        o = h(y((n.find(e => "enter-end" === e.value) || {expression: ""}).expression, e, t));
                    S(e, a, s, o, r, () => {
                    }, "in", i)
                }(e, r, a, t, n) : t()
            }

            function v(e, t, n, r, i = !1) {
                if (i) return t();
                if (e.__x_transition && "out" === e.__x_transition.type) return;
                const a = f(e, r, "transition"), s = f(e, r, "show")[0];
                if (s && s.modifiers.includes("transition")) {
                    let r = s.modifiers;
                    if (r.includes("in") && !r.includes("out")) return t();
                    const i = r.includes("in") && r.includes("out");
                    r = i ? r.filter((e, t) => t > r.indexOf("out")) : r, function (e, t, n, r, i) {
                        const a = {
                            duration: n ? b(t, "duration", 150) : b(t, "duration", 150) / 2,
                            origin: b(t, "origin", "center"),
                            first: {opacity: 1, scale: 100},
                            second: {opacity: 0, scale: b(t, "scale", 95)}
                        };
                        E(e, t, () => {
                        }, r, i, a, "out")
                    }(e, r, i, t, n)
                } else a.some(e => ["leave", "leave-start", "leave-end"].includes(e.value)) ? function (e, t, n, r, i) {
                    const a = h(y((n.find(e => "leave" === e.value) || {expression: ""}).expression, e, t)),
                        s = h(y((n.find(e => "leave-start" === e.value) || {expression: ""}).expression, e, t)),
                        o = h(y((n.find(e => "leave-end" === e.value) || {expression: ""}).expression, e, t));
                    S(e, a, s, o, () => {
                    }, r, "out", i)
                }(e, r, a, t, n) : t()
            }

            function b(e, t, n) {
                if (-1 === e.indexOf(t)) return n;
                const r = e[e.indexOf(t) + 1];
                if (!r) return n;
                if ("scale" === t && !A(r)) return n;
                if ("duration" === t) {
                    let e = r.match(/([0-9]+)ms/);
                    if (e) return e[1]
                }
                return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
            }

            function E(e, t, n, r, i, a, s) {
                e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                const o = e.style.opacity, l = e.style.transform, u = e.style.transformOrigin,
                    c = !t.includes("opacity") && !t.includes("scale"), d = c || t.includes("opacity"),
                    f = c || t.includes("scale"), p = {
                        start() {
                            d && (e.style.opacity = a.first.opacity), f && (e.style.transform = `scale(${a.first.scale / 100})`)
                        }, during() {
                            f && (e.style.transformOrigin = a.origin), e.style.transitionProperty = [d ? "opacity" : "", f ? "transform" : ""].join(" ").trim(), e.style.transitionDuration = a.duration / 1e3 + "s", e.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)"
                        }, show() {
                            n()
                        }, end() {
                            d && (e.style.opacity = a.second.opacity), f && (e.style.transform = `scale(${a.second.scale / 100})`)
                        }, hide() {
                            r()
                        }, cleanup() {
                            d && (e.style.opacity = o), f && (e.style.transform = l), f && (e.style.transformOrigin = u), e.style.transitionProperty = null, e.style.transitionDuration = null, e.style.transitionTimingFunction = null
                        }
                    };
                O(e, p, s, i)
            }

            const y = (e, t, n) => "function" == typeof e ? n.evaluateReturnExpression(t, e) : e;

            function S(e, t, n, r, i, a, s, o) {
                e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                const l = e.__x_original_classes || [], u = {
                    start() {
                        e.classList.add(...n)
                    }, during() {
                        e.classList.add(...t)
                    }, show() {
                        i()
                    }, end() {
                        e.classList.remove(...n.filter(e => !l.includes(e))), e.classList.add(...r)
                    }, hide() {
                        a()
                    }, cleanup() {
                        e.classList.remove(...t.filter(e => !l.includes(e))), e.classList.remove(...r.filter(e => !l.includes(e)))
                    }
                };
                O(e, u, s, o)
            }

            function O(e, t, n, r) {
                const i = x(() => {
                    t.hide(), e.isConnected && t.cleanup(), delete e.__x_transition
                });
                e.__x_transition = {
                    type: n, cancel: x(() => {
                        r("cancelled"), i()
                    }), finish: i, nextFrame: null
                }, t.start(), t.during(), e.__x_transition.nextFrame = requestAnimationFrame(() => {
                    let n = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""));
                    0 === n && (n = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), t.show(), e.__x_transition.nextFrame = requestAnimationFrame(() => {
                        t.end(), setTimeout(e.__x_transition.finish, n)
                    })
                })
            }

            function A(e) {
                return !Array.isArray(e) && !isNaN(e)
            }

            function x(e) {
                let t = !1;
                return function () {
                    t || (t = !0, e.apply(this, arguments))
                }
            }

            function T(e, t, r, i, a) {
                s(t, "x-for");
                let o = _("function" == typeof r ? e.evaluateReturnExpression(t, r) : r), l = function (e, t, n, r) {
                    let i = f(t, e, "if")[0];
                    if (i && !e.evaluateReturnExpression(t, i.expression)) return [];
                    let a = e.evaluateReturnExpression(t, n.items, r);
                    return A(a) && a > 0 && (a = Array.from(Array(a).keys(), e => e + 1)), a
                }(e, t, o, a), u = t;
                l.forEach((r, s) => {
                    let c = function (e, t, r, i, a) {
                        let s = a ? n({}, a) : {};
                        return s[e.item] = t, e.index && (s[e.index] = r), e.collection && (s[e.collection] = i), s
                    }(o, r, s, l, a()), d = function (e, t, n, r) {
                        let i = f(t, e, "bind").filter(e => "key" === e.value)[0];
                        return i ? e.evaluateReturnExpression(t, i.expression, () => r) : n
                    }(e, t, s, c), p = function (e, t) {
                        if (!e) return;
                        if (e.__x_for_key === t) return e;
                        let n = e;
                        for (; n;) {
                            if (n.__x_for_key === t) return n.parentElement.insertBefore(n, e);
                            n = !(!n.nextElementSibling || void 0 === n.nextElementSibling.__x_for_key) && n.nextElementSibling
                        }
                    }(u.nextElementSibling, d);
                    p ? (delete p.__x_for_key, p.__x_for = c, e.updateElements(p, () => p.__x_for)) : (p = function (e, t) {
                        let n = document.importNode(e.content, !0);
                        return t.parentElement.insertBefore(n, t.nextElementSibling), t.nextElementSibling
                    }(t, u), g(p, () => {
                    }, () => {
                    }, e, i), p.__x_for = c, e.initializeElements(p, () => p.__x_for)), u = p, u.__x_for_key = d
                }), function (e, t) {
                    for (var n = !(!e.nextElementSibling || void 0 === e.nextElementSibling.__x_for_key) && e.nextElementSibling; n;) {
                        let e = n, r = n.nextElementSibling;
                        v(n, () => {
                            e.remove()
                        }, () => {
                        }, t), n = !(!r || void 0 === r.__x_for_key) && r
                    }
                }(u, e)
            }

            function _(e) {
                let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, n = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
                if (!n) return;
                let r = {};
                r.items = n[2].trim();
                let i = n[1].trim().replace(/^\(|\)$/g, ""), a = i.match(t);
                return a ? (r.item = i.replace(t, "").trim(), r.index = a[1].trim(), a[2] && (r.collection = a[2].trim())) : r.item = i, r
            }

            function w(e, t, n, i, s, l, u) {
                var c = e.evaluateReturnExpression(t, i, s);
                if ("value" === n) {
                    if (pe.ignoreFocusedForValueBinding && document.activeElement.isSameNode(t)) return;
                    if (void 0 === c && i.match(/\./) && (c = ""), "radio" === t.type) void 0 === t.attributes.value && "bind" === l ? t.value = c : "bind" !== l && (t.checked = a(t.value, c)); else if ("checkbox" === t.type) "boolean" == typeof c || [null, void 0].includes(c) || "bind" !== l ? "bind" !== l && (Array.isArray(c) ? t.checked = c.some(e => a(e, t.value)) : t.checked = !!c) : t.value = String(c); else if ("SELECT" === t.tagName) !function (e, t) {
                        const n = [].concat(t).map(e => e + "");
                        Array.from(e.options).forEach(e => {
                            e.selected = n.includes(e.value || e.text)
                        })
                    }(t, c); else {
                        if (t.value === c) return;
                        t.value = c
                    }
                } else if ("class" === n) if (Array.isArray(c)) {
                    const e = t.__x_original_classes || [];
                    t.setAttribute("class", r(e.concat(c)).join(" "))
                } else if ("object" == typeof c) Object.keys(c).sort((e, t) => c[e] - c[t]).forEach(e => {
                    c[e] ? h(e).forEach(e => t.classList.add(e)) : h(e).forEach(e => t.classList.remove(e))
                }); else {
                    const e = t.__x_original_classes || [], n = h(c);
                    t.setAttribute("class", r(e.concat(n)).join(" "))
                } else n = u.includes("camel") ? o(n) : n, [null, void 0, !1].includes(c) ? t.removeAttribute(n) : function (e) {
                    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
                }(n) ? P(t, n, n) : P(t, n, c)
            }

            function P(e, t, n) {
                e.getAttribute(t) != n && e.setAttribute(t, n)
            }

            function N(e, t, n, r, i, a = {}) {
                const s = {passive: r.includes("passive")};
                if (r.includes("camel") && (n = o(n)), r.includes("away")) {
                    let o = l => {
                        t.contains(l.target) || t.offsetWidth < 1 && t.offsetHeight < 1 || (I(e, i, l, a), r.includes("once") && document.removeEventListener(n, o, s))
                    };
                    document.addEventListener(n, o, s)
                } else {
                    let o = r.includes("window") ? window : r.includes("document") ? document : t, u = l => {
                        o !== window && o !== document || document.body.contains(t) ? function (e) {
                            return ["keydown", "keyup"].includes(e)
                        }(n) && function (e, t) {
                            let n = t.filter(e => !["window", "document", "prevent", "stop"].includes(e));
                            if (n.includes("debounce")) {
                                let e = n.indexOf("debounce");
                                n.splice(e, A((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                            }
                            if (0 === n.length) return !1;
                            if (1 === n.length && n[0] === k(e.key)) return !1;
                            const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(e => n.includes(e));
                            return n = n.filter(e => !r.includes(e)), !(r.length > 0 && r.filter(t => ("cmd" !== t && "super" !== t || (t = "meta"), e[t + "Key"])).length === r.length && n[0] === k(e.key))
                        }(l, r) || (r.includes("prevent") && l.preventDefault(), r.includes("stop") && l.stopPropagation(), r.includes("self") && l.target !== t) || I(e, i, l, a).then(e => {
                            !1 === e ? l.preventDefault() : r.includes("once") && o.removeEventListener(n, u, s)
                        }) : o.removeEventListener(n, u, s)
                    };
                    if (r.includes("debounce")) {
                        let e = r[r.indexOf("debounce") + 1] || "invalid-wait",
                            t = A(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                        u = l(u, t)
                    }
                    o.addEventListener(n, u, s)
                }
            }

            function I(e, t, r, i) {
                return e.evaluateCommandExpression(r.target, t, () => n(n({}, i()), {}, {$event: r}))
            }

            function k(e) {
                switch (e) {
                    case"/":
                        return "slash";
                    case" ":
                    case"Spacebar":
                        return "space";
                    default:
                        return e && e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
                }
            }

            function R(e, t, n) {
                return "radio" === e.type && (e.hasAttribute("name") || e.setAttribute("name", n)), (n, r) => {
                    if (n instanceof CustomEvent && n.detail) return n.detail;
                    if ("checkbox" === e.type) {
                        if (Array.isArray(r)) {
                            const e = t.includes("number") ? L(n.target.value) : n.target.value;
                            return n.target.checked ? r.concat([e]) : r.filter(t => !a(t, e))
                        }
                        return n.target.checked
                    }
                    if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(e => L(e.value || e.text)) : Array.from(n.target.selectedOptions).map(e => e.value || e.text);
                    {
                        const e = n.target.value;
                        return t.includes("number") ? L(e) : t.includes("trim") ? e.trim() : e
                    }
                }
            }

            function L(e) {
                const t = e ? parseFloat(e) : null;
                return A(t) ? t : e
            }

            const {isArray: C} = Array, {
                getPrototypeOf: D,
                create: F,
                defineProperty: $,
                defineProperties: j,
                isExtensible: M,
                getOwnPropertyDescriptor: U,
                getOwnPropertyNames: B,
                getOwnPropertySymbols: G,
                preventExtensions: q,
                hasOwnProperty: H
            } = Object, {push: z, concat: Y, map: X} = Array.prototype;

            function W(e) {
                return void 0 === e
            }

            function K(e) {
                return "function" == typeof e
            }

            const V = new WeakMap;

            function Z(e, t) {
                V.set(e, t)
            }

            const J = e => V.get(e) || e;

            function Q(e, t) {
                return e.valueIsObservable(t) ? e.getProxy(t) : t
            }

            function ee(e, t, n) {
                Y.call(B(n), G(n)).forEach(r => {
                    let i = U(n, r);
                    i.configurable || (i = ce(e, i, Q)), $(t, r, i)
                }), q(t)
            }

            class te {
                constructor(e, t) {
                    this.originalTarget = t, this.membrane = e
                }

                get(e, t) {
                    const {originalTarget: n, membrane: r} = this, i = n[t], {valueObserved: a} = r;
                    return a(n, t), r.getProxy(i)
                }

                set(e, t, n) {
                    const {originalTarget: r, membrane: {valueMutated: i}} = this;
                    return r[t] !== n ? (r[t] = n, i(r, t)) : "length" === t && C(r) && i(r, t), !0
                }

                deleteProperty(e, t) {
                    const {originalTarget: n, membrane: {valueMutated: r}} = this;
                    return delete n[t], r(n, t), !0
                }

                apply(e, t, n) {
                }

                construct(e, t, n) {
                }

                has(e, t) {
                    const {originalTarget: n, membrane: {valueObserved: r}} = this;
                    return r(n, t), t in n
                }

                ownKeys(e) {
                    const {originalTarget: t} = this;
                    return Y.call(B(t), G(t))
                }

                isExtensible(e) {
                    const t = M(e);
                    if (!t) return t;
                    const {originalTarget: n, membrane: r} = this, i = M(n);
                    return i || ee(r, e, n), i
                }

                setPrototypeOf(e, t) {
                }

                getPrototypeOf(e) {
                    const {originalTarget: t} = this;
                    return D(t)
                }

                getOwnPropertyDescriptor(e, t) {
                    const {originalTarget: n, membrane: r} = this, {valueObserved: i} = this.membrane;
                    i(n, t);
                    let a = U(n, t);
                    if (W(a)) return a;
                    const s = U(e, t);
                    return W(s) ? (a = ce(r, a, Q), a.configurable || $(e, t, a), a) : s
                }

                preventExtensions(e) {
                    const {originalTarget: t, membrane: n} = this;
                    return ee(n, e, t), q(t), !0
                }

                defineProperty(e, t, n) {
                    const {originalTarget: r, membrane: i} = this, {valueMutated: a} = i, {configurable: s} = n;
                    if (H.call(n, "writable") && !H.call(n, "value")) {
                        const e = U(r, t);
                        n.value = e.value
                    }
                    return $(r, t, function (e) {
                        return H.call(e, "value") && (e.value = J(e.value)), e
                    }(n)), !1 === s && $(e, t, ce(i, n, Q)), a(r, t), !0
                }
            }

            function ne(e, t) {
                return e.valueIsObservable(t) ? e.getReadOnlyProxy(t) : t
            }

            class re {
                constructor(e, t) {
                    this.originalTarget = t, this.membrane = e
                }

                get(e, t) {
                    const {membrane: n, originalTarget: r} = this, i = r[t], {valueObserved: a} = n;
                    return a(r, t), n.getReadOnlyProxy(i)
                }

                set(e, t, n) {
                    return !1
                }

                deleteProperty(e, t) {
                    return !1
                }

                apply(e, t, n) {
                }

                construct(e, t, n) {
                }

                has(e, t) {
                    const {originalTarget: n, membrane: {valueObserved: r}} = this;
                    return r(n, t), t in n
                }

                ownKeys(e) {
                    const {originalTarget: t} = this;
                    return Y.call(B(t), G(t))
                }

                setPrototypeOf(e, t) {
                }

                getOwnPropertyDescriptor(e, t) {
                    const {originalTarget: n, membrane: r} = this, {valueObserved: i} = r;
                    i(n, t);
                    let a = U(n, t);
                    if (W(a)) return a;
                    const s = U(e, t);
                    return W(s) ? (a = ce(r, a, ne), H.call(a, "set") && (a.set = void 0), a.configurable || $(e, t, a), a) : s
                }

                preventExtensions(e) {
                    return !1
                }

                defineProperty(e, t, n) {
                    return !1
                }
            }

            function ie(e) {
                let t = void 0;
                return C(e) ? t = [] : "object" == typeof e && (t = {}), t
            }

            const ae = Object.prototype;

            function se(e) {
                if (null === e) return !1;
                if ("object" != typeof e) return !1;
                if (C(e)) return !0;
                const t = D(e);
                return t === ae || null === t || null === D(t)
            }

            const oe = (e, t) => {
            }, le = (e, t) => {
            }, ue = e => e;

            function ce(e, t, n) {
                const {set: r, get: i} = t;
                return H.call(t, "value") ? t.value = n(e, t.value) : (W(i) || (t.get = function () {
                    return n(e, i.call(J(this)))
                }), W(r) || (t.set = function (t) {
                    r.call(J(this), e.unwrapProxy(t))
                })), t
            }

            class de {
                constructor(e) {
                    if (this.valueDistortion = ue, this.valueMutated = le, this.valueObserved = oe, this.valueIsObservable = se, this.objectGraph = new WeakMap, !W(e)) {
                        const {valueDistortion: t, valueMutated: n, valueObserved: r, valueIsObservable: i} = e;
                        this.valueDistortion = K(t) ? t : ue, this.valueMutated = K(n) ? n : le, this.valueObserved = K(r) ? r : oe, this.valueIsObservable = K(i) ? i : se
                    }
                }

                getProxy(e) {
                    const t = J(e), n = this.valueDistortion(t);
                    if (this.valueIsObservable(n)) {
                        const r = this.getReactiveState(t, n);
                        return r.readOnly === e ? e : r.reactive
                    }
                    return n
                }

                getReadOnlyProxy(e) {
                    e = J(e);
                    const t = this.valueDistortion(e);
                    return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t
                }

                unwrapProxy(e) {
                    return J(e)
                }

                getReactiveState(e, t) {
                    const {objectGraph: n} = this;
                    let r = n.get(t);
                    if (r) return r;
                    const i = this;
                    return r = {
                        get reactive() {
                            const n = new te(i, t), r = new Proxy(ie(t), n);
                            return Z(r, e), $(this, "reactive", {value: r}), r
                        }, get readOnly() {
                            const n = new re(i, t), r = new Proxy(ie(t), n);
                            return Z(r, e), $(this, "readOnly", {value: r}), r
                        }
                    }, n.set(t, r), r
                }
            }

            class fe {
                constructor(e, t = null) {
                    this.$el = e;
                    const n = this.$el.getAttribute("x-data"), r = "" === n ? "{}" : n,
                        i = this.$el.getAttribute("x-init");
                    let a = {$el: this.$el}, s = t ? t.$el : this.$el;
                    Object.entries(pe.magicProperties).forEach(([e, t]) => {
                        Object.defineProperty(a, "$" + e, {
                            get: function () {
                                return t(s)
                            }
                        })
                    }), this.unobservedData = t ? t.getUnobservedData() : u(r, a);
                    let {membrane: o, data: l} = this.wrapDataInObservable(this.unobservedData);
                    var c;
                    this.$data = l, this.membrane = o, this.unobservedData.$el = this.$el, this.unobservedData.$refs = this.getRefsProxy(), this.nextTickStack = [], this.unobservedData.$nextTick = e => {
                        this.nextTickStack.push(e)
                    }, this.watchers = {}, this.unobservedData.$watch = (e, t) => {
                        this.watchers[e] || (this.watchers[e] = []), this.watchers[e].push(t)
                    }, Object.entries(pe.magicProperties).forEach(([e, t]) => {
                        Object.defineProperty(this.unobservedData, "$" + e, {
                            get: function () {
                                return t(s)
                            }
                        })
                    }), this.showDirectiveStack = [], this.showDirectiveLastElement, t || pe.onBeforeComponentInitializeds.forEach(e => e(this)), i && !t && (this.pauseReactivity = !0, c = this.evaluateReturnExpression(this.$el, i), this.pauseReactivity = !1), this.initializeElements(this.$el), this.listenForNewElementsToInitialize(), "function" == typeof c && c.call(this.$data), t || setTimeout(() => {
                        pe.onComponentInitializeds.forEach(e => e(this))
                    }, 0)
                }

                getUnobservedData() {
                    return function (e, t) {
                        let n = e.unwrapProxy(t), r = {};
                        return Object.keys(n).forEach(e => {
                            ["$el", "$refs", "$nextTick", "$watch"].includes(e) || (r[e] = n[e])
                        }), r
                    }(this.membrane, this.$data)
                }

                wrapDataInObservable(e) {
                    var t = this;
                    let n = l((function () {
                        t.updateElements(t.$el)
                    }), 0);
                    return function (e, t) {
                        let n = new de({
                            valueMutated(e, n) {
                                t(e, n)
                            }
                        });
                        return {data: n.getProxy(e), membrane: n}
                    }(e, (e, r) => {
                        t.watchers[r] ? t.watchers[r].forEach(t => t(e[r])) : Array.isArray(e) ? Object.keys(t.watchers).forEach(n => {
                            let i = n.split(".");
                            "length" !== r && i.reduce((r, i) => (Object.is(e, r[i]) && t.watchers[n].forEach(t => t(e)), r[i]), t.unobservedData)
                        }) : Object.keys(t.watchers).filter(e => e.includes(".")).forEach(n => {
                            let i = n.split(".");
                            r === i[i.length - 1] && i.reduce((i, a) => (Object.is(e, i) && t.watchers[n].forEach(t => t(e[r])), i[a]), t.unobservedData)
                        }), t.pauseReactivity || n()
                    })
                }

                walkAndSkipNestedComponents(e, t, n = (() => {
                })) {
                    !function e(t, n) {
                        if (!1 === n(t)) return;
                        let r = t.firstElementChild;
                        for (; r;) e(r, n), r = r.nextElementSibling
                    }(e, e => e.hasAttribute("x-data") && !e.isSameNode(this.$el) ? (e.__x || n(e), !1) : t(e))
                }

                initializeElements(e, t = (() => {
                })) {
                    this.walkAndSkipNestedComponents(e, e => void 0 === e.__x_for_key && void 0 === e.__x_inserted_me && void this.initializeElement(e, t), e => {
                        e.__x = new fe(e)
                    }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
                }

                initializeElement(e, t) {
                    e.hasAttribute("class") && f(e, this).length > 0 && (e.__x_original_classes = h(e.getAttribute("class"))), this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t)
                }

                updateElements(e, t = (() => {
                })) {
                    this.walkAndSkipNestedComponents(e, e => {
                        if (void 0 !== e.__x_for_key && !e.isSameNode(this.$el)) return !1;
                        this.updateElement(e, t)
                    }, e => {
                        e.__x = new fe(e)
                    }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
                }

                executeAndClearNextTickStack(e) {
                    e === this.$el && this.nextTickStack.length > 0 && requestAnimationFrame(() => {
                        for (; this.nextTickStack.length > 0;) this.nextTickStack.shift()()
                    })
                }

                executeAndClearRemainingShowDirectiveStack() {
                    this.showDirectiveStack.reverse().map(e => new Promise((t, n) => {
                        e(t, n)
                    })).reduce((e, t) => e.then(() => t.then(e => {
                        e()
                    })), Promise.resolve(() => {
                    })).catch(e => {
                        if ("cancelled" !== e) throw e
                    }), this.showDirectiveStack = [], this.showDirectiveLastElement = void 0
                }

                updateElement(e, t) {
                    this.resolveBoundAttributes(e, !1, t)
                }

                registerListeners(e, t) {
                    f(e, this).forEach(({type: r, value: i, modifiers: a, expression: s}) => {
                        switch (r) {
                            case"on":
                                N(this, e, i, a, s, t);
                                break;
                            case"model":
                                !function (e, t, r, i, a) {
                                    var s = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || r.includes("lazy") ? "change" : "input";
                                    N(e, t, s, r, `${i} = rightSideOfExpression($event, ${i})`, () => n(n({}, a()), {}, {rightSideOfExpression: R(t, r, i)}))
                                }(this, e, a, s, t)
                        }
                    })
                }

                resolveBoundAttributes(e, t = !1, n) {
                    let r = f(e, this);
                    r.forEach(({type: i, value: a, modifiers: o, expression: l}) => {
                        switch (i) {
                            case"model":
                                w(this, e, "value", l, n, i, o);
                                break;
                            case"bind":
                                if ("template" === e.tagName.toLowerCase() && "key" === a) return;
                                w(this, e, a, l, n, i, o);
                                break;
                            case"text":
                                var u = this.evaluateReturnExpression(e, l, n);
                                !function (e, t, n) {
                                    void 0 === t && n.match(/\./) && (t = ""), e.textContent = t
                                }(e, u, l);
                                break;
                            case"html":
                                !function (e, t, n, r) {
                                    t.innerHTML = e.evaluateReturnExpression(t, n, r)
                                }(this, e, l, n);
                                break;
                            case"show":
                                u = this.evaluateReturnExpression(e, l, n), function (e, t, n, r, i = !1) {
                                    const a = () => {
                                        t.style.display = "none", t.__x_is_shown = !1
                                    }, s = () => {
                                        1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display"), t.__x_is_shown = !0
                                    };
                                    if (!0 === i) return void (n ? s() : a());
                                    const o = (r, i) => {
                                        n ? (("none" === t.style.display || t.__x_transition) && g(t, () => {
                                            s()
                                        }, i, e), r(() => {
                                        })) : "none" !== t.style.display ? v(t, () => {
                                            r(() => {
                                                a()
                                            })
                                        }, i, e) : r(() => {
                                        })
                                    };
                                    r.includes("immediate") ? o(e => e(), () => {
                                    }) : (e.showDirectiveLastElement && !e.showDirectiveLastElement.contains(t) && e.executeAndClearRemainingShowDirectiveStack(), e.showDirectiveStack.push(o), e.showDirectiveLastElement = t)
                                }(this, e, u, o, t);
                                break;
                            case"if":
                                if (r.some(e => "for" === e.type)) return;
                                u = this.evaluateReturnExpression(e, l, n), function (e, t, n, r, i) {
                                    s(t, "x-if");
                                    const a = t.nextElementSibling && !0 === t.nextElementSibling.__x_inserted_me;
                                    if (!n || a && !t.__x_transition) !n && a && v(t.nextElementSibling, () => {
                                        t.nextElementSibling.remove()
                                    }, () => {
                                    }, e, r); else {
                                        const n = document.importNode(t.content, !0);
                                        t.parentElement.insertBefore(n, t.nextElementSibling), g(t.nextElementSibling, () => {
                                        }, () => {
                                        }, e, r), e.initializeElements(t.nextElementSibling, i), t.nextElementSibling.__x_inserted_me = !0
                                    }
                                }(this, e, u, t, n);
                                break;
                            case"for":
                                T(this, e, l, t, n);
                                break;
                            case"cloak":
                                e.removeAttribute("x-cloak")
                        }
                    })
                }

                evaluateReturnExpression(e, t, r = (() => {
                })) {
                    return u(t, this.$data, n(n({}, r()), {}, {$dispatch: this.getDispatchFunction(e)}))
                }

                evaluateCommandExpression(e, t, r = (() => {
                })) {
                    return function (e, t, n = {}) {
                        if ("function" == typeof e) return Promise.resolve(e.call(t, n.$event));
                        let r = Function;
                        if (r = Object.getPrototypeOf((async function () {
                        })).constructor, Object.keys(t).includes(e)) {
                            let r = new Function(["dataContext", ...Object.keys(n)], `with(dataContext) { return ${e} }`)(t, ...Object.values(n));
                            return "function" == typeof r ? Promise.resolve(r.call(t, n.$event)) : Promise.resolve()
                        }
                        return Promise.resolve(new r(["dataContext", ...Object.keys(n)], `with(dataContext) { ${e} }`)(t, ...Object.values(n)))
                    }(t, this.$data, n(n({}, r()), {}, {$dispatch: this.getDispatchFunction(e)}))
                }

                getDispatchFunction(e) {
                    return (t, n = {}) => {
                        e.dispatchEvent(new CustomEvent(t, {detail: n, bubbles: !0}))
                    }
                }

                listenForNewElementsToInitialize() {
                    const e = this.$el;
                    new MutationObserver(e => {
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t].target.closest("[x-data]");
                            if (n && n.isSameNode(this.$el)) {
                                if ("attributes" === e[t].type && "x-data" === e[t].attributeName) {
                                    const n = u(e[t].target.getAttribute("x-data") || "{}", {$el: this.$el});
                                    Object.keys(n).forEach(e => {
                                        this.$data[e] !== n[e] && (this.$data[e] = n[e])
                                    })
                                }
                                e[t].addedNodes.length > 0 && e[t].addedNodes.forEach(e => {
                                    1 !== e.nodeType || e.__x_inserted_me || (!e.matches("[x-data]") || e.__x ? this.initializeElements(e) : e.__x = new fe(e))
                                })
                            }
                        }
                    }).observe(e, {childList: !0, attributes: !0, subtree: !0})
                }

                getRefsProxy() {
                    var e = this;
                    return new Proxy({}, {
                        get(t, n) {
                            return "$isAlpineProxy" === n || (e.walkAndSkipNestedComponents(e.$el, e => {
                                e.hasAttribute("x-ref") && e.getAttribute("x-ref") === n && (r = e)
                            }), r);
                            var r
                        }
                    })
                }
            }

            const pe = {
                version: "2.7.3",
                pauseMutationObserver: !1,
                magicProperties: {},
                onComponentInitializeds: [],
                onBeforeComponentInitializeds: [],
                ignoreFocusedForValueBinding: !1,
                start: async function () {
                    i() || await new Promise(e => {
                        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
                    }), this.discoverComponents(e => {
                        this.initializeComponent(e)
                    }), document.addEventListener("turbolinks:load", () => {
                        this.discoverUninitializedComponents(e => {
                            this.initializeComponent(e)
                        })
                    }), this.listenForNewUninitializedComponentsAtRunTime()
                },
                discoverComponents: function (e) {
                    document.querySelectorAll("[x-data]").forEach(t => {
                        e(t)
                    })
                },
                discoverUninitializedComponents: function (e, t = null) {
                    const n = (t || document).querySelectorAll("[x-data]");
                    Array.from(n).filter(e => void 0 === e.__x).forEach(t => {
                        e(t)
                    })
                },
                listenForNewUninitializedComponentsAtRunTime: function () {
                    const e = document.querySelector("body");
                    new MutationObserver(e => {
                        if (!this.pauseMutationObserver) for (let t = 0; t < e.length; t++) e[t].addedNodes.length > 0 && e[t].addedNodes.forEach(e => {
                            1 === e.nodeType && (e.parentElement && e.parentElement.closest("[x-data]") || this.discoverUninitializedComponents(e => {
                                this.initializeComponent(e)
                            }, e.parentElement))
                        })
                    }).observe(e, {childList: !0, attributes: !0, subtree: !0})
                },
                initializeComponent: function (e) {
                    if (!e.__x) try {
                        e.__x = new fe(e)
                    } catch (e) {
                        setTimeout(() => {
                            throw e
                        }, 0)
                    }
                },
                clone: function (e, t) {
                    t.__x || (t.__x = new fe(t, e))
                },
                addMagicProperty: function (e, t) {
                    this.magicProperties[e] = t
                },
                onComponentInitialized: function (e) {
                    this.onComponentInitializeds.push(e)
                },
                onBeforeComponentInitialized: function (e) {
                    this.onBeforeComponentInitializeds.push(e)
                }
            };
            return i() || (window.Alpine = pe, window.deferLoadingAlpine ? window.deferLoadingAlpine((function () {
                window.Alpine.start()
            })) : window.Alpine.start()), pe
        }()
    }, EyDb: function (e, t, n) {
        e.exports = function () {
            "use strict";

            function e(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function n(n) {
                for (var r = 1; r < arguments.length; r++) {
                    var i = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? t(Object(i), !0).forEach((function (t) {
                        e(n, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return n
            }

            function r(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                        var n = [], r = !0, i = !1, a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0) ;
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                r || null == o.return || o.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return n
                    }
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function i(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function a(e) {
                var t, n = "algoliasearch-client-js-".concat(e.key), i = function () {
                    return void 0 === t && (t = e.localStorage || window.localStorage), t
                }, a = function () {
                    return JSON.parse(i().getItem(n) || "{}")
                };
                return {
                    get: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            miss: function () {
                                return Promise.resolve()
                            }
                        };
                        return Promise.resolve().then((function () {
                            var n = JSON.stringify(e), r = a()[n];
                            return Promise.all([r || t(), void 0 !== r])
                        })).then((function (e) {
                            var t = r(e, 2), i = t[0], a = t[1];
                            return Promise.all([i, a || n.miss(i)])
                        })).then((function (e) {
                            return r(e, 1)[0]
                        }))
                    }, set: function (e, t) {
                        return Promise.resolve().then((function () {
                            var r = a();
                            return r[JSON.stringify(e)] = t, i().setItem(n, JSON.stringify(r)), t
                        }))
                    }, delete: function (e) {
                        return Promise.resolve().then((function () {
                            var t = a();
                            delete t[JSON.stringify(e)], i().setItem(n, JSON.stringify(t))
                        }))
                    }, clear: function () {
                        return Promise.resolve().then((function () {
                            i().removeItem(n)
                        }))
                    }
                }
            }

            function s(e) {
                var t = i(e.caches), n = t.shift();
                return void 0 === n ? {
                    get: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            miss: function () {
                                return Promise.resolve()
                            }
                        }, i = t();
                        return i.then((function (e) {
                            return Promise.all([e, n.miss(e)])
                        })).then((function (e) {
                            return r(e, 1)[0]
                        }))
                    }, set: function (e, t) {
                        return Promise.resolve(t)
                    }, delete: function (e) {
                        return Promise.resolve()
                    }, clear: function () {
                        return Promise.resolve()
                    }
                } : {
                    get: function (e, r) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            miss: function () {
                                return Promise.resolve()
                            }
                        };
                        return n.get(e, r, i).catch((function () {
                            return s({caches: t}).get(e, r, i)
                        }))
                    }, set: function (e, r) {
                        return n.set(e, r).catch((function () {
                            return s({caches: t}).set(e, r)
                        }))
                    }, delete: function (e) {
                        return n.delete(e).catch((function () {
                            return s({caches: t}).delete(e)
                        }))
                    }, clear: function () {
                        return n.clear().catch((function () {
                            return s({caches: t}).clear()
                        }))
                    }
                }
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {serializable: !0}, t = {};
                return {
                    get: function (n, r) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            miss: function () {
                                return Promise.resolve()
                            }
                        }, a = JSON.stringify(n);
                        if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
                        var s = r(), o = i && i.miss || function () {
                            return Promise.resolve()
                        };
                        return s.then((function (e) {
                            return o(e)
                        })).then((function () {
                            return s
                        }))
                    }, set: function (n, r) {
                        return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
                    }, delete: function (e) {
                        return delete t[JSON.stringify(e)], Promise.resolve()
                    }, clear: function () {
                        return t = {}, Promise.resolve()
                    }
                }
            }

            function l(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
                    e[t] = e[n], e[n] = r
                }
                return e
            }

            function u(e, t) {
                return t ? (Object.keys(t).forEach((function (n) {
                    e[n] = t[n](e)
                })), e) : e
            }

            function c(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var i = 0;
                return e.replace(/%s/g, (function () {
                    return encodeURIComponent(n[i++])
                }))
            }

            var d = 0, f = 1;

            function p(e, t) {
                var n = e || {}, r = n.data || {};
                return Object.keys(n).forEach((function (e) {
                    -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
                })), {
                    data: Object.entries(r).length > 0 ? r : void 0,
                    timeout: n.timeout || t,
                    headers: n.headers || {},
                    queryParameters: n.queryParameters || {},
                    cacheable: n.cacheable
                }
            }

            var m = {Read: 1, Write: 2, Any: 3};

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return n(n({}, e), {}, {status: t, lastUpdate: Date.now()})
            }

            function g(e) {
                return "string" == typeof e ? {
                    protocol: "https",
                    url: e,
                    accept: m.Any
                } : {protocol: e.protocol || "https", url: e.url, accept: e.accept || m.Any}
            }

            var v = "POST";

            function b(e, t, r, a) {
                var s = [], o = function (e, t) {
                        if ("GET" !== e.method && (void 0 !== e.data || void 0 !== t.data)) {
                            var r = Array.isArray(e.data) ? e.data : n(n({}, e.data), t.data);
                            return JSON.stringify(r)
                        }
                    }(r, a), l = function (e, t) {
                        var r = n(n({}, e.headers), t.headers), i = {};
                        return Object.keys(r).forEach((function (e) {
                            var t = r[e];
                            i[e.toLowerCase()] = t
                        })), i
                    }(e, a), u = r.method, c = "GET" !== r.method ? {} : n(n({}, r.data), a.data),
                    d = n(n(n({"x-algolia-agent": e.userAgent.value}, e.queryParameters), c), a.queryParameters), f = 0,
                    p = function t(n, i) {
                        var c = n.pop();
                        if (void 0 === c) throw{
                            name: "RetryError",
                            message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                            transporterStackTrace: O(s)
                        };
                        var p = {
                            data: o,
                            headers: l,
                            method: u,
                            url: y(c, r.path, d),
                            connectTimeout: i(f, e.timeouts.connect),
                            responseTimeout: i(f, a.timeout)
                        }, m = function (e) {
                            var t = {request: p, response: e, host: c, triesLeft: n.length};
                            return s.push(t), t
                        }, g = {
                            onSucess: function (e) {
                                return function (e) {
                                    try {
                                        return JSON.parse(e.content)
                                    } catch (t) {
                                        throw function (e, t) {
                                            return {name: "DeserializationError", message: e, response: t}
                                        }(t.message, e)
                                    }
                                }(e)
                            }, onRetry: function (r) {
                                var a = m(r);
                                return r.isTimedOut && f++, Promise.all([e.logger.info("Retryable failure", A(a)), e.hostsCache.set(c, h(c, r.isTimedOut ? 3 : 2))]).then((function () {
                                    return t(n, i)
                                }))
                            }, onFail: function (e) {
                                throw m(e), function (e, t) {
                                    var n = e.content, r = e.status, i = n;
                                    try {
                                        i = JSON.parse(n).message
                                    } catch (e) {
                                    }
                                    return function (e, t, n) {
                                        return {name: "ApiError", message: e, status: t, transporterStackTrace: n}
                                    }(i, r, t)
                                }(e, O(s))
                            }
                        };
                        return e.requester.send(p).then((function (e) {
                            return function (e, t) {
                                return function (e) {
                                    var t = e.status;
                                    return e.isTimedOut || function (e) {
                                        var t = e.isTimedOut, n = e.status;
                                        return !t && 0 == ~~n
                                    }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                                }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSucess(e) : t.onFail(e)
                            }(e, g)
                        }))
                    };
                return function (e, t) {
                    return Promise.all(t.map((function (t) {
                        return e.get(t, (function () {
                            return Promise.resolve(h(t))
                        }))
                    }))).then((function (e) {
                        var n = e.filter((function (e) {
                            return function (e) {
                                return 1 === e.status || Date.now() - e.lastUpdate > 12e4
                            }(e)
                        })), r = e.filter((function (e) {
                            return function (e) {
                                return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
                            }(e)
                        })), a = [].concat(i(n), i(r));
                        return {
                            getTimeout: function (e, t) {
                                return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                            }, statelessHosts: a.length > 0 ? a.map((function (e) {
                                return g(e)
                            })) : t
                        }
                    }))
                }(e.hostsCache, t).then((function (e) {
                    return p(i(e.statelessHosts).reverse(), e.getTimeout)
                }))
            }

            function E(e) {
                var t = {
                    value: "Algolia for JavaScript (".concat(e, ")"), add: function (e) {
                        var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                        return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)), t
                    }
                };
                return t
            }

            function y(e, t, n) {
                var r = S(n),
                    i = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
                return r.length && (i += "?".concat(r)), i
            }

            function S(e) {
                return Object.keys(e).map((function (t) {
                    return c("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                    var n
                })).join("&")
            }

            function O(e) {
                return e.map((function (e) {
                    return A(e)
                }))
            }

            function A(e) {
                var t = e.request.headers["x-algolia-api-key"] ? {"x-algolia-api-key": "*****"} : {};
                return n(n({}, e), {}, {request: n(n({}, e.request), {}, {headers: n(n({}, e.request.headers), t)})})
            }

            var x = function (e) {
                var t = e.appId, i = function (e, t, n) {
                    var r = {"x-algolia-api-key": n, "x-algolia-application-id": t};
                    return {
                        headers: function () {
                            return e === f ? r : {}
                        }, queryParameters: function () {
                            return e === d ? r : {}
                        }
                    }
                }(void 0 !== e.authMode ? e.authMode : f, t, e.apiKey), a = function (e) {
                    var t = e.hostsCache, n = e.logger, i = e.requester, a = e.requestsCache, s = e.responsesCache,
                        o = e.timeouts, l = e.userAgent, u = e.hosts, c = e.queryParameters, d = {
                            hostsCache: t,
                            logger: n,
                            requester: i,
                            requestsCache: a,
                            responsesCache: s,
                            timeouts: o,
                            userAgent: l,
                            headers: e.headers,
                            queryParameters: c,
                            hosts: u.map((function (e) {
                                return g(e)
                            })),
                            read: function (e, t) {
                                var n = p(t, d.timeouts.read), i = function () {
                                    return b(d, d.hosts.filter((function (e) {
                                        return 0 != (e.accept & m.Read)
                                    })), e, n)
                                };
                                if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return i();
                                var a = {
                                    request: e,
                                    mappedRequestOptions: n,
                                    transporter: {queryParameters: d.queryParameters, headers: d.headers}
                                };
                                return d.responsesCache.get(a, (function () {
                                    return d.requestsCache.get(a, (function () {
                                        return d.requestsCache.set(a, i()).then((function (e) {
                                            return Promise.all([d.requestsCache.delete(a), e])
                                        }), (function (e) {
                                            return Promise.all([d.requestsCache.delete(a), Promise.reject(e)])
                                        })).then((function (e) {
                                            var t = r(e, 2);
                                            return t[0], t[1]
                                        }))
                                    }))
                                }), {
                                    miss: function (e) {
                                        return d.responsesCache.set(a, e)
                                    }
                                })
                            },
                            write: function (e, t) {
                                return b(d, d.hosts.filter((function (e) {
                                    return 0 != (e.accept & m.Write)
                                })), e, p(t, d.timeouts.write))
                            }
                        };
                    return d
                }(n(n({
                    hosts: [{
                        url: "".concat(t, "-dsn.algolia.net"),
                        accept: m.Read
                    }, {
                        url: "".concat(t, ".algolia.net"),
                        accept: m.Write
                    }].concat(l([{url: "".concat(t, "-1.algolianet.com")}, {url: "".concat(t, "-2.algolianet.com")}, {url: "".concat(t, "-3.algolianet.com")}]))
                }, e), {}, {
                    headers: n(n(n({}, i.headers()), {"content-type": "application/x-www-form-urlencoded"}), e.headers),
                    queryParameters: n(n({}, i.queryParameters()), e.queryParameters)
                }));
                return u({
                    transporter: a, appId: t, addAlgoliaAgent: function (e, t) {
                        a.userAgent.add({segment: e, version: t})
                    }, clearCache: function () {
                        return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then((function () {
                        }))
                    }
                }, e.methods)
            }, T = function (e) {
                return function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = {transporter: e.transporter, appId: e.appId, indexName: t};
                    return u(r, n.methods)
                }
            }, _ = function (e) {
                return function (t, r) {
                    var i = t.map((function (e) {
                        return n(n({}, e), {}, {params: S(e.params || {})})
                    }));
                    return e.transporter.read({
                        method: v,
                        path: "1/indexes/*/queries",
                        data: {requests: i},
                        cacheable: !0
                    }, r)
                }
            }, w = function (e) {
                return function (t, r) {
                    return Promise.all(t.map((function (t) {
                        var i = t.params, a = i.facetName, s = i.facetQuery, o = function (e, t) {
                            if (null == e) return {};
                            var n, r, i = function (e, t) {
                                if (null == e) return {};
                                var n, r, i = {}, a = Object.keys(e);
                                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                            }
                            return i
                        }(i, ["facetName", "facetQuery"]);
                        return T(e)(t.indexName, {methods: {searchForFacetValues: N}}).searchForFacetValues(a, s, n(n({}, r), o))
                    })))
                }
            }, P = function (e) {
                return function (t, n) {
                    return e.transporter.read({
                        method: v,
                        path: c("1/indexes/%s/query", e.indexName),
                        data: {query: t},
                        cacheable: !0
                    }, n)
                }
            }, N = function (e) {
                return function (t, n, r) {
                    return e.transporter.read({
                        method: v,
                        path: c("1/indexes/%s/facets/%s/query", e.indexName, t),
                        data: {facetQuery: n},
                        cacheable: !0
                    }, r)
                }
            };

            function I(e, t, r) {
                var i = {
                    appId: e,
                    apiKey: t,
                    timeouts: {connect: 1, read: 2, write: 30},
                    requester: {
                        send: function (e) {
                            return new Promise((function (t) {
                                var n = new XMLHttpRequest;
                                n.open(e.method, e.url, !0), Object.keys(e.headers).forEach((function (t) {
                                    return n.setRequestHeader(t, e.headers[t])
                                }));
                                var r, i = function (e, r) {
                                    return setTimeout((function () {
                                        n.abort(), t({status: 0, content: r, isTimedOut: !0})
                                    }), 1e3 * e)
                                }, a = i(e.connectTimeout, "Connection timeout");
                                n.onreadystatechange = function () {
                                    n.readyState > n.OPENED && void 0 === r && (clearTimeout(a), r = i(e.responseTimeout, "Socket timeout"))
                                }, n.onerror = function () {
                                    0 === n.status && (clearTimeout(a), clearTimeout(r), t({
                                        content: n.responseText || "Network request failed",
                                        status: n.status,
                                        isTimedOut: !1
                                    }))
                                }, n.onload = function () {
                                    clearTimeout(a), clearTimeout(r), t({
                                        content: n.responseText,
                                        status: n.status,
                                        isTimedOut: !1
                                    })
                                }, n.send(e.data)
                            }))
                        }
                    },
                    logger: {
                        debug: function (e, t) {
                            return Promise.resolve()
                        }, info: function (e, t) {
                            return Promise.resolve()
                        }, error: function (e, t) {
                            return console.error(e, t), Promise.resolve()
                        }
                    },
                    responsesCache: o(),
                    requestsCache: o({serializable: !1}),
                    hostsCache: s({caches: [a({key: "".concat("4.6.0", "-").concat(e)}), o()]}),
                    userAgent: E("4.6.0").add({segment: "Browser", version: "lite"}),
                    authMode: d
                };
                return x(n(n(n({}, i), r), {}, {
                    methods: {
                        search: _,
                        searchForFacetValues: w,
                        multipleQueries: _,
                        multipleSearchForFacetValues: w,
                        initIndex: function (e) {
                            return function (t) {
                                return T(e)(t, {methods: {search: P, searchForFacetValues: N}})
                            }
                        }
                    }
                }))
            }

            return I.version = "4.6.0", I
        }()
    }, "Ge+w": function (e, t) {
    }, Ll8h: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("EyDb"), i = n.n(r);
        t.default = function () {
            return {
                search: "", searchIsOpen: !1, hits: [], init: function () {
                    var e = this, t = i()(algolia_app_id, algolia_search_key).initIndex("laravel");
                    this.$watch("search", (function (n) {
                        if (!n) return e.hits = [];
                        t.search(n, {
                            hitsPerPage: 5,
                            facetFilters: ["version:" + window.version],
                            highlightPreTag: '<em class="not-italic bg-red-600 bg-opacity-25">',
                            highlightPostTag: "</em>"
                        }).then((function (t) {
                            var n = t.hits;
                            e.hits = n
                        }))
                    }))
                }, clear: function () {
                    this.searchIsOpen = !1, this.search = "", this.hits = []
                }, focusPreviousResult: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    e <= 0 && (e = this.hits.length);
                    var t = document.querySelector("#search-result-" + (e - 1));
                    if (t) return t.focus()
                }, focusNextResult: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    e >= this.hits.length - 1 && (e = -1);
                    var t = document.querySelector("#search-result-" + (e + 1));
                    if (t) return t.focus()
                }, handleSlashKey: function (e) {
                    "/" === e.key && (e.preventDefault(), this.searchIsOpen = !0, this.$refs.searchInput.focus())
                }
            }
        }
    }, QWvX: function (e, t) {
        Prism.languages.javascript = Prism.languages.extend("clike", {
            "class-name": [Prism.languages.clike["class-name"], {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: !0
            }],
            keyword: [{
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: !0
            }, {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }],
            number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
            function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "regex-source": {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: "language-regex",
                        inside: Prism.languages.regex
                    }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/
                }
            },
            "function-variable": {
                pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                alias: "function"
            },
            parameter: [{
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            }, {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: Prism.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), Prism.languages.insertBefore("javascript", "string", {
            "template-string": {
                pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                greedy: !0,
                inside: {
                    "template-punctuation": {pattern: /^`|`$/, alias: "string"},
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                        lookbehind: !0,
                        inside: {
                            "interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"},
                            rest: Prism.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            }
        }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript
    }, RX2a: function (e, t) {
        !function (e) {
            var t = /[*&][^\s[\]{},]+/,
                n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                r = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)",
                i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, (function () {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                })), a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function s(e, t) {
                t = (t || "").replace(/m/g, "") + "m";
                var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g, (function () {
                    return r
                })).replace(/<<value>>/g, (function () {
                    return e
                }));
                return RegExp(n, t)
            }

            e.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function () {
                        return r
                    }))), lookbehind: !0, alias: "string"
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, (function () {
                        return r
                    })).replace(/<<key>>/g, (function () {
                        return "(?:" + i + "|" + a + ")"
                    }))), lookbehind: !0, greedy: !0, alias: "atrule"
                },
                directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important"},
                datetime: {
                    pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: "number"
                },
                boolean: {pattern: s(/true|false/.source, "i"), lookbehind: !0, alias: "important"},
                null: {pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important"},
                string: {pattern: s(a), lookbehind: !0, greedy: !0},
                number: {
                    pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                    lookbehind: !0
                },
                tag: n,
                important: t,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, e.languages.yml = e.languages.yaml
        }(Prism)
    }, RsYP: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("jHpe"), i = n.n(r);
        n("y1X9"), n("bPOv"), n("QWvX"), n("ZgVT"), n("Yhcd"), n("jpss"), n("vy4m"), n("RX2a"), n("gAkk"), n("r4oG");

        function a(e) {
            return function (e) {
                if (Array.isArray(e)) return s(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        i.a.manual = !0, a(document.querySelectorAll("pre code")).forEach((function (e) {
            i.a.highlightElement(e)
        })), a(document.querySelector(".docs_main").querySelectorAll("a[name]")).forEach((function (e) {
            var t = e.parentNode.nextElementSibling;
            "the-at-error-directive" == t.id && console.log(t, t.childNodes), e.href = "#".concat(t.id), e.removeAttribute("name"), a(t.childNodes).forEach((function (t) {
                return e.appendChild(t)
            })), t.appendChild(e)
        })), a(document.querySelectorAll(".docs_sidebar ul")).forEach((function (e) {
            var t = e.querySelector('li a[href="' + window.location.pathname + '"]');
            t && (t.parentNode.parentNode.parentNode.classList.add("sub--on"), t.parentNode.classList.add("active"))
        })), a(document.querySelectorAll(".docs_sidebar h2")).forEach((function (e) {
            e.addEventListener("click", (function (t) {
                t.preventDefault();
                var n = e.parentNode.classList.contains("sub--on");
                a(document.querySelectorAll(".docs_sidebar ul li")).forEach((function (e) {
                    return e.classList.remove("sub--on")
                })), n || e.parentNode.classList.add("sub--on")
            }))
        })), a(document.querySelectorAll(".docs_main blockquote p")).forEach((function (e) {
            var t, n, r = e.outerHTML, i = r.match(/\{(.*?)\}/);
            if (i) var a = i[1] || !1;
            if (a) {
                switch (a) {
                    case"note":
                        t = "/assets/img/callouts/exclamation.min.svg", n = "bg-red-600";
                        break;
                    case"tip":
                        t = "/assets/img/callouts/lightbulb.min.svg", n = "bg-purple-600";
                        break;
                    case"laracasts":
                    case"video":
                        t = "/assets/img/callouts/laracast.min.svg", n = "bg-blue-600"
                }
                var s = document.createElement("div");
                s.classList = "mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center";
                var o = document.createElement("div");
                o.classList = "w-20 h-20 mb-6 flex items-center justify-center flex-shrink-0 ".concat(n, " lg:mb-0");
                var l = document.createElement("img");
                l.src = t, l.classList = "opacity-75", o.appendChild(l), s.appendChild(o), e.parentNode.insertBefore(s, e), e.innerHTML = r.replace(/\{(.*?)\}/, ""), e.classList = "mb-0 lg:ml-6", s.classList.add("callout"), s.appendChild(e)
            }
        }))
    }, Yhcd: function (e, t) {
        !function (e) {
            function t(e, t) {
                return "___" + e.toUpperCase() + t + "___"
            }

            Object.defineProperties(e.languages["markup-templating"] = {}, {
                buildPlaceholders: {
                    value: function (n, r, i, a) {
                        if (n.language === r) {
                            var s = n.tokenStack = [];
                            n.code = n.code.replace(i, (function (e) {
                                if ("function" == typeof a && !a(e)) return e;
                                for (var i, o = s.length; -1 !== n.code.indexOf(i = t(r, o));) ++o;
                                return s[o] = e, i
                            })), n.grammar = e.languages.markup
                        }
                    }
                }, tokenizePlaceholders: {
                    value: function (n, r) {
                        if (n.language === r && n.tokenStack) {
                            n.grammar = e.languages[r];
                            var i = 0, a = Object.keys(n.tokenStack);
                            !function s(o) {
                                for (var l = 0; l < o.length && !(i >= a.length); l++) {
                                    var u = o[l];
                                    if ("string" == typeof u || u.content && "string" == typeof u.content) {
                                        var c = a[i], d = n.tokenStack[c], f = "string" == typeof u ? u : u.content,
                                            p = t(r, c), m = f.indexOf(p);
                                        if (m > -1) {
                                            ++i;
                                            var h = f.substring(0, m),
                                                g = new e.Token(r, e.tokenize(d, n.grammar), "language-" + r, d),
                                                v = f.substring(m + p.length), b = [];
                                            h && b.push.apply(b, s([h])), b.push(g), v && b.push.apply(b, s([v])), "string" == typeof u ? o.splice.apply(o, [l, 1].concat(b)) : u.content = b
                                        }
                                    } else u.content && s(u.content)
                                }
                                return o
                            }(n.tokens)
                        }
                    }
                }
            })
        }(Prism)
    }, ZgVT: function (e, t) {
        !function (e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
            e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                    inside: {
                        rule: /^@[\w-]+/,
                        "selector-function-argument": {
                            pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                            lookbehind: !0,
                            alias: "selector"
                        },
                        keyword: {pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0}
                    }
                },
                url: {
                    pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {pattern: RegExp("^" + t.source + "$"), alias: "url"}
                    }
                },
                selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
                string: {pattern: t, greedy: !0},
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:,]/
            }, e.languages.css.atrule.inside.rest = e.languages.css;
            var n = e.languages.markup;
            n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {pattern: /^\s*style/i, inside: n.tag.inside},
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {pattern: /.+/i, inside: e.languages.css}
                    },
                    alias: "language-css"
                }
            }, n.tag))
        }(Prism)
    }, bPOv: function (e, t) {
        Prism.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: {
                pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                greedy: !0,
                inside: {
                    "internal-subset": {pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null},
                    string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
                    punctuation: /^<!|>$|[[\]]/,
                    "doctype-tag": /^DOCTYPE/,
                    name: /[^\s<>'"]+/
                }
            },
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                greedy: !0,
                inside: {
                    tag: {pattern: /^<\/?[^\s>\/]+/, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
                    "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]}
                    },
                    punctuation: /\/?>/,
                    "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                }
            },
            entity: [{pattern: /&[\da-z]{1,8};/i, alias: "named-entity"}, /&#x?[\da-f]{1,8};/i]
        }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function (e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        })), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
            value: function (e, t) {
                var n = {};
                n["language-" + t] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: Prism.languages[t]
                }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var r = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n}};
                r["language-" + t] = {pattern: /[\s\S]+/, inside: Prism.languages[t]};
                var i = {};
                i[e] = {
                    pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function () {
                        return e
                    })), "i"), lookbehind: !0, greedy: !0, inside: r
                }, Prism.languages.insertBefore("markup", "cdata", i)
            }
        }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml
    }, bUC5: function (e, t, n) {
        n("3yRE"), window.searchComponent = n("Ll8h").default, document.addEventListener("DOMContentLoaded", (function () {
            document.querySelector("#docsScreen") && n("RsYP")
        }))
    }, gAkk: function (e, t) {
        !function (e) {
            var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
                n = {pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null}, r = {
                    bash: n,
                    environment: {pattern: RegExp("\\$" + t), alias: "constant"},
                    variable: [{
                        pattern: /\$?\(\([\s\S]+?\)\)/,
                        greedy: !0,
                        inside: {
                            variable: [{pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                            punctuation: /\(\(?|\)\)?|,|;/
                        }
                    }, {
                        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                        greedy: !0,
                        inside: {variable: /^\$\(|^`|\)$|`$/}
                    }, {
                        pattern: /\$\{[^}]+\}/,
                        greedy: !0,
                        inside: {
                            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                            punctuation: /[\[\]]/,
                            environment: {pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant"}
                        }
                    }, /\$(?:\w+|[#?*!@$])/],
                    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
                };
            e.languages.bash = {
                shebang: {pattern: /^#!\s*\/.*/, alias: "important"},
                comment: {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
                "function-name": [{
                    pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                    lookbehind: !0,
                    alias: "function"
                }, {pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function"}],
                "for-or-select": {pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0},
                "assign-left": {
                    pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                    inside: {
                        environment: {
                            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                            lookbehind: !0,
                            alias: "constant"
                        }
                    },
                    alias: "variable",
                    lookbehind: !0
                },
                string: [{
                    pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: r
                }, {
                    pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {bash: n}
                }, {
                    pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: r
                }],
                environment: {pattern: RegExp("\\$?" + t), alias: "constant"},
                variable: r.variable,
                function: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                    lookbehind: !0
                },
                keyword: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                    lookbehind: !0
                },
                builtin: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                    lookbehind: !0,
                    alias: "class-name"
                },
                boolean: {pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0},
                "file-descriptor": {pattern: /\B&\d\b/, alias: "important"},
                operator: {
                    pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
                    inside: {"file-descriptor": {pattern: /^\d/, alias: "important"}}
                },
                punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                number: {pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0}
            }, n.inside = e.languages.bash;
            for (var i = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], a = r.variable[1].inside, s = 0; s < i.length; s++) a[i[s]] = e.languages.bash[i[s]];
            e.languages.shell = e.languages.bash
        }(Prism)
    }, jHpe: function (e, t, n) {
        (function (t) {
            var n = function (e) {
                var t = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, r = {
                    manual: e.Prism && e.Prism.manual,
                    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function e(t) {
                            return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        }, type: function (e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        }, objId: function (e) {
                            return e.__id || Object.defineProperty(e, "__id", {value: ++n}), e.__id
                        }, clone: function e(t, n) {
                            var i, a;
                            switch (n = n || {}, r.util.type(t)) {
                                case"Object":
                                    if (a = r.util.objId(t), n[a]) return n[a];
                                    for (var s in i = {}, n[a] = i, t) t.hasOwnProperty(s) && (i[s] = e(t[s], n));
                                    return i;
                                case"Array":
                                    return a = r.util.objId(t), n[a] ? n[a] : (i = [], n[a] = i, t.forEach((function (t, r) {
                                        i[r] = e(t, n)
                                    })), i);
                                default:
                                    return t
                            }
                        }, getLanguage: function (e) {
                            for (; e && !t.test(e.className);) e = e.parentElement;
                            return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none"
                        }, currentScript: function () {
                            if ("undefined" == typeof document) return null;
                            if ("currentScript" in document) return document.currentScript;
                            try {
                                throw new Error
                            } catch (r) {
                                var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1];
                                if (e) {
                                    var t = document.getElementsByTagName("script");
                                    for (var n in t) if (t[n].src == e) return t[n]
                                }
                                return null
                            }
                        }, isActive: function (e, t, n) {
                            for (var r = "no-" + t; e;) {
                                var i = e.classList;
                                if (i.contains(t)) return !0;
                                if (i.contains(r)) return !1;
                                e = e.parentElement
                            }
                            return !!n
                        }
                    },
                    languages: {
                        extend: function (e, t) {
                            var n = r.util.clone(r.languages[e]);
                            for (var i in t) n[i] = t[i];
                            return n
                        }, insertBefore: function (e, t, n, i) {
                            var a = (i = i || r.languages)[e], s = {};
                            for (var o in a) if (a.hasOwnProperty(o)) {
                                if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                n.hasOwnProperty(o) || (s[o] = a[o])
                            }
                            var u = i[e];
                            return i[e] = s, r.languages.DFS(r.languages, (function (t, n) {
                                n === u && t != e && (this[t] = s)
                            })), s
                        }, DFS: function e(t, n, i, a) {
                            a = a || {};
                            var s = r.util.objId;
                            for (var o in t) if (t.hasOwnProperty(o)) {
                                n.call(t, o, t[o], i || o);
                                var l = t[o], u = r.util.type(l);
                                "Object" !== u || a[s(l)] ? "Array" !== u || a[s(l)] || (a[s(l)] = !0, e(l, n, o, a)) : (a[s(l)] = !0, e(l, n, null, a))
                            }
                        }
                    },
                    plugins: {},
                    highlightAll: function (e, t) {
                        r.highlightAllUnder(document, e, t)
                    },
                    highlightAllUnder: function (e, t, n) {
                        var i = {
                            callback: n,
                            container: e,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        r.hooks.run("before-highlightall", i), i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)), r.hooks.run("before-all-elements-highlight", i);
                        for (var a, s = 0; a = i.elements[s++];) r.highlightElement(a, !0 === t, i.callback)
                    },
                    highlightElement: function (n, i, a) {
                        var s = r.util.getLanguage(n), o = r.languages[s];
                        n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s;
                        var l = n.parentElement;
                        l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s);
                        var u = {element: n, language: s, grammar: o, code: n.textContent};

                        function c(e) {
                            u.highlightedCode = e, r.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r.hooks.run("after-highlight", u), r.hooks.run("complete", u), a && a.call(u.element)
                        }

                        if (r.hooks.run("before-sanity-check", u), !u.code) return r.hooks.run("complete", u), void (a && a.call(u.element));
                        if (r.hooks.run("before-highlight", u), u.grammar) if (i && e.Worker) {
                            var d = new Worker(r.filename);
                            d.onmessage = function (e) {
                                c(e.data)
                            }, d.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: !0}))
                        } else c(r.highlight(u.code, u.grammar, u.language)); else c(r.util.encode(u.code))
                    },
                    highlight: function (e, t, n) {
                        var a = {code: e, grammar: t, language: n};
                        return r.hooks.run("before-tokenize", a), a.tokens = r.tokenize(a.code, a.grammar), r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language)
                    },
                    tokenize: function (e, t) {
                        var n = t.rest;
                        if (n) {
                            for (var l in n) t[l] = n[l];
                            delete t.rest
                        }
                        var u = new a;
                        return s(u, u.head, e), function e(t, n, a, l, u, c) {
                            for (var d in a) if (a.hasOwnProperty(d) && a[d]) {
                                var f = a[d];
                                f = Array.isArray(f) ? f : [f];
                                for (var p = 0; p < f.length; ++p) {
                                    if (c && c.cause == d + "," + p) return;
                                    var m = f[p], h = m.inside, g = !!m.lookbehind, v = !!m.greedy, b = 0, E = m.alias;
                                    if (v && !m.pattern.global) {
                                        var y = m.pattern.toString().match(/[imsuy]*$/)[0];
                                        m.pattern = RegExp(m.pattern.source, y + "g")
                                    }
                                    for (var S = m.pattern || m, O = l.next, A = u; O !== n.tail && !(c && A >= c.reach); A += O.value.length, O = O.next) {
                                        var x = O.value;
                                        if (n.length > t.length) return;
                                        if (!(x instanceof i)) {
                                            var T = 1;
                                            if (v && O != n.tail.prev) {
                                                if (S.lastIndex = A, !(I = S.exec(t))) break;
                                                var _ = I.index + (g && I[1] ? I[1].length : 0),
                                                    w = I.index + I[0].length, P = A;
                                                for (P += O.value.length; _ >= P;) O = O.next, P += O.value.length;
                                                if (P -= O.value.length, A = P, O.value instanceof i) continue;
                                                for (var N = O; N !== n.tail && (P < w || "string" == typeof N.value); N = N.next) T++, P += N.value.length;
                                                T--, x = t.slice(A, P), I.index -= A
                                            } else {
                                                S.lastIndex = 0;
                                                var I = S.exec(x)
                                            }
                                            if (I) {
                                                g && (b = I[1] ? I[1].length : 0);
                                                _ = I.index + b;
                                                var k = I[0].slice(b), R = (w = _ + k.length, x.slice(0, _)),
                                                    L = x.slice(w), C = A + x.length;
                                                c && C > c.reach && (c.reach = C);
                                                var D = O.prev;
                                                R && (D = s(n, D, R), A += R.length), o(n, D, T);
                                                var F = new i(d, h ? r.tokenize(k, h) : k, E, k);
                                                O = s(n, D, F), L && s(n, O, L), T > 1 && e(t, n, a, O.prev, A, {
                                                    cause: d + "," + p,
                                                    reach: C
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }(e, u, t, u.head, 0), function (e) {
                            var t = [], n = e.head.next;
                            for (; n !== e.tail;) t.push(n.value), n = n.next;
                            return t
                        }(u)
                    },
                    hooks: {
                        all: {}, add: function (e, t) {
                            var n = r.hooks.all;
                            n[e] = n[e] || [], n[e].push(t)
                        }, run: function (e, t) {
                            var n = r.hooks.all[e];
                            if (n && n.length) for (var i, a = 0; i = n[a++];) i(t)
                        }
                    },
                    Token: i
                };

                function i(e, t, n, r) {
                    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                }

                function a() {
                    var e = {value: null, prev: null, next: null}, t = {value: null, prev: e, next: null};
                    e.next = t, this.head = e, this.tail = t, this.length = 0
                }

                function s(e, t, n) {
                    var r = t.next, i = {value: n, prev: t, next: r};
                    return t.next = i, r.prev = i, e.length++, i
                }

                function o(e, t, n) {
                    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                    t.next = r, r.prev = t, e.length -= i
                }

                if (e.Prism = r, i.stringify = function e(t, n) {
                    if ("string" == typeof t) return t;
                    if (Array.isArray(t)) {
                        var i = "";
                        return t.forEach((function (t) {
                            i += e(t, n)
                        })), i
                    }
                    var a = {
                        type: t.type,
                        content: e(t.content, n),
                        tag: "span",
                        classes: ["token", t.type],
                        attributes: {},
                        language: n
                    }, s = t.alias;
                    s && (Array.isArray(s) ? Array.prototype.push.apply(a.classes, s) : a.classes.push(s)), r.hooks.run("wrap", a);
                    var o = "";
                    for (var l in a.attributes) o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                    return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">"
                }, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", (function (t) {
                    var n = JSON.parse(t.data), i = n.language, a = n.code, s = n.immediateClose;
                    e.postMessage(r.highlight(a, r.languages[i], i)), s && e.close()
                }), !1), r) : r;
                var l = r.util.currentScript();

                function u() {
                    r.manual || r.highlightAll()
                }

                if (l && (r.filename = l.src, l.hasAttribute("data-manual") && (r.manual = !0)), !r.manual) {
                    var c = document.readyState;
                    "loading" === c || "interactive" === c && l && l.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16)
                }
                return r
            }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = n), void 0 !== t && (t.Prism = n)
        }).call(this, n("yLpj"))
    }, jpss: function (e, t) {
        !function (e) {
            e.languages.php = e.languages.extend("clike", {
                keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                boolean: {pattern: /\b(?:false|true)\b/i, alias: "constant"},
                constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
                comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
            }), e.languages.insertBefore("php", "string", {
                "shell-comment": {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0,
                    alias: "comment"
                }
            }), e.languages.insertBefore("php", "comment", {
                delimiter: {
                    pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                    alias: "important"
                }
            }), e.languages.insertBefore("php", "keyword", {
                variable: /\$+(?:\w+\b|(?={))/i,
                package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
            }), e.languages.insertBefore("php", "operator", {property: {pattern: /(->)[\w]+/, lookbehind: !0}});
            var t = {
                pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
                lookbehind: !0,
                inside: e.languages.php
            };
            e.languages.insertBefore("php", "string", {
                "nowdoc-string": {
                    pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        delimiter: {
                            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {punctuation: /^<<<'?|[';]$/}
                        }
                    }
                },
                "heredoc-string": {
                    pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        delimiter: {
                            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {punctuation: /^<<<"?|[";]$/}
                        }, interpolation: t
                    }
                },
                "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
                "double-quoted-string": {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    greedy: !0,
                    alias: "string",
                    inside: {interpolation: t}
                }
            }), delete e.languages.php.string, e.hooks.add("before-tokenize", (function (t) {
                if (/<\?/.test(t.code)) {
                    e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
                }
            })), e.hooks.add("after-tokenize", (function (t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "php")
            }))
        }(Prism)
    }, r4oG: function (e, t) {
        Prism.languages.sql = {
            comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
            variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
            string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
            function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
            keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
            boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
            number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
            operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
            punctuation: /[;[\]()`,.]/
        }
    }, vy4m: function (e, t) {
        Prism.languages.ini = {
            comment: /^[ \t]*[;#].*$/m,
            selector: /^[ \t]*\[.*?\]/m,
            constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
            "attr-value": {pattern: /=.*/, inside: {punctuation: /^[=]/}}
        }
    }, y1X9: function (e, t) {
        Prism.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0
            }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
            string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
            "class-name": {
                pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                lookbehind: !0,
                inside: {punctuation: /[.\\]/}
            },
            keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/
        }
    }, yLpj: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
});
