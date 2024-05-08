
// import { NextResponse } from "next/server";

import * as FormData from 'form-data'
import Mailgun from 'mailgun.js'


// In Next.js, any file inside the pages/api directory is treated as an API endpoint.
export default async function POST(req, res)  {

  const mailgun = new Mailgun(FormData)

  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere"
  })

  if(!process.env.MAILGUN_API_KEY || !proces.env.ADMIN_EMAIL ) {
    return res.status(500).json({ error: "Incomplete credentials." })
  }

  try {
    const postData = req.body
    const data = {
      from: process.env.MAILGUN_SANDBOX_URL,
      to: process.env.ADMIN_EMAIL,
      subject: postData.subject || "Contact from email",
      text: postData.text || "Testing some Mailgun awesomeness!",
      html: `<h1>${postData.text || "Testing some Mailgun awesomeness!"}</h1>`

    }

    const response = await mg.messages.create(process.env.MAILGUN_SANDBOX_URL, data)
 
    console.log(response)

    return res.status(200).json({ message: "Email sent successfully!" })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: "Failed to send email." })
  }
}

















// Inspiration: https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com
// https://nextjs.org/docs/getting-started/project-structure

/*// Use Postman to send the GET request to: http://localhost:3000/api/.
export async function GET() {
  return NextResponse.json({ message: "Hello World from a GET requset" }, { status: 200 });
}

// Use Postman to send the POST request to: http://localhost:3000/api/.
export async function POST() {
  return NextResponse.json({ message: "Hello World from a POST request" }, { status: 200 });
}*/

// https://stackoverflow.com/questions/75418329/how-do-you-put-api-routes-in-the-new-app-folder-of-next-js
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://nextjs.org/docs/app/building-your-application/routing