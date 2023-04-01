import { Badge } from "../../components/Bagde";
import { EmptyList } from "../../components/Empty";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Task } from "../../components/Task";
import { ITaskList } from "../../components/Task/types";
import { Container, ListHeader, ListWrapper } from "./styles";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { nanoid } from 'nanoid';

function App() {

    const [newTask, setNewTask] = useState<string>('');
    const [todoList, setTodoList] = useState<ITaskList[]>([]);
    const [totalCompleted, setTotalCompleted] = useState(0);

    function onDeleteTask(id: string) {
        const updatedList = todoList.filter(task => task.id !== id);
        setTodoList(updatedList);
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        const newTaskObj = {
            id: nanoid(),
            description: newTask,
            isCompleted: false,
        };

        setTodoList([newTaskObj, ...todoList]);
        setNewTask('');
    }

    let totalCreated = todoList.length;

    function onCompleted(id: string) {
        const updateList = todoList.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });

        setTodoList(updateList);
    }

    useEffect(() => {
        calculateTotalTasksCompleted();
    }, [todoList]);

    function calculateTotalTasksCompleted() {
        const calculated = todoList.reduce((accumulator, task) => {
            if (task.isCompleted === true) {
                return accumulator + 1;
            }
            return accumulator;
        }, 0);

        setTotalCompleted(calculated);
    }

    return (
        <div className="App">
            <Header />

            <Container>
                <form onSubmit={handleCreateTask}>
                    <SearchBar onHandleChange={handleNewTask} value={newTask} name="newTask" />
                </form>

                <ListWrapper>
                    <ListHeader>
                        <div className="col-left">
                            <strong className="created">Criadas</strong>
                            <Badge quantity={totalCreated} />
                        </div>
                        <div className="col-right">
                            <strong className="done">Concluídas</strong>
                            <Badge quantity={totalCompleted} />
                        </div>
                    </ListHeader>

                    {todoList.length === 0 ?

                        <EmptyList>
                            <h5>Você ainda não tem tarefas cadastradas</h5>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </EmptyList>

                        :

                        todoList.map(item => {
                            return (
                                <Task
                                    key={item.id}
                                    description={item.description}
                                    id={item.id}
                                    isCompleted={item.isCompleted}
                                    onDeleteTask={onDeleteTask}
                                    onCompleted={onCompleted}
                                />
                            );
                        })
                    }

                </ListWrapper>

            </Container>

        </div>
    );
}

export default App;
