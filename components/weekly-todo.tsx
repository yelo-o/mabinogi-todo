'use client';

import styles from "../styles/todo.module.css";
import React, { useState, useEffect } from 'react';

export default function WeeklyTodo() {
    const [rows, setRows] = useState([
        {id: 0, name: '피니펫 블루밍'},
        {id: 1, name: '알상하 || 룬상하 2릴'},
        {id: 2, name: '타라 & 탈틴 일일 퀘스트'},
        {id: 3, name: '베테랑 던전'},
    ]);

    const addtodoClick = () => {
        const todo = prompt('할 일을 입력해주세요 : ');
        if (todo === null || todo === undefined || todo === '') {
            throw new Error('빈값 입력 불가!!');
        } else {
            return todo;
        }
    };
    
    const addRow = () => {
        // 이전 상태를 가져와서 새로운 row를 추가한 후 설정
        setRows([...rows, { id: rows.length + 1, name: addtodoClick() }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    // 상태가 변경될 때마다 로컬스토리지에 데이터를 저장
    useEffect(() => {
        localStorage.setItem('tableRows', JSON.stringify(rows));
    }, [rows]);
    
    useEffect(() => {
        // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터를 가져와 상태로 설정
        const storedRows = JSON.parse(localStorage.getItem('tableRows'));

        if (storedRows) {
            setRows(storedRows);
        }
    }, []);

    

    return <>
        <button className={styles.addBtn} onClick={addRow}>추가</button>
        
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
                    <th>--</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr className={styles.todoTableRow}>
                    <td>씻기</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <button className={styles.deleteBtn} disabled>X</button>
                </tr> */}
                {rows.map(row => (
                    <tr key={row.id} className={styles.todoTableRow}>
                    <td>{row.name}</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><button className={styles.deleteBtn} onClick ={() => deleteRow(row.id)}>X</button></td>
                    </tr>
                ))}
                {/* <tr>
                    <td>피니펫 블루밍</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr>
                    <td>알상하 || 룬상하 2릴</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr>
                    <td>타라 & 탈틴 일일 퀘스트</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr>
                    <td>베테랑 던전</td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                    <td><input type="checkbox"></input></td>
                </tr> */}
            </tbody>
        </table>
    </>
}
