import React from 'react'
//import { useAppContext } from 'containers/App/AppContext'
import { Route, Redirect } from 'react-router-dom'
import ROUTES from 'utils/constansts'
import { PrivateRouteProps } from 'interfaces/RouteProps'

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
    component: Component,
    ...routeProps
}) => {
    // const { isSignedIn } = useAppContext()
    const isSignedIn = true
    return (
        <Route
            {...routeProps}
            render={(props) =>
                isSignedIn ? <Component /> : <Redirect to={ROUTES.login} />
            }
        />
    )
}

export default PrivateRoute
