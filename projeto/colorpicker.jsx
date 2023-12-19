import { useState } from "react"
function Colorpicker(){
    const [color , setcolor] = useState('#fff');

    function handlecolorchange(event){
        setcolor(event.target.value)
    }

    return(
        <div className="ColorPicker">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
          <p>selected color: {color}</p>
        </div>
      <label>Selected color:</label>
      <input type="color"  value={color} onChange={handlecolorchange}/>
      </div>
        
    )
}
export default Colorpicker