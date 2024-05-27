import { NextResponse } from "next/server"
import * as FormData from 'form-data'
import Mailgun from 'mailgun.js'
import fs from 'fs'
import path from 'path'


// In Next.js, any file inside the pages/api directory is treated as an API endpoint.
export async function POST(req, res)  {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  
  }

  const mailgun = new Mailgun(FormData)

  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere"
  })

  if(!process.env.MAILGUN_API_KEY || !process.env.ADMIN_EMAIL ) {
    return NextResponse("Incomplete credentials." , {status: 500})
  }


  try {
    const postData = await req.json()

    // Mailgun data setup.
    const data = {
      from: `${postData.name} <${postData.email}> `,
      to: [process.env.ADMIN_EMAIL],
      name:postData.name,
      email:postData.email,
      subject: postData.subject,
      html: `<h1>You have received new messages, please log in to view the messages: ${process.env.WEB_URL}/login}</h1>`

    }

    // Send email.
    const response = await mg.messages.create(process.env.MAILGUN_SANDBOX_URL, data)

     // File storage path.
     const filePath = path.join(process.cwd(), 'public/hireMeData.json')
     const existingData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : []
     existingData.push(postData)

     //The fs.readFileSync() method is an inbuilt application programming interface of the fs module which is used to read the file and return its content. 
     //The fs.existsSync() method is used to synchronously check if a file already exists in the given path or not. It returns a boolean value which indicates the presence of a file.
     //https://www.geeksforgeeks.org/node-js-fs-existssync-method/
     //https://www.geeksforgeeks.org/node-js-process-cwd-method/
 
     // Write data to file.
     fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8')
   

    return NextResponse.json({message:"Email sent successfully!" }, {status: 200})
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({message: "Failed to send email!" }, {status: 500})
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