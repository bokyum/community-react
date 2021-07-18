
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
    <>
      <Route path='/' component={HomePage} exact/>

      <Route path="/login" component={LoginPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/@:id/edit" component={UserEditPage} exact/>
      <Route path="/@:id/delete" component={UserDeletePage} exact/>

      {/*블로그 문서 */}
      <Route path="/write" component={WritePage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/delete" component={DeletePage} />
    </>

  );
}

export default App;
