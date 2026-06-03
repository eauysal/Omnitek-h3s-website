import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  phone: string
  business: string
  businessType: string
  note: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData

    // Validate required fields
    if (!body.name || !body.phone || !body.business || !body.businessType) {
      return Response.json(
        { error: "Tüm zorunlu alanlar doldurulmalıdır." },
        { status: 400 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `Yeni Randevu Talebi - ${body.business}`,
      html: `
        <h2>Yeni Randevu Talebi Alındı</h2>
        <p><strong>Ad Soyad:</strong> ${body.name}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>İşletme Adı:</strong> ${body.business}</p>
        <p><strong>İşletme Türü:</strong> ${body.businessType}</p>
        <p><strong>Not:</strong> ${body.note || "Yok"}</p>
      `,
    }

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: body.phone, // This might be email, adjust if you have email field
      subject: "H3S - Randevu Talebiniz Alındı",
      html: `
        <h2>Merhaba ${body.name},</h2>
        <p>Randevu talebiniz başarıyla alındı.</p>
        <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
        <p>Teşekkür ederiz!</p>
        <p><strong>H3S Takımı</strong></p>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    // Uncomment the line below if you add email field to form
    // await transporter.sendMail(userMailOptions)

    return Response.json({ success: true, message: "Randevu talebi gönderildi!" })
  } catch (error) {
    console.error("Email error:", error)
    return Response.json(
      { error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    )
  }
}
