'use client';
import styles from "../styles/login.module.css";
export default function LoginForm() {
    const loginBtn = () => {
        alert("로그인 아직 안됩니다용")
    }
    return (<>
            <form>
                <fieldset>
                    <legend>Please enter your information</legend>

                    <label htmlFor="name">ID</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" name="password" id="password" />

                    <input className={styles.loginBtn} type="button" value="Login" onClick={loginBtn}/>
                    {/* <input className={styles.loginBtn} type="submit" value="Login" /> */}
                </fieldset>
            </form>
            </>);
}