import React, {useState} from 'react';
import ToDoList from "@/components/List/ToDo/ToDoList.component";
import DoneList from "@/components/List/Done/DoneList.component";

export default function CheckListLayout({children}) {
    const [list1, setList1] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [list2] = useState(['Task A', 'Task B', 'Task C']);

    return (
        <div>
            <h1>To-Do Lists</h1>
            <div>
                <ToDoList list={list1} setList={setList1}/>
                <DoneList list={list2}/>
            </div>
        </div>
    )
}
