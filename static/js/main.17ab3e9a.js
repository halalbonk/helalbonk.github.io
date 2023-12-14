/*! For license information please see main.17ab3e9a.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      463: (e, t, n) => {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var b = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            b[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            b[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              b[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            b[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              b[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            b[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            b[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            b[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            b[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = b.hasOwnProperty(t) ? b[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, v);
            b[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, v);
              b[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, v);
            b[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            b[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (b.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            b[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          T = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          N = Symbol.for("react.profiler"),
          A = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          C = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          B = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var P = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function Z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          I = Object.assign;
        function D(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var F = !1;
        function z(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case T:
              return "Fragment";
            case x:
              return "Portal";
            case N:
              return "Profiler";
            case S:
              return "StrictMode";
            case C:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case A:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case B:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function K(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function V(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Y(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function oe(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function be(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
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
        function ve(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Te = null,
          Se = null;
        function Ne(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof xe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ae(e) {
          Te ? (Se ? Se.push(e) : (Se = [e])) : (Te = e);
        }
        function Ee() {
          if (Te) {
            var e = Te,
              t = Se;
            if (((Se = Te = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Ce() {}
        var je = !1;
        function _e(e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (je = !1), (null !== Te || null !== Se) && (Ce(), Ee());
          }
        }
        function Be(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Pe = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Pe = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Pe = !1;
          }
        function Ze(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Le = !1,
          Ie = null,
          De = !1,
          Fe = null,
          ze = {
            onError: function (e) {
              (Le = !0), (Ie = e);
            },
          };
        function Me(e, t, n, r, a, o, i, l, s) {
          (Le = !1), (Ie = null), Ze.apply(ze, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (Ue(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return $e(a), e;
                    if (i === r) return $e(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? We(e)
            : null;
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = We(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ve = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Qe = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ye = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          Tt,
          St,
          Nt,
          At = !1,
          Et = [],
          Ot = null,
          Ct = null,
          jt = null,
          _t = new Map(),
          Bt = new Map(),
          Pt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Ct = null;
              break;
            case "mouseover":
            case "mouseout":
              jt = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Bt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function It(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
                  return (
                    (e.blockedOn = t),
                    void Nt(e.priority, function () {
                      Tt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function zt() {
          (At = !1),
            null !== Ot && Dt(Ot) && (Ot = null),
            null !== Ct && Dt(Ct) && (Ct = null),
            null !== jt && Dt(jt) && (jt = null),
            _t.forEach(Ft),
            Bt.forEach(Ft);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            At ||
              ((At = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Ut(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Et.length) {
            Mt(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Mt(Ot, e),
              null !== Ct && Mt(Ct, e),
              null !== jt && Mt(jt, e),
              _t.forEach(t),
              Bt.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            It(n), null === n.blockedOn && Pt.shift();
        }
        var Kt = w.ReactCurrentBatchConfig,
          $t = !0;
        function Ht(e, t, n, r) {
          var a = yt,
            o = Kt.transition;
          Kt.transition = null;
          try {
            (yt = 1), Vt(e, t, n, r);
          } finally {
            (yt = a), (Kt.transition = o);
          }
        }
        function Wt(e, t, n, r) {
          var a = yt,
            o = Kt.transition;
          Kt.transition = null;
          try {
            (yt = 4), Vt(e, t, n, r);
          } finally {
            (yt = a), (Kt.transition = o);
          }
        }
        function Vt(e, t, n, r) {
          if ($t) {
            var a = Gt(e, t, n, r);
            if (null === a) $r(e, t, r, qt, n), Zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = Lt(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ct = Lt(Ct, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (jt = Lt(jt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return _t.set(o, Lt(_t.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Bt.set(o, Lt(Bt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Zt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ya(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Gt(e, t, n, r)) && $r(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = va((e = ke(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ke(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Qt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ye:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Yt = null;
        function en() {
          if (Yt) return Yt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Yt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = I({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = I({}, dn, {
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
            getModifierState: Nn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(I({}, pn, { dataTransfer: 0 })),
          bn = an(I({}, dn, { relatedTarget: 0 })),
          gn = an(
            I({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = I({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(vn),
          wn = an(I({}, un, { data: 0 })),
          kn = {
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
          xn = {
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
          Tn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Tn[e]) && !!t[e];
        }
        function Nn() {
          return Sn;
        }
        var An = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
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
            getModifierState: Nn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = an(An),
          On = an(
            I({}, pn, {
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
            })
          ),
          Cn = an(
            I({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nn,
            })
          ),
          jn = an(
            I({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Bn = an(_n),
          Pn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Zn = null;
        c && "documentMode" in document && (Zn = document.documentMode);
        var Ln = c && "TextEvent" in window && !Zn,
          In = c && (!Rn || (Zn && 8 < Zn && 11 >= Zn)),
          Dn = String.fromCharCode(32),
          Fn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Pn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Kn = {
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
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Kn[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Ae(r),
            0 < (t = Wr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          Vn = null;
        function qn(e) {
          Dr(e, 0);
        }
        function Gn(e) {
          if (V(wa(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Yn = "oninput" in document;
            if (!Yn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Yn = "function" === typeof er.oninput);
            }
            Jn = Yn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Wn && (Wn.detachEvent("onpropertychange", nr), (Vn = Wn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Vn)) {
            var t = [];
            Hn(t, Vn, e, ke(e)), _e(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Vn = n), (Wn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Vn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          gr = null,
          vr = null,
          yr = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == br ||
            br !== q(r) ||
            ("selectionStart" in (r = br) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Wr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Tr = {},
          Sr = {};
        function Nr(e) {
          if (Tr[e]) return Tr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (Tr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Ar = Nr("animationend"),
          Er = Nr("animationiteration"),
          Or = Nr("animationstart"),
          Cr = Nr("transitionend"),
          jr = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Br(e, t) {
          jr.set(e, t), s(t, [e]);
        }
        for (var Pr = 0; Pr < _r.length; Pr++) {
          var Rr = _r[Pr];
          Br(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Br(Ar, "onAnimationEnd"),
          Br(Er, "onAnimationIteration"),
          Br(Or, "onAnimationStart"),
          Br("dblclick", "onDoubleClick"),
          Br("focusin", "onFocus"),
          Br("focusout", "onBlur"),
          Br(Cr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Zr)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((Me.apply(this, arguments), Le)) {
                if (!Le) throw Error(o(198));
                var c = Ie;
                (Le = !1), (Ie = null), De || ((De = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Ir(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, l, u), (o = s);
                }
            }
          }
          if (De) throw ((e = Fe), (De = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Kr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Kr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), zr("selectionchange", !1, t));
          }
        }
        function Kr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = Wt;
              break;
            default:
              a = Vt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Pe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function $r(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = va(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = o,
              a = ke(n),
              i = [];
            e: {
              var l = jr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = En;
                    break;
                  case "focusin":
                    (u = "focus"), (s = bn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Cn;
                    break;
                  case Ar:
                  case Er:
                  case Or:
                    s = gn;
                    break;
                  case Cr:
                    s = jn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Bn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = On;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Be(h, f)) &&
                        c.push(Hr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : wa(s)),
                  (p = null == u ? l : wa(u)),
                  ((l = new c(m, h + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Vr(p)) h++;
                    for (p = 0, m = f; m; m = Vr(m)) p++;
                    for (; 0 < h - p; ) (c = Vr(c)), h--;
                    for (; 0 < p - h; ) (f = Vr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Vr(c)), (f = Vr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, l, s, c, !1),
                  null !== u && null !== d && qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var b = Qn;
              else if ($n(l))
                if (Xn) b = ir;
                else {
                  b = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (b = or);
              switch (
                (b && (b = b(e, r))
                  ? Hn(i, b, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(g) || "true" === g.contentEditable) &&
                    ((br = g), (gr = r), (vr = null));
                  break;
                case "focusout":
                  vr = gr = br = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var v;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Un
                  ? zn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (In &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Un && (v = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (g = Wr(r, y)).length &&
                  ((y = new wn(y, e, null, n, a)),
                  i.push({ event: y, listeners: g }),
                  v ? (y.data = v) : null !== (v = Mn(n)) && (y.data = v))),
                (v = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Rn && zn(e, t))
                          ? ((e = en()), (Yt = Jt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Dr(i, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Wr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Be(e, n)) && r.unshift(Hr(e, o, a)),
              null != (o = Be(e, t)) && r.push(Hr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Vr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Be(n, o)) && i.unshift(Hr(n, s, l))
                : a || (null != (s = Be(n, o)) && i.push(Hr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Qr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Yr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ba = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Ta = -1;
        function Sa(e) {
          return { current: e };
        }
        function Na(e) {
          0 > Ta || ((e.current = xa[Ta]), (xa[Ta] = null), Ta--);
        }
        function Aa(e, t) {
          Ta++, (xa[Ta] = e.current), (e.current = t);
        }
        var Ea = {},
          Oa = Sa(Ea),
          Ca = Sa(!1),
          ja = Ea;
        function _a(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ea;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ba(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Pa() {
          Na(Ca), Na(Oa);
        }
        function Ra(e, t, n) {
          if (Oa.current !== Ea) throw Error(o(168));
          Aa(Oa, t), Aa(Ca, n);
        }
        function Za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, K(e) || "Unknown", a));
          return I({}, n, r);
        }
        function La(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ea),
            (ja = Oa.current),
            Aa(Oa, e),
            Aa(Ca, Ca.current),
            !0
          );
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Za(e, t, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Na(Ca),
              Na(Oa),
              Aa(Oa, e))
            : Na(Ca),
            Aa(Ca, n);
        }
        var Da = null,
          Fa = !1,
          za = !1;
        function Ma(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ua() {
          if (!za && null !== Da) {
            za = !0;
            var e = 0,
              t = yt;
            try {
              var n = Da;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Fa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Ve(Ye, Ua), a);
            } finally {
              (yt = t), (za = !1);
            }
          }
          return null;
        }
        var Ka = [],
          $a = 0,
          Ha = null,
          Wa = 0,
          Va = [],
          qa = 0,
          Ga = null,
          Qa = 1,
          Xa = "";
        function Ja(e, t) {
          (Ka[$a++] = Wa), (Ka[$a++] = Ha), (Ha = e), (Wa = t);
        }
        function Ya(e, t, n) {
          (Va[qa++] = Qa), (Va[qa++] = Xa), (Va[qa++] = Ga), (Ga = e);
          var r = Qa;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Qa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Qa = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Ya(e, 1, 0));
        }
        function to(e) {
          for (; e === Ha; )
            (Ha = Ka[--$a]), (Ka[$a] = null), (Wa = Ka[--$a]), (Ka[$a] = null);
          for (; e === Ga; )
            (Ga = Va[--qa]),
              (Va[qa] = null),
              (Xa = Va[--qa]),
              (Va[qa] = null),
              (Qa = Va[--qa]),
              (Va[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Bu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Qa, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Bu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var bo = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vo = Sa(null),
          yo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = yo = null;
        }
        function To(e) {
          var t = vo.current;
          Na(vo), (e._currentValue = t);
        }
        function So(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function No(e, t) {
          (yo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Ao(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === yo) throw Error(o(308));
              (wo = e), (yo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Eo = null;
        function Oo(e) {
          null === Eo ? (Eo = [e]) : Eo.push(e);
        }
        function Co(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Oo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            jo(e, r)
          );
        }
        function jo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var _o = !1;
        function Bo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Po(e, t) {
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
        function Ro(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cs))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              jo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Oo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            jo(e, n)
          );
        }
        function Lo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Do(e, t, n, r) {
          var a = e.updateQueue;
          _o = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = I({}, d, f);
                      break e;
                    case 2:
                      _o = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Is |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var zo = new r.Component().refs;
        function Mo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Uo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Ro(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Zo(e, o, a)) && (ru(t, e, a, r), Lo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Ro(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Zo(e, o, a)) && (ru(t, e, a, r), Lo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Ro(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Zo(e, a, r)) && (ru(t, e, r, n), Lo(t, e, r));
          },
        };
        function Ko(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function $o(e, t, n) {
          var r = !1,
            a = Ea,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ao(o))
              : ((a = Ba(t) ? ja : Oa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? _a(e, a)
                  : Ea)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Uo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Ho(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
        }
        function Wo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = zo), Bo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ao(o))
            : ((o = Ba(t) ? ja : Oa.current), (a.context = _a(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Mo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Uo.enqueueReplaceState(a, a.state, null),
              Do(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === zo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Qo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === T
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === B &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
              : (((r = Zu(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Du("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Zu(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case B:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || Z(t))
                return ((t = Lu(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case B:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || Z(n)) return null !== a ? null : d(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case B:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || Z(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function m(a, o, l, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), b = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((b = d), (d = null)) : (b = d.sibling);
              var g = p(a, d, l[m], s);
              if (null === g) {
                null === d && (d = b);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = b);
            }
            if (m === l.length) return n(a, d), ao && Ja(a, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(a, l[m], s)) &&
                  ((o = i(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ao && Ja(a, m), u;
            }
            for (d = r(a, d); m < l.length; m++)
              null !== (b = h(d, a, m, l[m], s)) &&
                (e &&
                  null !== b.alternate &&
                  d.delete(null === b.key ? m : b.key),
                (o = i(b, o, m)),
                null === c ? (u = b) : (c.sibling = b),
                (c = b));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              u
            );
          }
          function b(a, l, s, u) {
            var c = Z(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = l, b = (l = 0), g = null, v = s.next();
              null !== m && !v.done;
              b++, v = s.next()
            ) {
              m.index > b ? ((g = m), (m = null)) : (g = m.sibling);
              var y = p(a, m, v.value, u);
              if (null === y) {
                null === m && (m = g);
                break;
              }
              e && m && null === y.alternate && t(a, m),
                (l = i(y, l, b)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (m = g);
            }
            if (v.done) return n(a, m), ao && Ja(a, b), c;
            if (null === m) {
              for (; !v.done; b++, v = s.next())
                null !== (v = f(a, v.value, u)) &&
                  ((l = i(v, l, b)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ao && Ja(a, b), c;
            }
            for (m = r(a, m); !v.done; b++, v = s.next())
              null !== (v = h(m, a, b, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? b : v.key),
                (l = i(v, l, b)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, b),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === T &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === T) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === B &&
                            Go(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Vo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === T
                      ? (((o = Lu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Zu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Vo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fu(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case B:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, o, i, s);
              if (Z(i)) return b(r, o, i, s);
              qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Du(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Xo = Qo(!0),
          Jo = Qo(!1),
          Yo = {},
          ei = Sa(Yo),
          ti = Sa(Yo),
          ni = Sa(Yo);
        function ri(e) {
          if (e === Yo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Aa(ni, t), Aa(ti, e), Aa(ei, Yo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Na(ei), Aa(ei, t);
        }
        function oi() {
          Na(ei), Na(ti), Na(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Aa(ti, e), Aa(ei, n));
        }
        function li(e) {
          ti.current === e && (Na(ei), Na(ti));
        }
        var si = Sa(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          bi = null,
          gi = null,
          vi = !1,
          yi = !1,
          wi = 0,
          ki = 0;
        function xi() {
          throw Error(o(321));
        }
        function Ti(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Si(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (gi = bi = null),
                (t.updateQueue = null),
                (fi.current = ul),
                (e = n(r, a));
            } while (yi);
          }
          if (
            ((fi.current = il),
            (t = null !== bi && null !== bi.next),
            (hi = 0),
            (gi = bi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ni() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ai() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ei() {
          if (null === bi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = bi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (bi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (bi = e).memoizedState,
              baseState: bi.baseState,
              baseQueue: bi.baseQueue,
              queue: bi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Oi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ci(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = bi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (mi.lanes |= d),
                  (Is |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Is |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ji(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function _i() {}
        function Bi(e, t) {
          var n = mi,
            r = Ei(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            $i(Zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, Ri.bind(null, n, r, a, t), void 0, null),
              null === js)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Pi(n, t, a);
          }
          return a;
        }
        function Pi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ri(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Li(t) && Ii(e);
        }
        function Zi(e, t, n) {
          return n(function () {
            Li(t) && Ii(e);
          });
        }
        function Li(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ii(e) {
          var t = jo(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Di(e) {
          var t = Ai();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Oi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zi() {
          return Ei().memoizedState;
        }
        function Mi(e, t, n, r) {
          var a = Ai();
          (mi.flags |= e),
            (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ui(e, t, n, r) {
          var a = Ei();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== bi) {
            var i = bi.memoizedState;
            if (((o = i.destroy), null !== r && Ti(r, i.deps)))
              return void (a.memoizedState = Fi(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Fi(1 | t, n, o, r));
        }
        function Ki(e, t) {
          return Mi(8390656, 8, e, t);
        }
        function $i(e, t) {
          return Ui(2048, 8, e, t);
        }
        function Hi(e, t) {
          return Ui(4, 2, e, t);
        }
        function Wi(e, t) {
          return Ui(4, 4, e, t);
        }
        function Vi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ui(4, 4, Vi.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Qi(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ti(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ti(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Is |= n), (e.baseState = !0)),
              t);
        }
        function Yi(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ei().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Co(e, t, n, r))) {
            ru(n, e, r, tu()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Oo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Co(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function al(e, t) {
          yi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var il = {
            readContext: Ao,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ao,
            useCallback: function (e, t) {
              return (Ai().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ao,
            useEffect: Ki,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mi(4194308, 4, Vi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ai();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ai();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ai().memoizedState = e);
            },
            useState: Di,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (Ai().memoizedState = e);
            },
            useTransition: function () {
              var e = Di(!1),
                t = e[0];
              return (
                (e = Yi.bind(null, e[1])), (Ai().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ai();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === js)) throw Error(o(349));
                0 !== (30 & hi) || Pi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ki(Zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ai(),
                t = js.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Qa & ~(1 << (32 - it(Qa) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ao,
            useCallback: Qi,
            useContext: Ao,
            useEffect: $i,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Ci,
            useRef: zi,
            useState: function () {
              return Ci(Oi);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Ji(Ei(), bi.memoizedState, e);
            },
            useTransition: function () {
              return [Ci(Oi)[0], Ei().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Bi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ao,
            useCallback: Qi,
            useContext: Ao,
            useEffect: $i,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: ji,
            useRef: zi,
            useState: function () {
              return ji(Oi);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Ei();
              return null === bi
                ? (t.memoizedState = e)
                : Ji(t, bi.memoizedState, e);
            },
            useTransition: function () {
              return [ji(Oi)[0], Ei().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Bi,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ro(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Ws = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Ro(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Vs ? (Vs = new Set([this])) : Vs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function bl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Au.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ro(-1, 1)).tag = 2), Zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yl = w.ReactCurrentOwner,
          wl = !1;
        function kl(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            No(t, a),
            (r = Si(e, t, n, r, o, a)),
            (n = Ni()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), kl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Pu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Zu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Sl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Hl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ru(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Sl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hl(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return El(e, t, n, r, a);
        }
        function Nl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Aa(Rs, Ps),
                (Ps |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Aa(Rs, Ps),
                  (Ps |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Aa(Rs, Ps),
                (Ps |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Aa(Rs, Ps),
              (Ps |= r);
          return kl(e, t, a, n), t.child;
        }
        function Al(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function El(e, t, n, r, a) {
          var o = Ba(n) ? ja : Oa.current;
          return (
            (o = _a(t, o)),
            No(t, a),
            (n = Si(e, t, n, r, o, a)),
            (r = Ni()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), kl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (Ba(n)) {
            var o = !0;
            La(t);
          } else o = !1;
          if ((No(t, a), null === t.stateNode))
            $l(e, t), $o(t, n, r), Wo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ao(u))
              : (u = _a(t, (u = Ba(n) ? ja : Oa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Ho(t, i, r, u)),
              (_o = !1);
            var f = t.memoizedState;
            (i.state = f),
              Do(t, r, i, a),
              (s = t.memoizedState),
              l !== r || f !== s || Ca.current || _o
                ? ("function" === typeof c &&
                    (Mo(t, n, c, r), (s = t.memoizedState)),
                  (l = _o || Ko(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Po(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : go(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ao(s))
                : (s = _a(t, (s = Ba(n) ? ja : Oa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Ho(t, i, r, s)),
              (_o = !1),
              (f = t.memoizedState),
              (i.state = f),
              Do(t, r, i, a);
            var h = t.memoizedState;
            l !== d || f !== h || Ca.current || _o
              ? ("function" === typeof p &&
                  (Mo(t, n, p, r), (h = t.memoizedState)),
                (u = _o || Ko(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Cl(e, t, n, r, o, a);
        }
        function Cl(e, t, n, r, a, o) {
          Al(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ia(t, n, !1), Hl(e, t, o);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, l, o)))
              : kl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          );
        }
        function jl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function _l(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Bl,
          Pl,
          Rl,
          Zl,
          Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Dl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Aa(si, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Iu(s, a, 0, null)),
                      (e = Lu(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Ll),
                      e)
                    : Fl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zl(e, t, l, (r = dl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Iu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Lu(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, l),
                    (t.child.memoizedState = Il(l)),
                    (t.memoizedState = Ll),
                    i);
              if (0 === (1 & t.mode)) return zl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), zl(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = js)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), jo(e, a), ru(r, e, a, -1));
                }
                return bu(), zl(e, t, l, (r = dl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ou.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Va[qa++] = Qa),
                    (Va[qa++] = Xa),
                    (Va[qa++] = Ga),
                    (Qa = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ru(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ru(r, l))
                : ((l = Lu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ll),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ru(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function zl(e, t, n, r) {
          return (
            null !== r && mo(r),
            Xo(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ml(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), So(e.return, t, n);
        }
        function Ul(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Kl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ml(e, n, t);
                else if (19 === e.tag) Ml(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Aa(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ul(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ul(t, !0, n, null, o);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ru(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return Vl(t), null;
            case 1:
            case 17:
              return Ba(t.type) && Pa(), Vl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Na(Ca),
                Na(Oa),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                Pl(e, t),
                Vl(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Vl(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Zr.length; a++) Fr(Zr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Q(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var s in (ve(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      W(r), Y(r, i, !0);
                      break;
                    case "textarea":
                      W(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Yr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Bl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Zr.length; a++) Fr(Zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Q(e, r), (a = G(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? be(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && y(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        W(e), Y(e, r, !1);
                        break;
                      case "textarea":
                        W(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Yr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Vl(t), null;
            case 6:
              if (e && null != t.stateNode) Zl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Vl(t), null;
            case 13:
              if (
                (Na(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[fa] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Vl(t), (i = !1);
                } else null !== oo && (lu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Zs && (Zs = 3)
                        : bu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vl(t),
                  null);
            case 4:
              return (
                oi(),
                Pl(e, t),
                null === e && Ur(t.stateNode.containerInfo),
                Vl(t),
                null
              );
            case 10:
              return To(t.type._context), Vl(t), null;
            case 19:
              if ((Na(si), null === (i = t.memoizedState))) return Vl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Wl(i, !1);
                else {
                  if (0 !== Zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Wl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Aa(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ks &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Vl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ks &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = si.current),
                  Aa(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ps) &&
                    (Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ba(t.type) && Pa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Na(Ca),
                Na(Oa),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Na(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Na(si), null;
            case 4:
              return oi(), null;
            case 10:
              return To(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Bl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Pl = function () {}),
          (Rl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Yr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Yl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Nu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Nu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ba],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Yr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Nu(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Xl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Cu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function bs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                hs(i, l, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Nu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((bs(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (b) {
                  Nu(e, e.return, b);
                }
                try {
                  rs(5, e, e.return);
                } catch (b) {
                  Nu(e, e.return, b);
                }
              }
              break;
            case 1:
              bs(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (bs(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (b) {
                  Nu(e, e.return, b);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      ye(s, l);
                    var c = ye(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? be(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : y(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (b) {
                    Nu(e, e.return, b);
                  }
              }
              break;
            case 6:
              if ((bs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (b) {
                  Nu(e, e.return, b);
                }
              }
              break;
            case 3:
              if (
                (bs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (b) {
                  Nu(e, e.return, b);
                }
              break;
            case 4:
            default:
              bs(t, e), vs(e);
              break;
            case 13:
              bs(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || d), bs(t, e), (Xl = c))
                  : bs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Yl = e, d = e.child; null !== d; ) {
                    for (f = Yl = d; null !== Yl; ) {
                      switch (((h = (p = Yl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (b) {
                              Nu(r, n, b);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Yl = h)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (b) {
                        Nu(e, e.return, b);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (b) {
                        Nu(e, e.return, b);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              bs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Nu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Yl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Yl; ) {
            var a = Yl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Ql;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Ql;
                var u = Xl;
                if (((Ql = i), (Xl = s) && !u))
                  for (Yl = a; null !== Yl; )
                    (s = (i = Yl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ts(a)
                        : null !== s
                        ? ((s.return = i), (Yl = s))
                        : Ts(a);
                for (; null !== o; ) (Yl = o), ws(o, t, n), (o = o.sibling);
                (Yl = a), (Ql = l), (Xl = u);
              }
              ks(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Yl = o))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== Yl; ) {
            var t = Yl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xl || (512 & t.flags && os(t));
              } catch (p) {
                Nu(t, t.return, p);
              }
            }
            if (t === e) {
              Yl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Yl = n);
              break;
            }
            Yl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Yl; ) {
            var t = Yl;
            if (t === e) {
              Yl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Yl = n);
              break;
            }
            Yl = t.return;
          }
        }
        function Ts(e) {
          for (; null !== Yl; ) {
            var t = Yl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Nu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Nu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Nu(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Nu(t, i, s);
                  }
              }
            } catch (s) {
              Nu(t, t.return, s);
            }
            if (t === e) {
              Yl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Yl = l);
              break;
            }
            Yl = t.return;
          }
        }
        var Ss,
          Ns = Math.ceil,
          As = w.ReactCurrentDispatcher,
          Es = w.ReactCurrentOwner,
          Os = w.ReactCurrentBatchConfig,
          Cs = 0,
          js = null,
          _s = null,
          Bs = 0,
          Ps = 0,
          Rs = Sa(0),
          Zs = 0,
          Ls = null,
          Is = 0,
          Ds = 0,
          Fs = 0,
          zs = null,
          Ms = null,
          Us = 0,
          Ks = 1 / 0,
          $s = null,
          Hs = !1,
          Ws = null,
          Vs = null,
          qs = !1,
          Gs = null,
          Qs = 0,
          Xs = 0,
          Js = null,
          Ys = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Cs) ? Xe() : -1 !== Ys ? Ys : (Ys = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cs) && 0 !== Bs
            ? Bs & -Bs
            : null !== bo.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & Cs) && e === js) ||
              (e === js && (0 === (2 & Cs) && (Ds |= n), 4 === Zs && su(e, Bs)),
              au(e, r),
              1 === n &&
                0 === Cs &&
                0 === (1 & t.mode) &&
                ((Ks = Xe() + 500), Fa && Ua()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ft(e, e === js ? Bs : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ma(e);
                  })(uu.bind(null, e))
                : Ma(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & Cs) && Ua();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ye;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = ju(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Ys = -1), (eu = 0), 0 !== (6 & Cs))) throw Error(o(327));
          var n = e.callbackNode;
          if (Tu() && e.callbackNode !== n) return null;
          var r = ft(e, e === js ? Bs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Cs;
            Cs |= 2;
            var i = mu();
            for (
              (js === e && Bs === t) ||
              (($s = null), (Ks = Xe() + 500), pu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                hu(e, s);
              }
            xo(),
              (As.current = i),
              (Cs = a),
              null !== _s ? (t = 0) : ((js = null), (Bs = 0), (t = Zs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Ls), pu(e, 0), su(e, r), au(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Ls), pu(e, 0), su(e, r), au(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xu(e, Ms, $s);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, Ms, $s), t);
                    break;
                  }
                  xu(e, Ms, $s);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
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
                          : 1960 * Ns(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, Ms, $s), r);
                    break;
                  }
                  xu(e, Ms, $s);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return au(e, Xe()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = zs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Ms), (Ms = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Ms ? (Ms = e) : Ms.push.apply(Ms, e);
        }
        function su(e, t) {
          for (
            t &= ~Fs,
              t &= ~Ds,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Cs)) throw Error(o(327));
          Tu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ls), pu(e, 0), su(e, t), au(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Ms, $s),
            au(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = Cs;
          Cs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cs = n) && ((Ks = Xe() + 500), Fa && Ua());
          }
        }
        function du(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Cs) && Tu();
          var t = Cs;
          Cs |= 1;
          var n = Os.transition,
            r = yt;
          try {
            if (((Os.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Os.transition = n), 0 === (6 & (Cs = t)) && Ua();
          }
        }
        function fu() {
          (Ps = Rs.current), Na(Rs);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== _s))
            for (n = _s.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Pa();
                  break;
                case 3:
                  oi(), Na(Ca), Na(Oa), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Na(si);
                  break;
                case 10:
                  To(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((js = e),
            (_s = e = Ru(e.current, null)),
            (Bs = Ps = t),
            (Zs = 0),
            (Ls = null),
            (Fs = Ds = Is = 0),
            (Ms = zs = null),
            null !== Eo)
          ) {
            for (t = 0; t < Eo.length; t++)
              if (null !== (r = (n = Eo[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Eo = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = _s;
            try {
              if ((xo(), (fi.current = il), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((hi = 0),
                (gi = bi = mi = null),
                (yi = !1),
                (wi = 0),
                (Es.current = null),
                null === n || null === n.return)
              ) {
                (Zs = 1), (Ls = t), (_s = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Bs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && bl(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var b = new Set();
                      b.add(u), (t.updateQueue = b);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    bl(i, c, t), bu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      vl(g, l, s, 0, t),
                      mo(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Zs && (Zs = 2),
                  null === zs ? (zs = [i]) : zs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Io(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Vs || !Vs.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Io(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ku(n);
            } catch (w) {
              (t = w), _s === n && null !== n && (_s = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = As.current;
          return (As.current = il), null === e ? il : e;
        }
        function bu() {
          (0 !== Zs && 3 !== Zs && 2 !== Zs) || (Zs = 4),
            null === js ||
              (0 === (268435455 & Is) && 0 === (268435455 & Ds)) ||
              su(js, Bs);
        }
        function gu(e, t) {
          var n = Cs;
          Cs |= 2;
          var r = mu();
          for ((js === e && Bs === t) || (($s = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((xo(), (Cs = n), (As.current = r), null !== _s))
            throw Error(o(261));
          return (js = null), (Bs = 0), Zs;
        }
        function vu() {
          for (; null !== _s; ) wu(_s);
        }
        function yu() {
          for (; null !== _s && !Ge(); ) wu(_s);
        }
        function wu(e) {
          var t = Ss(e.alternate, e, Ps);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (_s = t),
            (Es.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Ps))) return void (_s = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (_s = n);
              if (null === e) return (Zs = 6), void (_s = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (_s = t);
            _s = t = e;
          } while (null !== t);
          0 === Zs && (Zs = 5);
        }
        function xu(e, t, n) {
          var r = yt,
            a = Os.transition;
          try {
            (Os.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Tu();
                } while (null !== Gs);
                if (0 !== (6 & Cs)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
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
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === js && ((_s = js = null), (Bs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    ju(tt, function () {
                      return Tu(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Os.transition), (Os.transition = null);
                  var l = yt;
                  yt = 1;
                  var s = Cs;
                  (Cs |= 4),
                    (Es.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === i && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Yl = t;
                        null !== Yl;

                      )
                        if (
                          ((e = (t = Yl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Yl = e);
                        else
                          for (; null !== Yl; ) {
                            t = Yl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var b = m.memoizedProps,
                                        g = m.memoizedState,
                                        v = t.stateNode,
                                        y = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? b
                                            : go(t.type, b),
                                          g
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Nu(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Yl = e);
                              break;
                            }
                            Yl = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Qe(),
                    (Cs = s),
                    (yt = l),
                    (Os.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Gs = e), (Qs = a)),
                  (i = e.pendingLanes),
                  0 === i && (Vs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && Tu(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Os.transition = a), (yt = r);
          }
          return null;
        }
        function Tu() {
          if (null !== Gs) {
            var e = wt(Qs),
              t = Os.transition,
              n = yt;
            try {
              if (((Os.transition = null), (yt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Qs = 0), 0 !== (6 & Cs)))
                  throw Error(o(331));
                var a = Cs;
                for (Cs |= 4, Yl = e.current; null !== Yl; ) {
                  var i = Yl,
                    l = i.child;
                  if (0 !== (16 & Yl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Yl = c; null !== Yl; ) {
                          var d = Yl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Yl = f);
                          else
                            for (; null !== Yl; ) {
                              var p = (d = Yl).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Yl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Yl = p);
                                break;
                              }
                              Yl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var b = m.child;
                        if (null !== b) {
                          m.child = null;
                          do {
                            var g = b.sibling;
                            (b.sibling = null), (b = g);
                          } while (null !== b);
                        }
                      }
                      Yl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Yl = l);
                  else
                    e: for (; null !== Yl; ) {
                      if (0 !== (2048 & (i = Yl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Yl = v);
                        break e;
                      }
                      Yl = i.return;
                    }
                }
                var y = e.current;
                for (Yl = y; null !== Yl; ) {
                  var w = (l = Yl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Yl = w);
                  else
                    e: for (l = y; null !== Yl; ) {
                      if (0 !== (2048 & (s = Yl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (x) {
                          Nu(s, s.return, x);
                        }
                      if (s === l) {
                        Yl = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Yl = k);
                        break e;
                      }
                      Yl = s.return;
                    }
                }
                if (
                  ((Cs = a),
                  Ua(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Os.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Zo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), au(e, t));
        }
        function Nu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vs || !Vs.has(r)))
                ) {
                  (t = Zo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Au(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            js === e &&
              (Bs & n) === n &&
              (4 === Zs ||
              (3 === Zs && (130023424 & Bs) === Bs && 500 > Xe() - Us)
                ? pu(e, 0)
                : (Fs |= n)),
            au(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = jo(e, t)) && (gt(e, t, n), au(e, n));
        }
        function Ou(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Cu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function ju(e, t) {
          return Ve(e, t);
        }
        function _u(e, t, n, r) {
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
        function Bu(e, t, n, r) {
          return new _u(e, t, n, r);
        }
        function Pu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Bu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Zu(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Pu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case T:
                return Lu(n.children, a, i, t);
              case S:
                (l = 8), (a |= 8);
                break;
              case N:
                return (
                  ((e = Bu(12, n, t, 2 | a)).elementType = N), (e.lanes = i), e
                );
              case C:
                return (
                  ((e = Bu(13, n, t, a)).elementType = C), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Bu(19, n, t, a)).elementType = j), (e.lanes = i), e
                );
              case P:
                return Iu(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case A:
                      l = 10;
                      break e;
                    case E:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case _:
                      l = 14;
                      break e;
                    case B:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Bu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Lu(e, t, n, r) {
          return ((e = Bu(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = Bu(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = Bu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Bu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function zu(e, t, n, r, a) {
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
            (this.eventTimes = bt(0)),
            (this.expirationTimes = bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = bt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Mu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new zu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Bu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Bo(o),
            e
          );
        }
        function Uu(e) {
          if (!e) return Ea;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ba(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ba(n)) return Za(e, n, t);
          }
          return t;
        }
        function Ku(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Mu(n, r, !0, e, 0, o, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((o = Ro((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            au(e, r),
            e
          );
        }
        function $u(e, t, n, r) {
          var a = t.current,
            o = tu(),
            i = nu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ro(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Zo(a, t, i)) && (ru(e, a, i, o), Lo(e, a, i)),
            i
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Vu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ca.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        jl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ba(t.type) && La(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Aa(vo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Aa(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Dl(e, t, n)
                            : (Aa(si, 1 & si.current),
                              null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        Aa(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Kl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Aa(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Nl(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Ya(t, Wa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var a = _a(t, Oa.current);
              No(t, n), (a = Si(null, t, r, e, a, n));
              var i = Ni();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ba(r) ? ((i = !0), La(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Bo(t),
                    (a.updater = Uo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wo(t, r, e, n),
                    (t = Cl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    kl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = El(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Tl(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                El(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((jl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Po(e, t),
                  Do(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = _l(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = _l(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  kl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Al(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Dl(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Aa(vo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Ca.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ro(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              So(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          So(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                kl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                No(t, n),
                (r = r((a = Ao(a)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                Tl(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return Sl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                $l(e, t),
                (t.tag = 1),
                Ba(r) ? ((e = !0), La(t)) : (e = !1),
                No(t, n),
                $o(t, r, a),
                Wo(t, r, a, n),
                Cl(null, t, r, !0, e, n)
              );
            case 19:
              return Kl(e, t, n);
            case 22:
              return Nl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Yu() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Hu(i);
                l.call(e);
              };
            }
            $u(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hu(i);
                    o.call(e);
                  };
                }
                var i = Ku(t, r, e, 0, null, !1, 0, "", Yu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Hu(s);
                  l.call(e);
                };
              }
              var s = Mu(e, 0, !1, null, 0, !1, 0, "", Yu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  $u(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(i);
        }
        (Qu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            $u(e, t, null, null);
          }),
          (Qu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  $u(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Pt.length && 0 !== t && t < Pt[n].priority;
                n++
              );
              Pt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    au(t, Xe()),
                    0 === (6 & Cs) && ((Ks = Xe() + 500), Ua()));
                }
                break;
              case 13:
                du(function () {
                  var t = jo(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Vu(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = jo(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Vu(e, 134217728);
            }
          }),
          (Tt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = jo(e, t);
              if (null !== n) ru(n, e, t, tu());
              Vu(e, t);
            }
          }),
          (St = function () {
            return yt;
          }),
          (Nt = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      V(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = cu),
          (Ce = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ya, wa, ka, Ae, Ee, cu],
          },
          nc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Mu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ku(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: (e, t, n) => {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      567: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              a =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              o = e || "";
            t &&
              (o = e
                .toString()
                .trim()
                .replace(
                  /[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,
                  function (e, t, r) {
                    return t > 0 &&
                      t + e.length !== r.length &&
                      e.search(n) > -1 &&
                      ":" !== r.charAt(t - 2) &&
                      ("-" !== r.charAt(t + e.length) ||
                        "-" === r.charAt(t - 1)) &&
                      r.charAt(t - 1).search(/[^\s-]/) < 0
                      ? e.toLowerCase()
                      : e.substr(1).search(/[A-Z]|\../) > -1
                      ? e
                      : e.charAt(0).toUpperCase() + e.substr(1);
                  }
                ));
            a &&
              (o = (function (e) {
                if (
                  (function (e) {
                    return "string" === typeof e && -1 !== e.indexOf("@");
                  })(e)
                )
                  return (
                    console.warn(
                      "This arg looks like an email address, redacting."
                    ),
                    r
                  );
                return e;
              })(o));
            return o;
          });
        var n =
          /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
        var r = "REDACTED (Potential Email Address)";
      },
      848: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.GA4 = void 0);
        var r = s(n(666)),
          a = s(n(567)),
          o = [
            "eventCategory",
            "eventAction",
            "eventLabel",
            "eventValue",
            "hitType",
          ],
          i = ["title", "location"],
          l = ["page", "hitType"];
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]));
          }
          return a;
        }
        function c(e) {
          return (
            (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            c(e)
          );
        }
        function d(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return b(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            m(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function f(e, t) {
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
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  v(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function h(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  l = [],
                  s = !0,
                  u = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (c) {
                  (u = !0), (a = c);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw a;
                  }
                }
                return l;
              }
            })(e, t) ||
            m(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(e, t) {
          if (e) {
            if ("string" === typeof e) return b(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? b(e, t)
                : void 0
            );
          }
        }
        function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function g(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, y(r.key), r);
          }
        }
        function v(e, t, n) {
          return (
            (t = y(t)) in e
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
        function y(e) {
          var t = (function (e, t) {
            if ("object" !== c(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== c(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === c(t) ? t : String(t);
        }
        var w = (function () {
          function e() {
            var t = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              v(this, "reset", function () {
                (t.isInitialized = !1),
                  (t._testMode = !1),
                  t._currentMeasurementId,
                  (t._hasLoadedGA = !1),
                  (t._isQueuing = !1),
                  (t._queueGtag = []);
              }),
              v(this, "_gtag", function () {
                for (
                  var e = arguments.length, n = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                t._testMode || t._isQueuing
                  ? t._queueGtag.push(n)
                  : r.default.apply(void 0, n);
              }),
              v(this, "_loadGA", function (e, n) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "https://www.googletagmanager.com/gtag/js";
                if (
                  "undefined" !== typeof window &&
                  "undefined" !== typeof document &&
                  !t._hasLoadedGA
                ) {
                  var a = document.createElement("script");
                  (a.async = !0),
                    (a.src = "".concat(r, "?id=").concat(e)),
                    n && a.setAttribute("nonce", n),
                    document.body.appendChild(a),
                    (window.dataLayer = window.dataLayer || []),
                    (window.gtag = function () {
                      window.dataLayer.push(arguments);
                    }),
                    (t._hasLoadedGA = !0);
                }
              }),
              v(this, "_toGtagOptions", function (e) {
                if (e) {
                  var t = {
                    cookieUpdate: "cookie_update",
                    cookieExpires: "cookie_expires",
                    cookieDomain: "cookie_domain",
                    cookieFlags: "cookie_flags",
                    userId: "user_id",
                    clientId: "client_id",
                    anonymizeIp: "anonymize_ip",
                    contentGroup1: "content_group1",
                    contentGroup2: "content_group2",
                    contentGroup3: "content_group3",
                    contentGroup4: "content_group4",
                    contentGroup5: "content_group5",
                    allowAdFeatures: "allow_google_signals",
                    allowAdPersonalizationSignals:
                      "allow_ad_personalization_signals",
                    nonInteraction: "non_interaction",
                    page: "page_path",
                    hitCallback: "event_callback",
                  };
                  return Object.entries(e).reduce(function (e, n) {
                    var r = h(n, 2),
                      a = r[0],
                      o = r[1];
                    return t[a] ? (e[t[a]] = o) : (e[a] = o), e;
                  }, {});
                }
              }),
              v(this, "initialize", function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (!e) throw new Error("Require GA_MEASUREMENT_ID");
                var r = "string" === typeof e ? [{ trackingId: e }] : e;
                t._currentMeasurementId = r[0].trackingId;
                var a = n.gaOptions,
                  o = n.gtagOptions,
                  i = n.nonce,
                  l = n.testMode,
                  s = void 0 !== l && l,
                  u = n.gtagUrl;
                if (
                  ((t._testMode = s),
                  s || t._loadGA(t._currentMeasurementId, i, u),
                  t.isInitialized ||
                    (t._gtag("js", new Date()),
                    r.forEach(function (e) {
                      var n = p(
                        p(p({}, t._toGtagOptions(p(p({}, a), e.gaOptions))), o),
                        e.gtagOptions
                      );
                      Object.keys(n).length
                        ? t._gtag("config", e.trackingId, n)
                        : t._gtag("config", e.trackingId);
                    })),
                  (t.isInitialized = !0),
                  !s)
                ) {
                  var c = d(t._queueGtag);
                  for (t._queueGtag = [], t._isQueuing = !1; c.length; ) {
                    var f = c.shift();
                    t._gtag.apply(t, d(f)),
                      "get" === f[0] && (t._isQueuing = !0);
                  }
                }
              }),
              v(this, "set", function (e) {
                e
                  ? "object" === c(e)
                    ? (0 === Object.keys(e).length &&
                        console.warn("empty `fieldsObject` given to .set()"),
                      t._gaCommand("set", e))
                    : console.warn(
                        "Expected `fieldsObject` arg to be an Object"
                      )
                  : console.warn("`fieldsObject` is required in .set()");
              }),
              v(this, "_gaCommandSendEvent", function (e, n, r, a, o) {
                t._gtag(
                  "event",
                  n,
                  p(
                    p(
                      { event_category: e, event_label: r, value: a },
                      o && { non_interaction: o.nonInteraction }
                    ),
                    t._toGtagOptions(o)
                  )
                );
              }),
              v(this, "_gaCommandSendEventParameters", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0])
                  t._gaCommandSendEvent.apply(t, d(n.slice(1)));
                else {
                  var a = n[0],
                    i = a.eventCategory,
                    l = a.eventAction,
                    s = a.eventLabel,
                    c = a.eventValue,
                    f = (a.hitType, u(a, o));
                  t._gaCommandSendEvent(i, l, s, c, f);
                }
              }),
              v(this, "_gaCommandSendTiming", function (e, n, r, a) {
                t._gtag("event", "timing_complete", {
                  name: n,
                  value: r,
                  event_category: e,
                  event_label: a,
                });
              }),
              v(this, "_gaCommandSendPageview", function (e, n) {
                if (n && Object.keys(n).length) {
                  var r = t._toGtagOptions(n),
                    a = r.title,
                    o = r.location,
                    l = u(r, i);
                  t._gtag(
                    "event",
                    "page_view",
                    p(
                      p(
                        p(p({}, e && { page_path: e }), a && { page_title: a }),
                        o && { page_location: o }
                      ),
                      l
                    )
                  );
                } else e ? t._gtag("event", "page_view", { page_path: e }) : t._gtag("event", "page_view");
              }),
              v(this, "_gaCommandSendPageviewParameters", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0])
                  t._gaCommandSendPageview.apply(t, d(n.slice(1)));
                else {
                  var a = n[0],
                    o = a.page,
                    i = (a.hitType, u(a, l));
                  t._gaCommandSendPageview(o, i);
                }
              }),
              v(this, "_gaCommandSend", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                var a = "string" === typeof n[0] ? n[0] : n[0].hitType;
                switch (a) {
                  case "event":
                    t._gaCommandSendEventParameters.apply(t, n);
                    break;
                  case "pageview":
                    t._gaCommandSendPageviewParameters.apply(t, n);
                    break;
                  case "timing":
                    t._gaCommandSendTiming.apply(t, d(n.slice(1)));
                    break;
                  case "screenview":
                  case "transaction":
                  case "item":
                  case "social":
                  case "exception":
                    console.warn("Unsupported send command: ".concat(a));
                    break;
                  default:
                    console.warn("Send command doesn't exist: ".concat(a));
                }
              }),
              v(this, "_gaCommandSet", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                "string" === typeof n[0] && (n[0] = v({}, n[0], n[1])),
                  t._gtag("set", t._toGtagOptions(n[0]));
              }),
              v(this, "_gaCommand", function (e) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    a = 1;
                  a < n;
                  a++
                )
                  r[a - 1] = arguments[a];
                switch (e) {
                  case "send":
                    t._gaCommandSend.apply(t, r);
                    break;
                  case "set":
                    t._gaCommandSet.apply(t, r);
                    break;
                  default:
                    console.warn("Command doesn't exist: ".concat(e));
                }
              }),
              v(this, "ga", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0]) t._gaCommand.apply(t, n);
                else {
                  var a = n[0];
                  t._gtag(
                    "get",
                    t._currentMeasurementId,
                    "client_id",
                    function (e) {
                      t._isQueuing = !1;
                      var n = t._queueGtag;
                      for (
                        a({
                          get: function (n) {
                            return "clientId" === n
                              ? e
                              : "trackingId" === n
                              ? t._currentMeasurementId
                              : "apiVersion" === n
                              ? "1"
                              : void 0;
                          },
                        });
                        n.length;

                      ) {
                        var r = n.shift();
                        t._gtag.apply(t, d(r));
                      }
                    }
                  ),
                    (t._isQueuing = !0);
                }
                return t.ga;
              }),
              v(this, "event", function (e, n) {
                if ("string" === typeof e)
                  t._gtag("event", e, t._toGtagOptions(n));
                else {
                  var r = e.action,
                    o = e.category,
                    i = e.label,
                    l = e.value,
                    s = e.nonInteraction,
                    u = e.transport;
                  if (!o || !r)
                    return void console.warn(
                      "args.category AND args.action are required in event()"
                    );
                  var c = {
                    hitType: "event",
                    eventCategory: (0, a.default)(o),
                    eventAction: (0, a.default)(r),
                  };
                  i && (c.eventLabel = (0, a.default)(i)),
                    "undefined" !== typeof l &&
                      ("number" !== typeof l
                        ? console.warn(
                            "Expected `args.value` arg to be a Number."
                          )
                        : (c.eventValue = l)),
                    "undefined" !== typeof s &&
                      ("boolean" !== typeof s
                        ? console.warn(
                            "`args.nonInteraction` must be a boolean."
                          )
                        : (c.nonInteraction = s)),
                    "undefined" !== typeof u &&
                      ("string" !== typeof u
                        ? console.warn("`args.transport` must be a string.")
                        : (-1 === ["beacon", "xhr", "image"].indexOf(u) &&
                            console.warn(
                              "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"
                            ),
                          (c.transport = u))),
                    t._gaCommand("send", c);
                }
              }),
              v(this, "send", function (e) {
                t._gaCommand("send", e);
              }),
              this.reset();
          }
          var t, n, s;
          return (
            (t = e),
            (n = [
              {
                key: "gtag",
                value: function () {
                  this._gtag.apply(this, arguments);
                },
              },
            ]),
            n && g(t.prototype, n),
            s && g(t, s),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
        t.GA4 = w;
        var k = new w();
        t.default = k;
      },
      666: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r;
          "undefined" !== typeof window &&
            ("undefined" === typeof window.gtag &&
              ((window.dataLayer = window.dataLayer || []),
              (window.gtag = function () {
                window.dataLayer.push(arguments);
              })),
            (r = window).gtag.apply(r, t));
        };
        t.default = n;
      },
      757: (e, t, n) => {
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        t.ZP = void 0;
        var a = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var n = o(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(a, l, s)
                : (a[l] = e[l]);
            }
          (a.default = e), n && n.set(e, a);
          return a;
        })(n(848));
        function o(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        a.GA4;
        var i = a.default;
        t.ZP = i;
      },
      374: (e, t, n) => {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      117: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          b = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || h);
        }
        function v() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = g.prototype);
        var w = (y.prototype = new v());
        (w.constructor = y), m(w, g.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          T = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function N(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, a) && !S.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: T.current,
          };
        }
        function A(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function O(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + O(s, 0) : o),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(E, "$&/") + "/"),
                  C(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (A(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + O((l = e[u]), u);
              s += C(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += C((l = l.value), t, a, (c = o + O(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            C(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function _(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var B = { current: null },
          P = { transition: null },
          R = {
            ReactCurrentDispatcher: B,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: T,
          };
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
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
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!A(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = T.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = N),
          (t.createFactory = function (e) {
            var t = N.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: _,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return B.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return B.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return B.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return B.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return B.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return B.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return B.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return B.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return B.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return B.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return B.current.useRef(e);
          }),
          (t.useState = function (e) {
            return B.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return B.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return B.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: (e, t, n) => {
        e.exports = n(117);
      },
      184: (e, t, n) => {
        e.exports = n(374);
      },
      813: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          b = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((b = !1), w(e), !m))
            if (null !== r(u)) (m = !0), P(x);
            else {
              var t = r(c);
              null !== t && R(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), b && ((b = !1), v(A), (A = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !C()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && R(k, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var T,
          S = !1,
          N = null,
          A = -1,
          E = 5,
          O = -1;
        function C() {
          return !(t.unstable_now() - O < E);
        }
        function j() {
          if (null !== N) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = N(!0, e);
            } finally {
              n ? T() : ((S = !1), (N = null));
            }
          } else S = !1;
        }
        if ("function" === typeof y)
          T = function () {
            y(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var _ = new MessageChannel(),
            B = _.port2;
          (_.port1.onmessage = j),
            (T = function () {
              B.postMessage(null);
            });
        } else
          T = function () {
            g(j, 0);
          };
        function P(e) {
          (N = e), S || ((S = !0), T());
        }
        function R(e, n) {
          A = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), P(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (b ? (v(A), (A = -1)) : (b = !0), R(k, o - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), P(x))),
              e
            );
          }),
          (t.unstable_shouldYield = C),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: (e, t, n) => {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".1f110ae4.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "bonk-site:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (o = i[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkbonk_site = self.webpackChunkbonk_site || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => le,
          hasStandardBrowserEnv: () => se,
          hasStandardBrowserWebWorkerEnv: () => ce,
        });
      var t = n(250);
      const r = (e) => {
        e &&
          e instanceof Function &&
          n
            .e(787)
            .then(n.bind(n, 787))
            .then((t) => {
              let {
                getCLS: n,
                getFID: r,
                getFCP: a,
                getLCP: o,
                getTTFB: i,
              } = t;
              n(e), r(e), a(e), o(e), i(e);
            });
      };
      var a = n(791),
        o = n.t(a, 2),
        i = n(184);
      const l = function () {
        const [e, t] = (0, a.useState)(!1),
          [n, r] = (0, a.useState)(!1),
          o = Array(100).fill(!1),
          [l, s] = (0, a.useState)(o),
          u = (e) => {
            const t = [...l];
            (t[e] = !t[e]), s(t);
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: "about-top-container",
              children: [
                (0, i.jsx)("div", {
                  className: "about-title bonk-font-title",
                  children: "bonk - a brief history",
                }),
                (0, i.jsx)("div", {
                  className: "about-video-container",
                  children: (0, i.jsx)("iframe", {
                    className: "about-video",
                    src: "https://www.youtube.com/embed/l-G5tn6HRco",
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className:
                "about-utidist-container about-utidist-container-left margin-top-50",
              children: [
                (0, i.jsxs)("div", {
                  className: "about-ud-title-container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "about-ud-title bonk-font-title",
                      children: "utility",
                    }),
                    (0, i.jsx)("div", {
                      className: "".concat(
                        e ? "about-ud-image reverse" : "about-ud-image"
                      ),
                      onClick: () => {
                        t(!e);
                      },
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "bonk-font-300 about-ud-text",
                  children:
                    "As the true community coin of web3, $BONK's utility comes in the form of its strong community and thriving ecosystem of integrations. To-date $BONK boasts over 131 integrations across 9 separate chains, its adoption continues to grow rapidly having reached over 400,000 holders and listings across 25 different centralized and decentralized exchanges.",
                }),
                (0, i.jsxs)("div", {
                  className: "bonk-font-300 ".concat(
                    e
                      ? "about-ud-text-expand"
                      : "about-ud-text-expand collapsed"
                  ),
                  children: [
                    "While $BONK's growth to date has been admirable, this promises to be just the beginning for the $BONK community. Concentrated efforts to expand the ecosystem are ongoing and focus on three core pillars each selected to help $BONK in its mission to become the premier community coin in web3.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "These pillars are:",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("p", {
                      className: "p-title-formatter bonk-font-500",
                      children: "MULTICHAIN",
                    }),
                    "$BONK was not designed to be enjoyed by only one chain, therefore continuous efforts are in place to allow holders to buy, bridge, use and enjoy their $BONK regardless of their chain of choice!",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("p", {
                      className: "p-title-formatter bonk-font-500",
                      children: "DEFI",
                    }),
                    "$BONK strives to simplify DeFi for holder and in doing so help them grow their $BONK holdings.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("p", {
                      className: "p-title-formatter bonk-font-500",
                      children: "GAMING",
                    }),
                    "With over 25 active integrations, $BONK continues to expand its adoption as a preferred in-game currency across blockchain gaming.",
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "about-utidist-container-secondary margin-top-50",
              children: [
                (0, i.jsx)("div", { className: "about-utidist-animation" }),
                (0, i.jsxs)("div", {
                  className: "about-utidist-container",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-ud-title-container",
                      children: [
                        (0, i.jsx)("div", {
                          className: "about-ud-title bonk-font-title",
                          children: "distribution",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            n ? "about-ud-image reverse" : "about-ud-image"
                          ),
                          onClick: () => {
                            r(!n);
                          },
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "bonk-font-300 about-ud-text",
                      children: [
                        "$BONK\u2019s distribution strategy is completely centered around giving back to the community and has primarily focused on two core objectives",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "The first objective was to reward the downtrodden Solana community after an extremely difficult year in 2022.",
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "bonk-font-300 ".concat(
                        n
                          ? "about-ud-text-expand"
                          : "about-ud-text-expand collapsed"
                      ),
                      children: [
                        "At the end of 2022, Solana needed some fun and excitement back to be injected back into the network, and what\u2019s more fun than a free community airdrop!",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "So on Christmas Day 2022, 50% of the $BONK supply was airdropped to all the community members that make Solana the thriving community it is today. From NFT degens and DeFi enjoyers to giga brain developers and promising 1/1 artists, everyone in the community woke up on Christmas day to the arrival of this fun community coin in their wallets.",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "In addition to successfully revitalising the Solana community, BONK\u2019s second objective with its distribution strategy has been to align incentives and ensure that the BONK ecosystem continues to thrive well into the future.",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "To achieve this objective, a significant amount of tokens have been earmarked for the BONKDAO to allow community members to form and fund initiatives that light their fire as well as for marketing endeavours, development activities, grants and other activities that further drive BONK\u2019s growth.",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "Finally, propelling the BONK vision forward are it\u2019s early contributors, each dedicated to the long-term success of web3\u2019s true community coin. To prove their loyalty this thriving ecosystem, each contributor is subject to 3 year-long linear vesting schedules ensuring all incentives are aligned for BONK\u2019s long-term success.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "about-info-container margin-top-50",
              children: [
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(0),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "40 solana nft projects",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[0]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[0]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "21% of the coin is being distributed amongst 40 active Solana NFT Projects, representing more than 296,000 individual NFTs. These are spread between high, middle and low cap collections, to prevent the potential accrual of all tokens towards owners of expensive NFTs. This will be based on a snapshot of delisted NFTs, and airdropped via the Famous Fox Federation Tools.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(1),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "solana market participants and defi users",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[1]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[1]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "15.8% of the Supply is going towards Solana market participants and DeFi users.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(2),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "solana artist and collectors",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[2]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[2]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "10.5% of the Supply is going towards the Artists and Collectors of 1/1 art, using a snapshot of activity from the Collector.sh team. This will not be proportional to volume traded, but there will be a minimal cutoff.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(3),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "solana developers",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[3]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "bonk-font-300 ".concat(
                        l[3]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children: [
                        "5.3% of the Supply is going towards Developers on the Solana Chain. It's vital to continue rewarding those who build the programs we need to create things like BONK, and will hopefully be the first of many airdrops towards Solana Developers going forward. This is being facilitated by LamportDAO.",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "BONK is a community coin which may be integrated into Solana dApps across the entire network and serve as a unit of account and user participation reward.",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(4),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "early contributors",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[4]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "bonk-font-300 ".concat(
                        l[4]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children: [
                        "21% is allocated to the early contributors who helped launch, and continue to advance BONK since its inception. There are 22 individuals included in this allocation, each of whom has provided early support in the form of artwork, token design, marketing, integrations, web development, business development, and provision of early liquidity.",
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        "Each individual remains dedicated to driving Bonk\u2019s long-term success, and this will be reflected with a 3-year linear token vesting period beginning from January 1st, 2023.",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(5),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "bonkdao",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[5]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[5]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "15.8% will go towards a BONK DAO to be used for initiatives conceived by the wider BONK community. A Realms Instance will be established that will then control further Distribution and allocation of BONK for these initiatives. Program authority over the Token will be delegated to the Realms Instance and guided by token holders going forward.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(6),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "initial liquidity",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[6]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[6]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "5.3% has been allocated towards Initial Liquidity Distribution, this is being used in Raydium, Orca, and Solend, alongside other platforms like FFFlip, Monaco Protocol, and the BoiBook. Any rewards earned via this distribution will be returned to the BONKDAO.",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-info-container-element",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "about-info-container-top-bar",
                      onClick: () => u(7),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "about-info-container-element-title bonk-font-300",
                          children: "marketing",
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            l[7]
                              ? "about-info-container-element-plus reverse"
                              : "about-info-container-element-plus"
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "bonk-font-300 ".concat(
                        l[7]
                          ? "about-info-container-bottom"
                          : "about-info-container-bottom collapsed"
                      ),
                      children:
                        "5.3% will be used for marketing promotions with teams like AssetDash, and further giveaways and incentives for the promotion of BONK.",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "about-line-container",
              children: [
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: [
                        "21%",
                        (0, i.jsx)("br", {}),
                        "sol nft projects",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: [
                        "15.8%",
                        (0, i.jsx)("br", {}),
                        "market participants and defi users",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: [
                        "10.5%",
                        (0, i.jsx)("br", {}),
                        "artists & collectors",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: ["5.3%", (0, i.jsx)("br", {}), "solana devs"],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: [
                        "21%",
                        (0, i.jsx)("br", {}),
                        "early contributors",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: ["15.8%", (0, i.jsx)("br", {}), "bonk dao"],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", { className: "about-l-block-topline" }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: [
                        "5.3%",
                        (0, i.jsx)("br", {}),
                        "initial liquidity",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "about-l-block-container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "about-l-block-topline last",
                    }),
                    (0, i.jsxs)("div", {
                      className: "about-l-block-text bonk-font-500",
                      children: ["5.3%", (0, i.jsx)("br", {}), "marketing"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function s(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: u } = Object.prototype,
        { getPrototypeOf: c } = Object,
        d =
          ((f = Object.create(null)),
          (e) => {
            const t = u.call(e);
            return f[t] || (f[t] = t.slice(8, -1).toLowerCase());
          });
      var f;
      const p = (e) => ((e = e.toLowerCase()), (t) => d(t) === e),
        h = (e) => (t) => typeof t === e,
        { isArray: m } = Array,
        b = h("undefined");
      const g = p("ArrayBuffer");
      const v = h("string"),
        y = h("function"),
        w = h("number"),
        k = (e) => null !== e && "object" === typeof e,
        x = (e) => {
          if ("object" !== d(e)) return !1;
          const t = c(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        T = p("Date"),
        S = p("File"),
        N = p("Blob"),
        A = p("FileList"),
        E = p("URLSearchParams");
      function O(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), m(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function C(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const j =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        _ = (e) => !b(e) && e !== j;
      const B =
        ((P = "undefined" !== typeof Uint8Array && c(Uint8Array)),
        (e) => P && e instanceof P);
      var P;
      const R = p("HTMLFormElement"),
        Z = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        L = p("RegExp"),
        I = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          O(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        D = "abcdefghijklmnopqrstuvwxyz",
        F = "0123456789",
        z = { DIGIT: F, ALPHA: D, ALPHA_DIGIT: D + D.toUpperCase() + F };
      const M = p("AsyncFunction"),
        U = {
          isArray: m,
          isArrayBuffer: g,
          isBuffer: function (e) {
            return (
              null !== e &&
              !b(e) &&
              null !== e.constructor &&
              !b(e.constructor) &&
              y(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (y(e.append) &&
                  ("formdata" === (t = d(e)) ||
                    ("object" === t &&
                      y(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && g(e.buffer)),
              t
            );
          },
          isString: v,
          isNumber: w,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: k,
          isPlainObject: x,
          isUndefined: b,
          isDate: T,
          isFile: S,
          isBlob: N,
          isRegExp: L,
          isFunction: y,
          isStream: (e) => k(e) && y(e.pipe),
          isURLSearchParams: E,
          isTypedArray: B,
          isFileList: A,
          forEach: O,
          merge: function e() {
            const { caseless: t } = (_(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && C(n, a)) || a;
                x(n[o]) && x(r)
                  ? (n[o] = e(n[o], r))
                  : x(r)
                  ? (n[o] = e({}, r))
                  : m(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && O(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              O(
                t,
                (t, r) => {
                  n && y(t) ? (e[r] = s(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && c(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: d,
          kindOfTest: p,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (m(e)) return e;
            let t = e.length;
            if (!w(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: R,
          hasOwnProperty: Z,
          hasOwnProp: Z,
          reduceDescriptors: I,
          freezeMethods: (e) => {
            I(e, (t, n) => {
              if (y(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              y(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return m(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: C,
          global: j,
          isContextDefined: _,
          ALPHABET: z,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : z.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              y(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (k(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = m(e) ? [] : {};
                    return (
                      O(e, (e, t) => {
                        const o = n(e, r + 1);
                        !b(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: M,
          isThenable: (e) => e && (k(e) || y(e)) && y(e.then) && y(e.catch),
        };
      function K(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      U.inherits(K, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const $ = K.prototype,
        H = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        H[e] = { value: e };
      }),
        Object.defineProperties(K, H),
        Object.defineProperty($, "isAxiosError", { value: !0 }),
        (K.from = (e, t, n, r, a, o) => {
          const i = Object.create($);
          return (
            U.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            K.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const W = K;
      function V(e) {
        return U.isPlainObject(e) || U.isArray(e);
      }
      function q(e) {
        return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function G(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = q(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const Q = U.toFlatObject(U, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const X = function (e, t, n) {
        if (!U.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = U.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !U.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || u,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            U.isSpecCompliantForm(t);
        if (!U.isFunction(a)) throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (U.isDate(e)) return e.toISOString();
          if (!l && U.isBlob(e))
            throw new W("Blob is not supported. Use a Buffer instead.");
          return U.isArrayBuffer(e) || U.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, a) {
          let l = e;
          if (e && !a && "object" === typeof e)
            if (U.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (U.isArray(e) &&
                (function (e) {
                  return U.isArray(e) && !e.some(V);
                })(e)) ||
              ((U.isFileList(e) || U.endsWith(n, "[]")) && (l = U.toArray(e)))
            )
              return (
                (n = q(n)),
                l.forEach(function (e, r) {
                  !U.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? G([n], r, o) : null === i ? n : n + "[]",
                      s(e)
                    );
                }),
                !1
              );
          return !!V(e) || (t.append(G(a, n, o), s(e)), !1);
        }
        const c = [],
          d = Object.assign(Q, {
            defaultVisitor: u,
            convertValue: s,
            isVisitable: V,
          });
        if (!U.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!U.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                U.forEach(n, function (n, o) {
                  !0 ===
                    (!(U.isUndefined(n) || null === n) &&
                      a.call(t, n, U.isString(o) ? o.trim() : o, r, d)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function J(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Y(e, t) {
        (this._pairs = []), e && X(e, this, t);
      }
      const ee = Y.prototype;
      (ee.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ee.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, J);
              }
            : J;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const te = Y;
      function ne(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function re(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || ne,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : U.isURLSearchParams(t)
            ? t.toString()
            : new te(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const ae = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            U.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        oe = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ie = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : te,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        le = "undefined" !== typeof window && "undefined" !== typeof document,
        se =
          ((ue = "undefined" !== typeof navigator && navigator.product),
          le && ["ReactNative", "NativeScript", "NS"].indexOf(ue) < 0);
      var ue;
      const ce =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        de = { ...e, ...ie };
      const fe = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          const i = Number.isFinite(+o),
            l = a >= e.length;
          if (((o = !o && U.isArray(r) ? r.length : o), l))
            return U.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && U.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              U.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (U.isFormData(e) && U.isFunction(e.entries)) {
          const n = {};
          return (
            U.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return U.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  );
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const pe = {
        transitional: oe,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = U.isObject(e);
            a && U.isHTMLForm(e) && (e = new FormData(e));
            if (U.isFormData(e)) return r && r ? JSON.stringify(fe(e)) : e;
            if (
              U.isArrayBuffer(e) ||
              U.isBuffer(e) ||
              U.isStream(e) ||
              U.isFile(e) ||
              U.isBlob(e)
            )
              return e;
            if (U.isArrayBufferView(e)) return e.buffer;
            if (U.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return X(
                    e,
                    new de.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return de.isNode && U.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = U.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return X(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (U.isString(e))
                    try {
                      return (t || JSON.parse)(e), U.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || pe.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && U.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (a) {
                if (n) {
                  if ("SyntaxError" === a.name)
                    throw W.from(
                      a,
                      W.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw a;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: de.classes.FormData, Blob: de.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      U.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        pe.headers[e] = {};
      });
      const he = pe,
        me = U.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        be = Symbol("internals");
      function ge(e) {
        return e && String(e).trim().toLowerCase();
      }
      function ve(e) {
        return !1 === e || null == e ? e : U.isArray(e) ? e.map(ve) : String(e);
      }
      function ye(e, t, n, r, a) {
        return U.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            U.isString(t)
              ? U.isString(r)
                ? -1 !== t.indexOf(r)
                : U.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class we {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = ge(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = U.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = ve(e));
          }
          const o = (e, t) => U.forEach(e, (e, n) => a(e, n, t));
          return (
            U.isPlainObject(e) || e instanceof this.constructor
              ? o(e, t)
              : U.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? o(
                  ((e) => {
                    const t = {};
                    let n, r, a;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (a = e.indexOf(":")),
                            (n = e.substring(0, a).trim().toLowerCase()),
                            (r = e.substring(a + 1).trim()),
                            !n ||
                              (t[n] && me[n]) ||
                              ("set-cookie" === n
                                ? t[n]
                                  ? t[n].push(r)
                                  : (t[n] = [r])
                                : (t[n] = t[n] ? t[n] + ", " + r : r));
                        }),
                      t
                    );
                  })(e),
                  t
                )
              : null != e && a(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = ge(e))) {
            const n = U.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (U.isFunction(t)) return t.call(this, e, n);
              if (U.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = ge(e))) {
            const n = U.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !ye(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = ge(e))) {
              const a = U.findKey(n, e);
              !a || (t && !ye(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return U.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !ye(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            U.forEach(this, (r, a) => {
              const o = U.findKey(n, a);
              if (o) return (t[o] = ve(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = ve(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            U.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && U.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[be] = this[be] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = ge(e);
            t[r] ||
              (!(function (e, t) {
                const n = U.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return U.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      we.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        U.reduceDescriptors(we.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        U.freezeMethods(we);
      const ke = we;
      function xe(e, t) {
        const n = this || he,
          r = t || n,
          a = ke.from(r.headers);
        let o = r.data;
        return (
          U.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Te(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Se(e, t, n) {
        W.call(this, null == e ? "canceled" : e, W.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      U.inherits(Se, W, { __CANCEL__: !0 });
      const Ne = Se;
      const Ae = de.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, a, o) {
              const i = [e + "=" + encodeURIComponent(t)];
              U.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                U.isString(r) && i.push("path=" + r),
                U.isString(a) && i.push("domain=" + a),
                !0 === o && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read(e) {
              const t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function Ee(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Oe = de.hasStandardBrowserEnv
        ? (function () {
            const e = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            let n;
            function r(n) {
              let r = n;
              return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname:
                    "/" === t.pathname.charAt(0)
                      ? t.pathname
                      : "/" + t.pathname,
                }
              );
            }
            return (
              (n = r(window.location.href)),
              function (e) {
                const t = U.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      const Ce = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              u = r[i];
            a || (a = s), (n[o] = l), (r[o] = s);
            let c = i,
              d = 0;
            for (; c !== o; ) (d += n[c++]), (c %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), s - a < t))
              return;
            const f = u && s - u;
            return f ? Math.round((1e3 * d) / f) : void 0;
          }
        );
      };
      function je(e, t) {
        let n = 0;
        const r = Ce(50, 250);
        return (a) => {
          const o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            l = o - n,
            s = r(l);
          n = o;
          const u = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && i && o <= i ? (i - o) / s : void 0,
            event: a,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      const _e =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const a = ke.from(e.headers).normalize();
              let o,
                i,
                { responseType: l, withXSRFToken: s } = e;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(o),
                  e.signal && e.signal.removeEventListener("abort", o);
              }
              if (U.isFormData(r))
                if (
                  de.hasStandardBrowserEnv ||
                  de.hasStandardBrowserWebWorkerEnv
                )
                  a.setContentType(!1);
                else if (!1 !== (i = a.getContentType())) {
                  const [e, ...t] = i
                    ? i
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  a.setContentType(
                    [e || "multipart/form-data", ...t].join("; ")
                  );
                }
              let c = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                a.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = Ee(e.baseURL, e.url);
              function f() {
                if (!c) return;
                const r = ke.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                );
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new W(
                          "Request failed with status code " + n.status,
                          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
                            Math.floor(n.status / 100) - 4
                          ],
                          n.config,
                          n.request,
                          n
                        )
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), u();
                  },
                  function (e) {
                    n(e), u();
                  },
                  {
                    data:
                      l && "text" !== l && "json" !== l
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: r,
                    config: e,
                    request: c,
                  }
                ),
                  (c = null);
              }
              if (
                (c.open(
                  e.method.toUpperCase(),
                  re(d, e.params, e.paramsSerializer),
                  !0
                ),
                (c.timeout = e.timeout),
                "onloadend" in c
                  ? (c.onloadend = f)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf("file:"))) &&
                        setTimeout(f);
                    }),
                (c.onabort = function () {
                  c &&
                    (n(new W("Request aborted", W.ECONNABORTED, e, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new W("Network Error", W.ERR_NETWORK, e, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = e.transitional || oe;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new W(
                        t,
                        r.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                        e,
                        c
                      )
                    ),
                    (c = null);
                }),
                de.hasStandardBrowserEnv &&
                  (s && U.isFunction(s) && (s = s(e)),
                  s || (!1 !== s && Oe(d))))
              ) {
                const t =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  Ae.read(e.xsrfCookieName);
                t && a.set(e.xsrfHeaderName, t);
              }
              void 0 === r && a.setContentType(null),
                "setRequestHeader" in c &&
                  U.forEach(a.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                U.isUndefined(e.withCredentials) ||
                  (c.withCredentials = !!e.withCredentials),
                l && "json" !== l && (c.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  c.addEventListener("progress", je(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", je(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((o = (t) => {
                    c &&
                      (n(!t || t.type ? new Ne(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(o),
                  e.signal &&
                    (e.signal.aborted
                      ? o()
                      : e.signal.addEventListener("abort", o)));
              const p = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(d);
              p && -1 === de.protocols.indexOf(p)
                ? n(
                    new W(
                      "Unsupported protocol " + p + ":",
                      W.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : c.send(r || null);
            });
          },
        Be = { http: null, xhr: _e };
      U.forEach(Be, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const Pe = (e) => "- ".concat(e),
        Re = (e) => U.isFunction(e) || null === e || !1 === e,
        Ze = (e) => {
          e = U.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !Re(n) && ((r = Be[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new W("Unknown adapter '".concat(t, "'"));
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(Pe).join("\n")
                : " " + Pe(e[0])
              : "as no adapter specified";
            throw new W(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function Le(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Ne(null, e);
      }
      function Ie(e) {
        Le(e),
          (e.headers = ke.from(e.headers)),
          (e.data = xe.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return Ze(e.adapter || he.adapter)(e).then(
          function (t) {
            return (
              Le(e),
              (t.data = xe.call(e, e.transformResponse, t)),
              (t.headers = ke.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Te(t) ||
                (Le(e),
                t &&
                  t.response &&
                  ((t.response.data = xe.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = ke.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const De = (e) => (e instanceof ke ? e.toJSON() : e);
      function Fe(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return U.isPlainObject(e) && U.isPlainObject(t)
            ? U.merge.call({ caseless: n }, e, t)
            : U.isPlainObject(t)
            ? U.merge({}, t)
            : U.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return U.isUndefined(t)
            ? U.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!U.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return U.isUndefined(t)
            ? U.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const s = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: (e, t) => a(De(e), De(t), !0),
        };
        return (
          U.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = s[r] || a,
              i = o(e[r], t[r], r);
            (U.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      const ze = "1.6.2",
        Me = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          Me[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const Ue = {};
      Me.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.6.2] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new W(
              r(a, " has been removed" + (t ? " in " + t : "")),
              W.ERR_DEPRECATED
            );
          return (
            t &&
              !Ue[a] &&
              ((Ue[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      const Ke = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new W(
                    "option " + o + " must be " + n,
                    W.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new W("Unknown option " + o, W.ERR_BAD_OPTION);
            }
          },
          validators: Me,
        },
        $e = Ke.validators;
      class He {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new ae(), response: new ae() });
        }
        request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = Fe(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            Ke.assertOptions(
              n,
              {
                silentJSONParsing: $e.transitional($e.boolean),
                forcedJSONParsing: $e.transitional($e.boolean),
                clarifyTimeoutError: $e.transitional($e.boolean),
              },
              !1
            ),
            null != r &&
              (U.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Ke.assertOptions(
                    r,
                    { encode: $e.function, serialize: $e.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && U.merge(a.common, a[t.method]);
          a &&
            U.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = ke.concat(o, a));
          const i = [];
          let l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const s = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          });
          let c,
            d = 0;
          if (!l) {
            const e = [Ie.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, s),
                c = e.length,
                u = Promise.resolve(t);
              d < c;

            )
              u = u.then(e[d++], e[d++]);
            return u;
          }
          c = i.length;
          let f = t;
          for (d = 0; d < c; ) {
            const e = i[d++],
              t = i[d++];
            try {
              f = e(f);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            u = Ie.call(this, f);
          } catch (p) {
            return Promise.reject(p);
          }
          for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
          return u;
        }
        getUri(e) {
          return re(
            Ee((e = Fe(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      U.forEach(["delete", "get", "head", "options"], function (e) {
        He.prototype[e] = function (t, n) {
          return this.request(
            Fe(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        U.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Fe(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (He.prototype[e] = t()), (He.prototype[e + "Form"] = t(!0));
        });
      const We = He;
      class Ve {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Ne(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new Ve(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const qe = Ve;
      const Ge = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Ge).forEach((e) => {
        let [t, n] = e;
        Ge[n] = t;
      });
      const Qe = Ge;
      const Xe = (function e(t) {
        const n = new We(t),
          r = s(We.prototype.request, n);
        return (
          U.extend(r, We.prototype, n, { allOwnKeys: !0 }),
          U.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Fe(t, n));
          }),
          r
        );
      })(he);
      (Xe.Axios = We),
        (Xe.CanceledError = Ne),
        (Xe.CancelToken = qe),
        (Xe.isCancel = Te),
        (Xe.VERSION = ze),
        (Xe.toFormData = X),
        (Xe.AxiosError = W),
        (Xe.Cancel = Xe.CanceledError),
        (Xe.all = function (e) {
          return Promise.all(e);
        }),
        (Xe.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Xe.isAxiosError = function (e) {
          return U.isObject(e) && !0 === e.isAxiosError;
        }),
        (Xe.mergeConfig = Fe),
        (Xe.AxiosHeaders = ke),
        (Xe.formToJSON = (e) => fe(U.isHTMLForm(e) ? new FormData(e) : e)),
        (Xe.getAdapter = Ze),
        (Xe.HttpStatusCode = Qe),
        (Xe.default = Xe);
      const Je = Xe,
        Ye = {
          headers: {
            Authorization: "Bearer ".concat(
              "94d4e1d1cca326265f1326a128fb3c045dff14dd6954c4956143df6e014f054c01ec45cfd69ef067c70fbf7f2f7fa6719ab4cb982ecf492a77ee862c27b96db449ab7ebc31470168ce868bb80e3f827db61fea2a632a73e16452486c3a5d6982cf0a22c917d4287f71c6601fcc296e38d4e64096f194571e934507bcf6886db0"
            ),
          },
        };
      function et() {
        return (
          (et = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          et.apply(this, arguments)
        );
      }
      var tt;
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(tt || (tt = {}));
      const nt = "popstate";
      function rt(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function at(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function ot(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function it(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          et(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? st(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function lt(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function st(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function ut(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          i = a.history,
          l = tt.Pop,
          s = null,
          u = c();
        function c() {
          return (i.state || { idx: null }).idx;
        }
        function d() {
          l = tt.Pop;
          let e = c(),
            t = null == e ? null : e - u;
          (u = e), s && s({ action: l, location: p.location, delta: t });
        }
        function f(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : lt(e);
          return (
            rt(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == u && ((u = 0), i.replaceState(et({}, i.state, { idx: u }), ""));
        let p = {
          get action() {
            return l;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (s)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(nt, d),
              (s = e),
              () => {
                a.removeEventListener(nt, d), (s = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: f,
          encodeLocation(e) {
            let t = f(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = tt.Push;
            let r = it(p.location, e, t);
            n && n(r, e), (u = c() + 1);
            let d = ot(r, u),
              f = p.createHref(r);
            try {
              i.pushState(d, "", f);
            } catch (h) {
              if (h instanceof DOMException && "DataCloneError" === h.name)
                throw h;
              a.location.assign(f);
            }
            o && s && s({ action: l, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            l = tt.Replace;
            let r = it(p.location, e, t);
            n && n(r, e), (u = c());
            let a = ot(r, u),
              d = p.createHref(r);
            i.replaceState(a, "", d),
              o && s && s({ action: l, location: p.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return p;
      }
      var ct;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(ct || (ct = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function dt(e, t, n) {
        void 0 === n && (n = "/");
        let r = Nt(("string" === typeof t ? st(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = ft(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let o = null;
        for (let i = 0; null == o && i < a.length; ++i) o = xt(a[i], St(r));
        return o;
      }
      function ft(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (rt(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = Ct([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (rt(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            ft(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: kt(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of pt(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function pt(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = pt(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const ht = /^:\w+$/,
        mt = 3,
        bt = 2,
        gt = 1,
        vt = 10,
        yt = -2,
        wt = (e) => "*" === e;
      function kt(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(wt) && (r += yt),
          t && (r += bt),
          n
            .filter((e) => !wt(e))
            .reduce((e, t) => e + (ht.test(t) ? mt : "" === t ? gt : vt), r)
        );
      }
      function xt(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            u = Tt(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              s
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          o.push({
            params: r,
            pathname: Ct([a, u.pathname]),
            pathnameBase: jt(Ct([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = Ct([a, u.pathnameBase]));
        }
        return o;
      }
      function Tt(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            at(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:(\w+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] =
                a && !s
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          at(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ")."
                          ),
                          e
                        );
                      }
                    })(s || "", r)),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function St(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            at(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Nt(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function At(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Et(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function Ot(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = st(e))
            : ((a = et({}, e)),
              rt(
                !a.pathname || !a.pathname.includes("?"),
                At("?", "pathname", "search", a)
              ),
              rt(
                !a.pathname || !a.pathname.includes("#"),
                At("#", "pathname", "hash", a)
              ),
              rt(
                !a.search || !a.search.includes("#"),
                At("#", "search", "hash", a)
              ));
        let o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          let e = t.length - 1;
          if (l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let s = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? st(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: _t(r), hash: Bt(a) };
          })(a, o),
          u = l && "/" !== l && l.endsWith("/"),
          c = (i || "." === l) && n.endsWith("/");
        return s.pathname.endsWith("/") || (!u && !c) || (s.pathname += "/"), s;
      }
      const Ct = (e) => e.join("/").replace(/\/\/+/g, "/"),
        jt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        _t = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        Bt = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function Pt(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const Rt = ["post", "put", "patch", "delete"],
        Zt = (new Set(Rt), ["get", ...Rt]);
      new Set(Zt), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function Lt() {
        return (
          (Lt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Lt.apply(this, arguments)
        );
      }
      const It = a.createContext(null);
      const Dt = a.createContext(null);
      const Ft = a.createContext(null);
      const zt = a.createContext(null);
      const Mt = a.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1,
      });
      const Ut = a.createContext(null);
      function Kt() {
        return null != a.useContext(zt);
      }
      function $t() {
        return Kt() || rt(!1), a.useContext(zt).location;
      }
      function Ht(e) {
        a.useContext(Ft).static || a.useLayoutEffect(e);
      }
      function Wt() {
        let { isDataRoute: e } = a.useContext(Mt);
        return e
          ? (function () {
              let { router: e } = nn(en.UseNavigateStable),
                t = an(tn.UseNavigateStable),
                n = a.useRef(!1);
              return (
                Ht(() => {
                  n.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, Lt({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              Kt() || rt(!1);
              let e = a.useContext(It),
                { basename: t, navigator: n } = a.useContext(Ft),
                { matches: r } = a.useContext(Mt),
                { pathname: o } = $t(),
                i = JSON.stringify(Et(r).map((e) => e.pathnameBase)),
                l = a.useRef(!1);
              return (
                Ht(() => {
                  l.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    if ((void 0 === a && (a = {}), !l.current)) return;
                    if ("number" === typeof r) return void n.go(r);
                    let s = Ot(r, JSON.parse(i), o, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (s.pathname =
                        "/" === s.pathname ? t : Ct([t, s.pathname])),
                      (a.replace ? n.replace : n.push)(s, a.state, a);
                  },
                  [t, n, i, o, e]
                )
              );
            })();
      }
      function Vt(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { matches: r } = a.useContext(Mt),
          { pathname: o } = $t(),
          i = JSON.stringify(Et(r).map((e) => e.pathnameBase));
        return a.useMemo(
          () => Ot(e, JSON.parse(i), o, "path" === n),
          [e, i, o, n]
        );
      }
      function qt(e, t, n) {
        Kt() || rt(!1);
        let { navigator: r } = a.useContext(Ft),
          { matches: o } = a.useContext(Mt),
          i = o[o.length - 1],
          l = i ? i.params : {},
          s = (i && i.pathname, i ? i.pathnameBase : "/");
        i && i.route;
        let u,
          c = $t();
        if (t) {
          var d;
          let e = "string" === typeof t ? st(t) : t;
          "/" === s ||
            (null == (d = e.pathname) ? void 0 : d.startsWith(s)) ||
            rt(!1),
            (u = e);
        } else u = c;
        let f = u.pathname || "/",
          p = dt(e, { pathname: "/" === s ? f : f.slice(s.length) || "/" });
        let h = Yt(
          p &&
            p.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: Ct([
                  s,
                  r.encodeLocation
                    ? r.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? s
                    : Ct([
                        s,
                        r.encodeLocation
                          ? r.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          o,
          n
        );
        return t && h
          ? a.createElement(
              zt.Provider,
              {
                value: {
                  location: Lt(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    u
                  ),
                  navigationType: tt.Pop,
                },
              },
              h
            )
          : h;
      }
      function Gt() {
        let e = (function () {
            var e;
            let t = a.useContext(Ut),
              n = rn(tn.UseRouteError),
              r = an(tn.UseRouteError);
            if (t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = Pt(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: r };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h2", null, "Unexpected Application Error!"),
          a.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? a.createElement("pre", { style: o }, n) : null,
          null
        );
      }
      const Qt = a.createElement(Gt, null);
      class Xt extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return this.state.error
            ? a.createElement(
                Mt.Provider,
                { value: this.props.routeContext },
                a.createElement(Ut.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function Jt(e) {
        let { routeContext: t, match: n, children: r } = e,
          o = a.useContext(It);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
          a.createElement(Mt.Provider, { value: t }, r)
        );
      }
      function Yt(e, t, n) {
        var r;
        if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
          var o;
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let i = e,
          l = null == (r = n) ? void 0 : r.errors;
        if (null != l) {
          let e = i.findIndex(
            (e) => e.route.id && (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || rt(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
        }
        return i.reduceRight((e, r, o) => {
          let s = r.route.id ? (null == l ? void 0 : l[r.route.id]) : null,
            u = null;
          n && (u = r.route.errorElement || Qt);
          let c = t.concat(i.slice(0, o + 1)),
            d = () => {
              let t;
              return (
                (t = s
                  ? u
                  : r.route.Component
                  ? a.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                a.createElement(Jt, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
            ? a.createElement(Xt, {
                location: n.location,
                revalidation: n.revalidation,
                component: u,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      var en = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(en || {}),
        tn = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(tn || {});
      function nn(e) {
        let t = a.useContext(It);
        return t || rt(!1), t;
      }
      function rn(e) {
        let t = a.useContext(Dt);
        return t || rt(!1), t;
      }
      function an(e) {
        let t = (function (e) {
            let t = a.useContext(Mt);
            return t || rt(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || rt(!1), n.route.id;
      }
      o.startTransition;
      function on(e) {
        let { to: t, replace: n, state: r, relative: o } = e;
        Kt() || rt(!1);
        let { matches: i } = a.useContext(Mt),
          { pathname: l } = $t(),
          s = Wt(),
          u = Ot(
            t,
            Et(i).map((e) => e.pathnameBase),
            l,
            "path" === o
          ),
          c = JSON.stringify(u);
        return (
          a.useEffect(
            () => s(JSON.parse(c), { replace: n, state: r, relative: o }),
            [s, c, o, n, r]
          ),
          null
        );
      }
      function ln(e) {
        rt(!1);
      }
      function sn(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: r,
          navigationType: o = tt.Pop,
          navigator: i,
          static: l = !1,
        } = e;
        Kt() && rt(!1);
        let s = t.replace(/^\/*/, "/"),
          u = a.useMemo(
            () => ({ basename: s, navigator: i, static: l }),
            [s, i, l]
          );
        "string" === typeof r && (r = st(r));
        let {
            pathname: c = "/",
            search: d = "",
            hash: f = "",
            state: p = null,
            key: h = "default",
          } = r,
          m = a.useMemo(() => {
            let e = Nt(c, s);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: d,
                    hash: f,
                    state: p,
                    key: h,
                  },
                  navigationType: o,
                };
          }, [s, c, d, f, p, h, o]);
        return null == m
          ? null
          : a.createElement(
              Ft.Provider,
              { value: u },
              a.createElement(zt.Provider, { children: n, value: m })
            );
      }
      function un(e) {
        let { children: t, location: n } = e;
        return qt(cn(t), n);
      }
      new Promise(() => {});
      a.Component;
      function cn(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let o = [...t, r];
            if (e.type === a.Fragment)
              return void n.push.apply(n, cn(e.props.children, o));
            e.type !== ln && rt(!1),
              e.props.index && e.props.children && rt(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = cn(e.props.children, o)),
              n.push(i);
          }),
          n
        );
      }
      function dn() {
        return (
          (dn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          dn.apply(this, arguments)
        );
      }
      function fn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const pn = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      new Map();
      const hn = o.startTransition;
      function mn(e) {
        let { basename: t, children: n, future: r, window: o } = e,
          i = a.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: o, v5Compat: !0 }) && (l = {}),
            ut(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return it(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : lt(t);
              },
              null,
              l
            )));
        let s = i.current,
          [u, c] = a.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = r || {},
          f = a.useCallback(
            (e) => {
              d && hn ? hn(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          a.useLayoutEffect(() => s.listen(f), [s, f]),
          a.createElement(sn, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: s,
          })
        );
      }
      const bn =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        gn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        vn = a.forwardRef(function (e, t) {
          let n,
            {
              onClick: r,
              relative: o,
              reloadDocument: i,
              replace: l,
              state: s,
              target: u,
              to: c,
              preventScrollReset: d,
              unstable_viewTransition: f,
            } = e,
            p = fn(e, pn),
            { basename: h } = a.useContext(Ft),
            m = !1;
          if ("string" === typeof c && gn.test(c) && ((n = c), bn))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                n = Nt(t.pathname, h);
              t.origin === e.origin && null != n
                ? (c = n + t.search + t.hash)
                : (m = !0);
            } catch (v) {}
          let b = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              Kt() || rt(!1);
              let { basename: r, navigator: o } = a.useContext(Ft),
                { hash: i, pathname: l, search: s } = Vt(e, { relative: n }),
                u = l;
              return (
                "/" !== r && (u = "/" === l ? r : Ct([r, l])),
                o.createHref({ pathname: u, search: s, hash: i })
              );
            })(c, { relative: o }),
            g = (function (e, t) {
              let {
                  target: n,
                  replace: r,
                  state: o,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === t ? {} : t,
                u = Wt(),
                c = $t(),
                d = Vt(e, { relative: l });
              return a.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== r ? r : lt(c) === lt(d);
                    u(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, r, o, n, e, i, l, s]
              );
            })(c, {
              replace: l,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: o,
              unstable_viewTransition: f,
            });
          return a.createElement(
            "a",
            dn({}, p, {
              href: n || b,
              onClick:
                m || i
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || g(e);
                    },
              ref: t,
              target: u,
            })
          );
        });
      var yn, wn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(yn || (yn = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(wn || (wn = {}));
      const kn = function () {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)(void 0);
          async function o() {
            const e = await (async function () {
              try {
                return (await Je.get("https://content.bonk.team/api/arts", Ye))
                  .data;
              } catch (e) {
                return;
              }
            })();
            e && r(e || void 0);
          }
          return (
            (0, a.useEffect)(() => {
              t(!0), o(), t(!1);
            }, []),
            e
              ? (0, i.jsx)("div", {
                  className: "lds-container",
                  children: (0, i.jsxs)("div", {
                    className: "lds-ring",
                    children: [
                      (0, i.jsx)("div", {}),
                      (0, i.jsx)("div", {}),
                      (0, i.jsx)("div", {}),
                      (0, i.jsx)("div", {}),
                    ],
                  }),
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("div", {
                      className: "bonkart-info-container",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "bonkart-i-left-container",
                          children: [
                            (0, i.jsx)("div", {
                              className: "bonkart-i-l-logo-container",
                              children: (0, i.jsx)("div", {
                                className: "bonkart-i-l-logo",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "bonkart-i-l-text bonk-font-title",
                              children: [
                                "bonk",
                                (0, i.jsx)("br", {}),
                                "art",
                                (0, i.jsx)("br", {}),
                                "master",
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "bonkart-i-right-container",
                          children: (0, i.jsx)("div", {
                            className: "bonkart-i-r-text bonk-font-400",
                            children:
                              "BONK Art Master features our iconic BONK shiba inu through the eyes of talented artists onchain. Each artist interpretation is unique. Collectable pieces loved by the BONK community, made for the BONK community.",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "bonkart-talents-container",
                      children: [
                        (0, i.jsx)("div", {
                          className: "bonkart-talents-title bonk-font-title",
                          children: "check out our talented bonk artists",
                        }),
                        (0, i.jsx)("div", {
                          className: "bonkart-talents-list-container",
                          children:
                            null === n || void 0 === n
                              ? void 0
                              : n.data.map((e) =>
                                  (0, i.jsx)(
                                    "div",
                                    {
                                      className:
                                        "bonkart-talent-card-container",
                                      children: (0, i.jsxs)("div", {
                                        className: "bonkart-talent-card",
                                        children: [
                                          (0, i.jsx)("div", {
                                            style: {
                                              backgroundImage: 'url("'.concat(
                                                e.attributes.imageUrl,
                                                '")'
                                              ),
                                            },
                                            className: "bonkart-talent-image",
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: "bonkart-talent-info",
                                            children: [
                                              (0, i.jsx)("div", {
                                                className:
                                                  "bonkart-talent-text bonk-font-400",
                                                children: e.attributes.name,
                                              }),
                                              (0, i.jsx)(vn, {
                                                to: e.attributes.url,
                                                target: "_blank",
                                                children: (0, i.jsx)("div", {
                                                  className:
                                                    "bonkart-talent-button",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    e.id
                                  )
                                ),
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        xn = n.p + "static/media/bonkog_200.e87b5d92088ca7a75178.png",
        Tn = JSON.parse(
          '{"data":[{"id":10,"attributes":{"name":"DeFi","sort":1,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":2,"attributes":{"name":"BonkBot","description":"Trade SPL tokens straight from your mobile with Solana\'s premier telegram trading bot, 100% of all fees go towards buying $BONK with 20% instantly burned!","url":"https://www.bonkbot.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.1}},{"id":3,"attributes":{"name":"BONKSWAP","description":"Swap and provide liquidity on Bonkswap, the nexus of degeneracy for the Solana community","url":"https://www.bonkswap.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.21}},{"id":6,"attributes":{"name":"MARGINFI","description":"Lock up $BONK long-term and earn apy\'s over 10%","url":"https://www.marginfi.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.6}},{"id":7,"attributes":{"name":"JITO LABS","description":"Stake sol with Jito Labs and earn $BONK, all commission revenues go towards buying and burning $BONK","url":"https://stakewiz.com/validator/J1to3PQfXidUUhprQWgdKkQAMWPJAEqSJ7amkBDE9qhF","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.8}},{"id":8,"attributes":{"name":"BUYBONK","description":"Acquire $BONK using tokens across Ethereum, BSC, Arbitrum, Avalanche and Solana","url":"https://buybonk.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.5}},{"id":9,"attributes":{"name":"METEORA","description":"Provide liquidity and earn rewards with $BONK pools on Meteora","url":"https://app.meteora.ag/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":10,"attributes":{"name":"DUAL FINANCE","description":"Earn additional $BONK when you stake with Dual Finance","url":"https://beta.dual.finance/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.9}},{"id":14,"attributes":{"name":"INJECTIVE","description":"Watch out for $BONK derivatives on their way soon","url":"https://twitter.com/Injective_/status/1611054992089092098","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1.1}},{"id":19,"attributes":{"name":"POOL PARTY","description":"Pool $BONK savings with Pool Party to get the chance to win $BONK weekly","url":"https://joinpoolparty.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1.2}},{"id":20,"attributes":{"name":"VYPER PROTOCOL","description":"Use $BONk to trade options and futures","url":"https://otc.vyperprotocol.io/contract/create","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":21,"attributes":{"name":"DRIP","description":"Dollar cost average into $BONK with Drip","url":"https://www.dcaf.so/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.7}},{"id":22,"attributes":{"name":"WORMHOLE","description":"Bridge $BONK easily on our site to your favorite chains.","url":"https://www.bonkcoin.com/wormhole","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.2}},{"id":23,"attributes":{"name":"ELUSIV","description":"Watch out for our upcoming partnership with Elusiv, very private bonking coming soon.","url":"https://elusiv.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.4}},{"id":27,"attributes":{"name":"RAYDIUM","description":"Swap with Raydium, the Initial DEX, AMM and liquidity provider for $BONK","url":"https://raydium.io/pools","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":28,"attributes":{"name":"SOLEND","description":"Lend and earn or borrow with $BONK on Solend","url":"https://solend.fi/pools","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":29,"attributes":{"name":"ORCA","description":"Add some $BONK on Orca\'s liquidity pools","url":"https://www.orca.so/whirlpools/browse?tokenMint=DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":30,"attributes":{"name":"TULIP PROTOCOL","description":"Become a humble DeFi farmer and harvest some $BONK","url":"https://tulip.garden/strategy?platform=whirlpool&vault=SOL-BONK","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":31,"attributes":{"name":"COIN RABBIT","description":"Use your $BONK as collateral to get loans from Coin Rabbit","url":"https://coinrabbit.io/blog/what-is-bonk-and-how-to-use-it-to-gain-profit/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":32,"attributes":{"name":"JET PROTOCOL","description":"Trade, lend, and borrow $BONK on Jet Protocol","url":"https://t.co/mvMTSZ2MDh","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":33,"attributes":{"name":"LIQUIFY","description":"Convert NFTs into $BONK","url":"https://liquifynft.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":45,"attributes":{"name":"SOLAPE","description":"Add some $BONK liquidity on Solape","url":"https://dex.solape.io/#/market/8PhnCfgqpgFM7ZJvttGdBVMXHuU4Q23ACxCvWkbs1M71","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":46,"attributes":{"name":"BONKOMATIC","description":"Stake Sol and earn $BONK","url":"https://bonkomatic.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":108,"attributes":{"name":"PSYOPTIONS","description":"Earn with Psyoption\'s $BONK covered call vault","url":"https://www.psyfi.io/vaults/bonk-call/deposit","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":109,"attributes":{"name":"ZETA MARKETS","description":"Earn $BONK rewards whilst trading perps on a performant DEX","url":"https://dex.zeta.markets/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":11,"attributes":{"name":"Developer","sort":2,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":47,"attributes":{"name":"SQUADS","description":"Send assets from your Sqaud to .bonk domains","url":"https://squads.so/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.4}},{"id":48,"attributes":{"name":"METAPLEX","description":"Price your mints in $BONK with Metaplex\'s candy machine","url":"https://docs.metaplex.com/programs/candy-machine/available-guards/token-payment","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.3}},{"id":49,"attributes":{"name":"SWITCHBOARD","description":"Get your $BONK pricing feed","url":"https://switchboard.xyz/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":50,"attributes":{"name":"HELIUS","description":"Integrate your app with $BONK and get 25% off Helius rpcs, apis and webhooks","url":"https://helius.xyz/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":51,"attributes":{"name":"BIRDSEYE","description":"Track on-chain trades and the price of $BONK with Birdseye","url":"https://birdeye.so/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":52,"attributes":{"name":"COINBASE","description":"Track the price of $BONK on Coinbase  (trading not available)","url":"https://www.coinbase.com/price/bonk1","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":53,"attributes":{"name":"WAGG","description":"Check key $BONK stats on @wagg\'s dedicated $BONK dashboard","url":"https://dune.com/wagg/bonk-stats","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.2}},{"id":54,"attributes":{"name":"BONK FIRE","description":"Track the biggest burners of $BONK","url":"https://www.thebonkfire.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":55,"attributes":{"name":"TOP LEDGER","description":"Check key $BONK stats on Top Ledger\'s dedicated $BONK dashboard","url":"https://analytics.topledger.xyz/tl/public/dashboards/DZiFnETOhwHqoff9CHXTLKgZgtX7YsKbnQThhzut","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.1}},{"id":56,"attributes":{"name":"KELLEN (FLIPSIDE)","description":"Track $BONK burns with this dashboard powered by Flipside","url":"https://next.flipsidecrypto.xyz/kellen/bonk-burns-3aEm3a","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":110,"attributes":{"name":"SOLANA SANDSTORM","description":"Build $BONK apps for a prize of 100b $BONK","url":"https://twitter.com/0xMert_/status/1610393207308705793","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":111,"attributes":{"name":"BONKAPLEX","description":"Mint NFTs with Bonkaplex\'s candymachine-esque platform","url":"https://twitter.com/0xsmick/status/1614728132132495366","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":16,"attributes":{"name":"Social","sort":7,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":12,"attributes":{"name":"ALLIGN","description":"Propose community initiatives to get funded in the Bonk Community\'s allign platform, powered by Phase Labs","url":"https://bonk.phaselabs.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":44,"attributes":{"name":"CHINGARI","description":"Bonk is partnering with web3\'s Tik Tok and giving out 100b of $BONK rewards","url":"https://twitter.com/GariToken/status/1612252851992133634?s=20&t=nJ0_kQ6JkNBGuBCMDJZyuw","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":97,"attributes":{"name":"DIALECT","description":"Create and send bonk chat stickers to your friends","url":"https://www.dialect.to/?promotion_id=12a28a68-9ec7-4201-916b-a33b31bb6d2a&type=promotion","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":98,"attributes":{"name":"MATRICA LABS","description":"Integrate $BONK token gating in your discord channel","url":"https://linktr.ee/MatricaLabs","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":99,"attributes":{"name":"RAVEN","description":"Earn $BONK for retweets with Raven\'s gamified marketing","url":"https://raven.blocksmithlabs.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":100,"attributes":{"name":"ASSET DASH","description":"Try out Asset Dash, our esteemed marketing partner","url":"https://www.assetdash.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":134,"attributes":{"name":"SINO","description":"Best $BONK meme wins 270M bonk","url":"https://twitter.com/SinoGlobalGames/status/1610603635678871553?s=20&t=MyYhl4e1wbc7dY7dVkqvLA","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":17,"attributes":{"name":"Wallet","sort":8,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":101,"attributes":{"name":"BACKPACK","description":"Store your $BONK in Backpak, Solana\'s new generation of wallet","url":"https://chrome.google.com/webstore/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":102,"attributes":{"name":"DECAF","description":"Store your $BONK in Decaf","url":"https://www.decaf.so/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":103,"attributes":{"name":"KEPLR","description":"Store your $BONK in Keplr\u2019s cross-chain wallet","url":"https://www.keplr.app/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":104,"attributes":{"name":"MARTIAN","description":"Store your $BONK in Martian\u2019s cross-chain wallet","url":"https://martianwallet.xyz/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":105,"attributes":{"name":"METAMASK","description":"Store your cross-chain wallet with Metamask","url":"https://metamask.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":106,"attributes":{"name":"PHANTOM","description":"Store your $BONK in Phantom, one of Solana\u2019s most popular wallets","url":"https://phantom.app/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":107,"attributes":{"name":"SOLFLARE","description":"Store your $BONK in Solflare, one of Solana\u2019s most popular wallets","url":"https://solflare.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}}]}}},{"id":14,"attributes":{"name":"Gaming","sort":4,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":4,"attributes":{"name":"SILICON VALLEY BONK","description":"SVB is a fully on-chain and transparent game built on Solana. The objective is to be the last person to buy a key each game. The very last purchased key unlocks the vault. The game operates based on a timer that starts at 24 hours (one day). The grand prize payout and raffle occurs when the game timer reaches zero.","url":"https://svbonk.com/","active":false,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":15,"attributes":{"name":"FFF RAFFLES\\n\\n","description":"Participate in raffles with $BONK","url":"https://rafffle.famousfoxes.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":16,"attributes":{"name":"FFF FLIP","description":"Participate in some good ol\' degen $BONK flip","url":"https://ffflip.famousfoxes.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":17,"attributes":{"name":"BONK OR BUST","description":"Bet whether $SOL will be higher or lower in a minute with $BONK (perfect for the degenerate bonker)","url":"https://bonkorbust.com/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":18,"attributes":{"name":"BILLIDROP","description":"Take part in this raffle-style game, purchase entries using $SOL and $BONK to compete for substantial cash prizes.","url":"https://medium.com/@BilliDrop.com/the-drop-gets-bonk-ed-659bd3a45db4","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":24,"attributes":{"name":"LITTLE BONKERS","description":"Free-to-play, browser-accessible Classic Arcade Beat \'Em Up action game, earn $BONK and $USDC rewards as you progress!","url":"https://twitter.com/Little_Bonkers","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":25,"attributes":{"name":"ANTI SOCIALS","description":"Look out for Anti Socials, with the Bonkade coming soon!","url":"https://twitter.com/AntiSocialsJPEG","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":26,"attributes":{"name":"BONK BUDDIES","description":"A classic pokemon-tomagotchi hybrid game, burn $BONK In order to grow your Bonk Buddy and reach the final stages!","url":"https://linktr.ee/ligmalabs","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":1}},{"id":34,"attributes":{"name":"NEARCRASH","description":"Bet on casino games with $BONK on Near Crash","url":"https://nearcrash.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":35,"attributes":{"name":"DEAD RUBY STUDIOS","description":"Sail the seas and search for treasure ($BONK) in this free-to-play arcade style game!","url":"https://deadrubystudios.com/games2","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":36,"attributes":{"name":"IMSO NFT","description":"Earn $BONK while engaging in an exciting Unreal/Unity driven web3 game with IMSO NFT","url":"https://linktr.ee/IMSOnft","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":37,"attributes":{"name":"DOGE TRACK","description":"Use $BONK to race your doges at the dogetrack","url":"https://t.co/G6X2nOFAwJ","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":38,"attributes":{"name":"EVIO","description":"Try this first person shoot-to-earn game, for a limited, with your Bonk skin equipped you can pick up spinning $BONK orbs in deathmatch and earn 8 million $BONK straight to your wallet.","url":"https://twitter.com/play_evio/status/1664008863610273793?s=20","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":80,"attributes":{"name":"SOL CASINO","description":"Bet with $BONK at Sol Casino","url":"https://solcasino.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":81,"attributes":{"name":"QUACKPOT","description":"Bet with $BONK at Quackpot\'s casino","url":"https://quackpot.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":82,"attributes":{"name":"SOL PATROL","description":"Bet bonk to win $BONK, $BONK earnings will be burned","url":"https://bonksp.in/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":83,"attributes":{"name":"DUEL CASINO","description":"Bet with $BONK on Duel Casino","url":"https://duel.win/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":84,"attributes":{"name":"TOY MACHINE (FBC)","description":"Spin and win $BONK with Toy Machine","url":"https://toy-machine.fearlessbulls.club/d/CjxQeT9pKa9KpbqWfzmSK9cMWm9oK9FxZL2YbnMScwC2","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":85,"attributes":{"name":"DIVVY BET","description":"Bet with $BONK on Divvy, a brand new DeFi gambling platform for degens of all kind","url":"https://app.divvy.bet/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":86,"attributes":{"name":"BONK\'D","description":"First play 2 bonk game, get bonk\'d in the bonkiverse","url":"https://bonkd.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":87,"attributes":{"name":"DEFI LAND","description":"Earn $BONk for bonking sbf in DeFi Land","url":"https://play.defiland.app/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":113,"attributes":{"name":"DCF","description":"Bet $BONK in DCF\'s newest game degen bonk bozer","url":"https://bonk.degencoindozer.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":114,"attributes":{"name":"BONK BETS","description":"Bet $BONK with bonk bets, 50% of earnings burned","url":"https://www.bonkbets.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":115,"attributes":{"name":"BOIBOOK","description":"Sportsbook and gaming - bet with $BONK","url":"https://boibook.io/?c=joyM9kHQLT","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":116,"attributes":{"name":"HEDGEHOG MARKETS","description":"Bet with $BONK on Hedgehog\'s p2p prediction markets","url":"https://p2p.hedgehog.markets/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":117,"attributes":{"name":"AURORY","description":"Play Aurory Tactics and earn bonk for every victory","url":"https://app.aurory.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":118,"attributes":{"name":"REMNANTS","description":"Add $BONKto P2E game Remnants\' loot table for interacting here","url":"https://twitter.com/remnantsnft/status/1609926292971085826","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":119,"attributes":{"name":"PHOTO FINISH","description":"Bet on NFT horse races with $BONK","url":"https://beta.photofinish.live/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":13,"attributes":{"name":"Exchange","sort":3,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":5,"attributes":{"name":"GOOSEFX","description":"Trade on Goose X\'s decentralized exchange and enter their top trader tournament to earn 565M $BONK","url":"https://goosefx.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.1}},{"id":57,"attributes":{"name":"BYBIT","description":"Buy $BONK on Bybit\'s centralized exchange","url":"https://www.bybit.com/en-US/trade/spot/BONK/USDT","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.5}},{"id":58,"attributes":{"name":"BITFOREX","description":"Buy $BONK on Bitforex\'s centralized exchange","url":"https://www.bitforex.com/en/spot/bonk_usdt","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":59,"attributes":{"name":"HUOBI","description":"Buy $BONK on Huobi\'s centralized exchange using this referral link, all rewards used to buy & burn bonk","url":"https://www.huobi.com/en-us/register/?backUrl=%2Fen-us%2F&invite_code=ywb87223","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.4}},{"id":60,"attributes":{"name":"MEXC","description":"Buy $BONK on MEXC\'s centralized exchange","url":"https://www.mexc.com/price/BONK?utm_source=mexc&utm_medium=pageannouncement&utm_campaign=pagepricebonk","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":61,"attributes":{"name":"BITRUE","description":"Buy $BONK on Bitrue\'s centralized exchange","url":"https://www.bitrue.com/trade/bonk_usdt","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":62,"attributes":{"name":"FFF TOKEN MARKET","description":"Buy & sell $BONK on the Famous Fed Token Market","url":"https://www.famousfoxes.com/tokenmarket","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":63,"attributes":{"name":"JUPITER EXCHANGE","description":"Swap for $BONK, all limit order fees burned","url":"https://jup.ag/swap/Bonk-USDC","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.3}},{"id":64,"attributes":{"name":"P2B","description":"Buy $BONK on P2B\'s centralized exchange","url":"https://p2pb2b.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":65,"attributes":{"name":"TIDEX","description":"Buy $BONK on Tidex\'s centralized exchange","url":"https://tidex.com/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":66,"attributes":{"name":"SUPEREX","description":"$BONK is now live on Super Exchange, subscribe for just  1USD and get a whopping 10 million $BONK per subscription!","url":"https://twitter.com/SuperExet/status/1660623639308533760?s=20","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.2}},{"id":67,"attributes":{"name":"COINSTORE","description":"Buy $BONK on Coinstore\'s centralized exchange","url":"https://www.coinstore.com/#/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":68,"attributes":{"name":"CYPHER PROTOCOL","description":"Trade $BONK on Cypher Protocols decentralized exchange","url":"https://cypher.trade/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":69,"attributes":{"name":"GATE.IO","description":"Buy $BONK on Gate.io\'s centralized exchange","url":"https://www.gate.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":70,"attributes":{"name":"MANGO MARKETS","description":"Trade $BONK on Mango Markets\u2019 Decentralized Exchange","url":"https://app.mango.markets/trade","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":71,"attributes":{"name":"BITGET","description":"Buy $BONK on Bitget\u2019s centralized exchange","url":"https://www.bitget.com/spot/BONKUSDT?type=spot","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":72,"attributes":{"name":"BKEX","description":"Buy $BONK on BKEX\u2019s centralized exchange","url":"https://www.bkex.com/en/trade/BONK_USDT","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":73,"attributes":{"name":"BTCEX","description":"Buy $BONK on BTCEX\u2019s centralized exchange","url":"https://www.btcex.com/spot/BONK-USDT-SPOT","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":74,"attributes":{"name":"COINEX","description":"Buy $BONK on CoinEx\u2019s centralized exchange","url":"https://www.coinex.com/swap/bonk-usdt","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":75,"attributes":{"name":"COINW","description":"Buy $BONK on CoinW\u2019s centralized exchange","url":"https://www.coinw.com/frontSpot/spottrade?symbol=1234","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":76,"attributes":{"name":"HOTCOIN","description":"Buy $BONK on Hotcoin Global\u2019s centralized exchange","url":"https://hotcoin.com/currencyExchangeTwo/bonk_usdt","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":77,"attributes":{"name":"LBANK","description":"Buy $BONK on LBank\u2019s centralized exchange","url":"https://www.lbank.com/en-US/trade/bonk_usdt/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":78,"attributes":{"name":"POLONIEX","description":"Buy $BONK on Poloniex\u2019s centralized exchange","url":"https://poloniex.com/trade/BONK_USDT/?type=spot","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":79,"attributes":{"name":"XT.COM","description":"Buy $BONK on XT.COMB\u2019s centralized exchange","url":"https://www.xt.com/en/trade/bonk_usdt","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":112,"attributes":{"name":"DEXLAB","description":"Trade $BONK on Dex Lab, our esteemed partner in $BONK\'s intial token generation","url":"https://www.dexlab.space/mintinglab/spl-token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":12,"attributes":{"name":"NFT","sort":5,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":11,"attributes":{"name":"BANDIT","description":"Mint NFTs across multiple chains using $BONK, powered by Bandit","url":"https://www.bonkcoin.com/nft","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.6}},{"id":13,"attributes":{"name":"EXCHANGE ART","description":"List art in $BONK","url":"https://exchange.art/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.1}},{"id":39,"attributes":{"name":"SOL INCINERATOR","description":"Earn $BONK when you burn rugged NFTs","url":"https://sol-incinerator.com/#/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.5}},{"id":40,"attributes":{"name":"ONSOL","description":"Get your own .bonk domain","url":"https://bonk.onsol.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.4}},{"id":41,"attributes":{"name":"RENTII","description":"Use $BONK to rent your favourite NFTs","url":"https://www.rentii.xyz/dashboard/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.3}},{"id":42,"attributes":{"name":"BONAFIDA","description":"Register SNS Domains in using $BONK","url":"https://twitter.com/bonfida/status/1650559561198338053","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":0.2}},{"id":88,"attributes":{"name":"HYPERSPACE","description":"Buy .Bonk domains on Hyperspace","url":"https://hyperspace.xyz/collection/bonkdomainname","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":89,"attributes":{"name":"WAGMIBIO","description":"Burn $BONK for your address then pay people in $BONK","url":"https://wagmi.bio/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":90,"attributes":{"name":"BONKBOARD","description":"Pay $BONK to contribute to this community grafiti board","url":"https://t.co/csPq6Wnkeh","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":91,"attributes":{"name":"SOLSEA","description":"Buy NFTs with $BONK","url":"https://solsea.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":92,"attributes":{"name":"OMNI","description":"Bonk PFP collection, all mint proceeds in $BONK to be burned","url":"https://twitter.com/OMNIcreative_/status/1611075163822653440","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":120,"attributes":{"name":"MAGIC EDEN","description":"$BONK airdrop for any wallet that\'s purchased an NFT on Magic Eden using cross mint","url":"https://twitter.com/crossmint/status/1611434690560331803","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":121,"attributes":{"name":"AKEO LABS","description":"Akeo NFT holders stake and earn $BONK","url":"https://stake.diamondvaults.io/vault/akeolabs","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":122,"attributes":{"name":"COLLECTOR.SH","description":"$BONK 1/1 community artist drop - 50% of mint proceeds burned","url":"https://collector.sh/mint","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":123,"attributes":{"name":"COMMUNI3","description":"Bid to earn mints/auctions using $BONK","url":"https://nft.communi3.io/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":124,"attributes":{"name":"FORMFUNCTION","description":"List art in $BONK","url":"https://formfunction.xyz/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":125,"attributes":{"name":"DANDIES","description":"Buy dandies nft and stake for $BONK, pay in $BONK to rename your nft, auction and raffle using bonk, pay $BONK to bulk send nfts,","url":"https://twitter.com/DandiesNFT/status/1615056173740265476?s=20&t=nJ0_kQ6JkNBGuBCMDJZyuw","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":126,"attributes":{"name":"CROSSMINT","description":"$BONK airdrop for any wallet that\'s purchased an nft on Magic eden using Crossmint","url":"https://twitter.com/crossmint/status/1611434690560331803","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":127,"attributes":{"name":"BUBBLEBURN","description":"Mint bubbleburn nfts, all $BONK proceeds to be burned","url":"https://www.mintbubble.xyz/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":128,"attributes":{"name":"ELIXIR","description":"420 bonk passes that entitle the holder to 1 free mint on the Elixir launchpad","url":"https://launch.elixirnft.io/mint/bonkpass/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}},{"id":15,"attributes":{"name":"Payment","sort":6,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","integrations":{"data":[{"id":43,"attributes":{"name":"SAGA","description":"Buy a Saga phone with $BONK (soon)","url":"https://twitter.com/solanamobile/status/1610523560581152768","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":2}},{"id":93,"attributes":{"name":"HEY WALLET","description":"Send $BONK over twitter using Hey Wallet","url":"https://www.bonkcoin.com/integrations","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":94,"attributes":{"name":"HELIOPAY","description":"Use Helio Pay to pay people with $BONK","url":"https://www.hel.io/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":95,"attributes":{"name":"STREAMFLOW","description":"Stream your payments using $BONK on Streamflow","url":"https://streamflow.finance/","active":true,"featured":true,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":96,"attributes":{"name":"COINKIT","description":"Tip $BONK on twitter, discord, telegram, whatsapp and twitch with Coinkit, the social wallet","url":"https://app.coinkit.de/login","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":3}},{"id":129,"attributes":{"name":"GM SHOP","description":"Buy sick $BONK merch","url":"https://gmshop.org/","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":130,"attributes":{"name":"COINABLE","description":"Buy with $BONK at Coinable web3 stores","url":"https://coinablepay.com/store/coinable","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":131,"attributes":{"name":"SOLANA SPACES","description":"Buy $BONK merch from Solana Spaces (soon)","url":"https://aten.app/solanaspaces","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":132,"attributes":{"name":"TOONISH","description":"Bonk toys purchasable in $BONK with allocations burnt and given away","url":"https://twitter.com/TimeThiefNFT/status/1611032901403004935","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}},{"id":133,"attributes":{"name":"BONKINUBOT","description":"Tip community members in $BONK on discord and soon twitter","url":"https://twitter.com/BonkInuBot/status/1610341969837916160","active":true,"featured":false,"createdAt":"2023-11-15T22:25:00.582Z","updatedAt":"2023-11-15T22:25:00.582Z","publishedAt":"2023-11-15T22:25:00.582Z","sort":4}}]}}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":8}}}'
        ),
        Sn = a.createContext({}),
        Nn = (e) => {
          let { children: t } = e;
          const [n, r] = (0, a.useState)(),
            [o, l] = (0, a.useState)(0);
          async function s() {
            let e = await (async function () {
              try {
                return (
                  await Je.get(
                    "https://content.bonk.team/api/categories?populate=integrations",
                    Ye
                  )
                ).data;
              } catch (e) {
                return;
              }
            })();
            e || (e = Tn),
              r(e.data.sort((e, t) => e.attributes.sort - t.attributes.sort));
          }
          return (
            (0, a.useEffect)(() => {
              s();
            }, []),
            (0, a.useEffect)(() => {
              n &&
                l(
                  n
                    .map(
                      (e) =>
                        e.attributes.integrations.data.filter(
                          (e) => !0 === e.attributes.active
                        ).length
                    )
                    .reduce((e, t) => e + t)
                );
            }, [n]),
            (0, i.jsx)(Sn.Provider, {
              value: { categories: n, integrationsCount: o },
              children: t,
            })
          );
        };
      const An = function () {
        var e, t;
        const n = Wt(),
          { categories: r, integrationsCount: o } = (0, a.useContext)(Sn),
          [l, s] = (0, a.useState)(!1);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex row items-center center gap-40 pb-5 pt-5 logo-container",
              children: [
                (0, i.jsxs)("div", {
                  children: [(0, i.jsx)("img", { src: xn, alt: "Logo" }), " "],
                }),
                (0, i.jsx)("div", {
                  className: "home-ic-title bonk-font-title",
                  children: (0, i.jsx)("span", { children: "عرب بونك" }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "flex column items-center",
              children: [
                (0, i.jsx)("div", {
                  className: "home-ic-subtitle bonk-font-title",
                  children: "عملة الكلب للشعب",
                }),
                (0, i.jsx)("div", {
                  className: "home-ic-description bonk-font-300",
                  children: "أول عملة حلال معتمدة للكلاب من سولانا",
                }),
                (0, i.jsxs)("div", {
                  className: "flex row gap-40 pt-5 stats-container",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex column items-center badge ",
                      children: [
                        (0, i.jsx)("div", {
                          className: "home-ic-subtitle bonk-font-title",
                          children: "649k+",
                        }),
                        (0, i.jsx)("div", {
                          className: "badge-title",
                          children: "HOLDERS",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex column items-center badge",
                      children: [
                        (0, i.jsx)("div", {
                          className: "home-ic-subtitle bonk-font-title",
                          children: o,
                        }),
                        (0, i.jsx)("div", {
                          className: "badge-title",
                          children: "INTEGRATIONS",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex column items-center badge",
                      children: [
                        (0, i.jsx)("div", {
                          className: "home-ic-subtitle bonk-font-title",
                          children: "10",
                        }),
                        (0, i.jsx)("div", {
                          className: "badge-title",
                          children: "CHAINS",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "home-mission-container",
              children: [
                (0, i.jsx)("div", {
                  className: "home-m-title bonk-font-title",
                  children: "our mission",
                }),
                (0, i.jsxs)("div", {
                  className: "home-m-description bonk-font-300",
                  children: [
                    "To become the #1 community coin in web3",
                    (0, i.jsx)("br", {}),
                    "We aim on achieving this through expanding our growing list of integrations across",
                    " ",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "home-m-button-grid",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "home-m-button-mc-container",
                      children: [
                        (0, i.jsx)("button", {
                          className: "home-m-button bonk-font-500",
                          onClick: () => {
                            s(!l);
                          },
                          children: (0, i.jsxs)("div", {
                            className: "home-m-button-expand-container",
                            children: [
                              (0, i.jsx)("div", {
                                className: "home-m-button-expand-image",
                              }),
                              "multi chain",
                            ],
                          }),
                        }),
                        l &&
                          (0, i.jsxs)("div", {
                            className: "home-m-expand-tab-container",
                            children: [
                              (0, i.jsx)(vn, {
                                className:
                                  "button expand-button bonk-font-400 mc-button no-text-decoration",
                                target: "_blank",
                                to: "https://www.portalbridge.com/#/transfer",
                                children: "wormhole",
                              }),
                              (0, i.jsx)(vn, {
                                className:
                                  "button expand-button bonk-font-400 mc-button no-text-decoration",
                                target: "_blank",
                                to: "https://buybonk.com/",
                                children: (0, i.jsx)("button", {
                                  className:
                                    "button expand-button bonk-font-400 mc-button no-text-decoration",
                                  children: "buybonk",
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, i.jsx)("button", {
                      className: "home-m-button bonk-font-500",
                      onClick: () => n("/integrations?category=DeFi"),
                      children: "defi",
                    }),
                    (0, i.jsx)("button", {
                      className: "home-m-button bonk-font-500",
                      onClick: () => n("/integrations?category=Gaming"),
                      children: "gaming",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "home-ubgb-container",
              children: [
                (0, i.jsxs)("div", {
                  className: "home-ub-container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "home-ub-container-title bonk-font-title",
                      children: "use bonk",
                    }),
                    (0, i.jsxs)("div", {
                      className: "home-ub-container-description bonk-font-400",
                      children: [
                        "BONK BOASTS ",
                        o,
                        " INTEGRATIONS across the following categories",
                      ],
                    }),
                    (0, i.jsx)("table", {
                      className: "home-ub-table",
                      children: (0, i.jsx)("tbody", {
                        children:
                          r &&
                          r.map((e) =>
                            (0, i.jsxs)(
                              "tr",
                              {
                                onClick: () =>
                                  n(
                                    "/integrations?category=".concat(
                                      e.attributes.name
                                    )
                                  ),
                                className: "cursor-pointer",
                                children: [
                                  (0, i.jsx)("td", {
                                    className: "home-ub-td bonk-font-400",
                                    children:
                                      e.attributes.integrations.data.filter(
                                        (e) => !0 === e.attributes.active
                                      ).length,
                                  }),
                                  (0, i.jsx)("td", {
                                    className:
                                      "home-ub-td align-right bonk-font-400",
                                    children: e.attributes.name,
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                      }),
                    }),
                    (0, i.jsx)("button", {
                      className:
                        "button-red expand-button bonk-font-500 ub-button",
                      onClick: () => n("/integrations"),
                      children: "read more",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "home-gb-container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "home-ub-container-title bonk-font-title",
                      children: "get bonk",
                    }),
                    (0, i.jsxs)("div", {
                      className: "home-ub-container-description bonk-font-400",
                      children: [
                        "bonk IS LISTED on over \xa0",
                        r &&
                          (null ===
                            (e = r.find(
                              (e) => "Exchange" === e.attributes.name
                            )) || void 0 === e
                            ? void 0
                            : e.attributes.integrations.data.filter(
                                (e) => !0 === e.attributes.active
                              ).length),
                        "\xa0 different dexs & CEXs, BUY BONK TODAY!",
                      ],
                    }),
                    (0, i.jsx)("table", {
                      className: "home-ub-table",
                      children: (0, i.jsxs)("tbody", {
                        children: [
                          r &&
                            (null ===
                              (t = r.find(
                                (e) => "Exchange" === e.attributes.name
                              )) || void 0 === t
                              ? void 0
                              : t.attributes.integrations.data
                                  .filter(
                                    (e) =>
                                      !0 === e.attributes.active &&
                                      !0 === e.attributes.featured
                                  )
                                  .sort(
                                    (e, t) =>
                                      e.attributes.sort - t.attributes.sort
                                  )
                                  .map((e) =>
                                    (0, i.jsx)(
                                      "tr",
                                      {
                                        className: "cursor-pointer",
                                        children: (0, i.jsx)("td", {
                                          className: "home-ub-td bonk-font-400",
                                          children: (0, i.jsx)(vn, {
                                            className:
                                              "no-text-decoration white uppercase",
                                            target: "_blank",
                                            to: e.attributes.url,
                                            children: e.attributes.name,
                                          }),
                                        }),
                                      },
                                      e.id
                                    )
                                  )),
                          (0, i.jsx)("tr", {
                            onClick: () => n("/integrations?category=Exchange"),
                            className: "cursor-pointer",
                            children: (0, i.jsx)("td", {
                              className: "home-ub-td bonk-font-400",
                              children: "AND MANY MORE",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      const En = function () {
        const [e, t] = (0, a.useState)(!1),
          [n, r] = (0, a.useState)("DeFi"),
          [o, l] = (0, a.useState)(),
          [s, u] = (0, a.useState)(),
          { categories: c } = (0, a.useContext)(Sn),
          d = $t(),
          f = new URLSearchParams(d.search).get("category");
        return (
          (0, a.useEffect)(() => {
            t(!0), r(f || "DeFi"), t(!1);
          }, [f]),
          (0, a.useEffect)(() => {
            var e, t;
            l(
              null === c ||
                void 0 === c ||
                null === (e = c.find((e) => e.attributes.name === n)) ||
                void 0 === e
                ? void 0
                : e.attributes.integrations.data
                    .sort((e, t) => e.attributes.sort - t.attributes.sort)
                    .filter(
                      (e) =>
                        !0 === e.attributes.featured &&
                        !0 === e.attributes.active
                    )
            ),
              u(
                null === c ||
                  void 0 === c ||
                  null === (t = c.find((e) => e.attributes.name === n)) ||
                  void 0 === t
                  ? void 0
                  : t.attributes.integrations.data
                      .sort((e, t) => e.attributes.sort - t.attributes.sort)
                      .filter(
                        (e) =>
                          !1 === e.attributes.featured &&
                          !0 === e.attributes.active
                      )
              );
          }, [n, c]),
          e
            ? (0, i.jsx)("div", {
                className: "lds-container",
                children: (0, i.jsxs)("div", {
                  className: "lds-ring",
                  children: [
                    (0, i.jsx)("div", {}),
                    (0, i.jsx)("div", {}),
                    (0, i.jsx)("div", {}),
                    (0, i.jsx)("div", {}),
                  ],
                }),
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {}),
                  (0, i.jsxs)("div", {
                    className: "main-container",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "itg-info-container",
                        children: [
                          (0, i.jsx)("div", {
                            className: "itg-c-title bonk-font-title",
                            children: "Integrations",
                          }),
                          (0, i.jsx)("div", {
                            className: "itg-c-description bonk-font-300",
                            children:
                              "With over 100 integrations and counting, Bonk has asserted its place as one of the premier community coins in web3. Use the filters below to check out how you can use your $BONK.",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "itg-i-c-usecase-container bonk-font-600",
                            children:
                              c &&
                              c.map((e) =>
                                (0, i.jsx)(
                                  "button",
                                  {
                                    onClick: () => r(e.attributes.name),
                                    className:
                                      n === e.attributes.name
                                        ? "itg-i-c-usecase-field2"
                                        : "itg-i-c-usecase-field",
                                    children: e.attributes.name,
                                  },
                                  e.id
                                )
                              ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "itg-fdi-container",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "itg-c-title bonk-font-title",
                            children: ["featured ", n, " integrations"],
                          }),
                          (0, i.jsx)("div", {
                            className: "itg-c-description bonk-font-300",
                            children:
                              "Below are some of our featured integrations for you to make the most out of your $BONK.",
                          }),
                          (0, i.jsx)("div", {
                            className: "itg-fdi-grid-container",
                            children:
                              o &&
                              o.map((e) =>
                                (0, i.jsxs)(
                                  "a",
                                  {
                                    href: e.attributes.url,
                                    target: "_blank",
                                    className:
                                      "no-text-decoration itg-fdi-grid-element",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "itg-fdi-grid-element-title bonk-font-600",
                                        children: e.attributes.name,
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "itg-fdi-grid-element-description bonk-font-300",
                                        children: e.attributes.description,
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "itg-adi-container",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "itg-c-title bonk-font-title",
                            children: ["additional ", n, " integrations"],
                          }),
                          (0, i.jsx)("div", {
                            className: "itg-c-description bonk-font-300",
                            children:
                              "In addition to those highlighted Bonk boasts more than 100 integration in categories ranging from analytics, payments, social and more! Check them all out below!",
                          }),
                          (0, i.jsx)("div", {
                            className: "itg-adi-grid-container",
                            children:
                              s &&
                              s.map((e) =>
                                (0, i.jsxs)(
                                  "div",
                                  {
                                    className: "itg-adi-grid-element",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "itg-adi-grid-element-title bonk-font-500",
                                        children: e.attributes.name,
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "itg-adi-grid-element-content",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "itg-adi-grid-element-content-description bonk-font-300",
                                            children: e.attributes.description,
                                          }),
                                          (0, i.jsx)("a", {
                                            href: e.attributes.url,
                                            target: "_blank",
                                            className:
                                              "itg-adi-grid-element-content-logo",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      const On = function () {
        return (
          (0, a.useEffect)(() => {
            const e = document,
              t = "script",
              n = e.createElement(t),
              r = e.getElementsByTagName(t)[0];
            (n.src = "https://sdk.bandit.network/sdk/index.js"),
              (n.type = "module"),
              n.addEventListener(
                "load",
                () => {
                  "function" === typeof window.renderStats
                    ? window.renderStats()
                    : console.error("renderStats function not found");
                },
                !1
              ),
              r.parentNode.insertBefore(n, r);
          }, []),
          (0, i.jsx)("div", {
            "data-access-key": "c8dac1e143fb4d21a501c853ab6ea923",
            id: "bad-stats",
          })
        );
      };
      const Cn = function () {
        const e = Wt(),
          [t, n] = (0, a.useState)(!1),
          [r, o] = (0, a.useState)(window.innerWidth <= 991),
          l = () => {
            n(!t);
          };
        return (
          (0, a.useEffect)(() => {
            const e = () => {
              o(window.innerWidth <= 991);
            };
            window.addEventListener("resize", e);
            const r = (e) => {
              t && !e.target.closest("#expand-button") && n(!1);
            };
            return (
              window.addEventListener("click", r),
              () => {
                window.removeEventListener("resize", e),
                  window.removeEventListener("click", r);
              }
            );
          }, []),
          (0, i.jsx)("div", {
            className: "header-main-container",
            children: r
              ? (0, i.jsx)("div", {
                  className: "mobile-view",
                  children: (0, i.jsxs)("div", {
                    className: "main-area-mobile",
                    children: [
                      (0, i.jsx)("div", {
                        className: "mobile-main-area-top-part",
                        children: (0, i.jsx)("button", {
                          className: "mobile-title-expand-button bonk-font-900",
                          onClick: l,
                          children: (0, i.jsxs)("div", {
                            className: "mobile-title-bar-button-container",
                            children: [
                              "BONK",
                              (0, i.jsx)("div", {
                                className: "".concat(
                                  t
                                    ? "mobile-expand-icon-circle reverse"
                                    : "mobile-expand-icon-circle"
                                ),
                                children: (0, i.jsx)("div", {
                                  className: "mobile-expand-icon",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                          className: "".concat(
                            t
                              ? "mobile-expand-container"
                              : "mobile-expand-container collapsed"
                          ),
                          children: [
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "/home",
                              children: "HOME",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "/integrations",
                              children: "INTEGRATIONS",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "/about",
                              children: "ABOUT",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "/bonkart",
                              children: "BONK ART",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://www.bonkswap.io/",
                              target: "_blank",
                              children: "BONKSWAP",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://www.bonkbot.io/",
                              target: "_blank",
                              children: "BONKBOT",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://www.portalbridge.com/#/transfer",
                              target: "_blank",
                              children: "WORMHOLE",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://buybonk.com/",
                              target: "_blank",
                              children: "BUYBONK",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://openbonk.io/",
                              target: "_blank",
                              children: "OPENBONK",
                            }),
                            (0, i.jsx)(vn, {
                              onClick: l,
                              className:
                                "expand-button-mobile bonk-font-400 no-text-decoration",
                              to: "https://www.bonkcoin.com/nft",
                              target: "_blank",
                              children: "NFT",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              : (0, i.jsx)("div", {
                  className: "normal-view",
                  children: (0, i.jsxs)("div", {
                    className: "main-area",
                    children: [
                      (0, i.jsx)("div", {
                        className: "left-container",
                        children: (0, i.jsx)("button", {
                          className: "button bonk-font-700",
                          onClick: () => e("/"),
                          children: "عرب بونك",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "right-container",
                        children: [
                          (0, i.jsx)("button", {
                            className: "button bonk-font-400",
                            onClick: () => e("/integrations"),
                            children: "INTEGRATIONS",
                          }),
                          (0, i.jsx)("button", {
                            className: "button bonk-font-400",
                            onClick: () => e("/about"),
                            children: "ABOUT",
                          }),
                          (0, i.jsx)("button", {
                            className: "button bonk-font-400",
                            onClick: () => e("/bonkart"),
                            children: "BONK ART",
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("button", {
                                id: "expand-button",
                                className: "button bonk-font-400",
                                onClick: l,
                                children: (0, i.jsxs)("div", {
                                  className: "button-image-container",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "button-arrow-image",
                                    }),
                                    "KEY PROJECTS",
                                  ],
                                }),
                              }),
                              t &&
                                (0, i.jsxs)("div", {
                                  className: "header-expand-container",
                                  children: [
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "https://www.bonkswap.io/",
                                      target: "_blank",
                                      children: "BONKSWAP",
                                    }),
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "https://www.bonkbot.io/",
                                      target: "_blank",
                                      children: "BONKBOT",
                                    }),
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "https://www.portalbridge.com/#/transfer",
                                      target: "_blank",
                                      children: "WORMHOLE",
                                    }),
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "https://buybonk.com/",
                                      target: "_blank",
                                      children: "BUYBONK",
                                    }),
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "https://openbonk.io/",
                                      target: "_blank",
                                      children: "OPENBONK",
                                    }),
                                    (0, i.jsx)(vn, {
                                      className:
                                        "button expand-field bonk-font-400 no-text-decoration",
                                      to: "/nft",
                                      children: "NFT",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          })
        );
      };
      const jn = function () {
          const [e, t] = (0, a.useState)(window.innerWidth <= 991);
          return (
            (0, a.useEffect)(() => {
              const e = () => {
                t(window.innerWidth <= 991);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  className: "flex row center gap-50 pt-4 mobile-footer",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://twitter.com/ArabBonk",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "twitter",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://medium.com/@bonk_inu",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "medium",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://discord.com/invite/qaQa6M6mN2",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "discord",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://t.me/Official_Bonk_Inu",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "telegram",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://www.instagram.com/official_bonk_inu",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "instagram",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://www.youtube.com/@bonk_inu",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "youtube",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "solscan",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://coinmarketcap.com/currencies/bonk1/",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "coinmarketcap",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://assets-global.website-files.com/63d9862f53dc8e65d16eb0e0/63de6fb910d0b94a933c4a2f_BONK-PAPER-040223.pdf",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "white paper",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("a", {
                        href: "https://bonkcoin.myshopify.com/collections/all",
                        target: "_blank",
                        className: "footer-button cursor-pointer",
                        children: "merch",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "flex row center gap-50 pt-4 mobile-footer footer-text",
                  children: "جميع الحقوق محفوظة © 2023 عرب بنك",
                }),
              ],
            })
          );
        },
        _n = () => {
          const [e, t] = (0, a.useState)(
            "true" !== localStorage.getItem("agreementAccepted")
          );
          (0, a.useEffect)(() => {
            const t = document.querySelector("body");
            return (
              t && e && (t.style.overflow = "auto"),
              () => {
                t && (t.style.overflow = "auto");
              }
            );
          }, [e]);
          return (0, i.jsx)("div", {
            children:
              e &&
              (0, i.jsx)("div", {
                className: "modal-background",
                children: (0, i.jsxs)("div", {
                  className: "modal-container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "modal-content",
                      children: (0, i.jsxs)("div", {
                        className: "modal-text bonk-font-500",
                        children: [
                          "AGREEMENT:",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          '"I HEREBY CONFIRM THAT BY ACCESSING THE WHITEPAPER AND OTHER INFORMATIONAL MATERIALS, I WILL BE DEEMED TO HAVE REVIEWED AND ACCEPTED CERTAIN TERMS THEREIN, INCLUDING CONFIRMATIONS THAT I AM NOT BASED IN A JURISDICTION WHERE SUCH ACCESS WOULD BE PROHIBITED OR RESTRICTED IN ANY MANNER".',
                        ],
                      }),
                    }),
                    (0, i.jsx)("button", {
                      onClick: () => {
                        t(!1),
                          localStorage.setItem("agreementAccepted", "true");
                      },
                      className: "agreement-button bonk-font-500",
                      children: "CONFIRM",
                    }),
                  ],
                }),
              }),
          });
        };
      function Bn() {
        const e = $t();
        return (
          (0, a.useEffect)(() => {
            window.scrollTo(0, 0);
          }, [e.pathname]),
          (0, i.jsx)(i.Fragment, {})
        );
      }
      const Pn = function () {
        return (0, i.jsx)(mn, {
          children: (0, i.jsxs)("div", {
            className: "App",
            children: [
              (0, i.jsx)(Bn, {}),
              (0, i.jsx)(Cn, {}),
              (0, i.jsx)(_n, {}),
              (0, i.jsx)("main", {
                children: (0, i.jsxs)(un, {
                  children: [
                    (0, i.jsx)(ln, { path: "/", element: (0, i.jsx)(An, {}) }),
                    (0, i.jsx)(ln, {
                      path: "/home",
                      element: (0, i.jsx)(An, {}),
                    }),
                    (0, i.jsx)(ln, {
                      path: "/integrations",
                      element: (0, i.jsx)(En, {}),
                    }),
                    (0, i.jsx)(ln, {
                      path: "/about",
                      element: (0, i.jsx)(l, {}),
                    }),
                    (0, i.jsx)(ln, {
                      path: "/bonkart",
                      element: (0, i.jsx)(kn, {}),
                    }),
                    (0, i.jsx)(ln, {
                      path: "/nft",
                      element: (0, i.jsx)(On, {}),
                    }),
                    (0, i.jsx)(ln, {
                      path: "*",
                      element: (0, i.jsx)(on, { to: "/" }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(jn, {}),
            ],
          }),
        });
      };
      var Rn = n(757);
      const Zn = t.createRoot(document.getElementById("root"));
      Rn.ZP.initialize("G-DXYS2ZHJKZ"),
        Zn.render(
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(Nn, { children: (0, i.jsx)(Pn, {}) }),
          })
        ),
        r();
    })();
})();
//# sourceMappingURL=main.17ab3e9a.js.map
