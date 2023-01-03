import React from 'react'
import { Layout } from 'components'
import { AppIcon } from 'components/atoms/AppIcon'

const DashboardPage: React.FC = () => {
    const props = {
        title: 'Dashboard',
        description: 'Welcome to the dashboard page'
    }
    return (
        <Layout {...props}>
            <AppIcon /> <h1> Welcome to the dashboard page</h1>
        </Layout>
    )
}

export default DashboardPage
