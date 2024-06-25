# ilw-statistic
Statistic Component for the Illinois Web Toolkit

## Overview

The statistic component is a template for prominately displaying relevant statistical information on your website. It uses slots to denote top, stat and source. The top descriptor is named for it's location of being above the stat itself. Stat for the number or rank of your statistical data. And finally source where you can include the source of your data.

## Contact Team

sydbeth@illinois.edu

## NPM Install

None yet, still in alpha.

## Files

None yet, still in alpha.

## Code Examples

```
<ilw-statistic class="size-large" theme="white">
  <span slot="top">Nation's</span>
  <em slot="stat">Top Six</em>
Overall ranking among undergraduate programs in the U.S.
  <cite>U.S. News and World 2024</cite>
</ilw-statistic>
```

```
<ilw-statistic class="size-small" theme="blue">
 <em slot="stat">97%</em> of our 2020 graduates with teaching degrees plus licensure are employed in the field of education.
</ilw-statistic>
```

## Accessibility Notes and Use

The use of HTML statistics with text in place of graphical statistics can help make your content accessible without the need for additional steps of integrating alt text. The em tag is used to denote emphasis on the numbers or rank you want to point out. The cite tag is used to reference the name of a report, webpage or other source of information that you gleaned the data from.

The Statistic Component doesn't need to have a top slot or cite tag to work correctly.


## External references

https://www.w3.org/WAI/tutorials/images/complex/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
