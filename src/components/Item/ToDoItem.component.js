import styles from "./item.module.css";

const ToDoItem = ({task}) => {
    return (
        <div className={styles.templateItem}>
            <input type="radio"/>{task}
        </div>);
};

export default ToDoItem;
