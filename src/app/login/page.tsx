// app/login/page.js
'use client';
import { signIn } from 'next-auth/react';

const Login = () => {
  const handleLogin = async () => {
    await signIn('email', { email: 'user@example.com' });
  };

  return (
    <div>
      <h1>Вход</h1>
      <button onClick={handleLogin}>Войти с Email</button>
    </div>
  );
};

export default Login;
