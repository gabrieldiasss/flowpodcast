import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

export default function RoutesComponent () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}  />
            </Routes>
        </BrowserRouter>
    )
}