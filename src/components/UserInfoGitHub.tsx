import React from 'react';

interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    html_url: string;
}

export default function UserInfoGitHub({ user }: { user: GitHubUser }) {
    return (
        <div>
            <img src={user.avatar_url} alt="User Avatar" />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        </div>
    )
}