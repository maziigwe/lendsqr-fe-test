import { FourOhFour } from 'pages/404'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </Suspense>
    )
}

export default App
