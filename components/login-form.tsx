'use client';

import LocalStorage from "@/app/lib/localstorage";
import styles from "@/styles/login.module.css";
import {useRouter} from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function LoginForm() {
    const signUp = () => {
        const storedSignUp = LocalStorage.getItem("storedSignUp");
        if (storedSignUp !== 'true') {
            location.href="/signup";
        } else {
            alert('이미 계정이 있습니다.')
        }
    }

    const [iid, setIid] = useState();
    const [ppwd, setPpwd] = useState();
    const [isLogin, setIsLogin] = useState(false);

    const router = useRouter();

    const deleteId = () => {
        LocalStorage.removeItem('userid');
        LocalStorage.removeItem('userpasswd');
        LocalStorage.removeItem('userpasswd2');
        LocalStorage.removeItem('storedLogin');
        LocalStorage.removeItem('storedSignUp');
        alert('계정이 삭제되었습니다.')
    }

    const onChangeLoginHandler = (e) => {
        const loginId = e.target.name.value;
        const loginPwd = e.target.password.value;
        
        const savedId = LocalStorage.getItem('userid');
        const savedPwd = LocalStorage.getItem('userpasswd');
        
        if (savedId === loginId && savedPwd === loginPwd) {
            alert('로그인 성공!')
            setIsLogin(true);
            LocalStorage.setItem('storedLogin', 'true');
        } else {
            alert('다시 확인해주세요');
        }
    }
    
    useEffect(() => {
        // const savedId = LocalStorage.getItem('userid');
        // const savedPwd = LocalStorage.getItem('userpasswd');
        const isLogin = LocalStorage.getItem('storedLogin');
        if (isLogin === 'true') {
            router.push("/todo");
        }
        
    },[iid, ppwd])

    return (<>
            <form onSubmit={onChangeLoginHandler}>
                <fieldset>
                    <legend>ID와 PASSWORD를 입력해주세요</legend>

                    <label htmlFor="name">ID</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password" />

                    {/* <input className={styles.loginBtn} type="button" value="Login" onClick={loginBtn}/> */}
                    <input className={styles.loginBtn} type="submit" value="Login" />

                    <input className={styles.signupBtn} type="button" value="SIGNUP" onClick={signUp}/>
                    <input className={styles.deleteIDBtn} type="button" value="계정 삭제" onClick={deleteId}/>
                </fieldset>
            </form>
            </>);
}