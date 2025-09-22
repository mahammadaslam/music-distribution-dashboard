import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const s = localStorage.getItem('session');
      if (s) router.replace('/dashboard');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Enter username and password');
      return;
    }
    localStorage.setItem('session', JSON.stringify({ username }));
    router.push('/dashboard');
  };

  return (
    <div className="center-wrap">
      <form className="card login-card" onSubmit={handleSubmit}>
        <h1>LabelLift — Login</h1>
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Sign in</button>
      </form>
    </div>
  );
}
