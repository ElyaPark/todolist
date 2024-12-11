import { AbstractComponent } from "../framework/view/abstract-component.js";

function createReadyTemplate() {
  return `
    <div class="column" data-status="done">
      <h2>Готово</h2>
      <ul class="task-list"></ul>
    </div>
  `;
}

export default class ReadyComponent extends AbstractComponent {
  get template() {
    return createReadyTemplate();
  }

  get element() {
    if (!this.elementInstance) {
      this.elementInstance = super.element;

      this.elementInstance.addEventListener("dragover", (event) => {
        event.preventDefault(); // Разрешаем сброс
      });

      this.elementInstance.addEventListener("drop", (event) => {
        const taskId = event.dataTransfer.getData("text/plain");
        const status = "done";
        if (this.onDrop) {
          this.onDrop(taskId, status); // Вызываем обработчик drop
        }
      });
    }
    return this.elementInstance;
  }

  setOnDropHandler(handler) {
    this.onDrop = handler;
  }
}