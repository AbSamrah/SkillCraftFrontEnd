//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/navbar";
import Users from "./components/users";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import AddUser from "./components/adduser";
import SignUp from "./components/signup";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes className="content">
        <Route path="/users" Component={Users} />
        <Route path="/users/adduser" Component={AddUser} />
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </div>
  );
}

export default App;
