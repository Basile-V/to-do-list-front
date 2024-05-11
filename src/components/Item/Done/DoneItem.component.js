import styles from "../item.module.css";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

const DoneItem = ({task, todoList, removeFromDoneList}) => {
    const moveBackToTodo = () => {
        todoList(prevList => [...prevList, task]);
        removeFromDoneList(task);
    }
    return (
        <div className={styles.templateItem}>
            {task}
            <ArrowUturnLeftIcon className={styles.myIcon} onClick={moveBackToTodo}/>
        </div>);
};

export default DoneItem;
