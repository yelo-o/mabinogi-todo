"use client";

import styles from "@/styles/todo.module.css";
import React, { useState, useEffect } from 'react';
import CheckBox from "./checkbox";

export default function Todos({row, deleteBtn}) {
    const [checkBoxIds, setCheckBoxID] = useState([0, 1, 2, 3, 4, 5, 6]);
    // useEffect(() => {
        
    // }, checkDatas);

    return (
        <tr >
            <td>{row.name}</td>
            {checkBoxIds.map((id) => (
                <td key={id}><CheckBox key={id}/></td>
            ))}
            <td><button className={styles.deleteBtn} onClick={() => deleteBtn(row.id)}>X</button></td>
        </tr>

    );
}