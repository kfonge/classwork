// import Data from "./data"

function SentAnal(props) {
    console.log(props.number.num)
    return (
        <div className="sentAnal">
        
            <div>
            <h4>{props.number.num}</h4>
            </div>
        </div>
        )

}

export default SentAnal;