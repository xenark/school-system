'use client'
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import Heading from "../../ui/heading";
import Input from "../../ui/inputs/input";
import Button from "../../ui/button";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'

import AuthPage from "../../ui/authentication_page";
import { useState } from "react";
import LinkStyle from "@/app/link";


const Register = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
          name: '',  email: '', password: ''
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
                title='Join the most used SMGTS'

            />

            <div className='text-neutral-500
            font-bold mt-4 text-center'>
                <div className='
               justify-start flex flex-row  gap-2'>
                    <div className="green-200">
                        {'Already have an account?'}
                    </div>
                   
                    <LinkStyle
                        value='Sign in'
                        className=' text-blue-500 hover:underline cursor-pointer'   
                        link={'/landingpage/login'}
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
                outline
                def
                    icon={AiFillGithub}
                    label='Continue with Github'
                />
                <div className="my-4 text-neutral-500 flex justify-center items-center w-full">
                    <span className="w-10 h-[3px] bg-gray-200"></span>
                    <span className="mx-2">{'Or with email and password'}</span>
                    <span className="w-10 h-[3px] bg-gray-200"></span>
                </div>

                <Input
                    id='name'
                    label='Username'
                    type="name"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required />

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

                <Button

                    label='Register'
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

export default Register;