import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GITHUB_CLIENT_ID = 'Ov23liBqZCMVGBRME5Xz'; 
const GITHUB_CLIENT_SECRET = '0ff98557a8aad268f445ac329f0dd3fa3bf81a0a'; 
const REDIRECT_URI = 'http://localhost:3000/github/callback'; 


const GitHubCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            fetchGitHubAccessToken(code);
        } else {
            console.error('未找到正确code');
            navigate('/');
        }
    }, [navigate]);

    const fetchGitHubAccessToken = async (code: string) => {
        try {
            const response = await fetch('/api/login/oauth/access_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    client_id: GITHUB_CLIENT_ID,
                    client_secret: GITHUB_CLIENT_SECRET,
                    code: code,
                    redirect_uri: REDIRECT_URI,
                }),
            });
            const data = await response.json();
            if (response.ok && data.access_token) {
                fetchGitHubUser(data.access_token);
            } else {
                console.error('Failed to fetch access token:', data);
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching access token:', error);
            navigate('/');
        }
    };

    const fetchGitHubUser = async (accessToken: string) => {
        try {
            const response = await fetch('/api/user', {
                headers: {
                    'Authorization': `token ${accessToken}`,
                },
            });
            if (response.ok) {
                const user = await response.json();
                localStorage.setItem('githubUser', JSON.stringify(user));
                navigate('/userinfo');
            } else {
                console.error('Failed to fetch user data:', response);
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            navigate('/');
        }
    };

    return <div>Processing...</div>;
};

export default GitHubCallback;