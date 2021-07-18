import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserEditPage from './pages/users/UserEditPage';
import LoginPage from './pages/users/LoginPage';
import JoinPage from './pages/users/JoinPage';
import LogoutPage from './pages/users/LogoutPage';
import UserDeletePage from './pages/users/UserDeletePage';
import WritePage from './pages/blogs/WritePage';
import EditPage from './pages/blogs/EditPage';
import DeletePage from './pages/blogs/DeletePage';
import SearchPage from './pages/blogs/SearchPage';


function App() {
  return (
    <Route path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/" component={JoinPage} />
    <Route path="/" component={LogoutPage} />
    <Route path="/" component={UserEditPage} />
    <Route path="/" component={UserDeletePage} />
    <Route path="/" component={WritePage} />
    <Route path="/" component={EditPage} />
    <Route path="/" component={SearchPage} />
    <Route path="/" component={DeletePage} />
    

  );
}

export default App;
