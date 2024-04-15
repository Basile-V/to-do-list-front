import styles from "../item.module.css";
import React, {useState} from 'react';

const AddItem = ({setList}) => {
    const [newTask, setNewTask] = useState('');

    const addItem = (event) => {
        event.preventDefault();
        if (!newTask.trim()) return;

        setList(prevList => [...prevList, newTask]);
        setNewTask('');
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <div className={styles.templateItem}>
            <form onSubmit={addItem}>
                <input type="text" value={newTask} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
