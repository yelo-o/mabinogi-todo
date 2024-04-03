'use client';

import { useState, useEffect } from 'react';

export default function CheckBox({ checked, onChange }: any) {
    const [ischecked, setIsChecked] = useState(false);
    
    return (
        <input type="checkbox" 
            checked={ ischecked } 
            onChange={({ target: { checked } }) => onChange(checked)} 
        />
    )
}