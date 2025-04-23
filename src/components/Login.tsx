import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { GoogleOutlined, GithubOutlined, RobotOutlined } from '@ant-design/icons';

const GITHUB_CLIENT_ID = 'Ov23liBqZCMVGBRME5Xz'; 
const REDIRECT_URI = 'http://localhost:3000/github/callback'; 

export default function Login() {
    return (
        <div className='myLogin'>
            <img src="https://www.bytebase.com/images/logo.svg" alt="Bytebase Logo" style={{ width: '320px', height: '52px' }} />
            <h2 style={{ marginTop: '20px' }}>欢迎</h2>
            <p>登录 Bytebase 以继续使用 Bytebase Hub。</p>
            {/* 实现登录选择按钮 */}
            <Form style={{ marginTop: '20px' }}>
                <Form.Item>
                    <Button icon={<GoogleOutlined />} style={{ width: '320px', height: '52px', fontSize: '16px' }}>继续使用 Google</Button>
                </Form.Item>
                <Form.Item>
                    <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}>
                        <Button icon={<GithubOutlined />} style={{ width: '320px', height: '52px', fontSize: '16px' }}>继续使用 Github</Button>
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button icon={<RobotOutlined />} style={{ width: '320px', height: '52px', fontSize: '16px' }}>继续使用 Microsoft Account</Button>
                </Form.Item>
            </Form>
            <div className="or-divider">或</div>
            <Form>
                <Form.Item
                    name={'email'}
                    rules={[{ required: true, message: '请输入电子邮件地址' }, { type: 'email', message: '请输入有效的电子邮件地址' }]}
                >
                    <Input placeholder='电子邮件地址*' style={{ width: '320px', height: '52px', fontSize: '16px' }} />
                </Form.Item>
                <Form.Item>
                    <Button style={{ width: '320px', height: '52px', fontSize: '16px', backgroundColor: '#4F46E5', color: '#fff' }}>继续</Button>
                </Form.Item>
            </Form>
            <p style={{ textAlign: "left" }}>没有帐户？ <a href="/register">注册</a></p>
        </div>
    )
}