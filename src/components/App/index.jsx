
import Main from './../../pages/Main'; import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Layouts from './../../pages/Layouts';
import PostsList from './../../pages/PostsList';
import Post from './../../pages/Post';
import Page404 from '../../pages/Page_404';
import EditPost from './../../pages/EditPost';
import NewPost from '../../pages/NewPost';
import LoginPage from './../../pages/LoginPage';
import RequireAuth from './../../hoc/RequireAuth';
import {AuthProvider} from '../../hoc/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Main />} />
                <Route path={"posts"} element={<PostsList />} />
                <Route path={"login"} element={<LoginPage />} />
                <Route path={"posts-old"} element={<Navigate to={'/posts'} replace />} />
                <Route path={"posts/:id"} element={<Post />} />
                <Route path={"posts/:id/edit"} element={<RequireAuth>
                    <EditPost />
                </RequireAuth>} />
                <Route path={"posts/newPost"} element={<RequireAuth>
                    <NewPost />
                </RequireAuth>} />
                <Route path={'*'} element={<Page404 />} />
            </Route>
        </Routes>
        </AuthProvider>
    );
}

export default App;