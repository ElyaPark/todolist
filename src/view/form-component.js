import { AbstractComponent } from "../framework/view/abstract-component.js";

function createFormTemplate() {
  return `
    <div class="task-input">
      <label for="new-task">Новая задача</label>
      <input type="text" id="new-task" placeholder="Название задачи...">
      <button id="add-task">+ Добавить</button>
    </div>
  `;
}

export default class FormComponent extends AbstractComponent {
  constructor({ onAddTask }) {
    super();
    this.onAddTask = onAddTask;
  }

  get element() {
    if (!this.elementInstance) {
      this.elementInstance = super.element;

      const inputField = this.elementInstance.querySelector("#new-task");
      const addButton = this.elementInstance.querySelector("#add-task");

      addButton.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        const taskTitle = inputField.value.trim();

        if (taskTitle && this.onAddTask) {
          this.onAddTask(taskTitle); // Вызываем переданный обработчик
          this.clearInput(); // Очищаем поле после добавления задачи
        }
      });
    }
    return this.elementInstance;
  }

  get template() {
    return createFormTemplate();
  }
ф
  clearInput() {
    const inputField = this.element.querySelector("#new-task");
    if (inputField) {
      inputField.value = "";
    }
  }
}
