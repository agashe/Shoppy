import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

export default function App() {
    return (
        <>
            <Header />

            <main>
                <Container className="my-5">
                    <Outlet />
                </Container>
            </main>
            
            <Footer />
        </>
    );
}