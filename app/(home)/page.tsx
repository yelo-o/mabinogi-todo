import 'normalize.css'
import 'concrete.css'
import DailyCalendar from "../../components/daily-calendar";
export const metadata = {
    title:"Home",
}


export default async function HomePage() {
    return (
        <main>
            <header><h1>Hello Milesians!</h1></header>
            <section><DailyCalendar /></section>
        </main>
    );
}
