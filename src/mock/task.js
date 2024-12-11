import { render } from "../framework/render.js";
import TaskComponent from "../view/task-component.js";

export default class TaskPresenter {
  #task = null;
  #tasksListComponent = null;

  constructor(task, tasksListComponent) {
    this.#task = task;
    this.#tasksListComponent = tasksListComponent;
  }

  init() {
    const taskComponent = new TaskComponent(this.#task);
    render(taskComponent, this.#tasksListComponent.element);
  }
}
