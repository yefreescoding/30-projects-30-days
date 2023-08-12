(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Yu = { exports: {} },
  el = {},
  Xu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xt = Symbol.for('react.element'),
  fc = Symbol.for('react.portal'),
  dc = Symbol.for('react.fragment'),
  pc = Symbol.for('react.strict_mode'),
  mc = Symbol.for('react.profiler'),
  hc = Symbol.for('react.provider'),
  vc = Symbol.for('react.context'),
  yc = Symbol.for('react.forward_ref'),
  gc = Symbol.for('react.suspense'),
  wc = Symbol.for('react.memo'),
  kc = Symbol.for('react.lazy'),
  Uo = Symbol.iterator;
function Sc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uo && e[Uo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  Ju = {};
function lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ju),
    (this.updater = t || Gu);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, n, 'setState');
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function qu() {}
qu.prototype = lt.prototype;
function Ui(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ju),
    (this.updater = t || Gu);
}
var $i = (Ui.prototype = new qu());
$i.constructor = Ui;
Zu($i, lt.prototype);
$i.isPureReactComponent = !0;
var $o = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Ai = { current: null },
  es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = '' + n.key),
    n))
      bu.call(n, r) && !es.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ai.current,
  };
}
function xc(e, n) {
  return {
    $$typeof: Xt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xt;
}
function _c(e) {
  var n = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Ao = /\/+/g;
function wl(e, n) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _c('' + e.key)
    : n.toString(36);
}
function gr(e, n, t, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Xt:
          case fc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + wl(o, 0) : r),
      $o(l)
        ? ((t = ''),
          e != null && (t = e.replace(Ao, '$&/') + '/'),
          gr(l, n, t, '', function (c) {
            return c;
          }))
        : l != null &&
          (Vi(l) &&
            (l = xc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ao, '$&/') + '/') +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), $o(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + wl(i, u);
      o += gr(i, n, t, s, l);
    }
  else if (((s = Sc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + wl(i, u++)), (o += gr(i, n, t, s, l));
  else if (i === 'object')
    throw (
      ((n = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (n === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : n) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function nr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    gr(e, r, '', '', function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Ec(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  Cc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Ai,
  };
T.Children = {
  map: nr,
  forEach: function (e, n, t) {
    nr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      nr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Vi(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
T.Component = lt;
T.Fragment = dc;
T.Profiler = mc;
T.PureComponent = Ui;
T.StrictMode = pc;
T.Suspense = gc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Zu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Ai.current)),
      n.key !== void 0 && (l = '' + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      bu.call(n, s) &&
        !es.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: vc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ns;
T.createFactory = function (e) {
  var n = ns.bind(null, e);
  return (n.type = e), n;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: yc, render: e };
};
T.isValidElement = Vi;
T.lazy = function (e) {
  return { $$typeof: kc, _payload: { _status: -1, _result: e }, _init: Ec };
};
T.memo = function (e, n) {
  return { $$typeof: wc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = n;
  }
};
T.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
T.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = '18.2.0';
Xu.exports = T;
var it = Xu.exports;
const Nc = cc(it);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = it,
  zc = Symbol.for('react.element'),
  jc = Symbol.for('react.fragment'),
  Tc = Object.prototype.hasOwnProperty,
  Lc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = '' + t),
    n.key !== void 0 && (i = '' + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Tc.call(n, r) && !Rc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: zc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Lc.current,
  };
}
el.Fragment = jc;
el.jsx = ts;
el.jsxs = ts;
Yu.exports = el;
var v = Yu.exports,
  Wl = {},
  rs = { exports: {} },
  ge = {},
  ls = { exports: {} },
  is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, z) {
    var j = E.length;
    E.push(z);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        G = E[Q];
      if (0 < l(G, z)) (E[Q] = z), (E[j] = G), (j = Q);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      j = E.pop();
    if (j !== z) {
      E[0] = j;
      e: for (var Q = 0, G = E.length, bt = G >>> 1; Q < bt; ) {
        var vn = 2 * (Q + 1) - 1,
          gl = E[vn],
          yn = vn + 1,
          er = E[yn];
        if (0 > l(gl, j))
          yn < G && 0 > l(er, gl)
            ? ((E[Q] = er), (E[yn] = j), (Q = yn))
            : ((E[Q] = gl), (E[vn] = j), (Q = vn));
        else if (yn < G && 0 > l(er, j)) (E[Q] = er), (E[yn] = j), (Q = yn);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var j = E.sortIndex - z.sortIndex;
    return j !== 0 ? j : E.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    k = !1,
    S = !1,
    D = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E)
        r(c), (z.sortIndex = z.expirationTime), n(s, z);
      else break;
      z = t(c);
    }
  }
  function y(E) {
    if (((S = !1), d(E), !k))
      if (t(s) !== null) (k = !0), vl(_);
      else {
        var z = t(c);
        z !== null && yl(y, z.startTime - E);
      }
  }
  function _(E, z) {
    (k = !1), S && ((S = !1), f(P), (P = -1)), (w = !0);
    var j = p;
    try {
      for (
        d(z), m = t(s);
        m !== null && (!(m.expirationTime > z) || (E && !Ne()));

      ) {
        var Q = m.callback;
        if (typeof Q == 'function') {
          (m.callback = null), (p = m.priorityLevel);
          var G = Q(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof G == 'function' ? (m.callback = G) : m === t(s) && r(s),
            d(z);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var bt = !0;
      else {
        var vn = t(c);
        vn !== null && yl(y, vn.startTime - z), (bt = !1);
      }
      return bt;
    } finally {
      (m = null), (p = j), (w = !1);
    }
  }
  var C = !1,
    N = null,
    P = -1,
    H = 5,
    L = -1;
  function Ne() {
    return !(e.unstable_now() - L < H);
  }
  function st() {
    if (N !== null) {
      var E = e.unstable_now();
      L = E;
      var z = !0;
      try {
        z = N(!0, E);
      } finally {
        z ? at() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var at;
  if (typeof a == 'function')
    at = function () {
      a(st);
    };
  else if (typeof MessageChannel < 'u') {
    var Do = new MessageChannel(),
      ac = Do.port2;
    (Do.port1.onmessage = st),
      (at = function () {
        ac.postMessage(null);
      });
  } else
    at = function () {
      D(st, 0);
    };
  function vl(E) {
    (N = E), C || ((C = !0), at());
  }
  function yl(E, z) {
    P = D(function () {
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
      k || w || ((k = !0), vl(_));
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
      return t(s);
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
      var j = p;
      p = z;
      try {
        return E();
      } finally {
        p = j;
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
      var j = p;
      p = E;
      try {
        return z();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? Q + j : Q))
          : (j = Q),
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
        (G = j + G),
        (E = {
          id: h++,
          callback: z,
          priorityLevel: E,
          startTime: j,
          expirationTime: G,
          sortIndex: -1,
        }),
        j > Q
          ? ((E.sortIndex = j),
            n(c, E),
            t(s) === null &&
              E === t(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), yl(y, j - Q)))
          : ((E.sortIndex = G), n(s, E), k || w || ((k = !0), vl(_))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var z = p;
      return function () {
        var j = p;
        p = z;
        try {
          return E.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    });
})(is);
ls.exports = is;
var Oc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = it,
  ye = Oc;
function g(e) {
  for (
    var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1;
    t < arguments.length;
    t++
  )
    n += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    n +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var us = new Set(),
  Lt = {};
function Tn(e, n) {
  Jn(e, n), Jn(e + 'Capture', n);
}
function Jn(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) us.add(n[e]);
}
var Qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Kl = Object.prototype.hasOwnProperty,
  Ic =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vo = {},
  Bo = {};
function Mc(e) {
  return Kl.call(Bo, e)
    ? !0
    : Kl.call(Vo, e)
    ? !1
    : Ic.test(e)
    ? (Bo[e] = !0)
    : ((Vo[e] = !0), !1);
}
function Fc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Dc(e, n, t, r) {
  if (n === null || typeof n > 'u' || Fc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
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
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
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
var Bi = /[\-:]([a-z])/g;
function Hi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Bi, Hi);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Bi, Hi);
    ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var n = e.replace(Bi, Hi);
  ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
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
function Qi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== 'o' && n[0] !== 'O') ||
      (n[1] !== 'n' && n[1] !== 'N')) &&
    (Dc(n, t, l, r) && (t = null),
    r || l === null
      ? Mc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = os.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tr = Symbol.for('react.element'),
  On = Symbol.for('react.portal'),
  In = Symbol.for('react.fragment'),
  Wi = Symbol.for('react.strict_mode'),
  Yl = Symbol.for('react.profiler'),
  ss = Symbol.for('react.provider'),
  as = Symbol.for('react.context'),
  Ki = Symbol.for('react.forward_ref'),
  Xl = Symbol.for('react.suspense'),
  Gl = Symbol.for('react.suspense_list'),
  Yi = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  cs = Symbol.for('react.offscreen'),
  Ho = Symbol.iterator;
function ct(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ho && e[Ho]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  kl;
function gt(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      kl = (n && n[1]) || '';
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function xl(e, n) {
  if (!e || Sl) return '';
  Sl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : '') ? gt(e) : '';
}
function Uc(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt('Lazy');
    case 13:
      return gt('Suspense');
    case 19:
      return gt('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return '';
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case In:
      return 'Fragment';
    case On:
      return 'Portal';
    case Yl:
      return 'Profiler';
    case Wi:
      return 'StrictMode';
    case Xl:
      return 'Suspense';
    case Gl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case as:
        return (e.displayName || 'Context') + '.Consumer';
      case ss:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ki:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Yi:
        return (
          (n = e.displayName || null), n !== null ? n : Zl(e.type) || 'Memo'
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return Zl(e(n));
        } catch {}
    }
  return null;
}
function $c(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (n.displayName || 'Context') + '.Consumer';
    case 10:
      return (n._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ''),
        n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return n;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Zl(n);
    case 8:
      return n === Wi ? 'StrictMode' : 'Mode';
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
      if (typeof n == 'function') return n.displayName || n.name || null;
      if (typeof n == 'string') return n;
  }
  return null;
}
function fn(e) {
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
function fs(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (n === 'checkbox' || n === 'radio')
  );
}
function Ac(e) {
  var n = fs(e) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = '' + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function ds(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = '';
  return (
    e && (r = fs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, n) {
  var t = n.checked;
  return V({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Qo(e, n) {
  var t = n.defaultValue == null ? '' : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = fn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === 'checkbox' || n.type === 'radio'
          ? n.checked != null
          : n.value != null,
    });
}
function ps(e, n) {
  (n = n.checked), n != null && Qi(e, 'checked', n, !1);
}
function ql(e, n) {
  ps(e, n);
  var t = fn(n.value),
    r = n.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
      : e.value !== '' + t && (e.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  n.hasOwnProperty('value')
    ? bl(e, n.type, t)
    : n.hasOwnProperty('defaultValue') && bl(e, n.type, fn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Wo(e, n, t) {
  if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
    var r = n.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = '' + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== '' && (e.name = t);
}
function bl(e, n, t) {
  (n !== 'number' || Tr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
}
var wt = Array.isArray;
function Wn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty('$' + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = '' + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ei(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ko(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(g(92));
      if (wt(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ''), (t = n);
  }
  e._wrapperState = { initialValue: fn(t) };
}
function ms(e, n) {
  var t = fn(n.value),
    r = fn(n.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = '' + r);
}
function Yo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
}
function hs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ni(e, n) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? hs(n)
    : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var lr,
  vs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = n;
    else {
      for (
        lr = lr || document.createElement('div'),
          lr.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
          n = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Rt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
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
  Vc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xt).forEach(function (e) {
  Vc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function ys(e, n, t) {
  return n == null || typeof n == 'boolean' || n === ''
    ? ''
    : t || typeof n != 'number' || n === 0 || (xt.hasOwnProperty(e) && xt[e])
    ? ('' + n).trim()
    : n + 'px';
}
function gs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        l = ys(t, n[t], r);
      t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Bc = V(
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
function ti(e, n) {
  if (n) {
    if (Bc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (
        typeof n.dangerouslySetInnerHTML != 'object' ||
        !('__html' in n.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (n.style != null && typeof n.style != 'object') throw Error(g(62));
  }
}
function ri(e, n) {
  if (e.indexOf('-') === -1) return typeof n.is == 'string';
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
var li = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Kn = null,
  Yn = null;
function Xo(e) {
  if ((e = Jt(e))) {
    if (typeof ii != 'function') throw Error(g(280));
    var n = e.stateNode;
    n && ((n = il(n)), ii(e.stateNode, e.type, n));
  }
}
function ws(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function ks() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Xo(e), n)) for (e = 0; e < n.length; e++) Xo(n[e]);
  }
}
function Ss(e, n) {
  return e(n);
}
function xs() {}
var _l = !1;
function _s(e, n, t) {
  if (_l) return e(n, t);
  _l = !0;
  try {
    return Ss(e, n, t);
  } finally {
    (_l = !1), (Kn !== null || Yn !== null) && (xs(), ks());
  }
}
function Ot(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = il(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
  if (t && typeof t != 'function') throw Error(g(231, n, typeof t));
  return t;
}
var oi = !1;
if (Qe)
  try {
    var ft = {};
    Object.defineProperty(ft, 'passive', {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener('test', ft, ft),
      window.removeEventListener('test', ft, ft);
  } catch {
    oi = !1;
  }
function Hc(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var _t = !1,
  Lr = null,
  Rr = !1,
  ui = null,
  Qc = {
    onError: function (e) {
      (_t = !0), (Lr = e);
    },
  };
function Wc(e, n, t, r, l, i, o, u, s) {
  (_t = !1), (Lr = null), Hc.apply(Qc, arguments);
}
function Kc(e, n, t, r, l, i, o, u, s) {
  if ((Wc.apply(this, arguments), _t)) {
    if (_t) {
      var c = Lr;
      (_t = !1), (Lr = null);
    } else throw Error(g(198));
    Rr || ((Rr = !0), (ui = c));
  }
}
function Ln(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Es(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Go(e) {
  if (Ln(e) !== e) throw Error(g(188));
}
function Yc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Ln(e)), n === null)) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Go(l), e;
        if (i === r) return Go(l), n;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function Cs(e) {
  return (e = Yc(e)), e !== null ? Ns(e) : null;
}
function Ns(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ns(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ps = ye.unstable_scheduleCallback,
  Zo = ye.unstable_cancelCallback,
  Xc = ye.unstable_shouldYield,
  Gc = ye.unstable_requestPaint,
  W = ye.unstable_now,
  Zc = ye.unstable_getCurrentPriorityLevel,
  Gi = ye.unstable_ImmediatePriority,
  zs = ye.unstable_UserBlockingPriority,
  Or = ye.unstable_NormalPriority,
  Jc = ye.unstable_LowPriority,
  js = ye.unstable_IdlePriority,
  nl = null,
  De = null;
function qc(e) {
  if (De && typeof De.onCommitFiberRoot == 'function')
    try {
      De.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Le = Math.clz32 ? Math.clz32 : nf,
  bc = Math.log,
  ef = Math.LN2;
function nf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bc(e) / ef) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function kt(e) {
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
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kt(u)) : ((i &= o), i !== 0 && (r = kt(i)));
  } else (o = t & ~l), o !== 0 ? (r = kt(o)) : i !== 0 && (r = kt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Le(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function tf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function rf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Le(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & t) || u & r) && (l[o] = tf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ts() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function El(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Gt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Le(n)),
    (e[n] = t);
}
function lf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Le(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function Zi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Le(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Ls(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rs,
  Ji,
  Os,
  Is,
  Ms,
  ai = !1,
  ur = [],
  tn = null,
  rn = null,
  ln = null,
  It = new Map(),
  Mt = new Map(),
  qe = [],
  of =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Jo(e, n) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ln = null;
      break;
    case 'pointerover':
    case 'pointerout':
      It.delete(n.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Mt.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = Jt(n)), n !== null && Ji(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function uf(e, n, t, r, l) {
  switch (n) {
    case 'focusin':
      return (tn = dt(tn, e, n, t, r, l)), !0;
    case 'dragenter':
      return (rn = dt(rn, e, n, t, r, l)), !0;
    case 'mouseover':
      return (ln = dt(ln, e, n, t, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return It.set(i, dt(It.get(i) || null, e, n, t, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Mt.set(i, dt(Mt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Fs(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Ln(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Es(t)), n !== null)) {
          (e.blockedOn = n),
            Ms(e.priority, function () {
              Os(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ci(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (li = r), t.target.dispatchEvent(r), (li = null);
    } else return (n = Jt(t)), n !== null && Ji(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function qo(e, n, t) {
  kr(e) && t.delete(n);
}
function sf() {
  (ai = !1),
    tn !== null && kr(tn) && (tn = null),
    rn !== null && kr(rn) && (rn = null),
    ln !== null && kr(ln) && (ln = null),
    It.forEach(qo),
    Mt.forEach(qo);
}
function pt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, sf)));
}
function Ft(e) {
  function n(l) {
    return pt(l, e);
  }
  if (0 < ur.length) {
    pt(ur[0], e);
    for (var t = 1; t < ur.length; t++) {
      var r = ur[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && pt(tn, e),
      rn !== null && pt(rn, e),
      ln !== null && pt(ln, e),
      It.forEach(n),
      Mt.forEach(n),
      t = 0;
    t < qe.length;
    t++
  )
    (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); )
    Fs(t), t.blockedOn === null && qe.shift();
}
var Xn = Xe.ReactCurrentBatchConfig,
  Mr = !0;
function af(e, n, t, r) {
  var l = O,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (O = 1), qi(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = i);
  }
}
function cf(e, n, t, r) {
  var l = O,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (O = 4), qi(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = i);
  }
}
function qi(e, n, t, r) {
  if (Mr) {
    var l = ci(e, n, t, r);
    if (l === null) Il(e, n, r, Fr, t), Jo(e, r);
    else if (uf(l, e, n, t, r)) r.stopPropagation();
    else if ((Jo(e, r), n & 4 && -1 < of.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jt(l);
        if (
          (i !== null && Rs(i),
          (i = ci(e, n, t, r)),
          i === null && Il(e, n, r, Fr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, n, r, null, t);
  }
}
var Fr = null;
function ci(e, n, t, r) {
  if (((Fr = null), (e = Xi(r)), (e = kn(e)), e !== null))
    if (((n = Ln(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Es(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Fr = e), null;
}
function Ds(e) {
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
      switch (Zc()) {
        case Gi:
          return 1;
        case zs:
          return 4;
        case Or:
        case Jc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  bi = null,
  Sr = null;
function Us() {
  if (Sr) return Sr;
  var e,
    n = bi,
    t = n.length,
    r,
    l = 'value' in en ? en.value : en.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function bo() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sr
        : bo),
      (this.isPropagationStopped = bo),
      this
    );
  }
  return (
    V(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    n
  );
}
var ot = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eo = we(ot),
  Zt = V({}, ot, { view: 0, detail: 0 }),
  ff = we(Zt),
  Cl,
  Nl,
  mt,
  tl = V({}, Zt, {
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
    getModifierState: no,
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
        : (e !== mt &&
            (mt && e.type === 'mousemove'
              ? ((Cl = e.screenX - mt.screenX), (Nl = e.screenY - mt.screenY))
              : (Nl = Cl = 0),
            (mt = e)),
          Cl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Nl;
    },
  }),
  eu = we(tl),
  df = V({}, tl, { dataTransfer: 0 }),
  pf = we(df),
  mf = V({}, Zt, { relatedTarget: 0 }),
  Pl = we(mf),
  hf = V({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = we(hf),
  yf = V({}, ot, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gf = we(yf),
  wf = V({}, ot, { data: 0 }),
  nu = we(wf),
  kf = {
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
  Sf = {
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
  xf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function _f(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = xf[e]) ? !!n[e] : !1;
}
function no() {
  return _f;
}
var Ef = V({}, Zt, {
    key: function (e) {
      if (e.key) {
        var n = kf[e.key] || e.key;
        if (n !== 'Unidentified') return n;
      }
      return e.type === 'keypress'
        ? ((e = xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Sf[e.keyCode] || 'Unidentified'
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
    getModifierState: no,
    charCode: function (e) {
      return e.type === 'keypress' ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? xr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Cf = we(Ef),
  Nf = V({}, tl, {
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
  tu = we(Nf),
  Pf = V({}, Zt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: no,
  }),
  zf = we(Pf),
  jf = V({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = we(jf),
  Lf = V({}, tl, {
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
  Rf = we(Lf),
  Of = [9, 13, 27, 32],
  to = Qe && 'CompositionEvent' in window,
  Et = null;
Qe && 'documentMode' in document && (Et = document.documentMode);
var If = Qe && 'TextEvent' in window && !Et,
  $s = Qe && (!to || (Et && 8 < Et && 11 >= Et)),
  ru = String.fromCharCode(32),
  lu = !1;
function As(e, n) {
  switch (e) {
    case 'keyup':
      return Of.indexOf(n.keyCode) !== -1;
    case 'keydown':
      return n.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Vs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function Mf(e, n) {
  switch (e) {
    case 'compositionend':
      return Vs(n);
    case 'keypress':
      return n.which !== 32 ? null : ((lu = !0), ru);
    case 'textInput':
      return (e = n.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Ff(e, n) {
  if (Mn)
    return e === 'compositionend' || (!to && As(e, n))
      ? ((e = Us()), (Sr = bi = en = null), (Mn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case 'compositionend':
      return $s && n.locale !== 'ko' ? null : n.data;
    default:
      return null;
  }
}
var Df = {
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
function iu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === 'input' ? !!Df[e.type] : n === 'textarea';
}
function Bs(e, n, t, r) {
  ws(r),
    (n = Dr(n, 'onChange')),
    0 < n.length &&
      ((t = new eo('onChange', 'change', null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ct = null,
  Dt = null;
function Uf(e) {
  bs(e, 0);
}
function rl(e) {
  var n = Un(e);
  if (ds(n)) return e;
}
function $f(e, n) {
  if (e === 'change') return n;
}
var Hs = !1;
if (Qe) {
  var zl;
  if (Qe) {
    var jl = 'oninput' in document;
    if (!jl) {
      var ou = document.createElement('div');
      ou.setAttribute('oninput', 'return;'),
        (jl = typeof ou.oninput == 'function');
    }
    zl = jl;
  } else zl = !1;
  Hs = zl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Ct && (Ct.detachEvent('onpropertychange', Qs), (Dt = Ct = null));
}
function Qs(e) {
  if (e.propertyName === 'value' && rl(Dt)) {
    var n = [];
    Bs(n, Dt, e, Xi(e)), _s(Uf, n);
  }
}
function Af(e, n, t) {
  e === 'focusin'
    ? (uu(), (Ct = n), (Dt = t), Ct.attachEvent('onpropertychange', Qs))
    : e === 'focusout' && uu();
}
function Vf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return rl(Dt);
}
function Bf(e, n) {
  if (e === 'click') return rl(n);
}
function Hf(e, n) {
  if (e === 'input' || e === 'change') return rl(n);
}
function Qf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Oe = typeof Object.is == 'function' ? Object.is : Qf;
function Ut(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != 'object' || e === null || typeof n != 'object' || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Kl.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, n) {
  var t = su(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = su(t);
  }
}
function Ws(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Ws(e, n.parentNode)
      : 'contains' in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ks() {
  for (var e = window, n = Tr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Tr(e.document);
  }
  return n;
}
function ro(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      n === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Wf(e) {
  var n = Ks(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Ws(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && ro(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        'selectionStart' in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = au(t, i));
        var o = au(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kf = Qe && 'documentMode' in document && 11 >= document.documentMode,
  Fn = null,
  fi = null,
  Nt = null,
  di = !1;
function cu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  di ||
    Fn == null ||
    Fn !== Tr(r) ||
    ((r = Fn),
    'selectionStart' in r && ro(r)
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
    (Nt && Ut(Nt, r)) ||
      ((Nt = r),
      (r = Dr(fi, 'onSelect')),
      0 < r.length &&
        ((n = new eo('onSelect', 'select', null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Fn))));
}
function ar(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t['Webkit' + e] = 'webkit' + n),
    (t['Moz' + e] = 'moz' + n),
    t
  );
}
var Dn = {
    animationend: ar('Animation', 'AnimationEnd'),
    animationiteration: ar('Animation', 'AnimationIteration'),
    animationstart: ar('Animation', 'AnimationStart'),
    transitionend: ar('Transition', 'TransitionEnd'),
  },
  Tl = {},
  Ys = {};
Qe &&
  ((Ys = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  'TransitionEvent' in window || delete Dn.transitionend.transition);
function ll(e) {
  if (Tl[e]) return Tl[e];
  if (!Dn[e]) return e;
  var n = Dn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ys) return (Tl[e] = n[t]);
  return e;
}
var Xs = ll('animationend'),
  Gs = ll('animationiteration'),
  Zs = ll('animationstart'),
  Js = ll('transitionend'),
  qs = new Map(),
  fu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function pn(e, n) {
  qs.set(e, n), Tn(n, [e]);
}
for (var Ll = 0; Ll < fu.length; Ll++) {
  var Rl = fu[Ll],
    Yf = Rl.toLowerCase(),
    Xf = Rl[0].toUpperCase() + Rl.slice(1);
  pn(Yf, 'on' + Xf);
}
pn(Xs, 'onAnimationEnd');
pn(Gs, 'onAnimationIteration');
pn(Zs, 'onAnimationStart');
pn('dblclick', 'onDoubleClick');
pn('focusin', 'onFocus');
pn('focusout', 'onBlur');
pn(Js, 'onTransitionEnd');
Jn('onMouseEnter', ['mouseout', 'mouseover']);
Jn('onMouseLeave', ['mouseout', 'mouseover']);
Jn('onPointerEnter', ['pointerout', 'pointerover']);
Jn('onPointerLeave', ['pointerout', 'pointerover']);
Tn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Tn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Tn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Tn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Tn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Tn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var St =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Gf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(St));
function du(e, n, t) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = t), Kc(r, n, void 0, e), (e.currentTarget = null);
}
function bs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          du(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ui), (Rr = !1), (ui = null), e);
}
function M(e, n) {
  var t = n[yi];
  t === void 0 && (t = n[yi] = new Set());
  var r = e + '__bubble';
  t.has(r) || (ea(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), ea(t, e, r, n);
}
var cr = '_reactListening' + Math.random().toString(36).slice(2);
function $t(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      us.forEach(function (t) {
        t !== 'selectionchange' && (Gf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[cr] || ((n[cr] = !0), Ol('selectionchange', !1, n));
  }
}
function ea(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = qi;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !oi ||
      (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = kn(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  _s(function () {
    var c = i,
      h = Xi(t),
      m = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var w = eo,
          k = e;
        switch (e) {
          case 'keypress':
            if (xr(t) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Cf;
            break;
          case 'focusin':
            (k = 'focus'), (w = Pl);
            break;
          case 'focusout':
            (k = 'blur'), (w = Pl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Pl;
            break;
          case 'click':
            if (t.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = eu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = pf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = zf;
            break;
          case Xs:
          case Gs:
          case Zs:
            w = vf;
            break;
          case Js:
            w = Tf;
            break;
          case 'scroll':
            w = ff;
            break;
          case 'wheel':
            w = Rf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = gf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = tu;
        }
        var S = (n & 4) !== 0,
          D = !S && e === 'scroll',
          f = S ? (p !== null ? p + 'Capture' : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Ot(a, f)), y != null && S.push(At(a, y, d)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new w(p, k, null, t, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            t !== li &&
            (k = t.relatedTarget || t.fromElement) &&
            (kn(k) || k[We]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((k = t.relatedTarget || t.toElement),
              (w = c),
              (k = k ? kn(k) : null),
              k !== null &&
                ((D = Ln(k)), k !== D || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((S = eu),
            (y = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = tu),
              (y = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (D = w == null ? p : Un(w)),
            (d = k == null ? p : Un(k)),
            (p = new S(y, a + 'leave', w, t, h)),
            (p.target = D),
            (p.relatedTarget = d),
            (y = null),
            kn(h) === c &&
              ((S = new S(f, a + 'enter', k, t, h)),
              (S.target = d),
              (S.relatedTarget = D),
              (y = S)),
            (D = y),
            w && k)
          )
            n: {
              for (S = w, f = k, a = 0, d = S; d; d = Rn(d)) a++;
              for (d = 0, y = f; y; y = Rn(y)) d++;
              for (; 0 < a - d; ) (S = Rn(S)), a--;
              for (; 0 < d - a; ) (f = Rn(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break n;
                (S = Rn(S)), (f = Rn(f));
              }
              S = null;
            }
          else S = null;
          w !== null && pu(m, p, w, S, !1),
            k !== null && D !== null && pu(m, D, k, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Un(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var _ = $f;
        else if (iu(p))
          if (Hs) _ = Hf;
          else {
            _ = Vf;
            var C = Af;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (_ = Bf);
        if (_ && (_ = _(e, c))) {
          Bs(m, _, t, h);
          break e;
        }
        C && C(e, p, c),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            bl(p, 'number', p.value);
      }
      switch (((C = c ? Un(c) : window), e)) {
        case 'focusin':
          (iu(C) || C.contentEditable === 'true') &&
            ((Fn = C), (fi = c), (Nt = null));
          break;
        case 'focusout':
          Nt = fi = Fn = null;
          break;
        case 'mousedown':
          di = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (di = !1), cu(m, t, h);
          break;
        case 'selectionchange':
          if (Kf) break;
        case 'keydown':
        case 'keyup':
          cu(m, t, h);
      }
      var N;
      if (to)
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
        Mn
          ? As(e, t) && (P = 'onCompositionEnd')
          : e === 'keydown' && t.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        ($s &&
          t.locale !== 'ko' &&
          (Mn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Mn && (N = Us())
            : ((en = h),
              (bi = 'value' in en ? en.value : en.textContent),
              (Mn = !0))),
        (C = Dr(c, P)),
        0 < C.length &&
          ((P = new nu(P, e, null, t, h)),
          m.push({ event: P, listeners: C }),
          N ? (P.data = N) : ((N = Vs(t)), N !== null && (P.data = N)))),
        (N = If ? Mf(e, t) : Ff(e, t)) &&
          ((c = Dr(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new nu('onBeforeInput', 'beforeinput', null, t, h)),
            m.push({ event: h, listeners: c }),
            (h.data = N)));
    }
    bs(m, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Dr(e, n) {
  for (var t = n + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Ot(e, t)),
      i != null && r.unshift(At(e, i, l)),
      (i = Ot(e, n)),
      i != null && r.push(At(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Ot(t, i)), s != null && o.unshift(At(t, s, u)))
        : l || ((s = Ot(t, i)), s != null && o.push(At(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Zf,
      `
`
    )
    .replace(Jf, '');
}
function fr(e, n, t) {
  if (((n = mu(n)), mu(e) !== n && t)) throw Error(g(425));
}
function Ur() {}
var pi = null,
  mi = null;
function hi(e, n) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof n.children == 'string' ||
    typeof n.children == 'number' ||
    (typeof n.dangerouslySetInnerHTML == 'object' &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == 'function' ? setTimeout : void 0,
  qf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  hu = typeof Promise == 'function' ? Promise : void 0,
  bf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof hu < 'u'
      ? function (e) {
          return hu.resolve(null).then(e).catch(ed);
        }
      : vi;
function ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === '/$')) {
        if (r === 0) {
          e.removeChild(l), Ft(n);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = l;
  } while (t);
  Ft(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
      if (n === '/$') return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (n === 0) return e;
        n--;
      } else t === '/$' && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ut = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + ut,
  Vt = '__reactProps$' + ut,
  We = '__reactContainer$' + ut,
  yi = '__reactEvents$' + ut,
  nd = '__reactListeners$' + ut,
  td = '__reactHandles$' + ut;
function kn(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[We] || t[Fe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = vu(e); e !== null; ) {
          if ((t = e[Fe])) return t;
          e = vu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Jt(e) {
  return (
    (e = e[Fe] || e[We]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function il(e) {
  return e[Vt] || null;
}
var gi = [],
  $n = -1;
function mn(e) {
  return { current: e };
}
function F(e) {
  0 > $n || ((e.current = gi[$n]), (gi[$n] = null), $n--);
}
function I(e, n) {
  $n++, (gi[$n] = e.current), (e.current = n);
}
var dn = {},
  le = mn(dn),
  fe = mn(!1),
  Cn = dn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  F(fe), F(le);
}
function yu(e, n, t) {
  if (le.current !== dn) throw Error(g(168));
  I(le, n), I(fe, t);
}
function na(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, $c(e) || 'Unknown', l));
  return V({}, t, r);
}
function Ar(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Cn = le.current),
    I(le, e),
    I(fe, fe.current),
    !0
  );
}
function gu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t
    ? ((e = na(e, n, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(fe),
      F(le),
      I(le, e))
    : F(fe),
    I(fe, t);
}
var Ae = null,
  ol = !1,
  Fl = !1;
function ta(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function rd(e) {
  (ol = !0), ta(e);
}
function hn() {
  if (!Fl && Ae !== null) {
    Fl = !0;
    var e = 0,
      n = O;
    try {
      var t = Ae;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (ol = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ps(Gi, hn), l);
    } finally {
      (O = n), (Fl = !1);
    }
  }
  return null;
}
var An = [],
  Vn = 0,
  Vr = null,
  Br = 0,
  ke = [],
  Se = 0,
  Nn = null,
  Ve = 1,
  Be = '';
function gn(e, n) {
  (An[Vn++] = Br), (An[Vn++] = Vr), (Vr = e), (Br = n);
}
function ra(e, n, t) {
  (ke[Se++] = Ve), (ke[Se++] = Be), (ke[Se++] = Nn), (Nn = e);
  var r = Ve;
  e = Be;
  var l = 32 - Le(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Le(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Le(n) + l)) | (t << l) | r),
      (Be = i + e);
  } else (Ve = (1 << i) | (t << l) | r), (Be = e);
}
function lo(e) {
  e.return !== null && (gn(e, 1), ra(e, 1, 0));
}
function io(e) {
  for (; e === Vr; )
    (Vr = An[--Vn]), (An[Vn] = null), (Br = An[--Vn]), (An[Vn] = null);
  for (; e === Nn; )
    (Nn = ke[--Se]),
      (ke[Se] = null),
      (Be = ke[--Se]),
      (ke[Se] = null),
      (Ve = ke[--Se]),
      (ke[Se] = null);
}
var ve = null,
  he = null,
  U = !1,
  Te = null;
function la(e, n) {
  var t = xe(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function wu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ve = e), (he = on(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: Ve, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = xe(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!wu(e, n)) {
        if (wi(e)) throw Error(g(418));
        n = on(t.nextSibling);
        var r = ve;
        n && wu(e, n)
          ? la(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!U) return ku(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== 'head' && n !== 'body' && !hi(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (wi(e)) throw (ia(), Error(g(418)));
    for (; n; ) la(e, n), (n = on(n.nextSibling));
  }
  if ((ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === '/$') {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function bn() {
  (he = ve = null), (U = !1);
}
function oo(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var ld = Xe.ReactCurrentBatchConfig;
function ze(e, n) {
  if (e && e.defaultProps) {
    (n = V({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Hr = mn(null),
  Qr = null,
  Bn = null,
  uo = null;
function so() {
  uo = Bn = Qr = null;
}
function ao(e) {
  var n = Hr.current;
  F(Hr), (e._currentValue = n);
}
function Si(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Gn(e, n) {
  (Qr = e),
    (uo = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var n = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (Qr === null) throw Error(g(308));
      (Bn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return n;
}
var Sn = null;
function co(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function oa(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), co(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), co(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function _r(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Zi(e, t);
  }
}
function Su(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Wr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            S = u;
          switch (((p = n), (w = t), S.tag)) {
            case 1:
              if (((k = S.payload), typeof k == 'function')) {
                m = k.call(w, m, p);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = S.payload),
                (p = typeof k == 'function' ? k.call(w, m, p) : k),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (o |= p);
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
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (zn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function xu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != 'function'))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var sa = new os.Component().refs;
function xi(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : V({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = He(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (Re(n, e, l, r), _r(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = He(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (Re(n, e, l, r), _r(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = an(e),
      l = He(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = un(e, l, r)),
      n !== null && (Re(n, e, r, t), _r(n, e, r));
  },
};
function _u(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ut(t, r) || !Ut(l, i)
      : !0
  );
}
function aa(e, n, t) {
  var r = !1,
    l = dn,
    i = n.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ee(i))
      : ((l = de(n) ? Cn : le.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? qn(e, l) : dn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ul),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Eu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == 'function' &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ul.enqueueReplaceState(n, n.state, null);
}
function _i(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = sa), fo(e);
  var i = n.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = Ee(i))
    : ((i = de(n) ? Cn : le.current), (l.context = qn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == 'function' && (xi(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((n = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Wr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ht(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = '' + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == 'function' &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            u === sa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != 'string') throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function pr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      g(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(n).join(', ') + '}'
          : e
      )
    ))
  );
}
function Cu(e) {
  var n = e._init;
  return n(e._payload);
}
function ca(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
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
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Hl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var _ = d.type;
    return _ === In
      ? h(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === Ze &&
            Cu(_) === a.type))
      ? ((y = l(a, d.props)), (y.ref = ht(f, a, d)), (y.return = f), y)
      : ((y = jr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = ht(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Ql(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, y, _) {
    return a === null || a.tag !== 7
      ? ((a = En(d, f.mode, y, _)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Hl('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case tr:
          return (
            (d = jr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = ht(f, null, a)),
            (d.return = f),
            d
          );
        case On:
          return (a = Ql(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var y = a._init;
          return m(f, y(a._payload), d);
      }
      if (wt(a) || ct(a))
        return (a = En(a, f.mode, d, null)), (a.return = f), a;
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var _ = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return _ !== null ? null : u(f, a, '' + d, y);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case tr:
          return d.key === _ ? s(f, a, d, y) : null;
        case On:
          return d.key === _ ? c(f, a, d, y) : null;
        case Ze:
          return (_ = d._init), p(f, a, _(d._payload), y);
      }
      if (wt(d) || ct(d)) return _ !== null ? null : h(f, a, d, y, null);
      pr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, _) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (f = f.get(d) || null), u(a, f, '' + y, _);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case tr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, _);
        case On:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, _);
        case Ze:
          var C = y._init;
          return w(f, a, d, C(y._payload), _);
      }
      if (wt(y) || ct(y)) return (f = f.get(d) || null), h(a, f, y, _, null);
      pr(a, y);
    }
    return null;
  }
  function k(f, a, d, y) {
    for (
      var _ = null, C = null, N = a, P = (a = 0), H = null;
      N !== null && P < d.length;
      P++
    ) {
      N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
      var L = p(f, N, d[P], y);
      if (L === null) {
        N === null && (N = H);
        break;
      }
      e && N && L.alternate === null && n(f, N),
        (a = i(L, a, P)),
        C === null ? (_ = L) : (C.sibling = L),
        (C = L),
        (N = H);
    }
    if (P === d.length) return t(f, N), U && gn(f, P), _;
    if (N === null) {
      for (; P < d.length; P++)
        (N = m(f, d[P], y)),
          N !== null &&
            ((a = i(N, a, P)), C === null ? (_ = N) : (C.sibling = N), (C = N));
      return U && gn(f, P), _;
    }
    for (N = r(f, N); P < d.length; P++)
      (H = w(N, f, P, d[P], y)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? P : H.key),
          (a = i(H, a, P)),
          C === null ? (_ = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        N.forEach(function (Ne) {
          return n(f, Ne);
        }),
      U && gn(f, P),
      _
    );
  }
  function S(f, a, d, y) {
    var _ = ct(d);
    if (typeof _ != 'function') throw Error(g(150));
    if (((d = _.call(d)), d == null)) throw Error(g(151));
    for (
      var C = (_ = null), N = a, P = (a = 0), H = null, L = d.next();
      N !== null && !L.done;
      P++, L = d.next()
    ) {
      N.index > P ? ((H = N), (N = null)) : (H = N.sibling);
      var Ne = p(f, N, L.value, y);
      if (Ne === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ne.alternate === null && n(f, N),
        (a = i(Ne, a, P)),
        C === null ? (_ = Ne) : (C.sibling = Ne),
        (C = Ne),
        (N = H);
    }
    if (L.done) return t(f, N), U && gn(f, P), _;
    if (N === null) {
      for (; !L.done; P++, L = d.next())
        (L = m(f, L.value, y)),
          L !== null &&
            ((a = i(L, a, P)), C === null ? (_ = L) : (C.sibling = L), (C = L));
      return U && gn(f, P), _;
    }
    for (N = r(f, N); !L.done; P++, L = d.next())
      (L = w(N, f, P, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? P : L.key),
          (a = i(L, a, P)),
          C === null ? (_ = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        N.forEach(function (st) {
          return n(f, st);
        }),
      U && gn(f, P),
      _
    );
  }
  function D(f, a, d, y) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === In &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case tr:
          e: {
            for (var _ = d.key, C = a; C !== null; ) {
              if (C.key === _) {
                if (((_ = d.type), _ === In)) {
                  if (C.tag === 7) {
                    t(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === Ze &&
                    Cu(_) === C.type)
                ) {
                  t(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = ht(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, C);
                break;
              } else n(f, C);
              C = C.sibling;
            }
            d.type === In
              ? ((a = En(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = jr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = ht(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case On:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Ql(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (C = d._init), D(f, a, C(d._payload), y);
      }
      if (wt(d)) return k(f, a, d, y);
      if (ct(d)) return S(f, a, d, y);
      pr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Hl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return D;
}
var et = ca(!0),
  fa = ca(!1),
  qt = {},
  Ue = mn(qt),
  Bt = mn(qt),
  Ht = mn(qt);
function xn(e) {
  if (e === qt) throw Error(g(174));
  return e;
}
function po(e, n) {
  switch ((I(Ht, n), I(Bt, e), I(Ue, qt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ni(null, '');
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = ni(n, e));
  }
  F(Ue), I(Ue, n);
}
function nt() {
  F(Ue), F(Bt), F(Ht);
}
function da(e) {
  xn(Ht.current);
  var n = xn(Ue.current),
    t = ni(n, e.type);
  n !== t && (I(Bt, e), I(Ue, t));
}
function mo(e) {
  Bt.current === e && (F(Ue), F(Bt));
}
var $ = mn(0);
function Kr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Dl = [];
function ho() {
  for (var e = 0; e < Dl.length; e++)
    Dl[e]._workInProgressVersionPrimary = null;
  Dl.length = 0;
}
var Er = Xe.ReactCurrentDispatcher,
  Ul = Xe.ReactCurrentBatchConfig,
  Pn = 0,
  A = null,
  Y = null,
  Z = null,
  Yr = !1,
  Pt = !1,
  Qt = 0,
  id = 0;
function ne() {
  throw Error(g(321));
}
function vo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function yo(e, n, t, r, l, i) {
  if (
    ((Pn = i),
    (A = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? ad : cd),
    (e = t(r, l)),
    Pt)
  ) {
    i = 0;
    do {
      if (((Pt = !1), (Qt = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Er.current = fd),
        (e = t(r, l));
    } while (Pt);
  }
  if (
    ((Er.current = Xr),
    (n = Y !== null && Y.next !== null),
    (Pn = 0),
    (Z = Y = A = null),
    (Yr = !1),
    n)
  )
    throw Error(g(300));
  return e;
}
function go() {
  var e = Qt !== 0;
  return (Qt = 0), e;
}
function Me() {
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
  var n = Z === null ? A.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(g(310));
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
function Wt(e, n) {
  return typeof n == 'function' ? n(e) : n;
}
function $l(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((Pn & h) === h)
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
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (A.lanes |= h),
          (zn |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Oe(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (zn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Al(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Oe(i, n.memoizedState) || (ce = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function pa() {}
function ma(e, n) {
  var t = A,
    r = Ce(),
    l = n(),
    i = !Oe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    wo(ya.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Kt(9, va.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(g(349));
    Pn & 30 || ha(t, n, l);
  }
  return l;
}
function ha(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function va(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), ga(n) && wa(e);
}
function ya(e, n, t) {
  return t(function () {
    ga(n) && wa(e);
  });
}
function ga(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function wa(e) {
  var n = Ke(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Nu(e) {
  var n = Me();
  return (
    typeof e == 'function' && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = sd.bind(null, A, e)),
    [n.memoizedState, e]
  );
}
function Kt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ka() {
  return Ce().memoizedState;
}
function Cr(e, n, t, r) {
  var l = Me();
  (A.flags |= e),
    (l.memoizedState = Kt(1 | n, t, void 0, r === void 0 ? null : r));
}
function sl(e, n, t, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && vo(r, o.deps))) {
      l.memoizedState = Kt(n, t, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Kt(1 | n, t, i, r));
}
function Pu(e, n) {
  return Cr(8390656, 8, e, n);
}
function wo(e, n) {
  return sl(2048, 8, e, n);
}
function Sa(e, n) {
  return sl(4, 2, e, n);
}
function xa(e, n) {
  return sl(4, 4, e, n);
}
function _a(e, n) {
  if (typeof n == 'function')
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ea(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), sl(4, 4, _a.bind(null, n, e), t)
  );
}
function ko() {}
function Ca(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && vo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Na(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && vo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Pa(e, n, t) {
  return Pn & 21
    ? (Oe(t, n) || ((t = Ts()), (A.lanes |= t), (zn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function od(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Ul.transition = r);
  }
}
function za() {
  return Ce().memoizedState;
}
function ud(e, n, t) {
  var r = an(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ja(e))
  )
    Ta(n, t);
  else if (((t = oa(e, n, t, r)), t !== null)) {
    var l = oe();
    Re(t, e, r, l), La(t, n, r);
  }
}
function sd(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) Ta(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), co(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = oa(e, n, l, r)),
      t !== null && ((l = oe()), Re(t, e, r, l), La(t, n, r));
  }
}
function ja(e) {
  var n = e.alternate;
  return e === A || (n !== null && n === A);
}
function Ta(e, n) {
  Pt = Yr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function La(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Zi(e, t);
  }
}
var Xr = {
    readContext: Ee,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: Ee,
    useCallback: function (e, n) {
      return (Me().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ee,
    useEffect: Pu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Cr(4194308, 4, _a.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Cr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Cr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Me();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Me();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = ud.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Me();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: ko,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        n = e[0];
      return (e = od.bind(null, e[1])), (Me().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = A,
        l = Me();
      if (U) {
        if (t === void 0) throw Error(g(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(g(349));
        Pn & 30 || ha(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Pu(ya.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kt(9, va.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Me(),
        n = J.identifierPrefix;
      if (U) {
        var t = Be,
          r = Ve;
        (t = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + t),
          (n = ':' + n + 'R' + t),
          (t = Qt++),
          0 < t && (n += 'H' + t.toString(32)),
          (n += ':');
      } else (t = id++), (n = ':' + n + 'r' + t.toString(32) + ':');
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: Ee,
    useCallback: Ca,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: xa,
    useMemo: Na,
    useReducer: $l,
    useRef: ka,
    useState: function () {
      return $l(Wt);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var n = Ce();
      return Pa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Wt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: Ee,
    useCallback: Ca,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: xa,
    useMemo: Na,
    useReducer: Al,
    useRef: ka,
    useState: function () {
      return Al(Wt);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var n = Ce();
      return Y === null ? (n.memoizedState = e) : Pa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Wt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  };
function tt(e, n) {
  try {
    var t = '',
      r = n;
    do (t += Uc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Vl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ei(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var dd = typeof WeakMap == 'function' ? WeakMap : Map;
function Ra(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Zr || ((Zr = !0), (Ii = r)), Ei(e, n);
    }),
    t
  );
}
function Oa(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Ei(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        Ei(e, n),
          typeof r != 'function' &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    t
  );
}
function zu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Nd.bind(null, e, n, t)), n.then(e, e));
}
function ju(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), un(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var pd = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? fa(n, null, t, r) : et(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Gn(n, l),
    (r = yo(e, n, t, r, i, l)),
    (t = go()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && t && lo(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Ru(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == 'function' &&
      !zo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ia(e, n, i, r, l))
      : ((e = jr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ut), t(o, r) && e.ref === n.ref)
    )
      return Ye(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = cn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ia(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ut(i, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Ye(e, n, l);
  }
  return Ci(e, n, t, r, l);
}
function Ma(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Qn, me),
        (me |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          I(Qn, me),
          (me |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        I(Qn, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      I(Qn, me),
      (me |= r);
  return ie(e, n, l, t), n.child;
}
function Fa(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Ci(e, n, t, r, l) {
  var i = de(t) ? Cn : le.current;
  return (
    (i = qn(n, i)),
    Gn(n, l),
    (t = yo(e, n, t, r, i, l)),
    (r = go()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && r && lo(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Ou(e, n, t, r, l) {
  if (de(t)) {
    var i = !0;
    Ar(n);
  } else i = !1;
  if ((Gn(n, l), n.stateNode === null))
    Nr(e, n), aa(n, t, r), _i(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      c = t.contextType;
    typeof c == 'object' && c !== null
      ? (c = Ee(c))
      : ((c = de(t) ? Cn : le.current), (c = qn(n, c)));
    var h = t.getDerivedStateFromProps,
      m =
        typeof h == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Eu(n, o, r, c)),
      (Je = !1);
    var p = n.memoizedState;
    (o.state = p),
      Wr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof h == 'function' && (xi(n, t, h, r), (s = n.memoizedState)),
          (u = Je || _u(n, t, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (n.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      ua(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : ze(n.type, u)),
      (o.props = c),
      (m = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ee(s))
        : ((s = de(t) ? Cn : le.current), (s = qn(n, s)));
    var w = t.getDerivedStateFromProps;
    (h =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && Eu(n, o, r, s)),
      (Je = !1),
      (p = n.memoizedState),
      (o.state = p),
      Wr(n, r, o, l);
    var k = n.memoizedState;
    u !== m || p !== k || fe.current || Je
      ? (typeof w == 'function' && (xi(n, t, w, r), (k = n.memoizedState)),
        (c = Je || _u(n, t, c, r, p, k, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, k, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, k, s)),
            typeof o.componentDidUpdate == 'function' && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Ni(e, n, t, r, i, l);
}
function Ni(e, n, t, r, l, i) {
  Fa(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && gu(n, t, !1), Ye(e, n, i);
  (r = n.stateNode), (pd.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = et(n, e.child, null, i)), (n.child = et(n, null, u, i)))
      : ie(e, n, u, i),
    (n.memoizedState = r.state),
    l && gu(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext
    ? yu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && yu(e, n.context, !1),
    po(e, n.containerInfo);
}
function Iu(e, n, t, r, l) {
  return bn(), oo(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      ki(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === '$!'
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = fl(o, r, 0, null)),
              (e = En(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = zi(t)),
              (n.memoizedState = Pi),
              e)
            : So(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return md(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = cn(u, i)) : ((i = En(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? zi(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Pi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cn(i, { mode: 'visible', children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function So(e, n) {
  return (
    (n = fl({ mode: 'visible', children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function mr(e, n, t, r) {
  return (
    r !== null && oo(r),
    et(n, e.child, null, t),
    (e = So(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function md(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Vl(Error(g(422)))), mr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = fl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = En(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && et(n, e.child, null, o),
        (n.child.memoizedState = zi(o)),
        (n.memoizedState = Pi),
        i);
  if (!(n.mode & 1)) return mr(e, n, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Vl(i, r, void 0)), mr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), Re(r, e, l, -1));
    }
    return Po(), (r = Vl(Error(g(421)))), mr(e, n, o, r);
  }
  return l.data === '$?'
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Pd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (he = on(l.nextSibling)),
      (ve = n),
      (U = !0),
      (Te = null),
      e !== null &&
        ((ke[Se++] = Ve),
        (ke[Se++] = Be),
        (ke[Se++] = Nn),
        (Ve = e.id),
        (Be = e.overflow),
        (Nn = n)),
      (n = So(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Mu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Si(e.return, n, t);
}
function Bl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function $a(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, t, n);
        else if (e.tag === 19) Mu(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Kr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Bl(n, !1, l, t, i);
        break;
      case 'backwards':
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Bl(n, !0, t, null, i);
        break;
      case 'together':
        Bl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (zn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (
      e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function hd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), bn();
      break;
    case 5:
      da(n);
      break;
    case 1:
      de(n.type) && Ar(n);
      break;
    case 4:
      po(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      I(Hr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ua(e, n, t)
          : (I($, $.current & 1),
            (e = Ye(e, n, t)),
            e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return $a(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Ma(e, n, t);
  }
  return Ye(e, n, t);
}
var Aa, ji, Va, Ba;
Aa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
ji = function () {};
Va = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), xn(Ue.current);
    var i = null;
    switch (t) {
      case 'input':
        (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ur);
    }
    ti(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Lt.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Lt.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && M('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push('style', t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ba = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function vd(e, n, t) {
  var r = n.pendingProps;
  switch ((io(n), n.tag)) {
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
      return te(n), null;
    case 1:
      return de(n.type) && $r(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        F(fe),
        F(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Te !== null && (Di(Te), (Te = null)))),
        ji(e, n),
        te(n),
        null
      );
    case 5:
      mo(n);
      var l = xn(Ht.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Va(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return te(n), null;
        }
        if (((e = xn(Ue.current)), dr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Fe] = n), (r[Vt] = i), (e = (n.mode & 1) !== 0), t)) {
            case 'dialog':
              M('cancel', r), M('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              M('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < St.length; l++) M(St[l], r);
              break;
            case 'source':
              M('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              M('error', r), M('load', r);
              break;
            case 'details':
              M('toggle', r);
              break;
            case 'input':
              Qo(r, i), M('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M('invalid', r);
              break;
            case 'textarea':
              Ko(r, i), M('invalid', r);
          }
          ti(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Lt.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  M('scroll', r);
            }
          switch (t) {
            case 'input':
              rr(r), Wo(r, i, !0);
              break;
            case 'textarea':
              rr(r), Yo(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ur);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = hs(t)),
            e === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Fe] = n),
            (e[Vt] = r),
            Aa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = ri(t, r)), t)) {
              case 'dialog':
                M('cancel', e), M('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                M('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < St.length; l++) M(St[l], e);
                l = r;
                break;
              case 'source':
                M('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                M('error', e), M('load', e), (l = r);
                break;
              case 'details':
                M('toggle', e), (l = r);
                break;
              case 'input':
                Qo(e, r), (l = Jl(e, r)), M('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  M('invalid', e);
                break;
              case 'textarea':
                Ko(e, r), (l = ei(e, r)), M('invalid', e);
                break;
              default:
                l = r;
            }
            ti(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? gs(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (t !== 'textarea' || s !== '') && Rt(e, s)
                    : typeof s == 'number' && Rt(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Lt.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && M('scroll', e)
                      : s != null && Qi(e, i, s, o));
              }
            switch (t) {
              case 'input':
                rr(e), Wo(e, r, !1);
                break;
              case 'textarea':
                rr(e), Yo(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + fn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ur);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Ba(e, n, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && n.stateNode === null) throw Error(g(166));
        if (((t = xn(Ht.current)), xn(Ue.current), dr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Fe] = n),
            (i = r.nodeValue !== t) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Fe] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (F($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128))
          ia(), bn(), (n.flags |= 98560), (i = !1);
        else if (((i = dr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Fe] = n;
          } else
            bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else Te !== null && (Di(Te), (Te = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : Po())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        nt(), ji(e, n), e === null && $t(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return ao(n.type._context), te(n), null;
    case 17:
      return de(n.type) && $r(), te(n), null;
    case 19:
      if ((F($), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) vt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    vt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return I($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            W() > rt &&
            ((n.flags |= 128), (r = !0), vt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              vt(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !U)
            )
              return te(n), null;
          } else
            2 * W() - i.renderingStartTime > rt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), vt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = W()),
          (n.sibling = null),
          (t = $.current),
          I($, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        No(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function yd(e, n) {
  switch ((io(n), n.tag)) {
    case 1:
      return (
        de(n.type) && $r(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        nt(),
        F(fe),
        F(le),
        ho(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return mo(n), null;
    case 13:
      if ((F($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(g(340));
        bn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return F($), null;
    case 4:
      return nt(), null;
    case 10:
      return ao(n.type._context), null;
    case 22:
    case 23:
      return No(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1,
  re = !1,
  gd = typeof WeakSet == 'function' ? WeakSet : Set,
  x = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        B(e, n, r);
      }
    else t.current = null;
}
function Ti(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var Fu = !1;
function wd(e, n) {
  if (((pi = Mr), (e = Ks()), ro(e))) {
    if ('selectionStart' in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var w;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (mi = { focusedElem: e, selectionRange: t }, Mr = !1, x = n; x !== null; )
    if (((n = x), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (x = e);
    else
      for (; x !== null; ) {
        n = x;
        try {
          var k = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var S = k.memoizedProps,
                    D = k.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : ze(n.type, S),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
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
                throw Error(g(163));
            }
        } catch (y) {
          B(n, n.return, y);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (x = e);
          break;
        }
        x = n.return;
      }
  return (k = Fu), (Fu = !1), k;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ti(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Li(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == 'function' ? n(e) : (n.current = e);
  }
}
function Ha(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ha(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Fe], delete n[Vt], delete n[yi], delete n[nd], delete n[td])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qa(e.return)) return null;
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
function Ri(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, n, t), e = e.sibling; e !== null; ) Ri(e, n, t), (e = e.sibling);
}
function Oi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, n, t), e = e.sibling; e !== null; ) Oi(e, n, t), (e = e.sibling);
}
var q = null,
  je = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Wa(e, n, t), (t = t.sibling);
}
function Wa(e, n, t) {
  if (De && typeof De.onCommitFiberUnmount == 'function')
    try {
      De.onCommitFiberUnmount(nl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Hn(t, n);
    case 6:
      var r = q,
        l = je;
      (q = null),
        Ge(e, n, t),
        (q = r),
        (je = l),
        q !== null &&
          (je
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (je
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, t)
              : e.nodeType === 1 && Ml(e, t),
            Ft(e))
          : Ml(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = je),
        (q = t.stateNode.containerInfo),
        (je = !0),
        Ge(e, n, t),
        (q = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ti(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(t, n, u);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r))
        : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Uu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new gd()),
      n.forEach(function (r) {
        var l = zd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (je = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Wa(i, o, l), (q = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Ka(n, e), (n = n.sibling);
}
function Ka(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), Ie(e), r & 4)) {
        try {
          zt(3, e, e.return), al(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      Pe(n, e), Ie(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Pe(n, e),
        Ie(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rt(l, '');
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && ps(l, i),
              ri(u, o);
            var c = ri(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === 'style'
                ? gs(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? vs(l, m)
                : h === 'children'
                ? Rt(l, m)
                : Qi(l, h, m, c);
            }
            switch (u) {
              case 'input':
                ql(l, i);
                break;
              case 'textarea':
                ms(l, i);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Wn(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(l, !!i.multiple, i.defaultValue, !0)
                      : Wn(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Vt] = i;
          } catch (S) {
            B(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Pe(n, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ft(n.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      break;
    case 4:
      Pe(n, e), Ie(e);
      break;
    case 13:
      Pe(n, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = W())),
        r & 4 && Uu(e);
      break;
    case 22:
      if (
        ((h = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), Pe(n, e), (re = c)) : Pe(n, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (x = e, h = e.child; h !== null; ) {
            for (m = x = h; x !== null; ) {
              switch (((p = x), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == 'function') {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (k.props = n.memoizedProps),
                        (k.state = n.memoizedState),
                        k.componentWillUnmount();
                    } catch (S) {
                      B(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Au(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (x = w)) : Au(m);
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
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = ys('display', o)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
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
      Pe(n, e), Ie(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      Pe(n, e), Ie(e);
  }
}
function Ie(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Qa(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rt(l, ''), (r.flags &= -33));
          var i = Du(e);
          Oi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Du(e);
          Ri(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function kd(e, n, t) {
  (x = e), Ya(e);
}
function Ya(e, n, t) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || hr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = hr;
        var c = re;
        if (((hr = o), (re = s) && !c))
          for (x = l; x !== null; )
            (o = x),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = o), (x = s))
                : Vu(l);
        for (; i !== null; ) (x = i), Ya(i), (i = i.sibling);
        (x = l), (hr = u), (re = c);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : $u(e);
  }
}
function $u(e) {
  for (; x !== null; ) {
    var n = x;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || al(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && xu(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                xu(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && t.focus();
                    break;
                  case 'img':
                    s.src && (t.src = s.src);
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
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Ft(m);
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
              throw Error(g(163));
          }
        re || (n.flags & 512 && Li(n));
      } catch (p) {
        B(n, n.return, p);
      }
    }
    if (n === e) {
      x = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (x = t);
      break;
    }
    x = n.return;
  }
}
function Au(e) {
  for (; x !== null; ) {
    var n = x;
    if (n === e) {
      x = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (x = t);
      break;
    }
    x = n.return;
  }
}
function Vu(e) {
  for (; x !== null; ) {
    var n = x;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            al(4, n);
          } catch (s) {
            B(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(n, l, s);
            }
          }
          var i = n.return;
          try {
            Li(n);
          } catch (s) {
            B(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Li(n);
          } catch (s) {
            B(n, o, s);
          }
      }
    } catch (s) {
      B(n, n.return, s);
    }
    if (n === e) {
      x = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (x = u);
      break;
    }
    x = n.return;
  }
}
var Sd = Math.ceil,
  Gr = Xe.ReactCurrentDispatcher,
  xo = Xe.ReactCurrentOwner,
  _e = Xe.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Qn = mn(0),
  X = 0,
  Yt = null,
  zn = 0,
  cl = 0,
  _o = 0,
  jt = null,
  ae = null,
  Eo = 0,
  rt = 1 / 0,
  $e = null,
  Zr = !1,
  Ii = null,
  sn = null,
  vr = !1,
  nn = null,
  Jr = 0,
  Tt = 0,
  Mi = null,
  Pr = -1,
  zr = 0;
function oe() {
  return R & 6 ? W() : Pr !== -1 ? Pr : (Pr = W());
}
function an(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : ld.transition !== null
      ? (zr === 0 && (zr = Ts()), zr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < Tt) throw ((Tt = 0), (Mi = null), Error(g(185)));
  Gt(e, t, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (cl |= t), X === 4 && be(e, b)),
      pe(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((rt = W() + 500), ol && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  rf(e, n);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Zo(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Zo(t), n === 1))
      e.tag === 0 ? rd(Bu.bind(null, e)) : ta(Bu.bind(null, e)),
        bf(function () {
          !(R & 6) && hn();
        }),
        (t = null);
    else {
      switch (Ls(r)) {
        case 1:
          t = Gi;
          break;
        case 4:
          t = zs;
          break;
        case 16:
          t = Or;
          break;
        case 536870912:
          t = js;
          break;
        default:
          t = Or;
      }
      t = nc(t, Xa.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Xa(e, n) {
  if (((Pr = -1), (zr = 0), R & 6)) throw Error(g(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = qr(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var i = Za();
    (J !== e || b !== n) && (($e = null), (rt = W() + 500), _n(e, n));
    do
      try {
        Ed();
        break;
      } catch (u) {
        Ga(e, u);
      }
    while (1);
    so(),
      (Gr.current = i),
      (R = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = si(e)), l !== 0 && ((r = l), (n = Fi(e, l)))), n === 1)
    )
      throw ((t = Yt), _n(e, 0), be(e, r), pe(e, W()), t);
    if (n === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xd(l) &&
          ((n = qr(e, r)),
          n === 2 && ((i = si(e)), i !== 0 && ((r = i), (n = Fi(e, i)))),
          n === 1))
      )
        throw ((t = Yt), _n(e, 0), be(e, r), pe(e, W()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((n = Eo + 500 - W()), 10 < n))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(wn.bind(null, e, ae, $e), n);
            break;
          }
          wn(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Le(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = W() - r),
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
                : 1960 * Sd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(wn.bind(null, e, ae, $e), r);
            break;
          }
          wn(e, ae, $e);
          break;
        case 5:
          wn(e, ae, $e);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === t ? Xa.bind(null, e) : null;
}
function Fi(e, n) {
  var t = jt;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
    (e = qr(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Di(n)),
    e
  );
}
function Di(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function xd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (
    n &= ~_o,
      n &= ~cl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Le(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Bu(e) {
  if (R & 6) throw Error(g(327));
  Zn();
  var n = Ir(e, 0);
  if (!(n & 1)) return pe(e, W()), null;
  var t = qr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = si(e);
    r !== 0 && ((n = r), (t = Fi(e, r)));
  }
  if (t === 1) throw ((t = Yt), _n(e, 0), be(e, n), pe(e, W()), t);
  if (t === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    wn(e, ae, $e),
    pe(e, W()),
    null
  );
}
function Co(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((rt = W() + 500), ol && hn());
  }
}
function jn(e) {
  nn !== null && nn.tag === 0 && !(R & 6) && Zn();
  var n = R;
  R |= 1;
  var t = _e.transition,
    r = O;
  try {
    if (((_e.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (_e.transition = t), (R = n), !(R & 6) && hn();
  }
}
function No() {
  (me = Qn.current), F(Qn);
}
function _n(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), qf(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          nt(), F(fe), F(le), ho();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          No();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = cn(e.current, null)),
    (b = me = n),
    (X = 0),
    (Yt = null),
    (_o = cl = zn = 0),
    (ae = jt = null),
    Sn !== null)
  ) {
    for (n = 0; n < Sn.length; n++)
      if (((t = Sn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Ga(e, n) {
  do {
    var t = K;
    try {
      if ((so(), (Er.current = Xr), Yr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((Pn = 0),
        (Z = Y = A = null),
        (Pt = !1),
        (Qt = 0),
        (xo.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Yt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = b),
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
          var w = ju(o);
          if (w !== null) {
            (w.flags &= -257),
              Tu(w, o, u, i, n),
              w.mode & 1 && zu(i, c, n),
              (n = w),
              (s = c);
            var k = n.updateQueue;
            if (k === null) {
              var S = new Set();
              S.add(s), (n.updateQueue = S);
            } else k.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              zu(i, c, n), Po();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var D = ju(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Tu(D, o, u, i, n),
              oo(tt(s, u));
            break e;
          }
        }
        (i = s = tt(s, u)),
          X !== 4 && (X = 2),
          jt === null ? (jt = [i]) : jt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Ra(i, s, n);
              Su(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var y = Oa(i, u, n);
                Su(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qa(t);
    } catch (_) {
      (n = _), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Za() {
  var e = Gr.current;
  return (Gr.current = Xr), e === null ? Xr : e;
}
function Po() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(zn & 268435455) && !(cl & 268435455)) || be(J, b);
}
function qr(e, n) {
  var t = R;
  R |= 2;
  var r = Za();
  (J !== e || b !== n) && (($e = null), _n(e, n));
  do
    try {
      _d();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (1);
  if ((so(), (R = t), (Gr.current = r), K !== null)) throw Error(g(261));
  return (J = null), (b = 0), X;
}
function _d() {
  for (; K !== null; ) Ja(K);
}
function Ed() {
  for (; K !== null && !Xc(); ) Ja(K);
}
function Ja(e) {
  var n = ec(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    n === null ? qa(e) : (K = n),
    (xo.current = null);
}
function qa(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = yd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = vd(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function wn(e, n, t) {
  var r = O,
    l = _e.transition;
  try {
    (_e.transition = null), (O = 1), Cd(e, n, t, r);
  } finally {
    (_e.transition = l), (O = r);
  }
  return null;
}
function Cd(e, n, t, r) {
  do Zn();
  while (nn !== null);
  if (R & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (lf(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      vr ||
      ((vr = !0),
      nc(Or, function () {
        return Zn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = O;
    O = 1;
    var u = R;
    (R |= 4),
      (xo.current = null),
      wd(e, t),
      Ka(t, e),
      Wf(mi),
      (Mr = !!pi),
      (mi = pi = null),
      (e.current = t),
      kd(t),
      Gc(),
      (R = u),
      (O = o),
      (_e.transition = i);
  } else e.current = t;
  if (
    (vr && ((vr = !1), (nn = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    qc(t.stateNode),
    pe(e, W()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Ii), (Ii = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Zn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Mi ? Tt++ : ((Tt = 0), (Mi = e))) : (Tt = 0),
    hn(),
    null
  );
}
function Zn() {
  if (nn !== null) {
    var e = Ls(Jr),
      n = _e.transition,
      t = O;
    try {
      if (((_e.transition = null), (O = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Jr = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var i = x,
            o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (x = m);
                  else
                    for (; x !== null; ) {
                      h = x;
                      var p = h.sibling,
                        w = h.return;
                      if ((Ha(h), h === c)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (x = p);
                        break;
                      }
                      x = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var D = S.sibling;
                    (S.sibling = null), (S = D);
                  } while (S !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (x = f);
                break e;
              }
              x = i.return;
            }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
          else
            e: for (o = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, u);
                  }
                } catch (_) {
                  B(u, u.return, _);
                }
              if (u === o) {
                x = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (x = y);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((R = l), hn(), De && typeof De.onPostCommitFiberRoot == 'function')
        )
          try {
            De.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (_e.transition = n);
    }
  }
  return !1;
}
function Hu(e, n, t) {
  (n = tt(t, n)),
    (n = Ra(e, n, 1)),
    (e = un(e, n, 1)),
    (n = oe()),
    e !== null && (Gt(e, 1, n), pe(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) Hu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Hu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sn === null || !sn.has(r)))
        ) {
          (e = tt(t, e)),
            (e = Oa(n, e, 1)),
            (n = un(n, e, 1)),
            (e = oe()),
            n !== null && (Gt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Nd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > W() - Eo)
        ? _n(e, 0)
        : (_o |= t)),
    pe(e, n);
}
function ba(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ke(e, n)), e !== null && (Gt(e, n, t), pe(e, t));
}
function Pd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), ba(e, t);
}
function zd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(n), ba(e, t);
}
var ec;
ec = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), hd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && n.flags & 1048576 && ra(n, Br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Nr(e, n), (e = n.pendingProps);
      var l = qn(n, le.current);
      Gn(n, t), (l = yo(null, n, r, e, l, t));
      var i = go();
      return (
        (n.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((i = !0), Ar(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fo(n),
            (l.updater = ul),
            (n.stateNode = l),
            (l._reactInternals = n),
            _i(n, r, e, t),
            (n = Ni(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && lo(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Nr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Td(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            n = Ci(null, n, r, e, t);
            break e;
          case 1:
            n = Ou(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = Ru(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(g(306, r, ''));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Ci(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Ou(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(g(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ua(e, n),
          Wr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = tt(Error(g(423)), n)), (n = Iu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(g(424)), n)), (n = Iu(e, n, r, t, l));
            break e;
          } else
            for (
              he = on(n.stateNode.containerInfo.firstChild),
                ve = n,
                U = !0,
                Te = null,
                t = fa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((bn(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        da(n),
        e === null && ki(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hi(r, l) ? (o = null) : i !== null && hi(r, i) && (n.flags |= 32),
        Fa(e, n),
        ie(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && ki(n), null;
    case 13:
      return Ua(e, n, t);
    case 4:
      return (
        po(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = et(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Lu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          I(Hr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = He(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Si(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  Si(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Gn(n, t),
        (l = Ee(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = ze(r, n.pendingProps)),
        (l = ze(r.type, l)),
        Ru(e, n, r, l, t)
      );
    case 15:
      return Ia(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Nr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), Ar(n)) : (e = !1),
        Gn(n, t),
        aa(n, r, l),
        _i(n, r, l, t),
        Ni(null, n, r, !0, e, t)
      );
    case 19:
      return $a(e, n, t);
    case 22:
      return Ma(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function nc(e, n) {
  return Ps(e, n);
}
function jd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
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
function xe(e, n, t, r) {
  return new jd(e, n, t, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Td(e) {
  if (typeof e == 'function') return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ki)) return 11;
    if (e === Yi) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = xe(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function jr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) zo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case In:
        return En(t.children, l, i, n);
      case Wi:
        (o = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = xe(12, t, n, l | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Xl:
        return (e = xe(13, t, n, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Gl:
        return (e = xe(19, t, n, l)), (e.elementType = Gl), (e.lanes = i), e;
      case cs:
        return fl(t, l, i, n);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ss:
              o = 10;
              break e;
            case as:
              o = 9;
              break e;
            case Ki:
              o = 11;
              break e;
            case Yi:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ''));
    }
  return (
    (n = xe(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function En(e, n, t, r) {
  return (e = xe(7, e, r, n)), (e.lanes = t), e;
}
function fl(e, n, t, r) {
  return (
    (e = xe(22, e, r, n)),
    (e.elementType = cs),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hl(e, n, t) {
  return (e = xe(6, e, null, n)), (e.lanes = t), e;
}
function Ql(e, n, t) {
  return (
    (n = xe(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Ld(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function jo(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new Ld(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = xe(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fo(i),
    e
  );
}
function Rd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function tc(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(g(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return na(e, t, n);
  }
  return n;
}
function rc(e, n, t, r, l, i, o, u, s) {
  return (
    (e = jo(t, r, !0, e, l, i, o, u, s)),
    (e.context = tc(null)),
    (t = e.current),
    (r = oe()),
    (l = an(t)),
    (i = He(r, l)),
    (i.callback = n ?? null),
    un(t, i, l),
    (e.current.lanes = l),
    Gt(e, l, r),
    pe(e, r),
    e
  );
}
function dl(e, n, t, r) {
  var l = n.current,
    i = oe(),
    o = an(l);
  return (
    (t = tc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(l, n, o)),
    e !== null && (Re(e, l, o, i), _r(e, l, o)),
    o
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function To(e, n) {
  Qu(e, n), (e = e.alternate) && Qu(e, n);
}
function Od() {
  return null;
}
var lc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lo(e) {
  this._internalRoot = e;
}
pl.prototype.render = Lo.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  dl(e, n, null, null);
};
pl.prototype.unmount = Lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    jn(function () {
      dl(null, e, null, null);
    }),
      (n[We] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Is();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
    qe.splice(t, 0, e), t === 0 && Fs(e);
  }
};
function Ro(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Wu() {}
function Id(e, n, t, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = br(o);
        i.call(c);
      };
    }
    var o = rc(n, r, e, 0, null, !1, !1, '', Wu);
    return (
      (e._reactRootContainer = o),
      (e[We] = o.current),
      $t(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = br(s);
      u.call(c);
    };
  }
  var s = jo(e, 0, !1, null, null, !1, !1, '', Wu);
  return (
    (e._reactRootContainer = s),
    (e[We] = s.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      dl(n, s, t, r);
    }),
    s
  );
}
function hl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = br(o);
        u.call(s);
      };
    }
    dl(n, o, e, l);
  } else o = Id(t, n, e, l, r);
  return br(o);
}
Rs = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (Zi(n, t | 1), pe(n, W()), !(R & 6) && ((rt = W() + 500), hn()));
      }
      break;
    case 13:
      jn(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        To(e, 1);
  }
};
Ji = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    To(e, 134217728);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    To(e, n);
  }
};
Is = function () {
  return O;
};
Ms = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
ii = function (e, n, t) {
  switch (n) {
    case 'input':
      if ((ql(e, t), (n = t.name), t.type === 'radio' && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(g(90));
            ds(r), ql(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ms(e, t);
      break;
    case 'select':
      (n = t.value), n != null && Wn(e, !!t.multiple, n, !1);
  }
};
Ss = Co;
xs = jn;
var Md = { usingClientEntryPoint: !1, Events: [Jt, Un, il, ws, ks, Co] },
  yt = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Fd = {
    bundleType: yt.bundleType,
    version: yt.version,
    rendererPackageName: yt.rendererPackageName,
    rendererConfig: yt.rendererConfig,
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
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yt.findFiberByHostInstance || Od,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (nl = yr.inject(Fd)), (De = yr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
ge.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ro(n)) throw Error(g(200));
  return Rd(e, n, null, t);
};
ge.createRoot = function (e, n) {
  if (!Ro(e)) throw Error(g(299));
  var t = !1,
    r = '',
    l = lc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = jo(e, 1, !1, null, null, t, !1, r, l)),
    (e[We] = n.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    new Lo(n)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == 'function'
      ? Error(g(188))
      : ((e = Object.keys(e).join(',')), Error(g(268, e)));
  return (e = Cs(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return jn(e);
};
ge.hydrate = function (e, n, t) {
  if (!ml(n)) throw Error(g(200));
  return hl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
  if (!Ro(e)) throw Error(g(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = '',
    o = lc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = rc(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[We] = n.current),
    $t(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new pl(n);
};
ge.render = function (e, n, t) {
  if (!ml(n)) throw Error(g(200));
  return hl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (jn(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[We] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Co;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!ml(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return hl(e, n, t, !1, r);
};
ge.version = '18.2.0-next-9e3b772b8-20220608';
function ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic);
    } catch (e) {
      console.error(e);
    }
}
ic(), (rs.exports = ge);
var Dd = rs.exports,
  Ku = Dd;
(Wl.createRoot = Ku.createRoot), (Wl.hydrateRoot = Ku.hydrateRoot);
const Oo = './images/logo-bookmark.svg',
  Ud = './images/icon-hamburger.svg';
function $d({ handleClick: e }) {
  return v.jsx('button', {
    type: 'button',
    className: 'header__btn-mobile',
    onClick: e,
    children: v.jsx('img', { src: Ud, alt: 'Icon hamburger' }),
  });
}
function Io({ name: e, href: n, worth: t = !0 }) {
  return v.jsx(
    'li',
    {
      className: 'header__li',
      children: v.jsx('a', {
        href: n,
        className: t ? 'primary' : 'secondary',
        children: e,
      }),
    },
    e
  );
}
const Ad = './images/icon-close.svg',
  oc = './images/icon-facebook.svg',
  uc = './images/icon-twitter.svg',
  Vd = [
    { href: '/', name: 'Features' },
    { href: '/', name: 'Pricing' },
    { href: '/', name: 'Contacts' },
  ],
  Mo = { links: Vd };
function Bd({ ariaExpanded: e, handleClose: n }) {
  return v.jsxs('div', {
    className: 'mobile_menu',
    'aria-expanded': e,
    children: [
      v.jsxs('div', {
        className: 'mobile_menu__actions',
        children: [
          v.jsxs('div', {
            className: 'flex',
            children: [
              v.jsx('img', {
                src: Oo,
                alt: 'Logo of the company',
                className: 'header__logo-img',
              }),
              v.jsx('button', {
                className: 'mobile_menu__close',
                children: v.jsx('img', {
                  src: Ad,
                  alt: 'Icon close logo',
                  onClick: n,
                }),
              }),
            ],
          }),
          v.jsxs('ul', {
            className: 'flex',
            children: [
              Mo.links.map((t) =>
                v.jsx(Io, { name: t.name, href: t.href, worth: !0 }, t.name)
              ),
              v.jsx('li', {
                children: v.jsx('button', {
                  className: 'mobile_menu__login',
                  type: 'button',
                  children: 'LOGIN',
                }),
              }),
            ],
          }),
        ],
      }),
      v.jsxs('div', {
        className: 'mobile_menu__socials flex',
        children: [
          v.jsx('img', { src: oc, alt: 'Facebook logo icon' }),
          v.jsx('img', { src: uc, alt: 'Twitter Logo Icon' }),
        ],
      }),
    ],
  });
}
function Hd() {
  const [e, n] = it.useState(!1),
    t = () => {
      n(!e);
    };
  return v.jsxs('header', {
    className: 'header flex',
    children: [
      v.jsx('div', {
        className: 'header__logo',
        children: v.jsx('img', {
          src: Oo,
          alt: '',
          className: 'header__logo-img',
        }),
      }),
      v.jsxs('nav', {
        className: 'header__nav flex',
        children: [
          v.jsx('ul', {
            className: 'header__ul flex',
            children: Mo.links.map((r) =>
              v.jsx(Io, { name: r.name, href: r.href, worth: !0 }, r.name)
            ),
          }),
          v.jsx('button', {
            className: 'btn-act',
            type: 'button',
            children: 'Login',
          }),
        ],
      }),
      v.jsx(Bd, { handleClose: t, ariaExpanded: e }),
      v.jsx($d, { handleClick: t }),
    ],
  });
}
const Qd = './images/illustration-hero.svg';
function Wd() {
  return v.jsxs('section', {
    className: 'cover flex',
    children: [
      v.jsxs('article', {
        className: 'cover__article flex',
        children: [
          v.jsx('h1', {
            className: 'cover__h1 animate__animated animate__fadeInUp',
            children: 'A simple book mark manager',
          }),
          v.jsx('p', {
            className:
              'cover__p animate__animated animate__fadeInUp animate__delay-2s',
            children:
              'A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
          }),
          v.jsxs('div', {
            className:
              'cover__links flex animate__animated animate__fadeInUp animate__delay-3s',
            children: [
              v.jsx('a', {
                className: 'btn primary',
                href: '',
                children: 'Get it on Chrome',
              }),
              v.jsx('a', {
                className: 'btn secondary',
                href: '',
                children: 'Get it on Firefox',
              }),
            ],
          }),
        ],
      }),
      v.jsx('div', {
        className: 'cover__img animate__animated  animate__backInUp',
        children: v.jsx('img', { src: Qd, alt: '' }),
      }),
    ],
  });
}
function Kd({ title: e, text: n, img: t, link: r, animation: l }) {
  return v.jsxs('article', {
    className: `cards flex ${l}`,
    children: [
      v.jsxs('div', {
        className: 'cards__info flex',
        children: [
          v.jsx('img', { src: `./images/${t}`, alt: '' }),
          v.jsx('h3', { children: e }),
          v.jsx('p', { children: n }),
        ],
      }),
      v.jsxs('div', {
        className: 'cards__action flex',
        children: [
          v.jsx('img', { src: './images/bg-dots.svg', alt: '' }),
          v.jsx('a', {
            href: r,
            className: 'btn primary',
            children: 'Add and install extension',
          }),
        ],
      }),
    ],
  });
}
function sc(e, n, t = {}) {
  return (
    it.useEffect(() => {
      const r = new IntersectionObserver((i) => {
        i.forEach((o) => {
          o.isIntersecting && o.target.classList.add(t.inViewClass || n);
        });
      }, t);
      return (
        document.querySelectorAll(e).forEach((i) => r.observe(i)),
        () => r.disconnect()
      );
    }, [e, n, t]),
    null
  );
}
function Fo({ sectionTitle: e, description: n }) {
  return (
    sc('.section__text', 'animate__fadeInUp'),
    v.jsxs('div', {
      className: 'title_section',
      children: [
        v.jsx('h2', {
          className: 'section__text animate__animated ',
          children: e,
        }),
        v.jsx('p', {
          className: 'section__text animate__animated animate__delay-2s',
          children: n,
        }),
      ],
    })
  );
}
const Yd = [
    {
      id: 1,
      title: 'Add to Chrome',
      text: 'Minimum version 51',
      image: 'logo-chrome.svg',
      link: '/',
    },
    {
      id: 2,
      title: 'Add to Firefox',
      text: 'Minimum version 52',
      image: 'logo-firefox.svg',
      link: '/',
    },
    {
      id: 3,
      title: 'Add to Opera ',
      text: 'Minimum version 53',
      image: 'logo-opera.svg',
      link: '/',
    },
  ],
  Xd = { cards: Yd };
function Gd() {
  return (
    sc('.cards', 'show'),
    v.jsxs('section', {
      className: 'section',
      children: [
        v.jsx(Fo, {
          sectionTitle: 'Download the extension',
          description: `We’ve got more browsers in the pipeline. 
                      Please do let us know if you’ve got a
                      favorites you’d like us to prioritize.`,
        }),
        v.jsx('div', {
          className: 'container_cards flex',
          children: Xd.cards.map((e) =>
            v.jsx(
              Kd,
              { title: e.title, link: e.link, text: e.text, img: e.image },
              e.id
            )
          ),
        }),
      ],
    })
  );
}
function Zd({ id: e, title: n, description: t, image: r, ariaLabelBy: l }) {
  return v.jsxs('article', {
    className: 'tab flex',
    id: e,
    'aria-labelledby': l,
    children: [
      v.jsx('div', {
        className: 'tab__img',
        children: v.jsx('img', { src: r, alt: '' }),
      }),
      v.jsxs('div', {
        className: 'tab__text',
        children: [
          v.jsx('h3', { children: n }),
          v.jsx('p', { children: t }),
          v.jsx('a', {
            href: '/',
            className: 'btn primary',
            children: 'More info',
          }),
        ],
      }),
    ],
  });
}
const Jd = [
    {
      id: 'simple-bookmarking',
      title: 'Simple Bookmarking',
      text: 'Bookmark in one click Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
      img: './images/illustration-features-tab-1.svg',
      link: '/',
    },
    {
      id: 'speedy-searching',
      title: 'Speedy Searching',
      text: 'Intelligent search Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ',
      img: './images/illustration-features-tab-2.svg',
      link: '/',
    },
    {
      id: 'easy-sharing',
      title: 'Easy Sharing',
      text: 'Share your bookmarks Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. ',
      img: './images/illustration-features-tab-3.svg',
      link: '/',
    },
  ],
  qd = { info: Jd },
  bd = [
    { name: 'Simple Bookmarking', href: '#simple-bookmarking' },
    { name: 'Speedy Searching', href: '#speedy-searching' },
    { name: 'Easy Sharing', href: '#easy-sharing' },
  ];
function ep() {
  const [e, n] = it.useState(0),
    t = (r, l) => {
      r.preventDefault(), n(l);
      const i = l * 33.33 + '%';
      r.currentTarget.style.setProperty('--_left', i);
    };
  return v.jsxs('div', {
    className: 'slider flex flex-col',
    children: [
      v.jsx('ul', {
        className: 'slider__ul flex',
        'aria-labelledby': 'tabs-title',
        style: { '--_left': e * 33.33 + '%' },
        children: bd.map((r, l) =>
          v.jsx(
            'li',
            {
              className: 'slider__li',
              'aria-selected': e === l ? 'true' : 'false',
              children: v.jsx('a', {
                className: 'slider__a',
                onClick: (i) => t(i, l),
                href: r.href,
                children: r.name,
              }),
            },
            r.href
          )
        ),
      }),
      v.jsx('div', {
        className: 'slider__panels flex',
        children: qd.info.map((r, l) =>
          v.jsx(
            'div',
            {
              id: `tab-${l}`,
              className: `panel ${e === l ? 'active' : 'hidden'}`,
              'aria-hidden': e === l ? 'true' : 'false',
              children: v.jsx(Zd, {
                id: r.id,
                title: r.title,
                description: r.text,
                image: r.img,
                ariaLabelBy: `tab-${l}`,
              }),
            },
            r.id
          )
        ),
      }),
    ],
  });
}
function np() {
  return v.jsxs('section', {
    className: 'section',
    'aria-label': 'Features',
    children: [
      v.jsx(Fo, {
        sectionTitle: 'Features',
        description: `Our aim is to make it quick and easy for you 
          to access your favorites websites. Your bookmarks sync 
          between your devices so you can access them on the go`,
      }),
      v.jsx(ep, {}),
    ],
  });
}
function tp() {
  return v.jsx('section', {
    className: 'section',
    children: v.jsx(Fo, {
      sectionTitle: 'Frequently Asked Questions',
      description: `Here are some of our FAQs. If you have any other questions
                      you’d like answered please feel free to email us.`,
    }),
  });
}
function rp() {
  return v.jsxs('form', {
    children: [
      v.jsx('span', { children: '35.000+ already joined' }),
      v.jsx('h2', { children: 'Stay up-to-date with what we are doing' }),
      v.jsxs('div', {
        children: [
          v.jsx('input', {
            type: 'text',
            placeholder: 'Enter your email address',
          }),
          v.jsx('button', { type: 'submit', children: 'Contact us' }),
        ],
      }),
    ],
  });
}
function lp() {
  return v.jsxs('footer', {
    className: 'footer',
    children: [
      v.jsxs('div', {
        className: 'footer__top',
        children: [
          v.jsx('div', {
            className: 'header__logo',
            children: v.jsx('img', {
              src: Oo,
              alt: '',
              className: 'header__logo-img',
            }),
          }),
          v.jsx('nav', {
            className: 'footer__nav',
            children: v.jsx('ul', {
              className: 'footer__ul',
              children: Mo.links.map((e) =>
                v.jsx(Io, { name: e.name, href: e.href, worth: !0 }, e.name)
              ),
            }),
          }),
          v.jsxs('div', {
            className: 'footer__logos',
            children: [
              v.jsx('img', { src: oc, alt: 'Facebook logo icon' }),
              v.jsx('img', { src: uc, alt: 'Twitter Logo Icon' }),
            ],
          }),
        ],
      }),
      v.jsxs('p', {
        className: 'attribution',
        children: [
          'Challenge by',
          v.jsx('a', {
            href: 'https://www.frontendmentor.io?ref=challenge',
            target: '_blank',
            rel: 'noreferrer',
            children: 'Frontend Mentor',
          }),
          '. Coded by ',
          v.jsx('a', { href: '#', children: 'Your Name Here' }),
          '.',
        ],
      }),
    ],
  });
}
function ip() {
  return v.jsxs('div', {
    className: 'wrapper',
    'aria-expanded': 'false',
    children: [
      v.jsx(Hd, {}),
      v.jsx(Wd, {}),
      v.jsx(np, {}),
      v.jsx(Gd, {}),
      v.jsx(tp, {}),
      v.jsx(rp, {}),
      v.jsx(lp, {}),
    ],
  });
}
Wl.createRoot(document.getElementById('root')).render(
  v.jsx(Nc.StrictMode, { children: v.jsx(ip, {}) })
);
