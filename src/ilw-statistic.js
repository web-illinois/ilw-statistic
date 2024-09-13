import { LitElement, html } from 'lit';
import styles from './ilw-statistic.styles';
import './ilw-statistic.css';

class Statistic extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true },
            size: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
        this.size = '';
    }

    render() {
        return html`
      <div class=ilw-statistic">
          <span class="top"></span><slot name="top"></slot></span><br>
          <span class="stat"> <slot name="stat"></slot></span><br>
          <span class="text"> <slot></slot></span><br>
          <span class="source"> <slot name="source"></slot></span>
      </div>
    `;
    }
}

customElements.define('ilw-statistic', Statistic);
