'use client';

import React, { useState, useEffect } from 'react';
import styles from "../styles/login.module.css";
import LocalStorage from '../app/lib/localstorage';

export default function LoginForm() {
    const [join, setJoin] = useState({
        nickname: LocalStorage.getItem('join.nickname'),
        password: LocalStorage.getItem('join.password'),
        password2: LocalStorage.getItem('join.password2'),
    }
        // {
        // nickname: '',
        // password: '',
        // password2: ''
        // }
    )

    const onChangeLoginHandler = (e) => {
        const { name, value } = e.target;


        console.log(name)
        console.log(value)
        // debugger
        const id = e.target.name.value;
        const pw1 = e.target.password.value;
        const pw2 = e.target.password2.value;
        if (pw1 !== pw2) {
            alert("비밀번호가 서로 다릅니다.")
            return false;
        }

        let newObj = {
            nickname: id,
            password: pw1,
            password2: pw2 
        };
        setJoin(newObj);
      };

    const signupHandler = (e) => {
        console.log(e.target);
        console.log(join.nickname);
      };

    useEffect(() => {
        LocalStorage.setItem('join.nickname', join.nickname);
        LocalStorage.setItem('join.password', join.password);
        LocalStorage.setItem('join.password2', join.password2);
    },[join])

    return (<>
            <form onSubmit={onChangeLoginHandler}>
                <fieldset>
                    <legend>회원가입</legend>

                    <label htmlFor="name">ID</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="password">비밀번호를 입력해주세요</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="password">비밀번호를 다시 한번 입력해주세요</label>
                    <input type="password" name="password2" id="password2" />

                    <input className={styles.signupBtn} type="submit" value="Save" />
                </fieldset>
            </form>
            </>);
}