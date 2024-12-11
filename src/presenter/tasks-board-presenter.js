import { render } from "../framework/render.js";
import BlogackComponent from "../view/blogack-companent.js";
import GarbageComponent from "../view/garbage-component.js";
import InProgressComponent from "../view/in_progress-component.js";
import ReadyComponent from "../view/ready-component.js";
import ResetButtonComponent from "../view/reset-button-component.js";
import NoTasksComponent from "../view/no-tasks-component.js";

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;

    this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    const tasks = this.#tasksModel.tasks;

    if (tasks.length === 0) {
      this.#renderNoTasks();
      return;
    }

    this.#renderBlogackColumn();
    this.#renderInProgressColumn();
    this.#renderReadyColumn();
    this.#renderGarbageColumn();
  }

  #renderBlogackColumn() {
    const blogackComponent = new BlogackComponent();
    render(blogackComponent, this.#boardContainer);
  }

  #renderInProgressColumn() {
    const inProgressComponent = new InProgressComponent();
    render(inProgressComponent, this.#boardContainer);
  }

  #renderReadyColumn() {
    const readyComponent = new ReadyComponent();
    render(readyComponent, this.#boardContainer);
  }

  #renderGarbageColumn() {
    const garbageComponent = new GarbageComponent();
    render(garbageComponent, this.#boardContainer);
    const resetButtonComponent = new ResetButtonComponent();
    render(resetButtonComponent, garbageComponent.element);
  }

  #renderNoTasks() {
    const noTasksComponent = new NoTasksComponent();
    render(noTasksComponent, this.#boardContainer);
  }

  #handleModelChange() {
    this.#boardContainer.innerHTML = "";
    this.init();
  }
}
