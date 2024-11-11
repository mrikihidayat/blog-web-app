import { Outlet } from "react-router-dom"
import { Header, Footer } from "../../organisms"
import "./MainLayout.css"

function MainLayout() {
    return(
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
} 

export default MainLayout;