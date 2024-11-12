import { useState , useMemo} from "react"

export default function MemoLesson() {

    const [countValue, setCountValue] = useState(0)

    const [number, setNumber]=useState('')


    const bigCalculation = (number) =>{
        let loopTime = 0
        for (let x = 0; x < 100000000; x++) {
            loopTime+=number
            
        }
        return loopTime
    }
    
    const addedValue = useMemo(()=>bigCalculation(number),[number])
    
    return(
        <div>
            <h3> Huge Part Of Component</h3>
            <input type="number" 
            id="number"
            value={number}
            onChange={(e)=>setNumber(parseInt(e.target.value) || "")}
            />
            <h1>The result of the big calculation is: {addedValue}</h1>
            <p>Light Part Of The Component</p>
            <button onClick={()=>setCountValue(countValue+1)}>Click To Count</button>
            <h1>Count Is: {countValue}</h1>

        </div>
    )
}