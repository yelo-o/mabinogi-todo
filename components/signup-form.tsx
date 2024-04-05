'use client';

import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import styles from "../styles/login.module.css";
import LocalStorage from '../app/lib/localstorage';

export default function LoginForm() {
    const [join, setJoin] = useState({
        name: LocalStorage.getItem('userid') || '디폴트',
        password: LocalStorage.getItem('userpasswd') || '디폴트',
        password2: LocalStorage.getItem('userpasswd2') || '디폴트',
    })
    const [isSignUp, setIsSignUp] = useState(false);

    const router = useRouter();

    const onChangeSignUpHandler = (e) => {
        const id = e.target.name.value;
        const pwd1 = e.target.password.value;
        const pwd2 = e.target.password2.value;
        if (pwd1 !== pwd2) {
            alert("비밀번호가 서로 다릅니다.")
            return false;
        }

        let newObj = {
            name: id,
            password: pwd1,
            password2: pwd2 
        };
        setJoin(newObj);
        setIsSignUp(true);
        alert("회원가입 성공")
        LocalStorage.setItem('storedSignUp', 'true');
        // router.push("/");
      };


    // useEffect(() => {
    //     const storedUserId = LocalStorage.getItem('userid');
    //     const storedUserPwd = LocalStorage.getItem('userpasswd');
    //     const storedUserPwd2 = LocalStorage.getItem('userpasswd2');
    //     if (storedUserId) {
    //         let newObj = {
    //             name: storedUserId,
    //             password: storedUserPwd,
    //             password2: storedUserPwd2 
    //         };
    //         setJoin(newObj)
    //     }
    // }, [])

    useEffect(() => {
        console.log("렌더링 후 먼저 실행 됨");
        LocalStorage.setItem('userid', join.name || '디폴트');
        LocalStorage.setItem('userpasswd', join.password || '디폴트');
        LocalStorage.setItem('userpasswd2', join.password2 || '디폴트');
        const isSignUp = LocalStorage.getItem('storedSignUp') || '디디';

        if (isSignUp === 'true') {
            router.push("/");
        }
    },[join])
    const toLoginForm = () => {
        location.href = "/";

    }

    return (<>
            <form onSubmit={onChangeSignUpHandler}>
                <fieldset>
                    <legend>회원가입</legend>

                    <label htmlFor="name">ID</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="password">비밀번호를 입력해주세요</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="password">비밀번호를 다시 한번 입력해주세요</label>
                    <input type="password" name="password2" id="password2" />

                    <input className={styles.signupIdSaveBtn} type="submit" value="Save" />
                    <input className={styles.toLoginFormBtn} type="button" value="취소" onClick={toLoginForm}/>
                </fieldset>
            </form>
            </>);
}