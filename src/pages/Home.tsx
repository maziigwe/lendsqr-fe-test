import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'

const Home: React.FC = () => {
    const props = {
        title: 'Home',
        description: 'Welcome to the home page'
    }
    return (
        <Layout {...props}>
            <AppIcon /> <h1>Hello World!</h1>
        </Layout>
    )
}

export default Home
