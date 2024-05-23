
export async function signIn({ email, password }) {
    const mockUser = {
      email: 'testuser@example.com',
      password: 'password123'
    }
  
    if (email === mockUser.email && password === mockUser.password) {
      return true

    } else {
      const error = new Error('Invalid credentials')
      error.type = 'CredentialsSignin'
      throw error
    }
  }
  