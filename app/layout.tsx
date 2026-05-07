export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Car Rental CRM - DriveEase Rentals</title>
      </head>
      <body>{children}</body>
    </html>
  )
}