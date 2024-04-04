'use client';

import styles from "../styles/todo.module.css";
import React, { useState, useEffect } from 'react';
import LocalStorage from "../app/lib/localstorage";

export default function WeeklyTodo() {
    // const [rows, setRows] = useState([]);
    const [rows, setRows] = useState(
        (typeof window !== 'undefined') ? JSON.parse(LocalStorage.getItem('tableRows')) : []
    )
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
        setRows([...rows, 
            { 
                id: rows.length + 1, 
                name: addRow(),
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                checkbox4: false,
                checkbox5: false,
                checkbox6: false,
                checkbox7: false,
        }]);
    };

    // 체크박스 값 변경 시 호출되는 함수
    const handleCheckboxChange = (e, rowID) => {
        const tagID = e.target.id;
        const { checked } = e.target;
        setRows(rows.map(row => {
            if (row.id === rowID) {
                // row.id 와 <input/> 찾아서 검색
                return {
                    ...row,
                    checkbox1: rowID === row.id && tagID === "chkbox1" ? checked : row.checkbox1,
                    checkbox2: rowID === row.id && tagID === "chkbox2" ? checked : row.checkbox2,
                    checkbox3: rowID === row.id && tagID === "chkbox3" ? checked : row.checkbox3,
                    checkbox4: rowID === row.id && tagID === "chkbox4" ? checked : row.checkbox4,
                    checkbox5: rowID === row.id && tagID === "chkbox5" ? checked : row.checkbox5,
                    checkbox6: rowID === row.id && tagID === "chkbox6" ? checked : row.checkbox6,
                    checkbox7: rowID === row.id && tagID === "chkbox7" ? checked : row.checkbox7
                };
            }
            return row;
        }));
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
            <tbody >
                {rows && rows.map((row: any) => (
                    <tr className={styles.todoTableRow} key={ row.id }>
                        <td>{ row.name }</td>
                        <td><input id="chkbox1" type="checkbox" checked={row.checkbox1} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox2" type="checkbox" checked={row.checkbox2} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox3" type="checkbox" checked={row.checkbox3} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox4" type="checkbox" checked={row.checkbox4} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox5" type="checkbox" checked={row.checkbox5} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox6" type="checkbox" checked={row.checkbox6} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><input id="chkbox7" type="checkbox" checked={row.checkbox7} onChange={(e) => handleCheckboxChange(e, row.id)}/></td>
                        <td><button className={styles.deleteBtn} onClick={ () => deleteRow(row.id) } >X</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}