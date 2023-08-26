import "./input.js";
import "./button.js";

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