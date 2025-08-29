import Header from "@/components/features/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-container">
        <Header />
        <main className="padding-container">{children}</main>
      </body>
    </html>
  );
}
