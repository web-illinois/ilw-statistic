import { LitElement, html, unsafeCSS, nothing, svg } from 'lit';
// @ts-ignore
import styles from './ilw-statistic.styles.css?inline';
import './ilw-statistic.css';
import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-statistic')
export default class Statistic extends LitElement {
    @property({type: String}) 
    theme: "" | "gray" | "orange" | "blue" | "blue-gradient" | "orange-gradient" | "white" = "white";

    @property({type: String}) 
    accent: "" | "gray" | "orange" | "blue" | "industrial" | "arches" | "altgeld" = "blue";

    @property({type: String}) 
    size: "" | "small" | "medium" | "large" | "x-large" = "medium";

    @property({type: String}) 
    padding = "";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.theme = "white";
        this.accent = "blue";
        this.size = "medium";
        this.padding = "";
    }

    get paddingStyle() {
      return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    render() {
      return html`
        <div class="main" style="${this.paddingStyle}">
            <span class="top"></span><slot name="top"></slot></span><br>
            <span class="stat"> <slot name="stat"></slot></span><br>
            <span class="text"> <slot></slot></span><br>
            <span class="source"> <slot name="source"></slot></span>
        </div>
      `;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-statistic": Statistic;
  }
}
