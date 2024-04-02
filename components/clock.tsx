'use client';

import { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return (() => clearInterval(id))}
        , []);

        return (
            <div>
                <span suppressHydrationWarning>{time.toLocaleTimeString()}</span>
            </div>
        )
    }
