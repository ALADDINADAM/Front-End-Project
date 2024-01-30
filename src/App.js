import {BrowserRouter , Routes, Route, Link} from "react-router-dom";
import './App.css';
import ListUser from './components/ListUser';
import CreatUser from "./components/CreatUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <h5>React CURD Oprition Using PHP API & Mysqli</h5>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">User Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser/>} />
        <Route path="user/create" element={<CreatUser/>} />
        <Route path="user/:id/edit" element={<EditUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
