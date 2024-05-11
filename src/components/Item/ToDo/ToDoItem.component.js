import styles from "../item.module.css";
import {CheckCircleIcon} from "@heroicons/react/24/solid";

const ToDoItem = ({task, doneList, validateTask}) => {
    const moveItemToTodoList = () => {
        doneList(prevList => [...prevList, task]);
        validateTask(task);
    }

    return (
        <div className={styles.templateItem}>
            <div>{task}</div>
            <CheckCircleIcon className={styles.myIcon} onClick={moveItemToTodoList}/>
        </div>);
};

export default ToDoItem;
