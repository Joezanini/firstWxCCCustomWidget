/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

const template = document.createElement("template");
template.innerHTML = /* html */ `
<style>
    label {
        display: block;
    }
    input {
        min-width: 200px;
        border-radius: 3px;
        border: 1px solid lightgray;
        padding: 10px;
    }
</style>
<label></label>
<input>
`;

class Input extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const label = this.shadowRoot.querySelector("label");
        label.textContent = this.getAttribute("label");
        const input = this.shadowRoot.querySelector("input");
        input.addEventListener("input", (event) => {
            event.stopPropagation();
            input.dispatchEvent(new CustomEvent('app-input', {
                bubbles: true,
                composed: true,
                detail: event.target.value
            }));
        });
    }
}

customElements.define("app-input", Input);

/***/ }),
/* 2 */
/***/ (() => {

const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = /* html */`
        <style>
            :host {
                display: block;
            }
            :host([inprogress]) {
                transform: scale(1.1);
                transform-origin: top left;
            }
            .btn{
                background-color:rgb(0, 145, 255);
                color: white;
                border: none;
                border-radius: 15px;
                padding: 0 2rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                box-shadow: 0 4px 14px 0 rgb(0, 145, 255);
            }

            .btn:hover {
                background-color: rgb(0, 174, 255);
            }

            .btn:disabled {
                background-color: rgb(0, 251, 255);
            }

            .fading {
                animation: fading 0.5s infinite
            }

            @keyframes fading {
                0% {
                    color: #6aa8f0;
                }
                50% {
                    color: white;
                }
                100% {
                    color: #6aa8f0;
                }
            }
        </style>
        <button class="btn"><slot>Button T</slot></button>
`

class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector("button");
        this.initialValue = this.innerHTML;
    }

    set inprogress(progress) {
        if (progress) {
            this.setAttribute("inprogress", "true");
        } else {
            this.removeAttribute("inprogress");
        }
    }

    get inprogress() {
        return this.getAttribute("inprogress");
    }

    static get observedAttributes() {
        return ["inprogress"]
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (newValue) {
            this.innerHTML = "Loading...";
            this.button.setAttribute("disabled", "true");
            this.button.classList.add('fading');
        } else {
            this.innerHTML = this.initialValue;
            this.button.removeAttribute("disabled");
            this.button.classList.remove('fading');
        }
    }
}

customElements.define("app-button", Button);



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_input_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_js__WEBPACK_IMPORTED_MODULE_1__);



const formTemplate = document.createElement("template");
formTemplate.innerHTML = /* html */`
    <app-input label="Username"></app-input>
    <app-button>Register</app-buton>
`

class BasicForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.appendChild(formTemplate.content.cloneNode(true));
    }
}

customElements.define("app-form", BasicForm);
})();

/******/ })()
;