import { useAuth } from "../context/AuthContext"


export default function HomePage() {
    const data= useAuth()
    console.log(data)


    return (
        <div>
            <h1 className="">Home Page</h1>
        </div>
    )
}