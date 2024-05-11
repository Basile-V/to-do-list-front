import DoneItem from "@/components/Item/Done/DoneItem.component";
import styles from "../list.module.css";

const DoneList = ({doneList, todoList, removeFromDoneList}) => {

    return (
        <div className={styles.templateList}>
            <div>
                <h3>Done:</h3>
            </div>
            <div>
                {doneList.map((task) => (
                    <DoneItem task={task} todoList={todoList} removeFromDoneList={removeFromDoneList}/>
                ))}
            </div>
        </div>
    );
};

export default DoneList;
