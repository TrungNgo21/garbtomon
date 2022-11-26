import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="font-[Montserrat] flex flex-col justify-between">
        <Navbar />
        <main className="">
          <Routes>
            <Route path = "/" element={<Home />}></Route>
            <Route path = "/post" element={<Post />}></Route>
            <Route path = "/register" element={<Register />}></Route>
            <Route path = "/login" element={<Login />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
