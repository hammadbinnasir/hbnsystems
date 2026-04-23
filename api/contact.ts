import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure the SMTP transporter
  // Using Gmail as the service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'systemshbn@gmail.com',
      pass: process.env.EMAIL_PASS, // This should be a Gmail App Password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'systemshbn@gmail.com',
      replyTo: email,
      subject: `HBN Systems Inquiry: Message from ${name}`,
      text: `You have received a new message from your website contact form.\n\n` +
            `--- Details ---\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message:\n${message}\n\n` +
            `--- End of message ---`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #333;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}
 // Force build: 16:26
