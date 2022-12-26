import { LitElement, html, css } from "lit";
import { filterInputCss } from "../templates/templates";
import data from "../data.json";

export class FilterInput extends LitElement {
  static get properties() {
    return {
      filters: { type: Array },
    };
  }

  constructor() {
    super();
    this.filters = data;
  }

  static styles = filterInputCss;

  render() {
    let filters_items = [];
    for (const element of this.filters) {
      if (
        !filters_items.includes(
          ...element.languages,
          ...element.tools,
          ...element.level,
          ...element.role
        )
      )
        filters_items.push(
          ...element.languages,
          ...element.tools,
          element.level,
          element.role
        );
    }

    return html` <div id="filter">
      ${filters_items.map(
        (item, index) => html`
          <div class="filter_checkbox" key=${index}>
            <input type="checkbox" id=${item} />
            <label for=${item}>${item}</label>
          </div>
        `
      )}
    </div>`;
  }
}
customElements.define("filter-input", FilterInput);
