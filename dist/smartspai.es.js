import './widget.css';var VS = Object.defineProperty;
var US = (t, i, r) => i in t ? VS(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r;
var $o = (t, i, r) => US(t, typeof i != "symbol" ? i + "" : i, r);
function Ds(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function jS(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var i = t.default;
  if (typeof i == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    r.prototype = i.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(a) {
    var s = Object.getOwnPropertyDescriptor(t, a);
    Object.defineProperty(r, a, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[a];
      }
    });
  }), r;
}
var tf = { exports: {} }, nl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly;
function HS() {
  if (ly) return nl;
  ly = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function r(a, s, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      c = {};
      for (var h in s)
        h !== "key" && (c[h] = s[h]);
    } else c = s;
    return s = c.ref, {
      $$typeof: t,
      type: a,
      key: u,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return nl.Fragment = i, nl.jsx = r, nl.jsxs = r, nl;
}
var ef = { exports: {} }, xt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oy;
function PS() {
  if (oy) return xt;
  oy = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), u = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function b(x) {
    return x === null || typeof x != "object" ? null : (x = y && x[y] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, S = Object.assign, A = {};
  function M(x, Q, at) {
    this.props = x, this.context = Q, this.refs = A, this.updater = at || v;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(x, Q) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, Q, "setState");
  }, M.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function k() {
  }
  k.prototype = M.prototype;
  function C(x, Q, at) {
    this.props = x, this.context = Q, this.refs = A, this.updater = at || v;
  }
  var D = C.prototype = new k();
  D.constructor = C, S(D, M.prototype), D.isPureReactComponent = !0;
  var V = Array.isArray, _ = { H: null, A: null, T: null, S: null, V: null }, O = Object.prototype.hasOwnProperty;
  function z(x, Q, at, E, st, St) {
    return at = St.ref, {
      $$typeof: t,
      type: x,
      key: Q,
      ref: at !== void 0 ? at : null,
      props: St
    };
  }
  function N(x, Q) {
    return z(
      x.type,
      Q,
      void 0,
      void 0,
      void 0,
      x.props
    );
  }
  function F(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }
  function L(x) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(at) {
      return Q[at];
    });
  }
  var J = /\/+/g;
  function Z(x, Q) {
    return typeof x == "object" && x !== null && x.key != null ? L("" + x.key) : Q.toString(36);
  }
  function nt() {
  }
  function it(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(nt, nt) : (x.status = "pending", x.then(
          function(Q) {
            x.status === "pending" && (x.status = "fulfilled", x.value = Q);
          },
          function(Q) {
            x.status === "pending" && (x.status = "rejected", x.reason = Q);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function lt(x, Q, at, E, st) {
    var St = typeof x;
    (St === "undefined" || St === "boolean") && (x = null);
    var ut = !1;
    if (x === null) ut = !0;
    else
      switch (St) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case t:
            case i:
              ut = !0;
              break;
            case g:
              return ut = x._init, lt(
                ut(x._payload),
                Q,
                at,
                E,
                st
              );
          }
      }
    if (ut)
      return st = st(x), ut = E === "" ? "." + Z(x, 0) : E, V(st) ? (at = "", ut != null && (at = ut.replace(J, "$&/") + "/"), lt(st, Q, at, "", function(ke) {
        return ke;
      })) : st != null && (F(st) && (st = N(
        st,
        at + (st.key == null || x && x.key === st.key ? "" : ("" + st.key).replace(
          J,
          "$&/"
        ) + "/") + ut
      )), Q.push(st)), 1;
    ut = 0;
    var re = E === "" ? "." : E + ":";
    if (V(x))
      for (var Mt = 0; Mt < x.length; Mt++)
        E = x[Mt], St = re + Z(E, Mt), ut += lt(
          E,
          Q,
          at,
          St,
          st
        );
    else if (Mt = b(x), typeof Mt == "function")
      for (x = Mt.call(x), Mt = 0; !(E = x.next()).done; )
        E = E.value, St = re + Z(E, Mt++), ut += lt(
          E,
          Q,
          at,
          St,
          st
        );
    else if (St === "object") {
      if (typeof x.then == "function")
        return lt(
          it(x),
          Q,
          at,
          E,
          st
        );
      throw Q = String(x), Error(
        "Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ut;
  }
  function P(x, Q, at) {
    if (x == null) return x;
    var E = [], st = 0;
    return lt(x, E, "", "", function(St) {
      return Q.call(at, St, st++);
    }), E;
  }
  function K(x) {
    if (x._status === -1) {
      var Q = x._result;
      Q = Q(), Q.then(
        function(at) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = at);
        },
        function(at) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = at);
        }
      ), x._status === -1 && (x._status = 0, x._result = Q);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(Q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function yt() {
  }
  return xt.Children = {
    map: P,
    forEach: function(x, Q, at) {
      P(
        x,
        function() {
          Q.apply(this, arguments);
        },
        at
      );
    },
    count: function(x) {
      var Q = 0;
      return P(x, function() {
        Q++;
      }), Q;
    },
    toArray: function(x) {
      return P(x, function(Q) {
        return Q;
      }) || [];
    },
    only: function(x) {
      if (!F(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  }, xt.Component = M, xt.Fragment = r, xt.Profiler = s, xt.PureComponent = C, xt.StrictMode = a, xt.Suspense = d, xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, xt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return _.H.useMemoCache(x);
    }
  }, xt.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, xt.cloneElement = function(x, Q, at) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var E = S({}, x.props), st = x.key, St = void 0;
    if (Q != null)
      for (ut in Q.ref !== void 0 && (St = void 0), Q.key !== void 0 && (st = "" + Q.key), Q)
        !O.call(Q, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && Q.ref === void 0 || (E[ut] = Q[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) E.children = at;
    else if (1 < ut) {
      for (var re = Array(ut), Mt = 0; Mt < ut; Mt++)
        re[Mt] = arguments[Mt + 2];
      E.children = re;
    }
    return z(x.type, st, void 0, void 0, St, E);
  }, xt.createContext = function(x) {
    return x = {
      $$typeof: u,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: c,
      _context: x
    }, x;
  }, xt.createElement = function(x, Q, at) {
    var E, st = {}, St = null;
    if (Q != null)
      for (E in Q.key !== void 0 && (St = "" + Q.key), Q)
        O.call(Q, E) && E !== "key" && E !== "__self" && E !== "__source" && (st[E] = Q[E]);
    var ut = arguments.length - 2;
    if (ut === 1) st.children = at;
    else if (1 < ut) {
      for (var re = Array(ut), Mt = 0; Mt < ut; Mt++)
        re[Mt] = arguments[Mt + 2];
      st.children = re;
    }
    if (x && x.defaultProps)
      for (E in ut = x.defaultProps, ut)
        st[E] === void 0 && (st[E] = ut[E]);
    return z(x, St, void 0, void 0, null, st);
  }, xt.createRef = function() {
    return { current: null };
  }, xt.forwardRef = function(x) {
    return { $$typeof: h, render: x };
  }, xt.isValidElement = F, xt.lazy = function(x) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: x },
      _init: K
    };
  }, xt.memo = function(x, Q) {
    return {
      $$typeof: p,
      type: x,
      compare: Q === void 0 ? null : Q
    };
  }, xt.startTransition = function(x) {
    var Q = _.T, at = {};
    _.T = at;
    try {
      var E = x(), st = _.S;
      st !== null && st(at, E), typeof E == "object" && E !== null && typeof E.then == "function" && E.then(yt, rt);
    } catch (St) {
      rt(St);
    } finally {
      _.T = Q;
    }
  }, xt.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, xt.use = function(x) {
    return _.H.use(x);
  }, xt.useActionState = function(x, Q, at) {
    return _.H.useActionState(x, Q, at);
  }, xt.useCallback = function(x, Q) {
    return _.H.useCallback(x, Q);
  }, xt.useContext = function(x) {
    return _.H.useContext(x);
  }, xt.useDebugValue = function() {
  }, xt.useDeferredValue = function(x, Q) {
    return _.H.useDeferredValue(x, Q);
  }, xt.useEffect = function(x, Q, at) {
    var E = _.H;
    if (typeof at == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return E.useEffect(x, Q);
  }, xt.useId = function() {
    return _.H.useId();
  }, xt.useImperativeHandle = function(x, Q, at) {
    return _.H.useImperativeHandle(x, Q, at);
  }, xt.useInsertionEffect = function(x, Q) {
    return _.H.useInsertionEffect(x, Q);
  }, xt.useLayoutEffect = function(x, Q) {
    return _.H.useLayoutEffect(x, Q);
  }, xt.useMemo = function(x, Q) {
    return _.H.useMemo(x, Q);
  }, xt.useOptimistic = function(x, Q) {
    return _.H.useOptimistic(x, Q);
  }, xt.useReducer = function(x, Q, at) {
    return _.H.useReducer(x, Q, at);
  }, xt.useRef = function(x) {
    return _.H.useRef(x);
  }, xt.useState = function(x) {
    return _.H.useState(x);
  }, xt.useSyncExternalStore = function(x, Q, at) {
    return _.H.useSyncExternalStore(
      x,
      Q,
      at
    );
  }, xt.useTransition = function() {
    return _.H.useTransition();
  }, xt.version = "19.1.0", xt;
}
var sy;
function Rl() {
  return sy || (sy = 1, ef.exports = PS()), ef.exports;
}
var uy;
function qS() {
  return uy || (uy = 1, tf.exports = HS()), tf.exports;
}
var ft = qS(), $ = Rl();
const vh = $.createContext({});
function bh(t) {
  const i = $.useRef(null);
  return i.current === null && (i.current = t()), i.current;
}
const wh = typeof window < "u", jv = wh ? $.useLayoutEffect : $.useEffect, Cs = /* @__PURE__ */ $.createContext(null), xh = $.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class YS extends $.Component {
  getSnapshotBeforeUpdate(i) {
    const r = this.props.childRef.current;
    if (r && i.isPresent && !this.props.isPresent) {
      const a = r.offsetParent, s = a instanceof HTMLElement && a.offsetWidth || 0, c = this.props.sizeRef.current;
      c.height = r.offsetHeight || 0, c.width = r.offsetWidth || 0, c.top = r.offsetTop, c.left = r.offsetLeft, c.right = s - c.width - c.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function FS({ children: t, isPresent: i, anchorX: r }) {
  const a = $.useId(), s = $.useRef(null), c = $.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: u } = $.useContext(xh);
  return $.useInsertionEffect(() => {
    const { width: h, height: d, top: p, left: g, right: y } = c.current;
    if (i || !s.current || !h || !d)
      return;
    const b = r === "left" ? `left: ${g}` : `right: ${y}`;
    s.current.dataset.motionPopId = a;
    const v = document.createElement("style");
    return u && (v.nonce = u), document.head.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${d}px !important;
            ${b}px !important;
            top: ${p}px !important;
          }
        `), () => {
      document.head.removeChild(v);
    };
  }, [i]), ft.jsx(YS, { isPresent: i, childRef: s, sizeRef: c, children: $.cloneElement(t, { ref: s }) });
}
const XS = ({ children: t, initial: i, isPresent: r, onExitComplete: a, custom: s, presenceAffectsLayout: c, mode: u, anchorX: h }) => {
  const d = bh(GS), p = $.useId();
  let g = !0, y = $.useMemo(() => (g = !1, {
    id: p,
    initial: i,
    isPresent: r,
    custom: s,
    onExitComplete: (b) => {
      d.set(b, !0);
      for (const v of d.values())
        if (!v)
          return;
      a && a();
    },
    register: (b) => (d.set(b, !1), () => d.delete(b))
  }), [r, d, a]);
  return c && g && (y = { ...y }), $.useMemo(() => {
    d.forEach((b, v) => d.set(v, !1));
  }, [r]), $.useEffect(() => {
    !r && !d.size && a && a();
  }, [r]), u === "popLayout" && (t = ft.jsx(FS, { isPresent: r, anchorX: h, children: t })), ft.jsx(Cs.Provider, { value: y, children: t });
};
function GS() {
  return /* @__PURE__ */ new Map();
}
function Hv(t = !0) {
  const i = $.useContext(Cs);
  if (i === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: a, register: s } = i, c = $.useId();
  $.useEffect(() => {
    if (t)
      return s(c);
  }, [t]);
  const u = $.useCallback(() => t && a && a(c), [c, a, t]);
  return !r && a ? [!1, u] : [!0];
}
const ts = (t) => t.key || "";
function cy(t) {
  const i = [];
  return $.Children.forEach(t, (r) => {
    $.isValidElement(r) && i.push(r);
  }), i;
}
const fy = ({ children: t, custom: i, initial: r = !0, onExitComplete: a, presenceAffectsLayout: s = !0, mode: c = "sync", propagate: u = !1, anchorX: h = "left" }) => {
  const [d, p] = Hv(u), g = $.useMemo(() => cy(t), [t]), y = u && !d ? [] : g.map(ts), b = $.useRef(!0), v = $.useRef(g), S = bh(() => /* @__PURE__ */ new Map()), [A, M] = $.useState(g), [k, C] = $.useState(g);
  jv(() => {
    b.current = !1, v.current = g;
    for (let _ = 0; _ < k.length; _++) {
      const O = ts(k[_]);
      y.includes(O) ? S.delete(O) : S.get(O) !== !0 && S.set(O, !1);
    }
  }, [k, y.length, y.join("-")]);
  const D = [];
  if (g !== A) {
    let _ = [...g];
    for (let O = 0; O < k.length; O++) {
      const z = k[O], N = ts(z);
      y.includes(N) || (_.splice(O, 0, z), D.push(z));
    }
    return c === "wait" && D.length && (_ = D), C(cy(_)), M(g), null;
  }
  const { forceRender: V } = $.useContext(vh);
  return ft.jsx(ft.Fragment, { children: k.map((_) => {
    const O = ts(_), z = u && !d ? !1 : g === k || y.includes(O), N = () => {
      if (S.has(O))
        S.set(O, !0);
      else
        return;
      let F = !0;
      S.forEach((L) => {
        L || (F = !1);
      }), F && (V == null || V(), C(v.current), u && (p == null || p()), a && a());
    };
    return ft.jsx(XS, { isPresent: z, initial: !b.current || r ? void 0 : !1, custom: i, presenceAffectsLayout: s, mode: c, onExitComplete: z ? void 0 : N, anchorX: h, children: _ }, O);
  }) });
};
function Sh(t, i) {
  t.indexOf(i) === -1 && t.push(i);
}
function Th(t, i) {
  const r = t.indexOf(i);
  r > -1 && t.splice(r, 1);
}
const In = (t, i, r) => r > i ? i : r < t ? t : r;
let kh = () => {
};
const Qn = {}, Pv = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), qv = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Eh(t) {
  let i;
  return () => (i === void 0 && (i = t()), i);
}
const un = /* @__NO_SIDE_EFFECTS__ */ (t) => t, IS = (t, i) => (r) => i(t(r)), Ol = (...t) => t.reduce(IS), xl = /* @__NO_SIDE_EFFECTS__ */ (t, i, r) => {
  const a = i - t;
  return a === 0 ? 1 : (r - t) / a;
};
class Ah {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Sh(this.subscriptions, i), () => Th(this.subscriptions, i);
  }
  notify(i, r, a) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](i, r, a);
      else
        for (let c = 0; c < s; c++) {
          const u = this.subscriptions[c];
          u && u(i, r, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const An = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, Dn = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Yv(t, i) {
  return i ? t * (1e3 / i) : 0;
}
const Fv = (t, i, r) => (((1 - 3 * r + 3 * i) * t + (3 * r - 6 * i)) * t + 3 * i) * t, QS = 1e-7, KS = 12;
function ZS(t, i, r, a, s) {
  let c, u, h = 0;
  do
    u = i + (r - i) / 2, c = Fv(u, a, s) - t, c > 0 ? r = u : i = u;
  while (Math.abs(c) > QS && ++h < KS);
  return u;
}
function _l(t, i, r, a) {
  if (t === i && r === a)
    return un;
  const s = (c) => ZS(c, 0, 1, t, r);
  return (c) => c === 0 || c === 1 ? c : Fv(s(c), i, a);
}
const Xv = (t) => (i) => i <= 0.5 ? t(2 * i) / 2 : (2 - t(2 * (1 - i))) / 2, Gv = (t) => (i) => 1 - t(1 - i), Iv = /* @__PURE__ */ _l(0.33, 1.53, 0.69, 0.99), Dh = /* @__PURE__ */ Gv(Iv), Qv = /* @__PURE__ */ Xv(Dh), Kv = (t) => (t *= 2) < 1 ? 0.5 * Dh(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Ch = (t) => 1 - Math.sin(Math.acos(t)), Zv = Gv(Ch), Wv = Xv(Ch), WS = /* @__PURE__ */ _l(0.42, 0, 1, 1), JS = /* @__PURE__ */ _l(0, 0, 0.58, 1), Jv = /* @__PURE__ */ _l(0.42, 0, 0.58, 1), $S = (t) => Array.isArray(t) && typeof t[0] != "number", $v = (t) => Array.isArray(t) && typeof t[0] == "number", tT = {
  linear: un,
  easeIn: WS,
  easeInOut: Jv,
  easeOut: JS,
  circIn: Ch,
  circInOut: Wv,
  circOut: Zv,
  backIn: Dh,
  backInOut: Qv,
  backOut: Iv,
  anticipate: Kv
}, eT = (t) => typeof t == "string", hy = (t) => {
  if ($v(t)) {
    kh(t.length === 4);
    const [i, r, a, s] = t;
    return _l(i, r, a, s);
  } else if (eT(t))
    return tT[t];
  return t;
}, es = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], dy = {
  value: null
};
function nT(t, i) {
  let r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), s = !1, c = !1;
  const u = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = 0;
  function p(y) {
    u.has(y) && (g.schedule(y), t()), d++, y(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (y, b = !1, v = !1) => {
      const A = v && s ? r : a;
      return b && u.add(y), A.has(y) || A.add(y), y;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (y) => {
      a.delete(y), u.delete(y);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (y) => {
      if (h = y, s) {
        c = !0;
        return;
      }
      s = !0, [r, a] = [a, r], r.forEach(p), i && dy.value && dy.value.frameloop[i].push(d), d = 0, r.clear(), s = !1, c && (c = !1, g.process(y));
    }
  };
  return g;
}
const iT = 40;
function tb(t, i) {
  let r = !1, a = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, u = es.reduce((D, V) => (D[V] = nT(c, i ? V : void 0), D), {}), { setup: h, read: d, resolveKeyframes: p, preUpdate: g, update: y, preRender: b, render: v, postRender: S } = u, A = () => {
    const D = Qn.useManualTiming ? s.timestamp : performance.now();
    r = !1, Qn.useManualTiming || (s.delta = a ? 1e3 / 60 : Math.max(Math.min(D - s.timestamp, iT), 1)), s.timestamp = D, s.isProcessing = !0, h.process(s), d.process(s), p.process(s), g.process(s), y.process(s), b.process(s), v.process(s), S.process(s), s.isProcessing = !1, r && i && (a = !1, t(A));
  }, M = () => {
    r = !0, a = !0, s.isProcessing || t(A);
  };
  return { schedule: es.reduce((D, V) => {
    const _ = u[V];
    return D[V] = (O, z = !1, N = !1) => (r || M(), _.schedule(O, z, N)), D;
  }, {}), cancel: (D) => {
    for (let V = 0; V < es.length; V++)
      u[es[V]].cancel(D);
  }, state: s, steps: u };
}
const { schedule: Gt, cancel: Ti, state: ge, steps: nf } = /* @__PURE__ */ tb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : un, !0);
let ds;
function rT() {
  ds = void 0;
}
const Le = {
  now: () => (ds === void 0 && Le.set(ge.isProcessing || Qn.useManualTiming ? ge.timestamp : performance.now()), ds),
  set: (t) => {
    ds = t, queueMicrotask(rT);
  }
}, eb = (t) => (i) => typeof i == "string" && i.startsWith(t), zh = /* @__PURE__ */ eb("--"), aT = /* @__PURE__ */ eb("var(--"), Mh = (t) => aT(t) ? lT.test(t.split("/*")[0].trim()) : !1, lT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Wr = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Sl = {
  ...Wr,
  transform: (t) => In(0, 1, t)
}, ns = {
  ...Wr,
  default: 1
}, dl = (t) => Math.round(t * 1e5) / 1e5, Rh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function oT(t) {
  return t == null;
}
const sT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Oh = (t, i) => (r) => !!(typeof r == "string" && sT.test(r) && r.startsWith(t) || i && !oT(r) && Object.prototype.hasOwnProperty.call(r, i)), nb = (t, i, r) => (a) => {
  if (typeof a != "string")
    return a;
  const [s, c, u, h] = a.match(Rh);
  return {
    [t]: parseFloat(s),
    [i]: parseFloat(c),
    [r]: parseFloat(u),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, uT = (t) => In(0, 255, t), rf = {
  ...Wr,
  transform: (t) => Math.round(uT(t))
}, Ii = {
  test: /* @__PURE__ */ Oh("rgb", "red"),
  parse: /* @__PURE__ */ nb("red", "green", "blue"),
  transform: ({ red: t, green: i, blue: r, alpha: a = 1 }) => "rgba(" + rf.transform(t) + ", " + rf.transform(i) + ", " + rf.transform(r) + ", " + dl(Sl.transform(a)) + ")"
};
function cT(t) {
  let i = "", r = "", a = "", s = "";
  return t.length > 5 ? (i = t.substring(1, 3), r = t.substring(3, 5), a = t.substring(5, 7), s = t.substring(7, 9)) : (i = t.substring(1, 2), r = t.substring(2, 3), a = t.substring(3, 4), s = t.substring(4, 5), i += i, r += r, a += a, s += s), {
    red: parseInt(i, 16),
    green: parseInt(r, 16),
    blue: parseInt(a, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const qf = {
  test: /* @__PURE__ */ Oh("#"),
  parse: cT,
  transform: Ii.transform
}, Nl = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (i) => typeof i == "string" && i.endsWith(t) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${t}`
}), Si = /* @__PURE__ */ Nl("deg"), Cn = /* @__PURE__ */ Nl("%"), bt = /* @__PURE__ */ Nl("px"), fT = /* @__PURE__ */ Nl("vh"), hT = /* @__PURE__ */ Nl("vw"), py = {
  ...Cn,
  parse: (t) => Cn.parse(t) / 100,
  transform: (t) => Cn.transform(t * 100)
}, qr = {
  test: /* @__PURE__ */ Oh("hsl", "hue"),
  parse: /* @__PURE__ */ nb("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: i, lightness: r, alpha: a = 1 }) => "hsla(" + Math.round(t) + ", " + Cn.transform(dl(i)) + ", " + Cn.transform(dl(r)) + ", " + dl(Sl.transform(a)) + ")"
}, we = {
  test: (t) => Ii.test(t) || qf.test(t) || qr.test(t),
  parse: (t) => Ii.test(t) ? Ii.parse(t) : qr.test(t) ? qr.parse(t) : qf.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Ii.transform(t) : qr.transform(t)
}, dT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function pT(t) {
  var i, r;
  return isNaN(t) && typeof t == "string" && (((i = t.match(Rh)) == null ? void 0 : i.length) || 0) + (((r = t.match(dT)) == null ? void 0 : r.length) || 0) > 0;
}
const ib = "number", rb = "color", mT = "var", gT = "var(", my = "${}", yT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Tl(t) {
  const i = t.toString(), r = [], a = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const h = i.replace(yT, (d) => (we.test(d) ? (a.color.push(c), s.push(rb), r.push(we.parse(d))) : d.startsWith(gT) ? (a.var.push(c), s.push(mT), r.push(d)) : (a.number.push(c), s.push(ib), r.push(parseFloat(d))), ++c, my)).split(my);
  return { values: r, split: h, indexes: a, types: s };
}
function ab(t) {
  return Tl(t).values;
}
function lb(t) {
  const { split: i, types: r } = Tl(t), a = i.length;
  return (s) => {
    let c = "";
    for (let u = 0; u < a; u++)
      if (c += i[u], s[u] !== void 0) {
        const h = r[u];
        h === ib ? c += dl(s[u]) : h === rb ? c += we.transform(s[u]) : c += s[u];
      }
    return c;
  };
}
const vT = (t) => typeof t == "number" ? 0 : t;
function bT(t) {
  const i = ab(t);
  return lb(t)(i.map(vT));
}
const ki = {
  test: pT,
  parse: ab,
  createTransformer: lb,
  getAnimatableNone: bT
};
function af(t, i, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (i - t) * 6 * r : r < 1 / 2 ? i : r < 2 / 3 ? t + (i - t) * (2 / 3 - r) * 6 : t;
}
function wT({ hue: t, saturation: i, lightness: r, alpha: a }) {
  t /= 360, i /= 100, r /= 100;
  let s = 0, c = 0, u = 0;
  if (!i)
    s = c = u = r;
  else {
    const h = r < 0.5 ? r * (1 + i) : r + i - r * i, d = 2 * r - h;
    s = af(d, h, t + 1 / 3), c = af(d, h, t), u = af(d, h, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(u * 255),
    alpha: a
  };
}
function ys(t, i) {
  return (r) => r > 0 ? i : t;
}
const Xt = (t, i, r) => t + (i - t) * r, lf = (t, i, r) => {
  const a = t * t, s = r * (i * i - a) + a;
  return s < 0 ? 0 : Math.sqrt(s);
}, xT = [qf, Ii, qr], ST = (t) => xT.find((i) => i.test(t));
function gy(t) {
  const i = ST(t);
  if (!i)
    return !1;
  let r = i.parse(t);
  return i === qr && (r = wT(r)), r;
}
const yy = (t, i) => {
  const r = gy(t), a = gy(i);
  if (!r || !a)
    return ys(t, i);
  const s = { ...r };
  return (c) => (s.red = lf(r.red, a.red, c), s.green = lf(r.green, a.green, c), s.blue = lf(r.blue, a.blue, c), s.alpha = Xt(r.alpha, a.alpha, c), Ii.transform(s));
}, Yf = /* @__PURE__ */ new Set(["none", "hidden"]);
function TT(t, i) {
  return Yf.has(t) ? (r) => r <= 0 ? t : i : (r) => r >= 1 ? i : t;
}
function kT(t, i) {
  return (r) => Xt(t, i, r);
}
function _h(t) {
  return typeof t == "number" ? kT : typeof t == "string" ? Mh(t) ? ys : we.test(t) ? yy : DT : Array.isArray(t) ? ob : typeof t == "object" ? we.test(t) ? yy : ET : ys;
}
function ob(t, i) {
  const r = [...t], a = r.length, s = t.map((c, u) => _h(c)(c, i[u]));
  return (c) => {
    for (let u = 0; u < a; u++)
      r[u] = s[u](c);
    return r;
  };
}
function ET(t, i) {
  const r = { ...t, ...i }, a = {};
  for (const s in r)
    t[s] !== void 0 && i[s] !== void 0 && (a[s] = _h(t[s])(t[s], i[s]));
  return (s) => {
    for (const c in a)
      r[c] = a[c](s);
    return r;
  };
}
function AT(t, i) {
  const r = [], a = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < i.values.length; s++) {
    const c = i.types[s], u = t.indexes[c][a[c]], h = t.values[u] ?? 0;
    r[s] = h, a[c]++;
  }
  return r;
}
const DT = (t, i) => {
  const r = ki.createTransformer(i), a = Tl(t), s = Tl(i);
  return a.indexes.var.length === s.indexes.var.length && a.indexes.color.length === s.indexes.color.length && a.indexes.number.length >= s.indexes.number.length ? Yf.has(t) && !s.values.length || Yf.has(i) && !a.values.length ? TT(t, i) : Ol(ob(AT(a, s), s.values), r) : ys(t, i);
};
function sb(t, i, r) {
  return typeof t == "number" && typeof i == "number" && typeof r == "number" ? Xt(t, i, r) : _h(t)(t, i);
}
const CT = (t) => {
  const i = ({ timestamp: r }) => t(r);
  return {
    start: () => Gt.update(i, !0),
    stop: () => Ti(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ge.isProcessing ? ge.timestamp : Le.now()
  };
}, ub = (t, i, r = 10) => {
  let a = "";
  const s = Math.max(Math.round(i / r), 2);
  for (let c = 0; c < s; c++)
    a += t(c / (s - 1)) + ", ";
  return `linear(${a.substring(0, a.length - 2)})`;
}, vs = 2e4;
function Nh(t) {
  let i = 0;
  const r = 50;
  let a = t.next(i);
  for (; !a.done && i < vs; )
    i += r, a = t.next(i);
  return i >= vs ? 1 / 0 : i;
}
function zT(t, i = 100, r) {
  const a = r({ ...t, keyframes: [0, i] }), s = Math.min(Nh(a), vs);
  return {
    type: "keyframes",
    ease: (c) => a.next(s * c).value / i,
    duration: /* @__PURE__ */ Dn(s)
  };
}
const MT = 5;
function cb(t, i, r) {
  const a = Math.max(i - MT, 0);
  return Yv(r - t(a), i - a);
}
const Kt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, vy = 1e-3;
function RT({ duration: t = Kt.duration, bounce: i = Kt.bounce, velocity: r = Kt.velocity, mass: a = Kt.mass }) {
  let s, c, u = 1 - i;
  u = In(Kt.minDamping, Kt.maxDamping, u), t = In(Kt.minDuration, Kt.maxDuration, /* @__PURE__ */ Dn(t)), u < 1 ? (s = (p) => {
    const g = p * u, y = g * t, b = g - r, v = Ff(p, u), S = Math.exp(-y);
    return vy - b / v * S;
  }, c = (p) => {
    const y = p * u * t, b = y * r + r, v = Math.pow(u, 2) * Math.pow(p, 2) * t, S = Math.exp(-y), A = Ff(Math.pow(p, 2), u);
    return (-s(p) + vy > 0 ? -1 : 1) * ((b - v) * S) / A;
  }) : (s = (p) => {
    const g = Math.exp(-p * t), y = (p - r) * t + 1;
    return -1e-3 + g * y;
  }, c = (p) => {
    const g = Math.exp(-p * t), y = (r - p) * (t * t);
    return g * y;
  });
  const h = 5 / t, d = _T(s, c, h);
  if (t = /* @__PURE__ */ An(t), isNaN(d))
    return {
      stiffness: Kt.stiffness,
      damping: Kt.damping,
      duration: t
    };
  {
    const p = Math.pow(d, 2) * a;
    return {
      stiffness: p,
      damping: u * 2 * Math.sqrt(a * p),
      duration: t
    };
  }
}
const OT = 12;
function _T(t, i, r) {
  let a = r;
  for (let s = 1; s < OT; s++)
    a = a - t(a) / i(a);
  return a;
}
function Ff(t, i) {
  return t * Math.sqrt(1 - i * i);
}
const NT = ["duration", "bounce"], LT = ["stiffness", "damping", "mass"];
function by(t, i) {
  return i.some((r) => t[r] !== void 0);
}
function BT(t) {
  let i = {
    velocity: Kt.velocity,
    stiffness: Kt.stiffness,
    damping: Kt.damping,
    mass: Kt.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!by(t, LT) && by(t, NT))
    if (t.visualDuration) {
      const r = t.visualDuration, a = 2 * Math.PI / (r * 1.2), s = a * a, c = 2 * In(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      i = {
        ...i,
        mass: Kt.mass,
        stiffness: s,
        damping: c
      };
    } else {
      const r = RT(t);
      i = {
        ...i,
        ...r,
        mass: Kt.mass
      }, i.isResolvedFromDuration = !0;
    }
  return i;
}
function bs(t = Kt.visualDuration, i = Kt.bounce) {
  const r = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: i
  } : t;
  let { restSpeed: a, restDelta: s } = r;
  const c = r.keyframes[0], u = r.keyframes[r.keyframes.length - 1], h = { done: !1, value: c }, { stiffness: d, damping: p, mass: g, duration: y, velocity: b, isResolvedFromDuration: v } = BT({
    ...r,
    velocity: -/* @__PURE__ */ Dn(r.velocity || 0)
  }), S = b || 0, A = p / (2 * Math.sqrt(d * g)), M = u - c, k = /* @__PURE__ */ Dn(Math.sqrt(d / g)), C = Math.abs(M) < 5;
  a || (a = C ? Kt.restSpeed.granular : Kt.restSpeed.default), s || (s = C ? Kt.restDelta.granular : Kt.restDelta.default);
  let D;
  if (A < 1) {
    const _ = Ff(k, A);
    D = (O) => {
      const z = Math.exp(-A * k * O);
      return u - z * ((S + A * k * M) / _ * Math.sin(_ * O) + M * Math.cos(_ * O));
    };
  } else if (A === 1)
    D = (_) => u - Math.exp(-k * _) * (M + (S + k * M) * _);
  else {
    const _ = k * Math.sqrt(A * A - 1);
    D = (O) => {
      const z = Math.exp(-A * k * O), N = Math.min(_ * O, 300);
      return u - z * ((S + A * k * M) * Math.sinh(N) + _ * M * Math.cosh(N)) / _;
    };
  }
  const V = {
    calculatedDuration: v && y || null,
    next: (_) => {
      const O = D(_);
      if (v)
        h.done = _ >= y;
      else {
        let z = _ === 0 ? S : 0;
        A < 1 && (z = _ === 0 ? /* @__PURE__ */ An(S) : cb(D, _, O));
        const N = Math.abs(z) <= a, F = Math.abs(u - O) <= s;
        h.done = N && F;
      }
      return h.value = h.done ? u : O, h;
    },
    toString: () => {
      const _ = Math.min(Nh(V), vs), O = ub((z) => V.next(_ * z).value, _, 30);
      return _ + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return V;
}
bs.applyToOptions = (t) => {
  const i = zT(t, 100, bs);
  return t.ease = i.ease, t.duration = /* @__PURE__ */ An(i.duration), t.type = "keyframes", t;
};
function Xf({ keyframes: t, velocity: i = 0, power: r = 0.8, timeConstant: a = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: u, min: h, max: d, restDelta: p = 0.5, restSpeed: g }) {
  const y = t[0], b = {
    done: !1,
    value: y
  }, v = (N) => h !== void 0 && N < h || d !== void 0 && N > d, S = (N) => h === void 0 ? d : d === void 0 || Math.abs(h - N) < Math.abs(d - N) ? h : d;
  let A = r * i;
  const M = y + A, k = u === void 0 ? M : u(M);
  k !== M && (A = k - y);
  const C = (N) => -A * Math.exp(-N / a), D = (N) => k + C(N), V = (N) => {
    const F = C(N), L = D(N);
    b.done = Math.abs(F) <= p, b.value = b.done ? k : L;
  };
  let _, O;
  const z = (N) => {
    v(b.value) && (_ = N, O = bs({
      keyframes: [b.value, S(b.value)],
      velocity: cb(D, N, b.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: c,
      restDelta: p,
      restSpeed: g
    }));
  };
  return z(0), {
    calculatedDuration: null,
    next: (N) => {
      let F = !1;
      return !O && _ === void 0 && (F = !0, V(N), z(N)), _ !== void 0 && N >= _ ? O.next(N - _) : (!F && V(N), b);
    }
  };
}
function VT(t, i, r) {
  const a = [], s = r || Qn.mix || sb, c = t.length - 1;
  for (let u = 0; u < c; u++) {
    let h = s(t[u], t[u + 1]);
    if (i) {
      const d = Array.isArray(i) ? i[u] || un : i;
      h = Ol(d, h);
    }
    a.push(h);
  }
  return a;
}
function UT(t, i, { clamp: r = !0, ease: a, mixer: s } = {}) {
  const c = t.length;
  if (kh(c === i.length), c === 1)
    return () => i[0];
  if (c === 2 && i[0] === i[1])
    return () => i[1];
  const u = t[0] === t[1];
  t[0] > t[c - 1] && (t = [...t].reverse(), i = [...i].reverse());
  const h = VT(i, a, s), d = h.length, p = (g) => {
    if (u && g < t[0])
      return i[0];
    let y = 0;
    if (d > 1)
      for (; y < t.length - 2 && !(g < t[y + 1]); y++)
        ;
    const b = /* @__PURE__ */ xl(t[y], t[y + 1], g);
    return h[y](b);
  };
  return r ? (g) => p(In(t[0], t[c - 1], g)) : p;
}
function jT(t, i) {
  const r = t[t.length - 1];
  for (let a = 1; a <= i; a++) {
    const s = /* @__PURE__ */ xl(0, i, a);
    t.push(Xt(r, 1, s));
  }
}
function HT(t) {
  const i = [0];
  return jT(i, t.length - 1), i;
}
function PT(t, i) {
  return t.map((r) => r * i);
}
function qT(t, i) {
  return t.map(() => i || Jv).splice(0, t.length - 1);
}
function pl({ duration: t = 300, keyframes: i, times: r, ease: a = "easeInOut" }) {
  const s = $S(a) ? a.map(hy) : hy(a), c = {
    done: !1,
    value: i[0]
  }, u = PT(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === i.length ? r : HT(i),
    t
  ), h = UT(u, i, {
    ease: Array.isArray(s) ? s : qT(i, s)
  });
  return {
    calculatedDuration: t,
    next: (d) => (c.value = h(d), c.done = d >= t, c)
  };
}
const YT = (t) => t !== null;
function Lh(t, { repeat: i, repeatType: r = "loop" }, a, s = 1) {
  const c = t.filter(YT), h = s < 0 || i && r !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !h || a === void 0 ? c[h] : a;
}
const FT = {
  decay: Xf,
  inertia: Xf,
  tween: pl,
  keyframes: pl,
  spring: bs
};
function fb(t) {
  typeof t.type == "string" && (t.type = FT[t.type]);
}
class Bh {
  constructor() {
    this.count = 0, this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this.count++, this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(i, r) {
    return this.finished.then(i, r);
  }
}
const XT = (t) => t / 100;
class hb extends Bh {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: r } = this.options;
      if (r && r.updatedAt !== Le.now() && this.tick(Le.now()), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    fb(i);
    const { type: r = pl, repeat: a = 0, repeatDelay: s = 0, repeatType: c, velocity: u = 0 } = i;
    let { keyframes: h } = i;
    const d = r || pl;
    d !== pl && typeof h[0] != "number" && (this.mixKeyframes = Ol(XT, sb(h[0], h[1])), h = [0, 100]);
    const p = d({ ...i, keyframes: h });
    c === "mirror" && (this.mirroredGenerator = d({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -u
    })), p.calculatedDuration === null && (p.calculatedDuration = Nh(p));
    const { calculatedDuration: g } = p;
    this.calculatedDuration = g, this.resolvedDuration = g + s, this.totalDuration = this.resolvedDuration * (a + 1) - s, this.generator = p;
  }
  updateTime(i) {
    const r = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(i, r = !1) {
    const { generator: a, totalDuration: s, mixKeyframes: c, mirroredGenerator: u, resolvedDuration: h, calculatedDuration: d } = this;
    if (this.startTime === null)
      return a.next(0);
    const { delay: p = 0, keyframes: g, repeat: y, repeatType: b, repeatDelay: v, type: S, onUpdate: A, finalKeyframe: M } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - s / this.speed, this.startTime)), r ? this.currentTime = i : this.updateTime(i);
    const k = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), C = this.playbackSpeed >= 0 ? k < 0 : k > s;
    this.currentTime = Math.max(k, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let D = this.currentTime, V = a;
    if (y) {
      const N = Math.min(this.currentTime, s) / h;
      let F = Math.floor(N), L = N % 1;
      !L && N >= 1 && (L = 1), L === 1 && F--, F = Math.min(F, y + 1), !!(F % 2) && (b === "reverse" ? (L = 1 - L, v && (L -= v / h)) : b === "mirror" && (V = u)), D = In(0, 1, L) * h;
    }
    const _ = C ? { done: !1, value: g[0] } : V.next(D);
    c && (_.value = c(_.value));
    let { done: O } = _;
    !C && d !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const z = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
    return z && S !== Xf && (_.value = Lh(g, this.options, M, this.speed)), A && A(_.value), z && this.finish(), _;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(i, r) {
    return this.finished.then(i, r);
  }
  get duration() {
    return /* @__PURE__ */ Dn(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Dn(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ An(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Le.now());
    const r = this.playbackSpeed !== i;
    this.playbackSpeed = i, r && (this.time = /* @__PURE__ */ Dn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = CT, onPlay: r, startTime: a } = this.options;
    this.driver || (this.driver = i((c) => this.tick(c))), r && r();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = a ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Le.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: i } = this.options;
    i && i();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown();
  }
  teardown() {
    this.notifyFinished(), this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(i) {
    return this.startTime = 0, this.tick(i, !0);
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), i.observe(this);
  }
}
function GT(t) {
  for (let i = 1; i < t.length; i++)
    t[i] ?? (t[i] = t[i - 1]);
}
const Qi = (t) => t * 180 / Math.PI, Gf = (t) => {
  const i = Qi(Math.atan2(t[1], t[0]));
  return If(i);
}, IT = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Gf,
  rotateZ: Gf,
  skewX: (t) => Qi(Math.atan(t[1])),
  skewY: (t) => Qi(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, If = (t) => (t = t % 360, t < 0 && (t += 360), t), wy = Gf, xy = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Sy = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), QT = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: xy,
  scaleY: Sy,
  scale: (t) => (xy(t) + Sy(t)) / 2,
  rotateX: (t) => If(Qi(Math.atan2(t[6], t[5]))),
  rotateY: (t) => If(Qi(Math.atan2(-t[2], t[0]))),
  rotateZ: wy,
  rotate: wy,
  skewX: (t) => Qi(Math.atan(t[4])),
  skewY: (t) => Qi(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ty(t) {
  return t.includes("scale") ? 1 : 0;
}
function Qf(t, i) {
  if (!t || t === "none")
    return Ty(i);
  const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let a, s;
  if (r)
    a = QT, s = r;
  else {
    const h = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    a = IT, s = h;
  }
  if (!s)
    return Ty(i);
  const c = a[i], u = s[1].split(",").map(ZT);
  return typeof c == "function" ? c(u) : u[c];
}
const KT = (t, i) => {
  const { transform: r = "none" } = getComputedStyle(t);
  return Qf(r, i);
};
function ZT(t) {
  return parseFloat(t.trim());
}
const Jr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], $r = new Set(Jr), ky = (t) => t === Wr || t === bt, WT = /* @__PURE__ */ new Set(["x", "y", "z"]), JT = Jr.filter((t) => !WT.has(t));
function $T(t) {
  const i = [];
  return JT.forEach((r) => {
    const a = t.getValue(r);
    a !== void 0 && (i.push([r, a.get()]), a.set(r.startsWith("scale") ? 1 : 0));
  }), i;
}
const Qr = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: i = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(i) - parseFloat(r),
  height: ({ y: t }, { paddingTop: i = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(i) - parseFloat(r),
  top: (t, { top: i }) => parseFloat(i),
  left: (t, { left: i }) => parseFloat(i),
  bottom: ({ y: t }, { top: i }) => parseFloat(i) + (t.max - t.min),
  right: ({ x: t }, { left: i }) => parseFloat(i) + (t.max - t.min),
  // Transform
  x: (t, { transform: i }) => Qf(i, "x"),
  y: (t, { transform: i }) => Qf(i, "y")
};
Qr.translateX = Qr.x;
Qr.translateY = Qr.y;
const Ki = /* @__PURE__ */ new Set();
let Kf = !1, Zf = !1, Wf = !1;
function db() {
  if (Zf) {
    const t = Array.from(Ki).filter((a) => a.needsMeasurement), i = new Set(t.map((a) => a.element)), r = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const s = $T(a);
      s.length && (r.set(a, s), a.render());
    }), t.forEach((a) => a.measureInitialState()), i.forEach((a) => {
      a.render();
      const s = r.get(a);
      s && s.forEach(([c, u]) => {
        var h;
        (h = a.getValue(c)) == null || h.set(u);
      });
    }), t.forEach((a) => a.measureEndState()), t.forEach((a) => {
      a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
    });
  }
  Zf = !1, Kf = !1, Ki.forEach((t) => t.complete(Wf)), Ki.clear();
}
function pb() {
  Ki.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Zf = !0);
  });
}
function tk() {
  Wf = !0, pb(), db(), Wf = !1;
}
class Vh {
  constructor(i, r, a, s, c, u = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...i], this.onComplete = r, this.name = a, this.motionValue = s, this.element = c, this.isAsync = u;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Ki.add(this), Kf || (Kf = !0, Gt.read(pb), Gt.resolveKeyframes(db))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: r, element: a, motionValue: s } = this;
    if (i[0] === null) {
      const c = s == null ? void 0 : s.get(), u = i[i.length - 1];
      if (c !== void 0)
        i[0] = c;
      else if (a && r) {
        const h = a.readValue(r, u);
        h != null && (i[0] = h);
      }
      i[0] === void 0 && (i[0] = u), s && c === void 0 && s.set(i[0]);
    }
    GT(i);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(i = !1) {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Ki.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Ki.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ek = (t) => t.startsWith("--");
function nk(t, i, r) {
  ek(i) ? t.style.setProperty(i, r) : t.style[i] = r;
}
const ik = /* @__PURE__ */ Eh(() => window.ScrollTimeline !== void 0), rk = {};
function ak(t, i) {
  const r = /* @__PURE__ */ Eh(t);
  return () => rk[i] ?? r();
}
const mb = /* @__PURE__ */ ak(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), fl = ([t, i, r, a]) => `cubic-bezier(${t}, ${i}, ${r}, ${a})`, Ey = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ fl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ fl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ fl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ fl([0.33, 1.53, 0.69, 0.99])
};
function gb(t, i) {
  if (t)
    return typeof t == "function" ? mb() ? ub(t, i) : "ease-out" : $v(t) ? fl(t) : Array.isArray(t) ? t.map((r) => gb(r, i) || Ey.easeOut) : Ey[t];
}
function lk(t, i, r, { delay: a = 0, duration: s = 300, repeat: c = 0, repeatType: u = "loop", ease: h = "easeOut", times: d } = {}, p = void 0) {
  const g = {
    [i]: r
  };
  d && (g.offset = d);
  const y = gb(h, s);
  Array.isArray(y) && (g.easing = y);
  const b = {
    delay: a,
    duration: s,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: c + 1,
    direction: u === "reverse" ? "alternate" : "normal"
  };
  return p && (b.pseudoElement = p), t.animate(g, b);
}
function yb(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ok({ type: t, ...i }) {
  return yb(t) && mb() ? t.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class sk extends Bh {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !i)
      return;
    const { element: r, name: a, keyframes: s, pseudoElement: c, allowFlatten: u = !1, finalKeyframe: h, onComplete: d } = i;
    this.isPseudoElement = !!c, this.allowFlatten = u, this.options = i, kh(typeof i.type != "string");
    const p = ok(i);
    this.animation = lk(r, a, s, p, c), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !c) {
        const g = Lh(s, this.options, h, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : nk(r, a, g), this.animation.cancel();
      }
      d == null || d(), this.notifyFinished();
    }, this.animation.oncancel = () => this.notifyFinished();
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var i, r;
    (r = (i = this.animation).finish) == null || r.call(i);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var i, r;
    this.isPseudoElement || (r = (i = this.animation).commitStyles) == null || r.call(i);
  }
  get duration() {
    var r, a;
    const i = ((a = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : a.call(r).duration) || 0;
    return /* @__PURE__ */ Dn(Number(i));
  }
  get time() {
    return /* @__PURE__ */ Dn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ An(i);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), this.animation.playbackRate = i;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: i, observe: r }) {
    var a;
    return this.allowFlatten && ((a = this.animation.effect) == null || a.updateTiming({ easing: "linear" })), this.animation.onfinish = null, i && ik() ? (this.animation.timeline = i, un) : r(this);
  }
}
const vb = {
  anticipate: Kv,
  backInOut: Qv,
  circInOut: Wv
};
function uk(t) {
  return t in vb;
}
function ck(t) {
  typeof t.ease == "string" && uk(t.ease) && (t.ease = vb[t.ease]);
}
const Ay = 10;
class fk extends sk {
  constructor(i) {
    ck(i), fb(i), super(i), i.startTime && (this.startTime = i.startTime), this.options = i;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(i) {
    const { motionValue: r, onUpdate: a, onComplete: s, element: c, ...u } = this.options;
    if (!r)
      return;
    if (i !== void 0) {
      r.set(i);
      return;
    }
    const h = new hb({
      ...u,
      autoplay: !1
    }), d = /* @__PURE__ */ An(this.finishedTime ?? this.time);
    r.setWithVelocity(h.sample(d - Ay).value, h.sample(d).value, Ay), h.stop();
  }
}
const Dy = (t, i) => i === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ki.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function hk(t) {
  const i = t[0];
  if (t.length === 1)
    return !0;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== i)
      return !0;
}
function dk(t, i, r, a) {
  const s = t[0];
  if (s === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const c = t[t.length - 1], u = Dy(s, i), h = Dy(c, i);
  return !u || !h ? !1 : hk(t) || (r === "spring" || yb(r)) && a;
}
const pk = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), mk = /* @__PURE__ */ Eh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function gk(t) {
  const { motionValue: i, name: r, repeatDelay: a, repeatType: s, damping: c, type: u } = t;
  if (!i || !i.owner || !(i.owner.current instanceof HTMLElement))
    return !1;
  const { onUpdate: h, transformTemplate: d } = i.owner.getProps();
  return mk() && r && pk.has(r) && (r !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !h && !a && s !== "mirror" && c !== 0 && u !== "inertia";
}
const yk = 40;
class vk extends Bh {
  constructor({ autoplay: i = !0, delay: r = 0, type: a = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: u = "loop", keyframes: h, name: d, motionValue: p, element: g, ...y }) {
    var S;
    super(), this.stop = () => {
      var A, M;
      this._animation ? (this._animation.stop(), (A = this.stopTimeline) == null || A.call(this)) : (M = this.keyframeResolver) == null || M.cancel();
    }, this.createdAt = Le.now();
    const b = {
      autoplay: i,
      delay: r,
      type: a,
      repeat: s,
      repeatDelay: c,
      repeatType: u,
      name: d,
      motionValue: p,
      element: g,
      ...y
    }, v = (g == null ? void 0 : g.KeyframeResolver) || Vh;
    this.keyframeResolver = new v(h, (A, M, k) => this.onKeyframesResolved(A, M, b, !k), d, p, g), (S = this.keyframeResolver) == null || S.scheduleResolve();
  }
  onKeyframesResolved(i, r, a, s) {
    this.keyframeResolver = void 0;
    const { name: c, type: u, velocity: h, delay: d, isHandoff: p, onUpdate: g } = a;
    this.resolvedAt = Le.now(), dk(i, c, u, h) || ((Qn.instantAnimations || !d) && (g == null || g(Lh(i, a, r))), i[0] = i[i.length - 1], a.duration = 0, a.repeat = 0);
    const b = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > yk ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...a,
      keyframes: i
    }, v = !p && gk(b) ? new fk({
      ...b,
      element: b.motionValue.owner.current
    }) : new hb(b);
    v.finished.then(() => this.notifyFinished()).catch(un), this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = v;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, r) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || tk(), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this.animation.cancel();
  }
}
const bk = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function wk(t) {
  const i = bk.exec(t);
  if (!i)
    return [,];
  const [, r, a, s] = i;
  return [`--${r ?? a}`, s];
}
function bb(t, i, r = 1) {
  const [a, s] = wk(t);
  if (!a)
    return;
  const c = window.getComputedStyle(i).getPropertyValue(a);
  if (c) {
    const u = c.trim();
    return Pv(u) ? parseFloat(u) : u;
  }
  return Mh(s) ? bb(s, i, r + 1) : s;
}
function Uh(t, i) {
  return (t == null ? void 0 : t[i]) ?? (t == null ? void 0 : t.default) ?? t;
}
const wb = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jr
]), xk = {
  test: (t) => t === "auto",
  parse: (t) => t
}, xb = (t) => (i) => i.test(t), Sb = [Wr, bt, Cn, Si, hT, fT, xk], Cy = (t) => Sb.find(xb(t));
function Sk(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || qv(t) : !0;
}
const Tk = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function kk(t) {
  const [i, r] = t.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return t;
  const [a] = r.match(Rh) || [];
  if (!a)
    return t;
  const s = r.replace(a, "");
  let c = Tk.has(i) ? 1 : 0;
  return a !== r && (c *= 100), i + "(" + c + s + ")";
}
const Ek = /\b([a-z-]*)\(.*?\)/gu, Jf = {
  ...ki,
  getAnimatableNone: (t) => {
    const i = t.match(Ek);
    return i ? i.map(kk).join(" ") : t;
  }
}, zy = {
  ...Wr,
  transform: Math.round
}, Ak = {
  rotate: Si,
  rotateX: Si,
  rotateY: Si,
  rotateZ: Si,
  scale: ns,
  scaleX: ns,
  scaleY: ns,
  scaleZ: ns,
  skew: Si,
  skewX: Si,
  skewY: Si,
  distance: bt,
  translateX: bt,
  translateY: bt,
  translateZ: bt,
  x: bt,
  y: bt,
  z: bt,
  perspective: bt,
  transformPerspective: bt,
  opacity: Sl,
  originX: py,
  originY: py,
  originZ: bt
}, jh = {
  // Border props
  borderWidth: bt,
  borderTopWidth: bt,
  borderRightWidth: bt,
  borderBottomWidth: bt,
  borderLeftWidth: bt,
  borderRadius: bt,
  radius: bt,
  borderTopLeftRadius: bt,
  borderTopRightRadius: bt,
  borderBottomRightRadius: bt,
  borderBottomLeftRadius: bt,
  // Positioning props
  width: bt,
  maxWidth: bt,
  height: bt,
  maxHeight: bt,
  top: bt,
  right: bt,
  bottom: bt,
  left: bt,
  // Spacing props
  padding: bt,
  paddingTop: bt,
  paddingRight: bt,
  paddingBottom: bt,
  paddingLeft: bt,
  margin: bt,
  marginTop: bt,
  marginRight: bt,
  marginBottom: bt,
  marginLeft: bt,
  // Misc
  backgroundPositionX: bt,
  backgroundPositionY: bt,
  ...Ak,
  zIndex: zy,
  // SVG
  fillOpacity: Sl,
  strokeOpacity: Sl,
  numOctaves: zy
}, Dk = {
  ...jh,
  // Color props
  color: we,
  backgroundColor: we,
  outlineColor: we,
  fill: we,
  stroke: we,
  // Border props
  borderColor: we,
  borderTopColor: we,
  borderRightColor: we,
  borderBottomColor: we,
  borderLeftColor: we,
  filter: Jf,
  WebkitFilter: Jf
}, Tb = (t) => Dk[t];
function kb(t, i) {
  let r = Tb(t);
  return r !== Jf && (r = ki), r.getAnimatableNone ? r.getAnimatableNone(i) : void 0;
}
const Ck = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function zk(t, i, r) {
  let a = 0, s;
  for (; a < t.length && !s; ) {
    const c = t[a];
    typeof c == "string" && !Ck.has(c) && Tl(c).values.length && (s = t[a]), a++;
  }
  if (s && r)
    for (const c of i)
      t[c] = kb(r, s);
}
class Mk extends Vh {
  constructor(i, r, a, s, c) {
    super(i, r, a, s, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: r, name: a } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < i.length; d++) {
      let p = i[d];
      if (typeof p == "string" && (p = p.trim(), Mh(p))) {
        const g = bb(p, r.current);
        g !== void 0 && (i[d] = g), d === i.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !wb.has(a) || i.length !== 2)
      return;
    const [s, c] = i, u = Cy(s), h = Cy(c);
    if (u !== h)
      if (ky(u) && ky(h))
        for (let d = 0; d < i.length; d++) {
          const p = i[d];
          typeof p == "string" && (i[d] = parseFloat(p));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: r } = this, a = [];
    for (let s = 0; s < i.length; s++)
      (i[s] === null || Sk(i[s])) && a.push(s);
    a.length && zk(i, a, r);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: r, name: a } = this;
    if (!i || !i.current)
      return;
    a === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Qr[a](i.measureViewportBox(), window.getComputedStyle(i.current)), r[0] = this.measuredOrigin;
    const s = r[r.length - 1];
    s !== void 0 && i.getValue(a, s).jump(s, !1);
  }
  measureEndState() {
    var h;
    const { element: i, name: r, unresolvedKeyframes: a } = this;
    if (!i || !i.current)
      return;
    const s = i.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const c = a.length - 1, u = a[c];
    a[c] = Qr[r](i.measureViewportBox(), window.getComputedStyle(i.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), (h = this.removedTransforms) != null && h.length && this.removedTransforms.forEach(([d, p]) => {
      i.getValue(d).set(p);
    }), this.resolveNoneKeyframes();
  }
}
function Rk(t, i, r) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let a = document;
    const s = (r == null ? void 0 : r[t]) ?? a.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const { schedule: Hh } = /* @__PURE__ */ tb(queueMicrotask, !1), pn = {
  x: !1,
  y: !1
};
function Eb() {
  return pn.x || pn.y;
}
function Ok(t) {
  return t === "x" || t === "y" ? pn[t] ? null : (pn[t] = !0, () => {
    pn[t] = !1;
  }) : pn.x || pn.y ? null : (pn.x = pn.y = !0, () => {
    pn.x = pn.y = !1;
  });
}
function Ab(t, i) {
  const r = Rk(t), a = new AbortController(), s = {
    passive: !0,
    ...i,
    signal: a.signal
  };
  return [r, s, () => a.abort()];
}
function My(t) {
  return !(t.pointerType === "touch" || Eb());
}
function _k(t, i, r = {}) {
  const [a, s, c] = Ab(t, r), u = (h) => {
    if (!My(h))
      return;
    const { target: d } = h, p = i(d, h);
    if (typeof p != "function" || !d)
      return;
    const g = (y) => {
      My(y) && (p(y), d.removeEventListener("pointerleave", g));
    };
    d.addEventListener("pointerleave", g, s);
  };
  return a.forEach((h) => {
    h.addEventListener("pointerenter", u, s);
  }), c;
}
const Db = (t, i) => i ? t === i ? !0 : Db(t, i.parentElement) : !1, Ph = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Nk = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Lk(t) {
  return Nk.has(t.tagName) || t.tabIndex !== -1;
}
const hl = /* @__PURE__ */ new WeakSet();
function Ry(t) {
  return (i) => {
    i.key === "Enter" && t(i);
  };
}
function of(t, i) {
  t.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const Bk = (t, i) => {
  const r = t.currentTarget;
  if (!r)
    return;
  const a = Ry(() => {
    if (hl.has(r))
      return;
    of(r, "down");
    const s = Ry(() => {
      of(r, "up");
    }), c = () => of(r, "cancel");
    r.addEventListener("keyup", s, i), r.addEventListener("blur", c, i);
  });
  r.addEventListener("keydown", a, i), r.addEventListener("blur", () => r.removeEventListener("keydown", a), i);
};
function Oy(t) {
  return Ph(t) && !Eb();
}
function Vk(t, i, r = {}) {
  const [a, s, c] = Ab(t, r), u = (h) => {
    const d = h.currentTarget;
    if (!Oy(h) || hl.has(d))
      return;
    hl.add(d);
    const p = i(d, h), g = (v, S) => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", b), !(!Oy(v) || !hl.has(d)) && (hl.delete(d), typeof p == "function" && p(v, { success: S }));
    }, y = (v) => {
      g(v, d === window || d === document || r.useGlobalTarget || Db(d, v.target));
    }, b = (v) => {
      g(v, !1);
    };
    window.addEventListener("pointerup", y, s), window.addEventListener("pointercancel", b, s);
  };
  return a.forEach((h) => {
    (r.useGlobalTarget ? window : h).addEventListener("pointerdown", u, s), h instanceof HTMLElement && (h.addEventListener("focus", (p) => Bk(p, s)), !Lk(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), c;
}
const _y = 30, Uk = (t) => !isNaN(parseFloat(t));
class jk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, r = {}) {
    this.version = "12.9.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (a, s = !0) => {
      var u, h;
      const c = Le.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(a), this.current !== this.prev && ((u = this.events.change) == null || u.notify(this.current)), s && ((h = this.events.renderRequest) == null || h.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = r.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = Le.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Uk(this.current));
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(i) {
    return this.on("change", i);
  }
  on(i, r) {
    this.events[i] || (this.events[i] = new Ah());
    const a = this.events[i].add(r);
    return i === "change" ? () => {
      a(), Gt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : a;
  }
  clearListeners() {
    for (const i in this.events)
      this.events[i].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(i, r) {
    this.passiveEffect = i, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(i, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(i, r) : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, r, a) {
    this.set(r), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - a;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(i, r = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const i = Le.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > _y)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, _y);
    return Yv(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(i) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = i(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var i;
    (i = this.events.destroy) == null || i.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function kl(t, i) {
  return new jk(t, i);
}
const Hk = [...Sb, we, ki], Pk = (t) => Hk.find(xb(t)), Cb = (t, i) => i && typeof t == "number" ? i.transform(t) : t, zb = $.createContext({ strict: !1 }), Ny = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Kr = {};
for (const t in Ny)
  Kr[t] = {
    isEnabled: (i) => Ny[t].some((r) => !!i[r])
  };
function qk(t) {
  for (const i in t)
    Kr[i] = {
      ...Kr[i],
      ...t[i]
    };
}
const Yk = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ws(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Yk.has(t);
}
let Mb = (t) => !ws(t);
function Fk(t) {
  t && (Mb = (i) => i.startsWith("on") ? !ws(i) : t(i));
}
try {
  Fk(require("@emotion/is-prop-valid").default);
} catch {
}
function Xk(t, i, r) {
  const a = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Mb(s) || r === !0 && ws(s) || !i && !ws(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (a[s] = t[s]);
  return a;
}
function Gk(t) {
  if (typeof Proxy > "u")
    return t;
  const i = /* @__PURE__ */ new Map(), r = (...a) => t(...a);
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (a, s) => s === "create" ? t : (i.has(s) || i.set(s, t(s)), i.get(s))
  });
}
const zs = /* @__PURE__ */ $.createContext({});
function Ms(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function El(t) {
  return typeof t == "string" || Array.isArray(t);
}
const qh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Yh = ["initial", ...qh];
function Rs(t) {
  return Ms(t.animate) || Yh.some((i) => El(t[i]));
}
function Rb(t) {
  return !!(Rs(t) || t.variants);
}
function Ik(t, i) {
  if (Rs(t)) {
    const { initial: r, animate: a } = t;
    return {
      initial: r === !1 || El(r) ? r : void 0,
      animate: El(a) ? a : void 0
    };
  }
  return t.inherit !== !1 ? i : {};
}
function Qk(t) {
  const { initial: i, animate: r } = Ik(t, $.useContext(zs));
  return $.useMemo(() => ({ initial: i, animate: r }), [Ly(i), Ly(r)]);
}
function Ly(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Kk = Symbol.for("motionComponentSymbol");
function Yr(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Zk(t, i, r) {
  return $.useCallback(
    (a) => {
      a && t.onMount && t.onMount(a), i && (a ? i.mount(a) : i.unmount()), r && (typeof r == "function" ? r(a) : Yr(r) && (r.current = a));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [i]
  );
}
const Fh = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Wk = "framerAppearId", Ob = "data-" + Fh(Wk), _b = $.createContext({});
function Jk(t, i, r, a, s) {
  var A, M;
  const { visualElement: c } = $.useContext(zs), u = $.useContext(zb), h = $.useContext(Cs), d = $.useContext(xh).reducedMotion, p = $.useRef(null);
  a = a || u.renderer, !p.current && a && (p.current = a(t, {
    visualState: i,
    parent: c,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: d
  }));
  const g = p.current, y = $.useContext(_b);
  g && !g.projection && s && (g.type === "html" || g.type === "svg") && $k(p.current, r, s, y);
  const b = $.useRef(!1);
  $.useInsertionEffect(() => {
    g && b.current && g.update(r, h);
  });
  const v = r[Ob], S = $.useRef(!!v && !((A = window.MotionHandoffIsComplete) != null && A.call(window, v)) && ((M = window.MotionHasOptimisedAnimation) == null ? void 0 : M.call(window, v)));
  return jv(() => {
    g && (b.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), Hh.render(g.render), S.current && g.animationState && g.animationState.animateChanges());
  }), $.useEffect(() => {
    g && (!S.current && g.animationState && g.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var k;
      (k = window.MotionHandoffMarkAsComplete) == null || k.call(window, v);
    }), S.current = !1));
  }), g;
}
function $k(t, i, r, a) {
  const { layoutId: s, layout: c, drag: u, dragConstraints: h, layoutScroll: d, layoutRoot: p, layoutCrossfade: g } = i;
  t.projection = new r(t.latestValues, i["data-framer-portal-id"] ? void 0 : Nb(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!u || h && Yr(h),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: a,
    crossfade: g,
    layoutScroll: d,
    layoutRoot: p
  });
}
function Nb(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Nb(t.parent);
}
function tE({ preloadedFeatures: t, createVisualElement: i, useRender: r, useVisualState: a, Component: s }) {
  t && qk(t);
  function c(h, d) {
    let p;
    const g = {
      ...$.useContext(xh),
      ...h,
      layoutId: eE(h)
    }, { isStatic: y } = g, b = Qk(h), v = a(h, y);
    if (!y && wh) {
      nE();
      const S = iE(g);
      p = S.MeasureLayout, b.visualElement = Jk(s, v, g, i, S.ProjectionNode);
    }
    return ft.jsxs(zs.Provider, { value: b, children: [p && b.visualElement ? ft.jsx(p, { visualElement: b.visualElement, ...g }) : null, r(s, h, Zk(v, b.visualElement, d), v, y, b.visualElement)] });
  }
  c.displayName = `motion.${typeof s == "string" ? s : `create(${s.displayName ?? s.name ?? ""})`}`;
  const u = $.forwardRef(c);
  return u[Kk] = s, u;
}
function eE({ layoutId: t }) {
  const i = $.useContext(vh).id;
  return i && t !== void 0 ? i + "-" + t : t;
}
function nE(t, i) {
  $.useContext(zb).strict;
}
function iE(t) {
  const { drag: i, layout: r } = Kr;
  if (!i && !r)
    return {};
  const a = { ...i, ...r };
  return {
    MeasureLayout: i != null && i.isEnabled(t) || r != null && r.isEnabled(t) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode
  };
}
const Al = {};
function rE(t) {
  for (const i in t)
    Al[i] = t[i], zh(i) && (Al[i].isCSSVariable = !0);
}
function Lb(t, { layout: i, layoutId: r }) {
  return $r.has(t) || t.startsWith("origin") || (i || r !== void 0) && (!!Al[t] || t === "opacity");
}
const xe = (t) => !!(t && t.getVelocity), aE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, lE = Jr.length;
function oE(t, i, r) {
  let a = "", s = !0;
  for (let c = 0; c < lE; c++) {
    const u = Jr[c], h = t[u];
    if (h === void 0)
      continue;
    let d = !0;
    if (typeof h == "number" ? d = h === (u.startsWith("scale") ? 1 : 0) : d = parseFloat(h) === 0, !d || r) {
      const p = Cb(h, jh[u]);
      if (!d) {
        s = !1;
        const g = aE[u] || u;
        a += `${g}(${p}) `;
      }
      r && (i[u] = p);
    }
  }
  return a = a.trim(), r ? a = r(i, s ? "" : a) : s && (a = "none"), a;
}
function Xh(t, i, r) {
  const { style: a, vars: s, transformOrigin: c } = t;
  let u = !1, h = !1;
  for (const d in i) {
    const p = i[d];
    if ($r.has(d)) {
      u = !0;
      continue;
    } else if (zh(d)) {
      s[d] = p;
      continue;
    } else {
      const g = Cb(p, jh[d]);
      d.startsWith("origin") ? (h = !0, c[d] = g) : a[d] = g;
    }
  }
  if (i.transform || (u || r ? a.transform = oE(i, t.transform, r) : a.transform && (a.transform = "none")), h) {
    const { originX: d = "50%", originY: p = "50%", originZ: g = 0 } = c;
    a.transformOrigin = `${d} ${p} ${g}`;
  }
}
const Gh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Bb(t, i, r) {
  for (const a in i)
    !xe(i[a]) && !Lb(a, r) && (t[a] = i[a]);
}
function sE({ transformTemplate: t }, i) {
  return $.useMemo(() => {
    const r = Gh();
    return Xh(r, i, t), Object.assign({}, r.vars, r.style);
  }, [i]);
}
function uE(t, i) {
  const r = t.style || {}, a = {};
  return Bb(a, r, t), Object.assign(a, sE(t, i)), a;
}
function cE(t, i) {
  const r = {}, a = uE(t, i);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = a, r;
}
const fE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ih(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(fE.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const hE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, dE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function pE(t, i, r = 1, a = 0, s = !0) {
  t.pathLength = 1;
  const c = s ? hE : dE;
  t[c.offset] = bt.transform(-a);
  const u = bt.transform(i), h = bt.transform(r);
  t[c.array] = `${u} ${h}`;
}
function Vb(t, {
  attrX: i,
  attrY: r,
  attrScale: a,
  pathLength: s,
  pathSpacing: c = 1,
  pathOffset: u = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, d, p) {
  if (Xh(t, h, p), d) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: g, style: y } = t;
  g.transform && (y.transform = g.transform, delete g.transform), (y.transform || g.transformOrigin) && (y.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), y.transform && (y.transformBox = "fill-box", delete g.transformBox), i !== void 0 && (g.x = i), r !== void 0 && (g.y = r), a !== void 0 && (g.scale = a), s !== void 0 && pE(g, s, c, u, !1);
}
const Ub = () => ({
  ...Gh(),
  attrs: {}
}), jb = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function mE(t, i, r, a) {
  const s = $.useMemo(() => {
    const c = Ub();
    return Vb(c, i, jb(a), t.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [i]);
  if (t.style) {
    const c = {};
    Bb(c, t.style, t), s.style = { ...c, ...s.style };
  }
  return s;
}
function gE(t = !1) {
  return (r, a, s, { latestValues: c }, u) => {
    const d = (Ih(r) ? mE : cE)(a, c, u, r), p = Xk(a, typeof r == "string", t), g = r !== $.Fragment ? { ...p, ...d, ref: s } : {}, { children: y } = a, b = $.useMemo(() => xe(y) ? y.get() : y, [y]);
    return $.createElement(r, {
      ...g,
      children: b
    });
  };
}
function By(t) {
  const i = [{}, {}];
  return t == null || t.values.forEach((r, a) => {
    i[0][a] = r.get(), i[1][a] = r.getVelocity();
  }), i;
}
function Qh(t, i, r, a) {
  if (typeof i == "function") {
    const [s, c] = By(a);
    i = i(r !== void 0 ? r : t.custom, s, c);
  }
  if (typeof i == "string" && (i = t.variants && t.variants[i]), typeof i == "function") {
    const [s, c] = By(a);
    i = i(r !== void 0 ? r : t.custom, s, c);
  }
  return i;
}
function ps(t) {
  return xe(t) ? t.get() : t;
}
function yE({ scrapeMotionValuesFromProps: t, createRenderState: i }, r, a, s) {
  return {
    latestValues: vE(r, a, s, t),
    renderState: i()
  };
}
const Hb = (t) => (i, r) => {
  const a = $.useContext(zs), s = $.useContext(Cs), c = () => yE(t, i, a, s);
  return r ? c() : bh(c);
};
function vE(t, i, r, a) {
  const s = {}, c = a(t, {});
  for (const b in c)
    s[b] = ps(c[b]);
  let { initial: u, animate: h } = t;
  const d = Rs(t), p = Rb(t);
  i && p && !d && t.inherit !== !1 && (u === void 0 && (u = i.initial), h === void 0 && (h = i.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || u === !1;
  const y = g ? h : u;
  if (y && typeof y != "boolean" && !Ms(y)) {
    const b = Array.isArray(y) ? y : [y];
    for (let v = 0; v < b.length; v++) {
      const S = Qh(t, b[v]);
      if (S) {
        const { transitionEnd: A, transition: M, ...k } = S;
        for (const C in k) {
          let D = k[C];
          if (Array.isArray(D)) {
            const V = g ? D.length - 1 : 0;
            D = D[V];
          }
          D !== null && (s[C] = D);
        }
        for (const C in A)
          s[C] = A[C];
      }
    }
  }
  return s;
}
function Kh(t, i, r) {
  var c;
  const { style: a } = t, s = {};
  for (const u in a)
    (xe(a[u]) || i.style && xe(i.style[u]) || Lb(u, t) || ((c = r == null ? void 0 : r.getValue(u)) == null ? void 0 : c.liveStyle) !== void 0) && (s[u] = a[u]);
  return s;
}
const bE = {
  useVisualState: Hb({
    scrapeMotionValuesFromProps: Kh,
    createRenderState: Gh
  })
};
function Pb(t, i, r) {
  const a = Kh(t, i, r);
  for (const s in t)
    if (xe(t[s]) || xe(i[s])) {
      const c = Jr.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      a[c] = t[s];
    }
  return a;
}
const wE = {
  useVisualState: Hb({
    scrapeMotionValuesFromProps: Pb,
    createRenderState: Ub
  })
};
function xE(t, i) {
  return function(a, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const u = {
      ...Ih(a) ? wE : bE,
      preloadedFeatures: t,
      useRender: gE(s),
      createVisualElement: i,
      Component: a
    };
    return tE(u);
  };
}
function Dl(t, i, r) {
  const a = t.getProps();
  return Qh(a, i, r !== void 0 ? r : a.custom, t);
}
const $f = (t) => Array.isArray(t);
function SE(t, i, r) {
  t.hasValue(i) ? t.getValue(i).set(r) : t.addValue(i, kl(r));
}
function TE(t) {
  return $f(t) ? t[t.length - 1] || 0 : t;
}
function kE(t, i) {
  const r = Dl(t, i);
  let { transitionEnd: a = {}, transition: s = {}, ...c } = r || {};
  c = { ...c, ...a };
  for (const u in c) {
    const h = TE(c[u]);
    SE(t, u, h);
  }
}
function EE(t) {
  return !!(xe(t) && t.add);
}
function th(t, i) {
  const r = t.getValue("willChange");
  if (EE(r))
    return r.add(i);
  if (!r && Qn.WillChange) {
    const a = new Qn.WillChange("auto");
    t.addValue("willChange", a), a.add(i);
  }
}
function qb(t) {
  return t.props[Ob];
}
const AE = (t) => t !== null;
function DE(t, { repeat: i, repeatType: r = "loop" }, a) {
  const s = t.filter(AE), c = i && r !== "loop" && i % 2 === 1 ? 0 : s.length - 1;
  return s[c];
}
const CE = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, zE = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ME = {
  type: "keyframes",
  duration: 0.8
}, RE = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, OE = (t, { keyframes: i }) => i.length > 2 ? ME : $r.has(t) ? t.startsWith("scale") ? zE(i[1]) : CE : RE;
function _E({ when: t, delay: i, delayChildren: r, staggerChildren: a, staggerDirection: s, repeat: c, repeatType: u, repeatDelay: h, from: d, elapsed: p, ...g }) {
  return !!Object.keys(g).length;
}
const Zh = (t, i, r, a = {}, s, c) => (u) => {
  const h = Uh(a, t) || {}, d = h.delay || a.delay || 0;
  let { elapsed: p = 0 } = a;
  p = p - /* @__PURE__ */ An(d);
  const g = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -p,
    onUpdate: (b) => {
      i.set(b), h.onUpdate && h.onUpdate(b);
    },
    onComplete: () => {
      u(), h.onComplete && h.onComplete();
    },
    name: t,
    motionValue: i,
    element: c ? void 0 : s
  };
  _E(h) || Object.assign(g, OE(t, g)), g.duration && (g.duration = /* @__PURE__ */ An(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ An(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), (Qn.instantAnimations || Qn.skipAnimations) && (y = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !h.type && !h.ease, y && !c && i.get() !== void 0) {
    const b = DE(g.keyframes, h);
    if (b !== void 0) {
      Gt.update(() => {
        g.onUpdate(b), g.onComplete();
      });
      return;
    }
  }
  return new vk(g);
};
function NE({ protectedKeys: t, needsAnimating: i }, r) {
  const a = t.hasOwnProperty(r) && i[r] !== !0;
  return i[r] = !1, a;
}
function Yb(t, i, { delay: r = 0, transitionOverride: a, type: s } = {}) {
  let { transition: c = t.getDefaultTransition(), transitionEnd: u, ...h } = i;
  a && (c = a);
  const d = [], p = s && t.animationState && t.animationState.getState()[s];
  for (const g in h) {
    const y = t.getValue(g, t.latestValues[g] ?? null), b = h[g];
    if (b === void 0 || p && NE(p, g))
      continue;
    const v = {
      delay: r,
      ...Uh(c || {}, g)
    }, S = y.get();
    if (S !== void 0 && !y.isAnimating && !Array.isArray(b) && b === S && !v.velocity)
      continue;
    let A = !1;
    if (window.MotionHandoffAnimation) {
      const k = qb(t);
      if (k) {
        const C = window.MotionHandoffAnimation(k, g, Gt);
        C !== null && (v.startTime = C, A = !0);
      }
    }
    th(t, g), y.start(Zh(g, y, b, t.shouldReduceMotion && wb.has(g) ? { type: !1 } : v, t, A));
    const M = y.animation;
    M && d.push(M);
  }
  return u && Promise.all(d).then(() => {
    Gt.update(() => {
      u && kE(t, u);
    });
  }), d;
}
function eh(t, i, r = {}) {
  var d;
  const a = Dl(t, i, r.type === "exit" ? (d = t.presenceContext) == null ? void 0 : d.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = a || {};
  r.transitionOverride && (s = r.transitionOverride);
  const c = a ? () => Promise.all(Yb(t, a, r)) : () => Promise.resolve(), u = t.variantChildren && t.variantChildren.size ? (p = 0) => {
    const { delayChildren: g = 0, staggerChildren: y, staggerDirection: b } = s;
    return LE(t, i, g + p, y, b, r);
  } : () => Promise.resolve(), { when: h } = s;
  if (h) {
    const [p, g] = h === "beforeChildren" ? [c, u] : [u, c];
    return p().then(() => g());
  } else
    return Promise.all([c(), u(r.delay)]);
}
function LE(t, i, r = 0, a = 0, s = 1, c) {
  const u = [], h = (t.variantChildren.size - 1) * a, d = s === 1 ? (p = 0) => p * a : (p = 0) => h - p * a;
  return Array.from(t.variantChildren).sort(BE).forEach((p, g) => {
    p.notify("AnimationStart", i), u.push(eh(p, i, {
      ...c,
      delay: r + d(g)
    }).then(() => p.notify("AnimationComplete", i)));
  }), Promise.all(u);
}
function BE(t, i) {
  return t.sortNodePosition(i);
}
function VE(t, i, r = {}) {
  t.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const s = i.map((c) => eh(t, c, r));
    a = Promise.all(s);
  } else if (typeof i == "string")
    a = eh(t, i, r);
  else {
    const s = typeof i == "function" ? Dl(t, i, r.custom) : i;
    a = Promise.all(Yb(t, s, r));
  }
  return a.then(() => {
    t.notify("AnimationComplete", i);
  });
}
function Fb(t, i) {
  if (!Array.isArray(i))
    return !1;
  const r = i.length;
  if (r !== t.length)
    return !1;
  for (let a = 0; a < r; a++)
    if (i[a] !== t[a])
      return !1;
  return !0;
}
const UE = Yh.length;
function Xb(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const r = t.parent ? Xb(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const i = {};
  for (let r = 0; r < UE; r++) {
    const a = Yh[r], s = t.props[a];
    (El(s) || s === !1) && (i[a] = s);
  }
  return i;
}
const jE = [...qh].reverse(), HE = qh.length;
function PE(t) {
  return (i) => Promise.all(i.map(({ animation: r, options: a }) => VE(t, r, a)));
}
function qE(t) {
  let i = PE(t), r = Vy(), a = !0;
  const s = (d) => (p, g) => {
    var b;
    const y = Dl(t, g, d === "exit" ? (b = t.presenceContext) == null ? void 0 : b.custom : void 0);
    if (y) {
      const { transition: v, transitionEnd: S, ...A } = y;
      p = { ...p, ...A, ...S };
    }
    return p;
  };
  function c(d) {
    i = d(t);
  }
  function u(d) {
    const { props: p } = t, g = Xb(t.parent) || {}, y = [], b = /* @__PURE__ */ new Set();
    let v = {}, S = 1 / 0;
    for (let M = 0; M < HE; M++) {
      const k = jE[M], C = r[k], D = p[k] !== void 0 ? p[k] : g[k], V = El(D), _ = k === d ? C.isActive : null;
      _ === !1 && (S = M);
      let O = D === g[k] && D !== p[k] && V;
      if (O && a && t.manuallyAnimateOnMount && (O = !1), C.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !C.isActive && _ === null || // If we didn't and don't have any defined prop for this animation type
      !D && !C.prevProp || // Or if the prop doesn't define an animation
      Ms(D) || typeof D == "boolean")
        continue;
      const z = YE(C.prevProp, D);
      let N = z || // If we're making this variant active, we want to always make it active
      k === d && C.isActive && !O && V || // If we removed a higher-priority variant (i is in reverse order)
      M > S && V, F = !1;
      const L = Array.isArray(D) ? D : [D];
      let J = L.reduce(s(k), {});
      _ === !1 && (J = {});
      const { prevResolvedValues: Z = {} } = C, nt = {
        ...Z,
        ...J
      }, it = (K) => {
        N = !0, b.has(K) && (F = !0, b.delete(K)), C.needsAnimating[K] = !0;
        const rt = t.getValue(K);
        rt && (rt.liveStyle = !1);
      };
      for (const K in nt) {
        const rt = J[K], yt = Z[K];
        if (v.hasOwnProperty(K))
          continue;
        let x = !1;
        $f(rt) && $f(yt) ? x = !Fb(rt, yt) : x = rt !== yt, x ? rt != null ? it(K) : b.add(K) : rt !== void 0 && b.has(K) ? it(K) : C.protectedKeys[K] = !0;
      }
      C.prevProp = D, C.prevResolvedValues = J, C.isActive && (v = { ...v, ...J }), a && t.blockInitialAnimation && (N = !1), N && (!(O && z) || F) && y.push(...L.map((K) => ({
        animation: K,
        options: { type: k }
      })));
    }
    if (b.size) {
      const M = {};
      if (typeof p.initial != "boolean") {
        const k = Dl(t, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        k && k.transition && (M.transition = k.transition);
      }
      b.forEach((k) => {
        const C = t.getBaseTarget(k), D = t.getValue(k);
        D && (D.liveStyle = !0), M[k] = C ?? null;
      }), y.push({ animation: M });
    }
    let A = !!y.length;
    return a && (p.initial === !1 || p.initial === p.animate) && !t.manuallyAnimateOnMount && (A = !1), a = !1, A ? i(y) : Promise.resolve();
  }
  function h(d, p) {
    var y;
    if (r[d].isActive === p)
      return Promise.resolve();
    (y = t.variantChildren) == null || y.forEach((b) => {
      var v;
      return (v = b.animationState) == null ? void 0 : v.setActive(d, p);
    }), r[d].isActive = p;
    const g = u(d);
    for (const b in r)
      r[b].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: u,
    setActive: h,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = Vy(), a = !0;
    }
  };
}
function YE(t, i) {
  return typeof i == "string" ? i !== t : Array.isArray(i) ? !Fb(i, t) : !1;
}
function Fi(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vy() {
  return {
    animate: Fi(!0),
    whileInView: Fi(),
    whileHover: Fi(),
    whileTap: Fi(),
    whileDrag: Fi(),
    whileFocus: Fi(),
    exit: Fi()
  };
}
class Ei {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
class FE extends Ei {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = qE(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Ms(i) && (this.unmountControls = i.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    i !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(), (i = this.unmountControls) == null || i.call(this);
  }
}
let XE = 0;
class GE extends Ei {
  constructor() {
    super(...arguments), this.id = XE++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: i, onExitComplete: r } = this.node.presenceContext, { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === a)
      return;
    const s = this.node.animationState.setActive("exit", !i);
    r && !i && s.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: i, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const IE = {
  animation: {
    Feature: FE
  },
  exit: {
    Feature: GE
  }
};
function Cl(t, i, r, a = { passive: !0 }) {
  return t.addEventListener(i, r, a), () => t.removeEventListener(i, r);
}
function Ll(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const QE = (t) => (i) => Ph(i) && t(i, Ll(i));
function ml(t, i, r, a) {
  return Cl(t, i, QE(r), a);
}
function Gb({ top: t, left: i, right: r, bottom: a }) {
  return {
    x: { min: i, max: r },
    y: { min: t, max: a }
  };
}
function KE({ x: t, y: i }) {
  return { top: i.min, right: t.max, bottom: i.max, left: t.min };
}
function ZE(t, i) {
  if (!i)
    return t;
  const r = i({ x: t.left, y: t.top }), a = i({ x: t.right, y: t.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: a.y,
    right: a.x
  };
}
const Ib = 1e-4, WE = 1 - Ib, JE = 1 + Ib, Qb = 0.01, $E = 0 - Qb, t2 = 0 + Qb;
function De(t) {
  return t.max - t.min;
}
function e2(t, i, r) {
  return Math.abs(t - i) <= r;
}
function Uy(t, i, r, a = 0.5) {
  t.origin = a, t.originPoint = Xt(i.min, i.max, t.origin), t.scale = De(r) / De(i), t.translate = Xt(r.min, r.max, t.origin) - t.originPoint, (t.scale >= WE && t.scale <= JE || isNaN(t.scale)) && (t.scale = 1), (t.translate >= $E && t.translate <= t2 || isNaN(t.translate)) && (t.translate = 0);
}
function gl(t, i, r, a) {
  Uy(t.x, i.x, r.x, a ? a.originX : void 0), Uy(t.y, i.y, r.y, a ? a.originY : void 0);
}
function jy(t, i, r) {
  t.min = r.min + i.min, t.max = t.min + De(i);
}
function n2(t, i, r) {
  jy(t.x, i.x, r.x), jy(t.y, i.y, r.y);
}
function Hy(t, i, r) {
  t.min = i.min - r.min, t.max = t.min + De(i);
}
function yl(t, i, r) {
  Hy(t.x, i.x, r.x), Hy(t.y, i.y, r.y);
}
const Py = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fr = () => ({
  x: Py(),
  y: Py()
}), qy = () => ({ min: 0, max: 0 }), $t = () => ({
  x: qy(),
  y: qy()
});
function on(t) {
  return [t("x"), t("y")];
}
function sf(t) {
  return t === void 0 || t === 1;
}
function nh({ scale: t, scaleX: i, scaleY: r }) {
  return !sf(t) || !sf(i) || !sf(r);
}
function Gi(t) {
  return nh(t) || Kb(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Kb(t) {
  return Yy(t.x) || Yy(t.y);
}
function Yy(t) {
  return t && t !== "0%";
}
function xs(t, i, r) {
  const a = t - r, s = i * a;
  return r + s;
}
function Fy(t, i, r, a, s) {
  return s !== void 0 && (t = xs(t, s, a)), xs(t, r, a) + i;
}
function ih(t, i = 0, r = 1, a, s) {
  t.min = Fy(t.min, i, r, a, s), t.max = Fy(t.max, i, r, a, s);
}
function Zb(t, { x: i, y: r }) {
  ih(t.x, i.translate, i.scale, i.originPoint), ih(t.y, r.translate, r.scale, r.originPoint);
}
const Xy = 0.999999999999, Gy = 1.0000000000001;
function i2(t, i, r, a = !1) {
  const s = r.length;
  if (!s)
    return;
  i.x = i.y = 1;
  let c, u;
  for (let h = 0; h < s; h++) {
    c = r[h], u = c.projectionDelta;
    const { visualElement: d } = c.options;
    d && d.props.style && d.props.style.display === "contents" || (a && c.options.layoutScroll && c.scroll && c !== c.root && Gr(t, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), u && (i.x *= u.x.scale, i.y *= u.y.scale, Zb(t, u)), a && Gi(c.latestValues) && Gr(t, c.latestValues));
  }
  i.x < Gy && i.x > Xy && (i.x = 1), i.y < Gy && i.y > Xy && (i.y = 1);
}
function Xr(t, i) {
  t.min = t.min + i, t.max = t.max + i;
}
function Iy(t, i, r, a, s = 0.5) {
  const c = Xt(t.min, t.max, s);
  ih(t, i, r, c, a);
}
function Gr(t, i) {
  Iy(t.x, i.x, i.scaleX, i.scale, i.originX), Iy(t.y, i.y, i.scaleY, i.scale, i.originY);
}
function Wb(t, i) {
  return Gb(ZE(t.getBoundingClientRect(), i));
}
function r2(t, i, r) {
  const a = Wb(t, r), { scroll: s } = i;
  return s && (Xr(a.x, s.offset.x), Xr(a.y, s.offset.y)), a;
}
const Jb = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Qy = (t, i) => Math.abs(t - i);
function a2(t, i) {
  const r = Qy(t.x, i.x), a = Qy(t.y, i.y);
  return Math.sqrt(r ** 2 + a ** 2);
}
class $b {
  constructor(i, r, { transformPagePoint: a, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = cf(this.lastMoveEventInfo, this.history), b = this.startEvent !== null, v = a2(y.offset, { x: 0, y: 0 }) >= 3;
      if (!b && !v)
        return;
      const { point: S } = y, { timestamp: A } = ge;
      this.history.push({ ...S, timestamp: A });
      const { onStart: M, onMove: k } = this.handlers;
      b || (M && M(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, y);
    }, this.handlePointerMove = (y, b) => {
      this.lastMoveEvent = y, this.lastMoveEventInfo = uf(b, this.transformPagePoint), Gt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (y, b) => {
      this.end();
      const { onEnd: v, onSessionEnd: S, resumeAnimation: A } = this.handlers;
      if (this.dragSnapToOrigin && A && A(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const M = cf(y.type === "pointercancel" ? this.lastMoveEventInfo : uf(b, this.transformPagePoint), this.history);
      this.startEvent && v && v(y, M), S && S(y, M);
    }, !Ph(i))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = a, this.contextWindow = s || window;
    const u = Ll(i), h = uf(u, this.transformPagePoint), { point: d } = h, { timestamp: p } = ge;
    this.history = [{ ...d, timestamp: p }];
    const { onSessionStart: g } = r;
    g && g(i, cf(h, this.history)), this.removeListeners = Ol(ml(this.contextWindow, "pointermove", this.handlePointerMove), ml(this.contextWindow, "pointerup", this.handlePointerUp), ml(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ti(this.updatePoint);
  }
}
function uf(t, i) {
  return i ? { point: i(t.point) } : t;
}
function Ky(t, i) {
  return { x: t.x - i.x, y: t.y - i.y };
}
function cf({ point: t }, i) {
  return {
    point: t,
    delta: Ky(t, t1(i)),
    offset: Ky(t, l2(i)),
    velocity: o2(i, 0.1)
  };
}
function l2(t) {
  return t[0];
}
function t1(t) {
  return t[t.length - 1];
}
function o2(t, i) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let r = t.length - 1, a = null;
  const s = t1(t);
  for (; r >= 0 && (a = t[r], !(s.timestamp - a.timestamp > /* @__PURE__ */ An(i))); )
    r--;
  if (!a)
    return { x: 0, y: 0 };
  const c = /* @__PURE__ */ Dn(s.timestamp - a.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const u = {
    x: (s.x - a.x) / c,
    y: (s.y - a.y) / c
  };
  return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u;
}
function s2(t, { min: i, max: r }, a) {
  return i !== void 0 && t < i ? t = a ? Xt(i, t, a.min) : Math.max(t, i) : r !== void 0 && t > r && (t = a ? Xt(r, t, a.max) : Math.min(t, r)), t;
}
function Zy(t, i, r) {
  return {
    min: i !== void 0 ? t.min + i : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
  };
}
function u2(t, { top: i, left: r, bottom: a, right: s }) {
  return {
    x: Zy(t.x, r, s),
    y: Zy(t.y, i, a)
  };
}
function Wy(t, i) {
  let r = i.min - t.min, a = i.max - t.max;
  return i.max - i.min < t.max - t.min && ([r, a] = [a, r]), { min: r, max: a };
}
function c2(t, i) {
  return {
    x: Wy(t.x, i.x),
    y: Wy(t.y, i.y)
  };
}
function f2(t, i) {
  let r = 0.5;
  const a = De(t), s = De(i);
  return s > a ? r = /* @__PURE__ */ xl(i.min, i.max - a, t.min) : a > s && (r = /* @__PURE__ */ xl(t.min, t.max - s, i.min)), In(0, 1, r);
}
function h2(t, i) {
  const r = {};
  return i.min !== void 0 && (r.min = i.min - t.min), i.max !== void 0 && (r.max = i.max - t.min), r;
}
const rh = 0.35;
function d2(t = rh) {
  return t === !1 ? t = 0 : t === !0 && (t = rh), {
    x: Jy(t, "left", "right"),
    y: Jy(t, "top", "bottom")
  };
}
function Jy(t, i, r) {
  return {
    min: $y(t, i),
    max: $y(t, r)
  };
}
function $y(t, i) {
  return typeof t == "number" ? t : t[i] || 0;
}
const p2 = /* @__PURE__ */ new WeakMap();
class m2 {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $t(), this.visualElement = i;
  }
  start(i, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1)
      return;
    const s = (g) => {
      const { dragSnapToOrigin: y } = this.getProps();
      y ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Ll(g).point);
    }, c = (g, y) => {
      const { drag: b, dragPropagation: v, onDragStart: S } = this.getProps();
      if (b && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = Ok(b), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), on((M) => {
        let k = this.getAxisMotionValue(M).get() || 0;
        if (Cn.test(k)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const D = C.layout.layoutBox[M];
            D && (k = De(D) * (parseFloat(k) / 100));
          }
        }
        this.originPoint[M] = k;
      }), S && Gt.postRender(() => S(g, y)), th(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, u = (g, y) => {
      const { dragPropagation: b, dragDirectionLock: v, onDirectionLock: S, onDrag: A } = this.getProps();
      if (!b && !this.openDragLock)
        return;
      const { offset: M } = y;
      if (v && this.currentDirection === null) {
        this.currentDirection = g2(M), this.currentDirection !== null && S && S(this.currentDirection);
        return;
      }
      this.updateAxis("x", y.point, M), this.updateAxis("y", y.point, M), this.visualElement.render(), A && A(g, y);
    }, h = (g, y) => this.stop(g, y), d = () => on((g) => {
      var y;
      return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) == null ? void 0 : y.play());
    }), { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new $b(i, {
      onSessionStart: s,
      onStart: c,
      onMove: u,
      onSessionEnd: h,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: p,
      contextWindow: Jb(this.visualElement)
    });
  }
  stop(i, r) {
    const a = this.isDragging;
    if (this.cancel(), !a)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: c } = this.getProps();
    c && Gt.postRender(() => c(i, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: r } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: a } = this.getProps();
    !a && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(i, r, a) {
    const { drag: s } = this.getProps();
    if (!a || !is(i, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(i);
    let u = this.originPoint[i] + a[i];
    this.constraints && this.constraints[i] && (u = s2(u, this.constraints[i], this.elastic[i])), c.set(u);
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: i, dragElastic: r } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (c = this.visualElement.projection) == null ? void 0 : c.layout, s = this.constraints;
    i && Yr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = u2(a.layoutBox, i) : this.constraints = !1, this.elastic = d2(r), s !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && on((u) => {
      this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = h2(a.layoutBox[u], this.constraints[u]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: r } = this.getProps();
    if (!i || !Yr(i))
      return !1;
    const a = i.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = r2(a, s.root, this.visualElement.getTransformPagePoint());
    let u = c2(s.layout.layoutBox, c);
    if (r) {
      const h = r(KE(u));
      this.hasMutatedConstraints = !!h, h && (u = Gb(h));
    }
    return u;
  }
  startAnimation(i) {
    const { drag: r, dragMomentum: a, dragElastic: s, dragTransition: c, dragSnapToOrigin: u, onDragTransitionEnd: h } = this.getProps(), d = this.constraints || {}, p = on((g) => {
      if (!is(g, r, this.currentDirection))
        return;
      let y = d && d[g] || {};
      u && (y = { min: 0, max: 0 });
      const b = s ? 200 : 1e6, v = s ? 40 : 1e7, S = {
        type: "inertia",
        velocity: a ? i[g] : 0,
        bounceStiffness: b,
        bounceDamping: v,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...y
      };
      return this.startAxisValueAnimation(g, S);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(i, r) {
    const a = this.getAxisMotionValue(i);
    return th(this.visualElement, i), a.start(Zh(i, a, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    on((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    on((i) => {
      var r;
      return (r = this.getAxisMotionValue(i).animation) == null ? void 0 : r.pause();
    });
  }
  getAnimationState(i) {
    var r;
    return (r = this.getAxisMotionValue(i).animation) == null ? void 0 : r.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const r = `_drag${i.toUpperCase()}`, a = this.visualElement.getProps(), s = a[r];
    return s || this.visualElement.getValue(i, (a.initial ? a.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    on((r) => {
      const { drag: a } = this.getProps();
      if (!is(r, a, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: u, max: h } = s.layout.layoutBox[r];
        c.set(i[r] - Xt(u, h, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: i, dragConstraints: r } = this.getProps(), { projection: a } = this.visualElement;
    if (!Yr(r) || !a || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    on((u) => {
      const h = this.getAxisMotionValue(u);
      if (h && this.constraints !== !1) {
        const d = h.get();
        s[u] = f2({ min: d, max: d }, this.constraints[u]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", a.root && a.root.updateScroll(), a.updateLayout(), this.resolveConstraints(), on((u) => {
      if (!is(u, i, null))
        return;
      const h = this.getAxisMotionValue(u), { min: d, max: p } = this.constraints[u];
      h.set(Xt(d, p, s[u]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    p2.set(this.visualElement, this);
    const i = this.visualElement.current, r = ml(i, "pointerdown", (d) => {
      const { drag: p, dragListener: g = !0 } = this.getProps();
      p && g && this.start(d);
    }), a = () => {
      const { dragConstraints: d } = this.getProps();
      Yr(d) && d.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", a);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), Gt.read(a);
    const u = Cl(window, "resize", () => this.scalePositionWithinConstraints()), h = s.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: p }) => {
      this.isDragging && p && (on((g) => {
        const y = this.getAxisMotionValue(g);
        y && (this.originPoint[g] += d[g].translate, y.set(y.get() + d[g].translate));
      }), this.visualElement.render());
    });
    return () => {
      u(), r(), c(), h && h();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: a = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: u = rh, dragMomentum: h = !0 } = i;
    return {
      ...i,
      drag: r,
      dragDirectionLock: a,
      dragPropagation: s,
      dragConstraints: c,
      dragElastic: u,
      dragMomentum: h
    };
  }
}
function is(t, i, r) {
  return (i === !0 || i === t) && (r === null || r === t);
}
function g2(t, i = 10) {
  let r = null;
  return Math.abs(t.y) > i ? r = "y" : Math.abs(t.x) > i && (r = "x"), r;
}
class y2 extends Ei {
  constructor(i) {
    super(i), this.removeGroupControls = un, this.removeListeners = un, this.controls = new m2(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || un;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const t0 = (t) => (i, r) => {
  t && Gt.postRender(() => t(i, r));
};
class v2 extends Ei {
  constructor() {
    super(...arguments), this.removePointerDownListener = un;
  }
  onPointerDown(i) {
    this.session = new $b(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jb(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: r, onPan: a, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: t0(i),
      onStart: t0(r),
      onMove: a,
      onEnd: (c, u) => {
        delete this.session, s && Gt.postRender(() => s(c, u));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ml(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ms = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function e0(t, i) {
  return i.max === i.min ? 0 : t / (i.max - i.min) * 100;
}
const il = {
  correct: (t, i) => {
    if (!i.target)
      return t;
    if (typeof t == "string")
      if (bt.test(t))
        t = parseFloat(t);
      else
        return t;
    const r = e0(t, i.target.x), a = e0(t, i.target.y);
    return `${r}% ${a}%`;
  }
}, b2 = {
  correct: (t, { treeScale: i, projectionDelta: r }) => {
    const a = t, s = ki.parse(t);
    if (s.length > 5)
      return a;
    const c = ki.createTransformer(t), u = typeof s[0] != "number" ? 1 : 0, h = r.x.scale * i.x, d = r.y.scale * i.y;
    s[0 + u] /= h, s[1 + u] /= d;
    const p = Xt(h, d, 0.5);
    return typeof s[2 + u] == "number" && (s[2 + u] /= p), typeof s[3 + u] == "number" && (s[3 + u] /= p), c(s);
  }
};
class w2 extends $.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: r, switchLayoutGroup: a, layoutId: s } = this.props, { projection: c } = i;
    rE(x2), c && (r.group && r.group.add(c), a && a.register && s && a.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), ms.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: r, visualElement: a, drag: s, isPresent: c } = this.props, u = a.projection;
    return u && (u.isPresent = c, s || i.layoutDependency !== r || r === void 0 || i.isPresent !== c ? u.willUpdate() : this.safeToRemove(), i.isPresent !== c && (c ? u.promote() : u.relegate() || Gt.postRender(() => {
      const h = u.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i && (i.root.didUpdate(), Hh.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: r, switchLayoutGroup: a } = this.props, { projection: s } = i;
    s && (s.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(s), a && a.deregister && a.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function e1(t) {
  const [i, r] = Hv(), a = $.useContext(vh);
  return ft.jsx(w2, { ...t, layoutGroup: a, switchLayoutGroup: $.useContext(_b), isPresent: i, safeToRemove: r });
}
const x2 = {
  borderRadius: {
    ...il,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: il,
  borderTopRightRadius: il,
  borderBottomLeftRadius: il,
  borderBottomRightRadius: il,
  boxShadow: b2
};
function S2(t, i, r) {
  const a = xe(t) ? t : kl(t);
  return a.start(Zh("", a, i, r)), a.animation;
}
function T2(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const k2 = (t, i) => t.depth - i.depth;
class E2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    Sh(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    Th(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(k2), this.isDirty = !1, this.children.forEach(i);
  }
}
function A2(t, i) {
  const r = Le.now(), a = ({ timestamp: s }) => {
    const c = s - r;
    c >= i && (Ti(a), t(c - i));
  };
  return Gt.setup(a, !0), () => Ti(a);
}
const n1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], D2 = n1.length, n0 = (t) => typeof t == "string" ? parseFloat(t) : t, i0 = (t) => typeof t == "number" || bt.test(t);
function C2(t, i, r, a, s, c) {
  s ? (t.opacity = Xt(0, r.opacity ?? 1, z2(a)), t.opacityExit = Xt(i.opacity ?? 1, 0, M2(a))) : c && (t.opacity = Xt(i.opacity ?? 1, r.opacity ?? 1, a));
  for (let u = 0; u < D2; u++) {
    const h = `border${n1[u]}Radius`;
    let d = r0(i, h), p = r0(r, h);
    if (d === void 0 && p === void 0)
      continue;
    d || (d = 0), p || (p = 0), d === 0 || p === 0 || i0(d) === i0(p) ? (t[h] = Math.max(Xt(n0(d), n0(p), a), 0), (Cn.test(p) || Cn.test(d)) && (t[h] += "%")) : t[h] = p;
  }
  (i.rotate || r.rotate) && (t.rotate = Xt(i.rotate || 0, r.rotate || 0, a));
}
function r0(t, i) {
  return t[i] !== void 0 ? t[i] : t.borderRadius;
}
const z2 = /* @__PURE__ */ i1(0, 0.5, Zv), M2 = /* @__PURE__ */ i1(0.5, 0.95, un);
function i1(t, i, r) {
  return (a) => a < t ? 0 : a > i ? 1 : r(/* @__PURE__ */ xl(t, i, a));
}
function a0(t, i) {
  t.min = i.min, t.max = i.max;
}
function ln(t, i) {
  a0(t.x, i.x), a0(t.y, i.y);
}
function l0(t, i) {
  t.translate = i.translate, t.scale = i.scale, t.originPoint = i.originPoint, t.origin = i.origin;
}
function o0(t, i, r, a, s) {
  return t -= i, t = xs(t, 1 / r, a), s !== void 0 && (t = xs(t, 1 / s, a)), t;
}
function R2(t, i = 0, r = 1, a = 0.5, s, c = t, u = t) {
  if (Cn.test(i) && (i = parseFloat(i), i = Xt(u.min, u.max, i / 100) - u.min), typeof i != "number")
    return;
  let h = Xt(c.min, c.max, a);
  t === c && (h -= i), t.min = o0(t.min, i, r, h, s), t.max = o0(t.max, i, r, h, s);
}
function s0(t, i, [r, a, s], c, u) {
  R2(t, i[r], i[a], i[s], i.scale, c, u);
}
const O2 = ["x", "scaleX", "originX"], _2 = ["y", "scaleY", "originY"];
function u0(t, i, r, a) {
  s0(t.x, i, O2, r ? r.x : void 0, a ? a.x : void 0), s0(t.y, i, _2, r ? r.y : void 0, a ? a.y : void 0);
}
function c0(t) {
  return t.translate === 0 && t.scale === 1;
}
function r1(t) {
  return c0(t.x) && c0(t.y);
}
function f0(t, i) {
  return t.min === i.min && t.max === i.max;
}
function N2(t, i) {
  return f0(t.x, i.x) && f0(t.y, i.y);
}
function h0(t, i) {
  return Math.round(t.min) === Math.round(i.min) && Math.round(t.max) === Math.round(i.max);
}
function a1(t, i) {
  return h0(t.x, i.x) && h0(t.y, i.y);
}
function d0(t) {
  return De(t.x) / De(t.y);
}
function p0(t, i) {
  return t.translate === i.translate && t.scale === i.scale && t.originPoint === i.originPoint;
}
class L2 {
  constructor() {
    this.members = [];
  }
  add(i) {
    Sh(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (Th(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(i) {
    const r = this.members.findIndex((s) => i === s);
    if (r === 0)
      return !1;
    let a;
    for (let s = r; s >= 0; s--) {
      const c = this.members[s];
      if (c.isPresent !== !1) {
        a = c;
        break;
      }
    }
    return a ? (this.promote(a), !0) : !1;
  }
  promote(i, r) {
    const a = this.lead;
    if (i !== a && (this.prevLead = a, this.lead = i, i.show(), a)) {
      a.instance && a.scheduleRender(), i.scheduleRender(), i.resumeFrom = a, r && (i.resumeFrom.preserveOpacity = !0), a.snapshot && (i.snapshot = a.snapshot, i.snapshot.latestValues = a.animationValues || a.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: s } = i.options;
      s === !1 && a.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: r, resumingFrom: a } = i;
      r.onExitComplete && r.onExitComplete(), a && a.options.onExitComplete && a.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function B2(t, i, r) {
  let a = "";
  const s = t.x.translate / i.x, c = t.y.translate / i.y, u = (r == null ? void 0 : r.z) || 0;
  if ((s || c || u) && (a = `translate3d(${s}px, ${c}px, ${u}px) `), (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `), r) {
    const { transformPerspective: p, rotate: g, rotateX: y, rotateY: b, skewX: v, skewY: S } = r;
    p && (a = `perspective(${p}px) ${a}`), g && (a += `rotate(${g}deg) `), y && (a += `rotateX(${y}deg) `), b && (a += `rotateY(${b}deg) `), v && (a += `skewX(${v}deg) `), S && (a += `skewY(${S}deg) `);
  }
  const h = t.x.scale * i.x, d = t.y.scale * i.y;
  return (h !== 1 || d !== 1) && (a += `scale(${h}, ${d})`), a || "none";
}
const ff = ["", "X", "Y", "Z"], V2 = { visibility: "hidden" }, m0 = 1e3;
let U2 = 0;
function hf(t, i, r, a) {
  const { latestValues: s } = i;
  s[t] && (r[t] = s[t], i.setStaticValue(t, 0), a && (a[t] = 0));
}
function l1(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: i } = t.options;
  if (!i)
    return;
  const r = qb(i);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: c } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Gt, !(s || c));
  }
  const { parent: a } = t;
  a && !a.hasCheckedOptimisedAppear && l1(a);
}
function o1({ attachResizeListener: t, defaultParent: i, measureScroll: r, checkIsScrollRoot: a, resetTransform: s }) {
  return class {
    constructor(u = {}, h = i == null ? void 0 : i()) {
      this.id = U2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(P2), this.nodes.forEach(G2), this.nodes.forEach(I2), this.nodes.forEach(q2);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = u, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new E2());
    }
    addEventListener(u, h) {
      return this.eventHandlers.has(u) || this.eventHandlers.set(u, new Ah()), this.eventHandlers.get(u).add(h);
    }
    notifyListeners(u, ...h) {
      const d = this.eventHandlers.get(u);
      d && d.notify(...h);
    }
    hasListeners(u) {
      return this.eventHandlers.has(u);
    }
    /**
     * Lifecycles
     */
    mount(u, h = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = T2(u), this.instance = u;
      const { layoutId: d, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), h && (p || d) && (this.isLayoutDirty = !0), t) {
        let y;
        const b = () => this.root.updateBlockedByResize = !1;
        t(u, () => {
          this.root.updateBlockedByResize = !0, y && y(), y = A2(b, 250), ms.hasAnimatedSinceResize && (ms.hasAnimatedSinceResize = !1, this.nodes.forEach(y0));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && g && (d || p) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: b, hasRelativeLayoutChanged: v, layout: S }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const A = this.options.transition || g.getDefaultTransition() || J2, { onLayoutAnimationStart: M, onLayoutAnimationComplete: k } = g.getProps(), C = !this.targetLayout || !a1(this.targetLayout, S), D = !b && v;
        if (this.options.layoutRoot || this.resumeFrom || D || b && (C || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, D);
          const V = {
            ...Uh(A, "layout"),
            onPlay: M,
            onComplete: k
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          b || y0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = S;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const u = this.getStack();
      u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ti(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Q2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: u } = this.options;
      return u && u.getProps().transformTemplate;
    }
    willUpdate(u = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && l1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: d } = this.options;
      if (h === void 0 && !d)
        return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(g0);
        return;
      }
      this.isUpdating || this.nodes.forEach(F2), this.isUpdating = !1, this.nodes.forEach(X2), this.nodes.forEach(j2), this.nodes.forEach(H2), this.clearAllSnapshots();
      const h = Le.now();
      ge.delta = In(0, 1e3 / 60, h - ge.timestamp), ge.timestamp = h, ge.isProcessing = !0, nf.update.process(ge), nf.preRender.process(ge), nf.render.process(ge), ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Y2), this.sharedNodes.forEach(K2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Gt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Gt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !De(this.snapshot.measuredBox.x) && !De(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let d = 0; d < this.path.length; d++)
          this.path[d].updateScroll();
      const u = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = $t(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0);
    }
    updateScroll(u = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (h = !1), h) {
        const d = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: u,
          isRoot: d,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : d
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !r1(this.projectionDelta), d = this.getTransformTemplate(), p = d ? d(this.latestValues, "") : void 0, g = p !== this.prevTransformTemplateValue;
      u && (h || Gi(this.latestValues) || g) && (s(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(u = !0) {
      const h = this.measurePageBox();
      let d = this.removeElementScroll(h);
      return u && (d = this.removeTransform(d)), $2(d), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: d,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var p;
      const { visualElement: u } = this.options;
      if (!u)
        return $t();
      const h = u.measureViewportBox();
      if (!(((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(tA))) {
        const { scroll: g } = this.root;
        g && (Xr(h.x, g.offset.x), Xr(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(u) {
      var d;
      const h = $t();
      if (ln(h, u), (d = this.scroll) != null && d.wasRoot)
        return h;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p], { scroll: y, options: b } = g;
        g !== this.root && y && b.layoutScroll && (y.wasRoot && ln(h, u), Xr(h.x, y.offset.x), Xr(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(u, h = !1) {
      const d = $t();
      ln(d, u);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && Gr(d, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), Gi(g.latestValues) && Gr(d, g.latestValues);
      }
      return Gi(this.latestValues) && Gr(d, this.latestValues), d;
    }
    removeTransform(u) {
      const h = $t();
      ln(h, u);
      for (let d = 0; d < this.path.length; d++) {
        const p = this.path[d];
        if (!p.instance || !Gi(p.latestValues))
          continue;
        nh(p.latestValues) && p.updateSnapshot();
        const g = $t(), y = p.measurePageBox();
        ln(g, y), u0(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return Gi(this.latestValues) && u0(h, this.latestValues), h;
    }
    setTargetDelta(u) {
      this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(u) {
      this.options = {
        ...this.options,
        ...u,
        crossfade: u.crossfade !== void 0 ? u.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(u = !1) {
      var b;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const d = !!this.resumingFrom || this !== h;
      if (!(u || d && this.isSharedProjectionDirty || this.isProjectionDirty || (b = this.parent) != null && b.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!(!this.layout || !(g || y))) {
        if (this.resolvedRelativeTargetAt = ge.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $t(), this.relativeTargetOrigin = $t(), yl(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), ln(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $t(), this.targetWithTransforms = $t()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), n2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ln(this.target, this.layout.layoutBox), Zb(this.target, this.targetDelta)) : ln(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const v = this.getClosestProjectingParent();
          v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $t(), this.relativeTargetOrigin = $t(), yl(this.relativeTargetOrigin, this.target, v.target), ln(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || nh(this.parent.latestValues) || Kb(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var S;
      const u = this.getLead(), h = !!this.resumingFrom || this !== u;
      let d = !0;
      if ((this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty) && (d = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (d = !1), this.resolvedRelativeTargetAt === ge.timestamp && (d = !1), d)
        return;
      const { layout: p, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g))
        return;
      ln(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, b = this.treeScale.y;
      i2(this.layoutCorrected, this.treeScale, this.path, h), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = $t());
      const { target: v } = u;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (l0(this.prevProjectionDelta.x, this.projectionDelta.x), l0(this.prevProjectionDelta.y, this.projectionDelta.y)), gl(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== b || !p0(this.projectionDelta.x, this.prevProjectionDelta.x) || !p0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(u = !0) {
      var h;
      if ((h = this.options.visualElement) == null || h.scheduleRender(), u) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Fr(), this.projectionDelta = Fr(), this.projectionDeltaWithTransform = Fr();
    }
    setAnimationOrigin(u, h = !1) {
      const d = this.snapshot, p = d ? d.latestValues : {}, g = { ...this.latestValues }, y = Fr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const b = $t(), v = d ? d.source : void 0, S = this.layout ? this.layout.source : void 0, A = v !== S, M = this.getStack(), k = !M || M.members.length <= 1, C = !!(A && !k && this.options.crossfade === !0 && !this.path.some(W2));
      this.animationProgress = 0;
      let D;
      this.mixTargetDelta = (V) => {
        const _ = V / 1e3;
        v0(y.x, u.x, _), v0(y.y, u.y, _), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yl(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Z2(this.relativeTarget, this.relativeTargetOrigin, b, _), D && N2(this.relativeTarget, D) && (this.isProjectionDirty = !1), D || (D = $t()), ln(D, this.relativeTarget)), A && (this.animationValues = g, C2(g, p, this.latestValues, _, C, k)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(u) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ti(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Gt.update(() => {
        ms.hasAnimatedSinceResize = !0, this.currentAnimation = S2(0, m0, {
          ...u,
          onUpdate: (h) => {
            this.mixTargetDelta(h), u.onUpdate && u.onUpdate(h);
          },
          onStop: () => {
          },
          onComplete: () => {
            u.onComplete && u.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const u = this.getStack();
      u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(m0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const u = this.getLead();
      let { targetWithTransforms: h, target: d, layout: p, latestValues: g } = u;
      if (!(!h || !d || !p)) {
        if (this !== u && this.layout && p && s1(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          d = this.target || $t();
          const y = De(this.layout.layoutBox.x);
          d.x.min = u.target.x.min, d.x.max = d.x.min + y;
          const b = De(this.layout.layoutBox.y);
          d.y.min = u.target.y.min, d.y.max = d.y.min + b;
        }
        ln(h, d), Gr(h, g), gl(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(u, h) {
      this.sharedNodes.has(u) || this.sharedNodes.set(u, new L2()), this.sharedNodes.get(u).add(h);
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const u = this.getStack();
      return u ? u.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: u } = this.options;
      return u ? ((h = this.getStack()) == null ? void 0 : h.lead) || this : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: u } = this.options;
      return u ? (h = this.getStack()) == null ? void 0 : h.prevLead : void 0;
    }
    getStack() {
      const { layoutId: u } = this.options;
      if (u)
        return this.root.sharedNodes.get(u);
    }
    promote({ needsReset: u, transition: h, preserveFollowOpacity: d } = {}) {
      const p = this.getStack();
      p && p.promote(this, d), u && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const u = this.getStack();
      return u ? u.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: u } = this.options;
      if (!u)
        return;
      let h = !1;
      const { latestValues: d } = u;
      if ((d.z || d.rotate || d.rotateX || d.rotateY || d.rotateZ || d.skewX || d.skewY) && (h = !0), !h)
        return;
      const p = {};
      d.z && hf("z", u, p, this.animationValues);
      for (let g = 0; g < ff.length; g++)
        hf(`rotate${ff[g]}`, u, p, this.animationValues), hf(`skew${ff[g]}`, u, p, this.animationValues);
      u.render();
      for (const g in p)
        u.setStaticValue(g, p[g]), this.animationValues && (this.animationValues[g] = p[g]);
      u.scheduleRender();
    }
    getProjectionStyles(u) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return V2;
      const h = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = ps(u == null ? void 0 : u.pointerEvents) || "", h.transform = d ? d(this.latestValues, "") : "none", h;
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = ps(u == null ? void 0 : u.pointerEvents) || ""), this.hasProjected && !Gi(this.latestValues) && (v.transform = d ? d({}, "") : "none", this.hasProjected = !1), v;
      }
      const g = p.animationValues || p.latestValues;
      this.applyTransformsToTarget(), h.transform = B2(this.projectionDeltaWithTransform, this.treeScale, g), d && (h.transform = d(g, h.transform));
      const { x: y, y: b } = this.projectionDelta;
      h.transformOrigin = `${y.origin * 100}% ${b.origin * 100}% 0`, p.animationValues ? h.opacity = p === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : h.opacity = p === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const v in Al) {
        if (g[v] === void 0)
          continue;
        const { correct: S, applyTo: A, isCSSVariable: M } = Al[v], k = h.transform === "none" ? g[v] : S(g[v], p);
        if (A) {
          const C = A.length;
          for (let D = 0; D < C; D++)
            h[A[D]] = k;
        } else
          M ? this.options.visualElement.renderState.vars[v] = k : h[v] = k;
      }
      return this.options.layoutId && (h.pointerEvents = p === this ? ps(u == null ? void 0 : u.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((u) => {
        var h;
        return (h = u.currentAnimation) == null ? void 0 : h.stop();
      }), this.root.nodes.forEach(g0), this.root.sharedNodes.clear();
    }
  };
}
function j2(t) {
  t.updateLayout();
}
function H2(t) {
  var r;
  const i = ((r = t.resumeFrom) == null ? void 0 : r.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: s } = t.layout, { animationType: c } = t.options, u = i.source !== t.layout.source;
    c === "size" ? on((y) => {
      const b = u ? i.measuredBox[y] : i.layoutBox[y], v = De(b);
      b.min = a[y].min, b.max = b.min + v;
    }) : s1(c, i.layoutBox, a) && on((y) => {
      const b = u ? i.measuredBox[y] : i.layoutBox[y], v = De(a[y]);
      b.max = b.min + v, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + v);
    });
    const h = Fr();
    gl(h, a, i.layoutBox);
    const d = Fr();
    u ? gl(d, t.applyTransform(s, !0), i.measuredBox) : gl(d, a, i.layoutBox);
    const p = !r1(h);
    let g = !1;
    if (!t.resumeFrom) {
      const y = t.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: b, layout: v } = y;
        if (b && v) {
          const S = $t();
          yl(S, i.layoutBox, b.layoutBox);
          const A = $t();
          yl(A, a, v.layoutBox), a1(S, A) || (g = !0), y.options.layoutRoot && (t.relativeTarget = A, t.relativeTargetOrigin = S, t.relativeParent = y);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: a,
      snapshot: i,
      delta: d,
      layoutDelta: h,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g
    });
  } else if (t.isLead()) {
    const { onExitComplete: a } = t.options;
    a && a();
  }
  t.options.transition = void 0;
}
function P2(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function q2(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Y2(t) {
  t.clearSnapshot();
}
function g0(t) {
  t.clearMeasurements();
}
function F2(t) {
  t.isLayoutDirty = !1;
}
function X2(t) {
  const { visualElement: i } = t.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function y0(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function G2(t) {
  t.resolveTargetDelta();
}
function I2(t) {
  t.calcProjection();
}
function Q2(t) {
  t.resetSkewAndRotation();
}
function K2(t) {
  t.removeLeadSnapshot();
}
function v0(t, i, r) {
  t.translate = Xt(i.translate, 0, r), t.scale = Xt(i.scale, 1, r), t.origin = i.origin, t.originPoint = i.originPoint;
}
function b0(t, i, r, a) {
  t.min = Xt(i.min, r.min, a), t.max = Xt(i.max, r.max, a);
}
function Z2(t, i, r, a) {
  b0(t.x, i.x, r.x, a), b0(t.y, i.y, r.y, a);
}
function W2(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const J2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, w0 = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), x0 = w0("applewebkit/") && !w0("chrome/") ? Math.round : un;
function S0(t) {
  t.min = x0(t.min), t.max = x0(t.max);
}
function $2(t) {
  S0(t.x), S0(t.y);
}
function s1(t, i, r) {
  return t === "position" || t === "preserve-aspect" && !e2(d0(i), d0(r), 0.2);
}
function tA(t) {
  var i;
  return t !== t.root && ((i = t.scroll) == null ? void 0 : i.wasRoot);
}
const eA = o1({
  attachResizeListener: (t, i) => Cl(t, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), df = {
  current: void 0
}, u1 = o1({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!df.current) {
      const t = new eA({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), df.current = t;
    }
    return df.current;
  },
  resetTransform: (t, i) => {
    t.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), nA = {
  pan: {
    Feature: v2
  },
  drag: {
    Feature: y2,
    ProjectionNode: u1,
    MeasureLayout: e1
  }
};
function T0(t, i, r) {
  const { props: a } = t;
  t.animationState && a.whileHover && t.animationState.setActive("whileHover", r === "Start");
  const s = "onHover" + r, c = a[s];
  c && Gt.postRender(() => c(i, Ll(i)));
}
class iA extends Ei {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = _k(i, (r, a) => (T0(this.node, a, "Start"), (s) => T0(this.node, s, "End"))));
  }
  unmount() {
  }
}
class rA extends Ei {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ol(Cl(this.node.current, "focus", () => this.onFocus()), Cl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function k0(t, i, r) {
  const { props: a } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && a.whileTap && t.animationState.setActive("whileTap", r === "Start");
  const s = "onTap" + (r === "End" ? "" : r), c = a[s];
  c && Gt.postRender(() => c(i, Ll(i)));
}
class aA extends Ei {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = Vk(i, (r, a) => (k0(this.node, a, "Start"), (s, { success: c }) => k0(this.node, s, c ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ah = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), lA = (t) => {
  const i = ah.get(t.target);
  i && i(t);
}, oA = (t) => {
  t.forEach(lA);
};
function sA({ root: t, ...i }) {
  const r = t || document;
  pf.has(r) || pf.set(r, {});
  const a = pf.get(r), s = JSON.stringify(i);
  return a[s] || (a[s] = new IntersectionObserver(oA, { root: t, ...i })), a[s];
}
function uA(t, i, r) {
  const a = sA(i);
  return ah.set(t, r), a.observe(t), () => {
    ah.delete(t), a.unobserve(t);
  };
}
const cA = {
  some: 0,
  all: 1
};
class fA extends Ei {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(), { root: r, margin: a, amount: s = "some", once: c } = i, u = {
      root: r ? r.current : void 0,
      rootMargin: a,
      threshold: typeof s == "number" ? s : cA[s]
    }, h = (d) => {
      const { isIntersecting: p } = d;
      if (this.isInView === p || (this.isInView = p, c && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), b = p ? g : y;
      b && b(d);
    };
    return uA(this.node.current, u, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(hA(i, r)) && this.startObserver();
  }
  unmount() {
  }
}
function hA({ viewport: t = {} }, { viewport: i = {} } = {}) {
  return (r) => t[r] !== i[r];
}
const dA = {
  inView: {
    Feature: fA
  },
  tap: {
    Feature: aA
  },
  focus: {
    Feature: rA
  },
  hover: {
    Feature: iA
  }
}, pA = {
  layout: {
    ProjectionNode: u1,
    MeasureLayout: e1
  }
}, lh = { current: null }, c1 = { current: !1 };
function mA() {
  if (c1.current = !0, !!wh)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), i = () => lh.current = t.matches;
      t.addListener(i), i();
    } else
      lh.current = !1;
}
const gA = /* @__PURE__ */ new WeakMap();
function yA(t, i, r) {
  for (const a in i) {
    const s = i[a], c = r[a];
    if (xe(s))
      t.addValue(a, s);
    else if (xe(c))
      t.addValue(a, kl(s, { owner: t }));
    else if (c !== s)
      if (t.hasValue(a)) {
        const u = t.getValue(a);
        u.liveStyle === !0 ? u.jump(s) : u.hasAnimated || u.set(s);
      } else {
        const u = t.getStaticValue(a);
        t.addValue(a, kl(u !== void 0 ? u : s, { owner: t }));
      }
  }
  for (const a in r)
    i[a] === void 0 && t.removeValue(a);
  return i;
}
const E0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class vA {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, r, a) {
    return {};
  }
  constructor({ parent: i, props: r, presenceContext: a, reducedMotionConfig: s, blockInitialAnimation: c, visualState: u }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Vh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const b = Le.now();
      this.renderScheduledAt < b && (this.renderScheduledAt = b, Gt.render(this.render, !1, !0));
    };
    const { latestValues: d, renderState: p } = u;
    this.latestValues = d, this.baseTarget = { ...d }, this.initialValues = r.initial ? { ...d } : {}, this.renderState = p, this.parent = i, this.props = r, this.presenceContext = a, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = s, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = Rs(r), this.isVariantNode = Rb(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: g, ...y } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const b in y) {
      const v = y[b];
      d[b] !== void 0 && xe(v) && v.set(d[b], !1);
    }
  }
  mount(i) {
    this.current = i, gA.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, a) => this.bindToMotionValue(a, r)), c1.current || mA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Ti(this.notifyUpdate), Ti(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const r = this.features[i];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(i, r) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const a = $r.has(i);
    a && this.onBindTransform && this.onBindTransform();
    const s = r.on("change", (h) => {
      this.latestValues[i] = h, this.props.onUpdate && Gt.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0);
    }), c = r.on("renderRequest", this.scheduleRender);
    let u;
    window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, i, r)), this.valueSubscriptions.set(i, () => {
      s(), c(), u && u(), r.owner && r.stop();
    });
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Kr) {
      const r = Kr[i];
      if (!r)
        continue;
      const { isEnabled: a, Feature: s } = r;
      if (!this.features[i] && s && a(this.props) && (this.features[i] = new s(this)), this.features[i]) {
        const c = this.features[i];
        c.isMounted ? c.update() : (c.mount(), c.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $t();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, r) {
    this.latestValues[i] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(i, r) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let a = 0; a < E0.length; a++) {
      const s = E0[a];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, u = i[c];
      u && (this.propEventSubscriptions[s] = this.on(s, u));
    }
    this.prevMotionValues = yA(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(i) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(i), () => r.variantChildren.delete(i);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(i, r) {
    const a = this.values.get(i);
    r !== a && (a && this.removeValue(i), this.bindToMotionValue(i, r), this.values.set(i, r), this.latestValues[i] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(i) {
    this.values.delete(i);
    const r = this.valueSubscriptions.get(i);
    r && (r(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, r) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let a = this.values.get(i);
    return a === void 0 && r !== void 0 && (a = kl(r === null ? void 0 : r, { owner: this }), this.addValue(i, a)), a;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, r) {
    let a = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return a != null && (typeof a == "string" && (Pv(a) || qv(a)) ? a = parseFloat(a) : !Pk(a) && ki.test(r) && (a = kb(i, r)), this.setBaseTarget(i, xe(a) ? a.get() : a)), xe(a) ? a.get() : a;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, r) {
    this.baseTarget[i] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(i) {
    var c;
    const { initial: r } = this.props;
    let a;
    if (typeof r == "string" || typeof r == "object") {
      const u = Qh(this.props, r, (c = this.presenceContext) == null ? void 0 : c.custom);
      u && (a = u[i]);
    }
    if (r && a !== void 0)
      return a;
    const s = this.getBaseTargetFromProps(this.props, i);
    return s !== void 0 && !xe(s) ? s : this.initialValues[i] !== void 0 && a === void 0 ? void 0 : this.baseTarget[i];
  }
  on(i, r) {
    return this.events[i] || (this.events[i] = new Ah()), this.events[i].add(r);
  }
  notify(i, ...r) {
    this.events[i] && this.events[i].notify(...r);
  }
}
class f1 extends vA {
  constructor() {
    super(...arguments), this.KeyframeResolver = Mk;
  }
  sortInstanceNodePosition(i, r) {
    return i.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, r) {
    return i.style ? i.style[r] : void 0;
  }
  removeValueFromRenderState(i, { vars: r, style: a }) {
    delete r[i], delete a[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    xe(i) && (this.childSubscription = i.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
function h1(t, { style: i, vars: r }, a, s) {
  Object.assign(t.style, i, s && s.getProjectionStyles(a));
  for (const c in r)
    t.style.setProperty(c, r[c]);
}
function bA(t) {
  return window.getComputedStyle(t);
}
class wA extends f1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = h1;
  }
  readValueFromInstance(i, r) {
    if ($r.has(r))
      return KT(i, r);
    {
      const a = bA(i), s = (zh(r) ? a.getPropertyValue(r) : a[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: r }) {
    return Wb(i, r);
  }
  build(i, r, a) {
    Xh(i, r, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, r, a) {
    return Kh(i, r, a);
  }
}
const d1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function xA(t, i, r, a) {
  h1(t, i, void 0, a);
  for (const s in i.attrs)
    t.setAttribute(d1.has(s) ? s : Fh(s), i.attrs[s]);
}
class SA extends f1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = $t;
  }
  getBaseTargetFromProps(i, r) {
    return i[r];
  }
  readValueFromInstance(i, r) {
    if ($r.has(r)) {
      const a = Tb(r);
      return a && a.default || 0;
    }
    return r = d1.has(r) ? r : Fh(r), i.getAttribute(r);
  }
  scrapeMotionValuesFromProps(i, r, a) {
    return Pb(i, r, a);
  }
  build(i, r, a) {
    Vb(i, r, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(i, r, a, s) {
    xA(i, r, a, s);
  }
  mount(i) {
    this.isSVGTag = jb(i.tagName), super.mount(i);
  }
}
const TA = (t, i) => Ih(t) ? new SA(i) : new wA(i, {
  allowProjection: t !== $.Fragment
}), kA = /* @__PURE__ */ xE({
  ...IE,
  ...dA,
  ...nA,
  ...pA
}, TA), mf = /* @__PURE__ */ Gk(kA);
function EA({
  title: t,
  titleId: i,
  ...r
}, a) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": i
  }, r), t ? /* @__PURE__ */ $.createElement("title", {
    id: i
  }, t) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
  }));
}
const AA = /* @__PURE__ */ $.forwardRef(EA);
function DA({
  title: t,
  titleId: i,
  ...r
}, a) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": i
  }, r), t ? /* @__PURE__ */ $.createElement("title", {
    id: i
  }, t) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
  }));
}
const CA = /* @__PURE__ */ $.forwardRef(DA);
function zA({
  title: t,
  titleId: i,
  ...r
}, a) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": i
  }, r), t ? /* @__PURE__ */ $.createElement("title", {
    id: i
  }, t) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const MA = /* @__PURE__ */ $.forwardRef(zA);
function RA(t, i) {
  const r = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const OA = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, _A = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, NA = {};
function A0(t, i) {
  return (NA.jsx ? _A : OA).test(t);
}
const LA = /[ \t\n\f\r]/g;
function BA(t) {
  return typeof t == "object" ? t.type === "text" ? D0(t.value) : !1 : D0(t);
}
function D0(t) {
  return t.replace(LA, "") === "";
}
class Bl {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(i, r, a) {
    this.normal = r, this.property = i, a && (this.space = a);
  }
}
Bl.prototype.normal = {};
Bl.prototype.property = {};
Bl.prototype.space = void 0;
function p1(t, i) {
  const r = {}, a = {};
  for (const s of t)
    Object.assign(r, s.property), Object.assign(a, s.normal);
  return new Bl(r, a, i);
}
function oh(t) {
  return t.toLowerCase();
}
class Be {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(i, r) {
    this.attribute = r, this.property = i;
  }
}
Be.prototype.attribute = "";
Be.prototype.booleanish = !1;
Be.prototype.boolean = !1;
Be.prototype.commaOrSpaceSeparated = !1;
Be.prototype.commaSeparated = !1;
Be.prototype.defined = !1;
Be.prototype.mustUseProperty = !1;
Be.prototype.number = !1;
Be.prototype.overloadedBoolean = !1;
Be.prototype.property = "";
Be.prototype.spaceSeparated = !1;
Be.prototype.space = void 0;
let VA = 0;
const wt = Wi(), ie = Wi(), m1 = Wi(), et = Wi(), qt = Wi(), Ir = Wi(), Ie = Wi();
function Wi() {
  return 2 ** ++VA;
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: wt,
  booleanish: ie,
  commaOrSpaceSeparated: Ie,
  commaSeparated: Ir,
  number: et,
  overloadedBoolean: m1,
  spaceSeparated: qt
}, Symbol.toStringTag, { value: "Module" })), gf = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(sh)
);
class Wh extends Be {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(i, r, a, s) {
    let c = -1;
    if (super(i, r), C0(this, "space", s), typeof a == "number")
      for (; ++c < gf.length; ) {
        const u = gf[c];
        C0(this, gf[c], (a & sh[u]) === sh[u]);
      }
  }
}
Wh.prototype.defined = !0;
function C0(t, i, r) {
  r && (t[i] = r);
}
function ta(t) {
  const i = {}, r = {};
  for (const [a, s] of Object.entries(t.properties)) {
    const c = new Wh(
      a,
      t.transform(t.attributes || {}, a),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(a) && (c.mustUseProperty = !0), i[a] = c, r[oh(a)] = a, r[oh(c.attribute)] = a;
  }
  return new Bl(i, r, t.space);
}
const g1 = ta({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ie,
    ariaAutoComplete: null,
    ariaBusy: ie,
    ariaChecked: ie,
    ariaColCount: et,
    ariaColIndex: et,
    ariaColSpan: et,
    ariaControls: qt,
    ariaCurrent: null,
    ariaDescribedBy: qt,
    ariaDetails: null,
    ariaDisabled: ie,
    ariaDropEffect: qt,
    ariaErrorMessage: null,
    ariaExpanded: ie,
    ariaFlowTo: qt,
    ariaGrabbed: ie,
    ariaHasPopup: null,
    ariaHidden: ie,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: qt,
    ariaLevel: et,
    ariaLive: null,
    ariaModal: ie,
    ariaMultiLine: ie,
    ariaMultiSelectable: ie,
    ariaOrientation: null,
    ariaOwns: qt,
    ariaPlaceholder: null,
    ariaPosInSet: et,
    ariaPressed: ie,
    ariaReadOnly: ie,
    ariaRelevant: null,
    ariaRequired: ie,
    ariaRoleDescription: qt,
    ariaRowCount: et,
    ariaRowIndex: et,
    ariaRowSpan: et,
    ariaSelected: ie,
    ariaSetSize: et,
    ariaSort: null,
    ariaValueMax: et,
    ariaValueMin: et,
    ariaValueNow: et,
    ariaValueText: null,
    role: null
  },
  transform(t, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function y1(t, i) {
  return i in t ? t[i] : i;
}
function v1(t, i) {
  return y1(t, i.toLowerCase());
}
const UA = ta({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ir,
    acceptCharset: qt,
    accessKey: qt,
    action: null,
    allow: null,
    allowFullScreen: wt,
    allowPaymentRequest: wt,
    allowUserMedia: wt,
    alt: null,
    as: null,
    async: wt,
    autoCapitalize: null,
    autoComplete: qt,
    autoFocus: wt,
    autoPlay: wt,
    blocking: qt,
    capture: null,
    charSet: null,
    checked: wt,
    cite: null,
    className: qt,
    cols: et,
    colSpan: null,
    content: null,
    contentEditable: ie,
    controls: wt,
    controlsList: qt,
    coords: et | Ir,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: wt,
    defer: wt,
    dir: null,
    dirName: null,
    disabled: wt,
    download: m1,
    draggable: ie,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: wt,
    formTarget: null,
    headers: qt,
    height: et,
    hidden: wt,
    high: et,
    href: null,
    hrefLang: null,
    htmlFor: qt,
    httpEquiv: qt,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: wt,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: wt,
    itemId: null,
    itemProp: qt,
    itemRef: qt,
    itemScope: wt,
    itemType: qt,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: wt,
    low: et,
    manifest: null,
    max: null,
    maxLength: et,
    media: null,
    method: null,
    min: null,
    minLength: et,
    multiple: wt,
    muted: wt,
    name: null,
    nonce: null,
    noModule: wt,
    noValidate: wt,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: wt,
    optimum: et,
    pattern: null,
    ping: qt,
    placeholder: null,
    playsInline: wt,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: wt,
    referrerPolicy: null,
    rel: qt,
    required: wt,
    reversed: wt,
    rows: et,
    rowSpan: et,
    sandbox: qt,
    scope: null,
    scoped: wt,
    seamless: wt,
    selected: wt,
    shadowRootClonable: wt,
    shadowRootDelegatesFocus: wt,
    shadowRootMode: null,
    shape: null,
    size: et,
    sizes: null,
    slot: null,
    span: et,
    spellCheck: ie,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: et,
    step: null,
    style: null,
    tabIndex: et,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: wt,
    useMap: null,
    value: ie,
    width: et,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: qt,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: et,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: et,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: wt,
    // Lists. Use CSS to reduce space between items instead
    declare: wt,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: et,
    // `<img>` and `<object>`
    leftMargin: et,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: et,
    // `<body>`
    marginWidth: et,
    // `<body>`
    noResize: wt,
    // `<frame>`
    noHref: wt,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: wt,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: wt,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: et,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ie,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: et,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: et,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: wt,
    disableRemotePlayback: wt,
    prefix: null,
    property: null,
    results: et,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: v1
}), jA = ta({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Ie,
    accentHeight: et,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: et,
    amplitude: et,
    arabicForm: null,
    ascent: et,
    attributeName: null,
    attributeType: null,
    azimuth: et,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: et,
    by: null,
    calcMode: null,
    capHeight: et,
    className: qt,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: et,
    diffuseConstant: et,
    direction: null,
    display: null,
    dur: null,
    divisor: et,
    dominantBaseline: null,
    download: wt,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: et,
    enableBackground: null,
    end: null,
    event: null,
    exponent: et,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: et,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ir,
    g2: Ir,
    glyphName: Ir,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: et,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: et,
    horizOriginX: et,
    horizOriginY: et,
    id: null,
    ideographic: et,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: et,
    k: et,
    k1: et,
    k2: et,
    k3: et,
    k4: et,
    kernelMatrix: Ie,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: et,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: et,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: et,
    overlineThickness: et,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: et,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: qt,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: et,
    pointsAtY: et,
    pointsAtZ: et,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ie,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ie,
    rev: Ie,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ie,
    requiredFeatures: Ie,
    requiredFonts: Ie,
    requiredFormats: Ie,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: et,
    specularExponent: et,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: et,
    strikethroughThickness: et,
    string: null,
    stroke: null,
    strokeDashArray: Ie,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: et,
    strokeOpacity: et,
    strokeWidth: null,
    style: null,
    surfaceScale: et,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ie,
    tabIndex: et,
    tableValues: null,
    target: null,
    targetX: et,
    targetY: et,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ie,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: et,
    underlineThickness: et,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: et,
    values: null,
    vAlphabetic: et,
    vMathematical: et,
    vectorEffect: null,
    vHanging: et,
    vIdeographic: et,
    version: null,
    vertAdvY: et,
    vertOriginX: et,
    vertOriginY: et,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: et,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: y1
}), b1 = ta({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, i) {
    return "xlink:" + i.slice(5).toLowerCase();
  }
}), w1 = ta({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: v1
}), x1 = ta({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), HA = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, PA = /[A-Z]/g, z0 = /-[a-z]/g, qA = /^data[-\w.:]+$/i;
function YA(t, i) {
  const r = oh(i);
  let a = i, s = Be;
  if (r in t.normal)
    return t.property[t.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && qA.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(z0, XA);
      a = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!z0.test(c)) {
        let u = c.replace(PA, FA);
        u.charAt(0) !== "-" && (u = "-" + u), i = "data" + u;
      }
    }
    s = Wh;
  }
  return new s(a, i);
}
function FA(t) {
  return "-" + t.toLowerCase();
}
function XA(t) {
  return t.charAt(1).toUpperCase();
}
const GA = p1([g1, UA, b1, w1, x1], "html"), Jh = p1([g1, jA, b1, w1, x1], "svg");
function IA(t) {
  return t.join(" ").trim();
}
var Ur = {}, yf, M0;
function QA() {
  if (M0) return yf;
  M0 = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, r = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, h = /^\s+|\s+$/g, d = `
`, p = "/", g = "*", y = "", b = "comment", v = "declaration";
  yf = function(A, M) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    M = M || {};
    var k = 1, C = 1;
    function D(nt) {
      var it = nt.match(i);
      it && (k += it.length);
      var lt = nt.lastIndexOf(d);
      C = ~lt ? nt.length - lt : C + nt.length;
    }
    function V() {
      var nt = { line: k, column: C };
      return function(it) {
        return it.position = new _(nt), N(), it;
      };
    }
    function _(nt) {
      this.start = nt, this.end = { line: k, column: C }, this.source = M.source;
    }
    _.prototype.content = A;
    function O(nt) {
      var it = new Error(
        M.source + ":" + k + ":" + C + ": " + nt
      );
      if (it.reason = nt, it.filename = M.source, it.line = k, it.column = C, it.source = A, !M.silent) throw it;
    }
    function z(nt) {
      var it = nt.exec(A);
      if (it) {
        var lt = it[0];
        return D(lt), A = A.slice(lt.length), it;
      }
    }
    function N() {
      z(r);
    }
    function F(nt) {
      var it;
      for (nt = nt || []; it = L(); )
        it !== !1 && nt.push(it);
      return nt;
    }
    function L() {
      var nt = V();
      if (!(p != A.charAt(0) || g != A.charAt(1))) {
        for (var it = 2; y != A.charAt(it) && (g != A.charAt(it) || p != A.charAt(it + 1)); )
          ++it;
        if (it += 2, y === A.charAt(it - 1))
          return O("End of comment missing");
        var lt = A.slice(2, it - 2);
        return C += 2, D(lt), A = A.slice(it), C += 2, nt({
          type: b,
          comment: lt
        });
      }
    }
    function J() {
      var nt = V(), it = z(a);
      if (it) {
        if (L(), !z(s)) return O("property missing ':'");
        var lt = z(c), P = nt({
          type: v,
          property: S(it[0].replace(t, y)),
          value: lt ? S(lt[0].replace(t, y)) : y
        });
        return z(u), P;
      }
    }
    function Z() {
      var nt = [];
      F(nt);
      for (var it; it = J(); )
        it !== !1 && (nt.push(it), F(nt));
      return nt;
    }
    return N(), Z();
  };
  function S(A) {
    return A ? A.replace(h, y) : y;
  }
  return yf;
}
var R0;
function KA() {
  if (R0) return Ur;
  R0 = 1;
  var t = Ur && Ur.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.default = r;
  var i = t(QA());
  function r(a, s) {
    var c = null;
    if (!a || typeof a != "string")
      return c;
    var u = (0, i.default)(a), h = typeof s == "function";
    return u.forEach(function(d) {
      if (d.type === "declaration") {
        var p = d.property, g = d.value;
        h ? s(p, g, d) : g && (c = c || {}, c[p] = g);
      }
    }), c;
  }
  return Ur;
}
var rl = {}, O0;
function ZA() {
  if (O0) return rl;
  O0 = 1, Object.defineProperty(rl, "__esModule", { value: !0 }), rl.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, r = /^[^-]+$/, a = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(p) {
    return !p || r.test(p) || t.test(p);
  }, u = function(p, g) {
    return g.toUpperCase();
  }, h = function(p, g) {
    return "".concat(g, "-");
  }, d = function(p, g) {
    return g === void 0 && (g = {}), c(p) ? p : (p = p.toLowerCase(), g.reactCompat ? p = p.replace(s, h) : p = p.replace(a, h), p.replace(i, u));
  };
  return rl.camelCase = d, rl;
}
var al, _0;
function WA() {
  if (_0) return al;
  _0 = 1;
  var t = al && al.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = t(KA()), r = ZA();
  function a(s, c) {
    var u = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(h, d) {
      h && d && (u[(0, r.camelCase)(h, c)] = d);
    }), u;
  }
  return a.default = a, al = a, al;
}
var JA = WA();
const $A = /* @__PURE__ */ Ds(JA), S1 = T1("end"), $h = T1("start");
function T1(t) {
  return i;
  function i(r) {
    const a = r && r.position && r.position[t] || {};
    if (typeof a.line == "number" && a.line > 0 && typeof a.column == "number" && a.column > 0)
      return {
        line: a.line,
        column: a.column,
        offset: typeof a.offset == "number" && a.offset > -1 ? a.offset : void 0
      };
  }
}
function tD(t) {
  const i = $h(t), r = S1(t);
  if (i && r)
    return { start: i, end: r };
}
function vl(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? N0(t.position) : "start" in t || "end" in t ? N0(t) : "line" in t || "column" in t ? uh(t) : "";
}
function uh(t) {
  return L0(t && t.line) + ":" + L0(t && t.column);
}
function N0(t) {
  return uh(t && t.start) + "-" + uh(t && t.end);
}
function L0(t) {
  return t && typeof t == "number" ? t : 1;
}
class Te extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(i, r, a) {
    super(), typeof r == "string" && (a = r, r = void 0);
    let s = "", c = {}, u = !1;
    if (r && ("line" in r && "column" in r ? c = { place: r } : "start" in r && "end" in r ? c = { place: r } : "type" in r ? c = {
      ancestors: [r],
      place: r.position
    } : c = { ...r }), typeof i == "string" ? s = i : !c.cause && i && (u = !0, s = i.message, c.cause = i), !c.ruleId && !c.source && typeof a == "string") {
      const d = a.indexOf(":");
      d === -1 ? c.ruleId = a : (c.source = a.slice(0, d), c.ruleId = a.slice(d + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const d = c.ancestors[c.ancestors.length - 1];
      d && (c.place = d.position);
    }
    const h = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = h ? h.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = h ? h.line : void 0, this.name = vl(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = u && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Te.prototype.file = "";
Te.prototype.name = "";
Te.prototype.reason = "";
Te.prototype.message = "";
Te.prototype.stack = "";
Te.prototype.column = void 0;
Te.prototype.line = void 0;
Te.prototype.ancestors = void 0;
Te.prototype.cause = void 0;
Te.prototype.fatal = void 0;
Te.prototype.place = void 0;
Te.prototype.ruleId = void 0;
Te.prototype.source = void 0;
const td = {}.hasOwnProperty, eD = /* @__PURE__ */ new Map(), nD = /[A-Z]/g, iD = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rD = /* @__PURE__ */ new Set(["td", "th"]), k1 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function aD(t, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = i.filePath || void 0;
  let a;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    a = dD(r, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    a = hD(r, i.jsx, i.jsxs);
  }
  const s = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: a,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Jh : GA,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = E1(s, t, void 0);
  return c && typeof c != "string" ? c : s.create(
    t,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function E1(t, i, r) {
  if (i.type === "element")
    return lD(t, i, r);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return oD(t, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return uD(t, i, r);
  if (i.type === "mdxjsEsm")
    return sD(t, i);
  if (i.type === "root")
    return cD(t, i, r);
  if (i.type === "text")
    return fD(t, i);
}
function lD(t, i, r) {
  const a = t.schema;
  let s = a;
  i.tagName.toLowerCase() === "svg" && a.space === "html" && (s = Jh, t.schema = s), t.ancestors.push(i);
  const c = D1(t, i.tagName, !1), u = pD(t, i);
  let h = nd(t, i);
  return iD.has(i.tagName) && (h = h.filter(function(d) {
    return typeof d == "string" ? !BA(d) : !0;
  })), A1(t, u, c, i), ed(u, h), t.ancestors.pop(), t.schema = a, t.create(i, c, u, r);
}
function oD(t, i) {
  if (i.data && i.data.estree && t.evaluater) {
    const a = i.data.estree.body[0];
    return a.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(a.expression);
  }
  zl(t, i.position);
}
function sD(t, i) {
  if (i.data && i.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(i.data.estree)
    );
  zl(t, i.position);
}
function uD(t, i, r) {
  const a = t.schema;
  let s = a;
  i.name === "svg" && a.space === "html" && (s = Jh, t.schema = s), t.ancestors.push(i);
  const c = i.name === null ? t.Fragment : D1(t, i.name, !0), u = mD(t, i), h = nd(t, i);
  return A1(t, u, c, i), ed(u, h), t.ancestors.pop(), t.schema = a, t.create(i, c, u, r);
}
function cD(t, i, r) {
  const a = {};
  return ed(a, nd(t, i)), t.create(i, t.Fragment, a, r);
}
function fD(t, i) {
  return i.value;
}
function A1(t, i, r, a) {
  typeof r != "string" && r !== t.Fragment && t.passNode && (i.node = a);
}
function ed(t, i) {
  if (i.length > 0) {
    const r = i.length > 1 ? i : i[0];
    r && (t.children = r);
  }
}
function hD(t, i, r) {
  return a;
  function a(s, c, u, h) {
    const p = Array.isArray(u.children) ? r : i;
    return h ? p(c, u, h) : p(c, u);
  }
}
function dD(t, i) {
  return r;
  function r(a, s, c, u) {
    const h = Array.isArray(c.children), d = $h(a);
    return i(
      s,
      c,
      u,
      h,
      {
        columnNumber: d ? d.column - 1 : void 0,
        fileName: t,
        lineNumber: d ? d.line : void 0
      },
      void 0
    );
  }
}
function pD(t, i) {
  const r = {};
  let a, s;
  for (s in i.properties)
    if (s !== "children" && td.call(i.properties, s)) {
      const c = gD(t, s, i.properties[s]);
      if (c) {
        const [u, h] = c;
        t.tableCellAlignToStyle && u === "align" && typeof h == "string" && rD.has(i.tagName) ? a = h : r[u] = h;
      }
    }
  if (a) {
    const c = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    c[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = a;
  }
  return r;
}
function mD(t, i) {
  const r = {};
  for (const a of i.attributes)
    if (a.type === "mdxJsxExpressionAttribute")
      if (a.data && a.data.estree && t.evaluater) {
        const c = a.data.estree.body[0];
        c.type;
        const u = c.expression;
        u.type;
        const h = u.properties[0];
        h.type, Object.assign(
          r,
          t.evaluater.evaluateExpression(h.argument)
        );
      } else
        zl(t, i.position);
    else {
      const s = a.name;
      let c;
      if (a.value && typeof a.value == "object")
        if (a.value.data && a.value.data.estree && t.evaluater) {
          const h = a.value.data.estree.body[0];
          h.type, c = t.evaluater.evaluateExpression(h.expression);
        } else
          zl(t, i.position);
      else
        c = a.value === null ? !0 : a.value;
      r[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return r;
}
function nd(t, i) {
  const r = [];
  let a = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : eD;
  for (; ++a < i.children.length; ) {
    const c = i.children[a];
    let u;
    if (t.passKeys) {
      const d = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (d) {
        const p = s.get(d) || 0;
        u = d + "-" + p, s.set(d, p + 1);
      }
    }
    const h = E1(t, c, u);
    h !== void 0 && r.push(h);
  }
  return r;
}
function gD(t, i, r) {
  const a = YA(t.schema, i);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = a.commaSeparated ? RA(r) : IA(r)), a.property === "style") {
      let s = typeof r == "object" ? r : yD(t, String(r));
      return t.stylePropertyNameCase === "css" && (s = vD(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && a.space ? HA[a.property] || a.property : a.attribute,
      r
    ];
  }
}
function yD(t, i) {
  try {
    return $A(i, { reactCompat: !0 });
  } catch (r) {
    if (t.ignoreInvalidStyle)
      return {};
    const a = (
      /** @type {Error} */
      r
    ), s = new Te("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: a,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = k1 + "#cannot-parse-style-attribute", s;
  }
}
function D1(t, i, r) {
  let a;
  if (!r)
    a = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, u;
    for (; ++c < s.length; ) {
      const h = A0(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
      u = u ? {
        type: "MemberExpression",
        object: u,
        property: h,
        computed: !!(c && h.type === "Literal"),
        optional: !1
      } : h;
    }
    a = u;
  } else
    a = A0(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (a.type === "Literal") {
    const s = (
      /** @type {string | number} */
      a.value
    );
    return td.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(a);
  zl(t);
}
function zl(t, i) {
  const r = new Te(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = t.filePath || void 0, r.url = k1 + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function vD(t) {
  const i = {};
  let r;
  for (r in t)
    td.call(t, r) && (i[bD(r)] = t[r]);
  return i;
}
function bD(t) {
  let i = t.replace(nD, wD);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function wD(t) {
  return "-" + t.toLowerCase();
}
const vf = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, xD = {};
function id(t, i) {
  const r = xD, a = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, s = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return C1(t, a, s);
}
function C1(t, i, r) {
  if (SD(t)) {
    if ("value" in t)
      return t.type === "html" && !r ? "" : t.value;
    if (i && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return B0(t.children, i, r);
  }
  return Array.isArray(t) ? B0(t, i, r) : "";
}
function B0(t, i, r) {
  const a = [];
  let s = -1;
  for (; ++s < t.length; )
    a[s] = C1(t[s], i, r);
  return a.join("");
}
function SD(t) {
  return !!(t && typeof t == "object");
}
const V0 = document.createElement("i");
function rd(t) {
  const i = "&" + t + ";";
  V0.innerHTML = i;
  const r = V0.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && t !== "semi" || r === i ? !1 : r
  );
}
function Qe(t, i, r, a) {
  const s = t.length;
  let c = 0, u;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, r = r > 0 ? r : 0, a.length < 1e4)
    u = Array.from(a), u.unshift(i, r), t.splice(...u);
  else
    for (r && t.splice(i, r); c < a.length; )
      u = a.slice(c, c + 1e4), u.unshift(i, 0), t.splice(...u), c += 1e4, i += 1e4;
}
function sn(t, i) {
  return t.length > 0 ? (Qe(t, t.length, 0, i), t) : i;
}
const U0 = {}.hasOwnProperty;
function z1(t) {
  const i = {};
  let r = -1;
  for (; ++r < t.length; )
    TD(i, t[r]);
  return i;
}
function TD(t, i) {
  let r;
  for (r in i) {
    const s = (U0.call(t, r) ? t[r] : void 0) || (t[r] = {}), c = i[r];
    let u;
    if (c)
      for (u in c) {
        U0.call(s, u) || (s[u] = []);
        const h = c[u];
        kD(
          // @ts-expect-error Looks like a list.
          s[u],
          Array.isArray(h) ? h : h ? [h] : []
        );
      }
  }
}
function kD(t, i) {
  let r = -1;
  const a = [];
  for (; ++r < i.length; )
    (i[r].add === "after" ? t : a).push(i[r]);
  Qe(t, 0, 0, a);
}
function M1(t, i) {
  const r = Number.parseInt(t, i);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function mn(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ae = Ai(/[A-Za-z]/), Se = Ai(/[\dA-Za-z]/), ED = Ai(/[#-'*+\--9=?A-Z^-~]/);
function Ss(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const ch = Ai(/\d/), AD = Ai(/[\dA-Fa-f]/), DD = Ai(/[!-/:-@[-`{-~]/);
function dt(t) {
  return t !== null && t < -2;
}
function Ht(t) {
  return t !== null && (t < 0 || t === 32);
}
function Dt(t) {
  return t === -2 || t === -1 || t === 32;
}
const Os = Ai(new RegExp("\\p{P}|\\p{S}", "u")), Zi = Ai(/\s/);
function Ai(t) {
  return i;
  function i(r) {
    return r !== null && r > -1 && t.test(String.fromCharCode(r));
  }
}
function ea(t) {
  const i = [];
  let r = -1, a = 0, s = 0;
  for (; ++r < t.length; ) {
    const c = t.charCodeAt(r);
    let u = "";
    if (c === 37 && Se(t.charCodeAt(r + 1)) && Se(t.charCodeAt(r + 2)))
      s = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (u = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const h = t.charCodeAt(r + 1);
      c < 56320 && h > 56319 && h < 57344 ? (u = String.fromCharCode(c, h), s = 1) : u = "�";
    } else
      u = String.fromCharCode(c);
    u && (i.push(t.slice(a, r), encodeURIComponent(u)), a = r + s + 1, u = ""), s && (r += s, s = 0);
  }
  return i.join("") + t.slice(a);
}
function zt(t, i, r, a) {
  const s = a ? a - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return u;
  function u(d) {
    return Dt(d) ? (t.enter(r), h(d)) : i(d);
  }
  function h(d) {
    return Dt(d) && c++ < s ? (t.consume(d), h) : (t.exit(r), i(d));
  }
}
const CD = {
  tokenize: zD
};
function zD(t) {
  const i = t.attempt(this.parser.constructs.contentInitial, a, s);
  let r;
  return i;
  function a(h) {
    if (h === null) {
      t.consume(h);
      return;
    }
    return t.enter("lineEnding"), t.consume(h), t.exit("lineEnding"), zt(t, i, "linePrefix");
  }
  function s(h) {
    return t.enter("paragraph"), c(h);
  }
  function c(h) {
    const d = t.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = d), r = d, u(h);
  }
  function u(h) {
    if (h === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(h);
      return;
    }
    return dt(h) ? (t.consume(h), t.exit("chunkText"), c) : (t.consume(h), u);
  }
}
const MD = {
  tokenize: RD
}, j0 = {
  tokenize: OD
};
function RD(t) {
  const i = this, r = [];
  let a = 0, s, c, u;
  return h;
  function h(D) {
    if (a < r.length) {
      const V = r[a];
      return i.containerState = V[1], t.attempt(V[0].continuation, d, p)(D);
    }
    return p(D);
  }
  function d(D) {
    if (a++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && C();
      const V = i.events.length;
      let _ = V, O;
      for (; _--; )
        if (i.events[_][0] === "exit" && i.events[_][1].type === "chunkFlow") {
          O = i.events[_][1].end;
          break;
        }
      k(a);
      let z = V;
      for (; z < i.events.length; )
        i.events[z][1].end = {
          ...O
        }, z++;
      return Qe(i.events, _ + 1, 0, i.events.slice(V)), i.events.length = z, p(D);
    }
    return h(D);
  }
  function p(D) {
    if (a === r.length) {
      if (!s)
        return b(D);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return S(D);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, t.check(j0, g, y)(D);
  }
  function g(D) {
    return s && C(), k(a), b(D);
  }
  function y(D) {
    return i.parser.lazy[i.now().line] = a !== r.length, u = i.now().offset, S(D);
  }
  function b(D) {
    return i.containerState = {}, t.attempt(j0, v, S)(D);
  }
  function v(D) {
    return a++, r.push([i.currentConstruct, i.containerState]), b(D);
  }
  function S(D) {
    if (D === null) {
      s && C(), k(0), t.consume(D);
      return;
    }
    return s = s || i.parser.flow(i.now()), t.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: c
    }), A(D);
  }
  function A(D) {
    if (D === null) {
      M(t.exit("chunkFlow"), !0), k(0), t.consume(D);
      return;
    }
    return dt(D) ? (t.consume(D), M(t.exit("chunkFlow")), a = 0, i.interrupt = void 0, h) : (t.consume(D), A);
  }
  function M(D, V) {
    const _ = i.sliceStream(D);
    if (V && _.push(null), D.previous = c, c && (c.next = D), c = D, s.defineSkip(D.start), s.write(_), i.parser.lazy[D.start.line]) {
      let O = s.events.length;
      for (; O--; )
        if (
          // The token starts before the line ending…
          s.events[O][1].start.offset < u && // …and either is not ended yet…
          (!s.events[O][1].end || // …or ends after it.
          s.events[O][1].end.offset > u)
        )
          return;
      const z = i.events.length;
      let N = z, F, L;
      for (; N--; )
        if (i.events[N][0] === "exit" && i.events[N][1].type === "chunkFlow") {
          if (F) {
            L = i.events[N][1].end;
            break;
          }
          F = !0;
        }
      for (k(a), O = z; O < i.events.length; )
        i.events[O][1].end = {
          ...L
        }, O++;
      Qe(i.events, N + 1, 0, i.events.slice(z)), i.events.length = O;
    }
  }
  function k(D) {
    let V = r.length;
    for (; V-- > D; ) {
      const _ = r[V];
      i.containerState = _[1], _[0].exit.call(i, t);
    }
    r.length = D;
  }
  function C() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function OD(t, i, r) {
  return zt(t, t.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Zr(t) {
  if (t === null || Ht(t) || Zi(t))
    return 1;
  if (Os(t))
    return 2;
}
function _s(t, i, r) {
  const a = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const c = t[s].resolveAll;
    c && !a.includes(c) && (i = c(i, r), a.push(c));
  }
  return i;
}
const fh = {
  name: "attention",
  resolveAll: _D,
  tokenize: ND
};
function _D(t, i) {
  let r = -1, a, s, c, u, h, d, p, g;
  for (; ++r < t.length; )
    if (t[r][0] === "enter" && t[r][1].type === "attentionSequence" && t[r][1]._close) {
      for (a = r; a--; )
        if (t[a][0] === "exit" && t[a][1].type === "attentionSequence" && t[a][1]._open && // If the markers are the same:
        i.sliceSerialize(t[a][1]).charCodeAt(0) === i.sliceSerialize(t[r][1]).charCodeAt(0)) {
          if ((t[a][1]._close || t[r][1]._open) && (t[r][1].end.offset - t[r][1].start.offset) % 3 && !((t[a][1].end.offset - t[a][1].start.offset + t[r][1].end.offset - t[r][1].start.offset) % 3))
            continue;
          d = t[a][1].end.offset - t[a][1].start.offset > 1 && t[r][1].end.offset - t[r][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...t[a][1].end
          }, b = {
            ...t[r][1].start
          };
          H0(y, -d), H0(b, d), u = {
            type: d > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...t[a][1].end
            }
          }, h = {
            type: d > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[r][1].start
            },
            end: b
          }, c = {
            type: d > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[a][1].end
            },
            end: {
              ...t[r][1].start
            }
          }, s = {
            type: d > 1 ? "strong" : "emphasis",
            start: {
              ...u.start
            },
            end: {
              ...h.end
            }
          }, t[a][1].end = {
            ...u.start
          }, t[r][1].start = {
            ...h.end
          }, p = [], t[a][1].end.offset - t[a][1].start.offset && (p = sn(p, [["enter", t[a][1], i], ["exit", t[a][1], i]])), p = sn(p, [["enter", s, i], ["enter", u, i], ["exit", u, i], ["enter", c, i]]), p = sn(p, _s(i.parser.constructs.insideSpan.null, t.slice(a + 1, r), i)), p = sn(p, [["exit", c, i], ["enter", h, i], ["exit", h, i], ["exit", s, i]]), t[r][1].end.offset - t[r][1].start.offset ? (g = 2, p = sn(p, [["enter", t[r][1], i], ["exit", t[r][1], i]])) : g = 0, Qe(t, a - 1, r - a + 3, p), r = a + p.length - g - 2;
          break;
        }
    }
  for (r = -1; ++r < t.length; )
    t[r][1].type === "attentionSequence" && (t[r][1].type = "data");
  return t;
}
function ND(t, i) {
  const r = this.parser.constructs.attentionMarkers.null, a = this.previous, s = Zr(a);
  let c;
  return u;
  function u(d) {
    return c = d, t.enter("attentionSequence"), h(d);
  }
  function h(d) {
    if (d === c)
      return t.consume(d), h;
    const p = t.exit("attentionSequence"), g = Zr(d), y = !g || g === 2 && s || r.includes(d), b = !s || s === 2 && g || r.includes(a);
    return p._open = !!(c === 42 ? y : y && (s || !b)), p._close = !!(c === 42 ? b : b && (g || !y)), i(d);
  }
}
function H0(t, i) {
  t.column += i, t.offset += i, t._bufferIndex += i;
}
const LD = {
  name: "autolink",
  tokenize: BD
};
function BD(t, i, r) {
  let a = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(v) {
    return Ae(v) ? (t.consume(v), u) : v === 64 ? r(v) : p(v);
  }
  function u(v) {
    return v === 43 || v === 45 || v === 46 || Se(v) ? (a = 1, h(v)) : p(v);
  }
  function h(v) {
    return v === 58 ? (t.consume(v), a = 0, d) : (v === 43 || v === 45 || v === 46 || Se(v)) && a++ < 32 ? (t.consume(v), h) : (a = 0, p(v));
  }
  function d(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : v === null || v === 32 || v === 60 || Ss(v) ? r(v) : (t.consume(v), d);
  }
  function p(v) {
    return v === 64 ? (t.consume(v), g) : ED(v) ? (t.consume(v), p) : r(v);
  }
  function g(v) {
    return Se(v) ? y(v) : r(v);
  }
  function y(v) {
    return v === 46 ? (t.consume(v), a = 0, g) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : b(v);
  }
  function b(v) {
    if ((v === 45 || Se(v)) && a++ < 63) {
      const S = v === 45 ? b : y;
      return t.consume(v), S;
    }
    return r(v);
  }
}
const Vl = {
  partial: !0,
  tokenize: VD
};
function VD(t, i, r) {
  return a;
  function a(c) {
    return Dt(c) ? zt(t, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || dt(c) ? i(c) : r(c);
  }
}
const R1 = {
  continuation: {
    tokenize: jD
  },
  exit: HD,
  name: "blockQuote",
  tokenize: UD
};
function UD(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    if (u === 62) {
      const h = a.containerState;
      return h.open || (t.enter("blockQuote", {
        _container: !0
      }), h.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(u), t.exit("blockQuoteMarker"), c;
    }
    return r(u);
  }
  function c(u) {
    return Dt(u) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(u), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), i) : (t.exit("blockQuotePrefix"), i(u));
  }
}
function jD(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return Dt(u) ? zt(t, c, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u) : c(u);
  }
  function c(u) {
    return t.attempt(R1, i, r)(u);
  }
}
function HD(t) {
  t.exit("blockQuote");
}
const O1 = {
  name: "characterEscape",
  tokenize: PD
};
function PD(t, i, r) {
  return a;
  function a(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), s;
  }
  function s(c) {
    return DD(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), i) : r(c);
  }
}
const _1 = {
  name: "characterReference",
  tokenize: qD
};
function qD(t, i, r) {
  const a = this;
  let s = 0, c, u;
  return h;
  function h(y) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), d;
  }
  function d(y) {
    return y === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(y), t.exit("characterReferenceMarkerNumeric"), p) : (t.enter("characterReferenceValue"), c = 31, u = Se, g(y));
  }
  function p(y) {
    return y === 88 || y === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(y), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, u = AD, g) : (t.enter("characterReferenceValue"), c = 7, u = ch, g(y));
  }
  function g(y) {
    if (y === 59 && s) {
      const b = t.exit("characterReferenceValue");
      return u === Se && !rd(a.sliceSerialize(b)) ? r(y) : (t.enter("characterReferenceMarker"), t.consume(y), t.exit("characterReferenceMarker"), t.exit("characterReference"), i);
    }
    return u(y) && s++ < c ? (t.consume(y), g) : r(y);
  }
}
const P0 = {
  partial: !0,
  tokenize: FD
}, q0 = {
  concrete: !0,
  name: "codeFenced",
  tokenize: YD
};
function YD(t, i, r) {
  const a = this, s = {
    partial: !0,
    tokenize: _
  };
  let c = 0, u = 0, h;
  return d;
  function d(O) {
    return p(O);
  }
  function p(O) {
    const z = a.events[a.events.length - 1];
    return c = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, h = O, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), g(O);
  }
  function g(O) {
    return O === h ? (u++, t.consume(O), g) : u < 3 ? r(O) : (t.exit("codeFencedFenceSequence"), Dt(O) ? zt(t, y, "whitespace")(O) : y(O));
  }
  function y(O) {
    return O === null || dt(O) ? (t.exit("codeFencedFence"), a.interrupt ? i(O) : t.check(P0, A, V)(O)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), b(O));
  }
  function b(O) {
    return O === null || dt(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), y(O)) : Dt(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), zt(t, v, "whitespace")(O)) : O === 96 && O === h ? r(O) : (t.consume(O), b);
  }
  function v(O) {
    return O === null || dt(O) ? y(O) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(O));
  }
  function S(O) {
    return O === null || dt(O) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), y(O)) : O === 96 && O === h ? r(O) : (t.consume(O), S);
  }
  function A(O) {
    return t.attempt(s, V, M)(O);
  }
  function M(O) {
    return t.enter("lineEnding"), t.consume(O), t.exit("lineEnding"), k;
  }
  function k(O) {
    return c > 0 && Dt(O) ? zt(t, C, "linePrefix", c + 1)(O) : C(O);
  }
  function C(O) {
    return O === null || dt(O) ? t.check(P0, A, V)(O) : (t.enter("codeFlowValue"), D(O));
  }
  function D(O) {
    return O === null || dt(O) ? (t.exit("codeFlowValue"), C(O)) : (t.consume(O), D);
  }
  function V(O) {
    return t.exit("codeFenced"), i(O);
  }
  function _(O, z, N) {
    let F = 0;
    return L;
    function L(lt) {
      return O.enter("lineEnding"), O.consume(lt), O.exit("lineEnding"), J;
    }
    function J(lt) {
      return O.enter("codeFencedFence"), Dt(lt) ? zt(O, Z, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(lt) : Z(lt);
    }
    function Z(lt) {
      return lt === h ? (O.enter("codeFencedFenceSequence"), nt(lt)) : N(lt);
    }
    function nt(lt) {
      return lt === h ? (F++, O.consume(lt), nt) : F >= u ? (O.exit("codeFencedFenceSequence"), Dt(lt) ? zt(O, it, "whitespace")(lt) : it(lt)) : N(lt);
    }
    function it(lt) {
      return lt === null || dt(lt) ? (O.exit("codeFencedFence"), z(lt)) : N(lt);
    }
  }
}
function FD(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return u === null ? r(u) : (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), c);
  }
  function c(u) {
    return a.parser.lazy[a.now().line] ? r(u) : i(u);
  }
}
const bf = {
  name: "codeIndented",
  tokenize: GD
}, XD = {
  partial: !0,
  tokenize: ID
};
function GD(t, i, r) {
  const a = this;
  return s;
  function s(p) {
    return t.enter("codeIndented"), zt(t, c, "linePrefix", 5)(p);
  }
  function c(p) {
    const g = a.events[a.events.length - 1];
    return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], !0).length >= 4 ? u(p) : r(p);
  }
  function u(p) {
    return p === null ? d(p) : dt(p) ? t.attempt(XD, u, d)(p) : (t.enter("codeFlowValue"), h(p));
  }
  function h(p) {
    return p === null || dt(p) ? (t.exit("codeFlowValue"), u(p)) : (t.consume(p), h);
  }
  function d(p) {
    return t.exit("codeIndented"), i(p);
  }
}
function ID(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return a.parser.lazy[a.now().line] ? r(u) : dt(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), s) : zt(t, c, "linePrefix", 5)(u);
  }
  function c(u) {
    const h = a.events[a.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? i(u) : dt(u) ? s(u) : r(u);
  }
}
const QD = {
  name: "codeText",
  previous: ZD,
  resolve: KD,
  tokenize: WD
};
function KD(t) {
  let i = t.length - 4, r = 3, a, s;
  if ((t[r][1].type === "lineEnding" || t[r][1].type === "space") && (t[i][1].type === "lineEnding" || t[i][1].type === "space")) {
    for (a = r; ++a < i; )
      if (t[a][1].type === "codeTextData") {
        t[r][1].type = "codeTextPadding", t[i][1].type = "codeTextPadding", r += 2, i -= 2;
        break;
      }
  }
  for (a = r - 1, i++; ++a <= i; )
    s === void 0 ? a !== i && t[a][1].type !== "lineEnding" && (s = a) : (a === i || t[a][1].type === "lineEnding") && (t[s][1].type = "codeTextData", a !== s + 2 && (t[s][1].end = t[a - 1][1].end, t.splice(s + 2, a - s - 2), i -= a - s - 2, a = s + 2), s = void 0);
  return t;
}
function ZD(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function WD(t, i, r) {
  let a = 0, s, c;
  return u;
  function u(y) {
    return t.enter("codeText"), t.enter("codeTextSequence"), h(y);
  }
  function h(y) {
    return y === 96 ? (t.consume(y), a++, h) : (t.exit("codeTextSequence"), d(y));
  }
  function d(y) {
    return y === null ? r(y) : y === 32 ? (t.enter("space"), t.consume(y), t.exit("space"), d) : y === 96 ? (c = t.enter("codeTextSequence"), s = 0, g(y)) : dt(y) ? (t.enter("lineEnding"), t.consume(y), t.exit("lineEnding"), d) : (t.enter("codeTextData"), p(y));
  }
  function p(y) {
    return y === null || y === 32 || y === 96 || dt(y) ? (t.exit("codeTextData"), d(y)) : (t.consume(y), p);
  }
  function g(y) {
    return y === 96 ? (t.consume(y), s++, g) : s === a ? (t.exit("codeTextSequence"), t.exit("codeText"), i(y)) : (c.type = "codeTextData", p(y));
  }
}
class JD {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(i) {
    this.left = i ? [...i] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + i + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return i < this.left.length ? this.left[i] : this.right[this.right.length - i + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(i, r) {
    const a = r ?? Number.POSITIVE_INFINITY;
    return a < this.left.length ? this.left.slice(i, a) : i > this.left.length ? this.right.slice(this.right.length - a + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - a + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(i, r, a) {
    const s = r || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return a && ll(this.left, a), c.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(i) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(i) {
    this.setCursor(Number.POSITIVE_INFINITY), ll(this.left, i);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(i) {
    this.setCursor(0), this.right.push(i);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(i) {
    this.setCursor(0), ll(this.right, i.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(i) {
    if (!(i === this.left.length || i > this.left.length && this.right.length === 0 || i < 0 && this.left.length === 0))
      if (i < this.left.length) {
        const r = this.left.splice(i, Number.POSITIVE_INFINITY);
        ll(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        ll(this.left, r.reverse());
      }
  }
}
function ll(t, i) {
  let r = 0;
  if (i.length < 1e4)
    t.push(...i);
  else
    for (; r < i.length; )
      t.push(...i.slice(r, r + 1e4)), r += 1e4;
}
function N1(t) {
  const i = {};
  let r = -1, a, s, c, u, h, d, p;
  const g = new JD(t);
  for (; ++r < g.length; ) {
    for (; r in i; )
      r = i[r];
    if (a = g.get(r), r && a[1].type === "chunkFlow" && g.get(r - 1)[1].type === "listItemPrefix" && (d = a[1]._tokenizer.events, c = 0, c < d.length && d[c][1].type === "lineEndingBlank" && (c += 2), c < d.length && d[c][1].type === "content"))
      for (; ++c < d.length && d[c][1].type !== "content"; )
        d[c][1].type === "chunkText" && (d[c][1]._isInFirstContentOfListItem = !0, c++);
    if (a[0] === "enter")
      a[1].contentType && (Object.assign(i, $D(g, r)), r = i[r], p = !0);
    else if (a[1]._container) {
      for (c = r, s = void 0; c--; )
        if (u = g.get(c), u[1].type === "lineEnding" || u[1].type === "lineEndingBlank")
          u[0] === "enter" && (s && (g.get(s)[1].type = "lineEndingBlank"), u[1].type = "lineEnding", s = c);
        else if (!(u[1].type === "linePrefix" || u[1].type === "listItemIndent")) break;
      s && (a[1].end = {
        ...g.get(s)[1].start
      }, h = g.slice(s, r), h.unshift(a), g.splice(s, r - s + 1, h));
    }
  }
  return Qe(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !p;
}
function $D(t, i) {
  const r = t.get(i)[1], a = t.get(i)[2];
  let s = i - 1;
  const c = [];
  let u = r._tokenizer;
  u || (u = a.parser[r.contentType](r.start), r._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
  const h = u.events, d = [], p = {};
  let g, y, b = -1, v = r, S = 0, A = 0;
  const M = [A];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    c.push(s), v._tokenizer || (g = a.sliceStream(v), v.next || g.push(null), y && u.defineSkip(v.start), v._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(g), v._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), y = v, v = v.next;
  }
  for (v = r; ++b < h.length; )
    // Find a void token that includes a break.
    h[b][0] === "exit" && h[b - 1][0] === "enter" && h[b][1].type === h[b - 1][1].type && h[b][1].start.line !== h[b][1].end.line && (A = b + 1, M.push(A), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (u.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : M.pop(), b = M.length; b--; ) {
    const k = h.slice(M[b], M[b + 1]), C = c.pop();
    d.push([C, C + k.length - 1]), t.splice(C, 2, k);
  }
  for (d.reverse(), b = -1; ++b < d.length; )
    p[S + d[b][0]] = S + d[b][1], S += d[b][1] - d[b][0] - 1;
  return p;
}
const tC = {
  resolve: nC,
  tokenize: iC
}, eC = {
  partial: !0,
  tokenize: rC
};
function nC(t) {
  return N1(t), t;
}
function iC(t, i) {
  let r;
  return a;
  function a(h) {
    return t.enter("content"), r = t.enter("chunkContent", {
      contentType: "content"
    }), s(h);
  }
  function s(h) {
    return h === null ? c(h) : dt(h) ? t.check(eC, u, c)(h) : (t.consume(h), s);
  }
  function c(h) {
    return t.exit("chunkContent"), t.exit("content"), i(h);
  }
  function u(h) {
    return t.consume(h), t.exit("chunkContent"), r.next = t.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, s;
  }
}
function rC(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), zt(t, c, "linePrefix");
  }
  function c(u) {
    if (u === null || dt(u))
      return r(u);
    const h = a.events[a.events.length - 1];
    return !a.parser.constructs.disable.null.includes("codeIndented") && h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? i(u) : t.interrupt(a.parser.constructs.flow, r, i)(u);
  }
}
function L1(t, i, r, a, s, c, u, h, d) {
  const p = d || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(k) {
    return k === 60 ? (t.enter(a), t.enter(s), t.enter(c), t.consume(k), t.exit(c), b) : k === null || k === 32 || k === 41 || Ss(k) ? r(k) : (t.enter(a), t.enter(u), t.enter(h), t.enter("chunkString", {
      contentType: "string"
    }), A(k));
  }
  function b(k) {
    return k === 62 ? (t.enter(c), t.consume(k), t.exit(c), t.exit(s), t.exit(a), i) : (t.enter(h), t.enter("chunkString", {
      contentType: "string"
    }), v(k));
  }
  function v(k) {
    return k === 62 ? (t.exit("chunkString"), t.exit(h), b(k)) : k === null || k === 60 || dt(k) ? r(k) : (t.consume(k), k === 92 ? S : v);
  }
  function S(k) {
    return k === 60 || k === 62 || k === 92 ? (t.consume(k), v) : v(k);
  }
  function A(k) {
    return !g && (k === null || k === 41 || Ht(k)) ? (t.exit("chunkString"), t.exit(h), t.exit(u), t.exit(a), i(k)) : g < p && k === 40 ? (t.consume(k), g++, A) : k === 41 ? (t.consume(k), g--, A) : k === null || k === 32 || k === 40 || Ss(k) ? r(k) : (t.consume(k), k === 92 ? M : A);
  }
  function M(k) {
    return k === 40 || k === 41 || k === 92 ? (t.consume(k), A) : A(k);
  }
}
function B1(t, i, r, a, s, c) {
  const u = this;
  let h = 0, d;
  return p;
  function p(v) {
    return t.enter(a), t.enter(s), t.consume(v), t.exit(s), t.enter(c), g;
  }
  function g(v) {
    return h > 999 || v === null || v === 91 || v === 93 && !d || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !h && "_hiddenFootnoteSupport" in u.parser.constructs ? r(v) : v === 93 ? (t.exit(c), t.enter(s), t.consume(v), t.exit(s), t.exit(a), i) : dt(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), g) : (t.enter("chunkString", {
      contentType: "string"
    }), y(v));
  }
  function y(v) {
    return v === null || v === 91 || v === 93 || dt(v) || h++ > 999 ? (t.exit("chunkString"), g(v)) : (t.consume(v), d || (d = !Dt(v)), v === 92 ? b : y);
  }
  function b(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), h++, y) : y(v);
  }
}
function V1(t, i, r, a, s, c) {
  let u;
  return h;
  function h(b) {
    return b === 34 || b === 39 || b === 40 ? (t.enter(a), t.enter(s), t.consume(b), t.exit(s), u = b === 40 ? 41 : b, d) : r(b);
  }
  function d(b) {
    return b === u ? (t.enter(s), t.consume(b), t.exit(s), t.exit(a), i) : (t.enter(c), p(b));
  }
  function p(b) {
    return b === u ? (t.exit(c), d(u)) : b === null ? r(b) : dt(b) ? (t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), zt(t, p, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === u || b === null || dt(b) ? (t.exit("chunkString"), p(b)) : (t.consume(b), b === 92 ? y : g);
  }
  function y(b) {
    return b === u || b === 92 ? (t.consume(b), g) : g(b);
  }
}
function bl(t, i) {
  let r;
  return a;
  function a(s) {
    return dt(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), r = !0, a) : Dt(s) ? zt(t, a, r ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const aC = {
  name: "definition",
  tokenize: oC
}, lC = {
  partial: !0,
  tokenize: sC
};
function oC(t, i, r) {
  const a = this;
  let s;
  return c;
  function c(v) {
    return t.enter("definition"), u(v);
  }
  function u(v) {
    return B1.call(
      a,
      t,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function h(v) {
    return s = mn(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)), v === 58 ? (t.enter("definitionMarker"), t.consume(v), t.exit("definitionMarker"), d) : r(v);
  }
  function d(v) {
    return Ht(v) ? bl(t, p)(v) : p(v);
  }
  function p(v) {
    return L1(
      t,
      g,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function g(v) {
    return t.attempt(lC, y, y)(v);
  }
  function y(v) {
    return Dt(v) ? zt(t, b, "whitespace")(v) : b(v);
  }
  function b(v) {
    return v === null || dt(v) ? (t.exit("definition"), a.parser.defined.push(s), i(v)) : r(v);
  }
}
function sC(t, i, r) {
  return a;
  function a(h) {
    return Ht(h) ? bl(t, s)(h) : r(h);
  }
  function s(h) {
    return V1(t, c, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(h);
  }
  function c(h) {
    return Dt(h) ? zt(t, u, "whitespace")(h) : u(h);
  }
  function u(h) {
    return h === null || dt(h) ? i(h) : r(h);
  }
}
const uC = {
  name: "hardBreakEscape",
  tokenize: cC
};
function cC(t, i, r) {
  return a;
  function a(c) {
    return t.enter("hardBreakEscape"), t.consume(c), s;
  }
  function s(c) {
    return dt(c) ? (t.exit("hardBreakEscape"), i(c)) : r(c);
  }
}
const fC = {
  name: "headingAtx",
  resolve: hC,
  tokenize: dC
};
function hC(t, i) {
  let r = t.length - 2, a = 3, s, c;
  return t[a][1].type === "whitespace" && (a += 2), r - 2 > a && t[r][1].type === "whitespace" && (r -= 2), t[r][1].type === "atxHeadingSequence" && (a === r - 1 || r - 4 > a && t[r - 2][1].type === "whitespace") && (r -= a + 1 === r ? 2 : 4), r > a && (s = {
    type: "atxHeadingText",
    start: t[a][1].start,
    end: t[r][1].end
  }, c = {
    type: "chunkText",
    start: t[a][1].start,
    end: t[r][1].end,
    contentType: "text"
  }, Qe(t, a, r - a + 1, [["enter", s, i], ["enter", c, i], ["exit", c, i], ["exit", s, i]])), t;
}
function dC(t, i, r) {
  let a = 0;
  return s;
  function s(g) {
    return t.enter("atxHeading"), c(g);
  }
  function c(g) {
    return t.enter("atxHeadingSequence"), u(g);
  }
  function u(g) {
    return g === 35 && a++ < 6 ? (t.consume(g), u) : g === null || Ht(g) ? (t.exit("atxHeadingSequence"), h(g)) : r(g);
  }
  function h(g) {
    return g === 35 ? (t.enter("atxHeadingSequence"), d(g)) : g === null || dt(g) ? (t.exit("atxHeading"), i(g)) : Dt(g) ? zt(t, h, "whitespace")(g) : (t.enter("atxHeadingText"), p(g));
  }
  function d(g) {
    return g === 35 ? (t.consume(g), d) : (t.exit("atxHeadingSequence"), h(g));
  }
  function p(g) {
    return g === null || g === 35 || Ht(g) ? (t.exit("atxHeadingText"), h(g)) : (t.consume(g), p);
  }
}
const pC = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Y0 = ["pre", "script", "style", "textarea"], mC = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: vC,
  tokenize: bC
}, gC = {
  partial: !0,
  tokenize: xC
}, yC = {
  partial: !0,
  tokenize: wC
};
function vC(t) {
  let i = t.length;
  for (; i-- && !(t[i][0] === "enter" && t[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && t[i - 2][1].type === "linePrefix" && (t[i][1].start = t[i - 2][1].start, t[i + 1][1].start = t[i - 2][1].start, t.splice(i - 2, 2)), t;
}
function bC(t, i, r) {
  const a = this;
  let s, c, u, h, d;
  return p;
  function p(E) {
    return g(E);
  }
  function g(E) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(E), y;
  }
  function y(E) {
    return E === 33 ? (t.consume(E), b) : E === 47 ? (t.consume(E), c = !0, A) : E === 63 ? (t.consume(E), s = 3, a.interrupt ? i : x) : Ae(E) ? (t.consume(E), u = String.fromCharCode(E), M) : r(E);
  }
  function b(E) {
    return E === 45 ? (t.consume(E), s = 2, v) : E === 91 ? (t.consume(E), s = 5, h = 0, S) : Ae(E) ? (t.consume(E), s = 4, a.interrupt ? i : x) : r(E);
  }
  function v(E) {
    return E === 45 ? (t.consume(E), a.interrupt ? i : x) : r(E);
  }
  function S(E) {
    const st = "CDATA[";
    return E === st.charCodeAt(h++) ? (t.consume(E), h === st.length ? a.interrupt ? i : Z : S) : r(E);
  }
  function A(E) {
    return Ae(E) ? (t.consume(E), u = String.fromCharCode(E), M) : r(E);
  }
  function M(E) {
    if (E === null || E === 47 || E === 62 || Ht(E)) {
      const st = E === 47, St = u.toLowerCase();
      return !st && !c && Y0.includes(St) ? (s = 1, a.interrupt ? i(E) : Z(E)) : pC.includes(u.toLowerCase()) ? (s = 6, st ? (t.consume(E), k) : a.interrupt ? i(E) : Z(E)) : (s = 7, a.interrupt && !a.parser.lazy[a.now().line] ? r(E) : c ? C(E) : D(E));
    }
    return E === 45 || Se(E) ? (t.consume(E), u += String.fromCharCode(E), M) : r(E);
  }
  function k(E) {
    return E === 62 ? (t.consume(E), a.interrupt ? i : Z) : r(E);
  }
  function C(E) {
    return Dt(E) ? (t.consume(E), C) : L(E);
  }
  function D(E) {
    return E === 47 ? (t.consume(E), L) : E === 58 || E === 95 || Ae(E) ? (t.consume(E), V) : Dt(E) ? (t.consume(E), D) : L(E);
  }
  function V(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Se(E) ? (t.consume(E), V) : _(E);
  }
  function _(E) {
    return E === 61 ? (t.consume(E), O) : Dt(E) ? (t.consume(E), _) : D(E);
  }
  function O(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? r(E) : E === 34 || E === 39 ? (t.consume(E), d = E, z) : Dt(E) ? (t.consume(E), O) : N(E);
  }
  function z(E) {
    return E === d ? (t.consume(E), d = null, F) : E === null || dt(E) ? r(E) : (t.consume(E), z);
  }
  function N(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Ht(E) ? _(E) : (t.consume(E), N);
  }
  function F(E) {
    return E === 47 || E === 62 || Dt(E) ? D(E) : r(E);
  }
  function L(E) {
    return E === 62 ? (t.consume(E), J) : r(E);
  }
  function J(E) {
    return E === null || dt(E) ? Z(E) : Dt(E) ? (t.consume(E), J) : r(E);
  }
  function Z(E) {
    return E === 45 && s === 2 ? (t.consume(E), P) : E === 60 && s === 1 ? (t.consume(E), K) : E === 62 && s === 4 ? (t.consume(E), Q) : E === 63 && s === 3 ? (t.consume(E), x) : E === 93 && s === 5 ? (t.consume(E), yt) : dt(E) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(gC, at, nt)(E)) : E === null || dt(E) ? (t.exit("htmlFlowData"), nt(E)) : (t.consume(E), Z);
  }
  function nt(E) {
    return t.check(yC, it, at)(E);
  }
  function it(E) {
    return t.enter("lineEnding"), t.consume(E), t.exit("lineEnding"), lt;
  }
  function lt(E) {
    return E === null || dt(E) ? nt(E) : (t.enter("htmlFlowData"), Z(E));
  }
  function P(E) {
    return E === 45 ? (t.consume(E), x) : Z(E);
  }
  function K(E) {
    return E === 47 ? (t.consume(E), u = "", rt) : Z(E);
  }
  function rt(E) {
    if (E === 62) {
      const st = u.toLowerCase();
      return Y0.includes(st) ? (t.consume(E), Q) : Z(E);
    }
    return Ae(E) && u.length < 8 ? (t.consume(E), u += String.fromCharCode(E), rt) : Z(E);
  }
  function yt(E) {
    return E === 93 ? (t.consume(E), x) : Z(E);
  }
  function x(E) {
    return E === 62 ? (t.consume(E), Q) : E === 45 && s === 2 ? (t.consume(E), x) : Z(E);
  }
  function Q(E) {
    return E === null || dt(E) ? (t.exit("htmlFlowData"), at(E)) : (t.consume(E), Q);
  }
  function at(E) {
    return t.exit("htmlFlow"), i(E);
  }
}
function wC(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return dt(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), c) : r(u);
  }
  function c(u) {
    return a.parser.lazy[a.now().line] ? r(u) : i(u);
  }
}
function xC(t, i, r) {
  return a;
  function a(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(Vl, i, r);
  }
}
const SC = {
  name: "htmlText",
  tokenize: TC
};
function TC(t, i, r) {
  const a = this;
  let s, c, u;
  return h;
  function h(x) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(x), d;
  }
  function d(x) {
    return x === 33 ? (t.consume(x), p) : x === 47 ? (t.consume(x), _) : x === 63 ? (t.consume(x), D) : Ae(x) ? (t.consume(x), N) : r(x);
  }
  function p(x) {
    return x === 45 ? (t.consume(x), g) : x === 91 ? (t.consume(x), c = 0, S) : Ae(x) ? (t.consume(x), C) : r(x);
  }
  function g(x) {
    return x === 45 ? (t.consume(x), v) : r(x);
  }
  function y(x) {
    return x === null ? r(x) : x === 45 ? (t.consume(x), b) : dt(x) ? (u = y, K(x)) : (t.consume(x), y);
  }
  function b(x) {
    return x === 45 ? (t.consume(x), v) : y(x);
  }
  function v(x) {
    return x === 62 ? P(x) : x === 45 ? b(x) : y(x);
  }
  function S(x) {
    const Q = "CDATA[";
    return x === Q.charCodeAt(c++) ? (t.consume(x), c === Q.length ? A : S) : r(x);
  }
  function A(x) {
    return x === null ? r(x) : x === 93 ? (t.consume(x), M) : dt(x) ? (u = A, K(x)) : (t.consume(x), A);
  }
  function M(x) {
    return x === 93 ? (t.consume(x), k) : A(x);
  }
  function k(x) {
    return x === 62 ? P(x) : x === 93 ? (t.consume(x), k) : A(x);
  }
  function C(x) {
    return x === null || x === 62 ? P(x) : dt(x) ? (u = C, K(x)) : (t.consume(x), C);
  }
  function D(x) {
    return x === null ? r(x) : x === 63 ? (t.consume(x), V) : dt(x) ? (u = D, K(x)) : (t.consume(x), D);
  }
  function V(x) {
    return x === 62 ? P(x) : D(x);
  }
  function _(x) {
    return Ae(x) ? (t.consume(x), O) : r(x);
  }
  function O(x) {
    return x === 45 || Se(x) ? (t.consume(x), O) : z(x);
  }
  function z(x) {
    return dt(x) ? (u = z, K(x)) : Dt(x) ? (t.consume(x), z) : P(x);
  }
  function N(x) {
    return x === 45 || Se(x) ? (t.consume(x), N) : x === 47 || x === 62 || Ht(x) ? F(x) : r(x);
  }
  function F(x) {
    return x === 47 ? (t.consume(x), P) : x === 58 || x === 95 || Ae(x) ? (t.consume(x), L) : dt(x) ? (u = F, K(x)) : Dt(x) ? (t.consume(x), F) : P(x);
  }
  function L(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Se(x) ? (t.consume(x), L) : J(x);
  }
  function J(x) {
    return x === 61 ? (t.consume(x), Z) : dt(x) ? (u = J, K(x)) : Dt(x) ? (t.consume(x), J) : F(x);
  }
  function Z(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? r(x) : x === 34 || x === 39 ? (t.consume(x), s = x, nt) : dt(x) ? (u = Z, K(x)) : Dt(x) ? (t.consume(x), Z) : (t.consume(x), it);
  }
  function nt(x) {
    return x === s ? (t.consume(x), s = void 0, lt) : x === null ? r(x) : dt(x) ? (u = nt, K(x)) : (t.consume(x), nt);
  }
  function it(x) {
    return x === null || x === 34 || x === 39 || x === 60 || x === 61 || x === 96 ? r(x) : x === 47 || x === 62 || Ht(x) ? F(x) : (t.consume(x), it);
  }
  function lt(x) {
    return x === 47 || x === 62 || Ht(x) ? F(x) : r(x);
  }
  function P(x) {
    return x === 62 ? (t.consume(x), t.exit("htmlTextData"), t.exit("htmlText"), i) : r(x);
  }
  function K(x) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), rt;
  }
  function rt(x) {
    return Dt(x) ? zt(t, yt, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : yt(x);
  }
  function yt(x) {
    return t.enter("htmlTextData"), u(x);
  }
}
const ad = {
  name: "labelEnd",
  resolveAll: DC,
  resolveTo: CC,
  tokenize: zC
}, kC = {
  tokenize: MC
}, EC = {
  tokenize: RC
}, AC = {
  tokenize: OC
};
function DC(t) {
  let i = -1;
  const r = [];
  for (; ++i < t.length; ) {
    const a = t[i][1];
    if (r.push(t[i]), a.type === "labelImage" || a.type === "labelLink" || a.type === "labelEnd") {
      const s = a.type === "labelImage" ? 4 : 2;
      a.type = "data", i += s;
    }
  }
  return t.length !== r.length && Qe(t, 0, t.length, r), t;
}
function CC(t, i) {
  let r = t.length, a = 0, s, c, u, h;
  for (; r--; )
    if (s = t[r][1], c) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      t[r][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (u) {
      if (t[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (c = r, s.type !== "labelLink")) {
        a = 2;
        break;
      }
    } else s.type === "labelEnd" && (u = r);
  const d = {
    type: t[c][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[c][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, p = {
    type: "label",
    start: {
      ...t[c][1].start
    },
    end: {
      ...t[u][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...t[c + a + 2][1].end
    },
    end: {
      ...t[u - 2][1].start
    }
  };
  return h = [["enter", d, i], ["enter", p, i]], h = sn(h, t.slice(c + 1, c + a + 3)), h = sn(h, [["enter", g, i]]), h = sn(h, _s(i.parser.constructs.insideSpan.null, t.slice(c + a + 4, u - 3), i)), h = sn(h, [["exit", g, i], t[u - 2], t[u - 1], ["exit", p, i]]), h = sn(h, t.slice(u + 1)), h = sn(h, [["exit", d, i]]), Qe(t, c, t.length, h), t;
}
function zC(t, i, r) {
  const a = this;
  let s = a.events.length, c, u;
  for (; s--; )
    if ((a.events[s][1].type === "labelImage" || a.events[s][1].type === "labelLink") && !a.events[s][1]._balanced) {
      c = a.events[s][1];
      break;
    }
  return h;
  function h(b) {
    return c ? c._inactive ? y(b) : (u = a.parser.defined.includes(mn(a.sliceSerialize({
      start: c.end,
      end: a.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(b), t.exit("labelMarker"), t.exit("labelEnd"), d) : r(b);
  }
  function d(b) {
    return b === 40 ? t.attempt(kC, g, u ? g : y)(b) : b === 91 ? t.attempt(EC, g, u ? p : y)(b) : u ? g(b) : y(b);
  }
  function p(b) {
    return t.attempt(AC, g, y)(b);
  }
  function g(b) {
    return i(b);
  }
  function y(b) {
    return c._balanced = !0, r(b);
  }
}
function MC(t, i, r) {
  return a;
  function a(y) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), s;
  }
  function s(y) {
    return Ht(y) ? bl(t, c)(y) : c(y);
  }
  function c(y) {
    return y === 41 ? g(y) : L1(t, u, h, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function u(y) {
    return Ht(y) ? bl(t, d)(y) : g(y);
  }
  function h(y) {
    return r(y);
  }
  function d(y) {
    return y === 34 || y === 39 || y === 40 ? V1(t, p, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
  }
  function p(y) {
    return Ht(y) ? bl(t, g)(y) : g(y);
  }
  function g(y) {
    return y === 41 ? (t.enter("resourceMarker"), t.consume(y), t.exit("resourceMarker"), t.exit("resource"), i) : r(y);
  }
}
function RC(t, i, r) {
  const a = this;
  return s;
  function s(h) {
    return B1.call(a, t, c, u, "reference", "referenceMarker", "referenceString")(h);
  }
  function c(h) {
    return a.parser.defined.includes(mn(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))) ? i(h) : r(h);
  }
  function u(h) {
    return r(h);
  }
}
function OC(t, i, r) {
  return a;
  function a(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), i) : r(c);
  }
}
const _C = {
  name: "labelStartImage",
  resolveAll: ad.resolveAll,
  tokenize: NC
};
function NC(t, i, r) {
  const a = this;
  return s;
  function s(h) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(h), t.exit("labelImageMarker"), c;
  }
  function c(h) {
    return h === 91 ? (t.enter("labelMarker"), t.consume(h), t.exit("labelMarker"), t.exit("labelImage"), u) : r(h);
  }
  function u(h) {
    return h === 94 && "_hiddenFootnoteSupport" in a.parser.constructs ? r(h) : i(h);
  }
}
const LC = {
  name: "labelStartLink",
  resolveAll: ad.resolveAll,
  tokenize: BC
};
function BC(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(u), t.exit("labelMarker"), t.exit("labelLink"), c;
  }
  function c(u) {
    return u === 94 && "_hiddenFootnoteSupport" in a.parser.constructs ? r(u) : i(u);
  }
}
const wf = {
  name: "lineEnding",
  tokenize: VC
};
function VC(t, i) {
  return r;
  function r(a) {
    return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), zt(t, i, "linePrefix");
  }
}
const gs = {
  name: "thematicBreak",
  tokenize: UC
};
function UC(t, i, r) {
  let a = 0, s;
  return c;
  function c(p) {
    return t.enter("thematicBreak"), u(p);
  }
  function u(p) {
    return s = p, h(p);
  }
  function h(p) {
    return p === s ? (t.enter("thematicBreakSequence"), d(p)) : a >= 3 && (p === null || dt(p)) ? (t.exit("thematicBreak"), i(p)) : r(p);
  }
  function d(p) {
    return p === s ? (t.consume(p), a++, d) : (t.exit("thematicBreakSequence"), Dt(p) ? zt(t, h, "whitespace")(p) : h(p));
  }
}
const Ne = {
  continuation: {
    tokenize: qC
  },
  exit: FC,
  name: "list",
  tokenize: PC
}, jC = {
  partial: !0,
  tokenize: XC
}, HC = {
  partial: !0,
  tokenize: YC
};
function PC(t, i, r) {
  const a = this, s = a.events[a.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, u = 0;
  return h;
  function h(v) {
    const S = a.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !a.containerState.marker || v === a.containerState.marker : ch(v)) {
      if (a.containerState.type || (a.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(gs, r, p)(v) : p(v);
      if (!a.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), d(v);
    }
    return r(v);
  }
  function d(v) {
    return ch(v) && ++u < 10 ? (t.consume(v), d) : (!a.interrupt || u < 2) && (a.containerState.marker ? v === a.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), p(v)) : r(v);
  }
  function p(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), a.containerState.marker = a.containerState.marker || v, t.check(
      Vl,
      // Can’t be empty when interrupting.
      a.interrupt ? r : g,
      t.attempt(jC, b, y)
    );
  }
  function g(v) {
    return a.containerState.initialBlankLine = !0, c++, b(v);
  }
  function y(v) {
    return Dt(v) ? (t.enter("listItemPrefixWhitespace"), t.consume(v), t.exit("listItemPrefixWhitespace"), b) : r(v);
  }
  function b(v) {
    return a.containerState.size = c + a.sliceSerialize(t.exit("listItemPrefix"), !0).length, i(v);
  }
}
function qC(t, i, r) {
  const a = this;
  return a.containerState._closeFlow = void 0, t.check(Vl, s, c);
  function s(h) {
    return a.containerState.furtherBlankLines = a.containerState.furtherBlankLines || a.containerState.initialBlankLine, zt(t, i, "listItemIndent", a.containerState.size + 1)(h);
  }
  function c(h) {
    return a.containerState.furtherBlankLines || !Dt(h) ? (a.containerState.furtherBlankLines = void 0, a.containerState.initialBlankLine = void 0, u(h)) : (a.containerState.furtherBlankLines = void 0, a.containerState.initialBlankLine = void 0, t.attempt(HC, i, u)(h));
  }
  function u(h) {
    return a.containerState._closeFlow = !0, a.interrupt = void 0, zt(t, t.attempt(Ne, i, r), "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h);
  }
}
function YC(t, i, r) {
  const a = this;
  return zt(t, s, "listItemIndent", a.containerState.size + 1);
  function s(c) {
    const u = a.events[a.events.length - 1];
    return u && u[1].type === "listItemIndent" && u[2].sliceSerialize(u[1], !0).length === a.containerState.size ? i(c) : r(c);
  }
}
function FC(t) {
  t.exit(this.containerState.type);
}
function XC(t, i, r) {
  const a = this;
  return zt(t, s, "listItemPrefixWhitespace", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const u = a.events[a.events.length - 1];
    return !Dt(c) && u && u[1].type === "listItemPrefixWhitespace" ? i(c) : r(c);
  }
}
const F0 = {
  name: "setextUnderline",
  resolveTo: GC,
  tokenize: IC
};
function GC(t, i) {
  let r = t.length, a, s, c;
  for (; r--; )
    if (t[r][0] === "enter") {
      if (t[r][1].type === "content") {
        a = r;
        break;
      }
      t[r][1].type === "paragraph" && (s = r);
    } else
      t[r][1].type === "content" && t.splice(r, 1), !c && t[r][1].type === "definition" && (c = r);
  const u = {
    type: "setextHeading",
    start: {
      ...t[a][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[s][1].type = "setextHeadingText", c ? (t.splice(s, 0, ["enter", u, i]), t.splice(c + 1, 0, ["exit", t[a][1], i]), t[a][1].end = {
    ...t[c][1].end
  }) : t[a][1] = u, t.push(["exit", u, i]), t;
}
function IC(t, i, r) {
  const a = this;
  let s;
  return c;
  function c(p) {
    let g = a.events.length, y;
    for (; g--; )
      if (a.events[g][1].type !== "lineEnding" && a.events[g][1].type !== "linePrefix" && a.events[g][1].type !== "content") {
        y = a.events[g][1].type === "paragraph";
        break;
      }
    return !a.parser.lazy[a.now().line] && (a.interrupt || y) ? (t.enter("setextHeadingLine"), s = p, u(p)) : r(p);
  }
  function u(p) {
    return t.enter("setextHeadingLineSequence"), h(p);
  }
  function h(p) {
    return p === s ? (t.consume(p), h) : (t.exit("setextHeadingLineSequence"), Dt(p) ? zt(t, d, "lineSuffix")(p) : d(p));
  }
  function d(p) {
    return p === null || dt(p) ? (t.exit("setextHeadingLine"), i(p)) : r(p);
  }
}
const QC = {
  tokenize: KC
};
function KC(t) {
  const i = this, r = t.attempt(
    // Try to parse a blank line.
    Vl,
    a,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, zt(t, t.attempt(this.parser.constructs.flow, s, t.attempt(tC, s)), "linePrefix"))
  );
  return r;
  function a(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(c), t.exit("lineEndingBlank"), i.currentConstruct = void 0, r;
  }
  function s(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), i.currentConstruct = void 0, r;
  }
}
const ZC = {
  resolveAll: j1()
}, WC = U1("string"), JC = U1("text");
function U1(t) {
  return {
    resolveAll: j1(t === "text" ? $C : void 0),
    tokenize: i
  };
  function i(r) {
    const a = this, s = this.parser.constructs[t], c = r.attempt(s, u, h);
    return u;
    function u(g) {
      return p(g) ? c(g) : h(g);
    }
    function h(g) {
      if (g === null) {
        r.consume(g);
        return;
      }
      return r.enter("data"), r.consume(g), d;
    }
    function d(g) {
      return p(g) ? (r.exit("data"), c(g)) : (r.consume(g), d);
    }
    function p(g) {
      if (g === null)
        return !0;
      const y = s[g];
      let b = -1;
      if (y)
        for (; ++b < y.length; ) {
          const v = y[b];
          if (!v.previous || v.previous.call(a, a.previous))
            return !0;
        }
      return !1;
    }
  }
}
function j1(t) {
  return i;
  function i(r, a) {
    let s = -1, c;
    for (; ++s <= r.length; )
      c === void 0 ? r[s] && r[s][1].type === "data" && (c = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== c + 2 && (r[c][1].end = r[s - 1][1].end, r.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return t ? t(r, a) : r;
  }
}
function $C(t, i) {
  let r = 0;
  for (; ++r <= t.length; )
    if ((r === t.length || t[r][1].type === "lineEnding") && t[r - 1][1].type === "data") {
      const a = t[r - 1][1], s = i.sliceStream(a);
      let c = s.length, u = -1, h = 0, d;
      for (; c--; ) {
        const p = s[c];
        if (typeof p == "string") {
          for (u = p.length; p.charCodeAt(u - 1) === 32; )
            h++, u--;
          if (u) break;
          u = -1;
        } else if (p === -2)
          d = !0, h++;
        else if (p !== -1) {
          c++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && r === t.length && (h = 0), h) {
        const p = {
          type: r === t.length || d || h < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: c ? u : a.start._bufferIndex + u,
            _index: a.start._index + c,
            line: a.end.line,
            column: a.end.column - h,
            offset: a.end.offset - h
          },
          end: {
            ...a.end
          }
        };
        a.end = {
          ...p.start
        }, a.start.offset === a.end.offset ? Object.assign(a, p) : (t.splice(r, 0, ["enter", p, i], ["exit", p, i]), r += 2);
      }
      r++;
    }
  return t;
}
const tz = {
  42: Ne,
  43: Ne,
  45: Ne,
  48: Ne,
  49: Ne,
  50: Ne,
  51: Ne,
  52: Ne,
  53: Ne,
  54: Ne,
  55: Ne,
  56: Ne,
  57: Ne,
  62: R1
}, ez = {
  91: aC
}, nz = {
  [-2]: bf,
  [-1]: bf,
  32: bf
}, iz = {
  35: fC,
  42: gs,
  45: [F0, gs],
  60: mC,
  61: F0,
  95: gs,
  96: q0,
  126: q0
}, rz = {
  38: _1,
  92: O1
}, az = {
  [-5]: wf,
  [-4]: wf,
  [-3]: wf,
  33: _C,
  38: _1,
  42: fh,
  60: [LD, SC],
  91: LC,
  92: [uC, O1],
  93: ad,
  95: fh,
  96: QD
}, lz = {
  null: [fh, ZC]
}, oz = {
  null: [42, 95]
}, sz = {
  null: []
}, uz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: oz,
  contentInitial: ez,
  disable: sz,
  document: tz,
  flow: iz,
  flowInitial: nz,
  insideSpan: lz,
  string: rz,
  text: az
}, Symbol.toStringTag, { value: "Module" }));
function cz(t, i, r) {
  let a = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const s = {}, c = [];
  let u = [], h = [];
  const d = {
    attempt: z(_),
    check: z(O),
    consume: C,
    enter: D,
    exit: V,
    interrupt: z(O, {
      interrupt: !0
    })
  }, p = {
    code: null,
    containerState: {},
    defineSkip: A,
    events: [],
    now: S,
    parser: t,
    previous: null,
    sliceSerialize: b,
    sliceStream: v,
    write: y
  };
  let g = i.tokenize.call(p, d);
  return i.resolveAll && c.push(i), p;
  function y(J) {
    return u = sn(u, J), M(), u[u.length - 1] !== null ? [] : (N(i, 0), p.events = _s(c, p.events, p), p.events);
  }
  function b(J, Z) {
    return hz(v(J), Z);
  }
  function v(J) {
    return fz(u, J);
  }
  function S() {
    const {
      _bufferIndex: J,
      _index: Z,
      line: nt,
      column: it,
      offset: lt
    } = a;
    return {
      _bufferIndex: J,
      _index: Z,
      line: nt,
      column: it,
      offset: lt
    };
  }
  function A(J) {
    s[J.line] = J.column, L();
  }
  function M() {
    let J;
    for (; a._index < u.length; ) {
      const Z = u[a._index];
      if (typeof Z == "string")
        for (J = a._index, a._bufferIndex < 0 && (a._bufferIndex = 0); a._index === J && a._bufferIndex < Z.length; )
          k(Z.charCodeAt(a._bufferIndex));
      else
        k(Z);
    }
  }
  function k(J) {
    g = g(J);
  }
  function C(J) {
    dt(J) ? (a.line++, a.column = 1, a.offset += J === -3 ? 2 : 1, L()) : J !== -1 && (a.column++, a.offset++), a._bufferIndex < 0 ? a._index++ : (a._bufferIndex++, a._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    u[a._index].length && (a._bufferIndex = -1, a._index++)), p.previous = J;
  }
  function D(J, Z) {
    const nt = Z || {};
    return nt.type = J, nt.start = S(), p.events.push(["enter", nt, p]), h.push(nt), nt;
  }
  function V(J) {
    const Z = h.pop();
    return Z.end = S(), p.events.push(["exit", Z, p]), Z;
  }
  function _(J, Z) {
    N(J, Z.from);
  }
  function O(J, Z) {
    Z.restore();
  }
  function z(J, Z) {
    return nt;
    function nt(it, lt, P) {
      let K, rt, yt, x;
      return Array.isArray(it) ? (
        /* c8 ignore next 1 */
        at(it)
      ) : "tokenize" in it ? (
        // Looks like a construct.
        at([
          /** @type {Construct} */
          it
        ])
      ) : Q(it);
      function Q(ut) {
        return re;
        function re(Mt) {
          const ke = Mt !== null && ut[Mt], gn = Mt !== null && ut.null, Mn = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ke) ? ke : ke ? [ke] : [],
            ...Array.isArray(gn) ? gn : gn ? [gn] : []
          ];
          return at(Mn)(Mt);
        }
      }
      function at(ut) {
        return K = ut, rt = 0, ut.length === 0 ? P : E(ut[rt]);
      }
      function E(ut) {
        return re;
        function re(Mt) {
          return x = F(), yt = ut, ut.partial || (p.currentConstruct = ut), ut.name && p.parser.constructs.disable.null.includes(ut.name) ? St() : ut.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            Z ? Object.assign(Object.create(p), Z) : p,
            d,
            st,
            St
          )(Mt);
        }
      }
      function st(ut) {
        return J(yt, x), lt;
      }
      function St(ut) {
        return x.restore(), ++rt < K.length ? E(K[rt]) : P;
      }
    }
  }
  function N(J, Z) {
    J.resolveAll && !c.includes(J) && c.push(J), J.resolve && Qe(p.events, Z, p.events.length - Z, J.resolve(p.events.slice(Z), p)), J.resolveTo && (p.events = J.resolveTo(p.events, p));
  }
  function F() {
    const J = S(), Z = p.previous, nt = p.currentConstruct, it = p.events.length, lt = Array.from(h);
    return {
      from: it,
      restore: P
    };
    function P() {
      a = J, p.previous = Z, p.currentConstruct = nt, p.events.length = it, h = lt, L();
    }
  }
  function L() {
    a.line in s && a.column < 2 && (a.column = s[a.line], a.offset += s[a.line] - 1);
  }
}
function fz(t, i) {
  const r = i.start._index, a = i.start._bufferIndex, s = i.end._index, c = i.end._bufferIndex;
  let u;
  if (r === s)
    u = [t[r].slice(a, c)];
  else {
    if (u = t.slice(r, s), a > -1) {
      const h = u[0];
      typeof h == "string" ? u[0] = h.slice(a) : u.shift();
    }
    c > 0 && u.push(t[s].slice(0, c));
  }
  return u;
}
function hz(t, i) {
  let r = -1;
  const a = [];
  let s;
  for (; ++r < t.length; ) {
    const c = t[r];
    let u;
    if (typeof c == "string")
      u = c;
    else switch (c) {
      case -5: {
        u = "\r";
        break;
      }
      case -4: {
        u = `
`;
        break;
      }
      case -3: {
        u = `\r
`;
        break;
      }
      case -2: {
        u = i ? " " : "	";
        break;
      }
      case -1: {
        if (!i && s) continue;
        u = " ";
        break;
      }
      default:
        u = String.fromCharCode(c);
    }
    s = c === -2, a.push(u);
  }
  return a.join("");
}
function dz(t) {
  const a = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      z1([uz, ...(t || {}).extensions || []])
    ),
    content: s(CD),
    defined: [],
    document: s(MD),
    flow: s(QC),
    lazy: {},
    string: s(WC),
    text: s(JC)
  };
  return a;
  function s(c) {
    return u;
    function u(h) {
      return cz(a, c, h);
    }
  }
}
function pz(t) {
  for (; !N1(t); )
    ;
  return t;
}
const X0 = /[\0\t\n\r]/g;
function mz() {
  let t = 1, i = "", r = !0, a;
  return s;
  function s(c, u, h) {
    const d = [];
    let p, g, y, b, v;
    for (c = i + (typeof c == "string" ? c.toString() : new TextDecoder(u || void 0).decode(c)), y = 0, i = "", r && (c.charCodeAt(0) === 65279 && y++, r = void 0); y < c.length; ) {
      if (X0.lastIndex = y, p = X0.exec(c), b = p && p.index !== void 0 ? p.index : c.length, v = c.charCodeAt(b), !p) {
        i = c.slice(y);
        break;
      }
      if (v === 10 && y === b && a)
        d.push(-3), a = void 0;
      else
        switch (a && (d.push(-5), a = void 0), y < b && (d.push(c.slice(y, b)), t += b - y), v) {
          case 0: {
            d.push(65533), t++;
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, d.push(-2); t++ < g; ) d.push(-1);
            break;
          }
          case 10: {
            d.push(-4), t = 1;
            break;
          }
          default:
            a = !0, t = 1;
        }
      y = b + 1;
    }
    return h && (a && d.push(-5), i && d.push(i), d.push(null)), d;
  }
}
const gz = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function yz(t) {
  return t.replace(gz, vz);
}
function vz(t, i, r) {
  if (i)
    return i;
  if (r.charCodeAt(0) === 35) {
    const s = r.charCodeAt(1), c = s === 120 || s === 88;
    return M1(r.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return rd(r) || t;
}
const H1 = {}.hasOwnProperty;
function bz(t, i, r) {
  return typeof i != "string" && (r = i, i = void 0), wz(r)(pz(dz(r).document().write(mz()(t, i, !0))));
}
function wz(t) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(aa),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: c(jl),
      blockQuote: c(gn),
      characterEscape: F,
      characterReference: F,
      codeFenced: c(Mn),
      codeFencedFenceInfo: u,
      codeFencedFenceMeta: u,
      codeIndented: c(Mn, u),
      codeText: c(na, u),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: c(ia),
      definitionDestinationString: u,
      definitionLabelString: u,
      definitionTitleString: u,
      emphasis: c(ra),
      hardBreakEscape: c(Hl),
      hardBreakTrailing: c(Hl),
      htmlFlow: c(Ve, u),
      htmlFlowData: F,
      htmlText: c(Ve, u),
      htmlTextData: F,
      image: c(js),
      label: u,
      link: c(aa),
      listItem: c(Ji),
      listItemValue: b,
      listOrdered: c(la, y),
      listUnordered: c(la),
      paragraph: c(Hs),
      reference: E,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: c(jl),
      strong: c(Pl),
      thematicBreak: c(qs)
    },
    exit: {
      atxHeading: d(),
      atxHeadingSequence: _,
      autolink: d(),
      autolinkEmail: ke,
      autolinkProtocol: Mt,
      blockQuote: d(),
      characterEscapeValue: L,
      characterReferenceMarkerHexadecimal: St,
      characterReferenceMarkerNumeric: St,
      characterReferenceValue: ut,
      characterReference: re,
      codeFenced: d(M),
      codeFencedFence: A,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: S,
      codeFlowValue: L,
      codeIndented: d(k),
      codeText: d(lt),
      codeTextData: L,
      data: L,
      definition: d(),
      definitionDestinationString: V,
      definitionLabelString: C,
      definitionTitleString: D,
      emphasis: d(),
      hardBreakEscape: d(Z),
      hardBreakTrailing: d(Z),
      htmlFlow: d(nt),
      htmlFlowData: L,
      htmlText: d(it),
      htmlTextData: L,
      image: d(K),
      label: yt,
      labelText: rt,
      lineEnding: J,
      link: d(P),
      listItem: d(),
      listOrdered: d(),
      listUnordered: d(),
      paragraph: d(),
      referenceString: st,
      resourceDestinationString: x,
      resourceTitleString: Q,
      resource: at,
      setextHeading: d(N),
      setextHeadingLineSequence: z,
      setextHeadingText: O,
      strong: d(),
      thematicBreak: d()
    }
  };
  P1(i, (t || {}).mdastExtensions || []);
  const r = {};
  return a;
  function a(X) {
    let tt = {
      type: "root",
      children: []
    };
    const ht = {
      stack: [tt],
      tokenStack: [],
      config: i,
      enter: h,
      exit: p,
      buffer: u,
      resume: g,
      data: r
    }, gt = [];
    let _t = -1;
    for (; ++_t < X.length; )
      if (X[_t][1].type === "listOrdered" || X[_t][1].type === "listUnordered")
        if (X[_t][0] === "enter")
          gt.push(_t);
        else {
          const Ue = gt.pop();
          _t = s(X, Ue, _t);
        }
    for (_t = -1; ++_t < X.length; ) {
      const Ue = i[X[_t][0]];
      H1.call(Ue, X[_t][1].type) && Ue[X[_t][1].type].call(Object.assign({
        sliceSerialize: X[_t][2].sliceSerialize
      }, ht), X[_t][1]);
    }
    if (ht.tokenStack.length > 0) {
      const Ue = ht.tokenStack[ht.tokenStack.length - 1];
      (Ue[1] || G0).call(ht, void 0, Ue[0]);
    }
    for (tt.position = {
      start: bi(X.length > 0 ? X[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: bi(X.length > 0 ? X[X.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, _t = -1; ++_t < i.transforms.length; )
      tt = i.transforms[_t](tt) || tt;
    return tt;
  }
  function s(X, tt, ht) {
    let gt = tt - 1, _t = -1, Ue = !1, Rn, Ce, yn, je;
    for (; ++gt <= ht; ) {
      const se = X[gt];
      switch (se[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          se[0] === "enter" ? _t++ : _t--, je = void 0;
          break;
        }
        case "lineEndingBlank": {
          se[0] === "enter" && (Rn && !je && !_t && !yn && (yn = gt), je = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          je = void 0;
      }
      if (!_t && se[0] === "enter" && se[1].type === "listItemPrefix" || _t === -1 && se[0] === "exit" && (se[1].type === "listUnordered" || se[1].type === "listOrdered")) {
        if (Rn) {
          let Ke = gt;
          for (Ce = void 0; Ke--; ) {
            const cn = X[Ke];
            if (cn[1].type === "lineEnding" || cn[1].type === "lineEndingBlank") {
              if (cn[0] === "exit") continue;
              Ce && (X[Ce][1].type = "lineEndingBlank", Ue = !0), cn[1].type = "lineEnding", Ce = Ke;
            } else if (!(cn[1].type === "linePrefix" || cn[1].type === "blockQuotePrefix" || cn[1].type === "blockQuotePrefixWhitespace" || cn[1].type === "blockQuoteMarker" || cn[1].type === "listItemIndent")) break;
          }
          yn && (!Ce || yn < Ce) && (Rn._spread = !0), Rn.end = Object.assign({}, Ce ? X[Ce][1].start : se[1].end), X.splice(Ce || gt, 0, ["exit", Rn, se[2]]), gt++, ht++;
        }
        if (se[1].type === "listItemPrefix") {
          const Ke = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, se[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Rn = Ke, X.splice(gt, 0, ["enter", Ke, se[2]]), gt++, ht++, yn = void 0, je = !0;
        }
      }
    }
    return X[tt][1]._spread = Ue, ht;
  }
  function c(X, tt) {
    return ht;
    function ht(gt) {
      h.call(this, X(gt), gt), tt && tt.call(this, gt);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function h(X, tt, ht) {
    this.stack[this.stack.length - 1].children.push(X), this.stack.push(X), this.tokenStack.push([tt, ht || void 0]), X.position = {
      start: bi(tt.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function d(X) {
    return tt;
    function tt(ht) {
      X && X.call(this, ht), p.call(this, ht);
    }
  }
  function p(X, tt) {
    const ht = this.stack.pop(), gt = this.tokenStack.pop();
    if (gt)
      gt[0].type !== X.type && (tt ? tt.call(this, X, gt[0]) : (gt[1] || G0).call(this, X, gt[0]));
    else throw new Error("Cannot close `" + X.type + "` (" + vl({
      start: X.start,
      end: X.end
    }) + "): it’s not open");
    ht.position.end = bi(X.end);
  }
  function g() {
    return id(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function b(X) {
    if (this.data.expectingFirstListItemValue) {
      const tt = this.stack[this.stack.length - 2];
      tt.start = Number.parseInt(this.sliceSerialize(X), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function v() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.lang = X;
  }
  function S() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.meta = X;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function M() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.value = X.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.value = X.replace(/(\r?\n|\r)$/g, "");
  }
  function C(X) {
    const tt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.label = tt, ht.identifier = mn(this.sliceSerialize(X)).toLowerCase();
  }
  function D() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.title = X;
  }
  function V() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.url = X;
  }
  function _(X) {
    const tt = this.stack[this.stack.length - 1];
    if (!tt.depth) {
      const ht = this.sliceSerialize(X).length;
      tt.depth = ht;
    }
  }
  function O() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(X) {
    const tt = this.stack[this.stack.length - 1];
    tt.depth = this.sliceSerialize(X).codePointAt(0) === 61 ? 1 : 2;
  }
  function N() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(X) {
    const ht = this.stack[this.stack.length - 1].children;
    let gt = ht[ht.length - 1];
    (!gt || gt.type !== "text") && (gt = Ps(), gt.position = {
      start: bi(X.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ht.push(gt)), this.stack.push(gt);
  }
  function L(X) {
    const tt = this.stack.pop();
    tt.value += this.sliceSerialize(X), tt.position.end = bi(X.end);
  }
  function J(X) {
    const tt = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ht = tt.children[tt.children.length - 1];
      ht.position.end = bi(X.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(tt.type) && (F.call(this, X), L.call(this, X));
  }
  function Z() {
    this.data.atHardBreak = !0;
  }
  function nt() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.value = X;
  }
  function it() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.value = X;
  }
  function lt() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.value = X;
  }
  function P() {
    const X = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const tt = this.data.referenceType || "shortcut";
      X.type += "Reference", X.referenceType = tt, delete X.url, delete X.title;
    } else
      delete X.identifier, delete X.label;
    this.data.referenceType = void 0;
  }
  function K() {
    const X = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const tt = this.data.referenceType || "shortcut";
      X.type += "Reference", X.referenceType = tt, delete X.url, delete X.title;
    } else
      delete X.identifier, delete X.label;
    this.data.referenceType = void 0;
  }
  function rt(X) {
    const tt = this.sliceSerialize(X), ht = this.stack[this.stack.length - 2];
    ht.label = yz(tt), ht.identifier = mn(tt).toLowerCase();
  }
  function yt() {
    const X = this.stack[this.stack.length - 1], tt = this.resume(), ht = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ht.type === "link") {
      const gt = X.children;
      ht.children = gt;
    } else
      ht.alt = tt;
  }
  function x() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.url = X;
  }
  function Q() {
    const X = this.resume(), tt = this.stack[this.stack.length - 1];
    tt.title = X;
  }
  function at() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function st(X) {
    const tt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.label = tt, ht.identifier = mn(this.sliceSerialize(X)).toLowerCase(), this.data.referenceType = "full";
  }
  function St(X) {
    this.data.characterReferenceType = X.type;
  }
  function ut(X) {
    const tt = this.sliceSerialize(X), ht = this.data.characterReferenceType;
    let gt;
    ht ? (gt = M1(tt, ht === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : gt = rd(tt);
    const _t = this.stack[this.stack.length - 1];
    _t.value += gt;
  }
  function re(X) {
    const tt = this.stack.pop();
    tt.position.end = bi(X.end);
  }
  function Mt(X) {
    L.call(this, X);
    const tt = this.stack[this.stack.length - 1];
    tt.url = this.sliceSerialize(X);
  }
  function ke(X) {
    L.call(this, X);
    const tt = this.stack[this.stack.length - 1];
    tt.url = "mailto:" + this.sliceSerialize(X);
  }
  function gn() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Mn() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function na() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ia() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ra() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function jl() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Hl() {
    return {
      type: "break"
    };
  }
  function Ve() {
    return {
      type: "html",
      value: ""
    };
  }
  function js() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function aa() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function la(X) {
    return {
      type: "list",
      ordered: X.type === "listOrdered",
      start: null,
      spread: X._spread,
      children: []
    };
  }
  function Ji(X) {
    return {
      type: "listItem",
      spread: X._spread,
      checked: null,
      children: []
    };
  }
  function Hs() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Pl() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ps() {
    return {
      type: "text",
      value: ""
    };
  }
  function qs() {
    return {
      type: "thematicBreak"
    };
  }
}
function bi(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function P1(t, i) {
  let r = -1;
  for (; ++r < i.length; ) {
    const a = i[r];
    Array.isArray(a) ? P1(t, a) : xz(t, a);
  }
}
function xz(t, i) {
  let r;
  for (r in i)
    if (H1.call(i, r))
      switch (r) {
        case "canContainEols": {
          const a = i[r];
          a && t[r].push(...a);
          break;
        }
        case "transforms": {
          const a = i[r];
          a && t[r].push(...a);
          break;
        }
        case "enter":
        case "exit": {
          const a = i[r];
          a && Object.assign(t[r], a);
          break;
        }
      }
}
function G0(t, i) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + vl({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + i.type + "`, " + vl({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + vl({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function Sz(t) {
  const i = this;
  i.parser = r;
  function r(a) {
    return bz(a, {
      ...i.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: i.data("micromarkExtensions") || [],
      mdastExtensions: i.data("fromMarkdownExtensions") || []
    });
  }
}
function Tz(t, i) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(i), !0)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function kz(t, i) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(i, r), [t.applyData(i, r), { type: "text", value: `
` }];
}
function Ez(t, i) {
  const r = i.value ? i.value + `
` : "", a = {};
  i.lang && (a.className = ["language-" + i.lang]);
  let s = {
    type: "element",
    tagName: "code",
    properties: a,
    children: [{ type: "text", value: r }]
  };
  return i.meta && (s.data = { meta: i.meta }), t.patch(i, s), s = t.applyData(i, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, t.patch(i, s), s;
}
function Az(t, i) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function Dz(t, i) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function Cz(t, i) {
  const r = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = String(i.identifier).toUpperCase(), s = ea(a.toLowerCase()), c = t.footnoteOrder.indexOf(a);
  let u, h = t.footnoteCounts.get(a);
  h === void 0 ? (h = 0, t.footnoteOrder.push(a), u = t.footnoteOrder.length) : u = c + 1, h += 1, t.footnoteCounts.set(a, h);
  const d = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + s,
      id: r + "fnref-" + s + (h > 1 ? "-" + h : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(u) }]
  };
  t.patch(i, d);
  const p = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [d]
  };
  return t.patch(i, p), t.applyData(i, p);
}
function zz(t, i) {
  const r = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function Mz(t, i) {
  if (t.options.allowDangerousHtml) {
    const r = { type: "raw", value: i.value };
    return t.patch(i, r), t.applyData(i, r);
  }
}
function q1(t, i) {
  const r = i.referenceType;
  let a = "]";
  if (r === "collapsed" ? a += "[]" : r === "full" && (a += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + a }];
  const s = t.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const u = s[s.length - 1];
  return u && u.type === "text" ? u.value += a : s.push({ type: "text", value: a }), s;
}
function Rz(t, i) {
  const r = String(i.identifier).toUpperCase(), a = t.definitionById.get(r);
  if (!a)
    return q1(t, i);
  const s = { src: ea(a.url || ""), alt: i.alt };
  a.title !== null && a.title !== void 0 && (s.title = a.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(i, c), t.applyData(i, c);
}
function Oz(t, i) {
  const r = { src: ea(i.url) };
  i.alt !== null && i.alt !== void 0 && (r.alt = i.alt), i.title !== null && i.title !== void 0 && (r.title = i.title);
  const a = { type: "element", tagName: "img", properties: r, children: [] };
  return t.patch(i, a), t.applyData(i, a);
}
function _z(t, i) {
  const r = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  t.patch(i, r);
  const a = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return t.patch(i, a), t.applyData(i, a);
}
function Nz(t, i) {
  const r = String(i.identifier).toUpperCase(), a = t.definitionById.get(r);
  if (!a)
    return q1(t, i);
  const s = { href: ea(a.url || "") };
  a.title !== null && a.title !== void 0 && (s.title = a.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(i)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function Lz(t, i) {
  const r = { href: ea(i.url) };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: r,
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function Bz(t, i, r) {
  const a = t.all(i), s = r ? Vz(r) : Y1(i), c = {}, u = [];
  if (typeof i.checked == "boolean") {
    const g = a[0];
    let y;
    g && g.type === "element" && g.tagName === "p" ? y = g : (y = { type: "element", tagName: "p", properties: {}, children: [] }, a.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let h = -1;
  for (; ++h < a.length; ) {
    const g = a[h];
    (s || h !== 0 || g.type !== "element" || g.tagName !== "p") && u.push({ type: "text", value: `
` }), g.type === "element" && g.tagName === "p" && !s ? u.push(...g.children) : u.push(g);
  }
  const d = a[a.length - 1];
  d && (s || d.type !== "element" || d.tagName !== "p") && u.push({ type: "text", value: `
` });
  const p = { type: "element", tagName: "li", properties: c, children: u };
  return t.patch(i, p), t.applyData(i, p);
}
function Vz(t) {
  let i = !1;
  if (t.type === "list") {
    i = t.spread || !1;
    const r = t.children;
    let a = -1;
    for (; !i && ++a < r.length; )
      i = Y1(r[a]);
  }
  return i;
}
function Y1(t) {
  const i = t.spread;
  return i ?? t.children.length > 1;
}
function Uz(t, i) {
  const r = {}, a = t.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++s < a.length; ) {
    const u = a[s];
    if (u.type === "element" && u.tagName === "li" && u.properties && Array.isArray(u.properties.className) && u.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: r,
    children: t.wrap(a, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function jz(t, i) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function Hz(t, i) {
  const r = { type: "root", children: t.wrap(t.all(i)) };
  return t.patch(i, r), t.applyData(i, r);
}
function Pz(t, i) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
function qz(t, i) {
  const r = t.all(i), a = r.shift(), s = [];
  if (a) {
    const u = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([a], !0)
    };
    t.patch(i.children[0], u), s.push(u);
  }
  if (r.length > 0) {
    const u = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(r, !0)
    }, h = $h(i.children[1]), d = S1(i.children[i.children.length - 1]);
    h && d && (u.position = { start: h, end: d }), s.push(u);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(s, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function Yz(t, i, r) {
  const a = r ? r.children : void 0, c = (a ? a.indexOf(i) : 1) === 0 ? "th" : "td", u = r && r.type === "table" ? r.align : void 0, h = u ? u.length : i.children.length;
  let d = -1;
  const p = [];
  for (; ++d < h; ) {
    const y = i.children[d], b = {}, v = u ? u[d] : void 0;
    v && (b.align = v);
    let S = { type: "element", tagName: c, properties: b, children: [] };
    y && (S.children = t.all(y), t.patch(y, S), S = t.applyData(y, S)), p.push(S);
  }
  const g = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(p, !0)
  };
  return t.patch(i, g), t.applyData(i, g);
}
function Fz(t, i) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, r), t.applyData(i, r);
}
const I0 = 9, Q0 = 32;
function Xz(t) {
  const i = String(t), r = /\r?\n|\r/g;
  let a = r.exec(i), s = 0;
  const c = [];
  for (; a; )
    c.push(
      K0(i.slice(s, a.index), s > 0, !0),
      a[0]
    ), s = a.index + a[0].length, a = r.exec(i);
  return c.push(K0(i.slice(s), s > 0, !1)), c.join("");
}
function K0(t, i, r) {
  let a = 0, s = t.length;
  if (i) {
    let c = t.codePointAt(a);
    for (; c === I0 || c === Q0; )
      a++, c = t.codePointAt(a);
  }
  if (r) {
    let c = t.codePointAt(s - 1);
    for (; c === I0 || c === Q0; )
      s--, c = t.codePointAt(s - 1);
  }
  return s > a ? t.slice(a, s) : "";
}
function Gz(t, i) {
  const r = { type: "text", value: Xz(String(i.value)) };
  return t.patch(i, r), t.applyData(i, r);
}
function Iz(t, i) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(i, r), t.applyData(i, r);
}
const Qz = {
  blockquote: Tz,
  break: kz,
  code: Ez,
  delete: Az,
  emphasis: Dz,
  footnoteReference: Cz,
  heading: zz,
  html: Mz,
  imageReference: Rz,
  image: Oz,
  inlineCode: _z,
  linkReference: Nz,
  link: Lz,
  listItem: Bz,
  list: Uz,
  paragraph: jz,
  // @ts-expect-error: root is different, but hard to type.
  root: Hz,
  strong: Pz,
  table: qz,
  tableCell: Fz,
  tableRow: Yz,
  text: Gz,
  thematicBreak: Iz,
  toml: rs,
  yaml: rs,
  definition: rs,
  footnoteDefinition: rs
};
function rs() {
}
const F1 = -1, Ns = 0, wl = 1, Ts = 2, ld = 3, od = 4, sd = 5, ud = 6, X1 = 7, G1 = 8, Z0 = typeof self == "object" ? self : globalThis, Kz = (t, i) => {
  const r = (s, c) => (t.set(c, s), s), a = (s) => {
    if (t.has(s))
      return t.get(s);
    const [c, u] = i[s];
    switch (c) {
      case Ns:
      case F1:
        return r(u, s);
      case wl: {
        const h = r([], s);
        for (const d of u)
          h.push(a(d));
        return h;
      }
      case Ts: {
        const h = r({}, s);
        for (const [d, p] of u)
          h[a(d)] = a(p);
        return h;
      }
      case ld:
        return r(new Date(u), s);
      case od: {
        const { source: h, flags: d } = u;
        return r(new RegExp(h, d), s);
      }
      case sd: {
        const h = r(/* @__PURE__ */ new Map(), s);
        for (const [d, p] of u)
          h.set(a(d), a(p));
        return h;
      }
      case ud: {
        const h = r(/* @__PURE__ */ new Set(), s);
        for (const d of u)
          h.add(a(d));
        return h;
      }
      case X1: {
        const { name: h, message: d } = u;
        return r(new Z0[h](d), s);
      }
      case G1:
        return r(BigInt(u), s);
      case "BigInt":
        return r(Object(BigInt(u)), s);
      case "ArrayBuffer":
        return r(new Uint8Array(u).buffer, u);
      case "DataView": {
        const { buffer: h } = new Uint8Array(u);
        return r(new DataView(h), u);
      }
    }
    return r(new Z0[c](u), s);
  };
  return a;
}, W0 = (t) => Kz(/* @__PURE__ */ new Map(), t)(0), jr = "", { toString: Zz } = {}, { keys: Wz } = Object, ol = (t) => {
  const i = typeof t;
  if (i !== "object" || !t)
    return [Ns, i];
  const r = Zz.call(t).slice(8, -1);
  switch (r) {
    case "Array":
      return [wl, jr];
    case "Object":
      return [Ts, jr];
    case "Date":
      return [ld, jr];
    case "RegExp":
      return [od, jr];
    case "Map":
      return [sd, jr];
    case "Set":
      return [ud, jr];
    case "DataView":
      return [wl, r];
  }
  return r.includes("Array") ? [wl, r] : r.includes("Error") ? [X1, r] : [Ts, r];
}, as = ([t, i]) => t === Ns && (i === "function" || i === "symbol"), Jz = (t, i, r, a) => {
  const s = (u, h) => {
    const d = a.push(u) - 1;
    return r.set(h, d), d;
  }, c = (u) => {
    if (r.has(u))
      return r.get(u);
    let [h, d] = ol(u);
    switch (h) {
      case Ns: {
        let g = u;
        switch (d) {
          case "bigint":
            h = G1, g = u.toString();
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + d);
            g = null;
            break;
          case "undefined":
            return s([F1], u);
        }
        return s([h, g], u);
      }
      case wl: {
        if (d) {
          let b = u;
          return d === "DataView" ? b = new Uint8Array(u.buffer) : d === "ArrayBuffer" && (b = new Uint8Array(u)), s([d, [...b]], u);
        }
        const g = [], y = s([h, g], u);
        for (const b of u)
          g.push(c(b));
        return y;
      }
      case Ts: {
        if (d)
          switch (d) {
            case "BigInt":
              return s([d, u.toString()], u);
            case "Boolean":
            case "Number":
            case "String":
              return s([d, u.valueOf()], u);
          }
        if (i && "toJSON" in u)
          return c(u.toJSON());
        const g = [], y = s([h, g], u);
        for (const b of Wz(u))
          (t || !as(ol(u[b]))) && g.push([c(b), c(u[b])]);
        return y;
      }
      case ld:
        return s([h, u.toISOString()], u);
      case od: {
        const { source: g, flags: y } = u;
        return s([h, { source: g, flags: y }], u);
      }
      case sd: {
        const g = [], y = s([h, g], u);
        for (const [b, v] of u)
          (t || !(as(ol(b)) || as(ol(v)))) && g.push([c(b), c(v)]);
        return y;
      }
      case ud: {
        const g = [], y = s([h, g], u);
        for (const b of u)
          (t || !as(ol(b))) && g.push(c(b));
        return y;
      }
    }
    const { message: p } = u;
    return s([h, { name: d, message: p }], u);
  };
  return c;
}, J0 = (t, { json: i, lossy: r } = {}) => {
  const a = [];
  return Jz(!(i || r), !!i, /* @__PURE__ */ new Map(), a)(t), a;
}, ks = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, i) => i && ("json" in i || "lossy" in i) ? W0(J0(t, i)) : structuredClone(t)
) : (t, i) => W0(J0(t, i));
function $z(t, i) {
  const r = [{ type: "text", value: "↩" }];
  return i > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), r;
}
function tM(t, i) {
  return "Back to reference " + (t + 1) + (i > 1 ? "-" + i : "");
}
function eM(t) {
  const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", r = t.options.footnoteBackContent || $z, a = t.options.footnoteBackLabel || tM, s = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", u = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, h = [];
  let d = -1;
  for (; ++d < t.footnoteOrder.length; ) {
    const p = t.footnoteById.get(
      t.footnoteOrder[d]
    );
    if (!p)
      continue;
    const g = t.all(p), y = String(p.identifier).toUpperCase(), b = ea(y.toLowerCase());
    let v = 0;
    const S = [], A = t.footnoteCounts.get(y);
    for (; A !== void 0 && ++v <= A; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let C = typeof r == "string" ? r : r(d, v);
      typeof C == "string" && (C = { type: "text", value: C }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + b + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof a == "string" ? a : a(d, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const M = g[g.length - 1];
    if (M && M.type === "element" && M.tagName === "p") {
      const C = M.children[M.children.length - 1];
      C && C.type === "text" ? C.value += " " : M.children.push({ type: "text", value: " " }), M.children.push(...S);
    } else
      g.push(...S);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + b },
      children: t.wrap(g, !0)
    };
    t.patch(p, k), h.push(k);
  }
  if (h.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: {
            ...ks(u),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(h, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ls = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(t) {
    if (t == null)
      return aM;
    if (typeof t == "function")
      return Bs(t);
    if (typeof t == "object")
      return Array.isArray(t) ? nM(t) : iM(t);
    if (typeof t == "string")
      return rM(t);
    throw new Error("Expected function, string, or object as test");
  }
);
function nM(t) {
  const i = [];
  let r = -1;
  for (; ++r < t.length; )
    i[r] = Ls(t[r]);
  return Bs(a);
  function a(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function iM(t) {
  const i = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Bs(r);
  function r(a) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      a
    );
    let c;
    for (c in t)
      if (s[c] !== i[c]) return !1;
    return !0;
  }
}
function rM(t) {
  return Bs(i);
  function i(r) {
    return r && r.type === t;
  }
}
function Bs(t) {
  return i;
  function i(r, a, s) {
    return !!(lM(r) && t.call(
      this,
      r,
      typeof a == "number" ? a : void 0,
      s || void 0
    ));
  }
}
function aM() {
  return !0;
}
function lM(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const I1 = [], oM = !0, hh = !1, sM = "skip";
function Q1(t, i, r, a) {
  let s;
  typeof i == "function" && typeof r != "function" ? (a = r, r = i) : s = i;
  const c = Ls(s), u = a ? -1 : 1;
  h(t, void 0, [])();
  function h(d, p, g) {
    const y = (
      /** @type {Record<string, unknown>} */
      d && typeof d == "object" ? d : {}
    );
    if (typeof y.type == "string") {
      const v = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(b, "name", {
        value: "node (" + (d.type + (v ? "<" + v + ">" : "")) + ")"
      });
    }
    return b;
    function b() {
      let v = I1, S, A, M;
      if ((!i || c(d, p, g[g.length - 1] || void 0)) && (v = uM(r(d, g)), v[0] === hh))
        return v;
      if ("children" in d && d.children) {
        const k = (
          /** @type {UnistParent} */
          d
        );
        if (k.children && v[0] !== sM)
          for (A = (a ? k.children.length : -1) + u, M = g.concat(k); A > -1 && A < k.children.length; ) {
            const C = k.children[A];
            if (S = h(C, A, M)(), S[0] === hh)
              return S;
            A = typeof S[1] == "number" ? S[1] : A + u;
          }
      }
      return v;
    }
  }
}
function uM(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [oM, t] : t == null ? I1 : [t];
}
function cd(t, i, r, a) {
  let s, c, u;
  typeof i == "function" ? (c = void 0, u = i, s = r) : (c = i, u = r, s = a), Q1(t, c, h, s);
  function h(d, p) {
    const g = p[p.length - 1], y = g ? g.children.indexOf(d) : void 0;
    return u(d, y, g);
  }
}
const dh = {}.hasOwnProperty, cM = {};
function fM(t, i) {
  const r = i || cM, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = { ...Qz, ...r.handlers }, h = {
    all: p,
    applyData: dM,
    definitionById: a,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: u,
    one: d,
    options: r,
    patch: hM,
    wrap: mM
  };
  return cd(t, function(g) {
    if (g.type === "definition" || g.type === "footnoteDefinition") {
      const y = g.type === "definition" ? a : s, b = String(g.identifier).toUpperCase();
      y.has(b) || y.set(b, g);
    }
  }), h;
  function d(g, y) {
    const b = g.type, v = h.handlers[b];
    if (dh.call(h.handlers, b) && v)
      return v(h, g, y);
    if (h.options.passThrough && h.options.passThrough.includes(b)) {
      if ("children" in g) {
        const { children: A, ...M } = g, k = ks(M);
        return k.children = h.all(g), k;
      }
      return ks(g);
    }
    return (h.options.unknownHandler || pM)(h, g, y);
  }
  function p(g) {
    const y = [];
    if ("children" in g) {
      const b = g.children;
      let v = -1;
      for (; ++v < b.length; ) {
        const S = h.one(b[v], g);
        if (S) {
          if (v && b[v - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = $0(S.value)), !Array.isArray(S) && S.type === "element")) {
            const A = S.children[0];
            A && A.type === "text" && (A.value = $0(A.value));
          }
          Array.isArray(S) ? y.push(...S) : y.push(S);
        }
      }
    }
    return y;
  }
}
function hM(t, i) {
  t.position && (i.position = tD(t));
}
function dM(t, i) {
  let r = i;
  if (t && t.data) {
    const a = t.data.hName, s = t.data.hChildren, c = t.data.hProperties;
    if (typeof a == "string")
      if (r.type === "element")
        r.tagName = a;
      else {
        const u = "children" in r ? r.children : [r];
        r = { type: "element", tagName: a, properties: {}, children: u };
      }
    r.type === "element" && c && Object.assign(r.properties, ks(c)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
  }
  return r;
}
function pM(t, i) {
  const r = i.data || {}, a = "value" in i && !(dh.call(r, "hProperties") || dh.call(r, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function mM(t, i) {
  const r = [];
  let a = -1;
  for (i && r.push({ type: "text", value: `
` }); ++a < t.length; )
    a && r.push({ type: "text", value: `
` }), r.push(t[a]);
  return i && t.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function $0(t) {
  let i = 0, r = t.charCodeAt(i);
  for (; r === 9 || r === 32; )
    i++, r = t.charCodeAt(i);
  return t.slice(i);
}
function tv(t, i) {
  const r = fM(t, i), a = r.one(t, void 0), s = eM(r), c = Array.isArray(a) ? { type: "root", children: a } : a || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function gM(t, i) {
  return t && "run" in t ? async function(r, a) {
    const s = (
      /** @type {HastRoot} */
      tv(r, { file: a, ...i })
    );
    await t.run(s, a);
  } : function(r, a) {
    return (
      /** @type {HastRoot} */
      tv(r, { file: a, ...t || i })
    );
  };
}
function ev(t) {
  if (t)
    throw t;
}
var xf, nv;
function yM() {
  if (nv) return xf;
  nv = 1;
  var t = Object.prototype.hasOwnProperty, i = Object.prototype.toString, r = Object.defineProperty, a = Object.getOwnPropertyDescriptor, s = function(p) {
    return typeof Array.isArray == "function" ? Array.isArray(p) : i.call(p) === "[object Array]";
  }, c = function(p) {
    if (!p || i.call(p) !== "[object Object]")
      return !1;
    var g = t.call(p, "constructor"), y = p.constructor && p.constructor.prototype && t.call(p.constructor.prototype, "isPrototypeOf");
    if (p.constructor && !g && !y)
      return !1;
    var b;
    for (b in p)
      ;
    return typeof b > "u" || t.call(p, b);
  }, u = function(p, g) {
    r && g.name === "__proto__" ? r(p, g.name, {
      enumerable: !0,
      configurable: !0,
      value: g.newValue,
      writable: !0
    }) : p[g.name] = g.newValue;
  }, h = function(p, g) {
    if (g === "__proto__")
      if (t.call(p, g)) {
        if (a)
          return a(p, g).value;
      } else return;
    return p[g];
  };
  return xf = function d() {
    var p, g, y, b, v, S, A = arguments[0], M = 1, k = arguments.length, C = !1;
    for (typeof A == "boolean" && (C = A, A = arguments[1] || {}, M = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); M < k; ++M)
      if (p = arguments[M], p != null)
        for (g in p)
          y = h(A, g), b = h(p, g), A !== b && (C && b && (c(b) || (v = s(b))) ? (v ? (v = !1, S = y && s(y) ? y : []) : S = y && c(y) ? y : {}, u(A, { name: g, newValue: d(C, S, b) })) : typeof b < "u" && u(A, { name: g, newValue: b }));
    return A;
  }, xf;
}
var vM = yM();
const Sf = /* @__PURE__ */ Ds(vM);
function ph(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const i = Object.getPrototypeOf(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function bM() {
  const t = [], i = { run: r, use: a };
  return i;
  function r(...s) {
    let c = -1;
    const u = s.pop();
    if (typeof u != "function")
      throw new TypeError("Expected function as last argument, not " + u);
    h(null, ...s);
    function h(d, ...p) {
      const g = t[++c];
      let y = -1;
      if (d) {
        u(d);
        return;
      }
      for (; ++y < s.length; )
        (p[y] === null || p[y] === void 0) && (p[y] = s[y]);
      s = p, g ? wM(g, h)(...p) : u(null, ...p);
    }
  }
  function a(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return t.push(s), i;
  }
}
function wM(t, i) {
  let r;
  return a;
  function a(...u) {
    const h = t.length > u.length;
    let d;
    h && u.push(s);
    try {
      d = t.apply(this, u);
    } catch (p) {
      const g = (
        /** @type {Error} */
        p
      );
      if (h && r)
        throw g;
      return s(g);
    }
    h || (d && d.then && typeof d.then == "function" ? d.then(c, s) : d instanceof Error ? s(d) : c(d));
  }
  function s(u, ...h) {
    r || (r = !0, i(u, ...h));
  }
  function c(u) {
    s(null, u);
  }
}
const kn = { basename: xM, dirname: SM, extname: TM, join: kM, sep: "/" };
function xM(t, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Ul(t);
  let r = 0, a = -1, s = t.length, c;
  if (i === void 0 || i.length === 0 || i.length > t.length) {
    for (; s--; )
      if (t.codePointAt(s) === 47) {
        if (c) {
          r = s + 1;
          break;
        }
      } else a < 0 && (c = !0, a = s + 1);
    return a < 0 ? "" : t.slice(r, a);
  }
  if (i === t)
    return "";
  let u = -1, h = i.length - 1;
  for (; s--; )
    if (t.codePointAt(s) === 47) {
      if (c) {
        r = s + 1;
        break;
      }
    } else
      u < 0 && (c = !0, u = s + 1), h > -1 && (t.codePointAt(s) === i.codePointAt(h--) ? h < 0 && (a = s) : (h = -1, a = u));
  return r === a ? a = u : a < 0 && (a = t.length), t.slice(r, a);
}
function SM(t) {
  if (Ul(t), t.length === 0)
    return ".";
  let i = -1, r = t.length, a;
  for (; --r; )
    if (t.codePointAt(r) === 47) {
      if (a) {
        i = r;
        break;
      }
    } else a || (a = !0);
  return i < 0 ? t.codePointAt(0) === 47 ? "/" : "." : i === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, i);
}
function TM(t) {
  Ul(t);
  let i = t.length, r = -1, a = 0, s = -1, c = 0, u;
  for (; i--; ) {
    const h = t.codePointAt(i);
    if (h === 47) {
      if (u) {
        a = i + 1;
        break;
      }
      continue;
    }
    r < 0 && (u = !0, r = i + 1), h === 46 ? s < 0 ? s = i : c !== 1 && (c = 1) : s > -1 && (c = -1);
  }
  return s < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && s === r - 1 && s === a + 1 ? "" : t.slice(s, r);
}
function kM(...t) {
  let i = -1, r;
  for (; ++i < t.length; )
    Ul(t[i]), t[i] && (r = r === void 0 ? t[i] : r + "/" + t[i]);
  return r === void 0 ? "." : EM(r);
}
function EM(t) {
  Ul(t);
  const i = t.codePointAt(0) === 47;
  let r = AM(t, !i);
  return r.length === 0 && !i && (r = "."), r.length > 0 && t.codePointAt(t.length - 1) === 47 && (r += "/"), i ? "/" + r : r;
}
function AM(t, i) {
  let r = "", a = 0, s = -1, c = 0, u = -1, h, d;
  for (; ++u <= t.length; ) {
    if (u < t.length)
      h = t.codePointAt(u);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(s === u - 1 || c === 1)) if (s !== u - 1 && c === 2) {
        if (r.length < 2 || a !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (d = r.lastIndexOf("/"), d !== r.length - 1) {
              d < 0 ? (r = "", a = 0) : (r = r.slice(0, d), a = r.length - 1 - r.lastIndexOf("/")), s = u, c = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", a = 0, s = u, c = 0;
            continue;
          }
        }
        i && (r = r.length > 0 ? r + "/.." : "..", a = 2);
      } else
        r.length > 0 ? r += "/" + t.slice(s + 1, u) : r = t.slice(s + 1, u), a = u - s - 1;
      s = u, c = 0;
    } else h === 46 && c > -1 ? c++ : c = -1;
  }
  return r;
}
function Ul(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const DM = { cwd: CM };
function CM() {
  return "/";
}
function mh(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function zM(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!mh(t)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (t.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return MM(t);
}
function MM(t) {
  if (t.hostname !== "") {
    const a = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw a.code = "ERR_INVALID_FILE_URL_HOST", a;
  }
  const i = t.pathname;
  let r = -1;
  for (; ++r < i.length; )
    if (i.codePointAt(r) === 37 && i.codePointAt(r + 1) === 50) {
      const a = i.codePointAt(r + 2);
      if (a === 70 || a === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(i);
}
const Tf = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class K1 {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(i) {
    let r;
    i ? mh(i) ? r = { path: i } : typeof i == "string" || RM(i) ? r = { value: i } : r = i : r = {}, this.cwd = "cwd" in r ? "" : DM.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let a = -1;
    for (; ++a < Tf.length; ) {
      const c = Tf[a];
      c in r && r[c] !== void 0 && r[c] !== null && (this[c] = c === "history" ? [...r[c]] : r[c]);
    }
    let s;
    for (s in r)
      Tf.includes(s) || (this[s] = r[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? kn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(i) {
    Ef(i, "basename"), kf(i, "basename"), this.path = kn.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? kn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(i) {
    iv(this.basename, "dirname"), this.path = kn.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? kn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(i) {
    if (kf(i, "extname"), iv(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = kn.join(this.dirname, this.stem + (i || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(i) {
    mh(i) && (i = zM(i)), Ef(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? kn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(i) {
    Ef(i, "stem"), kf(i, "stem"), this.path = kn.join(this.dirname || "", i + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(i, r, a) {
    const s = this.message(i, r, a);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(i, r, a) {
    const s = this.message(i, r, a);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(i, r, a) {
    const s = new Te(
      // @ts-expect-error: the overloads are fine.
      i,
      r,
      a
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(i) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value);
  }
}
function kf(t, i) {
  if (t && t.includes(kn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + kn.sep + "`"
    );
}
function Ef(t, i) {
  if (!t)
    throw new Error("`" + i + "` cannot be empty");
}
function iv(t, i) {
  if (!t)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function RM(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const OM = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(t) {
    const a = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = a[t], c = function() {
      return s.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, a), c;
  }
), _M = {}.hasOwnProperty;
class fd extends OM {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = bM();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const i = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new fd()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const a = this.attachers[r];
      i.use(...a);
    }
    return i.data(Sf(!0, {}, this.namespace)), i;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(i, r) {
    return typeof i == "string" ? arguments.length === 2 ? (Cf("data", this.frozen), this.namespace[i] = r, this) : _M.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Cf("data", this.frozen), this.namespace = i, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const i = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...a] = this.attachers[this.freezeIndex];
      if (a[0] === !1)
        continue;
      a[0] === !0 && (a[0] = void 0);
      const s = r.call(i, ...a);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(i) {
    this.freeze();
    const r = ls(i), a = this.parser || this.Parser;
    return Af("parse", a), a(String(r), r);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(i, r) {
    const a = this;
    return this.freeze(), Af("process", this.parser || this.Parser), Df("process", this.compiler || this.Compiler), r ? s(void 0, r) : new Promise(s);
    function s(c, u) {
      const h = ls(i), d = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        a.parse(h)
      );
      a.run(d, h, function(g, y, b) {
        if (g || !y || !b)
          return p(g);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), S = a.stringify(v, b);
        BM(S) ? b.value = S : b.result = S, p(
          g,
          /** @type {VFileWithOutput<CompileResult>} */
          b
        );
      });
      function p(g, y) {
        g || !y ? u(g) : c ? c(y) : r(void 0, y);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(i) {
    let r = !1, a;
    return this.freeze(), Af("processSync", this.parser || this.Parser), Df("processSync", this.compiler || this.Compiler), this.process(i, s), av("processSync", "process", r), a;
    function s(c, u) {
      r = !0, ev(c), a = u;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(i, r, a) {
    rv(i), this.freeze();
    const s = this.transformers;
    return !a && typeof r == "function" && (a = r, r = void 0), a ? c(void 0, a) : new Promise(c);
    function c(u, h) {
      const d = ls(r);
      s.run(i, d, p);
      function p(g, y, b) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || i
        );
        g ? h(g) : u ? u(v) : a(void 0, v, b);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(i, r) {
    let a = !1, s;
    return this.run(i, r, c), av("runSync", "run", a), s;
    function c(u, h) {
      ev(u), s = h, a = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(i, r) {
    this.freeze();
    const a = ls(r), s = this.compiler || this.Compiler;
    return Df("stringify", s), rv(i), s(i, a);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(i, ...r) {
    const a = this.attachers, s = this.namespace;
    if (Cf("use", this.frozen), i != null) if (typeof i == "function")
      d(i, r);
    else if (typeof i == "object")
      Array.isArray(i) ? h(i) : u(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function c(p) {
      if (typeof p == "function")
        d(p, []);
      else if (typeof p == "object")
        if (Array.isArray(p)) {
          const [g, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            p
          );
          d(g, y);
        } else
          u(p);
      else
        throw new TypeError("Expected usable value, not `" + p + "`");
    }
    function u(p) {
      if (!("plugins" in p) && !("settings" in p))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      h(p.plugins), p.settings && (s.settings = Sf(!0, s.settings, p.settings));
    }
    function h(p) {
      let g = -1;
      if (p != null) if (Array.isArray(p))
        for (; ++g < p.length; ) {
          const y = p[g];
          c(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + p + "`");
    }
    function d(p, g) {
      let y = -1, b = -1;
      for (; ++y < a.length; )
        if (a[y][0] === p) {
          b = y;
          break;
        }
      if (b === -1)
        a.push([p, ...g]);
      else if (g.length > 0) {
        let [v, ...S] = g;
        const A = a[b][1];
        ph(A) && ph(v) && (v = Sf(!0, A, v)), a[b] = [p, v, ...S];
      }
    }
  }
}
const NM = new fd().freeze();
function Af(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Df(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Cf(t, i) {
  if (i)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function rv(t) {
  if (!ph(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function av(t, i, r) {
  if (!r)
    throw new Error(
      "`" + t + "` finished async. Use `" + i + "` instead"
    );
}
function ls(t) {
  return LM(t) ? t : new K1(t);
}
function LM(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function BM(t) {
  return typeof t == "string" || VM(t);
}
function VM(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const UM = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", lv = [], ov = { allowDangerousHtml: !0 }, jM = /^(https?|ircs?|mailto|xmpp)$/i, HM = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function PM(t) {
  const i = qM(t), r = YM(t);
  return FM(i.runSync(i.parse(r), r), t);
}
function qM(t) {
  const i = t.rehypePlugins || lv, r = t.remarkPlugins || lv, a = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...ov } : ov;
  return NM().use(Sz).use(r).use(gM, a).use(i);
}
function YM(t) {
  const i = t.children || "", r = new K1();
  return typeof i == "string" && (r.value = i), r;
}
function FM(t, i) {
  const r = i.allowedElements, a = i.allowElement, s = i.components, c = i.disallowedElements, u = i.skipHtml, h = i.unwrapDisallowed, d = i.urlTransform || XM;
  for (const g of HM)
    Object.hasOwn(i, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + UM + g.id, void 0);
  return cd(t, p), aD(t, {
    Fragment: ft.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: ft.jsx,
    jsxs: ft.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function p(g, y, b) {
    if (g.type === "raw" && b && typeof y == "number")
      return u ? b.children.splice(y, 1) : b.children[y] = { type: "text", value: g.value }, y;
    if (g.type === "element") {
      let v;
      for (v in vf)
        if (Object.hasOwn(vf, v) && Object.hasOwn(g.properties, v)) {
          const S = g.properties[v], A = vf[v];
          (A === null || A.includes(g.tagName)) && (g.properties[v] = d(String(S || ""), v, g));
        }
    }
    if (g.type === "element") {
      let v = r ? !r.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if (!v && a && typeof y == "number" && (v = !a(g, y, b)), v && b && typeof y == "number")
        return h && g.children ? b.children.splice(y, 1, ...g.children) : b.children.splice(y, 1), y;
    }
  }
}
function XM(t) {
  const i = t.indexOf(":"), r = t.indexOf("?"), a = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || r !== -1 && i > r || a !== -1 && i > a || // It is a protocol, it should be allowed.
    jM.test(t.slice(0, i)) ? t : ""
  );
}
function Z1(t) {
  var i, r, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (i = 0; i < s; i++) t[i] && (r = Z1(t[i])) && (a && (a += " "), a += r);
  } else for (r in t) t[r] && (a && (a += " "), a += r);
  return a;
}
function Es() {
  for (var t, i, r = 0, a = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (i = Z1(t)) && (a && (a += " "), a += i);
  return a;
}
function sv(t, i) {
  const r = String(t);
  if (typeof i != "string")
    throw new TypeError("Expected character");
  let a = 0, s = r.indexOf(i);
  for (; s !== -1; )
    a++, s = r.indexOf(i, s + i.length);
  return a;
}
function GM(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function IM(t, i, r) {
  const s = Ls((r || {}).ignore || []), c = QM(i);
  let u = -1;
  for (; ++u < c.length; )
    Q1(t, "text", h);
  function h(p, g) {
    let y = -1, b;
    for (; ++y < g.length; ) {
      const v = g[y], S = b ? b.children : void 0;
      if (s(
        v,
        S ? S.indexOf(v) : void 0,
        b
      ))
        return;
      b = v;
    }
    if (b)
      return d(p, g);
  }
  function d(p, g) {
    const y = g[g.length - 1], b = c[u][0], v = c[u][1];
    let S = 0;
    const M = y.children.indexOf(p);
    let k = !1, C = [];
    b.lastIndex = 0;
    let D = b.exec(p.value);
    for (; D; ) {
      const V = D.index, _ = {
        index: D.index,
        input: D.input,
        stack: [...g, p]
      };
      let O = v(...D, _);
      if (typeof O == "string" && (O = O.length > 0 ? { type: "text", value: O } : void 0), O === !1 ? b.lastIndex = V + 1 : (S !== V && C.push({
        type: "text",
        value: p.value.slice(S, V)
      }), Array.isArray(O) ? C.push(...O) : O && C.push(O), S = V + D[0].length, k = !0), !b.global)
        break;
      D = b.exec(p.value);
    }
    return k ? (S < p.value.length && C.push({ type: "text", value: p.value.slice(S) }), y.children.splice(M, 1, ...C)) : C = [p], M + C.length;
  }
}
function QM(t) {
  const i = [];
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const r = !t[0] || Array.isArray(t[0]) ? t : [t];
  let a = -1;
  for (; ++a < r.length; ) {
    const s = r[a];
    i.push([KM(s[0]), ZM(s[1])]);
  }
  return i;
}
function KM(t) {
  return typeof t == "string" ? new RegExp(GM(t), "g") : t;
}
function ZM(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const zf = "phrasing", Mf = ["autolink", "link", "image", "label"];
function WM() {
  return {
    transforms: [rR],
    enter: {
      literalAutolink: $M,
      literalAutolinkEmail: Rf,
      literalAutolinkHttp: Rf,
      literalAutolinkWww: Rf
    },
    exit: {
      literalAutolink: iR,
      literalAutolinkEmail: nR,
      literalAutolinkHttp: tR,
      literalAutolinkWww: eR
    }
  };
}
function JM() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: zf,
        notInConstruct: Mf
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: zf,
        notInConstruct: Mf
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: zf,
        notInConstruct: Mf
      }
    ]
  };
}
function $M(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Rf(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function tR(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function eR(t) {
  this.config.exit.data.call(this, t);
  const i = this.stack[this.stack.length - 1];
  i.type, i.url = "http://" + this.sliceSerialize(t);
}
function nR(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function iR(t) {
  this.exit(t);
}
function rR(t) {
  IM(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, aR],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), lR]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function aR(t, i, r, a, s) {
  let c = "";
  if (!W1(s) || (/^w/i.test(i) && (r = i + r, i = "", c = "http://"), !oR(r)))
    return !1;
  const u = sR(r + a);
  if (!u[0]) return !1;
  const h = {
    type: "link",
    title: null,
    url: c + i + u[0],
    children: [{ type: "text", value: i + u[0] }]
  };
  return u[1] ? [h, { type: "text", value: u[1] }] : h;
}
function lR(t, i, r, a) {
  return (
    // Not an expected previous character.
    !W1(a, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(r) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + i + "@" + r,
      children: [{ type: "text", value: i + "@" + r }]
    }
  );
}
function oR(t) {
  const i = t.split(".");
  return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])));
}
function sR(t) {
  const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!i)
    return [t, void 0];
  t = t.slice(0, i.index);
  let r = i[0], a = r.indexOf(")");
  const s = sv(t, "(");
  let c = sv(t, ")");
  for (; a !== -1 && s > c; )
    t += r.slice(0, a + 1), r = r.slice(a + 1), a = r.indexOf(")"), c++;
  return [t, r];
}
function W1(t, i) {
  const r = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || Zi(r) || Os(r)) && // If it’s an email, the previous character should not be a slash.
  (!i || r !== 47);
}
J1.peek = yR;
function uR() {
  this.buffer();
}
function cR(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function fR() {
  this.buffer();
}
function hR(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function dR(t) {
  const i = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = mn(
    this.sliceSerialize(t)
  ).toLowerCase(), r.label = i;
}
function pR(t) {
  this.exit(t);
}
function mR(t) {
  const i = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = mn(
    this.sliceSerialize(t)
  ).toLowerCase(), r.label = i;
}
function gR(t) {
  this.exit(t);
}
function yR() {
  return "[";
}
function J1(t, i, r, a) {
  const s = r.createTracker(a);
  let c = s.move("[^");
  const u = r.enter("footnoteReference"), h = r.enter("reference");
  return c += s.move(
    r.safe(r.associationId(t), { after: "]", before: c })
  ), h(), u(), c += s.move("]"), c;
}
function vR() {
  return {
    enter: {
      gfmFootnoteCallString: uR,
      gfmFootnoteCall: cR,
      gfmFootnoteDefinitionLabelString: fR,
      gfmFootnoteDefinition: hR
    },
    exit: {
      gfmFootnoteCallString: dR,
      gfmFootnoteCall: pR,
      gfmFootnoteDefinitionLabelString: mR,
      gfmFootnoteDefinition: gR
    }
  };
}
function bR(t) {
  let i = !1;
  return t && t.firstLineBlank && (i = !0), {
    handlers: { footnoteDefinition: r, footnoteReference: J1 },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function r(a, s, c, u) {
    const h = c.createTracker(u);
    let d = h.move("[^");
    const p = c.enter("footnoteDefinition"), g = c.enter("label");
    return d += h.move(
      c.safe(c.associationId(a), { before: d, after: "]" })
    ), g(), d += h.move("]:"), a.children && a.children.length > 0 && (h.shift(4), d += h.move(
      (i ? `
` : " ") + c.indentLines(
        c.containerFlow(a, h.current()),
        i ? $1 : wR
      )
    )), p(), d;
  }
}
function wR(t, i, r) {
  return i === 0 ? t : $1(t, i, r);
}
function $1(t, i, r) {
  return (r ? "" : "    ") + t;
}
const xR = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
tw.peek = AR;
function SR() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: kR },
    exit: { strikethrough: ER }
  };
}
function TR() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: xR
      }
    ],
    handlers: { delete: tw }
  };
}
function kR(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function ER(t) {
  this.exit(t);
}
function tw(t, i, r, a) {
  const s = r.createTracker(a), c = r.enter("strikethrough");
  let u = s.move("~~");
  return u += r.containerPhrasing(t, {
    ...s.current(),
    before: u,
    after: "~"
  }), u += s.move("~~"), c(), u;
}
function AR() {
  return "~";
}
function DR(t) {
  return t.length;
}
function CR(t, i) {
  const r = i || {}, a = (r.align || []).concat(), s = r.stringLength || DR, c = [], u = [], h = [], d = [];
  let p = 0, g = -1;
  for (; ++g < t.length; ) {
    const A = [], M = [];
    let k = -1;
    for (t[g].length > p && (p = t[g].length); ++k < t[g].length; ) {
      const C = zR(t[g][k]);
      if (r.alignDelimiters !== !1) {
        const D = s(C);
        M[k] = D, (d[k] === void 0 || D > d[k]) && (d[k] = D);
      }
      A.push(C);
    }
    u[g] = A, h[g] = M;
  }
  let y = -1;
  if (typeof a == "object" && "length" in a)
    for (; ++y < p; )
      c[y] = uv(a[y]);
  else {
    const A = uv(a);
    for (; ++y < p; )
      c[y] = A;
  }
  y = -1;
  const b = [], v = [];
  for (; ++y < p; ) {
    const A = c[y];
    let M = "", k = "";
    A === 99 ? (M = ":", k = ":") : A === 108 ? M = ":" : A === 114 && (k = ":");
    let C = r.alignDelimiters === !1 ? 1 : Math.max(
      1,
      d[y] - M.length - k.length
    );
    const D = M + "-".repeat(C) + k;
    r.alignDelimiters !== !1 && (C = M.length + C + k.length, C > d[y] && (d[y] = C), v[y] = C), b[y] = D;
  }
  u.splice(1, 0, b), h.splice(1, 0, v), g = -1;
  const S = [];
  for (; ++g < u.length; ) {
    const A = u[g], M = h[g];
    y = -1;
    const k = [];
    for (; ++y < p; ) {
      const C = A[y] || "";
      let D = "", V = "";
      if (r.alignDelimiters !== !1) {
        const _ = d[y] - (M[y] || 0), O = c[y];
        O === 114 ? D = " ".repeat(_) : O === 99 ? _ % 2 ? (D = " ".repeat(_ / 2 + 0.5), V = " ".repeat(_ / 2 - 0.5)) : (D = " ".repeat(_ / 2), V = D) : V = " ".repeat(_);
      }
      r.delimiterStart !== !1 && !y && k.push("|"), r.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(r.alignDelimiters === !1 && C === "") && (r.delimiterStart !== !1 || y) && k.push(" "), r.alignDelimiters !== !1 && k.push(D), k.push(C), r.alignDelimiters !== !1 && k.push(V), r.padding !== !1 && k.push(" "), (r.delimiterEnd !== !1 || y !== p - 1) && k.push("|");
    }
    S.push(
      r.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return S.join(`
`);
}
function zR(t) {
  return t == null ? "" : String(t);
}
function uv(t) {
  const i = typeof t == "string" ? t.codePointAt(0) : 0;
  return i === 67 || i === 99 ? 99 : i === 76 || i === 108 ? 108 : i === 82 || i === 114 ? 114 : 0;
}
function MR(t, i, r, a) {
  const s = r.enter("blockquote"), c = r.createTracker(a);
  c.move("> "), c.shift(2);
  const u = r.indentLines(
    r.containerFlow(t, c.current()),
    RR
  );
  return s(), u;
}
function RR(t, i, r) {
  return ">" + (r ? "" : " ") + t;
}
function OR(t, i) {
  return cv(t, i.inConstruct, !0) && !cv(t, i.notInConstruct, !1);
}
function cv(t, i, r) {
  if (typeof i == "string" && (i = [i]), !i || i.length === 0)
    return r;
  let a = -1;
  for (; ++a < i.length; )
    if (t.includes(i[a]))
      return !0;
  return !1;
}
function fv(t, i, r, a) {
  let s = -1;
  for (; ++s < r.unsafe.length; )
    if (r.unsafe[s].character === `
` && OR(r.stack, r.unsafe[s]))
      return /[ \t]/.test(a.before) ? "" : " ";
  return `\\
`;
}
function _R(t, i) {
  const r = String(t);
  let a = r.indexOf(i), s = a, c = 0, u = 0;
  if (typeof i != "string")
    throw new TypeError("Expected substring");
  for (; a !== -1; )
    a === s ? ++c > u && (u = c) : c = 1, s = a + i.length, a = r.indexOf(i, s);
  return u;
}
function NR(t, i) {
  return !!(i.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value));
}
function LR(t) {
  const i = t.options.fence || "`";
  if (i !== "`" && i !== "~")
    throw new Error(
      "Cannot serialize code with `" + i + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return i;
}
function BR(t, i, r, a) {
  const s = LR(r), c = t.value || "", u = s === "`" ? "GraveAccent" : "Tilde";
  if (NR(t, r)) {
    const y = r.enter("codeIndented"), b = r.indentLines(c, VR);
    return y(), b;
  }
  const h = r.createTracker(a), d = s.repeat(Math.max(_R(c, s) + 1, 3)), p = r.enter("codeFenced");
  let g = h.move(d);
  if (t.lang) {
    const y = r.enter(`codeFencedLang${u}`);
    g += h.move(
      r.safe(t.lang, {
        before: g,
        after: " ",
        encode: ["`"],
        ...h.current()
      })
    ), y();
  }
  if (t.lang && t.meta) {
    const y = r.enter(`codeFencedMeta${u}`);
    g += h.move(" "), g += h.move(
      r.safe(t.meta, {
        before: g,
        after: `
`,
        encode: ["`"],
        ...h.current()
      })
    ), y();
  }
  return g += h.move(`
`), c && (g += h.move(c + `
`)), g += h.move(d), p(), g;
}
function VR(t, i, r) {
  return (r ? "" : "    ") + t;
}
function hd(t) {
  const i = t.options.quote || '"';
  if (i !== '"' && i !== "'")
    throw new Error(
      "Cannot serialize title with `" + i + "` for `options.quote`, expected `\"`, or `'`"
    );
  return i;
}
function UR(t, i, r, a) {
  const s = hd(r), c = s === '"' ? "Quote" : "Apostrophe", u = r.enter("definition");
  let h = r.enter("label");
  const d = r.createTracker(a);
  let p = d.move("[");
  return p += d.move(
    r.safe(r.associationId(t), {
      before: p,
      after: "]",
      ...d.current()
    })
  ), p += d.move("]: "), h(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (h = r.enter("destinationLiteral"), p += d.move("<"), p += d.move(
    r.safe(t.url, { before: p, after: ">", ...d.current() })
  ), p += d.move(">")) : (h = r.enter("destinationRaw"), p += d.move(
    r.safe(t.url, {
      before: p,
      after: t.title ? " " : `
`,
      ...d.current()
    })
  )), h(), t.title && (h = r.enter(`title${c}`), p += d.move(" " + s), p += d.move(
    r.safe(t.title, {
      before: p,
      after: s,
      ...d.current()
    })
  ), p += d.move(s), h()), u(), p;
}
function jR(t) {
  const i = t.options.emphasis || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + i + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return i;
}
function Ml(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function As(t, i, r) {
  const a = Zr(t), s = Zr(i);
  return a === void 0 ? s === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    r === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : a === 1 ? s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
ew.peek = HR;
function ew(t, i, r, a) {
  const s = jR(r), c = r.enter("emphasis"), u = r.createTracker(a), h = u.move(s);
  let d = u.move(
    r.containerPhrasing(t, {
      after: s,
      before: h,
      ...u.current()
    })
  );
  const p = d.charCodeAt(0), g = As(
    a.before.charCodeAt(a.before.length - 1),
    p,
    s
  );
  g.inside && (d = Ml(p) + d.slice(1));
  const y = d.charCodeAt(d.length - 1), b = As(a.after.charCodeAt(0), y, s);
  b.inside && (d = d.slice(0, -1) + Ml(y));
  const v = u.move(s);
  return c(), r.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: g.outside
  }, h + d + v;
}
function HR(t, i, r) {
  return r.options.emphasis || "*";
}
function PR(t, i) {
  let r = !1;
  return cd(t, function(a) {
    if ("value" in a && /\r?\n|\r/.test(a.value) || a.type === "break")
      return r = !0, hh;
  }), !!((!t.depth || t.depth < 3) && id(t) && (i.options.setext || r));
}
function qR(t, i, r, a) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), c = r.createTracker(a);
  if (PR(t, r)) {
    const g = r.enter("headingSetext"), y = r.enter("phrasing"), b = r.containerPhrasing(t, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return y(), g(), b + `
` + (s === 1 ? "=" : "-").repeat(
      // The whole size…
      b.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(b.lastIndexOf("\r"), b.lastIndexOf(`
`)) + 1)
    );
  }
  const u = "#".repeat(s), h = r.enter("headingAtx"), d = r.enter("phrasing");
  c.move(u + " ");
  let p = r.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  return /^[\t ]/.test(p) && (p = Ml(p.charCodeAt(0)) + p.slice(1)), p = p ? u + " " + p : u, r.options.closeAtx && (p += " " + u), d(), h(), p;
}
nw.peek = YR;
function nw(t) {
  return t.value || "";
}
function YR() {
  return "<";
}
iw.peek = FR;
function iw(t, i, r, a) {
  const s = hd(r), c = s === '"' ? "Quote" : "Apostrophe", u = r.enter("image");
  let h = r.enter("label");
  const d = r.createTracker(a);
  let p = d.move("![");
  return p += d.move(
    r.safe(t.alt, { before: p, after: "]", ...d.current() })
  ), p += d.move("]("), h(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (h = r.enter("destinationLiteral"), p += d.move("<"), p += d.move(
    r.safe(t.url, { before: p, after: ">", ...d.current() })
  ), p += d.move(">")) : (h = r.enter("destinationRaw"), p += d.move(
    r.safe(t.url, {
      before: p,
      after: t.title ? " " : ")",
      ...d.current()
    })
  )), h(), t.title && (h = r.enter(`title${c}`), p += d.move(" " + s), p += d.move(
    r.safe(t.title, {
      before: p,
      after: s,
      ...d.current()
    })
  ), p += d.move(s), h()), p += d.move(")"), u(), p;
}
function FR() {
  return "!";
}
rw.peek = XR;
function rw(t, i, r, a) {
  const s = t.referenceType, c = r.enter("imageReference");
  let u = r.enter("label");
  const h = r.createTracker(a);
  let d = h.move("![");
  const p = r.safe(t.alt, {
    before: d,
    after: "]",
    ...h.current()
  });
  d += h.move(p + "]["), u();
  const g = r.stack;
  r.stack = [], u = r.enter("reference");
  const y = r.safe(r.associationId(t), {
    before: d,
    after: "]",
    ...h.current()
  });
  return u(), r.stack = g, c(), s === "full" || !p || p !== y ? d += h.move(y + "]") : s === "shortcut" ? d = d.slice(0, -1) : d += h.move("]"), d;
}
function XR() {
  return "!";
}
aw.peek = GR;
function aw(t, i, r) {
  let a = t.value || "", s = "`", c = -1;
  for (; new RegExp("(^|[^`])" + s + "([^`]|$)").test(a); )
    s += "`";
  for (/[^ \r\n]/.test(a) && (/^[ \r\n]/.test(a) && /[ \r\n]$/.test(a) || /^`|`$/.test(a)) && (a = " " + a + " "); ++c < r.unsafe.length; ) {
    const u = r.unsafe[c], h = r.compilePattern(u);
    let d;
    if (u.atBreak)
      for (; d = h.exec(a); ) {
        let p = d.index;
        a.charCodeAt(p) === 10 && a.charCodeAt(p - 1) === 13 && p--, a = a.slice(0, p) + " " + a.slice(d.index + 1);
      }
  }
  return s + a + s;
}
function GR() {
  return "`";
}
function lw(t, i) {
  const r = id(t);
  return !!(!i.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (r === t.url || "mailto:" + r === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
ow.peek = IR;
function ow(t, i, r, a) {
  const s = hd(r), c = s === '"' ? "Quote" : "Apostrophe", u = r.createTracker(a);
  let h, d;
  if (lw(t, r)) {
    const g = r.stack;
    r.stack = [], h = r.enter("autolink");
    let y = u.move("<");
    return y += u.move(
      r.containerPhrasing(t, {
        before: y,
        after: ">",
        ...u.current()
      })
    ), y += u.move(">"), h(), r.stack = g, y;
  }
  h = r.enter("link"), d = r.enter("label");
  let p = u.move("[");
  return p += u.move(
    r.containerPhrasing(t, {
      before: p,
      after: "](",
      ...u.current()
    })
  ), p += u.move("]("), d(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (d = r.enter("destinationLiteral"), p += u.move("<"), p += u.move(
    r.safe(t.url, { before: p, after: ">", ...u.current() })
  ), p += u.move(">")) : (d = r.enter("destinationRaw"), p += u.move(
    r.safe(t.url, {
      before: p,
      after: t.title ? " " : ")",
      ...u.current()
    })
  )), d(), t.title && (d = r.enter(`title${c}`), p += u.move(" " + s), p += u.move(
    r.safe(t.title, {
      before: p,
      after: s,
      ...u.current()
    })
  ), p += u.move(s), d()), p += u.move(")"), h(), p;
}
function IR(t, i, r) {
  return lw(t, r) ? "<" : "[";
}
sw.peek = QR;
function sw(t, i, r, a) {
  const s = t.referenceType, c = r.enter("linkReference");
  let u = r.enter("label");
  const h = r.createTracker(a);
  let d = h.move("[");
  const p = r.containerPhrasing(t, {
    before: d,
    after: "]",
    ...h.current()
  });
  d += h.move(p + "]["), u();
  const g = r.stack;
  r.stack = [], u = r.enter("reference");
  const y = r.safe(r.associationId(t), {
    before: d,
    after: "]",
    ...h.current()
  });
  return u(), r.stack = g, c(), s === "full" || !p || p !== y ? d += h.move(y + "]") : s === "shortcut" ? d = d.slice(0, -1) : d += h.move("]"), d;
}
function QR() {
  return "[";
}
function dd(t) {
  const i = t.options.bullet || "*";
  if (i !== "*" && i !== "+" && i !== "-")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return i;
}
function KR(t) {
  const i = dd(t), r = t.options.bulletOther;
  if (!r)
    return i === "*" ? "-" : "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (r === i)
    throw new Error(
      "Expected `bullet` (`" + i + "`) and `bulletOther` (`" + r + "`) to be different"
    );
  return r;
}
function ZR(t) {
  const i = t.options.bulletOrdered || ".";
  if (i !== "." && i !== ")")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return i;
}
function uw(t) {
  const i = t.options.rule || "*";
  if (i !== "*" && i !== "-" && i !== "_")
    throw new Error(
      "Cannot serialize rules with `" + i + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return i;
}
function WR(t, i, r, a) {
  const s = r.enter("list"), c = r.bulletCurrent;
  let u = t.ordered ? ZR(r) : dd(r);
  const h = t.ordered ? u === "." ? ")" : "." : KR(r);
  let d = i && r.bulletLastUsed ? u === r.bulletLastUsed : !1;
  if (!t.ordered) {
    const g = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (u === "*" || u === "-") && // Empty first list item:
      g && (!g.children || !g.children[0]) && // Directly in two other list items:
      r.stack[r.stack.length - 1] === "list" && r.stack[r.stack.length - 2] === "listItem" && r.stack[r.stack.length - 3] === "list" && r.stack[r.stack.length - 4] === "listItem" && // That are each the first child.
      r.indexStack[r.indexStack.length - 1] === 0 && r.indexStack[r.indexStack.length - 2] === 0 && r.indexStack[r.indexStack.length - 3] === 0 && (d = !0), uw(r) === u && g
    ) {
      let y = -1;
      for (; ++y < t.children.length; ) {
        const b = t.children[y];
        if (b && b.type === "listItem" && b.children && b.children[0] && b.children[0].type === "thematicBreak") {
          d = !0;
          break;
        }
      }
    }
  }
  d && (u = h), r.bulletCurrent = u;
  const p = r.containerFlow(t, a);
  return r.bulletLastUsed = u, r.bulletCurrent = c, s(), p;
}
function JR(t) {
  const i = t.options.listItemIndent || "one";
  if (i !== "tab" && i !== "one" && i !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return i;
}
function $R(t, i, r, a) {
  const s = JR(r);
  let c = r.bulletCurrent || dd(r);
  i && i.type === "list" && i.ordered && (c = (typeof i.start == "number" && i.start > -1 ? i.start : 1) + (r.options.incrementListMarker === !1 ? 0 : i.children.indexOf(t)) + c);
  let u = c.length + 1;
  (s === "tab" || s === "mixed" && (i && i.type === "list" && i.spread || t.spread)) && (u = Math.ceil(u / 4) * 4);
  const h = r.createTracker(a);
  h.move(c + " ".repeat(u - c.length)), h.shift(u);
  const d = r.enter("listItem"), p = r.indentLines(
    r.containerFlow(t, h.current()),
    g
  );
  return d(), p;
  function g(y, b, v) {
    return b ? (v ? "" : " ".repeat(u)) + y : (v ? c : c + " ".repeat(u - c.length)) + y;
  }
}
function tO(t, i, r, a) {
  const s = r.enter("paragraph"), c = r.enter("phrasing"), u = r.containerPhrasing(t, a);
  return c(), s(), u;
}
const eO = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ls([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function nO(t, i, r, a) {
  return (t.children.some(function(u) {
    return eO(u);
  }) ? r.containerPhrasing : r.containerFlow).call(r, t, a);
}
function iO(t) {
  const i = t.options.strong || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize strong with `" + i + "` for `options.strong`, expected `*`, or `_`"
    );
  return i;
}
cw.peek = rO;
function cw(t, i, r, a) {
  const s = iO(r), c = r.enter("strong"), u = r.createTracker(a), h = u.move(s + s);
  let d = u.move(
    r.containerPhrasing(t, {
      after: s,
      before: h,
      ...u.current()
    })
  );
  const p = d.charCodeAt(0), g = As(
    a.before.charCodeAt(a.before.length - 1),
    p,
    s
  );
  g.inside && (d = Ml(p) + d.slice(1));
  const y = d.charCodeAt(d.length - 1), b = As(a.after.charCodeAt(0), y, s);
  b.inside && (d = d.slice(0, -1) + Ml(y));
  const v = u.move(s + s);
  return c(), r.attentionEncodeSurroundingInfo = {
    after: b.outside,
    before: g.outside
  }, h + d + v;
}
function rO(t, i, r) {
  return r.options.strong || "*";
}
function aO(t, i, r, a) {
  return r.safe(t.value, a);
}
function lO(t) {
  const i = t.options.ruleRepetition || 3;
  if (i < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + i + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return i;
}
function oO(t, i, r) {
  const a = (uw(r) + (r.options.ruleSpaces ? " " : "")).repeat(lO(r));
  return r.options.ruleSpaces ? a.slice(0, -1) : a;
}
const fw = {
  blockquote: MR,
  break: fv,
  code: BR,
  definition: UR,
  emphasis: ew,
  hardBreak: fv,
  heading: qR,
  html: nw,
  image: iw,
  imageReference: rw,
  inlineCode: aw,
  link: ow,
  linkReference: sw,
  list: WR,
  listItem: $R,
  paragraph: tO,
  root: nO,
  strong: cw,
  text: aO,
  thematicBreak: oO
};
function sO() {
  return {
    enter: {
      table: uO,
      tableData: hv,
      tableHeader: hv,
      tableRow: fO
    },
    exit: {
      codeText: hO,
      table: cO,
      tableData: Of,
      tableHeader: Of,
      tableRow: Of
    }
  };
}
function uO(t) {
  const i = t._align;
  this.enter(
    {
      type: "table",
      align: i.map(function(r) {
        return r === "none" ? null : r;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function cO(t) {
  this.exit(t), this.data.inTable = void 0;
}
function fO(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Of(t) {
  this.exit(t);
}
function hv(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function hO(t) {
  let i = this.resume();
  this.data.inTable && (i = i.replace(/\\([\\|])/g, dO));
  const r = this.stack[this.stack.length - 1];
  r.type, r.value = i, this.exit(t);
}
function dO(t, i) {
  return i === "|" ? i : t;
}
function pO(t) {
  const i = t || {}, r = i.tableCellPadding, a = i.tablePipeAlign, s = i.stringLength, c = r ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: b,
      table: u,
      tableCell: d,
      tableRow: h
    }
  };
  function u(v, S, A, M) {
    return p(g(v, A, M), v.align);
  }
  function h(v, S, A, M) {
    const k = y(v, A, M), C = p([k]);
    return C.slice(0, C.indexOf(`
`));
  }
  function d(v, S, A, M) {
    const k = A.enter("tableCell"), C = A.enter("phrasing"), D = A.containerPhrasing(v, {
      ...M,
      before: c,
      after: c
    });
    return C(), k(), D;
  }
  function p(v, S) {
    return CR(v, {
      align: S,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function g(v, S, A) {
    const M = v.children;
    let k = -1;
    const C = [], D = S.enter("table");
    for (; ++k < M.length; )
      C[k] = y(M[k], S, A);
    return D(), C;
  }
  function y(v, S, A) {
    const M = v.children;
    let k = -1;
    const C = [], D = S.enter("tableRow");
    for (; ++k < M.length; )
      C[k] = d(M[k], v, S, A);
    return D(), C;
  }
  function b(v, S, A) {
    let M = fw.inlineCode(v, S, A);
    return A.stack.includes("tableCell") && (M = M.replace(/\|/g, "\\$&")), M;
  }
}
function mO() {
  return {
    exit: {
      taskListCheckValueChecked: dv,
      taskListCheckValueUnchecked: dv,
      paragraph: yO
    }
  };
}
function gO() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: vO }
  };
}
function dv(t) {
  const i = this.stack[this.stack.length - 2];
  i.type, i.checked = t.type === "taskListCheckValueChecked";
}
function yO(t) {
  const i = this.stack[this.stack.length - 2];
  if (i && i.type === "listItem" && typeof i.checked == "boolean") {
    const r = this.stack[this.stack.length - 1];
    r.type;
    const a = r.children[0];
    if (a && a.type === "text") {
      const s = i.children;
      let c = -1, u;
      for (; ++c < s.length; ) {
        const h = s[c];
        if (h.type === "paragraph") {
          u = h;
          break;
        }
      }
      u === r && (a.value = a.value.slice(1), a.value.length === 0 ? r.children.shift() : r.position && a.position && typeof a.position.start.offset == "number" && (a.position.start.column++, a.position.start.offset++, r.position.start = Object.assign({}, a.position.start)));
    }
  }
  this.exit(t);
}
function vO(t, i, r, a) {
  const s = t.children[0], c = typeof t.checked == "boolean" && s && s.type === "paragraph", u = "[" + (t.checked ? "x" : " ") + "] ", h = r.createTracker(a);
  c && h.move(u);
  let d = fw.listItem(t, i, r, {
    ...a,
    ...h.current()
  });
  return c && (d = d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, p)), d;
  function p(g) {
    return g + u;
  }
}
function bO() {
  return [
    WM(),
    vR(),
    SR(),
    sO(),
    mO()
  ];
}
function wO(t) {
  return {
    extensions: [
      JM(),
      bR(t),
      TR(),
      pO(t),
      gO()
    ]
  };
}
const xO = {
  tokenize: DO,
  partial: !0
}, hw = {
  tokenize: CO,
  partial: !0
}, dw = {
  tokenize: zO,
  partial: !0
}, pw = {
  tokenize: MO,
  partial: !0
}, SO = {
  tokenize: RO,
  partial: !0
}, mw = {
  name: "wwwAutolink",
  tokenize: EO,
  previous: yw
}, gw = {
  name: "protocolAutolink",
  tokenize: AO,
  previous: vw
}, Kn = {
  name: "emailAutolink",
  tokenize: kO,
  previous: bw
}, zn = {};
function TO() {
  return {
    text: zn
  };
}
let Xi = 48;
for (; Xi < 123; )
  zn[Xi] = Kn, Xi++, Xi === 58 ? Xi = 65 : Xi === 91 && (Xi = 97);
zn[43] = Kn;
zn[45] = Kn;
zn[46] = Kn;
zn[95] = Kn;
zn[72] = [Kn, gw];
zn[104] = [Kn, gw];
zn[87] = [Kn, mw];
zn[119] = [Kn, mw];
function kO(t, i, r) {
  const a = this;
  let s, c;
  return u;
  function u(y) {
    return !gh(y) || !bw.call(a, a.previous) || pd(a.events) ? r(y) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), h(y));
  }
  function h(y) {
    return gh(y) ? (t.consume(y), h) : y === 64 ? (t.consume(y), d) : r(y);
  }
  function d(y) {
    return y === 46 ? t.check(SO, g, p)(y) : y === 45 || y === 95 || Se(y) ? (c = !0, t.consume(y), d) : g(y);
  }
  function p(y) {
    return t.consume(y), s = !0, d;
  }
  function g(y) {
    return c && s && Ae(a.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), i(y)) : r(y);
  }
}
function EO(t, i, r) {
  const a = this;
  return s;
  function s(u) {
    return u !== 87 && u !== 119 || !yw.call(a, a.previous) || pd(a.events) ? r(u) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(xO, t.attempt(hw, t.attempt(dw, c), r), r)(u));
  }
  function c(u) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), i(u);
  }
}
function AO(t, i, r) {
  const a = this;
  let s = "", c = !1;
  return u;
  function u(y) {
    return (y === 72 || y === 104) && vw.call(a, a.previous) && !pd(a.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(y), t.consume(y), h) : r(y);
  }
  function h(y) {
    if (Ae(y) && s.length < 5)
      return s += String.fromCodePoint(y), t.consume(y), h;
    if (y === 58) {
      const b = s.toLowerCase();
      if (b === "http" || b === "https")
        return t.consume(y), d;
    }
    return r(y);
  }
  function d(y) {
    return y === 47 ? (t.consume(y), c ? p : (c = !0, d)) : r(y);
  }
  function p(y) {
    return y === null || Ss(y) || Ht(y) || Zi(y) || Os(y) ? r(y) : t.attempt(hw, t.attempt(dw, g), r)(y);
  }
  function g(y) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), i(y);
  }
}
function DO(t, i, r) {
  let a = 0;
  return s;
  function s(u) {
    return (u === 87 || u === 119) && a < 3 ? (a++, t.consume(u), s) : u === 46 && a === 3 ? (t.consume(u), c) : r(u);
  }
  function c(u) {
    return u === null ? r(u) : i(u);
  }
}
function CO(t, i, r) {
  let a, s, c;
  return u;
  function u(p) {
    return p === 46 || p === 95 ? t.check(pw, d, h)(p) : p === null || Ht(p) || Zi(p) || p !== 45 && Os(p) ? d(p) : (c = !0, t.consume(p), u);
  }
  function h(p) {
    return p === 95 ? a = !0 : (s = a, a = void 0), t.consume(p), u;
  }
  function d(p) {
    return s || a || !c ? r(p) : i(p);
  }
}
function zO(t, i) {
  let r = 0, a = 0;
  return s;
  function s(u) {
    return u === 40 ? (r++, t.consume(u), s) : u === 41 && a < r ? c(u) : u === 33 || u === 34 || u === 38 || u === 39 || u === 41 || u === 42 || u === 44 || u === 46 || u === 58 || u === 59 || u === 60 || u === 63 || u === 93 || u === 95 || u === 126 ? t.check(pw, i, c)(u) : u === null || Ht(u) || Zi(u) ? i(u) : (t.consume(u), s);
  }
  function c(u) {
    return u === 41 && a++, t.consume(u), s;
  }
}
function MO(t, i, r) {
  return a;
  function a(h) {
    return h === 33 || h === 34 || h === 39 || h === 41 || h === 42 || h === 44 || h === 46 || h === 58 || h === 59 || h === 63 || h === 95 || h === 126 ? (t.consume(h), a) : h === 38 ? (t.consume(h), c) : h === 93 ? (t.consume(h), s) : (
      // `<` is an end.
      h === 60 || // So is whitespace.
      h === null || Ht(h) || Zi(h) ? i(h) : r(h)
    );
  }
  function s(h) {
    return h === null || h === 40 || h === 91 || Ht(h) || Zi(h) ? i(h) : a(h);
  }
  function c(h) {
    return Ae(h) ? u(h) : r(h);
  }
  function u(h) {
    return h === 59 ? (t.consume(h), a) : Ae(h) ? (t.consume(h), u) : r(h);
  }
}
function RO(t, i, r) {
  return a;
  function a(c) {
    return t.consume(c), s;
  }
  function s(c) {
    return Se(c) ? r(c) : i(c);
  }
}
function yw(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || Ht(t);
}
function vw(t) {
  return !Ae(t);
}
function bw(t) {
  return !(t === 47 || gh(t));
}
function gh(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || Se(t);
}
function pd(t) {
  let i = t.length, r = !1;
  for (; i--; ) {
    const a = t[i][1];
    if ((a.type === "labelLink" || a.type === "labelImage") && !a._balanced) {
      r = !0;
      break;
    }
    if (a._gfmAutolinkLiteralWalkedInto) {
      r = !1;
      break;
    }
  }
  return t.length > 0 && !r && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), r;
}
const OO = {
  tokenize: HO,
  partial: !0
};
function _O() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: VO,
        continuation: {
          tokenize: UO
        },
        exit: jO
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: BO
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: NO,
        resolveTo: LO
      }
    }
  };
}
function NO(t, i, r) {
  const a = this;
  let s = a.events.length;
  const c = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []);
  let u;
  for (; s--; ) {
    const d = a.events[s][1];
    if (d.type === "labelImage") {
      u = d;
      break;
    }
    if (d.type === "gfmFootnoteCall" || d.type === "labelLink" || d.type === "label" || d.type === "image" || d.type === "link")
      break;
  }
  return h;
  function h(d) {
    if (!u || !u._balanced)
      return r(d);
    const p = mn(a.sliceSerialize({
      start: u.end,
      end: a.now()
    }));
    return p.codePointAt(0) !== 94 || !c.includes(p.slice(1)) ? r(d) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(d), t.exit("gfmFootnoteCallLabelMarker"), i(d));
  }
}
function LO(t, i) {
  let r = t.length;
  for (; r--; )
    if (t[r][1].type === "labelImage" && t[r][0] === "enter") {
      t[r][1];
      break;
    }
  t[r + 1][1].type = "data", t[r + 3][1].type = "gfmFootnoteCallLabelMarker";
  const a = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[r + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, s = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[r + 3][1].end),
    end: Object.assign({}, t[r + 3][1].end)
  };
  s.end.column++, s.end.offset++, s.end._bufferIndex++;
  const c = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, s.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, u = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, c.start),
    end: Object.assign({}, c.end)
  }, h = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[r + 1],
    t[r + 2],
    ["enter", a, i],
    // The `[`
    t[r + 3],
    t[r + 4],
    // The `^`.
    ["enter", s, i],
    ["exit", s, i],
    // Everything in between.
    ["enter", c, i],
    ["enter", u, i],
    ["exit", u, i],
    ["exit", c, i],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", a, i]
  ];
  return t.splice(r, t.length - r + 1, ...h), t;
}
function BO(t, i, r) {
  const a = this, s = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []);
  let c = 0, u;
  return h;
  function h(y) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), d;
  }
  function d(y) {
    return y !== 94 ? r(y) : (t.enter("gfmFootnoteCallMarker"), t.consume(y), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", p);
  }
  function p(y) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      y === 93 && !u || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || Ht(y)
    )
      return r(y);
    if (y === 93) {
      t.exit("chunkString");
      const b = t.exit("gfmFootnoteCallString");
      return s.includes(mn(a.sliceSerialize(b))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(y), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), i) : r(y);
    }
    return Ht(y) || (u = !0), c++, t.consume(y), y === 92 ? g : p;
  }
  function g(y) {
    return y === 91 || y === 92 || y === 93 ? (t.consume(y), c++, p) : p(y);
  }
}
function VO(t, i, r) {
  const a = this, s = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []);
  let c, u = 0, h;
  return d;
  function d(S) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), p;
  }
  function p(S) {
    return S === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", g) : r(S);
  }
  function g(S) {
    if (
      // Too long.
      u > 999 || // Closing brace with nothing.
      S === 93 && !h || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      S === null || S === 91 || Ht(S)
    )
      return r(S);
    if (S === 93) {
      t.exit("chunkString");
      const A = t.exit("gfmFootnoteDefinitionLabelString");
      return c = mn(a.sliceSerialize(A)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), b;
    }
    return Ht(S) || (h = !0), u++, t.consume(S), S === 92 ? y : g;
  }
  function y(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), u++, g) : g(S);
  }
  function b(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), s.includes(c) || s.push(c), zt(t, v, "gfmFootnoteDefinitionWhitespace")) : r(S);
  }
  function v(S) {
    return i(S);
  }
}
function UO(t, i, r) {
  return t.check(Vl, i, t.attempt(OO, i, r));
}
function jO(t) {
  t.exit("gfmFootnoteDefinition");
}
function HO(t, i, r) {
  const a = this;
  return zt(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(c) {
    const u = a.events[a.events.length - 1];
    return u && u[1].type === "gfmFootnoteDefinitionIndent" && u[2].sliceSerialize(u[1], !0).length === 4 ? i(c) : r(c);
  }
}
function PO(t) {
  let r = (t || {}).singleTilde;
  const a = {
    name: "strikethrough",
    tokenize: c,
    resolveAll: s
  };
  return r == null && (r = !0), {
    text: {
      126: a
    },
    insideSpan: {
      null: [a]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function s(u, h) {
    let d = -1;
    for (; ++d < u.length; )
      if (u[d][0] === "enter" && u[d][1].type === "strikethroughSequenceTemporary" && u[d][1]._close) {
        let p = d;
        for (; p--; )
          if (u[p][0] === "exit" && u[p][1].type === "strikethroughSequenceTemporary" && u[p][1]._open && // If the sizes are the same:
          u[d][1].end.offset - u[d][1].start.offset === u[p][1].end.offset - u[p][1].start.offset) {
            u[d][1].type = "strikethroughSequence", u[p][1].type = "strikethroughSequence";
            const g = {
              type: "strikethrough",
              start: Object.assign({}, u[p][1].start),
              end: Object.assign({}, u[d][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, u[p][1].end),
              end: Object.assign({}, u[d][1].start)
            }, b = [["enter", g, h], ["enter", u[p][1], h], ["exit", u[p][1], h], ["enter", y, h]], v = h.parser.constructs.insideSpan.null;
            v && Qe(b, b.length, 0, _s(v, u.slice(p + 1, d), h)), Qe(b, b.length, 0, [["exit", y, h], ["enter", u[d][1], h], ["exit", u[d][1], h], ["exit", g, h]]), Qe(u, p - 1, d - p + 3, b), d = p + b.length - 2;
            break;
          }
      }
    for (d = -1; ++d < u.length; )
      u[d][1].type === "strikethroughSequenceTemporary" && (u[d][1].type = "data");
    return u;
  }
  function c(u, h, d) {
    const p = this.previous, g = this.events;
    let y = 0;
    return b;
    function b(S) {
      return p === 126 && g[g.length - 1][1].type !== "characterEscape" ? d(S) : (u.enter("strikethroughSequenceTemporary"), v(S));
    }
    function v(S) {
      const A = Zr(p);
      if (S === 126)
        return y > 1 ? d(S) : (u.consume(S), y++, v);
      if (y < 2 && !r) return d(S);
      const M = u.exit("strikethroughSequenceTemporary"), k = Zr(S);
      return M._open = !k || k === 2 && !!A, M._close = !A || A === 2 && !!k, h(S);
    }
  }
}
class qO {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(i, r, a) {
    YO(this, i, r, a);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(i) {
    if (this.map.sort(function(c, u) {
      return c[0] - u[0];
    }), this.map.length === 0)
      return;
    let r = this.map.length;
    const a = [];
    for (; r > 0; )
      r -= 1, a.push(i.slice(this.map[r][0] + this.map[r][1]), this.map[r][2]), i.length = this.map[r][0];
    a.push(i.slice()), i.length = 0;
    let s = a.pop();
    for (; s; ) {
      for (const c of s)
        i.push(c);
      s = a.pop();
    }
    this.map.length = 0;
  }
}
function YO(t, i, r, a) {
  let s = 0;
  if (!(r === 0 && a.length === 0)) {
    for (; s < t.map.length; ) {
      if (t.map[s][0] === i) {
        t.map[s][1] += r, t.map[s][2].push(...a);
        return;
      }
      s += 1;
    }
    t.map.push([i, r, a]);
  }
}
function FO(t, i) {
  let r = !1;
  const a = [];
  for (; i < t.length; ) {
    const s = t[i];
    if (r) {
      if (s[0] === "enter")
        s[1].type === "tableContent" && a.push(t[i + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (s[1].type === "tableContent") {
        if (t[i - 1][1].type === "tableDelimiterMarker") {
          const c = a.length - 1;
          a[c] = a[c] === "left" ? "center" : "right";
        }
      } else if (s[1].type === "tableDelimiterRow")
        break;
    } else s[0] === "enter" && s[1].type === "tableDelimiterRow" && (r = !0);
    i += 1;
  }
  return a;
}
function XO() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: GO,
        resolveAll: IO
      }
    }
  };
}
function GO(t, i, r) {
  const a = this;
  let s = 0, c = 0, u;
  return h;
  function h(L) {
    let J = a.events.length - 1;
    for (; J > -1; ) {
      const it = a.events[J][1].type;
      if (it === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      it === "linePrefix") J--;
      else break;
    }
    const Z = J > -1 ? a.events[J][1].type : null, nt = Z === "tableHead" || Z === "tableRow" ? O : d;
    return nt === O && a.parser.lazy[a.now().line] ? r(L) : nt(L);
  }
  function d(L) {
    return t.enter("tableHead"), t.enter("tableRow"), p(L);
  }
  function p(L) {
    return L === 124 || (u = !0, c += 1), g(L);
  }
  function g(L) {
    return L === null ? r(L) : dt(L) ? c > 1 ? (c = 0, a.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(L), t.exit("lineEnding"), v) : r(L) : Dt(L) ? zt(t, g, "whitespace")(L) : (c += 1, u && (u = !1, s += 1), L === 124 ? (t.enter("tableCellDivider"), t.consume(L), t.exit("tableCellDivider"), u = !0, g) : (t.enter("data"), y(L)));
  }
  function y(L) {
    return L === null || L === 124 || Ht(L) ? (t.exit("data"), g(L)) : (t.consume(L), L === 92 ? b : y);
  }
  function b(L) {
    return L === 92 || L === 124 ? (t.consume(L), y) : y(L);
  }
  function v(L) {
    return a.interrupt = !1, a.parser.lazy[a.now().line] ? r(L) : (t.enter("tableDelimiterRow"), u = !1, Dt(L) ? zt(t, S, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : S(L));
  }
  function S(L) {
    return L === 45 || L === 58 ? M(L) : L === 124 ? (u = !0, t.enter("tableCellDivider"), t.consume(L), t.exit("tableCellDivider"), A) : _(L);
  }
  function A(L) {
    return Dt(L) ? zt(t, M, "whitespace")(L) : M(L);
  }
  function M(L) {
    return L === 58 ? (c += 1, u = !0, t.enter("tableDelimiterMarker"), t.consume(L), t.exit("tableDelimiterMarker"), k) : L === 45 ? (c += 1, k(L)) : L === null || dt(L) ? V(L) : _(L);
  }
  function k(L) {
    return L === 45 ? (t.enter("tableDelimiterFiller"), C(L)) : _(L);
  }
  function C(L) {
    return L === 45 ? (t.consume(L), C) : L === 58 ? (u = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(L), t.exit("tableDelimiterMarker"), D) : (t.exit("tableDelimiterFiller"), D(L));
  }
  function D(L) {
    return Dt(L) ? zt(t, V, "whitespace")(L) : V(L);
  }
  function V(L) {
    return L === 124 ? S(L) : L === null || dt(L) ? !u || s !== c ? _(L) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), i(L)) : _(L);
  }
  function _(L) {
    return r(L);
  }
  function O(L) {
    return t.enter("tableRow"), z(L);
  }
  function z(L) {
    return L === 124 ? (t.enter("tableCellDivider"), t.consume(L), t.exit("tableCellDivider"), z) : L === null || dt(L) ? (t.exit("tableRow"), i(L)) : Dt(L) ? zt(t, z, "whitespace")(L) : (t.enter("data"), N(L));
  }
  function N(L) {
    return L === null || L === 124 || Ht(L) ? (t.exit("data"), z(L)) : (t.consume(L), L === 92 ? F : N);
  }
  function F(L) {
    return L === 92 || L === 124 ? (t.consume(L), N) : N(L);
  }
}
function IO(t, i) {
  let r = -1, a = !0, s = 0, c = [0, 0, 0, 0], u = [0, 0, 0, 0], h = !1, d = 0, p, g, y;
  const b = new qO();
  for (; ++r < t.length; ) {
    const v = t[r], S = v[1];
    v[0] === "enter" ? S.type === "tableHead" ? (h = !1, d !== 0 && (pv(b, i, d, p, g), g = void 0, d = 0), p = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, b.add(r, 0, [["enter", p, i]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (a = !0, y = void 0, c = [0, 0, 0, 0], u = [0, r + 1, 0, 0], h && (h = !1, g = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, b.add(r, 0, [["enter", g, i]])), s = S.type === "tableDelimiterRow" ? 2 : g ? 3 : 1) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (a = !1, u[2] === 0 && (c[1] !== 0 && (u[0] = u[1], y = os(b, i, c, s, void 0, y), c = [0, 0, 0, 0]), u[2] = r)) : S.type === "tableCellDivider" && (a ? a = !1 : (c[1] !== 0 && (u[0] = u[1], y = os(b, i, c, s, void 0, y)), c = u, u = [c[1], r, 0, 0])) : S.type === "tableHead" ? (h = !0, d = r) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (d = r, c[1] !== 0 ? (u[0] = u[1], y = os(b, i, c, s, r, y)) : u[1] !== 0 && (y = os(b, i, u, s, r, y)), s = 0) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (u[3] = r);
  }
  for (d !== 0 && pv(b, i, d, p, g), b.consume(i.events), r = -1; ++r < i.events.length; ) {
    const v = i.events[r];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = FO(i.events, r));
  }
  return t;
}
function os(t, i, r, a, s, c) {
  const u = a === 1 ? "tableHeader" : a === 2 ? "tableDelimiter" : "tableData", h = "tableContent";
  r[0] !== 0 && (c.end = Object.assign({}, Pr(i.events, r[0])), t.add(r[0], 0, [["exit", c, i]]));
  const d = Pr(i.events, r[1]);
  if (c = {
    type: u,
    start: Object.assign({}, d),
    // Note: correct end is set later.
    end: Object.assign({}, d)
  }, t.add(r[1], 0, [["enter", c, i]]), r[2] !== 0) {
    const p = Pr(i.events, r[2]), g = Pr(i.events, r[3]), y = {
      type: h,
      start: Object.assign({}, p),
      end: Object.assign({}, g)
    };
    if (t.add(r[2], 0, [["enter", y, i]]), a !== 2) {
      const b = i.events[r[2]], v = i.events[r[3]];
      if (b[1].end = Object.assign({}, v[1].end), b[1].type = "chunkText", b[1].contentType = "text", r[3] > r[2] + 1) {
        const S = r[2] + 1, A = r[3] - r[2] - 1;
        t.add(S, A, []);
      }
    }
    t.add(r[3] + 1, 0, [["exit", y, i]]);
  }
  return s !== void 0 && (c.end = Object.assign({}, Pr(i.events, s)), t.add(s, 0, [["exit", c, i]]), c = void 0), c;
}
function pv(t, i, r, a, s) {
  const c = [], u = Pr(i.events, r);
  s && (s.end = Object.assign({}, u), c.push(["exit", s, i])), a.end = Object.assign({}, u), c.push(["exit", a, i]), t.add(r + 1, 0, c);
}
function Pr(t, i) {
  const r = t[i], a = r[0] === "enter" ? "start" : "end";
  return r[1][a];
}
const QO = {
  name: "tasklistCheck",
  tokenize: ZO
};
function KO() {
  return {
    text: {
      91: QO
    }
  };
}
function ZO(t, i, r) {
  const a = this;
  return s;
  function s(d) {
    return (
      // Exit if there’s stuff before.
      a.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !a._gfmTasklistFirstContentOfListItem ? r(d) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(d), t.exit("taskListCheckMarker"), c)
    );
  }
  function c(d) {
    return Ht(d) ? (t.enter("taskListCheckValueUnchecked"), t.consume(d), t.exit("taskListCheckValueUnchecked"), u) : d === 88 || d === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(d), t.exit("taskListCheckValueChecked"), u) : r(d);
  }
  function u(d) {
    return d === 93 ? (t.enter("taskListCheckMarker"), t.consume(d), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), h) : r(d);
  }
  function h(d) {
    return dt(d) ? i(d) : Dt(d) ? t.check({
      tokenize: WO
    }, i, r)(d) : r(d);
  }
}
function WO(t, i, r) {
  return zt(t, a, "whitespace");
  function a(s) {
    return s === null ? r(s) : i(s);
  }
}
function JO(t) {
  return z1([
    TO(),
    _O(),
    PO(t),
    XO(),
    KO()
  ]);
}
const $O = {};
function t3(t) {
  const i = (
    /** @type {Processor<Root>} */
    this
  ), r = t || $O, a = i.data(), s = a.micromarkExtensions || (a.micromarkExtensions = []), c = a.fromMarkdownExtensions || (a.fromMarkdownExtensions = []), u = a.toMarkdownExtensions || (a.toMarkdownExtensions = []);
  s.push(JO(r)), c.push(bO()), u.push(wO(r));
}
const e3 = ({
  wsEndpoint: t,
  initialMessage: i = "Scrape Posters for Drukwerkdeal in NL & BE",
  // debug msg
  onClose: r,
  className: a = "",
  onToggleFullScreen: s,
  isFullScreen: c = !1
}) => {
  const [u, h] = $.useState([]), [d, p] = $.useState(""), [g, y] = $.useState(""), [b, v] = $.useState(!1), S = $.useRef(null), A = $.useRef(null), M = $.useRef(!1), k = $.useRef(null);
  $.useEffect(() => {
    let V = null, _ = !1;
    const O = () => {
      _ || (S.current = new WebSocket(t), S.current.onopen = () => {
        console.log("WebSocket connected"), v(!1), M.current || setTimeout(() => {
          M.current = !0;
        }, 1e3);
      }, S.current.onmessage = (z) => {
        try {
          const N = JSON.parse(z.data), F = N.role;
          N.type === "loading_state" ? N.status === "start" ? y(N.tool) : y("") : h((L) => {
            if (L.length > 0 && L[L.length - 1].sender === F) {
              const J = {
                sender: F,
                content: N.content,
                borderColor: F === "assistant" && N.status === "error" ? "border-red-300" : "border-gray-300"
              };
              return [...L.slice(0, L.length - 1), J];
            }
            return [...L, { sender: F, content: N.content }];
          });
        } catch (N) {
          console.error("Failed to parse message:", N);
        }
      }, S.current.onerror = (z) => console.error("WebSocket error:", z), S.current.onclose = () => {
        console.log("WebSocket disconnected"), v(!0), _ || (console.log("Attempting to reconnect..."), V = setTimeout(() => {
          O();
        }, 1e3));
      });
    };
    return O(), () => {
      _ = !0, V && clearTimeout(V), S.current && (S.current.onclose = null, S.current.close());
    };
  }, [t, i]), $.useEffect(() => {
    var V;
    (V = A.current) == null || V.scrollIntoView({ behavior: "smooth" });
  }, [u, g]);
  const C = (V) => {
    if (V.preventDefault(), !d.trim() || !S.current || S.current.readyState !== WebSocket.OPEN) return;
    const _ = { sender: "user", content: d };
    h((O) => [...O, _]), S.current.send(d), p("");
  }, D = (V) => {
    var O;
    V.preventDefault();
    const _ = V.currentTarget.textContent;
    _ && (p((z) => z + _ + " "), (O = k.current) == null || O.focus());
  };
  return /* @__PURE__ */ ft.jsxs("div", { className: Es("flex h-full w-full flex-col bg-white px-4 pb-4", a), "data-testid": "chat-root", children: [
    /* @__PURE__ */ ft.jsxs(
      "div",
      {
        className: Es("chat-drag-handle -mx-4 mb-2 flex items-center justify-between px-4 pt-4", !c && "cursor-move"),
        onDoubleClick: () => s && s(),
        children: [
          /* @__PURE__ */ ft.jsx("h2", { className: "text-xl font-semibold text-indigo-700", children: "SmartspAI" }),
          /* @__PURE__ */ ft.jsxs("div", { className: "flex gap-2", children: [
            s && /* @__PURE__ */ ft.jsx(
              "button",
              {
                onClick: s,
                "aria-label": c ? "Exit full screen" : "Enter full screen",
                className: "cursor-pointer rounded-md p-1 text-gray-600 hover:text-gray-900",
                children: c ? /* @__PURE__ */ ft.jsx(AA, { className: "size-5" }) : /* @__PURE__ */ ft.jsx(CA, { className: "size-5" })
              }
            ),
            r && /* @__PURE__ */ ft.jsx("button", { onClick: r, "aria-label": "Close chat", className: "cursor-pointer rounded-md p-1 text-gray-600 hover:text-gray-900", children: /* @__PURE__ */ ft.jsx(MA, { className: "size-5.5", strokeWidth: 1.5 }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ ft.jsxs("div", { className: "mb-4 flex-1 overflow-y-auto rounded-lg border border-gray-300 p-4", children: [
      u.map((V, _) => /* @__PURE__ */ ft.jsx("div", { className: `mb-2 flex ${V.sender === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ ft.jsx(
        "div",
        {
          className: `prose max-w-[80%] rounded-xl px-4 py-2 break-words ${V.sender === "user" ? "bg-indigo-600 text-white" : "border border-gray-300 bg-white"}`,
          style: V.sender === "assistant" ? { color: "rgb(13, 13, 13)" } : {},
          children: /* @__PURE__ */ ft.jsx(
            PM,
            {
              remarkPlugins: [t3],
              components: {
                a: ({ node: O, ...z }) => /* @__PURE__ */ ft.jsx("a", { ...z, onClick: D, style: { cursor: "pointer" } })
              },
              children: V.content
            }
          )
        }
      ) }, _)),
      g && /* @__PURE__ */ ft.jsx("div", { className: "mb-2 flex justify-start", children: /* @__PURE__ */ ft.jsx("div", { className: "prose max-w-[80%] rounded-xl border border-gray-300 bg-white px-4 py-2", children: /* @__PURE__ */ ft.jsxs("div", { className: "thinking-dots", children: [
        /* @__PURE__ */ ft.jsx("span", {}),
        /* @__PURE__ */ ft.jsx("span", {}),
        /* @__PURE__ */ ft.jsx("span", {})
      ] }) }) }),
      /* @__PURE__ */ ft.jsx("div", { ref: A })
    ] }),
    /* @__PURE__ */ ft.jsxs("form", { onSubmit: C, className: "flex", children: [
      /* @__PURE__ */ ft.jsx(
        "input",
        {
          ref: k,
          type: "text",
          disabled: b,
          autoFocus: !0,
          value: d,
          onChange: (V) => p(V.target.value),
          placeholder: "Type your message...",
          className: "flex-1 rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-indigo-400 focus:outline-none",
          required: !0
        }
      ),
      /* @__PURE__ */ ft.jsx("button", { type: "submit", className: "ml-2 cursor-pointer rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700", children: "Send" })
    ] })
  ] });
};
var sl = { exports: {} }, _f = {}, Nf = { exports: {} }, Lf, mv;
function n3() {
  if (mv) return Lf;
  mv = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Lf = t, Lf;
}
var Bf, gv;
function i3() {
  if (gv) return Bf;
  gv = 1;
  var t = /* @__PURE__ */ n3();
  function i() {
  }
  function r() {
  }
  return r.resetWarningCache = i, Bf = function() {
    function a(u, h, d, p, g, y) {
      if (y !== t) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    a.isRequired = a;
    function s() {
      return a;
    }
    var c = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: s,
      element: a,
      elementType: a,
      instanceOf: s,
      node: a,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: i
    };
    return c.PropTypes = c, c;
  }, Bf;
}
var yv;
function ww() {
  return yv || (yv = 1, Nf.exports = /* @__PURE__ */ i3()()), Nf.exports;
}
var Vf = { exports: {} }, be = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function r3() {
  if (vv) return be;
  vv = 1;
  var t = Rl();
  function i(d) {
    var p = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + d + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var a = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function c(d, p, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: d,
      containerInfo: p,
      implementation: g
    };
  }
  var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(d, p) {
    if (d === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, be.createPortal = function(d, p) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(i(299));
    return c(d, p, null, g);
  }, be.flushSync = function(d) {
    var p = u.T, g = a.p;
    try {
      if (u.T = null, a.p = 2, d) return d();
    } finally {
      u.T = p, a.p = g, a.d.f();
    }
  }, be.preconnect = function(d, p) {
    typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, a.d.C(d, p));
  }, be.prefetchDNS = function(d) {
    typeof d == "string" && a.d.D(d);
  }, be.preinit = function(d, p) {
    if (typeof d == "string" && p && typeof p.as == "string") {
      var g = p.as, y = h(g, p.crossOrigin), b = typeof p.integrity == "string" ? p.integrity : void 0, v = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      g === "style" ? a.d.S(
        d,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: y,
          integrity: b,
          fetchPriority: v
        }
      ) : g === "script" && a.d.X(d, {
        crossOrigin: y,
        integrity: b,
        fetchPriority: v,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, be.preinitModule = function(d, p) {
    if (typeof d == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var g = h(
            p.as,
            p.crossOrigin
          );
          a.d.M(d, {
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && a.d.M(d);
  }, be.preload = function(d, p) {
    if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var g = p.as, y = h(g, p.crossOrigin);
      a.d.L(d, g, {
        crossOrigin: y,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, be.preloadModule = function(d, p) {
    if (typeof d == "string")
      if (p) {
        var g = h(p.as, p.crossOrigin);
        a.d.m(d, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: g,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else a.d.m(d);
  }, be.requestFormReset = function(d) {
    a.d.r(d);
  }, be.unstable_batchedUpdates = function(d, p) {
    return d(p);
  }, be.useFormState = function(d, p, g) {
    return u.H.useFormState(d, p, g);
  }, be.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, be.version = "19.1.0", be;
}
var bv;
function Vs() {
  if (bv) return Vf.exports;
  bv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), Vf.exports = r3(), Vf.exports;
}
function xw(t) {
  var i, r, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = xw(t[i])) && (a && (a += " "), a += r);
  else for (i in t) t[i] && (a && (a += " "), a += i);
  return a;
}
function wv() {
  for (var t, i, r = 0, a = ""; r < arguments.length; ) (t = arguments[r++]) && (i = xw(t)) && (a && (a += " "), a += i);
  return a;
}
const a3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: wv,
  default: wv
}, Symbol.toStringTag, { value: "Module" })), l3 = /* @__PURE__ */ jS(a3);
var Jt = {}, wi = {}, xv;
function Us() {
  if (xv) return wi;
  xv = 1, Object.defineProperty(wi, "__esModule", {
    value: !0
  }), wi.dontSetMe = s, wi.findInArray = t, wi.int = a, wi.isFunction = i, wi.isNum = r;
  function t(c, u) {
    for (let h = 0, d = c.length; h < d; h++)
      if (u.apply(u, [c[h], h, c])) return c[h];
  }
  function i(c) {
    return typeof c == "function" || Object.prototype.toString.call(c) === "[object Function]";
  }
  function r(c) {
    return typeof c == "number" && !isNaN(c);
  }
  function a(c) {
    return parseInt(c, 10);
  }
  function s(c, u, h) {
    if (c[u])
      return new Error("Invalid prop ".concat(u, " passed to ").concat(h, " - do not set this, set it on the child."));
  }
  return wi;
}
var xi = {}, Sv;
function o3() {
  if (Sv) return xi;
  Sv = 1, Object.defineProperty(xi, "__esModule", {
    value: !0
  }), xi.browserPrefixToKey = r, xi.browserPrefixToStyle = a, xi.default = void 0, xi.getPrefix = i;
  const t = ["Moz", "Webkit", "O", "ms"];
  function i() {
    var c;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
    if (typeof window > "u") return "";
    const h = (c = window.document) === null || c === void 0 || (c = c.documentElement) === null || c === void 0 ? void 0 : c.style;
    if (!h || u in h) return "";
    for (let d = 0; d < t.length; d++)
      if (r(u, t[d]) in h) return t[d];
    return "";
  }
  function r(c, u) {
    return u ? "".concat(u).concat(s(c)) : c;
  }
  function a(c, u) {
    return u ? "-".concat(u.toLowerCase(), "-").concat(c) : c;
  }
  function s(c) {
    let u = "", h = !0;
    for (let d = 0; d < c.length; d++)
      h ? (u += c[d].toUpperCase(), h = !1) : c[d] === "-" ? h = !0 : u += c[d];
    return u;
  }
  return xi.default = i(), xi;
}
var Tv;
function md() {
  if (Tv) return Jt;
  Tv = 1, Object.defineProperty(Jt, "__esModule", {
    value: !0
  }), Jt.addClassName = _, Jt.addEvent = h, Jt.addUserSelectStyles = D, Jt.createCSSTransform = S, Jt.createSVGTransform = A, Jt.getTouch = k, Jt.getTouchIdentifier = C, Jt.getTranslation = M, Jt.innerHeight = y, Jt.innerWidth = b, Jt.matchesSelector = c, Jt.matchesSelectorAndParentsTo = u, Jt.offsetXYFromParent = v, Jt.outerHeight = p, Jt.outerWidth = g, Jt.removeClassName = O, Jt.removeEvent = d, Jt.removeUserSelectStyles = V;
  var t = Us(), i = a(o3());
  function r(z) {
    if (typeof WeakMap != "function") return null;
    var N = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap();
    return (r = function(L) {
      return L ? F : N;
    })(z);
  }
  function a(z, N) {
    if (z && z.__esModule)
      return z;
    if (z === null || typeof z != "object" && typeof z != "function")
      return { default: z };
    var F = r(N);
    if (F && F.has(z))
      return F.get(z);
    var L = {}, J = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var Z in z)
      if (Z !== "default" && Object.prototype.hasOwnProperty.call(z, Z)) {
        var nt = J ? Object.getOwnPropertyDescriptor(z, Z) : null;
        nt && (nt.get || nt.set) ? Object.defineProperty(L, Z, nt) : L[Z] = z[Z];
      }
    return L.default = z, F && F.set(z, L), L;
  }
  let s = "";
  function c(z, N) {
    return s || (s = (0, t.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(F) {
      return (0, t.isFunction)(z[F]);
    })), (0, t.isFunction)(z[s]) ? z[s](N) : !1;
  }
  function u(z, N, F) {
    let L = z;
    do {
      if (c(L, N)) return !0;
      if (L === F) return !1;
      L = L.parentNode;
    } while (L);
    return !1;
  }
  function h(z, N, F, L) {
    if (!z) return;
    const J = {
      capture: !0,
      ...L
    };
    z.addEventListener ? z.addEventListener(N, F, J) : z.attachEvent ? z.attachEvent("on" + N, F) : z["on" + N] = F;
  }
  function d(z, N, F, L) {
    if (!z) return;
    const J = {
      capture: !0,
      ...L
    };
    z.removeEventListener ? z.removeEventListener(N, F, J) : z.detachEvent ? z.detachEvent("on" + N, F) : z["on" + N] = null;
  }
  function p(z) {
    let N = z.clientHeight;
    const F = z.ownerDocument.defaultView.getComputedStyle(z);
    return N += (0, t.int)(F.borderTopWidth), N += (0, t.int)(F.borderBottomWidth), N;
  }
  function g(z) {
    let N = z.clientWidth;
    const F = z.ownerDocument.defaultView.getComputedStyle(z);
    return N += (0, t.int)(F.borderLeftWidth), N += (0, t.int)(F.borderRightWidth), N;
  }
  function y(z) {
    let N = z.clientHeight;
    const F = z.ownerDocument.defaultView.getComputedStyle(z);
    return N -= (0, t.int)(F.paddingTop), N -= (0, t.int)(F.paddingBottom), N;
  }
  function b(z) {
    let N = z.clientWidth;
    const F = z.ownerDocument.defaultView.getComputedStyle(z);
    return N -= (0, t.int)(F.paddingLeft), N -= (0, t.int)(F.paddingRight), N;
  }
  function v(z, N, F) {
    const J = N === N.ownerDocument.body ? {
      left: 0,
      top: 0
    } : N.getBoundingClientRect(), Z = (z.clientX + N.scrollLeft - J.left) / F, nt = (z.clientY + N.scrollTop - J.top) / F;
    return {
      x: Z,
      y: nt
    };
  }
  function S(z, N) {
    const F = M(z, N, "px");
    return {
      [(0, i.browserPrefixToKey)("transform", i.default)]: F
    };
  }
  function A(z, N) {
    return M(z, N, "");
  }
  function M(z, N, F) {
    let {
      x: L,
      y: J
    } = z, Z = "translate(".concat(L).concat(F, ",").concat(J).concat(F, ")");
    if (N) {
      const nt = "".concat(typeof N.x == "string" ? N.x : N.x + F), it = "".concat(typeof N.y == "string" ? N.y : N.y + F);
      Z = "translate(".concat(nt, ", ").concat(it, ")") + Z;
    }
    return Z;
  }
  function k(z, N) {
    return z.targetTouches && (0, t.findInArray)(z.targetTouches, (F) => N === F.identifier) || z.changedTouches && (0, t.findInArray)(z.changedTouches, (F) => N === F.identifier);
  }
  function C(z) {
    if (z.targetTouches && z.targetTouches[0]) return z.targetTouches[0].identifier;
    if (z.changedTouches && z.changedTouches[0]) return z.changedTouches[0].identifier;
  }
  function D(z) {
    if (!z) return;
    let N = z.getElementById("react-draggable-style-el");
    N || (N = z.createElement("style"), N.type = "text/css", N.id = "react-draggable-style-el", N.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, N.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, z.getElementsByTagName("head")[0].appendChild(N)), z.body && _(z.body, "react-draggable-transparent-selection");
  }
  function V(z) {
    if (z)
      try {
        if (z.body && O(z.body, "react-draggable-transparent-selection"), z.selection)
          z.selection.empty();
        else {
          const N = (z.defaultView || window).getSelection();
          N && N.type !== "Caret" && N.removeAllRanges();
        }
      } catch {
      }
  }
  function _(z, N) {
    z.classList ? z.classList.add(N) : z.className.match(new RegExp("(?:^|\\s)".concat(N, "(?!\\S)"))) || (z.className += " ".concat(N));
  }
  function O(z, N) {
    z.classList ? z.classList.remove(N) : z.className = z.className.replace(new RegExp("(?:^|\\s)".concat(N, "(?!\\S)"), "g"), "");
  }
  return Jt;
}
var Tn = {}, kv;
function Sw() {
  if (kv) return Tn;
  kv = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.canDragX = s, Tn.canDragY = c, Tn.createCoreData = h, Tn.createDraggableData = d, Tn.getBoundPosition = r, Tn.getControlPosition = u, Tn.snapToGrid = a;
  var t = Us(), i = md();
  function r(y, b, v) {
    if (!y.props.bounds) return [b, v];
    let {
      bounds: S
    } = y.props;
    S = typeof S == "string" ? S : p(S);
    const A = g(y);
    if (typeof S == "string") {
      const {
        ownerDocument: M
      } = A, k = M.defaultView;
      let C;
      if (S === "parent" ? C = A.parentNode : C = M.querySelector(S), !(C instanceof k.HTMLElement))
        throw new Error('Bounds selector "' + S + '" could not find an element.');
      const D = C, V = k.getComputedStyle(A), _ = k.getComputedStyle(D);
      S = {
        left: -A.offsetLeft + (0, t.int)(_.paddingLeft) + (0, t.int)(V.marginLeft),
        top: -A.offsetTop + (0, t.int)(_.paddingTop) + (0, t.int)(V.marginTop),
        right: (0, i.innerWidth)(D) - (0, i.outerWidth)(A) - A.offsetLeft + (0, t.int)(_.paddingRight) - (0, t.int)(V.marginRight),
        bottom: (0, i.innerHeight)(D) - (0, i.outerHeight)(A) - A.offsetTop + (0, t.int)(_.paddingBottom) - (0, t.int)(V.marginBottom)
      };
    }
    return (0, t.isNum)(S.right) && (b = Math.min(b, S.right)), (0, t.isNum)(S.bottom) && (v = Math.min(v, S.bottom)), (0, t.isNum)(S.left) && (b = Math.max(b, S.left)), (0, t.isNum)(S.top) && (v = Math.max(v, S.top)), [b, v];
  }
  function a(y, b, v) {
    const S = Math.round(b / y[0]) * y[0], A = Math.round(v / y[1]) * y[1];
    return [S, A];
  }
  function s(y) {
    return y.props.axis === "both" || y.props.axis === "x";
  }
  function c(y) {
    return y.props.axis === "both" || y.props.axis === "y";
  }
  function u(y, b, v) {
    const S = typeof b == "number" ? (0, i.getTouch)(y, b) : null;
    if (typeof b == "number" && !S) return null;
    const A = g(v), M = v.props.offsetParent || A.offsetParent || A.ownerDocument.body;
    return (0, i.offsetXYFromParent)(S || y, M, v.props.scale);
  }
  function h(y, b, v) {
    const S = !(0, t.isNum)(y.lastX), A = g(y);
    return S ? {
      node: A,
      deltaX: 0,
      deltaY: 0,
      lastX: b,
      lastY: v,
      x: b,
      y: v
    } : {
      node: A,
      deltaX: b - y.lastX,
      deltaY: v - y.lastY,
      lastX: y.lastX,
      lastY: y.lastY,
      x: b,
      y: v
    };
  }
  function d(y, b) {
    const v = y.props.scale;
    return {
      node: b.node,
      x: y.state.x + b.deltaX / v,
      y: y.state.y + b.deltaY / v,
      deltaX: b.deltaX / v,
      deltaY: b.deltaY / v,
      lastX: y.state.x,
      lastY: y.state.y
    };
  }
  function p(y) {
    return {
      left: y.left,
      top: y.top,
      right: y.right,
      bottom: y.bottom
    };
  }
  function g(y) {
    const b = y.findDOMNode();
    if (!b)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return b;
  }
  return Tn;
}
var ul = {}, ss = {}, Ev;
function Tw() {
  if (Ev) return ss;
  Ev = 1, Object.defineProperty(ss, "__esModule", {
    value: !0
  }), ss.default = t;
  function t() {
  }
  return ss;
}
var Av;
function s3() {
  if (Av) return ul;
  Av = 1, Object.defineProperty(ul, "__esModule", {
    value: !0
  }), ul.default = void 0;
  var t = p(Rl()), i = h(/* @__PURE__ */ ww()), r = h(Vs()), a = md(), s = Sw(), c = Us(), u = h(Tw());
  function h(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function d(M) {
    if (typeof WeakMap != "function") return null;
    var k = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (d = function(D) {
      return D ? C : k;
    })(M);
  }
  function p(M, k) {
    if (M && M.__esModule)
      return M;
    if (M === null || typeof M != "object" && typeof M != "function")
      return { default: M };
    var C = d(k);
    if (C && C.has(M))
      return C.get(M);
    var D = {}, V = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _ in M)
      if (_ !== "default" && Object.prototype.hasOwnProperty.call(M, _)) {
        var O = V ? Object.getOwnPropertyDescriptor(M, _) : null;
        O && (O.get || O.set) ? Object.defineProperty(D, _, O) : D[_] = M[_];
      }
    return D.default = M, C && C.set(M, D), D;
  }
  function g(M, k, C) {
    return k = y(k), k in M ? Object.defineProperty(M, k, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : M[k] = C, M;
  }
  function y(M) {
    var k = b(M, "string");
    return typeof k == "symbol" ? k : String(k);
  }
  function b(M, k) {
    if (typeof M != "object" || M === null) return M;
    var C = M[Symbol.toPrimitive];
    if (C !== void 0) {
      var D = C.call(M, k);
      if (typeof D != "object") return D;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(M);
  }
  const v = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  let S = v.mouse, A = class extends t.Component {
    constructor() {
      super(...arguments), g(this, "dragging", !1), g(this, "lastX", NaN), g(this, "lastY", NaN), g(this, "touchIdentifier", null), g(this, "mounted", !1), g(this, "handleDragStart", (k) => {
        if (this.props.onMouseDown(k), !this.props.allowAnyClick && typeof k.button == "number" && k.button !== 0) return !1;
        const C = this.findDOMNode();
        if (!C || !C.ownerDocument || !C.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const {
          ownerDocument: D
        } = C;
        if (this.props.disabled || !(k.target instanceof D.defaultView.Node) || this.props.handle && !(0, a.matchesSelectorAndParentsTo)(k.target, this.props.handle, C) || this.props.cancel && (0, a.matchesSelectorAndParentsTo)(k.target, this.props.cancel, C))
          return;
        k.type === "touchstart" && k.preventDefault();
        const V = (0, a.getTouchIdentifier)(k);
        this.touchIdentifier = V;
        const _ = (0, s.getControlPosition)(k, V, this);
        if (_ == null) return;
        const {
          x: O,
          y: z
        } = _, N = (0, s.createCoreData)(this, O, z);
        (0, u.default)("DraggableCore: handleDragStart: %j", N), (0, u.default)("calling", this.props.onStart), !(this.props.onStart(k, N) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, a.addUserSelectStyles)(D), this.dragging = !0, this.lastX = O, this.lastY = z, (0, a.addEvent)(D, S.move, this.handleDrag), (0, a.addEvent)(D, S.stop, this.handleDragStop));
      }), g(this, "handleDrag", (k) => {
        const C = (0, s.getControlPosition)(k, this.touchIdentifier, this);
        if (C == null) return;
        let {
          x: D,
          y: V
        } = C;
        if (Array.isArray(this.props.grid)) {
          let z = D - this.lastX, N = V - this.lastY;
          if ([z, N] = (0, s.snapToGrid)(this.props.grid, z, N), !z && !N) return;
          D = this.lastX + z, V = this.lastY + N;
        }
        const _ = (0, s.createCoreData)(this, D, V);
        if ((0, u.default)("DraggableCore: handleDrag: %j", _), this.props.onDrag(k, _) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const N = document.createEvent("MouseEvents");
            N.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(N);
          }
          return;
        }
        this.lastX = D, this.lastY = V;
      }), g(this, "handleDragStop", (k) => {
        if (!this.dragging) return;
        const C = (0, s.getControlPosition)(k, this.touchIdentifier, this);
        if (C == null) return;
        let {
          x: D,
          y: V
        } = C;
        if (Array.isArray(this.props.grid)) {
          let N = D - this.lastX || 0, F = V - this.lastY || 0;
          [N, F] = (0, s.snapToGrid)(this.props.grid, N, F), D = this.lastX + N, V = this.lastY + F;
        }
        const _ = (0, s.createCoreData)(this, D, V);
        if (this.props.onStop(k, _) === !1 || this.mounted === !1) return !1;
        const z = this.findDOMNode();
        z && this.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(z.ownerDocument), (0, u.default)("DraggableCore: handleDragStop: %j", _), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, z && ((0, u.default)("DraggableCore: Removing handlers"), (0, a.removeEvent)(z.ownerDocument, S.move, this.handleDrag), (0, a.removeEvent)(z.ownerDocument, S.stop, this.handleDragStop));
      }), g(this, "onMouseDown", (k) => (S = v.mouse, this.handleDragStart(k))), g(this, "onMouseUp", (k) => (S = v.mouse, this.handleDragStop(k))), g(this, "onTouchStart", (k) => (S = v.touch, this.handleDragStart(k))), g(this, "onTouchEnd", (k) => (S = v.touch, this.handleDragStop(k)));
    }
    componentDidMount() {
      this.mounted = !0;
      const k = this.findDOMNode();
      k && (0, a.addEvent)(k, v.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const k = this.findDOMNode();
      if (k) {
        const {
          ownerDocument: C
        } = k;
        (0, a.removeEvent)(C, v.mouse.move, this.handleDrag), (0, a.removeEvent)(C, v.touch.move, this.handleDrag), (0, a.removeEvent)(C, v.mouse.stop, this.handleDragStop), (0, a.removeEvent)(C, v.touch.stop, this.handleDragStop), (0, a.removeEvent)(k, v.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(C);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var k, C;
      return (k = this.props) !== null && k !== void 0 && k.nodeRef ? (C = this.props) === null || C === void 0 || (C = C.nodeRef) === null || C === void 0 ? void 0 : C.current : r.default.findDOMNode(this);
    }
    render() {
      return /* @__PURE__ */ t.cloneElement(t.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  };
  return ul.default = A, g(A, "displayName", "DraggableCore"), g(A, "propTypes", {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: i.default.bool,
    children: i.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: i.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: i.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(M, k) {
      if (M[k] && M[k].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: i.default.arrayOf(i.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: i.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: i.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: i.default.object,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: i.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: i.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: i.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: i.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: i.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), g(A, "defaultProps", {
    allowAnyClick: !1,
    // by default only accept left click
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {
    },
    onDrag: function() {
    },
    onStop: function() {
    },
    onMouseDown: function() {
    },
    scale: 1
  }), ul;
}
var Dv;
function u3() {
  return Dv || (Dv = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "DraggableCore", {
      enumerable: !0,
      get: function() {
        return d.default;
      }
    }), t.default = void 0;
    var i = b(Rl()), r = g(/* @__PURE__ */ ww()), a = g(Vs()), s = g(l3), c = md(), u = Sw(), h = Us(), d = g(s3()), p = g(Tw());
    function g(C) {
      return C && C.__esModule ? C : { default: C };
    }
    function y(C) {
      if (typeof WeakMap != "function") return null;
      var D = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap();
      return (y = function(_) {
        return _ ? V : D;
      })(C);
    }
    function b(C, D) {
      if (C && C.__esModule)
        return C;
      if (C === null || typeof C != "object" && typeof C != "function")
        return { default: C };
      var V = y(D);
      if (V && V.has(C))
        return V.get(C);
      var _ = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var z in C)
        if (z !== "default" && Object.prototype.hasOwnProperty.call(C, z)) {
          var N = O ? Object.getOwnPropertyDescriptor(C, z) : null;
          N && (N.get || N.set) ? Object.defineProperty(_, z, N) : _[z] = C[z];
        }
      return _.default = C, V && V.set(C, _), _;
    }
    function v() {
      return v = Object.assign ? Object.assign.bind() : function(C) {
        for (var D = 1; D < arguments.length; D++) {
          var V = arguments[D];
          for (var _ in V)
            Object.prototype.hasOwnProperty.call(V, _) && (C[_] = V[_]);
        }
        return C;
      }, v.apply(this, arguments);
    }
    function S(C, D, V) {
      return D = A(D), D in C ? Object.defineProperty(C, D, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : C[D] = V, C;
    }
    function A(C) {
      var D = M(C, "string");
      return typeof D == "symbol" ? D : String(D);
    }
    function M(C, D) {
      if (typeof C != "object" || C === null) return C;
      var V = C[Symbol.toPrimitive];
      if (V !== void 0) {
        var _ = V.call(C, D);
        if (typeof _ != "object") return _;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (D === "string" ? String : Number)(C);
    }
    class k extends i.Component {
      // React 16.3+
      // Arity (props, state)
      static getDerivedStateFromProps(D, V) {
        let {
          position: _
        } = D, {
          prevPropsPosition: O
        } = V;
        return _ && (!O || _.x !== O.x || _.y !== O.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
          position: _,
          prevPropsPosition: O
        }), {
          x: _.x,
          y: _.y,
          prevPropsPosition: {
            ..._
          }
        }) : null;
      }
      constructor(D) {
        super(D), S(this, "onDragStart", (V, _) => {
          if ((0, p.default)("Draggable: onDragStart: %j", _), this.props.onStart(V, (0, u.createDraggableData)(this, _)) === !1) return !1;
          this.setState({
            dragging: !0,
            dragged: !0
          });
        }), S(this, "onDrag", (V, _) => {
          if (!this.state.dragging) return !1;
          (0, p.default)("Draggable: onDrag: %j", _);
          const O = (0, u.createDraggableData)(this, _), z = {
            x: O.x,
            y: O.y,
            slackX: 0,
            slackY: 0
          };
          if (this.props.bounds) {
            const {
              x: F,
              y: L
            } = z;
            z.x += this.state.slackX, z.y += this.state.slackY;
            const [J, Z] = (0, u.getBoundPosition)(this, z.x, z.y);
            z.x = J, z.y = Z, z.slackX = this.state.slackX + (F - z.x), z.slackY = this.state.slackY + (L - z.y), O.x = z.x, O.y = z.y, O.deltaX = z.x - this.state.x, O.deltaY = z.y - this.state.y;
          }
          if (this.props.onDrag(V, O) === !1) return !1;
          this.setState(z);
        }), S(this, "onDragStop", (V, _) => {
          if (!this.state.dragging || this.props.onStop(V, (0, u.createDraggableData)(this, _)) === !1) return !1;
          (0, p.default)("Draggable: onDragStop: %j", _);
          const z = {
            dragging: !1,
            slackX: 0,
            slackY: 0
          };
          if (!!this.props.position) {
            const {
              x: F,
              y: L
            } = this.props.position;
            z.x = F, z.y = L;
          }
          this.setState(z);
        }), this.state = {
          // Whether or not we are currently dragging.
          dragging: !1,
          // Whether or not we have been dragged before.
          dragged: !1,
          // Current transform x and y.
          x: D.position ? D.position.x : D.defaultPosition.x,
          y: D.position ? D.position.y : D.defaultPosition.y,
          prevPropsPosition: {
            ...D.position
          },
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: !1
        }, D.position && !(D.onDrag || D.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
      }
      componentDidMount() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
      componentWillUnmount() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
      findDOMNode() {
        var D, V;
        return (D = (V = this.props) === null || V === void 0 || (V = V.nodeRef) === null || V === void 0 ? void 0 : V.current) !== null && D !== void 0 ? D : a.default.findDOMNode(this);
      }
      render() {
        const {
          axis: D,
          bounds: V,
          children: _,
          defaultPosition: O,
          defaultClassName: z,
          defaultClassNameDragging: N,
          defaultClassNameDragged: F,
          position: L,
          positionOffset: J,
          scale: Z,
          ...nt
        } = this.props;
        let it = {}, lt = null;
        const K = !!!L || this.state.dragging, rt = L || O, yt = {
          // Set left if horizontal drag is enabled
          x: (0, u.canDragX)(this) && K ? this.state.x : rt.x,
          // Set top if vertical drag is enabled
          y: (0, u.canDragY)(this) && K ? this.state.y : rt.y
        };
        this.state.isElementSVG ? lt = (0, c.createSVGTransform)(yt, J) : it = (0, c.createCSSTransform)(yt, J);
        const x = (0, s.default)(_.props.className || "", z, {
          [N]: this.state.dragging,
          [F]: this.state.dragged
        });
        return /* @__PURE__ */ i.createElement(d.default, v({}, nt, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ i.cloneElement(i.Children.only(_), {
          className: x,
          style: {
            ..._.props.style,
            ...it
          },
          transform: lt
        }));
      }
    }
    t.default = k, S(k, "displayName", "Draggable"), S(k, "propTypes", {
      // Accepts all props <DraggableCore> accepts.
      ...d.default.propTypes,
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: r.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: r.default.oneOfType([r.default.shape({
        left: r.default.number,
        right: r.default.number,
        top: r.default.number,
        bottom: r.default.number
      }), r.default.string, r.default.oneOf([!1])]),
      defaultClassName: r.default.string,
      defaultClassNameDragging: r.default.string,
      defaultClassNameDragged: r.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: r.default.shape({
        x: r.default.number,
        y: r.default.number
      }),
      positionOffset: r.default.shape({
        x: r.default.oneOfType([r.default.number, r.default.string]),
        y: r.default.oneOfType([r.default.number, r.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: r.default.shape({
        x: r.default.number,
        y: r.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: h.dontSetMe,
      style: h.dontSetMe,
      transform: h.dontSetMe
    }), S(k, "defaultProps", {
      ...d.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    });
  }(_f)), _f;
}
var Cv;
function c3() {
  if (Cv) return sl.exports;
  Cv = 1;
  const {
    default: t,
    DraggableCore: i
  } = u3();
  return sl.exports = t, sl.exports.default = t, sl.exports.DraggableCore = i, sl.exports;
}
var f3 = c3();
const h3 = /* @__PURE__ */ Ds(f3);
var gd = Vs(), ne = function() {
  return ne = Object.assign || function(t) {
    for (var i, r = 1, a = arguments.length; r < a; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, ne.apply(this, arguments);
}, zv = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
}, Mv = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
}, us = {
  width: "20px",
  height: "20px",
  position: "absolute",
  zIndex: 1
}, d3 = {
  top: ne(ne({}, zv), { top: "-5px" }),
  right: ne(ne({}, Mv), { left: void 0, right: "-5px" }),
  bottom: ne(ne({}, zv), { top: void 0, bottom: "-5px" }),
  left: ne(ne({}, Mv), { left: "-5px" }),
  topRight: ne(ne({}, us), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: ne(ne({}, us), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: ne(ne({}, us), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: ne(ne({}, us), { left: "-10px", top: "-10px", cursor: "nw-resize" })
}, p3 = $.memo(function(t) {
  var i = t.onResizeStart, r = t.direction, a = t.children, s = t.replaceStyles, c = t.className, u = $.useCallback(function(p) {
    i(p, r);
  }, [i, r]), h = $.useCallback(function(p) {
    i(p, r);
  }, [i, r]), d = $.useMemo(function() {
    return ne(ne({ position: "absolute", userSelect: "none" }, d3[r]), s ?? {});
  }, [s, r]);
  return ft.jsx("div", { className: c || void 0, style: d, onMouseDown: u, onTouchStart: h, children: a });
}), m3 = /* @__PURE__ */ function() {
  var t = function(i, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
      a.__proto__ = s;
    } || function(a, s) {
      for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (a[c] = s[c]);
    }, t(i, r);
  };
  return function(i, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(i, r);
    function a() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), En = function() {
  return En = Object.assign || function(t) {
    for (var i, r = 1, a = arguments.length; r < a; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, En.apply(this, arguments);
}, g3 = {
  width: "auto",
  height: "auto"
}, cs = function(t, i, r) {
  return Math.max(Math.min(t, r), i);
}, Rv = function(t, i, r) {
  var a = Math.round(t / i);
  return a * i + r * (a - 1);
}, Hr = function(t, i) {
  return new RegExp(t, "i").test(i);
}, fs = function(t) {
  return !!(t.touches && t.touches.length);
}, y3 = function(t) {
  return !!((t.clientX || t.clientX === 0) && (t.clientY || t.clientY === 0));
}, Ov = function(t, i, r) {
  r === void 0 && (r = 0);
  var a = i.reduce(function(c, u, h) {
    return Math.abs(u - t) < Math.abs(i[c] - t) ? h : c;
  }, 0), s = Math.abs(i[a] - t);
  return r === 0 || s < r ? i[a] : t;
}, Uf = function(t) {
  return t = t.toString(), t === "auto" || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : "".concat(t, "px");
}, hs = function(t, i, r, a) {
  if (t && typeof t == "string") {
    if (t.endsWith("px"))
      return Number(t.replace("px", ""));
    if (t.endsWith("%")) {
      var s = Number(t.replace("%", "")) / 100;
      return i * s;
    }
    if (t.endsWith("vw")) {
      var s = Number(t.replace("vw", "")) / 100;
      return r * s;
    }
    if (t.endsWith("vh")) {
      var s = Number(t.replace("vh", "")) / 100;
      return a * s;
    }
  }
  return t;
}, v3 = function(t, i, r, a, s, c, u) {
  return a = hs(a, t.width, i, r), s = hs(s, t.height, i, r), c = hs(c, t.width, i, r), u = hs(u, t.height, i, r), {
    maxWidth: typeof a > "u" ? void 0 : Number(a),
    maxHeight: typeof s > "u" ? void 0 : Number(s),
    minWidth: typeof c > "u" ? void 0 : Number(c),
    minHeight: typeof u > "u" ? void 0 : Number(u)
  };
}, b3 = function(t) {
  return Array.isArray(t) ? t : [t, t];
}, w3 = [
  "as",
  "ref",
  "style",
  "className",
  "grid",
  "gridGap",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], _v = "__resizable_base__", x3 = (
  /** @class */
  function(t) {
    m3(i, t);
    function i(r) {
      var a, s, c, u, h = t.call(this, r) || this;
      return h.ratio = 1, h.resizable = null, h.parentLeft = 0, h.parentTop = 0, h.resizableLeft = 0, h.resizableRight = 0, h.resizableTop = 0, h.resizableBottom = 0, h.targetLeft = 0, h.targetTop = 0, h.delta = {
        width: 0,
        height: 0
      }, h.appendBase = function() {
        if (!h.resizable || !h.window)
          return null;
        var d = h.parentNode;
        if (!d)
          return null;
        var p = h.window.document.createElement("div");
        return p.style.width = "100%", p.style.height = "100%", p.style.position = "absolute", p.style.transform = "scale(0, 0)", p.style.left = "0", p.style.flex = "0 0 100%", p.classList ? p.classList.add(_v) : p.className += _v, d.appendChild(p), p;
      }, h.removeBase = function(d) {
        var p = h.parentNode;
        p && p.removeChild(d);
      }, h.state = {
        isResizing: !1,
        width: (s = (a = h.propsSize) === null || a === void 0 ? void 0 : a.width) !== null && s !== void 0 ? s : "auto",
        height: (u = (c = h.propsSize) === null || c === void 0 ? void 0 : c.height) !== null && u !== void 0 ? u : "auto",
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, h.onResizeStart = h.onResizeStart.bind(h), h.onMouseMove = h.onMouseMove.bind(h), h.onMouseUp = h.onMouseUp.bind(h), h;
    }
    return Object.defineProperty(i.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || g3;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "size", {
      get: function() {
        var r = 0, a = 0;
        if (this.resizable && this.window) {
          var s = this.resizable.offsetWidth, c = this.resizable.offsetHeight, u = this.resizable.style.position;
          u !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : s, a = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : c, this.resizable.style.position = u;
        }
        return { width: r, height: a };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "sizeStyle", {
      get: function() {
        var r = this, a = this.props.size, s = function(h) {
          var d;
          if (typeof r.state[h] > "u" || r.state[h] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[h] && (!((d = r.propsSize[h]) === null || d === void 0) && d.toString().endsWith("%"))) {
            if (r.state[h].toString().endsWith("%"))
              return r.state[h].toString();
            var p = r.getParentSize(), g = Number(r.state[h].toString().replace("px", "")), y = g / p[h] * 100;
            return "".concat(y, "%");
          }
          return Uf(r.state[h]);
        }, c = a && typeof a.width < "u" && !this.state.isResizing ? Uf(a.width) : s("width"), u = a && typeof a.height < "u" && !this.state.isResizing ? Uf(a.height) : s("height");
        return { width: c, height: u };
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var a = !1, s = this.parentNode.style.flexWrap;
      s !== "wrap" && (a = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var c = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return a && (this.parentNode.style.flexWrap = s), this.removeBase(r), c;
    }, i.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, i.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, i.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, i.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, i.prototype.createSizeForCssProperty = function(r, a) {
      var s = this.propsSize && this.propsSize[a];
      return this.state[a] === "auto" && this.state.original[a] === r && (typeof s > "u" || s === "auto") ? "auto" : r;
    }, i.prototype.calculateNewMaxFromBoundary = function(r, a) {
      var s = this.props.boundsByDirection, c = this.state.direction, u = s && Hr("left", c), h = s && Hr("top", c), d, p;
      if (this.props.bounds === "parent") {
        var g = this.parentNode;
        g && (d = u ? this.resizableRight - this.parentLeft : g.offsetWidth + (this.parentLeft - this.resizableLeft), p = h ? this.resizableBottom - this.parentTop : g.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (d = u ? this.resizableRight : this.window.innerWidth - this.resizableLeft, p = h ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (d = u ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), p = h ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return d && Number.isFinite(d) && (r = r && r < d ? r : d), p && Number.isFinite(p) && (a = a && a < p ? a : p), { maxWidth: r, maxHeight: a };
    }, i.prototype.calculateNewSizeFromDirection = function(r, a) {
      var s = this.props.scale || 1, c = b3(this.props.resizeRatio || 1), u = c[0], h = c[1], d = this.state, p = d.direction, g = d.original, y = this.props, b = y.lockAspectRatio, v = y.lockAspectRatioExtraHeight, S = y.lockAspectRatioExtraWidth, A = g.width, M = g.height, k = v || 0, C = S || 0;
      return Hr("right", p) && (A = g.width + (r - g.x) * u / s, b && (M = (A - C) / this.ratio + k)), Hr("left", p) && (A = g.width - (r - g.x) * u / s, b && (M = (A - C) / this.ratio + k)), Hr("bottom", p) && (M = g.height + (a - g.y) * h / s, b && (A = (M - k) * this.ratio + C)), Hr("top", p) && (M = g.height - (a - g.y) * h / s, b && (A = (M - k) * this.ratio + C)), { newWidth: A, newHeight: M };
    }, i.prototype.calculateNewSizeFromAspectRatio = function(r, a, s, c) {
      var u = this.props, h = u.lockAspectRatio, d = u.lockAspectRatioExtraHeight, p = u.lockAspectRatioExtraWidth, g = typeof c.width > "u" ? 10 : c.width, y = typeof s.width > "u" || s.width < 0 ? r : s.width, b = typeof c.height > "u" ? 10 : c.height, v = typeof s.height > "u" || s.height < 0 ? a : s.height, S = d || 0, A = p || 0;
      if (h) {
        var M = (b - S) * this.ratio + A, k = (v - S) * this.ratio + A, C = (g - A) / this.ratio + S, D = (y - A) / this.ratio + S, V = Math.max(g, M), _ = Math.min(y, k), O = Math.max(b, C), z = Math.min(v, D);
        r = cs(r, V, _), a = cs(a, O, z);
      } else
        r = cs(r, g, y), a = cs(a, b, v);
      return { newWidth: r, newHeight: a };
    }, i.prototype.setBoundingClientRect = function() {
      var r = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var a = this.parentNode;
        if (a) {
          var s = a.getBoundingClientRect();
          this.parentLeft = s.left * r, this.parentTop = s.top * r;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var c = this.props.bounds.getBoundingClientRect();
        this.targetLeft = c.left * r, this.targetTop = c.top * r;
      }
      if (this.resizable) {
        var u = this.resizable.getBoundingClientRect(), h = u.left, d = u.top, p = u.right, g = u.bottom;
        this.resizableLeft = h * r, this.resizableRight = p * r, this.resizableTop = d * r, this.resizableBottom = g * r;
      }
    }, i.prototype.onResizeStart = function(r, a) {
      if (!(!this.resizable || !this.window)) {
        var s = 0, c = 0;
        if (r.nativeEvent && y3(r.nativeEvent) ? (s = r.nativeEvent.clientX, c = r.nativeEvent.clientY) : r.nativeEvent && fs(r.nativeEvent) && (s = r.nativeEvent.touches[0].clientX, c = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var u = this.props.onResizeStart(r, a, this.resizable);
          if (u === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var h, d = this.window.getComputedStyle(this.resizable);
        if (d.flexBasis !== "auto") {
          var p = this.parentNode;
          if (p) {
            var g = this.window.getComputedStyle(p).flexDirection;
            this.flexDir = g.startsWith("row") ? "row" : "column", h = d.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var y = {
          original: {
            x: s,
            y: c,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: En(En({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: a,
          flexBasis: h
        };
        this.setState(y);
      }
    }, i.prototype.onMouseMove = function(r) {
      var a = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && fs(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var s = this.props, c = s.maxWidth, u = s.maxHeight, h = s.minWidth, d = s.minHeight, p = fs(r) ? r.touches[0].clientX : r.clientX, g = fs(r) ? r.touches[0].clientY : r.clientY, y = this.state, b = y.direction, v = y.original, S = y.width, A = y.height, M = this.getParentSize(), k = v3(M, this.window.innerWidth, this.window.innerHeight, c, u, h, d);
        c = k.maxWidth, u = k.maxHeight, h = k.minWidth, d = k.minHeight;
        var C = this.calculateNewSizeFromDirection(p, g), D = C.newHeight, V = C.newWidth, _ = this.calculateNewMaxFromBoundary(c, u);
        this.props.snap && this.props.snap.x && (V = Ov(V, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (D = Ov(D, this.props.snap.y, this.props.snapGap));
        var O = this.calculateNewSizeFromAspectRatio(V, D, { width: _.maxWidth, height: _.maxHeight }, { width: h, height: d });
        if (V = O.newWidth, D = O.newHeight, this.props.grid) {
          var z = Rv(V, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), N = Rv(D, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), F = this.props.snapGap || 0, L = F === 0 || Math.abs(z - V) <= F ? z : V, J = F === 0 || Math.abs(N - D) <= F ? N : D;
          V = L, D = J;
        }
        var Z = {
          width: V - v.width,
          height: D - v.height
        };
        if (this.delta = Z, S && typeof S == "string") {
          if (S.endsWith("%")) {
            var nt = V / M.width * 100;
            V = "".concat(nt, "%");
          } else if (S.endsWith("vw")) {
            var it = V / this.window.innerWidth * 100;
            V = "".concat(it, "vw");
          } else if (S.endsWith("vh")) {
            var lt = V / this.window.innerHeight * 100;
            V = "".concat(lt, "vh");
          }
        }
        if (A && typeof A == "string") {
          if (A.endsWith("%")) {
            var nt = D / M.height * 100;
            D = "".concat(nt, "%");
          } else if (A.endsWith("vw")) {
            var it = D / this.window.innerWidth * 100;
            D = "".concat(it, "vw");
          } else if (A.endsWith("vh")) {
            var lt = D / this.window.innerHeight * 100;
            D = "".concat(lt, "vh");
          }
        }
        var P = {
          width: this.createSizeForCssProperty(V, "width"),
          height: this.createSizeForCssProperty(D, "height")
        };
        this.flexDir === "row" ? P.flexBasis = P.width : this.flexDir === "column" && (P.flexBasis = P.height);
        var K = this.state.width !== P.width, rt = this.state.height !== P.height, yt = this.state.flexBasis !== P.flexBasis, x = K || rt || yt;
        x && gd.flushSync(function() {
          a.setState(P);
        }), this.props.onResize && x && this.props.onResize(r, b, this.resizable, Z);
      }
    }, i.prototype.onMouseUp = function(r) {
      var a, s, c = this.state, u = c.isResizing, h = c.direction;
      c.original, !(!u || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(r, h, this.resizable, this.delta), this.props.size && this.setState({ width: (a = this.props.size.width) !== null && a !== void 0 ? a : "auto", height: (s = this.props.size.height) !== null && s !== void 0 ? s : "auto" }), this.unbindEvents(), this.setState({
        isResizing: !1,
        backgroundStyle: En(En({}, this.state.backgroundStyle), { cursor: "auto" })
      }));
    }, i.prototype.updateSize = function(r) {
      var a, s;
      this.setState({ width: (a = r.width) !== null && a !== void 0 ? a : "auto", height: (s = r.height) !== null && s !== void 0 ? s : "auto" });
    }, i.prototype.renderResizer = function() {
      var r = this, a = this.props, s = a.enable, c = a.handleStyles, u = a.handleClasses, h = a.handleWrapperStyle, d = a.handleWrapperClass, p = a.handleComponent;
      if (!s)
        return null;
      var g = Object.keys(s).map(function(y) {
        return s[y] !== !1 ? ft.jsx(p3, { direction: y, onResizeStart: r.onResizeStart, replaceStyles: c && c[y], className: u && u[y], children: p && p[y] ? p[y] : null }, y) : null;
      });
      return ft.jsx("div", { className: d, style: h, children: g });
    }, i.prototype.render = function() {
      var r = this, a = Object.keys(this.props).reduce(function(u, h) {
        return w3.indexOf(h) !== -1 || (u[h] = r.props[h]), u;
      }, {}), s = En(En(En({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (s.flexBasis = this.state.flexBasis);
      var c = this.props.as || "div";
      return ft.jsxs(c, En({ style: s, className: this.props.className }, a, {
        // `ref` is after `extendsProps` to ensure this one wins over a version
        // passed in
        ref: function(u) {
          u && (r.resizable = u);
        },
        children: [this.state.isResizing && ft.jsx("div", { style: this.state.backgroundStyle }), this.props.children, this.renderResizer()]
      }));
    }, i.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      gridGap: [0, 0],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, i;
  }($.PureComponent)
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var yh = function(t, i) {
  return yh = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
    r.__proto__ = a;
  } || function(r, a) {
    for (var s in a) a.hasOwnProperty(s) && (r[s] = a[s]);
  }, yh(t, i);
};
function S3(t, i) {
  yh(t, i);
  function r() {
    this.constructor = t;
  }
  t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
}
var oe = function() {
  return oe = Object.assign || function(i) {
    for (var r, a = 1, s = arguments.length; a < s; a++) {
      r = arguments[a];
      for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (i[c] = r[c]);
    }
    return i;
  }, oe.apply(this, arguments);
};
function T3(t, i) {
  var r = {};
  for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && i.indexOf(a) < 0 && (r[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      i.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (r[a[s]] = t[a[s]]);
  return r;
}
var k3 = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, E3 = function(t) {
  return {
    bottom: t,
    bottomLeft: t,
    bottomRight: t,
    left: t,
    right: t,
    top: t,
    topLeft: t,
    topRight: t
  };
}, A3 = (
  /** @class */
  function(t) {
    S3(i, t);
    function i(r) {
      var a = t.call(this, r) || this;
      return a.resizingPosition = { x: 0, y: 0 }, a.offsetFromParent = { left: 0, top: 0 }, a.resizableElement = { current: null }, a.originalPosition = { x: 0, y: 0 }, a.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: r.maxWidth,
        maxHeight: r.maxHeight
      }, a.onResizeStart = a.onResizeStart.bind(a), a.onResize = a.onResize.bind(a), a.onResizeStop = a.onResizeStop.bind(a), a.onDragStart = a.onDragStart.bind(a), a.onDrag = a.onDrag.bind(a), a.onDragStop = a.onDragStop.bind(a), a.getMaxSizesFromProps = a.getMaxSizesFromProps.bind(a), a;
    }
    return i.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, a = r.left, s = r.top, c = this.getDraggablePosition(), u = c.x, h = c.y;
      this.draggable.setState({
        x: u - a,
        y: h - s
      }), this.forceUpdate();
    }, i.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, a = r.x, s = r.y;
      return { x: a, y: s };
    }, i.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, i.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, i.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, a = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: a };
    }, i.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, i.prototype.getOffsetHeight = function(r) {
      var a = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / a;
        case "body":
          return document.body.offsetHeight / a;
        default:
          return r.offsetHeight;
      }
    }, i.prototype.getOffsetWidth = function(r) {
      var a = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / a;
        case "body":
          return document.body.offsetWidth / a;
        default:
          return r.offsetWidth;
      }
    }, i.prototype.onDragStart = function(r, a) {
      this.props.onDragStart && this.props.onDragStart(r, a);
      var s = this.getDraggablePosition();
      if (this.originalPosition = s, !!this.props.bounds) {
        var c = this.getParent(), u = this.props.scale, h;
        if (this.props.bounds === "parent")
          h = c;
        else if (this.props.bounds === "body") {
          var d = c.getBoundingClientRect(), p = d.left, g = d.top, y = document.body.getBoundingClientRect(), b = -(p - c.offsetLeft * u - y.left) / u, v = -(g - c.offsetTop * u - y.top) / u, S = (document.body.offsetWidth - this.resizable.size.width * u) / u + b, A = (document.body.offsetHeight - this.resizable.size.height * u) / u + v;
          return this.setState({ bounds: { top: v, right: S, bottom: A, left: b } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var M = c.getBoundingClientRect(), k = M.left, C = M.top, D = -(k - c.offsetLeft * u) / u, V = -(C - c.offsetTop * u) / u, S = (window.innerWidth - this.resizable.size.width * u) / u + D, A = (window.innerHeight - this.resizable.size.height * u) / u + V;
          return this.setState({ bounds: { top: V, right: S, bottom: A, left: D } });
        } else typeof this.props.bounds == "string" ? h = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (h = this.props.bounds);
        if (!(!(h instanceof HTMLElement) || !(c instanceof HTMLElement))) {
          var _ = h.getBoundingClientRect(), O = _.left, z = _.top, N = c.getBoundingClientRect(), F = N.left, L = N.top, J = (O - F) / u, Z = z - L;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var nt = this.offsetFromParent;
            this.setState({
              bounds: {
                top: Z - nt.top,
                right: J + (h.offsetWidth - this.resizable.size.width) - nt.left / u,
                bottom: Z + (h.offsetHeight - this.resizable.size.height) - nt.top,
                left: J - nt.left / u
              }
            });
          }
        }
      }
    }, i.prototype.onDrag = function(r, a) {
      if (this.props.onDrag) {
        var s = this.offsetFromParent, c = s.left, u = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, oe(oe({}, a), { x: a.x + c, y: a.y + u }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, oe(oe({}, a), { x: a.x + c, y: this.originalPosition.y + u, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, oe(oe({}, a), { x: this.originalPosition.x + c, y: a.y + u, deltaX: 0 }));
      }
    }, i.prototype.onDragStop = function(r, a) {
      if (this.props.onDragStop) {
        var s = this.offsetFromParent, c = s.left, u = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, oe(oe({}, a), { x: a.x + c, y: a.y + u }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, oe(oe({}, a), { x: a.x + c, y: this.originalPosition.y + u, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, oe(oe({}, a), { x: this.originalPosition.x + c, y: a.y + u, deltaX: 0 }));
      }
    }, i.prototype.onResizeStart = function(r, a, s) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var c = this.props.scale, u = this.offsetFromParent, h = this.getDraggablePosition();
      if (this.resizingPosition = { x: h.x + u.left, y: h.y + u.top }, this.originalPosition = h, this.props.bounds) {
        var d = this.getParent(), p = void 0;
        this.props.bounds === "parent" ? p = d : this.props.bounds === "body" ? p = document.body : this.props.bounds === "window" ? p = window : typeof this.props.bounds == "string" ? p = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (p = this.props.bounds);
        var g = this.getSelfElement();
        if (g instanceof Element && (p instanceof HTMLElement || p === window) && d instanceof HTMLElement) {
          var y = this.getMaxSizesFromProps(), b = y.maxWidth, v = y.maxHeight, S = this.getParentSize();
          if (b && typeof b == "string")
            if (b.endsWith("%")) {
              var A = Number(b.replace("%", "")) / 100;
              b = S.width * A;
            } else b.endsWith("px") && (b = Number(b.replace("px", "")));
          if (v && typeof v == "string")
            if (v.endsWith("%")) {
              var A = Number(v.replace("%", "")) / 100;
              v = S.height * A;
            } else v.endsWith("px") && (v = Number(v.replace("px", "")));
          var M = g.getBoundingClientRect(), k = M.left, C = M.top, D = this.props.bounds === "window" ? { left: 0, top: 0 } : p.getBoundingClientRect(), V = D.left, _ = D.top, O = this.getOffsetWidth(p), z = this.getOffsetHeight(p), N = a.toLowerCase().endsWith("left"), F = a.toLowerCase().endsWith("right"), L = a.startsWith("top"), J = a.startsWith("bottom");
          if ((N || L) && this.resizable) {
            var Z = (k - V) / c + this.resizable.size.width;
            this.setState({ maxWidth: Z > Number(b) ? b : Z });
          }
          if (F || this.props.lockAspectRatio && !N && !L) {
            var Z = O + (V - k) / c;
            this.setState({ maxWidth: Z > Number(b) ? b : Z });
          }
          if ((L || N) && this.resizable) {
            var Z = (C - _) / c + this.resizable.size.height;
            this.setState({
              maxHeight: Z > Number(v) ? v : Z
            });
          }
          if (J || this.props.lockAspectRatio && !L && !N) {
            var Z = z + (_ - C) / c;
            this.setState({
              maxHeight: Z > Number(v) ? v : Z
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, a, s);
    }, i.prototype.onResize = function(r, a, s, c) {
      var u = this, h = { x: this.originalPosition.x, y: this.originalPosition.y }, d = -c.width, p = -c.height, g = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      g.includes(a) && (a === "bottomLeft" ? h.x += d : (a === "topRight" || (h.x += d), h.y += p));
      var y = this.draggable.state;
      (h.x !== y.x || h.y !== y.y) && gd.flushSync(function() {
        u.draggable.setState(h);
      }), this.updateOffsetFromParent();
      var b = this.offsetFromParent, v = this.getDraggablePosition().x + b.left, S = this.getDraggablePosition().y + b.top;
      this.resizingPosition = { x: v, y: S }, this.props.onResize && this.props.onResize(r, a, s, c, {
        x: v,
        y: S
      });
    }, i.prototype.onResizeStop = function(r, a, s, c) {
      this.setState({
        resizing: !1
      });
      var u = this.getMaxSizesFromProps(), h = u.maxWidth, d = u.maxHeight;
      this.setState({ maxWidth: h, maxHeight: d }), this.props.onResizeStop && this.props.onResizeStop(r, a, s, c, this.resizingPosition);
    }, i.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, i.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, i.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, a = this.getParent(), s = this.getSelfElement();
      if (!a || s === null)
        return {
          top: 0,
          left: 0
        };
      var c = a.getBoundingClientRect(), u = c.left, h = c.top, d = s.getBoundingClientRect(), p = this.getDraggablePosition(), g = a.scrollLeft, y = a.scrollTop;
      this.offsetFromParent = {
        left: d.left - u + g - p.x * r,
        top: d.top - h + y - p.y * r
      };
    }, i.prototype.render = function() {
      var r = this, a = this.props, s = a.disableDragging, c = a.style, u = a.dragHandleClassName, h = a.position, d = a.onMouseDown, p = a.onMouseUp, g = a.dragAxis, y = a.dragGrid, b = a.bounds, v = a.enableUserSelectHack, S = a.cancel, A = a.children;
      a.onResizeStart, a.onResize, a.onResizeStop, a.onDragStart, a.onDrag, a.onDragStop;
      var M = a.resizeHandleStyles, k = a.resizeHandleClasses, C = a.resizeHandleComponent, D = a.enableResizing, V = a.resizeGrid, _ = a.resizeHandleWrapperClass, O = a.resizeHandleWrapperStyle, z = a.scale, N = a.allowAnyClick, F = a.dragPositionOffset, L = T3(a, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick", "dragPositionOffset"]), J = this.props.default ? oe({}, this.props.default) : void 0;
      delete L.default;
      var Z = s || u ? { cursor: "auto" } : { cursor: "move" }, nt = oe(oe(oe({}, k3), Z), c), it = this.offsetFromParent, lt = it.left, P = it.top, K;
      h && (K = {
        x: h.x - lt,
        y: h.y - P
      });
      var rt = this.state.resizing ? void 0 : K, yt = this.state.resizing ? "both" : g;
      return $.createElement(
        h3,
        {
          ref: function(x) {
            x && (r.draggable = x);
          },
          handle: u ? ".".concat(u) : void 0,
          defaultPosition: J,
          onMouseDown: d,
          // @ts-expect-error
          onMouseUp: p,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          axis: yt,
          disabled: s,
          grid: y,
          bounds: b ? this.state.bounds : void 0,
          position: rt,
          enableUserSelectHack: v,
          cancel: S,
          scale: z,
          allowAnyClick: N,
          nodeRef: this.resizableElement,
          positionOffset: F
        },
        $.createElement(x3, oe({}, L, { ref: function(x) {
          x && (r.resizable = x, r.resizableElement.current = x.resizable);
        }, defaultSize: J, size: this.props.size, enable: typeof D == "boolean" ? E3(D) : D, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: nt, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: V, handleWrapperClass: _, handleWrapperStyle: O, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: M, handleClasses: k, handleComponent: C, scale: this.props.scale }), A)
      );
    }, i.defaultProps = {
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER,
      scale: 1,
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragStop: function() {
      }
    }, i;
  }($.PureComponent)
);
const D3 = ({ portalTarget: t = document.body, ...i }) => {
  const [r, a] = $.useState(!1), [s, c] = $.useState(!1), [u, h] = $.useState(() => ({
    width: Math.max(640, window.innerWidth / 2.25),
    height: Math.max(560, window.innerHeight / 1.4)
  }));
  console.log("size:", u);
  const [d, p] = $.useState(() => ({
    x: window.innerWidth - u.width - 24,
    y: window.innerHeight - u.height - 96
  })), [g, y] = $.useState(!1);
  $.useEffect(() => {
    const S = Number(localStorage.getItem("chatTooltipCount") ?? "0");
    S < 99999 && (y(!0), localStorage.setItem("chatTooltipCount", String(S + 1)));
  }, []), $.useEffect(() => {
    if (!g) return;
    const S = setTimeout(() => y(!1), 8e3);
    return () => clearTimeout(S);
  }, [g]), $.useEffect(() => {
    const S = (A) => A.key === "Escape" && c(!1);
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, []);
  const b = () => c((S) => !S), v = /* @__PURE__ */ ft.jsx(
    mf.div,
    {
      className: Es("h-full w-full overflow-hidden bg-white shadow-2xl", s ? "border-none" : "rounded-xl border border-gray-300"),
      layout: !0,
      variants: M3,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: /* @__PURE__ */ ft.jsx(
        e3,
        {
          ...i,
          isFullScreen: s,
          onToggleFullScreen: b,
          onClose: () => {
            c(!1), a(!1);
          }
        }
      )
    }
  );
  return /* @__PURE__ */ ft.jsxs(ft.Fragment, { children: [
    /* @__PURE__ */ ft.jsx(fy, { children: g && !r && /* @__PURE__ */ ft.jsx(
      mf.div,
      {
        className: "fixed right-6 bottom-27 z-[9999] rounded-lg bg-gray-100 px-3 pt-1.5 pb-1 text-sm font-medium text-gray-600/85 select-none",
        initial: { opacity: 0, y: 10, transition: { duration: 0.3 } },
        animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
        transition: { type: "spring", stiffness: 200, damping: 20, duration: 0.5 },
        children: /* @__PURE__ */ ft.jsx("span", { className: "ml-1 inline-block [width:0] [animation:typing_2s_steps(28,end)_0.3s_forwards,_blink_1s_step-end_infinite] overflow-hidden border-r-2 border-gray-400/70 whitespace-nowrap", children: "Hello, I’m here to help with any of your scraping requests!" })
      },
      "chat-tooltip"
    ) }),
    /* @__PURE__ */ ft.jsx(
      mf.button,
      {
        type: "button",
        "aria-label": r ? "Close chat" : "Open chat",
        onClick: () => a((S) => !S),
        className: "fixed right-6 bottom-6 z-[9999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg focus:outline-none",
        variants: z3,
        animate: r ? "open" : "closed",
        whileTap: { scale: 0.9 },
        children: r ? /* @__PURE__ */ ft.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "h-8 w-8", children: /* @__PURE__ */ ft.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) : /* @__PURE__ */ ft.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "h-8 w-8", children: /* @__PURE__ */ ft.jsx(
          "path",
          {
            d: "M2 12a9.985 9.985 0 0110-10 9.985 9.985 0 019.95 11.112A9.996 9.996 0 0112 22h-.877L6 24l1.938-4.875A9.995 9.995 0 012 12z",
            fill: "currentColor"
          }
        ) })
      }
    ),
    gd.createPortal(
      /* @__PURE__ */ ft.jsx(fy, { children: r && /* @__PURE__ */ ft.jsx(
        A3,
        {
          bounds: "window",
          disableDragging: s,
          enableResizing: s ? {} : R3,
          size: s ? { width: "100vw", height: "100vh" } : u,
          position: s ? { x: 0, y: 0 } : d,
          onDragStop: (S, A) => p({ x: A.x, y: A.y }),
          onResizeStop: (S, A, M, k, C) => {
            h({ width: M.offsetWidth, height: M.offsetHeight }), p(C);
          },
          className: Es("fixed", s ? "z-[9999]" : "z-[9998]"),
          style: { borderRadius: s ? 0 : "0.75rem" },
          dragHandleClassName: "chat-drag-handle",
          children: v
        }
      ) }),
      t
    )
  ] });
}, C3 = {
  duration: 2.1,
  repeat: 1 / 0,
  repeatType: "loop",
  ease: "easeInOut"
}, z3 = {
  closed: {
    y: [0, -4, 0],
    scale: 1,
    transition: { y: C3 }
    // <— only y loops
  },
  open: {
    y: 0,
    scale: 0.8,
    originX: 1,
    originY: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 }
  }
}, M3 = {
  hidden: { opacity: 0, scale: 0.8, y: 30, originX: 1, originY: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.75, y: -24, transition: { duration: 0.25 } }
}, R3 = {
  top: !0,
  left: !0,
  right: !0,
  bottom: !0,
  topLeft: !0,
  topRight: !0,
  bottomLeft: !0,
  bottomRight: !0
};
var jf = { exports: {} }, cl = {}, Hf = { exports: {} }, Pf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nv;
function O3() {
  return Nv || (Nv = 1, function(t) {
    function i(P, K) {
      var rt = P.length;
      P.push(K);
      t: for (; 0 < rt; ) {
        var yt = rt - 1 >>> 1, x = P[yt];
        if (0 < s(x, K))
          P[yt] = K, P[rt] = x, rt = yt;
        else break t;
      }
    }
    function r(P) {
      return P.length === 0 ? null : P[0];
    }
    function a(P) {
      if (P.length === 0) return null;
      var K = P[0], rt = P.pop();
      if (rt !== K) {
        P[0] = rt;
        t: for (var yt = 0, x = P.length, Q = x >>> 1; yt < Q; ) {
          var at = 2 * (yt + 1) - 1, E = P[at], st = at + 1, St = P[st];
          if (0 > s(E, rt))
            st < x && 0 > s(St, E) ? (P[yt] = St, P[st] = rt, yt = st) : (P[yt] = E, P[at] = rt, yt = at);
          else if (st < x && 0 > s(St, rt))
            P[yt] = St, P[st] = rt, yt = st;
          else break t;
        }
      }
      return K;
    }
    function s(P, K) {
      var rt = P.sortIndex - K.sortIndex;
      return rt !== 0 ? rt : P.id - K.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, h = u.now();
      t.unstable_now = function() {
        return u.now() - h;
      };
    }
    var d = [], p = [], g = 1, y = null, b = 3, v = !1, S = !1, A = !1, M = !1, k = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function V(P) {
      for (var K = r(p); K !== null; ) {
        if (K.callback === null) a(p);
        else if (K.startTime <= P)
          a(p), K.sortIndex = K.expirationTime, i(d, K);
        else break;
        K = r(p);
      }
    }
    function _(P) {
      if (A = !1, V(P), !S)
        if (r(d) !== null)
          S = !0, O || (O = !0, Z());
        else {
          var K = r(p);
          K !== null && lt(_, K.startTime - P);
        }
    }
    var O = !1, z = -1, N = 5, F = -1;
    function L() {
      return M ? !0 : !(t.unstable_now() - F < N);
    }
    function J() {
      if (M = !1, O) {
        var P = t.unstable_now();
        F = P;
        var K = !0;
        try {
          t: {
            S = !1, A && (A = !1, C(z), z = -1), v = !0;
            var rt = b;
            try {
              e: {
                for (V(P), y = r(d); y !== null && !(y.expirationTime > P && L()); ) {
                  var yt = y.callback;
                  if (typeof yt == "function") {
                    y.callback = null, b = y.priorityLevel;
                    var x = yt(
                      y.expirationTime <= P
                    );
                    if (P = t.unstable_now(), typeof x == "function") {
                      y.callback = x, V(P), K = !0;
                      break e;
                    }
                    y === r(d) && a(d), V(P);
                  } else a(d);
                  y = r(d);
                }
                if (y !== null) K = !0;
                else {
                  var Q = r(p);
                  Q !== null && lt(
                    _,
                    Q.startTime - P
                  ), K = !1;
                }
              }
              break t;
            } finally {
              y = null, b = rt, v = !1;
            }
            K = void 0;
          }
        } finally {
          K ? Z() : O = !1;
        }
      }
    }
    var Z;
    if (typeof D == "function")
      Z = function() {
        D(J);
      };
    else if (typeof MessageChannel < "u") {
      var nt = new MessageChannel(), it = nt.port2;
      nt.port1.onmessage = J, Z = function() {
        it.postMessage(null);
      };
    } else
      Z = function() {
        k(J, 0);
      };
    function lt(P, K) {
      z = k(function() {
        P(t.unstable_now());
      }, K);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, t.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : N = 0 < P ? Math.floor(1e3 / P) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(P) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = b;
      }
      var rt = b;
      b = K;
      try {
        return P();
      } finally {
        b = rt;
      }
    }, t.unstable_requestPaint = function() {
      M = !0;
    }, t.unstable_runWithPriority = function(P, K) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var rt = b;
      b = P;
      try {
        return K();
      } finally {
        b = rt;
      }
    }, t.unstable_scheduleCallback = function(P, K, rt) {
      var yt = t.unstable_now();
      switch (typeof rt == "object" && rt !== null ? (rt = rt.delay, rt = typeof rt == "number" && 0 < rt ? yt + rt : yt) : rt = yt, P) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = rt + x, P = {
        id: g++,
        callback: K,
        priorityLevel: P,
        startTime: rt,
        expirationTime: x,
        sortIndex: -1
      }, rt > yt ? (P.sortIndex = rt, i(p, P), r(d) === null && P === r(p) && (A ? (C(z), z = -1) : A = !0, lt(_, rt - yt))) : (P.sortIndex = x, i(d, P), S || v || (S = !0, O || (O = !0, Z()))), P;
    }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function(P) {
      var K = b;
      return function() {
        var rt = b;
        b = K;
        try {
          return P.apply(this, arguments);
        } finally {
          b = rt;
        }
      };
    };
  }(Pf)), Pf;
}
var Lv;
function _3() {
  return Lv || (Lv = 1, Hf.exports = O3()), Hf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv;
function N3() {
  if (Bv) return cl;
  Bv = 1;
  var t = _3(), i = Rl(), r = Vs();
  function a(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        n += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var n = e, l = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (l = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? l : null;
  }
  function u(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e)
      throw Error(a(188));
  }
  function d(e) {
    var n = e.alternate;
    if (!n) {
      if (n = c(e), n === null) throw Error(a(188));
      return n !== e ? null : e;
    }
    for (var l = e, o = n; ; ) {
      var f = l.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === l) return h(f), e;
          if (m === o) return h(f), n;
          m = m.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== o.return) l = f, o = m;
      else {
        for (var w = !1, T = f.child; T; ) {
          if (T === l) {
            w = !0, l = f, o = m;
            break;
          }
          if (T === o) {
            w = !0, o = f, l = m;
            break;
          }
          T = T.sibling;
        }
        if (!w) {
          for (T = m.child; T; ) {
            if (T === l) {
              w = !0, l = m, o = f;
              break;
            }
            if (T === o) {
              w = !0, o = m, l = f;
              break;
            }
            T = T.sibling;
          }
          if (!w) throw Error(a(189));
        }
      }
      if (l.alternate !== o) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? e : n;
  }
  function p(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = p(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, y = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), C = Symbol.for("react.consumer"), D = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), L = Symbol.for("react.memo_cache_sentinel"), J = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = J && e[J] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var nt = Symbol.for("react.client.reference");
  function it(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === nt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case M:
        return "Profiler";
      case A:
        return "StrictMode";
      case _:
        return "Suspense";
      case O:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case C:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case z:
          return n = e.displayName || null, n !== null ? n : it(e.type) || "Memo";
        case N:
          n = e._payload, e = e._init;
          try {
            return it(e(n));
          } catch {
          }
      }
    return null;
  }
  var lt = Array.isArray, P = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], x = -1;
  function Q(e) {
    return { current: e };
  }
  function at(e) {
    0 > x || (e.current = yt[x], yt[x] = null, x--);
  }
  function E(e, n) {
    x++, yt[x] = e.current, e.current = n;
  }
  var st = Q(null), St = Q(null), ut = Q(null), re = Q(null);
  function Mt(e, n) {
    switch (E(ut, n), E(St, e), E(st, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ng(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Ng(n), e = Lg(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    at(st), E(st, e);
  }
  function ke() {
    at(st), at(St), at(ut);
  }
  function gn(e) {
    e.memoizedState !== null && E(re, e);
    var n = st.current, l = Lg(n, e.type);
    n !== l && (E(St, e), E(st, l));
  }
  function Mn(e) {
    St.current === e && (at(st), at(St)), re.current === e && (at(re), Wa._currentValue = rt);
  }
  var na = Object.prototype.hasOwnProperty, ia = t.unstable_scheduleCallback, ra = t.unstable_cancelCallback, jl = t.unstable_shouldYield, Hl = t.unstable_requestPaint, Ve = t.unstable_now, js = t.unstable_getCurrentPriorityLevel, aa = t.unstable_ImmediatePriority, la = t.unstable_UserBlockingPriority, Ji = t.unstable_NormalPriority, Hs = t.unstable_LowPriority, Pl = t.unstable_IdlePriority, Ps = t.log, qs = t.unstable_setDisableYieldValue, X = null, tt = null;
  function ht(e) {
    if (typeof Ps == "function" && qs(e), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(X, e);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : Rn, _t = Math.log, Ue = Math.LN2;
  function Rn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_t(e) / Ue | 0) | 0;
  }
  var Ce = 256, yn = 4194304;
  function je(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function se(e, n, l) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var f = 0, m = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var T = o & 134217727;
    return T !== 0 ? (o = T & ~m, o !== 0 ? f = je(o) : (w &= T, w !== 0 ? f = je(w) : l || (l = T & ~e, l !== 0 && (f = je(l))))) : (T = o & ~m, T !== 0 ? f = je(T) : w !== 0 ? f = je(w) : l || (l = o & ~e, l !== 0 && (f = je(l)))), f === 0 ? 0 : n !== 0 && n !== f && (n & m) === 0 && (m = f & -f, l = n & -n, m >= l || m === 32 && (l & 4194048) !== 0) ? n : f;
  }
  function Ke(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function cn(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yd() {
    var e = Ce;
    return Ce <<= 1, (Ce & 4194048) === 0 && (Ce = 256), e;
  }
  function vd() {
    var e = yn;
    return yn <<= 1, (yn & 62914560) === 0 && (yn = 4194304), e;
  }
  function Ys(e) {
    for (var n = [], l = 0; 31 > l; l++) n.push(e);
    return n;
  }
  function oa(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ew(e, n, l, o, f, m) {
    var w = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var T = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (l = w & ~l; 0 < l; ) {
      var G = 31 - gt(l), W = 1 << G;
      T[G] = 0, R[G] = -1;
      var q = H[G];
      if (q !== null)
        for (H[G] = null, G = 0; G < q.length; G++) {
          var Y = q[G];
          Y !== null && (Y.lane &= -536870913);
        }
      l &= ~W;
    }
    o !== 0 && bd(e, o, 0), m !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(w & ~n));
  }
  function bd(e, n, l) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - gt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | l & 4194090;
  }
  function wd(e, n) {
    var l = e.entangledLanes |= n;
    for (e = e.entanglements; l; ) {
      var o = 31 - gt(l), f = 1 << o;
      f & n | e[o] & n && (e[o] |= n), l &= ~f;
    }
  }
  function Fs(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Xs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xd() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ty(e.type));
  }
  function Aw(e, n) {
    var l = K.p;
    try {
      return K.p = e, n();
    } finally {
      K.p = l;
    }
  }
  var Zn = Math.random().toString(36).slice(2), ye = "__reactFiber$" + Zn, ze = "__reactProps$" + Zn, $i = "__reactContainer$" + Zn, Gs = "__reactEvents$" + Zn, Dw = "__reactListeners$" + Zn, Cw = "__reactHandles$" + Zn, Sd = "__reactResources$" + Zn, sa = "__reactMarker$" + Zn;
  function Is(e) {
    delete e[ye], delete e[ze], delete e[Gs], delete e[Dw], delete e[Cw];
  }
  function tr(e) {
    var n = e[ye];
    if (n) return n;
    for (var l = e.parentNode; l; ) {
      if (n = l[$i] || l[ye]) {
        if (l = n.alternate, n.child !== null || l !== null && l.child !== null)
          for (e = jg(e); e !== null; ) {
            if (l = e[ye]) return l;
            e = jg(e);
          }
        return n;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function er(e) {
    if (e = e[ye] || e[$i]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function ua(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(a(33));
  }
  function nr(e) {
    var n = e[Sd];
    return n || (n = e[Sd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function ue(e) {
    e[sa] = !0;
  }
  var Td = /* @__PURE__ */ new Set(), kd = {};
  function Di(e, n) {
    ir(e, n), ir(e + "Capture", n);
  }
  function ir(e, n) {
    for (kd[e] = n, e = 0; e < n.length; e++)
      Td.add(n[e]);
  }
  var zw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ed = {}, Ad = {};
  function Mw(e) {
    return na.call(Ad, e) ? !0 : na.call(Ed, e) ? !1 : zw.test(e) ? Ad[e] = !0 : (Ed[e] = !0, !1);
  }
  function ql(e, n, l) {
    if (Mw(n))
      if (l === null) e.removeAttribute(n);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + l);
      }
  }
  function Yl(e, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + l);
    }
  }
  function On(e, n, l, o) {
    if (o === null) e.removeAttribute(l);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(n, l, "" + o);
    }
  }
  var Qs, Dd;
  function rr(e) {
    if (Qs === void 0)
      try {
        throw Error();
      } catch (l) {
        var n = l.stack.trim().match(/\n( *(at )?)/);
        Qs = n && n[1] || "", Dd = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qs + e + Dd;
  }
  var Ks = !1;
  function Zs(e, n) {
    if (!e || Ks) return "";
    Ks = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (Y) {
                  var q = Y;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (Y) {
                  q = Y;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                q = Y;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && q && typeof Y.stack == "string")
              return [Y.stack, q.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = o.DetermineComponentFrameRoot(), w = m[0], T = m[1];
      if (w && T) {
        var R = w.split(`
`), H = T.split(`
`);
        for (f = o = 0; o < R.length && !R[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; f < H.length && !H[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (o === R.length || f === H.length)
          for (o = R.length - 1, f = H.length - 1; 1 <= o && 0 <= f && R[o] !== H[f]; )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (R[o] !== H[f]) {
            if (o !== 1 || f !== 1)
              do
                if (o--, f--, 0 > f || R[o] !== H[f]) {
                  var G = `
` + R[o].replace(" at new ", " at ");
                  return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      Ks = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? rr(l) : "";
  }
  function Rw(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return rr(e.type);
      case 16:
        return rr("Lazy");
      case 13:
        return rr("Suspense");
      case 19:
        return rr("SuspenseList");
      case 0:
      case 15:
        return Zs(e.type, !1);
      case 11:
        return Zs(e.type.render, !1);
      case 1:
        return Zs(e.type, !0);
      case 31:
        return rr("Activity");
      default:
        return "";
    }
  }
  function Cd(e) {
    try {
      var n = "";
      do
        n += Rw(e), e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Ze(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function zd(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ow(e) {
    var n = zd(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, m = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(w) {
          o = "" + w, m.call(this, w);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(w) {
          o = "" + w;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Fl(e) {
    e._valueTracker || (e._valueTracker = Ow(e));
  }
  function Md(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var l = n.getValue(), o = "";
    return e && (o = zd(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== l ? (n.setValue(e), !0) : !1;
  }
  function Xl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _w = /[\n"\\]/g;
  function We(e) {
    return e.replace(
      _w,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ws(e, n, l, o, f, m, w, T) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Ze(n)) : e.value !== "" + Ze(n) && (e.value = "" + Ze(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Js(e, w, Ze(n)) : l != null ? Js(e, w, Ze(l)) : o != null && e.removeAttribute("value"), f == null && m != null && (e.defaultChecked = !!m), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + Ze(T) : e.removeAttribute("name");
  }
  function Rd(e, n, l, o, f, m, w, T) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || l != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      l = l != null ? "" + Ze(l) : "", n = n != null ? "" + Ze(n) : l, T || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? f, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = T ? e.checked : !!o, e.defaultChecked = !!o, w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" && (e.name = w);
  }
  function Js(e, n, l) {
    n === "number" && Xl(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function ar(e, n, l, o) {
    if (e = e.options, n) {
      n = {};
      for (var f = 0; f < l.length; f++)
        n["$" + l[f]] = !0;
      for (l = 0; l < e.length; l++)
        f = n.hasOwnProperty("$" + e[l].value), e[l].selected !== f && (e[l].selected = f), f && o && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ze(l), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === l) {
          e[f].selected = !0, o && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Od(e, n, l) {
    if (n != null && (n = "" + Ze(n), n !== e.value && (e.value = n), l == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = l != null ? "" + Ze(l) : "";
  }
  function _d(e, n, l, o) {
    if (n == null) {
      if (o != null) {
        if (l != null) throw Error(a(92));
        if (lt(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        l = o;
      }
      l == null && (l = ""), n = l;
    }
    l = Ze(n), e.defaultValue = l, o = e.textContent, o === l && o !== "" && o !== null && (e.value = o);
  }
  function lr(e, n) {
    if (n) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Nw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nd(e, n, l) {
    var o = n.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, l) : typeof l != "number" || l === 0 || Nw.has(n) ? n === "float" ? e.cssFloat = l : e[n] = ("" + l).trim() : e[n] = l + "px";
  }
  function Ld(e, n, l) {
    if (n != null && typeof n != "object")
      throw Error(a(62));
    if (e = e.style, l != null) {
      for (var o in l)
        !l.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var f in n)
        o = n[f], n.hasOwnProperty(f) && l[f] !== o && Nd(e, f, o);
    } else
      for (var m in n)
        n.hasOwnProperty(m) && Nd(e, m, n[m]);
  }
  function $s(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lw = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Bw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gl(e) {
    return Bw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var tu = null;
  function eu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var or = null, sr = null;
  function Bd(e) {
    var n = er(e);
    if (n && (e = n.stateNode)) {
      var l = e[ze] || null;
      t: switch (e = n.stateNode, n.type) {
        case "input":
          if (Ws(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), n = l.name, l.type === "radio" && n != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + We(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < l.length; n++) {
              var o = l[n];
              if (o !== e && o.form === e.form) {
                var f = o[ze] || null;
                if (!f) throw Error(a(90));
                Ws(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (n = 0; n < l.length; n++)
              o = l[n], o.form === e.form && Md(o);
          }
          break t;
        case "textarea":
          Od(e, l.value, l.defaultValue);
          break t;
        case "select":
          n = l.value, n != null && ar(e, !!l.multiple, n, !1);
      }
    }
  }
  var nu = !1;
  function Vd(e, n, l) {
    if (nu) return e(n, l);
    nu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (nu = !1, (or !== null || sr !== null) && (Oo(), or && (n = or, e = sr, sr = or = null, Bd(n), e)))
        for (n = 0; n < e.length; n++) Bd(e[n]);
    }
  }
  function ca(e, n) {
    var l = e.stateNode;
    if (l === null) return null;
    var o = l[ze] || null;
    if (o === null) return null;
    l = o[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        a(231, n, typeof l)
      );
    return l;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), iu = !1;
  if (_n)
    try {
      var fa = {};
      Object.defineProperty(fa, "passive", {
        get: function() {
          iu = !0;
        }
      }), window.addEventListener("test", fa, fa), window.removeEventListener("test", fa, fa);
    } catch {
      iu = !1;
    }
  var Wn = null, ru = null, Il = null;
  function Ud() {
    if (Il) return Il;
    var e, n = ru, l = n.length, o, f = "value" in Wn ? Wn.value : Wn.textContent, m = f.length;
    for (e = 0; e < l && n[e] === f[e]; e++) ;
    var w = l - e;
    for (o = 1; o <= w && n[l - o] === f[m - o]; o++) ;
    return Il = f.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Ql(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Kl() {
    return !0;
  }
  function jd() {
    return !1;
  }
  function Me(e) {
    function n(l, o, f, m, w) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = m, this.target = w, this.currentTarget = null;
      for (var T in e)
        e.hasOwnProperty(T) && (l = e[T], this[T] = l ? l(m) : m[T]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Kl : jd, this.isPropagationStopped = jd, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Kl);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Kl);
      },
      persist: function() {
      },
      isPersistent: Kl
    }), n;
  }
  var Ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zl = Me(Ci), ha = g({}, Ci, { view: 0, detail: 0 }), Vw = Me(ha), au, lu, da, Wl = g({}, ha, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== da && (da && e.type === "mousemove" ? (au = e.screenX - da.screenX, lu = e.screenY - da.screenY) : lu = au = 0, da = e), au);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : lu;
    }
  }), Hd = Me(Wl), Uw = g({}, Wl, { dataTransfer: 0 }), jw = Me(Uw), Hw = g({}, ha, { relatedTarget: 0 }), ou = Me(Hw), Pw = g({}, Ci, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qw = Me(Pw), Yw = g({}, Ci, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Fw = Me(Yw), Xw = g({}, Ci, { data: 0 }), Pd = Me(Xw), Gw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Iw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Qw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Kw(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Qw[e]) ? !!n[e] : !1;
  }
  function su() {
    return Kw;
  }
  var Zw = g({}, ha, {
    key: function(e) {
      if (e.key) {
        var n = Gw[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Iw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function(e) {
      return e.type === "keypress" ? Ql(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ww = Me(Zw), Jw = g({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), qd = Me(Jw), $w = g({}, ha, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
  }), tx = Me($w), ex = g({}, Ci, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nx = Me(ex), ix = g({}, Wl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rx = Me(ix), ax = g({}, Ci, {
    newState: 0,
    oldState: 0
  }), lx = Me(ax), ox = [9, 13, 27, 32], uu = _n && "CompositionEvent" in window, pa = null;
  _n && "documentMode" in document && (pa = document.documentMode);
  var sx = _n && "TextEvent" in window && !pa, Yd = _n && (!uu || pa && 8 < pa && 11 >= pa), Fd = " ", Xd = !1;
  function Gd(e, n) {
    switch (e) {
      case "keyup":
        return ox.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Id(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ur = !1;
  function ux(e, n) {
    switch (e) {
      case "compositionend":
        return Id(n);
      case "keypress":
        return n.which !== 32 ? null : (Xd = !0, Fd);
      case "textInput":
        return e = n.data, e === Fd && Xd ? null : e;
      default:
        return null;
    }
  }
  function cx(e, n) {
    if (ur)
      return e === "compositionend" || !uu && Gd(e, n) ? (e = Ud(), Il = ru = Wn = null, ur = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Yd && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var fx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Qd(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!fx[e.type] : n === "textarea";
  }
  function Kd(e, n, l, o) {
    or ? sr ? sr.push(o) : sr = [o] : or = o, n = Uo(n, "onChange"), 0 < n.length && (l = new Zl(
      "onChange",
      "change",
      null,
      l,
      o
    ), e.push({ event: l, listeners: n }));
  }
  var ma = null, ga = null;
  function hx(e) {
    zg(e, 0);
  }
  function Jl(e) {
    var n = ua(e);
    if (Md(n)) return e;
  }
  function Zd(e, n) {
    if (e === "change") return n;
  }
  var Wd = !1;
  if (_n) {
    var cu;
    if (_n) {
      var fu = "oninput" in document;
      if (!fu) {
        var Jd = document.createElement("div");
        Jd.setAttribute("oninput", "return;"), fu = typeof Jd.oninput == "function";
      }
      cu = fu;
    } else cu = !1;
    Wd = cu && (!document.documentMode || 9 < document.documentMode);
  }
  function $d() {
    ma && (ma.detachEvent("onpropertychange", tp), ga = ma = null);
  }
  function tp(e) {
    if (e.propertyName === "value" && Jl(ga)) {
      var n = [];
      Kd(
        n,
        ga,
        e,
        eu(e)
      ), Vd(hx, n);
    }
  }
  function dx(e, n, l) {
    e === "focusin" ? ($d(), ma = n, ga = l, ma.attachEvent("onpropertychange", tp)) : e === "focusout" && $d();
  }
  function px(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jl(ga);
  }
  function mx(e, n) {
    if (e === "click") return Jl(n);
  }
  function gx(e, n) {
    if (e === "input" || e === "change")
      return Jl(n);
  }
  function yx(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var He = typeof Object.is == "function" ? Object.is : yx;
  function ya(e, n) {
    if (He(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var l = Object.keys(e), o = Object.keys(n);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!na.call(n, f) || !He(e[f], n[f]))
        return !1;
    }
    return !0;
  }
  function ep(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function np(e, n) {
    var l = ep(e);
    e = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = e + l.textContent.length, e <= n && o >= n)
          return { node: l, offset: n - e };
        e = o;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ep(l);
    }
  }
  function ip(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ip(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function rp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Xl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = n.contentWindow;
      else break;
      n = Xl(e.document);
    }
    return n;
  }
  function hu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var vx = _n && "documentMode" in document && 11 >= document.documentMode, cr = null, du = null, va = null, pu = !1;
  function ap(e, n, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pu || cr == null || cr !== Xl(o) || (o = cr, "selectionStart" in o && hu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), va && ya(va, o) || (va = o, o = Uo(du, "onSelect"), 0 < o.length && (n = new Zl(
      "onSelect",
      "select",
      null,
      n,
      l
    ), e.push({ event: n, listeners: o }), n.target = cr)));
  }
  function zi(e, n) {
    var l = {};
    return l[e.toLowerCase()] = n.toLowerCase(), l["Webkit" + e] = "webkit" + n, l["Moz" + e] = "moz" + n, l;
  }
  var fr = {
    animationend: zi("Animation", "AnimationEnd"),
    animationiteration: zi("Animation", "AnimationIteration"),
    animationstart: zi("Animation", "AnimationStart"),
    transitionrun: zi("Transition", "TransitionRun"),
    transitionstart: zi("Transition", "TransitionStart"),
    transitioncancel: zi("Transition", "TransitionCancel"),
    transitionend: zi("Transition", "TransitionEnd")
  }, mu = {}, lp = {};
  _n && (lp = document.createElement("div").style, "AnimationEvent" in window || (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation), "TransitionEvent" in window || delete fr.transitionend.transition);
  function Mi(e) {
    if (mu[e]) return mu[e];
    if (!fr[e]) return e;
    var n = fr[e], l;
    for (l in n)
      if (n.hasOwnProperty(l) && l in lp)
        return mu[e] = n[l];
    return e;
  }
  var op = Mi("animationend"), sp = Mi("animationiteration"), up = Mi("animationstart"), bx = Mi("transitionrun"), wx = Mi("transitionstart"), xx = Mi("transitioncancel"), cp = Mi("transitionend"), fp = /* @__PURE__ */ new Map(), gu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gu.push("scrollEnd");
  function fn(e, n) {
    fp.set(e, n), Di(n, [e]);
  }
  var hp = /* @__PURE__ */ new WeakMap();
  function Je(e, n) {
    if (typeof e == "object" && e !== null) {
      var l = hp.get(e);
      return l !== void 0 ? l : (n = {
        value: e,
        source: n,
        stack: Cd(n)
      }, hp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Cd(n)
    };
  }
  var $e = [], hr = 0, yu = 0;
  function $l() {
    for (var e = hr, n = yu = hr = 0; n < e; ) {
      var l = $e[n];
      $e[n++] = null;
      var o = $e[n];
      $e[n++] = null;
      var f = $e[n];
      $e[n++] = null;
      var m = $e[n];
      if ($e[n++] = null, o !== null && f !== null) {
        var w = o.pending;
        w === null ? f.next = f : (f.next = w.next, w.next = f), o.pending = f;
      }
      m !== 0 && dp(l, f, m);
    }
  }
  function to(e, n, l, o) {
    $e[hr++] = e, $e[hr++] = n, $e[hr++] = l, $e[hr++] = o, yu |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function vu(e, n, l, o) {
    return to(e, n, l, o), eo(e);
  }
  function dr(e, n) {
    return to(e, null, null, n), eo(e);
  }
  function dp(e, n, l) {
    e.lanes |= l;
    var o = e.alternate;
    o !== null && (o.lanes |= l);
    for (var f = !1, m = e.return; m !== null; )
      m.childLanes |= l, o = m.alternate, o !== null && (o.childLanes |= l), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (f = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, f && n !== null && (f = 31 - gt(l), e = m.hiddenUpdates, o = e[f], o === null ? e[f] = [n] : o.push(n), n.lane = l | 536870912), m) : null;
  }
  function eo(e) {
    if (50 < Ya)
      throw Ya = 0, kc = null, Error(a(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var pr = {};
  function Sx(e, n, l, o) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pe(e, n, l, o) {
    return new Sx(e, n, l, o);
  }
  function bu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Nn(e, n) {
    var l = e.alternate;
    return l === null ? (l = Pe(
      e.tag,
      n,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = n, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, n = e.dependencies, l.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function pp(e, n) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, n = l.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function no(e, n, l, o, f, m) {
    var w = 0;
    if (o = e, typeof e == "function") bu(e) && (w = 1);
    else if (typeof e == "string")
      w = kS(
        e,
        l,
        st.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      t: switch (e) {
        case F:
          return e = Pe(31, l, n, f), e.elementType = F, e.lanes = m, e;
        case S:
          return Ri(l.children, f, m, n);
        case A:
          w = 8, f |= 24;
          break;
        case M:
          return e = Pe(12, l, n, f | 2), e.elementType = M, e.lanes = m, e;
        case _:
          return e = Pe(13, l, n, f), e.elementType = _, e.lanes = m, e;
        case O:
          return e = Pe(19, l, n, f), e.elementType = O, e.lanes = m, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case k:
              case D:
                w = 10;
                break t;
              case C:
                w = 9;
                break t;
              case V:
                w = 11;
                break t;
              case z:
                w = 14;
                break t;
              case N:
                w = 16, o = null;
                break t;
            }
          w = 29, l = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = Pe(w, l, n, f), n.elementType = e, n.type = o, n.lanes = m, n;
  }
  function Ri(e, n, l, o) {
    return e = Pe(7, e, o, n), e.lanes = l, e;
  }
  function wu(e, n, l) {
    return e = Pe(6, e, null, n), e.lanes = l, e;
  }
  function xu(e, n, l) {
    return n = Pe(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = l, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var mr = [], gr = 0, io = null, ro = 0, tn = [], en = 0, Oi = null, Ln = 1, Bn = "";
  function _i(e, n) {
    mr[gr++] = ro, mr[gr++] = io, io = e, ro = n;
  }
  function mp(e, n, l) {
    tn[en++] = Ln, tn[en++] = Bn, tn[en++] = Oi, Oi = e;
    var o = Ln;
    e = Bn;
    var f = 32 - gt(o) - 1;
    o &= ~(1 << f), l += 1;
    var m = 32 - gt(n) + f;
    if (30 < m) {
      var w = f - f % 5;
      m = (o & (1 << w) - 1).toString(32), o >>= w, f -= w, Ln = 1 << 32 - gt(n) + f | l << f | o, Bn = m + e;
    } else
      Ln = 1 << m | l << f | o, Bn = e;
  }
  function Su(e) {
    e.return !== null && (_i(e, 1), mp(e, 1, 0));
  }
  function Tu(e) {
    for (; e === io; )
      io = mr[--gr], mr[gr] = null, ro = mr[--gr], mr[gr] = null;
    for (; e === Oi; )
      Oi = tn[--en], tn[en] = null, Bn = tn[--en], tn[en] = null, Ln = tn[--en], tn[en] = null;
  }
  var Ee = null, It = null, Ot = !1, Ni = null, vn = !1, ku = Error(a(519));
  function Li(e) {
    var n = Error(a(418, ""));
    throw xa(Je(n, e)), ku;
  }
  function gp(e) {
    var n = e.stateNode, l = e.type, o = e.memoizedProps;
    switch (n[ye] = e, n[ze] = o, l) {
      case "dialog":
        At("cancel", n), At("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        At("load", n);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Xa.length; l++)
          At(Xa[l], n);
        break;
      case "source":
        At("error", n);
        break;
      case "img":
      case "image":
      case "link":
        At("error", n), At("load", n);
        break;
      case "details":
        At("toggle", n);
        break;
      case "input":
        At("invalid", n), Rd(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), Fl(n);
        break;
      case "select":
        At("invalid", n);
        break;
      case "textarea":
        At("invalid", n), _d(n, o.value, o.defaultValue, o.children), Fl(n);
    }
    l = o.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || n.textContent === "" + l || o.suppressHydrationWarning === !0 || _g(n.textContent, l) ? (o.popover != null && (At("beforetoggle", n), At("toggle", n)), o.onScroll != null && At("scroll", n), o.onScrollEnd != null && At("scrollend", n), o.onClick != null && (n.onclick = jo), n = !0) : n = !1, n || Li(e);
  }
  function yp(e) {
    for (Ee = e.return; Ee; )
      switch (Ee.tag) {
        case 5:
        case 13:
          vn = !1;
          return;
        case 27:
        case 3:
          vn = !0;
          return;
        default:
          Ee = Ee.return;
      }
  }
  function ba(e) {
    if (e !== Ee) return !1;
    if (!Ot) return yp(e), Ot = !0, !1;
    var n = e.tag, l;
    if ((l = n !== 3 && n !== 27) && ((l = n === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Hc(e.type, e.memoizedProps)), l = !l), l && It && Li(e), yp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (n === 0) {
                It = dn(e.nextSibling);
                break t;
              }
              n--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || n++;
          e = e.nextSibling;
        }
        It = null;
      }
    } else
      n === 27 ? (n = It, di(e.type) ? (e = Fc, Fc = null, It = e) : It = n) : It = Ee ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function wa() {
    It = Ee = null, Ot = !1;
  }
  function vp() {
    var e = Ni;
    return e !== null && (_e === null ? _e = e : _e.push.apply(
      _e,
      e
    ), Ni = null), e;
  }
  function xa(e) {
    Ni === null ? Ni = [e] : Ni.push(e);
  }
  var Eu = Q(null), Bi = null, Vn = null;
  function Jn(e, n, l) {
    E(Eu, n._currentValue), n._currentValue = l;
  }
  function Un(e) {
    e._currentValue = Eu.current, at(Eu);
  }
  function Au(e, n, l) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === l) break;
      e = e.return;
    }
  }
  function Du(e, n, l, o) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var m = f.dependencies;
      if (m !== null) {
        var w = f.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var T = m;
          m = f;
          for (var R = 0; R < n.length; R++)
            if (T.context === n[R]) {
              m.lanes |= l, T = m.alternate, T !== null && (T.lanes |= l), Au(
                m.return,
                l,
                e
              ), o || (w = null);
              break t;
            }
          m = T.next;
        }
      } else if (f.tag === 18) {
        if (w = f.return, w === null) throw Error(a(341));
        w.lanes |= l, m = w.alternate, m !== null && (m.lanes |= l), Au(w, l, e), w = null;
      } else w = f.child;
      if (w !== null) w.return = f;
      else
        for (w = f; w !== null; ) {
          if (w === e) {
            w = null;
            break;
          }
          if (f = w.sibling, f !== null) {
            f.return = w.return, w = f;
            break;
          }
          w = w.return;
        }
      f = w;
    }
  }
  function Sa(e, n, l, o) {
    e = null;
    for (var f = n, m = !1; f !== null; ) {
      if (!m) {
        if ((f.flags & 524288) !== 0) m = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var w = f.alternate;
        if (w === null) throw Error(a(387));
        if (w = w.memoizedProps, w !== null) {
          var T = f.type;
          He(f.pendingProps.value, w.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (f === re.current) {
        if (w = f.alternate, w === null) throw Error(a(387));
        w.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(Wa) : e = [Wa]);
      }
      f = f.return;
    }
    e !== null && Du(
      n,
      e,
      l,
      o
    ), n.flags |= 262144;
  }
  function ao(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!He(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Vi(e) {
    Bi = e, Vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ve(e) {
    return bp(Bi, e);
  }
  function lo(e, n) {
    return Bi === null && Vi(e), bp(e, n);
  }
  function bp(e, n) {
    var l = n._currentValue;
    if (n = { context: n, memoizedValue: l, next: null }, Vn === null) {
      if (e === null) throw Error(a(308));
      Vn = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Vn = Vn.next = n;
    return l;
  }
  var Tx = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(l, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, kx = t.unstable_scheduleCallback, Ex = t.unstable_NormalPriority, ae = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cu() {
    return {
      controller: new Tx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ta(e) {
    e.refCount--, e.refCount === 0 && kx(Ex, function() {
      e.controller.abort();
    });
  }
  var ka = null, zu = 0, yr = 0, vr = null;
  function Ax(e, n) {
    if (ka === null) {
      var l = ka = [];
      zu = 0, yr = Rc(), vr = {
        status: "pending",
        value: void 0,
        then: function(o) {
          l.push(o);
        }
      };
    }
    return zu++, n.then(wp, wp), n;
  }
  function wp() {
    if (--zu === 0 && ka !== null) {
      vr !== null && (vr.status = "fulfilled");
      var e = ka;
      ka = null, yr = 0, vr = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Dx(e, n) {
    var l = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        l.push(f);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var f = 0; f < l.length; f++) (0, l[f])(n);
      },
      function(f) {
        for (o.status = "rejected", o.reason = f, f = 0; f < l.length; f++)
          (0, l[f])(void 0);
      }
    ), o;
  }
  var xp = P.S;
  P.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Ax(e, n), xp !== null && xp(e, n);
  };
  var Ui = Q(null);
  function Mu() {
    var e = Ui.current;
    return e !== null ? e : Pt.pooledCache;
  }
  function oo(e, n) {
    n === null ? E(Ui, Ui.current) : E(Ui, n.pool);
  }
  function Sp() {
    var e = Mu();
    return e === null ? null : { parent: ae._currentValue, pool: e };
  }
  var Ea = Error(a(460)), Tp = Error(a(474)), so = Error(a(542)), Ru = { then: function() {
  } };
  function kp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function uo() {
  }
  function Ep(e, n, l) {
    switch (l = e[l], l === void 0 ? e.push(n) : l !== n && (n.then(uo, uo), n = l), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Dp(e), e;
      default:
        if (typeof n.status == "string") n.then(uo, uo);
        else {
          if (e = Pt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(a(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var f = n;
                f.status = "fulfilled", f.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var f = n;
                f.status = "rejected", f.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Dp(e), e;
        }
        throw Aa = n, Ea;
    }
  }
  var Aa = null;
  function Ap() {
    if (Aa === null) throw Error(a(459));
    var e = Aa;
    return Aa = null, e;
  }
  function Dp(e) {
    if (e === Ea || e === so)
      throw Error(a(483));
  }
  var $n = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _u(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ti(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ei(e, n, l) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Nt & 2) !== 0) {
      var f = o.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), o.pending = n, n = eo(e), dp(e, null, l), n;
    }
    return to(e, o, n, l), eo(e);
  }
  function Da(e, n, l) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (l & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, l |= o, n.lanes = l, wd(e, l);
    }
  }
  function Nu(e, n) {
    var l = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var w = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          m === null ? f = m = w : m = m.next = w, l = l.next;
        } while (l !== null);
        m === null ? f = m = n : m = m.next = n;
      } else f = m = n;
      l = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: m,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = n : e.next = n, l.lastBaseUpdate = n;
  }
  var Lu = !1;
  function Ca() {
    if (Lu) {
      var e = vr;
      if (e !== null) throw e;
    }
  }
  function za(e, n, l, o) {
    Lu = !1;
    var f = e.updateQueue;
    $n = !1;
    var m = f.firstBaseUpdate, w = f.lastBaseUpdate, T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var R = T, H = R.next;
      R.next = null, w === null ? m = H : w.next = H, w = R;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, T = G.lastBaseUpdate, T !== w && (T === null ? G.firstBaseUpdate = H : T.next = H, G.lastBaseUpdate = R));
    }
    if (m !== null) {
      var W = f.baseState;
      w = 0, G = H = R = null, T = m;
      do {
        var q = T.lane & -536870913, Y = q !== T.lane;
        if (Y ? (Ct & q) === q : (o & q) === q) {
          q !== 0 && q === yr && (Lu = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          t: {
            var vt = e, pt = T;
            q = n;
            var Ut = l;
            switch (pt.tag) {
              case 1:
                if (vt = pt.payload, typeof vt == "function") {
                  W = vt.call(Ut, W, q);
                  break t;
                }
                W = vt;
                break t;
              case 3:
                vt.flags = vt.flags & -65537 | 128;
              case 0:
                if (vt = pt.payload, q = typeof vt == "function" ? vt.call(Ut, W, q) : vt, q == null) break t;
                W = g({}, W, q);
                break t;
              case 2:
                $n = !0;
            }
          }
          q = T.callback, q !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = f.callbacks, Y === null ? f.callbacks = [q] : Y.push(q));
        } else
          Y = {
            lane: q,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, G === null ? (H = G = Y, R = W) : G = G.next = Y, w |= q;
        if (T = T.next, T === null) {
          if (T = f.shared.pending, T === null)
            break;
          Y = T, T = Y.next, Y.next = null, f.lastBaseUpdate = Y, f.shared.pending = null;
        }
      } while (!0);
      G === null && (R = W), f.baseState = R, f.firstBaseUpdate = H, f.lastBaseUpdate = G, m === null && (f.shared.lanes = 0), ui |= w, e.lanes = w, e.memoizedState = W;
    }
  }
  function Cp(e, n) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(n);
  }
  function zp(e, n) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Cp(l[e], n);
  }
  var br = Q(null), co = Q(0);
  function Mp(e, n) {
    e = Xn, E(co, e), E(br, n), Xn = e | n.baseLanes;
  }
  function Bu() {
    E(co, Xn), E(br, br.current);
  }
  function Vu() {
    Xn = co.current, at(br), at(co);
  }
  var ni = 0, Tt = null, Bt = null, te = null, fo = !1, wr = !1, ji = !1, ho = 0, Ma = 0, xr = null, Cx = 0;
  function Zt() {
    throw Error(a(321));
  }
  function Uu(e, n) {
    if (n === null) return !1;
    for (var l = 0; l < n.length && l < e.length; l++)
      if (!He(e[l], n[l])) return !1;
    return !0;
  }
  function ju(e, n, l, o, f, m) {
    return ni = m, Tt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, P.H = e === null || e.memoizedState === null ? dm : pm, ji = !1, m = l(o, f), ji = !1, wr && (m = Op(
      n,
      l,
      o,
      f
    )), Rp(e), m;
  }
  function Rp(e) {
    P.H = bo;
    var n = Bt !== null && Bt.next !== null;
    if (ni = 0, te = Bt = Tt = null, fo = !1, Ma = 0, xr = null, n) throw Error(a(300));
    e === null || ce || (e = e.dependencies, e !== null && ao(e) && (ce = !0));
  }
  function Op(e, n, l, o) {
    Tt = e;
    var f = 0;
    do {
      if (wr && (xr = null), Ma = 0, wr = !1, 25 <= f) throw Error(a(301));
      if (f += 1, te = Bt = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      P.H = Lx, m = n(l, o);
    } while (wr);
    return m;
  }
  function zx() {
    var e = P.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? Ra(n) : n, e = e.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== e && (Tt.flags |= 1024), n;
  }
  function Hu() {
    var e = ho !== 0;
    return ho = 0, e;
  }
  function Pu(e, n, l) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l;
  }
  function qu(e) {
    if (fo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      fo = !1;
    }
    ni = 0, te = Bt = Tt = null, wr = !1, Ma = ho = 0, xr = null;
  }
  function Re() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return te === null ? Tt.memoizedState = te = e : te = te.next = e, te;
  }
  function ee() {
    if (Bt === null) {
      var e = Tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Bt.next;
    var n = te === null ? Tt.memoizedState : te.next;
    if (n !== null)
      te = n, Bt = e;
    else {
      if (e === null)
        throw Tt.alternate === null ? Error(a(467)) : Error(a(310));
      Bt = e, e = {
        memoizedState: Bt.memoizedState,
        baseState: Bt.baseState,
        baseQueue: Bt.baseQueue,
        queue: Bt.queue,
        next: null
      }, te === null ? Tt.memoizedState = te = e : te = te.next = e;
    }
    return te;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ra(e) {
    var n = Ma;
    return Ma += 1, xr === null && (xr = []), e = Ep(xr, e, n), n = Tt, (te === null ? n.memoizedState : te.next) === null && (n = n.alternate, P.H = n === null || n.memoizedState === null ? dm : pm), e;
  }
  function po(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ra(e);
      if (e.$$typeof === D) return ve(e);
    }
    throw Error(a(438, String(e)));
  }
  function Fu(e) {
    var n = null, l = Tt.updateQueue;
    if (l !== null && (n = l.memoCache), n == null) {
      var o = Tt.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), l === null && (l = Yu(), Tt.updateQueue = l), l.memoCache = n, l = n.data[n.index], l === void 0)
      for (l = n.data[n.index] = Array(e), o = 0; o < e; o++)
        l[o] = L;
    return n.index++, l;
  }
  function jn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function mo(e) {
    var n = ee();
    return Xu(n, Bt, e);
  }
  function Xu(e, n, l) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = l;
    var f = e.baseQueue, m = o.pending;
    if (m !== null) {
      if (f !== null) {
        var w = f.next;
        f.next = m.next, m.next = w;
      }
      n.baseQueue = f = m, o.pending = null;
    }
    if (m = e.baseState, f === null) e.memoizedState = m;
    else {
      n = f.next;
      var T = w = null, R = null, H = n, G = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (Ct & W) === W : (ni & W) === W) {
          var q = H.revertLane;
          if (q === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === yr && (G = !0);
          else if ((ni & q) === q) {
            H = H.next, q === yr && (G = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (T = R = W, w = m) : R = R.next = W, Tt.lanes |= q, ui |= q;
          W = H.action, ji && l(m, W), m = H.hasEagerState ? H.eagerState : l(m, W);
        } else
          q = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (T = R = q, w = m) : R = R.next = q, Tt.lanes |= W, ui |= W;
        H = H.next;
      } while (H !== null && H !== n);
      if (R === null ? w = m : R.next = T, !He(m, e.memoizedState) && (ce = !0, G && (l = vr, l !== null)))
        throw l;
      e.memoizedState = m, e.baseState = w, e.baseQueue = R, o.lastRenderedState = m;
    }
    return f === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Gu(e) {
    var n = ee(), l = n.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = e;
    var o = l.dispatch, f = l.pending, m = n.memoizedState;
    if (f !== null) {
      l.pending = null;
      var w = f = f.next;
      do
        m = e(m, w.action), w = w.next;
      while (w !== f);
      He(m, n.memoizedState) || (ce = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), l.lastRenderedState = m;
    }
    return [m, o];
  }
  function _p(e, n, l) {
    var o = Tt, f = ee(), m = Ot;
    if (m) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = n();
    var w = !He(
      (Bt || f).memoizedState,
      l
    );
    w && (f.memoizedState = l, ce = !0), f = f.queue;
    var T = Bp.bind(null, o, f, e);
    if (Oa(2048, 8, T, [e]), f.getSnapshot !== n || w || te !== null && te.memoizedState.tag & 1) {
      if (o.flags |= 2048, Sr(
        9,
        go(),
        Lp.bind(
          null,
          o,
          f,
          l,
          n
        ),
        null
      ), Pt === null) throw Error(a(349));
      m || (ni & 124) !== 0 || Np(o, n, l);
    }
    return l;
  }
  function Np(e, n, l) {
    e.flags |= 16384, e = { getSnapshot: n, value: l }, n = Tt.updateQueue, n === null ? (n = Yu(), Tt.updateQueue = n, n.stores = [e]) : (l = n.stores, l === null ? n.stores = [e] : l.push(e));
  }
  function Lp(e, n, l, o) {
    n.value = l, n.getSnapshot = o, Vp(n) && Up(e);
  }
  function Bp(e, n, l) {
    return l(function() {
      Vp(n) && Up(e);
    });
  }
  function Vp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var l = n();
      return !He(e, l);
    } catch {
      return !0;
    }
  }
  function Up(e) {
    var n = dr(e, 2);
    n !== null && Ge(n, e, 2);
  }
  function Iu(e) {
    var n = Re();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ji) {
        ht(!0);
        try {
          l();
        } finally {
          ht(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jn,
      lastRenderedState: e
    }, n;
  }
  function jp(e, n, l, o) {
    return e.baseState = l, Xu(
      e,
      Bt,
      typeof o == "function" ? o : jn
    );
  }
  function Mx(e, n, l, o, f) {
    if (vo(e)) throw Error(a(485));
    if (e = n.action, e !== null) {
      var m = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(w) {
          m.listeners.push(w);
        }
      };
      P.T !== null ? l(!0) : m.isTransition = !1, o(m), l = n.pending, l === null ? (m.next = n.pending = m, Hp(n, m)) : (m.next = l.next, n.pending = l.next = m);
    }
  }
  function Hp(e, n) {
    var l = n.action, o = n.payload, f = e.state;
    if (n.isTransition) {
      var m = P.T, w = {};
      P.T = w;
      try {
        var T = l(f, o), R = P.S;
        R !== null && R(w, T), Pp(e, n, T);
      } catch (H) {
        Qu(e, n, H);
      } finally {
        P.T = m;
      }
    } else
      try {
        m = l(f, o), Pp(e, n, m);
      } catch (H) {
        Qu(e, n, H);
      }
  }
  function Pp(e, n, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(o) {
        qp(e, n, o);
      },
      function(o) {
        return Qu(e, n, o);
      }
    ) : qp(e, n, l);
  }
  function qp(e, n, l) {
    n.status = "fulfilled", n.value = l, Yp(n), e.state = l, n = e.pending, n !== null && (l = n.next, l === n ? e.pending = null : (l = l.next, n.next = l, Hp(e, l)));
  }
  function Qu(e, n, l) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = l, Yp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Yp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Fp(e, n) {
    return n;
  }
  function Xp(e, n) {
    if (Ot) {
      var l = Pt.formState;
      if (l !== null) {
        t: {
          var o = Tt;
          if (Ot) {
            if (It) {
              e: {
                for (var f = It, m = vn; f.nodeType !== 8; ) {
                  if (!m) {
                    f = null;
                    break e;
                  }
                  if (f = dn(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break e;
                  }
                }
                m = f.data, f = m === "F!" || m === "F" ? f : null;
              }
              if (f) {
                It = dn(
                  f.nextSibling
                ), o = f.data === "F!";
                break t;
              }
            }
            Li(o);
          }
          o = !1;
        }
        o && (n = l[0]);
      }
    }
    return l = Re(), l.memoizedState = l.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fp,
      lastRenderedState: n
    }, l.queue = o, l = cm.bind(
      null,
      Tt,
      o
    ), o.dispatch = l, o = Iu(!1), m = $u.bind(
      null,
      Tt,
      !1,
      o.queue
    ), o = Re(), f = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = f, l = Mx.bind(
      null,
      Tt,
      f,
      m,
      l
    ), f.dispatch = l, o.memoizedState = e, [n, l, !1];
  }
  function Gp(e) {
    var n = ee();
    return Ip(n, Bt, e);
  }
  function Ip(e, n, l) {
    if (n = Xu(
      e,
      n,
      Fp
    )[0], e = mo(jn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = Ra(n);
      } catch (w) {
        throw w === Ea ? so : w;
      }
    else o = n;
    n = ee();
    var f = n.queue, m = f.dispatch;
    return l !== n.memoizedState && (Tt.flags |= 2048, Sr(
      9,
      go(),
      Rx.bind(null, f, l),
      null
    )), [o, m, e];
  }
  function Rx(e, n) {
    e.action = n;
  }
  function Qp(e) {
    var n = ee(), l = Bt;
    if (l !== null)
      return Ip(n, l, e);
    ee(), n = n.memoizedState, l = ee();
    var o = l.queue.dispatch;
    return l.memoizedState = e, [n, o, !1];
  }
  function Sr(e, n, l, o) {
    return e = { tag: e, create: l, deps: o, inst: n, next: null }, n = Tt.updateQueue, n === null && (n = Yu(), Tt.updateQueue = n), l = n.lastEffect, l === null ? n.lastEffect = e.next = e : (o = l.next, l.next = e, e.next = o, n.lastEffect = e), e;
  }
  function go() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kp() {
    return ee().memoizedState;
  }
  function yo(e, n, l, o) {
    var f = Re();
    o = o === void 0 ? null : o, Tt.flags |= e, f.memoizedState = Sr(
      1 | n,
      go(),
      l,
      o
    );
  }
  function Oa(e, n, l, o) {
    var f = ee();
    o = o === void 0 ? null : o;
    var m = f.memoizedState.inst;
    Bt !== null && o !== null && Uu(o, Bt.memoizedState.deps) ? f.memoizedState = Sr(n, m, l, o) : (Tt.flags |= e, f.memoizedState = Sr(
      1 | n,
      m,
      l,
      o
    ));
  }
  function Zp(e, n) {
    yo(8390656, 8, e, n);
  }
  function Wp(e, n) {
    Oa(2048, 8, e, n);
  }
  function Jp(e, n) {
    return Oa(4, 2, e, n);
  }
  function $p(e, n) {
    return Oa(4, 4, e, n);
  }
  function tm(e, n) {
    if (typeof n == "function") {
      e = e();
      var l = n(e);
      return function() {
        typeof l == "function" ? l() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function em(e, n, l) {
    l = l != null ? l.concat([e]) : null, Oa(4, 4, tm.bind(null, n, e), l);
  }
  function Ku() {
  }
  function nm(e, n) {
    var l = ee();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    return n !== null && Uu(n, o[1]) ? o[0] : (l.memoizedState = [e, n], e);
  }
  function im(e, n) {
    var l = ee();
    n = n === void 0 ? null : n;
    var o = l.memoizedState;
    if (n !== null && Uu(n, o[1]))
      return o[0];
    if (o = e(), ji) {
      ht(!0);
      try {
        e();
      } finally {
        ht(!1);
      }
    }
    return l.memoizedState = [o, n], o;
  }
  function Zu(e, n, l) {
    return l === void 0 || (ni & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = l, e = lg(), Tt.lanes |= e, ui |= e, l);
  }
  function rm(e, n, l, o) {
    return He(l, n) ? l : br.current !== null ? (e = Zu(e, l, o), He(e, n) || (ce = !0), e) : (ni & 42) === 0 ? (ce = !0, e.memoizedState = l) : (e = lg(), Tt.lanes |= e, ui |= e, n);
  }
  function am(e, n, l, o, f) {
    var m = K.p;
    K.p = m !== 0 && 8 > m ? m : 8;
    var w = P.T, T = {};
    P.T = T, $u(e, !1, n, l);
    try {
      var R = f(), H = P.S;
      if (H !== null && H(T, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var G = Dx(
          R,
          o
        );
        _a(
          e,
          n,
          G,
          Xe(e)
        );
      } else
        _a(
          e,
          n,
          o,
          Xe(e)
        );
    } catch (W) {
      _a(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        Xe()
      );
    } finally {
      K.p = m, P.T = w;
    }
  }
  function Ox() {
  }
  function Wu(e, n, l, o) {
    if (e.tag !== 5) throw Error(a(476));
    var f = lm(e).queue;
    am(
      e,
      f,
      n,
      rt,
      l === null ? Ox : function() {
        return om(e), l(o);
      }
    );
  }
  function lm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: rt,
      baseState: rt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: rt
      },
      next: null
    };
    var l = {};
    return n.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function om(e) {
    var n = lm(e).next.queue;
    _a(e, n, {}, Xe());
  }
  function Ju() {
    return ve(Wa);
  }
  function sm() {
    return ee().memoizedState;
  }
  function um() {
    return ee().memoizedState;
  }
  function _x(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = Xe();
          e = ti(l);
          var o = ei(n, e, l);
          o !== null && (Ge(o, n, l), Da(o, n, l)), n = { cache: Cu() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Nx(e, n, l) {
    var o = Xe();
    l = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(e) ? fm(n, l) : (l = vu(e, n, l, o), l !== null && (Ge(l, e, o), hm(l, n, o)));
  }
  function cm(e, n, l) {
    var o = Xe();
    _a(e, n, l, o);
  }
  function _a(e, n, l, o) {
    var f = {
      lane: o,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vo(e)) fm(n, f);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var w = n.lastRenderedState, T = m(w, l);
          if (f.hasEagerState = !0, f.eagerState = T, He(T, w))
            return to(e, n, f, 0), Pt === null && $l(), !1;
        } catch {
        } finally {
        }
      if (l = vu(e, n, f, o), l !== null)
        return Ge(l, e, o), hm(l, n, o), !0;
    }
    return !1;
  }
  function $u(e, n, l, o) {
    if (o = {
      lane: 2,
      revertLane: Rc(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(e)) {
      if (n) throw Error(a(479));
    } else
      n = vu(
        e,
        l,
        o,
        2
      ), n !== null && Ge(n, e, 2);
  }
  function vo(e) {
    var n = e.alternate;
    return e === Tt || n !== null && n === Tt;
  }
  function fm(e, n) {
    wr = fo = !0;
    var l = e.pending;
    l === null ? n.next = n : (n.next = l.next, l.next = n), e.pending = n;
  }
  function hm(e, n, l) {
    if ((l & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, l |= o, n.lanes = l, wd(e, l);
    }
  }
  var bo = {
    readContext: ve,
    use: po,
    useCallback: Zt,
    useContext: Zt,
    useEffect: Zt,
    useImperativeHandle: Zt,
    useLayoutEffect: Zt,
    useInsertionEffect: Zt,
    useMemo: Zt,
    useReducer: Zt,
    useRef: Zt,
    useState: Zt,
    useDebugValue: Zt,
    useDeferredValue: Zt,
    useTransition: Zt,
    useSyncExternalStore: Zt,
    useId: Zt,
    useHostTransitionStatus: Zt,
    useFormState: Zt,
    useActionState: Zt,
    useOptimistic: Zt,
    useMemoCache: Zt,
    useCacheRefresh: Zt
  }, dm = {
    readContext: ve,
    use: po,
    useCallback: function(e, n) {
      return Re().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: ve,
    useEffect: Zp,
    useImperativeHandle: function(e, n, l) {
      l = l != null ? l.concat([e]) : null, yo(
        4194308,
        4,
        tm.bind(null, n, e),
        l
      );
    },
    useLayoutEffect: function(e, n) {
      return yo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      yo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var l = Re();
      n = n === void 0 ? null : n;
      var o = e();
      if (ji) {
        ht(!0);
        try {
          e();
        } finally {
          ht(!1);
        }
      }
      return l.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, l) {
      var o = Re();
      if (l !== void 0) {
        var f = l(n);
        if (ji) {
          ht(!0);
          try {
            l(n);
          } finally {
            ht(!1);
          }
        }
      } else f = n;
      return o.memoizedState = o.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, o.queue = e, e = e.dispatch = Nx.bind(
        null,
        Tt,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Re();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Iu(e);
      var n = e.queue, l = cm.bind(null, Tt, n);
      return n.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Ku,
    useDeferredValue: function(e, n) {
      var l = Re();
      return Zu(l, e, n);
    },
    useTransition: function() {
      var e = Iu(!1);
      return e = am.bind(
        null,
        Tt,
        e.queue,
        !0,
        !1
      ), Re().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, l) {
      var o = Tt, f = Re();
      if (Ot) {
        if (l === void 0)
          throw Error(a(407));
        l = l();
      } else {
        if (l = n(), Pt === null)
          throw Error(a(349));
        (Ct & 124) !== 0 || Np(o, n, l);
      }
      f.memoizedState = l;
      var m = { value: l, getSnapshot: n };
      return f.queue = m, Zp(Bp.bind(null, o, m, e), [
        e
      ]), o.flags |= 2048, Sr(
        9,
        go(),
        Lp.bind(
          null,
          o,
          m,
          l,
          n
        ),
        null
      ), l;
    },
    useId: function() {
      var e = Re(), n = Pt.identifierPrefix;
      if (Ot) {
        var l = Bn, o = Ln;
        l = (o & ~(1 << 32 - gt(o) - 1)).toString(32) + l, n = "«" + n + "R" + l, l = ho++, 0 < l && (n += "H" + l.toString(32)), n += "»";
      } else
        l = Cx++, n = "«" + n + "r" + l.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Ju,
    useFormState: Xp,
    useActionState: Xp,
    useOptimistic: function(e) {
      var n = Re();
      n.memoizedState = n.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = l, n = $u.bind(
        null,
        Tt,
        !0,
        l
      ), l.dispatch = n, [e, n];
    },
    useMemoCache: Fu,
    useCacheRefresh: function() {
      return Re().memoizedState = _x.bind(
        null,
        Tt
      );
    }
  }, pm = {
    readContext: ve,
    use: po,
    useCallback: nm,
    useContext: ve,
    useEffect: Wp,
    useImperativeHandle: em,
    useInsertionEffect: Jp,
    useLayoutEffect: $p,
    useMemo: im,
    useReducer: mo,
    useRef: Kp,
    useState: function() {
      return mo(jn);
    },
    useDebugValue: Ku,
    useDeferredValue: function(e, n) {
      var l = ee();
      return rm(
        l,
        Bt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = mo(jn)[0], n = ee().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        n
      ];
    },
    useSyncExternalStore: _p,
    useId: sm,
    useHostTransitionStatus: Ju,
    useFormState: Gp,
    useActionState: Gp,
    useOptimistic: function(e, n) {
      var l = ee();
      return jp(l, Bt, e, n);
    },
    useMemoCache: Fu,
    useCacheRefresh: um
  }, Lx = {
    readContext: ve,
    use: po,
    useCallback: nm,
    useContext: ve,
    useEffect: Wp,
    useImperativeHandle: em,
    useInsertionEffect: Jp,
    useLayoutEffect: $p,
    useMemo: im,
    useReducer: Gu,
    useRef: Kp,
    useState: function() {
      return Gu(jn);
    },
    useDebugValue: Ku,
    useDeferredValue: function(e, n) {
      var l = ee();
      return Bt === null ? Zu(l, e, n) : rm(
        l,
        Bt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Gu(jn)[0], n = ee().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        n
      ];
    },
    useSyncExternalStore: _p,
    useId: sm,
    useHostTransitionStatus: Ju,
    useFormState: Qp,
    useActionState: Qp,
    useOptimistic: function(e, n) {
      var l = ee();
      return Bt !== null ? jp(l, Bt, e, n) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Fu,
    useCacheRefresh: um
  }, Tr = null, Na = 0;
  function wo(e) {
    var n = Na;
    return Na += 1, Tr === null && (Tr = []), Ep(Tr, e, n);
  }
  function La(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function xo(e, n) {
    throw n.$$typeof === y ? Error(a(525)) : (e = Object.prototype.toString.call(n), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function mm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function gm(e) {
    function n(U, B) {
      if (e) {
        var j = U.deletions;
        j === null ? (U.deletions = [B], U.flags |= 16) : j.push(B);
      }
    }
    function l(U, B) {
      if (!e) return null;
      for (; B !== null; )
        n(U, B), B = B.sibling;
      return null;
    }
    function o(U) {
      for (var B = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? B.set(U.key, U) : B.set(U.index, U), U = U.sibling;
      return B;
    }
    function f(U, B) {
      return U = Nn(U, B), U.index = 0, U.sibling = null, U;
    }
    function m(U, B, j) {
      return U.index = j, e ? (j = U.alternate, j !== null ? (j = j.index, j < B ? (U.flags |= 67108866, B) : j) : (U.flags |= 67108866, B)) : (U.flags |= 1048576, B);
    }
    function w(U) {
      return e && U.alternate === null && (U.flags |= 67108866), U;
    }
    function T(U, B, j, I) {
      return B === null || B.tag !== 6 ? (B = wu(j, U.mode, I), B.return = U, B) : (B = f(B, j), B.return = U, B);
    }
    function R(U, B, j, I) {
      var ot = j.type;
      return ot === S ? G(
        U,
        B,
        j.props.children,
        I,
        j.key
      ) : B !== null && (B.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === N && mm(ot) === B.type) ? (B = f(B, j.props), La(B, j), B.return = U, B) : (B = no(
        j.type,
        j.key,
        j.props,
        null,
        U.mode,
        I
      ), La(B, j), B.return = U, B);
    }
    function H(U, B, j, I) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== j.containerInfo || B.stateNode.implementation !== j.implementation ? (B = xu(j, U.mode, I), B.return = U, B) : (B = f(B, j.children || []), B.return = U, B);
    }
    function G(U, B, j, I, ot) {
      return B === null || B.tag !== 7 ? (B = Ri(
        j,
        U.mode,
        I,
        ot
      ), B.return = U, B) : (B = f(B, j), B.return = U, B);
    }
    function W(U, B, j) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return B = wu(
          "" + B,
          U.mode,
          j
        ), B.return = U, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case b:
            return j = no(
              B.type,
              B.key,
              B.props,
              null,
              U.mode,
              j
            ), La(j, B), j.return = U, j;
          case v:
            return B = xu(
              B,
              U.mode,
              j
            ), B.return = U, B;
          case N:
            var I = B._init;
            return B = I(B._payload), W(U, B, j);
        }
        if (lt(B) || Z(B))
          return B = Ri(
            B,
            U.mode,
            j,
            null
          ), B.return = U, B;
        if (typeof B.then == "function")
          return W(U, wo(B), j);
        if (B.$$typeof === D)
          return W(
            U,
            lo(U, B),
            j
          );
        xo(U, B);
      }
      return null;
    }
    function q(U, B, j, I) {
      var ot = B !== null ? B.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return ot !== null ? null : T(U, B, "" + j, I);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case b:
            return j.key === ot ? R(U, B, j, I) : null;
          case v:
            return j.key === ot ? H(U, B, j, I) : null;
          case N:
            return ot = j._init, j = ot(j._payload), q(U, B, j, I);
        }
        if (lt(j) || Z(j))
          return ot !== null ? null : G(U, B, j, I, null);
        if (typeof j.then == "function")
          return q(
            U,
            B,
            wo(j),
            I
          );
        if (j.$$typeof === D)
          return q(
            U,
            B,
            lo(U, j),
            I
          );
        xo(U, j);
      }
      return null;
    }
    function Y(U, B, j, I, ot) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return U = U.get(j) || null, T(B, U, "" + I, ot);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return U = U.get(
              I.key === null ? j : I.key
            ) || null, R(B, U, I, ot);
          case v:
            return U = U.get(
              I.key === null ? j : I.key
            ) || null, H(B, U, I, ot);
          case N:
            var kt = I._init;
            return I = kt(I._payload), Y(
              U,
              B,
              j,
              I,
              ot
            );
        }
        if (lt(I) || Z(I))
          return U = U.get(j) || null, G(B, U, I, ot, null);
        if (typeof I.then == "function")
          return Y(
            U,
            B,
            j,
            wo(I),
            ot
          );
        if (I.$$typeof === D)
          return Y(
            U,
            B,
            j,
            lo(B, I),
            ot
          );
        xo(B, I);
      }
      return null;
    }
    function vt(U, B, j, I) {
      for (var ot = null, kt = null, ct = B, mt = B = 0, he = null; ct !== null && mt < j.length; mt++) {
        ct.index > mt ? (he = ct, ct = null) : he = ct.sibling;
        var Rt = q(
          U,
          ct,
          j[mt],
          I
        );
        if (Rt === null) {
          ct === null && (ct = he);
          break;
        }
        e && ct && Rt.alternate === null && n(U, ct), B = m(Rt, B, mt), kt === null ? ot = Rt : kt.sibling = Rt, kt = Rt, ct = he;
      }
      if (mt === j.length)
        return l(U, ct), Ot && _i(U, mt), ot;
      if (ct === null) {
        for (; mt < j.length; mt++)
          ct = W(U, j[mt], I), ct !== null && (B = m(
            ct,
            B,
            mt
          ), kt === null ? ot = ct : kt.sibling = ct, kt = ct);
        return Ot && _i(U, mt), ot;
      }
      for (ct = o(ct); mt < j.length; mt++)
        he = Y(
          ct,
          U,
          mt,
          j[mt],
          I
        ), he !== null && (e && he.alternate !== null && ct.delete(
          he.key === null ? mt : he.key
        ), B = m(
          he,
          B,
          mt
        ), kt === null ? ot = he : kt.sibling = he, kt = he);
      return e && ct.forEach(function(vi) {
        return n(U, vi);
      }), Ot && _i(U, mt), ot;
    }
    function pt(U, B, j, I) {
      if (j == null) throw Error(a(151));
      for (var ot = null, kt = null, ct = B, mt = B = 0, he = null, Rt = j.next(); ct !== null && !Rt.done; mt++, Rt = j.next()) {
        ct.index > mt ? (he = ct, ct = null) : he = ct.sibling;
        var vi = q(U, ct, Rt.value, I);
        if (vi === null) {
          ct === null && (ct = he);
          break;
        }
        e && ct && vi.alternate === null && n(U, ct), B = m(vi, B, mt), kt === null ? ot = vi : kt.sibling = vi, kt = vi, ct = he;
      }
      if (Rt.done)
        return l(U, ct), Ot && _i(U, mt), ot;
      if (ct === null) {
        for (; !Rt.done; mt++, Rt = j.next())
          Rt = W(U, Rt.value, I), Rt !== null && (B = m(Rt, B, mt), kt === null ? ot = Rt : kt.sibling = Rt, kt = Rt);
        return Ot && _i(U, mt), ot;
      }
      for (ct = o(ct); !Rt.done; mt++, Rt = j.next())
        Rt = Y(ct, U, mt, Rt.value, I), Rt !== null && (e && Rt.alternate !== null && ct.delete(Rt.key === null ? mt : Rt.key), B = m(Rt, B, mt), kt === null ? ot = Rt : kt.sibling = Rt, kt = Rt);
      return e && ct.forEach(function(BS) {
        return n(U, BS);
      }), Ot && _i(U, mt), ot;
    }
    function Ut(U, B, j, I) {
      if (typeof j == "object" && j !== null && j.type === S && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case b:
            t: {
              for (var ot = j.key; B !== null; ) {
                if (B.key === ot) {
                  if (ot = j.type, ot === S) {
                    if (B.tag === 7) {
                      l(
                        U,
                        B.sibling
                      ), I = f(
                        B,
                        j.props.children
                      ), I.return = U, U = I;
                      break t;
                    }
                  } else if (B.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === N && mm(ot) === B.type) {
                    l(
                      U,
                      B.sibling
                    ), I = f(B, j.props), La(I, j), I.return = U, U = I;
                    break t;
                  }
                  l(U, B);
                  break;
                } else n(U, B);
                B = B.sibling;
              }
              j.type === S ? (I = Ri(
                j.props.children,
                U.mode,
                I,
                j.key
              ), I.return = U, U = I) : (I = no(
                j.type,
                j.key,
                j.props,
                null,
                U.mode,
                I
              ), La(I, j), I.return = U, U = I);
            }
            return w(U);
          case v:
            t: {
              for (ot = j.key; B !== null; ) {
                if (B.key === ot)
                  if (B.tag === 4 && B.stateNode.containerInfo === j.containerInfo && B.stateNode.implementation === j.implementation) {
                    l(
                      U,
                      B.sibling
                    ), I = f(B, j.children || []), I.return = U, U = I;
                    break t;
                  } else {
                    l(U, B);
                    break;
                  }
                else n(U, B);
                B = B.sibling;
              }
              I = xu(j, U.mode, I), I.return = U, U = I;
            }
            return w(U);
          case N:
            return ot = j._init, j = ot(j._payload), Ut(
              U,
              B,
              j,
              I
            );
        }
        if (lt(j))
          return vt(
            U,
            B,
            j,
            I
          );
        if (Z(j)) {
          if (ot = Z(j), typeof ot != "function") throw Error(a(150));
          return j = ot.call(j), pt(
            U,
            B,
            j,
            I
          );
        }
        if (typeof j.then == "function")
          return Ut(
            U,
            B,
            wo(j),
            I
          );
        if (j.$$typeof === D)
          return Ut(
            U,
            B,
            lo(U, j),
            I
          );
        xo(U, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, B !== null && B.tag === 6 ? (l(U, B.sibling), I = f(B, j), I.return = U, U = I) : (l(U, B), I = wu(j, U.mode, I), I.return = U, U = I), w(U)) : l(U, B);
    }
    return function(U, B, j, I) {
      try {
        Na = 0;
        var ot = Ut(
          U,
          B,
          j,
          I
        );
        return Tr = null, ot;
      } catch (ct) {
        if (ct === Ea || ct === so) throw ct;
        var kt = Pe(29, ct, null, U.mode);
        return kt.lanes = I, kt.return = U, kt;
      } finally {
      }
    };
  }
  var kr = gm(!0), ym = gm(!1), nn = Q(null), bn = null;
  function ii(e) {
    var n = e.alternate;
    E(le, le.current & 1), E(nn, e), bn === null && (n === null || br.current !== null || n.memoizedState !== null) && (bn = e);
  }
  function vm(e) {
    if (e.tag === 22) {
      if (E(le, le.current), E(nn, e), bn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (bn = e);
      }
    } else ri();
  }
  function ri() {
    E(le, le.current), E(nn, nn.current);
  }
  function Hn(e) {
    at(nn), bn === e && (bn = null), at(le);
  }
  var le = Q(0);
  function So(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Yc(l)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function tc(e, n, l, o) {
    n = e.memoizedState, l = l(o, n), l = l == null ? n : g({}, n, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ec = {
    enqueueSetState: function(e, n, l) {
      e = e._reactInternals;
      var o = Xe(), f = ti(o);
      f.payload = n, l != null && (f.callback = l), n = ei(e, f, o), n !== null && (Ge(n, e, o), Da(n, e, o));
    },
    enqueueReplaceState: function(e, n, l) {
      e = e._reactInternals;
      var o = Xe(), f = ti(o);
      f.tag = 1, f.payload = n, l != null && (f.callback = l), n = ei(e, f, o), n !== null && (Ge(n, e, o), Da(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var l = Xe(), o = ti(l);
      o.tag = 2, n != null && (o.callback = n), n = ei(e, o, l), n !== null && (Ge(n, e, l), Da(n, e, l));
    }
  };
  function bm(e, n, l, o, f, m, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, m, w) : n.prototype && n.prototype.isPureReactComponent ? !ya(l, o) || !ya(f, m) : !0;
  }
  function wm(e, n, l, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, o), n.state !== e && ec.enqueueReplaceState(n, n.state, null);
  }
  function Hi(e, n) {
    var l = n;
    if ("ref" in n) {
      l = {};
      for (var o in n)
        o !== "ref" && (l[o] = n[o]);
    }
    if (e = e.defaultProps) {
      l === n && (l = g({}, l));
      for (var f in e)
        l[f] === void 0 && (l[f] = e[f]);
    }
    return l;
  }
  var To = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function xm(e) {
    To(e);
  }
  function Sm(e) {
    console.error(e);
  }
  function Tm(e) {
    To(e);
  }
  function ko(e, n) {
    try {
      var l = e.onUncaughtError;
      l(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function km(e, n, l) {
    try {
      var o = e.onCaughtError;
      o(l.value, {
        componentStack: l.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function nc(e, n, l) {
    return l = ti(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ko(e, n);
    }, l;
  }
  function Em(e) {
    return e = ti(e), e.tag = 3, e;
  }
  function Am(e, n, l, o) {
    var f = l.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var m = o.value;
      e.payload = function() {
        return f(m);
      }, e.callback = function() {
        km(n, l, o);
      };
    }
    var w = l.stateNode;
    w !== null && typeof w.componentDidCatch == "function" && (e.callback = function() {
      km(n, l, o), typeof f != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
      var T = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function Bx(e, n, l, o, f) {
    if (l.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = l.alternate, n !== null && Sa(
        n,
        l,
        f,
        !0
      ), l = nn.current, l !== null) {
        switch (l.tag) {
          case 13:
            return bn === null ? Ac() : l.alternate === null && Qt === 0 && (Qt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = f, o === Ru ? l.flags |= 16384 : (n = l.updateQueue, n === null ? l.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Cc(e, o, f)), !1;
          case 22:
            return l.flags |= 65536, o === Ru ? l.flags |= 16384 : (n = l.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, l.updateQueue = n) : (l = n.retryQueue, l === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : l.add(o)), Cc(e, o, f)), !1;
        }
        throw Error(a(435, l.tag));
      }
      return Cc(e, o, f), Ac(), !1;
    }
    if (Ot)
      return n = nn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, o !== ku && (e = Error(a(422), { cause: o }), xa(Je(e, l)))) : (o !== ku && (n = Error(a(423), {
        cause: o
      }), xa(
        Je(n, l)
      )), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, o = Je(o, l), f = nc(
        e.stateNode,
        o,
        f
      ), Nu(e, f), Qt !== 4 && (Qt = 2)), !1;
    var m = Error(a(520), { cause: o });
    if (m = Je(m, l), qa === null ? qa = [m] : qa.push(m), Qt !== 4 && (Qt = 2), n === null) return !0;
    o = Je(o, l), l = n;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = f & -f, l.lanes |= e, e = nc(l.stateNode, o, e), Nu(l, e), !1;
        case 1:
          if (n = l.type, m = l.stateNode, (l.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (ci === null || !ci.has(m))))
            return l.flags |= 65536, f &= -f, l.lanes |= f, f = Em(f), Am(
              f,
              e,
              l,
              o
            ), Nu(l, f), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dm = Error(a(461)), ce = !1;
  function de(e, n, l, o) {
    n.child = e === null ? ym(n, null, l, o) : kr(
      n,
      e.child,
      l,
      o
    );
  }
  function Cm(e, n, l, o, f) {
    l = l.render;
    var m = n.ref;
    if ("ref" in o) {
      var w = {};
      for (var T in o)
        T !== "ref" && (w[T] = o[T]);
    } else w = o;
    return Vi(n), o = ju(
      e,
      n,
      l,
      w,
      m,
      f
    ), T = Hu(), e !== null && !ce ? (Pu(e, n, f), Pn(e, n, f)) : (Ot && T && Su(n), n.flags |= 1, de(e, n, o, f), n.child);
  }
  function zm(e, n, l, o, f) {
    if (e === null) {
      var m = l.type;
      return typeof m == "function" && !bu(m) && m.defaultProps === void 0 && l.compare === null ? (n.tag = 15, n.type = m, Mm(
        e,
        n,
        m,
        o,
        f
      )) : (e = no(
        l.type,
        null,
        o,
        n,
        n.mode,
        f
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !cc(e, f)) {
      var w = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ya, l(w, o) && e.ref === n.ref)
        return Pn(e, n, f);
    }
    return n.flags |= 1, e = Nn(m, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Mm(e, n, l, o, f) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (ya(m, o) && e.ref === n.ref)
        if (ce = !1, n.pendingProps = o = m, cc(e, f))
          (e.flags & 131072) !== 0 && (ce = !0);
        else
          return n.lanes = e.lanes, Pn(e, n, f);
    }
    return ic(
      e,
      n,
      l,
      o,
      f
    );
  }
  function Rm(e, n, l) {
    var o = n.pendingProps, f = o.children, m = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = m !== null ? m.baseLanes | l : l, e !== null) {
          for (f = n.child = e.child, m = 0; f !== null; )
            m = m | f.lanes | f.childLanes, f = f.sibling;
          n.childLanes = m & ~o;
        } else n.childLanes = 0, n.child = null;
        return Om(
          e,
          n,
          o,
          l
        );
      }
      if ((l & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && oo(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Mp(n, m) : Bu(), vm(n);
      else
        return n.lanes = n.childLanes = 536870912, Om(
          e,
          n,
          m !== null ? m.baseLanes | l : l,
          l
        );
    } else
      m !== null ? (oo(n, m.cachePool), Mp(n, m), ri(), n.memoizedState = null) : (e !== null && oo(n, null), Bu(), ri());
    return de(e, n, f, l), n.child;
  }
  function Om(e, n, l, o) {
    var f = Mu();
    return f = f === null ? null : { parent: ae._currentValue, pool: f }, n.memoizedState = {
      baseLanes: l,
      cachePool: f
    }, e !== null && oo(n, null), Bu(), vm(n), e !== null && Sa(e, n, o, !0), null;
  }
  function Eo(e, n) {
    var l = n.ref;
    if (l === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(a(284));
      (e === null || e.ref !== l) && (n.flags |= 4194816);
    }
  }
  function ic(e, n, l, o, f) {
    return Vi(n), l = ju(
      e,
      n,
      l,
      o,
      void 0,
      f
    ), o = Hu(), e !== null && !ce ? (Pu(e, n, f), Pn(e, n, f)) : (Ot && o && Su(n), n.flags |= 1, de(e, n, l, f), n.child);
  }
  function _m(e, n, l, o, f, m) {
    return Vi(n), n.updateQueue = null, l = Op(
      n,
      o,
      l,
      f
    ), Rp(e), o = Hu(), e !== null && !ce ? (Pu(e, n, m), Pn(e, n, m)) : (Ot && o && Su(n), n.flags |= 1, de(e, n, l, m), n.child);
  }
  function Nm(e, n, l, o, f) {
    if (Vi(n), n.stateNode === null) {
      var m = pr, w = l.contextType;
      typeof w == "object" && w !== null && (m = ve(w)), m = new l(o, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = ec, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = o, m.state = n.memoizedState, m.refs = {}, Ou(n), w = l.contextType, m.context = typeof w == "object" && w !== null ? ve(w) : pr, m.state = n.memoizedState, w = l.getDerivedStateFromProps, typeof w == "function" && (tc(
        n,
        l,
        w,
        o
      ), m.state = n.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (w = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), w !== m.state && ec.enqueueReplaceState(m, m.state, null), za(n, o, m, f), Ca(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      m = n.stateNode;
      var T = n.memoizedProps, R = Hi(l, T);
      m.props = R;
      var H = m.context, G = l.contextType;
      w = pr, typeof G == "object" && G !== null && (w = ve(G));
      var W = l.getDerivedStateFromProps;
      G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function", T = n.pendingProps !== T, G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T || H !== w) && wm(
        n,
        m,
        o,
        w
      ), $n = !1;
      var q = n.memoizedState;
      m.state = q, za(n, o, m, f), Ca(), H = n.memoizedState, T || q !== H || $n ? (typeof W == "function" && (tc(
        n,
        l,
        W,
        o
      ), H = n.memoizedState), (R = $n || bm(
        n,
        l,
        R,
        o,
        q,
        H,
        w
      )) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = H), m.props = o, m.state = H, m.context = w, o = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      m = n.stateNode, _u(e, n), w = n.memoizedProps, G = Hi(l, w), m.props = G, W = n.pendingProps, q = m.context, H = l.contextType, R = pr, typeof H == "object" && H !== null && (R = ve(H)), T = l.getDerivedStateFromProps, (H = typeof T == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== W || q !== R) && wm(
        n,
        m,
        o,
        R
      ), $n = !1, q = n.memoizedState, m.state = q, za(n, o, m, f), Ca();
      var Y = n.memoizedState;
      w !== W || q !== Y || $n || e !== null && e.dependencies !== null && ao(e.dependencies) ? (typeof T == "function" && (tc(
        n,
        l,
        T,
        o
      ), Y = n.memoizedState), (G = $n || bm(
        n,
        l,
        G,
        o,
        q,
        Y,
        R
      ) || e !== null && e.dependencies !== null && ao(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Y, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        o,
        Y,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && q === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && q === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Y), m.props = o, m.state = Y, m.context = R, o = G) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && q === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && q === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return m = o, Eo(e, n), o = (n.flags & 128) !== 0, m || o ? (m = n.stateNode, l = o && typeof l.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && o ? (n.child = kr(
      n,
      e.child,
      null,
      f
    ), n.child = kr(
      n,
      null,
      l,
      f
    )) : de(e, n, l, f), n.memoizedState = m.state, e = n.child) : e = Pn(
      e,
      n,
      f
    ), e;
  }
  function Lm(e, n, l, o) {
    return wa(), n.flags |= 256, de(e, n, l, o), n.child;
  }
  var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ac(e) {
    return { baseLanes: e, cachePool: Sp() };
  }
  function lc(e, n, l) {
    return e = e !== null ? e.childLanes & ~l : 0, n && (e |= rn), e;
  }
  function Bm(e, n, l) {
    var o = n.pendingProps, f = !1, m = (n.flags & 128) !== 0, w;
    if ((w = m) || (w = e !== null && e.memoizedState === null ? !1 : (le.current & 2) !== 0), w && (f = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ot) {
        if (f ? ii(n) : ri(), Ot) {
          var T = It, R;
          if (R = T) {
            t: {
              for (R = T, T = vn; R.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break t;
                }
                if (R = dn(
                  R.nextSibling
                ), R === null) {
                  T = null;
                  break t;
                }
              }
              T = R;
            }
            T !== null ? (n.memoizedState = {
              dehydrated: T,
              treeContext: Oi !== null ? { id: Ln, overflow: Bn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = Pe(
              18,
              null,
              null,
              0
            ), R.stateNode = T, R.return = n, n.child = R, Ee = n, It = null, R = !0) : R = !1;
          }
          R || Li(n);
        }
        if (T = n.memoizedState, T !== null && (T = T.dehydrated, T !== null))
          return Yc(T) ? n.lanes = 32 : n.lanes = 536870912, null;
        Hn(n);
      }
      return T = o.children, o = o.fallback, f ? (ri(), f = n.mode, T = Ao(
        { mode: "hidden", children: T },
        f
      ), o = Ri(
        o,
        f,
        l,
        null
      ), T.return = n, o.return = n, T.sibling = o, n.child = T, f = n.child, f.memoizedState = ac(l), f.childLanes = lc(
        e,
        w,
        l
      ), n.memoizedState = rc, o) : (ii(n), oc(n, T));
    }
    if (R = e.memoizedState, R !== null && (T = R.dehydrated, T !== null)) {
      if (m)
        n.flags & 256 ? (ii(n), n.flags &= -257, n = sc(
          e,
          n,
          l
        )) : n.memoizedState !== null ? (ri(), n.child = e.child, n.flags |= 128, n = null) : (ri(), f = o.fallback, T = n.mode, o = Ao(
          { mode: "visible", children: o.children },
          T
        ), f = Ri(
          f,
          T,
          l,
          null
        ), f.flags |= 2, o.return = n, f.return = n, o.sibling = f, n.child = o, kr(
          n,
          e.child,
          null,
          l
        ), o = n.child, o.memoizedState = ac(l), o.childLanes = lc(
          e,
          w,
          l
        ), n.memoizedState = rc, n = f);
      else if (ii(n), Yc(T)) {
        if (w = T.nextSibling && T.nextSibling.dataset, w) var H = w.dgst;
        w = H, o = Error(a(419)), o.stack = "", o.digest = w, xa({ value: o, source: null, stack: null }), n = sc(
          e,
          n,
          l
        );
      } else if (ce || Sa(e, n, l, !1), w = (l & e.childLanes) !== 0, ce || w) {
        if (w = Pt, w !== null && (o = l & -l, o = (o & 42) !== 0 ? 1 : Fs(o), o = (o & (w.suspendedLanes | l)) !== 0 ? 0 : o, o !== 0 && o !== R.retryLane))
          throw R.retryLane = o, dr(e, o), Ge(w, e, o), Dm;
        T.data === "$?" || Ac(), n = sc(
          e,
          n,
          l
        );
      } else
        T.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, It = dn(
          T.nextSibling
        ), Ee = n, Ot = !0, Ni = null, vn = !1, e !== null && (tn[en++] = Ln, tn[en++] = Bn, tn[en++] = Oi, Ln = e.id, Bn = e.overflow, Oi = n), n = oc(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return f ? (ri(), f = o.fallback, T = n.mode, R = e.child, H = R.sibling, o = Nn(R, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? f = Nn(H, f) : (f = Ri(
      f,
      T,
      l,
      null
    ), f.flags |= 2), f.return = n, o.return = n, o.sibling = f, n.child = o, o = f, f = n.child, T = e.child.memoizedState, T === null ? T = ac(l) : (R = T.cachePool, R !== null ? (H = ae._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = Sp(), T = {
      baseLanes: T.baseLanes | l,
      cachePool: R
    }), f.memoizedState = T, f.childLanes = lc(
      e,
      w,
      l
    ), n.memoizedState = rc, o) : (ii(n), l = e.child, e = l.sibling, l = Nn(l, {
      mode: "visible",
      children: o.children
    }), l.return = n, l.sibling = null, e !== null && (w = n.deletions, w === null ? (n.deletions = [e], n.flags |= 16) : w.push(e)), n.child = l, n.memoizedState = null, l);
  }
  function oc(e, n) {
    return n = Ao(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Ao(e, n) {
    return e = Pe(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function sc(e, n, l) {
    return kr(n, e.child, null, l), e = oc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Vm(e, n, l) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Au(e.return, n, l);
  }
  function uc(e, n, l, o, f) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: l,
      tailMode: f
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = o, m.tail = l, m.tailMode = f);
  }
  function Um(e, n, l) {
    var o = n.pendingProps, f = o.revealOrder, m = o.tail;
    if (de(e, n, o.children, l), o = le.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Vm(e, l, n);
          else if (e.tag === 19)
            Vm(e, l, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break t;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (E(le, o), f) {
      case "forwards":
        for (l = n.child, f = null; l !== null; )
          e = l.alternate, e !== null && So(e) === null && (f = l), l = l.sibling;
        l = f, l === null ? (f = n.child, n.child = null) : (f = l.sibling, l.sibling = null), uc(
          n,
          !1,
          f,
          l,
          m
        );
        break;
      case "backwards":
        for (l = null, f = n.child, n.child = null; f !== null; ) {
          if (e = f.alternate, e !== null && So(e) === null) {
            n.child = f;
            break;
          }
          e = f.sibling, f.sibling = l, l = f, f = e;
        }
        uc(
          n,
          !0,
          l,
          null,
          m
        );
        break;
      case "together":
        uc(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pn(e, n, l) {
    if (e !== null && (n.dependencies = e.dependencies), ui |= n.lanes, (l & n.childLanes) === 0)
      if (e !== null) {
        if (Sa(
          e,
          n,
          l,
          !1
        ), (l & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(a(153));
    if (n.child !== null) {
      for (e = n.child, l = Nn(e, e.pendingProps), n.child = l, l.return = n; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Nn(e, e.pendingProps), l.return = n;
      l.sibling = null;
    }
    return n.child;
  }
  function cc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ao(e)));
  }
  function Vx(e, n, l) {
    switch (n.tag) {
      case 3:
        Mt(n, n.stateNode.containerInfo), Jn(n, ae, e.memoizedState.cache), wa();
        break;
      case 27:
      case 5:
        gn(n);
        break;
      case 4:
        Mt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Jn(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (ii(n), n.flags |= 128, null) : (l & n.child.childLanes) !== 0 ? Bm(e, n, l) : (ii(n), e = Pn(
            e,
            n,
            l
          ), e !== null ? e.sibling : null);
        ii(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (o = (l & n.childLanes) !== 0, o || (Sa(
          e,
          n,
          l,
          !1
        ), o = (l & n.childLanes) !== 0), f) {
          if (o)
            return Um(
              e,
              n,
              l
            );
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), E(le, le.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Rm(e, n, l);
      case 24:
        Jn(n, ae, e.memoizedState.cache);
    }
    return Pn(e, n, l);
  }
  function jm(e, n, l) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        ce = !0;
      else {
        if (!cc(e, l) && (n.flags & 128) === 0)
          return ce = !1, Vx(
            e,
            n,
            l
          );
        ce = (e.flags & 131072) !== 0;
      }
    else
      ce = !1, Ot && (n.flags & 1048576) !== 0 && mp(n, ro, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          e = n.pendingProps;
          var o = n.elementType, f = o._init;
          if (o = f(o._payload), n.type = o, typeof o == "function")
            bu(o) ? (e = Hi(o, e), n.tag = 1, n = Nm(
              null,
              n,
              o,
              e,
              l
            )) : (n.tag = 0, n = ic(
              null,
              n,
              o,
              e,
              l
            ));
          else {
            if (o != null) {
              if (f = o.$$typeof, f === V) {
                n.tag = 11, n = Cm(
                  null,
                  n,
                  o,
                  e,
                  l
                );
                break t;
              } else if (f === z) {
                n.tag = 14, n = zm(
                  null,
                  n,
                  o,
                  e,
                  l
                );
                break t;
              }
            }
            throw n = it(o) || o, Error(a(306, n, ""));
          }
        }
        return n;
      case 0:
        return ic(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 1:
        return o = n.type, f = Hi(
          o,
          n.pendingProps
        ), Nm(
          e,
          n,
          o,
          f,
          l
        );
      case 3:
        t: {
          if (Mt(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = n.pendingProps;
          var m = n.memoizedState;
          f = m.element, _u(e, n), za(n, o, null, l);
          var w = n.memoizedState;
          if (o = w.cache, Jn(n, ae, o), o !== m.cache && Du(
            n,
            [ae],
            l,
            !0
          ), Ca(), o = w.element, m.isDehydrated)
            if (m = {
              element: o,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
              n = Lm(
                e,
                n,
                o,
                l
              );
              break t;
            } else if (o !== f) {
              f = Je(
                Error(a(424)),
                n
              ), xa(f), n = Lm(
                e,
                n,
                o,
                l
              );
              break t;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (It = dn(e.firstChild), Ee = n, Ot = !0, Ni = null, vn = !0, l = ym(
                n,
                null,
                o,
                l
              ), n.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (wa(), o === f) {
              n = Pn(
                e,
                n,
                l
              );
              break t;
            }
            de(
              e,
              n,
              o,
              l
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Eo(e, n), e === null ? (l = Yg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = l : Ot || (l = n.type, e = n.pendingProps, o = Ho(
          ut.current
        ).createElement(l), o[ye] = n, o[ze] = e, me(o, l, e), ue(o), n.stateNode = o) : n.memoizedState = Yg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return gn(n), e === null && Ot && (o = n.stateNode = Hg(
          n.type,
          n.pendingProps,
          ut.current
        ), Ee = n, vn = !0, f = It, di(n.type) ? (Fc = f, It = dn(
          o.firstChild
        )) : It = f), de(
          e,
          n,
          n.pendingProps.children,
          l
        ), Eo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ot && ((f = o = It) && (o = fS(
          o,
          n.type,
          n.pendingProps,
          vn
        ), o !== null ? (n.stateNode = o, Ee = n, It = dn(
          o.firstChild
        ), vn = !1, f = !0) : f = !1), f || Li(n)), gn(n), f = n.type, m = n.pendingProps, w = e !== null ? e.memoizedProps : null, o = m.children, Hc(f, m) ? o = null : w !== null && Hc(f, w) && (n.flags |= 32), n.memoizedState !== null && (f = ju(
          e,
          n,
          zx,
          null,
          null,
          l
        ), Wa._currentValue = f), Eo(e, n), de(e, n, o, l), n.child;
      case 6:
        return e === null && Ot && ((e = l = It) && (l = hS(
          l,
          n.pendingProps,
          vn
        ), l !== null ? (n.stateNode = l, Ee = n, It = null, e = !0) : e = !1), e || Li(n)), null;
      case 13:
        return Bm(e, n, l);
      case 4:
        return Mt(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = kr(
          n,
          null,
          o,
          l
        ) : de(
          e,
          n,
          o,
          l
        ), n.child;
      case 11:
        return Cm(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 7:
        return de(
          e,
          n,
          n.pendingProps,
          l
        ), n.child;
      case 8:
        return de(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 12:
        return de(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 10:
        return o = n.pendingProps, Jn(n, n.type, o.value), de(
          e,
          n,
          o.children,
          l
        ), n.child;
      case 9:
        return f = n.type._context, o = n.pendingProps.children, Vi(n), f = ve(f), o = o(f), n.flags |= 1, de(e, n, o, l), n.child;
      case 14:
        return zm(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 15:
        return Mm(
          e,
          n,
          n.type,
          n.pendingProps,
          l
        );
      case 19:
        return Um(e, n, l);
      case 31:
        return o = n.pendingProps, l = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (l = Ao(
          o,
          l
        ), l.ref = n.ref, n.child = l, l.return = n, n = l) : (l = Nn(e.child, o), l.ref = n.ref, n.child = l, l.return = n, n = l), n;
      case 22:
        return Rm(e, n, l);
      case 24:
        return Vi(n), o = ve(ae), e === null ? (f = Mu(), f === null && (f = Pt, m = Cu(), f.pooledCache = m, m.refCount++, m !== null && (f.pooledCacheLanes |= l), f = m), n.memoizedState = {
          parent: o,
          cache: f
        }, Ou(n), Jn(n, ae, f)) : ((e.lanes & l) !== 0 && (_u(e, n), za(n, null, null, l), Ca()), f = e.memoizedState, m = n.memoizedState, f.parent !== o ? (f = { parent: o, cache: o }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), Jn(n, ae, o)) : (o = m.cache, Jn(n, ae, o), o !== f.cache && Du(
          n,
          [ae],
          l,
          !0
        ))), de(
          e,
          n,
          n.pendingProps.children,
          l
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(a(156, n.tag));
  }
  function qn(e) {
    e.flags |= 4;
  }
  function Hm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Qg(n)) {
      if (n = nn.current, n !== null && ((Ct & 4194048) === Ct ? bn !== null : (Ct & 62914560) !== Ct && (Ct & 536870912) === 0 || n !== bn))
        throw Aa = Ru, Tp;
      e.flags |= 8192;
    }
  }
  function Do(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? vd() : 536870912, e.lanes |= n, Cr |= n);
  }
  function Ba(e, n) {
    if (!Ot)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function Ft(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, l = 0, o = 0;
    if (n)
      for (var f = e.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags & 65011712, o |= f.flags & 65011712, f.return = e, f = f.sibling;
    else
      for (f = e.child; f !== null; )
        l |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = e, f = f.sibling;
    return e.subtreeFlags |= o, e.childLanes = l, n;
  }
  function Ux(e, n, l) {
    var o = n.pendingProps;
    switch (Tu(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ft(n), null;
      case 1:
        return Ft(n), null;
      case 3:
        return l = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), Un(ae), ke(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ba(n) ? qn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, vp())), Ft(n), null;
      case 26:
        return l = n.memoizedState, e === null ? (qn(n), l !== null ? (Ft(n), Hm(n, l)) : (Ft(n), n.flags &= -16777217)) : l ? l !== e.memoizedState ? (qn(n), Ft(n), Hm(n, l)) : (Ft(n), n.flags &= -16777217) : (e.memoizedProps !== o && qn(n), Ft(n), n.flags &= -16777217), null;
      case 27:
        Mn(n), l = ut.current;
        var f = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && qn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return Ft(n), null;
          }
          e = st.current, ba(n) ? gp(n) : (e = Hg(f, o, l), n.stateNode = e, qn(n));
        }
        return Ft(n), null;
      case 5:
        if (Mn(n), l = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && qn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return Ft(n), null;
          }
          if (e = st.current, ba(n))
            gp(n);
          else {
            switch (f = Ho(
              ut.current
            ), e) {
              case 1:
                e = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                e = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    e = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? f.createElement("select", { is: o.is }) : f.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? f.createElement(l, { is: o.is }) : f.createElement(l);
                }
            }
            e[ye] = n, e[ze] = o;
            t: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === n) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            n.stateNode = e;
            t: switch (me(e, l, o), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && qn(n);
          }
        }
        return Ft(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && qn(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(a(166));
          if (e = ut.current, ba(n)) {
            if (e = n.stateNode, l = n.memoizedProps, o = null, f = Ee, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            e[ye] = n, e = !!(e.nodeValue === l || o !== null && o.suppressHydrationWarning === !0 || _g(e.nodeValue, l)), e || Li(n);
          } else
            e = Ho(e).createTextNode(
              o
            ), e[ye] = n, n.stateNode = e;
        }
        return Ft(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (f = ba(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(a(318));
              if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(a(317));
              f[ye] = n;
            } else
              wa(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ft(n), f = !1;
          } else
            f = vp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return n.flags & 256 ? (Hn(n), n) : (Hn(n), null);
        }
        if (Hn(n), (n.flags & 128) !== 0)
          return n.lanes = l, n;
        if (l = o !== null, e = e !== null && e.memoizedState !== null, l) {
          o = n.child, f = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (f = o.alternate.memoizedState.cachePool.pool);
          var m = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (m = o.memoizedState.cachePool.pool), m !== f && (o.flags |= 2048);
        }
        return l !== e && l && (n.child.flags |= 8192), Do(n, n.updateQueue), Ft(n), null;
      case 4:
        return ke(), e === null && Lc(n.stateNode.containerInfo), Ft(n), null;
      case 10:
        return Un(n.type), Ft(n), null;
      case 19:
        if (at(le), f = n.memoizedState, f === null) return Ft(n), null;
        if (o = (n.flags & 128) !== 0, m = f.rendering, m === null)
          if (o) Ba(f, !1);
          else {
            if (Qt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = So(e), m !== null) {
                  for (n.flags |= 128, Ba(f, !1), e = m.updateQueue, n.updateQueue = e, Do(n, e), n.subtreeFlags = 0, e = l, l = n.child; l !== null; )
                    pp(l, e), l = l.sibling;
                  return E(
                    le,
                    le.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null && Ve() > Mo && (n.flags |= 128, o = !0, Ba(f, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = So(m), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Do(n, e), Ba(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !Ot)
                return Ft(n), null;
            } else
              2 * Ve() - f.renderingStartTime > Mo && l !== 536870912 && (n.flags |= 128, o = !0, Ba(f, !1), n.lanes = 4194304);
          f.isBackwards ? (m.sibling = n.child, n.child = m) : (e = f.last, e !== null ? e.sibling = m : n.child = m, f.last = m);
        }
        return f.tail !== null ? (n = f.tail, f.rendering = n, f.tail = n.sibling, f.renderingStartTime = Ve(), n.sibling = null, e = le.current, E(le, o ? e & 1 | 2 : e & 1), n) : (Ft(n), null);
      case 22:
      case 23:
        return Hn(n), Vu(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (l & 536870912) !== 0 && (n.flags & 128) === 0 && (Ft(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ft(n), l = n.updateQueue, l !== null && Do(n, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== l && (n.flags |= 2048), e !== null && at(Ui), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Un(ae), Ft(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function jx(e, n) {
    switch (Tu(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Un(ae), ke(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Mn(n), null;
      case 13:
        if (Hn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(a(340));
          wa();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return at(le), null;
      case 4:
        return ke(), null;
      case 10:
        return Un(n.type), null;
      case 22:
      case 23:
        return Hn(n), Vu(), e !== null && at(Ui), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Un(ae), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Pm(e, n) {
    switch (Tu(n), n.tag) {
      case 3:
        Un(ae), ke();
        break;
      case 26:
      case 27:
      case 5:
        Mn(n);
        break;
      case 4:
        ke();
        break;
      case 13:
        Hn(n);
        break;
      case 19:
        at(le);
        break;
      case 10:
        Un(n.type);
        break;
      case 22:
      case 23:
        Hn(n), Vu(), e !== null && at(Ui);
        break;
      case 24:
        Un(ae);
    }
  }
  function Va(e, n) {
    try {
      var l = n.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            o = void 0;
            var m = l.create, w = l.inst;
            o = m(), w.destroy = o;
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (T) {
      jt(n, n.return, T);
    }
  }
  function ai(e, n, l) {
    try {
      var o = n.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var m = f.next;
        o = m;
        do {
          if ((o.tag & e) === e) {
            var w = o.inst, T = w.destroy;
            if (T !== void 0) {
              w.destroy = void 0, f = n;
              var R = l, H = T;
              try {
                H();
              } catch (G) {
                jt(
                  f,
                  R,
                  G
                );
              }
            }
          }
          o = o.next;
        } while (o !== m);
      }
    } catch (G) {
      jt(n, n.return, G);
    }
  }
  function qm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var l = e.stateNode;
      try {
        zp(n, l);
      } catch (o) {
        jt(e, e.return, o);
      }
    }
  }
  function Ym(e, n, l) {
    l.props = Hi(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (o) {
      jt(e, n, o);
    }
  }
  function Ua(e, n) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(o) : l.current = o;
      }
    } catch (f) {
      jt(e, n, f);
    }
  }
  function wn(e, n) {
    var l = e.ref, o = e.refCleanup;
    if (l !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          jt(e, n, f);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          jt(e, n, f);
        }
      else l.current = null;
  }
  function Fm(e) {
    var n = e.type, l = e.memoizedProps, o = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && o.focus();
          break t;
        case "img":
          l.src ? o.src = l.src : l.srcSet && (o.srcset = l.srcSet);
      }
    } catch (f) {
      jt(e, e.return, f);
    }
  }
  function fc(e, n, l) {
    try {
      var o = e.stateNode;
      lS(o, e.type, l, n), o[ze] = n;
    } catch (f) {
      jt(e, e.return, f);
    }
  }
  function Xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && di(e.type) || e.tag === 4;
  }
  function hc(e) {
    t: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && di(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue t;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function dc(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, n) : (n = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, n.appendChild(e), l = l._reactRootContainer, l != null || n.onclick !== null || (n.onclick = jo));
    else if (o !== 4 && (o === 27 && di(e.type) && (l = e.stateNode, n = null), e = e.child, e !== null))
      for (dc(e, n, l), e = e.sibling; e !== null; )
        dc(e, n, l), e = e.sibling;
  }
  function Co(e, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? l.insertBefore(e, n) : l.appendChild(e);
    else if (o !== 4 && (o === 27 && di(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Co(e, n, l), e = e.sibling; e !== null; )
        Co(e, n, l), e = e.sibling;
  }
  function Gm(e) {
    var n = e.stateNode, l = e.memoizedProps;
    try {
      for (var o = e.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      me(n, o, l), n[ye] = e, n[ze] = l;
    } catch (m) {
      jt(e, e.return, m);
    }
  }
  var Yn = !1, Wt = !1, pc = !1, Im = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function Hx(e, n) {
    if (e = e.containerInfo, Uc = Go, e = rp(e), hu(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        t: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var f = o.anchorOffset, m = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, m.nodeType;
            } catch {
              l = null;
              break t;
            }
            var w = 0, T = -1, R = -1, H = 0, G = 0, W = e, q = null;
            e: for (; ; ) {
              for (var Y; W !== l || f !== 0 && W.nodeType !== 3 || (T = w + f), W !== m || o !== 0 && W.nodeType !== 3 || (R = w + o), W.nodeType === 3 && (w += W.nodeValue.length), (Y = W.firstChild) !== null; )
                q = W, W = Y;
              for (; ; ) {
                if (W === e) break e;
                if (q === l && ++H === f && (T = w), q === m && ++G === o && (R = w), (Y = W.nextSibling) !== null) break;
                W = q, q = W.parentNode;
              }
              W = Y;
            }
            l = T === -1 || R === -1 ? null : { start: T, end: R };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (jc = { focusedElem: e, selectionRange: l }, Go = !1, fe = n; fe !== null; )
      if (n = fe, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, fe = e;
      else
        for (; fe !== null; ) {
          switch (n = fe, m = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, l = n, f = m.memoizedProps, m = m.memoizedState, o = l.stateNode;
                try {
                  var vt = Hi(
                    l.type,
                    f,
                    l.elementType === l.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    vt,
                    m
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (pt) {
                  jt(
                    l,
                    l.return,
                    pt
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, l = e.nodeType, l === 9)
                  qc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, fe = e;
            break;
          }
          fe = n.return;
        }
  }
  function Qm(e, n, l) {
    var o = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        li(e, l), o & 4 && Va(5, l);
        break;
      case 1:
        if (li(e, l), o & 4)
          if (e = l.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (w) {
              jt(l, l.return, w);
            }
          else {
            var f = Hi(
              l.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                f,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (w) {
              jt(
                l,
                l.return,
                w
              );
            }
          }
        o & 64 && qm(l), o & 512 && Ua(l, l.return);
        break;
      case 3:
        if (li(e, l), o & 64 && (e = l.updateQueue, e !== null)) {
          if (n = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          try {
            zp(e, n);
          } catch (w) {
            jt(l, l.return, w);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Gm(l);
      case 26:
      case 5:
        li(e, l), n === null && o & 4 && Fm(l), o & 512 && Ua(l, l.return);
        break;
      case 12:
        li(e, l);
        break;
      case 13:
        li(e, l), o & 4 && Wm(e, l), o & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Kx.bind(
          null,
          l
        ), dS(e, l))));
        break;
      case 22:
        if (o = l.memoizedState !== null || Yn, !o) {
          n = n !== null && n.memoizedState !== null || Wt, f = Yn;
          var m = Wt;
          Yn = o, (Wt = n) && !m ? oi(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : li(e, l), Yn = f, Wt = m;
        }
        break;
      case 30:
        break;
      default:
        li(e, l);
    }
  }
  function Km(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Km(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Is(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Yt = null, Oe = !1;
  function Fn(e, n, l) {
    for (l = l.child; l !== null; )
      Zm(e, n, l), l = l.sibling;
  }
  function Zm(e, n, l) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(X, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Wt || wn(l, n), Fn(
          e,
          n,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Wt || wn(l, n);
        var o = Yt, f = Oe;
        di(l.type) && (Yt = l.stateNode, Oe = !1), Fn(
          e,
          n,
          l
        ), Ia(l.stateNode), Yt = o, Oe = f;
        break;
      case 5:
        Wt || wn(l, n);
      case 6:
        if (o = Yt, f = Oe, Yt = null, Fn(
          e,
          n,
          l
        ), Yt = o, Oe = f, Yt !== null)
          if (Oe)
            try {
              (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(l.stateNode);
            } catch (m) {
              jt(
                l,
                n,
                m
              );
            }
          else
            try {
              Yt.removeChild(l.stateNode);
            } catch (m) {
              jt(
                l,
                n,
                m
              );
            }
        break;
      case 18:
        Yt !== null && (Oe ? (e = Yt, Ug(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), el(e)) : Ug(Yt, l.stateNode));
        break;
      case 4:
        o = Yt, f = Oe, Yt = l.stateNode.containerInfo, Oe = !0, Fn(
          e,
          n,
          l
        ), Yt = o, Oe = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wt || ai(2, l, n), Wt || ai(4, l, n), Fn(
          e,
          n,
          l
        );
        break;
      case 1:
        Wt || (wn(l, n), o = l.stateNode, typeof o.componentWillUnmount == "function" && Ym(
          l,
          n,
          o
        )), Fn(
          e,
          n,
          l
        );
        break;
      case 21:
        Fn(
          e,
          n,
          l
        );
        break;
      case 22:
        Wt = (o = Wt) || l.memoizedState !== null, Fn(
          e,
          n,
          l
        ), Wt = o;
        break;
      default:
        Fn(
          e,
          n,
          l
        );
    }
  }
  function Wm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        el(e);
      } catch (l) {
        jt(n, n.return, l);
      }
  }
  function Px(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Im()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Im()), n;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function mc(e, n) {
    var l = Px(e);
    n.forEach(function(o) {
      var f = Zx.bind(null, e, o);
      l.has(o) || (l.add(o), o.then(f, f));
    });
  }
  function qe(e, n) {
    var l = n.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var f = l[o], m = e, w = n, T = w;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (di(T.type)) {
                Yt = T.stateNode, Oe = !1;
                break t;
              }
              break;
            case 5:
              Yt = T.stateNode, Oe = !1;
              break t;
            case 3:
            case 4:
              Yt = T.stateNode.containerInfo, Oe = !0;
              break t;
          }
          T = T.return;
        }
        if (Yt === null) throw Error(a(160));
        Zm(m, w, f), Yt = null, Oe = !1, m = f.alternate, m !== null && (m.return = null), f.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Jm(n, e), n = n.sibling;
  }
  var hn = null;
  function Jm(e, n) {
    var l = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qe(n, e), Ye(e), o & 4 && (ai(3, e, e.return), Va(3, e), ai(5, e, e.return));
        break;
      case 1:
        qe(n, e), Ye(e), o & 512 && (Wt || l === null || wn(l, l.return)), o & 64 && Yn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? o : l.concat(o))));
        break;
      case 26:
        var f = hn;
        if (qe(n, e), Ye(e), o & 512 && (Wt || l === null || wn(l, l.return)), o & 4) {
          var m = l !== null ? l.memoizedState : null;
          if (o = e.memoizedState, l === null)
            if (o === null)
              if (e.stateNode === null) {
                t: {
                  o = e.type, l = e.memoizedProps, f = f.ownerDocument || f;
                  e: switch (o) {
                    case "title":
                      m = f.getElementsByTagName("title")[0], (!m || m[sa] || m[ye] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = f.createElement(o), f.head.insertBefore(
                        m,
                        f.querySelector("head > title")
                      )), me(m, o, l), m[ye] = e, ue(m), o = m;
                      break t;
                    case "link":
                      var w = Gg(
                        "link",
                        "href",
                        f
                      ).get(o + (l.href || ""));
                      if (w) {
                        for (var T = 0; T < w.length; T++)
                          if (m = w[T], m.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && m.getAttribute("rel") === (l.rel == null ? null : l.rel) && m.getAttribute("title") === (l.title == null ? null : l.title) && m.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            w.splice(T, 1);
                            break e;
                          }
                      }
                      m = f.createElement(o), me(m, o, l), f.head.appendChild(m);
                      break;
                    case "meta":
                      if (w = Gg(
                        "meta",
                        "content",
                        f
                      ).get(o + (l.content || ""))) {
                        for (T = 0; T < w.length; T++)
                          if (m = w[T], m.getAttribute("content") === (l.content == null ? null : "" + l.content) && m.getAttribute("name") === (l.name == null ? null : l.name) && m.getAttribute("property") === (l.property == null ? null : l.property) && m.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && m.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            w.splice(T, 1);
                            break e;
                          }
                      }
                      m = f.createElement(o), me(m, o, l), f.head.appendChild(m);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  m[ye] = e, ue(m), o = m;
                }
                e.stateNode = o;
              } else
                Ig(
                  f,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xg(
                f,
                o,
                e.memoizedProps
              );
          else
            m !== o ? (m === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : m.count--, o === null ? Ig(
              f,
              e.type,
              e.stateNode
            ) : Xg(
              f,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && fc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        qe(n, e), Ye(e), o & 512 && (Wt || l === null || wn(l, l.return)), l !== null && o & 4 && fc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (qe(n, e), Ye(e), o & 512 && (Wt || l === null || wn(l, l.return)), e.flags & 32) {
          f = e.stateNode;
          try {
            lr(f, "");
          } catch (Y) {
            jt(e, e.return, Y);
          }
        }
        o & 4 && e.stateNode != null && (f = e.memoizedProps, fc(
          e,
          f,
          l !== null ? l.memoizedProps : f
        )), o & 1024 && (pc = !0);
        break;
      case 6:
        if (qe(n, e), Ye(e), o & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          o = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = o;
          } catch (Y) {
            jt(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Yo = null, f = hn, hn = Po(n.containerInfo), qe(n, e), hn = f, Ye(e), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            el(n.containerInfo);
          } catch (Y) {
            jt(e, e.return, Y);
          }
        pc && (pc = !1, $m(e));
        break;
      case 4:
        o = hn, hn = Po(
          e.stateNode.containerInfo
        ), qe(n, e), Ye(e), hn = o;
        break;
      case 12:
        qe(n, e), Ye(e);
        break;
      case 13:
        qe(n, e), Ye(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (xc = Ve()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, mc(e, o)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var R = l !== null && l.memoizedState !== null, H = Yn, G = Wt;
        if (Yn = H || f, Wt = G || R, qe(n, e), Wt = G, Yn = H, Ye(e), o & 8192)
          t: for (n = e.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (l === null || R || Yn || Wt || Pi(e)), l = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (l === null) {
                R = l = n;
                try {
                  if (m = R.stateNode, f)
                    w = m.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    T = R.stateNode;
                    var W = R.memoizedProps.style, q = W != null && W.hasOwnProperty("display") ? W.display : null;
                    T.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (Y) {
                  jt(R, R.return, Y);
                }
              }
            } else if (n.tag === 6) {
              if (l === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = f ? "" : R.memoizedProps;
                } catch (Y) {
                  jt(R, R.return, Y);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break t;
              l === n && (l = null), n = n.return;
            }
            l === n && (l = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (l = o.retryQueue, l !== null && (o.retryQueue = null, mc(e, l))));
        break;
      case 19:
        qe(n, e), Ye(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, mc(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qe(n, e), Ye(e);
    }
  }
  function Ye(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var l, o = e.return; o !== null; ) {
          if (Xm(o)) {
            l = o;
            break;
          }
          o = o.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var f = l.stateNode, m = hc(e);
            Co(e, m, f);
            break;
          case 5:
            var w = l.stateNode;
            l.flags & 32 && (lr(w, ""), l.flags &= -33);
            var T = hc(e);
            Co(e, T, w);
            break;
          case 3:
          case 4:
            var R = l.stateNode.containerInfo, H = hc(e);
            dc(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(a(161));
        }
      } catch (G) {
        jt(e, e.return, G);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function $m(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        $m(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function li(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qm(e, n.alternate, n), n = n.sibling;
  }
  function Pi(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ai(4, n, n.return), Pi(n);
          break;
        case 1:
          wn(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            l
          ), Pi(n);
          break;
        case 27:
          Ia(n.stateNode);
        case 26:
        case 5:
          wn(n, n.return), Pi(n);
          break;
        case 22:
          n.memoizedState === null && Pi(n);
          break;
        case 30:
          Pi(n);
          break;
        default:
          Pi(n);
      }
      e = e.sibling;
    }
  }
  function oi(e, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, f = e, m = n, w = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            f,
            m,
            l
          ), Va(4, m);
          break;
        case 1:
          if (oi(
            f,
            m,
            l
          ), o = m, f = o.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (H) {
              jt(o, o.return, H);
            }
          if (o = m, f = o.updateQueue, f !== null) {
            var T = o.stateNode;
            try {
              var R = f.shared.hiddenCallbacks;
              if (R !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < R.length; f++)
                  Cp(R[f], T);
            } catch (H) {
              jt(o, o.return, H);
            }
          }
          l && w & 64 && qm(m), Ua(m, m.return);
          break;
        case 27:
          Gm(m);
        case 26:
        case 5:
          oi(
            f,
            m,
            l
          ), l && o === null && w & 4 && Fm(m), Ua(m, m.return);
          break;
        case 12:
          oi(
            f,
            m,
            l
          );
          break;
        case 13:
          oi(
            f,
            m,
            l
          ), l && w & 4 && Wm(f, m);
          break;
        case 22:
          m.memoizedState === null && oi(
            f,
            m,
            l
          ), Ua(m, m.return);
          break;
        case 30:
          break;
        default:
          oi(
            f,
            m,
            l
          );
      }
      n = n.sibling;
    }
  }
  function gc(e, n) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ta(l));
  }
  function yc(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ta(e));
  }
  function xn(e, n, l, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        tg(
          e,
          n,
          l,
          o
        ), n = n.sibling;
  }
  function tg(e, n, l, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        xn(
          e,
          n,
          l,
          o
        ), f & 2048 && Va(9, n);
        break;
      case 1:
        xn(
          e,
          n,
          l,
          o
        );
        break;
      case 3:
        xn(
          e,
          n,
          l,
          o
        ), f & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ta(e)));
        break;
      case 12:
        if (f & 2048) {
          xn(
            e,
            n,
            l,
            o
          ), e = n.stateNode;
          try {
            var m = n.memoizedProps, w = m.id, T = m.onPostCommit;
            typeof T == "function" && T(
              w,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            jt(n, n.return, R);
          }
        } else
          xn(
            e,
            n,
            l,
            o
          );
        break;
      case 13:
        xn(
          e,
          n,
          l,
          o
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, w = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? xn(
          e,
          n,
          l,
          o
        ) : ja(e, n) : m._visibility & 2 ? xn(
          e,
          n,
          l,
          o
        ) : (m._visibility |= 2, Er(
          e,
          n,
          l,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), f & 2048 && gc(w, n);
        break;
      case 24:
        xn(
          e,
          n,
          l,
          o
        ), f & 2048 && yc(n.alternate, n);
        break;
      default:
        xn(
          e,
          n,
          l,
          o
        );
    }
  }
  function Er(e, n, l, o, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, w = n, T = l, R = o, H = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          Er(
            m,
            w,
            T,
            R,
            f
          ), Va(8, w);
          break;
        case 23:
          break;
        case 22:
          var G = w.stateNode;
          w.memoizedState !== null ? G._visibility & 2 ? Er(
            m,
            w,
            T,
            R,
            f
          ) : ja(
            m,
            w
          ) : (G._visibility |= 2, Er(
            m,
            w,
            T,
            R,
            f
          )), f && H & 2048 && gc(
            w.alternate,
            w
          );
          break;
        case 24:
          Er(
            m,
            w,
            T,
            R,
            f
          ), f && H & 2048 && yc(w.alternate, w);
          break;
        default:
          Er(
            m,
            w,
            T,
            R,
            f
          );
      }
      n = n.sibling;
    }
  }
  function ja(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var l = e, o = n, f = o.flags;
        switch (o.tag) {
          case 22:
            ja(l, o), f & 2048 && gc(
              o.alternate,
              o
            );
            break;
          case 24:
            ja(l, o), f & 2048 && yc(o.alternate, o);
            break;
          default:
            ja(l, o);
        }
        n = n.sibling;
      }
  }
  var Ha = 8192;
  function Ar(e) {
    if (e.subtreeFlags & Ha)
      for (e = e.child; e !== null; )
        eg(e), e = e.sibling;
  }
  function eg(e) {
    switch (e.tag) {
      case 26:
        Ar(e), e.flags & Ha && e.memoizedState !== null && AS(
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ar(e);
        break;
      case 3:
      case 4:
        var n = hn;
        hn = Po(e.stateNode.containerInfo), Ar(e), hn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ha, Ha = 16777216, Ar(e), Ha = n) : Ar(e));
        break;
      default:
        Ar(e);
    }
  }
  function ng(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Pa(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          fe = o, rg(
            o,
            e
          );
        }
      ng(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ig(e), e = e.sibling;
  }
  function ig(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pa(e), e.flags & 2048 && ai(9, e, e.return);
        break;
      case 3:
        Pa(e);
        break;
      case 12:
        Pa(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, zo(e)) : Pa(e);
        break;
      default:
        Pa(e);
    }
  }
  function zo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var o = n[l];
          fe = o, rg(
            o,
            e
          );
        }
      ng(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, n, n.return), zo(n);
          break;
        case 22:
          l = n.stateNode, l._visibility & 2 && (l._visibility &= -3, zo(n));
          break;
        default:
          zo(n);
      }
      e = e.sibling;
    }
  }
  function rg(e, n) {
    for (; fe !== null; ) {
      var l = fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, l, n);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var o = l.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ta(l.memoizedState.cache);
      }
      if (o = l.child, o !== null) o.return = l, fe = o;
      else
        t: for (l = e; fe !== null; ) {
          o = fe;
          var f = o.sibling, m = o.return;
          if (Km(o), o === l) {
            fe = null;
            break t;
          }
          if (f !== null) {
            f.return = m, fe = f;
            break t;
          }
          fe = m;
        }
    }
  }
  var qx = {
    getCacheForType: function(e) {
      var n = ve(ae), l = n.data.get(e);
      return l === void 0 && (l = e(), n.data.set(e, l)), l;
    }
  }, Yx = typeof WeakMap == "function" ? WeakMap : Map, Nt = 0, Pt = null, Et = null, Ct = 0, Lt = 0, Fe = null, si = !1, Dr = !1, vc = !1, Xn = 0, Qt = 0, ui = 0, qi = 0, bc = 0, rn = 0, Cr = 0, qa = null, _e = null, wc = !1, xc = 0, Mo = 1 / 0, Ro = null, ci = null, pe = 0, fi = null, zr = null, Mr = 0, Sc = 0, Tc = null, ag = null, Ya = 0, kc = null;
  function Xe() {
    if ((Nt & 2) !== 0 && Ct !== 0)
      return Ct & -Ct;
    if (P.T !== null) {
      var e = yr;
      return e !== 0 ? e : Rc();
    }
    return xd();
  }
  function lg() {
    rn === 0 && (rn = (Ct & 536870912) === 0 || Ot ? yd() : 536870912);
    var e = nn.current;
    return e !== null && (e.flags |= 32), rn;
  }
  function Ge(e, n, l) {
    (e === Pt && (Lt === 2 || Lt === 9) || e.cancelPendingCommit !== null) && (Rr(e, 0), hi(
      e,
      Ct,
      rn,
      !1
    )), oa(e, l), ((Nt & 2) === 0 || e !== Pt) && (e === Pt && ((Nt & 2) === 0 && (qi |= l), Qt === 4 && hi(
      e,
      Ct,
      rn,
      !1
    )), Sn(e));
  }
  function og(e, n, l) {
    if ((Nt & 6) !== 0) throw Error(a(327));
    var o = !l && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Ke(e, n), f = o ? Gx(e, n) : Dc(e, n, !0), m = o;
    do {
      if (f === 0) {
        Dr && !o && hi(e, n, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, m && !Fx(l)) {
          f = Dc(e, n, !1), m = !1;
          continue;
        }
        if (f === 2) {
          if (m = n, e.errorRecoveryDisabledLanes & m)
            var w = 0;
          else
            w = e.pendingLanes & -536870913, w = w !== 0 ? w : w & 536870912 ? 536870912 : 0;
          if (w !== 0) {
            n = w;
            t: {
              var T = e;
              f = qa;
              var R = T.current.memoizedState.isDehydrated;
              if (R && (Rr(T, w).flags |= 256), w = Dc(
                T,
                w,
                !1
              ), w !== 2) {
                if (vc && !R) {
                  T.errorRecoveryDisabledLanes |= m, qi |= m, f = 4;
                  break t;
                }
                m = _e, _e = f, m !== null && (_e === null ? _e = m : _e.push.apply(
                  _e,
                  m
                ));
              }
              f = w;
            }
            if (m = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Rr(e, 0), hi(e, n, 0, !0);
          break;
        }
        t: {
          switch (o = e, m = f, m) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              hi(
                o,
                n,
                rn,
                !si
              );
              break t;
            case 2:
              _e = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((n & 62914560) === n && (f = xc + 300 - Ve(), 10 < f)) {
            if (hi(
              o,
              n,
              rn,
              !si
            ), se(o, 0, !0) !== 0) break t;
            o.timeoutHandle = Bg(
              sg.bind(
                null,
                o,
                l,
                _e,
                Ro,
                wc,
                n,
                rn,
                qi,
                Cr,
                si,
                m,
                2,
                -0,
                0
              ),
              f
            );
            break t;
          }
          sg(
            o,
            l,
            _e,
            Ro,
            wc,
            n,
            rn,
            qi,
            Cr,
            si,
            m,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Sn(e);
  }
  function sg(e, n, l, o, f, m, w, T, R, H, G, W, q, Y) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Za = { stylesheets: null, count: 0, unsuspend: ES }, eg(n), W = DS(), W !== null)) {
      e.cancelPendingCommit = W(
        mg.bind(
          null,
          e,
          n,
          m,
          l,
          o,
          f,
          w,
          T,
          R,
          G,
          1,
          q,
          Y
        )
      ), hi(e, m, w, !H);
      return;
    }
    mg(
      e,
      n,
      m,
      l,
      o,
      f,
      w,
      T,
      R
    );
  }
  function Fx(e) {
    for (var n = e; ; ) {
      var l = n.tag;
      if ((l === 0 || l === 11 || l === 15) && n.flags & 16384 && (l = n.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var o = 0; o < l.length; o++) {
          var f = l[o], m = f.getSnapshot;
          f = f.value;
          try {
            if (!He(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = n.child, n.subtreeFlags & 16384 && l !== null)
        l.return = n, n = l;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function hi(e, n, l, o) {
    n &= ~bc, n &= ~qi, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var f = n; 0 < f; ) {
      var m = 31 - gt(f), w = 1 << m;
      o[m] = -1, f &= ~w;
    }
    l !== 0 && bd(e, l, n);
  }
  function Oo() {
    return (Nt & 6) === 0 ? (Fa(0), !1) : !0;
  }
  function Ec() {
    if (Et !== null) {
      if (Lt === 0)
        var e = Et.return;
      else
        e = Et, Vn = Bi = null, qu(e), Tr = null, Na = 0, e = Et;
      for (; e !== null; )
        Pm(e.alternate, e), e = e.return;
      Et = null;
    }
  }
  function Rr(e, n) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, sS(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ec(), Pt = e, Et = l = Nn(e.current, null), Ct = n, Lt = 0, Fe = null, si = !1, Dr = Ke(e, n), vc = !1, Cr = rn = bc = qi = ui = Qt = 0, _e = qa = null, wc = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var f = 31 - gt(o), m = 1 << f;
        n |= e[f], o &= ~m;
      }
    return Xn = n, $l(), l;
  }
  function ug(e, n) {
    Tt = null, P.H = bo, n === Ea || n === so ? (n = Ap(), Lt = 3) : n === Tp ? (n = Ap(), Lt = 4) : Lt = n === Dm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Fe = n, Et === null && (Qt = 1, ko(
      e,
      Je(n, e.current)
    ));
  }
  function cg() {
    var e = P.H;
    return P.H = bo, e === null ? bo : e;
  }
  function fg() {
    var e = P.A;
    return P.A = qx, e;
  }
  function Ac() {
    Qt = 4, si || (Ct & 4194048) !== Ct && nn.current !== null || (Dr = !0), (ui & 134217727) === 0 && (qi & 134217727) === 0 || Pt === null || hi(
      Pt,
      Ct,
      rn,
      !1
    );
  }
  function Dc(e, n, l) {
    var o = Nt;
    Nt |= 2;
    var f = cg(), m = fg();
    (Pt !== e || Ct !== n) && (Ro = null, Rr(e, n)), n = !1;
    var w = Qt;
    t: do
      try {
        if (Lt !== 0 && Et !== null) {
          var T = Et, R = Fe;
          switch (Lt) {
            case 8:
              Ec(), w = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (n = !0);
              var H = Lt;
              if (Lt = 0, Fe = null, Or(e, T, R, H), l && Dr) {
                w = 0;
                break t;
              }
              break;
            default:
              H = Lt, Lt = 0, Fe = null, Or(e, T, R, H);
          }
        }
        Xx(), w = Qt;
        break;
      } catch (G) {
        ug(e, G);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Vn = Bi = null, Nt = o, P.H = f, P.A = m, Et === null && (Pt = null, Ct = 0, $l()), w;
  }
  function Xx() {
    for (; Et !== null; ) hg(Et);
  }
  function Gx(e, n) {
    var l = Nt;
    Nt |= 2;
    var o = cg(), f = fg();
    Pt !== e || Ct !== n ? (Ro = null, Mo = Ve() + 500, Rr(e, n)) : Dr = Ke(
      e,
      n
    );
    t: do
      try {
        if (Lt !== 0 && Et !== null) {
          n = Et;
          var m = Fe;
          e: switch (Lt) {
            case 1:
              Lt = 0, Fe = null, Or(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (kp(m)) {
                Lt = 0, Fe = null, dg(n);
                break;
              }
              n = function() {
                Lt !== 2 && Lt !== 9 || Pt !== e || (Lt = 7), Sn(e);
              }, m.then(n, n);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              kp(m) ? (Lt = 0, Fe = null, dg(n)) : (Lt = 0, Fe = null, Or(e, n, m, 7));
              break;
            case 5:
              var w = null;
              switch (Et.tag) {
                case 26:
                  w = Et.memoizedState;
                case 5:
                case 27:
                  var T = Et;
                  if (!w || Qg(w)) {
                    Lt = 0, Fe = null;
                    var R = T.sibling;
                    if (R !== null) Et = R;
                    else {
                      var H = T.return;
                      H !== null ? (Et = H, _o(H)) : Et = null;
                    }
                    break e;
                  }
              }
              Lt = 0, Fe = null, Or(e, n, m, 5);
              break;
            case 6:
              Lt = 0, Fe = null, Or(e, n, m, 6);
              break;
            case 8:
              Ec(), Qt = 6;
              break t;
            default:
              throw Error(a(462));
          }
        }
        Ix();
        break;
      } catch (G) {
        ug(e, G);
      }
    while (!0);
    return Vn = Bi = null, P.H = o, P.A = f, Nt = l, Et !== null ? 0 : (Pt = null, Ct = 0, $l(), Qt);
  }
  function Ix() {
    for (; Et !== null && !jl(); )
      hg(Et);
  }
  function hg(e) {
    var n = jm(e.alternate, e, Xn);
    e.memoizedProps = e.pendingProps, n === null ? _o(e) : Et = n;
  }
  function dg(e) {
    var n = e, l = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = _m(
          l,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ct
        );
        break;
      case 11:
        n = _m(
          l,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ct
        );
        break;
      case 5:
        qu(n);
      default:
        Pm(l, n), n = Et = pp(n, Xn), n = jm(l, n, Xn);
    }
    e.memoizedProps = e.pendingProps, n === null ? _o(e) : Et = n;
  }
  function Or(e, n, l, o) {
    Vn = Bi = null, qu(n), Tr = null, Na = 0;
    var f = n.return;
    try {
      if (Bx(
        e,
        f,
        n,
        l,
        Ct
      )) {
        Qt = 1, ko(
          e,
          Je(l, e.current)
        ), Et = null;
        return;
      }
    } catch (m) {
      if (f !== null) throw Et = f, m;
      Qt = 1, ko(
        e,
        Je(l, e.current)
      ), Et = null;
      return;
    }
    n.flags & 32768 ? (Ot || o === 1 ? e = !0 : Dr || (Ct & 536870912) !== 0 ? e = !1 : (si = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = nn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), pg(n, e)) : _o(n);
  }
  function _o(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        pg(
          n,
          si
        );
        return;
      }
      e = n.return;
      var l = Ux(
        n.alternate,
        n,
        Xn
      );
      if (l !== null) {
        Et = l;
        return;
      }
      if (n = n.sibling, n !== null) {
        Et = n;
        return;
      }
      Et = n = e;
    } while (n !== null);
    Qt === 0 && (Qt = 5);
  }
  function pg(e, n) {
    do {
      var l = jx(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Et = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !n && (e = e.sibling, e !== null)) {
        Et = e;
        return;
      }
      Et = e = l;
    } while (e !== null);
    Qt = 6, Et = null;
  }
  function mg(e, n, l, o, f, m, w, T, R) {
    e.cancelPendingCommit = null;
    do
      No();
    while (pe !== 0);
    if ((Nt & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (m = n.lanes | n.childLanes, m |= yu, Ew(
        e,
        l,
        m,
        w,
        T,
        R
      ), e === Pt && (Et = Pt = null, Ct = 0), zr = n, fi = e, Mr = l, Sc = m, Tc = f, ag = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wx(Ji, function() {
        return wg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = P.T, P.T = null, f = K.p, K.p = 2, w = Nt, Nt |= 4;
        try {
          Hx(e, n, l);
        } finally {
          Nt = w, K.p = f, P.T = o;
        }
      }
      pe = 1, gg(), yg(), vg();
    }
  }
  function gg() {
    if (pe === 1) {
      pe = 0;
      var e = fi, n = zr, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = P.T, P.T = null;
        var o = K.p;
        K.p = 2;
        var f = Nt;
        Nt |= 4;
        try {
          Jm(n, e);
          var m = jc, w = rp(e.containerInfo), T = m.focusedElem, R = m.selectionRange;
          if (w !== T && T && T.ownerDocument && ip(
            T.ownerDocument.documentElement,
            T
          )) {
            if (R !== null && hu(T)) {
              var H = R.start, G = R.end;
              if (G === void 0 && (G = H), "selectionStart" in T)
                T.selectionStart = H, T.selectionEnd = Math.min(
                  G,
                  T.value.length
                );
              else {
                var W = T.ownerDocument || document, q = W && W.defaultView || window;
                if (q.getSelection) {
                  var Y = q.getSelection(), vt = T.textContent.length, pt = Math.min(R.start, vt), Ut = R.end === void 0 ? pt : Math.min(R.end, vt);
                  !Y.extend && pt > Ut && (w = Ut, Ut = pt, pt = w);
                  var U = np(
                    T,
                    pt
                  ), B = np(
                    T,
                    Ut
                  );
                  if (U && B && (Y.rangeCount !== 1 || Y.anchorNode !== U.node || Y.anchorOffset !== U.offset || Y.focusNode !== B.node || Y.focusOffset !== B.offset)) {
                    var j = W.createRange();
                    j.setStart(U.node, U.offset), Y.removeAllRanges(), pt > Ut ? (Y.addRange(j), Y.extend(B.node, B.offset)) : (j.setEnd(B.node, B.offset), Y.addRange(j));
                  }
                }
              }
            }
            for (W = [], Y = T; Y = Y.parentNode; )
              Y.nodeType === 1 && W.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < W.length; T++) {
              var I = W[T];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          Go = !!Uc, jc = Uc = null;
        } finally {
          Nt = f, K.p = o, P.T = l;
        }
      }
      e.current = n, pe = 2;
    }
  }
  function yg() {
    if (pe === 2) {
      pe = 0;
      var e = fi, n = zr, l = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || l) {
        l = P.T, P.T = null;
        var o = K.p;
        K.p = 2;
        var f = Nt;
        Nt |= 4;
        try {
          Qm(e, n.alternate, n);
        } finally {
          Nt = f, K.p = o, P.T = l;
        }
      }
      pe = 3;
    }
  }
  function vg() {
    if (pe === 4 || pe === 3) {
      pe = 0, Hl();
      var e = fi, n = zr, l = Mr, o = ag;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? pe = 5 : (pe = 0, zr = fi = null, bg(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (f === 0 && (ci = null), Xs(l), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            X,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = P.T, f = K.p, K.p = 2, P.T = null;
        try {
          for (var m = e.onRecoverableError, w = 0; w < o.length; w++) {
            var T = o[w];
            m(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          P.T = n, K.p = f;
        }
      }
      (Mr & 3) !== 0 && No(), Sn(e), f = e.pendingLanes, (l & 4194090) !== 0 && (f & 42) !== 0 ? e === kc ? Ya++ : (Ya = 0, kc = e) : Ya = 0, Fa(0);
    }
  }
  function bg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Ta(n)));
  }
  function No(e) {
    return gg(), yg(), vg(), wg();
  }
  function wg() {
    if (pe !== 5) return !1;
    var e = fi, n = Sc;
    Sc = 0;
    var l = Xs(Mr), o = P.T, f = K.p;
    try {
      K.p = 32 > l ? 32 : l, P.T = null, l = Tc, Tc = null;
      var m = fi, w = Mr;
      if (pe = 0, zr = fi = null, Mr = 0, (Nt & 6) !== 0) throw Error(a(331));
      var T = Nt;
      if (Nt |= 4, ig(m.current), tg(
        m,
        m.current,
        w,
        l
      ), Nt = T, Fa(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(X, m);
        } catch {
        }
      return !0;
    } finally {
      K.p = f, P.T = o, bg(e, n);
    }
  }
  function xg(e, n, l) {
    n = Je(l, n), n = nc(e.stateNode, n, 2), e = ei(e, n, 2), e !== null && (oa(e, 2), Sn(e));
  }
  function jt(e, n, l) {
    if (e.tag === 3)
      xg(e, e, l);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          xg(
            n,
            e,
            l
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ci === null || !ci.has(o))) {
            e = Je(l, e), l = Em(2), o = ei(n, l, 2), o !== null && (Am(
              l,
              o,
              n,
              e
            ), oa(o, 2), Sn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Cc(e, n, l) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Yx();
      var f = /* @__PURE__ */ new Set();
      o.set(n, f);
    } else
      f = o.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(n, f));
    f.has(l) || (vc = !0, f.add(l), e = Qx.bind(null, e, n, l), n.then(e, e));
  }
  function Qx(e, n, l) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Pt === e && (Ct & l) === l && (Qt === 4 || Qt === 3 && (Ct & 62914560) === Ct && 300 > Ve() - xc ? (Nt & 2) === 0 && Rr(e, 0) : bc |= l, Cr === Ct && (Cr = 0)), Sn(e);
  }
  function Sg(e, n) {
    n === 0 && (n = vd()), e = dr(e, n), e !== null && (oa(e, n), Sn(e));
  }
  function Kx(e) {
    var n = e.memoizedState, l = 0;
    n !== null && (l = n.retryLane), Sg(e, l);
  }
  function Zx(e, n) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, f = e.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(n), Sg(e, l);
  }
  function Wx(e, n) {
    return ia(e, n);
  }
  var Lo = null, _r = null, zc = !1, Bo = !1, Mc = !1, Yi = 0;
  function Sn(e) {
    e !== _r && e.next === null && (_r === null ? Lo = _r = e : _r = _r.next = e), Bo = !0, zc || (zc = !0, $x());
  }
  function Fa(e, n) {
    if (!Mc && Bo) {
      Mc = !0;
      do
        for (var l = !1, o = Lo; o !== null; ) {
          if (e !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var m = 0;
            else {
              var w = o.suspendedLanes, T = o.pingedLanes;
              m = (1 << 31 - gt(42 | e) + 1) - 1, m &= f & ~(w & ~T), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (l = !0, Ag(o, m));
          } else
            m = Ct, m = se(
              o,
              o === Pt ? m : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (m & 3) === 0 || Ke(o, m) || (l = !0, Ag(o, m));
          o = o.next;
        }
      while (l);
      Mc = !1;
    }
  }
  function Jx() {
    Tg();
  }
  function Tg() {
    Bo = zc = !1;
    var e = 0;
    Yi !== 0 && (oS() && (e = Yi), Yi = 0);
    for (var n = Ve(), l = null, o = Lo; o !== null; ) {
      var f = o.next, m = kg(o, n);
      m === 0 ? (o.next = null, l === null ? Lo = f : l.next = f, f === null && (_r = l)) : (l = o, (e !== 0 || (m & 3) !== 0) && (Bo = !0)), o = f;
    }
    Fa(e);
  }
  function kg(e, n) {
    for (var l = e.suspendedLanes, o = e.pingedLanes, f = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var w = 31 - gt(m), T = 1 << w, R = f[w];
      R === -1 ? ((T & l) === 0 || (T & o) !== 0) && (f[w] = cn(T, n)) : R <= n && (e.expiredLanes |= T), m &= ~T;
    }
    if (n = Pt, l = Ct, l = se(
      e,
      e === n ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, l === 0 || e === n && (Lt === 2 || Lt === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && ra(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Ke(e, l)) {
      if (n = l & -l, n === e.callbackPriority) return n;
      switch (o !== null && ra(o), Xs(l)) {
        case 2:
        case 8:
          l = la;
          break;
        case 32:
          l = Ji;
          break;
        case 268435456:
          l = Pl;
          break;
        default:
          l = Ji;
      }
      return o = Eg.bind(null, e), l = ia(l, o), e.callbackPriority = n, e.callbackNode = l, n;
    }
    return o !== null && o !== null && ra(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Eg(e, n) {
    if (pe !== 0 && pe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (No() && e.callbackNode !== l)
      return null;
    var o = Ct;
    return o = se(
      e,
      e === Pt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (og(e, o, n), kg(e, Ve()), e.callbackNode != null && e.callbackNode === l ? Eg.bind(null, e) : null);
  }
  function Ag(e, n) {
    if (No()) return null;
    og(e, n, !0);
  }
  function $x() {
    uS(function() {
      (Nt & 6) !== 0 ? ia(
        aa,
        Jx
      ) : Tg();
    });
  }
  function Rc() {
    return Yi === 0 && (Yi = yd()), Yi;
  }
  function Dg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Gl("" + e);
  }
  function Cg(e, n) {
    var l = n.ownerDocument.createElement("input");
    return l.name = n.name, l.value = n.value, e.id && l.setAttribute("form", e.id), n.parentNode.insertBefore(l, n), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function tS(e, n, l, o, f) {
    if (n === "submit" && l && l.stateNode === f) {
      var m = Dg(
        (f[ze] || null).action
      ), w = o.submitter;
      w && (n = (n = w[ze] || null) ? Dg(n.formAction) : w.getAttribute("formAction"), n !== null && (m = n, w = null));
      var T = new Zl(
        "action",
        "action",
        null,
        o,
        f
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Yi !== 0) {
                  var R = w ? Cg(f, w) : new FormData(f);
                  Wu(
                    l,
                    {
                      pending: !0,
                      data: R,
                      method: f.method,
                      action: m
                    },
                    null,
                    R
                  );
                }
              } else
                typeof m == "function" && (T.preventDefault(), R = w ? Cg(f, w) : new FormData(f), Wu(
                  l,
                  {
                    pending: !0,
                    data: R,
                    method: f.method,
                    action: m
                  },
                  m,
                  R
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var Oc = 0; Oc < gu.length; Oc++) {
    var _c = gu[Oc], eS = _c.toLowerCase(), nS = _c[0].toUpperCase() + _c.slice(1);
    fn(
      eS,
      "on" + nS
    );
  }
  fn(op, "onAnimationEnd"), fn(sp, "onAnimationIteration"), fn(up, "onAnimationStart"), fn("dblclick", "onDoubleClick"), fn("focusin", "onFocus"), fn("focusout", "onBlur"), fn(bx, "onTransitionRun"), fn(wx, "onTransitionStart"), fn(xx, "onTransitionCancel"), fn(cp, "onTransitionEnd"), ir("onMouseEnter", ["mouseout", "mouseover"]), ir("onMouseLeave", ["mouseout", "mouseover"]), ir("onPointerEnter", ["pointerout", "pointerover"]), ir("onPointerLeave", ["pointerout", "pointerover"]), Di(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Di(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Di("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Di(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Di(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Di(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), iS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa)
  );
  function zg(e, n) {
    n = (n & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var o = e[l], f = o.event;
      o = o.listeners;
      t: {
        var m = void 0;
        if (n)
          for (var w = o.length - 1; 0 <= w; w--) {
            var T = o[w], R = T.instance, H = T.currentTarget;
            if (T = T.listener, R !== m && f.isPropagationStopped())
              break t;
            m = T, f.currentTarget = H;
            try {
              m(f);
            } catch (G) {
              To(G);
            }
            f.currentTarget = null, m = R;
          }
        else
          for (w = 0; w < o.length; w++) {
            if (T = o[w], R = T.instance, H = T.currentTarget, T = T.listener, R !== m && f.isPropagationStopped())
              break t;
            m = T, f.currentTarget = H;
            try {
              m(f);
            } catch (G) {
              To(G);
            }
            f.currentTarget = null, m = R;
          }
      }
    }
  }
  function At(e, n) {
    var l = n[Gs];
    l === void 0 && (l = n[Gs] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    l.has(o) || (Mg(n, e, 2, !1), l.add(o));
  }
  function Nc(e, n, l) {
    var o = 0;
    n && (o |= 4), Mg(
      l,
      e,
      o,
      n
    );
  }
  var Vo = "_reactListening" + Math.random().toString(36).slice(2);
  function Lc(e) {
    if (!e[Vo]) {
      e[Vo] = !0, Td.forEach(function(l) {
        l !== "selectionchange" && (iS.has(l) || Nc(l, !1, e), Nc(l, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vo] || (n[Vo] = !0, Nc("selectionchange", !1, n));
    }
  }
  function Mg(e, n, l, o) {
    switch (ty(n)) {
      case 2:
        var f = MS;
        break;
      case 8:
        f = RS;
        break;
      default:
        f = Kc;
    }
    l = f.bind(
      null,
      n,
      l,
      e
    ), f = void 0, !iu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), o ? f !== void 0 ? e.addEventListener(n, l, {
      capture: !0,
      passive: f
    }) : e.addEventListener(n, l, !0) : f !== void 0 ? e.addEventListener(n, l, {
      passive: f
    }) : e.addEventListener(n, l, !1);
  }
  function Bc(e, n, l, o, f) {
    var m = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (; ; ) {
        if (o === null) return;
        var w = o.tag;
        if (w === 3 || w === 4) {
          var T = o.stateNode.containerInfo;
          if (T === f) break;
          if (w === 4)
            for (w = o.return; w !== null; ) {
              var R = w.tag;
              if ((R === 3 || R === 4) && w.stateNode.containerInfo === f)
                return;
              w = w.return;
            }
          for (; T !== null; ) {
            if (w = tr(T), w === null) return;
            if (R = w.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              o = m = w;
              continue t;
            }
            T = T.parentNode;
          }
        }
        o = o.return;
      }
    Vd(function() {
      var H = m, G = eu(l), W = [];
      t: {
        var q = fp.get(e);
        if (q !== void 0) {
          var Y = Zl, vt = e;
          switch (e) {
            case "keypress":
              if (Ql(l) === 0) break t;
            case "keydown":
            case "keyup":
              Y = Ww;
              break;
            case "focusin":
              vt = "focus", Y = ou;
              break;
            case "focusout":
              vt = "blur", Y = ou;
              break;
            case "beforeblur":
            case "afterblur":
              Y = ou;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Hd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = jw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = tx;
              break;
            case op:
            case sp:
            case up:
              Y = qw;
              break;
            case cp:
              Y = nx;
              break;
            case "scroll":
            case "scrollend":
              Y = Vw;
              break;
            case "wheel":
              Y = rx;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Fw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = qd;
              break;
            case "toggle":
            case "beforetoggle":
              Y = lx;
          }
          var pt = (n & 4) !== 0, Ut = !pt && (e === "scroll" || e === "scrollend"), U = pt ? q !== null ? q + "Capture" : null : q;
          pt = [];
          for (var B = H, j; B !== null; ) {
            var I = B;
            if (j = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || j === null || U === null || (I = ca(B, U), I != null && pt.push(
              Ga(B, I, j)
            )), Ut) break;
            B = B.return;
          }
          0 < pt.length && (q = new Y(
            q,
            vt,
            null,
            l,
            G
          ), W.push({ event: q, listeners: pt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (q = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", q && l !== tu && (vt = l.relatedTarget || l.fromElement) && (tr(vt) || vt[$i]))
            break t;
          if ((Y || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, Y ? (vt = l.relatedTarget || l.toElement, Y = H, vt = vt ? tr(vt) : null, vt !== null && (Ut = c(vt), pt = vt.tag, vt !== Ut || pt !== 5 && pt !== 27 && pt !== 6) && (vt = null)) : (Y = null, vt = H), Y !== vt)) {
            if (pt = Hd, I = "onMouseLeave", U = "onMouseEnter", B = "mouse", (e === "pointerout" || e === "pointerover") && (pt = qd, I = "onPointerLeave", U = "onPointerEnter", B = "pointer"), Ut = Y == null ? q : ua(Y), j = vt == null ? q : ua(vt), q = new pt(
              I,
              B + "leave",
              Y,
              l,
              G
            ), q.target = Ut, q.relatedTarget = j, I = null, tr(G) === H && (pt = new pt(
              U,
              B + "enter",
              vt,
              l,
              G
            ), pt.target = j, pt.relatedTarget = Ut, I = pt), Ut = I, Y && vt)
              e: {
                for (pt = Y, U = vt, B = 0, j = pt; j; j = Nr(j))
                  B++;
                for (j = 0, I = U; I; I = Nr(I))
                  j++;
                for (; 0 < B - j; )
                  pt = Nr(pt), B--;
                for (; 0 < j - B; )
                  U = Nr(U), j--;
                for (; B--; ) {
                  if (pt === U || U !== null && pt === U.alternate)
                    break e;
                  pt = Nr(pt), U = Nr(U);
                }
                pt = null;
              }
            else pt = null;
            Y !== null && Rg(
              W,
              q,
              Y,
              pt,
              !1
            ), vt !== null && Ut !== null && Rg(
              W,
              Ut,
              vt,
              pt,
              !0
            );
          }
        }
        t: {
          if (q = H ? ua(H) : window, Y = q.nodeName && q.nodeName.toLowerCase(), Y === "select" || Y === "input" && q.type === "file")
            var ot = Zd;
          else if (Qd(q))
            if (Wd)
              ot = gx;
            else {
              ot = px;
              var kt = dx;
            }
          else
            Y = q.nodeName, !Y || Y.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? H && $s(H.elementType) && (ot = Zd) : ot = mx;
          if (ot && (ot = ot(e, H))) {
            Kd(
              W,
              ot,
              l,
              G
            );
            break t;
          }
          kt && kt(e, q, H), e === "focusout" && H && q.type === "number" && H.memoizedProps.value != null && Js(q, "number", q.value);
        }
        switch (kt = H ? ua(H) : window, e) {
          case "focusin":
            (Qd(kt) || kt.contentEditable === "true") && (cr = kt, du = H, va = null);
            break;
          case "focusout":
            va = du = cr = null;
            break;
          case "mousedown":
            pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pu = !1, ap(W, l, G);
            break;
          case "selectionchange":
            if (vx) break;
          case "keydown":
          case "keyup":
            ap(W, l, G);
        }
        var ct;
        if (uu)
          t: {
            switch (e) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          ur ? Gd(e, l) && (mt = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (mt = "onCompositionStart");
        mt && (Yd && l.locale !== "ko" && (ur || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && ur && (ct = Ud()) : (Wn = G, ru = "value" in Wn ? Wn.value : Wn.textContent, ur = !0)), kt = Uo(H, mt), 0 < kt.length && (mt = new Pd(
          mt,
          e,
          null,
          l,
          G
        ), W.push({ event: mt, listeners: kt }), ct ? mt.data = ct : (ct = Id(l), ct !== null && (mt.data = ct)))), (ct = sx ? ux(e, l) : cx(e, l)) && (mt = Uo(H, "onBeforeInput"), 0 < mt.length && (kt = new Pd(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          G
        ), W.push({
          event: kt,
          listeners: mt
        }), kt.data = ct)), tS(
          W,
          e,
          H,
          l,
          G
        );
      }
      zg(W, n);
    });
  }
  function Ga(e, n, l) {
    return {
      instance: e,
      listener: n,
      currentTarget: l
    };
  }
  function Uo(e, n) {
    for (var l = n + "Capture", o = []; e !== null; ) {
      var f = e, m = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || m === null || (f = ca(e, l), f != null && o.unshift(
        Ga(e, f, m)
      ), f = ca(e, n), f != null && o.push(
        Ga(e, f, m)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Nr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rg(e, n, l, o, f) {
    for (var m = n._reactName, w = []; l !== null && l !== o; ) {
      var T = l, R = T.alternate, H = T.stateNode;
      if (T = T.tag, R !== null && R === o) break;
      T !== 5 && T !== 26 && T !== 27 || H === null || (R = H, f ? (H = ca(l, m), H != null && w.unshift(
        Ga(l, H, R)
      )) : f || (H = ca(l, m), H != null && w.push(
        Ga(l, H, R)
      ))), l = l.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
  }
  var rS = /\r\n?/g, aS = /\u0000|\uFFFD/g;
  function Og(e) {
    return (typeof e == "string" ? e : "" + e).replace(rS, `
`).replace(aS, "");
  }
  function _g(e, n) {
    return n = Og(n), Og(e) === n;
  }
  function jo() {
  }
  function Vt(e, n, l, o, f, m) {
    switch (l) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || lr(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && lr(e, "" + o);
        break;
      case "className":
        Yl(e, "class", o);
        break;
      case "tabIndex":
        Yl(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yl(e, l, o);
        break;
      case "style":
        Ld(e, o, m);
        break;
      case "data":
        if (n !== "object") {
          Yl(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(l);
          break;
        }
        o = Gl("" + o), e.setAttribute(l, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (l === "formAction" ? (n !== "input" && Vt(e, n, "name", f.name, f, null), Vt(
            e,
            n,
            "formEncType",
            f.formEncType,
            f,
            null
          ), Vt(
            e,
            n,
            "formMethod",
            f.formMethod,
            f,
            null
          ), Vt(
            e,
            n,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (Vt(e, n, "encType", f.encType, f, null), Vt(e, n, "method", f.method, f, null), Vt(e, n, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(l);
          break;
        }
        o = Gl("" + o), e.setAttribute(l, o);
        break;
      case "onClick":
        o != null && (e.onclick = jo);
        break;
      case "onScroll":
        o != null && At("scroll", e);
        break;
      case "onScrollEnd":
        o != null && At("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (l = o.__html, l != null) {
            if (f.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Gl("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "" + o) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(l, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, o) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(l, o) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(l) : e.setAttribute(l, o);
        break;
      case "popover":
        At("beforetoggle", e), At("toggle", e), ql(e, "popover", o);
        break;
      case "xlinkActuate":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        On(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        On(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        On(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        On(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        ql(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Lw.get(l) || l, ql(e, l, o));
    }
  }
  function Vc(e, n, l, o, f, m) {
    switch (l) {
      case "style":
        Ld(e, o, m);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (l = o.__html, l != null) {
            if (f.children != null) throw Error(a(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof o == "string" ? lr(e, o) : (typeof o == "number" || typeof o == "bigint") && lr(e, "" + o);
        break;
      case "onScroll":
        o != null && At("scroll", e);
        break;
      case "onScrollEnd":
        o != null && At("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = jo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!kd.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (f = l.endsWith("Capture"), n = l.slice(2, f ? l.length - 7 : void 0), m = e[ze] || null, m = m != null ? m[l] : null, typeof m == "function" && e.removeEventListener(n, m, f), typeof o == "function")) {
              typeof m != "function" && m !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(n, o, f);
              break t;
            }
            l in e ? e[l] = o : o === !0 ? e.setAttribute(l, "") : ql(e, l, o);
          }
    }
  }
  function me(e, n, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        At("error", e), At("load", e);
        var o = !1, f = !1, m;
        for (m in l)
          if (l.hasOwnProperty(m)) {
            var w = l[m];
            if (w != null)
              switch (m) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, n));
                default:
                  Vt(e, n, m, w, l, null);
              }
          }
        f && Vt(e, n, "srcSet", l.srcSet, l, null), o && Vt(e, n, "src", l.src, l, null);
        return;
      case "input":
        At("invalid", e);
        var T = m = w = f = null, R = null, H = null;
        for (o in l)
          if (l.hasOwnProperty(o)) {
            var G = l[o];
            if (G != null)
              switch (o) {
                case "name":
                  f = G;
                  break;
                case "type":
                  w = G;
                  break;
                case "checked":
                  R = G;
                  break;
                case "defaultChecked":
                  H = G;
                  break;
                case "value":
                  m = G;
                  break;
                case "defaultValue":
                  T = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(a(137, n));
                  break;
                default:
                  Vt(e, n, o, G, l, null);
              }
          }
        Rd(
          e,
          m,
          T,
          R,
          H,
          w,
          f,
          !1
        ), Fl(e);
        return;
      case "select":
        At("invalid", e), o = w = m = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (T = l[f], T != null))
            switch (f) {
              case "value":
                m = T;
                break;
              case "defaultValue":
                w = T;
                break;
              case "multiple":
                o = T;
              default:
                Vt(e, n, f, T, l, null);
            }
        n = m, l = w, e.multiple = !!o, n != null ? ar(e, !!o, n, !1) : l != null && ar(e, !!o, l, !0);
        return;
      case "textarea":
        At("invalid", e), m = f = o = null;
        for (w in l)
          if (l.hasOwnProperty(w) && (T = l[w], T != null))
            switch (w) {
              case "value":
                o = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
                m = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(a(91));
                break;
              default:
                Vt(e, n, w, T, l, null);
            }
        _d(e, o, f, m), Fl(e);
        return;
      case "option":
        for (R in l)
          if (l.hasOwnProperty(R) && (o = l[R], o != null))
            switch (R) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Vt(e, n, R, o, l, null);
            }
        return;
      case "dialog":
        At("beforetoggle", e), At("toggle", e), At("cancel", e), At("close", e);
        break;
      case "iframe":
      case "object":
        At("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Xa.length; o++)
          At(Xa[o], e);
        break;
      case "image":
        At("error", e), At("load", e);
        break;
      case "details":
        At("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        At("error", e), At("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in l)
          if (l.hasOwnProperty(H) && (o = l[H], o != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, n));
              default:
                Vt(e, n, H, o, l, null);
            }
        return;
      default:
        if ($s(n)) {
          for (G in l)
            l.hasOwnProperty(G) && (o = l[G], o !== void 0 && Vc(
              e,
              n,
              G,
              o,
              l,
              void 0
            ));
          return;
        }
    }
    for (T in l)
      l.hasOwnProperty(T) && (o = l[T], o != null && Vt(e, n, T, o, l, null));
  }
  function lS(e, n, l, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null, m = null, w = null, T = null, R = null, H = null, G = null;
        for (Y in l) {
          var W = l[Y];
          if (l.hasOwnProperty(Y) && W != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = W;
              default:
                o.hasOwnProperty(Y) || Vt(e, n, Y, null, o, W);
            }
        }
        for (var q in o) {
          var Y = o[q];
          if (W = l[q], o.hasOwnProperty(q) && (Y != null || W != null))
            switch (q) {
              case "type":
                m = Y;
                break;
              case "name":
                f = Y;
                break;
              case "checked":
                H = Y;
                break;
              case "defaultChecked":
                G = Y;
                break;
              case "value":
                w = Y;
                break;
              case "defaultValue":
                T = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(a(137, n));
                break;
              default:
                Y !== W && Vt(
                  e,
                  n,
                  q,
                  Y,
                  o,
                  W
                );
            }
        }
        Ws(
          e,
          w,
          T,
          R,
          H,
          G,
          m,
          f
        );
        return;
      case "select":
        Y = w = T = q = null;
        for (m in l)
          if (R = l[m], l.hasOwnProperty(m) && R != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                Y = R;
              default:
                o.hasOwnProperty(m) || Vt(
                  e,
                  n,
                  m,
                  null,
                  o,
                  R
                );
            }
        for (f in o)
          if (m = o[f], R = l[f], o.hasOwnProperty(f) && (m != null || R != null))
            switch (f) {
              case "value":
                q = m;
                break;
              case "defaultValue":
                T = m;
                break;
              case "multiple":
                w = m;
              default:
                m !== R && Vt(
                  e,
                  n,
                  f,
                  m,
                  o,
                  R
                );
            }
        n = T, l = w, o = Y, q != null ? ar(e, !!l, q, !1) : !!o != !!l && (n != null ? ar(e, !!l, n, !0) : ar(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        Y = q = null;
        for (T in l)
          if (f = l[T], l.hasOwnProperty(T) && f != null && !o.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Vt(e, n, T, null, o, f);
            }
        for (w in o)
          if (f = o[w], m = l[w], o.hasOwnProperty(w) && (f != null || m != null))
            switch (w) {
              case "value":
                q = f;
                break;
              case "defaultValue":
                Y = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(a(91));
                break;
              default:
                f !== m && Vt(e, n, w, f, o, m);
            }
        Od(e, q, Y);
        return;
      case "option":
        for (var vt in l)
          if (q = l[vt], l.hasOwnProperty(vt) && q != null && !o.hasOwnProperty(vt))
            switch (vt) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Vt(
                  e,
                  n,
                  vt,
                  null,
                  o,
                  q
                );
            }
        for (R in o)
          if (q = o[R], Y = l[R], o.hasOwnProperty(R) && q !== Y && (q != null || Y != null))
            switch (R) {
              case "selected":
                e.selected = q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                Vt(
                  e,
                  n,
                  R,
                  q,
                  o,
                  Y
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pt in l)
          q = l[pt], l.hasOwnProperty(pt) && q != null && !o.hasOwnProperty(pt) && Vt(e, n, pt, null, o, q);
        for (H in o)
          if (q = o[H], Y = l[H], o.hasOwnProperty(H) && q !== Y && (q != null || Y != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(a(137, n));
                break;
              default:
                Vt(
                  e,
                  n,
                  H,
                  q,
                  o,
                  Y
                );
            }
        return;
      default:
        if ($s(n)) {
          for (var Ut in l)
            q = l[Ut], l.hasOwnProperty(Ut) && q !== void 0 && !o.hasOwnProperty(Ut) && Vc(
              e,
              n,
              Ut,
              void 0,
              o,
              q
            );
          for (G in o)
            q = o[G], Y = l[G], !o.hasOwnProperty(G) || q === Y || q === void 0 && Y === void 0 || Vc(
              e,
              n,
              G,
              q,
              o,
              Y
            );
          return;
        }
    }
    for (var U in l)
      q = l[U], l.hasOwnProperty(U) && q != null && !o.hasOwnProperty(U) && Vt(e, n, U, null, o, q);
    for (W in o)
      q = o[W], Y = l[W], !o.hasOwnProperty(W) || q === Y || q == null && Y == null || Vt(e, n, W, q, o, Y);
  }
  var Uc = null, jc = null;
  function Ho(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ng(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Hc(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = null;
  function oS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Pc ? !1 : (Pc = e, !0) : (Pc = null, !1);
  }
  var Bg = typeof setTimeout == "function" ? setTimeout : void 0, sS = typeof clearTimeout == "function" ? clearTimeout : void 0, Vg = typeof Promise == "function" ? Promise : void 0, uS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vg < "u" ? function(e) {
    return Vg.resolve(null).then(e).catch(cS);
  } : Bg;
  function cS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function di(e) {
    return e === "head";
  }
  function Ug(e, n) {
    var l = n, o = 0, f = 0;
    do {
      var m = l.nextSibling;
      if (e.removeChild(l), m && m.nodeType === 8)
        if (l = m.data, l === "/$") {
          if (0 < o && 8 > o) {
            l = o;
            var w = e.ownerDocument;
            if (l & 1 && Ia(w.documentElement), l & 2 && Ia(w.body), l & 4)
              for (l = w.head, Ia(l), w = l.firstChild; w; ) {
                var T = w.nextSibling, R = w.nodeName;
                w[sa] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && w.rel.toLowerCase() === "stylesheet" || l.removeChild(w), w = T;
              }
          }
          if (f === 0) {
            e.removeChild(m), el(n);
            return;
          }
          f--;
        } else
          l === "$" || l === "$?" || l === "$!" ? f++ : o = l.charCodeAt(0) - 48;
      else o = 0;
      l = m;
    } while (l);
    el(n);
  }
  function qc(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var l = n;
      switch (n = n.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qc(l), Is(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function fS(e, n, l, o) {
    for (; e.nodeType === 1; ) {
      var f = l;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[sa])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (m = e.getAttribute("rel"), m === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (m !== f.rel || e.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (m = e.getAttribute("src"), (m !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && m && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var m = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === m)
          return e;
      } else return e;
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hS(e, n, l) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function dS(e, n) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), l.removeEventListener("DOMContentLoaded", o);
      };
      l.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Fc = null;
  function jg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (n === 0) return e;
          n--;
        } else l === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Hg(e, n, l) {
    switch (n = Ho(l), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function Ia(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Is(e);
  }
  var an = /* @__PURE__ */ new Map(), Pg = /* @__PURE__ */ new Set();
  function Po(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Gn = K.d;
  K.d = {
    f: pS,
    r: mS,
    D: gS,
    C: yS,
    L: vS,
    m: bS,
    X: xS,
    S: wS,
    M: SS
  };
  function pS() {
    var e = Gn.f(), n = Oo();
    return e || n;
  }
  function mS(e) {
    var n = er(e);
    n !== null && n.tag === 5 && n.type === "form" ? om(n) : Gn.r(e);
  }
  var Lr = typeof document > "u" ? null : document;
  function qg(e, n, l) {
    var o = Lr;
    if (o && typeof n == "string" && n) {
      var f = We(n);
      f = 'link[rel="' + e + '"][href="' + f + '"]', typeof l == "string" && (f += '[crossorigin="' + l + '"]'), Pg.has(f) || (Pg.add(f), e = { rel: e, crossOrigin: l, href: n }, o.querySelector(f) === null && (n = o.createElement("link"), me(n, "link", e), ue(n), o.head.appendChild(n)));
    }
  }
  function gS(e) {
    Gn.D(e), qg("dns-prefetch", e, null);
  }
  function yS(e, n) {
    Gn.C(e, n), qg("preconnect", e, n);
  }
  function vS(e, n, l) {
    Gn.L(e, n, l);
    var o = Lr;
    if (o && e && n) {
      var f = 'link[rel="preload"][as="' + We(n) + '"]';
      n === "image" && l && l.imageSrcSet ? (f += '[imagesrcset="' + We(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (f += '[imagesizes="' + We(
        l.imageSizes
      ) + '"]')) : f += '[href="' + We(e) + '"]';
      var m = f;
      switch (n) {
        case "style":
          m = Br(e);
          break;
        case "script":
          m = Vr(e);
      }
      an.has(m) || (e = g(
        {
          rel: "preload",
          href: n === "image" && l && l.imageSrcSet ? void 0 : e,
          as: n
        },
        l
      ), an.set(m, e), o.querySelector(f) !== null || n === "style" && o.querySelector(Qa(m)) || n === "script" && o.querySelector(Ka(m)) || (n = o.createElement("link"), me(n, "link", e), ue(n), o.head.appendChild(n)));
    }
  }
  function bS(e, n) {
    Gn.m(e, n);
    var l = Lr;
    if (l && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", f = 'link[rel="modulepreload"][as="' + We(o) + '"][href="' + We(e) + '"]', m = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Vr(e);
      }
      if (!an.has(m) && (e = g({ rel: "modulepreload", href: e }, n), an.set(m, e), l.querySelector(f) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ka(m)))
              return;
        }
        o = l.createElement("link"), me(o, "link", e), ue(o), l.head.appendChild(o);
      }
    }
  }
  function wS(e, n, l) {
    Gn.S(e, n, l);
    var o = Lr;
    if (o && e) {
      var f = nr(o).hoistableStyles, m = Br(e);
      n = n || "default";
      var w = f.get(m);
      if (!w) {
        var T = { loading: 0, preload: null };
        if (w = o.querySelector(
          Qa(m)
        ))
          T.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            l
          ), (l = an.get(m)) && Xc(e, l);
          var R = w = o.createElement("link");
          ue(R), me(R, "link", e), R._p = new Promise(function(H, G) {
            R.onload = H, R.onerror = G;
          }), R.addEventListener("load", function() {
            T.loading |= 1;
          }), R.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, qo(w, n, o);
        }
        w = {
          type: "stylesheet",
          instance: w,
          count: 1,
          state: T
        }, f.set(m, w);
      }
    }
  }
  function xS(e, n) {
    Gn.X(e, n);
    var l = Lr;
    if (l && e) {
      var o = nr(l).hoistableScripts, f = Vr(e), m = o.get(f);
      m || (m = l.querySelector(Ka(f)), m || (e = g({ src: e, async: !0 }, n), (n = an.get(f)) && Gc(e, n), m = l.createElement("script"), ue(m), me(m, "link", e), l.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, o.set(f, m));
    }
  }
  function SS(e, n) {
    Gn.M(e, n);
    var l = Lr;
    if (l && e) {
      var o = nr(l).hoistableScripts, f = Vr(e), m = o.get(f);
      m || (m = l.querySelector(Ka(f)), m || (e = g({ src: e, async: !0, type: "module" }, n), (n = an.get(f)) && Gc(e, n), m = l.createElement("script"), ue(m), me(m, "link", e), l.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, o.set(f, m));
    }
  }
  function Yg(e, n, l, o) {
    var f = (f = ut.current) ? Po(f) : null;
    if (!f) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (n = Br(l.href), l = nr(
          f
        ).hoistableStyles, o = l.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Br(l.href);
          var m = nr(
            f
          ).hoistableStyles, w = m.get(e);
          if (w || (f = f.ownerDocument || f, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, w), (m = f.querySelector(
            Qa(e)
          )) && !m._p && (w.instance = m, w.state.loading = 5), an.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, an.set(e, l), m || TS(
            f,
            e,
            l,
            w.state
          ))), n && o === null)
            throw Error(a(528, ""));
          return w;
        }
        if (n && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return n = l.async, l = l.src, typeof l == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Vr(l), l = nr(
          f
        ).hoistableScripts, o = l.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function Br(e) {
    return 'href="' + We(e) + '"';
  }
  function Qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function TS(e, n, l, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), me(n, "link", l), ue(n), e.head.appendChild(n));
  }
  function Vr(e) {
    return '[src="' + We(e) + '"]';
  }
  function Ka(e) {
    return "script[async]" + e;
  }
  function Xg(e, n, l) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + We(l.href) + '"]'
          );
          if (o)
            return n.instance = o, ue(o), o;
          var f = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), ue(o), me(o, "style", f), qo(o, l.precedence, e), n.instance = o;
        case "stylesheet":
          f = Br(l.href);
          var m = e.querySelector(
            Qa(f)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, ue(m), m;
          o = Fg(l), (f = an.get(f)) && Xc(o, f), m = (e.ownerDocument || e).createElement("link"), ue(m);
          var w = m;
          return w._p = new Promise(function(T, R) {
            w.onload = T, w.onerror = R;
          }), me(m, "link", o), n.state.loading |= 4, qo(m, l.precedence, e), n.instance = m;
        case "script":
          return m = Vr(l.src), (f = e.querySelector(
            Ka(m)
          )) ? (n.instance = f, ue(f), f) : (o = l, (f = an.get(m)) && (o = g({}, l), Gc(o, f)), e = e.ownerDocument || e, f = e.createElement("script"), ue(f), me(f, "link", o), e.head.appendChild(f), n.instance = f);
        case "void":
          return null;
        default:
          throw Error(a(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, qo(o, l.precedence, e));
    return n.instance;
  }
  function qo(e, n, l) {
    for (var o = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = o.length ? o[o.length - 1] : null, m = f, w = 0; w < o.length; w++) {
      var T = o[w];
      if (T.dataset.precedence === n) m = T;
      else if (m !== f) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = l.nodeType === 9 ? l.head : l, n.insertBefore(e, n.firstChild));
  }
  function Xc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Gc(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Yo = null;
  function Gg(e, n, l) {
    if (Yo === null) {
      var o = /* @__PURE__ */ new Map(), f = Yo = /* @__PURE__ */ new Map();
      f.set(l, o);
    } else
      f = Yo, o = f.get(l), o || (o = /* @__PURE__ */ new Map(), f.set(l, o));
    if (o.has(e)) return o;
    for (o.set(e, null), l = l.getElementsByTagName(e), f = 0; f < l.length; f++) {
      var m = l[f];
      if (!(m[sa] || m[ye] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = m.getAttribute(n) || "";
        w = e + w;
        var T = o.get(w);
        T ? T.push(m) : o.set(w, [m]);
      }
    }
    return o;
  }
  function Ig(e, n, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function kS(e, n, l) {
    if (l === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Qg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Za = null;
  function ES() {
  }
  function AS(e, n, l) {
    if (Za === null) throw Error(a(475));
    var o = Za;
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var f = Br(l.href), m = e.querySelector(
          Qa(f)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = Fo.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = m, ue(m);
          return;
        }
        m = e.ownerDocument || e, l = Fg(l), (f = an.get(f)) && Xc(l, f), m = m.createElement("link"), ue(m);
        var w = m;
        w._p = new Promise(function(T, R) {
          w.onload = T, w.onerror = R;
        }), me(m, "link", l), n.instance = m;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = Fo.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function DS() {
    if (Za === null) throw Error(a(475));
    var e = Za;
    return e.stylesheets && e.count === 0 && Ic(e, e.stylesheets), 0 < e.count ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ic(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function Fo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ic(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Xo = null;
  function Ic(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Xo = /* @__PURE__ */ new Map(), n.forEach(CS, e), Xo = null, Fo.call(e));
  }
  function CS(e, n) {
    if (!(n.state.loading & 4)) {
      var l = Xo.get(e);
      if (l) var o = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Xo.set(e, l);
        for (var f = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < f.length; m++) {
          var w = f[m];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (l.set(w.dataset.precedence, w), o = w);
        }
        o && l.set(null, o);
      }
      f = n.instance, w = f.getAttribute("data-precedence"), m = l.get(w) || o, m === o && l.set(null, f), l.set(w, f), this.count++, o = Fo.bind(this), f.addEventListener("load", o), f.addEventListener("error", o), m ? m.parentNode.insertBefore(f, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Wa = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: rt,
    _currentValue2: rt,
    _threadCount: 0
  };
  function zS(e, n, l, o, f, m, w, T) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ys(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ys(0), this.hiddenUpdates = Ys(null), this.identifierPrefix = o, this.onUncaughtError = f, this.onCaughtError = m, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kg(e, n, l, o, f, m, w, T, R, H, G, W) {
    return e = new zS(
      e,
      n,
      l,
      w,
      T,
      R,
      H,
      W
    ), n = 1, m === !0 && (n |= 24), m = Pe(3, null, null, n), e.current = m, m.stateNode = e, n = Cu(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: o,
      isDehydrated: l,
      cache: n
    }, Ou(m), e;
  }
  function Zg(e) {
    return e ? (e = pr, e) : pr;
  }
  function Wg(e, n, l, o, f, m) {
    f = Zg(f), o.context === null ? o.context = f : o.pendingContext = f, o = ti(n), o.payload = { element: l }, m = m === void 0 ? null : m, m !== null && (o.callback = m), l = ei(e, o, n), l !== null && (Ge(l, e, n), Da(l, e, n));
  }
  function Jg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function Qc(e, n) {
    Jg(e, n), (e = e.alternate) && Jg(e, n);
  }
  function $g(e) {
    if (e.tag === 13) {
      var n = dr(e, 67108864);
      n !== null && Ge(n, e, 67108864), Qc(e, 67108864);
    }
  }
  var Go = !0;
  function MS(e, n, l, o) {
    var f = P.T;
    P.T = null;
    var m = K.p;
    try {
      K.p = 2, Kc(e, n, l, o);
    } finally {
      K.p = m, P.T = f;
    }
  }
  function RS(e, n, l, o) {
    var f = P.T;
    P.T = null;
    var m = K.p;
    try {
      K.p = 8, Kc(e, n, l, o);
    } finally {
      K.p = m, P.T = f;
    }
  }
  function Kc(e, n, l, o) {
    if (Go) {
      var f = Zc(o);
      if (f === null)
        Bc(
          e,
          n,
          o,
          Io,
          l
        ), ey(e, o);
      else if (_S(
        f,
        e,
        n,
        l,
        o
      ))
        o.stopPropagation();
      else if (ey(e, o), n & 4 && -1 < OS.indexOf(e)) {
        for (; f !== null; ) {
          var m = er(f);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var w = je(m.pendingLanes);
                  if (w !== 0) {
                    var T = m;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; w; ) {
                      var R = 1 << 31 - gt(w);
                      T.entanglements[1] |= R, w &= ~R;
                    }
                    Sn(m), (Nt & 6) === 0 && (Mo = Ve() + 500, Fa(0));
                  }
                }
                break;
              case 13:
                T = dr(m, 2), T !== null && Ge(T, m, 2), Oo(), Qc(m, 2);
            }
          if (m = Zc(o), m === null && Bc(
            e,
            n,
            o,
            Io,
            l
          ), m === f) break;
          f = m;
        }
        f !== null && o.stopPropagation();
      } else
        Bc(
          e,
          n,
          o,
          null,
          l
        );
    }
  }
  function Zc(e) {
    return e = eu(e), Wc(e);
  }
  var Io = null;
  function Wc(e) {
    if (Io = null, e = tr(e), e !== null) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var l = n.tag;
        if (l === 13) {
          if (e = u(n), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return Io = e, null;
  }
  function ty(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (js()) {
          case aa:
            return 2;
          case la:
            return 8;
          case Ji:
          case Hs:
            return 32;
          case Pl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jc = !1, pi = null, mi = null, gi = null, Ja = /* @__PURE__ */ new Map(), $a = /* @__PURE__ */ new Map(), yi = [], OS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ey(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        pi = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        gi = null;
        break;
      case "pointerover":
      case "pointerout":
        Ja.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $a.delete(n.pointerId);
    }
  }
  function tl(e, n, l, o, f, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: n,
      domEventName: l,
      eventSystemFlags: o,
      nativeEvent: m,
      targetContainers: [f]
    }, n !== null && (n = er(n), n !== null && $g(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), e);
  }
  function _S(e, n, l, o, f) {
    switch (n) {
      case "focusin":
        return pi = tl(
          pi,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "dragenter":
        return mi = tl(
          mi,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "mouseover":
        return gi = tl(
          gi,
          e,
          n,
          l,
          o,
          f
        ), !0;
      case "pointerover":
        var m = f.pointerId;
        return Ja.set(
          m,
          tl(
            Ja.get(m) || null,
            e,
            n,
            l,
            o,
            f
          )
        ), !0;
      case "gotpointercapture":
        return m = f.pointerId, $a.set(
          m,
          tl(
            $a.get(m) || null,
            e,
            n,
            l,
            o,
            f
          )
        ), !0;
    }
    return !1;
  }
  function ny(e) {
    var n = tr(e.target);
    if (n !== null) {
      var l = c(n);
      if (l !== null) {
        if (n = l.tag, n === 13) {
          if (n = u(l), n !== null) {
            e.blockedOn = n, Aw(e.priority, function() {
              if (l.tag === 13) {
                var o = Xe();
                o = Fs(o);
                var f = dr(l, o);
                f !== null && Ge(f, l, o), Qc(l, o);
              }
            });
            return;
          }
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var l = Zc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var o = new l.constructor(
          l.type,
          l
        );
        tu = o, l.target.dispatchEvent(o), tu = null;
      } else
        return n = er(l), n !== null && $g(n), e.blockedOn = l, !1;
      n.shift();
    }
    return !0;
  }
  function iy(e, n, l) {
    Qo(e) && l.delete(n);
  }
  function NS() {
    Jc = !1, pi !== null && Qo(pi) && (pi = null), mi !== null && Qo(mi) && (mi = null), gi !== null && Qo(gi) && (gi = null), Ja.forEach(iy), $a.forEach(iy);
  }
  function Ko(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Jc || (Jc = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      NS
    )));
  }
  var Zo = null;
  function ry(e) {
    Zo !== e && (Zo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Zo === e && (Zo = null);
        for (var n = 0; n < e.length; n += 3) {
          var l = e[n], o = e[n + 1], f = e[n + 2];
          if (typeof o != "function") {
            if (Wc(o || l) === null)
              continue;
            break;
          }
          var m = er(l);
          m !== null && (e.splice(n, 3), n -= 3, Wu(
            m,
            {
              pending: !0,
              data: f,
              method: l.method,
              action: o
            },
            o,
            f
          ));
        }
      }
    ));
  }
  function el(e) {
    function n(R) {
      return Ko(R, e);
    }
    pi !== null && Ko(pi, e), mi !== null && Ko(mi, e), gi !== null && Ko(gi, e), Ja.forEach(n), $a.forEach(n);
    for (var l = 0; l < yi.length; l++) {
      var o = yi[l];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < yi.length && (l = yi[0], l.blockedOn === null); )
      ny(l), l.blockedOn === null && yi.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (o = 0; o < l.length; o += 3) {
        var f = l[o], m = l[o + 1], w = f[ze] || null;
        if (typeof m == "function")
          w || ry(l);
        else if (w) {
          var T = null;
          if (m && m.hasAttribute("formAction")) {
            if (f = m, w = m[ze] || null)
              T = w.formAction;
            else if (Wc(f) !== null) continue;
          } else T = w.action;
          typeof T == "function" ? l[o + 1] = T : (l.splice(o, 3), o -= 3), ry(l);
        }
      }
  }
  function $c(e) {
    this._internalRoot = e;
  }
  Wo.prototype.render = $c.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(a(409));
    var l = n.current, o = Xe();
    Wg(l, o, e, n, null, null);
  }, Wo.prototype.unmount = $c.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Wg(e.current, 2, null, e, null, null), Oo(), n[$i] = null;
    }
  };
  function Wo(e) {
    this._internalRoot = e;
  }
  Wo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = xd();
      e = { blockedOn: null, target: e, priority: n };
      for (var l = 0; l < yi.length && n !== 0 && n < yi[l].priority; l++) ;
      yi.splice(l, 0, e), l === 0 && ny(e);
    }
  };
  var ay = i.version;
  if (ay !== "19.1.0")
    throw Error(
      a(
        527,
        ay,
        "19.1.0"
      )
    );
  K.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = d(n), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var LS = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber)
      try {
        X = Jo.inject(
          LS
        ), tt = Jo;
      } catch {
      }
  }
  return cl.createRoot = function(e, n) {
    if (!s(e)) throw Error(a(299));
    var l = !1, o = "", f = xm, m = Sm, w = Tm, T = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks)), n = Kg(
      e,
      1,
      !1,
      null,
      null,
      l,
      o,
      f,
      m,
      w,
      T,
      null
    ), e[$i] = n.current, Lc(e), new $c(n);
  }, cl.hydrateRoot = function(e, n, l) {
    if (!s(e)) throw Error(a(299));
    var o = !1, f = "", m = xm, w = Sm, T = Tm, R = null, H = null;
    return l != null && (l.unstable_strictMode === !0 && (o = !0), l.identifierPrefix !== void 0 && (f = l.identifierPrefix), l.onUncaughtError !== void 0 && (m = l.onUncaughtError), l.onCaughtError !== void 0 && (w = l.onCaughtError), l.onRecoverableError !== void 0 && (T = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (R = l.unstable_transitionCallbacks), l.formState !== void 0 && (H = l.formState)), n = Kg(
      e,
      1,
      !0,
      n,
      l ?? null,
      o,
      f,
      m,
      w,
      T,
      R,
      H
    ), n.context = Zg(null), l = n.current, o = Xe(), o = Fs(o), f = ti(o), f.callback = null, ei(l, f, o), l = o, n.current.lanes = l, oa(n, l), Sn(n), e[$i] = n.current, Lc(e), new Wo(n);
  }, cl.version = "19.1.0", cl;
}
var Vv;
function L3() {
  if (Vv) return jf.exports;
  Vv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), jf.exports = N3(), jf.exports;
}
var B3 = L3();
const V3 = /* @__PURE__ */ Ds(B3), Uv = '/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-emerald-400:oklch(76.5% .177 163.223);--color-cyan-400:oklch(78.9% .154 211.53);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-900:oklch(38.1% .176 304.987);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-6xl:3.75rem;--text-6xl--line-height:1;--text-8xl:6rem;--text-8xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-3xl:64px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-20{top:calc(var(--spacing)*20)}.right-6{right:calc(var(--spacing)*6)}.right-20{right:calc(var(--spacing)*20)}.bottom-6{bottom:calc(var(--spacing)*6)}.bottom-20{bottom:calc(var(--spacing)*20)}.bottom-27{bottom:calc(var(--spacing)*27)}.left-1{left:calc(var(--spacing)*1)}.left-1\\/2{left:50%}.left-20{left:calc(var(--spacing)*20)}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.-mx-4{margin-inline:calc(var(--spacing)*-4)}.mx-auto{margin-inline:auto}.prose{color:var(--tw-prose-body);--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:NaN NaN NaN;--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);max-width:65ch;font-size:1rem;line-height:1.75}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"“""”""‘""’";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px rgb(var(--tw-prose-kbd-shadows)/10%);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.mt-12{margin-top:calc(var(--spacing)*12)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-5\\.5{width:calc(var(--spacing)*5.5);height:calc(var(--spacing)*5.5)}.h-8{height:calc(var(--spacing)*8)}.h-16{height:calc(var(--spacing)*16)}.h-64{height:calc(var(--spacing)*64)}.h-80{height:calc(var(--spacing)*80)}.h-96{height:calc(var(--spacing)*96)}.h-full{height:100%}.min-h-screen{min-height:100vh}.\\[width\\:0\\]{width:0}.w-8{width:calc(var(--spacing)*8)}.w-16{width:calc(var(--spacing)*16)}.w-64{width:calc(var(--spacing)*64)}.w-80{width:calc(var(--spacing)*80)}.w-96{width:calc(var(--spacing)*96)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-\\[80\\%\\]{max-width:80%}.flex-1{flex:1}.shrink{flex-shrink:1}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.\\[animation\\:typing_2s_steps\\(28\\,end\\)_0\\.3s_forwards\\,_blink_1s_step-end_infinite\\]{animation:2s steps(28,end) .3s forwards typing,1s step-end infinite blink}.animate-pulse{animation:var(--animate-pulse)}.cursor-move{cursor:move}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-2{gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-r-2{border-right-style:var(--tw-border-style);border-right-width:2px}.border-none{--tw-border-style:none;border-style:none}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-400\\/70{border-color:#99a1afb3}@supports (color:color-mix(in lab,red,red)){.border-gray-400\\/70{border-color:color-mix(in oklab,var(--color-gray-400)70%,transparent)}}.border-red-300{border-color:var(--color-red-300)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-500\\/20{background-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/20{background-color:color-mix(in oklab,var(--color-blue-500)20%,transparent)}}.bg-cyan-500{background-color:var(--color-cyan-500)}.bg-cyan-500\\/10{background-color:#00b7d71a}@supports (color:color-mix(in lab,red,red)){.bg-cyan-500\\/10{background-color:color-mix(in oklab,var(--color-cyan-500)10%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-purple-500\\/20{background-color:#ac4bff33}@supports (color:color-mix(in lab,red,red)){.bg-purple-500\\/20{background-color:color-mix(in oklab,var(--color-purple-500)20%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-900{--tw-gradient-from:var(--color-blue-900);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-cyan-400{--tw-gradient-from:var(--color-cyan-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-cyan-500{--tw-gradient-from:var(--color-cyan-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-purple-900{--tw-gradient-via:var(--color-purple-900);--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-blue-500{--tw-gradient-to:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-cyan-500{--tw-gradient-to:var(--color-cyan-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-emerald-400{--tw-gradient-to:var(--color-emerald-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-1{padding:calc(var(--spacing)*1)}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-1\\.5{padding-top:calc(var(--spacing)*1.5)}.pt-4{padding-top:calc(var(--spacing)*4)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.text-center{text-align:center}.text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.text-black{color:var(--color-black)}.text-blue-100{color:var(--color-blue-100)}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\/85{color:#4a5565d9}@supports (color:color-mix(in lab,red,red)){.text-gray-600\\/85{color:color-mix(in oklab,var(--color-gray-600)85%,transparent)}}.text-indigo-700{color:var(--color-indigo-700)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-3xl{--tw-blur:blur(var(--blur-3xl));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.hover\\:-translate-y-1:hover{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:bg-indigo-700:hover{background-color:var(--color-indigo-700)}.hover\\:from-cyan-600:hover{--tw-gradient-from:var(--color-cyan-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-blue-600:hover{--tw-gradient-to:var(--color-blue-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-400:focus{--tw-ring-color:var(--color-indigo-400)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media (min-width:48rem){.md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.md\\:text-8xl{font-size:var(--text-8xl);line-height:var(--tw-leading,var(--text-8xl--line-height))}}}:root{color-scheme:light dark;color:#ffffffde;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#fff;font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.thinking-dots{align-items:center;height:24px;display:flex}.thinking-dots span{background-color:#888;border-radius:50%;width:8px;height:8px;margin:0 2px;animation:1.4s ease-in-out infinite both bounce;display:inline-block}.thinking-dots span:first-child{animation-delay:-.32s}.thinking-dots span:nth-child(2){animation-delay:-.16s}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}@keyframes typing{0%{width:0}to{width:48ch}}@keyframes blink{50%{border-color:#0000}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}';
class kw extends HTMLElement {
  constructor() {
    super();
    // add more if you need
    $o(this, "_shadow");
    $o(this, "_root");
    this._shadow = this.attachShadow({ mode: "open" }), this._shadow.innerHTML = `<style>${Uv}</style>`;
    const r = new CSSStyleSheet();
    r.replaceSync(Uv), this._shadow.adoptedStyleSheets = [r], this._root = V3.createRoot(this._shadow);
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  // -------------------------------------------------------------------------
  render() {
    this._root.render(/* @__PURE__ */ ft.jsx(D3, { wsEndpoint: this.getAttribute("ws-endpoint") ?? "" }));
  }
}
// HTML attributes that should be forwarded to React props
$o(kw, "observedAttributes", ["ws-endpoint", "portal-target"]);
customElements.define("smartspy-chat", kw);
