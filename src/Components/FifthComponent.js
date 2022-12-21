const FifthComponent = (props) => {
    return (
        <div>
            <h4>hey siri!</h4>
            <button onClick={() => { props.changeState("siri") }}>button</button>
       <button onClick={()=>{props.changeplace("warangal")}}>btn</button>
        </div>
    )
}
export default FifthComponent;