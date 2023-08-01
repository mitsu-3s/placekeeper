import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Link from 'next/link'
import { SigninFormSchema } from '@/libs/validation/form'
import { SigninForm } from '@/libs/interface/form'

const Test = () => {
    const [isLoading, setIsLoading] = useState(false)

    const initialValues = {
        email: '',
    }

    const handleSignIn = async (values: SigninForm) => {
        if (!isLoading) {
            setIsLoading(true)
            await signIn('email', {
                email: values.email,
                callbackUrl: process.env.NEXT_PUBLIC_URL + '/placemap',
            })
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-white flex items-center justify-center h-screen">
            <div className="py-6 sm:py-8 lg:py-12 w-full max-w-lg mx-auto">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">
                        Sign in to <Link href="/">Place Keeper</Link>
                    </h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SigninFormSchema}
                        onSubmit={handleSignIn}
                    >
                        <Form className="mx-auto max-w-lg rounded-lg border">
                            <div className="flex flex-col gap-4 p-4 md:p-8">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    />

                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`block rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base
                                        ${
                                            isLoading
                                                ? 'bg-indigo-200 cursor-not-allowed'
                                                : 'bg-indigo-500 hover:bg-indigo-400 focus-visible:ring active:bg-indigo-600'
                                        }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Sign in'}
                                </button>
                            </div>
                            <div className="flex items-center justify-center bg-gray-100 p-4">
                                <p className="text-center text-sm text-gray-500">
                                    New registration is also available here{' '}
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Test
