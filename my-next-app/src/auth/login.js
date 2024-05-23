
export async function signIn({ email, password }) {
    const mockUser = {
      email: process.env.ADMIN_LOGIN_EMAIL,
      password: process.env.ADMIN_LOGIN_PASSWORD
    }
  
    if (email === mockUser.email && password === mockUser.password) {
      return true

    } else {
      const error = new Error('Invalid credentials')
      error.type = 'CredentialsSignin'
      throw error
    }
  }
  