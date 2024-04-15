import React from 'react';
import ToDoItem from "@/components/Item/ToDo/ToDoItem.component";
import AddItem from "@/components/Item/Add/AddItem.component";
import styles from "../list.module.css";

const ToDoList = ({list, setList}) => {

    return (
        <div className={styles.templateList}>
            <div>
                <h3>To Do:</h3>
            </div>
            <div>
                {list.map((task, index) => (
                    <ToDoItem key={index} task={task}/>
                ))}
                <AddItem setList={setList}/>
            </div>
        </div>
    );
};

export default ToDoList;
