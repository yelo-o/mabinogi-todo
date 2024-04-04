import 'normalize.css'
import 'concrete.css'
import styles from "../../styles/home.module.css";
import LoginForm from '../../components/login-form';
import Clock from "../../components/clock";
import Image from 'next/image';
import Link from "next/link";
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
                    <Link href={"/"}>
                        <Image src="/mabi-logo.png" width={75} height={75}
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </Link>
                    <Clock/>   
                </h1>
            </header>
            <section><LoginForm /></section>
            {/* <section><Link href="/todo">TODO</Link></section> */}
        </main>
        
    </>);
}
