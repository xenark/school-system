'use client'
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import Heading from "../../ui/heading";
import Input from "../../ui/inputs/input";
import Button from "../../ui/button";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import AuthPage from "../../ui/authentication_page";
import { useState } from "react";
import LinkStyle from "@/app/link";


const Login = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '', password: ''
        }
    })

    const submitHandler: SubmitHandler<FieldValues> = (data) => {

        async function signInUser() {
            try {
                setIsLoading(true);
                const signin = await signIn('credentials', {
                    ...data,
                    redirect: false,
                })
                if (signin?.ok) {
                    toast.success('Login success...');
                    router.refresh();

                }
                if (signin?.error) toast.error('Something went wrong...')
            } finally {
                setIsLoading(false)
            }
        }

        return signInUser()

    }

    const content = (
        <div>
            <Heading align="left"
                title='Log in to your account'

            />

            <div className='text-neutral-500
            font-bold mt-4 text-center'>
                <div className='
               justify-start flex flex-row  gap-2'>
                    <div className="green-200 outline-green-500">
                        {'First time using EaseMS?'}
                    </div>
                    <LinkStyle
                        value='Create an account'
                        className=' text-blue-500 hover:underline cursor-pointer'
                        link={'/landingpage/register'}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-6'>
                <hr />
                <Button
                    outline
                    def
                    icon={FcGoogle}
                    label='Continue with Google'
                />
                <Button
                    def
                    outline
                    icon={AiFillGithub}
                    label='Continue with Github'
                />

                <div className="my-4 text-neutral-500 flex justify-center items-center w-full">
                    <span className="w-10 h-[3px] bg-gray-200"></span>
                    <span className="mx-2">{'Or with email and password'}</span>
                    <span className="w-10 h-[3px] bg-gray-200"></span>
                </div>

                <Input
                    id='email'
                    label='Email'
                    type="email"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required />

                <Input
                    id='password'
                    label='Password'
                    type="password"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required />

                <div
                    className='
                    text-blue-500 text-end hover:underline cursor-pointer'>
                    {'I forgot my password'}
                </div>
                <Button
                    label='Sign in'
                    className="bg-blue-900 text-white w-max px-4"
                />
            </div>
        </div>
    )



    return (
        <AuthPage
            actionLabel='Continue'
            disabled={false}
            body={content}
        />
    );
};

export default Login;