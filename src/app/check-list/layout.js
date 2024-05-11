import React, {useState} from 'react';
import ToDoList from "@/components/List/ToDo/ToDoList.component";
import DoneList from "@/components/List/Done/DoneList.component";

export default function CheckListLayout({children}) {
    const [todoList, setToDoList] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [doneList, setDoneList] = useState(['Task A', 'Task B', 'Task C']);


    const removeFromDoneList = (keyToRemove) => {
        const updatedDoneList = doneList.filter(task => task !== keyToRemove);
        debugger
        setDoneList(updatedDoneList);
    }

    const validateTask = (keyToValidate) => {
        const updatedToDoList = todoList.filter(task => task !== keyToValidate);
        debugger
        setToDoList(updatedToDoList);
    }

    return (
        <div>
            <h1>To-Do Lists</h1>
            <div>
                <ToDoList list={todoList} setList={setToDoList} doneList={setDoneList} validateTask={validateTask}/>
                <DoneList doneList={doneList} todoList={setToDoList} removeFromDoneList={removeFromDoneList}/>
            </div>
        </div>
    )
}
