

export function Hero(){

    return (
        <div className="flex h-screen dark:bg-black relative">

            <div className="flex flex-col transition-all duration-1000 w-0 md:w-64 bg-white dark:bg-gray-800 text-black dark:text-white">
                <span>Sidebar</span>

                <button
                    onClick={() => {
                        document.documentElement.dataset.theme =
                        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
                        console.log(document.documentElement);
                    }}
                    className="cursor-pointer bg-gray-200 dark:bg-gray-700"
                >
                    Toggle DarkMode
                </button>
            </div>

            <div className="flex-1 text-black bg-testColor dark:text-white">
                Context
            </div>
        </div>
    )
}