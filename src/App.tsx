import React from 'react';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import Successlogin from './pages/successlogin';
import UserInfoGitHub from './components/UserInfoGitHub';
import GitHubCallback from './components/GitHubCallback';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    html_url: string;
}

function App() {
    const [user, setUser] = React.useState<GitHubUser | null>(null);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('githubUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Loginpage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/successlogin" element={<Successlogin />}></Route>
                    <Route path="/github/callback" element={<GitHubCallback />}></Route>
                    <Route path="/userinfo" element={user ? <UserInfoGitHub user={user} /> : <Navigate to="/" />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;