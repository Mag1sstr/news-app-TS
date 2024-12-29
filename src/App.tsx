import { useContext } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ThemeContext } from "./contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";

function App() {
  const context = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <Header />
      <div className={`conteiner ${context?.isDark ? "dark" : null}`}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
