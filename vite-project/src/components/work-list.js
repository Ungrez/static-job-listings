import { LitElement, html, css } from "lit";
import { workListCss } from "../templates/templates";
import { SingleWork } from "./single-work";
import data from "../data.json";

export class WorkList extends LitElement {
  static get properties() {
    return {
      works: { type: Array },
    };
  }
  static styles = workListCss;

  constructor() {
    super();
    this.works = data;
  }

  render() {
    return html`
      <div id="work_container">
        ${this.works.map(
          (work, index) =>
            html`<single-work key=${index} .value="${work}"></single-work>`
        )}
      </div>
    `;
  }
}
customElements.define("work-list", WorkList);
