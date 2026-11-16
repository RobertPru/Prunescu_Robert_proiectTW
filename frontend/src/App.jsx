import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TemePage from "./pages/TemePage.jsx";
import TemaDetaliuPage from "./pages/TemaDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<TemePage />} />
                <Route path="/teme/:id" element={<TemaDetaliuPage />} />
                <Route path="/despre" element={<DesprePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}