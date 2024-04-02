import ToDoItem from "@/components/Item/ToDoItem.component";
import styles from "./list.module.css";

const ToDoList = ({list, name}) => {
    return (
        <div className={styles.templateList}>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                {list.map((task, index) => (
                    <ToDoItem key={index} task={task}/>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
