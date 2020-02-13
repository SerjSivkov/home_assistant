function _templateObject38() {
    const a = _taggedTemplateLiteral(["\n      <style>\n        ha-card {\n          cursor: default;\n          display: flex;\n          background: transparent;\n          overflow: hidden;\n          padding: 0;\n          position: relative;\n        }\n        ha-card[group] {\n          box-shadow: none;\n        }\n        ha-card[more-info] {\n          cursor: pointer;\n        }\n        ha-card[collapsed] {\n          overflow: visible;\n        }\n        ha-card:before {\n          content: '';\n          padding-top: 0px;\n          transition: padding-top .5s cubic-bezier(.21,.61,.35,1);\n          will-change: padding-top;\n        }\n        ha-card[initial] .entity__artwork,\n        ha-card[initial] .entity__icon {\n          animation-duration: .001s;\n        }\n        ha-card[initial]:before,\n        ha-card[initial] .player {\n          transition: none;\n        }\n        header {\n          display: none;\n        }\n        ha-card[has-title] header {\n          display: block;\n          font-size: var(--paper-font-headline_-_font-size);\n          font-weight: var(--paper-font-headline_-_font-weight);\n          letter-spacing: var(--paper-font-headline_-_letter-spacing);\n          line-height: var(--paper-font-headline_-_line-height);\n          padding: 24px 16px 16px;\n          position: relative;\n        }\n        ha-card[artwork='full-cover'][has-artwork]:before {\n          padding-top: 56%;\n        }\n        ha-card[artwork='full-cover'][has-artwork][content='music']:before,\n        ha-card[artwork='full-cover-fit'][has-artwork]:before {\n          padding-top: 100%;\n        }\n        .bg {\n          background: var(--paper-card-background-color, white);\n          position: absolute;\n          top: 0; right: 0; bottom: 0; left: 0;\n        }\n        ha-card[group] .bg {\n          background: transparent;\n        }\n        .cover,\n        .cover:before {\n          display: block;\n          opacity: 0;\n          position: absolute;\n          top: 0; right: 0; bottom: 0; left: 0;\n          transition: opacity .75s cubic-bezier(.21,.61,.35,1);\n          will-change: opacity;\n        }\n        .cover {\n          animation: fade-in .5s cubic-bezier(.21,.61,.35,1);\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center center;\n        }\n        .cover:before {\n          background: rgba(0,0,0,.5);\n          content: '';\n        }\n        ha-card[artwork*='full-cover'][has-artwork] .player {\n          background: rgba(0,0,0,.75);\n          background: linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.5) 50%, transparent 100%);\n        }\n        ha-card[has-artwork] .cover,\n        ha-card[has-artwork][artwork='cover'] .cover:before,\n        ha-card[bg] .cover {\n          opacity: .999;\n        }\n        ha-card[artwork='default'] .cover {\n          display: none;\n        }\n        ha-card[bg] .cover {\n          display: block;\n        }\n        ha-card[artwork='full-cover-fit'][has-artwork] .cover {\n          background-color: black;\n          background-size: contain;\n        }\n        .player {\n          align-self: flex-end;\n          box-sizing: border-box;\n          position: relative;\n          padding: 16px;\n          transition: padding .25s ease-out;\n          width: 100%;\n          will-change: padding;\n        }\n        ha-card[group] .player {\n          padding: 0;\n        }\n        ha-card[has-title] .player {\n          padding-top: 0;\n        }\n        ha-card[group][artwork*='cover'][has-artwork] .player {\n          padding: 8px 0;\n        }\n        ha-card[artwork*='cover'][has-artwork] paper-icon-button,\n        ha-card[artwork*='cover'][has-artwork] ha-icon,\n        ha-card[artwork*='cover'][has-artwork] .entity__info,\n        ha-card[artwork*='cover'][has-artwork] .entity__info__name,\n        ha-card[artwork*='cover'][has-artwork] paper-button,\n        ha-card[artwork*='cover'][has-artwork] header,\n        ha-card[artwork*='cover'][has-artwork] .select span,\n        ha-card[artwork*='cover'][has-artwork] .speaker-select > span,\n        ha-card[artwork*='cover'][has-artwork] paper-menu-button paper-button[focused] iron-icon {\n          color: #FFFFFF;\n          border-color: #FFFFFF;\n        }\n        ha-card[artwork*='cover'][has-artwork] paper-input {\n          --paper-input-container-focus-color: #FFFFFF;\n        }\n        ha-card[artwork*='cover'][has-artwork] paper-checkbox[disabled] {\n          --paper-checkbox-checkmark-color: rgba(0,0,0,.5);\n        }\n        ha-card[artwork*='cover'][has-artwork] paper-checkbox {\n          --paper-checkbox-unchecked-color: #FFFFFF;\n          --paper-checkbox-label-color: #FFFFFF;\n        }\n        ha-card[artwork*='cover'][has-artwork] .media-buttons paper-button,\n        ha-card[artwork*='cover'][has-artwork] .speaker-select paper-button {\n          background-color: rgba(255,255,255,.65);\n          color: black;\n        }\n        ha-card[artwork*='cover'][has-artwork] paper-input {\n          --paper-input-container-color: #FFFFFF;\n          --paper-input-container-input-color: #FFFFFF;\n        }\n        .flex {\n          display: flex;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          flex-direction: row;\n        }\n        .flex-wrap[wrap] {\n          flex-wrap: wrap;\n        }\n        .justify {\n          -webkit-justify-content: space-between;\n          justify-content: space-between;\n        }\n        .hidden {\n          display: none;\n        }\n        .entity {\n          position: relative;\n        }\n        .entity__info {\n          justify-content: center;\n          display: flex;\n          flex-direction: column;\n          margin-left: 8px;\n          position: relative;\n          overflow: hidden;\n          user-select: none;\n        }\n        .rows {\n          margin-left: 56px;\n          position: relative;\n        }\n        .rows > *:nth-child(2) {\n          margin-top: 0px;\n        }\n        .entity__info[short] {\n          max-height: 40px;\n          overflow: hidden;\n        }\n        .entity__icon {\n          color: var(--paper-item-icon-color, #44739e);\n        }\n        .entity__artwork, .entity__icon {\n          animation: fade-in .25s ease-out;\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          border-radius: 100%;\n          height: 40px;\n          line-height: 40px;\n          margin-right: 8px;\n          min-width: 40px;\n          position: relative;\n          text-align: center;\n          width: 40px;\n          will-change: border-color;\n          transition: border-color .25s ease-out;\n        }\n        .entity__artwork[border] {\n          border: 2px solid var(--primary-text-color);\n          box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          -webkit-box-sizing: border-box;\n        }\n        .entity__artwork[state='playing'] {\n          border-color: var(--accent-color);\n        }\n        .entity__info__name,\n        .entity__info[short] .entity__info__media,\n        .source-menu__source,\n        .media-dropdown__label,\n        .label {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        .entity__info__name {\n          line-height: 20px;\n        }\n        .entity__control-row--top {\n          line-height: 40px;\n        }\n        .entity[inactive] .entity__info__media,\n        .entity__info__name,\n        paper-icon-button,\n        paper-button,\n        .select span {\n          color: var(--primary-text-color);\n          position: relative;\n        }\n        .entity__info__media {\n          color: var(--secondary-text-color);\n          max-height: 6em;\n          word-break: break-word;\n        }\n        .attr__app_name {\n          display: none;\n        }\n        .attr__app_name:first-child {\n          display: inline-block;\n        }\n        .entity[inactive] .entity__info__media {\n          opacity: .5;\n        }\n        .entity[inactive] .entity__info__media {\n          max-width: 200px;\n        }\n        .entity__info__media[scroll] > span {\n          visibility: hidden;\n        }\n        .entity__info__media[scroll] > div {\n          animation: move linear infinite;\n        }\n        .entity__info__media[scroll] .marquee {\n          animation: slide linear infinite;\n        }\n        .entity__info__media[scroll] .marquee,\n        .entity__info__media[scroll] > div {\n          animation-duration: inherit;\n          visibility: visible;\n        }\n        .entity__info__media[scroll] {\n          animation-duration: 10s;\n          text-overflow: clip !important;\n          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n        }\n        .marquee {\n          visibility: hidden;\n          position: absolute;\n          white-space: nowrap;\n        }\n        ha-card[artwork*='cover'][has-artwork] .entity__info__media,\n        paper-icon-button[color] {\n          color: var(--accent-color) !important;\n        }\n        paper-icon-button {\n          transition: color .25s ease-in-out;\n          will-change: color;\n        }\n        .entity__info__media span:before {\n          content: ' - ';\n        }\n        .entity__info__media span:first-of-type:before {\n          content: '';\n        }\n        .entity__info__media span:empty,\n        .source-menu span:empty {\n          display: none;\n        }\n        .tts {\n          align-items: center;\n          margin-top: 8px;\n        }\n        .tts__input {\n          cursor: text;\n          flex: 1;\n          margin-right: 8px;\n          --paper-input-container-input: {\n            font-size: 1em;\n          };\n        }\n        .tts paper-button {\n          margin: 0;\n          padding: .4em;\n        }\n        .media-dropdown {\n          box-sizing: border-box;\n          padding: 0;\n          width: 100%;\n          margin-top: 8px;\n        }\n        .media-dropdown__button {\n          border-bottom: 1px solid var(--primary-text-color);\n          border-radius: 0;\n          display: flex;\n          font-size: 1em;\n          justify-content: space-between;\n          margin: 0;\n          opacity: .75;\n          padding: 0 8px 0 0;\n          width: 100%;\n        }\n        .media-dropdown__label {\n          padding: .2em .2em .2em 0;\n          text-align: left;\n          text-transform: none;\n        }\n        .media-dropdown__icon {\n          height: 24px;\n          width: 24px;\n        }\n        .media-buttons {\n          box-sizing: border-box;\n          display: flex;\n          flex-wrap: wrap;\n          margin-top: 8px;\n          padding-top: 8px;\n        }\n        .media-buttons > paper-button {\n          background-color: rgba(255,255,255,.1);\n          border-radius: 0;\n          box-sizing: border-box;\n          margin: 8px 0 0 0;\n          min-width: 0;\n          padding: .2em 1em;\n          width: calc(50% - 4px);\n        }\n        .media-buttons > paper-button:nth-child(odd) {\n          margin-right: 8px;\n        }\n        .media-buttons > paper-button:nth-child(-n+2) {\n          margin-top: 0;\n        }\n        .media-buttons > paper-button:nth-last-child(1):nth-child(odd) {\n          margin: 8px 0 0 0;\n          width: 100%;\n        }\n        .select .vol-control {\n          max-width: 200px;\n        }\n        .entity__control-row--top,\n        .select {\n          justify-content: flex-end;\n          margin-right: 0;\n          margin-left: auto;\n          width: auto;\n          max-width: 100%;\n        }\n        .entity__control-row--top paper-slider {\n          height: 40px;\n          line-height: initial;\n        }\n        .control-row {\n          flex-wrap: wrap;\n          justify-content: center;\n        }\n        .control-row .vol-control {\n          margin-right: auto;\n        }\n        .vol-control {\n          flex: 1;\n          min-width: 140px;\n          max-height: 40px;\n        }\n        .speaker-select {\n          display: flex;\n          flex-direction: column;\n        }\n        .speaker-select > span {\n          font-weight: 500;\n          margin-top: 12px;\n          text-transform: uppercase;\n        }\n        .speaker-select paper-checkbox {\n          padding: 8px 0;\n        }\n        .speaker-select .buttons {\n          display: flex;\n          flex-dirction: row;\n        }\n        .speaker-select paper-button {\n          background-color: rgba(255,255,255,.1);\n          margin: 8px 8px 0 0;\n          min-width: 0;\n          padding: .5em 1em;\n          text-transform: uppercase;\n          text-align: center;\n          width: 50%;\n        }\n        .speaker-select paper-button:nth-child(even) {\n          margin: 8px 0 0 8px;\n        }\n        .speaker-select > paper-checkbox > span {\n          font-weight: 600;\n        }\n        paper-slider {\n          max-width: 400px;\n          min-width: 100px;\n          width: 100%;\n        }\n        paper-input {\n          opacity: .75;\n          --paper-input-container-color: var(--primary-text-color);\n          --paper-input-container-focus-color: var(--primary-text-color);\n          --paper-input-container: {\n            padding: 0;\n          };\n        }\n        .source-menu {\n          height: 40px;\n          line-height: 20px;\n          padding: 0;\n        }\n        paper-menu-button[focused] paper-button > iron-icon {\n          color: var(--accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button paper-button[focused] iron-icon {\n          color: var(--primary-text-color);\n          transform: rotate(0deg);\n        }\n        .source-menu__button {\n          height: 40px;\n          line-height: 20px;\n          margin: 0;\n          min-width: 0;\n          text-transform: initial;\n        }\n        .source-menu__source {\n          display: block;\n          max-width: 60px;\n          position: relative;\n          width: auto;\n        }\n        .source-menu__source[show=\"small\"] {\n          display: none;\n        }\n        .source-menu__source[show=\"full\"] {\n          max-width: none;\n        }\n        paper-progress {\n          left: 0; right: 0; bottom: 0;\n          height: var(--paper-progress-height, 4px);\n          position: absolute;\n          width: 100%;\n          --paper-progress-active-color: var(--accent-color);\n          --paper-progress-container-color: rgba(150,150,150,.25);\n          --paper-progress-transition-duration: 1s;\n          --paper-progress-transition-timing-function: linear;\n          --paper-progress-transition-delay: 0s;\n        }\n        ha-card[state='paused'] paper-progress {\n          --paper-progress-active-color: var(--disabled-text-color, rgba(150,150,150,.5));\n        }\n        .label {\n          margin: 0 8px;\n        }\n        .media-dropdown[focused] paper-button,\n        paper-icon-button[color][opaque],\n        paper-input[focused] {\n          opacity: 1;\n        }\n        .media-dropdown[focused] paper-button[focused] {\n          opacity: .75;\n        }\n        paper-icon-button[opaque],\n        .speaker-select paper-button[disabled] {\n          opacity: .5;\n        }\n        ha-card[hide-info] .entity__control-row--top,\n        ha-card[hide-info] .select {\n          justify-content: space-between;\n        }\n        ha-card[hide-info] .right {\n          justify-content: flex-end;\n          margin-left: auto;\n        }\n        ha-card[hide-info] .entity__control-row--top,\n        ha-card[hide-info] .select,\n        .entity__control-row--top,\n        .entity__control-row--top paper-slider,\n        .select {\n          flex: 1\n        }\n        ha-card[hide-info] paper-slider,\n        ha-card[hide-info] .vol-control {\n          width: 100%;\n          max-width: none;\n        }\n        ha-card[break] .rows,\n        ha-card[hide-info] .rows,\n        ha-card[hide-icon] .rows {\n          margin-left: 0;\n        }\n        ha-card[hide-info] .rows > *,\n        ha-card[hide-icon] .rows > *,\n        ha-card[break] .rows > * {\n          padding-left: 8px;\n          padding-right: 8px;\n        }\n        ha-card[hide-info] .rows > .control-row,\n        ha-card[hide-icon] .rows > .control-row,\n        ha-card[break] .rows > .control-row {\n          padding: 0;\n        }\n        ha-card[hide-info] .media-dropdown__button,\n        ha-card[hide-icon] .media-dropdown__button,\n        ha-card[break] .media-dropdown__button {\n          padding-right: 0;\n        }\n        .player div:empty,\n        ha-card[break] .source-menu__source,\n        ha-card[hide-info] .entity__info,\n        ha-card[hide-info] .entity__artwork,\n        ha-card[hide-info] .entity__icon,\n        .entity[inactive] .source-menu__source {\n          display: none;\n        }\n        @keyframes slide {\n          100% { transform: translateX(-100%); }\n        }\n        @keyframes move {\n          from { transform: translateX(100%); }\n          to { transform: translateX(0); }\n        }\n        @keyframes fade-in {\n          from { opacity: 0; }\n          to { opacity: 1; }\n        }\n      </style>"]);
    return _templateObject38 = function() {
        return a
    }, a
}

