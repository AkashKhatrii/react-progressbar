import { useState, useEffect } from "react";
import './progress.css'
export default function ProgressBar(){
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        if (percent < 99){
            setTimeout(() => {
                setPercent(p => p + 2)
            }, 100)
        }
    }, [percent])
    return (
        <div className="bar">
            <span className="percent">{percent}%</span>
            <div className="bar-fill" style={{ width: `${percent}%`}}>
                
            </div>
        </div>
    )
}