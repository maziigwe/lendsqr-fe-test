import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'

const UsersPage: React.FC = () => {
    const props = {
        title: 'Users',
        description: 'Welcome to the users page'
    }
    return (
        <Layout {...props}>
            <AppIcon /> <h1>Welcome to the users page</h1>
        </Layout>
    )
}

export default UsersPage
