import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainPage></MainPage>}></Route>
                <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
