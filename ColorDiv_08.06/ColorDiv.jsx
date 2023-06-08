import './ColorDiv.css'
import { useState } from "react"



export const ColorDiv = () => {
   const simColor = "grey"
    const [color, setColor] = useState(simColor)

  const mouseOn = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColor(`#${randomColor}`)

    }
    const mouseOut = () => {
        setColor(simColor)
    }

    return (
        <div className= 'mainDiv'
       style={{ backgroundColor:color }}
        onMouseEnter={mouseOn}
        onMouseLeave={mouseOut}
        >
        </div>
    )
}