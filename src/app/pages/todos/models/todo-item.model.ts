import { TouchSequence } from 'selenium-webdriver';

export class TodoItem {
  title: string;
  completed = false;

  constructor(title: string) {
    this.title = title;
  }
}
