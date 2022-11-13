const Star = ({color , width , height , margintop} )=>{
    // console.log(width )
    const style = {
        backgroundColor : color,
        width: width,
        height: height,
        marginTop : margintop
    }
    return(
        <div id="starConatiner">
        
        <div id="star2" style={style}>

        </div>

       
        </div>
    )
}

export default Star;