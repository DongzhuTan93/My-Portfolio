import { useState } from 'react'

function Lax() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username)
    console.log('Password:', password)
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="w-full max-w-2xl  bg-white shadow-lg rounded-lg p-10 mt-40">
        <h2 className="text-6xl font-bold mb-10 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-10">
            <label htmlFor="username" className="text-2xl block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-10">
            <label htmlFor="password" className="text-2xl block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-2xl w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Lax

// https://tailwindcss.com/docs/ring-color
// https://tailwindcss.com/docs/border-radius