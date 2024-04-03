"use client";

import styles from "../styles/todo.module.css";
import React, { useState, useEffect } from 'react';
import CheckBox from "./checkbox";

export default function Todos({row, deleteRow}) {
    const [checkData, setCheckData] = useState();

    return (
        <tr key={row.id}>
            <td>{row.name}</td>
                {/* <td><CheckBox checked={checkData[0]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[1]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[2]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[3]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[4]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[5]} onChange={setCheckData} /></td>
                <td><CheckBox checked={checkData[6]} onChange={setCheckData} /></td> */}
                {checkData.map((checked, index) => (
                <td key={index}><CheckBox key={index} checked={checked} onChange={setCheckData} /></td>
            ))}
                <td><button className={styles.deleteBtn} onClick={() => deleteRow(row.id)}>X</button></td>
        </tr>

    );
}