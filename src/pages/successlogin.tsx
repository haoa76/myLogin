import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Successlogin() {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate('/userinfo');
    }, [navigate]);

    return (
        <div>
            <h1>登录成功</h1>
        </div>
    )
}