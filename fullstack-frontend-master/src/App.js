import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AllPost from "./pages/AllPost";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import PostViewPage from "./Components/PostViewPage";
import AddPost from "./users/AddPost";
import EditPost from "./users/EditPost";
import ViewPost from "./users/ViewPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/PostViewPage" element={<PostViewPage />} />
          <Route exact path="/AddPost" element={<AddPost />} />
          <Route exact path="/allpost" element={<AllPost />} />
          <Route exact path="/editPost/:id" element={<EditPost />} />
          <Route exact path="/viewPost/:id" element={<ViewPost />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