function _templateObject37() {
    const a = _taggedTemplateLiteral(["<iron-icon .icon=", "></iron-icon>"]);
    return _templateObject37 = function() {
        return a
    }, a
}

function _templateObject36() {
    const a = _taggedTemplateLiteral(["\n          <paper-button raised\n            @click='", "'>\n            <span class='media-dropdown__label'>", "</span>\n            ", "\n          </paper-button>"]);
    return _templateObject36 = function() {
        return a
    }, a
}

function _templateObject35() {
    const a = _taggedTemplateLiteral(["\n      <div class='media-buttons'>\n        ", "\n      </div>"]);
    return _templateObject35 = function() {
        return a
    }, a
}

function _templateObject34() {
    const a = _taggedTemplateLiteral(["<iron-icon .icon=", "></iron-icon>"]);
    return _templateObject34 = function() {
        return a
    }, a
}

function _templateObject33() {
    const a = _taggedTemplateLiteral(["\n            <paper-item value=", ">\n              ", "\n              ", "\n            </paper-item>"]);
    return _templateObject33 = function() {
        return a
    }, a
}

function _templateObject32() {
    const a = _taggedTemplateLiteral(["\n      <paper-menu-button class='media-dropdown'\n        noink no-animations horizontal-align vertical-align .noLabelFloat=", "\n        @click='", "'>\n        <paper-button class='media-dropdown__button' slot='dropdown-trigger'>\n          <span class='media-dropdown__label'>\n            ", "\n          </span>\n          <iron-icon class='media-dropdown__icon' .icon=", "></iron-icon>\n        </paper-button>\n        <paper-listbox slot=\"dropdown-content\" class=\"media-dropdown-trigger\"\n          @click='", "'>\n          ", "\n        </paper-listbox>\n      </paper-menu-button>"]);
    return _templateObject32 = function() {
        return a
    }, a
}

