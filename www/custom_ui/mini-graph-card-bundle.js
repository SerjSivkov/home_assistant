function _templateObject19() {
    const a = _taggedTemplateLiteral(["\n          <div class='info__item'>\n            <span class='info__item__type'>", "</span>\n            <span class='info__item__value'>\n              ", "\n              ", "\n            </span>\n            <span class='info__item__time'>\n              ", "\n            </span>\n          </div>"]);
    return _templateObject19 = function() {
        return a
    }, a
}

function _templateObject18() {
    const a = _taggedTemplateLiteral(["\n      <div class='info flex'>\n        ", "\n      </div>"]);
    return _templateObject18 = function() {
        return a
    }, a
}

function _templateObject17() {
    const a = _taggedTemplateLiteral(["\n      <div class='graph__labels flex'>\n        <span class='label--max'>", "</span>\n        <span class='label--min'>", "</span>\n      </div>"]);
    return _templateObject17 = function() {
        return a
    }, a
}

function _templateObject16() {
    const a = _taggedTemplateLiteral(["\n      <svg width='100%' height='100%' viewBox='0 0 500 ", "'\n        @click=", ">\n        <g>\n          ", "\n          ", "\n        </g>\n        ", "\n      </svg>"]);
    return _templateObject16 = function() {
        return a
    }, a
}

function _templateObject15() {
    const a = _taggedTemplateLiteral(["\n          <circle\n            class='line--point' .id=", " .value=", " .entity=", "\n            cx=", " cy=", " r=", "\n            @mouseover=", "\n            @mouseout=", "\n          />"]);
    return _templateObject15 = function() {
        return a
    }, a
}

function _templateObject14() {
    const a = _taggedTemplateLiteral(["\n      <g class='line--points'\n        ?init=", "\n        anim=", "\n        style=\"animation-delay: ", "\"\n        fill=", "\n        stroke=", "\n        stroke-width=", ">\n        ", "\n      </g>"]);
    return _templateObject14 = function() {
        return a
    }, a
}

function _templateObject13() {
    const a = _taggedTemplateLiteral(["\n      <path\n        class='line'\n        .id=", " anim=", " ?init=", "\n        style=\"animation-delay: ", "\"\n        fill='none'\n        stroke-dasharray=", " stroke-dashoffset=", "\n        stroke=", "\n        stroke-width=", "\n        d=", "\n      />"]);
    return _templateObject13 = function() {
        return a
    }, a
}

function _templateObject12() {
    const a = _taggedTemplateLiteral(["\n      <path\n        class='line--fill'\n        .id=", " anim=", " ?init=", "\n        style=\"animation-delay: ", "\"\n        fill=", "\n        stroke=", "\n        stroke-width=", "\n        d=", "\n      />"]);
    return _templateObject12 = function() {
        return a
    }, a
}

function _templateObject11() {
    const a = _taggedTemplateLiteral(["\n        <div class='graph__legend__item' @click=", ">\n          <svg width='10' height='10'>\n            <rect width='10' height='10' fill=", " />\n          </svg>\n          <span class='ellipsis'>", "</span>\n        </div>\n      "]);
    return _templateObject11 = function() {
        return a
    }, a
}

function _templateObject10() {
    const a = _taggedTemplateLiteral(["\n      <div class='graph__legend'>\n      ", "\n      </div>"]);
    return _templateObject10 = function() {
        return a
    }, a
}

function _templateObject9() {
    const a = _taggedTemplateLiteral(["\n      <div class='graph'>\n        <div class='graph__container'>\n          ", "\n          <div class='graph__container__svg'>\n            ", "\n          </div>\n        </div>\n        ", "\n      </div>"]);
    return _templateObject9 = function() {
        return a
    }, a
}

function _templateObject8() {
    const a = _taggedTemplateLiteral(["\n      <div class='state__time'>\n        <span>", "</span> - <span>", "</span>\n      </div>"]);
    return _templateObject8 = function() {
        return a
    }, a
}

function _templateObject7() {
    const a = _taggedTemplateLiteral(["\n        <div class='state state--small'>\n          <span class='state__value ellipsis'>\n            ", "\n          </span>\n          <span class='state__uom ellipsis'>\n            ", "\n          </span>\n        </div>"]);
    return _templateObject7 = function() {
        return a
    }, a
}

function _templateObject6() {
    const a = _taggedTemplateLiteral(["\n        <div class='states flex' loc=", ">\n          <div class='state'>\n            <span class='state__value ellipsis'>\n              ", "\n            </span>\n            <span class='state__uom ellipsis'>\n              ", "\n            </span>\n            ", "\n          </div>\n          <div class='states--secondary'>", "</div>\n          ", "\n        </div>"]);
    return _templateObject6 = function() {
        return a
    }, a
}

function _templateObject5() {
    const a = _taggedTemplateLiteral(["\n      <div class='name flex'>\n        <span class='ellipsis'>", "</span>\n      </div>"]);
    return _templateObject5 = function() {
        return a
    }, a
}

function _templateObject4() {
    const a = _taggedTemplateLiteral(["\n      <div class='icon' loc=", ">\n        <ha-icon .icon=", "></ha-icon>\n      </div>"]);
    return _templateObject4 = function() {
        return a
    }, a
}

function _templateObject3() {
    const a = _taggedTemplateLiteral(["\n      <div class='header flex' loc=", ">\n        ", "\n        ", "\n      </div>"]);
    return _templateObject3 = function() {
        return a
    }, a
}

function _templateObject2() {
    const a = _taggedTemplateLiteral(["\n      ", "\n      <ha-card\n        class='flex'\n        ?group=", "\n        ?fill=", "\n        ?points=", "\n        ?labels=", "\n        ?more-info=", "\n        style='font-size: ", "px;'\n        @click=", ">\n        ", "\n        ", "\n        ", "\n        ", "\n      </ha-card>"]);
    return _templateObject2 = function() {
        return a
    }, a
}

function _objectSpread(a) {
    for (var b = 1; b < arguments.length; b++) {
        var c = null == arguments[b] ? {} : arguments[b],
            d = Object.keys(c);
        "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
            return Object.getOwnPropertyDescriptor(c, a).enumerable
        }))), d.forEach(function(b) {
            _defineProperty(a, b, c[b])
        })
    }
    return a
}

function _defineProperty(a, b, c) {
    return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[b] = c, a
}

