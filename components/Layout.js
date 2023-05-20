import Navbar from "./Navbar";
import 'tailwindcss/tailwind.css';
import { useEffect } from "react";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => console.log(url)





        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (<>
        <Navbar />


        <main className="container py-5">
            {children}
        </main>


    </>)
}

export default Layout; 