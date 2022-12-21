const FourthComponent = (props) =>{
    return(
        <div>
            <h1>{props.varname} {props.varobj[0].name} {props.varobj[0].place}
            </h1>
            <h2>{props.varobj[1].name} {props.varobj[1].age} {props.varobj[1].place}</h2>
            </div>
    )
}
export default FourthComponent;