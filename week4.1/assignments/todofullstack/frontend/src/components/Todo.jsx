import { useEffect, useState } from "react"
import axios from "axios";
import "../styles/todo.css"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Todo(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [todo, setTodo] = useState({
        "title" : "",
        "description" : ""
    });

    useEffect(() => {
        if(!id) return;
        axios.get(`http://localhost:3000/todo/${id}`, {
            headers: {
                Authorization: localStorage.getItem("authorization")
            }
        }).then((res) => {
            console.log(res.data);
            setTodo({
                title: res.data.todo.title,
                description: res.data.todo.description 
            })
        }).catch(err => {
            console.log(err);
        })  
        }, [id])

    function handleChange(e){
        const {name, value} = e.target;
        setTodo((prev) => ({
            ...prev, 
            [name]: value
        }))
    };


    async function handleAdd(){
        const authorization = localStorage.getItem("authorization");
        try{
            if(id){
                await axios.put(`http://localhost:3000/todo/${id}`,todo, {
                    headers: {
                        Authorization: localStorage.getItem("authorization")
                    }
                })
                alert("Todo Updated Successfully"); 
            }else{
                await axios.post("http://localhost:3000/todo", todo, {
                    headers: {
                        authorization
                    }
                });
                alert("Todo Added Successfully");
                setTodo({
                    "title": "",
                    "description": ""
                })
            }
            navigate("/user/todos");
            
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <h1>{id ? "Update Todo" : "Create Todo"}</h1>
        <div className="todo-div">
            <div>
                <span>Title</span>
                <input placeholder="Enter the todo"
                    value={todo.title}
                    name="title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>Description</span>
                <textarea placeholder="Enter the description"
                    value={todo.description}
                    name="description"
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleAdd}>{id ? "Update Todo" : "Add Todo"}</button>
        </div>
        </>
    )
}