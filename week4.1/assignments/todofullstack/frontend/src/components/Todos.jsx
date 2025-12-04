import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import "../styles/todos.css"
import { useNavigate } from "react-router-dom";

export function Todos(){

    const navigate = useNavigate();

    const {todos, refetch} = useFetch("http://localhost:3000/todos");

    async function handleDelete(id){
        try{
            const response = await axios.delete(`http://localhost:3000/todo/${id}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("authorization")
                    }
                }
            )
            alert("Todo Deleted successfully");
            console.log(response.data);
            refetch();
        }catch(err){
            alert("Error while deleting the Todo")
            console.log(err.response);
        }
    }

    function handleUpdate(id){
        navigate("/user/todo/" + id);
    }

    return (
        <div className="todos-box">
            {todos.length > 0 && todos.map((todo) => (
                <div className="todos" key={todo._id}>
                    <div>
                        <span>
                            Title : 
                        </span>
                        <span>
                            {todo.title}
                        </span>
                    </div>
                    <div>
                        <span>
                            Description :
                        </span>
                        <span>
                            {todo.description}
                        </span>
                    </div>
                    <div>
                        <span>
                            Done :
                        </span>
                        <span>
                            {todo.isCompleted ? "Yes" : "No"}
                        </span>
                    </div>
                    <button onClick={() => {
                        handleDelete(todo._id)
                    }}>
                        Delete
                    </button>
                    <button onClick={() => {
                        handleUpdate(todo._id)
                    }}>
                        Update
                    </button>
                </div>
            ))}
        </div>
    )
}