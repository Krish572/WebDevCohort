export function Inputbox({text, data, setData}){
    return (
        <input className="outline-none text-white w-65 text-sm px-4 py-3 rounded-md" style={{backgroundColor : "#18406a"}}
            value={data} 
            onChange={e => setData(e.target.value)}
            placeholder={text}
        />
    )
}