function _templateObject31() {
    const a = _taggedTemplateLiteral(["\n      <div class='tts flex justify'>\n        <paper-input class='tts__input' no-label-float\n          placeholder=", "...\n          @click='", "'>\n        </paper-input>\n        <div>\n          <paper-button @click='", "'>\n            SEND\n          </paper-button>\n        </div>\n      </div>"]);
    return _templateObject31 = function() {
        return a
    }, a
}

function _templateObject30() {
    const a = _taggedTemplateLiteral(["\n      <div class='flex'>\n        ", "\n        ", "\n        ", "\n      </div>"]);
    return _templateObject30 = function() {
        return a
    }, a
}

function _templateObject29() {
    const a = _taggedTemplateLiteral(["\n      <div class='vol-control flex'>\n        <div>\n          ", "\n        </div>\n        <paper-slider ?disabled=", "\n          @change='", "'\n          @click='", "'\n          min='0' max=", " value=", "\n          ignore-bar-touch pin>\n        </paper-slider>\n      </div>"]);
    return _templateObject29 = function() {
        return a
    }, a
}

function _templateObject28() {
    const a = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      ", ""]);
    return _templateObject28 = function() {
        return a
    }, a
}

function _templateObject27() {
    const a = _taggedTemplateLiteral(["\n      ", "\n      <div class='flex'>\n        ", "\n        ", "\n      </div>"]);
    return _templateObject27 = function() {
        return a
    }, a
}

function _templateObject26() {
    const a = _taggedTemplateLiteral(["<paper-item value=", ">", "</paper-item>"]);
    return _templateObject26 = function() {
        return a
    }, a
}

function _templateObject25() {
    const a = _taggedTemplateLiteral(["\n      <paper-menu-button class='source-menu' slot='dropdown-trigger'\n        .horizontalAlign=", " .verticalAlign=", "\n        .verticalOffset=", " .noAnimations=", "\n        @click='", "'>\n        <paper-button class='source-menu__button' slot='dropdown-trigger'>\n          <span class='source-menu__source' show=", ">\n            ", "\n          </span>\n          <iron-icon .icon=", "></iron-icon>\n        </paper-button>\n        <paper-listbox slot='dropdown-content' selected=", "\n          @click='", "'>\n          ", "\n        </paper-listbox>\n      </paper-menu-button>"]);
    return _templateObject25 = function() {
        return a
    }, a
}

function _templateObject24() {
    const a = _taggedTemplateLiteral(["<span>(master)</span>"]);
    return _templateObject24 = function() {
        return a
    }, a
}

function _templateObject23() {
    const a = _taggedTemplateLiteral(["\n      <paper-checkbox\n        ?checked=", "\n        ?disabled=", "\n        @click='", "'>\n        ", "\n        ", "\n      </paper-checkbox>"]);
    return _templateObject23 = function() {
        return a
    }, a
}

function _templateObject22() {
    const a = _taggedTemplateLiteral(["Leave"]);
    return _templateObject22 = function() {
        return a
    }, a
}

function _templateObject21() {
    const a = _taggedTemplateLiteral(["Ungroup"]);
    return _templateObject21 = function() {
        return a
    }, a
}

function _templateObject20() {
    const a = _taggedTemplateLiteral(["\n      <div class='speaker-select'>\n        <span>Group speakers</span>\n        ", "\n        <div class='buttons'>\n          <paper-button\n            raised\n            ?disabled=", "\n            @click='", "'>\n            ", "\n          </paper-button>\n          <paper-button\n            raised\n            ?disabled=", "\n            @click='", "'>\n            Group all\n          </paper-button>\n        </div>\n      </div>"]);
    return _templateObject20 = function() {
        return a
    }, a
}

function _templateObject19() {
    const a = _taggedTemplateLiteral(["\n      <paper-icon-button .icon=", "\n        ?opaque=", "\n        ?color=", "\n        @click='", "'>\n      </paper-icon-button>"]);
    return _templateObject19 = function() {
        return a
    }, a
}

function _templateObject18() {
    const a = _taggedTemplateLiteral([""]);
    return _templateObject18 = function() {
        return a
    }, a
}

function _templateObject17() {
    const a = _taggedTemplateLiteral([""]);
    return _templateObject17 = function() {
        return a
    }, a
}

function _templateObject16() {
    const a = _taggedTemplateLiteral([""]);
    return _templateObject16 = function() {
        return a
    }, a
}

function _templateObject15() {
    const a = _taggedTemplateLiteral([""]);
    return _templateObject15 = function() {
        return a
    }, a
}

function _templateObject14() {
    const a = _taggedTemplateLiteral([""]);
    return _templateObject14 = function() {
        return a
    }, a
}

function _templateObject13() {
    const a = _taggedTemplateLiteral(["\n      <div class='select flex'>\n        ", "\n        <div class='flex right'>\n          ", "\n          ", "\n          ", "\n          ", "\n        <div>\n      </div>"]);
    return _templateObject13 = function() {
        return a
    }, a
}

function _templateObject12() {
    const a = _taggedTemplateLiteral(["\n      <span class='label'>\n        ", "\n      </span>"]);
    return _templateObject12 = function() {
        return a
    }, a
}

function _templateObject11() {
    const a = _taggedTemplateLiteral(["\n      <paper-progress class='progress transiting' value=", "\n        max=", ">\n      </paper-progress>"]);
    return _templateObject11 = function() {
        return a
    }, a
}

function _templateObject10() {
    const a = _taggedTemplateLiteral(["<span class=", ">", "</span>"]);
    return _templateObject10 = function() {
        return a
    }, a
}

function _templateObject9() {
    const a = _taggedTemplateLiteral(["<span class=", ">", "</span>"]);
    return _templateObject9 = function() {
        return a
    }, a
}

function _templateObject8() {
    const a = _taggedTemplateLiteral(["\n          <div>\n            <div class='marquee'>\n              ", "\n            </div>\n          </div>"]);
    return _templateObject8 = function() {
        return a
    }, a
}

function _templateObject7() {
    const a = _taggedTemplateLiteral(["\n      <div class='entity__info__media' ?scroll=", "\n        style='animation-duration: ", "s;'>\n        ", "\n        ", "\n      </div>"]);
    return _templateObject7 = function() {
        return a
    }, a
}

function _templateObject6() {
    const a = _taggedTemplateLiteral(["\n      <paper-icon-button .icon=", " ?color=", "\n        @click='", "'>\n      </paper-icon-button>"]);
    return _templateObject6 = function() {
        return a
    }, a
}