function _templateObject() {
    const a = _taggedTemplateLiteral(["\n  <style is=\"custom-style\">\n    :host {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n    }\n    ha-card {\n      flex-direction: column;\n      flex: 1;\n      padding: 16px 0;\n      position: relative;\n      overflow: visible;\n    }\n    ha-card > div {\n      padding: 0px 16px 16px 16px;\n    }\n    ha-card > div:last-child {\n      padding-bottom: 0;\n    }\n    ha-card[points] .line--points,\n    ha-card[labels] .graph__labels {\n      opacity: 0;\n      transition: opacity .25s;\n      animation: none;\n    }\n    ha-card[points]:hover .line--points,\n    ha-card:hover .graph__labels {\n      opacity: 1;\n    }\n    ha-card[fill] {\n      padding-bottom: 0;\n    }\n    ha-card[fill] .graph {\n      padding: 0;\n      order: 10;\n    }\n    ha-card[fill] path {\n      stroke-linecap: initial;\n      stroke-linejoin: initial;\n    }\n    ha-card[fill] .graph__legend {\n      order: -1;\n      padding: 0 16px 8px 16px;\n    }\n    ha-card[fill] .info {\n      padding-bottom: 16px;\n    }\n    ha-card[group] {\n      box-shadow: none;\n      padding: 0;\n    }\n    ha-card[group] > div {\n      padding: 0;\n    }\n    ha-card[group] .graph__legend {\n      padding-left: 0;\n      padding-right: 0;\n    }\n    ha-card[more-info] {\n      cursor: pointer;\n    }\n    .flex {\n      display: flex;\n      display: -webkit-flex;\n      min-width: 0;\n    }\n    .header {\n      justify-content: space-between;\n    }\n    .header[loc=\"center\"] {\n      align-self: center;\n    }\n    .header[loc=\"left\"] {\n      align-self: flex-start;\n    }\n    .header[loc=\"right\"] {\n      align-self: flex-end;\n    }\n    .name {\n      align-items: center;\n      min-width: 0;\n      opacity: .8;\n    }\n    .name > span {\n      font-size: 1.2rem;\n      font-weight: 400;\n      max-height: 1.4rem;\n      opacity: .75;\n    }\n    .icon {\n      color: var(--paper-item-icon-color, #44739e);\n      display: inline-block;\n      flex: 0 0 24px;\n      text-align: center;\n      width: 24px;\n      margin-left: auto;\n    }\n    .icon[loc=\"left\"] {\n      order: -1;\n      margin-right: 8px;\n      margin-left: 0;\n    }\n    .icon[loc=\"state\"] {\n      align-self: center;\n    }\n    .states {\n      align-items: flex-start;\n      font-weight: 300;\n      justify-content: space-between;\n      flex-wrap: nowrap;\n    }\n    .states .icon {\n      align-self: center;\n      margin-left: 0;\n    }\n    .states[loc=\"center\"] {\n      justify-content: space-around;\n    }\n    .states[loc=\"right\"] > .state {\n      margin-left: auto;\n      order: 2;\n    }\n    .states[loc=\"right\"] > .icon {\n      margin-left: 0;\n    }\n    .states[loc=\"center\"] .states--secondary,\n    .states[loc=\"right\"] .states--secondary {\n      margin-left: 0;\n    }\n    .states--secondary {\n      display: flex;\n      font-size: 0.6em;\n      flex-flow: column;\n      flex-wrap: wrap;\n      margin-left: 1rem;\n      min-width: 0;\n    }\n    .states--secondary:empty {\n      display: none;\n    }\n    .state {\n      position: relative;\n      display: flex;\n      flex-wrap: wrap;\n      max-width: 100%;\n      min-width: 0;\n    }\n    .state--small {\n      margin-bottom: .6rem;\n      flex-wrap: nowrap;\n    }\n    .state__value {\n      display: inline-block;\n      font-size: 2.4em;\n      line-height: 1em;\n      margin-right: .25rem;\n    }\n    .state__uom {\n      align-self: flex-end;\n      display: inline-block;\n      font-size: 1.4em;\n      font-weight: 400;\n      line-height: 1.2em;\n      margin-top: .1em;\n      opacity: .6;\n      vertical-align: bottom;\n    }\n    .state--small .state__uom {\n      flex: 1;\n    }\n    .state__time {\n      font-size: .95rem;\n      font-weight: 500;\n      bottom: -1.1rem;\n      left: 0;\n      opacity: .75;\n      position: absolute;\n      white-space: nowrap;\n    }\n    .states[loc=\"right\"] .state__time {\n      left: initial;\n      right: 0;\n    }\n    .graph {\n      align-self: flex-end;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      margin-top: auto;\n      width: 100%;\n    }\n    .graph__container {\n      display: flex;\n      flex-direction: row;\n      position: relative;\n    }\n    .graph__container__svg {\n      cursor: default;\n      flex: 1;\n    }\n    svg {\n      overflow: hidden;\n    }\n    path {\n      stroke-linecap: round;\n      stroke-linejoin: round;\n    }\n    .line--fill[anim=\"false\"] {\n      animation: reveal .25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    }\n    .line--points[anim=\"false\"],\n    .line[anim=\"false\"] {\n      animation: pop .25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    }\n    .line--point {\n      cursor: pointer;\n      fill: var(--paper-card-background-color, white);\n      stroke: inherit;\n      stroke-width: inherit;\n      transition: fill .15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n    .line--point:hover {\n      fill: inherit;\n    }\n    path,\n    .line--points,\n    .line--fill {\n      opacity: 0;\n    }\n    .line--points[anim=\"true\"][init] {\n      animation: pop .5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    }\n    .line--fill[anim=\"true\"][init] {\n      animation: reveal .5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    }\n    .line[anim=\"true\"][init] {\n      animation: dash 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    }\n    .graph__labels {\n      align-items: flex-start;\n      flex-direction: column;\n      font-size: calc(.15em + 8.5px);\n      font-weight: 400;\n      justify-content: space-between;\n      margin-right: 10px;\n      padding: .6em;\n      position: absolute;\n      pointer-events: none;\n      top: 0; bottom: 0;\n      opacity: .75;\n    }\n    .graph__labels > span {\n      cursor: pointer;\n      background: var(--primary-background-color, white);\n      border-radius: 1em;\n      padding: .2em .6em;\n      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\n    }\n    .graph__legend {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-evenly;\n      padding-top: 16px;\n      flex-wrap: wrap;\n    }\n    .graph__legend__item {\n      cursor: pointer;\n      display: flex;\n      min-width: 0;\n      margin: .4em;\n      align-items: center\n    }\n    .graph__legend__item span {\n      opacity: .75;\n      margin-left: .4em;\n    }\n    .info {\n      justify-content: space-between;\n      align-items: middle;\n    }\n    .info__item {\n      display: flex;\n      flex-flow: column;\n      align-items: flex-end;\n      text-align: right;\n    }\n    .info__item:first-child {\n      align-items: flex-start;\n      text-align: left;\n    }\n    .info__item__type {\n      text-transform: capitalize;\n      font-weight: 500;\n      opacity: .9;\n    }\n    .info__item__time,\n    .info__item__value {\n      opacity: .75;\n    }\n    .ellipsis {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    @keyframes reveal {\n      0% { opacity: 0; }\n      100% { opacity: .15; }\n    }\n    @keyframes pop {\n      0% { opacity: 0; }\n      100% { opacity: 1; }\n    }\n    @keyframes dash {\n      0% {\n        opacity: 0;\n      }\n      25% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 1;\n        stroke-dashoffset: 0;\n      }\n    }\n  </style>"]);
    return _templateObject = function() {
        return a
    }, a
}

