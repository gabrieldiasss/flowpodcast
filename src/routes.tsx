import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Episodes from './pages/Episodes'

export default function RoutesComponent () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}  />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
        </BrowserRouter>
    )
}