import { useNavigate } from "react-router-dom"

export function Button({text, data, navigateTo}){
    const navigate = useNavigate();
    return(
        <button
            onClick={() => navigate(navigateTo)}
            disabled={!data.trim()}
            className="w-65 bg-green-400 cursor-pointer rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-sm px-4 py-2"
        >{text}</button>
    )
}