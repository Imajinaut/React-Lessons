import { useEffect, useState } from "react"

export default function Effecter() {
    

    const [countValue, setCountValue] = useState(0)

    useEffect(()=>{
        document.title = `Joseph ${countValue}`
    }, [countValue])

    


    return(
        <div>
            <button onClick={()=>setCountValue(countValue+1)}>Click To Count</button>
            <h1>Count: {countValue}</h1>
        </div>
    )
}