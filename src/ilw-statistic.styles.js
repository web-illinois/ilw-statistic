import { css } from 'lit';

export default css`
    :host {
      display: block;
      width: 100%;
      container-type: inline-size;
      text-align:center;
      background-color: lightgray;
      color: black;
      margin: 0.9375rem;
      line-height: 2rem;
      padding: 1.875rem 1.25rem;
      font-weight: bold;
     }
      .ilw-statistic {
        font-size: 1.125rem;      
     }

     .stat{
      font-size: 2.125rem;
     }

       .source{
      font-size: 1rem;
      font-style: italic;
     }
     @media only screen and (min-width: 50rem) {
         .ilw-statisic {
          font-size: 2rem;
         }
       }



  `;
