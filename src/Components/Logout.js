import { Route, Navigate, Routes } from 'react-router-dom';

function Logout() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}

export default Logout;