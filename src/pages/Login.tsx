import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'
import signing_image from 'assets/images/pablo-sign-in.png'
import { FormInput } from 'components/atoms/FormInput'
import './../styles/login.css'
import { Button } from 'components/atoms/Button'
import { NavBar } from 'components/common/NavBar'

const LoginPage: React.FC = () => {
    const props = {
        title: 'Login',
        description: 'Welcome to the login page'
    }
    return (
        <Layout {...props}>
            <div className='flex flex-col justify-center h-screen'>
                <div className='flex flex-col lg:flex-row  justify-center items-center h-full'>
                    <div className='flex flex-col h-full w-full lg:w-1/2 bg-white'>
                        <NavBar />
                        <div className='flex flex-col justify-center items-center h-full  items-center '>
                            <img
                                src={signing_image}
                                alt='a photo on the login page'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center h-full w-full lg:w-1/2 custom-bg-color '>
                        <div className='w-full   px-10 mx-10 lg:w-3/5'>
                            <div>
                                <h1 className='text-primary_text_color welcome_text'>
                                    Welcome!
                                </h1>
                                <p className='text-secondary_text_color_1 login_subtitle'>
                                    Enter details to login
                                </p>
                            </div>
                            <form className='my-10 '>
                                <FormInput
                                    name='email'
                                    id='email'
                                    key='email'
                                    type='email'
                                    placeholder='Email'
                                />
                                <FormInput
                                    name='password'
                                    id='password'
                                    key='password'
                                    type='password'
                                    placeholder='Password'
                                />
                                <Button text='Log in' path='/dashboard' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage
