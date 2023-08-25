(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var qu = { exports: {} },
  ol = {},
  bu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for('react.element'),
  mc = Symbol.for('react.portal'),
  hc = Symbol.for('react.fragment'),
  vc = Symbol.for('react.strict_mode'),
  yc = Symbol.for('react.profiler'),
  gc = Symbol.for('react.provider'),
  _c = Symbol.for('react.context'),
  wc = Symbol.for('react.forward_ref'),
  kc = Symbol.for('react.suspense'),
  Sc = Symbol.for('react.memo'),
  Ec = Symbol.for('react.lazy'),
  Vi = Symbol.iterator;
function xc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vi && e[Vi]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var es = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ts = Object.assign,
  ns = {};
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ns),
    (this.updater = n || es);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function rs() {}
rs.prototype = un.prototype;
function Ko(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ns),
    (this.updater = n || es);
}
var Yo = (Ko.prototype = new rs());
Yo.constructor = Ko;
ts(Yo, un.prototype);
Yo.isPureReactComponent = !0;
var Bi = Array.isArray,
  ls = Object.prototype.hasOwnProperty,
  Xo = { current: null },
  os = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      ls.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Jn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Xo.current,
  };
}
function Cc(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Go(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jn;
}
function Nc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hi = /\/+/g;
function xl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Nc('' + e.key)
    : t.toString(36);
}
function Sr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Jn:
          case mc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + xl(i, 0) : r),
      Bi(l)
        ? ((n = ''),
          e != null && (n = e.replace(Hi, '$&/') + '/'),
          Sr(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Go(l) &&
            (l = Cc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Hi, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Bi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + xl(o, u);
      i += Sr(o, t, n, s, l);
    }
  else if (((s = xc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + xl(o, u++)), (i += Sr(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Pc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Er = { transition: null },
  zc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Xo,
  };
T.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Go(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
T.Component = un;
T.Fragment = hc;
T.Profiler = yc;
T.PureComponent = Ko;
T.StrictMode = vc;
T.Suspense = kc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ts({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Xo.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ls.call(t, s) &&
        !os.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: _c,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = is;
T.createFactory = function (e) {
  var t = is.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: wc, render: e };
};
T.isValidElement = Go;
T.lazy = function (e) {
  return { $$typeof: Ec, _payload: { _status: -1, _result: e }, _init: Pc };
};
T.memo = function (e, t) {
  return { $$typeof: Sc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
T.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = '18.2.0';
bu.exports = T;
var sn = bu.exports;
const Lc = pc(sn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = sn,
  jc = Symbol.for('react.element'),
  Rc = Symbol.for('react.fragment'),
  Oc = Object.prototype.hasOwnProperty,
  Mc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Oc.call(t, r) && !Fc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: jc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Mc.current,
  };
}
ol.Fragment = Rc;
ol.jsx = us;
ol.jsxs = us;
qu.exports = ol;
var x = qu.exports,
  Jl = {},
  ss = { exports: {} },
  ge = {},
  as = { exports: {} },
  cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var L = E.length;
    E.push(z);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        G = E[W];
      if (0 < l(G, z)) (E[W] = z), (E[L] = G), (L = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      L = E.pop();
    if (L !== z) {
      E[0] = L;
      e: for (var W = 0, G = E.length, nr = G >>> 1; W < nr; ) {
        var vt = 2 * (W + 1) - 1,
          El = E[vt],
          yt = vt + 1,
          rr = E[yt];
        if (0 > l(El, L))
          yt < G && 0 > l(rr, El)
            ? ((E[W] = rr), (E[yt] = L), (W = yt))
            : ((E[W] = El), (E[vt] = L), (W = vt));
        else if (yt < G && 0 > l(rr, L)) (E[W] = rr), (E[yt] = L), (W = yt);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var L = E.sortIndex - z.sortIndex;
    return L !== 0 ? L : E.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    _ = !1,
    w = !1,
    I = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(E) {
    if (((w = !1), d(E), !_))
      if (n(s) !== null) (_ = !0), kl(S);
      else {
        var z = n(c);
        z !== null && Sl(v, z.startTime - E);
      }
  }
  function S(E, z) {
    (_ = !1), w && ((w = !1), f(P), (P = -1)), (g = !0);
    var L = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (E && !Ne()));

      ) {
        var W = m.callback;
        if (typeof W == 'function') {
          (m.callback = null), (p = m.priorityLevel);
          var G = W(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof G == 'function' ? (m.callback = G) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var nr = !0;
      else {
        var vt = n(c);
        vt !== null && Sl(v, vt.startTime - z), (nr = !1);
      }
      return nr;
    } finally {
      (m = null), (p = L), (g = !1);
    }
  }
  var C = !1,
    N = null,
    P = -1,
    H = 5,
    j = -1;
  function Ne() {
    return !(e.unstable_now() - j < H);
  }
  function fn() {
    if (N !== null) {
      var E = e.unstable_now();
      j = E;
      var z = !0;
      try {
        z = N(!0, E);
      } finally {
        z ? dn() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var dn;
  if (typeof a == 'function')
    dn = function () {
      a(fn);
    };
  else if (typeof MessageChannel < 'u') {
    var Ai = new MessageChannel(),
      dc = Ai.port2;
    (Ai.port1.onmessage = fn),
      (dn = function () {
        dc.postMessage(null);
      });
  } else
    dn = function () {
      I(fn, 0);
    };
  function kl(E) {
    (N = E), C || ((C = !0), dn());
  }
  function Sl(E, z) {
    P = I(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || g || ((_ = !0), kl(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var L = p;
      p = z;
      try {
        return E();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var L = p;
      p = E;
      try {
        return z();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, L) {
      var W = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? W + L : W))
          : (L = W),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = L + G),
        (E = {
          id: h++,
          callback: z,
          priorityLevel: E,
          startTime: L,
          expirationTime: G,
          sortIndex: -1,
        }),
        L > W
          ? ((E.sortIndex = L),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (w ? (f(P), (P = -1)) : (w = !0), Sl(v, L - W)))
          : ((E.sortIndex = G), t(s, E), _ || g || ((_ = !0), kl(S))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var z = p;
      return function () {
        var L = p;
        p = z;
        try {
          return E.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(cs);
as.exports = cs;
var Dc = as.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = sn,
  ye = Dc;
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ds = new Set(),
  Mn = {};
function jt(e, t) {
  bt(e, t), bt(e + 'Capture', t);
}
function bt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
}
var We = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ql = Object.prototype.hasOwnProperty,
  Ic =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wi = {},
  Qi = {};
function Uc(e) {
  return ql.call(Qi, e)
    ? !0
    : ql.call(Wi, e)
    ? !1
    : Ic.test(e)
    ? (Qi[e] = !0)
    : ((Wi[e] = !0), !1);
}
function $c(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ac(e, t, n, r) {
  if (t === null || typeof t > 'u' || $c(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Zo, Jo);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ac(t, n, l, r) && (n = null),
    r || l === null
      ? Uc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for('react.element'),
  Ft = Symbol.for('react.portal'),
  Dt = Symbol.for('react.fragment'),
  bo = Symbol.for('react.strict_mode'),
  bl = Symbol.for('react.profiler'),
  ps = Symbol.for('react.provider'),
  ms = Symbol.for('react.context'),
  ei = Symbol.for('react.forward_ref'),
  eo = Symbol.for('react.suspense'),
  to = Symbol.for('react.suspense_list'),
  ti = Symbol.for('react.memo'),
  Je = Symbol.for('react.lazy'),
  hs = Symbol.for('react.offscreen'),
  Ki = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ki && e[Ki]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  Cl;
function kn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || '';
    }
  return (
    `
` +
    Cl +
    e
  );
}
var Nl = !1;
function Pl(e, t) {
  if (!e || Nl) return '';
  Nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? kn(e) : '';
}
function Vc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn('Lazy');
    case 13:
      return kn('Suspense');
    case 19:
      return kn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e;
    case 11:
      return (e = Pl(e.type.render, !1)), e;
    case 1:
      return (e = Pl(e.type, !0)), e;
    default:
      return '';
  }
}
function no(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Dt:
      return 'Fragment';
    case Ft:
      return 'Portal';
    case bl:
      return 'Profiler';
    case bo:
      return 'StrictMode';
    case eo:
      return 'Suspense';
    case to:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ms:
        return (e.displayName || 'Context') + '.Consumer';
      case ps:
        return (e._context.displayName || 'Context') + '.Provider';
      case ei:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ti:
        return (
          (t = e.displayName || null), t !== null ? t : no(e.type) || 'Memo'
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return no(e(t));
        } catch {}
    }
  return null;
}
function Bc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return no(t);
    case 8:
      return t === bo ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function vs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Hc(e) {
  var t = vs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Hc(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = vs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ro(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yi(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function gs(e, t) {
  (t = t.checked), t != null && qo(e, 'checked', t, !1);
}
function lo(e, t) {
  gs(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? oo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && oo(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Xi(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function oo(e, t, n) {
  (t !== 'number' || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Sn = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Gi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function _s(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Zi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ws(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function uo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ws(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ur,
  ks = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement('div'),
          ur.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Cn).forEach(function (e) {
  Wc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e]);
  });
});
function Ss(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Es(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ss(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Qc = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function so(e, t) {
  if (t) {
    if (Qc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function ao(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var co = null;
function ni(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fo = null,
  Xt = null,
  Gt = null;
function Ji(e) {
  if ((e = er(e))) {
    if (typeof fo != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = cl(t)), fo(e.stateNode, e.type, t));
  }
}
function xs(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function Cs() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), Ji(e), t)) for (e = 0; e < t.length; e++) Ji(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function Ps() {}
var zl = !1;
function zs(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    (zl = !1), (Xt !== null || Gt !== null) && (Ps(), Cs());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var po = !1;
if (We)
  try {
    var mn = {};
    Object.defineProperty(mn, 'passive', {
      get: function () {
        po = !0;
      },
    }),
      window.addEventListener('test', mn, mn),
      window.removeEventListener('test', mn, mn);
  } catch {
    po = !1;
  }
function Kc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Nn = !1,
  Dr = null,
  Ir = !1,
  mo = null,
  Yc = {
    onError: function (e) {
      (Nn = !0), (Dr = e);
    },
  };
function Xc(e, t, n, r, l, o, i, u, s) {
  (Nn = !1), (Dr = null), Kc.apply(Yc, arguments);
}
function Gc(e, t, n, r, l, o, i, u, s) {
  if ((Xc.apply(this, arguments), Nn)) {
    if (Nn) {
      var c = Dr;
      (Nn = !1), (Dr = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (mo = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ls(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qi(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function Zc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return qi(l), e;
        if (o === r) return qi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = Zc(e)), e !== null ? js(e) : null;
}
function js(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = js(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = ye.unstable_scheduleCallback,
  bi = ye.unstable_cancelCallback,
  Jc = ye.unstable_shouldYield,
  qc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  bc = ye.unstable_getCurrentPriorityLevel,
  ri = ye.unstable_ImmediatePriority,
  Os = ye.unstable_UserBlockingPriority,
  Ur = ye.unstable_NormalPriority,
  ef = ye.unstable_LowPriority,
  Ms = ye.unstable_IdlePriority,
  il = null,
  Ie = null;
function tf(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == 'function')
    try {
      Ie.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : lf,
  nf = Math.log,
  rf = Math.LN2;
function lf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nf(e) / rf) | 0)) | 0;
}
var sr = 64,
  ar = 4194304;
function En(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = En(u)) : ((o &= i), o !== 0 && (r = En(o)));
  } else (i = n & ~l), i !== 0 ? (r = En(i)) : o !== 0 && (r = En(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function of(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - je(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = of(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ho(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fs() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function sf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function li(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Ds(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Is,
  oi,
  Us,
  $s,
  As,
  vo = !1,
  cr = [],
  rt = null,
  lt = null,
  ot = null,
  In = new Map(),
  Un = new Map(),
  be = [],
  af =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function eu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      lt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ot = null;
      break;
    case 'pointerover':
    case 'pointerout':
      In.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Un.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function cf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rt = hn(rt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (lt = hn(lt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ot = hn(ot, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return In.set(o, hn(In.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Un.set(o, hn(Un.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Vs(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ls(n)), t !== null)) {
          (e.blockedOn = t),
            As(e.priority, function () {
              Us(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (co = r), n.target.dispatchEvent(r), (co = null);
    } else return (t = er(n)), t !== null && oi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tu(e, t, n) {
  xr(e) && n.delete(t);
}
function ff() {
  (vo = !1),
    rt !== null && xr(rt) && (rt = null),
    lt !== null && xr(lt) && (lt = null),
    ot !== null && xr(ot) && (ot = null),
    In.forEach(tu),
    Un.forEach(tu);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vo ||
      ((vo = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, ff)));
}
function $n(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < cr.length) {
    vn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && vn(rt, e),
      lt !== null && vn(lt, e),
      ot !== null && vn(ot, e),
      In.forEach(t),
      Un.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Vs(n), n.blockedOn === null && be.shift();
}
var Zt = Xe.ReactCurrentBatchConfig,
  Ar = !0;
function df(e, t, n, r) {
  var l = O,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (O = 1), ii(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = o);
  }
}
function pf(e, t, n, r) {
  var l = O,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (O = 4), ii(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = o);
  }
}
function ii(e, t, n, r) {
  if (Ar) {
    var l = yo(e, t, n, r);
    if (l === null) $l(e, t, r, Vr, n), eu(e, r);
    else if (cf(l, e, t, n, r)) r.stopPropagation();
    else if ((eu(e, r), t & 4 && -1 < af.indexOf(e))) {
      for (; l !== null; ) {
        var o = er(l);
        if (
          (o !== null && Is(o),
          (o = yo(e, t, n, r)),
          o === null && $l(e, t, r, Vr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Vr = null;
function yo(e, t, n, r) {
  if (((Vr = null), (e = ni(r)), (e = kt(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ls(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vr = e), null;
}
function Bs(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (bc()) {
        case ri:
          return 1;
        case Os:
          return 4;
        case Ur:
        case ef:
          return 16;
        case Ms:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  ui = null,
  Cr = null;
function Hs() {
  if (Cr) return Cr;
  var e,
    t = ui,
    n = t.length,
    r,
    l = 'value' in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function nu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fr
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  si = _e(an),
  bn = V({}, an, { view: 0, detail: 0 }),
  mf = _e(bn),
  Tl,
  jl,
  yn,
  ul = V({}, bn, {
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
    getModifierState: ai,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yn &&
            (yn && e.type === 'mousemove'
              ? ((Tl = e.screenX - yn.screenX), (jl = e.screenY - yn.screenY))
              : (jl = Tl = 0),
            (yn = e)),
          Tl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : jl;
    },
  }),
  ru = _e(ul),
  hf = V({}, ul, { dataTransfer: 0 }),
  vf = _e(hf),
  yf = V({}, bn, { relatedTarget: 0 }),
  Rl = _e(yf),
  gf = V({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = _e(gf),
  wf = V({}, an, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kf = _e(wf),
  Sf = V({}, an, { data: 0 }),
  lu = _e(Sf),
  Ef = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  xf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Cf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function ai() {
  return Nf;
}
var Pf = V({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = Ef[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Nr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? xf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ai,
    charCode: function (e) {
      return e.type === 'keypress' ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Nr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  zf = _e(Pf),
  Lf = V({}, ul, {
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
  ou = _e(Lf),
  Tf = V({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ai,
  }),
  jf = _e(Tf),
  Rf = V({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = _e(Rf),
  Mf = V({}, ul, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ff = _e(Mf),
  Df = [9, 13, 27, 32],
  ci = We && 'CompositionEvent' in window,
  Pn = null;
We && 'documentMode' in document && (Pn = document.documentMode);
var If = We && 'TextEvent' in window && !Pn,
  Ws = We && (!ci || (Pn && 8 < Pn && 11 >= Pn)),
  iu = String.fromCharCode(32),
  uu = !1;
function Qs(e, t) {
  switch (e) {
    case 'keyup':
      return Df.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var It = !1;
function Uf(e, t) {
  switch (e) {
    case 'compositionend':
      return Ks(t);
    case 'keypress':
      return t.which !== 32 ? null : ((uu = !0), iu);
    case 'textInput':
      return (e = t.data), e === iu && uu ? null : e;
    default:
      return null;
  }
}
function $f(e, t) {
  if (It)
    return e === 'compositionend' || (!ci && Qs(e, t))
      ? ((e = Hs()), (Cr = ui = tt = null), (It = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ws && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Af = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Af[e.type] : t === 'textarea';
}
function Ys(e, t, n, r) {
  xs(r),
    (t = Br(t, 'onChange')),
    0 < t.length &&
      ((n = new si('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  An = null;
function Vf(e) {
  la(e, 0);
}
function sl(e) {
  var t = At(e);
  if (ys(t)) return e;
}
function Bf(e, t) {
  if (e === 'change') return t;
}
var Xs = !1;
if (We) {
  var Ol;
  if (We) {
    var Ml = 'oninput' in document;
    if (!Ml) {
      var au = document.createElement('div');
      au.setAttribute('oninput', 'return;'),
        (Ml = typeof au.oninput == 'function');
    }
    Ol = Ml;
  } else Ol = !1;
  Xs = Ol && (!document.documentMode || 9 < document.documentMode);
}
function cu() {
  zn && (zn.detachEvent('onpropertychange', Gs), (An = zn = null));
}
function Gs(e) {
  if (e.propertyName === 'value' && sl(An)) {
    var t = [];
    Ys(t, An, e, ni(e)), zs(Vf, t);
  }
}
function Hf(e, t, n) {
  e === 'focusin'
    ? (cu(), (zn = t), (An = n), zn.attachEvent('onpropertychange', Gs))
    : e === 'focusout' && cu();
}
function Wf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return sl(An);
}
function Qf(e, t) {
  if (e === 'click') return sl(t);
}
function Kf(e, t) {
  if (e === 'input' || e === 'change') return sl(t);
}
function Yf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == 'function' ? Object.is : Yf;
function Vn(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function du(e, t) {
  var n = fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fu(n);
  }
}
function Zs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zs(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Js() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Xf(e) {
  var t = Js(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = du(n, o));
        var i = du(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gf = We && 'documentMode' in document && 11 >= document.documentMode,
  Ut = null,
  go = null,
  Ln = null,
  _o = !1;
function pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    Ut == null ||
    Ut !== Fr(r) ||
    ((r = Ut),
    'selectionStart' in r && fi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && Vn(Ln, r)) ||
      ((Ln = r),
      (r = Br(go, 'onSelect')),
      0 < r.length &&
        ((t = new si('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ut))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var $t = {
    animationend: dr('Animation', 'AnimationEnd'),
    animationiteration: dr('Animation', 'AnimationIteration'),
    animationstart: dr('Animation', 'AnimationStart'),
    transitionend: dr('Transition', 'TransitionEnd'),
  },
  Fl = {},
  qs = {};
We &&
  ((qs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  'TransitionEvent' in window || delete $t.transitionend.transition);
function al(e) {
  if (Fl[e]) return Fl[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return (Fl[e] = t[n]);
  return e;
}
var bs = al('animationend'),
  ea = al('animationiteration'),
  ta = al('animationstart'),
  na = al('transitionend'),
  ra = new Map(),
  mu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function pt(e, t) {
  ra.set(e, t), jt(t, [e]);
}
for (var Dl = 0; Dl < mu.length; Dl++) {
  var Il = mu[Dl],
    Zf = Il.toLowerCase(),
    Jf = Il[0].toUpperCase() + Il.slice(1);
  pt(Zf, 'on' + Jf);
}
pt(bs, 'onAnimationEnd');
pt(ea, 'onAnimationIteration');
pt(ta, 'onAnimationStart');
pt('dblclick', 'onDoubleClick');
pt('focusin', 'onFocus');
pt('focusout', 'onBlur');
pt(na, 'onTransitionEnd');
bt('onMouseEnter', ['mouseout', 'mouseover']);
bt('onMouseLeave', ['mouseout', 'mouseover']);
bt('onPointerEnter', ['pointerout', 'pointerover']);
bt('onPointerLeave', ['pointerout', 'pointerover']);
jt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
jt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
jt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
jt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
jt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
jt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var xn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  qf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(xn));
function hu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Gc(r, t, void 0, e), (e.currentTarget = null);
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          hu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          hu(l, u, c), (o = s);
        }
    }
  }
  if (Ir) throw ((e = mo), (Ir = !1), (mo = null), e);
}
function F(e, t) {
  var n = t[xo];
  n === void 0 && (n = t[xo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (oa(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
  var r = 0;
  t && (r |= 4), oa(n, e, r, t);
}
var pr = '_reactListening' + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[pr]) {
    (e[pr] = !0),
      ds.forEach(function (n) {
        n !== 'selectionchange' && (qf.has(n) || Ul(n, !1, e), Ul(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pr] || ((t[pr] = !0), Ul('selectionchange', !1, t));
  }
}
function oa(e, t, n, r) {
  switch (Bs(t)) {
    case 1:
      var l = df;
      break;
    case 4:
      l = pf;
      break;
    default:
      l = ii;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !po ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = kt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  zs(function () {
    var c = o,
      h = ni(n),
      m = [];
    e: {
      var p = ra.get(e);
      if (p !== void 0) {
        var g = si,
          _ = e;
        switch (e) {
          case 'keypress':
            if (Nr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = zf;
            break;
          case 'focusin':
            (_ = 'focus'), (g = Rl);
            break;
          case 'focusout':
            (_ = 'blur'), (g = Rl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Rl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = ru;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = vf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = jf;
            break;
          case bs:
          case ea:
          case ta:
            g = _f;
            break;
          case na:
            g = Of;
            break;
          case 'scroll':
            g = mf;
            break;
          case 'wheel':
            g = Ff;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = kf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ou;
        }
        var w = (t & 4) !== 0,
          I = !w && e === 'scroll',
          f = w ? (p !== null ? p + 'Capture' : null) : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dn(a, f)), v != null && w.push(Hn(a, v, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((p = new g(p, _, null, n, h)), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== co &&
            (_ = n.relatedTarget || n.fromElement) &&
            (kt(_) || _[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((_ = n.relatedTarget || n.toElement),
              (g = c),
              (_ = _ ? kt(_) : null),
              _ !== null &&
                ((I = Rt(_)), _ !== I || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((g = null), (_ = c)),
          g !== _)
        ) {
          if (
            ((w = ru),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ou),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (I = g == null ? p : At(g)),
            (d = _ == null ? p : At(_)),
            (p = new w(v, a + 'leave', g, n, h)),
            (p.target = I),
            (p.relatedTarget = d),
            (v = null),
            kt(h) === c &&
              ((w = new w(f, a + 'enter', _, n, h)),
              (w.target = d),
              (w.relatedTarget = I),
              (v = w)),
            (I = v),
            g && _)
          )
            t: {
              for (w = g, f = _, a = 0, d = w; d; d = Ot(d)) a++;
              for (d = 0, v = f; v; v = Ot(v)) d++;
              for (; 0 < a - d; ) (w = Ot(w)), a--;
              for (; 0 < d - a; ) (f = Ot(f)), d--;
              for (; a--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ot(w)), (f = Ot(f));
              }
              w = null;
            }
          else w = null;
          g !== null && vu(m, p, g, w, !1),
            _ !== null && I !== null && vu(m, I, _, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? At(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var S = Bf;
        else if (su(p))
          if (Xs) S = Kf;
          else {
            S = Wf;
            var C = Hf;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (S = Qf);
        if (S && (S = S(e, c))) {
          Ys(m, S, n, h);
          break e;
        }
        C && C(e, p, c),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            oo(p, 'number', p.value);
      }
      switch (((C = c ? At(c) : window), e)) {
        case 'focusin':
          (su(C) || C.contentEditable === 'true') &&
            ((Ut = C), (go = c), (Ln = null));
          break;
        case 'focusout':
          Ln = go = Ut = null;
          break;
        case 'mousedown':
          _o = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (_o = !1), pu(m, n, h);
          break;
        case 'selectionchange':
          if (Gf) break;
        case 'keydown':
        case 'keyup':
          pu(m, n, h);
      }
      var N;
      if (ci)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        It
          ? Qs(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (Ws &&
          n.locale !== 'ko' &&
          (It || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && It && (N = Hs())
            : ((tt = h),
              (ui = 'value' in tt ? tt.value : tt.textContent),
              (It = !0))),
        (C = Br(c, P)),
        0 < C.length &&
          ((P = new lu(P, e, null, n, h)),
          m.push({ event: P, listeners: C }),
          N ? (P.data = N) : ((N = Ks(n)), N !== null && (P.data = N)))),
        (N = If ? Uf(e, n) : $f(e, n)) &&
          ((c = Br(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new lu('onBeforeInput', 'beforeinput', null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = N)));
    }
    la(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dn(e, n)),
      o != null && r.unshift(Hn(e, o, l)),
      (o = Dn(e, t)),
      o != null && r.push(Hn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, o)), s != null && i.unshift(Hn(n, s, u)))
        : l || ((s = Dn(n, o)), s != null && i.push(Hn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bf = /\r\n?/g,
  ed = /\u0000|\uFFFD/g;
function yu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      bf,
      `
`
    )
    .replace(ed, '');
}
function mr(e, t, n) {
  if (((t = yu(t)), yu(e) !== t && n)) throw Error(y(425));
}
function Hr() {}
var wo = null,
  ko = null;
function So(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Eo = typeof setTimeout == 'function' ? setTimeout : void 0,
  td = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  gu = typeof Promise == 'function' ? Promise : void 0,
  nd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof gu < 'u'
      ? function (e) {
          return gu.resolve(null).then(e).catch(rd);
        }
      : Eo;
function rd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  $n(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  De = '__reactFiber$' + cn,
  Wn = '__reactProps$' + cn,
  Qe = '__reactContainer$' + cn,
  xo = '__reactEvents$' + cn,
  ld = '__reactListeners$' + cn,
  od = '__reactHandles$' + cn;
function kt(e) {
  var t = e[De];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[De])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[De])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[De] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function cl(e) {
  return e[Wn] || null;
}
var Co = [],
  Vt = -1;
function mt(e) {
  return { current: e };
}
function D(e) {
  0 > Vt || ((e.current = Co[Vt]), (Co[Vt] = null), Vt--);
}
function M(e, t) {
  Vt++, (Co[Vt] = e.current), (e.current = t);
}
var dt = {},
  le = mt(dt),
  fe = mt(!1),
  Nt = dt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Wr() {
  D(fe), D(le);
}
function wu(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  M(le, t), M(fe, n);
}
function ia(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Bc(e) || 'Unknown', l));
  return V({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ia(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(fe),
      D(le),
      M(le, e))
    : D(fe),
    M(fe, n);
}
var Ae = null,
  fl = !1,
  Vl = !1;
function ua(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function id(e) {
  (fl = !0), ua(e);
}
function ht() {
  if (!Vl && Ae !== null) {
    Vl = !0;
    var e = 0,
      t = O;
    try {
      var n = Ae;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (fl = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), Rs(ri, ht), l);
    } finally {
      (O = t), (Vl = !1);
    }
  }
  return null;
}
var Bt = [],
  Ht = 0,
  Kr = null,
  Yr = 0,
  we = [],
  ke = 0,
  Pt = null,
  Ve = 1,
  Be = '';
function _t(e, t) {
  (Bt[Ht++] = Yr), (Bt[Ht++] = Kr), (Kr = e), (Yr = t);
}
function sa(e, t, n) {
  (we[ke++] = Ve), (we[ke++] = Be), (we[ke++] = Pt), (Pt = e);
  var r = Ve;
  e = Be;
  var l = 32 - je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - je(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ve = (1 << (32 - je(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else (Ve = (1 << o) | (n << l) | r), (Be = e);
}
function di(e) {
  e.return !== null && (_t(e, 1), sa(e, 1, 0));
}
function pi(e) {
  for (; e === Kr; )
    (Kr = Bt[--Ht]), (Bt[Ht] = null), (Yr = Bt[--Ht]), (Bt[Ht] = null);
  for (; e === Pt; )
    (Pt = we[--ke]),
      (we[ke] = null),
      (Be = we[--ke]),
      (we[ke] = null),
      (Ve = we[--ke]),
      (we[ke] = null);
}
var ve = null,
  he = null,
  U = !1,
  Te = null;
function aa(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Ve, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Po(e) {
  if (U) {
    var t = he;
    if (t) {
      var n = t;
      if (!Su(e, t)) {
        if (No(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ve;
        t && Su(e, t)
          ? aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (No(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function hr(e) {
  if (e !== ve) return !1;
  if (!U) return Eu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !So(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (No(e)) throw (ca(), Error(y(418)));
    for (; t; ) aa(e, t), (t = it(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              he = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = he; e; ) e = it(e.nextSibling);
}
function tn() {
  (he = ve = null), (U = !1);
}
function mi(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var ud = Xe.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xr = mt(null),
  Gr = null,
  Wt = null,
  hi = null;
function vi() {
  hi = Wt = Gr = null;
}
function yi(e) {
  var t = Xr.current;
  D(Xr), (e._currentValue = t);
}
function zo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Gr = e),
    (hi = Wt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (hi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
      if (Gr === null) throw Error(y(308));
      (Wt = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Wt = Wt.next = e;
  return t;
}
var St = null;
function gi(e) {
  St === null ? (St = [e]) : St.push(e);
}
function fa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), gi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function _i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function da(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), gi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
  }
}
function xu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var _ = e,
            w = u;
          switch (((p = t), (g = n), w.tag)) {
            case 1:
              if (((_ = w.payload), typeof _ == 'function')) {
                m = _.call(g, m, p);
                break e;
              }
              m = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = w.payload),
                (p = typeof _ == 'function' ? _.call(g, m, p) : _),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Lt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Cu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var pa = new fs.Component().refs;
function Lo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = at(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Re(t, e, r, n), Pr(t, e, r));
  },
};
function Nu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vn(n, r) || !Vn(l, o)
      : !0
  );
}
function ma(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = xe(o))
      : ((l = de(t) ? Nt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? en(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Pu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function To(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = pa), _i(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = xe(o))
    : ((o = de(t) ? Nt : le.current), (l.context = en(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Lo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === pa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function ha(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Xl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === Dt
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === Je &&
            zu(S) === a.type))
      ? ((v = l(a, d.props)), (v.ref = gn(f, a, d)), (v.return = f), v)
      : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = gn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, S) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, v, S)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Xl('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = gn(f, null, a)),
            (d.return = f),
            d
          );
        case Ft:
          return (a = Gl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (Sn(a) || pn(a))
        return (a = Ct(a, f.mode, d, null)), (a.return = f), a;
      vr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return S !== null ? null : u(f, a, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === S ? s(f, a, d, v) : null;
        case Ft:
          return d.key === S ? c(f, a, d, v) : null;
        case Je:
          return (S = d._init), p(f, a, S(d._payload), v);
      }
      if (Sn(d) || pn(d)) return S !== null ? null : h(f, a, d, v, null);
      vr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, S) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, S);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case or:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, S);
        case Ft:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, S);
        case Je:
          var C = v._init;
          return g(f, a, d, C(v._payload), S);
      }
      if (Sn(v) || pn(v)) return (f = f.get(d) || null), h(a, f, v, S, null);
      vr(a, v);
    }
    return null;
  }
  function _(f, a, d, v) {
    for (
      var S = null, C = null, N = a, P = (a = 0), H = null;
      N !== null && P < d.length;
      P++
    ) {
      N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
      var j = p(f, N, d[P], v);
      if (j === null) {
        N === null && (N = H);
        break;
      }
      e && N && j.alternate === null && t(f, N),
        (a = o(j, a, P)),
        C === null ? (S = j) : (C.sibling = j),
        (C = j),
        (N = H);
    }
    if (P === d.length) return n(f, N), U && _t(f, P), S;
    if (N === null) {
      for (; P < d.length; P++)
        (N = m(f, d[P], v)),
          N !== null &&
            ((a = o(N, a, P)), C === null ? (S = N) : (C.sibling = N), (C = N));
      return U && _t(f, P), S;
    }
    for (N = r(f, N); P < d.length; P++)
      (H = g(N, f, P, d[P], v)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? P : H.key),
          (a = o(H, a, P)),
          C === null ? (S = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        N.forEach(function (Ne) {
          return t(f, Ne);
        }),
      U && _t(f, P),
      S
    );
  }
  function w(f, a, d, v) {
    var S = pn(d);
    if (typeof S != 'function') throw Error(y(150));
    if (((d = S.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (S = null), N = a, P = (a = 0), H = null, j = d.next();
      N !== null && !j.done;
      P++, j = d.next()
    ) {
      N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
      var Ne = p(f, N, j.value, v);
      if (Ne === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ne.alternate === null && t(f, N),
        (a = o(Ne, a, P)),
        C === null ? (S = Ne) : (C.sibling = Ne),
        (C = Ne),
        (N = H);
    }
    if (j.done) return n(f, N), U && _t(f, P), S;
    if (N === null) {
      for (; !j.done; P++, j = d.next())
        (j = m(f, j.value, v)),
          j !== null &&
            ((a = o(j, a, P)), C === null ? (S = j) : (C.sibling = j), (C = j));
      return U && _t(f, P), S;
    }
    for (N = r(f, N); !j.done; P++, j = d.next())
      (j = g(N, f, P, j.value, v)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? P : j.key),
          (a = o(j, a, P)),
          C === null ? (S = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        N.forEach(function (fn) {
          return t(f, fn);
        }),
      U && _t(f, P),
      S
    );
  }
  function I(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var S = d.key, C = a; C !== null; ) {
              if (C.key === S) {
                if (((S = d.type), S === Dt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Je &&
                    zu(S) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = gn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Dt
              ? ((a = Ct(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = gn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Gl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (C = d._init), I(f, a, C(d._payload), v);
      }
      if (Sn(d)) return _(f, a, d, v);
      if (pn(d)) return w(f, a, d, v);
      vr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Xl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return I;
}
var nn = ha(!0),
  va = ha(!1),
  tr = {},
  Ue = mt(tr),
  Qn = mt(tr),
  Kn = mt(tr);
function Et(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function wi(e, t) {
  switch ((M(Kn, t), M(Qn, e), M(Ue, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uo(t, e));
  }
  D(Ue), M(Ue, t);
}
function rn() {
  D(Ue), D(Qn), D(Kn);
}
function ya(e) {
  Et(Kn.current);
  var t = Et(Ue.current),
    n = uo(t, e.type);
  t !== n && (M(Qn, e), M(Ue, n));
}
function ki(e) {
  Qn.current === e && (D(Ue), D(Qn));
}
var $ = mt(0);
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bl = [];
function Si() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var zr = Xe.ReactCurrentDispatcher,
  Hl = Xe.ReactCurrentBatchConfig,
  zt = 0,
  A = null,
  Y = null,
  Z = null,
  qr = !1,
  Tn = !1,
  Yn = 0,
  sd = 0;
function te() {
  throw Error(y(321));
}
function Ei(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? dd : pd),
    (e = n(r, l)),
    Tn)
  ) {
    o = 0;
    do {
      if (((Tn = !1), (Yn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (zr.current = md),
        (e = n(r, l));
    } while (Tn);
  }
  if (
    ((zr.current = br),
    (t = Y !== null && Y.next !== null),
    (zt = 0),
    (Z = Y = A = null),
    (qr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ci() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Xn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Wl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (A.lanes |= h),
          (Lt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Oe(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Lt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Oe(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ga() {}
function _a(e, t) {
  var n = A,
    r = Ce(),
    l = t(),
    o = !Oe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    Ni(Sa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, ka.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zt & 30 || wa(n, t, l);
  }
  return l;
}
function wa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ka(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ea(t) && xa(e);
}
function Sa(e, t, n) {
  return n(function () {
    Ea(t) && xa(e);
  });
}
function Ea(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = Ke(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Lu(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ca() {
  return Ce().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && Ei(r, i.deps))) {
      l.memoizedState = Gn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Gn(1 | t, n, o, r));
}
function Tu(e, t) {
  return Lr(8390656, 8, e, t);
}
function Ni(e, t) {
  return pl(2048, 8, e, t);
}
function Na(e, t) {
  return pl(4, 2, e, t);
}
function Pa(e, t) {
  return pl(4, 4, e, t);
}
function za(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, za.bind(null, t, e), n)
  );
}
function Pi() {}
function Ta(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ja(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ra(e, t, n) {
  return zt & 21
    ? (Oe(n, t) || ((n = Fs()), (A.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function ad(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Hl.transition = r);
  }
}
function Oa() {
  return Ce().memoizedState;
}
function cd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ma(e))
  )
    Fa(t, n);
  else if (((n = fa(e, t, n, r)), n !== null)) {
    var l = ie();
    Re(n, e, r, l), Da(n, t, r);
  }
}
function fd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ma(e)) Fa(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), gi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = fa(e, t, l, r)),
      n !== null && ((l = ie()), Re(n, e, r, l), Da(n, t, r));
  }
}
function Ma(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Fa(e, t) {
  Tn = qr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Da(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
  }
}
var br = {
    readContext: xe,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: Tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, za.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Lu,
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Lu(!1),
        t = e[0];
      return (e = ad.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        zt & 30 || wa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Tu(Sa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gn(9, ka.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = J.identifierPrefix;
      if (U) {
        var n = Be,
          r = Ve;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = sd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pd = {
    readContext: xe,
    useCallback: Ta,
    useContext: xe,
    useEffect: Ni,
    useImperativeHandle: La,
    useInsertionEffect: Na,
    useLayoutEffect: Pa,
    useMemo: ja,
    useReducer: Wl,
    useRef: Ca,
    useState: function () {
      return Wl(Xn);
    },
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      var t = Ce();
      return Ra(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Xn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: ga,
    useSyncExternalStore: _a,
    useId: Oa,
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: xe,
    useCallback: Ta,
    useContext: xe,
    useEffect: Ni,
    useImperativeHandle: La,
    useInsertionEffect: Na,
    useLayoutEffect: Pa,
    useMemo: ja,
    useReducer: Ql,
    useRef: Ca,
    useState: function () {
      return Ql(Xn);
    },
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      var t = Ce();
      return Y === null ? (t.memoizedState = e) : Ra(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Xn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: ga,
    useSyncExternalStore: _a,
    useId: Oa,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Vc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hd = typeof WeakMap == 'function' ? WeakMap : Map;
function Ia(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Vo = r)), jo(e, t);
    }),
    n
  );
}
function Ua(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        jo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        jo(e, t),
          typeof r != 'function' &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ld.bind(null, e, t, n)), t.then(e, e));
}
function Ru(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vd = Xe.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? va(t, null, n, r) : nn(t, e.child, n, r);
}
function Mu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = xi(e, t, n, r, o, l)),
    (n = Ci()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (U && n && di(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Fi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), $a(e, t, o, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(i, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $a(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vn(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ye(e, t, l);
  }
  return Ro(e, t, n, r, l);
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Kt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Kt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(Kt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Kt, me),
      (me |= r);
  return oe(e, t, l, n), t.child;
}
function Va(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ro(e, t, n, r, l) {
  var o = de(n) ? Nt : le.current;
  return (
    (o = en(t, o)),
    Jt(t, l),
    (n = xi(e, t, n, r, o, l)),
    (r = Ci()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (U && r && di(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Du(e, t, n, r, l) {
  if (de(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Tr(e, t), ma(t, n, r), To(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = xe(c))
      : ((c = de(n) ? Nt : le.current), (c = en(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Pu(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Zr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || qe
        ? (typeof h == 'function' && (Lo(t, n, h, r), (s = t.memoizedState)),
          (u = qe || Nu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      da(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = xe(s))
        : ((s = de(n) ? Nt : le.current), (s = en(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && Pu(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Zr(t, r, i, l);
    var _ = t.memoizedState;
    u !== m || p !== _ || fe.current || qe
      ? (typeof g == 'function' && (Lo(t, n, g, r), (_ = t.memoizedState)),
        (c = qe || Nu(t, n, c, r, p, _, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, _, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, _, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (i.props = r),
        (i.state = _),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oo(e, t, n, r, o, l);
}
function Oo(e, t, n, r, l, o) {
  Va(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ku(t, n, !1), Ye(e, t, o);
  (r = t.stateNode), (vd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nn(t, e.child, null, o)), (t.child = nn(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && ku(t, n, !0),
    t.child
  );
}
function Ba(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wu(e, t.context, !1),
    wi(e, t.containerInfo);
}
function Iu(e, t, n, r, l) {
  return tn(), mi(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ha(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  )
    return (
      Po(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = vl(i, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fo(n)),
              (t.memoizedState = Mo),
              e)
            : zi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return yd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Fo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Mo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zi(e, t) {
  return (
    (t = vl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yr(e, t, n, r) {
  return (
    r !== null && mi(r),
    nn(t, e.child, null, n),
    (e = zi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(y(422)))), yr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = vl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Ct(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, i),
        (t.child.memoizedState = Fo(i)),
        (t.memoizedState = Mo),
        o);
  if (!(t.mode & 1)) return yr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Kl(o, r, void 0)), yr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ke(e, l), Re(r, e, l, -1));
    }
    return Mi(), (r = Kl(Error(y(421)))), yr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Td.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (he = it(l.nextSibling)),
      (ve = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((we[ke++] = Ve),
        (we[ke++] = Be),
        (we[ke++] = Pt),
        (Ve = e.id),
        (Be = e.overflow),
        (Pt = t)),
      (t = zi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zo(e.return, t, n);
}
function Yl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Wa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t);
        else if (e.tag === 19) Uu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Yl(t, !0, n, null, o);
        break;
      case 'together':
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ba(t), tn();
      break;
    case 5:
      ya(t);
      break;
    case 1:
      de(t.type) && Qr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ha(e, t, n)
          : (M($, $.current & 1),
            (e = Ye(e, t, n)),
            e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aa(e, t, n);
  }
  return Ye(e, t, n);
}
var Qa, Do, Ka, Ya;
Qa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Do = function () {};
Ka = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(Ue.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = ro(e, l)), (r = ro(e, r)), (o = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = io(e, l)), (r = io(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Hr);
    }
    so(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && F('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ya = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _d(e, t, n) {
  var r = t.pendingProps;
  switch ((pi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && Wr(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        D(fe),
        D(le),
        Si(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Wo(Te), (Te = null)))),
        Do(e, t),
        ne(t),
        null
      );
    case 5:
      ki(t);
      var l = Et(Kn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ka(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = Et(Ue.current)), hr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[De] = t), (r[Wn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              F('cancel', r), F('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < xn.length; l++) F(xn[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              F('error', r), F('load', r);
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              Yi(r, o), F('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F('invalid', r);
              break;
            case 'textarea':
              Gi(r, o), F('invalid', r);
          }
          so(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Mn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  F('scroll', r);
            }
          switch (n) {
            case 'input':
              ir(r), Xi(r, o, !0);
              break;
            case 'textarea':
              ir(r), Zi(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ws(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[De] = t),
            (e[Wn] = r),
            Qa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ao(n, r)), n)) {
              case 'dialog':
                F('cancel', e), F('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                F('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < xn.length; l++) F(xn[l], e);
                l = r;
                break;
              case 'source':
                F('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                F('error', e), F('load', e), (l = r);
                break;
              case 'details':
                F('toggle', e), (l = r);
                break;
              case 'input':
                Yi(e, r), (l = ro(e, r)), F('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F('invalid', e);
                break;
              case 'textarea':
                Gi(e, r), (l = io(e, r)), F('invalid', e);
                break;
              default:
                l = r;
            }
            so(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Es(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ks(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Fn(e, s)
                    : typeof s == 'number' && Fn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Mn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && F('scroll', e)
                      : s != null && qo(e, o, s, i));
              }
            switch (n) {
              case 'input':
                ir(e), Xi(e, r, !1);
                break;
              case 'textarea':
                ir(e), Zi(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ft(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Hr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ya(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = Et(Kn.current)), Et(Ue.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[De] = t),
            (o = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[De] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (D($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && t.mode & 1 && !(t.flags & 128))
          ca(), tn(), (t.flags |= 98560), (o = !1);
        else if (((o = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[De] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Te !== null && (Wo(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : Mi())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        rn(), Do(e, t), e === null && Bn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return yi(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Wr(), ne(t), null;
    case 19:
      if ((D($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) _n(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Jr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    _n(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > on &&
            ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - o.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          M($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Oi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function wd(e, t) {
  switch ((pi(t), t.tag)) {
    case 1:
      return (
        de(t.type) && Wr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        D(fe),
        D(le),
        Si(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ki(t), null;
    case 13:
      if ((D($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D($), null;
    case 4:
      return rn(), null;
    case 10:
      return yi(t.type._context), null;
    case 22:
    case 23:
      return Oi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  re = !1,
  kd = typeof WeakSet == 'function' ? WeakSet : Set,
  k = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Io(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var $u = !1;
function Sd(e, t) {
  if (((wo = Ar), (e = Js()), fi(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ko = { focusedElem: e, selectionRange: n }, Ar = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var w = _.memoizedProps,
                    I = _.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ze(t.type, w),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (_ = $u), ($u = !1), _;
}
function jn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Io(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Uo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Xa(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[De], delete t[Wn], delete t[xo], delete t[ld], delete t[od])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Au(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ga(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), (e = e.sibling);
}
function Ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ao(e, t, n), e = e.sibling; e !== null; ) Ao(e, t, n), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ge(e, t, n) {
  for (n = n.child; n !== null; ) Za(e, t, n), (n = n.sibling);
}
function Za(e, t, n) {
  if (Ie && typeof Ie.onCommitFiberUnmount == 'function')
    try {
      Ie.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Qt(n, t);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ge(e, t, n),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            $n(e))
          : Al(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = n.stateNode.containerInfo),
        (Le = !0),
        Ge(e, t, n),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Io(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Ge(e, t, n);
      break;
    case 21:
      Ge(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ge(e, t, n), (re = r))
        : Ge(e, t, n);
      break;
    default:
      Ge(e, t, n);
  }
}
function Vu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kd()),
      t.forEach(function (r) {
        var l = jd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Za(o, i, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ja(t, e), (t = t.sibling);
}
function Ja(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Me(e), r & 4)) {
        try {
          jn(3, e, e.return), ml(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          jn(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      Pe(t, e), Me(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Me(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, '');
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && gs(l, o),
              ao(u, i);
            var c = ao(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === 'style'
                ? Es(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? ks(l, m)
                : h === 'children'
                ? Fn(l, m)
                : qo(l, h, m, c);
            }
            switch (u) {
              case 'input':
                lo(l, o);
                break;
              case 'textarea':
                _s(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Yt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yt(l, !!o.multiple, o.defaultValue, !0)
                      : Yt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Wn] = o;
          } catch (w) {
            B(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (w) {
          B(e, e.return, w);
        }
      break;
    case 4:
      Pe(t, e), Me(e);
      break;
    case 13:
      Pe(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ji = Q())),
        r & 4 && Vu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), Pe(t, e), (re = c)) : Pe(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jn(4, p, p.return);
                  break;
                case 1:
                  Qt(p, p.return);
                  var _ = p.stateNode;
                  if (typeof _.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (w) {
                      B(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Qt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Hu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : Hu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Ss('display', i)));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (w) {
                B(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Me(e), r & 4 && Vu(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ga(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ''), (r.flags &= -33));
          var o = Au(e);
          Ao(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Au(e);
          $o(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ed(e, t, n) {
  (k = e), qa(e);
}
function qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || gr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = gr;
        var c = re;
        if (((gr = i), (re = s) && !c))
          for (k = l; k !== null; )
            (i = k),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Wu(l)
                : s !== null
                ? ((s.return = i), (k = s))
                : Wu(l);
        for (; o !== null; ) (k = o), qa(o), (o = o.sibling);
        (k = l), (gr = u), (re = c);
      }
      Bu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : Bu(e);
  }
}
function Bu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Cu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && $n(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Uo(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Hu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Wu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            Uo(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Uo(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var xd = Math.ceil,
  el = Xe.ReactCurrentDispatcher,
  Li = Xe.ReactCurrentOwner,
  Ee = Xe.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Kt = mt(0),
  X = 0,
  Zn = null,
  Lt = 0,
  hl = 0,
  Ti = 0,
  Rn = null,
  ae = null,
  ji = 0,
  on = 1 / 0,
  $e = null,
  tl = !1,
  Vo = null,
  st = null,
  _r = !1,
  nt = null,
  nl = 0,
  On = 0,
  Bo = null,
  jr = -1,
  Rr = 0;
function ie() {
  return R & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : ud.transition !== null
      ? (Rr === 0 && (Rr = Fs()), Rr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bs(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < On) throw ((On = 0), (Bo = null), Error(y(185)));
  qn(e, n, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (hl |= n), X === 4 && et(e, b)),
      pe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((on = Q() + 500), fl && ht()));
}
function pe(e, t) {
  var n = e.callbackNode;
  uf(e, t);
  var r = $r(e, e === J ? b : 0);
  if (r === 0)
    n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bi(n), t === 1))
      e.tag === 0 ? id(Qu.bind(null, e)) : ua(Qu.bind(null, e)),
        nd(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ds(r)) {
        case 1:
          n = ri;
          break;
        case 4:
          n = Os;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Ms;
          break;
        default:
          n = Ur;
      }
      n = ic(n, ba.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ba(e, t) {
  if (((jr = -1), (Rr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = $r(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = tc();
    (J !== e || b !== t) && (($e = null), (on = Q() + 500), xt(e, t));
    do
      try {
        Pd();
        break;
      } catch (u) {
        ec(e, u);
      }
    while (1);
    vi(),
      (el.current = o),
      (R = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ho(e)), l !== 0 && ((r = l), (t = Ho(e, l)))), t === 1)
    )
      throw ((n = Zn), xt(e, 0), et(e, r), pe(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Cd(l) &&
          ((t = rl(e, r)),
          t === 2 && ((o = ho(e)), o !== 0 && ((r = o), (t = Ho(e, o)))),
          t === 1))
      )
        throw ((n = Zn), xt(e, 0), et(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ae, $e);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = ji + 500 - Q()), 10 < t))
          ) {
            if ($r(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Eo(wt.bind(null, e, ae, $e), t);
            break;
          }
          wt(e, ae, $e);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - je(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Eo(wt.bind(null, e, ae, $e), r);
            break;
          }
          wt(e, ae, $e);
          break;
        case 5:
          wt(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? ba.bind(null, e) : null;
}
function Ho(e, t) {
  var n = Rn;
  return (
    e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Wo(t)),
    e
  );
}
function Wo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Cd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Ti,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qu(e) {
  if (R & 6) throw Error(y(327));
  qt();
  var t = $r(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ho(e);
    r !== 0 && ((t = r), (n = Ho(e, r)));
  }
  if (n === 1) throw ((n = Zn), xt(e, 0), et(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function Ri(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((on = Q() + 500), fl && ht());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && qt();
  var t = R;
  R |= 1;
  var n = Ee.transition,
    r = O;
  try {
    if (((Ee.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ee.transition = n), (R = t), !(R & 6) && ht();
  }
}
function Oi() {
  (me = Kt.current), D(Kt);
}
function xt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), td(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((pi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wr();
          break;
        case 3:
          rn(), D(fe), D(le), Si();
          break;
        case 5:
          ki(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          D($);
          break;
        case 19:
          D($);
          break;
        case 10:
          yi(r.type._context);
          break;
        case 22:
        case 23:
          Oi();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = ct(e.current, null)),
    (b = me = t),
    (X = 0),
    (Zn = null),
    (Ti = hl = Lt = 0),
    (ae = Rn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function ec(e, t) {
  do {
    var n = K;
    try {
      if ((vi(), (zr.current = br), qr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        qr = !1;
      }
      if (
        ((zt = 0),
        (Z = Y = A = null),
        (Tn = !1),
        (Yn = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Zn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Ru(i);
          if (g !== null) {
            (g.flags &= -257),
              Ou(g, i, u, o, t),
              g.mode & 1 && ju(o, c, t),
              (t = g),
              (s = c);
            var _ = t.updateQueue;
            if (_ === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else _.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ju(o, c, t), Mi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var I = Ru(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Ou(I, i, u, o, t),
              mi(ln(s, u));
            break e;
          }
        }
        (o = s = ln(s, u)),
          X !== 4 && (X = 2),
          Rn === null ? (Rn = [o]) : Rn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ia(o, s, t);
              xu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ua(o, u, t);
                xu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rc(n);
    } catch (S) {
      (t = S), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function tc() {
  var e = el.current;
  return (el.current = br), e === null ? br : e;
}
function Mi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Lt & 268435455) && !(hl & 268435455)) || et(J, b);
}
function rl(e, t) {
  var n = R;
  R |= 2;
  var r = tc();
  (J !== e || b !== t) && (($e = null), xt(e, t));
  do
    try {
      Nd();
      break;
    } catch (l) {
      ec(e, l);
    }
  while (1);
  if ((vi(), (R = n), (el.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function Nd() {
  for (; K !== null; ) nc(K);
}
function Pd() {
  for (; K !== null && !Jc(); ) nc(K);
}
function nc(e) {
  var t = oc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? rc(e) : (K = t),
    (Li.current = null);
}
function rc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = _d(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = O,
    l = Ee.transition;
  try {
    (Ee.transition = null), (O = 1), zd(e, t, n, r);
  } finally {
    (Ee.transition = l), (O = r);
  }
  return null;
}
function zd(e, t, n, r) {
  do qt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (sf(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      ic(Ur, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ee.transition), (Ee.transition = null);
    var i = O;
    O = 1;
    var u = R;
    (R |= 4),
      (Li.current = null),
      Sd(e, n),
      Ja(n, e),
      Xf(ko),
      (Ar = !!wo),
      (ko = wo = null),
      (e.current = n),
      Ed(n),
      qc(),
      (R = u),
      (O = i),
      (Ee.transition = o);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (nt = e), (nl = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    tf(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Vo), (Vo = null), e);
  return (
    nl & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Bo ? On++ : ((On = 0), (Bo = e))) : (On = 0),
    ht(),
    null
  );
}
function qt() {
  if (nt !== null) {
    var e = Ds(nl),
      t = Ee.transition,
      n = O;
    try {
      if (((Ee.transition = null), (O = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (nl = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        g = h.return;
                      if ((Xa(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var w = _.child;
                if (w !== null) {
                  _.child = null;
                  do {
                    var I = w.sibling;
                    (w.sibling = null), (w = I);
                  } while (w !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (k = d);
          else
            e: for (i = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (S) {
                  B(u, u.return, S);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((R = l), ht(), Ie && typeof Ie.onPostCommitFiberRoot == 'function')
        )
          try {
            Ie.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ee.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = ln(n, t)),
    (t = Ia(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ie()),
    e !== null && (qn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (st === null || !st.has(r)))
        ) {
          (e = ln(n, e)),
            (e = Ua(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ie()),
            t !== null && (qn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ld(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - ji)
        ? xt(e, 0)
        : (Ti |= n)),
    pe(e, t);
}
function lc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1));
  var n = ie();
  (e = Ke(e, t)), e !== null && (qn(e, t, n), pe(e, n));
}
function Td(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lc(e, n);
}
function jd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), lc(e, n);
}
var oc;
oc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), gd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && sa(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tr(e, t), (e = t.pendingProps);
      var l = en(t, le.current);
      Jt(t, n), (l = xi(null, t, r, e, l, n));
      var o = Ci();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((o = !0), Qr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _i(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            To(t, r, e, n),
            (t = Oo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && di(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Od(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Ro(null, t, r, e, n);
            break e;
          case 1:
            t = Du(null, t, r, e, n);
            break e;
          case 11:
            t = Mu(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ro(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Du(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ba(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          da(e, t),
          Zr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = Iu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = Iu(e, t, r, n, l));
            break e;
          } else
            for (
              he = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                U = !0,
                Te = null,
                n = va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ya(t),
        e === null && Po(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        So(r, l) ? (i = null) : o !== null && So(r, o) && (t.flags |= 32),
        Va(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Po(t), null;
    case 13:
      return Ha(e, t, n);
    case 4:
      return (
        wi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Mu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(Xr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Oe(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      zo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  zo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Fu(e, t, r, l, n)
      );
    case 15:
      return $a(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Tr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Qr(t)) : (e = !1),
        Jt(t, n),
        ma(t, r, l),
        To(t, r, l, n),
        Oo(null, t, r, !0, e, n)
      );
    case 19:
      return Wa(e, t, n);
    case 22:
      return Aa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ic(e, t) {
  return Rs(e, t);
}
function Rd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Rd(e, t, n, r);
}
function Fi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Od(e) {
  if (typeof e == 'function') return Fi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ei)) return 11;
    if (e === ti) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Or(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Fi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Dt:
        return Ct(n.children, l, o, t);
      case bo:
        (i = 8), (l |= 8);
        break;
      case bl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = bl), (e.lanes = o), e
        );
      case eo:
        return (e = Se(13, n, t, l)), (e.elementType = eo), (e.lanes = o), e;
      case to:
        return (e = Se(19, n, t, l)), (e.elementType = to), (e.lanes = o), e;
      case hs:
        return vl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ps:
              i = 10;
              break e;
            case ms:
              i = 9;
              break e;
            case ei:
              i = 11;
              break e;
            case ti:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Se(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ct(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = hs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Gl(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Md(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Di(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Md(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Se(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _i(o),
    e
  );
}
function Fd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function uc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return ia(e, n, t);
  }
  return t;
}
function sc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Di(n, r, !0, e, l, o, i, u, s)),
    (e.context = uc(null)),
    (n = e.current),
    (r = ie()),
    (l = at(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    qn(e, l, r),
    pe(e, r),
    e
  );
}
function yl(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = at(l);
  return (
    (n = uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Re(e, l, i, o), Pr(e, l, i)),
    i
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ii(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Dd() {
  return null;
}
var ac =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ui(e) {
  this._internalRoot = e;
}
gl.prototype.render = Ui.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
gl.prototype.unmount = Ui.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      yl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $s();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Vs(e);
  }
};
function $i(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Xu() {}
function Id(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = ll(i);
        o.call(c);
      };
    }
    var i = sc(t, r, e, 0, null, !1, !1, '', Xu);
    return (
      (e._reactRootContainer = i),
      (e[Qe] = i.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = ll(s);
      u.call(c);
    };
  }
  var s = Di(e, 0, !1, null, null, !1, !1, '', Xu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      yl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = ll(i);
        u.call(s);
      };
    }
    yl(t, i, e, l);
  } else i = Id(n, t, e, l, r);
  return ll(i);
}
Is = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = En(t.pendingLanes);
        n !== 0 &&
          (li(t, n | 1), pe(t, Q()), !(R & 6) && ((on = Q() + 500), ht()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Re(r, e, 1, l);
        }
      }),
        Ii(e, 1);
  }
};
oi = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = ie();
      Re(t, e, 134217728, n);
    }
    Ii(e, 134217728);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = ie();
      Re(n, e, t, r);
    }
    Ii(e, t);
  }
};
$s = function () {
  return O;
};
As = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
fo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((lo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(y(90));
            ys(r), lo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      _s(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ns = Ri;
Ps = Tt;
var Ud = { usingClientEntryPoint: !1, Events: [er, At, cl, xs, Cs, Ri] },
  wn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  $d = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Dd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (il = wr.inject($d)), (Ie = wr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$i(t)) throw Error(y(200));
  return Fd(e, t, null, n);
};
ge.createRoot = function (e, t) {
  if (!$i(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = ac;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Di(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Ui(t)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Tt(e);
};
ge.hydrate = function (e, t, n) {
  if (!_l(t)) throw Error(y(200));
  return wl(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
  if (!$i(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = ac;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = sc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Qe] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new gl(t);
};
ge.render = function (e, t, n) {
  if (!_l(t)) throw Error(y(200));
  return wl(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!_l(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Ri;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_l(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, t, n, !1, r);
};
ge.version = '18.2.0-next-9e3b772b8-20220608';
function cc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc);
    } catch (e) {
      console.error(e);
    }
}
cc(), (ss.exports = ge);
var Ad = ss.exports,
  Gu = Ad;
(Jl.createRoot = Gu.createRoot), (Jl.hydrateRoot = Gu.hydrateRoot);
const Vd = '_header_1kfro_1',
  Bd = '_header__nav_1kfro_2',
  Hd = '_header__user_1kfro_3',
  Wd = '_nav__links_1kfro_4',
  Qd = '_header__logo_1kfro_14',
  Kd = '_header__link_1kfro_38',
  Yd = '_header__avatar_1kfro_50',
  gt = {
    header: Vd,
    header__nav: Bd,
    header__user: Hd,
    nav__links: Wd,
    header__logo: Qd,
    header__link: Kd,
    header__avatar: Yd,
  },
  Xd = './icons/logo.svg',
  Gd = './icons/image-avatar.png',
  Zd = [
    { name: 'Collection', href: '/' },
    { name: 'Men', href: '/' },
    { name: 'Women', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Contact', href: '/' },
  ];
function Jd({ children: e }) {
  return x.jsxs('header', {
    className: gt.header,
    children: [
      x.jsxs('nav', {
        className: gt.header__nav,
        children: [
          x.jsx('a', {
            className: gt.header__logo,
            href: '/',
            'aria-label': 'Link home',
            children: x.jsx('img', { src: Xd, alt: 'Logo of the website' }),
          }),
          x.jsx('div', {
            className: gt.nav__links,
            children: Zd.map((t) =>
              x.jsx(
                'a',
                { className: gt.header__link, href: t.href, children: t.name },
                t.name
              )
            ),
          }),
        ],
      }),
      x.jsxs('div', {
        className: gt.header__user,
        children: [
          e,
          x.jsx('div', {
            className: gt.header__avatar,
            children: x.jsx('img', {
              className: 'header__avatar_img',
              src: Gd,
              alt: '',
            }),
          }),
        ],
      }),
    ],
  });
}
const qd = '_cart_article_dnvqv_1',
  bd = '_cart_article__img_dnvqv_8',
  ep = '_cart_article__p_dnvqv_14',
  kr = { cart_article: qd, cart_article__img: bd, cart_article__p: ep };
function tp({ valueSelection: e, productPrice: t, emptyCartFunction: n }) {
  return x.jsxs('article', {
    className: kr.cart_article,
    children: [
      x.jsx('img', {
        className: kr.cart_article__img,
        src: './images/image-product-1-thumbnail.jpg',
        alt: 'Product image',
      }),
      x.jsxs('div', {
        className: kr.cart_article__data,
        children: [
          x.jsx('p', {
            className: kr.cart_article__p,
            children: 'Fall unlimited Edition Sneakers',
          }),
          '$',
          t,
          '.00 x ',
          e,
          ' ',
          x.jsxs('strong', { children: ['$', t * e, '.00'] }),
        ],
      }),
      x.jsx('button', {
        onClick: n,
        'aria-label': 'Empty cart',
        children: x.jsx('img', { src: './icons/icon-delete.svg', alt: '' }),
      }),
    ],
  });
}
const np = '_btn_12h8i_1',
  Zu = { btn: np };
function Mr({
  linkOrButton: e = !0,
  name: t,
  link: n,
  onClickFunction: r,
  colorFilled: l,
}) {
  return x.jsx(x.Fragment, {
    children: e
      ? x.jsx('a', {
          className: Zu.btn,
          href: n,
          'data-filled': l,
          children: t,
        })
      : x.jsx('button', {
          className: Zu.btn,
          type: 'button',
          onClick: r,
          'data-filled': l,
          children: t,
        }),
  });
}
const rp = './icons/icon-cart.svg',
  lp = '_cart_1ap9d_1',
  op = '_cart__container_1ap9d_6',
  ip = '_cart__h2_1ap9d_25',
  up = '_cart__nest_1ap9d_31',
  Mt = { cart: lp, cart__container: op, cart__h2: ip, cart__nest: up };
function sp({ valueSelection: e, productPrice: t, emptyCartFunction: n }) {
  const [r, l] = sn.useState(!1),
    o = () => {
      l(!r);
    };
  return x.jsxs('div', {
    className: Mt.cart,
    children: [
      x.jsx('button', {
        onClick: o,
        type: 'button',
        className: Mt.cart__button,
        children: x.jsx('img', { src: rp, alt: '' }),
      }),
      r &&
        x.jsxs('div', {
          className: Mt.cart__container,
          children: [
            x.jsx('h3', { className: Mt.cart__h2, children: 'cart' }),
            x.jsx('div', {
              className: Mt.cart__nest,
              children:
                e < 1
                  ? x.jsx('p', {
                      className: Mt.cart__p,
                      children: 'Your cart is empty',
                    })
                  : x.jsxs(x.Fragment, {
                      children: [
                        x.jsx(tp, {
                          valueSelection: e,
                          productPrice: t,
                          emptyCartFunction: n,
                        }),
                        x.jsx(Mr, {
                          name: 'checkout',
                          link: '/',
                          colorFilled: 'orange',
                        }),
                      ],
                    }),
            }),
          ],
        }),
    ],
  });
}
const ap = '_product_images_12nsv_1',
  cp = '_product_images__cover_12nsv_10',
  fp = '_product_images__select_12nsv_14',
  Zl = {
    product_images: ap,
    product_images__cover: cp,
    product_images__select: fp,
  },
  dp = [
    { id: 1, data: 'product-1', src: './images/image-product-1.jpg' },
    { id: 2, data: 'product-2', src: './images/image-product-2.jpg' },
    { id: 3, data: 'product-3', src: './images/image-product-3.jpg' },
    { id: 4, data: 'product-4', src: './images/image-product-4.jpg' },
  ];
function pp() {
  const [e, t] = sn.useState('./images/image-product-1.jpg'),
    n = (r) => {
      t(r.target.src);
    };
  return x.jsxs('section', {
    className: Zl.product_images,
    children: [
      x.jsx('div', {
        className: Zl.product_images__cover,
        children: x.jsx('img', { src: e, alt: '' }),
      }),
      x.jsx('div', {
        className: Zl.product_images__select,
        children: dp.map((r) =>
          x.jsx(
            'button',
            {
              type: 'button',
              children: x.jsx('img', {
                src: r.src,
                alt: r.data,
                onClick: n,
                'data-image': r.data,
              }),
            },
            r.id
          )
        ),
      }),
    ],
  });
}
const mp = '_product_showcase_1rxmt_1',
  hp = '_product_showcase__title_1rxmt_8',
  vp = '_product_showcase__price_1rxmt_13',
  yp = '_product_showcase__sale_1rxmt_19',
  gp = '_product_showcase__discount_1rxmt_23',
  _p = '_product_showcase__cross_1rxmt_31',
  wp = '_product_showcase__action_1rxmt_37',
  kp = '_product_showcase__selection_1rxmt_41',
  Ze = {
    product_showcase: mp,
    product_showcase__title: hp,
    product_showcase__price: vp,
    product_showcase__sale: yp,
    product_showcase__discount: gp,
    product_showcase__cross: _p,
    product_showcase__action: wp,
    product_showcase__selection: kp,
  };
function Sp({
  valueSelection: e,
  addValueFunction: t,
  subtractValue: n,
  productPrice: r,
  discount: l,
  salePrice: o,
}) {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(pp, {}),
      x.jsxs('section', {
        className: Ze.product_showcase,
        children: [
          x.jsx('p', {
            className: Ze.product_showcase__title,
            children: 'SNEAKERS COMPANY',
          }),
          x.jsx('h1', {
            className: 'product_showcase__h2',
            children: 'Fall Limited Edition Sneakers',
          }),
          x.jsx('p', {
            children:
              'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
          }),
          x.jsxs('p', {
            className: Ze.product_showcase__price,
            children: [
              x.jsxs('strong', {
                className: Ze.product_showcase__sale,
                children: ['$', o],
              }),
              x.jsx('span', {
                className: Ze.product_showcase__cross,
                children: r,
              }),
              x.jsxs('span', {
                className: Ze.product_showcase__discount,
                children: [l, '%'],
              }),
            ],
          }),
          x.jsxs('div', {
            className: Ze.product_showcase__action,
            children: [
              x.jsxs('div', {
                className: Ze.product_showcase__selection,
                children: [
                  x.jsx(Mr, {
                    linkOrButton: !1,
                    name: '-',
                    onClickFunction: n,
                    colorFilled: 'gray',
                  }),
                  x.jsx('span', { children: e }),
                  x.jsx(Mr, {
                    linkOrButton: !1,
                    name: '+',
                    onClickFunction: t,
                    colorFilled: 'gray',
                  }),
                ],
              }),
              x.jsx(Mr, {
                linkOrButton: !0,
                name: 'Check out',
                link: '/',
                colorFilled: 'orange',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Qo = 250,
  fc = 50,
  Ju = Qo - (Qo * fc) / 100;
function Ep() {
  const [e, t] = sn.useState(0),
    n = () => {
      t((o) => o + 1), e >= 10 && t(10);
    },
    r = () => {
      t((o) => o - 1), e <= 0 && t(0);
    },
    l = () => {
      t(0);
    };
  return x.jsxs('div', {
    className: 'wrapper',
    children: [
      x.jsx(Jd, {
        children: x.jsx(sp, {
          valueSelection: e,
          productPrice: Ju,
          emptyCartFunction: l,
        }),
      }),
      x.jsx('main', {
        className: 'main',
        children: x.jsx(Sp, {
          valueSelection: e,
          addValueFunction: n,
          subtractValue: r,
          productPrice: Qo,
          salePrice: Ju,
          discount: fc,
        }),
      }),
    ],
  });
}
Jl.createRoot(document.getElementById('root')).render(
  x.jsx(Lc.StrictMode, { children: x.jsx(Ep, {}) })
);
