import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {
    const toDos =useRecoilValue(toDoState);
    console.log(toDos);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </div>
    );
}

/* interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    passwordAgain: string;
    extraError?: string;
}

function ToDoList(){
    const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if(data.password !== data.passwordAgain) {
            setError(
                "password", 
                { message: "Password are not the same"}, 
                {shouldFocus: true}
            );
        }
        //setError("extraError", {message: "Server offline."});
    };
    console.log(errors);
    return (
        <div>
            <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
                <input 
                    {...register("email", {
                        required: "Email is required", 
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })} 
                    placeholder="Email" 
                />
                <span>
                    {errors?.email?.message}
                </span>
                <input 
                    {...register("firstName", {
                        required: "First Name is required", 
                        validate: {
                            noLala: (value) => 
                                value.includes("lala") ? "No lalas allowed" : true,
                            noNini: (value) => 
                                value.includes("nini") ? "No ninis allowed" : true,
                        }
                    })} 
                    placeholder="First Name" 
                />
                <span>
                    {errors?.firstName?.message}
                </span>
                <input 
                    {...register("lastName", {required: "Last Name is required"})} placeholder="Last Name" 
                />
                <span>
                    {errors?.lastName?.message}
                </span>
                <input 
                    {...register("username", {
                        required: "Username is required", 
                        minLength: {
                            value: 10,
                            message: "Your username is too short."
                        }})} 
                    placeholder="Username" 
                />
                <span>
                    {errors?.username?.message}
                </span>
                <input 
                    {...register("password", {
                        required: "Password is required", 
                        minLength: {
                            value: 5, 
                            message: "Your password is too short."
                        }
                    })} 
                    placeholder="Password" 
                />
                <span>
                    {errors?.password?.message}
                </span>
                <input 
                    {...register("passwordAgain", {
                        required: "Password is required", 
                        minLength: {
                            value: 5, 
                            message: "Your password is too short."
                        }
                    })}
                    placeholder="Password again" 
                />
                <span>
                    {errors?.passwordAgain?.message}
                </span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
} */

export default ToDoList;