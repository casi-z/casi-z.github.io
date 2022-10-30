import React from "react";
import { buttons } from "./buttonComponent";
function Button({n, action, ...props}) {
    
    return(
       buttons.map((button, index) =>(
            <div key={index} onClick={() => {action(button)}} className="calculator__button">
                {button.val}
            </div>
       ))
    )
}
export default Button;