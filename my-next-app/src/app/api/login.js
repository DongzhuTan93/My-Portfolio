import { signIn } from 'auth'
 
export default async function handler(req, res) {
  try {
    const { email, password } = req.body
    await signIn('credentials', { email, password }) // The signIn method checks the credentials against stored user data.
 
    res.status(200).json({ success: true })
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}

// Inspiration: https://nextjs.org/docs/pages/building-your-application/authentication