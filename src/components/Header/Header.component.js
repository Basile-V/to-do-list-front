import styles from "./header.module.css";

const Header = ({selected}) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <div>To Do List</div>
                <div>Graphiques</div>
            </div>
        </header>);
}

export default Header;