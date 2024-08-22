import { Navigate, Route, Routes} from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from './Navbar.jsx';

export const MainApp = () => {
  return (
    <>
      <div>MainApp</div>
      <hr/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to={'/login'} />} />
      </Routes>
    </>
  )
}
