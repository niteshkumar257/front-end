import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/chat";
import Home from "./pages/Home";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
