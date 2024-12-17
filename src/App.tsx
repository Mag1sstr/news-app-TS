import { useContext } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div className={`conteiner ${context?.isDark ? "dark" : null}`}>
        <Main />
      </div>
    </>
  );
}

export default App;
