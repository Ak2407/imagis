export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
