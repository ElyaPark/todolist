import { AbstractComponent } from "../framework/view/abstract-component.js";

function createInProgressTemplate() {
  return `
    <div class="column" data-status="processing">
      <h2>В процессе</h2>
      <ul class="task-list"></ul>
    </div>
  `;
}

export default class InProgressComponent extends AbstractComponent {
  get template() {
    return createInProgressTemplate();
  }

  get element() {
    if (!this.elementInstance) {
      this.elementInstance = super.element;

      this.elementInstance.addEventListener("dragover", (event) => {
        event.preventDefault(); // Разрешаем сброс
      });

      this.elementInstance.addEventListener("drop", (event) => {
        const taskId = event.dataTransfer.getData("text/plain");
        const status = "processing";
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
