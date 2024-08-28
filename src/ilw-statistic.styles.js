import { css } from 'lit';

export default css`
    :host {
      display: block;
      width: 100%;
      container-type: inline-size;
    }
    div {
      font-size: 1.25rem;
      font-weight: 500;
    }
 @media only screen and (min-width: 50rem) {
    div {
      font-size: 2rem;
    }
  }
  `;
