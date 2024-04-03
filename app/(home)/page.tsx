import 'normalize.css'
import 'concrete.css'
import styles from "../../styles/home.module.css";
import WeeklyTodo from "../../components/weekly-todo";
import Clock from "../../components/clock";
import Image from 'next/image';
export const metadata = {
    title:"Home",
}


export default async function HomePage() {
    return (
    <>
        <main>
            <header className={styles.mainHeader}>
                <h1 className={styles.header1}>
                    {/* Hello Milesians! &nbsp; */}
                    
                    <Image src="/mabi-logo.png" width={75} height={75}
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Clock/>   
                </h1>
            </header>
            <section><WeeklyTodo /></section>
        </main>
        
    </>);
}
