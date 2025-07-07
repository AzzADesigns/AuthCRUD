import { Link } from "react-router-dom";
import { Card, Input, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios"



export default function LoginPage() {

    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit( async (data)=>{
        console.log(data)
        const res = await axios.post("http://localhost:3000/api/signin", data, {
            withCredentials: true
        })
        console.log(res)
    })

    return (
        <div className="h-[calc(100vh-64px)] flex justify-center items-center">
            <Card>
                <h1 className="text-4xl font-bold my-2 text-center">Signin</h1>

                <form onSubmit={onSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="Email" {...register("email",{
                        required: true
                    })}/>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" placeholder="Password" {...register("password",{
                        required: true
                    })}/>
                    <Button>
                        Sign in
                    </Button>

                    <div className="flex justify-between my-4">
                        <p>
                            Don´t have an account? <Link to="/register" className="font-bold">Register</Link>
                        </p>
                    </div>

                </form>

            </Card>
        </div>
    )
}