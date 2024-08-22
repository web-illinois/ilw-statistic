# ilw-statistic

Links: **[ilw-statistic in Builder](https://builder3.toolkit.illinois.edu/component/ilw-statistic/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

A statistic component is used to display significant data points. 

By default the card is a gray box with blue text. The box will fill the space of the container it is placed inside, but the text will stay centered.

- The top of the statistic can have a heading using `slot="top"`.
- Text can be resized to `small`, `medium`, `large` and `xlarge` using `size="small"`.
- Color themes for `gray`, `blue`,`white`, and `blue-gradient`. For example, `theme="blue"`.

### Slots
| Slot  | Description |
| ------------- | ------------- |
| `slot="top"` | Content Cell  |
| `slot="stat"`  | Content Cell  |
| `slot="source"`  | Content Cell  |

## Code Examples

```html
<il-statistic size="small" theme="gray">
  <span slot="top">Nation's</span>
  <em slot="stat">Top Six</em>
  Overall ranking among undergraduate programs in the U.S.
  <span slot="source">U.S. News and World 2022</span>
</il-statistic>
```

## Accessibility Notes and Use

Consider accessibility, both for building the component and for its use:

- Is there sufficient color contrast?
- Can the component be fully understood without colors?
- Does the component need alt text or ARIA roles?
- Can the component be navigated with a keyboard? Is the tab order correct?
- Are focusable elements interactive, and interactive elements focusable?
- Are form fields, figures, fieldsets and other interactive elements labelled?

## External References
