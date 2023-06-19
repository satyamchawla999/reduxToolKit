import { useDispatch,useSelector } from "react-redux";
import { addData } from "../features/todo/todoSlice";


const Data = ()=>{
    const dispatch = useDispatch();

    const info = useSelector((state)=>state.todo.data);

    const data = {
        name:"satyam",
        organisation:"zenmonk"
    }

    const handleSubmit = ()=>{
        dispatch(addData(data))
    }

    return (
        <div>
            <button onClick={handleSubmit}>
                Add Data
            </button>

           
        </div>
    )
}

export default Data;