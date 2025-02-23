export interface Task {
    _id: number;
    title: string;
    completed: boolean;
    subtasks: Task[]; // nested subtasks
}