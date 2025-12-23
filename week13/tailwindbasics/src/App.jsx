

function App() {

  return (
    <>
      FLEX practice
      <div className="flex justify-between">
        <div className="bg-red-300">
          child 1
        </div>
        <div className="bg-blue-300">
          child 2
        </div>
        <div className="bg-green-300">
          child 3
        </div>
      </div>

      GRID practice
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-red-300">
          child 1
        </div>
        <div className="col-span-6 bg-blue-300">
          child 2
        </div>
        <div className="col-span-3 bg-green-300">
          child 3
        </div>
      </div>

      RESPONSIVE practice
      <div className="bg-blue-300 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-gray-300">
        Sample text
      </div>

      GRID exersice
      <div className="grid grid-cols-12">
        <div className="bg-red-300 col-span-12 sm:col-span-4">
          Hi from fird div
        </div>
        <div className="bg-blue-300 col-span-12 sm:col-span-4">
          Hi from second div
        </div>
        <div className="bg-green-300 col-span-12 sm:col-span-4">
          Hi from third div
        </div>
      </div>
    </>
  )
}

export default App
