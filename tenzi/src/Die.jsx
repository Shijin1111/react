function Die(props){
    return(
        <button onClick={()=>props.hold(props.id)}
        style={{backgroundColor:props.isHeld?"green":"blue"}}><b>{props.value}</b></button>
    )
}
export default Die;