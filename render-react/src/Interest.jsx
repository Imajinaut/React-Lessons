import { useState } from "react";

export default function InterestCalculator() {
    
    
    const [principalAmount, setPrincipalAmount]=useState("")


    const [interestRate, setInterestRate] = useState("")

    const [Roi, setROI] = useState("")

    const calculateROI = ()=>{
        let interest = (principalAmount*interestRate)/100 
        setROI(interest)
    }

    return(
        <div>
            <h1>Calculate your annual interest</h1>
            
                <div className="input-group">
                    <label htmlFor="principal">Enter Amount</label>
                    <input 
                    type="number" 
                    id="principal"
                    name="principal"
                    value={principalAmount || ""}
                    onChange={(e)=>setPrincipalAmount(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="rate">Prefered Interest Rate(%)</label>
                    <input 
                    type="number" 
                    name="rate"
                    id="rate"
                    value={interestRate || ""}
                    onChange={(e)=>setInterestRate(e.target.value)}
                    
                    />
                    <button onClick={calculateROI}>See ROI</button>

                    <h1> ROI (NGN): {Roi}</h1>
                </div>
            
        </div>
    )
}