function _taggedTemplateLiteral(a, b) {
    return b || (b = a.slice(0)), Object.freeze(Object.defineProperties(a, {
        raw: {
            value: Object.freeze(b)
        }
    }))
}

function _slicedToArray(a, b) {
    return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(a, b) {
    var c = [],
        d = !0,
        e = !1,
        f = void 0;
    try {
        for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b)); d = !0);
    } catch (a) {
        e = !0, f = a
    } finally {
        try {
            d || null == h["return"] || h["return"]()
        } finally {
            if (e) throw f
        }
    }
    return c
}

function _arrayWithHoles(a) {
    if (Array.isArray(a)) return a
}! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b() : "function" == typeof define && define.amd ? define(b) : b()
}(0, function() {
    "use strict";
    var z = Number.isNaN,
        X = Math.max,
        aa = Math.min,
        ba = Math.abs,
        ca = Math.floor;

    function Q(b) {
        let c = N.get(b.type);
        void 0 === c && (c = new Map, N.set(b.type, c));
        let d = c.get(b.strings);
        return void 0 === d && (d = new a(b, b.getTemplateElement()), c.set(b.strings, d)), d
    }

    function E(b, d) {
        const c = b.element.content,
            e = b.parts,
            f = document.createTreeWalker(c, A, null, !1);
        let g = O(e),
            i = e[g],
            j = -1,
            k = 0;
        const m = [];
        for (let a = null; f.nextNode();) {
            j++;
            const b = f.currentNode;
            for (b.previousSibling === a && (a = null), d.has(b) && (m.push(b), null === a && (a = b)), null !== a && k++; void 0 !== i && i.index === j;) i.index = null === a ? i.index - k : -1, i = e[g = O(e, g)]
        }
        m.forEach(a => a.parentNode.removeChild(a))
    }
    const da = new WeakMap,
        ea = a => "function" == typeof a && da.has(a),
        fa = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
        ga = function(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
                d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null,
                f = b;
            for (; f !== c;) {
                const b = f.nextSibling;
                a.insertBefore(f, d), f = b
            }
        },
        ha = function(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
                d = b;
            for (; d !== c;) {
                const b = d.nextSibling;
                a.removeChild(d), d = b
            }
        },
        e = {},
        ia = "{{lit-".concat((Math.random() + "").slice(2), "}}"),
        o = "<!--".concat(ia, "-->"),
        ja = new RegExp("".concat(ia, "|").concat(o)),
        l = (() => {
            const a = document.createElement("div");
            return a.setAttribute("style", "{{bad value}}"), "{{bad value}}" !== a.getAttribute("style")
        })();
    class a {
        constructor(b, a) {
            this.parts = [], this.element = a;
            let f = -1,
                c = 0;
            const g = [],
                h = i => {
                    const e = i.content,
                        a = document.createTreeWalker(e, 133, null, !1);
                    for (let j, k; a.nextNode();) {
                        f++, j = k;
                        const i = k = a.currentNode;
                        if (1 === i.nodeType) {
                            if (i.hasAttributes()) {
                                const a = i.attributes;
                                let e = 0;
                                for (let b = 0; b < a.length; b++) 0 <= a[b].value.indexOf(ia) && e++;
                                for (; 0 < e--;) {
                                    const e = b.strings[c],
                                        g = d.exec(e)[2],
                                        h = l && "style" === g ? "style$" : /^[a-zA-Z-]*$/.test(g) ? g : g.toLowerCase(),
                                        j = i.getAttribute(h).split(ja);
                                    this.parts.push({
                                        type: "attribute",
                                        index: f,
                                        name: g,
                                        strings: j
                                    }), i.removeAttribute(h), c += j.length - 1
                                }
                            }
                            "TEMPLATE" === i.tagName && h(i)
                        } else if (3 === i.nodeType) {
                            const b = i.nodeValue;
                            if (0 > b.indexOf(ia)) continue;
                            const d = i.parentNode,
                                e = b.split(ja),
                                a = e.length - 1;
                            c += a;
                            for (let b = 0; b < a; b++) d.insertBefore("" === e[b] ? r() : document.createTextNode(e[b]), i), this.parts.push({
                                type: "node",
                                index: f++
                            });
                            d.insertBefore("" === e[a] ? r() : document.createTextNode(e[a]), i), g.push(i)
                        } else if (8 === i.nodeType)
                            if (i.nodeValue === ia) {
                                const a = i.parentNode,
                                    b = i.previousSibling;
                                null === b || b !== j || b.nodeType !== Node.TEXT_NODE ? a.insertBefore(r(), i) : f--, this.parts.push({
                                    type: "node",
                                    index: f++
                                }), g.push(i), null === i.nextSibling ? a.insertBefore(r(), i) : f--, k = j, c++
                            } else
                                for (let a = -1; - 1 !== (a = i.nodeValue.indexOf(ia, a + 1));) this.parts.push({
                                    type: "node",
                                    index: -1
                                })
                    }
                };
            h(a);
            for (const c of g) c.parentNode.removeChild(c)
        }
    }
    const c = a => -1 !== a.index,
        r = () => document.createComment(""),
        d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    class h {
        constructor(a, b, c) {
            this._parts = [], this.template = a, this.processor = b, this.options = c
        }
        update(a) {
            let b = 0;
            for (const c of this._parts) void 0 !== c && c.setValue(a[b]), b++;
            for (const b of this._parts) void 0 !== b && b.commit()
        }
        _clone() {
            const a = fa ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                b = this.template.parts;
            let d = 0,
                e = 0;
            const f = a => {
                const g = document.createTreeWalker(a, 133, null, !1);
                for (let h = g.nextNode(); d < b.length && null !== h;) {
                    const a = b[d];
                    if (!c(a)) this._parts.push(void 0), d++;
                    else if (e === a.index) {
                        if ("node" === a.type) {
                            const a = this.processor.handleTextExpression(this.options);
                            a.insertAfterNode(h), this._parts.push(a)
                        } else this._parts.push(...this.processor.handleAttributeExpressions(h, a.name, a.strings, this.options));
                        d++
                    } else e++, "TEMPLATE" === h.nodeName && f(h.content), h = g.nextNode()
                }
            };
            return f(a), fa && (document.adoptNode(a), customElements.upgrade(a)), a
        }
    }
    class m {
        constructor(a, b, c, d) {
            this.strings = a, this.values = b, this.type = c, this.processor = d
        }
        getHTML() {
            const a = this.strings.length - 1;
            let b = "",
                c = !0;
            for (let e = 0; e < a; e++) {
                const a = this.strings[e];
                b += a;
                const f = a.lastIndexOf(">");
                !(c = (-1 < f || c) && -1 === a.indexOf("<", f + 1)) && l && (b = b.replace(d, (a, b, c, d) => "style" === c ? "".concat(b, "style$").concat(d) : a)), b += c ? o : ia
            }
            return b += this.strings[a]
        }
        getTemplateElement() {
            const a = document.createElement("template");
            return a.innerHTML = this.getHTML(), a
        }
    }
    class f extends m {
        getHTML() {
            return "<svg>".concat(super.getHTML(), "</svg>")
        }
        getTemplateElement() {
            const a = super.getTemplateElement(),
                b = a.content,
                c = b.firstChild;
            return b.removeChild(c), ga(b, c.firstChild), a
        }
    }
    const g = a => null === a || "object" != typeof a && "function" != typeof a;
    class p {
        constructor(a, b, c) {
            this.dirty = !0, this.element = a, this.name = b, this.strings = c, this.parts = [];
            for (let d = 0; d < c.length - 1; d++) this.parts[d] = this._createPart()
        }
        _createPart() {
            return new i(this)
        }
        _getValue() {
            const a = this.strings,
                b = a.length - 1;
            let c = "";
            for (let d = 0; d < b; d++) {
                c += a[d];
                const b = this.parts[d];
                if (void 0 !== b) {
                    const a = b.value;
                    if (null != a && (Array.isArray(a) || "string" != typeof a && a[Symbol.iterator]))
                        for (const b of a) c += "string" == typeof b ? b : b + "";
                    else c += "string" == typeof a ? a : a + ""
                }
            }
            return c += a[b]
        }
        commit() {
            this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
        }
    }
    class i {
        constructor(a) {
            this.value = void 0, this.committer = a
        }
        setValue(a) {
            a === e || g(a) && a === this.value || (this.value = a, ea(a) || (this.committer.dirty = !0))
        }
        commit() {
            for (; ea(this.value);) {
                const a = this.value;
                this.value = e, a(this)
            }
            this.value !== e && this.committer.commit()
        }
    }
    class u {
        constructor(a) {
            this.value = void 0, this._pendingValue = void 0, this.options = a
        }
        appendInto(a) {
            this.startNode = a.appendChild(r()), this.endNode = a.appendChild(r())
        }
        insertAfterNode(a) {
            this.startNode = a, this.endNode = a.nextSibling
        }
        appendIntoPart(a) {
            a._insert(this.startNode = r()), a._insert(this.endNode = r())
        }
        insertAfterPart(a) {
            a._insert(this.startNode = r()), this.endNode = a.endNode, a.endNode = this.startNode
        }
        setValue(a) {
            this._pendingValue = a
        }
        commit() {
            for (; ea(this._pendingValue);) {
                const a = this._pendingValue;
                this._pendingValue = e, a(this)
            }
            const a = this._pendingValue;
            a !== e && (g(a) ? a !== this.value && this._commitText(a) : a instanceof m ? this._commitTemplateResult(a) : a instanceof Node ? this._commitNode(a) : Array.isArray(a) || a[Symbol.iterator] ? this._commitIterable(a) : void 0 === a.then ? this._commitText(a) : this._commitPromise(a))
        }
        _insert(a) {
            this.endNode.parentNode.insertBefore(a, this.endNode)
        }
        _commitNode(a) {
            this.value !== a && (this.clear(), this._insert(a), this.value = a)
        }
        _commitText(a) {
            const b = this.startNode.nextSibling;
            a = null == a ? "" : a, b === this.endNode.previousSibling && b.nodeType === Node.TEXT_NODE ? b.textContent = a : this._commitNode(document.createTextNode("string" == typeof a ? a : a + "")), this.value = a
        }
        _commitTemplateResult(a) {
            const b = this.options.templateFactory(a);
            if (this.value && this.value.template === b) this.value.update(a.values);
            else {
                const c = new h(b, a.processor, this.options),
                    d = c._clone();
                c.update(a.values), this._commitNode(d), this.value = c
            }
        }
        _commitIterable(a) {
            Array.isArray(this.value) || (this.value = [], this.clear());
            const b = this.value;
            let c, d = 0;
            for (const e of a) void 0 === (c = b[d]) && (c = new u(this.options), b.push(c), 0 == d ? c.appendIntoPart(this) : c.insertAfterPart(b[d - 1])), c.setValue(e), c.commit(), d++;
            d < b.length && (b.length = d, this.clear(c && c.endNode))
        }
        _commitPromise(a) {
            this.value = a, a.then(b => {
                this.value === a && (this.setValue(b), this.commit())
            })
        }
        clear() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.startNode;
            ha(this.startNode.parentNode, a.nextSibling, this.endNode)
        }
    }
    class v {
        constructor(a, b, c) {
            if (this.value = void 0, this._pendingValue = void 0, 2 !== c.length || "" !== c[0] || "" !== c[1]) throw new Error("Boolean attributes can only contain a single expression");
            this.element = a, this.name = b, this.strings = c
        }
        setValue(a) {
            this._pendingValue = a
        }
        commit() {
            for (; ea(this._pendingValue);) {
                const a = this._pendingValue;
                this._pendingValue = e, a(this)
            }
            if (this._pendingValue !== e) {
                const a = !!this._pendingValue;
                this.value !== a && (a ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)), this.value = a, this._pendingValue = e
            }
        }
    }
    class b extends p {
        constructor(a, b, c) {
            super(a, b, c), this.single = 2 === c.length && "" === c[0] && "" === c[1]
        }
        _createPart() {
            return new n(this)
        }
        _getValue() {
            return this.single ? this.parts[0].value : super._getValue()
        }
        commit() {
            this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
        }
    }
    class n extends i {}
    let s = !1;
    try {
        const a = {
            get capture() {
                return s = !0, !1
            }
        };
        window.addEventListener("test", a, a), window.removeEventListener("test", a, a)
    } catch (a) {}
    class w {
        constructor(a, b, c) {
            this.value = void 0, this._pendingValue = void 0, this.element = a, this.eventName = b, this.eventContext = c, this._boundHandleEvent = a => this.handleEvent(a)
        }
        setValue(a) {
            this._pendingValue = a
        }
        commit() {
            for (; ea(this._pendingValue);) {
                const a = this._pendingValue;
                this._pendingValue = e, a(this)
            }
            if (this._pendingValue !== e) {
                const a = this._pendingValue,
                    b = this.value,
                    c = null == a || null != b && (a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive);
                c && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options), this._options = x(a), null != a && (null == b || c) && this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options), this.value = a, this._pendingValue = e
            }
        }
        handleEvent(a) {
            "function" == typeof this.value ? this.value.call(this.eventContext || this.element, a) : this.value.handleEvent(a)
        }
    }
    const x = a => a && (s ? {
            capture: a.capture,
            passive: a.passive,
            once: a.once
        } : a.capture),
        y = new class {
            handleAttributeExpressions(a, c, d, e) {
                const f = c[0];
                return "." === f ? new b(a, c.slice(1), d).parts : "@" === f ? [new w(a, c.slice(1), e.eventContext)] : "?" === f ? [new v(a, c.slice(1), d)] : new p(a, c, d).parts
            }
            handleTextExpression(a) {
                return new u(a)
            }
        },
        N = new Map,
        C = new WeakMap,
        M = function(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return new m(a, c, "html", y)
        },
        k = function(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return new f(a, c, "svg", y)
        },
        A = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
        t = a => {
            let b = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? 0 : 1;
            for (const c = document.createTreeWalker(a, A, null, !1); c.nextNode();) b++;
            return b
        },
        O = function(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : -1;
            for (let d = b + 1; d < a.length; d++) {
                const b = a[d];
                if (c(b)) return d
            }
            return -1
        },
        L = (a, b) => "".concat(a, "--").concat(b);
    let F = !0;
    void 0 === window.ShadyCSS ? F = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), F = !1);
    const P = ["html", "svg"],
        T = new Set,
        j = (a, b, c) => {
            T.add(c);
            const d = a.querySelectorAll("style");
            if (0 !== d.length) {
                const f = document.createElement("style");
                for (let a = 0; a < d.length; a++) {
                    const b = d[a];
                    b.parentNode.removeChild(b), f.textContent += b.textContent
                }
                if ((a => {
                        P.forEach(b => {
                            const c = N.get(L(b, a));
                            void 0 !== c && c.forEach(a => {
                                const b = a.element.content,
                                    c = new Set;
                                Array.from(b.querySelectorAll("style")).forEach(a => {
                                    c.add(a)
                                }), E(a, c)
                            })
                        })
                    })(c), function(a, b) {
                        let c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        const d = a.element.content,
                            e = a.parts;
                        if (null == c) return void d.appendChild(b);
                        const f = document.createTreeWalker(d, A, null, !1);
                        for (let d = O(e), g = 0, h = -1; f.nextNode();)
                            for (h++, f.currentNode === c && (g = t(b), c.parentNode.insertBefore(b, c)); - 1 !== d && e[d].index === h;) {
                                if (0 < g) {
                                    for (; - 1 !== d;) e[d].index += g, d = O(e, d);
                                    return
                                }
                                d = O(e, d)
                            }
                    }(b, f, b.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(b.element, c), window.ShadyCSS.nativeShadow) {
                    const c = b.element.content.querySelector("style");
                    a.insertBefore(c.cloneNode(!0), a.firstChild)
                } else {
                    b.element.content.insertBefore(f, b.element.content.firstChild);
                    const a = new Set;
                    a.add(f), E(b, a)
                }
            }
        },
        H = a => null !== a,
        R = a => a ? "" : null,
        B = (a, b) => b !== a && (b == b || a == a),
        G = {
            attribute: !0,
            type: String,
            reflect: !1,
            hasChanged: B
        },
        D = new Promise(a => a(!0)),
        q = 1;
    class U extends HTMLElement {
        constructor() {
            super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = D, this._changedProperties = new Map, this._reflectingProperties = void 0, this.initialize()
        }
        static get observedAttributes() {
            this._finalize();
            const a = [];
            for (const c of this._classProperties) {
                var b = _slicedToArray(c, 2);
                const d = b[0],
                    e = b[1],
                    f = this._attributeNameForProperty(d, e);
                void 0 !== f && (this._attributeToPropertyMap.set(f, d), a.push(f))
            }
            return a
        }
        static createProperty(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : G;
            if (!this.hasOwnProperty("_classProperties")) {
                this._classProperties = new Map;
                const a = Object.getPrototypeOf(this)._classProperties;
                void 0 !== a && a.forEach((a, b) => this._classProperties.set(b, a))
            }
            if (this._classProperties.set(a, b), this.prototype.hasOwnProperty(a)) return;
            const c = "symbol" == typeof a ? Symbol() : "__".concat(a);
            Object.defineProperty(this.prototype, a, {
                get() {
                    return this[c]
                },
                set(d) {
                    const e = this[a];
                    this[c] = d, this._requestPropertyUpdate(a, e, b)
                },
                configurable: !0,
                enumerable: !0
            })
        }
        static _finalize() {
            if (!(this.hasOwnProperty("_finalized") && this._finalized)) {
                const a = Object.getPrototypeOf(this);
                "function" == typeof a._finalize && a._finalize(), this._finalized = !0, this._attributeToPropertyMap = new Map;
                const b = this.properties,
                    c = [...Object.getOwnPropertyNames(b), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(b) : [])];
                for (const a of c) this.createProperty(a, b[a])
            }
        }
        static _attributeNameForProperty(a, b) {
            const c = void 0 !== b && b.attribute;
            return !1 === c ? void 0 : "string" == typeof c ? c : "string" == typeof a ? a.toLowerCase() : void 0
        }
        static _valueHasChanged(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : B;
            return c(a, b)
        }
        static _propertyValueFromAttribute(a, b) {
            const c = b && b.type;
            if (void 0 === c) return a;
            const d = c === Boolean ? H : "function" == typeof c ? c : c.fromAttribute;
            return d ? d(a) : a
        }
        static _propertyValueToAttribute(a, b) {
            return void 0 === b || void 0 === b.reflect ? void 0 : (b.type === Boolean ? R : b.type && b.type.toAttribute || String)(a)
        }
        initialize() {
            this.renderRoot = this.createRenderRoot(), this._saveInstanceProperties()
        }
        _saveInstanceProperties() {
            for (const b of this.constructor._classProperties) {
                var a = _slicedToArray(b, 1);
                const c = a[0];
                if (this.hasOwnProperty(c)) {
                    const a = this[c];
                    delete this[c], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(c, a)
                }
            }
        }
        _applyInstanceProperties() {
            for (const b of this._instanceProperties) {
                var a = _slicedToArray(b, 2);
                const c = a[0],
                    d = a[1];
                this[c] = d
            }
            this._instanceProperties = void 0
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            this._updateState & q ? void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) : this.requestUpdate()
        }
        disconnectedCallback() {}
        attributeChangedCallback(a, b, c) {
            b !== c && this._attributeToProperty(a, c)
        }
        _propertyToAttribute(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : G;
            const d = this.constructor,
                f = d._propertyValueToAttribute(b, c);
            if (void 0 !== f) {
                const b = d._attributeNameForProperty(a, c);
                void 0 !== b && (this._updateState |= 8, null === f ? this.removeAttribute(b) : this.setAttribute(b, f), this._updateState &= -9)
            }
        }
        _attributeToProperty(a, b) {
            if (!(this._updateState & 8)) {
                const c = this.constructor,
                    d = c._attributeToPropertyMap.get(a);
                if (void 0 !== d) {
                    const a = c._classProperties.get(d);
                    this[d] = c._propertyValueFromAttribute(b, a)
                }
            }
        }
        requestUpdate(a, b) {
            if (void 0 !== a) {
                const c = this.constructor._classProperties.get(a) || G;
                return this._requestPropertyUpdate(a, b, c)
            }
            return this._invalidate()
        }
        _requestPropertyUpdate(a, b, c) {
            return this.constructor._valueHasChanged(this[a], b, c.hasChanged) ? (this._changedProperties.has(a) || this._changedProperties.set(a, b), !0 === c.reflect && (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(a, c)), this._invalidate()) : this.updateComplete
        }
        async _invalidate() {
            if (!this._hasRequestedUpdate) {
                let a;
                this._updateState |= 4;
                const b = this._updatePromise;
                this._updatePromise = new Promise(b => a = b), await b, this._validate(), a(!this._hasRequestedUpdate)
            }
            return this.updateComplete
        }
        get _hasRequestedUpdate() {
            return this._updateState & 4
        }
        _validate() {
            if (this._instanceProperties && this._applyInstanceProperties(), this.shouldUpdate(this._changedProperties)) {
                const a = this._changedProperties;
                this.update(a), this._markUpdated(), this._updateState & q || (this._updateState |= 1, this.firstUpdated(a)), this.updated(a)
            } else this._markUpdated()
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState &= -5
        }
        get updateComplete() {
            return this._updatePromise
        }
        shouldUpdate() {
            return !0
        }
        update() {
            if (void 0 !== this._reflectingProperties && 0 < this._reflectingProperties.size) {
                for (const b of this._reflectingProperties) {
                    var a = _slicedToArray(b, 2);
                    const c = a[0],
                        d = a[1];
                    this._propertyToAttribute(c, this[c], d)
                }
                this._reflectingProperties = void 0
            }
        }
        updated() {}
        firstUpdated() {}
    }
    U._attributeToPropertyMap = new Map, U._finalized = !0, U._classProperties = new Map, U.properties = {};
    class V extends U {
        update(a) {
            super.update(a);
            const b = this.render();
            b instanceof m && this.constructor.render(b, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            })
        }
        render() {}
    }
    V.render = (b, c, d) => {
        const e = d.scopeName,
            f = C.has(c);
        if (((a, b, c) => {
                let d = C.get(b);
                void 0 === d && (ha(b, b.firstChild), C.set(b, d = new u(Object.assign({
                    templateFactory: Q
                }, c))), d.appendInto(b)), d.setValue(a), d.commit()
            })(b, c, Object.assign({
                templateFactory: (b => c => {
                    const d = L(c.type, b);
                    let e = N.get(d);
                    void 0 === e && (e = new Map, N.set(d, e));
                    let f = e.get(c.strings);
                    if (void 0 === f) {
                        const d = c.getTemplateElement();
                        F && window.ShadyCSS.prepareTemplateDom(d, b), f = new a(c, d), e.set(c.strings, f)
                    }
                    return f
                })(e)
            }, d)), c instanceof ShadowRoot && F && b instanceof m) {
            if (!T.has(e)) {
                const a = C.get(c).value;
                j(c, a.template, e)
            }
            f || window.ShadyCSS.styleElement(c.host)
        }
    };
    const W = 0,
        J = 1;
    class K {
        constructor(a, b, c) {
            let d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 24,
                e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 1;
            this.coords = [], this.width = a - 2 * c[W], this.height = b - 2 * c[J], this.margin = c, this._max = 0, this._min = 0, this.points = e, this.hours = d
        }
        get max() {
            return this._max
        }
        set max(a) {
            this._max = a
        }
        get min() {
            return this._min
        }
        set min(a) {
            this._min = a
        }
        update(a) {
            const b = new Date().getTime(),
                c = (a, c) => {
                    const d = (b - new Date(c.last_changed).getTime()) / 36e5 * this.points - this.hours * this.points,
                        e = ba(ca(d));
                    return a[e] || (a[e] = []), a[e].push(c), a
                };
            (a = a.reduce((a, b) => c(a, b), [])).length = Math.ceil(this.hours * this.points + 1), this.coords = this._calcPoints(a), this.min = aa(...this.coords.map(a => +a[2])), this.max = X(...this.coords.map(a => +a[2]))
        }
        _calcPoints(a) {
            const b = [];
            let c = this.width / (this.hours * this.points);
            c = isFinite(c) ? c : this.width;
            let d = a.filter(Boolean)[0],
                e = [0, this._average(d)];
            const f = (a, d) => {
                const f = c * d + this.margin[W];
                return a && (e = [0, this._average(a)]), b.push([f, ...e])
            };
            for (let b = 0; b < a.length; b++) f(a[b], b);
            return 1 === b.length && (b[1] = [this.width + this.margin[W], 0, b[0][2]]), b
        }
        _calcY(a) {
            const b = (this.max - this.min) / this.height || 1;
            return a.map(a => (a[J] = this.height - (a[2] - this.min) / b + 1.5 * this.margin[J], a))
        }
        getPoints() {
            let a, b, c = this._calcY(this.coords),
                d = c[0];
            return c.shift(), c.map((c, e) => {
                a = c, b = this._midPoint(d[W], d[J], a[W], a[J]);
                const f = (a[2] + d[2]) / 2;
                return d = a, [b[W], b[J], f, e]
            })
        }
        getPath() {
            const a = this._calcY(this.coords);
            let b, c, d = "",
                f = a.filter(Boolean)[0];
            return d += "M".concat(f[W], ",").concat(f[J]), a.forEach(a => {
                b = a, c = this._midPoint(f[W], f[J], b[W], b[J]), d += " ".concat(c[W], ",").concat(c[J]), d += " Q ".concat(b[W], ",").concat(b[J]), f = b
            }), d += " ".concat(b[W], ",").concat(b[J])
        }
        getFill(a) {
            const b = this.height + 2 * this.margin[J];
            return a += " L ".concat(this.width - 2 * this.margin[W], ", ").concat(b), a += " L ".concat(this.coords[0][W], ", ").concat(b, " z")
        }
        _midPoint(a, b, c, d) {
            return [(a - c) / 2 + c, (b - d) / 2 + d]
        }
        _average(a) {
            return a.reduce((a, b) => a + parseFloat(b.state), 0) / a.length
        }
    }
    const Y = M(_templateObject()),
        Z = 14,
        $ = {
            humidity: "hass:water-percent",
            illuminance: "hass:brightness-5",
            temperature: "hass:thermometer",
            battery: "hass:battery"
        },
        _ = ["var(--accent-color)", "#3498db", "#e74c3c", "#9b59b6", "#f1c40f", "#2ecc71"],
        ka = ["entity", "line", "length", "fill", "points", "tooltip", "abs"],
        la = {
            name: !0,
            icon: !0,
            state: !0,
            graph: !0,
            labels: "hover",
            extrema: !1,
            legend: !0,
            fill: !0,
            points: "hover"
        },
        ma = (a, b) => a.reduce((a, c) => +c[b] < +a[b] ? c : a, a[0]),
        na = (a, b) => a.reduce((a, c) => +c[b] > +a[b] ? c : a, a[0]),
        oa = (a, b) => a.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: !b
        });
    customElements.define("mini-graph-card", class extends V {
        constructor() {
            super(), this.bound = [0, 0], this.abs = [], this.length = [], this.entity = [], this.line = [], this.fill = [], this.points = [], this.tooltip = {}, this.updateQueue = []
        }
        set hass(a) {
            this._hass = a;
            let b = !1;
            this.config.entities.forEach((c, d) => {
                const e = a.states[c.entity];
                e && this.entity[d] !== e && (this.entity[d] = e, this.updateQueue.push(e.entity_id), b = !0)
            }), b && (this.entity = [...this.entity], this.updateData())
        }
        static get properties() {
            return {
                _hass: {},
                config: {},
                entity: [],
                Graph: [],
                line: [],
                shadow: [],
                length: Number,
                bound: [],
                abs: [],
                tooltip: {},
                updateQueue: []
            }
        }
        setConfig(a) {
            this.style = "display: flex; flex-direction: column;";
            const b = _objectSpread({
                animate: !1,
                hour24: !1,
                font_size: Z,
                height: 100,
                hours_to_show: 24,
                points_per_hour: 1,
                line_color: [..._],
                line_color_above: [],
                line_color_below: [],
                line_width: 5,
                more_info: !0,
                entities: a.entity
            }, a, {
                show: _objectSpread({}, la, a.show)
            });
            "string" == typeof b.entities && (b.entities = [{
                entity: b.entities
            }]), b.entities.forEach((a, c) => {
                "string" == typeof a && (b.entities[c] = {
                    entity: a
                })
            }), "string" == typeof a.line_color && (b.line_color = [a.line_color, ..._]), b.font_size = a.font_size / 100 * Z || Z, b.hours_to_show = ca(+b.hours_to_show) || 24, b.line_color_above.reverse(), b.line_color_below.reverse(), this.Graph || (this.Graph = [], b.entities.forEach((a, c) => {
                this.Graph[c] = new K(500, b.height, [b.show.fill ? 0 : b.line_width, b.line_width], b.hours_to_show, b.points_per_hour)
            })), this.config = b
        }
        shouldUpdate(a) {
            return ka.some(b => a.has(b))
        }
        updated(a) {
            this.config.animate && a.has("line") && (this.length.length < this.entity.length ? (this.shadowRoot.querySelectorAll("svg path.line").forEach(a => {
                this.length[a.id] = a.getTotalLength()
            }), this.length = [...this.length]) : this.length = Array(this.entity.length).fill("none"))
        }
        render() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a.config,
                c = a.entity;
            return M(_templateObject2(), Y, b.group, this.config.show.graph && this.config.show.fill, "hover" === this.config.show.points, "hover" === this.config.show.labels, b.more_info, b.font_size, a => this.handlePopup(a, this.entity[0]), this.renderHeader(), this.renderStates(), this.renderGraph(), this.renderInfo())
        }
        renderHeader() {
            const a = this.config,
                b = a.show,
                c = a.align_icon,
                d = a.align_header;
            return b.name || b.icon && "state" !== c ? M(_templateObject3(), d, this.renderName(), "state" === c ? "" : this.renderIcon()) : ""
        }
        renderIcon() {
            return this.config.show.icon ? M(_templateObject4(), this.config.align_icon, this.computeIcon(this.entity[0])) : ""
        }
        renderName() {
            if (this.config.show.name) {
                const a = void 0 === this.tooltip.entity ? this.config.name || this.computeName(0) : this.computeName(this.tooltip.entity);
                return M(_templateObject5(), a)
            }
        }
        renderStates() {
            if (this.config.show.state) return M(_templateObject6(), this.config.align_state, this.computeState(this.tooltip.value || this.entity[0].state), this.computeUom(this.entity[this.tooltip.entity || 0]), this.renderStateTime(), this.config.entities.map((a, b) => this.renderState(a, b)), "state" === this.config.align_icon ? this.renderIcon() : "")
        }
        renderState(a, b) {
            if (a.show_state && 0 !== b) return M(_templateObject7(), this.computeState(this.entity[b].state), this.computeUom(this.entity[b]))
        }
        renderStateTime() {
            if (void 0 !== this.tooltip.value) return M(_templateObject8(), this.tooltip.time[0], this.tooltip.time[1])
        }
        renderGraph() {
            return this.config.show.graph ? M(_templateObject9(), this.renderLabels(), this.renderSvg(), this.renderLegend()) : ""
        }
        renderLegend() {
            if (!(1 >= this.config.entities.length) && this.config.show.legend) return M(_templateObject10(), this.entity.map((a, b) => M(_templateObject11(), b => this.handlePopup(b, a), this.computeColor(a, b), this.computeName(b))))
        }
        renderSvgFill(a, b) {
            if (a) return k(_templateObject12(), b, this.config.animate, this.length[b], this.config.animate ? .5 * b + "s" : "0s", this.computeColor(this.entity[b], b), this.computeColor(this.entity[b], b), this.config.line_width, this.fill[b])
        }
        renderSvgLine(a, b) {
            if (a) return k(_templateObject13(), b, this.config.animate, this.length[b], this.config.animate ? .5 * b + "s" : "0s", this.length[b] || "none", this.length[b] || "none", this.computeColor(this.entity[b], b), this.config.line_width, this.line[b])
        }
        renderSvgPoints(a, b) {
            if (a) return k(_templateObject14(), this.length[b], this.config.animate && "hover" !== this.config.show.points, this.config.animate ? .5 * b + .5 + "s" : "0s", this.computeColor(this.entity[b], b), this.computeColor(this.entity[b], b), this.config.line_width / 2, a.map(a => k(_templateObject15(), a[3], a[2], b, a[0], a[1], this.config.line_width, a => this.openTooltip(a), () => this.tooltip = {})))
        }
        renderSvg() {
            return k(_templateObject16(), this.config.height, a => a.stopPropagation(), this.fill.map((a, b) => this.renderSvgFill(a, b)), this.line.map((a, b) => this.renderSvgLine(a, b)), this.points.map((a, b) => this.renderSvgPoints(a, b)))
        }
        openTooltip(b) {
            const c = this.config,
                d = c.points_per_hour,
                e = c.hours_to_show,
                f = .5 * (60 / d),
                g = ba(+b.target.id + 1 - e * d),
                h = new Date;
            h.setMinutes(h.getMinutes() - 2 * f * g - f);
            const i = oa(h, this.config.hour24);
            h.setMinutes(h.getMinutes() + 2 * f);
            const j = oa(h, this.config.hour24);
            this.tooltip = {
                value: +b.target.value,
                id: g,
                entity: b.target.entity,
                time: [i, j]
            }
        }
        renderLabels() {
            if (this.config.show.labels) return M(_templateObject17(), this.computeState(this.bound[1]), this.computeState(this.bound[0]))
        }
        renderInfo() {
            if (this.config.show.extrema) return M(_templateObject18(), this.abs.map(a => M(_templateObject19(), a.type, this.computeState(a.state), this.computeUom(a), oa(new Date(a.last_changed), this.config.hour24))))
        }
        handlePopup(a, b) {
            a.stopPropagation(), this.config.more_info && this.fire("hass-more-info", {
                entityId: b.entity_id
            })
        }
        fire(a, b, c) {
            c = c || {}, b = null == b ? {} : b;
            const d = new Event(a, {
                bubbles: void 0 === c.bubbles || c.bubbles,
                cancelable: !!c.cancelable,
                composed: void 0 === c.composed || c.composed
            });
            return d.detail = b, this.dispatchEvent(d), d
        }
        computeColor(a, b) {
            const c = +a.state || 0;
            for (const d of this.config.line_color_above)
                if (c > d.value) return d.color;
            for (const d of this.config.line_color_below)
                if (c < d.value) return d.color;
            return this.config.line_color[b] || this.config.line_color[0]
        }
        computeName(a) {
            return this.config.entities[a].name || this.entity[a].attributes.friendly_name
        }
        computeIcon(a) {
            return this.config.icon || a.attributes.icon || $[a.attributes.device_class] || $.temperature
        }
        computeUom(a) {
            return this.config.unit || a.attributes.unit_of_measurement || ""
        }
        computeState(a) {
            var b = Math.round;
            const c = this.config.decimals;
            if (null === c || isNaN(c) || z(a)) return b(100 * a) / 100;
            const d = Math.pow(10, c);
            return (b(a * d) / d).toFixed(c)
        }
        async updateData() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a.config;
            const c = new Date,
                d = new Date;
            d.setHours(c.getHours() - b.hours_to_show);
            const e = this.entity.map((a, b) => this.updateEntity(a, b, d, c));
            await Promise.all(e), this.updateQueue = [], this.bound = [aa(...this.Graph.map(a => a.min)) || this.bound[0], X(...this.Graph.map(a => a.max)) || this.bound[1]], b.show.graph && (this.entity.map((a, c) => {
                a && (this.Graph[c].min = this.bound[0], this.Graph[c].max = this.bound[1], this.line[c] = this.Graph[c].getPath(), b.show.fill && (this.fill[c] = this.Graph[c].getFill(this.line[c])), b.show.points && (this.points[c] = this.Graph[c].getPoints()))
            }), this.line = [...this.line])
        }
        async updateEntity(a, b, c, d) {
            if (!a || !this.updateQueue.includes(a.entity_id)) return;
            let e = await this.fetchRecent(a.entity_id, c, d);
            1 > (e = e[0].filter(a => !z(+a.state))).length || (a.entity_id === this.entity[0].entity_id && (this.abs = [_objectSpread({
                type: "min"
            }, ma(e, "state")), _objectSpread({
                type: "max"
            }, na(e, "state"))]), this.Graph[b].update(e))
        }
        async fetchRecent(a, b, c) {
            let d = "history/period";
            return b && (d += "/".concat(b.toISOString())), d += "?filter_entity_id=".concat(a), c && (d += "&end_time=".concat(c.toISOString())), await this._hass.callApi("GET", d)
        }
        getCardSize() {
            return 3
        }
    })
});