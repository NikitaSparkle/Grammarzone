import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Reading from "./components/reading/Reading";
import Writing from "./components/writing/Writing";
import Translate from "./components/translate/Translate";
import Materials from "./components/materials/Materials";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/adminLogin/AdminLogin";
import User from "./components/user/User";
import Test from "./components/test/Test";
import Registration from "./components/registration/Registration";

function App() {
  return (
      <>
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route exact path="/translate" element={<Translate/>}/>
              <Route exact path="/reading" element={<Reading/>}/>
              <Route exact path="/writing" element={<Writing/>}/>
              <Route exact path="/materials" element={<Materials/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/user" element={<User/>}/>
              <Route exact path="/admin" element={<AdminLogin/>}/>
              <Route exact path="/adminSite" element={<Admin/>}/>
              <Route exact path="/test/:id" element={<Test/>}/>
              <Route exact path="/registration" element={<Registration/>}/>
            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;
