import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import styled from "styled-components";
import "./App.css"
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";

import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Projects from "./pages/Projects.tsx";
import Research from "./pages/Research.tsx";
import Skills from "./pages/Skills.tsx";

const Page = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    
    width:100%;
    margin:0;
    padding:0;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        margin:0;
        padding: 0;
    }
`;

function Root(){
    return (
        <Page>
            <Header />
            <StyledContainer>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/employment" element={<Employment />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </StyledContainer>
            <Footer />
        </Page>
    )
}

const router=createBrowserRouter(
    [{path:"*", Component: Root},]
)

export default function App() {
    return <RouterProvider router={router} />
}


