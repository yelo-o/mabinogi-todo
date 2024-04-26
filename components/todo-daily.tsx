'use client';

import styles from "@/styles/todo.module.css";
import LocalStorage from "@/app/lib/localstorage";
import React, { useState, useEffect } from 'react';

export default function DailyTodo() {
    const [todos, setTodos] = useState(
        (typeof window !== 'undefined') ? JSON.parse(LocalStorage.getItem('todos')) : []
    )

    // todos = [todo1, todo2, todo3, ...]

    const addRow = () => {
        const todo = prompt('할 일을 입력해주세요 : ');
        if (todo === null || todo === undefined || todo === '') {
            throw new Error('빈값은 입력이 불가능합니다.');
        } else {
            return todo;
        }
    };

    const onClickAddTodo  = () => {
        // 이전 상태를 가져와서 새로운 row를 추가한 후 설정
        setTodos([...todos, 
            { 
                id: todos.length + 1, 
                name: addRow(),
                checkbox: false,
        }]);
    };
    const deleteTodo = (id: any) => {
        confirm("정말 삭제하시겠습니까?") ? setTodos(todos.filter((todo: any) => todo.id != id)) : false
    }

    const checkboxChange = (e: any, todoID: any) => {
        const tagID = e.target.id;
        const { checked } = e.target;
        setTodos(todos.map((todo: any) => {
            if (todo.id === todoID) {
                // todo.id 와 <input/> 찾아서 검색
                return {
                    ...todo,
                    checkbox: todoID === todo.id && tagID === "chkbox" ? checked : todo.checkbox,
                };
            }
            return todo;
        }));
    };

    const logOut = () => {
        LocalStorage.setItem('storedLogin', 'false');
        alert('로그아웃 되었습니다.')
        location.href = "/";
    }
    
    const toWeeklyTodo = () => {
        location.href = "/todo/weekly";
    }

    // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터를 가져와 상태로 설정
    useEffect(() => {
        const storedTodos = JSON.parse(LocalStorage.getItem('todos'));

        if (storedTodos) {
            setTodos(storedTodos);
        } else {
            setTodos([]);
        }
    }, []);

    useEffect(() => {
        LocalStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <>
        <button className={styles.addBtn} onClick={onClickAddTodo}>추가</button>

        <table>
            <thead>
                <tr className={styles.todoTableRow}>
                    <th>할 일</th>
                    <th>체크</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {todos && todos.map((todo:any) => (
                    <tr className={styles.todoTableRow} key={ todo.id }>
                        <td>{ todo.name }</td>
                        <td className={styles.tdChk}>
                            <input className={styles.inputChk} id="chkbox" type="checkbox" checked={todo.checkbox} 
                                onChange={(e) => checkboxChange(e, todo.id)} />
                        </td>
                        <td><button className={styles.deleteBtn}
                            onClick={() => deleteTodo(todo.id)} >X</button>
                        </td>
                    </tr>
                    ))}
            </tbody>

        </table>

        <button className={styles.logOutBtn} onClick={logOut}>로그아웃</button>
        <button className={styles.todoCheckOutBtn} onClick={toWeeklyTodo}>Weekly-Todo</button>
        </>
    )


}