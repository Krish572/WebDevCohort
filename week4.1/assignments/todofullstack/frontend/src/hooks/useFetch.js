import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url){

    const [todos, setTodos] = useState([]);

    async function getTodos(){
        const t = await axios.get(url, {
            headers: {
                "Authorization" : localStorage.getItem("authorization")
            }
        })
        setTodos(t.data.todos);
    }

    useEffect(() => {
        getTodos();
    }, [url]);

    return {
        todos, "refetch": getTodos
    }
}