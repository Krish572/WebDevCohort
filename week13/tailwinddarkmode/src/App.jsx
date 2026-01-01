import { useEffect, useState } from "react"


function App() {

  return (
    <div className="flex bg:text-white">
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

function Sidebar(){
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    const handlResize = () => {
      if(window.innerWidth < 786){
        setOpenSidebar(false);
      }else{
        setOpenSidebar(true);
      }
    }
    window.addEventListener("resize", handlResize);
    handlResize();
  }, [])

  return (
    <div className={`fixed top-0 left-0 md:relative transition-all duration-500 bg-red-300 h-screen ${openSidebar ? "w-96" : "w-20"}`}>
      <button className="cursor-pointer" onClick={() => setOpenSidebar(current => !current)}>click me</button>
      <span>I am side bar</span>
    </div>
  )
}

function Maincontent(){
  return (
    <div className="w-full bg-green-300 min-h-screen flex flex-col">
      <div className="bg-orange-500 h-30 hidden md:block">
        I am just background (might not be in mobile)
      </div>
      <div className="grid grid-cols-12 gap-10 p-10">
        <Profile/>
        <Calender/>
        <Updates/>
      </div>
    </div>
  )
}

function Profile(){
  return(
    <div className="col-span-3 bg-red-200 h-96 -translate-y-20 hidden md:block">
      I am profile
    </div>
  )
}

function Calender(){
  return (
    <div className="md:col-span-5 bg-blue-200 h-108 col-span-12">
      I am calender View
    </div>
  )
}

function Updates(){
  return (
    <div className="md:col-span-4 bg-green-200 h-96 col-span-12">
      I am update view
    </div>
  )
}

export default App
