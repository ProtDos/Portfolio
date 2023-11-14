import {
    j as y
} from "./jsx-runtime.70483414.js";
import {
    r
} from "./index.7c191284.js";
import {
    b as m,
    a as p
} from "./use-transform.68353e3f.js";
import {
    M,
    a as g,
    b as k,
    f as l,
    c as x,
    u as S,
    m as E
} from "./motion.08011aae.js";
import {
    u as C
} from "./use-motion-template.33d434db.js";
import "./index.38f30a65.js";

function b(e, o = {}) {
    const {
        isStatic: u
    } = r.useContext(M), s = r.useRef(null), t = m(g(e) ? e.get() : e), i = () => {
        s.current && s.current.stop()
    };
    return r.useInsertionEffect(() => t.attach((n, a) => {
        if (u) return a(n);
        if (i(), s.current = k({
                keyframes: [t.get(), n],
                velocity: t.getVelocity(),
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...o,
                onUpdate: a
            }), !l.isProcessing) {
            const c = performance.now() - l.timestamp;
            c < 30 && (s.current.time = x(c))
        }
        return t.get()
    }, i), [JSON.stringify(o)]), S(() => {
        if (g(e)) return e.on("change", n => t.set(parseFloat(n)))
    }, [t]), t
}
const X = {
        src: "/_astro/future-grid.a0cd4189.webp",
        width: 2880,
        height: 1619,
        format: "webp"
    },
    w = {
        damping: 17.5,
        mass: .5,
        stiffness: 150
    };

function T() {
    console.log("yeah");
    const e = m(0),
        o = m(0),
        u = p(e, [-1, 1], [15, -15]),
        s = p(o, [-1, 1], [15, -15]),
        t = b(u, w),
        i = b(s, w),
        n = r.useCallback(({
            clientX: a,
            clientY: c
        }) => {
            const d = window.innerWidth / 2,
                f = window.innerHeight / 2,
                h = (a - d) / d,
                v = (c - f) / f;
            e.set(h), o.set(v)
        }, [e, o]);
    console.log(t);
    console.log(i);
    return r.useEffect(() => (window.addEventListener("mousemove", n), () => {
        window.removeEventListener("mousemove", n)
    }), [n]), y.jsx(E.div, {
        "aria-hidden": !0,
        className: "pointer-events-none absolute inset-0 -z-50 overflow-hidden bg-primary bg-[size:103%_103%] bg-no-repeat object-fill",
        style: {
            backgroundImage: `url(${X.src})`,
            backgroundPosition: C `calc(50% + ${t}px) calc(50% + ${i}px)`
        }
    })
}
T();
export {
    T as
    default
};