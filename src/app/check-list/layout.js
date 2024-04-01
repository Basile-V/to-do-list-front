import ToDoList from "@/components/List/ToDoList.component";

export default function CheckListLayout({children}) {
    const list1 =
        ['Task 1', 'Task 2', 'Task 3'
        ];
    const list2 =
        ['Task A', 'Task B', 'Task C'];

    return <div>
        <h1>To-Do Lists</h1>
        <ToDoList list={list1} name={"ToDo"}/>
        <ToDoList list={list2} name={"Done"}/>
    </div>
}
