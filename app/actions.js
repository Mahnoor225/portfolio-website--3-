"use server"

export async function sendMessage(formData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send the email using a service like:
  // - Nodemailer
  // - SendGrid
  // - Resend
  // - EmailJS

  console.log("Message received:", { name, email, message })

  // For demo purposes, we'll just return success
  return {
    success: true,
    message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
  }
}
