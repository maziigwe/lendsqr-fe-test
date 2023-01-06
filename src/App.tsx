import { FourOhFour } from 'pages/404'
import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from 'routes/ProtectedRoute'
import { ROUTES } from 'utils/constants'

const Home = lazy(() => import('pages/Home'))
const LoginPage = lazy(() => import('pages/Login'))
const DashboardPage = lazy(() => import('pages/Dashboard'))
const UsersPage = lazy(() => import('pages/Users'))
const UserInfoPage = lazy(() => import('pages/User'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Switch>
                <Route exact path={ROUTES.home} component={LoginPage} />
                <Route exact path={ROUTES.login} component={LoginPage} />

                <PrivateRoute
                    path={ROUTES.dashboard}
                    component={DashboardPage}
                />
                <Route exact path={ROUTES.users} component={UsersPage} />
                <Route exact path={ROUTES.user} component={UserInfoPage} />
                <Route exact path={ROUTES.notFound} component={FourOhFour} />
            </Switch>
        </Suspense>
    )
}

export default App
