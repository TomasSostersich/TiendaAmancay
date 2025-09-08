import { Outlet, useLocation } from "react-router-dom";
import {Navbar} from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/Home/Banner";
import { Sheet } from "../components/shared/Sheet";
import { useGlobalStore } from "../store/global.store";
import { NavbarMobile } from "../components/shared/NavbarMobile";

    export const RootLayout = () => {
	
        const { pathname } = useLocation();

        const isSheetOpen = useGlobalStore(state => state.isSheetOpen)
        const activeNavMobile = useGlobalStore(state => state.activeNavMobile);
    
    return (
    <div className="h-screen flex flex-col">
        <Navbar />
        
		{pathname === '/' && <Banner />}

        <main className="container my-8 flex-1">
            <Outlet />
        </main>
        
        {isSheetOpen && <Sheet />}
        {activeNavMobile && <NavbarMobile />}

        <Footer />
    </div>
)};