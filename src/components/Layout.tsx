import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
    title: string
    description?: string
    children?: object
}

const Layout: React.FC<Props> = ({ ...props }) => {
    const {
        children,
        title = props.title,
        description = props.description
    } = props

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{title}</title>
                <meta name='description' content={description} />
            </Helmet>

            {children}
        </>
    )
}

export { Layout }
