import { useRouter } from 'next/router'

 
function LoginPage() {
  const router = useRouter()
 
  async function handlelogin (event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/hireme')
    } else {
      console.error('Sorry, you can not login.')
    }
  }
 
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="w-full max-w-2xl  bg-white shadow-lg rounded-lg p-10 mt-40">
        <h2 className="text-6xl font-bold mb-10 text-center text-blue-500 ">Login</h2>
        <form onSubmit={handlelogin}>
          <div className="mb-10 py-3">
            <label htmlFor="email" className="text-2xl block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-2xl border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-10 py-3">
              <label htmlFor="password" className="text-2xl block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Email"
                className="w-full px-4 py-3 text-2xl border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
          </div>
          <button type="submit" className="text-2xl w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-700 focus:outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  )

}

export default LoginPage


// https://tailwindcss.com/docs/ring-color
// https://tailwindcss.com/docs/border-radius