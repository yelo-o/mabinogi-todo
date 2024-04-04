'use client';

import styles from "../styles/login.module.css";
export default function LoginForm() {
    const loginBtn = () => {
        alert("로그인 아직 안됩니다용")
    }
    const signup = () => {
        location.href="/signup"
    }
    return (<>
            <form>
                <fieldset>
                    <legend>ID와 PASSWORD를 입력해주세요</legend>

                    <label htmlFor="name">ID</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" name="password" id="password" />

                    <input className={styles.loginBtn} type="button" value="Login" onClick={loginBtn}/>
                    {/* <input className={styles.loginBtn} type="submit" value="Login" /> */}

                    <input className={styles.signupBtn} type="button" value="SIGNUP" onClick={signup}/>
                </fieldset>
            </form>
            </>);
}