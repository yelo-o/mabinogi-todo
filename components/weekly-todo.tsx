'use client';

import styles from "../styles/todo.module.css";
import React, { useState, useEffect } from 'react';
import LocalStorage from "../app/lib/localstorage";
import Todos from "./todos";

export default function WeeklyTodo() {
    const [rows, setRows] = useState([]);

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
        setRows([...rows, { 
            id: rows.length + 1, 
            name: addRow()
        }]);
    };

    const deleteRow = (id: any) => {
        setRows(rows.filter(row => row.id !== id));
    };

    // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터를 가져와 상태로 설정
    useEffect(() => {
        const storedRows = JSON.parse(LocalStorage.getItem('tableRows'));

        if (storedRows) {
            setRows(storedRows);
        }
    }, []);

    // 상태가 변경될 때마다 로컬스토리지에 데이터를 저장
    useEffect(() => {
        LocalStorage.setItem('tableRows', JSON.stringify(rows));
    }, [rows]);
    
    return (
    <>
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
                    <Todos key={row.id} row={row} deleteRow={deleteRow}/>
                ))}

                {/* {rows.map((row: any) => (
                    <tr key={row.id} className={styles.todoTableRow}>
                        <td>{row.name}</td>
                        <td><CheckBox checked={row.checkStatus.monCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.monCheck, 0)}/></td>
                        <td><CheckBox checked={row.checkStatus.tueCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.tueCheck, 1)}/></td>
                        <td><CheckBox checked={row.checkStatus.wedCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.wedCheck, 2)}/></td>
                        <td><CheckBox checked={row.checkStatus.thuCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.thuCheck, 3)}/></td>
                        <td><CheckBox checked={row.checkStatus.friCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.friCheck, 4)}/></td>
                        <td><CheckBox checked={row.checkStatus.satCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.satCheck, 5)}/></td>
                        <td><CheckBox checked={row.checkStatus.sunCheck} onChange={() => handleCheckboxChange(row.id, row.checkStatus.sunCheck, 6)}/></td>
                        <td><button className={styles.deleteBtn} onClick={() => deleteRow(row.id)}>X</button></td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    </>
    )
}
