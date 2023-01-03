import { RouteProps } from 'react-router-dom'

export type PrivateRouteProps = {
    path: RouteProps['path']
    component: React.ElementType
}
