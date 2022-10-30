import React from "react";
import { useRef } from "react";
function Input({children, n}) {
    
    return(
       <div ref={n} className="calculator__input">{children}</div>
    )
}
export default Input;