import React, { useState } from 'react';

function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Assuming simple validation that username is not empty
    if (username.trim() !== '') {
      setUser(username); // Update user state in App component
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
