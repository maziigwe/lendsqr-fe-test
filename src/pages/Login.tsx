import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'

const LoginPage: React.FC = () => {
    const props = {
        title: 'Login',
        description: 'Welcome to the login page'
    }
    return (
        <Layout {...props}>
            <AppIcon /> <h1>Login page!</h1>
        </Layout>
    )
}

export default LoginPage
