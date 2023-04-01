export interface ITaskList {
    id: string;
    description: string;
    isCompleted: boolean;
}

export interface ITask extends ITaskList {
    onDeleteTask: (id: string) => void;
    onCompleted: (id: string) => void;
}