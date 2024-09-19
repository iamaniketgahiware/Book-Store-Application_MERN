import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box  dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
                            <h3 className="font-bold text-lg">Login Form</h3>
                            <div className="mt-4 space-y-4">
                                <p>UserEmail</p>

                                <input type="email"
                                    placeholder=" Enter your Email.."
                                    className="w-80 h-8 border outline-none rounded-md text-black"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-red-500">Email is required</p>}

                                <p>Password</p>
                                <input type="password"
                                    placeholder=" Enter your Password.."
                                    className="w-80 h-8 border outline-none rounded-md text-black"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <p className="text-red-500">Password is required</p>}

                            </div>
                            <div className="flex mt-6">
                                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">Login</button>
                                <p className='ml-40'>Not Registered? <Link to={"/signup"} className="underline text-pink-500 cursor-pointer" >SignUp</Link></p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login