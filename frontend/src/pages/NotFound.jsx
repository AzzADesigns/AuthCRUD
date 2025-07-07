import {Link} from "react-router-dom"
import { Button, Card } from "../components/ui"

export default function NotFound() {
    return (
        <div className="h-[calc(100vh-64px)] flex justify-center items-center">
            <Card>
                <h1 className="text-4xl font-bold mb-5">Page Not Found</h1>
                <h3 className="text-2xl mb-5">404</h3>
                
                    <Link to={"/"} className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-3 text-sm 
                        font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2
                        focus-visible:bg-indigo-500 focus-visible:focusring-offset-2 disabled:opacity-50 
                        disabled:cursor-not-allowed w-full justify-center cursor-pointer">
                        
                            Go back Home
                    </Link>
            </Card>
        </div>
    )
}