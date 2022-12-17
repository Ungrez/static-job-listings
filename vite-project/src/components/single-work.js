import { LitElement, html, css } from "lit";
import { singleWorkCss } from "../templates/templates";

export class SingleWork extends LitElement {
  static get properties() {
    return {
      value: { type: Object },
    };
  }

  static styles = singleWorkCss;

  constructor() {
    super();
    this.value = {};
  }

  firstUpdated() {
    const buttons = [...this.shadowRoot.querySelectorAll("#category_btn")];
    for (const button of buttons) {
      button.addEventListener("click", (e) =>
        this.searchMatched(e.target.innerText)
      );
    }
  }

  searchMatched(matched) {}

  render() {
    let technologies = this.value.languages;
    let tools = this.value.tools;
    let categories = [this.value.role, this.value.level, ...tools];
    const categories_array = categories.concat(technologies);

    return html`
      <div id="work" class="${this.value.featured ? "featured" : ""}">
        <img src=${this.value.logo} alt=${this.value.company} />
        <div id="work_company">
          <p>${this.value.company}</p>
          ${this.value.new
            ? html`<button id="work_new"><p>NEW!</p></button> `
            : ""}
          ${this.value.featured
            ? html`<button id="work_featured">FEATURED</button> `
            : ""}
        </div>
        <p>${this.value.position}</p>
        <ul>
          <li>${this.value.postedAt}</li>
          <li>${this.value.contract}</li>
          <li>${this.value.location}</li>
        </ul>
        <hr />
        <div id="work_category">
          ${categories_array.map(
            (item, index) =>
              html`<button id="category_btn" key=${index}>${item}</button>`
          )}
        </div>
      </div>
    `;
  }
}
customElements.define("single-work", SingleWork);
