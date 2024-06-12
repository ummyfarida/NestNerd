import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserList from "./components/UserList";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";
// import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Comment from "./pages/Comment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/comment" element={<Comment/>}/>
        {/* <Route path="edit/:id" element={<EditUser/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;