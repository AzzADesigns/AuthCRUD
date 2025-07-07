
export  const Button =({children})=> {
    return (
        <button className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-3 text-sm 
        font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2
        focus-visible:bg-indigo-500 focus-visible:focusring-offset-2 disabled:opacity-50 
        disabled:cursor-not-allowed w-full justify-center cursor-pointer">
            {children}
        </button>
    )
}

export default Button