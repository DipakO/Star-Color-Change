import { useState } from "react"
import Star from "./star"
const Card = ()=>{
    const [color ,setcolor] = useState("red")
    // const handleChange = (e)=>{
    //     setcolor(e)       
    // }
    return(

        <div id="card">
        <input onChange={(e)=>setcolor(e.target.value)} id="input" type="text" placeholder="Valid Color Name"/>
        <div id="heading">
        <h1 className="h1" id="h11" style={{color : color}}>MAXOTAG </h1>
        <h1 className="h1" id="h1" style={{ color : color}}> TECHNOLOGY</h1>
        </div>
        <div style={{display : "flex"}}>
        <Star setcolor={setcolor}  color = {color} width = "10vw" height = "24vh"/>
        <Star setcolor={setcolor}  color = {color} width = "17vw" height = "40vh" margintop = "2.8rem"/>
        <Star setcolor={setcolor}  color = {color} width = "10vw" height = "24vh"/>
        </div>
        {/* <div id="star" style={{ backgroundColor : color}}> */}

{/* </div> */}
        </div>
    )
}

export default Card