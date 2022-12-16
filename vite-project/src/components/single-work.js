import { LitElement, html, css } from "lit";

export class SingleWork extends LitElement {
  static get properties() {
    return {
      value: Object,
    };
  }

  static styles = css`
    div#work {
      display: flex;
      flex-direction: column;
      background-color: white;
      height: 250px;
      width: 100%;
      border-radius: 5px;
      border-left: 5px solid hsl(180, 29%, 50%);
      box-shadow: 0px 30px 33px -25px hsla(180, 29%, 50%, 0.5);
    }
    h1 {
      margin: 0;
    }
  `;

  constructor() {
    super();
    this.value = {};
  }
  render() {
    console.log(this.value);
    return html`
      <div id="work">
        <p>${this.value.company}</p>
        ${this.value.new ? html`<p>NEW!</p> ` : ""}
        ${this.value.featured ? html`<p>FEATURED</p> ` : ""}
        <p>${this.value.position}</p>
        <ul>
          <li>${this.value.postedAt}</li>
          <li>${this.value.contract}</li>
          <li>${this.value.location}</li>
        </ul>
      </div>
    `;
  }
}
customElements.define("single-work", SingleWork);
