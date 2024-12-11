import { AbstractComponent } from "../framework/view/abstract-component.js";

function createBlogackTemplate() {
  return `
    <div class="column" data-status="backlog">
      <h2>Бэклог</h2>
      <ul class="task-list"></ul>
    </div>
  `;
}

export default class BlogackComponent extends AbstractComponent {
  get template() {
    return createBlogackTemplate();
  }

  get element() {
    if (!this.elementInstance) {
      this.elementInstance = super.element;

      this.elementInstance.addEventListener("dragover", (event) => {
        event.preventDefault(); // Разрешаем сброс
      });

      this.elementInstance.addEventListener("drop", (event) => {
        const taskId = event.dataTransfer.getData("text/plain");
        const status = "backlog";
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
