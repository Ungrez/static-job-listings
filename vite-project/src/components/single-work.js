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
    let {
      featured,
      company,
      logo,
      position,
      postedAt,
      contract,
      location,
      languages,
      level,
      role,
    } = this.value;
    let technologies = languages;
    let tools = this.value.tools;
    let categories = [role, level, ...tools];
    const categories_array = categories.concat(technologies);

    return html`
      <div id="work" class="${featured ? "featured" : ""}">
        <img src=${logo} alt=${company} />
        <div id="work_company">
          <p>${company}</p>
          ${this.value.new
            ? html`<button id="work_new"><p>NEW!</p></button> `
            : ""}
          ${featured ? html`<button id="work_featured">FEATURED</button> ` : ""}
        </div>
        <p>${position}</p>
        <ul>
          <li>${postedAt}</li>
          <li>${contract}</li>
          <li>${location}</li>
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
