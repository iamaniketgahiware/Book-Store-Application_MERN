import React from 'react'
import Login from './Login'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Signup() {
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

                <div className="flex h-screen justify-center items-center">
                    <div className=" modal-box border = [2px] p-7 rounded shadow-md  dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">SignUp Form</h3>
                            <div className="mt-4 space-y-4">
                                <p>UserEmail</p>
                                <input
                                    type="email"
                                    placeholder=" Enter your Email.."
                                    className="w-80 h-8 border outline-none rounded-md text-black"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-red-500">Email is required</p>}
                                <p>Password</p>
                                <input
                                    type="password"
                                    placeholder=" Enter your Password.."
                                    className="w-80 h-8 border outline-none rounded-md text-black"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <p className="text-red-500">Password is required</p>}
                            </div>
                            <div className="flex mt-6">
                                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">Sign Up</button>
                                <p className='ml-40'>Have Account? <button onClick={() => document.getElementById("my_modal_3").showModal()} className="underline text-pink-500 cursor-pointer" >Login</button>{" "}<Login /></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup