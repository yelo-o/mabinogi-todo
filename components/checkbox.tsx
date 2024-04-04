'use client';

import { useState, useEffect } from 'react';

export default function CheckBox() {
    const [ischecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        console.log(e.target.checked);
        setIsChecked(!ischecked);
    }
    return (
        <input type="checkbox" 
            checked={ ischecked } 
            onChange={ handleCheckboxChange }
        />
    )
}