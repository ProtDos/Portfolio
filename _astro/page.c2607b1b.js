function $(t) {
    t = t || 1;
    var e = [],
        n = 0;

    function o(a) {
        e.push(a) > 1 || i()
    }

    function r() {
        n--, i()
    }

    function i() {
        n < t && e.length > 0 && (e.shift()(), n++)
    }
    return [o, r]
}

function ee(t, e) {
    const n = e?.timeout ?? 50,
        o = Date.now();
    return setTimeout(function() {
        t({
            didTimeout: !1,
            timeRemaining: function() {
                return Math.max(0, n - (Date.now() - o))
            }
        })
    }, 1)
}
const te = window.requestIdleCallback || ee;
var ne = te;
const A = ["mouseenter", "touchstart", "focus"],
    N = new Set,
    M = new Set;

function q({
    href: t
}) {
    try {
        const e = new URL(t);
        return window.location.origin === e.origin && window.location.pathname !== e.pathname && !N.has(t)
    } catch {}
    return !1
}
let x, w;

function re(t) {
    N.add(t.href), w.observe(t), A.map(e => t.addEventListener(e, C, {
        passive: !0,
        once: !0
    }))
}

function ie(t) {
    w.unobserve(t), A.map(e => t.removeEventListener(e, C))
}

function C({
    target: t
}) {
    t instanceof HTMLAnchorElement && W(t)
}
async function W(t) {
    ie(t);
    const {
        href: e
    } = t;
    try {
        const n = await fetch(e).then(i => i.text());
        x ||= new DOMParser;
        const o = x.parseFromString(n, "text/html"),
            r = Array.from(o.querySelectorAll('link[rel="stylesheet"]'));
        await Promise.all(r.filter(i => !M.has(i.href)).map(i => (M.add(i.href), fetch(i.href))))
    } catch {}
}

