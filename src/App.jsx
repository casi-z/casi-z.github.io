import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input.jsx";
import { buttons } from "./components/buttonComponent";
const log = n => console.log(n);

function App() {
    
    const [val, setVal] = useState(0)
    const [operation, setOperation] = useState(null)
    
    
    function calculator(buttonValue) {
        val === 0 ? setVal(buttonValue) : setVal(val + buttonValue)
    }
    
    function doCalc(){
        setVal(eval(val))
    }
    function clearOutput(params) {
        setVal(0)
    }
    function kbButtons(e) {
        console.log(e.key);
        buttons.map(button => {
            if(e.key === button.val || e.key === button.val.toLowerCase()) action(button)

        })
    }
    function action(button) {
        if(button.val === 'null') return
        if(button.type === 'number'){
            if(val == 0 && button.val === '0') return
            calculator(button.val)
            setOperation(null)
        } 
        if(button.type === 'operator') {
            if(val == 0) return
            operation ? setVal(val.slice(0, -1) + button.val) : calculator(button.val)
            setOperation(true)
        }
        if(button.type === 'CLS') clearOutput()
        if(button.type === 'clear') setVal(val - val.at(-1))

        if(button.type === 'equally') doCalc()
            
    }
    function themeChange(e){
        e.target.classList.add('_active')
        
        setTimeout(() => {
            
            e.target.classList.remove('_active')
        }, 2000);
        setTimeout(() => {
            document.body.classList.toggle('_light')
        }, 400);
    }
  return (
    <div className="wrapper">
        <div onClick={e => themeChange(e)} className="theme-button">

        </div>
        <div tabIndex="0" onKeyDown={e => kbButtons(e)} className="calculator">
            <Input>{val}</Input>
            <Button action={action}/>
        </div>
    </div>    
  );
}

export default App;
