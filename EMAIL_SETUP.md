# Email Setup Instructions

## How to Set Up Email Notifications

### 1. Using Gmail (Recommended for testing)

1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer" (or your device)
5. Copy the generated 16-character password
6. Update `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
```

### 2. Using Outlook/Office365

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### 3. Using Custom SMTP Server

```
SMTP_HOST=your-mail-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

### 4. Setting the Notification Email

Update the `NOTIFICATION_EMAIL` in `.env.local` with the email address where you want to receive form submissions:
```
NOTIFICATION_EMAIL=your-email@example.com
```

## Testing

After configuring the environment variables:
1. Restart the development server: `npm run dev`
2. Fill out the contact form at `http://localhost:3000#iletisim`
3. Submit the form
4. Check your notification email

## Troubleshooting

- **Gmail "Less secure app access" error**: Use App Passwords instead (see instructions above)
- **"EAUTH: Invalid credentials"**: Check your SMTP_USER and SMTP_PASSWORD
- **Port 465 issues**: Try port 587 with SMTP_SECURE=false
- **Check logs**: Look at terminal output for error messages when submitting the form

## Next Steps (Optional)

- Add database storage (MongoDB, PostgreSQL)
- Send confirmation email to user (add email field to form)
- Use email templates for better formatting
- Integrate with email marketing service (SendGrid, Mailgun)
