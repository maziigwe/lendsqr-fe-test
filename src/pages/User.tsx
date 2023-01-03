import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'

const UserInfoPage: React.FC = () => {
    const props = {
        title: 'User Details',
        description: 'Welcome to the user details page'
    }
    return (
        <Layout {...props}>
            <AppIcon /> <h1>Welcome to user details page!</h1>
        </Layout>
    )
}

export default UserInfoPage
