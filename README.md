# ilw-statistic

Links: **[ilw-statistic in Builder](https://builder3.toolkit.illinois.edu/component/ilw-statistic/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

A statistic component is used to display significant data points. 

By default the card is a gray box with blue text. The box will fill the space of the container it is placed inside, but the text will stay centered.

- The top of the statistic can have a heading using `slot="top"`.
- Text can be resized to `small`, `medium`, `large` and `x-large` using `size="small"`.
- Color themes for `gray`, `blue`,`white`, and `blue-gradient`. For example, `theme="blue"`.

### Slots
| Slot  | Description |
| ------------- | ------------- |
| `slot="top"` | A piece of intro text, same style as the stat description text.  |
| `slot="stat"`  | Centered with larger text than the rest.  |
| `slot="source"`  | Italicized and slightly smaller text than the top and description text.  |

## Code Examples

```html
<ilw-statistic size="small" theme="gray">
  <span slot="top">Nation's</span>
  <span slot="stat">Top Six</span> Overall ranking among undergraduate programs in the U.S.
  <span slot="source">U.S. News and World 2022</span>
</ilw-statistic>
```

```html
<ilw-statistic size="large" theme="blue">
  <span slot="stat">#9</span> of students participate in research
</ilw-statistic>
```


## Accessibility Notes
- Ensure the slots are in order, top, stat and source.
- Spans are used to change the styling of each piece while containing the complete statistic in one block level element.

## External References

https://www.w3schools.com/tags/tag_span.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
