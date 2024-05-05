import * as FormData from 'form-data'
import Mailgun from 'mailgun.js'


// In Next.js, any file inside the pages/api directory is treated as an API endpoint.
async function testMailgun () {
  const mailgun = new Mailgun(FormData)
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'
  })

  try {
    const data = {
      from: process.env.MAILGUN_SANDBOX_URL,
      to: process.env.ADMIN_EMAIL,
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!',
      html: '<h1>Testing some Mailgun awesomeness!</h1>'

    }

    const response = await mg.messages.create(process.env.MAILGUN_SANDBOX_URL, data)
    console.log(response)
  } catch (error) {
    console.error('Error:', error)
  }
}

testMailgun()
// Inspiration: https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com
// https://nextjs.org/docs/getting-started/project-structure
