import styles from "../item.module.css";

const DoneItem = ({task}) => {
    return (
        <div className={styles.templateItem}>
            {task}
        </div>);
};

export default DoneItem;
