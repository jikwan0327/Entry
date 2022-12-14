import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import NoticeBoardPage from "./Pages/NoticeBoardPage";
import WriterPage from "./Pages/WritePage";
import MyPage from "./Pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainPage></MainPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/board" element={<NoticeBoardPage></NoticeBoardPage>}></Route>
        <Route path="/write" element={<WriterPage></WriterPage>}></Route>
        <Route path="/my" element={<MyPage></MyPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
