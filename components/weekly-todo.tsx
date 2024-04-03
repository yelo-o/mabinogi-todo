'use client';

import styles from "../styles/todo.module.css";
import React, { useState, useEffect } from 'react';

export default function WeeklyTodo() {
    // const [rows, setRows] = useState([
    //             {id: 1, name: '피니펫 블루밍'},
    //             {id: 2, name: '알상하 || 룬상하 2릴'},
    //             {id: 3, name: '타라 & 탈틴 일일 퀘스트'},
    //             {id: 4, name: '베테랑 던전'},
    //         ]);
    const [rows, setRows] = useState( () => {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem("tableRows");
            return JSON.parse(localData);
        } else {
            const initialVal = [
                {id: 1, name: '피니펫 블루밍', 
                    // checkboxMon: 1,
                    // checkboxTue: 0,
                    // checkboxWed: 1,
                    // checkboxThu: 0,
                    // checkboxFri: 1,
                    // checkboxSat: 1,
                    // checkboxSun: 1
                },
                {id: 2, name: '알상하 || 룬상하 2릴'},
                {id: 3, name: '타라 & 탈틴 일일 퀘스트'},
                {id: 4, name: '베테랑 던전'},
            ]
            return initialVal;
        }
    });


    const addRow = () => {
        const todo = prompt('할 일을 입력해주세요 : ');
        if (todo === null || todo === undefined || todo === '') {
            throw new Error('빈값 입력 불가!!');
        } else {
            return todo;
        }
    };
    
    // 등록 버튼 클릭
    const onClickAddTodo  = () => {
        // 이전 상태를 가져와서 새로운 row를 추가한 후 설정
        setRows([...rows, { id: rows.length + 1, name: addRow() }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터를 가져와 상태로 설정
        const storedRows = JSON.parse(localStorage.getItem('tableRows'));

        if (storedRows) {
            setRows(storedRows);
        }
    }, []);

    // 상태가 변경될 때마다 로컬스토리지에 데이터를 저장
    useEffect(() => {
        localStorage.setItem('tableRows', JSON.stringify(rows));
    }, [rows]);
    
    return <>
        <button className={styles.addBtn} onClick={onClickAddTodo}>추가</button>
        
        <table>
            <thead>
                <tr className={styles.todoTableRow}>
                    <th>TODO</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row: any) => (
                    <tr key={row.id} className={styles.todoTableRow}>
                    <td>{row.name}</td>
                    <td><input type="checkbox" checked={row.checkboxMon} /></td>
                    <td><input type="checkbox" checked={row.checkboxTue} /></td>
                    <td><input type="checkbox" checked={row.checkboxWed} /></td>
                    <td><input type="checkbox" checked={row.checkboxThu} /></td>
                    <td><input type="checkbox" checked={row.checkboxFri} /></td>
                    <td><input type="checkbox" checked={row.checkboxSat} /></td>
                    <td><input type="checkbox" checked={row.checkboxSun} /></td>
                    <td><button className={styles.deleteBtn} onClick ={() => deleteRow(row.id)}>X</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
