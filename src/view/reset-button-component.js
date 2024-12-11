import { AbstractComponent } from "../framework/view/abstract-component.js";

function createResetButtonTemplate() {
  return `
    <button class="reset-button" disabled>Очистить список</button>
  `;
}

export default class ResetButtonComponent extends AbstractComponent {
  get template() {
    return createResetButtonTemplate();
  }
}
