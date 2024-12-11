import { createElement } from "../render.js";

export class AbstractComponent {
  #element = null;

  get template() {
    // Этот метод должен быть переопределён в наследниках
    throw new Error("Abstract method not implemented: get template");
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template); // Создаём элемент на основе шаблона
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null; // Сбрасываем сохранённый элемент
  }
}
