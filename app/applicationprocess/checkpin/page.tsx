'use client'
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


const Checkpin = () => {

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
                secondarytitle='Enter serial and pincode to apply'

            />

            <div className='text-neutral-500
            font-bold mt-4 text-center'>
                <div className='
               justify-start flex flex-row  gap-2'>
                    <div className="green-200 outline-green-500">
                        {`Don't have a pincode?`}
                    </div>
                    <LinkStyle
                        value='Get Pincode'
                        className=' text-blue-500 hover:underline cursor-pointer'
                        link={'/landingpage/register'}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-6'>
                <hr />


                <Input
                    id='serial'
                    label='Serial No.'
                    type="text"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required />

                <Input
                    id='pin'
                    label='Pin Code'
                    type="text"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required />

                <LinkStyle
                    className="bg-green-900 text-white w-max py-2 px-4 rounded-lg"
                    link={"applicationprocess/start"} value={"Sign in"}
                />
                <hr />
                <Button
                    label='Get Pincode'
                    className="bg-blue-900 text-white w-max px-4"
                />
                <hr />
                <Button
                    label='Check Admission Status'
                    className="bg-orange-900 text-white w-max px-4"
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

export default Checkpin;