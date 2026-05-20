import { LightningElement } from 'lwc';

export default class SimpleTodo extends LightningElement {
    tasks = [];
    newTask = '';
    idCounter = 1;

    handleChange(event) {
        this.newTask = event.target.value;
    }

    addTask() {
        if (!this.newTask) return;

        this.tasks = [
            ...this.tasks,
            { id: this.idCounter++, name: this.newTask, done: false }
        ];

        this.newTask = '';
    }

    toggleTask(event) {
        const id = parseInt(event.target.dataset.id, 10);

        this.tasks = this.tasks.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        );
    }
}
