import { forwardRef } from "react"

export  const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} type="text" className='bg-zinc-800 px-3 py-3 block my-2 w-full' {...props}/>
    )

})



export default Input