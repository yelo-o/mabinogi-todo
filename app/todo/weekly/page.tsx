import 'normalize.css'
import 'concrete.css'
import styles from "@/styles/home.module.css";
import Clock from "@/components/clock";
import TodoWeekly from "@/components/todo-weekly";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
export const metadata = {
    title:"Weekly-Todo",
}


export default function HomePage() {
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
            <section><TodoWeekly /></section>
            {/* <section><Link href="/">Main</Link></section> */}
        </main>
        
    </>);
}
