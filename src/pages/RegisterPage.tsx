import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/')
    }
    return (
        <div>
            <h1>这是注册界面！</h1>
            <button onClick={handleClick}>返回登录界面</button>
        </div>
    )
}
