import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-statistic";

const content = html`
<ilw-statistic>
  <span slot="top">Nation's</span>
  <span slot="stat">Top Six</span> Overall ranking among undergraduate programs in the U.S.
  <span slot="source"><a href="https://example.com/">U.S. News and World 2022</a></span>
</ilw-statistic>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Top Six");
    await expect.element(element).toBeInTheDocument();
    const element2 = screen.getByText("Nation's");
    await expect.element(element2).toBeInTheDocument();
    const element3 = screen.getByText("Overall ranking among undergraduate programs in the U.S.");
    await expect.element(element3).toBeInTheDocument();
    const element4 = screen.getByText("U.S. News and World 2022");
    await expect.element(element4).toBeInTheDocument();
});