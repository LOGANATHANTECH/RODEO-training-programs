import Card from "./SingleToDoCard";
import "./css/BoardContent.css"
function BoardContent() {
    return(
        <div className="boardContent" >
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default BoardContent;