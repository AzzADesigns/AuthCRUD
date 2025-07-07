import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPages" // o LoginPage si renombras
import RegisterPage from "./pages/RegisterPage"
import TaskPage from "./pages/TaskPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import NotFound from "./pages/NotFound"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/tasks/new" element={<TaskFormPage />} />
            <Route path="/tasks/1/edit" element={<TaskFormPage />} />

            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
