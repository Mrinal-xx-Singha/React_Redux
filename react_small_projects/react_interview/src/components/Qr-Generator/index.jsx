import QRCode from "react-qr-code"
import "./styles.css"
import { useState } from "react"

const QrGnerator = () => {
  
  
    const [qrCode,setQrCode]=useState("")
    const [input,setInput]=useState("")
    
    
    function handleGenerateCode(){
        setQrCode(input)
        setInput("")

    }
    
    return (
   
    <div className='qr-container'>
        <h1>Qr Code Generator</h1>
        <div>
            <input
            placeholder="Enter your value here"
            type="text" name="qr-code"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            />
            <button

            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateCode}
            
            >Generate</button>
        </div>
        <div>
            <QRCode
            value={qrCode}
            size={400}
            bgColor="white"
            id="qr-code-value"
            />
        </div>

    </div>
  )
}

export default QrGnerator