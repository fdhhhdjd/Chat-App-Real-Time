import { Routes, Route } from "react-router-dom";
import "./App.css";

import Chat from "./Component/Chat/Chat";
import Join from "./Component/Join/Join";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
