import formData from 'form-data'
import Mailgun from 'mailgun.js'

// In Next.js, any file inside the pages/api directory is treated as an API endpoint.
async function testMailgun() {
  const mailgun = new Mailgun(formData)
  const mg = mailgun.client({
      username: 'api',
      key: 'd3Jx9whsLzTR3BCeLaHp'
  })

  try {
      const data = {
          from: 'http://localhost:3000/',
          to: 'tandongzhu@gmail.com',
          subject: 'Hello',
          text: 'Testing some Mailgun awesomeness!'
      }

      const response = await mg.messages.create('http://localhost:3000/', data)
      console.log(response)
  } catch (error) {
      console.error('Error:', error)
  }
}

testMailgun()

// Inspiration: https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com