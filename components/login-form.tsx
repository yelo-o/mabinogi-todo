'use client';

import LocalStorage from "../app/lib/localstorage";
import {useRouter} from 'next/navigation';
import styles from "../styles/login.module.css";
import React, { useState, useEffect } from 'react';
export default function LoginForm() {
    const loginBtn = () => {
        alert("로그인 아직 안됩니다용")
    }
    const signup = () => {
        location.href="/signup"
    }

    const [iid, setIid] = useState();
    const [ppwd, setPpwd] = useState();

    const router = useRouter();

    const deleteId = () => {
        LocalStorage.removeItem('userid');
        LocalStorage.removeItem('userpasswd');
        LocalStorage.removeItem('userpasswd2');
    }

    const onChangeLoginHandler = (e) => {
        const loginId = e.target.name.value;
        const loginPwd = e.target.password.value;
        
        const savedId = LocalStorage.getItem('userid');
        const savedPwd = LocalStorage.getItem('userpasswd');
        
        // debugger;

        if (savedId === loginId && savedPwd === loginPwd) {
            alert('로그인 성공!')
            router.push("/todo");
        } 
    }
    
    // useEffect(() => {
    //     const savedId = LocalStorage.getItem('join.nickname');
    //     const savedPwd = LocalStorage.getItem('join.password');

    //     setIid(savedId);
    //     setPpwd(savedPwd);

    //     // console.log(iid);
    //     // console.log(ppwd);

        
    // },[iid, ppwd])

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

                    <input className={styles.signupBtn} type="button" value="SIGNUP" onClick={signup}/>
                    <input className={styles.signupBtn} type="button" value="계정 삭제" onClick={deleteId}/>
                </fieldset>
            </form>
            </>);
}