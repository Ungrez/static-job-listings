import { LitElement, html, css } from "lit";
import { SingleWork } from "./single-work";
import data from "../data.json";

export class WorkList extends LitElement {
  static get properties() {
    return {
      works: { type: Array },
    };
  }
  static styles = css`
    div#work_container {
      display: flex;
      flex-direction: column;
      gap: 40px 0;
      min-height: 100vh;
      padding: 55px 20px;
      background-color: hsl(180, 52%, 96%);
    }
  `;
  constructor() {
    super();
    this.works = data;
  }

  render() {
    return html`
      <div id="work_container">
        ${this.works.map(
          (work) => html`<single-work .value="${work}"></single-work>`
        )}
      </div>
    `;
  }
}
customElements.define("work-list", WorkList);
