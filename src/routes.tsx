import {  Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Episodes from './pages/Episodes'
import Saved from './pages/Saved'
import Episode from './pages/Episode'

export default function RoutesComponent () {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />}  />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/episode/:id" element={<Episode />} />
        </Routes>
    )
}