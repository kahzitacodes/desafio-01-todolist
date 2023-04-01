import { useState } from "react";
import { TaskStyled } from "./style";
import { ITask } from "./types";
import { ButtonIcon } from "../ButtonIcon";
import { Trash } from "@phosphor-icons/react";

export function Task({ description, id, onDeleteTask, onCompleted }: ITask) {

    const [isCompleted, setIsCompleted] = useState(false);

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleCompletedTask() {
        onCompleted(id);
        setIsCompleted(!isCompleted);
    }

    return (
        <TaskStyled className={`${isCompleted && 'done'}`}>
            <div className="taskDescription">
                <input onClick={handleCompletedTask} type="radio" name={id} checked={isCompleted} readOnly />
                <label>{description}</label>
            </div>

            <ButtonIcon
                title="Botão deletar tarefa"
                icon={<Trash size={16} />}
                onClick={handleDeleteTask}
            />
        </TaskStyled>
    );
}