import DoneItem from "@/components/Item/Done/DoneItem.component";
import styles from "../list.module.css";

const DoneList = ({list}) => {
    return (
        <div className={styles.templateList}>
            <div>
                <h3>Done:</h3>
            </div>
            <div>
                {list.map((task, index) => (
                    <DoneItem key={index} task={task}/>
                ))}
            </div>
        </div>
    );
};

export default DoneList;
