import { LitElement, html } from 'lit';
import styles from './ilw-statistic.styles';
import './ilw-statistic.css';

class Statistic extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
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
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-statistic', Statistic);
