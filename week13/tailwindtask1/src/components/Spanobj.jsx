export function Spanobj({text, isheading}){
    return (
        <span className={`${isheading ? "text-3xl font-bold text-white" : "text-sm text-gray-500"}`}>{text}</span>
    )
}