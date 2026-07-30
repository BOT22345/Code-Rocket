import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Rocket — Turn gaming into programming",
  description:
    "Level up your coding skills with fun, practical, and engaging tech lessons. Play your way to becoming a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning data-gradient="cosmic">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const gradient = localStorage.getItem('gradient-theme') || 'cosmic';
                  document.documentElement.setAttribute('data-gradient', gradient);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-bg text-fg transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
