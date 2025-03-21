(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var vo = { exports: {} },
  rl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bm;
function Jv() {
  if (bm) return rl;
  bm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var p in c) p !== "key" && (d[p] = c[p]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: r, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (rl.Fragment = l), (rl.jsx = u), (rl.jsxs = u), rl;
}
var Sm;
function Pv() {
  return Sm || ((Sm = 1), (vo.exports = Jv())), vo.exports;
}
var R = Pv(),
  bo = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm;
function Fv() {
  if (Tm) return lt;
  Tm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function T(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (S && x[S]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    w = {};
  function H(x, U, nt) {
    (this.props = x),
      (this.context = U),
      (this.refs = w),
      (this.updater = nt || C);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (x, U) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, U, "setState");
    }),
    (H.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function B() {}
  B.prototype = H.prototype;
  function Y(x, U, nt) {
    (this.props = x),
      (this.context = U),
      (this.refs = w),
      (this.updater = nt || C);
  }
  var X = (Y.prototype = new B());
  (X.constructor = Y), _(X, H.prototype), (X.isPureReactComponent = !0);
  var st = Array.isArray,
    L = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function mt(x, U, nt, $, Q, ht) {
    return (
      (nt = ht.ref),
      {
        $$typeof: a,
        type: x,
        key: U,
        ref: nt !== void 0 ? nt : null,
        props: ht,
      }
    );
  }
  function I(x, U) {
    return mt(x.type, U, void 0, void 0, void 0, x.props);
  }
  function Z(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function it(x) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (nt) {
        return U[nt];
      })
    );
  }
  var Ht = /\/+/g;
  function ge(x, U) {
    return typeof x == "object" && x !== null && x.key != null
      ? it("" + x.key)
      : U.toString(36);
  }
  function ve() {}
  function be(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(ve, ve)
            : ((x.status = "pending"),
              x.then(
                function (U) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = U));
                },
                function (U) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = U));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function ee(x, U, nt, $, Q) {
    var ht = typeof x;
    (ht === "undefined" || ht === "boolean") && (x = null);
    var ut = !1;
    if (x === null) ut = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case l:
              ut = !0;
              break;
            case v:
              return (ut = x._init), ee(ut(x._payload), U, nt, $, Q);
          }
      }
    if (ut)
      return (
        (Q = Q(x)),
        (ut = $ === "" ? "." + ge(x, 0) : $),
        st(Q)
          ? ((nt = ""),
            ut != null && (nt = ut.replace(Ht, "$&/") + "/"),
            ee(Q, U, nt, "", function (wt) {
              return wt;
            }))
          : Q != null &&
            (Z(Q) &&
              (Q = I(
                Q,
                nt +
                  (Q.key == null || (x && x.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(Ht, "$&/") + "/") +
                  ut
              )),
            U.push(Q)),
        1
      );
    ut = 0;
    var ne = $ === "" ? "." : $ + ":";
    if (st(x))
      for (var vt = 0; vt < x.length; vt++)
        ($ = x[vt]), (ht = ne + ge($, vt)), (ut += ee($, U, nt, ht, Q));
    else if (((vt = T(x)), typeof vt == "function"))
      for (x = vt.call(x), vt = 0; !($ = x.next()).done; )
        ($ = $.value), (ht = ne + ge($, vt++)), (ut += ee($, U, nt, ht, Q));
    else if (ht === "object") {
      if (typeof x.then == "function") return ee(be(x), U, nt, $, Q);
      throw (
        ((U = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ut;
  }
  function q(x, U, nt) {
    if (x == null) return x;
    var $ = [],
      Q = 0;
    return (
      ee(x, $, "", "", function (ht) {
        return U.call(nt, ht, Q++);
      }),
      $
    );
  }
  function J(x) {
    if (x._status === -1) {
      var U = x._result;
      (U = U()),
        U.then(
          function (nt) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = nt));
          },
          function (nt) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = nt));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = U));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function gt() {}
  return (
    (lt.Children = {
      map: q,
      forEach: function (x, U, nt) {
        q(
          x,
          function () {
            U.apply(this, arguments);
          },
          nt
        );
      },
      count: function (x) {
        var U = 0;
        return (
          q(x, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (x) {
        return (
          q(x, function (U) {
            return U;
          }) || []
        );
      },
      only: function (x) {
        if (!Z(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (lt.Component = H),
    (lt.Fragment = u),
    (lt.Profiler = c),
    (lt.PureComponent = Y),
    (lt.StrictMode = r),
    (lt.Suspense = m),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    (lt.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (lt.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (lt.cloneElement = function (x, U, nt) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var $ = _({}, x.props),
        Q = x.key,
        ht = void 0;
      if (U != null)
        for (ut in (U.ref !== void 0 && (ht = void 0),
        U.key !== void 0 && (Q = "" + U.key),
        U))
          !F.call(U, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && U.ref === void 0) ||
            ($[ut] = U[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) $.children = nt;
      else if (1 < ut) {
        for (var ne = Array(ut), vt = 0; vt < ut; vt++)
          ne[vt] = arguments[vt + 2];
        $.children = ne;
      }
      return mt(x.type, Q, void 0, void 0, ht, $);
    }),
    (lt.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: d, _context: x }),
        x
      );
    }),
    (lt.createElement = function (x, U, nt) {
      var $,
        Q = {},
        ht = null;
      if (U != null)
        for ($ in (U.key !== void 0 && (ht = "" + U.key), U))
          F.call(U, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (Q[$] = U[$]);
      var ut = arguments.length - 2;
      if (ut === 1) Q.children = nt;
      else if (1 < ut) {
        for (var ne = Array(ut), vt = 0; vt < ut; vt++)
          ne[vt] = arguments[vt + 2];
        Q.children = ne;
      }
      if (x && x.defaultProps)
        for ($ in ((ut = x.defaultProps), ut))
          Q[$] === void 0 && (Q[$] = ut[$]);
      return mt(x, ht, void 0, void 0, null, Q);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (lt.isValidElement = Z),
    (lt.lazy = function (x) {
      return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: J };
    }),
    (lt.memo = function (x, U) {
      return { $$typeof: y, type: x, compare: U === void 0 ? null : U };
    }),
    (lt.startTransition = function (x) {
      var U = L.T,
        nt = {};
      L.T = nt;
      try {
        var $ = x(),
          Q = L.S;
        Q !== null && Q(nt, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(gt, P);
      } catch (ht) {
        P(ht);
      } finally {
        L.T = U;
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    (lt.use = function (x) {
      return L.H.use(x);
    }),
    (lt.useActionState = function (x, U, nt) {
      return L.H.useActionState(x, U, nt);
    }),
    (lt.useCallback = function (x, U) {
      return L.H.useCallback(x, U);
    }),
    (lt.useContext = function (x) {
      return L.H.useContext(x);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (x, U) {
      return L.H.useDeferredValue(x, U);
    }),
    (lt.useEffect = function (x, U) {
      return L.H.useEffect(x, U);
    }),
    (lt.useId = function () {
      return L.H.useId();
    }),
    (lt.useImperativeHandle = function (x, U, nt) {
      return L.H.useImperativeHandle(x, U, nt);
    }),
    (lt.useInsertionEffect = function (x, U) {
      return L.H.useInsertionEffect(x, U);
    }),
    (lt.useLayoutEffect = function (x, U) {
      return L.H.useLayoutEffect(x, U);
    }),
    (lt.useMemo = function (x, U) {
      return L.H.useMemo(x, U);
    }),
    (lt.useOptimistic = function (x, U) {
      return L.H.useOptimistic(x, U);
    }),
    (lt.useReducer = function (x, U, nt) {
      return L.H.useReducer(x, U, nt);
    }),
    (lt.useRef = function (x) {
      return L.H.useRef(x);
    }),
    (lt.useState = function (x) {
      return L.H.useState(x);
    }),
    (lt.useSyncExternalStore = function (x, U, nt) {
      return L.H.useSyncExternalStore(x, U, nt);
    }),
    (lt.useTransition = function () {
      return L.H.useTransition();
    }),
    (lt.version = "19.0.0"),
    lt
  );
}
var xm;
function ec() {
  return xm || ((xm = 1), (bo.exports = Fv())), bo.exports;
}
var G = ec(),
  So = { exports: {} },
  ol = {},
  To = { exports: {} },
  xo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Am;
function Wv() {
  return (
    Am ||
      ((Am = 1),
      (function (a) {
        function l(q, J) {
          var P = q.length;
          q.push(J);
          t: for (; 0 < P; ) {
            var gt = (P - 1) >>> 1,
              x = q[gt];
            if (0 < c(x, J)) (q[gt] = J), (q[P] = x), (P = gt);
            else break t;
          }
        }
        function u(q) {
          return q.length === 0 ? null : q[0];
        }
        function r(q) {
          if (q.length === 0) return null;
          var J = q[0],
            P = q.pop();
          if (P !== J) {
            q[0] = P;
            t: for (var gt = 0, x = q.length, U = x >>> 1; gt < U; ) {
              var nt = 2 * (gt + 1) - 1,
                $ = q[nt],
                Q = nt + 1,
                ht = q[Q];
              if (0 > c($, P))
                Q < x && 0 > c(ht, $)
                  ? ((q[gt] = ht), (q[Q] = P), (gt = Q))
                  : ((q[gt] = $), (q[nt] = P), (gt = nt));
              else if (Q < x && 0 > c(ht, P))
                (q[gt] = ht), (q[Q] = P), (gt = Q);
              else break t;
            }
          }
          return J;
        }
        function c(q, J) {
          var P = q.sortIndex - J.sortIndex;
          return P !== 0 ? P : q.id - J.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var m = [],
          y = [],
          v = 1,
          S = null,
          T = 3,
          C = !1,
          _ = !1,
          w = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function X(q) {
          for (var J = u(y); J !== null; ) {
            if (J.callback === null) r(y);
            else if (J.startTime <= q)
              r(y), (J.sortIndex = J.expirationTime), l(m, J);
            else break;
            J = u(y);
          }
        }
        function st(q) {
          if (((w = !1), X(q), !_))
            if (u(m) !== null) (_ = !0), be();
            else {
              var J = u(y);
              J !== null && ee(st, J.startTime - q);
            }
        }
        var L = !1,
          F = -1,
          mt = 5,
          I = -1;
        function Z() {
          return !(a.unstable_now() - I < mt);
        }
        function it() {
          if (L) {
            var q = a.unstable_now();
            I = q;
            var J = !0;
            try {
              t: {
                (_ = !1), w && ((w = !1), B(F), (F = -1)), (C = !0);
                var P = T;
                try {
                  e: {
                    for (
                      X(q), S = u(m);
                      S !== null && !(S.expirationTime > q && Z());

                    ) {
                      var gt = S.callback;
                      if (typeof gt == "function") {
                        (S.callback = null), (T = S.priorityLevel);
                        var x = gt(S.expirationTime <= q);
                        if (((q = a.unstable_now()), typeof x == "function")) {
                          (S.callback = x), X(q), (J = !0);
                          break e;
                        }
                        S === u(m) && r(m), X(q);
                      } else r(m);
                      S = u(m);
                    }
                    if (S !== null) J = !0;
                    else {
                      var U = u(y);
                      U !== null && ee(st, U.startTime - q), (J = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (T = P), (C = !1);
                }
                J = void 0;
              }
            } finally {
              J ? Ht() : (L = !1);
            }
          }
        }
        var Ht;
        if (typeof Y == "function")
          Ht = function () {
            Y(it);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            ve = ge.port2;
          (ge.port1.onmessage = it),
            (Ht = function () {
              ve.postMessage(null);
            });
        } else
          Ht = function () {
            H(it, 0);
          };
        function be() {
          L || ((L = !0), Ht());
        }
        function ee(q, J) {
          F = H(function () {
            q(a.unstable_now());
          }, J);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            _ || C || ((_ = !0), be());
          }),
          (a.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (mt = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return u(m);
          }),
          (a.unstable_next = function (q) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = T;
            }
            var P = T;
            T = J;
            try {
              return q();
            } finally {
              T = P;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (q, J) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var P = T;
            T = q;
            try {
              return J();
            } finally {
              T = P;
            }
          }),
          (a.unstable_scheduleCallback = function (q, J, P) {
            var gt = a.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? gt + P : gt))
                : (P = gt),
              q)
            ) {
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
            return (
              (x = P + x),
              (q = {
                id: v++,
                callback: J,
                priorityLevel: q,
                startTime: P,
                expirationTime: x,
                sortIndex: -1,
              }),
              P > gt
                ? ((q.sortIndex = P),
                  l(y, q),
                  u(m) === null &&
                    q === u(y) &&
                    (w ? (B(F), (F = -1)) : (w = !0), ee(st, P - gt)))
                : ((q.sortIndex = x), l(m, q), _ || C || ((_ = !0), be())),
              q
            );
          }),
          (a.unstable_shouldYield = Z),
          (a.unstable_wrapCallback = function (q) {
            var J = T;
            return function () {
              var P = T;
              T = J;
              try {
                return q.apply(this, arguments);
              } finally {
                T = P;
              }
            };
          });
      })(xo)),
    xo
  );
}
var Em;
function $v() {
  return Em || ((Em = 1), (To.exports = Wv())), To.exports;
}
var Ao = { exports: {} },
  $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mm;
function Iv() {
  if (Mm) return $t;
  Mm = 1;
  var a = ec();
  function l(m) {
    var y = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(m, y, v) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: m,
      containerInfo: y,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, y) {
    if (m === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    ($t.createPortal = function (m, y) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(l(299));
      return d(m, y, null, v);
    }),
    ($t.flushSync = function (m) {
      var y = h.T,
        v = r.p;
      try {
        if (((h.T = null), (r.p = 2), m)) return m();
      } finally {
        (h.T = y), (r.p = v), r.d.f();
      }
    }),
    ($t.preconnect = function (m, y) {
      typeof m == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(m, y));
    }),
    ($t.prefetchDNS = function (m) {
      typeof m == "string" && r.d.D(m);
    }),
    ($t.preinit = function (m, y) {
      if (typeof m == "string" && y && typeof y.as == "string") {
        var v = y.as,
          S = p(v, y.crossOrigin),
          T = typeof y.integrity == "string" ? y.integrity : void 0,
          C = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        v === "style"
          ? r.d.S(m, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: C,
            })
          : v === "script" &&
            r.d.X(m, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: C,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (m, y) {
      if (typeof m == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var v = p(y.as, y.crossOrigin);
            r.d.M(m, {
              crossOrigin: v,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(m);
    }),
    ($t.preload = function (m, y) {
      if (
        typeof m == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var v = y.as,
          S = p(v, y.crossOrigin);
        r.d.L(m, v, {
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (m, y) {
      if (typeof m == "string")
        if (y) {
          var v = p(y.as, y.crossOrigin);
          r.d.m(m, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(m);
    }),
    ($t.requestFormReset = function (m) {
      r.d.r(m);
    }),
    ($t.unstable_batchedUpdates = function (m, y) {
      return m(y);
    }),
    ($t.useFormState = function (m, y, v) {
      return h.H.useFormState(m, y, v);
    }),
    ($t.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    ($t.version = "19.0.0"),
    $t
  );
}
var Dm;
function t1() {
  if (Dm) return Ao.exports;
  Dm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Ao.exports = Iv()), Ao.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm;
function e1() {
  if (Rm) return ol;
  Rm = 1;
  var a = $v(),
    l = ec(),
    u = t1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var d = Symbol.for("react.element"),
    h = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    S = Symbol.for("react.provider"),
    T = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    H = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    X = Symbol.for("react.offscreen"),
    st = Symbol.for("react.memo_cache_sentinel"),
    L = Symbol.iterator;
  function F(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (L && t[L]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var mt = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === mt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case p:
        return "Portal";
      case v:
        return "Profiler";
      case y:
        return "StrictMode";
      case w:
        return "Suspense";
      case H:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return (t.displayName || "Context") + ".Provider";
        case T:
          return (t._context.displayName || "Context") + ".Consumer";
        case _:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case B:
          return (
            (e = t.displayName || null), e !== null ? e : I(t.type) || "Memo"
          );
        case Y:
          (e = t._payload), (t = t._init);
          try {
            return I(t(e));
          } catch {}
      }
    return null;
  }
  var Z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = Object.assign,
    Ht,
    ge;
  function ve(t) {
    if (Ht === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Ht = (e && e[1]) || ""),
          (ge =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ht +
      t +
      ge
    );
  }
  var be = !1;
  function ee(t, e) {
    if (!t || be) return "";
    be = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (V) {
                  var O = V;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (V) {
                  O = V;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                O = V;
              }
              (N = t()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
            }
          } catch (V) {
            if (V && O && typeof V.stack == "string") return [V.stack, O.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = i.DetermineComponentFrameRoot(),
        f = o[0],
        g = o[1];
      if (f && g) {
        var b = f.split(`
`),
          E = g.split(`
`);
        for (
          s = i = 0;
          i < b.length && !b[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < E.length && !E[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === b.length || s === E.length)
          for (
            i = b.length - 1, s = E.length - 1;
            1 <= i && 0 <= s && b[i] !== E[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (b[i] !== E[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || b[i] !== E[s])) {
                  var j =
                    `
` + b[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (be = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ve(n) : "";
  }
  function q(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ve(t.type);
      case 16:
        return ve("Lazy");
      case 13:
        return ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 15:
        return (t = ee(t.type, !1)), t;
      case 11:
        return (t = ee(t.type.render, !1)), t;
      case 1:
        return (t = ee(t.type, !0)), t;
      default:
        return "";
    }
  }
  function J(t) {
    try {
      var e = "";
      do (e += q(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function P(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function gt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (P(t) !== t) throw Error(r(188));
  }
  function U(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = P(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return x(s), t;
          if (o === i) return x(s), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) (n = s), (i = o);
      else {
        for (var f = !1, g = s.child; g; ) {
          if (g === n) {
            (f = !0), (n = s), (i = o);
            break;
          }
          if (g === i) {
            (f = !0), (i = s), (n = o);
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = o.child; g; ) {
            if (g === n) {
              (f = !0), (n = o), (i = s);
              break;
            }
            if (g === i) {
              (f = !0), (i = o), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function nt(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = nt(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var $ = Array.isArray,
    Q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ht = { pending: !1, data: null, method: null, action: null },
    ut = [],
    ne = -1;
  function vt(t) {
    return { current: t };
  }
  function wt(t) {
    0 > ne || ((t.current = ut[ne]), (ut[ne] = null), ne--);
  }
  function Mt(t, e) {
    ne++, (ut[ne] = t.current), (t.current = e);
  }
  var He = vt(null),
    fa = vt(null),
    pn = vt(null),
    Ol = vt(null);
  function Cl(t, e) {
    switch ((Mt(pn, e), Mt(fa, t), Mt(He, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Jd(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Jd(t)), (e = Pd(t, e));
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
    wt(He), Mt(He, e);
  }
  function bi() {
    wt(He), wt(fa), wt(pn);
  }
  function ru(t) {
    t.memoizedState !== null && Mt(Ol, t);
    var e = He.current,
      n = Pd(e, t.type);
    e !== n && (Mt(fa, t), Mt(He, n));
  }
  function Vl(t) {
    fa.current === t && (wt(He), wt(fa)),
      Ol.current === t && (wt(Ol), (il._currentValue = ht));
  }
  var ou = Object.prototype.hasOwnProperty,
    cu = a.unstable_scheduleCallback,
    fu = a.unstable_cancelCallback,
    Dp = a.unstable_shouldYield,
    Rp = a.unstable_requestPaint,
    qe = a.unstable_now,
    Op = a.unstable_getCurrentPriorityLevel,
    Uc = a.unstable_ImmediatePriority,
    Bc = a.unstable_UserBlockingPriority,
    jl = a.unstable_NormalPriority,
    Cp = a.unstable_LowPriority,
    Lc = a.unstable_IdlePriority,
    Vp = a.log,
    jp = a.unstable_setDisableYieldValue,
    ha = null,
    oe = null;
  function zp(t) {
    if (oe && typeof oe.onCommitFiberRoot == "function")
      try {
        oe.onCommitFiberRoot(ha, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function gn(t) {
    if (
      (typeof Vp == "function" && jp(t),
      oe && typeof oe.setStrictMode == "function")
    )
      try {
        oe.setStrictMode(ha, t);
      } catch {}
  }
  var ce = Math.clz32 ? Math.clz32 : wp,
    _p = Math.log,
    Np = Math.LN2;
  function wp(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((_p(t) / Np) | 0)) | 0;
  }
  var zl = 128,
    _l = 4194304;
  function Qn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Nl(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      s = t.suspendedLanes,
      o = t.pingedLanes,
      f = t.warmLanes;
    t = t.finishedLanes !== 0;
    var g = n & 134217727;
    return (
      g !== 0
        ? ((n = g & ~s),
          n !== 0
            ? (i = Qn(n))
            : ((o &= g),
              o !== 0
                ? (i = Qn(o))
                : t || ((f = g & ~f), f !== 0 && (i = Qn(f)))))
        : ((g = n & ~s),
          g !== 0
            ? (i = Qn(g))
            : o !== 0
            ? (i = Qn(o))
            : t || ((f = n & ~f), f !== 0 && (i = Qn(f)))),
      i === 0
        ? 0
        : e !== 0 &&
          e !== i &&
          (e & s) === 0 &&
          ((s = i & -i),
          (f = e & -e),
          s >= f || (s === 32 && (f & 4194176) !== 0))
        ? e
        : i
    );
  }
  function da(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Up(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
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
        return e + 5e3;
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
  function Hc() {
    var t = zl;
    return (zl <<= 1), (zl & 4194176) === 0 && (zl = 128), t;
  }
  function qc() {
    var t = _l;
    return (_l <<= 1), (_l & 62914560) === 0 && (_l = 4194304), t;
  }
  function hu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ma(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Bp(t, e, n, i, s, o) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      b = t.expirationTimes,
      E = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var j = 31 - ce(n),
        N = 1 << j;
      (g[j] = 0), (b[j] = -1);
      var O = E[j];
      if (O !== null)
        for (E[j] = null, j = 0; j < O.length; j++) {
          var V = O[j];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~N;
    }
    i !== 0 && Yc(t, i, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function Yc(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - ce(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194218));
  }
  function Gc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - ce(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function Xc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Zc() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : dm(t.type));
  }
  function Lp(t, e) {
    var n = Q.p;
    try {
      return (Q.p = t), e();
    } finally {
      Q.p = n;
    }
  }
  var vn = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + vn,
    se = "__reactProps$" + vn,
    Si = "__reactContainer$" + vn,
    du = "__reactEvents$" + vn,
    Hp = "__reactListeners$" + vn,
    qp = "__reactHandles$" + vn,
    Qc = "__reactResources$" + vn,
    ya = "__reactMarker$" + vn;
  function mu(t) {
    delete t[Ft], delete t[se], delete t[du], delete t[Hp], delete t[qp];
  }
  function Kn(t) {
    var e = t[Ft];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Si] || n[Ft])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = $d(t); t !== null; ) {
            if ((n = t[Ft])) return n;
            t = $d(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ti(t) {
    if ((t = t[Ft] || t[Si])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function pa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function xi(t) {
    var e = t[Qc];
    return (
      e ||
        (e = t[Qc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[ya] = !0;
  }
  var Kc = new Set(),
    kc = {};
  function kn(t, e) {
    Ai(t, e), Ai(t + "Capture", e);
  }
  function Ai(t, e) {
    for (kc[t] = e, t = 0; t < e.length; t++) Kc.add(e[t]);
  }
  var Je = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Yp = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Jc = {},
    Pc = {};
  function Gp(t) {
    return ou.call(Pc, t)
      ? !0
      : ou.call(Jc, t)
      ? !1
      : Yp.test(t)
      ? (Pc[t] = !0)
      : ((Jc[t] = !0), !1);
  }
  function wl(t, e, n) {
    if (Gp(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ul(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Pe(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Fc(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Xp(t) {
    var e = Fc(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (i = "" + f), o.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (f) {
            i = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Bl(t) {
    t._valueTracker || (t._valueTracker = Xp(t));
  }
  function Wc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Fc(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ll(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Zp = /[\n"\\]/g;
  function Te(t) {
    return t.replace(Zp, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function yu(t, e, n, i, s, o, f, g) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Se(e))
          : t.value !== "" + Se(e) && (t.value = "" + Se(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? pu(t, f, Se(e))
        : n != null
        ? pu(t, f, Se(n))
        : i != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + Se(g))
        : t.removeAttribute("name");
  }
  function $c(t, e, n, i, s, o, f, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + Se(n) : ""),
        (e = e != null ? "" + Se(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = g ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function pu(t, e, n) {
    (e === "number" && Ll(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ei(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Se(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ic(t, e, n) {
    if (
      e != null &&
      ((e = "" + Se(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Se(n) : "";
  }
  function tf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if ($(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Se(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function Mi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ef(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Qp.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function nf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && ef(t, s, i);
    } else for (var o in e) e.hasOwnProperty(o) && ef(t, o, e[o]);
  }
  function gu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Kp = new Map([
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
      ["xHeight", "x-height"],
    ]),
    kp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hl(t) {
    return kp.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var vu = null;
  function bu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Di = null,
    Ri = null;
  function af(t) {
    var e = Ti(t);
    if (e && (t = e.stateNode)) {
      var n = t[se] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (yu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Te("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[se] || null;
                if (!s) throw Error(r(90));
                yu(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && Wc(i);
          }
          break t;
        case "textarea":
          Ic(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ei(t, !!n.multiple, e, !1);
      }
    }
  }
  var Su = !1;
  function lf(t, e, n) {
    if (Su) return t(e, n);
    Su = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Su = !1),
        (Di !== null || Ri !== null) &&
          (xs(), Di && ((e = Di), (t = Ri), (Ri = Di = null), af(e), t)))
      )
        for (e = 0; e < t.length; e++) af(t[e]);
    }
  }
  function ga(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[se] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
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
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var Tu = !1;
  if (Je)
    try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function () {
          Tu = !0;
        },
      }),
        window.addEventListener("test", va, va),
        window.removeEventListener("test", va, va);
    } catch {
      Tu = !1;
    }
  var bn = null,
    xu = null,
    ql = null;
  function sf() {
    if (ql) return ql;
    var t,
      e = xu,
      n = e.length,
      i,
      s = "value" in bn ? bn.value : bn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[o - i]; i++);
    return (ql = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Yl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Gl() {
    return !0;
  }
  function uf() {
    return !1;
  }
  function ue(t) {
    function e(n, i, s, o, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = o),
        (this.target = f),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Gl
          : uf),
        (this.isPropagationStopped = uf),
        this
      );
    }
    return (
      it(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Gl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Gl));
        },
        persist: function () {},
        isPersistent: Gl,
      }),
      e
    );
  }
  var Jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xl = ue(Jn),
    ba = it({}, Jn, { view: 0, detail: 0 }),
    Jp = ue(ba),
    Au,
    Eu,
    Sa,
    Zl = it({}, ba, {
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
      getModifierState: Du,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Sa &&
              (Sa && t.type === "mousemove"
                ? ((Au = t.screenX - Sa.screenX), (Eu = t.screenY - Sa.screenY))
                : (Eu = Au = 0),
              (Sa = t)),
            Au);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Eu;
      },
    }),
    rf = ue(Zl),
    Pp = it({}, Zl, { dataTransfer: 0 }),
    Fp = ue(Pp),
    Wp = it({}, ba, { relatedTarget: 0 }),
    Mu = ue(Wp),
    $p = it({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ip = ue($p),
    tg = it({}, Jn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    eg = ue(tg),
    ng = it({}, Jn, { data: 0 }),
    of = ue(ng),
    ig = {
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
      MozPrintableKey: "Unidentified",
    },
    ag = {
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
      224: "Meta",
    },
    lg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = lg[t])
      ? !!e[t]
      : !1;
  }
  function Du() {
    return sg;
  }
  var ug = it({}, ba, {
      key: function (t) {
        if (t.key) {
          var e = ig[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Yl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? ag[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Du,
      charCode: function (t) {
        return t.type === "keypress" ? Yl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Yl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    rg = ue(ug),
    og = it({}, Zl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    cf = ue(og),
    cg = it({}, ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Du,
    }),
    fg = ue(cg),
    hg = it({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dg = ue(hg),
    mg = it({}, Zl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yg = ue(mg),
    pg = it({}, Jn, { newState: 0, oldState: 0 }),
    gg = ue(pg),
    vg = [9, 13, 27, 32],
    Ru = Je && "CompositionEvent" in window,
    Ta = null;
  Je && "documentMode" in document && (Ta = document.documentMode);
  var bg = Je && "TextEvent" in window && !Ta,
    ff = Je && (!Ru || (Ta && 8 < Ta && 11 >= Ta)),
    hf = " ",
    df = !1;
  function mf(t, e) {
    switch (t) {
      case "keyup":
        return vg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Oi = !1;
  function Sg(t, e) {
    switch (t) {
      case "compositionend":
        return yf(e);
      case "keypress":
        return e.which !== 32 ? null : ((df = !0), hf);
      case "textInput":
        return (t = e.data), t === hf && df ? null : t;
      default:
        return null;
    }
  }
  function Tg(t, e) {
    if (Oi)
      return t === "compositionend" || (!Ru && mf(t, e))
        ? ((t = sf()), (ql = xu = bn = null), (Oi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ff && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var xg = {
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
    week: !0,
  };
  function pf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xg[t.type] : e === "textarea";
  }
  function gf(t, e, n, i) {
    Di ? (Ri ? Ri.push(i) : (Ri = [i])) : (Di = i),
      (e = Rs(e, "onChange")),
      0 < e.length &&
        ((n = new Xl("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var xa = null,
    Aa = null;
  function Ag(t) {
    Xd(t, 0);
  }
  function Ql(t) {
    var e = pa(t);
    if (Wc(e)) return t;
  }
  function vf(t, e) {
    if (t === "change") return e;
  }
  var bf = !1;
  if (Je) {
    var Ou;
    if (Je) {
      var Cu = "oninput" in document;
      if (!Cu) {
        var Sf = document.createElement("div");
        Sf.setAttribute("oninput", "return;"),
          (Cu = typeof Sf.oninput == "function");
      }
      Ou = Cu;
    } else Ou = !1;
    bf = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function Tf() {
    xa && (xa.detachEvent("onpropertychange", xf), (Aa = xa = null));
  }
  function xf(t) {
    if (t.propertyName === "value" && Ql(Aa)) {
      var e = [];
      gf(e, Aa, t, bu(t)), lf(Ag, e);
    }
  }
  function Eg(t, e, n) {
    t === "focusin"
      ? (Tf(), (xa = e), (Aa = n), xa.attachEvent("onpropertychange", xf))
      : t === "focusout" && Tf();
  }
  function Mg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ql(Aa);
  }
  function Dg(t, e) {
    if (t === "click") return Ql(e);
  }
  function Rg(t, e) {
    if (t === "input" || t === "change") return Ql(e);
  }
  function Og(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fe = typeof Object.is == "function" ? Object.is : Og;
  function Ea(t, e) {
    if (fe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!ou.call(e, s) || !fe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Af(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ef(t, e) {
    var n = Af(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Af(n);
    }
  }
  function Mf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Mf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Df(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ll(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ll(t.document);
    }
    return e;
  }
  function Vu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function Cg(t, e) {
    var n = Df(e);
    e = t.focusedElem;
    var i = t.selectionRange;
    if (
      n !== e &&
      e &&
      e.ownerDocument &&
      Mf(e.ownerDocument.documentElement, e)
    ) {
      if (i !== null && Vu(e)) {
        if (
          ((t = i.start),
          (n = i.end),
          n === void 0 && (n = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(n, e.value.length));
        else if (
          ((n = ((t = e.ownerDocument || document) && t.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var s = e.textContent.length,
            o = Math.min(i.start, s);
          (i = i.end === void 0 ? o : Math.min(i.end, s)),
            !n.extend && o > i && ((s = i), (i = o), (o = s)),
            (s = Ef(e, o));
          var f = Ef(e, i);
          s &&
            f &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== s.node ||
              n.anchorOffset !== s.offset ||
              n.focusNode !== f.node ||
              n.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            n.removeAllRanges(),
            o > i
              ? (n.addRange(t), n.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; (n = n.parentNode); )
        n.nodeType === 1 &&
          t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (n = t[e]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Vg = Je && "documentMode" in document && 11 >= document.documentMode,
    Ci = null,
    ju = null,
    Ma = null,
    zu = !1;
  function Rf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zu ||
      Ci == null ||
      Ci !== Ll(i) ||
      ((i = Ci),
      "selectionStart" in i && Vu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Ma && Ea(Ma, i)) ||
        ((Ma = i),
        (i = Rs(ju, "onSelect")),
        0 < i.length &&
          ((e = new Xl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ci))));
  }
  function Pn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Vi = {
      animationend: Pn("Animation", "AnimationEnd"),
      animationiteration: Pn("Animation", "AnimationIteration"),
      animationstart: Pn("Animation", "AnimationStart"),
      transitionrun: Pn("Transition", "TransitionRun"),
      transitionstart: Pn("Transition", "TransitionStart"),
      transitioncancel: Pn("Transition", "TransitionCancel"),
      transitionend: Pn("Transition", "TransitionEnd"),
    },
    _u = {},
    Of = {};
  Je &&
    ((Of = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Vi.animationend.animation,
      delete Vi.animationiteration.animation,
      delete Vi.animationstart.animation),
    "TransitionEvent" in window || delete Vi.transitionend.transition);
  function Fn(t) {
    if (_u[t]) return _u[t];
    if (!Vi[t]) return t;
    var e = Vi[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Of) return (_u[t] = e[n]);
    return t;
  }
  var Cf = Fn("animationend"),
    Vf = Fn("animationiteration"),
    jf = Fn("animationstart"),
    jg = Fn("transitionrun"),
    zg = Fn("transitionstart"),
    _g = Fn("transitioncancel"),
    zf = Fn("transitionend"),
    _f = new Map(),
    Nf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Ne(t, e) {
    _f.set(t, e), kn(e, [t]);
  }
  var xe = [],
    ji = 0,
    Nu = 0;
  function Kl() {
    for (var t = ji, e = (Nu = ji = 0); e < t; ) {
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      xe[e++] = null;
      var s = xe[e];
      xe[e++] = null;
      var o = xe[e];
      if (((xe[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s);
      }
      o !== 0 && wf(n, s, o);
    }
  }
  function kl(t, e, n, i) {
    (xe[ji++] = t),
      (xe[ji++] = e),
      (xe[ji++] = n),
      (xe[ji++] = i),
      (Nu |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function wu(t, e, n, i) {
    return kl(t, e, n, i), Jl(t);
  }
  function Sn(t, e) {
    return kl(t, null, null, e), Jl(t);
  }
  function wf(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (i = o.alternate),
        i !== null && (i.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    s &&
      e !== null &&
      t.tag === 3 &&
      ((o = t.stateNode),
      (s = 31 - ce(n)),
      (o = o.hiddenUpdates),
      (t = o[s]),
      t === null ? (o[s] = [e]) : t.push(e),
      (e.lane = n | 536870912));
  }
  function Jl(t) {
    if (50 < Fa) throw ((Fa = 0), (Yr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var zi = {},
    Uf = new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Uf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: J(e) }), Uf.set(t, e), e);
    }
    return { value: t, source: e, stack: J(e) };
  }
  var _i = [],
    Ni = 0,
    Pl = null,
    Fl = 0,
    Ee = [],
    Me = 0,
    Wn = null,
    Fe = 1,
    We = "";
  function $n(t, e) {
    (_i[Ni++] = Fl), (_i[Ni++] = Pl), (Pl = t), (Fl = e);
  }
  function Bf(t, e, n) {
    (Ee[Me++] = Fe), (Ee[Me++] = We), (Ee[Me++] = Wn), (Wn = t);
    var i = Fe;
    t = We;
    var s = 32 - ce(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var o = 32 - ce(e) + s;
    if (30 < o) {
      var f = s - (s % 5);
      (o = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (Fe = (1 << (32 - ce(e) + s)) | (n << s) | i),
        (We = o + t);
    } else (Fe = (1 << o) | (n << s) | i), (We = t);
  }
  function Uu(t) {
    t.return !== null && ($n(t, 1), Bf(t, 1, 0));
  }
  function Bu(t) {
    for (; t === Pl; )
      (Pl = _i[--Ni]), (_i[Ni] = null), (Fl = _i[--Ni]), (_i[Ni] = null);
    for (; t === Wn; )
      (Wn = Ee[--Me]),
        (Ee[Me] = null),
        (We = Ee[--Me]),
        (Ee[Me] = null),
        (Fe = Ee[--Me]),
        (Ee[Me] = null);
  }
  var ie = null,
    Kt = null,
    yt = !1,
    we = null,
    Ye = !1,
    Lu = Error(r(519));
  function In(t) {
    var e = Error(r(418, ""));
    throw (Oa(Ae(e, t)), Lu);
  }
  function Lf(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[Ft] = t), (e[se] = i), n)) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $a.length; n++) ft($a[n], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e),
          $c(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Bl(e);
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), tf(e, i.value, i.defaultValue, i.children), Bl(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      kd(e.textContent, n)
        ? (i.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
          i.onScroll != null && ft("scroll", e),
          i.onScrollEnd != null && ft("scrollend", e),
          i.onClick != null && (e.onclick = Os),
          (e = !0))
        : (e = !1),
      e || In(t);
  }
  function Hf(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 3:
        case 27:
          Ye = !0;
          return;
        case 5:
        case 13:
          Ye = !1;
          return;
        default:
          ie = ie.return;
      }
  }
  function Da(t) {
    if (t !== ie) return !1;
    if (!yt) return Hf(t), (yt = !0), !1;
    var e = !1,
      n;
    if (
      ((n = t.tag !== 3 && t.tag !== 27) &&
        ((n = t.tag === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || ao(t.type, t.memoizedProps))),
        (n = !n)),
      n && (e = !0),
      e && Kt && In(t),
      Hf(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Kt = Be(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Kt = null;
      }
    } else Kt = ie ? Be(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ra() {
    (Kt = ie = null), (yt = !1);
  }
  function Oa(t) {
    we === null ? (we = [t]) : we.push(t);
  }
  var Ca = Error(r(460)),
    qf = Error(r(474)),
    Hu = { then: function () {} };
  function Yf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Wl() {}
  function Gf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Wl, Wl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Ca ? Error(r(483)) : t);
      default:
        if (typeof e.status == "string") e.then(Wl, Wl);
        else {
          if (((t = xt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Ca ? Error(r(483)) : t);
        }
        throw ((Va = e), Ca);
    }
  }
  var Va = null;
  function Xf() {
    if (Va === null) throw Error(r(459));
    var t = Va;
    return (Va = null), t;
  }
  var wi = null,
    ja = 0;
  function $l(t) {
    var e = ja;
    return (ja += 1), wi === null && (wi = []), Gf(wi, t, e);
  }
  function za(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Il(t, e) {
    throw e.$$typeof === d
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Zf(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Qf(t) {
    function e(M, A) {
      if (t) {
        var D = M.deletions;
        D === null ? ((M.deletions = [A]), (M.flags |= 16)) : D.push(A);
      }
    }
    function n(M, A) {
      if (!t) return null;
      for (; A !== null; ) e(M, A), (A = A.sibling);
      return null;
    }
    function i(M) {
      for (var A = new Map(); M !== null; )
        M.key !== null ? A.set(M.key, M) : A.set(M.index, M), (M = M.sibling);
      return A;
    }
    function s(M, A) {
      return (M = zn(M, A)), (M.index = 0), (M.sibling = null), M;
    }
    function o(M, A, D) {
      return (
        (M.index = D),
        t
          ? ((D = M.alternate),
            D !== null
              ? ((D = D.index), D < A ? ((M.flags |= 33554434), A) : D)
              : ((M.flags |= 33554434), A))
          : ((M.flags |= 1048576), A)
      );
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 33554434), M;
    }
    function g(M, A, D, z) {
      return A === null || A.tag !== 6
        ? ((A = _r(D, M.mode, z)), (A.return = M), A)
        : ((A = s(A, D)), (A.return = M), A);
    }
    function b(M, A, D, z) {
      var K = D.type;
      return K === m
        ? j(M, A, D.props.children, z, D.key)
        : A !== null &&
          (A.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === Y &&
              Zf(K) === A.type))
        ? ((A = s(A, D.props)), za(A, D), (A.return = M), A)
        : ((A = gs(D.type, D.key, D.props, null, M.mode, z)),
          za(A, D),
          (A.return = M),
          A);
    }
    function E(M, A, D, z) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== D.containerInfo ||
        A.stateNode.implementation !== D.implementation
        ? ((A = Nr(D, M.mode, z)), (A.return = M), A)
        : ((A = s(A, D.children || [])), (A.return = M), A);
    }
    function j(M, A, D, z, K) {
      return A === null || A.tag !== 7
        ? ((A = oi(D, M.mode, z, K)), (A.return = M), A)
        : ((A = s(A, D)), (A.return = M), A);
    }
    function N(M, A, D) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = _r("" + A, M.mode, D)), (A.return = M), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case h:
            return (
              (D = gs(A.type, A.key, A.props, null, M.mode, D)),
              za(D, A),
              (D.return = M),
              D
            );
          case p:
            return (A = Nr(A, M.mode, D)), (A.return = M), A;
          case Y:
            var z = A._init;
            return (A = z(A._payload)), N(M, A, D);
        }
        if ($(A) || F(A))
          return (A = oi(A, M.mode, D, null)), (A.return = M), A;
        if (typeof A.then == "function") return N(M, $l(A), D);
        if (A.$$typeof === C) return N(M, ms(M, A), D);
        Il(M, A);
      }
      return null;
    }
    function O(M, A, D, z) {
      var K = A !== null ? A.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return K !== null ? null : g(M, A, "" + D, z);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case h:
            return D.key === K ? b(M, A, D, z) : null;
          case p:
            return D.key === K ? E(M, A, D, z) : null;
          case Y:
            return (K = D._init), (D = K(D._payload)), O(M, A, D, z);
        }
        if ($(D) || F(D)) return K !== null ? null : j(M, A, D, z, null);
        if (typeof D.then == "function") return O(M, A, $l(D), z);
        if (D.$$typeof === C) return O(M, A, ms(M, D), z);
        Il(M, D);
      }
      return null;
    }
    function V(M, A, D, z, K) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (M = M.get(D) || null), g(A, M, "" + z, K);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case h:
            return (
              (M = M.get(z.key === null ? D : z.key) || null), b(A, M, z, K)
            );
          case p:
            return (
              (M = M.get(z.key === null ? D : z.key) || null), E(A, M, z, K)
            );
          case Y:
            var ot = z._init;
            return (z = ot(z._payload)), V(M, A, D, z, K);
        }
        if ($(z) || F(z)) return (M = M.get(D) || null), j(A, M, z, K, null);
        if (typeof z.then == "function") return V(M, A, D, $l(z), K);
        if (z.$$typeof === C) return V(M, A, D, ms(A, z), K);
        Il(A, z);
      }
      return null;
    }
    function k(M, A, D, z) {
      for (
        var K = null, ot = null, W = A, tt = (A = 0), Qt = null;
        W !== null && tt < D.length;
        tt++
      ) {
        W.index > tt ? ((Qt = W), (W = null)) : (Qt = W.sibling);
        var pt = O(M, W, D[tt], z);
        if (pt === null) {
          W === null && (W = Qt);
          break;
        }
        t && W && pt.alternate === null && e(M, W),
          (A = o(pt, A, tt)),
          ot === null ? (K = pt) : (ot.sibling = pt),
          (ot = pt),
          (W = Qt);
      }
      if (tt === D.length) return n(M, W), yt && $n(M, tt), K;
      if (W === null) {
        for (; tt < D.length; tt++)
          (W = N(M, D[tt], z)),
            W !== null &&
              ((A = o(W, A, tt)),
              ot === null ? (K = W) : (ot.sibling = W),
              (ot = W));
        return yt && $n(M, tt), K;
      }
      for (W = i(W); tt < D.length; tt++)
        (Qt = V(W, M, tt, D[tt], z)),
          Qt !== null &&
            (t &&
              Qt.alternate !== null &&
              W.delete(Qt.key === null ? tt : Qt.key),
            (A = o(Qt, A, tt)),
            ot === null ? (K = Qt) : (ot.sibling = Qt),
            (ot = Qt));
      return (
        t &&
          W.forEach(function (Hn) {
            return e(M, Hn);
          }),
        yt && $n(M, tt),
        K
      );
    }
    function at(M, A, D, z) {
      if (D == null) throw Error(r(151));
      for (
        var K = null, ot = null, W = A, tt = (A = 0), Qt = null, pt = D.next();
        W !== null && !pt.done;
        tt++, pt = D.next()
      ) {
        W.index > tt ? ((Qt = W), (W = null)) : (Qt = W.sibling);
        var Hn = O(M, W, pt.value, z);
        if (Hn === null) {
          W === null && (W = Qt);
          break;
        }
        t && W && Hn.alternate === null && e(M, W),
          (A = o(Hn, A, tt)),
          ot === null ? (K = Hn) : (ot.sibling = Hn),
          (ot = Hn),
          (W = Qt);
      }
      if (pt.done) return n(M, W), yt && $n(M, tt), K;
      if (W === null) {
        for (; !pt.done; tt++, pt = D.next())
          (pt = N(M, pt.value, z)),
            pt !== null &&
              ((A = o(pt, A, tt)),
              ot === null ? (K = pt) : (ot.sibling = pt),
              (ot = pt));
        return yt && $n(M, tt), K;
      }
      for (W = i(W); !pt.done; tt++, pt = D.next())
        (pt = V(W, M, tt, pt.value, z)),
          pt !== null &&
            (t &&
              pt.alternate !== null &&
              W.delete(pt.key === null ? tt : pt.key),
            (A = o(pt, A, tt)),
            ot === null ? (K = pt) : (ot.sibling = pt),
            (ot = pt));
      return (
        t &&
          W.forEach(function (kv) {
            return e(M, kv);
          }),
        yt && $n(M, tt),
        K
      );
    }
    function jt(M, A, D, z) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === m &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case h:
            t: {
              for (var K = D.key; A !== null; ) {
                if (A.key === K) {
                  if (((K = D.type), K === m)) {
                    if (A.tag === 7) {
                      n(M, A.sibling),
                        (z = s(A, D.props.children)),
                        (z.return = M),
                        (M = z);
                      break t;
                    }
                  } else if (
                    A.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Y &&
                      Zf(K) === A.type)
                  ) {
                    n(M, A.sibling),
                      (z = s(A, D.props)),
                      za(z, D),
                      (z.return = M),
                      (M = z);
                    break t;
                  }
                  n(M, A);
                  break;
                } else e(M, A);
                A = A.sibling;
              }
              D.type === m
                ? ((z = oi(D.props.children, M.mode, z, D.key)),
                  (z.return = M),
                  (M = z))
                : ((z = gs(D.type, D.key, D.props, null, M.mode, z)),
                  za(z, D),
                  (z.return = M),
                  (M = z));
            }
            return f(M);
          case p:
            t: {
              for (K = D.key; A !== null; ) {
                if (A.key === K)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === D.containerInfo &&
                    A.stateNode.implementation === D.implementation
                  ) {
                    n(M, A.sibling),
                      (z = s(A, D.children || [])),
                      (z.return = M),
                      (M = z);
                    break t;
                  } else {
                    n(M, A);
                    break;
                  }
                else e(M, A);
                A = A.sibling;
              }
              (z = Nr(D, M.mode, z)), (z.return = M), (M = z);
            }
            return f(M);
          case Y:
            return (K = D._init), (D = K(D._payload)), jt(M, A, D, z);
        }
        if ($(D)) return k(M, A, D, z);
        if (F(D)) {
          if (((K = F(D)), typeof K != "function")) throw Error(r(150));
          return (D = K.call(D)), at(M, A, D, z);
        }
        if (typeof D.then == "function") return jt(M, A, $l(D), z);
        if (D.$$typeof === C) return jt(M, A, ms(M, D), z);
        Il(M, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          A !== null && A.tag === 6
            ? (n(M, A.sibling), (z = s(A, D)), (z.return = M), (M = z))
            : (n(M, A), (z = _r(D, M.mode, z)), (z.return = M), (M = z)),
          f(M))
        : n(M, A);
    }
    return function (M, A, D, z) {
      try {
        ja = 0;
        var K = jt(M, A, D, z);
        return (wi = null), K;
      } catch (W) {
        if (W === Ca) throw W;
        var ot = Ce(29, W, null, M.mode);
        return (ot.lanes = z), (ot.return = M), ot;
      } finally {
      }
    };
  }
  var ti = Qf(!0),
    Kf = Qf(!1),
    Ui = vt(null),
    ts = vt(0);
  function kf(t, e) {
    (t = on), Mt(ts, t), Mt(Ui, e), (on = t | e.baseLanes);
  }
  function qu() {
    Mt(ts, on), Mt(Ui, Ui.current);
  }
  function Yu() {
    (on = ts.current), wt(Ui), wt(ts);
  }
  var De = vt(null),
    Ge = null;
  function Tn(t) {
    var e = t.alternate;
    Mt(qt, qt.current & 1),
      Mt(De, t),
      Ge === null &&
        (e === null || Ui.current !== null || e.memoizedState !== null) &&
        (Ge = t);
  }
  function Jf(t) {
    if (t.tag === 22) {
      if ((Mt(qt, qt.current), Mt(De, t), Ge === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ge = t);
      }
    } else xn();
  }
  function xn() {
    Mt(qt, qt.current), Mt(De, De.current);
  }
  function $e(t) {
    wt(De), Ge === t && (Ge = null), wt(qt);
  }
  var qt = vt(0);
  function es(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Ng =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    wg = a.unstable_scheduleCallback,
    Ug = a.unstable_NormalPriority,
    Yt = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Gu() {
    return { controller: new Ng(), data: new Map(), refCount: 0 };
  }
  function _a(t) {
    t.refCount--,
      t.refCount === 0 &&
        wg(Ug, function () {
          t.controller.abort();
        });
  }
  var Na = null,
    Xu = 0,
    Bi = 0,
    Li = null;
  function Bg(t, e) {
    if (Na === null) {
      var n = (Na = []);
      (Xu = 0),
        (Bi = Pr()),
        (Li = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return Xu++, e.then(Pf, Pf), e;
  }
  function Pf() {
    if (--Xu === 0 && Na !== null) {
      Li !== null && (Li.status = "fulfilled");
      var t = Na;
      (Na = null), (Bi = 0), (Li = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Lg(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var Ff = Z.S;
  Z.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Bg(t, e),
      Ff !== null && Ff(t, e);
  };
  var ei = vt(null);
  function Zu() {
    var t = ei.current;
    return t !== null ? t : xt.pooledCache;
  }
  function ns(t, e) {
    e === null ? Mt(ei, ei.current) : Mt(ei, e.pool);
  }
  function Wf() {
    var t = Zu();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var An = 0,
    rt = null,
    bt = null,
    Ut = null,
    is = !1,
    Hi = !1,
    ni = !1,
    as = 0,
    wa = 0,
    qi = null,
    Hg = 0;
  function _t() {
    throw Error(r(321));
  }
  function Qu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!fe(t[n], e[n])) return !1;
    return !0;
  }
  function Ku(t, e, n, i, s, o) {
    return (
      (An = o),
      (rt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (Z.H = t === null || t.memoizedState === null ? ii : En),
      (ni = !1),
      (o = n(i, s)),
      (ni = !1),
      Hi && (o = If(e, n, i, s)),
      $f(t),
      o
    );
  }
  function $f(t) {
    Z.H = Xe;
    var e = bt !== null && bt.next !== null;
    if (((An = 0), (Ut = bt = rt = null), (is = !1), (wa = 0), (qi = null), e))
      throw Error(r(300));
    t === null ||
      Xt ||
      ((t = t.dependencies), t !== null && ds(t) && (Xt = !0));
  }
  function If(t, e, n, i) {
    rt = t;
    var s = 0;
    do {
      if ((Hi && (qi = null), (wa = 0), (Hi = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (Ut = bt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (Z.H = ai), (o = e(n, i));
    } while (Hi);
    return o;
  }
  function qg() {
    var t = Z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ua(e) : e),
      (t = t.useState()[0]),
      (bt !== null ? bt.memoizedState : null) !== t && (rt.flags |= 1024),
      e
    );
  }
  function ku() {
    var t = as !== 0;
    return (as = 0), t;
  }
  function Ju(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Pu(t) {
    if (is) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      is = !1;
    }
    (An = 0), (Ut = bt = rt = null), (Hi = !1), (wa = as = 0), (qi = null);
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (rt.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Bt() {
    if (bt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = Ut === null ? rt.memoizedState : Ut.next;
    if (e !== null) (Ut = e), (bt = t);
    else {
      if (t === null)
        throw rt.alternate === null ? Error(r(467)) : Error(r(310));
      (bt = t),
        (t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null,
        }),
        Ut === null ? (rt.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  var ls;
  ls = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ua(t) {
    var e = wa;
    return (
      (wa += 1),
      qi === null && (qi = []),
      (t = Gf(qi, t, e)),
      (e = rt),
      (Ut === null ? e.memoizedState : Ut.next) === null &&
        ((e = e.alternate),
        (Z.H = e === null || e.memoizedState === null ? ii : En)),
      t
    );
  }
  function ss(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ua(t);
      if (t.$$typeof === C) return Wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Fu(t) {
    var e = null,
      n = rt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = rt.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ls()), (rt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = st;
    return e.index++, n;
  }
  function Ie(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function us(t) {
    var e = Bt();
    return Wu(e, bt, t);
  }
  function Wu(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = o.next), (o.next = f);
      }
      (e.baseQueue = s = o), (i.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var g = (f = null),
        b = null,
        E = e,
        j = !1;
      do {
        var N = E.lane & -536870913;
        if (N !== E.lane ? (dt & N) === N : (An & N) === N) {
          var O = E.revertLane;
          if (O === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              N === Bi && (j = !0);
          else if ((An & O) === O) {
            (E = E.next), O === Bi && (j = !0);
            continue;
          } else
            (N = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              b === null ? ((g = b = N), (f = o)) : (b = b.next = N),
              (rt.lanes |= O),
              (_n |= O);
          (N = E.action),
            ni && n(o, N),
            (o = E.hasEagerState ? E.eagerState : n(o, N));
        } else
          (O = {
            lane: N,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            b === null ? ((g = b = O), (f = o)) : (b = b.next = O),
            (rt.lanes |= N),
            (_n |= N);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (b === null ? (f = o) : (b.next = g),
        !fe(o, t.memoizedState) && ((Xt = !0), j && ((n = Li), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = f),
        (t.baseQueue = b),
        (i.lastRenderedState = o);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function $u(t) {
    var e = Bt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (o = t(o, f.action)), (f = f.next);
      while (f !== s);
      fe(o, e.memoizedState) || (Xt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, i];
  }
  function th(t, e, n) {
    var i = rt,
      s = Bt(),
      o = yt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !fe((bt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Xt = !0)),
      (s = s.queue),
      er(ih.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Yi(9, nh.bind(null, i, s, n, e), { destroy: void 0 }, null),
        xt === null)
      )
        throw Error(r(349));
      o || (An & 60) !== 0 || eh(i, e, n);
    }
    return n;
  }
  function eh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = rt.updateQueue),
      e === null
        ? ((e = ls()), (rt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function nh(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), ah(e) && lh(t);
  }
  function ih(t, e, n) {
    return n(function () {
      ah(e) && lh(t);
    });
  }
  function ah(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !fe(t, n);
    } catch {
      return !0;
    }
  }
  function lh(t) {
    var e = Sn(t, 2);
    e !== null && ae(e, t, 2);
  }
  function Iu(t) {
    var e = re();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ni)) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ie,
        lastRenderedState: t,
      }),
      e
    );
  }
  function sh(t, e, n, i) {
    return (t.baseState = n), Wu(t, bt, typeof i == "function" ? i : Ie);
  }
  function Yg(t, e, n, i, s) {
    if (cs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          o.listeners.push(f);
        },
      };
      Z.T !== null ? n(!0) : (o.isTransition = !1),
        i(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), uh(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function uh(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = Z.T,
        f = {};
      Z.T = f;
      try {
        var g = n(s, i),
          b = Z.S;
        b !== null && b(f, g), rh(t, e, g);
      } catch (E) {
        tr(t, e, E);
      } finally {
        Z.T = o;
      }
    } else
      try {
        (o = n(s, i)), rh(t, e, o);
      } catch (E) {
        tr(t, e, E);
      }
  }
  function rh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            oh(t, e, i);
          },
          function (i) {
            return tr(t, e, i);
          }
        )
      : oh(t, e, n);
  }
  function oh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      ch(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), uh(t, n)));
  }
  function tr(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), ch(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function ch(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function fh(t, e) {
    return e;
  }
  function hh(t, e) {
    if (yt) {
      var n = xt.formState;
      if (n !== null) {
        t: {
          var i = rt;
          if (yt) {
            if (Kt) {
              e: {
                for (var s = Kt, o = Ye; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = Be(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Kt = Be(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            In(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = re()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = Vh.bind(null, rt, i)),
      (i.dispatch = n),
      (i = Iu(!1)),
      (o = sr.bind(null, rt, !1, i.queue)),
      (i = re()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Yg.bind(null, rt, s, o, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function dh(t) {
    var e = Bt();
    return mh(e, bt, t);
  }
  function mh(t, e, n) {
    (e = Wu(t, e, fh)[0]),
      (t = us(Ie)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Ua(e)
          : e);
    var i = Bt(),
      s = i.queue,
      o = s.dispatch;
    return (
      n !== i.memoizedState &&
        ((rt.flags |= 2048),
        Yi(9, Gg.bind(null, s, n), { destroy: void 0 }, null)),
      [e, o, t]
    );
  }
  function Gg(t, e) {
    t.action = e;
  }
  function yh(t) {
    var e = Bt(),
      n = bt;
    if (n !== null) return mh(e, n, t);
    Bt(), (e = e.memoizedState), (n = Bt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function Yi(t, e, n, i) {
    return (
      (t = { tag: t, create: e, inst: n, deps: i, next: null }),
      (e = rt.updateQueue),
      e === null && ((e = ls()), (rt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function ph() {
    return Bt().memoizedState;
  }
  function rs(t, e, n, i) {
    var s = re();
    (rt.flags |= t),
      (s.memoizedState = Yi(
        1 | e,
        n,
        { destroy: void 0 },
        i === void 0 ? null : i
      ));
  }
  function os(t, e, n, i) {
    var s = Bt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState.inst;
    bt !== null && i !== null && Qu(i, bt.memoizedState.deps)
      ? (s.memoizedState = Yi(e, n, o, i))
      : ((rt.flags |= t), (s.memoizedState = Yi(1 | e, n, o, i)));
  }
  function gh(t, e) {
    rs(8390656, 8, t, e);
  }
  function er(t, e) {
    os(2048, 8, t, e);
  }
  function vh(t, e) {
    return os(4, 2, t, e);
  }
  function bh(t, e) {
    return os(4, 4, t, e);
  }
  function Sh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Th(t, e, n) {
    (n = n != null ? n.concat([t]) : null), os(4, 4, Sh.bind(null, e, t), n);
  }
  function nr() {}
  function xh(t, e) {
    var n = Bt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Qu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function Ah(t, e) {
    var n = Bt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Qu(e, i[1])) return i[0];
    if (((i = t()), ni)) {
      gn(!0);
      try {
        t();
      } finally {
        gn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function ir(t, e, n) {
    return n === void 0 || (An & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Md()), (rt.lanes |= t), (_n |= t), n);
  }
  function Eh(t, e, n, i) {
    return fe(n, e)
      ? n
      : Ui.current !== null
      ? ((t = ir(t, n, i)), fe(t, e) || (Xt = !0), t)
      : (An & 42) === 0
      ? ((Xt = !0), (t.memoizedState = n))
      : ((t = Md()), (rt.lanes |= t), (_n |= t), e);
  }
  function Mh(t, e, n, i, s) {
    var o = Q.p;
    Q.p = o !== 0 && 8 > o ? o : 8;
    var f = Z.T,
      g = {};
    (Z.T = g), sr(t, !1, e, n);
    try {
      var b = s(),
        E = Z.S;
      if (
        (E !== null && E(g, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var j = Lg(b, i);
        Ba(t, e, j, ye(t));
      } else Ba(t, e, i, ye(t));
    } catch (N) {
      Ba(t, e, { then: function () {}, status: "rejected", reason: N }, ye());
    } finally {
      (Q.p = o), (Z.T = f);
    }
  }
  function Xg() {}
  function ar(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Dh(t).queue;
    Mh(
      t,
      s,
      e,
      ht,
      n === null
        ? Xg
        : function () {
            return Rh(t), n(i);
          }
    );
  }
  function Dh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ht,
      baseState: ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ie,
        lastRenderedState: ht,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ie,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Rh(t) {
    var e = Dh(t).next.queue;
    Ba(t, e, {}, ye());
  }
  function lr() {
    return Wt(il);
  }
  function Oh() {
    return Bt().memoizedState;
  }
  function Ch() {
    return Bt().memoizedState;
  }
  function Zg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ye();
          t = Rn(n);
          var i = On(e, t, n);
          i !== null && (ae(i, e, n), qa(i, e, n)),
            (e = { cache: Gu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Qg(t, e, n) {
    var i = ye();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cs(t)
        ? jh(e, n)
        : ((n = wu(t, e, n, i)), n !== null && (ae(n, t, i), zh(n, e, i)));
  }
  function Vh(t, e, n) {
    var i = ye();
    Ba(t, e, n, i);
  }
  function Ba(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cs(t)) jh(e, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var f = e.lastRenderedState,
            g = o(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), fe(g, f)))
            return kl(t, e, s, 0), xt === null && Kl(), !1;
        } catch {
        } finally {
        }
      if (((n = wu(t, e, s, i)), n !== null))
        return ae(n, t, i), zh(n, e, i), !0;
    }
    return !1;
  }
  function sr(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Pr(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cs(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = wu(t, n, i, 2)), e !== null && ae(e, t, 2);
  }
  function cs(t) {
    var e = t.alternate;
    return t === rt || (e !== null && e === rt);
  }
  function jh(t, e) {
    Hi = is = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function zh(t, e, n) {
    if ((n & 4194176) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Gc(t, n);
    }
  }
  var Xe = {
    readContext: Wt,
    use: ss,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
  };
  (Xe.useCacheRefresh = _t),
    (Xe.useMemoCache = _t),
    (Xe.useHostTransitionStatus = _t),
    (Xe.useFormState = _t),
    (Xe.useActionState = _t),
    (Xe.useOptimistic = _t);
  var ii = {
    readContext: Wt,
    use: ss,
    useCallback: function (t, e) {
      return (re().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Wt,
    useEffect: gh,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        rs(4194308, 4, Sh.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return rs(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      rs(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = re();
      e = e === void 0 ? null : e;
      var i = t();
      if (ni) {
        gn(!0);
        try {
          t();
        } finally {
          gn(!1);
        }
      }
      return (n.memoizedState = [i, e]), i;
    },
    useReducer: function (t, e, n) {
      var i = re();
      if (n !== void 0) {
        var s = n(e);
        if (ni) {
          gn(!0);
          try {
            n(e);
          } finally {
            gn(!1);
          }
        }
      } else s = e;
      return (
        (i.memoizedState = i.baseState = s),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: s,
        }),
        (i.queue = t),
        (t = t.dispatch = Qg.bind(null, rt, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = re();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Iu(t);
      var e = t.queue,
        n = Vh.bind(null, rt, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: nr,
    useDeferredValue: function (t, e) {
      var n = re();
      return ir(n, t, e);
    },
    useTransition: function () {
      var t = Iu(!1);
      return (
        (t = Mh.bind(null, rt, t.queue, !0, !1)),
        (re().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var i = rt,
        s = re();
      if (yt) {
        if (n === void 0) throw Error(r(407));
        n = n();
      } else {
        if (((n = e()), xt === null)) throw Error(r(349));
        (dt & 60) !== 0 || eh(i, e, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (s.queue = o),
        gh(ih.bind(null, i, o, t), [t]),
        (i.flags |= 2048),
        Yi(9, nh.bind(null, i, o, n, e), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var t = re(),
        e = xt.identifierPrefix;
      if (yt) {
        var n = We,
          i = Fe;
        (n = (i & ~(1 << (32 - ce(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = as++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Hg++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (re().memoizedState = Zg.bind(null, rt));
    },
  };
  (ii.useMemoCache = Fu),
    (ii.useHostTransitionStatus = lr),
    (ii.useFormState = hh),
    (ii.useActionState = hh),
    (ii.useOptimistic = function (t) {
      var e = re();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = sr.bind(null, rt, !0, n)), (n.dispatch = e), [t, e]
      );
    });
  var En = {
    readContext: Wt,
    use: ss,
    useCallback: xh,
    useContext: Wt,
    useEffect: er,
    useImperativeHandle: Th,
    useInsertionEffect: vh,
    useLayoutEffect: bh,
    useMemo: Ah,
    useReducer: us,
    useRef: ph,
    useState: function () {
      return us(Ie);
    },
    useDebugValue: nr,
    useDeferredValue: function (t, e) {
      var n = Bt();
      return Eh(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = us(Ie)[0],
        e = Bt().memoizedState;
      return [typeof t == "boolean" ? t : Ua(t), e];
    },
    useSyncExternalStore: th,
    useId: Oh,
  };
  (En.useCacheRefresh = Ch),
    (En.useMemoCache = Fu),
    (En.useHostTransitionStatus = lr),
    (En.useFormState = dh),
    (En.useActionState = dh),
    (En.useOptimistic = function (t, e) {
      var n = Bt();
      return sh(n, bt, t, e);
    });
  var ai = {
    readContext: Wt,
    use: ss,
    useCallback: xh,
    useContext: Wt,
    useEffect: er,
    useImperativeHandle: Th,
    useInsertionEffect: vh,
    useLayoutEffect: bh,
    useMemo: Ah,
    useReducer: $u,
    useRef: ph,
    useState: function () {
      return $u(Ie);
    },
    useDebugValue: nr,
    useDeferredValue: function (t, e) {
      var n = Bt();
      return bt === null ? ir(n, t, e) : Eh(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = $u(Ie)[0],
        e = Bt().memoizedState;
      return [typeof t == "boolean" ? t : Ua(t), e];
    },
    useSyncExternalStore: th,
    useId: Oh,
  };
  (ai.useCacheRefresh = Ch),
    (ai.useMemoCache = Fu),
    (ai.useHostTransitionStatus = lr),
    (ai.useFormState = yh),
    (ai.useActionState = yh),
    (ai.useOptimistic = function (t, e) {
      var n = Bt();
      return bt !== null
        ? sh(n, bt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    });
  function ur(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : it({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var rr = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? P(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = Rn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = On(t, s, i)),
        e !== null && (ae(e, t, i), qa(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = Rn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = On(t, s, i)),
        e !== null && (ae(e, t, i), qa(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ye(),
        i = Rn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = On(t, i, n)),
        e !== null && (ae(e, t, n), qa(e, t, n));
    },
  };
  function _h(t, e, n, i, s, o, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, o, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Ea(n, i) || !Ea(s, o)
        : !0
    );
  }
  function Nh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && rr.enqueueReplaceState(e, e.state, null);
  }
  function li(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = it({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var fs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function wh(t) {
    fs(t);
  }
  function Uh(t) {
    console.error(t);
  }
  function Bh(t) {
    fs(t);
  }
  function hs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Lh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function or(t, e, n) {
    return (
      (n = Rn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        hs(t, e);
      }),
      n
    );
  }
  function Hh(t) {
    return (t = Rn(t)), (t.tag = 3), t;
  }
  function qh(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = i.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          Lh(e, n, i);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Lh(e, n, i),
          typeof s != "function" &&
            (Nn === null ? (Nn = new Set([this])) : Nn.add(this));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Kg(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ha(e, n, s, !0),
        (n = De.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ge === null ? Zr() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === Hu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  Kr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Hu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  Kr(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return Kr(t, i, s), Zr(), !1;
    }
    if (yt)
      return (
        (e = De.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Lu && ((t = Error(r(422), { cause: i })), Oa(Ae(t, n))))
          : (i !== Lu && ((e = Error(r(423), { cause: i })), Oa(Ae(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ae(i, n)),
            (s = or(t.stateNode, i, s)),
            Er(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var o = Error(r(520), { cause: i });
    if (
      ((o = Ae(o, n)),
      Ja === null ? (Ja = [o]) : Ja.push(o),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    (i = Ae(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = or(n.stateNode, i, t)),
            Er(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Nn === null || !Nn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Hh(s)),
              qh(s, t, n, i),
              Er(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Yh = Error(r(461)),
    Xt = !1;
  function kt(t, e, n, i) {
    e.child = t === null ? Kf(e, null, n, i) : ti(e, t.child, n, i);
  }
  function Gh(t, e, n, i, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var g in i) g !== "ref" && (f[g] = i[g]);
    } else f = i;
    return (
      ui(e),
      (i = Ku(t, e, n, f, o, s)),
      (g = ku()),
      t !== null && !Xt
        ? (Ju(t, e, s), tn(t, e, s))
        : (yt && g && Uu(e), (e.flags |= 1), kt(t, e, i, s), e.child)
    );
  }
  function Xh(t, e, n, i, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !zr(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Zh(t, e, o, i, s))
        : ((t = gs(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !vr(t, s))) {
      var f = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ea), n(f, i) && t.ref === e.ref)
      )
        return tn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = zn(o, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zh(t, e, n, i, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Ea(o, i) && t.ref === e.ref)
        if (((Xt = !1), (e.pendingProps = i = o), vr(t, s)))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else return (e.lanes = t.lanes), tn(t, e, s);
    }
    return cr(t, e, n, i, s);
  }
  function Qh(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      o = (e.stateNode._pendingVisibility & 2) !== 0,
      f = t !== null ? t.memoizedState : null;
    if ((La(t, e), i.mode === "hidden" || o)) {
      if ((e.flags & 128) !== 0) {
        if (((i = f !== null ? f.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, o = 0; s !== null; )
            (o = o | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = o & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return Kh(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ns(e, f !== null ? f.cachePool : null),
          f !== null ? kf(e, f) : qu(),
          Jf(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Kh(t, e, f !== null ? f.baseLanes | n : n, n)
        );
    } else
      f !== null
        ? (ns(e, f.cachePool), kf(e, f), xn(), (e.memoizedState = null))
        : (t !== null && ns(e, null), qu(), xn());
    return kt(t, e, s, n), e.child;
  }
  function Kh(t, e, n, i) {
    var s = Zu();
    return (
      (s = s === null ? null : { parent: Yt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && ns(e, null),
      qu(),
      Jf(e),
      t !== null && Ha(t, e, i, !0),
      null
    );
  }
  function La(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function cr(t, e, n, i, s) {
    return (
      ui(e),
      (n = Ku(t, e, n, i, void 0, s)),
      (i = ku()),
      t !== null && !Xt
        ? (Ju(t, e, s), tn(t, e, s))
        : (yt && i && Uu(e), (e.flags |= 1), kt(t, e, n, s), e.child)
    );
  }
  function kh(t, e, n, i, s, o) {
    return (
      ui(e),
      (e.updateQueue = null),
      (n = If(e, i, n, s)),
      $f(t),
      (i = ku()),
      t !== null && !Xt
        ? (Ju(t, e, o), tn(t, e, o))
        : (yt && i && Uu(e), (e.flags |= 1), kt(t, e, n, o), e.child)
    );
  }
  function Jh(t, e, n, i, s) {
    if ((ui(e), e.stateNode === null)) {
      var o = zi,
        f = n.contextType;
      typeof f == "object" && f !== null && (o = Wt(f)),
        (o = new n(i, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = rr),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = i),
        (o.state = e.memoizedState),
        (o.refs = {}),
        xr(e),
        (f = n.contextType),
        (o.context = typeof f == "object" && f !== null ? Wt(f) : zi),
        (o.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (ur(e, n, f, i), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((f = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          f !== o.state && rr.enqueueReplaceState(o, o.state, null),
          Ga(e, i, o, s),
          Ya(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps,
        b = li(n, g);
      o.props = b;
      var E = o.context,
        j = n.contextType;
      (f = zi), typeof j == "object" && j !== null && (f = Wt(j));
      var N = n.getDerivedStateFromProps;
      (j =
        typeof N == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        j ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || E !== f) && Nh(e, o, i, f)),
        (Dn = !1);
      var O = e.memoizedState;
      (o.state = O),
        Ga(e, i, o, s),
        Ya(),
        (E = e.memoizedState),
        g || O !== E || Dn
          ? (typeof N == "function" && (ur(e, n, N, i), (E = e.memoizedState)),
            (b = Dn || _h(e, n, b, i, O, E, f))
              ? (j ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = E)),
            (o.props = i),
            (o.state = E),
            (o.context = f),
            (i = b))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (o = e.stateNode),
        Ar(t, e),
        (f = e.memoizedProps),
        (j = li(n, f)),
        (o.props = j),
        (N = e.pendingProps),
        (O = o.context),
        (E = n.contextType),
        (b = zi),
        typeof E == "object" && E !== null && (b = Wt(E)),
        (g = n.getDerivedStateFromProps),
        (E =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((f !== N || O !== b) && Nh(e, o, i, b)),
        (Dn = !1),
        (O = e.memoizedState),
        (o.state = O),
        Ga(e, i, o, s),
        Ya();
      var V = e.memoizedState;
      f !== N ||
      O !== V ||
      Dn ||
      (t !== null && t.dependencies !== null && ds(t.dependencies))
        ? (typeof g == "function" && (ur(e, n, g, i), (V = e.memoizedState)),
          (j =
            Dn ||
            _h(e, n, j, i, O, V, b) ||
            (t !== null && t.dependencies !== null && ds(t.dependencies)))
            ? (E ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(i, V, b),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(i, V, b)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (f === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = V)),
          (o.props = i),
          (o.state = V),
          (o.context = b),
          (i = j))
        : (typeof o.componentDidUpdate != "function" ||
            (f === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (o = i),
      La(t, e),
      (i = (e.flags & 128) !== 0),
      o || i
        ? ((o = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = ti(e, t.child, null, s)),
              (e.child = ti(e, null, n, s)))
            : kt(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = tn(t, e, s)),
      t
    );
  }
  function Ph(t, e, n, i) {
    return Ra(), (e.flags |= 256), kt(t, e, n, i), e.child;
  }
  var fr = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hr(t) {
    return { baseLanes: t, cachePool: Wf() };
  }
  function dr(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ve), t;
  }
  function Fh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      f;
    if (
      ((f = o) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (yt) {
        if ((s ? Tn(e) : xn(), yt)) {
          var g = Kt,
            b;
          if ((b = g)) {
            t: {
              for (b = g, g = Ye; b.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break t;
                }
                if (((b = Be(b.nextSibling)), b === null)) {
                  g = null;
                  break t;
                }
              }
              g = b;
            }
            g !== null
              ? ((e.memoizedState = {
                  dehydrated: g,
                  treeContext: Wn !== null ? { id: Fe, overflow: We } : null,
                  retryLane: 536870912,
                }),
                (b = Ce(18, null, null, 0)),
                (b.stateNode = g),
                (b.return = e),
                (e.child = b),
                (ie = e),
                (Kt = null),
                (b = !0))
              : (b = !1);
          }
          b || In(e);
        }
        if (
          ((g = e.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return g.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        $e(e);
      }
      return (
        (g = i.children),
        (i = i.fallback),
        s
          ? (xn(),
            (s = e.mode),
            (g = yr({ mode: "hidden", children: g }, s)),
            (i = oi(i, s, n, null)),
            (g.return = e),
            (i.return = e),
            (g.sibling = i),
            (e.child = g),
            (s = e.child),
            (s.memoizedState = hr(n)),
            (s.childLanes = dr(t, f, n)),
            (e.memoizedState = fr),
            i)
          : (Tn(e), mr(e, g))
      );
    }
    if (
      ((b = t.memoizedState), b !== null && ((g = b.dehydrated), g !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Tn(e), (e.flags &= -257), (e = pr(t, e, n)))
          : e.memoizedState !== null
          ? (xn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (xn(),
            (s = i.fallback),
            (g = e.mode),
            (i = yr({ mode: "visible", children: i.children }, g)),
            (s = oi(s, g, n, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            ti(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = hr(n)),
            (i.childLanes = dr(t, f, n)),
            (e.memoizedState = fr),
            (e = s));
      else if ((Tn(e), g.data === "$!")) {
        if (((f = g.nextSibling && g.nextSibling.dataset), f)) var E = f.dgst;
        (f = E),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = f),
          Oa({ value: i, source: null, stack: null }),
          (e = pr(t, e, n));
      } else if (
        (Xt || Ha(t, e, n, !1), (f = (n & t.childLanes) !== 0), Xt || f)
      ) {
        if (((f = xt), f !== null)) {
          if (((i = n & -n), (i & 42) !== 0)) i = 1;
          else
            switch (i) {
              case 2:
                i = 1;
                break;
              case 8:
                i = 4;
                break;
              case 32:
                i = 16;
                break;
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
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                i = 64;
                break;
              case 268435456:
                i = 134217728;
                break;
              default:
                i = 0;
            }
          if (
            ((i = (i & (f.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== b.retryLane)
          )
            throw ((b.retryLane = i), Sn(t, i), ae(f, t, i), Yh);
        }
        g.data === "$?" || Zr(), (e = pr(t, e, n));
      } else
        g.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = uv.bind(null, t)),
            (g._reactRetry = e),
            (e = null))
          : ((t = b.treeContext),
            (Kt = Be(g.nextSibling)),
            (ie = e),
            (yt = !0),
            (we = null),
            (Ye = !1),
            t !== null &&
              ((Ee[Me++] = Fe),
              (Ee[Me++] = We),
              (Ee[Me++] = Wn),
              (Fe = t.id),
              (We = t.overflow),
              (Wn = e)),
            (e = mr(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (xn(),
        (s = i.fallback),
        (g = e.mode),
        (b = t.child),
        (E = b.sibling),
        (i = zn(b, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = b.subtreeFlags & 31457280),
        E !== null ? (s = zn(E, s)) : ((s = oi(s, g, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = hr(n))
          : ((b = g.cachePool),
            b !== null
              ? ((E = Yt._currentValue),
                (b = b.parent !== E ? { parent: E, pool: E } : b))
              : (b = Wf()),
            (g = { baseLanes: g.baseLanes | n, cachePool: b })),
        (s.memoizedState = g),
        (s.childLanes = dr(t, f, n)),
        (e.memoizedState = fr),
        i)
      : (Tn(e),
        (n = t.child),
        (t = n.sibling),
        (n = zn(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function mr(t, e) {
    return (
      (e = yr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function yr(t, e) {
    return xd(t, e, 0, null);
  }
  function pr(t, e, n) {
    return (
      ti(e, t.child, null, n),
      (t = mr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Wh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Sr(t.return, e, n);
  }
  function gr(t, e, n, i, s) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = i),
        (o.tail = n),
        (o.tailMode = s));
  }
  function $h(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      o = i.tail;
    if ((kt(t, e, i.children, n), (i = qt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Wh(t, n, e);
          else if (t.tag === 19) Wh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((Mt(qt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && es(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          gr(e, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && es(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        gr(e, !0, n, null, o);
        break;
      case "together":
        gr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ha(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = zn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = zn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function vr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ds(t)));
  }
  function kg(t, e, n) {
    switch (e.tag) {
      case 3:
        Cl(e, e.stateNode.containerInfo),
          Mn(e, Yt, t.memoizedState.cache),
          Ra();
        break;
      case 27:
      case 5:
        ru(e);
        break;
      case 4:
        Cl(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Tn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Fh(t, e, n)
            : (Tn(e), (t = tn(t, e, n)), t !== null ? t.sibling : null);
        Tn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Ha(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return $h(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Mt(qt, qt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Qh(t, e, n);
      case 24:
        Mn(e, Yt, t.memoizedState.cache);
    }
    return tn(t, e, n);
  }
  function Ih(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Xt = !0;
      else {
        if (!vr(t, n) && (e.flags & 128) === 0) return (Xt = !1), kg(t, e, n);
        Xt = (t.flags & 131072) !== 0;
      }
    else (Xt = !1), yt && (e.flags & 1048576) !== 0 && Bf(e, Fl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            zr(i)
              ? ((t = li(i, t)), (e.tag = 1), (e = Jh(null, e, i, t, n)))
              : ((e.tag = 0), (e = cr(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === _)) {
                (e.tag = 11), (e = Gh(null, e, i, t, n));
                break t;
              } else if (s === B) {
                (e.tag = 14), (e = Xh(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = I(i) || i), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return cr(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = li(i, e.pendingProps)), Jh(t, e, i, s, n);
      case 3:
        t: {
          if ((Cl(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          var o = e.pendingProps;
          (s = e.memoizedState), (i = s.element), Ar(t, e), Ga(e, o, null, n);
          var f = e.memoizedState;
          if (
            ((o = f.cache),
            Mn(e, Yt, o),
            o !== s.cache && Tr(e, [Yt], n, !0),
            Ya(),
            (o = f.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: o, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = Ph(t, e, o, n);
              break t;
            } else if (o !== i) {
              (i = Ae(Error(r(424)), e)), Oa(i), (e = Ph(t, e, o, n));
              break t;
            } else
              for (
                Kt = Be(e.stateNode.containerInfo.firstChild),
                  ie = e,
                  yt = !0,
                  we = null,
                  Ye = !0,
                  n = Kf(e, null, o, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Ra(), o === i)) {
              e = tn(t, e, n);
              break t;
            }
            kt(t, e, o, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          La(t, e),
          t === null
            ? (n = nm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : yt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Cs(pn.current).createElement(n)),
                (i[Ft] = e),
                (i[se] = t),
                Jt(i, n, t),
                Gt(i),
                (e.stateNode = i))
            : (e.memoizedState = nm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ru(e),
          t === null &&
            yt &&
            ((i = e.stateNode = Id(e.type, e.pendingProps, pn.current)),
            (ie = e),
            (Ye = !0),
            (Kt = Be(i.firstChild))),
          (i = e.pendingProps.children),
          t !== null || yt ? kt(t, e, i, n) : (e.child = ti(e, null, i, n)),
          La(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            yt &&
            ((s = i = Kt) &&
              ((i = Av(i, e.type, e.pendingProps, Ye)),
              i !== null
                ? ((e.stateNode = i),
                  (ie = e),
                  (Kt = Be(i.firstChild)),
                  (Ye = !1),
                  (s = !0))
                : (s = !1)),
            s || In(e)),
          ru(e),
          (s = e.type),
          (o = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = o.children),
          ao(s, o) ? (i = null) : f !== null && ao(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = Ku(t, e, qg, null, null, n)), (il._currentValue = s)),
          La(t, e),
          kt(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            yt &&
            ((t = n = Kt) &&
              ((n = Ev(n, e.pendingProps, Ye)),
              n !== null
                ? ((e.stateNode = n), (ie = e), (Kt = null), (t = !0))
                : (t = !1)),
            t || In(e)),
          null
        );
      case 13:
        return Fh(t, e, n);
      case 4:
        return (
          Cl(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = ti(e, null, i, n)) : kt(t, e, i, n),
          e.child
        );
      case 11:
        return Gh(t, e, e.type, e.pendingProps, n);
      case 7:
        return kt(t, e, e.pendingProps, n), e.child;
      case 8:
        return kt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return kt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          Mn(e, e.type, i.value),
          kt(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ui(e),
          (s = Wt(s)),
          (i = i(s)),
          (e.flags |= 1),
          kt(t, e, i, n),
          e.child
        );
      case 14:
        return Xh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Zh(t, e, e.type, e.pendingProps, n);
      case 19:
        return $h(t, e, n);
      case 22:
        return Qh(t, e, n);
      case 24:
        return (
          ui(e),
          (i = Wt(Yt)),
          t === null
            ? ((s = Zu()),
              s === null &&
                ((s = xt),
                (o = Gu()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: i, cache: s }),
              xr(e),
              Mn(e, Yt, s))
            : ((t.lanes & n) !== 0 && (Ar(t, e), Ga(e, null, null, n), Ya()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Mn(e, Yt, i))
                : ((i = o.cache),
                  Mn(e, Yt, i),
                  i !== s.cache && Tr(e, [Yt], n, !0))),
          kt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  var br = vt(null),
    si = null,
    en = null;
  function Mn(t, e, n) {
    Mt(br, e._currentValue), (e._currentValue = n);
  }
  function nn(t) {
    (t._currentValue = br.current), wt(br);
  }
  function Sr(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Tr(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = s;
          for (var b = 0; b < e.length; b++)
            if (g.context === e[b]) {
              (o.lanes |= n),
                (g = o.alternate),
                g !== null && (g.lanes |= n),
                Sr(o.return, n, t),
                i || (f = null);
              break t;
            }
          o = g.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (o = f.alternate),
          o !== null && (o.lanes |= n),
          Sr(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ha(t, e, n, i) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = s.type;
          fe(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (s === Ol.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(il) : (t = [il]));
      }
      s = s.return;
    }
    t !== null && Tr(e, t, n, i), (e.flags |= 262144);
  }
  function ds(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ui(t) {
    (si = t),
      (en = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return td(si, t);
  }
  function ms(t, e) {
    return si === null && ui(t), td(t, e);
  }
  function td(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), en === null)) {
      if (t === null) throw Error(r(308));
      (en = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else en = en.next = e;
    return n;
  }
  var Dn = !1;
  function xr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ar(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Rn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function On(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Rt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Jl(t)),
        wf(t, null, n),
        e
      );
    }
    return kl(t, i, e, n), Jl(t);
  }
  function qa(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194176) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Gc(t, n);
    }
  }
  function Er(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = f) : (o = o.next = f), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Mr = !1;
  function Ya() {
    if (Mr) {
      var t = Li;
      if (t !== null) throw t;
    }
  }
  function Ga(t, e, n, i) {
    Mr = !1;
    var s = t.updateQueue;
    Dn = !1;
    var o = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var b = g,
        E = b.next;
      (b.next = null), f === null ? (o = E) : (f.next = E), (f = b);
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (g = j.lastBaseUpdate),
        g !== f &&
          (g === null ? (j.firstBaseUpdate = E) : (g.next = E),
          (j.lastBaseUpdate = b)));
    }
    if (o !== null) {
      var N = s.baseState;
      (f = 0), (j = E = b = null), (g = o);
      do {
        var O = g.lane & -536870913,
          V = O !== g.lane;
        if (V ? (dt & O) === O : (i & O) === O) {
          O !== 0 && O === Bi && (Mr = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var k = t,
              at = g;
            O = e;
            var jt = n;
            switch (at.tag) {
              case 1:
                if (((k = at.payload), typeof k == "function")) {
                  N = k.call(jt, N, O);
                  break t;
                }
                N = k;
                break t;
              case 3:
                k.flags = (k.flags & -65537) | 128;
              case 0:
                if (
                  ((k = at.payload),
                  (O = typeof k == "function" ? k.call(jt, N, O) : k),
                  O == null)
                )
                  break t;
                N = it({}, N, O);
                break t;
              case 2:
                Dn = !0;
            }
          }
          (O = g.callback),
            O !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = s.callbacks),
              V === null ? (s.callbacks = [O]) : V.push(O));
        } else
          (V = {
            lane: O,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            j === null ? ((E = j = V), (b = N)) : (j = j.next = V),
            (f |= O);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (V = g),
            (g = V.next),
            (V.next = null),
            (s.lastBaseUpdate = V),
            (s.shared.pending = null);
        }
      } while (!0);
      j === null && (b = N),
        (s.baseState = b),
        (s.firstBaseUpdate = E),
        (s.lastBaseUpdate = j),
        o === null && (s.shared.lanes = 0),
        (_n |= f),
        (t.lanes = f),
        (t.memoizedState = N);
    }
  }
  function ed(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function nd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) ed(n[t], e);
  }
  function Xa(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var o = n.create,
              f = n.inst;
            (i = o()), (f.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Tt(e, e.return, g);
    }
  }
  function Cn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        i = o;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              g = f.destroy;
            if (g !== void 0) {
              (f.destroy = void 0), (s = e);
              var b = n;
              try {
                g();
              } catch (E) {
                Tt(s, b, E);
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (E) {
      Tt(e, e.return, E);
    }
  }
  function id(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        nd(e, n);
      } catch (i) {
        Tt(t, t.return, i);
      }
    }
  }
  function ad(t, e, n) {
    (n.props = li(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Tt(t, e, i);
    }
  }
  function ri(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var i = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = i;
            break;
          default:
            s = i;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (o) {
      Tt(t, e, o);
    }
  }
  function he(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Tt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Tt(t, e, s);
        }
      else n.current = null;
  }
  function ld(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function sd(t, e, n) {
    try {
      var i = t.stateNode;
      vv(i, t.type, n, e), (i[se] = e);
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function ud(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Dr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ud(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Rr(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Os));
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (Rr(t, e, n), t = t.sibling; t !== null; )
        Rr(t, e, n), (t = t.sibling);
  }
  function ys(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (ys(t, e, n), t = t.sibling; t !== null; )
        ys(t, e, n), (t = t.sibling);
  }
  var an = !1,
    Ct = !1,
    Or = !1,
    rd = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null,
    od = !1;
  function Jg(t, e) {
    if (((t = t.containerInfo), (no = ws), (t = Df(t)), Vu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              g = -1,
              b = -1,
              E = 0,
              j = 0,
              N = t,
              O = null;
            e: for (;;) {
              for (
                var V;
                N !== n || (s !== 0 && N.nodeType !== 3) || (g = f + s),
                  N !== o || (i !== 0 && N.nodeType !== 3) || (b = f + i),
                  N.nodeType === 3 && (f += N.nodeValue.length),
                  (V = N.firstChild) !== null;

              )
                (O = N), (N = V);
              for (;;) {
                if (N === t) break e;
                if (
                  (O === n && ++E === s && (g = f),
                  O === o && ++j === i && (b = f),
                  (V = N.nextSibling) !== null)
                )
                  break;
                (N = O), (O = N.parentNode);
              }
              N = V;
            }
            n = g === -1 || b === -1 ? null : { start: g, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      io = { focusedElem: t, selectionRange: n }, ws = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (i = n.stateNode);
                try {
                  var k = li(n.type, s, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(k, o)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  Tt(n, n.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  uo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uo(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
    return (k = od), (od = !1), k;
  }
  function cd(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        sn(t, n), i & 4 && Xa(5, n);
        break;
      case 1:
        if ((sn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (g) {
              Tt(n, n.return, g);
            }
          else {
            var s = li(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Tt(n, n.return, g);
            }
          }
        i & 64 && id(n), i & 512 && ri(n, n.return);
        break;
      case 3:
        if ((sn(t, n), i & 64 && ((i = n.updateQueue), i !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            nd(i, t);
          } catch (g) {
            Tt(n, n.return, g);
          }
        }
        break;
      case 26:
        sn(t, n), i & 512 && ri(n, n.return);
        break;
      case 27:
      case 5:
        sn(t, n), e === null && i & 4 && ld(n), i & 512 && ri(n, n.return);
        break;
      case 12:
        sn(t, n);
        break;
      case 13:
        sn(t, n), i & 4 && dd(t, n);
        break;
      case 22:
        if (((s = n.memoizedState !== null || an), !s)) {
          e = (e !== null && e.memoizedState !== null) || Ct;
          var o = an,
            f = Ct;
          (an = s),
            (Ct = e) && !f ? Vn(t, n, (n.subtreeFlags & 8772) !== 0) : sn(t, n),
            (an = o),
            (Ct = f);
        }
        i & 512 &&
          (n.memoizedProps.mode === "manual"
            ? ri(n, n.return)
            : he(n, n.return));
        break;
      default:
        sn(t, n);
    }
  }
  function fd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), fd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && mu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Lt = null,
    de = !1;
  function ln(t, e, n) {
    for (n = n.child; n !== null; ) hd(t, e, n), (n = n.sibling);
  }
  function hd(t, e, n) {
    if (oe && typeof oe.onCommitFiberUnmount == "function")
      try {
        oe.onCommitFiberUnmount(ha, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ct || he(n, e),
          ln(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ct || he(n, e);
        var i = Lt,
          s = de;
        for (
          Lt = n.stateNode, ln(t, e, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        mu(n), (Lt = i), (de = s);
        break;
      case 5:
        Ct || he(n, e);
      case 6:
        s = Lt;
        var o = de;
        if (((Lt = null), ln(t, e, n), (Lt = s), (de = o), Lt !== null))
          if (de)
            try {
              (t = Lt),
                (i = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(i)
                  : t.removeChild(i);
            } catch (f) {
              Tt(n, e, f);
            }
          else
            try {
              Lt.removeChild(n.stateNode);
            } catch (f) {
              Tt(n, e, f);
            }
        break;
      case 18:
        Lt !== null &&
          (de
            ? ((e = Lt),
              (n = n.stateNode),
              e.nodeType === 8
                ? so(e.parentNode, n)
                : e.nodeType === 1 && so(e, n),
              ul(e))
            : so(Lt, n.stateNode));
        break;
      case 4:
        (i = Lt),
          (s = de),
          (Lt = n.stateNode.containerInfo),
          (de = !0),
          ln(t, e, n),
          (Lt = i),
          (de = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ct || Cn(2, n, e), Ct || Cn(4, n, e), ln(t, e, n);
        break;
      case 1:
        Ct ||
          (he(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && ad(n, e, i)),
          ln(t, e, n);
        break;
      case 21:
        ln(t, e, n);
        break;
      case 22:
        Ct || he(n, e),
          (Ct = (i = Ct) || n.memoizedState !== null),
          ln(t, e, n),
          (Ct = i);
        break;
      default:
        ln(t, e, n);
    }
  }
  function dd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ul(t);
      } catch (n) {
        Tt(e, e.return, n);
      }
  }
  function Pg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new rd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new rd()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Cr(t, e) {
    var n = Pg(t);
    e.forEach(function (i) {
      var s = rv.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function Re(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          o = t,
          f = e,
          g = f;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
            case 5:
              (Lt = g.stateNode), (de = !1);
              break t;
            case 3:
              (Lt = g.stateNode.containerInfo), (de = !0);
              break t;
            case 4:
              (Lt = g.stateNode.containerInfo), (de = !0);
              break t;
          }
          g = g.return;
        }
        if (Lt === null) throw Error(r(160));
        hd(o, f, s),
          (Lt = null),
          (de = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) md(e, t), (e = e.sibling);
  }
  var Ue = null;
  function md(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Re(e, t),
          Oe(t),
          i & 4 && (Cn(3, t, t.return), Xa(3, t), Cn(5, t, t.return));
        break;
      case 1:
        Re(e, t),
          Oe(t),
          i & 512 && (Ct || n === null || he(n, n.return)),
          i & 64 &&
            an &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = Ue;
        if (
          (Re(e, t),
          Oe(t),
          i & 512 && (Ct || n === null || he(n, n.return)),
          i & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[ya] ||
                          o[Ft] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(i)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        Jt(o, i, n),
                        (o[Ft] = t),
                        Gt(o),
                        (i = o);
                      break t;
                    case "link":
                      var f = lm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (
                            ((o = f[g]),
                            o.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        Jt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (f = lm("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < f.length; g++)
                          if (
                            ((o = f[g]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        Jt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (o[Ft] = t), Gt(o), (i = o);
                }
                t.stateNode = i;
              } else sm(s, t.type, t.stateNode);
            else t.stateNode = am(s, i, t.memoizedProps);
          else
            o !== i
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                i === null
                  ? sm(s, t.type, t.stateNode)
                  : am(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                sd(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (i & 4 && t.alternate === null) {
          (s = t.stateNode), (o = t.memoizedProps);
          try {
            for (var b = s.firstChild; b; ) {
              var E = b.nextSibling,
                j = b.nodeName;
              b[ya] ||
                j === "HEAD" ||
                j === "BODY" ||
                j === "SCRIPT" ||
                j === "STYLE" ||
                (j === "LINK" && b.rel.toLowerCase() === "stylesheet") ||
                s.removeChild(b),
                (b = E);
            }
            for (var N = t.type, O = s.attributes; O.length; )
              s.removeAttributeNode(O[0]);
            Jt(s, N, o), (s[Ft] = t), (s[se] = o);
          } catch (k) {
            Tt(t, t.return, k);
          }
        }
      case 5:
        if (
          (Re(e, t),
          Oe(t),
          i & 512 && (Ct || n === null || he(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Mi(s, "");
          } catch (k) {
            Tt(t, t.return, k);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), sd(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Or = !0);
        break;
      case 6:
        if ((Re(e, t), Oe(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (k) {
            Tt(t, t.return, k);
          }
        }
        break;
      case 3:
        if (
          ((zs = null),
          (s = Ue),
          (Ue = Vs(e.containerInfo)),
          Re(e, t),
          (Ue = s),
          Oe(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ul(e.containerInfo);
          } catch (k) {
            Tt(t, t.return, k);
          }
        Or && ((Or = !1), yd(t));
        break;
      case 4:
        (i = Ue),
          (Ue = Vs(t.stateNode.containerInfo)),
          Re(e, t),
          Oe(t),
          (Ue = i);
        break;
      case 12:
        Re(e, t), Oe(t);
        break;
      case 13:
        Re(e, t),
          Oe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Lr = qe()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Cr(t, i)));
        break;
      case 22:
        if (
          (i & 512 && (Ct || n === null || he(n, n.return)),
          (b = t.memoizedState !== null),
          (E = n !== null && n.memoizedState !== null),
          (j = an),
          (N = Ct),
          (an = j || b),
          (Ct = N || E),
          Re(e, t),
          (Ct = N),
          (an = j),
          Oe(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          i & 8192 &&
            ((e._visibility = b ? e._visibility & -2 : e._visibility | 1),
            b && ((e = an || Ct), n === null || E || e || Gi(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                E = n = e;
                try {
                  if (((s = E.stateNode), b))
                    (o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none");
                  else {
                    (f = E.stateNode), (g = E.memoizedProps.style);
                    var V =
                      g != null && g.hasOwnProperty("display")
                        ? g.display
                        : null;
                    f.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (k) {
                  Tt(E, E.return, k);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = b ? "" : E.memoizedProps;
                } catch (k) {
                  Tt(E, E.return, k);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Cr(t, n))));
        break;
      case 19:
        Re(e, t),
          Oe(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Cr(t, i)));
        break;
      case 21:
        break;
      default:
        Re(e, t), Oe(t);
    }
  }
  function Oe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (ud(n)) {
                var i = n;
                break t;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (i.tag) {
            case 27:
              var s = i.stateNode,
                o = Dr(t);
              ys(t, o, s);
              break;
            case 5:
              var f = i.stateNode;
              i.flags & 32 && (Mi(f, ""), (i.flags &= -33));
              var g = Dr(t);
              ys(t, g, f);
              break;
            case 3:
            case 4:
              var b = i.stateNode.containerInfo,
                E = Dr(t);
              Rr(t, E, b);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (j) {
        Tt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function yd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        yd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function sn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) cd(t, e.alternate, e), (e = e.sibling);
  }
  function Gi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cn(4, e, e.return), Gi(e);
          break;
        case 1:
          he(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && ad(e, e.return, n),
            Gi(e);
          break;
        case 26:
        case 27:
        case 5:
          he(e, e.return), Gi(e);
          break;
        case 22:
          he(e, e.return), e.memoizedState === null && Gi(e);
          break;
        default:
          Gi(e);
      }
      t = t.sibling;
    }
  }
  function Vn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        o = e,
        f = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Vn(s, o, n), Xa(4, o);
          break;
        case 1:
          if (
            (Vn(s, o, n),
            (i = o),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (E) {
              Tt(i, i.return, E);
            }
          if (((i = o), (s = i.updateQueue), s !== null)) {
            var g = i.stateNode;
            try {
              var b = s.shared.hiddenCallbacks;
              if (b !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < b.length; s++)
                  ed(b[s], g);
            } catch (E) {
              Tt(i, i.return, E);
            }
          }
          n && f & 64 && id(o), ri(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          Vn(s, o, n), n && i === null && f & 4 && ld(o), ri(o, o.return);
          break;
        case 12:
          Vn(s, o, n);
          break;
        case 13:
          Vn(s, o, n), n && f & 4 && dd(s, o);
          break;
        case 22:
          o.memoizedState === null && Vn(s, o, n), ri(o, o.return);
          break;
        default:
          Vn(s, o, n);
      }
      e = e.sibling;
    }
  }
  function Vr(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && _a(n));
  }
  function jr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && _a(t));
  }
  function jn(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) pd(t, e, n, i), (e = e.sibling);
  }
  function pd(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        jn(t, e, n, i), s & 2048 && Xa(9, e);
        break;
      case 3:
        jn(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && _a(t)));
        break;
      case 12:
        if (s & 2048) {
          jn(t, e, n, i), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              f = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            Tt(e, e.return, b);
          }
        } else jn(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          e.memoizedState !== null
            ? o._visibility & 4
              ? jn(t, e, n, i)
              : Za(t, e)
            : o._visibility & 4
            ? jn(t, e, n, i)
            : ((o._visibility |= 4),
              Xi(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Vr(e.alternate, e);
        break;
      case 24:
        jn(t, e, n, i), s & 2048 && jr(e.alternate, e);
        break;
      default:
        jn(t, e, n, i);
    }
  }
  function Xi(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        f = e,
        g = n,
        b = i,
        E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Xi(o, f, g, b, s), Xa(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null
            ? j._visibility & 4
              ? Xi(o, f, g, b, s)
              : Za(o, f)
            : ((j._visibility |= 4), Xi(o, f, g, b, s)),
            s && E & 2048 && Vr(f.alternate, f);
          break;
        case 24:
          Xi(o, f, g, b, s), s && E & 2048 && jr(f.alternate, f);
          break;
        default:
          Xi(o, f, g, b, s);
      }
      e = e.sibling;
    }
  }
  function Za(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Za(n, i), s & 2048 && Vr(i.alternate, i);
            break;
          case 24:
            Za(n, i), s & 2048 && jr(i.alternate, i);
            break;
          default:
            Za(n, i);
        }
        e = e.sibling;
      }
  }
  var Qa = 8192;
  function Zi(t) {
    if (t.subtreeFlags & Qa)
      for (t = t.child; t !== null; ) gd(t), (t = t.sibling);
  }
  function gd(t) {
    switch (t.tag) {
      case 26:
        Zi(t),
          t.flags & Qa &&
            t.memoizedState !== null &&
            Bv(Ue, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Zi(t);
        break;
      case 3:
      case 4:
        var e = Ue;
        (Ue = Vs(t.stateNode.containerInfo)), Zi(t), (Ue = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Qa), (Qa = 16777216), Zi(t), (Qa = e))
            : Zi(t));
        break;
      default:
        Zi(t);
    }
  }
  function vd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Ka(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), Sd(i, t);
        }
      vd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) bd(t), (t = t.sibling);
  }
  function bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ka(t), t.flags & 2048 && Cn(9, t, t.return);
        break;
      case 3:
        Ka(t);
        break;
      case 12:
        Ka(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), ps(t))
          : Ka(t);
        break;
      default:
        Ka(t);
    }
  }
  function ps(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Zt = i), Sd(i, t);
        }
      vd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Cn(8, e, e.return), ps(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), ps(e));
          break;
        default:
          ps(e);
      }
      t = t.sibling;
    }
  }
  function Sd(t, e) {
    for (; Zt !== null; ) {
      var n = Zt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Cn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          _a(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Zt = i);
      else
        t: for (n = t; Zt !== null; ) {
          i = Zt;
          var s = i.sibling,
            o = i.return;
          if ((fd(i), i === n)) {
            Zt = null;
            break t;
          }
          if (s !== null) {
            (s.return = o), (Zt = s);
            break t;
          }
          Zt = o;
        }
    }
  }
  function Fg(t, e, n, i) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ce(t, e, n, i) {
    return new Fg(t, e, n, i);
  }
  function zr(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function zn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ce(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 31457280),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Td(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function gs(t, e, n, i, s, o) {
    var f = 0;
    if (((i = t), typeof t == "function")) zr(t) && (f = 1);
    else if (typeof t == "string")
      f = wv(t, n, He.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case m:
          return oi(n.children, s, o, e);
        case y:
          (f = 8), (s |= 24);
          break;
        case v:
          return (
            (t = Ce(12, n, e, s | 2)), (t.elementType = v), (t.lanes = o), t
          );
        case w:
          return (t = Ce(13, n, e, s)), (t.elementType = w), (t.lanes = o), t;
        case H:
          return (t = Ce(19, n, e, s)), (t.elementType = H), (t.lanes = o), t;
        case X:
          return xd(n, s, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case S:
              case C:
                f = 10;
                break t;
              case T:
                f = 9;
                break t;
              case _:
                f = 11;
                break t;
              case B:
                f = 14;
                break t;
              case Y:
                (f = 16), (i = null);
                break t;
            }
          (f = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Ce(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = o), e
    );
  }
  function oi(t, e, n, i) {
    return (t = Ce(7, t, i, e)), (t.lanes = n), t;
  }
  function xd(t, e, n, i) {
    (t = Ce(22, t, i, e)), (t.elementType = X), (t.lanes = n);
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var o = s._current;
        if (o === null) throw Error(r(456));
        if ((s._pendingVisibility & 2) === 0) {
          var f = Sn(o, 2);
          f !== null && ((s._pendingVisibility |= 2), ae(f, o, 2));
        }
      },
      attach: function () {
        var o = s._current;
        if (o === null) throw Error(r(456));
        if ((s._pendingVisibility & 2) !== 0) {
          var f = Sn(o, 2);
          f !== null && ((s._pendingVisibility &= -3), ae(f, o, 2));
        }
      },
    };
    return (t.stateNode = s), t;
  }
  function _r(t, e, n) {
    return (t = Ce(6, t, null, e)), (t.lanes = n), t;
  }
  function Nr(t, e, n) {
    return (
      (e = Ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function un(t) {
    t.flags |= 4;
  }
  function Ad(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !um(e))) {
      if (
        ((e = De.current),
        e !== null &&
          ((dt & 4194176) === dt
            ? Ge !== null
            : ((dt & 62914560) !== dt && (dt & 536870912) === 0) || e !== Ge))
      )
        throw ((Va = Hu), qf);
      t.flags |= 8192;
    }
  }
  function vs(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? qc() : 536870912), (t.lanes |= e), (Ki |= e));
  }
  function ka(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 31457280),
          (i |= s.flags & 31457280),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function Wg(t, e, n) {
    var i = e.pendingProps;
    switch ((Bu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dt(e), null;
      case 1:
        return Dt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          nn(Yt),
          bi(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Da(e)
              ? un(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), we !== null && (Gr(we), (we = null)))),
          Dt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (un(e),
              n !== null ? (Dt(e), Ad(e, n)) : (Dt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (un(e), Dt(e), Ad(e, n))
              : (Dt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && un(e), Dt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Vl(e), (n = pn.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Dt(e), null;
          }
          (t = He.current),
            Da(e) ? Lf(e) : ((t = Id(s, i, n)), (e.stateNode = t), un(e));
        }
        return Dt(e), null;
      case 5:
        if ((Vl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Dt(e), null;
          }
          if (((t = He.current), Da(e))) Lf(e);
          else {
            switch (((s = Cs(pn.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            (t[Ft] = e), (t[se] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((Jt(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && un(e);
          }
        }
        return Dt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = pn.current), Da(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ie),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[Ft] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                kd(t.nodeValue, n)
              )),
              t || In(e);
          } else (t = Cs(t).createTextNode(i)), (t[Ft] = e), (e.stateNode = t);
        }
        return Dt(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Da(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[Ft] = e;
            } else
              Ra(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Dt(e), (s = !1);
          } else we !== null && (Gr(we), (we = null)), (s = !0);
          if (!s) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
        }
        if (($e(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var o = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
            o !== s && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          vs(e, e.updateQueue),
          Dt(e),
          null
        );
      case 4:
        return bi(), t === null && Ir(e.stateNode.containerInfo), Dt(e), null;
      case 10:
        return nn(e.type), Dt(e), null;
      case 19:
        if ((wt(qt), (s = e.memoizedState), s === null)) return Dt(e), null;
        if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
          if (i) ka(s, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = es(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      ka(s, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      vs(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Td(n, t), (n = n.sibling);
                  return Mt(qt, (qt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              qe() > bs &&
              ((e.flags |= 128), (i = !0), ka(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = es(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                vs(e, t),
                ka(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !yt)
              )
                return Dt(e), null;
            } else
              2 * qe() - s.renderingStartTime > bs &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), ka(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = s.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = qe()),
            (e.sibling = null),
            (t = qt.current),
            Mt(qt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Dt(e), null);
      case 22:
      case 23:
        return (
          $e(e),
          Yu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Dt(e),
          (n = e.updateQueue),
          n !== null && vs(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && wt(ei),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          nn(Yt),
          Dt(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function $g(t, e) {
    switch ((Bu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          nn(Yt),
          bi(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Vl(e), null;
      case 13:
        if (
          ($e(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ra();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return wt(qt), null;
      case 4:
        return bi(), null;
      case 10:
        return nn(e.type), null;
      case 22:
      case 23:
        return (
          $e(e),
          Yu(),
          t !== null && wt(ei),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return nn(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ed(t, e) {
    switch ((Bu(e), e.tag)) {
      case 3:
        nn(Yt), bi();
        break;
      case 26:
      case 27:
      case 5:
        Vl(e);
        break;
      case 4:
        bi();
        break;
      case 13:
        $e(e);
        break;
      case 19:
        wt(qt);
        break;
      case 10:
        nn(e.type);
        break;
      case 22:
      case 23:
        $e(e), Yu(), t !== null && wt(ei);
        break;
      case 24:
        nn(Yt);
    }
  }
  var Ig = {
      getCacheForType: function (t) {
        var e = Wt(Yt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    tv = typeof WeakMap == "function" ? WeakMap : Map,
    Rt = 0,
    xt = null,
    ct = null,
    dt = 0,
    At = 0,
    me = null,
    rn = !1,
    Qi = !1,
    wr = !1,
    on = 0,
    Vt = 0,
    _n = 0,
    ci = 0,
    Ur = 0,
    Ve = 0,
    Ki = 0,
    Ja = null,
    Ze = null,
    Br = !1,
    Lr = 0,
    bs = 1 / 0,
    Ss = null,
    Nn = null,
    Ts = !1,
    fi = null,
    Pa = 0,
    Hr = 0,
    qr = null,
    Fa = 0,
    Yr = null;
  function ye() {
    if ((Rt & 2) !== 0 && dt !== 0) return dt & -dt;
    if (Z.T !== null) {
      var t = Bi;
      return t !== 0 ? t : Pr();
    }
    return Zc();
  }
  function Md() {
    Ve === 0 && (Ve = (dt & 536870912) === 0 || yt ? Hc() : 536870912);
    var t = De.current;
    return t !== null && (t.flags |= 32), Ve;
  }
  function ae(t, e, n) {
    ((t === xt && At === 2) || t.cancelPendingCommit !== null) &&
      (ki(t, 0), cn(t, dt, Ve, !1)),
      ma(t, n),
      ((Rt & 2) === 0 || t !== xt) &&
        (t === xt &&
          ((Rt & 2) === 0 && (ci |= n), Vt === 4 && cn(t, dt, Ve, !1)),
        Qe(t));
  }
  function Dd(t, e, n) {
    if ((Rt & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 60) === 0 && (e & t.expiredLanes) === 0) || da(t, e),
      s = i ? iv(t, e) : Qr(t, e, !0),
      o = i;
    do {
      if (s === 0) {
        Qi && !i && cn(t, e, 0, !1);
        break;
      } else if (s === 6) cn(t, e, 0, !rn);
      else {
        if (((n = t.current.alternate), o && !ev(n))) {
          (s = Qr(t, e, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var g = t;
              s = Ja;
              var b = g.current.memoizedState.isDehydrated;
              if ((b && (ki(g, f).flags |= 256), (f = Qr(g, f, !1)), f !== 2)) {
                if (wr && !b) {
                  (g.errorRecoveryDisabledLanes |= o), (ci |= o), (s = 4);
                  break t;
                }
                (o = Ze), (Ze = s), o !== null && Gr(o);
              }
              s = f;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          ki(t, 0), cn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), s)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194176) === e) {
                cn(i, e, Ve, !rn);
                break t;
              }
              break;
            case 2:
              Ze = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (
            ((i.finishedWork = n),
            (i.finishedLanes = e),
            (e & 62914560) === e && ((o = Lr + 300 - qe()), 10 < o))
          ) {
            if ((cn(i, e, Ve, !rn), Nl(i, 0) !== 0)) break t;
            i.timeoutHandle = Fd(
              Rd.bind(null, i, n, Ze, Ss, Br, e, Ve, ci, Ki, rn, 2, -0, 0),
              o
            );
            break t;
          }
          Rd(i, n, Ze, Ss, Br, e, Ve, ci, Ki, rn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Qe(t);
  }
  function Gr(t) {
    Ze === null ? (Ze = t) : Ze.push.apply(Ze, t);
  }
  function Rd(t, e, n, i, s, o, f, g, b, E, j, N, O) {
    var V = e.subtreeFlags;
    if (
      (V & 8192 || (V & 16785408) === 16785408) &&
      ((nl = { stylesheets: null, count: 0, unsuspend: Uv }),
      gd(e),
      (e = Lv()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(Nd.bind(null, t, n, i, s, f, g, b, 1, N, O))),
        cn(t, o, f, !E);
      return;
    }
    Nd(t, n, i, s, f, g, b, j, N, O);
  }
  function ev(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!fe(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function cn(t, e, n, i) {
    (e &= ~Ur),
      (e &= ~ci),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var o = 31 - ce(s),
        f = 1 << o;
      (i[o] = -1), (s &= ~f);
    }
    n !== 0 && Yc(t, n, e);
  }
  function xs() {
    return (Rt & 6) === 0 ? (Wa(0), !1) : !0;
  }
  function Xr() {
    if (ct !== null) {
      if (At === 0) var t = ct.return;
      else (t = ct), (en = si = null), Pu(t), (wi = null), (ja = 0), (t = ct);
      for (; t !== null; ) Ed(t.alternate, t), (t = t.return);
      ct = null;
    }
  }
  function ki(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Sv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Xr(),
      (xt = t),
      (ct = n = zn(t.current, null)),
      (dt = e),
      (At = 0),
      (me = null),
      (rn = !1),
      (Qi = da(t, e)),
      (wr = !1),
      (Ki = Ve = Ur = ci = _n = Vt = 0),
      (Ze = Ja = null),
      (Br = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - ce(i),
          o = 1 << s;
        (e |= t[s]), (i &= ~o);
      }
    return (on = e), Kl(), n;
  }
  function Od(t, e) {
    (rt = null),
      (Z.H = Xe),
      e === Ca
        ? ((e = Xf()), (At = 3))
        : e === qf
        ? ((e = Xf()), (At = 4))
        : (At =
            e === Yh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (me = e),
      ct === null && ((Vt = 1), hs(t, Ae(e, t.current)));
  }
  function Cd() {
    var t = Z.H;
    return (Z.H = Xe), t === null ? Xe : t;
  }
  function Vd() {
    var t = Z.A;
    return (Z.A = Ig), t;
  }
  function Zr() {
    (Vt = 4),
      rn || ((dt & 4194176) !== dt && De.current !== null) || (Qi = !0),
      ((_n & 134217727) === 0 && (ci & 134217727) === 0) ||
        xt === null ||
        cn(xt, dt, Ve, !1);
  }
  function Qr(t, e, n) {
    var i = Rt;
    Rt |= 2;
    var s = Cd(),
      o = Vd();
    (xt !== t || dt !== e) && ((Ss = null), ki(t, e)), (e = !1);
    var f = Vt;
    t: do
      try {
        if (At !== 0 && ct !== null) {
          var g = ct,
            b = me;
          switch (At) {
            case 8:
              Xr(), (f = 6);
              break t;
            case 3:
            case 2:
            case 6:
              De.current === null && (e = !0);
              var E = At;
              if (((At = 0), (me = null), Ji(t, g, b, E), n && Qi)) {
                f = 0;
                break t;
              }
              break;
            default:
              (E = At), (At = 0), (me = null), Ji(t, g, b, E);
          }
        }
        nv(), (f = Vt);
        break;
      } catch (j) {
        Od(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (en = si = null),
      (Rt = i),
      (Z.H = s),
      (Z.A = o),
      ct === null && ((xt = null), (dt = 0), Kl()),
      f
    );
  }
  function nv() {
    for (; ct !== null; ) jd(ct);
  }
  function iv(t, e) {
    var n = Rt;
    Rt |= 2;
    var i = Cd(),
      s = Vd();
    xt !== t || dt !== e
      ? ((Ss = null), (bs = qe() + 500), ki(t, e))
      : (Qi = da(t, e));
    t: do
      try {
        if (At !== 0 && ct !== null) {
          e = ct;
          var o = me;
          e: switch (At) {
            case 1:
              (At = 0), (me = null), Ji(t, e, o, 1);
              break;
            case 2:
              if (Yf(o)) {
                (At = 0), (me = null), zd(e);
                break;
              }
              (e = function () {
                At === 2 && xt === t && (At = 7), Qe(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              Yf(o)
                ? ((At = 0), (me = null), zd(e))
                : ((At = 0), (me = null), Ji(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (ct.tag) {
                case 26:
                  f = ct.memoizedState;
                case 5:
                case 27:
                  var g = ct;
                  if (!f || um(f)) {
                    (At = 0), (me = null);
                    var b = g.sibling;
                    if (b !== null) ct = b;
                    else {
                      var E = g.return;
                      E !== null ? ((ct = E), As(E)) : (ct = null);
                    }
                    break e;
                  }
              }
              (At = 0), (me = null), Ji(t, e, o, 5);
              break;
            case 6:
              (At = 0), (me = null), Ji(t, e, o, 6);
              break;
            case 8:
              Xr(), (Vt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        av();
        break;
      } catch (j) {
        Od(t, j);
      }
    while (!0);
    return (
      (en = si = null),
      (Z.H = i),
      (Z.A = s),
      (Rt = n),
      ct !== null ? 0 : ((xt = null), (dt = 0), Kl(), Vt)
    );
  }
  function av() {
    for (; ct !== null && !Dp(); ) jd(ct);
  }
  function jd(t) {
    var e = Ih(t.alternate, t, on);
    (t.memoizedProps = t.pendingProps), e === null ? As(t) : (ct = e);
  }
  function zd(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = kh(n, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = kh(n, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        Pu(e);
      default:
        Ed(n, e), (e = ct = Td(e, on)), (e = Ih(n, e, on));
    }
    (t.memoizedProps = t.pendingProps), e === null ? As(t) : (ct = e);
  }
  function Ji(t, e, n, i) {
    (en = si = null), Pu(e), (wi = null), (ja = 0);
    var s = e.return;
    try {
      if (Kg(t, s, e, n, dt)) {
        (Vt = 1), hs(t, Ae(n, t.current)), (ct = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ct = s), o);
      (Vt = 1), hs(t, Ae(n, t.current)), (ct = null);
      return;
    }
    e.flags & 32768
      ? (yt || i === 1
          ? (t = !0)
          : Qi || (dt & 536870912) !== 0
          ? (t = !1)
          : ((rn = t = !0),
            (i === 2 || i === 3 || i === 6) &&
              ((i = De.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        _d(e, t))
      : As(e);
  }
  function As(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _d(e, rn);
        return;
      }
      t = e.return;
      var n = Wg(e.alternate, e, on);
      if (n !== null) {
        ct = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function _d(t, e) {
    do {
      var n = $g(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ct = t;
        return;
      }
      ct = t = n;
    } while (t !== null);
    (Vt = 6), (ct = null);
  }
  function Nd(t, e, n, i, s, o, f, g, b, E) {
    var j = Z.T,
      N = Q.p;
    try {
      (Q.p = 2), (Z.T = null), lv(t, e, n, i, N, s, o, f, g, b, E);
    } finally {
      (Z.T = j), (Q.p = N);
    }
  }
  function lv(t, e, n, i, s, o, f, g) {
    do Pi();
    while (fi !== null);
    if ((Rt & 6) !== 0) throw Error(r(327));
    var b = t.finishedWork;
    if (((i = t.finishedLanes), b === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), b === t.current))
      throw Error(r(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var E = b.lanes | b.childLanes;
    if (
      ((E |= Nu),
      Bp(t, i, E, o, f, g),
      t === xt && ((ct = xt = null), (dt = 0)),
      ((b.subtreeFlags & 10256) === 0 && (b.flags & 10256) === 0) ||
        Ts ||
        ((Ts = !0),
        (Hr = E),
        (qr = n),
        ov(jl, function () {
          return Pi(), null;
        })),
      (n = (b.flags & 15990) !== 0),
      (b.subtreeFlags & 15990) !== 0 || n
        ? ((n = Z.T),
          (Z.T = null),
          (o = Q.p),
          (Q.p = 2),
          (f = Rt),
          (Rt |= 4),
          Jg(t, b),
          md(b, t),
          Cg(io, t.containerInfo),
          (ws = !!no),
          (io = no = null),
          (t.current = b),
          cd(t, b.alternate, b),
          Rp(),
          (Rt = f),
          (Q.p = o),
          (Z.T = n))
        : (t.current = b),
      Ts ? ((Ts = !1), (fi = t), (Pa = i)) : wd(t, E),
      (E = t.pendingLanes),
      E === 0 && (Nn = null),
      zp(b.stateNode),
      Qe(t),
      e !== null)
    )
      for (s = t.onRecoverableError, b = 0; b < e.length; b++)
        (E = e[b]), s(E.value, { componentStack: E.stack });
    return (
      (Pa & 3) !== 0 && Pi(),
      (E = t.pendingLanes),
      (i & 4194218) !== 0 && (E & 42) !== 0
        ? t === Yr
          ? Fa++
          : ((Fa = 0), (Yr = t))
        : (Fa = 0),
      Wa(0),
      null
    );
  }
  function wd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), _a(e)));
  }
  function Pi() {
    if (fi !== null) {
      var t = fi,
        e = Hr;
      Hr = 0;
      var n = Xc(Pa),
        i = Z.T,
        s = Q.p;
      try {
        if (((Q.p = 32 > n ? 32 : n), (Z.T = null), fi === null)) var o = !1;
        else {
          (n = qr), (qr = null);
          var f = fi,
            g = Pa;
          if (((fi = null), (Pa = 0), (Rt & 6) !== 0)) throw Error(r(331));
          var b = Rt;
          if (
            ((Rt |= 4),
            bd(f.current),
            pd(f, f.current, g, n),
            (Rt = b),
            Wa(0, !1),
            oe && typeof oe.onPostCommitFiberRoot == "function")
          )
            try {
              oe.onPostCommitFiberRoot(ha, f);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (Q.p = s), (Z.T = i), wd(t, e);
      }
    }
    return !1;
  }
  function Ud(t, e, n) {
    (e = Ae(n, e)),
      (e = or(t.stateNode, e, 2)),
      (t = On(t, e, 2)),
      t !== null && (ma(t, 2), Qe(t));
  }
  function Tt(t, e, n) {
    if (t.tag === 3) Ud(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ud(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Nn === null || !Nn.has(i)))
          ) {
            (t = Ae(n, t)),
              (n = Hh(2)),
              (i = On(e, n, 2)),
              i !== null && (qh(n, i, e, t), ma(i, 2), Qe(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function Kr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new tv();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((wr = !0), s.add(n), (t = sv.bind(null, t, e, n)), e.then(t, t));
  }
  function sv(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      xt === t &&
        (dt & n) === n &&
        (Vt === 4 || (Vt === 3 && (dt & 62914560) === dt && 300 > qe() - Lr)
          ? (Rt & 2) === 0 && ki(t, 0)
          : (Ur |= n),
        Ki === dt && (Ki = 0)),
      Qe(t);
  }
  function Bd(t, e) {
    e === 0 && (e = qc()), (t = Sn(t, e)), t !== null && (ma(t, e), Qe(t));
  }
  function uv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Bd(t, n);
  }
  function rv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), Bd(t, n);
  }
  function ov(t, e) {
    return cu(t, e);
  }
  var Es = null,
    Fi = null,
    kr = !1,
    Ms = !1,
    Jr = !1,
    hi = 0;
  function Qe(t) {
    t !== Fi &&
      t.next === null &&
      (Fi === null ? (Es = Fi = t) : (Fi = Fi.next = t)),
      (Ms = !0),
      kr || ((kr = !0), fv(cv));
  }
  function Wa(t, e) {
    if (!Jr && Ms) {
      Jr = !0;
      do
        for (var n = !1, i = Es; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = i.suspendedLanes,
                g = i.pingedLanes;
              (o = (1 << (31 - ce(42 | t) + 1)) - 1),
                (o &= s & ~(f & ~g)),
                (o = o & 201326677 ? (o & 201326677) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), qd(i, o));
          } else
            (o = dt),
              (o = Nl(i, i === xt ? o : 0)),
              (o & 3) === 0 || da(i, o) || ((n = !0), qd(i, o));
          i = i.next;
        }
      while (n);
      Jr = !1;
    }
  }
  function cv() {
    Ms = kr = !1;
    var t = 0;
    hi !== 0 && (bv() && (t = hi), (hi = 0));
    for (var e = qe(), n = null, i = Es; i !== null; ) {
      var s = i.next,
        o = Ld(i, e);
      o === 0
        ? ((i.next = null),
          n === null ? (Es = s) : (n.next = s),
          s === null && (Fi = n))
        : ((n = i), (t !== 0 || (o & 3) !== 0) && (Ms = !0)),
        (i = s);
    }
    Wa(t);
  }
  function Ld(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var f = 31 - ce(o),
        g = 1 << f,
        b = s[f];
      b === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (s[f] = Up(g, e))
        : b <= e && (t.expiredLanes |= g),
        (o &= ~g);
    }
    if (
      ((e = xt),
      (n = dt),
      (n = Nl(t, t === e ? n : 0)),
      (i = t.callbackNode),
      n === 0 || (t === e && At === 2) || t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && fu(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || da(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && fu(i), Xc(n))) {
        case 2:
        case 8:
          n = Bc;
          break;
        case 32:
          n = jl;
          break;
        case 268435456:
          n = Lc;
          break;
        default:
          n = jl;
      }
      return (
        (i = Hd.bind(null, t)),
        (n = cu(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && fu(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Hd(t, e) {
    var n = t.callbackNode;
    if (Pi() && t.callbackNode !== n) return null;
    var i = dt;
    return (
      (i = Nl(t, t === xt ? i : 0)),
      i === 0
        ? null
        : (Dd(t, i, e),
          Ld(t, qe()),
          t.callbackNode != null && t.callbackNode === n
            ? Hd.bind(null, t)
            : null)
    );
  }
  function qd(t, e) {
    if (Pi()) return null;
    Dd(t, e, !0);
  }
  function fv(t) {
    Tv(function () {
      (Rt & 6) !== 0 ? cu(Uc, t) : t();
    });
  }
  function Pr() {
    return hi === 0 && (hi = Hc()), hi;
  }
  function Yd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Hl("" + t);
  }
  function Gd(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function hv(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = Yd((s[se] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[se] || null)
          ? Yd(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((o = e), (f = null)));
      var g = new Xl("action", "action", null, i, s);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (hi !== 0) {
                  var b = f ? Gd(s, f) : new FormData(s);
                  ar(
                    n,
                    { pending: !0, data: b, method: s.method, action: o },
                    null,
                    b
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (b = f ? Gd(s, f) : new FormData(s)),
                  ar(
                    n,
                    { pending: !0, data: b, method: s.method, action: o },
                    o,
                    b
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Fr = 0; Fr < Nf.length; Fr++) {
    var Wr = Nf[Fr],
      dv = Wr.toLowerCase(),
      mv = Wr[0].toUpperCase() + Wr.slice(1);
    Ne(dv, "on" + mv);
  }
  Ne(Cf, "onAnimationEnd"),
    Ne(Vf, "onAnimationIteration"),
    Ne(jf, "onAnimationStart"),
    Ne("dblclick", "onDoubleClick"),
    Ne("focusin", "onFocus"),
    Ne("focusout", "onBlur"),
    Ne(jg, "onTransitionRun"),
    Ne(zg, "onTransitionStart"),
    Ne(_g, "onTransitionCancel"),
    Ne(zf, "onTransitionEnd"),
    Ai("onMouseEnter", ["mouseout", "mouseover"]),
    Ai("onMouseLeave", ["mouseout", "mouseover"]),
    Ai("onPointerEnter", ["pointerout", "pointerover"]),
    Ai("onPointerLeave", ["pointerout", "pointerover"]),
    kn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    kn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    kn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    kn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    kn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var $a =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat($a)
    );
  function Xd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var g = i[f],
              b = g.instance,
              E = g.currentTarget;
            if (((g = g.listener), b !== o && s.isPropagationStopped()))
              break t;
            (o = g), (s.currentTarget = E);
            try {
              o(s);
            } catch (j) {
              fs(j);
            }
            (s.currentTarget = null), (o = b);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((g = i[f]),
              (b = g.instance),
              (E = g.currentTarget),
              (g = g.listener),
              b !== o && s.isPropagationStopped())
            )
              break t;
            (o = g), (s.currentTarget = E);
            try {
              o(s);
            } catch (j) {
              fs(j);
            }
            (s.currentTarget = null), (o = b);
          }
      }
    }
  }
  function ft(t, e) {
    var n = e[du];
    n === void 0 && (n = e[du] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Zd(e, t, 2, !1), n.add(i));
  }
  function $r(t, e, n) {
    var i = 0;
    e && (i |= 4), Zd(n, t, i, e);
  }
  var Ds = "_reactListening" + Math.random().toString(36).slice(2);
  function Ir(t) {
    if (!t[Ds]) {
      (t[Ds] = !0),
        Kc.forEach(function (n) {
          n !== "selectionchange" && (yv.has(n) || $r(n, !1, t), $r(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ds] || ((e[Ds] = !0), $r("selectionchange", !1, e));
    }
  }
  function Zd(t, e, n, i) {
    switch (dm(e)) {
      case 2:
        var s = Yv;
        break;
      case 8:
        s = Gv;
        break;
      default:
        s = ho;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Tu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function to(t, e, n, i, s) {
    var o = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var b = f.tag;
              if (
                (b === 3 || b === 4) &&
                ((b = f.stateNode.containerInfo),
                b === s || (b.nodeType === 8 && b.parentNode === s))
              )
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = Kn(g)), f === null)) return;
            if (((b = f.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              i = o = f;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    lf(function () {
      var E = o,
        j = bu(n),
        N = [];
      t: {
        var O = _f.get(t);
        if (O !== void 0) {
          var V = Xl,
            k = t;
          switch (t) {
            case "keypress":
              if (Yl(n) === 0) break t;
            case "keydown":
            case "keyup":
              V = rg;
              break;
            case "focusin":
              (k = "focus"), (V = Mu);
              break;
            case "focusout":
              (k = "blur"), (V = Mu);
              break;
            case "beforeblur":
            case "afterblur":
              V = Mu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Fp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = fg;
              break;
            case Cf:
            case Vf:
            case jf:
              V = Ip;
              break;
            case zf:
              V = dg;
              break;
            case "scroll":
            case "scrollend":
              V = Jp;
              break;
            case "wheel":
              V = yg;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = eg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = cf;
              break;
            case "toggle":
            case "beforetoggle":
              V = gg;
          }
          var at = (e & 4) !== 0,
            jt = !at && (t === "scroll" || t === "scrollend"),
            M = at ? (O !== null ? O + "Capture" : null) : O;
          at = [];
          for (var A = E, D; A !== null; ) {
            var z = A;
            if (
              ((D = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                D === null ||
                M === null ||
                ((z = ga(A, M)), z != null && at.push(Ia(A, z, D))),
              jt)
            )
              break;
            A = A.return;
          }
          0 < at.length &&
            ((O = new V(O, k, null, n, j)),
            N.push({ event: O, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((O = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            O &&
              n !== vu &&
              (k = n.relatedTarget || n.fromElement) &&
              (Kn(k) || k[Si]))
          )
            break t;
          if (
            (V || O) &&
            ((O =
              j.window === j
                ? j
                : (O = j.ownerDocument)
                ? O.defaultView || O.parentWindow
                : window),
            V
              ? ((k = n.relatedTarget || n.toElement),
                (V = E),
                (k = k ? Kn(k) : null),
                k !== null &&
                  ((jt = P(k)),
                  (at = k.tag),
                  k !== jt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (k = null))
              : ((V = null), (k = E)),
            V !== k)
          ) {
            if (
              ((at = rf),
              (z = "onMouseLeave"),
              (M = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = cf),
                (z = "onPointerLeave"),
                (M = "onPointerEnter"),
                (A = "pointer")),
              (jt = V == null ? O : pa(V)),
              (D = k == null ? O : pa(k)),
              (O = new at(z, A + "leave", V, n, j)),
              (O.target = jt),
              (O.relatedTarget = D),
              (z = null),
              Kn(j) === E &&
                ((at = new at(M, A + "enter", k, n, j)),
                (at.target = D),
                (at.relatedTarget = jt),
                (z = at)),
              (jt = z),
              V && k)
            )
              e: {
                for (at = V, M = k, A = 0, D = at; D; D = Wi(D)) A++;
                for (D = 0, z = M; z; z = Wi(z)) D++;
                for (; 0 < A - D; ) (at = Wi(at)), A--;
                for (; 0 < D - A; ) (M = Wi(M)), D--;
                for (; A--; ) {
                  if (at === M || (M !== null && at === M.alternate)) break e;
                  (at = Wi(at)), (M = Wi(M));
                }
                at = null;
              }
            else at = null;
            V !== null && Qd(N, O, V, at, !1),
              k !== null && jt !== null && Qd(N, jt, k, at, !0);
          }
        }
        t: {
          if (
            ((O = E ? pa(E) : window),
            (V = O.nodeName && O.nodeName.toLowerCase()),
            V === "select" || (V === "input" && O.type === "file"))
          )
            var K = vf;
          else if (pf(O))
            if (bf) K = Rg;
            else {
              K = Mg;
              var ot = Eg;
            }
          else
            (V = O.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? E && gu(E.elementType) && (K = vf)
                : (K = Dg);
          if (K && (K = K(t, E))) {
            gf(N, K, n, j);
            break t;
          }
          ot && ot(t, O, E),
            t === "focusout" &&
              E &&
              O.type === "number" &&
              E.memoizedProps.value != null &&
              pu(O, "number", O.value);
        }
        switch (((ot = E ? pa(E) : window), t)) {
          case "focusin":
            (pf(ot) || ot.contentEditable === "true") &&
              ((Ci = ot), (ju = E), (Ma = null));
            break;
          case "focusout":
            Ma = ju = Ci = null;
            break;
          case "mousedown":
            zu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zu = !1), Rf(N, n, j);
            break;
          case "selectionchange":
            if (Vg) break;
          case "keydown":
          case "keyup":
            Rf(N, n, j);
        }
        var W;
        if (Ru)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          Oi
            ? mf(t, n) && (tt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (tt = "onCompositionStart");
        tt &&
          (ff &&
            n.locale !== "ko" &&
            (Oi || tt !== "onCompositionStart"
              ? tt === "onCompositionEnd" && Oi && (W = sf())
              : ((bn = j),
                (xu = "value" in bn ? bn.value : bn.textContent),
                (Oi = !0))),
          (ot = Rs(E, tt)),
          0 < ot.length &&
            ((tt = new of(tt, t, null, n, j)),
            N.push({ event: tt, listeners: ot }),
            W ? (tt.data = W) : ((W = yf(n)), W !== null && (tt.data = W)))),
          (W = bg ? Sg(t, n) : Tg(t, n)) &&
            ((tt = Rs(E, "onBeforeInput")),
            0 < tt.length &&
              ((ot = new of("onBeforeInput", "beforeinput", null, n, j)),
              N.push({ event: ot, listeners: tt }),
              (ot.data = W))),
          hv(N, t, E, n, j);
      }
      Xd(N, e);
    });
  }
  function Ia(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Rs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      (s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = ga(t, n)),
          s != null && i.unshift(Ia(t, s, o)),
          (s = ga(t, e)),
          s != null && i.push(Ia(t, s, o))),
        (t = t.return);
    }
    return i;
  }
  function Wi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qd(t, e, n, i, s) {
    for (var o = e._reactName, f = []; n !== null && n !== i; ) {
      var g = n,
        b = g.alternate,
        E = g.stateNode;
      if (((g = g.tag), b !== null && b === i)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        E === null ||
        ((b = E),
        s
          ? ((E = ga(n, o)), E != null && f.unshift(Ia(n, E, b)))
          : s || ((E = ga(n, o)), E != null && f.push(Ia(n, E, b)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var pv = /\r\n?/g,
    gv = /\u0000|\uFFFD/g;
  function Kd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        pv,
        `
`
      )
      .replace(gv, "");
  }
  function kd(t, e) {
    return (e = Kd(e)), Kd(t) === e;
  }
  function Os() {}
  function St(t, e, n, i, s, o) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Mi(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Mi(t, "" + i);
        break;
      case "className":
        Ul(t, "class", i);
        break;
      case "tabIndex":
        Ul(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(t, n, i);
        break;
      case "style":
        nf(t, i, o);
        break;
      case "data":
        if (e !== "object") {
          Ul(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && St(t, e, "name", s.name, s, null),
                St(t, e, "formEncType", s.formEncType, s, null),
                St(t, e, "formMethod", s.formMethod, s, null),
                St(t, e, "formTarget", s.formTarget, s, null))
              : (St(t, e, "encType", s.encType, s, null),
                St(t, e, "method", s.method, s, null),
                St(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Os);
        break;
      case "onScroll":
        i != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Hl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
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
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), wl(t, "popover", i);
        break;
      case "xlinkActuate":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Pe(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Pe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Pe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Pe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        wl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Kp.get(n) || n), wl(t, n, i));
    }
  }
  function eo(t, e, n, i, s, o) {
    switch (n) {
      case "style":
        nf(t, i, o);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Mi(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Mi(t, "" + i);
        break;
      case "onScroll":
        i != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ft("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Os);
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
        if (!kc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[se] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof i == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : wl(t, n, i);
          }
    }
  }
  function Jt(t, e, n) {
    switch (e) {
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
        ft("error", t), ft("load", t);
        var i = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  St(t, e, o, f, n, null);
              }
          }
        s && St(t, e, "srcSet", n.srcSet, n, null),
          i && St(t, e, "src", n.src, n, null);
        return;
      case "input":
        ft("invalid", t);
        var g = (o = f = s = null),
          b = null,
          E = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var j = n[i];
            if (j != null)
              switch (i) {
                case "name":
                  s = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  b = j;
                  break;
                case "defaultChecked":
                  E = j;
                  break;
                case "value":
                  o = j;
                  break;
                case "defaultValue":
                  g = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(r(137, e));
                  break;
                default:
                  St(t, e, i, j, n, null);
              }
          }
        $c(t, o, g, b, E, f, s, !1), Bl(t);
        return;
      case "select":
        ft("invalid", t), (i = f = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                i = g;
              default:
                St(t, e, s, g, n, null);
            }
        (e = o),
          (n = f),
          (t.multiple = !!i),
          e != null ? Ei(t, !!i, e, !1) : n != null && Ei(t, !!i, n, !0);
        return;
      case "textarea":
        ft("invalid", t), (o = s = i = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((g = n[f]), g != null))
            switch (f) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                St(t, e, f, g, n, null);
            }
        tf(t, i, s, o), Bl(t);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((i = n[b]), i != null))
            switch (b) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                St(t, e, b, i, n, null);
            }
        return;
      case "dialog":
        ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < $a.length; i++) ft($a[i], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
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
        for (E in n)
          if (n.hasOwnProperty(E) && ((i = n[E]), i != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                St(t, e, E, i, n, null);
            }
        return;
      default:
        if (gu(e)) {
          for (j in n)
            n.hasOwnProperty(j) &&
              ((i = n[j]), i !== void 0 && eo(t, e, j, i, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((i = n[g]), i != null && St(t, e, g, i, n, null));
  }
  function vv(t, e, n, i) {
    switch (e) {
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
        var s = null,
          o = null,
          f = null,
          g = null,
          b = null,
          E = null,
          j = null;
        for (V in n) {
          var N = n[V];
          if (n.hasOwnProperty(V) && N != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = N;
              default:
                i.hasOwnProperty(V) || St(t, e, V, null, i, N);
            }
        }
        for (var O in i) {
          var V = i[O];
          if (((N = n[O]), i.hasOwnProperty(O) && (V != null || N != null)))
            switch (O) {
              case "type":
                o = V;
                break;
              case "name":
                s = V;
                break;
              case "checked":
                E = V;
                break;
              case "defaultChecked":
                j = V;
                break;
              case "value":
                f = V;
                break;
              case "defaultValue":
                g = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(r(137, e));
                break;
              default:
                V !== N && St(t, e, O, V, i, N);
            }
        }
        yu(t, f, g, b, E, j, o, s);
        return;
      case "select":
        V = f = g = O = null;
        for (o in n)
          if (((b = n[o]), n.hasOwnProperty(o) && b != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                V = b;
              default:
                i.hasOwnProperty(o) || St(t, e, o, null, i, b);
            }
        for (s in i)
          if (
            ((o = i[s]),
            (b = n[s]),
            i.hasOwnProperty(s) && (o != null || b != null))
          )
            switch (s) {
              case "value":
                O = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                f = o;
              default:
                o !== b && St(t, e, s, o, i, b);
            }
        (e = g),
          (n = f),
          (i = V),
          O != null
            ? Ei(t, !!n, O, !1)
            : !!i != !!n &&
              (e != null ? Ei(t, !!n, e, !0) : Ei(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        V = O = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, e, g, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (o = n[f]),
            i.hasOwnProperty(f) && (s != null || o != null))
          )
            switch (f) {
              case "value":
                O = s;
                break;
              case "defaultValue":
                V = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && St(t, e, f, s, i, o);
            }
        Ic(t, O, V);
        return;
      case "option":
        for (var k in n)
          if (
            ((O = n[k]),
            n.hasOwnProperty(k) && O != null && !i.hasOwnProperty(k))
          )
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(t, e, k, null, i, O);
            }
        for (b in i)
          if (
            ((O = i[b]),
            (V = n[b]),
            i.hasOwnProperty(b) && O !== V && (O != null || V != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                St(t, e, b, O, i, V);
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
        for (var at in n)
          (O = n[at]),
            n.hasOwnProperty(at) &&
              O != null &&
              !i.hasOwnProperty(at) &&
              St(t, e, at, null, i, O);
        for (E in i)
          if (
            ((O = i[E]),
            (V = n[E]),
            i.hasOwnProperty(E) && O !== V && (O != null || V != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                St(t, e, E, O, i, V);
            }
        return;
      default:
        if (gu(e)) {
          for (var jt in n)
            (O = n[jt]),
              n.hasOwnProperty(jt) &&
                O !== void 0 &&
                !i.hasOwnProperty(jt) &&
                eo(t, e, jt, void 0, i, O);
          for (j in i)
            (O = i[j]),
              (V = n[j]),
              !i.hasOwnProperty(j) ||
                O === V ||
                (O === void 0 && V === void 0) ||
                eo(t, e, j, O, i, V);
          return;
        }
    }
    for (var M in n)
      (O = n[M]),
        n.hasOwnProperty(M) &&
          O != null &&
          !i.hasOwnProperty(M) &&
          St(t, e, M, null, i, O);
    for (N in i)
      (O = i[N]),
        (V = n[N]),
        !i.hasOwnProperty(N) ||
          O === V ||
          (O == null && V == null) ||
          St(t, e, N, O, i, V);
  }
  var no = null,
    io = null;
  function Cs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Jd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ao(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lo = null;
  function bv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === lo
        ? !1
        : ((lo = t), !0)
      : ((lo = null), !1);
  }
  var Fd = typeof setTimeout == "function" ? setTimeout : void 0,
    Sv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wd = typeof Promise == "function" ? Promise : void 0,
    Tv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wd < "u"
        ? function (t) {
            return Wd.resolve(null).then(t).catch(xv);
          }
        : Fd;
  function xv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function so(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (i === 0) {
            t.removeChild(s), ul(e);
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = s;
    } while (n);
    ul(e);
  }
  function uo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uo(n), mu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Av(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[ya])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !== (s.href == null ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Be(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ev(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function $d(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Id(t, e, n) {
    switch (((e = Cs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var je = new Map(),
    tm = new Set();
  function Vs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var fn = Q.d;
  Q.d = { f: Mv, r: Dv, D: Rv, C: Ov, L: Cv, m: Vv, X: zv, S: jv, M: _v };
  function Mv() {
    var t = fn.f(),
      e = xs();
    return t || e;
  }
  function Dv(t) {
    var e = Ti(t);
    e !== null && e.tag === 5 && e.type === "form" ? Rh(e) : fn.r(t);
  }
  var $i = typeof document > "u" ? null : document;
  function em(t, e, n) {
    var i = $i;
    if (i && typeof e == "string" && e) {
      var s = Te(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        tm.has(s) ||
          (tm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            Jt(e, "link", t),
            Gt(e),
            i.head.appendChild(e)));
    }
  }
  function Rv(t) {
    fn.D(t), em("dns-prefetch", t, null);
  }
  function Ov(t, e) {
    fn.C(t, e), em("preconnect", t, e);
  }
  function Cv(t, e, n) {
    fn.L(t, e, n);
    var i = $i;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Te(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Te(n.imageSizes) + '"]'))
        : (s += '[href="' + Te(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = Ii(t);
          break;
        case "script":
          o = ta(t);
      }
      je.has(o) ||
        ((t = it(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        je.set(o, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(tl(o))) ||
          (e === "script" && i.querySelector(el(o))) ||
          ((e = i.createElement("link")),
          Jt(e, "link", t),
          Gt(e),
          i.head.appendChild(e)));
    }
  }
  function Vv(t, e) {
    fn.m(t, e);
    var n = $i;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Te(i) + '"][href="' + Te(t) + '"]',
        o = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ta(t);
      }
      if (
        !je.has(o) &&
        ((t = it({ rel: "modulepreload", href: t }, e)),
        je.set(o, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(el(o))) return;
        }
        (i = n.createElement("link")),
          Jt(i, "link", t),
          Gt(i),
          n.head.appendChild(i);
      }
    }
  }
  function jv(t, e, n) {
    fn.S(t, e, n);
    var i = $i;
    if (i && t) {
      var s = xi(i).hoistableStyles,
        o = Ii(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = i.querySelector(tl(o)))) g.loading = 5;
        else {
          (t = it({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = je.get(o)) && ro(t, n);
          var b = (f = i.createElement("link"));
          Gt(b),
            Jt(b, "link", t),
            (b._p = new Promise(function (E, j) {
              (b.onload = E), (b.onerror = j);
            })),
            b.addEventListener("load", function () {
              g.loading |= 1;
            }),
            b.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            js(f, e, i);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: g }),
          s.set(o, f);
      }
    }
  }
  function zv(t, e) {
    fn.X(t, e);
    var n = $i;
    if (n && t) {
      var i = xi(n).hoistableScripts,
        s = ta(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(el(s))),
        o ||
          ((t = it({ src: t, async: !0 }, e)),
          (e = je.get(s)) && oo(t, e),
          (o = n.createElement("script")),
          Gt(o),
          Jt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function _v(t, e) {
    fn.M(t, e);
    var n = $i;
    if (n && t) {
      var i = xi(n).hoistableScripts,
        s = ta(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(el(s))),
        o ||
          ((t = it({ src: t, async: !0, type: "module" }, e)),
          (e = je.get(s)) && oo(t, e),
          (o = n.createElement("script")),
          Gt(o),
          Jt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function nm(t, e, n, i) {
    var s = (s = pn.current) ? Vs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ii(n.href)),
            (n = xi(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ii(n.href);
          var o = xi(s).hoistableStyles,
            f = o.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, f),
              (o = s.querySelector(tl(t))) &&
                !o._p &&
                ((f.instance = o), (f.state.loading = 5)),
              je.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                je.set(t, n),
                o || Nv(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ta(n)),
              (n = xi(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ii(t) {
    return 'href="' + Te(t) + '"';
  }
  function tl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function im(t) {
    return it({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Nv(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Jt(e, "link", n),
        Gt(e),
        t.head.appendChild(e));
  }
  function ta(t) {
    return '[src="' + Te(t) + '"]';
  }
  function el(t) {
    return "script[async]" + t;
  }
  function am(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Te(n.href) + '"]');
          if (i) return (e.instance = i), Gt(i), i;
          var s = it({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Gt(i),
            Jt(i, "style", s),
            js(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Ii(n.href);
          var o = t.querySelector(tl(s));
          if (o) return (e.state.loading |= 4), (e.instance = o), Gt(o), o;
          (i = im(n)),
            (s = je.get(s)) && ro(i, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Gt(o);
          var f = o;
          return (
            (f._p = new Promise(function (g, b) {
              (f.onload = g), (f.onerror = b);
            })),
            Jt(o, "link", i),
            (e.state.loading |= 4),
            js(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ta(n.src)),
            (s = t.querySelector(el(o)))
              ? ((e.instance = s), Gt(s), s)
              : ((i = n),
                (s = je.get(o)) && ((i = it({}, n)), oo(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Gt(s),
                Jt(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), js(i, n.precedence, t));
    return e.instance;
  }
  function js(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        o = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var g = i[f];
      if (g.dataset.precedence === e) o = g;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function ro(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function oo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var zs = null;
  function lm(t, e, n) {
    if (zs === null) {
      var i = new Map(),
        s = (zs = new Map());
      s.set(n, i);
    } else (s = zs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[ya] ||
          o[Ft] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var g = i.get(f);
        g ? g.push(o) : i.set(f, [o]);
      }
    }
    return i;
  }
  function sm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function wv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function um(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var nl = null;
  function Uv() {}
  function Bv(t, e, n) {
    if (nl === null) throw Error(r(475));
    var i = nl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Ii(n.href),
          o = t.querySelector(tl(s));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = _s.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = o),
            Gt(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = im(n)),
          (s = je.get(s)) && ro(n, s),
          (o = o.createElement("link")),
          Gt(o);
        var f = o;
        (f._p = new Promise(function (g, b) {
          (f.onload = g), (f.onerror = b);
        })),
          Jt(o, "link", n),
          (e.instance = o);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = _s.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Lv() {
    if (nl === null) throw Error(r(475));
    var t = nl;
    return (
      t.stylesheets && t.count === 0 && co(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && co(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function _s() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) co(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Ns = null;
  function co(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ns = new Map()),
        e.forEach(Hv, t),
        (Ns = null),
        _s.call(t));
  }
  function Hv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ns.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), Ns.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (o = n.get(f) || i),
        o === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = _s.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var il = {
    $$typeof: C,
    Provider: null,
    Consumer: null,
    _currentValue: ht,
    _currentValue2: ht,
    _threadCount: 0,
  };
  function qv(t, e, n, i, s, o, f, g) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = hu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hu(0)),
      (this.hiddenUpdates = hu(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function rm(t, e, n, i, s, o, f, g, b, E, j, N) {
    return (
      (t = new qv(t, e, n, f, g, b, E, N)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Ce(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = Gu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: i, isDehydrated: n, cache: e }),
      xr(o),
      t
    );
  }
  function om(t) {
    return t ? ((t = zi), t) : zi;
  }
  function cm(t, e, n, i, s, o) {
    (s = om(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Rn(e)),
      (i.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (i.callback = o),
      (n = On(t, i, e)),
      n !== null && (ae(n, t, e), qa(n, t, e));
  }
  function fm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function fo(t, e) {
    fm(t, e), (t = t.alternate) && fm(t, e);
  }
  function hm(t) {
    if (t.tag === 13) {
      var e = Sn(t, 67108864);
      e !== null && ae(e, t, 67108864), fo(t, 67108864);
    }
  }
  var ws = !0;
  function Yv(t, e, n, i) {
    var s = Z.T;
    Z.T = null;
    var o = Q.p;
    try {
      (Q.p = 2), ho(t, e, n, i);
    } finally {
      (Q.p = o), (Z.T = s);
    }
  }
  function Gv(t, e, n, i) {
    var s = Z.T;
    Z.T = null;
    var o = Q.p;
    try {
      (Q.p = 8), ho(t, e, n, i);
    } finally {
      (Q.p = o), (Z.T = s);
    }
  }
  function ho(t, e, n, i) {
    if (ws) {
      var s = mo(i);
      if (s === null) to(t, e, i, Us, n), mm(t, i);
      else if (Zv(s, t, e, n, i)) i.stopPropagation();
      else if ((mm(t, i), e & 4 && -1 < Xv.indexOf(t))) {
        for (; s !== null; ) {
          var o = Ti(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var f = Qn(o.pendingLanes);
                  if (f !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var b = 1 << (31 - ce(f));
                      (g.entanglements[1] |= b), (f &= ~b);
                    }
                    Qe(o), (Rt & 6) === 0 && ((bs = qe() + 500), Wa(0));
                  }
                }
                break;
              case 13:
                (g = Sn(o, 2)), g !== null && ae(g, o, 2), xs(), fo(o, 2);
            }
          if (((o = mo(i)), o === null && to(t, e, i, Us, n), o === s)) break;
          s = o;
        }
        s !== null && i.stopPropagation();
      } else to(t, e, i, null, n);
    }
  }
  function mo(t) {
    return (t = bu(t)), yo(t);
  }
  var Us = null;
  function yo(t) {
    if (((Us = null), (t = Kn(t)), t !== null)) {
      var e = P(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = gt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Us = t), null;
  }
  function dm(t) {
    switch (t) {
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
        switch (Op()) {
          case Uc:
            return 2;
          case Bc:
            return 8;
          case jl:
          case Cp:
            return 32;
          case Lc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var po = !1,
    wn = null,
    Un = null,
    Bn = null,
    al = new Map(),
    ll = new Map(),
    Ln = [],
    Xv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function mm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        Bn = null;
        break;
      case "pointerover":
      case "pointerout":
        al.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(e.pointerId);
    }
  }
  function sl(t, e, n, i, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: o,
          targetContainers: [s],
        }),
        e !== null && ((e = Ti(e)), e !== null && hm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Zv(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (wn = sl(wn, t, e, n, i, s)), !0;
      case "dragenter":
        return (Un = sl(Un, t, e, n, i, s)), !0;
      case "mouseover":
        return (Bn = sl(Bn, t, e, n, i, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return al.set(o, sl(al.get(o) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), ll.set(o, sl(ll.get(o) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function ym(t) {
    var e = Kn(t.target);
    if (e !== null) {
      var n = P(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = gt(n)), e !== null)) {
            (t.blockedOn = e),
              Lp(t.priority, function () {
                if (n.tag === 13) {
                  var i = ye(),
                    s = Sn(n, i);
                  s !== null && ae(s, n, i), fo(n, i);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Bs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = mo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (vu = i), n.target.dispatchEvent(i), (vu = null);
      } else return (e = Ti(n)), e !== null && hm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function pm(t, e, n) {
    Bs(t) && n.delete(e);
  }
  function Qv() {
    (po = !1),
      wn !== null && Bs(wn) && (wn = null),
      Un !== null && Bs(Un) && (Un = null),
      Bn !== null && Bs(Bn) && (Bn = null),
      al.forEach(pm),
      ll.forEach(pm);
  }
  function Ls(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      po ||
        ((po = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Qv)));
  }
  var Hs = null;
  function gm(t) {
    Hs !== t &&
      ((Hs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Hs === t && (Hs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (yo(i || n) === null) continue;
            break;
          }
          var o = Ti(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ar(o, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function ul(t) {
    function e(b) {
      return Ls(b, t);
    }
    wn !== null && Ls(wn, t),
      Un !== null && Ls(Un, t),
      Bn !== null && Ls(Bn, t),
      al.forEach(e),
      ll.forEach(e);
    for (var n = 0; n < Ln.length; n++) {
      var i = Ln[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
      ym(n), n.blockedOn === null && Ln.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          o = n[i + 1],
          f = s[se] || null;
        if (typeof o == "function") f || gm(n);
        else if (f) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (f = o[se] || null))) g = f.formAction;
            else if (yo(s) !== null) continue;
          } else g = f.action;
          typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)),
            gm(n);
        }
      }
  }
  function go(t) {
    this._internalRoot = t;
  }
  (qs.prototype.render = go.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = ye();
      cm(n, i, t, e, null, null);
    }),
    (qs.prototype.unmount = go.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Pi(),
            cm(t.current, 2, null, t, null, null),
            xs(),
            (e[Si] = null);
        }
      });
  function qs(t) {
    this._internalRoot = t;
  }
  qs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Zc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ln.length && e !== 0 && e < Ln[n].priority; n++);
      Ln.splice(n, 0, t), n === 0 && ym(t);
    }
  };
  var vm = l.version;
  if (vm !== "19.0.0") throw Error(r(527, vm, "19.0.0"));
  Q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = U(e)),
      (t = t !== null ? nt(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Kv = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: Kn,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ys.isDisabled && Ys.supportsFiber)
      try {
        (ha = Ys.inject(Kv)), (oe = Ys);
      } catch {}
  }
  return (
    (ol.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = wh,
        o = Uh,
        f = Bh,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (g = e.unstable_transitionCallbacks)),
        (e = rm(t, 1, !1, null, null, n, i, s, o, f, g, null)),
        (t[Si] = e.current),
        Ir(t.nodeType === 8 ? t.parentNode : t),
        new go(e)
      );
    }),
    (ol.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        o = wh,
        f = Uh,
        g = Bh,
        b = null,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (b = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (E = n.formState)),
        (e = rm(t, 1, !0, e, n ?? null, i, s, o, f, g, b, E)),
        (e.context = om(null)),
        (n = e.current),
        (i = ye()),
        (s = Rn(i)),
        (s.callback = null),
        On(n, s, i),
        (e.current.lanes = i),
        ma(e, i),
        Qe(e),
        (t[Si] = e.current),
        Ir(t),
        new qs(e)
      );
    }),
    (ol.version = "19.0.0"),
    ol
  );
}
var Om;
function n1() {
  if (Om) return So.exports;
  Om = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (So.exports = e1()), So.exports;
}
var i1 = n1();
const nc = G.createContext({});
function ic(a) {
  const l = G.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const ac = typeof window < "u",
  P0 = ac ? G.useLayoutEffect : G.useEffect,
  iu = G.createContext(null),
  lc = G.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
class a1 extends G.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (u && l.isPresent && !this.props.isPresent) {
      const r = u.offsetParent,
        c = (r instanceof HTMLElement && r.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = u.offsetHeight || 0),
        (d.width = u.offsetWidth || 0),
        (d.top = u.offsetTop),
        (d.left = u.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function l1({ children: a, isPresent: l, anchorX: u }) {
  const r = G.useId(),
    c = G.useRef(null),
    d = G.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: h } = G.useContext(lc);
  return (
    G.useInsertionEffect(() => {
      const { width: p, height: m, top: y, left: v, right: S } = d.current;
      if (l || !c.current || !p || !m) return;
      const T = u === "left" ? `left: ${v}` : `right: ${S}`;
      c.current.dataset.motionPopId = r;
      const C = document.createElement("style");
      return (
        h && (C.nonce = h),
        document.head.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${T}px !important;
            top: ${y}px !important;
          }
        `),
        () => {
          document.head.removeChild(C);
        }
      );
    }, [l]),
    R.jsx(a1, {
      isPresent: l,
      childRef: c,
      sizeRef: d,
      children: G.cloneElement(a, { ref: c }),
    })
  );
}
const s1 = ({
  children: a,
  initial: l,
  isPresent: u,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: d,
  mode: h,
  anchorX: p,
}) => {
  const m = ic(u1),
    y = G.useId(),
    v = G.useCallback(
      (T) => {
        m.set(T, !0);
        for (const C of m.values()) if (!C) return;
        r && r();
      },
      [m, r]
    ),
    S = G.useMemo(
      () => ({
        id: y,
        initial: l,
        isPresent: u,
        custom: c,
        onExitComplete: v,
        register: (T) => (m.set(T, !1), () => m.delete(T)),
      }),
      d ? [Math.random(), v] : [u, v]
    );
  return (
    G.useMemo(() => {
      m.forEach((T, C) => m.set(C, !1));
    }, [u]),
    G.useEffect(() => {
      !u && !m.size && r && r();
    }, [u]),
    h === "popLayout" &&
      (a = R.jsx(l1, { isPresent: u, anchorX: p, children: a })),
    R.jsx(iu.Provider, { value: S, children: a })
  );
};
function u1() {
  return new Map();
}
function F0(a = !0) {
  const l = G.useContext(iu);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: r, register: c } = l,
    d = G.useId();
  G.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const h = G.useCallback(() => a && r && r(d), [d, r, a]);
  return !u && r ? [!1, h] : [!0];
}
const Gs = (a) => a.key || "";
function Cm(a) {
  const l = [];
  return (
    G.Children.forEach(a, (u) => {
      G.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const ks = ({
    children: a,
    custom: l,
    initial: u = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: h = !1,
    anchorX: p = "left",
  }) => {
    const [m, y] = F0(h),
      v = G.useMemo(() => Cm(a), [a]),
      S = h && !m ? [] : v.map(Gs),
      T = G.useRef(!0),
      C = G.useRef(v),
      _ = ic(() => new Map()),
      [w, H] = G.useState(v),
      [B, Y] = G.useState(v);
    P0(() => {
      (T.current = !1), (C.current = v);
      for (let L = 0; L < B.length; L++) {
        const F = Gs(B[L]);
        S.includes(F) ? _.delete(F) : _.get(F) !== !0 && _.set(F, !1);
      }
    }, [B, S.length, S.join("-")]);
    const X = [];
    if (v !== w) {
      let L = [...v];
      for (let F = 0; F < B.length; F++) {
        const mt = B[F],
          I = Gs(mt);
        S.includes(I) || (L.splice(F, 0, mt), X.push(mt));
      }
      return d === "wait" && X.length && (L = X), Y(Cm(L)), H(v), null;
    }
    const { forceRender: st } = G.useContext(nc);
    return R.jsx(R.Fragment, {
      children: B.map((L) => {
        const F = Gs(L),
          mt = h && !m ? !1 : v === B || S.includes(F),
          I = () => {
            if (_.has(F)) _.set(F, !0);
            else return;
            let Z = !0;
            _.forEach((it) => {
              it || (Z = !1);
            }),
              Z &&
                (st == null || st(),
                Y(C.current),
                h && (y == null || y()),
                r && r());
          };
        return R.jsx(
          s1,
          {
            isPresent: mt,
            initial: !T.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            onExitComplete: mt ? void 0 : I,
            anchorX: p,
            children: L,
          },
          F
        );
      }),
    });
  },
  pe = (a) => a;
let W0 = pe;
const r1 = { useManualTiming: !1 },
  Xs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Vm = { value: null };
function o1(a, l) {
  let u = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 },
    m = 0;
  function y(S) {
    h.has(S) && (v.schedule(S), a()), m++, S(p);
  }
  const v = {
    schedule: (S, T = !1, C = !1) => {
      const w = C && c ? u : r;
      return T && h.add(S), w.has(S) || w.add(S), S;
    },
    cancel: (S) => {
      r.delete(S), h.delete(S);
    },
    process: (S) => {
      if (((p = S), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, r] = [r, u]),
        u.forEach(y),
        l && Vm.value && Vm.value.frameloop[l].push(m),
        (m = 0),
        u.clear(),
        (c = !1),
        d && ((d = !1), v.process(S));
    },
  };
  return v;
}
const c1 = 40;
function $0(a, l) {
  let u = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = Xs.reduce((B, Y) => ((B[Y] = o1(d, l ? Y : void 0)), B), {}),
    {
      read: p,
      resolveKeyframes: m,
      update: y,
      preRender: v,
      render: S,
      postRender: T,
    } = h,
    C = () => {
      const B = performance.now();
      (u = !1),
        (c.delta = r ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, c1), 1)),
        (c.timestamp = B),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        y.process(c),
        v.process(c),
        S.process(c),
        T.process(c),
        (c.isProcessing = !1),
        u && l && ((r = !1), a(C));
    },
    _ = () => {
      (u = !0), (r = !0), c.isProcessing || a(C);
    };
  return {
    schedule: Xs.reduce((B, Y) => {
      const X = h[Y];
      return (
        (B[Y] = (st, L = !1, F = !1) => (u || _(), X.schedule(st, L, F))), B
      );
    }, {}),
    cancel: (B) => {
      for (let Y = 0; Y < Xs.length; Y++) h[Xs[Y]].cancel(B);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: Et,
    cancel: Gn,
    state: Pt,
    steps: Eo,
  } = $0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0),
  I0 = G.createContext({ strict: !1 }),
  jm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  sa = {};
for (const a in jm) sa[a] = { isEnabled: (l) => jm[a].some((u) => !!l[u]) };
function f1(a) {
  for (const l in a) sa[l] = { ...sa[l], ...a[l] };
}
const h1 = new Set([
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
  "viewport",
]);
function Ws(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    h1.has(a)
  );
}
let ty = (a) => !Ws(a);
function d1(a) {
  a && (ty = (l) => (l.startsWith("on") ? !Ws(l) : a(l)));
}
try {
  d1(require("@emotion/is-prop-valid").default);
} catch {}
function m1(a, l, u) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((ty(c) ||
        (u === !0 && Ws(c)) ||
        (!l && !Ws(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
function y1(a) {
  if (typeof Proxy > "u") return a;
  const l = new Map(),
    u = (...r) => a(...r);
  return new Proxy(u, {
    get: (r, c) =>
      c === "create" ? a : (l.has(c) || l.set(c, a(c)), l.get(c)),
  });
}
const au = G.createContext({});
function lu(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function gl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const sc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  uc = ["initial", ...sc];
function su(a) {
  return lu(a.animate) || uc.some((l) => gl(a[l]));
}
function ey(a) {
  return !!(su(a) || a.variants);
}
function p1(a, l) {
  if (su(a)) {
    const { initial: u, animate: r } = a;
    return {
      initial: u === !1 || gl(u) ? u : void 0,
      animate: gl(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function g1(a) {
  const { initial: l, animate: u } = p1(a, G.useContext(au));
  return G.useMemo(() => ({ initial: l, animate: u }), [zm(l), zm(u)]);
}
function zm(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const v1 = Symbol.for("motionComponentSymbol");
function ea(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function b1(a, l, u) {
  return G.useCallback(
    (r) => {
      r && a.onMount && a.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        u && (typeof u == "function" ? u(r) : ea(u) && (u.current = r));
    },
    [l]
  );
}
const { schedule: rc } = $0(queueMicrotask, !1),
  oc = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  S1 = "framerAppearId",
  ny = "data-" + oc(S1),
  iy = G.createContext({});
function T1(a, l, u, r, c) {
  var d, h;
  const { visualElement: p } = G.useContext(au),
    m = G.useContext(I0),
    y = G.useContext(iu),
    v = G.useContext(lc).reducedMotion,
    S = G.useRef(null);
  (r = r || m.renderer),
    !S.current &&
      r &&
      (S.current = r(a, {
        visualState: l,
        parent: p,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: v,
      }));
  const T = S.current,
    C = G.useContext(iy);
  T &&
    !T.projection &&
    c &&
    (T.type === "html" || T.type === "svg") &&
    x1(S.current, u, c, C);
  const _ = G.useRef(!1);
  G.useInsertionEffect(() => {
    T && _.current && T.update(u, y);
  });
  const w = u[ny],
    H = G.useRef(
      !!w &&
        !(
          !((d = window.MotionHandoffIsComplete) === null || d === void 0) &&
          d.call(window, w)
        ) &&
        ((h = window.MotionHasOptimisedAnimation) === null || h === void 0
          ? void 0
          : h.call(window, w))
    );
  return (
    P0(() => {
      T &&
        ((_.current = !0),
        (window.MotionIsMounted = !0),
        T.updateFeatures(),
        rc.render(T.render),
        H.current && T.animationState && T.animationState.animateChanges());
    }),
    G.useEffect(() => {
      T &&
        (!H.current && T.animationState && T.animationState.animateChanges(),
        H.current &&
          (queueMicrotask(() => {
            var B;
            (B = window.MotionHandoffMarkAsComplete) === null ||
              B === void 0 ||
              B.call(window, w);
          }),
          (H.current = !1)));
    }),
    T
  );
}
function x1(a, l, u, r) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: y,
  } = l;
  (a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : ay(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (p && ea(p)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      layoutScroll: m,
      layoutRoot: y,
    });
}
function ay(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : ay(a.parent);
}
function A1({
  preloadedFeatures: a,
  createVisualElement: l,
  useRender: u,
  useVisualState: r,
  Component: c,
}) {
  var d, h;
  a && f1(a);
  function p(y, v) {
    let S;
    const T = { ...G.useContext(lc), ...y, layoutId: E1(y) },
      { isStatic: C } = T,
      _ = g1(y),
      w = r(y, C);
    if (!C && ac) {
      M1();
      const H = D1(T);
      (S = H.MeasureLayout),
        (_.visualElement = T1(c, w, T, l, H.ProjectionNode));
    }
    return R.jsxs(au.Provider, {
      value: _,
      children: [
        S && _.visualElement
          ? R.jsx(S, { visualElement: _.visualElement, ...T })
          : null,
        u(c, y, b1(w, _.visualElement, v), w, C, _.visualElement),
      ],
    });
  }
  p.displayName = `motion.${
    typeof c == "string"
      ? c
      : `create(${
          (h = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !==
            null && h !== void 0
            ? h
            : ""
        })`
  }`;
  const m = G.forwardRef(p);
  return (m[v1] = c), m;
}
function E1({ layoutId: a }) {
  const l = G.useContext(nc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function M1(a, l) {
  G.useContext(I0).strict;
}
function D1(a) {
  const { drag: l, layout: u } = sa;
  if (!l && !u) return {};
  const r = { ...l, ...u };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (u != null && u.isEnabled(a))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const ly = (a) => (l) => typeof l == "string" && l.startsWith(a),
  cc = ly("--"),
  R1 = ly("var(--"),
  fc = (a) => (R1(a) ? O1.test(a.split("/*")[0].trim()) : !1),
  O1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  vl = {};
function C1(a) {
  for (const l in a) (vl[l] = a[l]), cc(l) && (vl[l].isCSSVariable = !0);
}
const oa = [
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
    "skewY",
  ],
  vi = new Set(oa);
function sy(a, { layout: l, layoutId: u }) {
  return (
    vi.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!vl[a] || a === "opacity"))
  );
}
const te = (a) => !!(a && a.getVelocity),
  uy = (a, l) => (l && typeof a == "number" ? l.transform(a) : a),
  yn = (a, l, u) => (u > l ? l : u < a ? a : u),
  ca = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  bl = { ...ca, transform: (a) => yn(0, 1, a) },
  Zs = { ...ca, default: 1 },
  El = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  qn = El("deg"),
  Ke = El("%"),
  et = El("px"),
  V1 = El("vh"),
  j1 = El("vw"),
  _m = {
    ...Ke,
    parse: (a) => Ke.parse(a) / 100,
    transform: (a) => Ke.transform(a * 100),
  },
  z1 = {
    borderWidth: et,
    borderTopWidth: et,
    borderRightWidth: et,
    borderBottomWidth: et,
    borderLeftWidth: et,
    borderRadius: et,
    radius: et,
    borderTopLeftRadius: et,
    borderTopRightRadius: et,
    borderBottomRightRadius: et,
    borderBottomLeftRadius: et,
    width: et,
    maxWidth: et,
    height: et,
    maxHeight: et,
    top: et,
    right: et,
    bottom: et,
    left: et,
    padding: et,
    paddingTop: et,
    paddingRight: et,
    paddingBottom: et,
    paddingLeft: et,
    margin: et,
    marginTop: et,
    marginRight: et,
    marginBottom: et,
    marginLeft: et,
    backgroundPositionX: et,
    backgroundPositionY: et,
  },
  _1 = {
    rotate: qn,
    rotateX: qn,
    rotateY: qn,
    rotateZ: qn,
    scale: Zs,
    scaleX: Zs,
    scaleY: Zs,
    scaleZ: Zs,
    skew: qn,
    skewX: qn,
    skewY: qn,
    distance: et,
    translateX: et,
    translateY: et,
    translateZ: et,
    x: et,
    y: et,
    z: et,
    perspective: et,
    transformPerspective: et,
    opacity: bl,
    originX: _m,
    originY: _m,
    originZ: et,
  },
  Nm = { ...ca, transform: Math.round },
  hc = {
    ...z1,
    ..._1,
    zIndex: Nm,
    size: et,
    fillOpacity: bl,
    strokeOpacity: bl,
    numOctaves: Nm,
  },
  N1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  w1 = oa.length;
function U1(a, l, u) {
  let r = "",
    c = !0;
  for (let d = 0; d < w1; d++) {
    const h = oa[d],
      p = a[h];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (h.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || u)
    ) {
      const y = uy(p, hc[h]);
      if (!m) {
        c = !1;
        const v = N1[h] || h;
        r += `${v}(${y}) `;
      }
      u && (l[h] = y);
    }
  }
  return (r = r.trim()), u ? (r = u(l, c ? "" : r)) : c && (r = "none"), r;
}
function dc(a, l, u) {
  const { style: r, vars: c, transformOrigin: d } = a;
  let h = !1,
    p = !1;
  for (const m in l) {
    const y = l[m];
    if (vi.has(m)) {
      h = !0;
      continue;
    } else if (cc(m)) {
      c[m] = y;
      continue;
    } else {
      const v = uy(y, hc[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = v)) : (r[m] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (r.transform = U1(l, a.transform, u))
        : r.transform && (r.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${m} ${y} ${v}`;
  }
}
const mc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ry(a, l, u) {
  for (const r in l) !te(l[r]) && !sy(r, u) && (a[r] = l[r]);
}
function B1({ transformTemplate: a }, l) {
  return G.useMemo(() => {
    const u = mc();
    return dc(u, l, a), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function L1(a, l) {
  const u = a.style || {},
    r = {};
  return ry(r, u, a), Object.assign(r, B1(a, l)), r;
}
function H1(a, l) {
  const u = {},
    r = L1(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = r),
    u
  );
}
const q1 = [
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
  "view",
];
function yc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(q1.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
const Y1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  G1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function X1(a, l, u = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? Y1 : G1;
  a[d.offset] = et.transform(-r);
  const h = et.transform(l),
    p = et.transform(u);
  a[d.array] = `${h} ${p}`;
}
function wm(a, l, u) {
  return typeof a == "string" ? a : et.transform(l + u * a);
}
function Z1(a, l, u) {
  const r = wm(l, a.x, a.width),
    c = wm(u, a.y, a.height);
  return `${r} ${c}`;
}
function pc(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: r,
    originX: c,
    originY: d,
    pathLength: h,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...y
  },
  v,
  S
) {
  if ((dc(a, y, S), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: T, style: C, dimensions: _ } = a;
  T.transform && (_ && (C.transform = T.transform), delete T.transform),
    _ &&
      (c !== void 0 || d !== void 0 || C.transform) &&
      (C.transformOrigin = Z1(
        _,
        c !== void 0 ? c : 0.5,
        d !== void 0 ? d : 0.5
      )),
    l !== void 0 && (T.x = l),
    u !== void 0 && (T.y = u),
    r !== void 0 && (T.scale = r),
    h !== void 0 && X1(T, h, p, m, !1);
}
const oy = () => ({ ...mc(), attrs: {} }),
  gc = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function Q1(a, l, u, r) {
  const c = G.useMemo(() => {
    const d = oy();
    return (
      pc(d, l, gc(r), a.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    ry(d, a.style, a), (c.style = { ...d, ...c.style });
  }
  return c;
}
function K1(a = !1) {
  return (u, r, c, { latestValues: d }, h) => {
    const m = (yc(u) ? Q1 : H1)(r, d, h, u),
      y = m1(r, typeof u == "string", a),
      v = u !== G.Fragment ? { ...y, ...m, ref: c } : {},
      { children: S } = r,
      T = G.useMemo(() => (te(S) ? S.get() : S), [S]);
    return G.createElement(u, { ...v, children: T });
  };
}
function Um(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((u, r) => {
        (l[0][r] = u.get()), (l[1][r] = u.getVelocity());
      }),
    l
  );
}
function vc(a, l, u, r) {
  if (typeof l == "function") {
    const [c, d] = Um(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = Um(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  return l;
}
const Uo = (a) => Array.isArray(a),
  k1 = (a) => !!(a && typeof a == "object" && a.mix && a.toValue),
  J1 = (a) => (Uo(a) ? a[a.length - 1] || 0 : a);
function Js(a) {
  const l = te(a) ? a.get() : a;
  return k1(l) ? l.toValue() : l;
}
function P1(
  { scrapeMotionValuesFromProps: a, createRenderState: l, onUpdate: u },
  r,
  c,
  d
) {
  const h = { latestValues: F1(r, c, d, a), renderState: l() };
  return (
    u &&
      ((h.onMount = (p) => u({ props: r, current: p, ...h })),
      (h.onUpdate = (p) => u(p))),
    h
  );
}
const cy = (a) => (l, u) => {
  const r = G.useContext(au),
    c = G.useContext(iu),
    d = () => P1(a, l, r, c);
  return u ? d() : ic(d);
};
function F1(a, l, u, r) {
  const c = {},
    d = r(a, {});
  for (const T in d) c[T] = Js(d[T]);
  let { initial: h, animate: p } = a;
  const m = su(a),
    y = ey(a);
  l &&
    y &&
    !m &&
    a.inherit !== !1 &&
    (h === void 0 && (h = l.initial), p === void 0 && (p = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const S = v ? p : h;
  if (S && typeof S != "boolean" && !lu(S)) {
    const T = Array.isArray(S) ? S : [S];
    for (let C = 0; C < T.length; C++) {
      const _ = vc(a, T[C]);
      if (_) {
        const { transitionEnd: w, transition: H, ...B } = _;
        for (const Y in B) {
          let X = B[Y];
          if (Array.isArray(X)) {
            const st = v ? X.length - 1 : 0;
            X = X[st];
          }
          X !== null && (c[Y] = X);
        }
        for (const Y in w) c[Y] = w[Y];
      }
    }
  }
  return c;
}
function bc(a, l, u) {
  var r;
  const { style: c } = a,
    d = {};
  for (const h in c)
    (te(c[h]) ||
      (l.style && te(l.style[h])) ||
      sy(h, a) ||
      ((r = u == null ? void 0 : u.getValue(h)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (d[h] = c[h]);
  return d;
}
const W1 = {
  useVisualState: cy({
    scrapeMotionValuesFromProps: bc,
    createRenderState: mc,
  }),
};
function fy(a, l) {
  try {
    l.dimensions =
      typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
  } catch {
    l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function hy(a, { style: l, vars: u }, r, c) {
  Object.assign(a.style, l, c && c.getProjectionStyles(r));
  for (const d in u) a.style.setProperty(d, u[d]);
}
const dy = new Set([
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
  "lengthAdjust",
]);
function my(a, l, u, r) {
  hy(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute(dy.has(c) ? c : oc(c), l.attrs[c]);
}
function yy(a, l, u) {
  const r = bc(a, l, u);
  for (const c in a)
    if (te(a[c]) || te(l[c])) {
      const d =
        oa.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = a[c];
    }
  return r;
}
const Bm = ["x", "y", "width", "height", "cx", "cy", "r"],
  $1 = {
    useVisualState: cy({
      scrapeMotionValuesFromProps: yy,
      createRenderState: oy,
      onUpdate: ({
        props: a,
        prevProps: l,
        current: u,
        renderState: r,
        latestValues: c,
      }) => {
        if (!u) return;
        let d = !!a.drag;
        if (!d) {
          for (const p in c)
            if (vi.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let h = !l;
        if (l)
          for (let p = 0; p < Bm.length; p++) {
            const m = Bm[p];
            a[m] !== l[m] && (h = !0);
          }
        h &&
          Et.read(() => {
            fy(u, r),
              Et.render(() => {
                pc(r, c, gc(u.tagName), a.transformTemplate), my(u, r);
              });
          });
      },
    }),
  };
function I1(a, l) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(yc(r) ? $1 : W1),
      preloadedFeatures: a,
      useRender: K1(c),
      createVisualElement: l,
      Component: r,
    };
    return A1(h);
  };
}
function Sl(a, l, u) {
  const r = a.getProps();
  return vc(r, l, u !== void 0 ? u : r.custom, a);
}
function Sc(a, l) {
  return a ? a[l] || a.default || a : void 0;
}
const py = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...oa,
]);
function Tc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function xc(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
class Ac {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Tc(this.subscriptions, l), () => xc(this.subscriptions, l);
  }
  notify(l, u, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function gy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
let Ps;
function tb() {
  Ps = void 0;
}
const ke = {
    now: () => (
      Ps === void 0 &&
        ke.set(
          Pt.isProcessing || r1.useManualTiming
            ? Pt.timestamp
            : performance.now()
        ),
      Ps
    ),
    set: (a) => {
      (Ps = a), queueMicrotask(tb);
    },
  },
  Lm = 30,
  eb = (a) => !isNaN(parseFloat(a));
class nb {
  constructor(l, u = {}) {
    (this.version = "12.5.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        const d = ke.now();
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = ke.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = eb(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Ac());
    const r = this.events[l].add(u);
    return l === "change"
      ? () => {
          r(),
            Et.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l, u = !0) {
    !u || !this.passiveEffect
      ? this.updateAndNotify(l, u)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, u, r) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = ke.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Lm
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Lm);
    return gy(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Tl(a, l) {
  return new nb(a, l);
}
function ib(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, Tl(u));
}
function ab(a, l) {
  const u = Sl(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...r };
  for (const h in d) {
    const p = J1(d[h]);
    ib(a, h, p);
  }
}
function lb(a) {
  return !!(te(a) && a.add);
}
function Bo(a, l) {
  const u = a.getValue("willChange");
  if (lb(u)) return u.add(l);
}
function vy(a) {
  return a.props[ny];
}
function Ec(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const sb = Ec(() => window.ScrollTimeline !== void 0);
class ub {
  constructor(l) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = l.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((l) => ("finished" in l ? l.finished : l))
    );
  }
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][l] = u;
  }
  attachTimeline(l, u) {
    const r = this.animations.map((c) => {
      if (sb() && c.attachTimeline) return c.attachTimeline(l);
      if (typeof u == "function") return u(c);
    });
    return () => {
      r.forEach((c, d) => {
        c && c(), this.animations[d].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let u = 0; u < this.animations.length; u++)
      l = Math.max(l, this.animations[u].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class rb extends ub {
  then(l, u) {
    return Promise.all(this.animations).then(l).catch(u);
  }
}
const dn = (a) => a * 1e3,
  mn = (a) => a / 1e3;
function Mc(a) {
  return typeof a == "function";
}
function Hm(a, l) {
  (a.timeline = l), (a.onfinish = null);
}
const Dc = (a) => Array.isArray(a) && typeof a[0] == "number",
  ob = { linearEasing: void 0 };
function cb(a, l) {
  const u = Ec(a);
  return () => {
    var r;
    return (r = ob[l]) !== null && r !== void 0 ? r : u();
  };
}
const $s = cb(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ua = (a, l, u) => {
    const r = l - a;
    return r === 0 ? 1 : (u - a) / r;
  },
  by = (a, l, u = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++) r += a(ua(0, c - 1, d)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Sy(a) {
  return !!(
    (typeof a == "function" && $s()) ||
    !a ||
    (typeof a == "string" && (a in Lo || $s())) ||
    Dc(a) ||
    (Array.isArray(a) && a.every(Sy))
  );
}
const fl = ([a, l, u, r]) => `cubic-bezier(${a}, ${l}, ${u}, ${r})`,
  Lo = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fl([0, 0.65, 0.55, 1]),
    circOut: fl([0.55, 0, 1, 0.45]),
    backIn: fl([0.31, 0.01, 0.66, -0.59]),
    backOut: fl([0.33, 1.53, 0.69, 0.99]),
  };
function Ty(a, l) {
  if (a)
    return typeof a == "function" && $s()
      ? by(a, l)
      : Dc(a)
      ? fl(a)
      : Array.isArray(a)
      ? a.map((u) => Ty(u, l) || Lo.easeOut)
      : Lo[a];
}
const xy = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  fb = 1e-7,
  hb = 12;
function db(a, l, u, r, c) {
  let d,
    h,
    p = 0;
  do (h = l + (u - l) / 2), (d = xy(h, r, c) - a), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > fb && ++p < hb);
  return h;
}
function Ml(a, l, u, r) {
  if (a === l && u === r) return pe;
  const c = (d) => db(d, 0, 1, a, u);
  return (d) => (d === 0 || d === 1 ? d : xy(c(d), l, r));
}
const Ay = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  Ey = (a) => (l) => 1 - a(1 - l),
  My = Ml(0.33, 1.53, 0.69, 0.99),
  Rc = Ey(My),
  Dy = Ay(Rc),
  Ry = (a) =>
    (a *= 2) < 1 ? 0.5 * Rc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Oc = (a) => 1 - Math.sin(Math.acos(a)),
  Oy = Ey(Oc),
  Cy = Ay(Oc),
  Vy = (a) => /^0[^.\s]+$/u.test(a);
function mb(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || Vy(a)
    : !0;
}
const dl = (a) => Math.round(a * 1e5) / 1e5,
  Cc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yb(a) {
  return a == null;
}
const pb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Vc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && pb.test(u) && u.startsWith(a)) ||
      (l && !yb(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  jy = (a, l, u) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, h, p] = r.match(Cc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  gb = (a) => yn(0, 255, a),
  Mo = { ...ca, transform: (a) => Math.round(gb(a)) },
  yi = {
    test: Vc("rgb", "red"),
    parse: jy("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: r = 1 }) =>
      "rgba(" +
      Mo.transform(a) +
      ", " +
      Mo.transform(l) +
      ", " +
      Mo.transform(u) +
      ", " +
      dl(bl.transform(r)) +
      ")",
  };
function vb(a) {
  let l = "",
    u = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Ho = { test: Vc("#"), parse: vb, transform: yi.transform },
  na = {
    test: Vc("hsl", "hue"),
    parse: jy("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Ke.transform(dl(l)) +
      ", " +
      Ke.transform(dl(u)) +
      ", " +
      dl(bl.transform(r)) +
      ")",
  },
  It = {
    test: (a) => yi.test(a) || Ho.test(a) || na.test(a),
    parse: (a) =>
      yi.test(a) ? yi.parse(a) : na.test(a) ? na.parse(a) : Ho.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? yi.transform(a)
        : na.transform(a),
  },
  bb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Sb(a) {
  var l, u;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(Cc)) === null || l === void 0 ? void 0 : l.length) || 0) +
      (((u = a.match(bb)) === null || u === void 0 ? void 0 : u.length) || 0) >
      0
  );
}
const zy = "number",
  _y = "color",
  Tb = "var",
  xb = "var(",
  qm = "${}",
  Ab =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xl(a) {
  const l = a.toString(),
    u = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = l
    .replace(
      Ab,
      (m) => (
        It.test(m)
          ? (r.color.push(d), c.push(_y), u.push(It.parse(m)))
          : m.startsWith(xb)
          ? (r.var.push(d), c.push(Tb), u.push(m))
          : (r.number.push(d), c.push(zy), u.push(parseFloat(m))),
        ++d,
        qm
      )
    )
    .split(qm);
  return { values: u, split: p, indexes: r, types: c };
}
function Ny(a) {
  return xl(a).values;
}
function wy(a) {
  const { split: l, types: u } = xl(a),
    r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const p = u[h];
        p === zy
          ? (d += dl(c[h]))
          : p === _y
          ? (d += It.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const Eb = (a) => (typeof a == "number" ? 0 : a);
function Mb(a) {
  const l = Ny(a);
  return wy(a)(l.map(Eb));
}
const Xn = {
    test: Sb,
    parse: Ny,
    createTransformer: wy,
    getAnimatableNone: Mb,
  },
  Db = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Rb(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = u.match(Cc) || [];
  if (!r) return a;
  const c = u.replace(r, "");
  let d = Db.has(l) ? 1 : 0;
  return r !== u && (d *= 100), l + "(" + d + c + ")";
}
const Ob = /\b([a-z-]*)\(.*?\)/gu,
  qo = {
    ...Xn,
    getAnimatableNone: (a) => {
      const l = a.match(Ob);
      return l ? l.map(Rb).join(" ") : a;
    },
  },
  Cb = {
    ...hc,
    color: It,
    backgroundColor: It,
    outlineColor: It,
    fill: It,
    stroke: It,
    borderColor: It,
    borderTopColor: It,
    borderRightColor: It,
    borderBottomColor: It,
    borderLeftColor: It,
    filter: qo,
    WebkitFilter: qo,
  },
  Uy = (a) => Cb[a];
function By(a, l) {
  let u = Uy(a);
  return (
    u !== qo && (u = Xn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const Vb = new Set(["auto", "none", "0"]);
function jb(a, l, u) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const d = a[r];
    typeof d == "string" && !Vb.has(d) && xl(d).values.length && (c = a[r]),
      r++;
  }
  if (c && u) for (const d of l) a[d] = By(u, c);
}
const pi = (a) => (a * 180) / Math.PI,
  Yo = (a) => {
    const l = pi(Math.atan2(a[1], a[0]));
    return Go(l);
  },
  zb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: Yo,
    rotateZ: Yo,
    skewX: (a) => pi(Math.atan(a[1])),
    skewY: (a) => pi(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  Go = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Ym = Yo,
  Gm = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Xm = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  _b = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Gm,
    scaleY: Xm,
    scale: (a) => (Gm(a) + Xm(a)) / 2,
    rotateX: (a) => Go(pi(Math.atan2(a[6], a[5]))),
    rotateY: (a) => Go(pi(Math.atan2(-a[2], a[0]))),
    rotateZ: Ym,
    rotate: Ym,
    skewX: (a) => pi(Math.atan(a[4])),
    skewY: (a) => pi(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function Zm(a) {
  return a.includes("scale") ? 1 : 0;
}
function Xo(a, l) {
  if (!a || a === "none") return Zm(l);
  const u = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (u) (r = _b), (c = u);
  else {
    const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = zb), (c = p);
  }
  if (!c) return Zm(l);
  const d = r[l],
    h = c[1].split(",").map(wb);
  return typeof d == "function" ? d(h) : h[d];
}
const Nb = (a, l) => {
  const { transform: u = "none" } = getComputedStyle(a);
  return Xo(u, l);
};
function wb(a) {
  return parseFloat(a.trim());
}
const Qm = (a) => a === ca || a === et,
  Ub = new Set(["x", "y", "z"]),
  Bb = oa.filter((a) => !Ub.has(a));
function Lb(a) {
  const l = [];
  return (
    Bb.forEach((u) => {
      const r = a.getValue(u);
      r !== void 0 &&
        (l.push([u, r.get()]), r.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const ra = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => Xo(l, "x"),
  y: (a, { transform: l }) => Xo(l, "y"),
};
ra.translateX = ra.x;
ra.translateY = ra.y;
const gi = new Set();
let Zo = !1,
  Qo = !1;
function Ly() {
  if (Qo) {
    const a = Array.from(gi).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      u = new Map();
    l.forEach((r) => {
      const c = Lb(r);
      c.length && (u.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = u.get(r);
        c &&
          c.forEach(([d, h]) => {
            var p;
            (p = r.getValue(d)) === null || p === void 0 || p.set(h);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Qo = !1), (Zo = !1), gi.forEach((a) => a.complete()), gi.clear();
}
function Hy() {
  gi.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Qo = !0);
  });
}
function Hb() {
  Hy(), Ly();
}
class jc {
  constructor(l, u, r, c, d, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (gi.add(this),
          Zo || ((Zo = !0), Et.read(Hy), Et.resolveKeyframes(Ly)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: r,
      motionValue: c,
    } = this;
    for (let d = 0; d < l.length; d++)
      if (l[d] === null)
        if (d === 0) {
          const h = c == null ? void 0 : c.get(),
            p = l[l.length - 1];
          if (h !== void 0) l[0] = h;
          else if (r && u) {
            const m = r.readValue(u, p);
            m != null && (l[0] = m);
          }
          l[0] === void 0 && (l[0] = p), c && h === void 0 && c.set(l[0]);
        } else l[d] = l[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      gi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), gi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const qy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  qb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Yb(a) {
  const l = qb.exec(a);
  if (!l) return [,];
  const [, u, r, c] = l;
  return [`--${u ?? r}`, c];
}
function Yy(a, l, u = 1) {
  const [r, c] = Yb(a);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return qy(h) ? parseFloat(h) : h;
  }
  return fc(c) ? Yy(c, l, u + 1) : c;
}
const Gy = (a) => (l) => l.test(a),
  Gb = { test: (a) => a === "auto", parse: (a) => a },
  Xy = [ca, et, Ke, qn, j1, V1, Gb],
  Km = (a) => Xy.find(Gy(a));
class Zy extends jc {
  constructor(l, u, r, c, d) {
    super(l, u, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: r } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if (typeof y == "string" && ((y = y.trim()), fc(y))) {
        const v = Yy(y, u.current);
        v !== void 0 && (l[m] = v),
          m === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if ((this.resolveNoneKeyframes(), !py.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      h = Km(c),
      p = Km(d);
    if (h !== p)
      if (Qm(h) && Qm(p))
        for (let m = 0; m < l.length; m++) {
          const y = l[m];
          typeof y == "string" && (l[m] = parseFloat(y));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      r = [];
    for (let c = 0; c < l.length; c++) mb(l[c]) && r.push(c);
    r.length && jb(l, r, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ra[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var l;
    const { element: u, name: r, unresolvedKeyframes: c } = this;
    if (!u || !u.current) return;
    const d = u.getValue(r);
    d && d.jump(this.measuredOrigin, !1);
    const h = c.length - 1,
      p = c[h];
    (c[h] = ra[r](u.measureViewportBox(), window.getComputedStyle(u.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((l = this.removedTransforms) === null || l === void 0) &&
        l.length &&
        this.removedTransforms.forEach(([m, y]) => {
          u.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes();
  }
}
const km = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Xn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function Xb(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function Zb(a, l, u, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    h = km(c, l),
    p = km(d, l);
  return !h || !p ? !1 : Xb(a) || ((u === "spring" || Mc(u)) && r);
}
const Qb = (a) => a !== null;
function uu(a, { repeat: l, repeatType: u = "loop" }, r) {
  const c = a.filter(Qb),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return !d || r === void 0 ? c[d] : r;
}
const Kb = 40;
class Qy {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    ...p
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ke.now()),
      (this.options = {
        autoplay: l,
        delay: u,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        ...p,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Kb
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Hb(), this._resolved;
  }
  onKeyframesResolved(l, u) {
    (this.resolvedAt = ke.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: c,
      velocity: d,
      delay: h,
      onComplete: p,
      onUpdate: m,
      isGenerator: y,
    } = this.options;
    if (!y && !Zb(l, r, c, d))
      if (h) this.options.duration = 0;
      else {
        m && m(uu(l, this.options, u)), p && p(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(l, u);
    v !== !1 &&
      ((this._resolved = { keyframes: l, finalKeyframe: u, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(l, u) {
    return this.currentFinishedPromise.then(l, u);
  }
  flatten() {
    this.options.allowFlatten &&
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Ko = 2e4;
function Ky(a) {
  let l = 0;
  const u = 50;
  let r = a.next(l);
  for (; !r.done && l < Ko; ) (l += u), (r = a.next(l));
  return l >= Ko ? 1 / 0 : l;
}
const Ot = (a, l, u) => a + (l - a) * u;
function Do(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? a + (l - a) * (2 / 3 - u) * 6
      : a
  );
}
function kb({ hue: a, saturation: l, lightness: u, alpha: r }) {
  (a /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const p = u < 0.5 ? u * (1 + l) : u + l - u * l,
      m = 2 * u - p;
    (c = Do(m, p, a + 1 / 3)), (d = Do(m, p, a)), (h = Do(m, p, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function Is(a, l) {
  return (u) => (u > 0 ? l : a);
}
const Ro = (a, l, u) => {
    const r = a * a,
      c = u * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Jb = [Ho, yi, na],
  Pb = (a) => Jb.find((l) => l.test(a));
function Jm(a) {
  const l = Pb(a);
  if (!l) return !1;
  let u = l.parse(a);
  return l === na && (u = kb(u)), u;
}
const Pm = (a, l) => {
    const u = Jm(a),
      r = Jm(l);
    if (!u || !r) return Is(a, l);
    const c = { ...u };
    return (d) => (
      (c.red = Ro(u.red, r.red, d)),
      (c.green = Ro(u.green, r.green, d)),
      (c.blue = Ro(u.blue, r.blue, d)),
      (c.alpha = Ot(u.alpha, r.alpha, d)),
      yi.transform(c)
    );
  },
  Fb = (a, l) => (u) => l(a(u)),
  Dl = (...a) => a.reduce(Fb),
  ko = new Set(["none", "hidden"]);
function Wb(a, l) {
  return ko.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function $b(a, l) {
  return (u) => Ot(a, l, u);
}
function zc(a) {
  return typeof a == "number"
    ? $b
    : typeof a == "string"
    ? fc(a)
      ? Is
      : It.test(a)
      ? Pm
      : eS
    : Array.isArray(a)
    ? ky
    : typeof a == "object"
    ? It.test(a)
      ? Pm
      : Ib
    : Is;
}
function ky(a, l) {
  const u = [...a],
    r = u.length,
    c = a.map((d, h) => zc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++) u[h] = c[h](d);
    return u;
  };
}
function Ib(a, l) {
  const u = { ...a, ...l },
    r = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = zc(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in r) u[d] = r[d](c);
    return u;
  };
}
function tS(a, l) {
  var u;
  const r = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < l.values.length; d++) {
    const h = l.types[d],
      p = a.indexes[h][c[h]],
      m = (u = a.values[p]) !== null && u !== void 0 ? u : 0;
    (r[d] = m), c[h]++;
  }
  return r;
}
const eS = (a, l) => {
  const u = Xn.createTransformer(l),
    r = xl(a),
    c = xl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (ko.has(a) && !c.values.length) || (ko.has(l) && !r.values.length)
      ? Wb(a, l)
      : Dl(ky(tS(r, c), c.values), u)
    : Is(a, l);
};
function Jy(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? Ot(a, l, u)
    : zc(a)(a, l);
}
const nS = 5;
function Py(a, l, u) {
  const r = Math.max(l - nS, 0);
  return gy(u - a(r), l - r);
}
const zt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Fm = 0.001;
function iS({
  duration: a = zt.duration,
  bounce: l = zt.bounce,
  velocity: u = zt.velocity,
  mass: r = zt.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = yn(zt.minDamping, zt.maxDamping, h)),
    (a = yn(zt.minDuration, zt.maxDuration, mn(a))),
    h < 1
      ? ((c = (y) => {
          const v = y * h,
            S = v * a,
            T = v - u,
            C = Jo(y, h),
            _ = Math.exp(-S);
          return Fm - (T / C) * _;
        }),
        (d = (y) => {
          const S = y * h * a,
            T = S * u + u,
            C = Math.pow(h, 2) * Math.pow(y, 2) * a,
            _ = Math.exp(-S),
            w = Jo(Math.pow(y, 2), h);
          return ((-c(y) + Fm > 0 ? -1 : 1) * ((T - C) * _)) / w;
        }))
      : ((c = (y) => {
          const v = Math.exp(-y * a),
            S = (y - u) * a + 1;
          return -0.001 + v * S;
        }),
        (d = (y) => {
          const v = Math.exp(-y * a),
            S = (u - y) * (a * a);
          return v * S;
        }));
  const p = 5 / a,
    m = lS(c, d, p);
  if (((a = dn(a)), isNaN(m)))
    return { stiffness: zt.stiffness, damping: zt.damping, duration: a };
  {
    const y = Math.pow(m, 2) * r;
    return { stiffness: y, damping: h * 2 * Math.sqrt(r * y), duration: a };
  }
}
const aS = 12;
function lS(a, l, u) {
  let r = u;
  for (let c = 1; c < aS; c++) r = r - a(r) / l(r);
  return r;
}
function Jo(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const sS = ["duration", "bounce"],
  uS = ["stiffness", "damping", "mass"];
function Wm(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function rS(a) {
  let l = {
    velocity: zt.velocity,
    stiffness: zt.stiffness,
    damping: zt.damping,
    mass: zt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Wm(a, uS) && Wm(a, sS))
    if (a.visualDuration) {
      const u = a.visualDuration,
        r = (2 * Math.PI) / (u * 1.2),
        c = r * r,
        d = 2 * yn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: zt.mass, stiffness: c, damping: d };
    } else {
      const u = iS(a);
      (l = { ...l, ...u, mass: zt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Fy(a = zt.visualDuration, l = zt.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: r, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: v,
      duration: S,
      velocity: T,
      isResolvedFromDuration: C,
    } = rS({ ...u, velocity: -mn(u.velocity || 0) }),
    _ = T || 0,
    w = y / (2 * Math.sqrt(m * v)),
    H = h - d,
    B = mn(Math.sqrt(m / v)),
    Y = Math.abs(H) < 5;
  r || (r = Y ? zt.restSpeed.granular : zt.restSpeed.default),
    c || (c = Y ? zt.restDelta.granular : zt.restDelta.default);
  let X;
  if (w < 1) {
    const L = Jo(B, w);
    X = (F) => {
      const mt = Math.exp(-w * B * F);
      return (
        h - mt * (((_ + w * B * H) / L) * Math.sin(L * F) + H * Math.cos(L * F))
      );
    };
  } else if (w === 1) X = (L) => h - Math.exp(-B * L) * (H + (_ + B * H) * L);
  else {
    const L = B * Math.sqrt(w * w - 1);
    X = (F) => {
      const mt = Math.exp(-w * B * F),
        I = Math.min(L * F, 300);
      return (
        h - (mt * ((_ + w * B * H) * Math.sinh(I) + L * H * Math.cosh(I))) / L
      );
    };
  }
  const st = {
    calculatedDuration: (C && S) || null,
    next: (L) => {
      const F = X(L);
      if (C) p.done = L >= S;
      else {
        let mt = 0;
        w < 1 && (mt = L === 0 ? dn(_) : Py(X, L, F));
        const I = Math.abs(mt) <= r,
          Z = Math.abs(h - F) <= c;
        p.done = I && Z;
      }
      return (p.value = p.done ? h : F), p;
    },
    toString: () => {
      const L = Math.min(Ky(st), Ko),
        F = by((mt) => st.next(L * mt).value, L, 30);
      return L + "ms " + F;
    },
  };
  return st;
}
function $m({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: p,
  max: m,
  restDelta: y = 0.5,
  restSpeed: v,
}) {
  const S = a[0],
    T = { done: !1, value: S },
    C = (I) => (p !== void 0 && I < p) || (m !== void 0 && I > m),
    _ = (I) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - I) < Math.abs(m - I)
        ? p
        : m;
  let w = u * l;
  const H = S + w,
    B = h === void 0 ? H : h(H);
  B !== H && (w = B - S);
  const Y = (I) => -w * Math.exp(-I / r),
    X = (I) => B + Y(I),
    st = (I) => {
      const Z = Y(I),
        it = X(I);
      (T.done = Math.abs(Z) <= y), (T.value = T.done ? B : it);
    };
  let L, F;
  const mt = (I) => {
    C(T.value) &&
      ((L = I),
      (F = Fy({
        keyframes: [T.value, _(T.value)],
        velocity: Py(X, I, T.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: v,
      })));
  };
  return (
    mt(0),
    {
      calculatedDuration: null,
      next: (I) => {
        let Z = !1;
        return (
          !F && L === void 0 && ((Z = !0), st(I), mt(I)),
          L !== void 0 && I >= L ? F.next(I - L) : (!Z && st(I), T)
        );
      },
    }
  );
}
const oS = Ml(0.42, 0, 1, 1),
  cS = Ml(0, 0, 0.58, 1),
  Wy = Ml(0.42, 0, 0.58, 1),
  fS = (a) => Array.isArray(a) && typeof a[0] != "number",
  hS = {
    linear: pe,
    easeIn: oS,
    easeInOut: Wy,
    easeOut: cS,
    circIn: Oc,
    circInOut: Cy,
    circOut: Oy,
    backIn: Rc,
    backInOut: Dy,
    backOut: My,
    anticipate: Ry,
  },
  Im = (a) => {
    if (Dc(a)) {
      W0(a.length === 4);
      const [l, u, r, c] = a;
      return Ml(l, u, r, c);
    } else if (typeof a == "string") return hS[a];
    return a;
  };
function dS(a, l, u) {
  const r = [],
    c = u || Jy,
    d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let p = c(a[h], a[h + 1]);
    if (l) {
      const m = Array.isArray(l) ? l[h] || pe : l;
      p = Dl(m, p);
    }
    r.push(p);
  }
  return r;
}
function mS(a, l, { clamp: u = !0, ease: r, mixer: c } = {}) {
  const d = a.length;
  if ((W0(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const p = dS(l, r, c),
    m = p.length,
    y = (v) => {
      if (h && v < a[0]) return l[0];
      let S = 0;
      if (m > 1) for (; S < a.length - 2 && !(v < a[S + 1]); S++);
      const T = ua(a[S], a[S + 1], v);
      return p[S](T);
    };
  return u ? (v) => y(yn(a[0], a[d - 1], v)) : y;
}
function yS(a, l) {
  const u = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = ua(0, l, r);
    a.push(Ot(u, 1, c));
  }
}
function pS(a) {
  const l = [0];
  return yS(l, a.length - 1), l;
}
function gS(a, l) {
  return a.map((u) => u * l);
}
function vS(a, l) {
  return a.map(() => l || Wy).splice(0, a.length - 1);
}
function tu({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: r = "easeInOut",
}) {
  const c = fS(r) ? r.map(Im) : Im(r),
    d = { done: !1, value: l[0] },
    h = gS(u && u.length === l.length ? u : pS(l), a),
    p = mS(h, l, { ease: Array.isArray(c) ? c : vS(l, c) });
  return {
    calculatedDuration: a,
    next: (m) => ((d.value = p(m)), (d.done = m >= a), d),
  };
}
const bS = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: () => Et.update(l, !0),
      stop: () => Gn(l),
      now: () => (Pt.isProcessing ? Pt.timestamp : ke.now()),
    };
  },
  SS = { decay: $m, inertia: $m, tween: tu, keyframes: tu, spring: Fy },
  TS = (a) => a / 100;
class _c extends Qy {
  constructor(l) {
    super(l),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: m } = this.options;
        m && m();
      });
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || jc,
      p = (m, y) => this.onKeyframesResolved(m, y);
    (this.resolver = new h(d, p, u, r, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(l) {
    const {
        type: u = "keyframes",
        repeat: r = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = this.options,
      p = Mc(u) ? u : SS[u] || tu;
    let m, y;
    p !== tu &&
      typeof l[0] != "number" &&
      ((m = Dl(TS, Jy(l[0], l[1]))), (l = [0, 100]));
    const v = p({ ...this.options, keyframes: l });
    d === "mirror" &&
      (y = p({ ...this.options, keyframes: [...l].reverse(), velocity: -h })),
      v.calculatedDuration === null && (v.calculatedDuration = Ky(v));
    const { calculatedDuration: S } = v,
      T = S + c,
      C = T * (r + 1) - c;
    return {
      generator: v,
      mirroredGenerator: y,
      mapPercentToKeyframes: m,
      calculatedDuration: S,
      resolvedDuration: T,
      totalDuration: C,
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !l
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(l, u = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: I } = this.options;
      return { done: !0, value: I[I.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: h,
      mapPercentToKeyframes: p,
      keyframes: m,
      calculatedDuration: y,
      totalDuration: v,
      resolvedDuration: S,
    } = r;
    if (this.startTime === null) return d.next(0);
    const {
      delay: T,
      repeat: C,
      repeatType: _,
      repeatDelay: w,
      onUpdate: H,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - v / this.speed, this.startTime)),
      u
        ? (this.currentTime = l)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(l - this.startTime) * this.speed);
    const B = this.currentTime - T * (this.speed >= 0 ? 1 : -1),
      Y = this.speed >= 0 ? B < 0 : B > v;
    (this.currentTime = Math.max(B, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let X = this.currentTime,
      st = d;
    if (C) {
      const I = Math.min(this.currentTime, v) / S;
      let Z = Math.floor(I),
        it = I % 1;
      !it && I >= 1 && (it = 1),
        it === 1 && Z--,
        (Z = Math.min(Z, C + 1)),
        !!(Z % 2) &&
          (_ === "reverse"
            ? ((it = 1 - it), w && (it -= w / S))
            : _ === "mirror" && (st = h)),
        (X = yn(0, 1, it) * S);
    }
    const L = Y ? { done: !1, value: m[0] } : st.next(X);
    p && (L.value = p(L.value));
    let { done: F } = L;
    !Y &&
      y !== null &&
      (F = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const mt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && F));
    return (
      mt && c !== void 0 && (L.value = uu(m, this.options, c)),
      H && H(L.value),
      mt && this.finish(),
      L
    );
  }
  get duration() {
    const { resolved: l } = this;
    return l ? mn(l.calculatedDuration) : 0;
  }
  get time() {
    return mn(this.currentTime);
  }
  set time(l) {
    (l = dn(l)),
      (this.currentTime = l),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: l = bS, onPlay: u, startTime: r } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), u && u();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = c)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var l;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (l = this.currentTime) !== null && l !== void 0 ? l : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: l } = this.options;
    l && l();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
}
const xS = new Set(["opacity", "clipPath", "filter", "transform"]);
function AS(
  a,
  l,
  u,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {}
) {
  const y = { [l]: u };
  m && (y.offset = m);
  const v = Ty(p, c);
  return (
    Array.isArray(v) && (y.easing = v),
    a.animate(y, {
      delay: r,
      duration: c,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
    })
  );
}
const ES = Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  eu = 10,
  MS = 2e4;
function DS(a) {
  return Mc(a.type) || a.type === "spring" || !Sy(a.ease);
}
function RS(a, l) {
  const u = new _c({
    ...l,
    keyframes: a,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: a[0] };
  const c = [];
  let d = 0;
  for (; !r.done && d < MS; ) (r = u.sample(d)), c.push(r.value), (d += eu);
  return { times: void 0, keyframes: c, duration: d - eu, ease: "linear" };
}
const $y = { anticipate: Ry, backInOut: Dy, circInOut: Cy };
function OS(a) {
  return a in $y;
}
class t0 extends Qy {
  constructor(l) {
    super(l);
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options;
    (this.resolver = new Zy(
      d,
      (h, p) => this.onKeyframesResolved(h, p),
      u,
      r,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(l, u) {
    let {
      duration: r = 300,
      times: c,
      ease: d,
      type: h,
      motionValue: p,
      name: m,
      startTime: y,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if (
      (typeof d == "string" && $s() && OS(d) && (d = $y[d]), DS(this.options))
    ) {
      const {
          onComplete: S,
          onUpdate: T,
          motionValue: C,
          element: _,
          ...w
        } = this.options,
        H = RS(l, w);
      (l = H.keyframes),
        l.length === 1 && (l[1] = l[0]),
        (r = H.duration),
        (c = H.times),
        (d = H.ease),
        (h = "keyframes");
    }
    const v = AS(p.owner.current, m, l, {
      ...this.options,
      duration: r,
      times: c,
      ease: d,
    });
    return (
      (v.startTime = y ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Hm(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: S } = this.options;
            p.set(uu(l, this.options, u)),
              S && S(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: r, times: c, type: h, ease: d, keyframes: l }
    );
  }
  get duration() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { duration: u } = l;
    return mn(u);
  }
  get time() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { animation: u } = l;
    return mn(u.currentTime || 0);
  }
  set time(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.currentTime = dn(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l) return 1;
    const { animation: u } = l;
    return u.playbackRate;
  }
  set speed(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l) return "idle";
    const { animation: u } = l;
    return u.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l) return null;
    const { animation: u } = l;
    return u.startTime;
  }
  attachTimeline(l) {
    if (!this._resolved) this.pendingTimeline = l;
    else {
      const { resolved: u } = this;
      if (!u) return pe;
      const { animation: r } = u;
      Hm(r, l);
    }
    return pe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.playState === "finished" && this.updateFinishedPromise(), u.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l) return;
    const {
      animation: u,
      keyframes: r,
      duration: c,
      type: d,
      ease: h,
      times: p,
    } = l;
    if (u.playState === "idle" || u.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: y,
          onUpdate: v,
          onComplete: S,
          element: T,
          ...C
        } = this.options,
        _ = new _c({
          ...C,
          keyframes: r,
          duration: c,
          type: d,
          ease: h,
          times: p,
          isGenerator: !0,
        }),
        w = dn(this.time);
      y.setWithVelocity(_.sample(w - eu).value, _.sample(w).value, eu);
    }
    const { onStop: m } = this.options;
    m && m(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const {
      motionValue: u,
      name: r,
      repeatDelay: c,
      repeatType: d,
      damping: h,
      type: p,
    } = l;
    if (!u || !u.owner || !(u.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: y } = u.owner.getProps();
    return (
      ES() &&
      r &&
      xS.has(r) &&
      !m &&
      !y &&
      !c &&
      d !== "mirror" &&
      h !== 0 &&
      p !== "inertia"
    );
  }
}
const CS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  VS = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jS = { type: "keyframes", duration: 0.8 },
  zS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _S = (a, { keyframes: l }) =>
    l.length > 2
      ? jS
      : vi.has(a)
      ? a.startsWith("scale")
        ? VS(l[1])
        : CS
      : zS;
function NS({
  when: a,
  delay: l,
  delayChildren: u,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: p,
  from: m,
  elapsed: y,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Nc =
  (a, l, u, r = {}, c, d) =>
  (h) => {
    const p = Sc(r, a) || {},
      m = p.delay || r.delay || 0;
    let { elapsed: y = 0 } = r;
    y = y - dn(m);
    let v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (T) => {
        l.set(T), p.onUpdate && p.onUpdate(T);
      },
      onComplete: () => {
        h(), p.onComplete && p.onComplete();
      },
      name: a,
      motionValue: l,
      element: d ? void 0 : c,
    };
    NS(p) || (v = { ...v, ..._S(a, v) }),
      v.duration && (v.duration = dn(v.duration)),
      v.repeatDelay && (v.repeatDelay = dn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let S = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (S = !0)),
      (v.allowFlatten = !p.type && !p.ease),
      S && !d && l.get() !== void 0)
    ) {
      const T = uu(v.keyframes, p);
      if (T !== void 0)
        return (
          Et.update(() => {
            v.onUpdate(T), v.onComplete();
          }),
          new rb([])
        );
    }
    return !d && t0.supports(v) ? new t0(v) : new _c(v);
  };
function wS({ protectedKeys: a, needsAnimating: l }, u) {
  const r = a.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), r;
}
function Iy(a, l, { delay: u = 0, transitionOverride: r, type: c } = {}) {
  var d;
  let { transition: h = a.getDefaultTransition(), transitionEnd: p, ...m } = l;
  r && (h = r);
  const y = [],
    v = c && a.animationState && a.animationState.getState()[c];
  for (const S in m) {
    const T = a.getValue(
        S,
        (d = a.latestValues[S]) !== null && d !== void 0 ? d : null
      ),
      C = m[S];
    if (C === void 0 || (v && wS(v, S))) continue;
    const _ = { delay: u, ...Sc(h || {}, S) };
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const B = vy(a);
      if (B) {
        const Y = window.MotionHandoffAnimation(B, S, Et);
        Y !== null && ((_.startTime = Y), (w = !0));
      }
    }
    Bo(a, S),
      T.start(
        Nc(S, T, C, a.shouldReduceMotion && py.has(S) ? { type: !1 } : _, a, w)
      );
    const H = T.animation;
    H && y.push(H);
  }
  return (
    p &&
      Promise.all(y).then(() => {
        Et.update(() => {
          p && ab(a, p);
        });
      }),
    y
  );
}
function Po(a, l, u = {}) {
  var r;
  const c = Sl(
    a,
    l,
    u.type === "exit"
      ? (r = a.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: d = a.getDefaultTransition() || {} } = c || {};
  u.transitionOverride && (d = u.transitionOverride);
  const h = c ? () => Promise.all(Iy(a, c, u)) : () => Promise.resolve(),
    p =
      a.variantChildren && a.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: S,
              staggerDirection: T,
            } = d;
            return US(a, l, v + y, S, T, u);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [y, v] = m === "beforeChildren" ? [h, p] : [p, h];
    return y().then(() => v());
  } else return Promise.all([h(), p(u.delay)]);
}
function US(a, l, u = 0, r = 0, c = 1, d) {
  const h = [],
    p = (a.variantChildren.size - 1) * r,
    m = c === 1 ? (y = 0) => y * r : (y = 0) => p - y * r;
  return (
    Array.from(a.variantChildren)
      .sort(BS)
      .forEach((y, v) => {
        y.notify("AnimationStart", l),
          h.push(
            Po(y, l, { ...d, delay: u + m(v) }).then(() =>
              y.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(h)
  );
}
function BS(a, l) {
  return a.sortNodePosition(l);
}
function LS(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => Po(a, d, u));
    r = Promise.all(c);
  } else if (typeof l == "string") r = Po(a, l, u);
  else {
    const c = typeof l == "function" ? Sl(a, l, u.custom) : l;
    r = Promise.all(Iy(a, c, u));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function tp(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let r = 0; r < u; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const HS = uc.length;
function ep(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? ep(a.parent) || {} : {};
    return a.props.initial !== void 0 && (u.initial = a.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < HS; u++) {
    const r = uc[u],
      c = a.props[r];
    (gl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const qS = [...sc].reverse(),
  YS = sc.length;
function GS(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: r }) => LS(a, u, r)));
}
function XS(a) {
  let l = GS(a),
    u = e0(),
    r = !0;
  const c = (m) => (y, v) => {
    var S;
    const T = Sl(
      a,
      v,
      m === "exit"
        ? (S = a.presenceContext) === null || S === void 0
          ? void 0
          : S.custom
        : void 0
    );
    if (T) {
      const { transition: C, transitionEnd: _, ...w } = T;
      y = { ...y, ...w, ..._ };
    }
    return y;
  };
  function d(m) {
    l = m(a);
  }
  function h(m) {
    const { props: y } = a,
      v = ep(a.parent) || {},
      S = [],
      T = new Set();
    let C = {},
      _ = 1 / 0;
    for (let H = 0; H < YS; H++) {
      const B = qS[H],
        Y = u[B],
        X = y[B] !== void 0 ? y[B] : v[B],
        st = gl(X),
        L = B === m ? Y.isActive : null;
      L === !1 && (_ = H);
      let F = X === v[B] && X !== y[B] && st;
      if (
        (F && r && a.manuallyAnimateOnMount && (F = !1),
        (Y.protectedKeys = { ...C }),
        (!Y.isActive && L === null) ||
          (!X && !Y.prevProp) ||
          lu(X) ||
          typeof X == "boolean")
      )
        continue;
      const mt = ZS(Y.prevProp, X);
      let I = mt || (B === m && Y.isActive && !F && st) || (H > _ && st),
        Z = !1;
      const it = Array.isArray(X) ? X : [X];
      let Ht = it.reduce(c(B), {});
      L === !1 && (Ht = {});
      const { prevResolvedValues: ge = {} } = Y,
        ve = { ...ge, ...Ht },
        be = (J) => {
          (I = !0),
            T.has(J) && ((Z = !0), T.delete(J)),
            (Y.needsAnimating[J] = !0);
          const P = a.getValue(J);
          P && (P.liveStyle = !1);
        };
      for (const J in ve) {
        const P = Ht[J],
          gt = ge[J];
        if (C.hasOwnProperty(J)) continue;
        let x = !1;
        Uo(P) && Uo(gt) ? (x = !tp(P, gt)) : (x = P !== gt),
          x
            ? P != null
              ? be(J)
              : T.add(J)
            : P !== void 0 && T.has(J)
            ? be(J)
            : (Y.protectedKeys[J] = !0);
      }
      (Y.prevProp = X),
        (Y.prevResolvedValues = Ht),
        Y.isActive && (C = { ...C, ...Ht }),
        r && a.blockInitialAnimation && (I = !1),
        I &&
          (!(F && mt) || Z) &&
          S.push(...it.map((J) => ({ animation: J, options: { type: B } })));
    }
    if (T.size) {
      const H = {};
      if (typeof y.initial != "boolean") {
        const B = Sl(a, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        B && B.transition && (H.transition = B.transition);
      }
      T.forEach((B) => {
        const Y = a.getBaseTarget(B),
          X = a.getValue(B);
        X && (X.liveStyle = !0), (H[B] = Y ?? null);
      }),
        S.push({ animation: H });
    }
    let w = !!S.length;
    return (
      r &&
        (y.initial === !1 || y.initial === y.animate) &&
        !a.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? l(S) : Promise.resolve()
    );
  }
  function p(m, y) {
    var v;
    if (u[m].isActive === y) return Promise.resolve();
    (v = a.variantChildren) === null ||
      v === void 0 ||
      v.forEach((T) => {
        var C;
        return (C = T.animationState) === null || C === void 0
          ? void 0
          : C.setActive(m, y);
      }),
      (u[m].isActive = y);
    const S = h(m);
    for (const T in u) u[T].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = e0()), (r = !0);
    },
  };
}
function ZS(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !tp(l, a) : !1;
}
function di(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function e0() {
  return {
    animate: di(!0),
    whileInView: di(),
    whileHover: di(),
    whileTap: di(),
    whileDrag: di(),
    whileFocus: di(),
    exit: di(),
  };
}
class Zn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class QS extends Zn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = XS(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    lu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) === null || l === void 0 || l.call(this);
  }
}
let KS = 0;
class kS extends Zn {
  constructor() {
    super(...arguments), (this.id = KS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const JS = { animation: { Feature: QS }, exit: { Feature: kS } },
  Le = { x: !1, y: !1 };
function np() {
  return Le.x || Le.y;
}
function PS(a) {
  return a === "x" || a === "y"
    ? Le[a]
      ? null
      : ((Le[a] = !0),
        () => {
          Le[a] = !1;
        })
    : Le.x || Le.y
    ? null
    : ((Le.x = Le.y = !0),
      () => {
        Le.x = Le.y = !1;
      });
}
function Al(a, l, u, r = { passive: !0 }) {
  return a.addEventListener(l, u, r), () => a.removeEventListener(l, u);
}
const wc = (a) =>
  a.pointerType === "mouse"
    ? typeof a.button != "number" || a.button <= 0
    : a.isPrimary !== !1;
function Rl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const FS = (a) => (l) => wc(l) && a(l, Rl(l));
function ml(a, l, u, r) {
  return Al(a, l, FS(u), r);
}
function ip({ top: a, left: l, right: u, bottom: r }) {
  return { x: { min: l, max: u }, y: { min: a, max: r } };
}
function WS({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function $S(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: r.y, right: r.x };
}
const ap = 1e-4,
  IS = 1 - ap,
  t2 = 1 + ap,
  lp = 0.01,
  e2 = 0 - lp,
  n2 = 0 + lp;
function le(a) {
  return a.max - a.min;
}
function i2(a, l, u) {
  return Math.abs(a - l) <= u;
}
function n0(a, l, u, r = 0.5) {
  (a.origin = r),
    (a.originPoint = Ot(l.min, l.max, a.origin)),
    (a.scale = le(u) / le(l)),
    (a.translate = Ot(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= IS && a.scale <= t2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= e2 && a.translate <= n2) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function yl(a, l, u, r) {
  n0(a.x, l.x, u.x, r ? r.originX : void 0),
    n0(a.y, l.y, u.y, r ? r.originY : void 0);
}
function i0(a, l, u) {
  (a.min = u.min + l.min), (a.max = a.min + le(l));
}
function a2(a, l, u) {
  i0(a.x, l.x, u.x), i0(a.y, l.y, u.y);
}
function a0(a, l, u) {
  (a.min = l.min - u.min), (a.max = a.min + le(l));
}
function pl(a, l, u) {
  a0(a.x, l.x, u.x), a0(a.y, l.y, u.y);
}
const l0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ia = () => ({ x: l0(), y: l0() }),
  s0 = () => ({ min: 0, max: 0 }),
  Nt = () => ({ x: s0(), y: s0() });
function _e(a) {
  return [a("x"), a("y")];
}
function Oo(a) {
  return a === void 0 || a === 1;
}
function Fo({ scale: a, scaleX: l, scaleY: u }) {
  return !Oo(a) || !Oo(l) || !Oo(u);
}
function mi(a) {
  return (
    Fo(a) ||
    sp(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function sp(a) {
  return u0(a.x) || u0(a.y);
}
function u0(a) {
  return a && a !== "0%";
}
function nu(a, l, u) {
  const r = a - u,
    c = l * r;
  return u + c;
}
function r0(a, l, u, r, c) {
  return c !== void 0 && (a = nu(a, c, r)), nu(a, u, r) + l;
}
function Wo(a, l = 0, u = 1, r, c) {
  (a.min = r0(a.min, l, u, r, c)), (a.max = r0(a.max, l, u, r, c));
}
function up(a, { x: l, y: u }) {
  Wo(a.x, l.translate, l.scale, l.originPoint),
    Wo(a.y, u.translate, u.scale, u.originPoint);
}
const o0 = 0.999999999999,
  c0 = 1.0000000000001;
function l2(a, l, u, r = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let p = 0; p < c; p++) {
    (d = u[p]), (h = d.projectionDelta);
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        la(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), up(a, h)),
      r && mi(d.latestValues) && la(a, d.latestValues));
  }
  l.x < c0 && l.x > o0 && (l.x = 1), l.y < c0 && l.y > o0 && (l.y = 1);
}
function aa(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function f0(a, l, u, r, c = 0.5) {
  const d = Ot(a.min, a.max, c);
  Wo(a, l, u, d, r);
}
function la(a, l) {
  f0(a.x, l.x, l.scaleX, l.scale, l.originX),
    f0(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function rp(a, l) {
  return ip($S(a.getBoundingClientRect(), l));
}
function s2(a, l, u) {
  const r = rp(a, u),
    { scroll: c } = l;
  return c && (aa(r.x, c.offset.x), aa(r.y, c.offset.y)), r;
}
const op = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  h0 = (a, l) => Math.abs(a - l);
function u2(a, l) {
  const u = h0(a.x, l.x),
    r = h0(a.y, l.y);
  return Math.sqrt(u ** 2 + r ** 2);
}
class cp {
  constructor(
    l,
    u,
    { transformPagePoint: r, contextWindow: c, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const S = Vo(this.lastMoveEventInfo, this.history),
          T = this.startEvent !== null,
          C = u2(S.offset, { x: 0, y: 0 }) >= 3;
        if (!T && !C) return;
        const { point: _ } = S,
          { timestamp: w } = Pt;
        this.history.push({ ..._, timestamp: w });
        const { onStart: H, onMove: B } = this.handlers;
        T ||
          (H && H(this.lastMoveEvent, S),
          (this.startEvent = this.lastMoveEvent)),
          B && B(this.lastMoveEvent, S);
      }),
      (this.handlePointerMove = (S, T) => {
        (this.lastMoveEvent = S),
          (this.lastMoveEventInfo = Co(T, this.transformPagePoint)),
          Et.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (S, T) => {
        this.end();
        const { onEnd: C, onSessionEnd: _, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const H = Vo(
          S.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Co(T, this.transformPagePoint),
          this.history
        );
        this.startEvent && C && C(S, H), _ && _(S, H);
      }),
      !wc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = r),
      (this.contextWindow = c || window);
    const h = Rl(l),
      p = Co(h, this.transformPagePoint),
      { point: m } = p,
      { timestamp: y } = Pt;
    this.history = [{ ...m, timestamp: y }];
    const { onSessionStart: v } = u;
    v && v(l, Vo(p, this.history)),
      (this.removeListeners = Dl(
        ml(this.contextWindow, "pointermove", this.handlePointerMove),
        ml(this.contextWindow, "pointerup", this.handlePointerUp),
        ml(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
  }
}
function Co(a, l) {
  return l ? { point: l(a.point) } : a;
}
function d0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Vo({ point: a }, l) {
  return {
    point: a,
    delta: d0(a, fp(l)),
    offset: d0(a, r2(l)),
    velocity: o2(l, 0.1),
  };
}
function r2(a) {
  return a[0];
}
function fp(a) {
  return a[a.length - 1];
}
function o2(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    r = null;
  const c = fp(a);
  for (; u >= 0 && ((r = a[u]), !(c.timestamp - r.timestamp > dn(l))); ) u--;
  if (!r) return { x: 0, y: 0 };
  const d = mn(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function c2(a, { min: l, max: u }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? Ot(l, a, r.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = r ? Ot(u, a, r.max) : Math.min(a, u)),
    a
  );
}
function m0(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function f2(a, { top: l, left: u, bottom: r, right: c }) {
  return { x: m0(a.x, u, c), y: m0(a.y, l, r) };
}
function y0(a, l) {
  let u = l.min - a.min,
    r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([u, r] = [r, u]), { min: u, max: r };
}
function h2(a, l) {
  return { x: y0(a.x, l.x), y: y0(a.y, l.y) };
}
function d2(a, l) {
  let u = 0.5;
  const r = le(a),
    c = le(l);
  return (
    c > r
      ? (u = ua(l.min, l.max - r, a.min))
      : r > c && (u = ua(a.min, a.max - c, l.min)),
    yn(0, 1, u)
  );
}
function m2(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const $o = 0.35;
function y2(a = $o) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = $o),
    { x: p0(a, "left", "right"), y: p0(a, "top", "bottom") }
  );
}
function p0(a, l, u) {
  return { min: g0(a, l), max: g0(a, u) };
}
function g0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const p2 = new WeakMap();
class g2 {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Nt()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: S } = this.getProps();
        S ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(Rl(v).point);
      },
      d = (v, S) => {
        const { drag: T, dragPropagation: C, onDragStart: _ } = this.getProps();
        if (
          T &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = PS(T)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((H) => {
            let B = this.getAxisMotionValue(H).get() || 0;
            if (Ke.test(B)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const X = Y.layout.layoutBox[H];
                X && (B = le(X) * (parseFloat(B) / 100));
              }
            }
            this.originPoint[H] = B;
          }),
          _ && Et.postRender(() => _(v, S)),
          Bo(this.visualElement, "transform");
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      h = (v, S) => {
        const {
          dragPropagation: T,
          dragDirectionLock: C,
          onDirectionLock: _,
          onDrag: w,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: H } = S;
        if (C && this.currentDirection === null) {
          (this.currentDirection = v2(H)),
            this.currentDirection !== null && _ && _(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, H),
          this.updateAxis("y", S.point, H),
          this.visualElement.render(),
          w && w(v, S);
      },
      p = (v, S) => this.stop(v, S),
      m = () =>
        _e((v) => {
          var S;
          return (
            this.getAnimationState(v) === "paused" &&
            ((S = this.getAxisMotionValue(v).animation) === null || S === void 0
              ? void 0
              : S.play())
          );
        }),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new cp(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        contextWindow: op(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = u;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && Et.postRender(() => d(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, r) {
    const { drag: c } = this.getProps();
    if (!r || !Qs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (h = c2(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: u, dragElastic: r } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (l = this.visualElement.projection) === null || l === void 0
          ? void 0
          : l.layout,
      d = this.constraints;
    u && ea(u)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : u && c
      ? (this.constraints = f2(c.layoutBox, u))
      : (this.constraints = !1),
      (this.elastic = y2(r)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = m2(c.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !ea(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = s2(r, c.root, this.visualElement.getTransformPagePoint());
    let h = h2(c.layout.layoutBox, d);
    if (u) {
      const p = u(WS(h));
      (this.hasMutatedConstraints = !!p), p && (h = ip(p));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      y = _e((v) => {
        if (!Qs(v, u, this.currentDirection)) return;
        let S = (m && m[v]) || {};
        h && (S = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          C = c ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: T,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...S,
          };
        return this.startAxisValueAnimation(v, _);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(l, u) {
    const r = this.getAxisMotionValue(l);
    return (
      Bo(this.visualElement, l), r.start(Nc(l, r, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    _e((l) => {
      var u;
      return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
        ? void 0
        : u.pause();
    });
  }
  getAnimationState(l) {
    var u;
    return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
      ? void 0
      : u.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[u];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    _e((u) => {
      const { drag: r } = this.getProps();
      if (!Qs(u, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: p } = c.layout.layoutBox[u];
        d.set(l[u] - Ot(h, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ea(u) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    _e((h) => {
      const p = this.getAxisMotionValue(h);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[h] = d2({ min: m, max: m }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((h) => {
        if (!Qs(h, l, null)) return;
        const p = this.getAxisMotionValue(h),
          { min: m, max: y } = this.constraints[h];
        p.set(Ot(m, y, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    p2.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = ml(l, "pointerdown", (m) => {
        const { drag: y, dragListener: v = !0 } = this.getProps();
        y && v && this.start(m);
      }),
      r = () => {
        const { dragConstraints: m } = this.getProps();
        ea(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Et.read(r);
    const h = Al(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (_e((v) => {
              const S = this.getAxisMotionValue(v);
              S &&
                ((this.originPoint[v] += m[v].translate),
                S.set(S.get() + m[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), p && p();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = $o,
        dragMomentum: p = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: p,
    };
  }
}
function Qs(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function v2(a, l = 10) {
  let u = null;
  return Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u;
}
class b2 extends Zn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = pe),
      (this.removeListeners = pe),
      (this.controls = new g2(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const v0 = (a) => (l, u) => {
  a && Et.postRender(() => a(l, u));
};
class S2 extends Zn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pe);
  }
  onPointerDown(l) {
    this.session = new cp(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: op(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: v0(l),
      onStart: v0(u),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && Et.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ml(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Fs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function b0(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const cl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (et.test(a)) a = parseFloat(a);
        else return a;
      const u = b0(a, l.target.x),
        r = b0(a, l.target.y);
      return `${u}% ${r}%`;
    },
  },
  T2 = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const r = a,
        c = Xn.parse(a);
      if (c.length > 5) return r;
      const d = Xn.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        p = u.x.scale * l.x,
        m = u.y.scale * l.y;
      (c[0 + h] /= p), (c[1 + h] /= m);
      const y = Ot(p, m, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= y),
        typeof c[3 + h] == "number" && (c[3 + h] /= y),
        d(c)
      );
    },
  };
class x2 extends G.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    C1(A2),
      d &&
        (u.group && u.group.add(d),
        r && r.register && c && r.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Fs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      h = r.projection;
    return (
      h &&
        ((h.isPresent = d),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Et.postRender(() => {
                const p = h.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      rc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      u && u.group && u.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function hp(a) {
  const [l, u] = F0(),
    r = G.useContext(nc);
  return R.jsx(x2, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: G.useContext(iy),
    isPresent: l,
    safeToRemove: u,
  });
}
const A2 = {
  borderRadius: {
    ...cl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: cl,
  borderTopRightRadius: cl,
  borderBottomLeftRadius: cl,
  borderBottomRightRadius: cl,
  boxShadow: T2,
};
function E2(a, l, u) {
  const r = te(a) ? a : Tl(a);
  return r.start(Nc("", r, l, u)), r.animation;
}
function M2(a) {
  return a instanceof SVGElement && a.tagName !== "svg";
}
const D2 = (a, l) => a.depth - l.depth;
class R2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Tc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    xc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(D2),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function O2(a, l) {
  const u = ke.now(),
    r = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (Gn(r), a(d - l));
    };
  return Et.read(r, !0), () => Gn(r);
}
const dp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  C2 = dp.length,
  S0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  T0 = (a) => typeof a == "number" || et.test(a);
function V2(a, l, u, r, c, d) {
  c
    ? ((a.opacity = Ot(0, u.opacity !== void 0 ? u.opacity : 1, j2(r))),
      (a.opacityExit = Ot(l.opacity !== void 0 ? l.opacity : 1, 0, z2(r))))
    : d &&
      (a.opacity = Ot(
        l.opacity !== void 0 ? l.opacity : 1,
        u.opacity !== void 0 ? u.opacity : 1,
        r
      ));
  for (let h = 0; h < C2; h++) {
    const p = `border${dp[h]}Radius`;
    let m = x0(l, p),
      y = x0(u, p);
    if (m === void 0 && y === void 0) continue;
    m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || T0(m) === T0(y)
        ? ((a[p] = Math.max(Ot(S0(m), S0(y), r), 0)),
          (Ke.test(y) || Ke.test(m)) && (a[p] += "%"))
        : (a[p] = y);
  }
  (l.rotate || u.rotate) && (a.rotate = Ot(l.rotate || 0, u.rotate || 0, r));
}
function x0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const j2 = mp(0, 0.5, Oy),
  z2 = mp(0.5, 0.95, pe);
function mp(a, l, u) {
  return (r) => (r < a ? 0 : r > l ? 1 : u(ua(a, l, r)));
}
function A0(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function ze(a, l) {
  A0(a.x, l.x), A0(a.y, l.y);
}
function E0(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function M0(a, l, u, r, c) {
  return (
    (a -= l), (a = nu(a, 1 / u, r)), c !== void 0 && (a = nu(a, 1 / c, r)), a
  );
}
function _2(a, l = 0, u = 1, r = 0.5, c, d = a, h = a) {
  if (
    (Ke.test(l) &&
      ((l = parseFloat(l)), (l = Ot(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let p = Ot(d.min, d.max, r);
  a === d && (p -= l),
    (a.min = M0(a.min, l, u, p, c)),
    (a.max = M0(a.max, l, u, p, c));
}
function D0(a, l, [u, r, c], d, h) {
  _2(a, l[u], l[r], l[c], l.scale, d, h);
}
const N2 = ["x", "scaleX", "originX"],
  w2 = ["y", "scaleY", "originY"];
function R0(a, l, u, r) {
  D0(a.x, l, N2, u ? u.x : void 0, r ? r.x : void 0),
    D0(a.y, l, w2, u ? u.y : void 0, r ? r.y : void 0);
}
function O0(a) {
  return a.translate === 0 && a.scale === 1;
}
function yp(a) {
  return O0(a.x) && O0(a.y);
}
function C0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function U2(a, l) {
  return C0(a.x, l.x) && C0(a.y, l.y);
}
function V0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function pp(a, l) {
  return V0(a.x, l.x) && V0(a.y, l.y);
}
function j0(a) {
  return le(a.x) / le(a.y);
}
function z0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class B2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Tc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (xc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let r;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, u) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        u && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: r } = l;
      u.onExitComplete && u.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function L2(a, l, u) {
  let r = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    h = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: y,
      rotate: v,
      rotateX: S,
      rotateY: T,
      skewX: C,
      skewY: _,
    } = u;
    y && (r = `perspective(${y}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      S && (r += `rotateX(${S}deg) `),
      T && (r += `rotateY(${T}deg) `),
      C && (r += `skewX(${C}deg) `),
      _ && (r += `skewY(${_}deg) `);
  }
  const p = a.x.scale * l.x,
    m = a.y.scale * l.y;
  return (p !== 1 || m !== 1) && (r += `scale(${p}, ${m})`), r || "none";
}
const jo = ["", "X", "Y", "Z"],
  H2 = { visibility: "hidden" },
  _0 = 1e3;
let q2 = 0;
function zo(a, l, u, r) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function gp(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = vy(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Et, !(c || d));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && gp(r);
}
function vp({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, p = l == null ? void 0 : l()) {
      (this.id = q2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(X2),
            this.nodes.forEach(J2),
            this.nodes.forEach(P2),
            this.nodes.forEach(Z2);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new R2());
    }
    addEventListener(h, p) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Ac()),
        this.eventHandlers.get(h).add(p)
      );
    }
    notifyListeners(h, ...p) {
      const m = this.eventHandlers.get(h);
      m && m.notify(...p);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, p = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = M2(h)), (this.instance = h);
      const { layoutId: m, layout: y, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (y || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let S;
        const T = () => (this.root.updateBlockedByResize = !1);
        a(h, () => {
          (this.root.updateBlockedByResize = !0),
            S && S(),
            (S = O2(T, 250)),
            Fs.hasAnimatedSinceResize &&
              ((Fs.hasAnimatedSinceResize = !1), this.nodes.forEach(w0));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: S,
              hasLayoutChanged: T,
              hasRelativeLayoutChanged: C,
              layout: _,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || v.getDefaultTransition() || tT,
                { onLayoutAnimationStart: H, onLayoutAnimationComplete: B } =
                  v.getProps(),
                Y = !this.targetLayout || !pp(this.targetLayout, _),
                X = !T && C;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                X ||
                (T && (Y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(S, X);
                const st = { ...Sc(w, "layout"), onPlay: H, onComplete: B };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((st.delay = 0), (st.type = !1)),
                  this.startAnimation(st);
              } else
                T || w0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = _;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Gn(this.updateProjection);
    }
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
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(F2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          gp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        (S.shouldResetTransform = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const y = this.getTransformTemplate();
      (this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(N0);
        return;
      }
      this.isUpdating || this.nodes.forEach(K2),
        (this.isUpdating = !1),
        this.nodes.forEach(k2),
        this.nodes.forEach(Y2),
        this.nodes.forEach(G2),
        this.clearAllSnapshots();
      const p = ke.now();
      (Pt.delta = yn(0, 1e3 / 60, p - Pt.timestamp)),
        (Pt.timestamp = p),
        (Pt.isProcessing = !0),
        Eo.update.process(Pt),
        Eo.preRender.process(Pt),
        Eo.render.process(Pt),
        (Pt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), rc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Q2), this.sharedNodes.forEach(W2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Et.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Et.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !le(this.snapshot.measuredBox.x) &&
          !le(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Nt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (p = !1),
        p)
      ) {
        const m = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: m,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !yp(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        v = y !== this.prevTransformTemplateValue;
      h &&
        (p || mi(this.latestValues) || v) &&
        (c(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        h && (m = this.removeTransform(m)),
        eT(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var h;
      const { visualElement: p } = this.options;
      if (!p) return Nt();
      const m = p.measureViewportBox();
      if (
        !(
          ((h = this.scroll) === null || h === void 0 ? void 0 : h.wasRoot) ||
          this.path.some(nT)
        )
      ) {
        const { scroll: v } = this.root;
        v && (aa(m.x, v.offset.x), aa(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var p;
      const m = Nt();
      if (
        (ze(m, h), !((p = this.scroll) === null || p === void 0) && p.wasRoot)
      )
        return m;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y],
          { scroll: S, options: T } = v;
        v !== this.root &&
          S &&
          T.layoutScroll &&
          (S.wasRoot && ze(m, h), aa(m.x, S.offset.x), aa(m.y, S.offset.y));
      }
      return m;
    }
    applyTransform(h, p = !1) {
      const m = Nt();
      ze(m, h);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        !p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          la(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          mi(v.latestValues) && la(m, v.latestValues);
      }
      return mi(this.latestValues) && la(m, this.latestValues), m;
    }
    removeTransform(h) {
      const p = Nt();
      ze(p, h);
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        if (!y.instance || !mi(y.latestValues)) continue;
        Fo(y.latestValues) && y.updateSnapshot();
        const v = Nt(),
          S = y.measurePageBox();
        ze(v, S),
          R0(p, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, v);
      }
      return mi(this.latestValues) && R0(p, this.latestValues), p;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var p;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((p = this.parent) === null || p === void 0) &&
            p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: S, layoutId: T } = this.options;
      if (!(!this.layout || !(S || T))) {
        if (
          ((this.resolvedRelativeTargetAt = Pt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              pl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                C.layout.layoutBox
              ),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Nt()), (this.targetWithTransforms = Nt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              a2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : ze(this.target, this.layout.layoutBox),
              up(this.target, this.targetDelta))
            : ze(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const C = this.getClosestProjectingParent();
          C &&
          !!C.resumingFrom == !!this.resumingFrom &&
          !C.options.layoutScroll &&
          C.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              pl(this.relativeTargetOrigin, this.target, C.target),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Fo(this.parent.latestValues) ||
          sp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var h;
      const p = this.getLead(),
        m = !!this.resumingFrom || this !== p;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === Pt.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: v, layoutId: S } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || S))
      )
        return;
      ze(this.layoutCorrected, this.layout.layoutBox);
      const T = this.treeScale.x,
        C = this.treeScale.y;
      l2(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Nt()));
      const { target: _ } = p;
      if (!_) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (E0(this.prevProjectionDelta.x, this.projectionDelta.x),
          E0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        yl(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.treeScale.x !== T ||
          this.treeScale.y !== C ||
          !z0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !z0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var p;
      if (
        ((p = this.options.visualElement) === null ||
          p === void 0 ||
          p.scheduleRender(),
        h)
      ) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ia()),
        (this.projectionDelta = ia()),
        (this.projectionDeltaWithTransform = ia());
    }
    setAnimationOrigin(h, p = !1) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        v = { ...this.latestValues },
        S = ia();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const T = Nt(),
        C = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        w = C !== _,
        H = this.getStack(),
        B = !H || H.members.length <= 1,
        Y = !!(w && !B && this.options.crossfade === !0 && !this.path.some(I2));
      this.animationProgress = 0;
      let X;
      (this.mixTargetDelta = (st) => {
        const L = st / 1e3;
        U0(S.x, h.x, L),
          U0(S.y, h.y, L),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pl(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            $2(this.relativeTarget, this.relativeTargetOrigin, T, L),
            X && U2(this.relativeTarget, X) && (this.isProjectionDirty = !1),
            X || (X = Nt()),
            ze(X, this.relativeTarget)),
          w &&
            ((this.animationValues = v), V2(v, y, this.latestValues, L, Y, B)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = L);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Et.update(() => {
          (Fs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = E2(0, _0, {
              ...h,
              onUpdate: (p) => {
                this.mixTargetDelta(p), h.onUpdate && h.onUpdate(p);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(_0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: y,
        latestValues: v,
      } = h;
      if (!(!p || !m || !y)) {
        if (
          this !== h &&
          this.layout &&
          y &&
          bp(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Nt();
          const S = le(this.layout.layoutBox.x);
          (m.x.min = h.target.x.min), (m.x.max = m.x.min + S);
          const T = le(this.layout.layoutBox.y);
          (m.y.min = h.target.y.min), (m.y.max = m.y.min + T);
        }
        ze(p, m),
          la(p, v),
          yl(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
      }
    }
    registerSharedNode(h, p) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new B2()),
        this.sharedNodes.get(h).add(p);
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: p } = this.options;
      return p
        ? ((h = this.getStack()) === null || h === void 0 ? void 0 : h.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: p } = this.options;
      return p
        ? (h = this.getStack()) === null || h === void 0
          ? void 0
          : h.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      y && y.promote(this, m),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let p = !1;
      const { latestValues: m } = h;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const y = {};
      m.z && zo("z", h, y, this.animationValues);
      for (let v = 0; v < jo.length; v++)
        zo(`rotate${jo[v]}`, h, y, this.animationValues),
          zo(`skew${jo[v]}`, h, y, this.animationValues);
      h.render();
      for (const v in y)
        h.setStaticValue(v, y[v]),
          this.animationValues && (this.animationValues[v] = y[v]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return H2;
      const y = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (y.opacity = ""),
          (y.pointerEvents = Js(h == null ? void 0 : h.pointerEvents) || ""),
          (y.transform = v ? v(this.latestValues, "") : "none"),
          y
        );
      const S = this.getLead();
      if (!this.projectionDelta || !this.layout || !S.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Js(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !mi(this.latestValues) &&
            ((w.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const T = S.animationValues || S.latestValues;
      this.applyTransformsToTarget(),
        (y.transform = L2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          T
        )),
        v && (y.transform = v(T, y.transform));
      const { x: C, y: _ } = this.projectionDelta;
      (y.transformOrigin = `${C.origin * 100}% ${_.origin * 100}% 0`),
        S.animationValues
          ? (y.opacity =
              S === this
                ? (m =
                    (p = T.opacity) !== null && p !== void 0
                      ? p
                      : this.latestValues.opacity) !== null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : T.opacityExit)
          : (y.opacity =
              S === this
                ? T.opacity !== void 0
                  ? T.opacity
                  : ""
                : T.opacityExit !== void 0
                ? T.opacityExit
                : 0);
      for (const w in vl) {
        if (T[w] === void 0) continue;
        const { correct: H, applyTo: B, isCSSVariable: Y } = vl[w],
          X = y.transform === "none" ? T[w] : H(T[w], S);
        if (B) {
          const st = B.length;
          for (let L = 0; L < st; L++) y[B[L]] = X;
        } else
          Y ? (this.options.visualElement.renderState.vars[w] = X) : (y[w] = X);
      }
      return (
        this.options.layoutId &&
          (y.pointerEvents =
            S === this
              ? Js(h == null ? void 0 : h.pointerEvents) || ""
              : "none"),
        y
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var p;
        return (p = h.currentAnimation) === null || p === void 0
          ? void 0
          : p.stop();
      }),
        this.root.nodes.forEach(N0),
        this.root.sharedNodes.clear();
    }
  };
}
function Y2(a) {
  a.updateLayout();
}
function G2(a) {
  var l;
  const u =
    ((l = a.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) ||
    a.snapshot;
  if (a.isLead() && a.layout && u && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: d } = a.options,
      h = u.source !== a.layout.source;
    d === "size"
      ? _e((S) => {
          const T = h ? u.measuredBox[S] : u.layoutBox[S],
            C = le(T);
          (T.min = r[S].min), (T.max = T.min + C);
        })
      : bp(d, u.layoutBox, r) &&
        _e((S) => {
          const T = h ? u.measuredBox[S] : u.layoutBox[S],
            C = le(r[S]);
          (T.max = T.min + C),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[S].max = a.relativeTarget[S].min + C));
        });
    const p = ia();
    yl(p, r, u.layoutBox);
    const m = ia();
    h ? yl(m, a.applyTransform(c, !0), u.measuredBox) : yl(m, r, u.layoutBox);
    const y = !yp(p);
    let v = !1;
    if (!a.resumeFrom) {
      const S = a.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: T, layout: C } = S;
        if (T && C) {
          const _ = Nt();
          pl(_, u.layoutBox, T.layoutBox);
          const w = Nt();
          pl(w, r, C.layoutBox),
            pp(_, w) || (v = !0),
            S.options.layoutRoot &&
              ((a.relativeTarget = w),
              (a.relativeTargetOrigin = _),
              (a.relativeParent = S));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: u,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function X2(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function Z2(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function Q2(a) {
  a.clearSnapshot();
}
function N0(a) {
  a.clearMeasurements();
}
function K2(a) {
  a.isLayoutDirty = !1;
}
function k2(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function w0(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function J2(a) {
  a.resolveTargetDelta();
}
function P2(a) {
  a.calcProjection();
}
function F2(a) {
  a.resetSkewAndRotation();
}
function W2(a) {
  a.removeLeadSnapshot();
}
function U0(a, l, u) {
  (a.translate = Ot(l.translate, 0, u)),
    (a.scale = Ot(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function B0(a, l, u, r) {
  (a.min = Ot(l.min, u.min, r)), (a.max = Ot(l.max, u.max, r));
}
function $2(a, l, u, r) {
  B0(a.x, l.x, u.x, r), B0(a.y, l.y, u.y, r);
}
function I2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const tT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  L0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  H0 = L0("applewebkit/") && !L0("chrome/") ? Math.round : pe;
function q0(a) {
  (a.min = H0(a.min)), (a.max = H0(a.max));
}
function eT(a) {
  q0(a.x), q0(a.y);
}
function bp(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !i2(j0(l), j0(u), 0.2))
  );
}
function nT(a) {
  var l;
  return (
    a !== a.root &&
    ((l = a.scroll) === null || l === void 0 ? void 0 : l.wasRoot)
  );
}
const iT = vp({
    attachResizeListener: (a, l) => Al(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  _o = { current: void 0 },
  Sp = vp({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!_o.current) {
        const a = new iT({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (_o.current = a);
      }
      return _o.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  aT = {
    pan: { Feature: S2 },
    drag: { Feature: b2, ProjectionNode: Sp, MeasureLayout: hp },
  };
function Tp(a, l, u) {
  var r;
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let c = document;
    const d = (r = void 0) !== null && r !== void 0 ? r : c.querySelectorAll(a);
    return d ? Array.from(d) : [];
  }
  return Array.from(a);
}
function xp(a, l) {
  const u = Tp(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [u, c, () => r.abort()];
}
function Y0(a) {
  return !(a.pointerType === "touch" || np());
}
function lT(a, l, u = {}) {
  const [r, c, d] = xp(a, u),
    h = (p) => {
      if (!Y0(p)) return;
      const { target: m } = p,
        y = l(m, p);
      if (typeof y != "function" || !m) return;
      const v = (S) => {
        Y0(S) && (y(S), m.removeEventListener("pointerleave", v));
      };
      m.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((p) => {
      p.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
function G0(a, l, u) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = r[c];
  d && Et.postRender(() => d(l, Rl(l)));
}
class sT extends Zn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = lT(
        l,
        (u, r) => (G0(this.node, r, "Start"), (c) => G0(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class uT extends Zn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Dl(
      Al(this.node.current, "focus", () => this.onFocus()),
      Al(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function X0(a, l) {
  const u = `${l}PointerCapture`;
  if (a.target instanceof Element && u in a.target && a.pointerId !== void 0)
    try {
      a.target[u](a.pointerId);
    } catch {}
}
const Ap = (a, l) => (l ? (a === l ? !0 : Ap(a, l.parentElement)) : !1),
  rT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function oT(a) {
  return rT.has(a.tagName) || a.tabIndex !== -1;
}
const hl = new WeakSet();
function Z0(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function No(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const cT = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const r = Z0(() => {
    if (hl.has(u)) return;
    No(u, "down");
    const c = Z0(() => {
        No(u, "up");
      }),
      d = () => No(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", r, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", r), l);
};
function Q0(a) {
  return wc(a) && !np();
}
function fT(a, l, u = {}) {
  const [r, c, d] = xp(a, u),
    h = (p) => {
      const m = p.currentTarget;
      if (!m || !Q0(p) || hl.has(m)) return;
      hl.add(m), X0(p, "set");
      const y = l(m, p),
        v = (C, _) => {
          m.removeEventListener("pointerup", S),
            m.removeEventListener("pointercancel", T),
            X0(C, "release"),
            !(!Q0(C) || !hl.has(m)) &&
              (hl.delete(m), typeof y == "function" && y(C, { success: _ }));
        },
        S = (C) => {
          (
            C.isTrusted
              ? hT(
                  C,
                  m instanceof Element
                    ? m.getBoundingClientRect()
                    : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                      }
                )
              : !1
          )
            ? v(C, !1)
            : v(C, !(m instanceof Element) || Ap(m, C.target));
        },
        T = (C) => {
          v(C, !1);
        };
      m.addEventListener("pointerup", S, c),
        m.addEventListener("pointercancel", T, c),
        m.addEventListener("lostpointercapture", T, c);
    };
  return (
    r.forEach((p) => {
      p = u.useGlobalTarget ? window : p;
      let m = !1;
      p instanceof HTMLElement &&
        ((m = !0),
        !oT(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0)),
        p.addEventListener("pointerdown", h, c),
        m && p.addEventListener("focus", (y) => cT(y, c), c);
    }),
    d
  );
}
function hT(a, l) {
  return (
    a.clientX < l.left ||
    a.clientX > l.right ||
    a.clientY < l.top ||
    a.clientY > l.bottom
  );
}
function K0(a, l, u) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = r[c];
  d && Et.postRender(() => d(l, Rl(l)));
}
class dT extends Zn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = fT(
        l,
        (u, r) => (
          K0(this.node, r, "Start"),
          (c, { success: d }) => K0(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Io = new WeakMap(),
  wo = new WeakMap(),
  mT = (a) => {
    const l = Io.get(a.target);
    l && l(a);
  },
  yT = (a) => {
    a.forEach(mT);
  };
function pT({ root: a, ...l }) {
  const u = a || document;
  wo.has(u) || wo.set(u, {});
  const r = wo.get(u),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(yT, { root: a, ...l })), r[c];
}
function gT(a, l, u) {
  const r = pT(l);
  return (
    Io.set(a, u),
    r.observe(a),
    () => {
      Io.delete(a), r.unobserve(a);
    }
  );
}
const vT = { some: 0, all: 1 };
class bT extends Zn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: r, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : vT[c],
      },
      p = (m) => {
        const { isIntersecting: y } = m;
        if (
          this.isInView === y ||
          ((this.isInView = y), d && !y && this.hasEnteredView)
        )
          return;
        y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y);
        const { onViewportEnter: v, onViewportLeave: S } = this.node.getProps(),
          T = y ? v : S;
        T && T(m);
      };
    return gT(this.node.current, h, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(ST(l, u)) && this.startObserver();
  }
  unmount() {}
}
function ST({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const TT = {
    inView: { Feature: bT },
    tap: { Feature: dT },
    focus: { Feature: uT },
    hover: { Feature: sT },
  },
  xT = { layout: { ProjectionNode: Sp, MeasureLayout: hp } },
  tc = { current: null },
  Ep = { current: !1 };
function AT() {
  if (((Ep.current = !0), !!ac))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (tc.current = a.matches);
      a.addListener(l), l();
    } else tc.current = !1;
}
const ET = [...Xy, It, Xn],
  MT = (a) => ET.find(Gy(a)),
  DT = new WeakMap();
function RT(a, l, u) {
  for (const r in l) {
    const c = l[r],
      d = u[r];
    if (te(c)) a.addValue(r, c);
    else if (te(d)) a.addValue(r, Tl(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, Tl(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in u) l[r] === void 0 && a.removeValue(r);
  return l;
}
const k0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class OT {
  scrapeMotionValuesFromProps(l, u, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    p = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = jc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const C = ke.now();
        this.renderScheduledAt < C &&
          ((this.renderScheduledAt = C), Et.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: y, onUpdate: v } = h;
    (this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = u.initial ? { ...m } : {}),
      (this.renderState = y),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = su(u)),
      (this.isVariantNode = ey(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: S, ...T } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const C in T) {
      const _ = T[C];
      m[C] !== void 0 && te(_) && _.set(m[C], !1);
    }
  }
  mount(l) {
    (this.current = l),
      DT.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, r) => this.bindToMotionValue(r, u)),
      Ep.current || AT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : tc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = vi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (p) => {
        (this.latestValues[l] = p),
          this.props.onUpdate && Et.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = u.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in sa) {
      const u = sa[l];
      if (!u) continue;
      const { isEnabled: r, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Nt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let r = 0; r < k0.length; r++) {
      const c = k0[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = RT(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const r = this.values.get(l);
    u !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        u !== void 0 &&
        ((r = Tl(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, u) {
    var r;
    let c =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (r = this.getBaseTargetFromProps(this.props, l)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, l, this.options);
    return (
      c != null &&
        (typeof c == "string" && (qy(c) || Vy(c))
          ? (c = parseFloat(c))
          : !MT(c) && Xn.test(u) && (c = By(l, u)),
        this.setBaseTarget(l, te(c) ? c.get() : c)),
      te(c) ? c.get() : c
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var u;
    const { initial: r } = this.props;
    let c;
    if (typeof r == "string" || typeof r == "object") {
      const h = vc(
        this.props,
        r,
        (u = this.presenceContext) === null || u === void 0 ? void 0 : u.custom
      );
      h && (c = h[l]);
    }
    if (r && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, l);
    return d !== void 0 && !te(d)
      ? d
      : this.initialValues[l] !== void 0 && c === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new Ac()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
}
class Mp extends OT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Zy);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: r }) {
    delete u[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    te(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function CT(a) {
  return window.getComputedStyle(a);
}
class VT extends Mp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = hy);
  }
  readValueFromInstance(l, u) {
    if (vi.has(u)) return Nb(l, u);
    {
      const r = CT(l),
        c = (cc(u) ? r.getPropertyValue(u) : r[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return rp(l, u);
  }
  build(l, u, r) {
    dc(l, u, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return bc(l, u, r);
  }
}
class jT extends Mp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Nt),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          fy(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (vi.has(u)) {
      const r = Uy(u);
      return (r && r.default) || 0;
    }
    return (u = dy.has(u) ? u : oc(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return yy(l, u, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Et.postRender(this.updateDimensions);
  }
  build(l, u, r) {
    pc(l, u, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(l, u, r, c) {
    my(l, u, r, c);
  }
  mount(l) {
    (this.isSVGTag = gc(l.tagName)), super.mount(l);
  }
}
const zT = (a, l) =>
    yc(a) ? new jT(l) : new VT(l, { allowProjection: a !== G.Fragment }),
  _T = I1({ ...JS, ...TT, ...aT, ...xT }, zT),
  Yn = y1(_T),
  NT = { some: 0, all: 1 };
function wT(a, l, { root: u, margin: r, amount: c = "some" } = {}) {
  const d = Tp(a),
    h = new WeakMap(),
    p = (y) => {
      y.forEach((v) => {
        const S = h.get(v.target);
        if (v.isIntersecting !== !!S)
          if (v.isIntersecting) {
            const T = l(v.target, v);
            typeof T == "function" ? h.set(v.target, T) : m.unobserve(v.target);
          } else typeof S == "function" && (S(v), h.delete(v.target));
      });
    },
    m = new IntersectionObserver(p, {
      root: u,
      rootMargin: r,
      threshold: typeof c == "number" ? c : NT[c],
    });
  return d.forEach((y) => m.observe(y)), () => m.disconnect();
}
function UT(
  a,
  { root: l, margin: u, amount: r, once: c = !1, initial: d = !1 } = {}
) {
  const [h, p] = G.useState(d);
  return (
    G.useEffect(() => {
      if (!a.current || (c && h)) return;
      const m = () => (p(!0), c ? void 0 : () => p(!1)),
        y = { root: (l && l.current) || void 0, margin: u, amount: r };
      return wT(a.current, m, y);
    }, [l, a, u, c, r]),
    h
  );
}
const BT = () => {
    const [a, l] = G.useState(""),
      [u, r] = G.useState(!0),
      [c, d] = G.useState(!1),
      [h, p] = G.useState(!1),
      [m, y] = G.useState(!1),
      v = (T) => {
        const C = T.target.value;
        l(C), m && r(!0);
      },
      S = (T) => {
        if (
          (T.preventDefault(),
          y(!0),
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) || a.trim() === "")
        ) {
          r(!1);
          return;
        }
        d(!0),
          setTimeout(() => {
            p(!0), d(!1);
          }, 2e3);
      };
    return R.jsx(Yn.div, {
      initial: { scale: 0.5, translateY: -80, translateX: 100 },
      animate: { scale: 1, opacity: 1, translateY: 0, translateX: 0 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, type: "spring" },
      style: {
        width: h ? "260px" : "320px",
        height: h ? "250px" : "216px",
        transition: "width 120ms ease-in-out, height 120ms ease-in-out",
      },
      className:
        "z-50 absolute grid top-12 right-0 overflow-hidden w-full  max-w-[400px] bg-white rounded-4xl shadow-2xl",
      children: R.jsxs("div", {
        className: "flex items-center justify-center",
        children: [
          R.jsx(ks, {
            initial: !1,
            children:
              h &&
              R.jsxs(Yn.div, {
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 50 },
                transition: { duration: 0.1, delay: 0.18 },
                className:
                  " text-green-800  grid place-items-center h-full text-center p-6",
                children: [
                  R.jsx("h2", {
                    className: "text-xl font-semibold text-green-800",
                    children: "Thank you for subscribing!",
                  }),
                  R.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.8,
                    stroke: "currentColor",
                    className: "size-8",
                    children: R.jsx(Yn.path, {
                      initial: { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { duration: 0.5, delay: 0.5 },
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m4.5 12.75 6 6 9-13.5",
                    }),
                  }),
                  R.jsx("p", {
                    className: "text-green-700/70",
                    children:
                      "We will notify you when we have something new to offer.",
                  }),
                ],
              }),
          }),
          R.jsx(ks, {
            initial: !1,
            children:
              !h &&
              R.jsx(Yn.div, {
                initial: { opacity: 0, x: -200 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -200 },
                transition: { duration: 0.18 },
                className: "flex flex-col items-center justify-center light",
                children: R.jsxs("div", {
                  className: "p-6",
                  children: [
                    R.jsx("h2", {
                      className: "text-xl font-semibold text-text-base mb-4",
                      children: "Subscribe to Our Newsletter",
                    }),
                    R.jsxs("form", {
                      className: "flex flex-col",
                      onSubmit: S,
                      children: [
                        R.jsx("input", {
                          type: "email",
                          onChange: v,
                          className: `bg-gray-100 text-gray-800 border-0 rounded-lg p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 transition ease-in-out duration-150 ${
                            u ? "focus:ring-blue-500" : "focus:ring-red-500"
                          }`,
                          placeholder: "Enter your email address",
                        }),
                        R.jsx("p", {
                          className: "text-red-500 text-xs ml-2 h-4",
                          children: !u && "This field can't be empty",
                        }),
                        R.jsx("button", {
                          type: "submit",
                          style: {},
                          className: `overflow-hidden text-white font-bold py-2 px-4 rounded-4xl mt-2 transition-all transition-200ease-in-out duration-150 ${
                            c
                              ? "bg-green-800 cursor-not-allowed"
                              : "bg-gradient-to-r from-green-600 to-green-400 text-white hover:bg-indigo-600 hover:to-blue-600"
                          }`,
                          children: R.jsx(ks, {
                            initial: !1,
                            children: c
                              ? R.jsxs(Yn.span, {
                                  initial: { opacity: 0, y: -50 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -50 },
                                  transition: { duration: 0.2 },
                                  className:
                                    "flex items-center justify-center gap-2",
                                  children: [
                                    "Subscribing",
                                    R.jsxs("div", {
                                      role: "status",
                                      children: [
                                        R.jsxs("svg", {
                                          "aria-hidden": "true",
                                          className:
                                            "w-4 h-4 text-green-400 animate-spin dark:text-gray-600 fill-green-100",
                                          viewBox: "0 0 100 101",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            R.jsx("path", {
                                              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                              fill: "currentColor",
                                            }),
                                            R.jsx("path", {
                                              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                              fill: "currentFill",
                                            }),
                                          ],
                                        }),
                                        R.jsx("span", {
                                          className: "sr-only",
                                          children: "Loading...",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : R.jsx("span", { children: "Subscribe" }),
                          }),
                        }),
                      ],
                    }),
                    R.jsx("div", {
                      className: "flex justify-center mt-2",
                      children: R.jsx("a", {
                        href: "#",
                        className: "text-sm text-gray-600 hover:underline",
                        children: "Privacy Policy",
                      }),
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
    });
  },
  LT = () => {
    const a = [
        { id: "001", name: "home", href: "#" },
        { id: "001", name: "about", href: "#" },
        { id: "001", name: "contact", href: "#" },
        { id: "001", name: "blog", href: "#" },
        { id: "001", name: "careers", href: "#" },
      ],
      [l, u] = G.useState(!1),
      r = () => {
        u(!l);
      };
    return R.jsxs("header", {
      className: "section even flex justify-between items-center",
      children: [
        R.jsx("div", {
          className: "flex-1 ",
          children: R.jsx("img", {
            src: "images/logo.svg",
            alt: "logo",
            className: "logo",
          }),
        }),
        R.jsxs("nav", {
          className:
            "relative flex-2 flex items-center justify-end md:justify-between",
          children: [
            R.jsx("ul", {
              className: "items-center hidden md:flex",
              children: a.map((c) =>
                R.jsx(
                  "li",
                  {
                    className: "",
                    children: R.jsx("a", {
                      href: c.href,
                      className:
                        "p-2 capitalize hover:bg-gray-200 rounded-xl transition-all transition-150",
                      children: c.name,
                    }),
                  },
                  c.id
                )
              ),
            }),
            R.jsxs(Yn.div, {
              children: [
                R.jsx(Yn.button, {
                  onClick: r,
                  type: "button",
                  className: `btn request-btn ${l ? "selected" : ""}`,
                  style: { width: `${l ? "166px" : "154.3px"}` },
                  children: l
                    ? R.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          "Cancel Request",
                          R.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "size-6",
                            children: R.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z",
                            }),
                          }),
                        ],
                      })
                    : R.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          R.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "size-6",
                            children: R.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
                            }),
                          }),
                          "Request Invite",
                        ],
                      }),
                }),
                R.jsx(ks, { children: l && R.jsx(BT, {}) }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function hn({ children: a, delay: l = 0 }) {
  const u = G.useRef(null),
    r = UT(u),
    [c, d] = G.useState(!1);
  return (
    G.useEffect(() => {
      r && !c && d(!0);
    }, [r, c]),
    R.jsx(Yn.div, {
      ref: u,
      variants: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      },
      initial: "hidden",
      animate: c ? "visible" : "hidden",
      transition: { duration: 0.3, delay: l },
      children: a,
    })
  );
}
const HT = () =>
    R.jsxs("section", {
      className:
        "section even min-h-[100dvh] flex flex-wrap-reverse md:flex-nowrap items-center",
      children: [
        R.jsxs("div", {
          className:
            "bg-white rounded-b-3xl md:rounded-br-none md:rounded-l-3xl p-6 flex w-full max-w-400px h-[500px] flex-col gap-8 items-start justify-center",
          children: [
            R.jsx("h1", {
              className:
                "flex-1 text-text-base text-4xl md:text-6xl  text-balance my-4",
              children: R.jsx(hn, {
                delay: 0.2,
                children: R.jsx("div", {
                  children: "Next generation digital banking",
                }),
              }),
            }),
            R.jsx(hn, {
              delay: 0.4,
              children: R.jsxs("p", {
                className: "text-balance  text-text-light text-lg",
                children: [
                  "Take your ",
                  R.jsx("strong", { children: "financial life online" }),
                  ". Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
                ],
              }),
            }),
            R.jsx(hn, {
              delay: 0.6,
              children: R.jsxs("div", {
                className: "flex gap-2 w-fit",
                children: [
                  R.jsx("a", {
                    className: "btn request-btn",
                    href: "#",
                    children: "Request Invite",
                  }),
                  R.jsx("a", {
                    className: "btn book-call-btn",
                    href: "#",
                    children: "Learn More",
                  }),
                ],
              }),
            }),
          ],
        }),
        R.jsx("div", {
          className:
            "relative overflow-hidden rounded-t-3xl md:rounded-3xl shadow-2xl w-full md:max-w-[600px] h-[400px] md:h-full",
          children: R.jsx("img", {
            loading: "lazy",
            src: "images/hero-img-2.jpeg",
            alt: "hero",
            className: "top-0 w-full object-cover object-center",
          }),
        }),
      ],
    }),
  qT = ({ id: a, title: l, info: u, link: r, img: c }) =>
    R.jsxs("article", {
      id: a,
      className:
        "flex flex-col justify-between bg-white p-6 rounded-3xl shadow-lg",
      children: [
        R.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            R.jsx("img", { className: "aspect-square w-8", src: c, alt: "" }),
            R.jsx("h3", { className: "text-lg font-semibold", children: l }),
          ],
        }),
        R.jsx("p", { className: "my-4 text-text-light", children: u }),
        R.jsx("a", {
          href: r,
          className: "btn request-btn mt-4 w-fit",
          children: "Learn more",
        }),
      ],
    }),
  J0 = [
    {
      id: "0098",
      title: "Online Banking",
      info: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      link: "#",
      img: "images/icon-online.svg",
    },
    {
      id: "0097",
      title: "Simple Budgeting",
      info: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      link: "#",
      img: "images/icon-budgeting.svg",
    },
    {
      id: "0096",
      title: "Fast Onboarding",
      info: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      link: "#",
      img: "images/icon-onboarding.svg",
    },
    {
      id: "0095",
      title: "Open API",
      info: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      link: "#",
      img: "images/icon-api.svg",
    },
  ],
  YT = () =>
    R.jsxs("section", {
      className:
        "section odd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      children: [
        R.jsxs("article", {
          className: "p-4",
          children: [
            R.jsx("h2", {
              className: "text-3xl font-semibold ",
              children: "Why choose Easybank?",
            }),
            R.jsx("p", {
              className: "my-4",
              children:
                "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
            }),
            R.jsx("a", {
              href: "#",
              className: "btn book-call-btn",
              children: "Request Invite",
            }),
          ],
        }),
        J0.map((a, l) =>
          R.jsx(hn, { delay: l * 0.2, children: R.jsx(qT, { ...a }) }, a.id)
        ),
        R.jsx(hn, {
          delay: J0.length * 0.2,
          children: R.jsx("article", {
            className:
              "overflow-hidden rounded-3xl w-full h-full max-h-[235px]",
            children: R.jsx("img", {
              src: "images/hero-img.jpeg",
              alt: "",
              className: "w-full h-full object-cover object-top",
            }),
          }),
        }),
      ],
    }),
  Ks = ({ id: a, title: l, img: u, desc: r, author: c }) =>
    R.jsxs("article", {
      className:
        "h-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700",
      children: [
        R.jsx("a", {
          href: "#",
          children: R.jsx("img", {
            className:
              "rounded-t-xl w-full h-[200px] object-cover object-center",
            src: u,
            alt: a,
          }),
        }),
        R.jsxs("div", {
          className: "p-4 flex flex-col items-start justify-between",
          children: [
            R.jsxs("p", {
              className: "text-sm text-text-light mb-4",
              children: ["By ", c],
            }),
            R.jsx("a", {
              href: "#",
              children: R.jsx("h3", {
                className:
                  "leading-6 mb-2 text-lg font-semibold tracking-tight text-gray-700 dark:text-white",
                children: l,
              }),
            }),
            R.jsx("p", {
              className: "mb-3 text-sm text-gray-500 dark:text-gray-400",
              children: r,
            }),
          ],
        }),
      ],
    }),
  GT = () =>
    R.jsxs("section", {
      className: "section even",
      children: [
        R.jsx("h2", {
          className: "text-3xl font-semibold my-8",
          children: "Latest Articles",
        }),
        R.jsxs("div", {
          className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
          children: [
            R.jsx(hn, {
              delay: 0.2,
              children: R.jsx(Ks, {
                id: "09877",
                img: "./images/image-currency.jpg",
                author: "Claire Robinson",
                title: "Receive money in any currency with no fees",
                desc: "Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...",
              }),
            }),
            R.jsx(hn, {
              delay: 0.4,
              children: R.jsx(Ks, {
                id: "09878",
                img: "./images/image-restaurant.jpg",
                author: "Wilson Hutton",
                title: "Treat yourself without worrying about money",
                desc: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
              }),
            }),
            R.jsx(hn, {
              delay: 0.6,
              children: R.jsx(Ks, {
                id: "09878",
                img: "./images/image-plane.jpg",
                author: "Wilson Hutton",
                title: "Take your Easybank card wherever you go",
                desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
              }),
            }),
            R.jsx(hn, {
              delay: 0.8,
              children: R.jsx(Ks, {
                id: "09878",
                img: "./images/image-confetti.jpg",
                author: "Claire Robinson",
                title: "Our invite-only Beta accounts are now live!",
                desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
              }),
            }),
          ],
        }),
      ],
    }),
  XT = () =>
    R.jsxs("footer", {
      children: [
        R.jsxs("div", {
          className: "relative h-[100dvh] overflow-hidden",
          children: [
            R.jsx("div", {
              className:
                "bg-linear-to-b from-gray-100 via-gray-100/50 to-gray-100/0 absolute top-0 w-full h-[30%] px-4 py-8 flex items-start",
              children: R.jsxs("div", {
                className:
                  "w-full flex flex-wrap items-center justify-between gap-4",
                children: [
                  R.jsx("img", {
                    src: "images/logo.svg",
                    alt: "logo",
                    className: "logo",
                  }),
                  R.jsx("h2", {
                    className:
                      "text-green-900/80 uppercase font-black md:text-3xl",
                    children: "Best Bank for your life.",
                  }),
                ],
              }),
            }),
            R.jsx("div", {
              className: "w-full h-full bg-blue-600",
              children: R.jsx("img", {
                className: "w-full h-full object-cover object-bottom",
                src: "images/footer-hero-5.jpg",
                alt: "footer-cover",
              }),
            }),
            R.jsx("div", {
              className:
                "bg-linear-to-t from-gray-900 via-gray-900/80 to-gray-100/0 absolute bottom-0 w-full h-[45%] px-6 py-8 flex items-end",
              children: R.jsxs("div", {
                className: "w-full flex flex-wrap items-start gap-4",
                children: [
                  R.jsxs("article", {
                    className: "flex-2 min-w-[300px]",
                    children: [
                      R.jsx("h3", {
                        className:
                          "text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500",
                        children: "Menu",
                      }),
                      R.jsxs("ul", {
                        className:
                          "footer_links flex flex-col text-sm md:text-lg text-gray-400",
                        children: [
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "About Us",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Contact",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Blog",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Careers",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  R.jsxs("article", {
                    className: "flex-1 min-w-[300px]",
                    children: [
                      R.jsx("h3", {
                        className:
                          "text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500",
                        children: "Socials",
                      }),
                      R.jsxs("ul", {
                        className:
                          "footer_links flex flex-col text-sm md:text-lg text-gray-400",
                        children: [
                          R.jsx("li", {
                            children: R.jsx("a", { href: "#", children: "X" }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Facebook",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Apple Podcast",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Spotify",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  R.jsxs("article", {
                    className: "flex-1 min-w-[300px]",
                    children: [
                      R.jsx("h3", {
                        className:
                          "text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500",
                        children: "Resources",
                      }),
                      R.jsxs("ul", {
                        className:
                          "footer_links flex flex-col text-sm md:text-lg text-gray-400",
                        children: [
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Support",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Privacy Policy",
                            }),
                          }),
                          R.jsx("li", {
                            children: R.jsx("a", {
                              href: "#",
                              children: "Invite",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        R.jsx("div", {
          className: "section bg-gray-900 text-white",
          children: R.jsxs("div", {
            className: "attribution",
            children: [
              "Challenge by © Easybank. All Rights Reserved",
              R.jsx("a", {
                href: "https://www.frontendmentor.io?ref=challenge",
                target: "_blank",
                children: "Frontend Mentor",
              }),
              ". Coded by ",
              R.jsx("a", { href: "#", children: "Your Name Here" }),
              ".",
            ],
          }),
        }),
      ],
    });
function ZT() {
  return R.jsxs("div", {
    className: "",
    children: [
      R.jsx(LT, {}),
      R.jsx(HT, {}),
      R.jsx(YT, {}),
      R.jsx(GT, {}),
      R.jsx(XT, {}),
    ],
  });
}
i1.createRoot(document.getElementById("root")).render(
  R.jsx(G.StrictMode, { children: R.jsx(ZT, {}) })
);
