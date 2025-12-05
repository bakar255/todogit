import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full">
    <body className="h-full w-full m-0 p-0">
        {children}
      </body>
    </html>
  );
}
