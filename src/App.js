// import Card from "./pages";
import Card from "./component/Card";
import { useState } from "react";
import "./App.css"
const App =()=>{
    
    const [color , setcolor] = useState()
    return(
        <div id="Container">
           <Card /> 
        </div>
    )
}

export default App;