function _templateObject5() {
    const a = _taggedTemplateLiteral(["\n      <paper-icon-button class='power-button'\n        .icon=", "\n        @click='", "'\n        ?color=", ">\n      </paper-icon-button>"]);
    return _templateObject5 = function() {
        return a
    }, a
}

function _templateObject4() {
    const a = _taggedTemplateLiteral(["\n      <div class='entity__icon'>\n        <ha-icon icon=", "></ha-icon>\n      </div>"]);
    return _templateObject4 = function() {
        return a
    }, a
}

function _templateObject3() {
    const a = _taggedTemplateLiteral(["\n        <div class='entity__artwork' ?border=", "\n          style='background-image: ", ";'\n          state=", ">\n        </div>"]);
    return _templateObject3 = function() {
        return a
    }, a
}

function _templateObject2() {
    const a = _taggedTemplateLiteral(["<div class='cover' style='background-image: ", ";'></div>"]);
    return _templateObject2 = function() {
        return a
    }, a
}

function _templateObject() {
    const a = _taggedTemplateLiteral(["\n      ", "\n      <ha-card ?break=", " ?initial=", "\n        ?bg=", " ?group=", "\n        ?more-info=", " ?has-title=", "\n        artwork=", " ?has-artwork=", " state=", "\n        ?hide-icon=", " ?hide-info=", "\n        content=", " ?collapsed=", "\n        @click='", "'>\n        <div class='bg'>\n          ", "\n        </div>\n        <header>", "</header>\n        <div class='player'>\n          <div class='entity flex' ?inactive=", ">\n            ", "\n            <div class='entity__info' ?short=", ">\n              <div class='entity__info__name'>\n                ", "\n              </div>\n              ", "\n            </div>\n            <div class='entity__control-row--top flex'>\n              ", "\n            </div>\n          </div>\n          <div class='rows'>\n            <div class='control-row flex flex-wrap justify' ?wrap=", ">\n              ", "\n            </div>\n            ", "\n            ", "\n            ", "\n            ", "\n          </div>\n        </div>\n        ", "\n      </ha-card>"]);
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

    function H(a) {
        let b = y.get(a.type);
        void 0 === b && (b = new Map, y.set(a.type, b));
        let d = b.get(a.strings);
        return void 0 === d && (d = new c(a, a.getTemplateElement()), b.set(a.strings, d)), d
    }

    function S(b, d) {
        const e = b.element.content,
            f = b.parts,
            g = document.createTreeWalker(e, N, null, !1);
        let i = A(f),
            j = f[i],
            k = -1,
            m = 0;
        const n = [];
        for (let a = null; g.nextNode();) {
            k++;
            const b = g.currentNode;
            for (b.previousSibling === a && (a = null), d.has(b) && (n.push(b), null === a && (a = b)), null !== a && m++; void 0 !== j && j.index === k;) j.index = null === a ? j.index - m : -1, j = f[i = A(f, i)]
        }
        n.forEach(a => a.parentNode.removeChild(a))
    }

    function F(a) {
        return parseFloat(a) || 0
    }

    function X(a) {
        for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        return b.reduce(function(b, c) {
            return b + F(a["border-" + c + "-width"])
        }, 0)
    }

    function aa(b) {
        var d = Math.abs,
            f = Math.round,
            g = b.clientWidth,
            e = b.clientHeight;
        if (!g && !e) return ka;
        var i = ja(b).getComputedStyle(b),
            j = function(a) {
                for (var b = {}, c = 0, d = ["top", "right", "bottom", "left"]; c < d.length; c++) {
                    var e = d[c],
                        f = a["padding-" + e];
                    b[e] = F(f)
                }
                return b
            }(i),
            k = j.left + j.right,
            m = j.top + j.bottom,
            n = F(i.width),
            o = F(i.height);
        if ("border-box" === i.boxSizing && (f(n + k) !== g && (n -= X(i, "left", "right") + k), f(o + m) !== e && (o -= X(i, "top", "bottom") + m)), ! function(a) {
                return a === ja(a).document.documentElement
            }(b)) {
            var p = f(n + k) - g,
                l = f(o + m) - e;
            1 !== d(p) && (n -= p), 1 !== d(l) && (o -= l)
        }
        return ca(j.left, j.top, n, o)
    }

    function ba(a) {
        return J ? la(a) ? function(a) {
            var b = a.getBBox();
            return ca(0, 0, b.width, b.height)
        }(a) : aa(a) : ka
    }

    function ca(a, b, c, d) {
        return {
            x: a,
            y: b,
            width: c,
            height: d
        }
    }
    const da = new WeakMap,
        ea = a => "function" == typeof a && da.has(a),
        fa = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
        ga = function(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
                d = b;
            for (; d !== c;) {
                const b = d.nextSibling;
                a.removeChild(d), d = b
            }
        },
        e = {},
        ha = "{{lit-".concat((Math.random() + "").slice(2), "}}"),
        r = "<!--".concat(ha, "-->"),
        ia = new RegExp("".concat(ha, "|").concat(r)),
        a = (() => {
            const a = document.createElement("div");
            return a.setAttribute("style", "{{bad value}}"), "{{bad value}}" !== a.getAttribute("style")
        })();
    class c {
        constructor(b, c) {
            this.parts = [], this.element = c;
            let f = -1,
                g = 0;
            const j = [],
                k = c => {
                    const e = c.content,
                        i = document.createTreeWalker(e, 133, null, !1);
                    for (let l, m; i.nextNode();) {
                        f++, l = m;
                        const n = m = i.currentNode;
                        if (1 === n.nodeType) {
                            if (n.hasAttributes()) {
                                const c = n.attributes;
                                let e = 0;
                                for (let a = 0; a < c.length; a++) 0 <= c[a].value.indexOf(ha) && e++;
                                for (; 0 < e--;) {
                                    const c = b.strings[g],
                                        e = d.exec(c)[2],
                                        h = a && "style" === e ? "style$" : /^[a-zA-Z-]*$/.test(e) ? e : e.toLowerCase(),
                                        i = n.getAttribute(h).split(ia);
                                    this.parts.push({
                                        type: "attribute",
                                        index: f,
                                        name: e,
                                        strings: i
                                    }), n.removeAttribute(h), g += i.length - 1
                                }
                            }
                            "TEMPLATE" === n.tagName && k(n)
                        } else if (3 === n.nodeType) {
                            const a = n.nodeValue;
                            if (0 > a.indexOf(ha)) continue;
                            const b = n.parentNode,
                                d = a.split(ia),
                                c = d.length - 1;
                            g += c;
                            for (let a = 0; a < c; a++) b.insertBefore("" === d[a] ? h() : document.createTextNode(d[a]), n), this.parts.push({
                                type: "node",
                                index: f++
                            });
                            b.insertBefore("" === d[c] ? h() : document.createTextNode(d[c]), n), j.push(n)
                        } else if (8 === n.nodeType)
                            if (n.nodeValue === ha) {
                                const a = n.parentNode,
                                    b = n.previousSibling;
                                null === b || b !== l || b.nodeType !== Node.TEXT_NODE ? a.insertBefore(h(), n) : f--, this.parts.push({
                                    type: "node",
                                    index: f++
                                }), j.push(n), null === n.nextSibling ? a.insertBefore(h(), n) : f--, m = l, g++
                            } else
                                for (let a = -1; - 1 !== (a = n.nodeValue.indexOf(ha, a + 1));) this.parts.push({
                                    type: "node",
                                    index: -1
                                })
                    }
                };
            k(c);
            for (const a of j) a.parentNode.removeChild(a)
        }
    }
    const l = a => -1 !== a.index,
        h = () => document.createComment(""),
        d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    class o {
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
            let c = 0,
                d = 0;
            const e = a => {
                const f = document.createTreeWalker(a, 133, null, !1);
                for (let g = f.nextNode(); c < b.length && null !== g;) {
                    const a = b[c];
                    if (!l(a)) this._parts.push(void 0), c++;
                    else if (d === a.index) {
                        if ("node" === a.type) {
                            const a = this.processor.handleTextExpression(this.options);
                            a.insertAfterNode(g), this._parts.push(a)
                        } else this._parts.push(...this.processor.handleAttributeExpressions(g, a.name, a.strings, this.options));
                        c++
                    } else d++, "TEMPLATE" === g.nodeName && e(g.content), g = f.nextNode()
                }
            };
            return e(a), fa && (document.adoptNode(a), customElements.upgrade(a)), a
        }
    }
    class n {
        constructor(a, b, c, d) {
            this.strings = a, this.values = b, this.type = c, this.processor = d
        }
        getHTML() {
            const b = this.strings.length - 1;
            let c = "",
                f = !0;
            for (let e = 0; e < b; e++) {
                const b = this.strings[e];
                c += b;
                const g = b.lastIndexOf(">");
                !(f = (-1 < g || f) && -1 === b.indexOf("<", g + 1)) && a && (c = c.replace(d, (a, b, c, d) => "style" === c ? "".concat(b, "style$").concat(d) : a)), c += f ? r : ha
            }
            return c += this.strings[b]
        }
        getTemplateElement() {
            const a = document.createElement("template");
            return a.innerHTML = this.getHTML(), a
        }
    }
    const i = a => null === a || "object" != typeof a && "function" != typeof a;
    class f {
        constructor(a, b, c) {
            this.dirty = !0, this.element = a, this.name = b, this.strings = c, this.parts = [];
            for (let d = 0; d < c.length - 1; d++) this.parts[d] = this._createPart()
        }
        _createPart() {
            return new m(this)
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
    class m {
        constructor(a) {
            this.value = void 0, this.committer = a
        }
        setValue(a) {
            a === e || i(a) && a === this.value || (this.value = a, ea(a) || (this.committer.dirty = !0))
        }
        commit() {
            for (; ea(this.value);) {
                const a = this.value;
                this.value = e, a(this)
            }
            this.value !== e && this.committer.commit()
        }
    }
    class p {
        constructor(a) {
            this.value = void 0, this._pendingValue = void 0, this.options = a
        }
        appendInto(a) {
            this.startNode = a.appendChild(h()), this.endNode = a.appendChild(h())
        }
        insertAfterNode(a) {
            this.startNode = a, this.endNode = a.nextSibling
        }
        appendIntoPart(a) {
            a._insert(this.startNode = h()), a._insert(this.endNode = h())
        }
        insertAfterPart(a) {
            a._insert(this.startNode = h()), this.endNode = a.endNode, a.endNode = this.startNode
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
            a !== e && (i(a) ? a !== this.value && this._commitText(a) : a instanceof n ? this._commitTemplateResult(a) : a instanceof Node ? this._commitNode(a) : Array.isArray(a) || a[Symbol.iterator] ? this._commitIterable(a) : void 0 === a.then ? this._commitText(a) : this._commitPromise(a))
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
                const c = new o(b, a.processor, this.options),
                    d = c._clone();
                c.update(a.values), this._commitNode(d), this.value = c
            }
        }
        _commitIterable(a) {
            Array.isArray(this.value) || (this.value = [], this.clear());
            const b = this.value;
            let c, d = 0;
            for (const e of a) void 0 === (c = b[d]) && (c = new p(this.options), b.push(c), 0 == d ? c.appendIntoPart(this) : c.insertAfterPart(b[d - 1])), c.setValue(e), c.commit(), d++;
            d < b.length && (b.length = d, this.clear(c && c.endNode))
        }
        _commitPromise(a) {
            this.value = a, a.then(b => {
                this.value === a && (this.setValue(b), this.commit())
            })
        }
        clear() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.startNode;
            ga(this.startNode.parentNode, a.nextSibling, this.endNode)
        }
    }
    class g {
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
    class b extends f {
        constructor(a, b, c) {
            super(a, b, c), this.single = 2 === c.length && "" === c[0] && "" === c[1]
        }
        _createPart() {
            return new s(this)
        }
        _getValue() {
            return this.single ? this.parts[0].value : super._getValue()
        }
        commit() {
            this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
        }
    }
    class s extends m {}
    let u = !1;
    try {
        const a = {
            get capture() {
                return u = !0, !1
            }
        };
        window.addEventListener("test", a, a), window.removeEventListener("test", a, a)
    } catch (a) {}
    class v {
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
                c && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options), this._options = k(a), null != a && (null == b || c) && this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options), this.value = a, this._pendingValue = e
            }
        }
        handleEvent(a) {
            "function" == typeof this.value ? this.value.call(this.eventContext || this.element, a) : this.value.handleEvent(a)
        }
    }
    const k = a => a && (u ? {
            capture: a.capture,
            passive: a.passive,
            once: a.once
        } : a.capture),
        w = new class {
            handleAttributeExpressions(a, c, d, e) {
                const h = c[0];
                return "." === h ? new b(a, c.slice(1), d).parts : "@" === h ? [new v(a, c.slice(1), e.eventContext)] : "?" === h ? [new g(a, c.slice(1), d)] : new f(a, c, d).parts
            }
            handleTextExpression(a) {
                return new p(a)
            }
        },
        y = new Map,
        E = new WeakMap,
        O = function(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return new n(a, c, "html", w)
        },
        N = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
        t = a => {
            let b = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? 0 : 1;
            for (const c = document.createTreeWalker(a, N, null, !1); c.nextNode();) b++;
            return b
        },
        A = function(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : -1;
            for (let c = b + 1; c < a.length; c++) {
                const b = a[c];
                if (l(b)) return c
            }
            return -1
        },
        C = (a, b) => "".concat(a, "--").concat(b);
    let M = !0;
    void 0 === window.ShadyCSS ? M = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), M = !1);
    const P = a => b => {
            const d = C(b.type, a);
            let e = y.get(d);
            void 0 === e && (e = new Map, y.set(d, e));
            let f = e.get(b.strings);
            if (void 0 === f) {
                const d = b.getTemplateElement();
                M && window.ShadyCSS.prepareTemplateDom(d, a), f = new c(b, d), e.set(b.strings, f)
            }
            return f
        },
        B = ["html", "svg"],
        z = new Set,
        L = (a, b, c) => {
            z.add(c);
            const d = a.querySelectorAll("style");
            if (0 !== d.length) {
                const f = document.createElement("style");
                for (let a = 0; a < d.length; a++) {
                    const b = d[a];
                    b.parentNode.removeChild(b), f.textContent += b.textContent
                }
                if ((a => {
                        B.forEach(b => {
                            const c = y.get(C(b, a));
                            void 0 !== c && c.forEach(a => {
                                const b = a.element.content,
                                    c = new Set;
                                Array.from(b.querySelectorAll("style")).forEach(a => {
                                    c.add(a)
                                }), S(a, c)
                            })
                        })
                    })(c), function(a, b) {
                        let d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        const c = a.element.content,
                            e = a.parts;
                        if (null == d) return void c.appendChild(b);
                        const f = document.createTreeWalker(c, N, null, !1);
                        for (let g = A(e), h = 0, i = -1; f.nextNode();)
                            for (i++, f.currentNode === d && (h = t(b), d.parentNode.insertBefore(b, d)); - 1 !== g && e[g].index === i;) {
                                if (0 < h) {
                                    for (; - 1 !== g;) e[g].index += h, g = A(e, g);
                                    return
                                }
                                g = A(e, g)
                            }
                    }(b, f, b.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(b.element, c), window.ShadyCSS.nativeShadow) {
                    const c = b.element.content.querySelector("style");
                    a.insertBefore(c.cloneNode(!0), a.firstChild)
                } else {
                    b.element.content.insertBefore(f, b.element.content.firstChild);
                    const a = new Set;
                    a.add(f), S(b, a)
                }
            }
        },
        R = a => null !== a,
        j = a => a ? "" : null,
        T = (a, b) => b !== a && (b == b || a == a),
        q = {
            attribute: !0,
            type: String,
            reflect: !1,
            hasChanged: T
        },
        U = new Promise(a => a(!0)),
        G = 1;
    class D extends HTMLElement {
        constructor() {
            super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = U, this._changedProperties = new Map, this._reflectingProperties = void 0, this.initialize()
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
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : q;
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
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : T;
            return c(a, b)
        }
        static _propertyValueFromAttribute(a, b) {
            const c = b && b.type;
            if (void 0 === c) return a;
            const d = c === Boolean ? R : "function" == typeof c ? c : c.fromAttribute;
            return d ? d(a) : a
        }
        static _propertyValueToAttribute(a, b) {
            return void 0 === b || void 0 === b.reflect ? void 0 : (b.type === Boolean ? j : b.type && b.type.toAttribute || String)(a)
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
            this._updateState & G ? void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) : this.requestUpdate()
        }
        disconnectedCallback() {}
        attributeChangedCallback(a, b, c) {
            b !== c && this._attributeToProperty(a, c)
        }
        _propertyToAttribute(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : q;
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
                const c = this.constructor._classProperties.get(a) || q;
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
                this.update(a), this._markUpdated(), this._updateState & G || (this._updateState |= 1, this.firstUpdated(a)), this.updated(a)
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
    D._attributeToPropertyMap = new Map, D._finalized = !0, D._classProperties = new Map, D.properties = {};
    class I extends D {
        update(a) {
            super.update(a);
            const b = this.render();
            b instanceof n && this.constructor.render(b, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            })
        }
        render() {}
    }
    I.render = (a, b, c) => {
        const d = c.scopeName,
            e = E.has(b);
        if (((a, b, c) => {
                let d = E.get(b);
                void 0 === d && (ga(b, b.firstChild), E.set(b, d = new p(Object.assign({
                    templateFactory: H
                }, c))), d.appendInto(b)), d.setValue(a), d.commit()
            })(a, b, Object.assign({
                templateFactory: P(d)
            }, c)), b instanceof ShadowRoot && M && a instanceof n) {
            if (!z.has(d)) {
                const a = E.get(b).value;
                L(b, a.template, d)
            }
            e || window.ShadyCSS.styleElement(b.host)
        }
    };
    var W = function() {
            function a(a, b) {
                var c = -1;
                return a.some(function(a, d) {
                    return a[0] === b && (c = d, !0)
                }), c
            }
            return "undefined" == typeof Map ? function() {
                function b() {
                    this.__entries__ = []
                }
                return Object.defineProperty(b.prototype, "size", {
                    get: function a() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), b.prototype.get = function(b) {
                    var c = a(this.__entries__, b),
                        d = this.__entries__[c];
                    return d && d[1]
                }, b.prototype.set = function(b, c) {
                    var d = a(this.__entries__, b);
                    ~d ? this.__entries__[d][1] = c : this.__entries__.push([b, c])
                }, b.prototype.delete = function(b) {
                    var c = this.__entries__,
                        d = a(c, b);
                    ~d && c.splice(d, 1)
                }, b.prototype.has = function(b) {
                    return !!~a(this.__entries__, b)
                }, b.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, b.prototype.forEach = function(a, b) {
                    void 0 === b && (b = null);
                    for (var c, d = 0, f = this.__entries__; d < f.length; d++) c = f[d], a.call(b, c[1], c[0])
                }, b
            }() : Map
        }(),
        J = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        Y = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        K = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Y) : function(a) {
            return setTimeout(function() {
                return a(Date.now())
            }, 1e3 / 60)
        },
        Q = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Z = "undefined" != typeof MutationObserver,
        $ = function() {
            function a() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(b, c) {
                    function d() {
                        a && (a = !1, b()), g && f()
                    }

                    function e() {
                        K(d)
                    }

                    function f() {
                        var b = Date.now();
                        if (a) {
                            if (b - h < 2) return;
                            g = !0
                        } else a = !0, g = !1, setTimeout(e, c);
                        h = b
                    }
                    var a = !1,
                        g = !1,
                        h = 0;
                    return f
                }(this.refresh.bind(this), 20)
            }
            return a.prototype.addObserver = function(a) {
                ~this.observers_.indexOf(a) || this.observers_.push(a), this.connected_ || this.connect_()
            }, a.prototype.removeObserver = function(a) {
                var b = this.observers_,
                    c = b.indexOf(a);
                ~c && b.splice(c, 1), !b.length && this.connected_ && this.disconnect_()
            }, a.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, a.prototype.updateObservers_ = function() {
                var a = this.observers_.filter(function(a) {
                    return a.gatherActive(), a.hasActive()
                });
                return a.forEach(function(a) {
                    return a.broadcastActive()
                }), 0 < a.length
            }, a.prototype.connect_ = function() {
                J && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Z ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, a.prototype.disconnect_ = function() {
                J && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, a.prototype.onTransitionEnd_ = function(a) {
                var b = a.propertyName,
                    c = void 0 === b ? "" : b;
                Q.some(function(a) {
                    return !!~c.indexOf(a)
                }) && this.refresh()
            }, a.getInstance = function() {
                return this.instance_ || (this.instance_ = new a), this.instance_
            }, a.instance_ = null, a
        }(),
        _ = function(a, b) {
            for (var c, d = 0, e = Object.keys(b); d < e.length; d++) c = e[d], Object.defineProperty(a, c, {
                value: b[c],
                enumerable: !1,
                writable: !1,
                configurable: !0
            });
            return a
        },
        ja = function(a) {
            return a && a.ownerDocument && a.ownerDocument.defaultView || Y
        },
        ka = ca(0, 0, 0, 0),
        la = "undefined" == typeof SVGGraphicsElement ? function(a) {
            return a instanceof ja(a).SVGElement && "function" == typeof a.getBBox
        } : function(a) {
            return a instanceof ja(a).SVGGraphicsElement
        },
        ma = function() {
            function a(a) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ca(0, 0, 0, 0), this.target = a
            }
            return a.prototype.isActive = function() {
                var a = ba(this.target);
                return this.contentRect_ = a, a.width !== this.broadcastWidth || a.height !== this.broadcastHeight
            }, a.prototype.broadcastRect = function() {
                var a = this.contentRect_;
                return this.broadcastWidth = a.width, this.broadcastHeight = a.height, a
            }, a
        }(),
        na = function() {
            return function(b, d) {
                var e, f, g, h, j, k, m, p = (f = (e = d).x, g = e.y, h = e.width, j = e.height, k = "undefined" == typeof DOMRectReadOnly ? Object : DOMRectReadOnly, m = Object.create(k.prototype), _(m, {
                    x: f,
                    y: g,
                    width: h,
                    height: j,
                    top: g,
                    right: f + h,
                    bottom: j + g,
                    left: f
                }), m);
                _(this, {
                    target: b,
                    contentRect: p
                })
            }
        }(),
        oa = function() {
            function a(a, b, c) {
                if (this.activeObservations_ = [], this.observations_ = new W, "function" != typeof a) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = a, this.controller_ = b, this.callbackCtx_ = c
            }
            return a.prototype.observe = function(a) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(a instanceof ja(a).Element)) throw new TypeError("parameter 1 is not of type \"Element\".");
                    var b = this.observations_;
                    b.has(a) || (b.set(a, new ma(a)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, a.prototype.unobserve = function(a) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(a instanceof ja(a).Element)) throw new TypeError("parameter 1 is not of type \"Element\".");
                    var b = this.observations_;
                    b.has(a) && (b.delete(a), b.size || this.controller_.removeObserver(this))
                }
            }, a.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, a.prototype.gatherActive = function() {
                var a = this;
                this.clearActive(), this.observations_.forEach(function(b) {
                    b.isActive() && a.activeObservations_.push(b)
                })
            }, a.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var a = this.callbackCtx_,
                        b = this.activeObservations_.map(function(a) {
                            return new na(a.target, a.broadcastRect())
                        });
                    this.callback_.call(a, b, a), this.clearActive()
                }
            }, a.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, a.prototype.hasActive = function() {
                return 0 < this.activeObservations_.length
            }, a
        }(),
        pa = "undefined" == typeof WeakMap ? new W : new WeakMap,
        qa = function() {
            return function a(b) {
                if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var c = $.getInstance(),
                    d = new oa(b, c, this);
                pa.set(this, d)
            }
        }();
    ["observe", "unobserve", "disconnect"].forEach(function(a) {
        qa.prototype[a] = function() {
            var b;
            return (b = pa.get(this))[a].apply(b, arguments)
        }
    });
    var ra = void 0 === Y.ResizeObserver ? qa : Y.ResizeObserver;
    const sa = [{
            attr: "media_title"
        }, {
            attr: "media_artist"
        }, {
            attr: "media_series_title"
        }, {
            attr: "media_season",
            prefix: "S"
        }, {
            attr: "media_episode",
            prefix: "E"
        }, {
            attr: "app_name"
        }],
        ta = {
            DEFAULT: "mdi:cast",
            DROPDOWN: "mdi:chevron-down",
            GROUP: "mdi:google-circles-communities",
            MENU: "mdi:menu-down",
            MUTE: {
                true: "mdi:volume-off",
                false: "mdi:volume-high"
            },
            NEXT: "mdi:skip-next",
            PLAY: {
                true: "mdi:pause",
                false: "mdi:play"
            },
            POWER: "mdi:power",
            PREV: "mdi:skip-previous",
            SEND: "mdi:send",
            SHUFFLE: "mdi:shuffle",
            STOP: "mdi:stop",
            VOL_DOWN: "mdi:volume-minus",
            VOL_UP: "mdi:volume-plus"
        },
        ua = ["entity", "source", "position", "_overflow", "break", "thumbnail", "edit"];
    customElements.define("mini-media-player", class extends I {
        constructor() {
            super(), this._overflow = !1, this.idle = !1, this.break = !0, this.initial = !0, this.picture = !1, this.thumbnail = !1, this.edit = !1
        }
        static get properties() {
            return {
                _hass: Object,
                config: Object,
                entity: Object,
                source: String,
                position: Number,
                active: Boolean,
                idle: Boolean,
                _overflow: Boolean,
                break: Boolean,
                initial: Boolean,
                picture: String,
                thumbnail: String,
                edit: Boolean
            }
        }
        set hass(a) {
            const b = a.states[this.config.entity];
            this._hass = a, b && this.entity !== b && (this.entity = b)
        }
        set overflow(a) {
            a !== this._overflow && (this._overflow = a)
        }
        setConfig(a) {
            if (!a.entity || "media_player" !== a.entity.split(".")[0]) throw new Error("Specify an entity from within the media_player domain.");
            const b = _objectSpread({
                artwork: "default",
                max_volume: 100,
                more_info: !0,
                title: "",
                toggle_power: !0
            }, a);
            b.consider_idle_after = 60 * +b.consider_idle_after || !1, b.idle_view = b.idle_view || b.consider_idle_after || b.consider_pause_idle, b.max_volume = +b.max_volume || 100, b.collapse = b.hide_controls || b.hide_volume, b.short_info = b.short_info || b.scroll_info || b.collapse, this.config = b
        }
        shouldUpdate(a) {
            if (ua.some(b => a.has(b)) && this.entity) return this.active = this._isActive(), this.config.show_progress && this._checkProgress(), !0
        }
        firstUpdated() {
            new ra(a => {
                for (const b of a) window.requestAnimationFrame(() => {
                    this.config.scroll_info && this._computeOverflow(), this._resizeTimer || (this._computeRect(b), this._resizeTimer = setTimeout(() => {
                        this._resizeTimer = null, this._computeRect(this._resizeEntry)
                    }, 250)), this._resizeEntry = b
                })
            }).observe(this.shadowRoot.querySelector(".player")), setTimeout(() => this.initial = !1, 250)
        }
        updated() {
            this.config.scroll_info && this._computeOverflow()
        }
        render() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a._hass,
                c = a.config,
                d = a.entity;
            const e = this._computeArtwork();
            return O(_templateObject(), this._style(), this.break, this.initial, c.background, c.group, c.more_info, "" !== c.title, c.artwork, e, d.state, c.hide_icon, c.hide_info, this._computeContent(), c.collapse, a => this._handleMore(a), this._renderArtwork(e), c.title, !this.active, this._renderIcon(e), c.short_info || !this.active, this._computeName(), this._renderMediaInfo(), this._renderPowerStrip(), c.volume_stateless, !c.collapse && this.active ? this._renderControlRow() : "", c.media_buttons ? this._renderButtons() : "", c.media_list ? this._renderList() : "", c.show_tts ? this._renderTts() : "", this.edit ? this._renderGroupList() : "", c.show_progress && this._showProgress ? this._renderProgress() : "")
        }
        _computeContent() {
            return this.entity.attributes.media_content_type || "none"
        }
        _computeName() {
            return this.config.name || this.entity.attributes.friendly_name
        }
        _computeArtwork() {
            const a = this.entity.attributes.entity_picture,
                b = a && "" !== a && "none" !== this.config.artwork && this.active && !this.idle;
            return b && a !== this.picture && (this._fetchThumbnail(), this.picture = a), b && this.thumbnail
        }
        _computeIcon() {
            return this.config.icon ? this.config.icon : this.entity.attributes.icon || ta.DEFAULT
        }
        _computeOverflow() {
            const a = this.shadowRoot.querySelector(".marquee");
            if (a) {
                const b = a.clientWidth > a.parentNode.clientWidth;
                this.overflow = b && this.active && 7.5 + a.clientWidth / 50
            }
        }
        _computeRect(a) {
            const b = a.contentRect,
                c = b.left,
                d = b.width;
            this.break = 350 > d + 2 * c
        }
        _renderArtwork(a) {
            if (this.thumbnail || this.config.background) {
                const b = !this.config.background || a && "default" !== this.config.artwork ? this.thumbnail : "url(".concat(this.config.background, ")");
                return O(_templateObject2(), b)
            }
        }
        _renderIcon(a) {
            if (!this.config.hide_icon) return this.active && a && "default" === this.config.artwork ? O(_templateObject3(), this.config.artwork_border, this.thumbnail, this.entity.state) : O(_templateObject4(), this._computeIcon())
        }
        _renderPowerButton() {
            return O(_templateObject5(), ta.POWER, a => this._handlePower(a), this.config.power_color && (this.active || this.idle))
        }
        _renderButton(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
                d = !!(3 < arguments.length && arguments[3] !== void 0) && arguments[3];
            return O(_templateObject6(), a, d, a => this._callService(a, b, c))
        }
        _renderMediaInfo() {
            if (!this.config.hide_media_info) {
                const a = sa.map(a => _objectSpread({
                    text: this._getAttribute(a.attr),
                    prefix: ""
                }, a)).filter(a => a.text);
                return O(_templateObject7(), this._overflow, this._overflow, this.config.scroll_info ? O(_templateObject8(), a.map(a => O(_templateObject9(), "attr__" + a.attr, a.prefix + a.text))) : "", a.map(a => O(_templateObject10(), "attr__" + a.attr, a.prefix + a.text)))
            }
        }
        _renderProgress() {
            return O(_templateObject11(), this.position, this.entity.attributes.media_duration)
        }
        _renderLabel(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "Unknown";
            return O(_templateObject12(), this._getLabel(a, b))
        }
        _renderIdleStatus() {
            return this._isPaused() ? this._renderButton(ta.PLAY[this._isPlaying()], "media_play_pause") : this._renderLabel("state.media_player.idle", "Idle")
        }
        _renderShuffleButton() {
            const a = this.entity.attributes.shuffle || !1,
                b = {
                    shuffle: !this.entity.attributes.shuffle
                };
            return this._renderButton(ta.SHUFFLE, "shuffle_set", b, a)
        }
        _renderPowerStrip() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a.config;
            return "unavailable" == this.entity.state ? this._renderLabel("state.default.unavailable", "Unavailable") : O(_templateObject13(), this.active && b.collapse ? this._renderControlRow() : O(_templateObject14()), this.idle ? this._renderIdleStatus() : O(_templateObject15()), b.show_source ? this._renderSource() : O(_templateObject16()), b.sonos_grouping ? this._renderGroupButton() : O(_templateObject17()), b.hide_power ? O(_templateObject18()) : this._renderPowerButton())
        }
        _renderGroupButton() {
            const a = !this.entity.attributes.sonos_group || 1 >= this.entity.attributes.sonos_group.length;
            return O(_templateObject19(), ta.GROUP, a, this.edit, a => this._handleGroupButton(a))
        }
        _renderGroupList() {
            const a = this.config.sonos_grouping,
                b = this.entity.attributes.sonos_group || [],
                c = b[0] || this.config.entity,
                d = c === this.config.entity;
            return O(_templateObject20(), a.map(a => this._renderGroupListItem(a, b, c)), 2 > b.length, a => this._handleGroupItemChange(a, d ? b : this.config.entity, !1), d ? O(_templateObject21()) : O(_templateObject22()), !d, b => this._handleGroupItemChange(b, a.map(a => a.entity_id), !0))
        }
        _renderGroupListItem(a, b, c) {
            const d = a.entity_id === this.config.entity || b.includes(a.entity_id),
                e = a.entity_id === this.config.entity || c !== this.config.entity;
            return O(_templateObject23(), d, e, b => this._handleGroupItemChange(b, a.entity_id, !d), a.name, a.entity_id === c ? O(_templateObject24()) : "")
        }
        _renderSource() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a.entity;
            const c = b.attributes.source_list || !1,
                d = b.attributes.source || "";
            if (c) {
                const a = c.indexOf(d);
                return O(_templateObject25(), "right", "top", 40, !0, a => a.stopPropagation(), this.config.show_source, this.source || d, ta.DROPDOWN, a, a => this._handleSource(a), c.map(a => O(_templateObject26(), a, a)))
            }
        }
        _renderControlRow() {
            return O(_templateObject27(), this.config.hide_volume ? "" : this._renderVolControls(), this.config.show_shuffle ? this._renderShuffleButton() : "", this.config.hide_controls ? "" : this._renderMediaControls())
        }
        _renderMediaControls() {
            return O(_templateObject28(), this._renderButton(ta.PREV, "media_previous_track"), this._renderButton(ta.PLAY[this._isPlaying()], "media_play_pause"), this._renderButton(ta.NEXT, "media_next_track"))
        }
        _renderVolControls() {
            const a = this.entity.attributes.is_volume_muted || !1;
            return this.config.volume_stateless ? this._renderVolButtons(a) : this._renderVolSlider(a)
        }
        _renderMuteButton(a) {
            if (!this.config.hide_mute) {
                switch (this.config.replace_mute) {
                    case "play":
                        return this._renderButton(ta.PLAY[this._isPlaying()], "media_play_pause");
                    case "stop":
                        return this._renderButton(ta.STOP, "media_stop");
                    case "next":
                        return this._renderButton(ta.NEXT, "media_next_track");
                }
                return this._renderButton(ta.MUTE[a], "volume_mute", {
                    is_volume_muted: !a
                })
            }
        }
        _renderVolSlider() {
            let a = !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0];
            const b = 100 * this.entity.attributes.volume_level;
            return O(_templateObject29(), this._renderMuteButton(a), a, a => this._handleVolumeChange(a), a => a.stopPropagation(), this.config.max_volume, b)
        }
        _renderVolButtons() {
            let a = !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0];
            return O(_templateObject30(), this._renderMuteButton(a), this._renderButton(ta.VOL_DOWN, "volume_down"), this._renderButton(ta.VOL_UP, "volume_up"))
        }
        _renderTts() {
            return O(_templateObject31(), this._getLabel("ui.card.media_player.text_to_speak", "Say"), a => a.stopPropagation(), a => this._handleTts(a))
        }
        _renderList() {
            const a = this.config.media_list;
            return O(_templateObject32(), !0, a => a.stopPropagation(), "Select media...", ta.MENU, a => this._handleSelect(a, "media_list", a.target.getAttribute("value")), a.map((a, b) => O(_templateObject33(), b, a.name, a.icon ? O(_templateObject34(), a.icon) : "")))
        }
        _renderButtons() {
            const a = this.config.media_buttons;
            return O(_templateObject35(), a.map((a, b) => O(_templateObject36(), a => this._handleSelect(a, "media_buttons", b), a.name, a.icon ? O(_templateObject37(), a.icon) : "")))
        }
        _callService(a, b, c) {
            let d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "media_player";
            a.stopPropagation(), (c = null == c ? {} : c).entity_id = c.entity_id || this.config.entity, this._hass.callService(d, b, c)
        }
        _handleVolumeChange(a) {
            const b = parseFloat(a.target.value),
                c = 0 < b ? b / 100 : 0;
            this._callService(a, "volume_set", {
                volume_level: c
            })
        }
        _handlePower(a) {
            return this.config.toggle_power ? this._callService(a, "toggle") : void("off" === this.entity.state ? this._callService(a, "turn_on") : this._callService(a, "turn_off"))
        }
        _handleTts(a) {
            const b = this.shadowRoot.querySelector(".tts paper-input"),
                c = {
                    message: b.value
                };
            "alexa" === this.config.show_tts ? this._callService(a, "alexa_tts", c) : this._callService(a, this.config.show_tts + "_say", c, "tts"), b.value = ""
        }
        _handleSelect(a, b, c) {
            const d = {
                media_content_type: this.config[b][c].type,
                media_content_id: this.config[b][c].id || this.config[b][c].url
            };
            this._callService(a, "play_media", d)
        }
        _handleMore(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this,
                c = b.config;
            return c.more_info ? this._fire("hass-more-info", {
                entityId: c.entity
            }) : void a.stopPropagation()
        }
        _handleSource(a) {
            const b = a.target.getAttribute("value");
            this._callService(a, "select_source", {
                source: b
            }), this.source = b
        }
        _handleGroupButton(a) {
            a.stopPropagation(), this.edit = !this.edit
        }
        _handleGroupItemChange(a, b, c) {
            let d = {
                entity_id: b
            };
            c ? (d.master = this.config.entity, this._callService(a, "SONOS_JOIN", d)) : this._callService(a, "SONOS_UNJOIN", d)
        }
        _fire(a, b, c) {
            c = c || {}, b = null == b ? {} : b;
            const d = new Event(a, {
                bubbles: void 0 === c.bubbles || c.bubbles,
                cancelable: !!c.cancelable,
                composed: void 0 === c.composed || c.composed
            });
            return d.detail = b, this.dispatchEvent(d), d
        }
        _checkProgress() {
            this._isPlaying() && this._showProgress ? this._positionTracker || (this._positionTracker = setInterval(() => this.position = this._currentProgress, 1e3)) : this._positionTracker && (clearInterval(this._positionTracker), this._positionTracker = null), this.position = this._currentProgress
        }
        get _showProgress() {
            return (this._isPlaying() || this._isPaused()) && this.active && "media_duration" in this.entity.attributes && "media_position" in this.entity.attributes && "media_position_updated_at" in this.entity.attributes
        }
        get _currentProgress() {
            const a = this.entity.attributes.media_position_updated_at;
            return this.entity.attributes.media_position + (Date.now() - new Date(a).getTime()) / 1e3
        }
        _isPaused() {
            return "paused" === this.entity.state
        }
        _isPlaying() {
            return "playing" === this.entity.state
        }
        _isIdle() {
            return "idle" === this.entity.state
        }
        _isActive() {
            !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0];
            return this.config.idle_view && (this.idle = this._computeIdle()), "off" !== this.entity.state && "unavailable" !== this.entity.state && !this.idle || !1
        }
        _computeIdle() {
            let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                b = a.config;
            if (b.idle_view && this._isIdle() || b.consider_pause_idle && this._isPaused()) return !0;
            const c = this.entity.attributes.media_position_updated_at;
            if (!c || !b.consider_idle_after) return !1;
            const d = (Date.now() - new Date(c).getTime()) / 1e3;
            return d > b.consider_idle_after || (this._inactiveTracker || (this._inactiveTracker = setTimeout(() => {
                this.position = 0, this._inactiveTracker = null
            }, 1e3 * (b.consider_idle_after - d))), !1)
        }
        _getAttribute(a) {
            return this.entity.attributes[a] || ""
        }
        _getLabel(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "unknown";
            const c = this._hass.selectedLanguage || this._hass.language,
                d = this._hass.resources[c];
            return d && d[a] ? d[a] : b
        }
        async _fetchThumbnail() {
            try {
                const a = await this._hass.callWS({
                        type: "media_player_thumbnail",
                        entity_id: this.config.entity
                    }),
                    b = a.content_type,
                    c = a.content;
                this.thumbnail = "url(data:".concat(b, ";base64,").concat(c, ")")
            } catch (a) {
                this.thumbnail = !1
            }
        }
        _style() {
            return O(_templateObject38())
        }
        getCardSize() {
            return this.config.collapse ? 1 : 2
        }
    })
});