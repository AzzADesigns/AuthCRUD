import {Button, Card, Input, Label} from "../components/ui"
import {useForm} from "react-hook-form"
import axios from "axios"
import { Link } from "react-router-dom"


export default function RegisterPage() {

 

    const {
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm()

    const onSubmit = handleSubmit( async (data )=> {
        console.log(data)
        const res = await axios.post("http://localhost:3000/api/signup", data, {withCredentials: true})
        console.log(res)
    })

    console.log(errors)

    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
            <Card>
                <h3 className="text-2xl font-bold">Register</h3>

                <form onSubmit={onSubmit} className="mt-5">
                    <Label htmlFor="name">Fullname</Label>
                    <Input {...register("name",{required:true})} placeholder="Enter your fullname"/>
                    {
                        errors.name && <p className="text-red-500">text is required</p>
                    }

                    <Label htmlFor="email">Email</Label>
                    <Input {...register("email",{required:true})} type="email" placeholder="enter your email"/>
                    {
                        errors.email && <p className="text-red-500">email is required</p>
                    }

                    <Label htmlFor="password">Password</Label>
                    <Input {...register("password",{required:true})} type="password" placeholder="enter your password" />
                    {
                        errors.password && <p className="text-red-500">password is required</p>
                    }
                    <Button>Register</Button>

                    <div className="flex justify-between my-4">
                        <p>
                            Already have an account? <Link to="/login" className="font-bold">Login</Link>
                        </p>
                    </div>
                </form>
            </Card>
        </div>
    )
}