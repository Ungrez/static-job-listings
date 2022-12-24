import { LitElement, html, css } from "lit";
import { filterInputCss } from "../templates/templates";

export class FilterInput extends LitElement {
  constructor() {
    super();
  }
  static styles = filterInputCss;

  render() {
    return html` <div id="filter"></div>`;
  }
}
customElements.define("filter-input", FilterInput);