function oe({
    selector: t = 'a[href][rel~="prefetch"]',
    throttle: e = 1,
    intentSelector: n = 'a[href][rel~="prefetch-intent"]'
}) {
    if (!navigator.onLine) return Promise.reject(new Error("Cannot prefetch, no network connection"));
    if ("connection" in navigator) {
        const i = navigator.connection;
        if (i.saveData) return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));
        if (/(2|3)g/.test(i.effectiveType)) return Promise.reject(new Error("Cannot prefetch, network conditions are poor"))
    }
    const [o, r] = $(e);
    w = w || new IntersectionObserver(i => {
        i.forEach(a => {
            if (a.isIntersecting && a.target instanceof HTMLAnchorElement) {
                const s = a.target.getAttribute("rel") || "";
                let c = !1;
                Array.isArray(n) ? c = n.some(u => s.includes(u)) : c = s.includes(n), c || o(() => W(a.target).finally(r))
            }
        })
    }), ne(() => {
        [...document.querySelectorAll(t)].filter(q).forEach(re);
        const a = Array.isArray(n) ? n.join(",") : n;
        [...document.querySelectorAll(a)].filter(q).forEach(c => {
            A.map(u => c.addEventListener(u, C, {
                passive: !0,
                once: !0
            }))
        })
    })
}
var l, g, Z, y, G = -1,
    v = function(t) {
        addEventListener("pageshow", function(e) {
            e.persisted && (G = e.timeStamp, t(e))
        }, !0)
    },
    I = function() {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    },
    T = function() {
        var t = I();
        return t && t.activationStart || 0
    },
    f = function(t, e) {
        var n = I(),
            o = "navigate";
        return G >= 0 ? o = "back-forward-cache" : n && (document.prerendering || T() > 0 ? o = "prerender" : document.wasDiscarded ? o = "restore" : n.type && (o = n.type.replace(/_/g, "-"))), {
            name: t,
            value: e === void 0 ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: o
        }
    },
    b = function(t, e, n) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                var o = new PerformanceObserver(function(r) {
                    Promise.resolve().then(function() {
                        e(r.getEntries())
                    })
                });
                return o.observe(Object.assign({
                    type: t,
                    buffered: !0
                }, n || {})), o
            }
        } catch {}
    },
    d = function(t, e, n, o) {
        var r, i;
        return function(a) {
            e.value >= 0 && (a || o) && ((i = e.value - (r || 0)) || r === void 0) && (r = e.value, e.delta = i, e.rating = function(s, c) {
                return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
            }(e.value, n), t(e))
        }
    },
    P = function(t) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return t()
            })
        })
    },
    k = function(t) {
        var e = function(n) {
            n.type !== "pagehide" && document.visibilityState !== "hidden" || t(n)
        };
        addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
    },
    D = function(t) {
        var e = !1;
        return function(n) {
            e || (t(n), e = !0)
        }
    },
    p = -1,
    H = function() {
        return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
    },
    E = function(t) {
        document.visibilityState === "hidden" && p > -1 && (p = t.type === "visibilitychange" ? t.timeStamp : 0, ae())
    },
    B = function() {
        addEventListener("visibilitychange", E, !0), addEventListener("prerenderingchange", E, !0)
    },
    ae = function() {
        removeEventListener("visibilitychange", E, !0), removeEventListener("prerenderingchange", E, !0)
    },
    F = function() {
        return p < 0 && (p = H(), B(), v(function() {
            setTimeout(function() {
                p = H(), B()
            }, 0)
        })), {
            get firstHiddenTime() {
                return p
            }
        }
    },
    S = function(t) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return t()
        }, !0) : t()
    },
    R = [1800, 3e3],
    J = function(t, e) {
        e = e || {}, S(function() {
            var n, o = F(),
                r = f("FCP"),
                i = b("paint", function(a) {
                    a.forEach(function(s) {
                        s.name === "first-contentful-paint" && (i.disconnect(), s.startTime < o.firstHiddenTime && (r.value = Math.max(s.startTime - T(), 0), r.entries.push(s), n(!0)))
                    })
                });
            i && (n = d(t, r, R, e.reportAllChanges), v(function(a) {
                r = f("FCP"), n = d(t, r, R, e.reportAllChanges), P(function() {
                    r.value = performance.now() - a.timeStamp, n(!0)
                })
            }))
        })
    },
    O = [.1, .25],
    ce = function(t, e) {
        e = e || {}, J(D(function() {
            var n, o = f("CLS", 0),
                r = 0,
                i = [],
                a = function(c) {
                    c.forEach(function(u) {
                        if (!u.hadRecentInput) {
                            var z = i[0],
                                Q = i[i.length - 1];
                            r && u.startTime - Q.startTime < 1e3 && u.startTime - z.startTime < 5e3 ? (r += u.value, i.push(u)) : (r = u.value, i = [u])
                        }
                    }), r > o.value && (o.value = r, o.entries = i, n())
                },
                s = b("layout-shift", a);
            s && (n = d(t, o, O, e.reportAllChanges), k(function() {
                a(s.takeRecords()), n(!0)
            }), v(function() {
                r = 0, o = f("CLS", 0), n = d(t, o, O, e.reportAllChanges), P(function() {
                    return n()
                })
            }), setTimeout(n, 0))
        }))
    },
    h = {
        passive: !0,
        capture: !0
    },
    se = new Date,
    j = function(t, e) {
        l || (l = e, g = t, Z = new Date, Y(removeEventListener), X())
    },
    X = function() {
        if (g >= 0 && g < Z - se) {
            var t = {
                entryType: "first-input",
                name: l.type,
                target: l.target,
                cancelable: l.cancelable,
                startTime: l.timeStamp,
                processingStart: l.timeStamp + g
            };
            y.forEach(function(e) {
                e(t)
            }), y = []
        }
    },
    ue = function(t) {
        if (t.cancelable) {
            var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
            t.type == "pointerdown" ? function(n, o) {
                var r = function() {
                        j(n, o), a()
                    },
                    i = function() {
                        a()
                    },
                    a = function() {
                        removeEventListener("pointerup", r, h), removeEventListener("pointercancel", i, h)
                    };
                addEventListener("pointerup", r, h), addEventListener("pointercancel", i, h)
            }(e, t) : j(e, t)
        }
    },
    Y = function(t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            return t(e, ue, h)
        })
    },
    V = [100, 300],
    fe = function(t, e) {
        e = e || {}, S(function() {
            var n, o = F(),
                r = f("FID"),
                i = function(c) {
                    c.startTime < o.firstHiddenTime && (r.value = c.processingStart - c.startTime, r.entries.push(c), n(!0))
                },
                a = function(c) {
                    c.forEach(i)
                },
                s = b("first-input", a);
            n = d(t, r, V, e.reportAllChanges), s && k(D(function() {
                a(s.takeRecords()), s.disconnect()
            })), s && v(function() {
                var c;
                r = f("FID"), n = d(t, r, V, e.reportAllChanges), y = [], g = -1, l = null, Y(addEventListener), c = i, y.push(c), X()
            })
        })
    },
    _ = [2500, 4e3],
    L = {},
    de = function(t, e) {
        e = e || {}, S(function() {
            var n, o = F(),
                r = f("LCP"),
                i = function(c) {
                    var u = c[c.length - 1];
                    u && u.startTime < o.firstHiddenTime && (r.value = Math.max(u.startTime - T(), 0), r.entries = [u], n())
                },
                a = b("largest-contentful-paint", i);
            if (a) {
                n = d(t, r, _, e.reportAllChanges);
                var s = D(function() {
                    L[r.id] || (i(a.takeRecords()), a.disconnect(), L[r.id] = !0, n(!0))
                });
                ["keydown", "click"].forEach(function(c) {
                    addEventListener(c, function() {
                        return setTimeout(s, 0)
                    }, !0)
                }), k(s), v(function(c) {
                    r = f("LCP"), n = d(t, r, _, e.reportAllChanges), P(function() {
                        r.value = performance.now() - c.timeStamp, L[r.id] = !0, n(!0)
                    })
                })
            }
        })
    },
    U = [800, 1800],
    le = function t(e) {
        document.prerendering ? S(function() {
            return t(e)
        }) : document.readyState !== "complete" ? addEventListener("load", function() {
            return t(e)
        }, !0) : setTimeout(e, 0)
    },
    pe = function(t, e) {
        e = e || {};
        var n = f("TTFB"),
            o = d(t, n, U, e.reportAllChanges);
        le(function() {
            var r = I();
            if (r) {
                var i = r.responseStart;
                if (i <= 0 || i > performance.now()) return;
                n.value = Math.max(i - T(), 0), n.entries = [r], o(!0), v(function() {
                    n = f("TTFB", 0), (o = d(t, n, U, e.reportAllChanges))(!0)
                })
            }
        })
    };
const K = "";

function me() {
    const t = "xwcs8Z2wJU1uVE2p1vubKV9wn8d",
        e = {
            path: window.location.pathname,
            analyticsId: t
        };
    try {
        fe(n => m(n, e)), pe(n => m(n, e)), de(n => m(n, e)), ce(n => m(n, e)), J(n => m(n, e))
    } catch (n) {
        console.error("[Speed Insights]", n)
    }
}
me();
oe({
    intentSelector: 'a[href^="/"]'
});
