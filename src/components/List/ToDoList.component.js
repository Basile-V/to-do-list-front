import ToDoItem from "@/components/Item/ToDoItem.component";

const ToDoList = ({list, name}) => {
    return (
        <div>
            <div><h3>{name}</h3></div>
            <div>
                <ul>
                    {list.map((task, index) => (
                        <ToDoItem key={index} task={task}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;
